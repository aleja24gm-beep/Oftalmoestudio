import { TopicDeepDive } from '../types/ophthalmology';

export const NEURO_TOPICS: TopicDeepDive[] = [
  // =========================================================================
  // 1. NEURITIS ÓPTICA DESMIELINIZANTE VS NMO / MOGAD
  // =========================================================================
  {
    id: 'deep-neuro-neuritis-optica',
    title: 'Neuritis Óptica Desmielinizante (ONTT) vs Espectro NMO / MOGAD y Papiledema',
    subspecialtyId: 'neuroftalmologia',
    summary: 'Monografía completa sobre neuropatías ópticas desmielinizantes típicas y atípicas, protocolo del Optic Neuritis Treatment Trial (ONTT), biomarcadores serológicos (Anti-AQP4 y Anti-MOG), diagnóstico diferencial de papiledema y ensayo NORDIC.',
    definitionAndEpidemiology: 'Inflamación aguda del nervio óptico típicamente en mujeres jóvenes (20-45 años). Constituye la primera manifestación clínica de una Esclerosis Múltiple (EM) en el 20% de los pacientes y ocurre en más del 50% en el curso de la enfermedad. Las formas atípicas incluyen la Neuromielitis Óptica (NMOSD / anti-AQP4) y la Enfermedad por Anticuerpos Anti-MOG (MOGAD).',
    anatomyAndPathophysiology: '1. Ruptura autoinmune de la barrera hematoencefálica con infiltrado perivenular de linfocitos T CD4+ reactivos a proteínas de la mielina.\n2. Destrucción de las vainas de mielina en axones del nervio óptico con pérdida de oligodendrocitos.\n3. Bloqueo de la conducción saltatoria en los nódulos de Ranvier y dispersión temporal de impulsos nerviosos.\n4. Degeneración axonal retrógrada axoplásmica con pérdida medible de fibras en el OCT de CFNR peripapilar a los 3-6 meses.\n5. En NMOSD: Astrocitopatía primaria mediada por anticuerpos IgG contra los canales de agua Aquaporina-4 (AQP4) con lisis celular dependiente del complemento.\n6. En MOGAD: Desmielinización mediada por anticuerpos contra la Glicoproteína de la Mielina del Oligodendrocito (MOG).',
    clinicalExamination: {
      biomicroscopy: 'Polo anterior rigurosamente normal. Hallazgo cardinal objetivo: Defecto Pupilar Aferente Relativo (DPAR / Pupila de Marcus Gunn) en el ojo afecto en todos los casos unilaterales o marcadamente asimétricos.',
      fundus: 'En 65% de los pacientes: Fondo de ojo NORMAL (Neuritis retrobulbar típica: "el paciente no ve nada y el médico no ve nada"). En 35%: Papilitis con edema papilar hiperémico leve a moderado sin exudados masivos.',
      specialSigns: '• Dolor con los movimientos oculares (en >92% de los casos, por tracción del anillo de Zinn sobre la vaina meníngea del nervio óptico durante la contracción de los rectos superior y medial).\n• Fenómeno de Uhthoff: Empeoramiento transitorio de la visión con el calor corporal o ejercicio.\n• Fenómeno de Pulfrich: Alteración en la percepción de profundidad y trayectorias de objetos en movimiento por conducción asimétrica entre ambos nervios ópticos.'
    },
    diagnosticWorkup: [
      {
        test: 'Resonancia Magnética (RM) cerebral y orbitaria con contraste (Gadolinio) y secuencias FLAIR / STIR',
        findings: 'Hiperintensidad y realce del nervio óptico en secuencias STIR. Búsqueda de placas desmielinizantes periventriculares ovoideas perpendiculares al cuerpo calloso ("dedos de Dawson"). Estratificación ONTT a 15 años: 25% riesgo de EM si RM normal vs >75% si >=1 lesión desmielinizante periventricular.'
      },
      {
        test: 'Biomarcadores serológicos específicos (Anti-AQP4 y Anti-MOG por ensayo basado en células - CBA)',
        findings: 'Obligatorios en presentaciones atípicas: agudeza visual severa (<20/200), afectación bilateral simultánea, edema de papila severo con hemorragias masivas, ausencia de dolor o refractariedad a corticoides intravenosos.'
      },
      {
        test: 'Campimetría computarizada Humphrey 30-2 / 24-2',
        findings: 'Escotoma central o cecocentral más frecuente; cualquier defecto campimétrico es posible (altitudinal, sectorial o constricción difusa).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Neuromielitis Óptica (NMOSD / anti-AQP4 positivo)', distinction: 'Pérdida visual profunda monocular o bilateral con escasa recuperación espontánea, lesiones longitudinales extensas en RM (>=3 segmentos vertebrales - LETM o compromiso del quiasma), nula respuesta a esteroides orales que exige plasmaféresis de rescate.' },
      { condition: 'MOGAD (Enfermedad por Anticuerpos Anti-MOG)', distinction: 'Papilitis bilateral muy marcada con edema severo, perineuritis con realce de la grasa orbitaria, gran dolor, marcada corticoideo-dependencia con recaídas frecuentes al suspender esteroides.' },
      { condition: 'Neuropatía Óptica Isquémica Anterior No Arterítica (NOIA-NA)', distinction: 'Paciente >50 años con factores de riesgo cardiovascular, pérdida visual súbita indolora al despertar, papila con edema pálido sectorial y ojo contralateral con "disc at risk" sin excavación.' }
    ],
    steppedManagement: {
      medical: '• Protocolo clásico del Optic Neuritis Treatment Trial (ONTT):\n  1) Metilprednisolona intravenosa 1000 mg (1 g) diarios durante 3 días consecutivos.\n  2) Seguido de Prednisona oral 1 mg/kg/día durante 11 días.\n  3) Reducción gradual en 4 días (20 mg día 1, 10 mg días 2 y 4).\n  - Conclusión ONTT: Este régimen ACELERA la recuperación visual en las primeras semanas, pero NO modifica la agudeza visual final a 1, 5 o 15 años comparado con placebo.\n• En formas graves refractarias (NMOSD o MOGAD con pérdida visual <20/200 sin mejoría a las 72-96h):\n  - Plasmaféresis precoz de rescate (PLEX: 5 a 7 sesiones en días alternos) o Inmunoglobulina intravenosa (IVIg) para evitar atrofia óptica irreversible.\n• Si RM cerebral positiva (>=2 lesiones desmielinizantes): Derivar a Neurología para inicio precoz de terapia modificadora de la enfermedad (DMT: Interferón beta, Ocrelizumab, Natalizumab).',
      surgical: 'Formalmente contraindicada la descompresión quirúrgica de la vaina del nervio óptico.'
    },
    clinicalApplicationPractical: '1. Regla de Oro del ONTT: NUNCA indicar prednisona oral sola a dosis estándar (1 mg/kg) de entrada, ya que en el estudio ONTT DUPLICÓ la tasa de recurrencias de neuritis óptica a los 2 años frente a placebo o esteroides IV.\n2. Criterios de alarma para sospechar NMO o MOGAD: agudeza visual basal peor de 20/200, afectación bilateral simultánea, ausencia de dolor con movimientos oculares o falta de recuperación tras 2 semanas.\n3. Advertir al paciente sobre el fenómeno de Uhthoff: no traduce un nuevo brote de la enfermedad sino un bloqueo fisiológico de conducción térmica transitorio en axones previamente dañados.',
    highYieldPearl: 'ONTT Board Pearl: La prednisona oral sola a dosis estándar (1 mg/kg/día) está FORMALMENTE CONTRAINDICADA en neuritis óptica típica porque duplica la tasa de recurrencias a los 2 años comparada con placebo o corticoides intravenosos.',
    keyDrugs: [
      { name: 'Metilprednisolona IV', dose: '1000 mg/día en infusión durante 3 días', warning: 'Monitorizar glucemia, presión arterial, arritmias cardíacas; administrar protección gástrica con IBP.' },
      { name: 'Prednisona oral', dose: '1 mg/kg/día durante 11 días (tras bolos IV)', warning: 'Descenso en 4 días; nunca iniciar como monoterapia primaria sin bolos intravenosos previos.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Por Qué la Prednisona Oral Sola está Contraindicada',
        category: 'Trampa de Tribunal',
        description: 'Pregunta canónica de Boards: "¿Por qué no envía a casa con prednisona oral a un paciente con neuritis óptica aguda?". Respuesta: Porque el estudio ONTT demostró que la prednisona oral sola a dosis estándar duplica la tasa de recurrencia de la neuritis óptica a los 2 años sin aportar beneficio visual a largo plazo.',
        trapToAvoid: 'Prescribir prednisona oral en la guardia por conveniencia o miedo a internar para bolos intravenosos.'
      },
      {
        title: 'Estratificación del Riesgo de Conversión a EM en el ONTT',
        category: 'Cifra Clave de Corte',
        description: 'Resultados a 15 años del ONTT: Pacientes con RM cerebral basal normal tuvieron un riesgo de desarrollar Esclerosis Múltiple del 25%. Pacientes con al menos 1 placa desmielinizante en la RM tuvieron un riesgo del 72% al 75%.',
        trapToAvoid: 'Decir que si la RM es normal el paciente nunca desarrollará EM (el riesgo sigue siendo del 25%).'
      },
      {
        title: 'Diferenciación en RM entre EM, NMO y MOGAD',
        category: 'Asociación Patognomónica',
        description: '• EM: Segmentos cortos anteriores o intraorbitarios del nervio óptico.\n• NMOSD: Segmentos largos posteriores (>50% de la longitud del nervio) con extensión quiasmática.\n• MOGAD: Afectación anterior con papilitis severa y realce marcado de las vainas meníngeas y grasa orbitaria (perineuritis).',
        trapToAvoid: 'Asumir que toda neuritis óptica bilateral extensa es una Esclerosis Múltiple.'
      },
      {
        title: 'Criterio de Rescate Inmediato en NMOSD',
        category: 'Pregunta Clásica',
        description: 'Si una neuritis óptica severa asociada a NMOSD no mejora tras 3-5 días de metilprednisolona IV: Indicar Plasmaféresis (PLEX) urgente. Esperar semanas condena al paciente a ceguera permanente por necrosis de astrocitos mediada por AQP4.',
        trapToAvoid: 'Esperar semanas repitiendo cursos de esteroides orales en lugar de indicar plasmaféresis.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudio ONTT (Beck et al., NEJM 1992): Demostró que los corticoides IV aceleran la recuperación pero no cambian el pronóstico visual final.',
      'Ensayos N-MOmentum (Inebilizumab) y PREVENT (Eculizumab): Terapias biológicas anti-CD19 y anti-C5 que revolucionaron la profilaxis de recaídas en NMOSD.'
    ],
    landmarkTrials: [
      {
        name: 'Optic Neuritis Treatment Trial (ONTT)',
        year: '1992-2008',
        conclusion: 'Corticoides IV aceleran la recuperación funcional pero no alteran la agudeza visual final a 15 años. La prednisona oral sola duplica la tasa de recurrencias. La RM cerebral basal predice fuertemente la conversión a Esclerosis Múltiple.',
        fellowshipRelevance: 'Ensayo cardinal que definió la práctica clínica y los protocolos de manejo de la neuritis óptica a nivel mundial.'
      }
    ],
    histopathologyAndGenetics: 'Placas de desmielinización perivenular con infiltrado linfocitario T y macrófagos espumosos cargados de mielina. En NMOSD: necrosis perivascular de astrocitos con pérdida de inmunorreactividad de AQP4 y depósito de complemento C9neo.',
    surgicalPearls: [
      'La descompresión de la vaina del nervio óptico está contraindicada en neuritis óptica; sólo tiene rol en hipertensión intracraneal idiopática refractaria.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Mujer de 26 años acude con dolor al mover el ojo derecho y visión borrosa (20/100) de 48 horas de evolución. Al examen presenta DPAR derecho. Fondo de ojo normal. ¿Cuál es su sospecha diagnóstica, qué fármaco oral está formalmente contraindicado y qué estudio de imagen debe solicitar inmediatamente?',
        answer: '1) Diagnóstico: Neuritis óptica retrobulbar típica derecha (posible primer brote de Esclerosis Múltiple).\n2) Contraindicación formal: Prednisona oral sola a dosis estándar (1 mg/kg/día), ya que duplica la tasa de recurrencia según el ONTT.\n3) Estudio inmediato: Resonancia magnética cerebral y de órbitas con gadolinio y supresión grasa (STIR) para evaluar realce del nervio óptico y lesiones periventriculares.',
        trap: 'Indicar prednisona oral para manejo ambulatorio o afirmar que el fondo de ojo normal descarta neuritis óptica.'
      }
    ]
  },

  // =========================================================================
  // 2. PARÁLISIS OCULOMOTORAS DE PARES CRANEALES (III, IV Y VI)
  // =========================================================================
  {
    id: 'deep-neuro-paralisis-pares-craneales',
    title: 'Parálisis Oculomotoras de Pares Craneales (III, IV y VI): Pupila de Aneurisma, Test de Bielschowsky e Hipertensión Intracraneal',
    subspecialtyId: 'neuroftalmologia',
    summary: 'Monografía completa sobre parálisis de pares craneales oculomotores: Regla de la pupila en parálisis del III par (descarte de aneurisma de la arteria comunicante posterior), test de Park-Bielschowsky de 3 pasos para el IV par y signo de falsa localización del VI par craneal.',
    definitionAndEpidemiology: 'Pérdida de función motora de los pares craneales que inervan la musculatura extraocular. Causas principales: microangiopatía isquémica (diabetes, hipertensión), compresión tumoral/aneurismática, traumatismos y procesos inflamatorios.',
    anatomyAndPathophysiology: '1. III Par (Oculomotor): Núcleo en mesencéfalo. Fibras pupilomotoras parasimpáticas periféricas en el cuadrante superomedial del tronco del nervio (muy vulnerables a compresión extrínseca por aneurisma de PCoA); fibras motoras centrales más profundas (afectadas por isquemia de vasa nervorum en diabetes).\n2. IV Par (Troclear): Único par que decusa dorsalmente y emerge por la cara posterior del tronco encefálico; trayecto intracraneal más largo y delgado (muy vulnerable a traumatismos de cráneo cerrados).\n3. VI Par (Abducens): Núcleo en puente. Pasa por el canal de Dorello bajo el ligamento petroesfenoidal de Grüber; trayecto vertical prolongado sobre el clivus que lo hace susceptible a estiramiento mecánico por hipertensión intracraneal (signo de falsa localización).',
    clinicalExamination: {
      biomicroscopy: 'III Par: Ptosis completa o severa (músculo elevador). Ojo desviado "hacia abajo y afuera" (down and out) por acción no contrarrestada del recto lateral (VI) y oblicuo superior (IV). Evaluación crítica de la pupila: Midriasis arreactiva (compromiso parasimpático).\nIV Par: Hipertropia del ojo afecto que empeora al mirar hacia el lado opuesto y al inclinar la cabeza hacia el lado afecto (tortícolis compensatorio hacia el lado sano).\nVI Par: Limitación de la abducción del ojo afecto con endotropia en posición primaria que aumenta al mirar hacia el lado de la lesión.',
      fundus: 'Descartar edema de papila bilateral en parálisis del VI par (signo de hipertensión intracraneal).',
      specialSigns: '• Maniobra de Bielschowsky: Aumento de hipertropia con inclinación de la cabeza ipsilateral al IV par parético.\n• Signo de Pseudo-Graefe: Retracción o elevación anómala del párpado superior al intentar la infraducción o aducción por regeneración aberrante del III par.\n• Signo de falsa localización del VI par por compresión o estiramiento en el canal de Dorello ante hipertensión endocraneana.'
    },
    diagnosticWorkup: [
      { test: 'Angio-TC o Angio-RM cerebral urgente (con reconstrucción 3D)', findings: 'Mandatorio en TODA parálisis del III par con compromiso pupilar (midriasis) o incompleta para descartar aneurisma de la arteria comunicante posterior (PCoA) o de la carótida interna.' },
      { test: 'Test de Park-Bielschowsky de 3 pasos (en diplopía vertical)', findings: 'Paso 1: ¿Qué ojo está más alto en posición primaria? Paso 2: ¿La hipertropia aumenta en mirada a la derecha o izquierda? Paso 3: ¿La hipertropia aumenta al inclinar la cabeza a la derecha o izquierda? Si es hipertropia OD que aumenta en mirada izquierda y con inclinación cefálica a la derecha = Parálisis del IV par derecho.' }
    ],
    differentialDiagnosis: [
      { condition: 'Miastenia Gravis', distinction: 'Puede simular cualquier parálisis oculomotora sin compromiso pupilar nunca; fluctuación diurna y prueba del hielo positiva.' },
      { condition: 'Orbitopatía Tiroidea (Graves)', distinction: 'Restricción motora con test de ducción forzada positivo; engrosamiento muscular en TAC orbitario.' }
    ],
    steppedManagement: {
      medical: '• Parálisis isquémica microvascular (pupila respetada en paciente anciano hipertenso/diabético):\n  - Control estricto de glucemia y presión arterial.\n  - Oclusión de un ojo o prisma de Fresnel para aliviar diplopía.\n  - Seguimiento estrecho: la mejoría espontánea ocurre entre las 6 y 12 semanas.\n• Si hay compromiso pupilar en III par: Traslado de emergencia para neurocirugía endovascular (embolización / coiling del aneurisma).',
      surgical: 'Cirugía de estrabismo en parálisis definitivas no resueltas tras 6-12 meses de estabilidad (debilitamiento de antagonistas o transposiciones musculares de Jensen/Hummelsheim).'
    },
    clinicalApplicationPractical: '1. "Regla de la pupila": Parálisis del III par con pupila midriática arreactiva = Aneurisma de PCoA hasta demostrar lo contrario. Requiere Angio-TC inmediata.\n2. La parálisis aislada del VI par en niños o adultos jóvenes exige neuroimagen inmediata para descartar glioma del tronco, masa de fosa posterior o hipertensión intracraneal.',
    highYieldPearl: 'III Par y Pupila: Las fibras pupilomotoras parasimpáticas discurren por la superficie superomedial del nervio. La compresión por un aneurisma de PCoA causa dilatación pupilar precoz; la isquemia microvascular diabética respeta la pupila en el 80% de los casos.',
    keyDrugs: [
      { name: 'Nimodipino', dose: '60 mg VO cada 4 horas', warning: 'Prevención del vasoespasmo cerebral tras rotura de aneurisma.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Mnemotecnia del Test de Tres Pasos de Park-Bielschowsky',
        category: 'Mnemotecnia',
        description: 'Determina el músculo ciclovertical parético. 1) Hipertropia OD (recto inferior/oblicuo superior OD o recto superior/oblicuo inferior OI). 2) Aumenta en levoversión (oblicuos derechos o rectos izquierdos). 3) Aumenta con inclinación cefálica derecha (recto superior/oblicuo superior OD). Intersección = Oblicuo Superior OD (IV par derecho).',
        trapToAvoid: 'Aplicar el test de 3 pasos en diplopías de causa restrictiva orbitaria (ej. fracturas de piso o Graves); el test SOLO es válido para parálisis de pares cicloverticales.'
      },
      {
        title: 'Signo de Falsa Localización del VI Par',
        category: 'Trampa de Tribunal',
        description: 'El VI par tiene un recorrido vertical largo sobre el clivus en el canal de Dorello. Cualquier aumento de la presión intracraneal tracciona el nervio contra el borde del peñasco temporal, causando parálisis uni o bilateral SIN que exista una lesión directa en el nervio.',
        trapToAvoid: 'Localizar la lesión en el vértice orbitario basándose solo en un VI par bilateral en una mujer joven con cefalea (sospechar pseudotumor cerebri).'
      },
      {
        title: 'Aneurisma de Arteria Comunicante Posterior y III Par',
        category: 'Asociación Patognomónica',
        description: 'Toda parálisis del III par con midriasis pupilar o dolor periorbitario agudo debe considerarse una emergencia neuroquirúrgica vital por riesgo inminente de hemorragia subaracnoidea.',
        trapToAvoid: 'Calificarlo como parálisis isquémica y citar al paciente en 1 mes (el aneurisma puede romperse provocando hemorragia subaracnoidea mortal).'
      }
    ],
    fellowshipKeyPoints: [
      'Regeneración aberrante del III par (Signo de Pseudo-Graefe o retracción palpebral en aducción/depresión): Sólo ocurre tras compresión tumoral/aneurismática o trauma, NUNCA tras infarto microvascular diabético.',
      'Parálisis del IV par bilateral: Aumento de la hipertropia en ambas inclinaciones cefálicas (V invertida) y exciclotorsión bilateral >10° en doble varilla de Maddox.'
    ]
  },

  // =========================================================================
  // 3. PAPILEDEMA E HIPERTENSIÓN INTRACRANEAL IDIOPÁTICA (IIH / NORDIC)
  // =========================================================================
  {
    id: 'deep-neuro-papiledema-hipertension-intracraneal',
    title: 'Papiledema e Hipertensión Intracraneal Idiopática (IIH / Pseudotumor Cerebri): Criterios de Friedman y Ensayo NORDIC',
    subspecialtyId: 'neuroftalmologia',
    summary: 'Monografía completa sobre edema de papila por hipertensión intracraneal, criterios diagnósticos modificados de Friedman, escala de Frisén para estadificación del papiledema y tratamiento médico con acetazolamida según el ensayo multicéntrico NORDIC.',
    definitionAndEpidemiology: 'El papiledema es el edema de la cabeza del nervio óptico secundario exclusivamente a elevación de la presión intracraneal (PIC). La Hipertensión Intracraneal Idiopática (IIH / Pseudotumor Cerebri) es la etiología más frecuente en mujeres en edad fértil con sobrepeso u obesidad (incidencia de hasta 15-20 por 100,000 en mujeres obesas).',
    anatomyAndPathophysiology: '1. El espacio subaracnoideo cerebral se continúa con la vaina meníngea del nervio óptico.\n2. La hipertensión del líquido cefalorraquídeo comprime la vaina del nervio óptico a nivel retrobulbar en el espacio perióptico.\n3. Obstrucción mecánica del transporte axoplásmico ortógrado (rápido y lento) a nivel de la lámina cribosa.\n4. Tumefacción axonal con acumulación de mitocondrias y organelos en la capa de fibras nerviosas peripapilar.\n5. Congestión venosa secundaria con hemorragias en llama y exudados algodonosos.',
    clinicalExamination: {
      biomicroscopy: 'Polo anterior rigurosamente normal. Reflejos pupilares típicamente normales en fases iniciales (sin DPAR salvo atrofia óptica asimétrica muy tardía).',
      fundus: 'Edema de papila bilateral. Escala de Frisén (Grados 0 a 5): Grado 1 (borramiento del polo nasal en C), Grado 2 (borramiento circunferencial completo de 360°), Grado 3 (oscurecimiento de vasos en el margen papilar), Grado 4 (oscurecimiento parcial de vasos sobre la excavación central), Grado 5 (oscurecimiento total de los vasos papilares centrales).',
      specialSigns: '• Oscurecimientos visuales transitorios (TVOs): Pérdida de visión de segundos de duración desencadenada por cambios posturales (agacharse o levantarse).\n• Acúfenos o tinnitus pulsátil sincrónico con el pulso cardíaco.\n• Cefalea occipital matutina que empeora con el Valsalva.'
    },
    diagnosticWorkup: [
      { test: 'Resonancia Magnética (RM) cerebral con contraste y Venografía por RM (MRV)', findings: 'Descarta masa ocupante de espacio y trombosis de senos venosos durales. Signos de hipertensión intracraneal: Silla turca vacía o parcialmente vacía (empty sella), aplanamiento del polo posterior del globo ocular, tortuosidad vertical y dilatación de la vaina del nervio óptico con líquido en secuencias T2, y estenosis de los senos transversos en MRV.' },
      { test: 'Punción Lumbar (PL) con medición de presión de apertura', findings: 'Mandatoria tras neuroimagen normal. Criterio diagnóstico de Friedman: Presión de apertura >250 mm H2O en adultos (>280 mm H2O en niños no sedados) con composición citobioquímica de LCR estrictamente normal.' },
      { test: 'Campimetría computarizada Humphrey 24-2 / 30-2', findings: 'Aumento del tamaño de la mancha ciega (hallazgo más precoz); constricción concéntrica periférica progresiva y defectos altitudinales nasales inferiores en daño axonal severo.' }
    ],
    differentialDiagnosis: [
      { condition: 'Pseudopapiledema por Drusas de Papila', distinction: 'Ausencia de hiperemia papilar, emergencia vascular normal sin oscurecimiento de vasos; ecografía B demuestra ecos hiperecogénicos con atenuación acústica que persisten a baja ganancia (autofluorescencia positiva).' },
      { condition: 'Papilitis bilateral (MOGAD)', distinction: 'Pérdida visual aguda y severa con DPAR y pleocitosis en LCR.' }
    ],
    steppedManagement: {
      medical: '• Pérdida de peso reglada: Reducción del 6% al 10% del peso corporal reduce drásticamente la PIC y puede inducir remisión completa.\n• Farmacoterapia según el Ensayo Clínico NORDIC:\n  - Acetazolamida (Diamox) oral: Fármaco de primera línea; dosis de 1 a 2 g/día (hasta 4 g/día según tolerancia en el NORDIC).\n  - Furosemida o Topiramato (inhibidor débil de anhidrasa carbónica con beneficio en pérdida de peso y profilaxis de cefalea).\n• En casos fulminantes con pérdida campimétrica acelerada: Corticoides IV en pulsos como puente a cirugía.',
      surgical: 'Indicada en fallo del tratamiento médico con deterioro visual progresivo:\n1. Fenestración de la vaina del nervio óptico (ONSD): Indicada cuando predomina la pérdida visual con cefalea controlada.\n2. Derivación lumboperitoneal o ventrículoperitoneal (shunt).\n3. Stenting del seno venoso transverso si se demuestra un gradiente de presión transestenótica significativo (>8-10 mmHg).'
    },
    clinicalApplicationPractical: '1. Regla de Oro en Sospecha de Papiledema: NUNCA realizar punción lumbar sin una neuroimagen previa (TC o RM) que descarte una lesión expansiva intracraneal ocupante de espacio, por riesgo inminente de herniación uncal o tonsilar mortal.\n2. La agudeza visual central con optotipos de Snellen puede mantenerse en 20/20 hasta etapas terminales a pesar de una pérdida masiva y devastadora del campo visual. El monitoreo estrecho con campimetría seriada y OCT de capa de fibras nerviosas es el parámetro clínico mandatorio para decidir escalar a cirugía.',
    highYieldPearl: 'Papiledema y NORDIC: La agudeza visual puede ser 20/20 con daño severo. El campo visual es el parámetro de seguimiento primordial. El ensayo NORDIC demostró que la Acetazolamida a dosis altas (hasta 4 g/día) combinada con dieta baja en sodio mejora significativamente el campo visual comparada con placebo.',
    keyDrugs: [
      { name: 'Acetazolamida', dose: '1000 mg a 4000 mg/día divididos cada 12 o 8 horas', warning: 'Parestesias, acidosis metabólica, hipopotasemia, litiasis renal y disgeusia a bebidas carbonatadas.' },
      { name: 'Topiramato', dose: '50-100 mg VO cada 12 horas', warning: 'Efecto anorexígeno favorable; riesgo de glaucoma agudo por cierre angular por efusión coroidea.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Cifra de Presión de Apertura Diagnóstica en Punción Lumbar',
        category: 'Cifra Clave de Corte',
        description: 'Presión de apertura >250 mm H2O en adultos (>280 mm H2O en niños) en decúbito lateral. Valores entre 200 y 250 mm H2O son limítrofes y requieren correlación clínica y radiológica estrecha.',
        trapToAvoid: 'Medir la presión de apertura con el paciente sentado o con las piernas flexionadas forzadas (falsea la presión al alza).'
      },
      {
        title: 'Signo Clínico más Sensible de Deterioro: Campo Visual vs Agudeza',
        category: 'Trampa de Tribunal',
        description: 'La agudeza visual central se preserva intacta hasta fases muy avanzadas. El parámetro más sensible y fiable de progresión que define el fracaso terapéutico es la desviación media (MD) en la campimetría computarizada.',
        trapToAvoid: 'Dar el alta o postergar controles basándose en una agudeza visual de 20/20.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo NORDIC (Wall et al., JAMA 2014): Primer ensayo aleatorizado doble ciego que confirmó el beneficio de la acetazolamida a dosis altas junto a dieta hipocalórica.',
      'Criterios modificados de Friedman (2013): Requisitos estrictos de papiledema, examen neurológico normal salvo VI par, neuroimagen normal sin trombosis venosa y LCR normal con PIC >250 mmH2O.'
    ],
    landmarkTrials: [
      {
        name: 'NORDIC Idiopathic Intracranial Hypertension Treatment Trial',
        year: '2014',
        conclusion: 'En pacientes con pérdida visual leve a moderada por IIH, la acetazolamida a dosis altas (hasta 4 g/día) sumada a un programa de pérdida de peso produjo una mejoría significativa en la desviación media del campo visual, calidad de vida y grado de papiledema comparado con dieta y placebo.',
        fellowshipRelevance: 'Validó científicamente el uso de dosis altas de acetazolamida como estándar de oro médico.'
      }
    ]
  },

  // =========================================================================
  // 4. NEUROPATÍAS ÓPTICAS ISQUÉMICAS: NOIA-A VS NOIA-NA
  // =========================================================================
  {
    id: 'deep-neuro-noia-arteritica-no-arteritica',
    title: 'Neuropatías Ópticas Isquémicas: NOIA Arterítica (Arteritis de Células Gigantes) vs NOIA No Arterítica (NOIA-NA)',
    subspecialtyId: 'neuroftalmologia',
    summary: 'Monografía completa sobre neuropatías ópticas isquémicas anteriores: Emergencia vital de la NOIA Arterítica por Arteritis de Células Gigantes (criterios ACR/EULAR, VSG/PCR, biopsia de arteria temporal con skip lesions, bolos urgentes de metilprednisolona y Tocilizumab) frente a la NOIA No Arterítica (disc at risk, apnea del sueño, hipotensión nocturna e inhibidores de PDE-5).',
    definitionAndEpidemiology: 'La Neuropatía Óptica Isquémica Anterior (NOIA) es el infarto de la cabeza del nervio óptico irrigada por las arterias ciliares posteriores cortas. Se divide en No Arterítica (NOIA-NA, 90-95% de los casos, típica en pacientes de 50-70 años con factores de riesgo vascular) y Arterítica (NOIA-A, 5-10%, complicación ocular más devastadora de la Arteritis de Células Gigantes en mayores de 50-60 años con riesgo de ceguera bilateral del 50% en días sin tratamiento).',
    anatomyAndPathophysiology: '1. Anatomía Vascular: La cabeza del nervio óptico recibe su perfusión del círculo arterial de Zinn-Haller, formado por anastomosis de las arterias ciliares posteriores cortas (ramas de la arteria oftálmica).\n2. NOIA Arterítica (NOIA-A): Vasculitis granulomatosa inmunomediada de arterias de mediano y gran calibre (con lámina elástica interna rica en elastina). La inflamación transmural con infiltrado de células gigantes y macrófagos ocluye la luz vascular de las ciliares posteriores cortas, causando un infarto isquémico transmural agudo extenso de toda la cabeza del nervio óptico.\n3. NOIA No Arterítica (NOIA-NA): Insuficiencia circulatoria funcional transitoria de la microcirculación ciliar posterior, típicamente desencadenada por hipotensión arterial nocturna (nocturnal dipping) en ojos con una conformación anatómica susceptible ("Disc at Risk" o papila pequeña y apiñada con excavación fisiológica ausente o mínima <0.2).',
    clinicalExamination: {
      biomicroscopy: 'Polo anterior rigurosamente normal. Hallazgo cardinal: DPAR marcado en el ojo afecto.',
      fundus: '• NOIA-A: Edema de papila pálido, blanquecino en "tiza" (chalky-white pallor) difuso con atenuación arteriolar severa e infartos retinianos contiguos (manchas algodonosas peripapilares); puede coexistir con oclusión de arteria ciliorretiniana (90% patognomónica de vasculitis si acompaña a NOIA).\n• NOIA-NA: Edema de papila típicamente sectorial e hiperémico (con dilatación telangiectásica peripapilar) y hemorragias en llama peripapilares. El ojo contralateral muestra "Disc at Risk" sin excavación fisiológica.',
      specialSigns: '• Síntomas sistémicos de ACG: Claudicación mandibular al masticar (síntoma de mayor especificidad: odds ratio >9), cefalea temporal pulsátil, hipersensibilidad del cuero cabelludo al peinarse, polimialgia reumática (dolor/rigidez en cinturas escapular y pélvica) y amaurosis fugax previa.'
    },
    diagnosticWorkup: [
      {
        test: 'Analítica de Urgencia Inmediata en todo paciente >50 años con edema de papila',
        findings: 'Velocidad de Sedimentación Globular (VSG, típicamente >50-100 mm/h; fórmula de corte: edad/2 en varones, [edad+10]/2 en mujeres), Proteína C Reactiva (PCR ultrasensible >10-20 mg/L, más sensible que la VSG) y Plaquetas (trombocitosis reactiva >400,000/µL por elevación de IL-6).'
      },
      {
        test: 'Biopsia de Arteria Temporal (BAT) unilateral o bilateral',
        findings: 'Estándar de oro anatomopatológico. Fragmento de mínimo 2.0 a 3.0 cm de longitud fijado en formol para superar las lesiones salteadas ("skip lesions"). Infiltrado inflamatorio panarterial mononuclear y granulomatoso con células gigantes multinucleadas, fragmentación de la lámina elástica interna y proliferación miointimal.'
      },
      {
        test: 'Angio-Fluoresceinografía Retiniana (FAG)',
        findings: 'En NOIA-A: Retraso masivo y parcheado en el llenado de la coroides peripapilar y del nervio óptico en fases tempranas (>15-20 segundos). En NOIA-NA: Llenado coroideo normal con hiperfluorescencia tardía de la papila.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Neuritis Óptica Desmielinizante', distinction: 'Pacientes jóvenes (<45 años), dolor con movimientos oculares y excelente recuperación visual espontánea.' },
      { condition: 'Papiledema por Hipertensión Intracraneal', distinction: 'Edema bilateral con preservación de agudeza visual y sin DPAR.' },
      { condition: 'Neuropatía Óptica Isquémica Posterior (PION)', distinction: 'Fondo de ojo completamente normal en fase aguda; suele ser arterítica, quirúrgica (cirugías de columna prolongadas o bypass cardíaco) o no arterítica.' }
    ],
    steppedManagement: {
      medical: '• PROTOCOLO URGENTE EN NOIA-A (Sospecha de Arteritis de Células Gigantes):\n  1) NUNCA ESPERAR AL RESULTADO DE LA BIOPSIA PARA TRATAR: El tratamiento debe iniciarse en los primeros 30-60 minutos de la sospecha.\n  2) Metilprednisolona Intravenosa en Pulsos: 1000 mg (1 g) al día en infusión de 2 horas durante 3 a 5 días consecutivos para proteger de inmediato el ojo contralateral de ceguera catastrófica.\n  3) Transición a Prednisona oral a dosis plenas: 1.0 a 1.2 mg/kg/día durante 4 a 6 semanas.\n  4) Terapia Biológica Ahorradora de Esteroides: Tocilizumab (anticuerpo monoclonal anti-receptor de IL-6, 162 mg SC semanal según ensayo GiACTA) para reducir recaídas y toxicidad esteroidea.\n  5) Cobertura profiláctica: Inhibidor de bomba de protones, calcio + vitamina D, bifosfonatos y cribado de tuberculosis/hepatitis.\n• PROTOCOLO EN NOIA-NA:\n  - No existe tratamiento curativo con evidencia clase I; controlar factores de riesgo cardiovascular (diabetes, HTA, dislipidemia).\n  - Suspender antihipertensivos nocturnos para evitar caídas de presión durante el sueño; descartar y tratar síndrome de apnea obstructiva del sueño (CPAP).\n  - Contraindicados formalmente inhibidores de PDE-5 (Sildenafil, Tadalafil).',
      surgical: 'Biopsia de arteria temporal en los primeros 7-14 días (los hallazgos histopatológicos persisten hasta 2-4 semanas después de iniciar esteroides). La descompresión quirúrgica del nervio óptico está contraindicada según el ensayo IONDT.'
    },
    clinicalApplicationPractical: '1. Ante todo paciente mayor de 50 años con pérdida visual monocular súbita y edema de papila: Solicitar de inmediato VSG, PCR y hemograma con plaquetas en el laboratorio de guardia.\n2. Si la sospecha clínica o analítica es alta: Canalizar vía e iniciar 1 g de metilprednisolona IV en ese momento exacto. No enviar al paciente a su domicilio a esperar la cita de biopsia.\n3. Advertir a los pacientes con NOIA-NA que el riesgo de afectación del ojo contralateral es del 15-20% a 5 años, y que nunca deben tomar sildenafil u otros inhibidores de fosfodiesterasa 5.',
    highYieldPearl: 'NOIA-A vs NOIA-NA: La NOIA-A presenta edema blanco tiza con retraso del llenado coroideo en FAG y requiere bolos de metilprednisolona IV 1 g/día URGENTES para proteger el ojo contralateral. La NOIA-NA presenta edema sectorial hiperémico en un ojo con "disc at risk" y no responde a esteroides.',
    keyDrugs: [
      { name: 'Metilprednisolona IV', dose: '1000 mg diarios durante 3-5 días consecutivos', warning: 'Emergencia oftalmológica; proteger estómago con omeprazol y monitorizar glucemias continuas.' },
      { name: 'Tocilizumab (Actemra)', dose: '162 mg SC semanal (Ensayo GiACTA)', warning: 'Anticuerpo anti-IL-6; neutraliza la PCR falseando su valor como marcador de actividad inflamatoria.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Claudicación Mandibular: El Síntoma más Específico',
        category: 'Asociación Patognomónica',
        description: 'La fatiga o dolor de los músculos maseteros al masticar o hablar continuo refleja isquemia de ramas de la arteria carótida externa (arteria maxilar). Tiene una especificidad superior al 95% para Arteritis de Células Gigantes.',
        trapToAvoid: 'Confundir claudicación mandibular con dolor en articulación temporomandibular o dolor dental.'
      },
      {
        title: 'Falso Negativo de Biopsia por Skip Lesions',
        category: 'Cifra Clave de Corte',
        description: 'La inflamación en la arteritis temporal es discontinua (skip lesions). Tomar un segmento arterial menor de 2.0 cm o realizar cortes histológicos insuficientes aumenta los falsos negativos en un 10-15%. Si la sospecha clínica persiste, indicar biopsia contralateral.',
        trapToAvoid: 'Suspender los esteroides ante una biopsia unilateral negativa si la sospecha clínica y los reactantes son inequívocos.'
      },
      {
        title: 'Ensayo IONDT en NOIA-NA',
        category: 'Trampa de Tribunal',
        description: 'El Ischemic Optic Neuropathy Decompression Trial (IONDT) demostró que la cirugía de descompresión de la vaina del nervio óptico NO solo no beneficia la NOIA-NA, sino que incrementa significativamente la tasa de empeoramiento visual comparada con observación.',
        trapToAvoid: 'Proponer fenestración o descompresión quirúrgica del nervio óptico en NOIA-NA.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo GiACTA (Stone et al., NEJM 2017): Demostró que Tocilizumab semanal combinado con esteroides logró una remisión sostenida a las 52 semanas del 56% frente al 14-18% con esteroides aislados, con marcado ahorro de corticoides.',
      'Ensayo IONDT (JAMA 1995): Condenó definitivamente el tratamiento quirúrgico descompresivo de la NOIA-NA.'
    ],
    landmarkTrials: [
      {
        name: 'GiACTA Landmark Trial',
        year: '2017',
        conclusion: 'Tocilizumab subcutáneo semanal produjo tasas de remisión significativamente mayores y redujo a la mitad la dosis acumulada de corticoides en Arteritis de Células Gigantes.',
        fellowshipRelevance: 'Aprobación por la FDA/EMA del primer fármaco biológico específico para ACG.'
      }
    ]
  },

  // =========================================================================
  // 5. ANOMALÍAS PUPILARES: HORNER, ADIE Y ARGYLL ROBERTSON
  // =========================================================================
  {
    id: 'deep-neuro-anomalias-pupilares-horner-adie',
    title: 'Anomalías Pupilares y Diagnóstico de Anisocoria: Síndrome de Horner, Pupila de Adie y Argyll Robertson',
    subspecialtyId: 'neuroftalmologia',
    summary: 'Monografía completa sobre semiología pupilar avanzada: Algoritmo diferencial de anisocoria en luz vs oscuridad, Síndrome de Horner y descarte urgente de Disección de la Arteria Carótida Interna (prueba de Apraclonidina y Cocaína), Pupila Tónica de Adie con hipersensibilidad de denervación a Pilocarpina 0.125%, Pupila de Argyll Robertson y DPAR.',
    definitionAndEpidemiology: 'La anisocoria es la asimetría en el diámetro pupilar entre ambos ojos. Una diferencia fisiológica menor de 1 mm con reactividad lumínica normal y simétrica en luz y oscuridad ocurre en el 20% de la población sana (anisocoria esencial o fisiológica). Las causas patológicas reflejan disfunción de la eferencia simpática (Horner) o parasimpática (Adie, III par, farmacológica).',
    anatomyAndPathophysiology: '1. Vía Simpática Pupilar (3 Neuronas):\n   • 1ª Neurona (Central): Hipotálamo posterolateral desciende por tronco encefálico hasta el centro cilioespinal de Budge-Waller (C8-T2).\n   • 2ª Neurona (Preganglionar): Cruza el ápice pulmonar sobre la pleura parietal, rodea la arteria subclavia y asciende por la cadena simpática cervical hasta el ganglio cervical superior (a nivel de la bifurcación carotídea C2-C3).\n   • 3ª Neurona (Posganglionar): Sigue el plexo pericarotídeo de la carótida interna a través del canal carotídeo y seno cavernoso, uniéndose a la rama nasociliar de V1 y nervios ciliares largos para inervar el músculo dilatador del iris y músculo tarsal superior de Müller.\n2. Vía Parasimpática Pupilar (Constricción):\n   • Núcleo de Edinger-Westphal (mesencéfalo) -> fibras por el III par craneal hasta el ganglio ciliar en la órbita posterior -> nervios ciliares cortos (proporción 30:1 inervando músculo ciliar para acomodación vs esfínter pupilar para miosis).\n3. Síndrome de Horner:\n   • Pérdida de la inervación simpática: ptosis leve (1.5-2 mm por paresia de Müller), miosis (ojo afecto más pequeño), enoftalmos aparente y anhidrosis facial (si la lesión es previa a la bifurcación carotídea).\n4. Pupila Tónica de Adie:\n   • Daño idiopático o postviral en el ganglio ciliar o nervios ciliares cortos con reinervación aberrante preferencial hacia el esfínter pupilar por axones acomodativos (disociación luz-cerca con constricción tónica lenta sostenida al enfocar de cerca).',
    clinicalExamination: {
      biomicroscopy: '• En Pupila de Adie: Examen en lámpara a gran aumento muestra movimientos vermiformes segmentarios del margen pupilar (parálisis sectorial del esfínter del iris en "bolsa de gusanos").\n• En Horner: Evaluar heterocromía de iris (iris más claro en el ojo con Horner congénito por falta de maduración melanocítica simpático-dependiente).',
      specialSigns: '• Determinación inicial obligatoria: ¿La anisocoria es mayor en la oscuridad o en la luz?\n  - Mayor en la oscuridad: El ojo patológico es el más PEQUEÑO (falla la dilatación simpática -> Síndrome de Horner o pupila miótica farmacológica).\n  - Mayor en la luz: El ojo patológico es el más GRANDE (falla la constricción parasimpática -> Pupila de Adie, parálisis del III par o midriasis farmacológica).'
    },
    diagnosticWorkup: [
      {
        test: 'Test Farmacológico de Apraclonidina al 0.5% (o Cocaína al 4-10%) para Síndrome de Horner',
        findings: '• Apraclonidina 0.5%: Agonista alfa-2 con actividad alfa-1 débil. En ojo normal apenas actúa; en el ojo con Horner, la hipersensibilidad de denervación de receptores alfa-1 en el dilatador del iris produce midriasis y elevación del párpado ptósico (REVERSIÓN DE LA ANISOCORIA Y DE LA PTOSIS en 30-45 minutos: prueba positiva patognomónica).\n• Cocaína 4-10%: Bloquea la recaptación de noradrenalina. La pupila normal dilata; la pupila con Horner NO dilata (aumenta la anisocoria).'
      },
      {
        test: 'Angio-TC o Angio-RM de Cabeza y Cuello de Emergencia',
        findings: 'Mandatorio de inmediato ante todo SÍNDROME DE HORNER AGUDO O DOLOROSO para descartar disección de la arteria carótida interna (riesgo inminente de ictus isquémico tromboembólico masivo).'
      },
      {
        test: 'Test de Pilocarpina Diluida al 0.1% o 0.125% para Pupila de Adie',
        findings: 'En ojo normal, la pilocarpina tan diluida no induce miosis. En la pupila tónica de Adie, la supersensibilidad por denervación colinérgica posganglionar del esfínter produce una miosis intensa inmediata (contrae fuertemente la pupila afectada).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Midriasis Farmacológica (anticolinérgicos tópicos como Atropina/Ciclopentolato o contacto con escopolamina)', distinction: 'La pupila está ampliamente midriática (7-8 mm) y NO se contrae ni siquiera con Pilocarpina pura concentrada al 1% o 2% (receptores colinérgicos bloqueados farmacológicamente).' },
      { condition: 'Pupila de Argyll Robertson', distinction: 'Pupilas bilaterales pequeñas e irregulares con disociación luz-cerca marcada (reaccionan a la acomodación pero no a la luz) causadas por neurosífilis con lesión en el tegmento mesencefálico.' },
      { condition: 'Anisocoria Fisiológica', distinction: 'Diferencia <1 mm constante en luz y oscuridad con reflejos fotomotores normales y simétricos.' }
    ],
    steppedManagement: {
      medical: '• Síndrome de Horner por Disección Carotídea:\n  - Anticoagulación terapéutica o antiagregación plaquetaria doble inmediata en unidad de ictus para prevenir tromboembolismo cerebral.\n• Síndrome de Horner por Tumor de Pancoast (lesión de 2ª neurona en vértice pulmonar):\n  - Evaluación por Oncología Torácica (quimiorradioterapia / resección).\n• Pupila Tónica de Adie:\n  - Proceso benigno habitualmente idiopático (puede asociar arreflexia osteotendinosa en miembros inferiores: Síndrome de Adie-Holmes).\n  - Colirio de Pilocarpina 0.125% para aliviar fotofobia o gafas de sol con corrección óptica de cerca.',
      surgical: 'Tratamiento endovascular (stenting carotídeo) en disecciones carotídeas con compromiso hemodinámico.'
    },
    clinicalApplicationPractical: '1. Ante todo paciente que consulte por un Síndrome de Horner de inicio reciente acompañado de dolor cervical, facial o retroocular: Considerar DISECCIÓN DE ARTERIA CARÓTIDA INTERNA hasta demostrar lo contrario. Derivar de inmediato a urgencias para Angio-TC o Angio-RM de troncos supraaórticos.\n2. Para diferenciar Midriasis por III Par de Midriasis Farmacológica: Instilar 1 gota de Pilocarpina al 1%. Si la pupila se contrae, es parálisis del III par; si la pupila permanece fija y dilatada, es bloqueo farmacológico por colirio o planta con alcaloides tropánicos (Datura/Brugmansia).',
    highYieldPearl: 'Algoritmo de Anisocoria: Mayor en oscuridad = Horner (Apraclonidina revierte la miosis y la ptosis). Mayor en luz = Si contrae con Pilocarpina 0.125% es Adie; si solo contrae con Pilocarpina 1% es III Par; si no contrae ni con 1% es Farmacológica.',
    keyDrugs: [
      { name: 'Apraclonidina 0.5%', dose: '1 gota en cada ojo; evaluar a los 30-45 minutos', warning: 'Falso negativo en Horner de <36-48 horas de evolución (aún no se ha desarrollado la hipersensibilidad de denervación).' },
      { name: 'Pilocarpina 0.125%', dose: '1 gota en cada ojo para test de supersensibilidad', warning: 'Debe diluirse 1:8 a partir del frasco comercial de pilocarpina al 1% o 2% con suero salino estéril.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Horner Doloroso: Emergencia por Disección Carotídea',
        category: 'Trampa de Tribunal',
        description: 'La disección carotídea estira el plexo simpático pericarotídeo (3ª neurona). Asocia cefalea o dolor ipsilateral en cuello y riesgo masivo de ictus isquémico hemisférico en las primeras 72 horas.',
        trapToAvoid: 'Citar al paciente de forma diferida en consultorio externo sin neuroimagen vascular inmediata.'
      },
      {
        title: 'Localización con Hidroxianfetamina al 1%',
        category: 'Asociación Patognomónica',
        description: 'La hidroxianfetamina estimula la liberación de noradrenalina endógena almacenada en la 3ª neurona. Si la pupila dilata, la 3ª neurona está intacta (lesión de 1ª o 2ª neurona); si NO dilata, la 3ª neurona está lesionada (posganglionar carotídea).',
        trapToAvoid: 'Olvidar que la hidroxianfetamina ha sido desplazada en la práctica habitual por la apraclonidina y la neuroimagen directa.'
      }
    ],
    fellowshipKeyPoints: [
      'Disociación Luz-Cerca: Mecanismo de reinervación aberrante en Adie debido a que las fibras acomodativas superan en número a las pupilomotoras en 30 a 1 en el ganglio ciliar.',
      'Apraclonidina en lactantes: Contraindicada formalmente en menores de 1 año por riesgo de depresión del SNC y apnea.'
    ]
  },

  // =========================================================================
  // 6. MIASTENIA GRAVIS OCULAR, OFTALMOPLEJÍA INTERNUCLEAR (INO) Y NISTAGMO
  // =========================================================================
  {
    id: 'deep-neuro-miastenia-gravis-ino-nistagmo',
    title: 'Miastenia Gravis Ocular, Oftalmoplejía Internuclear (INO) del FLM y Nistagmo Clínico',
    subspecialtyId: 'neuroftalmologia',
    summary: 'Monografía completa sobre trastornos motores supranucleares e internucleares y unión neuromuscular: Miastenia Gravis (anticuerpos anti-AChR y anti-MuSK, test del hielo, signo de Cogan y piridostigmina), Oftalmoplejía Internuclear (INO por lesión del Fascículo Longitudinal Medial, síndrome del uno y medio) y semiología del Nistagmo (vestibular vs central, downbeat y upbeat).',
    definitionAndEpidemiology: 'La Miastenia Gravis (MG) es una enfermedad autoinmune de la unión neuromuscular mediada por anticuerpos que bloquean los receptores nicotínicos de acetilcolina. El 50% de los pacientes debutan con síntomas exclusivamente oculares (ptosis y diplopía), y el 50-60% de estos generalizan en los primeros 2 años. La Oftalmoplejía Internuclear (INO) es un déficit de aducción conjugada por lesión del Fascículo Longitudinal Medial (FLM).',
    anatomyAndPathophysiology: '1. Miastenia Gravis: Pérdida autoinmune mediada por complemento de los receptores nicotínicos de acetilcolina postsinápticos (anti-AChR en 50-70% de MG ocular pura y >85% en generalizada; anti-MuSK y anti-LRP4 en seronegativos). Disminución de los potenciales de placa terminal por debajo del umbral de disparo durante el esfuerzo repetido (fatigabilidad motora).\n2. Fascículo Longitudinal Medial (FLM): Conecta el núcleo del VI par craneal en el puente con el subnúcleo del recto medial del III par contralateral en el mesencéfalo, coordinando la mirada horizontal conjugada sacádica.\n3. Fisiopatología de la INO:\n   • Lesión del FLM: Desconexión entre el abductor y el aductor contralateral -> Déficit o retraso de la aducción del ojo ipsilateral a la lesión con NISTAGMO MONOCULAR DISOCIADO del ojo abductor contralateral.\n   • Etiología: Esclerosis Múltiple (típicamente bilateral - BINO en adultos jóvenes) o Infarto isquémico pontino paramediano (unilateral en ancianos vasculópatas).\n4. Síndrome del Uno y Medio de Fisher:\n   • Lesión combinada del FLM ipsilateral + Formación Reticular Pontina Paramediana (PPRF) o núcleo del VI par ipsilateral.\n   • Clínica: Parálisis de la mirada horizontal conjugada hacia el lado de la lesión ("el uno") + Parálisis de aducción en el ojo de la lesión hacia el lado opuesto ("el medio"); el único movimiento horizontal remanente es la abducción del ojo contralateral.',
    clinicalExamination: {
      biomicroscopy: 'Polo anterior rigurosamente normal. REGLA INQUEBRANTABLE: La Miastenia Gravis NUNCA afecta las pupilas (las pupilas normales en presencia de oftalmoplejía completa apoyan firmemente MG).',
      specialSigns: '• Maniobras clínicas diagnósticas en Miastenia Gravis:\n  1) Test de la Mirada Sostenida (Upward Gaze Fatigue): Mirar hacia arriba durante 60 segundos provoca ptosis progresiva del párpado.\n  2) Signo del Párpado de Cogan (Twitch Sign): Al retornar la mirada rápidamente a posición primaria tras mirar hacia abajo, el párpado superior da un salto hacia arriba (overshoot) antes de caer a su posición de ptosis.\n  3) Test del Hielo (Ice Pack Test): Colocar una bolsa de hielo sobre el párpado ptósico durante 2 minutos; si la hendidura palpebral mejora en >= 2.0 mm, el test es POSITIVO (sensibilidad >85%, especificidad >95% gracias a que el frío inhibe la enzima acetilcolinesterasa aumentando la disponibilidad sináptica de ACh).'
    },
    diagnosticWorkup: [
      {
        test: 'Anticuerpos anti-receptor de acetilcolina (anti-AChR) y anti-MuSK',
        findings: 'Anti-AChR positivo en 50-70% de casos de MG ocular pura; altamente específico. Si es negativo, solicitar anti-MuSK y anti-LRP4.'
      },
      {
        test: 'Electromiografía de Fibra Única (SFEMG) en músculo frontal u orbicular',
        findings: 'Estándar de oro neurofisiológico; demuestra incremento patológico del "jitter" y bloqueos de transmisión neuromuscular (sensibilidad >95% en MG ocular).'
      },
      {
        test: 'TC de Tórax con contraste',
        findings: 'Obligatorio en todo paciente diagnosticado de Miastenia Gravis para descartar TIMOMA (presente en 10-15% de pacientes) o hiperplasia tímica (65%).'
      },
      {
        test: 'Resonancia Magnética Cerebral con cortes finos de tronco encefálico (en INO)',
        findings: 'Identifica placa desmielinizante en el tegmento pontino dorsomedial en EM o pequeño infarto lacunar isquémico pontino.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Síndrome de Lambert-Eaton', distinction: 'Enfermedad presináptica paraneoplásica (cáncer de pulmón microcítico) con anticuerpos anti-canales de calcio tipo P/Q; la fuerza mejora temporalmente con el ejercicio repetido e hiporreflexia.' },
      { condition: 'Oftalmoplejía Externa Progresiva Crónica (CPEO)', distinction: 'Miopatía mitocondrial lentamente progresiva y simétrica sin diplopía y sin fluctuación diurna.' },
      { condition: 'Parálisis del III Par Craneal', distinction: 'Presenta ptosis fija y desviación estática; en MG la paresia motora fluctúa y no sigue una distribución anatómica de nervio periférico.' }
    ],
    steppedManagement: {
      medical: '• Miastenia Gravis Ocular:\n  1) Anticolinesterásicos orales: Bromuro de Piridostigmina (Mestinon) 30 a 60 mg VO cada 4-6 horas (alivia la ptosis en el 50% de pacientes).\n  2) Corticoides orales a dosis bajas con escalonamiento progresivo (Prednisona 10-20 mg/día iniciales para evitar el empeoramiento paradójico precoz de la debilidad muscular).\n  3) Inmunosupresores ahorradores: Azatioprina, Micofenolato de Mofetilo.\n• Timectomía: Indicada siempre ante timoma; en MG generalizada no timomatosa en <65 años (Ensayo MGTX demostró reducción de síntomas y requerimientos de corticoides a 3 y 5 años).\n• En INO:\n  - Si es por Esclerosis Múltiple: Pulsos de metilprednisolona IV 1 g/día por 3 días y terapia modificadora de la enfermedad (DMT).\n  - Si es isquémica: Antiagregación y control de factores de riesgo.',
      surgical: 'Prismas de Fresnel para diplopía residual; oclusión de un ojo.'
    },
    clinicalApplicationPractical: '1. "La Miastenia Gravis es la gran simuladora": Puede imitar cualquier parálisis de nervio craneal, cualquier estrabismo y cualquier alteración de la motilidad ocular, pero JAMÁS afecta la reactividad pupilar. Ante una oftalmoplejía compleja con pupilas absolutamente normales, siempre realizar la prueba del hielo y pedir anti-AChR.\n2. Al iniciar prednisona en miastenia gravis moderada a severa, advertir que puede ocurrir una crisis de debilidad miasténica transitoria en los primeros 7-10 días.',
    highYieldPearl: 'Miastenia Gravis vs INO: La Miastenia respeta rigurosamente las pupilas; la prueba del hielo tiene >85% de sensibilidad. La INO es lesión del FLM con déficit de aducción ipsilateral y nistagmo abductor contralateral (bilateral en jóvenes = Esclerosis Múltiple; unilateral en ancianos = Infarto pontino).',
    keyDrugs: [
      { name: 'Bromuro de Piridostigmina (Mestinon)', dose: '30-60 mg VO cada 4-6 horas', warning: 'Efectos adversos colinérgicos: cólicos abdominales, diarrea, fasciculaciones, bradicardia e hipersalivación.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Nistagmo de la INO: Disociado Monocular en Abducción',
        category: 'Asociación Patognomónica',
        description: 'En la INO, el nistagmo ocurre SOLO en el ojo que abduce, mientras que el ojo que intenta aducir queda rezagado o inmóvil. Se debe a un esfuerzo compensatorio de la ley de Hering de inervación motora simétrica.',
        trapToAvoid: 'Describirlo como un nistagmo binocular simétrico o vestibular.'
      },
      {
        title: 'Downbeat Nystagmus (Nistagmo con Batida Hacia Abajo)',
        category: 'Pregunta Clásica',
        description: 'Nistagmo vertical que bate hacia abajo, acentuándose en la mirada hacia abajo y a los lados. Localiza patología anatómica en la UNIÓN CRANEOCERVICAL (Malformación de Arnold-Chiari Tipo I), degeneración cerebelosa o toxicidad por litio/anticonvulsivantes.',
        trapToAvoid: 'No solicitar RM de fosa posterior y unión craneocervical ante un nistagmo downbeat.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo MGTX (Wolfe et al., NEJM 2016): Demostró de forma aleatorizada que la timectomía transesternal mejora los desenlaces clínicos y reduce la necesidad de prednisona en pacientes con miastenia gravis no timomatosa.',
      'See-Saw Nystagmus (Nistagmo en Balancín): Un ojo se eleva e intorsiona mientras el otro desciende y extorsiona; patognomónico de lesiones del quiasma óptico y diencéfalo medio (tumores selar/paraselar).'
    ]
  },

  // =========================================================================
  // 7. DEFECTOS QUIASMÁTICOS Y VÍA RETROGENICULADA
  // =========================================================================
  {
    id: 'deep-neuro-defectos-quiasmaticos-retroquiasmaticos',
    title: 'Síndrome Quiasmático (Macroadenomas, Apoplejía Hipofisaria) y Lesiones Retrogeniculadas de la Vía Visual',
    subspecialtyId: 'neuroftalmologia',
    summary: 'Monografía completa sobre topografía y campimetría de la vía óptica: Síndrome quiasmático (macroadenoma de hipófisis, craneofaringioma, apoplejía hipofisaria de emergencia con colapso suprarrenal, atrofia en pajarita y rodilla de Wilbrand) y lesiones retroquiasmáticas (cintilla óptica, asa de Meyer temporal, radiaciones parietales y corteza visual occipital con respeto macular).',
    definitionAndEpidemiology: 'Los defectos de la vía óptica anterior y posterior producen patrones característicos de pérdida de campo visual que permiten la localización neuroanatómica milimétrica de tumores, ictus isquémicos o hemorragias cerebrales. Las lesiones selares/supraselares representan el 15% de todos los tumores intracraneales primarios (el adenoma hipofisario es el más común).',
    anatomyAndPathophysiology: '1. Quiasma Óptico:\n   • Localizado 10 mm por encima de la silla turca y de la glándula hipófisis (relación con diafragma selar y polígono de Willis).\n   • Decusación de fibras nasales: El 53% de los axones del nervio óptico (originados de la retina nasal y que ven el campo temporal) cruzan la línea media al lado contralateral.\n   • Rodilla de Wilbrand: Fibras nasales inferiores que hacen un bucle anterior dentro del nervio óptico contralateral antes de cruzar (su lesión produce el Escotoma de Unión de Traquair: escotoma central en el ojo ipsilateral + defecto temporal superior en el ojo contralateral).\n2. Compresión Quiasmática Inferior (Adenoma Hipofisario):\n   • Comprime primero las fibras inferiores nasales que cruzan por el aspecto inferior del quiasma -> produce Hemianopsia Bitemporal que inicia típicamente en los cuadrantes temporales SUPERIORES.\n3. Compresión Quiasmática Superior (Craneofaringioma supraselar):\n   • Comprime desde arriba las fibras nasales superiores -> Hemianopsia Bitemporal que inicia en cuadrantes temporales INFERIORES.\n4. Vía Retrogeniculada:\n   • Cintilla Óptica: Hemianopsia homónima muy incongruente con DPAR contralateral por asimetría de axones pupilomotores cruzados.\n   • Radiaciones Ópticas Temporales (Asa de Meyer): Pasan alrededor del cuerno temporal del ventrículo lateral -> Cuadrantanopsia Homónima Superior congruente ("Pie in the sky").\n   • Radiaciones Ópticas Parietales: Pasan a través del lóbulo parietal -> Cuadrantanopsia Homónima Inferior ("Pie on the floor").\n   • Corteza Estriada Occipital (Área 17 de Brodmann): Infarto de la Arteria Cerebral Posterior (ACP) produce Hemianopsia Homónima Congruente Estricta con RESPETO MACULAR (macular sparing, debido a la colateralidad vascular de la Arteria Cerebral Media en el polo occipital).',
    clinicalExamination: {
      biomicroscopy: 'Polo anterior normal. En lesiones de cintilla óptica: DPAR de Wernicke al iluminar el hemicampo ciego.',
      fundus: '• En compresión quiasmática crónica: Atrofia Óptica "en Pajarita" (Bowtie / Band Atrophy) en el fondo de ojo por pérdida selectiva de axones de la retina nasal a ambos lados de la papila.\n• En infartos corticales occipitales o de radiaciones: El fondo de ojo es RIGUROSAMENTE NORMAL de por vida (no hay degeneración transináptica retrógrada a través del cuerpo geniculado lateral).',
      specialSigns: '• Atrofia óptica "en pajarita" (Bowtie atrophy) bilateral con escotoma bitemporal que respeta el meridiano vertical.\n• Escotoma de unión de Traquair: Escotoma central ipsilateral más defecto temporal superior contralateral por compromiso de la rodilla anterior de Wilbrand.\n• Respeto macular calcarino estricto (macular sparing) por irrigación colateral de ACM en infartos de ACP.'
    },
    diagnosticWorkup: [
      {
        test: 'Resonancia Magnética Cerebral con protocolo para Silla Turca (cortes finos sagitales y coronales T1/T2 con gadolinio)',
        findings: 'Macroadenoma hipofisario (>10 mm) con extensión supraselar y compresión del quiasma óptico. En apoplejía hipofisaria: Hiperintensidad T1 por necrosis hemorrágica intratumoral aguda.'
      },
      {
        test: 'Campimetría Computarizada Humphrey 30-2 / 24-2',
        findings: 'Estudio de elección: Hemianopsia bitemporal heterónima que respeta rigurosamente el meridiano vertical de fijación.'
      },
      {
        test: 'Perfil Hormonal Hipofisario Completo',
        findings: 'Prolactina sérica (descartar prolactinoma; efecto de tallo si prolactina está levemente elevada <100-150 ng/mL por compresión del tallo que bloquea la dopamina inhibitoria vs prolactinoma verdadero >200-500 ng/mL), cortisol basal y ACTH, TSH y T4 libre, IGF-1 (acromegalia).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Apoplejía Hipofisaria Aguda', distinction: 'Emergencia neuroquirúrgica y endocrinológica: Cefalea hiperaguda en "estallido", pérdida visual bilateral o amaurosis súbita, oftalmoplejía por invasión del seno cavernoso y colapso hemodinámico letal por insuficiencia suprarrenal aguda (déficit de ACTH).' },
      { condition: 'Meningioma del Tubérculo Selar', distinction: 'Masa dural hiperostósica con "cola dural" que comprime el quiasma en mujeres de mediana edad.' },
      { condition: 'Aneurisma Gigante de la Carótida Interna Supraclinoidea', distinction: 'Masa pulsátil que puede simular un tumor selar; la cirugía a ciegas sin neuroimagen vascular previa resulta mortal.' }
    ],
    steppedManagement: {
      medical: '• Apoplejía Hipofisaria:\n  1) HIDROCORTISONA INTRAVENOSA INMEDIATA (100 mg bolo IV seguido de 100 mg cada 8 horas) antes de cualquier intervención para salvar la vida del paciente de un shock suprarrenal letal.\n  2) Corrección de hidroelectrolitos.\n• Prolactinoma confirmatorio (sin signos de apoplejía ni déficit visual fulminante):\n  - Tratamiento médico de primera línea con agonistas dopaminérgicos: Cabergolina (0.5 a 2.0 mg/semana) o Bromocriptina; inducen reducción tumoral y descompresión quiasmática en semanas sin necesidad de cirugía.\n• Defectos Retrogeniculados por Ictus Isquémico de la ACP:\n  - Manejo preventivo neurovascular secundario y rehabilitación de rastreo visual campimétrico.',
      surgical: 'Cirugía endoscópica endonasal transesfenoidal: Indicada de urgencia en apoplejía hipofisaria con deterioro visual progresivo, o de forma electiva en adenomas no funcionantes con compresión quiasmática persistente.'
    },
    clinicalApplicationPractical: '1. Ante todo paciente que debute con cefalea brusca severa, náuseas y pérdida visual bilateral aguda: Sospechar APOPLEJÍA HIPOFISARIA y administrar Hidrocortisona IV inmediatamente; el colapso vascular por insuficiencia suprarrenal aguda mata al paciente en horas si no se administra hidrocortisona.\n2. Todo defecto campimétrico que respete el meridiano vertical de fijación se origina en el quiasma óptico o por detrás de él (a diferencia de los defectos glaucomatosos o vasculares retinianos que respetan el meridiano horizontal).',
    highYieldPearl: 'Vía Visual y Quiasma: Lesión quiasmática = Hemianopsia Bitemporal (respeta meridiano vertical). Lesión temporal (Asa de Meyer) = Cuadrantanopsia Superior ("pie in the sky"). Lesión parietal = Cuadrantanopsia Inferior ("pie on the floor"). Lesión occipital = Hemianopsia homónima congruente con respeto macular.',
    keyDrugs: [
      { name: 'Hidrocortisona IV', dose: '100 mg IV bolo inicial, seguido de 100 mg cada 8 horas', warning: 'Tratamiento vital en apoplejía hipofisaria para revertir la crisis suprarrenal aguda.' },
      { name: 'Cabergolina', dose: '0.5 mg VO una o dos veces por semana', warning: 'Agonista dopaminérgico de elección en prolactinomas; puede inducir fístula de LCR si el tumor erosiona el piso selar.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Escotoma de Unión de Traquair',
        category: 'Asociación Patognomónica',
        description: 'Lesión en la unión del nervio óptico con el quiasma que afecta a las fibras nasales inferiores contralaterales (rodilla de Wilbrand). Cursa con escotoma central ipsilateral + defecto cuadrántico temporal superior contralateral.',
        trapToAvoid: 'Localizar la lesión como dos patologías independientes en ambos ojos.'
      },
      {
        title: 'Efecto de Tallo vs Prolactinoma Verdadero',
        category: 'Cifra Clave de Corte',
        description: 'Cualquier masa selar no secretora que comprima el tallo hipofisario bloquea el transporte de dopamina (factor inhibidor de prolactina), elevando la prolactina de forma secundaria pero modesta (típicamente 30-150 ng/mL). Los prolactinomas verdaderos productores superan habitualmente los 200-500 ng/mL.',
        trapToAvoid: 'Indicar tratamiento médico con cabergolina en un macroadenoma no funcionante con prolactina de 45 ng/mL creyendo que es un prolactinoma.'
      }
    ],
    fellowshipKeyPoints: [
      'Respeto Macular (Macular Sparing): En infartos de la arteria cerebral posterior, la representación macular en el polo occipital posterolateral se preserva (respetando los 5-10° centrales) gracias a la doble irrigación arterial por ramas colaterales terminales de la arteria cerebral media.',
      'Atrofia en Pajarita: La pérdida de fibras nasales (que ingresan por los polos nasal y temporal horizontal de la papila) deja una banda horizontal pálida respetando los polos superior e inferior.'
    ]
  },

  // =========================================================================
  // 8. NEUROPATÍAS ÓPTICAS HEREDITARIAS Y TÓXICO-NUTRICIONALES
  // =========================================================================
  {
    id: 'deep-neuro-neuropatias-hereditarias-lhon-opai',
    title: 'Neuropatías Ópticas Hereditarias y Mitocondriales (Leber / LHON, Atrofia OPA1) y Tóxico-Nutricionales',
    subspecialtyId: 'neuroftalmologia',
    summary: 'Monografía completa sobre disfunción mitocondrial del nervio óptico: Neuropatía Óptica Hereditaria de Leber (LHON, herencia mitocondrial materna pura, mutaciones primarias m.11778G>A, m.14484T>C, m.3460G>A, telangiectasias peripapilares, Idebenona y terapia génica rAAV2/2-ND4 Lumevoq), Atrofia Óptica Dominante de Kjer (ADOA / mutación OPA1) y toxicidad por Etambutol y Metanol.',
    definitionAndEpidemiology: 'Trastornos neurodegenerativos caracterizados por la disfunción selectiva de las células ganglionares de la retina (CGR) y de sus axones en el haz papilomacular. La Neuropatía Óptica Hereditaria de Leber (LHON) afecta predominantemente a varones jóvenes (15-35 años, proporción 4-5:1) con pérdida visual profunda secuencial bilateral. La Atrofia Óptica Dominante (ADOA) es la neuropatía hereditaria más prevalente (1:30,000) con inicio insidioso en la primera década de vida.',
    anatomyAndPathophysiology: '1. Vulnerabilidad Mitocondrial del Haz Papilomacular:\n   • Los axones de las CGR en el haz papilomacular son delgados, no mielinizados en su trayecto intrarretiniano y tienen una altísima demanda metabólica de ATP para mantener la bomba Na+/K+ ATPasa.\n   • El estrés oxidativo con depleción de ATP y acumulación de especies reactivas de oxígeno (ROS) desencadena la apoptosis celular apoptótica retrógrada selectiva en este haz.\n2. Genética de LHON (Herencia Mitocondrial Materna):\n   • Se transmite exclusivamente por vía materna (el espermatozoide no aporta mitocondrias al cigoto). Las mujeres transmiten la mutación al 100% de sus hijos, pero sólo el 50% de los varones y el 10-15% de las mujeres desarrollan la enfermedad (penetrancia incompleta modulada por factores epigenéticos, tabaco y alcohol).\n   • 3 Mutaciones Primarias en el ADN Mitocondrial (Complejo I de la cadena respiratoria):\n     1) m.11778G>A (gen ND4): La más común (60-70% de casos a nivel mundial) y la de peor pronóstico visual (recuperación espontánea <5%).\n     2) m.14484T>C (gen ND6): Representa el 15% de casos; es la de mejor pronóstico con tasas de recuperación visual espontánea del 35-50%.\n     3) m.3460G>A (gen ND1): Representa el 10% de casos; pronóstico intermedio (recuperación 15-20%).\n3. Atrofia Óptica Dominante de Kjer (ADOA):\n   • Autosómica dominante con penetrancia variable; ligada a mutaciones en el gen OPA1 (3q28-q29) que codifica una GTPasa dinamina mitocondrial esencial para la fusión y mantenimiento de las crestas mitocondriales.\n4. Toxicidad por Etambutol y Metanol:\n   • Etambutol: Quelación de zinc y alteración del metabolismo oxidativo mitocondrial a nivel del quiasma óptico y papila.\n   • Metanol: Metabolización hepática por alcohol deshidrogenasa a formaldehído y ácido fórmico, que inhibe la citocromo c oxidasa mitocondrial causando edema axonal masivo y necrosis bilateral del putamen.',
    clinicalExamination: {
      biomicroscopy: 'Polo anterior rigurosamente normal. Reflejos pupilares llamativamente preservados o mínimamente afectados en LHON a pesar de agudezas visuales severas (fenómeno de preservación pupilar fotomotora por resistencia de las células ganglionares fotosensibles intrínsecas melanopsínicas a la disfunción mitocondrial).',
      fundus: '• En LHON (Fase Aguda):\n  - Tríada clásica: 1) Telangiectasias microangiopáticas peripapilares tortuosas; 2) Pseudoedema de la capa de fibras nerviosas peripapilar (edema axonal sin fuga angiográfica); 3) Tortuosidad vascular retiniana.\n  - En 6 a 12 meses: Evolución a atrofia óptica completa con palidez temporal marcada del disco.\n• En ADOA (Kjer):\n  - Palidez temporal en cuña o excavación papilar superficial que simula un glaucoma juvenil normotensional pero con escotoma cecocentral simétrico y discromatopsia tritanómala (azul-amarillo).',
      specialSigns: '• Secuencia temporal en LHON: Pérdida visual monocular súbita e indolora a <20/200; el ojo contralateral se afecta de forma idéntica en un intervalo de 6 a 12 semanas (muy raramente simultáneo).'
    },
    diagnosticWorkup: [
      {
        test: 'Secuenciación Genética Mitocondrial (Panel de ADNmt para LHON)',
        findings: 'Identificación de una de las 3 mutaciones homoplásmicas (o heteroplásmicas): m.11778G>A, m.14484T>C o m.3460G>A.'
      },
      {
        test: 'Secuenciación del Gen OPA1 (y OPA3 para formas syndrómicas)',
        findings: 'Mutación heterocigota en OPA1 confirmatoria de ADOA.'
      },
      {
        test: 'Angio-Fluoresceinografía Retiniana (FAG en LHON agudo)',
        findings: 'HALLAZGO CARDINAL: Las telangiectasias microangiopáticas peripapilares NO FUGAN fluoresceína en fases tardías (diferencia crítica con el verdadero edema de papila inflamatorio o papiledema, que muestran fuga profusa).'
      },
      {
        test: 'Campimetría Computarizada Humphrey 24-2 / 30-2',
        findings: 'Escotoma cecocentral denso bilateral que compromete la fijación y la mancha ciega.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Neuritis Óptica Desmielinizante Retrobulbar', distinction: 'Enfermedad inflamatoria con dolor a movimientos oculares, realce con gadolinio en RM y marcada respuesta a corticoides; LHON no presenta dolor ni realce en RM y NO responde a corticoides.' },
      { condition: 'Glaucoma Juvenil Normotensional', distinction: 'La excavación en ADOA es temporal y pálida con defecto cecocentral, no arciforme respetando el rafe horizontal.' }
    ],
    steppedManagement: {
      medical: '• Neuropatía Óptica de Leber (LHON):\n  1) Terapia Antioxidante Mitocondrial de Elección: IDEBENONA (Raxone) a dosis de 900 mg/día (300 mg tres veces al día con comidas) durante un mínimo de 12 a 24 meses. Actúa como transportador corto de electrones saltando el complejo I defectuoso hacia el complejo III mitocondrial.\n  2) Terapia Génica Intravítrea (GS010 / Lumevoq - rAAV2/2-ND4): Inyección intravítrea que rescata la función en pacientes con mutación m.11778G>A de menos de 1 año de evolución (ensayos RESCUE y REVERSE demostraron mejoría bilateral por transferencia transneuronal contralateral).\n  3) PROHIBICIÓN ESTRICTA Y ABSOLUTA DE TABACO Y CONSUMO ABUSIVO DE ALCOHOL (son potentes inductores epigenéticos de estrés oxidativo que aceleran la pérdida del ojo contralateral).\n  4) Evitar fármacos con toxicidad mitocondrial (etambutol, linezolid, aminoglucósidos, antirretrovirales).\n• Atrofia Óptica Dominante (ADOA):\n  - Asesoramiento genético familiar, ayudas visuales para baja visión y evitar el tabaquismo.',
      surgical: 'No aplica tratamiento quirúrgico.'
    },
    clinicalApplicationPractical: '1. Ante todo varón joven con pérdida visual profunda indolora en un ojo y pseudoedema papilar: NUNCA indicar pulsos de corticoides creyendo que es una neuritis óptica desmielinizante sin haber considerado LHON; los esteroides no tienen beneficio y pueden alterar el metabolismo.\n2. Prohibir de forma categórica e inmediata el consumo de cualquier cigarrillo o tabaco: el tabaquismo es el factor desencadenante ambiental número uno de pérdida visual irreversible en portadores asintomáticos de la mutación de Leber.\n3. En pacientes tratados con Etambutol por tuberculosis: monitorización mensual obligatoria con visión cromática (test de Ishihara / Farnsworth) y campimetría; si aparece discromatopsia rojo-verde o escotoma central, suspender el fármaco de inmediato para evitar atrofia óptica irreversible.',
    highYieldPearl: 'LHON y Mitocondrias: Herencia mitocondrial materna (11778 es la más común y grave; 14484 es la de mejor pronóstico). Pseudoedema peripapilar con microangiopatía que NO fuga en angiografía. El tratamiento de elección es Idebenona 900 mg/día y prohibición absoluta de tabaco.',
    keyDrugs: [
      { name: 'Idebenona (Raxone)', dose: '900 mg/día VO (300 mg cada 8 horas con las comidas)', warning: 'Tratamiento específico aprobado para LHON; monitorizar enzimas hepáticas y mantener al menos 12-24 meses.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Preservación del Reflejo Pupilar en LHON',
        category: 'Asociación Patognomónica',
        description: 'A pesar de una agudeza visual de cuenta dedos, el reflejo fotomotor pupilar se mantiene llamativamente conservado. Las células ganglionares intrínsecamente fotosensibles (ipRGC con melanopsina) tienen una resistencia celular única al fallo mitocondrial del complejo I.',
        trapToAvoid: 'Descartar neuropatía óptica grave basándose en la presencia de pupilas reactivas simétricas.'
      },
      {
        title: 'Pseudoedema de LHON: La FAG No Fuga',
        category: 'Trampa de Tribunal',
        description: 'La hinchazón de la CFNR peripapilar en LHON es edema axonal intracelular puro sin edema de la matriz extracelular; por ello, la angiografía con fluoresceína muestra vasos telangiectásicos pero SIN extravasación ni hiperfluorescencia tardía de fuga.',
        trapToAvoid: 'Diagnosticar papilitis o edema inflamatorio al ver la hinchazón peripapilar en la oftalmoscopía.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayos RESCUE y REVERSE (Yu-Wai-Man et al., Sci Transl Med 2020): Confirmaron la eficacia de la terapia génica Lumevoq (rAAV2/2-ND4) en pacientes con mutación m.11778G>A.',
      'Toxicidad por Metanol: La intoxicación produce acidosis metabólica con anión gap elevado y necrosis del putamen en neuroimagen; el tratamiento de emergencia incluye Fomepizol o etanol IV y ácido folínico.'
    ]
  },

  // =========================================================================
  // 9. NEUROPATÍA ÓPTICA TRAUMÁTICA (TON)
  // =========================================================================
  {
    id: 'deep-neuro-neuropatia-optica-traumatica-ton',
    title: 'Neuropatía Óptica Traumática (TON): Mecánica del Canal Óptico, Megadosis de Esteroides y Descompresión Endoscópica',
    subspecialtyId: 'neuroftalmologia',
    summary: 'Monografía exhaustiva sobre Neuropatía Óptica Traumática (TON): diferenciación patogénica entre trauma directo (laceración penetrating, avulsión papilar o espícula ósea intracanicular desplazada) y trauma indirecto (desaceleración biomecánica contusa en reborde orbitario frontal con transmisión de ondas de choque de cizallamiento al canal óptico); cascada de isquemia axonal secundaria (edema por contusión axonal dentro de un canal óseo inextensible de 5 mm de longitud -> compresión del plexo vascular pial -> necrosis isquémica y apoptosis secundaria de células ganglionares); hallazgos clínicos cardinales (Defecto Pupilar Aferente Relativo / DPAP / Marcus Gunn marcado, pérdida visual brusca, visión cromática deprimida y papila inicialmente de aspecto absolutamente normal que evoluciona a atrofia óptica pálida en 4 a 6 semanas); protocolo de neuroimagen (TC craneofacial y orbitaria de alta resolución con cortes axiales y coronales finos de 0.5-1.0 mm con algoritmo óseo); controversia terapéutica y evidencia del ensayo landmark International Optic Nerve Trauma Study (IONTS) y CRASH: observación clínica vs megadosis de metilprednisolona intravenosa vs descompresión quirúrgica endoscópica endonasal del canal óptico.',
    definitionAndEpidemiology: 'La Neuropatía Óptica Traumática (TON) es una lesión aguda y potencialmente devastadora del nervio óptico secundaria a un traumatismo craneofacial cerrado o penetrante. Se estima que ocurre en el 0.5% al 5% de los traumatismos craneoencefálicos cerrados, con predominio en varones jóvenes (edad media 20-35 años) involucrados en accidentes de tráfico, caídas de altura o agresiones físicas. La forma indirecta es la más prevalente (>85% de los casos), originada por el impacto de un vector de fuerza contusa sobre el hueso frontal ipsilateral o el ángulo súpero-externo de la órbita.',
    anatomyAndPathophysiology: '1. Anatomía Funcional del Canal Óptico y la Porción Intracanicular:\n   • El canal óptico se ubica en el ala menor del hueso esfenoides, midiendo de 5 a 10 mm de longitud y 4 a 5 mm de diámetro.\n   • Por su interior transitan el nervio óptico (porción intracanicular rodeada por la duramadre firmemente adherida al periostio óseo) y la arteria oftálmica.\n   • La porción intracanicular carece por completo de distensibilidad volumétrica; la duramadre se fusiona íntimamente con el pericráneo en el anillo fibroso común de Zinn.\n2. Mecánica del Trauma Óptico Indirecto:\n   • El impacto frontal de desaceleración súbita transmite ondas de choque mecánicas elásticas a través de la calota y la órbita que convergen focalmente en el vértice orbitario y las paredes del canal óptico.\n   • Las fuerzas de cizallamiento tangenciales lesionan mecánicamente las fibras axónicas que cruzan el canal.\n3. Cascada de Daño Primario vs Secundario:\n   • Daño Primario Inmediato: Disrupción axoplásmica física irreversible en el momento del impacto.\n   • Daño Secundario Progresivo (Ventana Terapéutica Potencial):\n     - El trauma desencadena edema axonal neurogénico y microhemorragias en el espacio subaracnoideo intracanicular.\n     - Como el canal óseo es rígido e inextensible, la hinchazón axonal eleva la presión tisular intracanicular superando la presión de perfusión capilar pial.\n     - Colapso del plexo vascular de la piamadre -> isquemia axonal aguda secundaria, bloqueo de la conducción neuronal, liberación masiva de glutamato excitotóxico, estrés oxidativo y muerte retardada por apoptosis de las células ganglionares retinianas.',
    clinicalExamination: {
      biomicroscopy: 'Normal; descartar heridas penetrantes palpebrales o perioculares, enfisema orbitario o hematoma subconjuntival.',
      fundus: 'HALLAZGO CRÍTICO FUNDAMENTAL: En la TON indirecta aguda la cabeza del nervio óptico (papila) es de ASPECTO COMPLETAMENTE NORMAL en más del 95% de los pacientes (la lesión es intracanicular retrobulbar posterior). La aparición de palidez papilar atrófica demora entre 4 y 6 semanas (tiempo necesario para que ocurra la degeneración axonal retrógrada walleriana descendente hacia el globo). Excepciones: En avulsión papilar traumática o trauma directo anterior inmediato, se aprecia papilitis hemorrágica masiva o un hueco excavado oscuro en el lugar del disco.',
      specialSigns: '• Defecto Pupilar Aferente Relativo (DPAR / Pupila de Marcus Gunn) Positivo Marcado: El signo objetivo más sensible, fiable e indispensable en pacientes con alteración del sensorio o coma post-traumático.\n• Test del Balanceo de la Luz (Swinging Flashlight Test): Midriasis paradójica al iluminar el ojo afectado en comparación con la miosis consensual normal producida al iluminar el ojo sano contralateral.'
    },
    diagnosticWorkup: [
      {
        test: 'Tomografía Computarizada (TC) de Órbita y Canal Óptico con Ventana Ósea',
        findings: 'Examen de neuroimagen mandatorio urgente: Cortes axiales y coronales finos ultra-delgados de 0.5 a 1.0 mm con algoritmo óseo de alta resolución. Permite identificar fracturas de la pared medial o superior del canal óptico, espículas óseas intracaniculares desplazadas que comprimen o seccionan el nervio, hematomas de la vaina del nervio óptico o neumoencéfalo orbitario.'
      },
      {
        test: 'Resonancia Magnética Cerebral y Orbitaria con Secuencias Fat-Sat y Cortes Finos en Nervio Óptico',
        findings: 'Indicada si la TC no evidencia fractura ósea y el paciente está hemodinámicamente estable; muestra hiperintensidad en secuencias T2/STIR y captación anómala de gadolinio que refleja edema e isquemia axonal intracanicular.'
      },
      {
        test: 'Potenciales Evocados Visuales (PEV) Flash de Cabecera',
        findings: 'De gran utilidad en pacientes comatosos, intubados o no cooperadores: Reducción marcada de la amplitud o retraso de la latencia de la onda P100 en el ojo afectado confirmando el daño de conducción de la vía óptica anterior.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Neuropatía Óptica Isquémica Anterior Traumática',
        distinction: 'Presenta edema papilar pálido prominente y hemorragias peripapilares en llama desde el primer momento del examen post-traumático.'
      },
      {
        condition: 'Hematoma Retrobulbar y Síndrome Compartimental Orbitario',
        distinction: 'Se acompaña de proptosis axial marcada e incoercible, equimosis subconjuntival masiva, oftalmoplejía dolorosa y elevación extrema de la presión intraocular (>40-50 mmHg), requiriendo cantotomía lateral urgente.'
      },
      {
        condition: 'Pérdida Visual Funcional No Orgánica (Simulación Post-Traumática)',
        distinction: 'Ausencia total de DPAR (pupilas completamente normorreactivas y simétricas) con potenciales evocados visuales normales.'
      }
    ],
    steppedManagement: {
      medical: '• LA GRAN CONTROVERSIA CLÍNICA DE LA TON Y EVIDENCIA CONTEMPORÁNEA:\n  - Ensayo Landmark IONTS (International Optic Nerve Trauma Study, 1999):\n    * Comparó la evolución de la agudeza visual en pacientes con TON indirecta manejados con tres estrategias: Observación conservadora (sin medicación), Corticoides intravenosos en altas dosis y Descompresión Quirúrgica del canal óptico.\n    * Conclusión Pivotal: NO HUBO DIFERENCIA ESTADÍSTICAMENTE SIGNIFICATIVA en la tasa de recuperación visual entre los tres grupos (aproximadamente un 32-52% de los ojos mejoraron al menos 3 líneas de visión independientemente del tratamiento).\n  - Ensayo Landmark CRASH (Corticosteroid Randomisation After Significant Head Injury, Lancet 2004):\n    * Evaluó el uso de megadosis de metilprednisolona en pacientes con traumatismo craneoencefálico.\n    * Conclusión Pivotal de Seguridad: Las megadosis de corticoides incrementaron de forma estadísticamente significativa la MORTALIDAD sistémica en pacientes con TCE moderado o severo (riesgo relativo de muerte 1.18).\n  - GUÍA TERAPÉUTICA MÉDICA ACTUAL:\n    * Pacientes con TON y Traumatismo Craneoencefálico Asociado: CONTRAINDICADAS LAS MEGADOSIS DE CORTICOIDES (debido al aumento de mortalidad demostrado en CRASH).\n    * TON Indirecta Aislada (sin TCE ni contusión cerebral severa):\n      • Puede considerarse un ciclo corto de Metilprednisolona intravenosa a dosis estándar (250 mg cada 6 horas IV durante 3 días) siempre que se inicie en las primeras 8 horas post-trauma.\n      • Si no hay respuesta tras 48 horas de esteroides, suspender la pauta; no prolongar la terapia.\n    * Observación Conservadora Controlada: Es una opción plenamente justificada y estándar en la mayoría de los casos de TON indirecta.',
      surgical: '• Indicaciones Quirúrgicas Rigurosas de Descompresión del Canal Óptico:\n  - La descompresión quirúrgica NO está indicada de rutina en toda TON indirecta.\n  - INDICACIONES PRECISAS DE CIRUGÍA:\n    1) Fractura del canal óptico con una espícula ósea visible en la TC que indenta, comprime o desplaza directamente el nervio óptico.\n    2) Hematoma subperióstico o hematoma de la vaina del nervio óptico con compresión mecánica medible.\n    3) Deterioro visual progresivo documentado tras una mejoría inicial bajo tratamiento médico conservador.\n  - Técnicas Quirúrgicas de Descompresión:\n    * DESCOMPRESIÓN ENDOSCÓPICA ENDONASAL TRANS-ETMOIDAL/ESFENOIDAL DEL CANAL ÓPTICO (Técnica moderna de elección con Otorrinolaringología):\n      • Abordaje a través de la fosa nasal guiado por neuronavegación tridimensional -> etmoidectomía posterior y esfenoidotomía amplia -> exposición de la pared medial del canal óptico y la protuberancia carotídea -> fresado con fresa de diamante y abundante irrigación fría de la lámina ósea medial del canal óptico en 180 grados -> incisión longitudinal de la vaina del nervio óptico para descompresión de la vaina dural.\n    * Craneotomía Pterional Extradural o Abordaje Transcraneal Orbitario (en fracturas complejas del techo orbitario).'
    },
    clinicalApplicationPractical: '1. Papila Normal no descarta TON: Ante un paciente politraumatizado consciente o semicomatoso que sufrió un golpe en la frente, si el ojo parece blanco y la retina es normal en el fondo de ojo, examine de inmediato el reflejo pupilar con la linterna. Si hay un DPAR positivo ipsilateral, el diagnóstico de Neuropatía Óptica Traumática está establecido; la papila tardará 4 semanas en palidecer.\n2. Cuidado con los Corticoides si hay TCE: Si el paciente tiene una contusión cerebral o hemorragia subaracnoidea asociada en la TC, jamás prescriba megadosis de corticoides intravenosos (protocolo NASCIS/CRASH); el ensayo CRASH demostró que aumentan la mortalidad de los pacientes por edema cerebral y complicaciones sistémicas.\n3. Pedir siempre TC con Cortes Finos de 1 mm en Canal Óptico: Una TC de cerebro común con cortes de 5 mm se salta el canal óptico por completo. Especifique en la solicitud: "TC de órbita y canal óptico con cortes axiales y coronales de 0.5 a 1.0 mm con ventana ósea".',
    highYieldPearl: 'TON Board Rule: Papila normal en fase aguda con Defecto Pupilar Aferente Relativo (DPAR) severo. El ensayo IONTS demostró que los corticoides, la cirugía y la observación tienen tasas similares de recuperación; el ensayo CRASH demostró que las megadosis de corticoides aumentan la mortalidad en TCE.',
    keyDrugs: [
      { name: 'Metilprednisolona intravenosa', dose: '250 mg cada 6 horas IV durante 3 días (solo si NO hay TCE)', warning: 'TERMINANTEMENTE CONTRAINDICADO si existe traumatismo craneoencefálico moderado/severo (Ensayo CRASH).' },
      { name: 'Omeprazol / Pantoprazol IV', dose: '40 mg IV al día', warning: 'Gastroprotección obligatoria durante la corticoterapia intravenosa.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Por Qué la Papila es Normal en la TON Aguda',
        category: 'Asociación Patognomónica',
        description: 'La lesión por desaceleración en la TON indirecta ocurre en la porción intracanicular del nervio óptico, a más de 15-20 mm por detrás de la lámina cribosa. En el examen oftalmoscópico agudo la cabeza del nervio se ve completamente rosada y de aspecto sano. La palidez atrófica aparece 4 a 6 semanas más tarde por degeneración walleriana descendente.',
        trapToAvoid: 'Descartar daño del nervio óptico porque la papila se ve de color y bordes normales.'
      },
      {
        title: 'Las Conclusiones del Estudio CRASH y del IONTS',
        category: 'Pregunta Clásica',
        description: 'Pregunta clásica de subespecialidad: "¿Qué aportaron el IONTS y el estudio CRASH al manejo de la Neuropatía Óptica Traumática?". Respuesta: El IONTS demostró que los esteroides a altas dosis y la cirugía descompresiva no son superiores a la observación en TON indirecta; y el estudio CRASH demostró que las megadosis de esteroides aumentan la mortalidad en pacientes con trauma craneoencefálico cerrado.',
        trapToAvoid: 'Prescribir megadosis de metilprednisolona a un paciente politraumatizado con alteración del sensorio.'
      },
      {
        title: 'Cuándo Indicar Cirugía en TON',
        category: 'Trampa de Tribunal',
        description: 'La descompresión quirúrgica del canal óptico está indicada únicamente si la TC demuestra una espícula ósea que lesiona o comprime directamente el nervio, o si hay un deterioro visual progresivo documentado tras una estabilización inicial.',
        trapToAvoid: 'Llevar a quirófano a todo paciente con TON indirecta sin fractura ósea evidente.'
      }
    ],
    fellowshipKeyPoints: [
      'Degeneración Retrógrada Walleriana: Proceso por el cual la transección o necrosis axonal intracanicular genera la muerte del axón proximal hacia el cuerpo de la célula ganglionar en la retina, visible como adelgazamiento de la capa de fibras nerviosas de la retina (CFNR) en el OCT a las 3 a 4 semanas post-trauma.',
      'Avulsión del Nervio Óptico: Traumatismo rotacional forzado del globo ocular que arranca la cabeza del nervio de la esclera posterior; al fondo de ojo se aprecia un anillo escleral vacío lleno de vítreo o sangre en la topografía del disco.',
      'Descompresión del Anillo de Zinn: El punto de máxima constricción anatómica es el anillo de Zinn y el pliegue falciforme de duramadre en la entrada endocraneal del canal; la descompresión endoscópica debe incluir la apertura de la vaina dural a ese nivel.'
    ],
    landmarkTrials: [
      {
        name: 'IONTS (International Optic Nerve Trauma Study)',
        year: '1999 (Ophthalmology)',
        conclusion: 'Estudio prospectivo comparativo en 133 pacientes: No se demostraron diferencias significativas en agudeza visual entre observación, corticoides o descompresión quirúrgica, concluyendo que la decisión terapéutica debe individualizarse sin que la intervención invasiva sea el estándar mandatorio.',
        fellowshipRelevance: 'El ensayo de referencia mundial que redefinió el abordaje no agresivo de la TON.'
      },
      {
        name: 'CRASH Trial (Corticosteroid Randomisation After Significant Head Injury)',
        year: '2004 (Lancet)',
        conclusion: 'Ensayo aleatorizado en más de 10.000 pacientes con TCE: Las megadosis de metilprednisolona incrementaron la mortalidad a las dos semanas (21% vs 18%, p=0.0001), estableciendo su contraindicación en TCE.',
        fellowshipRelevance: 'Prohibió el uso de megadosis de esteroides en pacientes politraumatizados con afectación encefálica.'
      }
    ],
    histopathologyAndGenetics: 'En especímenes histopatológicos de TON: Interrupción física de los neurofilamentos y microtúbulos en el segmento intracanicular con acumulación de grumos de transporte axoplásmico ("retraction balls" o cuerpos de retracción axonal), degeneración mielínica con macrófagos espumosos cargados de lípidos fagocitando vainas de mielina y posterior atrofia glial con pérdida de células ganglionares en la retina periférica y macular.',
    surgicalPearls: [
      'Durante la descompresión endoscópica endonasal del canal óptico: Mantener una irrigación continua con suero salino helado mientras se utiliza la fresa de diamante a alta velocidad; el sobrecalentamiento térmico del hueso esfenoidal transmite calor al nervio óptico destruyendo los axones viables restantes por lesión térmica iatrogénica.',
      'Identificación del Bucle de la Arteria Carótida Interna: La arteria carótida interna discurre inferolateral al nervio óptico en el esfenoides; es fundamental ubicar la protuberancia carotídea con neuronavegación antes de comenzar el fresado óseo del canal para evitar una lesión vascular carotídea catastrófica.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un varón de 23 años ingresa a urgencias tras chocar en motocicleta sin casco, sufriendo un traumatismo facial frontal derecho. A la evaluación inicial, la TAC de cráneo muestra fracturas nasoetmoidales y contusiones hemorrágicas cerebrales frontales menores. En la exploración oftalmológica el paciente refiere que no ve nada por su ojo derecho (visión de No Percepción Luminosa - NPL). La córnea está clara, la cámara anterior profunda y el examen oftalmoscópico del fondo de ojo revela un disco óptico derecho perfectamente rosado, plano y de bordes nítidos, sin edema ni hemorragias. Al realizar la prueba del balanceo de la luz con la linterna, la pupila derecha se dilata ampliamente cuando la luz pasa del ojo izquierdo al derecho (DPAR masivo). Su médico residente propone pautar inmediatamente bolos intravenosos de Metilprednisolona a dosis de 1000 mg cada 6 horas por "sospecha de neuritis óptica post-traumática". ¿Cuál es su juicio crítico razonado de la propuesta del residente, cuál es el diagnóstico exacto y qué protocolo de neuroimagen específico debe solicitar de urgencia?',
        answer: '1) Diagnóstico Exacto: Neuropatía Óptica Traumática (TON) Indirecta Severa del ojo derecho en fase aguda (confirmada por la pérdida visual masiva a NPL, DPAR relativo severo, antecedente de impacto frontal contuso y papila oftalmoscópicamente normal).\n2) Crítica Razonada a la Propuesta del Residente:\n   - La sugerencia de administrar megadosis de metilprednisolona intravenosa está TERMINANTEMENTE CONTRAINDICADA en este paciente.\n   - Razón de Seguridad Vital: El paciente presenta contusiones hemorrágicas cerebrales (TCE). El ensayo landmark internacional CRASH demostró de forma concluyente que las megadosis de corticoides en pacientes con traumatismo craneoencefálico aumentan significativamente la tasa de mortalidad sistémica y el riesgo de sangrado o edema cerebral.\n   - Además, el ensayo IONTS demostró que los corticoides a altas dosis no aportan beneficio visual estadísticamente significativo frente a la observación en TON indirecta.\n3) Protocolo de Neuroimagen Específico a Solicitar:\n   - Tomografía Computarizada (TC) de Órbita y Canal Óptico con Cortes Finos Axiales y Coronales de 0.5 a 1.0 mm con algoritmo de Reconstrucción Ósea de alta resolución.\n   - Justificación: Es la única prueba diagnóstica que permite evaluar la integridad ósea del canal óptico para descartar una fractura con espícula ósea desplazada que estructure una indicación quirúrgica descompresiva urgente.',
        trap: 'Administrar megadosis de corticoides a un paciente con contusión cerebral o descartar TON porque la papila se ve normal en el fondo de ojo.'
      }
    ]
  },

  // =========================================================================
  // 10. DISTONÍAS PERIOCULARES: BLEFAROESPASMO ESENCIAL BENIGNO Y ESPASMO HEMIFACIAL
  // =========================================================================
  {
    id: 'deep-neuro-espasmo-hemifacial-blefaroespasmo',
    title: 'Distonías Perioculares: Blefaroespasmo Esencial Benigno, Síndrome de Meige y Espasmo Hemifacial',
    subspecialtyId: 'neuroftalmologia',
    summary: 'Monografía exhaustiva sobre trastornos hipercinéticos y distónicos perioculares: diferenciación etiopatogénica entre Blefaroespasmo Esencial Benigno (BEB / distonía focal idiopática bilateral del músculo orbicular de los párpados), Síndrome de Meige (distonía craneofacial segmental que combina blefaroespasmo con espasmos oromandibulares y linguales) y Espasmo Hemifacial (HFS / trastorno periférico unilateral caracterizado por contracciones espasmódicas paroxísticas sincrónicas de todos los músculos inervados por el VII par craneal ipsilateral); fisiopatología: desinhibición de los circuitos de los ganglios basales y del tronco encefálico en BEB vs compresión neurovascular pulsátil del nervio facial en la zona de salida de la raíz (Root Exit Zone - REZ) en la fosa posterior por asas ectásicas de la arteria cerebelosa anteroinferior (AICA), posteroinferior (PICA) o tronco basilar en HFS; protocolo de neuroimagen (RM cerebral de alta resolución 3D FIESTA / CISS / TOF para visualización del conflicto neurovascular); abordaje terapéutico: infiltración reglada de Toxina Botulínica tipo A (OnabotulinumtoxinA) con técnica de mapeo anatómico pretarsal y preseptal; descompresión microvascular de Jannetta para HFS y miectomía quirúrgica extensa del orbicular (técnica de Anderson) en blefaroespasmo recalcitrante.',
    definitionAndEpidemiology: 'Los trastornos hipercinéticos perioculares abarcan patologías motoras distónicas que causan ceguera funcional severa y desfiguración estética. El Blefaroespasmo Esencial Benigno (BEB) es una distonía focal bilateral del adulto (prevalencia de 16 a 32 casos por 100.000 habitantes, con una proporción mujeres:hombres de 3:1 y pico de incidencia entre los 50 y 70 años). El Espasmo Hemifacial (HFS) es una afección motora periférica unilateral que afecta a aproximadamente 10 por 100.000 habitantes, caracterizada por fasciculaciones y espasmos clónicos y tónicos involuntarios del orbicular que progresan hacia los músculos periorales y el platisma ipsilaterales.',
    anatomyAndPathophysiology: '1. Inervación y Mecánica Muscular Periocular:\n   • El músculo orbicular de los párpados (inervado por ramas frontal y cigomática del VII par craneal) consta de tres porciones: pretarsal (responsable del parpadeo espontáneo involuntario), preseptal y orbitaria (responsable del cierre forzado y voluntario del párpado).\n2. Fisiopatología del Blefaroespasmo Esencial Benigno (BEB):\n   • Trastorno central originado por pérdida de la inhibición mediada por GABA en los circuitos cortico-estriato-tálamo-corticales y en las interneuronas del tronco del encéfalo.\n   • Hiperexcitabilidad del reflejo del parpadeo (Blink Reflex): Estimulación trigeminal periférica (como ojo seco o blefaritis) actúa como detonante desencadenando contracciones espasmódicas bilaterales incontrolables.\n   • Puede coexistir con Apraxia de la Apertura Ocular (incapacidad para iniciar la apertura palpebral voluntaria sin espasmo orbicular activo, por fallo de inhibición del orbicular pretarsal).\n3. Fisiopatología del Espasmo Hemifacial (HFS):\n   • Patología periférica causada por un Conflicto Neurovascular en la fosa posterior: Compresión mecánica y pulsátil ejercida por una arteria aberrante ectásica (AICA en 50-60%, PICA en 30%, o arteria vertebral) sobre el nervio facial (VII par) en su Zona de Salida de la Raíz (Root Exit Zone - REZ) en el surco bulboprotuberancial.\n   • Desmielinización focal de los axones del VII par en la REZ -> transmisión efáptica (crosstalk o "cortocircuito eléctrico" entre fibras nerviosas adyacentes desnudas) e hiperexcitabilidad retrógrada del núcleo motor facial con descargas espontáneas sincronizadas de todos los músculos faciales ipsilaterales.',
    clinicalExamination: {
      biomicroscopy: '• En BEB: Ojo anterior con frecuencia muestra enfermedad de ojo seco concomitante, queratopatía punteada superficial o blefaritis meibomiana (que suele preceder o agravar el cuadro).\n• Examen Dinámico de Parpadeo: En BEB las contracciones son BILATERALES y SIMÉTRICAS, cesan durante el sueño y se agravan con la luz brillante, la fatiga, el estrés o la conducción; desaparecen transitoriamente con trucos sensitivos ("gestes antagonistes") como hablar, cantar, tocarse la mejilla o mascar chicle.\n• En Espasmo Hemifacial (HFS): Contracciones UNILATERALES y ASINCRÓNICAS que inician típicamente en el párpado inferior y progresan descendiendo hacia el ángulo de la boca (músculo cigomático mayor/menor, risorio) y platisma cervical ipsilateral; PERSISTEN DURANTE EL SUEÑO; no ceden con trucos sensitivos.',
      fundus: 'Completamente normal.',
      specialSigns: '• Signo de Babinski-2 (Signo del Otro Babinski / Babinski Orbicularis Sign en HFS):\n  - Durante el espasmo involuntario del orbicular que cierra el ojo, el vientre frontal ipsilateral se contrae simultáneamente, ELEVANDO paradójicamente la ceja ipsilateral mientras el ojo se cierra con fuerza.\n  - Este signo es PATOGNOMÓNICO de Espasmo Hemifacial y NUNCA aparece en el blefaroespasmo ni en el espasmo histérico/funcional.\n• Geste Antagoniste (Truco Sensitivo): El paciente toca suavemente su sien, frente o mentón, logrando abrir los ojos momentáneamente durante el blefaroespasmo.'
    },
    diagnosticWorkup: [
      {
        test: 'Resonancia Magnética (RM) Cerebral y de Fosa Posterior con Secuencias 3D-FIESTA / CISS y Angio-RM TOF',
        findings: 'Examen de neuroimagen obligatorio en todo Espasmo Hemifacial: Permite visualizar con detalle milimétrico la cisterna pontocerebelosa y la zona de salida de la raíz del VII par, identificando con precisión el bucle vascular arterial de la AICA, PICA o arteria vertebral que comprime e indenta la raíz nerviosa, descartando tumores del ángulo pontocerebeloso (meningiomas, schwannomas) o malformaciones vasculares.'
      },
      {
        test: 'Electromiografía (EMG) Facial y Reflejo del Parpadeo (Blink Reflex)',
        findings: 'En HFS: Demuestra la "Respuesta Lateralizada" (Lateral Spread Response): La estimulación eléctrica de una rama periférica del nervio facial (por ejemplo, rama mandibular) desencadena una respuesta motora refleja sincrónica en un territorio inervado por otra rama diferente (rama cigomática del orbicular), confirmando la transmisión efáptica entre axones.'
      },
      {
        test: 'Evaluación del Test de Schirmer y Tinción Corneal',
        findings: 'Identifica ojo seco y déficit epitelial comórbido que debe tratarse agresivamente para disminuir el bombardeo aferente trigeminal.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Mioquimia Palpebral Benigna',
        distinction: 'Fasciculaciones finas y onduladas autolimitadas confinadas exclusivamente a un párpado (generalmente el inferior), desencadenadas por fatiga, exceso de cafeína o falta de sueño; dura días a semanas y no involucra otros músculos faciales.'
      },
      {
        condition: 'Sincinesia Facial Post-Parálisis de Bell (Aberrant Regeneration)',
        distinction: 'Antecedente documentado de parálisis facial periférica previa; los movimientos musculares anormales ocurren únicamente con los movimientos voluntarios (ej. el ojo se cierra al sonreír o enseñar los dientes).'
      },
      {
        condition: 'Tic Motor Facial (Síndrome de Tourette)',
        distinction: 'Movimientos estereotipados precedidos por una urgencia premonitoria que el paciente puede suprimir voluntariamente de forma transitoria, típicos en la infancia/adolescencia.'
      }
    ],
    steppedManagement: {
      medical: '• TRATAMIENTO DE PRIMERA LÍNEA UNIVERSAL: INFILTRACIÓN CON TOXINA BOTULÍNICA TIPO A (OnabotulinumtoxinA - Botox / AbobotulinumtoxinA - Dysport / IncobotulinumtoxinA - Xeomin):\n  - Mecanismo Farmacológico: Escinde la proteína SNAP-25 del complejo SNARE presináptico en la unión neuromuscular, bloqueando la exocitosis de vesículas de acetilcolina y produciendo una parálisis flácida química temporal selectiva que dura de 3 a 4 meses.\n  - Protocolo Anatómico para Blefaroespasmo Esencial Benigno (BEB):\n    * Dosis inicial habitual: 1.25 a 2.5 Unidades de OnabotulinumtoxinA por punto de inyección subcutánea (total 20-35 Unidades por ojo).\n    * Puntos Clave de Inyección: Pretarsal medial y lateral en párpado superior (mayor densidad de terminaciones neuromusculares y menor riesgo de ptosis), pretarsal lateral y medial en párpado inferior, y puntos preseptales y en región glabelar (músculos corrugador y procerus).\n    * REGLA DE ORO DE SEGURIDAD PARA EVITAR PTOSIS IATROGÉNICA: NUNCA inyectar en el tercio central superior del párpado superior por encima del surco palpebral (evita la difusión de toxina hacia el músculo elevador del párpado superior).\n  - Protocolo para Espasmo Hemifacial (HFS):\n    * Infiltración unilateral en los puntos del orbicular ocular descritos, complementada con microdosis (0.5-1.5 U) en músculos periorales ipsilaterales (cigomático mayor, risorio, mentoniano y platisma).\n  - Fármacos Orales Coadyuvantes (Eficacia limitada): Clonazepam (0.5-2 mg/día), Baclofeno (10-30 mg/día) o Trihexifenidilo.',
      surgical: '• Tratamiento Quirúrgico para Espasmo Hemifacial (HFS):\n  - DESCOMPRESIÓN MICROVASCULAR DE JANNETTA (Tratamiento Etiológico Definitivo Curativo):\n    * Indicado en pacientes con conflicto neurovascular documentado en RM, refractarios a toxina botulínica o que desean una curación permanente.\n    * Abordaje neuroquirúrgico mediante craneotomía suboccipital retrosigmoidea -> disección microquirúrgica de la cisterna pontocerebelosa guiada por EMG intraoperatorio (monitorizando la desaparición del "lateral spread") -> movilización del bucle arterial conflictivo (AICA/PICA) separándolo del nervio facial en la REZ -> interposición de una almohadilla de fieltro de Teflon (PTFE) entre la arteria y el nervio.\n    * Tasa de curación completa del 85-93% a largo plazo.\n    * Riesgos potenciales: Hipoacusia sensorineural ipsilateral (daño al VIII par adyacente en 2-3%), paresia facial transitoria o fístula de LCR.\n• Tratamiento Quirúrgico para Blefaroespasmo Intratable:\n  - MIECTOMÍA ORBICULAR EXTENSA SUPERIOR E INFERIOR (Procedimiento de Anderson Modificado):\n    * Extirpación quirúrgica radical de las fibras del músculo orbicular pretarsal, preseptal y periórbito a través de incisiones de blefaroplastia, asociada a suspensión del párpado frontal si coexiste apraxia de apertura palpebral.'
    },
    clinicalApplicationPractical: '1. Reconocer el Signo de Babinski-2: Si observa a un paciente con espasmos en un lado de la cara y nota que cuando el ojo se aprieta la ceja se levanta paradójicamente (por contracción simultánea del frontal), está ante un Espasmo Hemifacial por conflicto vascular en la fosa posterior; solicite una RM cerebral 3D-FIESTA de inmediato.\n2. Inyecciones Pretarsales son Superiores a Preseptales: Los estudios clínicos demuestran que inyectar la toxina botulínica en el plano pretarsal superficial justo por encima del borde de pestañas requiere menor dosis, ofrece mayor alivio de los espasmos y produce menos ptosis palpebral que las inyecciones preseptales altas.\n3. La Cirugía de Jannetta Cura el Espasmo Hemifacial: En un paciente joven con HFS que no desea depender de inyecciones de toxina de por vida cada 3 meses, la descompresión microvascular de Jannetta ofrece más de un 90% de probabilidades de curación permanente de la compresión vascular.',
    highYieldPearl: 'BEB vs HFS Board Pearl: BEB es central, bilateral, cede al dormir y mejora con trucos sensitivos (geste antagoniste). HFS es periférico, unilateral, PERSISTE DURANTE EL SUEÑO y presenta el signo de Babinski-2 (ceja que se eleva mientras el ojo se cierra); se debe a compresión vascular en la REZ y se cura con descompresión microvascular de Jannetta.',
    keyDrugs: [
      { name: 'OnabotulinumtoxinA (Botox)', dose: '20-35 U por ojo en BEB; 15-25 U en HFS cada 3-4 meses', warning: 'Bloqueador presináptico de acetilcolina; evitar inyección central superior para no causar ptosis.' },
      { name: 'Clonazepam oral', dose: '0.5 a 2 mg al día vía oral', warning: 'Modulador gabaérgico coadyuvante; produce somnolencia y tolerancia con el tiempo.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'El Signo del Otro Babinski (Babinski-2)',
        category: 'Asociación Patognomónica',
        description: 'Elevación sincrónica paradójica del músculo frontal y de la ceja ipsilateral durante el cierre espasmódico forzado del ojo = Signo de Babinski-2. Es patognomónico de Espasmo Hemifacial (compresión periférica del VII par) y NUNCA se observa en el blefaroespasmo esencial ni en espasmos psicógenos.',
        trapToAvoid: 'Catalogar el espasmo como un tic psicógeno cuando el signo de Babinski-2 está presente.'
      },
      {
        title: 'Por Qué el Espasmo Hemifacial Persiste Durante el Sueño',
        category: 'Pregunta Clásica',
        description: 'Pregunta clásica de tribunal: "¿Por qué el espasmo hemifacial continúa activo mientras el paciente duerme mientras que el blefaroespasmo esencial desaparece?". Respuesta: Porque el HFS es un trastorno del axón periférico causado por una compresión vascular pulsátil constante con desmielinización focal y transmisión efáptica local que no depende de los ciclos de vigilia/sueño corticales cerebrales.',
        trapToAvoid: 'Creer que todas las distonías faciales se apagan durante el sueño.'
      },
      {
        title: 'Manejo de la Apraxia de la Apertura Ocular Asociada a BEB',
        category: 'Trampa de Tribunal',
        description: 'En pacientes con BEB que refieren que "no pueden abrir los párpados" a pesar de no tener espasmo visible del orbicular, existe apraxia motora. El tratamiento incluye inyectar microdosis de toxina botulínica en el orbicular pretarsal medial y considerar suspensión al frontal.',
        trapToAvoid: 'Aumentar la dosis de toxina en el párpado superior indiscriminadamente, lo que provocará una ptosis palpebral total iatrogénica.'
      }
    ],
    fellowshipKeyPoints: [
      'Zona de Salida de la Raíz (REZ / Obersteiner-Redlich Zone): Zona de transición donde los axones del nervio facial pasan de estar mielinizados por oligodendrocitos del SNC a células de Schwann del SNP; esta región de 2-3 mm es altamente vulnerable a la compresión mecánica pulsátil.',
      'Respuesta Lateralizada (Lateral Spread) en EMG Intraoperatorio: Durante la cirugía de Jannetta, la desaparición instantánea de la onda de transmisión efáptica en el EMG tras colocar la almohadilla de Teflon entre el vaso y el nervio confirma el éxito quirúrgico inmediato antes de despertar al paciente.',
      'Síndrome de Meige: Síndrome de Brueghel o distonía oromandibular asociada a blefaroespasmo, caracterizada por apertura involuntaria de la boca, protrusión de lengua y espasmos laríngeos con riesgo de disfagia.'
    ],
    landmarkTrials: [
      {
        name: 'Jannetta Microvascular Decompression Long-Term Outcomes Study',
        year: '1998 (J Neurosurg)',
        conclusion: 'Serie de más de 400 pacientes con espasmo hemifacial intervenidos con descompresión microvascular: Tasa de curación completa del 88% a los 10 años de seguimiento con una incidencia de complicaciones permanentes menor al 3%.',
        fellowshipRelevance: 'Consolidó a la microdescompresión vascular como el tratamiento quirúrgico de referencia curativo para el HFS.'
      }
    ],
    histopathologyAndGenetics: 'En biopsias y estudios de autopsia de conflicto neurovascular del VII par: Adelgazamiento severo de la lámina de mielina en la zona de contacto arterial con desmielinización focal de axones motores gruesos y proliferación astrocitaria reactiva; los axones vecinos quedan en aposición directa membrana con membrana sin aislamiento mielínico, lo que facilita la conducción efáptica.',
    surgicalPearls: [
      'Al realizar la descompresión microvascular de Jannetta: Monitorizar continuamente los Potenciales Evocados Auditivos del Tronco Encefálico (PEATE / BAEP); un alargamiento de la latencia de la onda V >1.0 milisegundo advierte de tracción excesiva sobre el VIII par craneal contiguo y riesgo inminente de anacusia neurosensorial permanente.',
      'Al aplicar la almohadilla de Teflon: No fijarla con pegamentos tisulares rígidos cerca de los orificios de salida óseos; interponer suficientes fibras de Teflon para evitar que la arteria vuelva a caer por gravedad sobre el nervio cuando el paciente se ponga de pie en el postoperatorio.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer de 54 años consulta por contracciones espasmódicas involuntarias en el lado izquierdo de la cara de 2 años de evolución. Comenzaron en el párpado inferior izquierdo y en los últimos meses se han extendido a la comisura labial del mismo lado. Su esposo afirma que los espasmos continúan incluso cuando ella está profundamente dormida. Al examen físico, en el momento en que se produce el cierre espasmódico forzado del ojo izquierdo, se observa que la ceja izquierda se eleva de manera sincrónica. ¿Cuál es el diagnóstico sindrómico exacto, qué nombre recibe este signo semiológico particular, cuál es la causa anatómica subyacente más frecuente y cuál es la opción terapéutica quirúrgica curativa definitiva disponible?',
        answer: '1) Diagnóstico Exacto: Espasmo Hemifacial (HFS) izquierdo.\n2) Signo Semiológico Particular: Signo de Babinski-2 (Signo del "Otro Babinski" / Babinski Orbicularis Sign: Elevación sincrónica paradójica del músculo frontal y de la ceja ipsilateral mientras el ojo se cierra involuntariamente; patognomónico de HFS frente al blefaroespasmo).\n3) Causa Anatómica Subyacente: Conflicto Neurovascular en la fosa posterior: Compresión mecánica y pulsátil ejercida por una arteria aberrante (típicamente la Arteria Cerebelosa Anteroinferior - AICA, o la PICA / arteria vertebral) sobre la Zona de Salida de la Raíz (Root Exit Zone - REZ) del nervio facial (VII par) en el surco bulboprotuberancial, provocando desmielinización focal y transmisión efáptica entre axones.\n4) Opción Quirúrgica Curativa Definitiva: Descompresión Microvascular de Jannetta (mediante craneotomía retrosigmoidea guiada por EMG intraoperatorio e interposición de una almohadilla de Teflon entre el bucle arterial y el nervio facial, con una tasa de curación superior al 85-90%). Para manejo conservador de mantenimiento, la infiltración de Toxina Botulínica tipo A cada 3-4 meses es la primera línea no quirúrgica.',
        trap: 'Confundir el cuadro con un blefaroespasmo esencial bilateral o un tic psicógeno, ignorando que el espasmo persiste en el sueño y tiene signo de Babinski-2.'
      }
    ]
  }
];

