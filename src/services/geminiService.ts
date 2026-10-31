import { ResidentResponseResult, TopicDeepDive, Question, SubspecialtyId } from '../types/ophthalmology';
import { TOPICS_DATA } from '../data/topicsData';
import { INITIAL_QUESTIONS } from '../data/questionsData';
import { OPHTHALMOLOGY_KNOWLEDGE_BASE, ClinicalDossier } from '../data/clinicalKnowledgeBase';

export interface ResidentConsultationResponse {
  success: boolean;
  data: ResidentResponseResult;
  source: 'gemini' | 'curated-engine';
  matchedDossier?: ClinicalDossier;
}

export function getStoredApiKey(): string {
  try {
    return localStorage.getItem('gemini_api_key') || localStorage.getItem('oftalmo_gemini_api_key') || '';
  } catch {
    return '';
  }
}

export function setStoredApiKey(key: string): void {
  try {
    const trimmed = key.trim();
    if (trimmed) {
      localStorage.setItem('gemini_api_key', trimmed);
      localStorage.setItem('oftalmo_gemini_api_key', trimmed);
    } else {
      localStorage.removeItem('gemini_api_key');
      localStorage.removeItem('oftalmo_gemini_api_key');
    }
    // Dispatch storage event so other components react
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error('Error saving API key to localStorage', e);
  }
}

function getAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const key = getStoredApiKey();
  if (key) {
    headers['x-gemini-api-key'] = key;
  }
  return headers;
}

export async function askResidentCaseAPI(
  question: string,
  subspecialty: string,
  residencyYear: string,
  focus: string
): Promise<ResidentConsultationResponse> {
  // 1. Try backend Gemini API
  try {
    const apiKey = getStoredApiKey();
    const res = await fetch('/api/gemini/ask-resident-case', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ question, subspecialty, residencyYear, focus, apiKey }),
    });

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data && !json.fallback) {
        return { success: true, data: json.data, source: 'gemini' };
      }
    }
  } catch (err) {
    console.warn('Backend call failed or offline, switching to clinical knowledge engine.', err);
  }

  // 2. High-precision clinical matcher with the comprehensive knowledge base
  const matched = findBestClinicalMatch(question, subspecialty);
  if (matched) {
    return {
      success: true,
      data: {
        diagnosticSummary: matched.diagnosticSummary,
        pathophysiology: matched.pathophysiology,
        clinicalApplication: matched.clinicalApplication,
        pearlHighYield: matched.pearlHighYield,
        keyReferences: matched.keyReferences
      },
      source: 'curated-engine',
      matchedDossier: matched
    };
  }

  // 3. Fallback to adaptive structured clinical response
  const adaptive = buildAdaptiveClinicalAnswer(question, subspecialty, focus);
  return { success: true, data: adaptive, source: 'curated-engine' };
}

// Find best matching clinical dossier by scoring keywords and clinical concepts
export function findBestClinicalMatch(query: string, subspecialty?: string): ClinicalDossier | null {
  const normalizedQuery = query
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // remove accents for robust matching

  let bestDossier: ClinicalDossier | null = null;
  let highestScore = 0;

  for (const dossier of OPHTHALMOLOGY_KNOWLEDGE_BASE) {
    let score = 0;

    for (const kw of dossier.keywords) {
      const normalizedKw = kw
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      if (normalizedQuery.includes(normalizedKw)) {
        // Multi-word keywords get higher weight
        const wordCount = normalizedKw.split(' ').length;
        score += wordCount * 5;
      }
    }

    // Subspecialty match bonus
    if (subspecialty && dossier.subspecialty.toLowerCase().includes(subspecialty.toLowerCase())) {
      score += 2;
    }

    if (score > highestScore) {
      highestScore = score;
      bestDossier = dossier;
    }
  }

  // Threshold to consider a valid confident match (score >= 2)
  return highestScore >= 2 ? bestDossier : null;
}

function buildAdaptiveClinicalAnswer(
  question: string,
  subspecialty: string,
  focus: string
): ResidentResponseResult {
  const q = question.toLowerCase();

  // Determine specific area based on query terms
  const isCornea = q.includes('cornea') || q.includes('ulcera') || q.includes('queratitis') || q.includes('lente') || q.includes('ojo seco');
  const isGlaucoma = q.includes('glaucoma') || q.includes('pio') || q.includes('presion') || q.includes('angulo') || q.includes('trabecul');
  const isRetina = q.includes('retina') || q.includes('macula') || q.includes('dmae') || q.includes('desprendimiento') || q.includes('drusas') || q.includes('vitreo');
  const isNeuro = q.includes('nervio') || q.includes('papila') || q.includes('pupila') || q.includes('paralisis') || q.includes('diplopia') || q.includes('dpar');
  const isOnco = q.includes('onco') || q.includes('tumor') || q.includes('melanoma') || q.includes('retinoblastoma') || q.includes('coms') || q.includes('nevus') || q.includes('leucocoria') || q.includes('sebaceo') || q.includes('ossn') || q.includes('linfoma') || subspecialty.toLowerCase().includes('onco');

  if (isOnco) {
    return {
      diagnosticSummary: `Sospecha de patología tumoral / neoplasia en estudio en contexto de: "${question}". Subespecialidad: Oncología Ocular.`,
      pathophysiology: 'Proliferación clonal anormal de células neoplásicas con mutaciones conductoras (GNAQ/GNA11, BAP1 en melanoma; RB1 en retinoblastoma; MYD88 en linfoma). Riesgo de diseminación por contigüidad, extensión a órbita o metástasis hematógena (hígado en melanoma, SNC/médula en retinoblastoma/linfoma).',
      clinicalApplication: {
        guardia: '1) Examen biomicroscópico y fondo de ojo dilatado con oftalmoscopia binocular indirecta de 360 grados.\n2) Ecografía ocular estandarizada modos A y B (medición de grosor apical, base, reflectividad acústica y calcificaciones).\n3) NUNCA realizar punción intraocular (PAAF) ni vitrectomía si se sospecha retinoblastoma o melanoma por riesgo de siembra tumoral.',
        tratamiento: '• En Melanoma Coroideo mediano (2.5 a 10 mm grosor): Braquiterapia epiescleral con placa de Yodo-125 (I-125) con 85 Gy al ápex tumoral (Ensayo COMS).\n• En Retinoblastoma: Quimioterapia intraarterial (Melfalán/Topotecán) o enucleación en Grupo E.\n• En OSSN de superficie: Quimioterapia tópica (Interferón alfa-2b 1 millón UI/mL o 5-FU) o biopsia escisional "no-touch" con margen de 4 mm.\n• En Carcinoma Sebáceo: Resección con técnica de Mohs previa toma de biopsias en mapa conjuntivales.',
        criteriosDerivacionOQuirurgicos: 'Derivación inmediata a unidad de referencia de Oncología Ocular. En retinoblastoma Grupo E o melanoma grande >10 mm: Enucleación oncológica primaria con muñón largo de nervio óptico (>=10-15 mm).',
        contraindicaciones: 'PROHIBIDA la biopsia intraocular en sospecha de retinoblastoma. NUNCA tirar el contenido de un curetaje de chalazión recurrente sin enviarlo a estudio histopatológico (sospechar carcinoma sebáceo).'
      },
      pearlHighYield: 'Ensayo COMS: La braquiterapia con I-125 ofrece supervivencia idéntica a la enucleación a 10 y 12 años en melanomas coroideos medianos, preservando el ojo en >85% de los pacientes.',
      keyReferences: 'AAO BCSC Section 4: Ophthalmic Pathology and Intraocular Tumors / COMS Trials / AJCC 8th Edition'
    };
  }

  if (isGlaucoma) {
    return {
      diagnosticSummary: `Sospecha de descompensación de la presión intraocular / Neuropatía óptica glaucomatosa en contexto de: "${question}".`,
      pathophysiology: 'Aumento de resistencia en la malla trabecular o cierre por aposición iridocorneal periférica, generando estrés biomecánico retrógrado en la lámina cribosa y apoptosis de células ganglionares.',
      clinicalApplication: {
        guardia: '1) Tonometría de aplanación de Goldmann inmediata.\n2) Gonioscopia de 4 espejos (clasificación de Shaffer y Spaeth) para determinar si el ángulo está abierto o cerrado.\n3) Evaluación del reborde neurorretiniano en lámpara con lente de 90D/78D buscando hemorragias de disco de Drance.',
        tratamiento: '• Hipotensores tópicos de primera línea: Análogo de prostaglandinas (Latanoprost 0.005% noche) o Beta-bloqueante (Timolol 0.5% c/12h).\n• Si PIO >30 mmHg: terapia combinada con alfa-2 agonista (Brimonidina 0.15%) e inhibidor de anhidrasa carbónica (Dorzolamida 2% / Acetazolamida 250-500 mg VO).\n• Láser: SLT en ángulo abierto o Iridotomía YAG en cierre angular.',
        criteriosDerivacionOQuirurgicos: 'PIO >35 mmHg refractaria a medicación máxima tolerada, progresión acelerada en OCT de CFNR o daño campimétrico amenazante de la fijación: Programar cirugía filtrante (Trabeculectomía con MMC o EPNP).',
        contraindicaciones: 'No usar pilocarpina con PIO muy elevada (>40) ni midriáticos en ángulos ocluidos. Precaución con beta-bloqueantes en pacientes asmáticos o con bloqueo AV.'
      },
      pearlHighYield: 'En glaucoma, la gonioscopia es obligatoria en todo paciente antes de iniciar o modificar tratamiento. Córneas delgadas (<520 µm) subestiman la PIO real (Estudio OHTS).',
      keyReferences: 'European Glaucoma Society (EGS 5th Edition) / AAO BCSC Section 10'
    };
  }

  if (isCornea) {
    return {
      diagnosticSummary: `Patología de superficie ocular y estroma corneal relacionada con: "${question}".`,
      pathophysiology: 'Pérdida de la integridad de la barrera epitelial corneal y película lagrimal, facilitando infiltración estromal de polimorfonucleares y liberación de colagenasas que producen necrosis o adelgazamiento estromal.',
      clinicalApplication: {
        guardia: '1) Biomicroscopía con tinción de Fluoresceína sódica al 1% (evaluar defecto epitelial y descartar signo de Seidel de microperforación).\n2) Comprobar sensibilidad corneal con hilo de Cochet-Bonnet para descartar VHS/neurotrofismo.\n3) Si hay infiltrado estromal: raspado corneal para tinción de Gram y Giemsa previa a antibióticos.',
        tratamiento: '• Si sospecha bacteriana: Quinolona de 4ª generación (Moxifloxacino 0.5% c/1-2h) o antibióticos fortificados (Vancomicina 50 mg/mL + Ceftazidima 50 mg/mL) en úlceras graves.\n• Ciclopléjico (Ciclopentolato 1% c/8h) para aliviar el espasmo ciliar.\n• Lágrimas artificiales sin conservantes horarias.',
        criteriosDerivacionOQuirurgicos: 'Adelgazamiento estromal >50% o perforación inminente: Cianoacrilato con lente de contacto terapéutico o queratoplastia tectónica urgente.',
        contraindicaciones: 'PROHIBIDOS los corticoides tópicos en defectos epiteliales activos sin diagnóstico microbiológico claro. PROHIBIDO el uso domiciliario de colirios anestésicos.'
      },
      pearlHighYield: 'Úlceras centrales o >1.5 mm requieren raspado microbiológico obligatorio antes de iniciar colirios antibióticos.',
      keyReferences: 'AAO BCSC Section 8: External Disease and Cornea / TFOS DEWS II'
    };
  }

  if (isRetina) {
    return {
      diagnosticSummary: `Patología vitreorretiniana en estudio: "${question}".`,
      pathophysiology: 'Tracción vitreorretiniana en la interfase mácula/retina periférica o alteración de la microcirculación capilar retiniana y membrana de Bruch con sobreexpresión de VEGF.',
      clinicalApplication: {
        guardia: '1) Toma estricta de agudeza visual con corrección.\n2) Fondo de ojo bajo midriasis farmacológica con oftalmoscopio indirecto y lente de 20D explorando la periferia de 360 grados.\n3) Biomicroscopía de polo posterior con lente de 78D/90D.',
        tratamiento: '• En patología macular exudativa (DMAE húmeda o edema macular): Anti-VEGF intravítreo (Aflibercept, Ranibizumab o Faricimab).\n• En roturas periféricas sin desprendimiento: Fotocoagulación con láser de argón en barrera de 3 filas en 360 grados.\n• En desprendimiento regmatógeno: Cirugía de retina urgente.',
        criteriosDerivacionOQuirurgicos: 'Desprendimiento de retina con mácula aplicada (Macula ON): Quirófano urgente en <24 horas. Hemorragia vítrea densa con sospecha de rotura: Ecografía ocular modo B de urgencia.',
        contraindicaciones: 'No demorar la evaluación del paciente ante síntomas de fotopsias y miodesopsias agudas de reciente inicio.'
      },
      pearlHighYield: 'El signo de Shafer ("polvo de tabaco" en vítreo anterior) tras desprendimiento de vítreo posterior predice rotura retiniana en >90% de los casos.',
      keyReferences: 'AAO BCSC Section 12: Retina and Vitreous'
    };
  }

  return {
    diagnosticSummary: `Resolución diagnóstica dirigida para: "${question}". Subespecialidad: ${subspecialty || 'Oftalmología'}.`,
    pathophysiology: 'Alteración funcional y tisular focal según la anatomía del segmento ocular implicado, requiriendo correlación entre los síntomas del paciente y los hallazgos en la biomicroscopía.',
    clinicalApplication: {
      guardia: '1) Registro sistemático de agudeza visual mejor corregida (MAVC) en ambos ojos.\n2) Exploración con lámpara de hendidura: tinciones vitales, evaluación de cámara anterior y tonometría de aplanación.\n3) Fondo de ojo bajo dilatación pupilar si la cámara anterior es profunda.',
      tratamiento: `• Tratamiento médico escalonado basado en guías oficiales AAO BCSC según la etiología identificada.\n• Manejo sintomático y protección de superficie con lubricantes libres de conservantes.\n• Enfoque seleccionado: ${focus || 'Diagnóstico urgente y manejo'}.`,
      criteriosDerivacionOQuirurgicos: 'Criterios de alarma: disminución visual brusca, presencia de DPAR, hipopion, dolor incoercible o PIO >35 mmHg refractaria.',
      contraindicaciones: 'Evitar corticoides tópicos empíricos sin descartar infección epitelial activa. No prescribir anestésicos tópicos para uso domiciliario.'
    },
    pearlHighYield: 'En la guardia de oftalmología, documentar siempre los 4 signos vitales: agudeza visual, reflejos pupilares (DPAR), motilidad ocular y PIO.',
    keyReferences: 'American Academy of Ophthalmology (AAO) BCSC Series & Wills Eye Manual 8th Edition'
  };
}

export async function getDeepDiveAPI(
  topicTitle: string,
  subspecialty: string
): Promise<{ success: boolean; data: TopicDeepDive; source: 'gemini' | 'curated-engine' }> {
  try {
    const apiKey = getStoredApiKey();
    const res = await fetch('/api/gemini/deep-dive', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ topicTitle, subspecialty, apiKey }),
    });

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data && !json.fallback) {
        return { success: true, data: json.data, source: 'gemini' };
      }
    }
  } catch (err) {
    console.warn('Backend deep dive call failed, using curated library.', err);
  }

  const existing = TOPICS_DATA.find((t) =>
    t.title.toLowerCase().includes(topicTitle.toLowerCase()) ||
    topicTitle.toLowerCase().includes(t.title.toLowerCase())
  );

  if (existing) {
    return { success: true, data: existing, source: 'curated-engine' };
  }

  // Check in knowledge base dossiers
  const matchedDossier = findBestClinicalMatch(topicTitle, subspecialty);
  if (matchedDossier) {
    const fromDossier: TopicDeepDive = {
      id: matchedDossier.id,
      title: matchedDossier.diagnosticSummary.split('.')[0],
      subspecialtyId: (subspecialty.toLowerCase() as SubspecialtyId) || 'cornea',
      summary: matchedDossier.diagnosticSummary,
      definitionAndEpidemiology: matchedDossier.diagnosticSummary,
      anatomyAndPathophysiology: matchedDossier.pathophysiology,
      clinicalExamination: {
        biomicroscopy: matchedDossier.clinicalApplication.guardia,
        specialSigns: matchedDossier.pearlHighYield
      },
      diagnosticWorkup: [
        { test: 'Evaluación clínica sistemática', findings: matchedDossier.clinicalApplication.guardia },
        { test: 'Estudios de imagen / laboratorio', findings: matchedDossier.keyReferences }
      ],
      differentialDiagnosis: (matchedDossier.differentialDiagnoses || []).map((d) => ({
        condition: d,
        distinction: 'Diferenciación basada en semiología y evolución.'
      })),
      steppedManagement: {
        medical: matchedDossier.clinicalApplication.tratamiento,
        surgical: matchedDossier.clinicalApplication.criteriosDerivacionOQuirurgicos
      },
      clinicalApplicationPractical: matchedDossier.clinicalApplication.guardia,
      highYieldPearl: matchedDossier.pearlHighYield,
      residencyAndFellowExamTips: [
        {
          title: 'Perla de Examen Oral / Boards',
          category: 'Asociación Patognomónica',
          description: matchedDossier.pearlHighYield,
          trapToAvoid: matchedDossier.clinicalApplication.contraindicaciones
        },
        {
          title: 'Conducta Clave de Guardia y Derivación',
          category: 'Pregunta Clásica',
          description: matchedDossier.clinicalApplication.guardia,
          trapToAvoid: `Error común: ignorar criterios quirúrgicos: ${matchedDossier.clinicalApplication.criteriosDerivacionOQuirurgicos}`
        }
      ],
      fellowshipKeyPoints: [
        matchedDossier.pearlHighYield,
        matchedDossier.clinicalApplication.contraindicaciones,
        `Criterios de derivación / quirúrgicos: ${matchedDossier.clinicalApplication.criteriosDerivacionOQuirurgicos}`
      ],
      surgicalPearls: [
        matchedDossier.clinicalApplication.criteriosDerivacionOQuirurgicos
      ],
      histopathologyAndGenetics: `Fundamento fisiopatológico íntimo: ${matchedDossier.pathophysiology}`
    };
    return { success: true, data: fromDossier, source: 'curated-engine' };
  }

  return { success: true, data: TOPICS_DATA[0], source: 'curated-engine' };
}

export async function generateQuestionAPI(
  subspecialty: SubspecialtyId,
  difficulty: string,
  specificTopic?: string
): Promise<{ success: boolean; data: Question; source: 'gemini' | 'curated-engine' }> {
  try {
    const apiKey = getStoredApiKey();
    const res = await fetch('/api/gemini/generate-question', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ subspecialty, difficulty, specificTopic, apiKey }),
    });

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data && !json.fallback) {
        return { success: true, data: json.data, source: 'gemini' };
      }
    }
  } catch (err) {
    console.warn('Backend question generator failed, selecting from residency pool.', err);
  }

  const matching = INITIAL_QUESTIONS.filter((q) => q.subspecialtyId === subspecialty);
  const picked = matching[Math.floor(Math.random() * matching.length)] || INITIAL_QUESTIONS[0];
  return { success: true, data: picked, source: 'curated-engine' };
}
