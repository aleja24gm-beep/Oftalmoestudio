import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3e3;
const app = express();
app.use(express.json({ limit: "5mb" }));
const rawApiKey = process.env.GEMINI_API_KEY;
const isRealApiKey = rawApiKey && rawApiKey !== "MY_GEMINI_API_KEY" && rawApiKey.trim().length > 10;
let aiClient = null;
if (isRealApiKey) {
  try {
    aiClient = new GoogleGenAI({ apiKey: rawApiKey });
  } catch (err) {
    console.error("Failed to initialize GoogleGenAI client:", err);
  }
}
function withTimeout(promise, timeoutMs = 8e3) {
  return Promise.race([
    promise,
    new Promise(
      (_, reject) => setTimeout(() => reject(new Error("Timeout esperando respuesta de IA")), timeoutMs)
    )
  ]);
}
function getGenAIClient(req) {
  const customKey = req.headers["x-gemini-api-key"] || req.body?.apiKey;
  if (customKey && typeof customKey === "string" && customKey.trim().length > 10) {
    try {
      return new GoogleGenAI({ apiKey: customKey.trim() });
    } catch (err) {
      console.error("Failed to initialize GoogleGenAI with custom client key:", err);
    }
  }
  return aiClient;
}
app.get("/api/gemini/key-status", (_req, res) => {
  const hasServerKey = Boolean(rawApiKey && rawApiKey !== "MY_GEMINI_API_KEY" && rawApiKey.trim().length > 10);
  res.json({ hasServerKey });
});
app.post("/api/gemini/test-key", async (req, res) => {
  const customKey = req.headers["x-gemini-api-key"] || req.body?.apiKey || process.env.GEMINI_API_KEY;
  if (!customKey || typeof customKey !== "string" || customKey.trim().length < 10) {
    return res.status(400).json({ success: false, error: "Clave API no proporcionada o demasiado corta." });
  }
  try {
    const testClient = new GoogleGenAI({ apiKey: customKey.trim() });
    const response = await withTimeout(
      testClient.models.generateContent({
        model: "gemini-3.8-flash",
        contents: [{ role: "user", parts: [{ text: "Responde \xFAnicamente con la palabra OK." }] }]
      }),
      8e3
    );
    return res.json({
      success: true,
      message: "API Key verificada y conectada exitosamente con Gemini.",
      preview: response.text?.trim() || "OK"
    });
  } catch (err) {
    console.error("Test key failed:", err?.message);
    return res.status(400).json({
      success: false,
      error: err?.message || "Error validando la clave API con Google Gemini. Verifica que sea correcta en aistudio.google.com."
    });
  }
});
app.post("/api/gemini/ask-resident-case", async (req, res) => {
  const { question, subspecialty, residencyYear, focus } = req.body;
  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "La pregunta es requerida." });
  }
  const activeClient = getGenAIClient(req);
  if (!activeClient) {
    return res.status(200).json({
      fallback: true,
      message: "API Key no configurada. Se utilizar\xE1 el motor cl\xEDnico curado."
    });
  }
  const systemPrompt = `Eres un M\xE9dico Oftalm\xF3logo Especialista y Profesor del Programa de Residencia de Oftalmolog\xEDa, con maestr\xEDa en el Basic and Clinical Science Course (AAO BCSC), las gu\xEDas de la European Glaucoma Society (EGS), European Society of Cataract and Refractive Surgeons (ESCRS) y el Wills Eye Manual.

Tu misi\xF3n es resolver el caso cl\xEDnico o consulta del residente con M\xC1XIMA ESPECIFICIDAD CL\xCDNICA, EXACTITUD DIAGN\xD3STICA Y RIGOR CIENT\xCDFICO.
PROHIBIDO dar respuestas gen\xE9ricas, ambiguas o que siempre repitan lo mismo. Tu respuesta DEBE ADAPTARSE 100% a la patolog\xEDa y caso concreto planteado por el usuario.

Debes devolver obligatoriamente un JSON estrictamente v\xE1lido con la siguiente estructura:
{
  "diagnosticSummary": "Diagn\xF3stico de certeza o sospecha principal fundamentada exactamente en los s\xEDntomas, signos de biomicroscop\xEDa, PIO y datos del caso.",
  "pathophysiology": "Mecanismo fisiopatol\xF3gico \xEDntimo y base anat\xF3mica detallada de ESTA patolog\xEDa concreta (planos tisulares, receptores, mediadores inflamatorios o hemodin\xE1mica implicada).",
  "clinicalApplication": {
    "guardia": "Conducta inmediata y secuencial en urgencias/guardia para ESTE caso (exploraci\xF3n en l\xE1mpara de hendidura, tinciones espec\xEDficas, toma de PIO, pruebas diagn\xF3sticas urgentes).",
    "tratamiento": "Tratamiento escalonado preciso para ESTA patolog\xEDa: f\xE1rmacos de primera y segunda l\xEDnea con sus nombres gen\xE9ricos, dosis habituales, v\xEDas de administraci\xF3n y pautas.",
    "criteriosDerivacionOQuirurgicos": "Criterios espec\xEDficos y tiempos para intervenci\xF3n quir\xFArgica de urgencia o derivaci\xF3n a subespecialidad para ESTE cuadro.",
    "contraindicaciones": "Contraindicaciones absolutas, errores iatrog\xE9nicos graves y trampas diagn\xF3sticas espec\xEDficas que NUNCA deben cometerse en este caso."
  },
  "pearlHighYield": "Perla de examen de residencia (Board Pearl / BCSC) de alto rendimiento para recordar siempre.",
  "keyReferences": "Gu\xEDas cl\xEDnicas de referencia oficial exactas (ej. AAO BCSC Secci\xF3n correspondiente, EGS, ESCRS, Wills Eye)."
}

Reglas estrictas:
- Responde en espa\xF1ol m\xE9dico riguroso.
- Si el caso es de c\xF3rnea, habla de capas corneales, tinciones (fluoresce\xEDna, rosa de bengala, blanco de calcofl\xFAor), raspados y colirios espec\xEDficos.
- Si es glaucoma, detalla mil\xEDmetros de mercurio, f\xE1rmacos hipotensores exactos, contraindicaciones (ej. acetazolamida/manitol en falciforme, betabloqueantes en asma/bloqueo, pilocarpina con PIO alta) y l\xE1ser/cirug\xEDa.
- Si es retina, especifica m\xE1cula ON vs OFF, reglas topogr\xE1ficas, dosis intrav\xEDtreas o vitrectom\xEDa.
- Si es neuroftalmolog\xEDa, detalla pares craneales, reflejos pupilares, estudios de neuroimagen (Angio-TAC, RM con gadolinio) y pautas de corticoides.
- Devuelve \xDANICAMENTE el objeto JSON v\xE1lido.`;
  const userPrompt = `CASO CL\xCDNICO O PREGUNTA DEL RESIDENTE:
"${question}"

\xC1rea de Oftalmolog\xEDa: ${subspecialty || "General"}
Nivel del Residente: ${residencyYear || "R2/R3"}
Enfoque: ${focus || "Diagn\xF3stico urgente y aplicaci\xF3n en guardia"}`;
  const modelsToTry = ["gemini-3.8-flash", "gemini-3.1-flash-lite", "gemini-flash-latest"];
  for (const modelName of modelsToTry) {
    try {
      const response = await withTimeout(
        activeClient.models.generateContent({
          model: modelName,
          contents: [
            { role: "user", parts: [{ text: `${systemPrompt}

${userPrompt}` }] }
          ],
          config: {
            responseMimeType: "application/json",
            temperature: 0.15
          }
        }),
        1e4
      );
      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      if (parsed.diagnosticSummary && parsed.clinicalApplication) {
        return res.json({ success: true, data: parsed, fallback: false, model: modelName });
      }
    } catch (err) {
      console.warn(`Model ${modelName} failed (${err?.message}), attempting next...`);
    }
  }
  return res.json({
    fallback: true,
    message: "El modelo no pudo responder a tiempo. Se activar\xE1 el motor cl\xEDnico curado BCSC."
  });
});
app.post("/api/gemini/deep-dive", async (req, res) => {
  const { topicTitle, subspecialty } = req.body;
  if (!topicTitle) {
    return res.status(400).json({ error: "El tema es requerido." });
  }
  const activeClient = getGenAIClient(req);
  if (!activeClient) {
    return res.status(200).json({
      fallback: true,
      message: "API Key no configurada. Se utilizar\xE1 el motor de temas integrado."
    });
  }
  const prompt = `Act\xFAa como especialista acad\xE9mico y profesor de Oftalmolog\xEDa nivel Fellowship (AAO BCSC / ICO Advanced / EBOD Subspecialty).
Genera un desglose exhaustivo de estudio de nivel FELLOWSHIP sobre: "${topicTitle}" en el \xE1rea de "${subspecialty || "Oftalmolog\xEDa"}".
Debes incluir con el m\xE1ximo detalle puntos clave que suelen preguntar en los ex\xE1menes orales de Fellow (Board Examination), ensayos cl\xEDnicos landmark, histopatolog\xEDa y preguntas trampa.

Devuelve un JSON estrictamente v\xE1lido con esta estructura:
{
  "title": "${topicTitle}",
  "subspecialty": "${subspecialty || "General"}",
  "definitionAndEpidemiology": "Definici\xF3n formal y datos epidemiol\xF3gicos clave",
  "anatomyAndPathophysiology": "Bases anat\xF3micas y fisiopatol\xF3gicas detalladas",
  "clinicalExamination": {
    "biomicroscopy": "Signos en l\xE1mpara de hendidura",
    "fundus": "Hallazgos en fondo de ojo (si aplica)",
    "specialSigns": "Signos ep\xF3nimos o semiol\xF3gicos espec\xEDficos"
  },
  "diagnosticWorkup": [
    {"test": "Nombre del estudio", "findings": "Qu\xE9 buscar espec\xEDficamente"}
  ],
  "differentialDiagnosis": [
    {"condition": "Patolog\xEDa similar", "distinction": "Clave para diferenciarla"}
  ],
  "steppedManagement": {
    "medical": "Tratamiento farmacol\xF3gico de primera y segunda l\xEDnea con pautas y dosis",
    "surgical": "T\xE9cnicas quir\xFArgicas, momento de indicaci\xF3n y complicaciones t\xEDpicas"
  },
  "clinicalApplicationPractical": "Qu\xE9 debe hacer el residente/fellow en la cl\xEDnica/guardia (paso a paso)",
  "highYieldPearl": "Perla de examen o 'Board Pearl' de m\xE1ximo rendimiento",
  "keyDrugs": [
    {"name": "F\xE1rmaco", "dose": "Dosis y v\xEDa", "warning": "Efecto adverso o precauci\xF3n"}
  ],
  "residencyAndFellowExamTips": [
    {
      "title": "Tip de Examen Clave",
      "category": "Trampa de Tribunal",
      "description": "Explicaci\xF3n detallada de lo que suelen evaluar",
      "trapToAvoid": "Error com\xFAn del residente/fellow a evitar"
    },
    {
      "title": "Asociaci\xF3n Patognom\xF3nica",
      "category": "Asociaci\xF3n Patognom\xF3nica",
      "description": "Signo patognom\xF3nico que da el diagn\xF3stico instant\xE1neo",
      "trapToAvoid": "Diagn\xF3stico err\xF3neo con el que no se debe confundir"
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
      "year": "A\xF1o de publicaci\xF3n",
      "conclusion": "Conclusi\xF3n cient\xEDfica capital",
      "fellowshipRelevance": "Por qu\xE9 lo preguntan en los ex\xE1menes de Fellow"
    }
  ],
  "histopathologyAndGenetics": "Histopatolog\xEDa, tinciones especiales (Masson, Rojo Congo, Alcian Blue, Gram, etc.) y mutaciones gen\xE9ticas asociadas.",
  "surgicalPearls": [
    "Perla t\xE9cnica quir\xFArgica intraoperatoria 1",
    "Perla t\xE9cnica quir\xFArgica intraoperatoria 2"
  ],
  "fellowOralBoardQuestions": [
    {
      "question": "Pregunta de caso cl\xEDnico desafiante t\xEDpica de examen oral de Fellow",
      "answer": "Respuesta modelo fundamentada",
      "trap": "Error o trampa com\xFAn que hace reprobar al candidato"
    }
  ]
}
Devuelve \xFAnicamente el JSON v\xE1lido.`;
  const modelsToTry = ["gemini-3.8-flash", "gemini-3.1-flash-lite", "gemini-flash-latest"];
  for (const modelName of modelsToTry) {
    try {
      const response = await withTimeout(
        activeClient.models.generateContent({
          model: modelName,
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          config: {
            responseMimeType: "application/json",
            temperature: 0.2
          }
        }),
        1e4
      );
      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      if (parsed.title && parsed.anatomyAndPathophysiology) {
        return res.json({ success: true, data: parsed, fallback: false, model: modelName });
      }
    } catch (err) {
      console.warn(`Deep dive model ${modelName} failed:`, err?.message);
    }
  }
  return res.json({
    fallback: true,
    message: "Activando motor cl\xEDnico curado BCSC."
  });
});
app.post("/api/gemini/generate-question", async (req, res) => {
  const { subspecialty, difficulty, specificTopic } = req.body;
  const activeClient = getGenAIClient(req);
  if (!activeClient) {
    return res.status(200).json({
      fallback: true,
      message: "API Key no configurada. Se seleccionar\xE1 del banco integrado."
    });
  }
  const prompt = `Genera un caso cl\xEDnico in\xE9dito de examen para residentes de oftalmolog\xEDa en el \xE1rea: "${subspecialty || "Retina"}", dificultad: "${difficulty || "Intermedia"}", tema espec\xEDfico: "${specificTopic || "Caso cl\xEDnico de alta frecuencia"}".
Devuelve un JSON estrictamente v\xE1lido:
{
  "id": "gen-${Date.now()}",
  "subspecialty": "${subspecialty || "General"}",
  "topic": "${specificTopic || "Caso de guardia"}",
  "difficulty": "${difficulty || "Intermedia"}",
  "clinicalVignette": "Vi\xF1eta cl\xEDnica detallada con edad, sexo, tiempo de evoluci\xF3n, s\xEDntomas, agudeza visual, biomicroscop\xEDa y pruebas iniciales",
  "questionText": "Pregunta cl\xEDnica concreta sobre diagn\xF3stico diferencial, siguiente mejor paso o conducta terap\xE9utica",
  "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
  "correctIndex": 0,
  "explanation": "Fundamentaci\xF3n fisiopatol\xF3gica rigurosa de la opci\xF3n correcta y descarte de las err\xF3neas",
  "clinicalApplication": "Aplicaci\xF3n cl\xEDnica directa: Qu\xE9 debe hacer el m\xE9dico en guardia, consulta o quir\xF3fano con este hallazgo",
  "pearl": "Perla de examen de alto rendimiento (High-yield residency pearl)"
}
Devuelve \xFAnicamente el JSON v\xE1lido.`;
  const modelsToTry = ["gemini-3.8-flash", "gemini-3.1-flash-lite", "gemini-flash-latest"];
  for (const modelName of modelsToTry) {
    try {
      const response = await withTimeout(
        activeClient.models.generateContent({
          model: modelName,
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          config: {
            responseMimeType: "application/json",
            temperature: 0.25
          }
        }),
        1e4
      );
      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      if (parsed.questionText && parsed.options) {
        return res.json({ success: true, data: parsed, fallback: false, model: modelName });
      }
    } catch (err) {
      console.warn(`Generate question model ${modelName} failed:`, err?.message);
    }
  }
  return res.json({
    fallback: true,
    message: "Seleccionando del banco cl\xEDnico curado."
  });
});
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        port: Number(PORT),
        host: "0.0.0.0"
      },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`[OftalmoResident Server] listening on http://0.0.0.0:${PORT}`);
  });
}
startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
