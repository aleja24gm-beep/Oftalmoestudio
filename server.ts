import express, { Request, Response } from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json({ limit: '5mb' }));

// Initialize Google GenAI if a real API key exists
const rawApiKey = process.env.GEMINI_API_KEY;
const isRealApiKey = rawApiKey && rawApiKey !== 'MY_GEMINI_API_KEY' && rawApiKey.trim().length > 10;
let aiClient: GoogleGenAI | null = null;
if (isRealApiKey) {
  try {
    aiClient = new GoogleGenAI({ apiKey: rawApiKey });
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
  }
}

// Timeout helper to avoid any hanging network calls
function withTimeout<T>(promise: Promise<T>, timeoutMs: number = 8000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('Timeout esperando respuesta de IA')), timeoutMs)
    )
  ]);
}

// Dynamic client resolver: checks request header/body first, falls back to env
function getGenAIClient(req: Request): GoogleGenAI | null {
  const customKey = (req.headers['x-gemini-api-key'] as string) || req.body?.apiKey;
  if (customKey && typeof customKey === 'string' && customKey.trim().length > 10) {
    try {
      return new GoogleGenAI({ apiKey: customKey.trim() });
    } catch (err) {
      console.error('Failed to initialize GoogleGenAI with custom client key:', err);
    }
  }
  return aiClient;
}

// 0. Status endpoint: verifica si el servidor tiene clave predeterminada
app.get('/api/gemini/key-status', (_req: Request, res: Response) => {
  const hasServerKey = Boolean(rawApiKey && rawApiKey !== 'MY_GEMINI_API_KEY' && rawApiKey.trim().length > 10);
  res.json({ hasServerKey });
});

// 0.1 Test key endpoint: prueba en vivo la validez de una clave con gemini-3.8-flash
app.post('/api/gemini/test-key', async (req: Request, res: Response) => {
  const customKey = (req.headers['x-gemini-api-key'] as string) || req.body?.apiKey || process.env.GEMINI_API_KEY;
  if (!customKey || typeof customKey !== 'string' || customKey.trim().length < 10) {
    return res.status(400).json({ success: false, error: 'Clave API no proporcionada o demasiado corta.' });
  }

  try {
    const testClient = new GoogleGenAI({ apiKey: customKey.trim() });
    const response = await withTimeout(
      testClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: [{ role: 'user', parts: [{ text: 'Responde únicamente con la palabra OK.' }] }],
      }),
      8000
    );

    return res.json({ 
      success: true, 
      message: 'API Key verificada y conectada exitosamente con Gemini.', 
      preview: response.text?.trim() || 'OK' 
    });
  } catch (err: any) {
    console.error('Test key failed:', err?.message);
    return res.status(400).json({ 
      success: false, 
      error: err?.message || 'Error validando la clave API con Google Gemini. Verifica que sea correcta en aistudio.google.com.' 
    });
  }
});

// 1. Endpoint: Responder a consulta o caso clínico con respuesta y aplicación
app.post('/api/gemini/ask-resident-case', async (req: Request, res: Response) => {
  const { question, subspecialty, residencyYear, focus } = req.body;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'La pregunta es requerida.' });
  }

  const activeClient = getGenAIClient(req);

  if (!activeClient) {
    return res.status(200).json({
      fallback: true,
      message: 'API Key no configurada. Se utilizará el motor clínico curado.',
    });
  }

  const systemPrompt = `Eres un Médico Oftalmólogo Especialista y Profesor del Programa de Residencia de Oftalmología, con maestría en el Basic and Clinical Science Course (AAO BCSC), las guías de la European Glaucoma Society (EGS), European Society of Cataract and Refractive Surgeons (ESCRS) y el Wills Eye Manual.

Tu misión es resolver el caso clínico o consulta del residente con MÁXIMA ESPECIFICIDAD CLÍNICA, EXACTITUD DIAGNÓSTICA Y RIGOR CIENTÍFICO.
PROHIBIDO dar respuestas genéricas, ambiguas o que siempre repitan lo mismo. Tu respuesta DEBE ADAPTARSE 100% a la patología y caso concreto planteado por el usuario.

Debes devolver obligatoriamente un JSON estrictamente válido con la siguiente estructura:
{
  "diagnosticSummary": "Diagnóstico de certeza o sospecha principal fundamentada exactamente en los síntomas, signos de biomicroscopía, PIO y datos del caso.",
  "pathophysiology": "Mecanismo fisiopatológico íntimo y base anatómica detallada de ESTA patología concreta (planos tisulares, receptores, mediadores inflamatorios o hemodinámica implicada).",
  "clinicalApplication": {
    "guardia": "Conducta inmediata y secuencial en urgencias/guardia para ESTE caso (exploración en lámpara de hendidura, tinciones específicas, toma de PIO, pruebas diagnósticas urgentes).",
    "tratamiento": "Tratamiento escalonado preciso para ESTA patología: fármacos de primera y segunda línea con sus nombres genéricos, dosis habituales, vías de administración y pautas.",
    "criteriosDerivacionOQuirurgicos": "Criterios específicos y tiempos para intervención quirúrgica de urgencia o derivación a subespecialidad para ESTE cuadro.",
    "contraindicaciones": "Contraindicaciones absolutas, errores iatrogénicos graves y trampas diagnósticas específicas que NUNCA deben cometerse en este caso."
  },
  "pearlHighYield": "Perla de examen de residencia (Board Pearl / BCSC) de alto rendimiento para recordar siempre.",
  "keyReferences": "Guías clínicas de referencia oficial exactas (ej. AAO BCSC Sección correspondiente, EGS, ESCRS, Wills Eye)."
}

Reglas estrictas:
- Responde en español médico riguroso.
- Si el caso es de córnea, habla de capas corneales, tinciones (fluoresceína, rosa de bengala, blanco de calcoflúor), raspados y colirios específicos.
- Si es glaucoma, detalla milímetros de mercurio, fármacos hipotensores exactos, contraindicaciones (ej. acetazolamida/manitol en falciforme, betabloqueantes en asma/bloqueo, pilocarpina con PIO alta) y láser/cirugía.
- Si es retina, especifica mácula ON vs OFF, reglas topográficas, dosis intravítreas o vitrectomía.
- Si es neuroftalmología, detalla pares craneales, reflejos pupilares, estudios de neuroimagen (Angio-TAC, RM con gadolinio) y pautas de corticoides.
- Devuelve ÚNICAMENTE el objeto JSON válido.`;

  const userPrompt = `CASO CLÍNICO O PREGUNTA DEL RESIDENTE:
"${question}"

Área de Oftalmología: ${subspecialty || 'General'}
Nivel del Residente: ${residencyYear || 'R2/R3'}
Enfoque: ${focus || 'Diagnóstico urgente y aplicación en guardia'}`;

  // Use gemini-3.8-flash as primary model according to guidelines, fallback to gemini-3.1-flash-lite and gemini-flash-latest
  const modelsToTry = ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];

  for (const modelName of modelsToTry) {
    try {
      const response = await withTimeout(
        activeClient.models.generateContent({
          model: modelName,
          contents: [
            { role: 'user', parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] }
          ],
          config: {
            responseMimeType: 'application/json',
            temperature: 0.15,
          }
        }),
        10000
      );

      const text = response.text || '{}';
      const parsed = JSON.parse(text);
      if (parsed.diagnosticSummary && parsed.clinicalApplication) {
        return res.json({ success: true, data: parsed, fallback: false, model: modelName });
      }
    } catch (err: any) {
      console.warn(`Model ${modelName} failed (${err?.message}), attempting next...`);
    }
  }

  return res.json({
    fallback: true,
    message: 'El modelo no pudo responder a tiempo. Se activará el motor clínico curado BCSC.',
  });
});

// 2. Endpoint: Profundización exhaustiva sobre un tema oftalmológico
app.post('/api/gemini/deep-dive', async (req: Request, res: Response) => {
  const { topicTitle, subspecialty } = req.body;

  if (!topicTitle) {
    return res.status(400).json({ error: 'El tema es requerido.' });
  }

  const activeClient = getGenAIClient(req);

  if (!activeClient) {
    return res.status(200).json({
      fallback: true,
      message: 'API Key no configurada. Se utilizará el motor de temas integrado.'
    });
  }

  const prompt = `Actúa como especialista académico y profesor de Oftalmología nivel Fellowship (AAO BCSC / ICO Advanced / EBOD Subspecialty).
Genera un desglose exhaustivo de estudio de nivel FELLOWSHIP sobre: "${topicTitle}" en el área de "${subspecialty || 'Oftalmología'}".
Debes incluir con el máximo detalle puntos clave que suelen preguntar en los exámenes orales de Fellow (Board Examination), ensayos clínicos landmark, histopatología y preguntas trampa.

Devuelve un JSON estrictamente válido con esta estructura:
{
  "title": "${topicTitle}",
  "subspecialty": "${subspecialty || 'General'}",
  "definitionAndEpidemiology": "Definición formal y datos epidemiológicos clave",
  "anatomyAndPathophysiology": "Bases anatómicas y fisiopatológicas detalladas",
  "clinicalExamination": {
    "biomicroscopy": "Signos en lámpara de hendidura",
    "fundus": "Hallazgos en fondo de ojo (si aplica)",
    "specialSigns": "Signos epónimos o semiológicos específicos"
  },
  "diagnosticWorkup": [
    {"test": "Nombre del estudio", "findings": "Qué buscar específicamente"}
  ],
  "differentialDiagnosis": [
    {"condition": "Patología similar", "distinction": "Clave para diferenciarla"}
  ],
  "steppedManagement": {
    "medical": "Tratamiento farmacológico de primera y segunda línea con pautas y dosis",
    "surgical": "Técnicas quirúrgicas, momento de indicación y complicaciones típicas"
  },
  "clinicalApplicationPractical": "Qué debe hacer el residente/fellow en la clínica/guardia (paso a paso)",
  "highYieldPearl": "Perla de examen o 'Board Pearl' de máximo rendimiento",
  "keyDrugs": [
    {"name": "Fármaco", "dose": "Dosis y vía", "warning": "Efecto adverso o precaución"}
  ],
  "residencyAndFellowExamTips": [
    {
      "title": "Tip de Examen Clave",
      "category": "Trampa de Tribunal",
      "description": "Explicación detallada de lo que suelen evaluar",
      "trapToAvoid": "Error común del residente/fellow a evitar"
    },
    {
      "title": "Asociación Patognomónica",
      "category": "Asociación Patognomónica",
      "description": "Signo patognomónico que da el diagnóstico instantáneo",
      "trapToAvoid": "Diagnóstico erróneo con el que no se debe confundir"
    }
  ],
  "fellowshipKeyPoints": [
    "Punto clave 1 de examen de Fellow (trampas del tribunal, criterios cuantitativos, etc.)",
    "Punto clave 2 de examen de Fellow",
    "Punto clave 3 de examen de Fellow",
    "Punto clave 4 de examen de Fellow"
  ],
  "landmarkTrials": [
    {
      "name": "Nombre del ensayo pivote (ej. SCUT, OHTS, CATT, LiGHT, ONTT, EVS, etc.)",
      "year": "Año de publicación",
      "conclusion": "Conclusión científica capital",
      "fellowshipRelevance": "Por qué lo preguntan en los exámenes de Fellow"
    }
  ],
  "histopathologyAndGenetics": "Histopatología, tinciones especiales (Masson, Rojo Congo, Alcian Blue, Gram, etc.) y mutaciones genéticas asociadas.",
  "surgicalPearls": [
    "Perla técnica quirúrgica intraoperatoria 1",
    "Perla técnica quirúrgica intraoperatoria 2"
  ],
  "fellowOralBoardQuestions": [
    {
      "question": "Pregunta de caso clínico desafiante típica de examen oral de Fellow",
      "answer": "Respuesta modelo fundamentada",
      "trap": "Error o trampa común que hace reprobar al candidato"
    }
  ]
}
Devuelve únicamente el JSON válido.`;

  const modelsToTry = ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];

  for (const modelName of modelsToTry) {
    try {
      const response = await withTimeout(
        activeClient.models.generateContent({
          model: modelName,
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          config: {
            responseMimeType: 'application/json',
            temperature: 0.2,
          }
        }),
        10000
      );

      const text = response.text || '{}';
      const parsed = JSON.parse(text);
      if (parsed.title && parsed.anatomyAndPathophysiology) {
        return res.json({ success: true, data: parsed, fallback: false, model: modelName });
      }
    } catch (err: any) {
      console.warn(`Deep dive model ${modelName} failed:`, err?.message);
    }
  }

  return res.json({
    fallback: true,
    message: 'Activando motor clínico curado BCSC.',
  });
});

// 3. Endpoint: Generar pregunta de caso clínico nueva
app.post('/api/gemini/generate-question', async (req: Request, res: Response) => {
  const { subspecialty, difficulty, specificTopic } = req.body;

  const activeClient = getGenAIClient(req);

  if (!activeClient) {
    return res.status(200).json({
      fallback: true,
      message: 'API Key no configurada. Se seleccionará del banco integrado.'
    });
  }

  const prompt = `Genera un caso clínico inédito de examen para residentes de oftalmología en el área: "${subspecialty || 'Retina'}", dificultad: "${difficulty || 'Intermedia'}", tema específico: "${specificTopic || 'Caso clínico de alta frecuencia'}".
Devuelve un JSON estrictamente válido:
{
  "id": "gen-${Date.now()}",
  "subspecialty": "${subspecialty || 'General'}",
  "topic": "${specificTopic || 'Caso de guardia'}",
  "difficulty": "${difficulty || 'Intermedia'}",
  "clinicalVignette": "Viñeta clínica detallada con edad, sexo, tiempo de evolución, síntomas, agudeza visual, biomicroscopía y pruebas iniciales",
  "questionText": "Pregunta clínica concreta sobre diagnóstico diferencial, siguiente mejor paso o conducta terapéutica",
  "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
  "correctIndex": 0,
  "explanation": "Fundamentación fisiopatológica rigurosa de la opción correcta y descarte de las erróneas",
  "clinicalApplication": "Aplicación clínica directa: Qué debe hacer el médico en guardia, consulta o quirófano con este hallazgo",
  "pearl": "Perla de examen de alto rendimiento (High-yield residency pearl)"
}
Devuelve únicamente el JSON válido.`;

  const modelsToTry = ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];

  for (const modelName of modelsToTry) {
    try {
      const response = await withTimeout(
        activeClient.models.generateContent({
          model: modelName,
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          config: {
            responseMimeType: 'application/json',
            temperature: 0.25,
          }
        }),
        10000
      );

      const text = response.text || '{}';
      const parsed = JSON.parse(text);
      if (parsed.questionText && parsed.options) {
        return res.json({ success: true, data: parsed, fallback: false, model: modelName });
      }
    } catch (err: any) {
      console.warn(`Generate question model ${modelName} failed:`, err?.message);
    }
  }

  return res.json({
    fallback: true,
    message: 'Seleccionando del banco clínico curado.',
  });
});

// Mount Vite or static build
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        port: Number(PORT),
        host: '0.0.0.0',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`[OftalmoResident Server] listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
