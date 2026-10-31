import { TopicDeepDive } from '../types/ophthalmology';

export const REFRACTION_TOPICS: TopicDeepDive[] = [
  // =========================================================================
  // 1. QUERATOCONO Y ECTASIAS: PENTACAM (BELIN-AMBRÓSIO) Y CIRUGÍA REFRACTIVA
  // =========================================================================
  {
    id: 'deep-refraccion-queratocono-pentacam',
    title: 'Queratocono y Ectasias Corneales: Tomografía de Pentacam (Belin-Ambrósio) y Cirugía Refractiva',
    subspecialtyId: 'refraccion',
    summary: 'Monografía completa sobre diagnóstico tomográfico de ectasias corneales, análisis del software Belin-Ambrósio Enhanced Ectasia Display (BAD-D), criterios de seguridad para cirugía refractiva corneal con láser (LASIK / PRK) e implante de lentes fáquicos (ICL).',
    definitionAndEpidemiology: 'El queratocono es una ectasia corneal primaria, bilateral y asimétrica no inflamatoria caracterizada por adelgazamiento estromal progresivo y protrusión cónica de la córnea que genera astigmatismo irregular y miopización progresiva. Suele iniciarse en la pubertad y progresar hasta la 3ª o 4ª década de la vida.',
    anatomyAndPathophysiology: '1. Factores desencadenantes: Frotamiento ocular mecánico crónico (asociado fuertemente a atopia, blefaritis y ojo seco) en individuos genéticamente susceptibles.\n2. Microtrauma repetido con apoptosis de queratocitos estromales y liberación de proteasas lisosomales.\n3. Pérdida del ordenamiento lamelar del colágeno estromal tipo I y proteoglicanos queratán-sulfato.\n4. Rupturas focales en la membrana de Bowman y adelgazamiento estromal en el vértice del cono.\n5. En casos severos: Ruptura aguda de la membrana de Descemet -> entrada masiva de humor acuoso al estroma corneal -> Edema corneal masivo y opacificación brusca (Hydrops corneal agudo).',
    clinicalExamination: {
      biomicroscopy: 'En estadios incipientes: Córnea aparentemente normal. En estadios moderados a avanzados:\n• Estrías de Vogt: Finas líneas verticales estromales posteriores de tensión que desaparecen con la presión suave del dedo sobre el globo.\n• Anillo de Fleischer: Depósito circular o semicircular de hemosiderina epitelial en la base del cono (visible con filtro azul cobalto).\n• Adelgazamiento estromal apical máximo visible en corte fino.',
      fundus: 'Reflejo en gota de aceite en oftalmoscopia directa; sombras en tijera en esquiascopia / retinoscopia dinámica.',
      specialSigns: '• Signo de Munson: Protrusión angulada del párpado inferior en forma de "V" cuando el paciente mira hacia abajo.\n• Signo de Rizzuti: Reflejo cónico enfocado en la esclera límbica nasal cuando se ilumina el limbo temporal con una linterna.'
    },
    diagnosticWorkup: [
      {
        test: 'Tomografía Corneal Scheimpflug (Pentacam) y Belin-Ambrósio Display (BAD)',
        findings: 'Evaluación de las 5 desviaciones estándar del BAD (Df, Db, Dp, Dt, Da) y desviación final BAD-D:\n• BAD-D <1.6: Normal.\n• BAD-D 1.6 a 2.6: Sospecha de ectasia (subclínico / fruste).\n• BAD-D >2.6: Altamente patológico / Queratocono confirmado.\nElevación posterior anormal en Best-Fit Sphere (BFS) / Enhanced Reference Sphere (>12-14 µm es patológico).'
      },
      {
        test: 'Cálculo del Porcentaje de Tejido Alterado (PTA) en LASIK',
        findings: 'PTA = (Espesor del Flap + Profundidad de Ablación Láser) / Paquimetría Corneal Central Total.\nPTA > 40% es el factor de riesgo biomecánico independiente más potente de ectasia iatrogénica post-LASIK (estudio de Santhiago).'
      },
      {
        test: 'Cálculo del Lecho Estromal Residual (Residual Stromal Bed - RSB)',
        findings: 'RSB = Paquimetría Central - Espesor del Flap - Profundidad de ablación. El RSB debe ser SIEMPRE superior a 250-300 µm para evitar ectasia post-LASIK.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Degeneración Marginal Pelúcida (DMP)', distinction: 'Adelgazamiento en semiluna en la córnea periférica inferior a 1-2 mm del limbo con área corneal central preservada y mapa topográfico en "alas de mariposa" o "pinza de langosta" (crab-claw).' },
      { condition: 'Queratoglobo', distinction: 'Adelgazamiento globular no inflamatorio difuso de limbo a limbo en 360 grados presente desde el nacimiento, córnea globulosa gigante y alto riesgo de rotura ante mínimos traumatismos.' },
      { condition: 'Astigmatismo Miópico Irregular Secundario a Ojo Seco', distinction: 'Inestabilidad topográfica que mejora ostensiblemente tras instilar lágrimas artificiales sin conservantes y repetir la toma.' }
    ],
    steppedManagement: {
      medical: '• Queratocono Progresivo Documentado:\n  1) Indicación formal: Crosslinking Corneal del Colágeno (CXL):\n     - Protocolo de Dresde (Epi-Off): Remoción del epitelio central de 9 mm -> instilación de Riboflavina al 0.1% con dextrano cada 2 min durante 30 min -> irradiación con luz UVA (365 nm a 3 mW/cm2) durante 30 min.\n     - Efecto: Genera radicales libres de oxígeno que forman enlaces covalentes entre fibras de colágeno, deteniendo la progresión ectásica en >90% de los casos.\n• Manejo del Hydrops Corneal Agudo:\n  - Ciclopléjico + Solución salina hipertónica tópica al 5% (cloruro de sodio hiperosmolar) + vendaje o lente de contacto terapéutico.\n  - Si edema masivo: Inyección intracamerular de gas expansible (C3F8 0.1 mL o SF6 al 20%) para sellar la ruptura de Descemet y acelerar la resolución.',
      surgical: '• Rehabilitación visual en queratocono con córnea transparente:\n  - Paso 1: Lentes de contacto rígidos permeables al gas (RGP) o lentes esclerales de gran diámetro (crean una superficie refractiva perfecta).\n  - Paso 2: Anillos intracorneales estromales (ICRS / Ferrara / Keraring) implantados con láser de femtosegundo para aplanar y regularizar la córnea central.\n• En ectasias avanzadas con opacidad o cicatriz central:\n  - Queratoplastia Laminar Anterior Profunda (DALK con técnica de "Big Bubble" de Anwar): Preserva el endotelio propio del paciente y elimina el riesgo de rechazo endotelial.\n  - Queratoplastia Penetrante (PKP) si hay cicatrización que involucra la membrana de Descemet tras un hydrops previo.'
    },
    clinicalApplicationPractical: '1. Prevención primaria capital: PROHIBIR TERMINANTEMENTE el frotamiento ocular ("Stop Eye Rubbing"); tratar agresivamente la alergia ocular concomitante con antihistamínicos orales y tópicos sin conservantes (Olopatadina 0.2%).\n2. Criterios de exclusión absoluta para LASIK: Paquimetría <480 µm, RSB previsto <250-300 µm, PTA >40%, mapa de curvatura sospechoso (asimetría inferior >1.4 D), o elevación posterior anormal en Pentacam.\n3. Lente fáquico ICL (Implantable Collamer Lens): Alternativa de elección para miopías altas (-6 a -18 D) con córneas finas; exige profundidad de cámara anterior (ACD) mínima >= 2.8 - 3.0 mm (desde endotelio) y densidad endotelial >2000-2500 cel/mm2.',
    highYieldPearl: 'Santhiago PTA Model: Un Porcentaje de Tejido Alterado (PTA) >= 40% en cirugía refractiva corneal es el predictor individual más sensible y específico para el desarrollo de ectasia corneal iatrogénica post-LASIK, incluso en córneas con topografía preoperatoria aparentemente normal.',
    keyDrugs: [
      { name: 'Riboflavina 0.1% con dextrano', dose: 'Instilación cada 2 min durante 30 min', warning: 'Fotosensibilizador esencial para Crosslinking; absorbe UVA y protege el endotelio corneal.' },
      { name: 'Olopatadina 0.2%', dose: '1 gota cada 24 horas', warning: 'Antihistamínico y estabilizador de mastocitos; vital para cesar el frotamiento ocular compulsivo.' },
      { name: 'Solución salina hipertónica 5%', dose: '1 gota cada 4-6 horas', warning: 'Agente deshidratante osmótico tópico para manejo de edema en hydrops agudo.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Fórmula del PTA de Santhiago y Punto de Corte',
        category: 'Cifra Clave de Corte',
        description: 'Pregunta constante de Boards de Cirugía Refractiva: "¿Cómo se calcula el PTA y cuál es el valor límite que contraindica el LASIK?". Respuesta: PTA = (Espesor del Flap + Profundidad de Ablación) / Paquimetría Central Total. Si el PTA es >= 40%, el riesgo de ectasia se dispara y el LASIK está contraindicado.',
        trapToAvoid: 'Olvidar sumar el espesor del flap corneal en el cálculo del tejido alterado.'
      },
      {
        title: 'Criterio de Inclusión y Grosor Mínimo para CXL Dresde',
        category: 'Cifra Clave de Corte',
        description: 'En el protocolo de Dresde convencional para Crosslinking corneal: La córnea desepitelizada debe medir como MÍNIMO 400 micras de espesor estromal residual antes de aplicar la luz ultravioleta A (UVA) para evitar toxicidad citotóxica y descompensación irreversible del endotelio corneal.',
        trapToAvoid: 'Aplicar radiación UVA en un estroma fino <400 µm sin haberlo engrosado previamente con riboflavina hipotónica libre de dextrano.'
      },
      {
        title: 'Conducta en Hydrops Corneal Agudo',
        category: 'Trampa de Tribunal',
        description: 'Pregunta de examen: "¿Está indicada la queratoplastia penetrante de urgencia en un paciente con hydrops corneal agudo?". Respuesta: NO. La queratoplastia de urgencia está contraindicada en fase aguda debido a la friabilidad del tejido y la inflamación. El hydrops se maneja médicamente (hipertónicos tópicos y ciclopléjicos) o con inyección de gas en cámara anterior, esperando 3 a 6 meses a que resuelva antes de plantear cirugía.',
        trapToAvoid: 'Indicar trasplante corneal penetrante en caliente durante el hydrops agudo.'
      },
      {
        title: 'Requisitos de Seguridad para Lente Fáquico ICL',
        category: 'Pregunta Clásica',
        description: 'Parámetros obligatorios para implantar un ICL: 1) Profundidad de cámara anterior (ACD medida desde el endotelio) >= 2.8 mm; 2) Densidad de células endoteliales adecuada para la edad (>2000-2500 cel/mm2); 3) Ángulo iridocorneal abierto (Shaffer >=3); 4) Refracción estable al menos 1 año.',
        trapToAvoid: 'Medir el ACD desde el epitelio corneal en lugar del endotelio (añade 0.5 mm erróneos al espacio real).'
      }
    ],
    fellowshipKeyPoints: [
      'Belin-Ambrósio Enhanced Ectasia Display (BAD): Combina datos de elevación anterior y posterior referidos a una esfera de mejor ajuste excluida (exclusion zone BFS) con índices de progresión paquimétrica (PPI), detectando ectasia subclínica años antes de la topografía Placido.',
      'DALK vs PKP en Queratocono: La Queratoplastia Laminar Anterior Profunda (DALK) preserva el endotelio receptor del paciente, eliminando el riesgo de rechazo endotelial (la principal causa de fracaso tardío de un injerto de córnea).',
      'Lentes esclerales en Queratocono: Bóveda líquida (vault) sobre la córnea que neutraliza completamente las aberraciones ópticas de alto orden (coma y trefoil) sin contactar el vértice apical adelgazado.',
      'Ectasia post-PRK: Aunque el PRK no crea un flap y preserva mayor lecho estromal, puede desarrollar ectasia si la córnea preoperatoria tenía un queratocono fruste o un BAD-D patológico.'
    ],
    landmarkTrials: [
      {
        name: 'Dresden Protocol Crosslinking Study (Wollensak et al.)',
        year: '2003 (Am J Ophthalmol)',
        conclusion: 'El crosslinking corneal con riboflavina y UVA detuvo la progresión del queratocono en el 100% de los ojos tratados a 3 años y redujo la queratometría máxima en más de 2 dioptrías.',
        fellowshipRelevance: 'Ensayo pionero que transformó el queratocono de una enfermedad inevitablemente quirúrgica a una condición controlable.'
      }
    ],
    histopathologyAndGenetics: 'En queratocono: Desestructuración y fragmentación de la membrana de Bowman con invasión de prolongaciones de queratocitos hacia el epitelio, adelgazamiento del estroma central con empaquetamiento irregular de fibrillas de colágeno y depósito de hemosiderina en las células epiteliales basales que forman el anillo de Fleischer.',
    surgicalPearls: [
      'En Crosslinking en córneas finas (<400 µm): Instilar Riboflavina hipotónica al 0.1% libre de dextrano para hidratar e inducir un edema estromal osmótico controlado hasta que la paquimetría corneal supere los 400 µm antes de encender la luz UVA.',
      'En implantación de ICL fáquico: Medición precisa del diámetro blanco-blanco (White-to-White) y Sulcus-to-Sulcus con UBM para seleccionar el tamaño del lente y evitar un vault insuficiente (contacto con cristalino = catarata) o excesivo (bloqueo angular = glaucoma).'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 24 años desea someterse a cirugía LASIK miópico (-4.00 D). Su paquimetría central es de 525 µm. En la topografía Placido no se observan asimetrías evidentes, pero en el Pentacam el software Belin-Ambrósio muestra una desviación final BAD-D de 2.85 con elevación posterior de +18 micras. ¿Cuál es su conducta?',
        answer: 'El LASIK está FORMALMENTE CONTRAINDICADO. Una desviación BAD-D >2.6 y una elevación posterior >14 µm confirman un queratocono subclínico / fruste. Realizar un LASIK o PRK desencadenaría una ectasia iatrogénica progresiva devastadora. La conducta correcta es: 1) Prohibir el frotamiento ocular; 2) Proponer corrección óptica con gafas o lentes de contacto; 3) Solicitar tomografía de control en 6 meses para evaluar progresión y necesidad de Crosslinking.',
        trap: 'Aceptar realizar PRK pensando erróneamente que "al no cortar flap" es seguro operar una córnea con BAD-D francamente ectásico.'
      }
    ]
  },

  // =========================================================================
  // 2. CIRUGÍA REFRACTIVA LÁSER: PRK VS FEMTO-LASIK VS SMILE
  // =========================================================================
  {
    id: 'deep-refraccion-cirugia-laser-lasik-prk-smile',
    title: 'Cirugía Refractiva Láser: PRK vs Femto-LASIK vs SMILE, Complicaciones Lamelares (DLK) y Criterios Biomecánicos',
    subspecialtyId: 'refraccion',
    summary: 'Monografía quirúrgica comparativa sobre las tres técnicas principales de fotoablación y extracción lenticular con láser: PRK de superficie (queratectomía fotorrefractiva con mitomicina C al 0.02%), LASIK asistido por láser de femtosegundo (creación de flap lamelar y fotoablación excímer) y SMILE (Small Incision Lenticule Extraction con VisuMax de femtosegundo puro), incluyendo manejo de complicaciones agudas (Queratitis Lamelar Difusa / Arenas del Sahara - DLK, haze corneal, ojo seco neurotrófico y estrías de flap).',
    definitionAndEpidemiology: 'La cirugía refractiva corneal con láser es uno de los procedimientos quirúrgicos electivos más practicados en el mundo para la corrección de miopía, astigmatismo e hipermetropía. La selección personalizada de la técnica (PRK de superficie vs Femto-LASIK con flap vs SMILE sin flap) depende de la paquimetría corneal, el perfil de seguridad biomecánica (PTA, BAD-D), las aberraciones de alto orden y las actividades laborales o deportivas del paciente.',
    anatomyAndPathophysiology: '1. Comparación Mecánica y Anatómica de las Técnicas:\n   • PRK (Ablación de Superficie): Remoción del epitelio corneal (manual, con alcohol al 20% o transepithelial t-PRK) seguida de fotoablación excímer directa sobre la membrana de Bowman y estroma anterior. Preserva la mayor cantidad de lecho estromal residual biomecánico (todo el espesor menos la ablación), pero activa una respuesta cicatrizal fibrótica estromal (formación de haze por transformación de queratocitos a miofibroblastos).\n   • LASIK (Laser-Assisted in situ Keratomileusis): Creación de un flap o colgajo corneal lamelar (típicamente de 100 a 110 µm de espesor con láser de femtosegundo) -> eversión del flap -> ablación excímer sobre el lecho estromal profundo -> reposición del flap sin suturas. Recuperación visual casi inmediata (24h), pero corta el plexo nervioso subbasal produciendo hipoestesia y ojo seco transitorio, y crea una interfase permanente.\n   • SMILE (Small Incision Lenticule Extraction): Procedimiento con femtosegundo puro "all-in-one" que talla un lentículo refractivo intrastromal tridimensional sin crear flap, el cual se diseca y extrae manualmente a través de una incisión periférica en túnel de apenas 2 a 3 mm. Preserva las fibras de colágeno del estroma anterior (las más rígidas y resistentes a la tracción) y minimiza la denervación del plexo subbasal anterior.\n2. Respuesta Inflamatoria y DLK (Arenas del Sahara):\n   • Queratitis Lamelar Difusa: Reacción inflamatoria no infecciosa estéril mediada por acúmulo de neutrófilos en la interfase flap-lecho estromal en las primeras 24 a 72 horas del LASIK o SMILE, desencadenada por endotoxinas bacterianas de esterilización, aceites del microquerátomo o residuos calóricos del láser.',
    clinicalExamination: {
      biomicroscopy: 'En post-LASIK: Inspección microscópica del borde del flap, búsqueda de estrías macroscópicas o microscópicas (striae), invasión epitelial en la interfase o infiltrados leucocitarios.\nEn Queratitis Lamelar Difusa (DLK): Clasificación de Linebarger (Estadio 1 a 4):\n  • Estadio 1: Infiltrado celular granular blanco fino en la periferia de la interfase respetando el eje visual (Arenas del Sahara periféricas).\n  • Estadio 2: Infiltrado granular que invade el centro visual a las 48-72h sin agregación celular densa.\n  • Estadio 3: Infiltrado celular denso central con aspecto de "bloque de tiza" y disminución de agudeza visual.\n  • Estadio 4: Fusión estromal (melting) y necrosis colágena central con pérdida permanente de tejido y astigmatismo irregular severo.',
      fundus: 'Normal; descartar degeneraciones en empalizada (lattice) o roturas periféricas previas a la succión del láser de femtosegundo.',
      specialSigns: '• Test de Fluoresceína bajo Lámpara de Hendidura: Detección de estrías de grosor total del flap (striae) que producen distorsión y sombras bajo filtro azul cobalto.\n• Signo de la Interfase Vacía en DLK Estadio 4: Licuefacción del estroma central con colapso de la cámara corneal.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT de Segmento Anterior (AS-OCT) de Alta Resolución',
        findings: 'Medición precisa del espesor del flap corneal lamelar (precisión de +/- 4 µm), grosor del lentículo refractivo y cuantificación milimétrica del lecho estromal residual (RSB) verdadero.'
      },
      {
        test: 'Cálculo de la Profundidad de Ablación (Fórmula de Munnerlyn)',
        findings: 'Profundidad de corte del láser (micras) = [Dioptrías a corregir x (Diámetro de zona óptica en mm)^2] / 3. Para una zona óptica de 6.5 mm, cada dioptría de miopía consume aproximadamente 14 a 15 µm de estroma corneal.'
      },
      {
        test: 'Aberrometría de Frente de Onda (Wavefront Analyzer)',
        findings: 'Medición de la aberración esférica (Z 4,0) y coma (Z 3,-1 y Z 3,1) para seleccionar tratamientos guiados por frente de onda (Wavefront-Guided) o personalizados por topografía (Contoura / Topography-Guided).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Queratitis Infecciosa de la Interfase', distinction: 'Infiltrado focal blanco-amarillento bien delimitado, hiperemia ciliar intensa, hipopion, dolor sordo moderado a severo y edema perilesional; requiere levantar el flap para frotis microbiológico y cultivo inmediato.' },
      { condition: 'Síndrome de Acúmulo de Fluido en la Interfase (PISK)', distinction: 'Falso edema con colección serosa líquida en la interfase inducido por uso prolongado de corticoides que elevan la PIO; al aplanar la córnea central el tonómetro de Goldmann subestima falsamente la PIO real (ej. mide 12 mmHg cuando la PIO periférica es de 45 mmHg).' },
      { condition: 'Haze Corneal Estromal Anterior post-PRK', distinction: 'Opacidad estromal reticular subepitelial no inflamatoria que aparece de 1 a 3 meses post-cirugía por fibrosis descontrolada; prevenida intraoperatoriamente con Mitomicina C.' }
    ],
    steppedManagement: {
      medical: '• Prevención de Haze en PRK:\n  - Mitomicina C (MMC) al 0.02%: Aplicación tópica sobre el estroma ablacionado mediante esponja de celulosa durante 12 a 30 segundos, seguida de lavado profuso con 20-30 mL de BSS frío (inhibe la proliferación de miofibroblastos).\n• Manejo por Estadios de la Queratitis Lamelar Difusa (DLK):\n  - DLK Estadio 1 y 2: Acetato de Prednisolona al 1% o Dexametasona tópica cada 1 hora día y noche durante 48 horas + lubricación intensa.\n  - DLK Estadio 3: Si no mejora en 24h o hay agregación central densa: LEVANTAMIENTO QUIRÚRGICO INMEDIATO DEL FLAP EN QUIRÓFANO para lavado profuso de la interfase con solución salina balanceada (BSS) para retirar físicamente los neutrófilos antes de que liberen colagenasas.\n  - DLK Estadio 4: Tratamiento agresivo con corticoides sistémicos orales y tópicos sin conservantes para frenar la necrosis tisular.',
      surgical: '• Manejo de Estrías del Flap (Striae):\n  - Si causan pérdida de agudeza visual corregida (BCVA) o astigmatismo irregular:\n  - Relift del flap en quirófano: Despegamiento del flap lamelar, desepitelización focal sobre las estrías, hidratación estromal con agua destilada hipotónica para inducir edema y estiramiento biomecánico del flap, y planchado mecánico con espátula de Lindstrom o esponja seca, finalizando con colocación de lente de contacto terapéutico.'
    },
    clinicalApplicationPractical: '1. Prevención del PISK (Pressure-Induced Stromal Keratopathy): En todo paciente post-LASIK que recibe corticoides y desarrolla "edema o velo en la interfase", medir la presión intraocular en la esclera periférica o limbo, no en el centro del flap (el líquido en la interfase actúa como un colchón hidráulico que falsea la tonometría a cifras normales cuando el ojo está en glaucoma agudo por esteroides).\n2. Criterios de Selección: Pacientes deportistas de contacto (boxeo, artes marciales, militares) deben operarse con PRK o SMILE para eliminar el riesgo de dislocación traumática del flap que persiste de por vida en LASIK.\n3. Respetar siempre el RSB: El lecho estromal residual nunca debe ser inferior a 250 µm (preferible >300 µm); violar este principio conduce a ectasia iatrogénica irreversible.',
    highYieldPearl: 'PISK Trap: El fluido acumulado en la interfase del flap post-LASIK falsea a la baja la tonometría de aplanación de Goldmann en el centro corneal; la PIO real debe medirse en la córnea periférica sobre tejido sólido para no confundir un glaucoma esteroideo hipertensivo con inflamación.',
    keyDrugs: [
      { name: 'Mitomicina C (MMC) 0.02%', dose: 'Aplicación tópica estromal 12 a 30 segundos', warning: 'Fármaco antimitótico clave para prevenir haze post-PRK; lavar abundantemente con BSS.' },
      { name: 'Acetato de Prednisolona 1%', dose: '1 gota cada 1-2 horas en fase aguda de DLK', warning: 'Tratamiento de primera línea para DLK estadio 1 y 2; vigilar PIO periférica por riesgo de PISK.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Clasificación de Linebarger para DLK y Conducta en Estadio 3',
        category: 'Pregunta Clásica',
        description: 'Pregunta canónica de Fellowship: "¿Cuál es la conducta indicada ante una Queratitis Lamelar Difusa post-LASIK que progresa a Estadio 3 (acúmulo denso de neutrófilos en eje visual)?". Respuesta: Levantamiento quirúrgico del flap en quirófano con lavado profuso de la interfase con BSS. Los colirios solos ya no son suficientes para evitar el melting corneal (Estadio 4).',
        trapToAvoid: 'Aumentar las gotas de esteroides y esperar días en un estadio 3 sin lavar la interfase.'
      },
      {
        title: 'Por Qué SMILE Preserva Mejor la Resistencia Biomecánica',
        category: 'Pregunta Clásica',
        description: 'Las capas anteriores del estroma corneal (primeras 100-120 µm) contienen mayor densidad de fibrillas de colágeno entrelazadas y aportan la mayor fuerza tensional. Al no cortar un flap superficial y extraer el lentículo desde la profundidad a través de una incisión de 2 mm, SMILE preserva la capa estromal más resistente.',
        trapToAvoid: 'Creer que SMILE permite operar córneas con queratocono subclínico (la ectasia puede ocurrir en cualquier procedimiento lamelar si la córnea preoperatoria es biomecánicamente inestable).'
      }
    ],
    fellowshipKeyPoints: [
      'Contoura Vision (Cirugía Topo-Guiada): Registra más de 22,000 puntos de elevación de la córnea con el topógrafo Vario para tratar no solo el defecto dióptrico esferocilíndrico sino las aberraciones corneales de alto orden intrínsecas del paciente.',
      'Invasión Epitelial de la Interfase: Proliferación de nidos epiteliales que migran por debajo del borde del flap; si avanzan a menos de 2 mm del eje pupilar o inducen despegamiento del borde o astigmatismo, requieren desbridamiento quirúrgico y sutura o adhesivo tisular.',
      'Ojo Seco Neurotrófico Post-LASIK: La sección de las ramas ciliares largas del trigémino en el plexo subbasal estromal anterior reduce la sensibilidad corneal durante 3 a 6 meses; la secreción lagrimal refleja se normaliza tras la regeneración axoplásmica.'
    ],
    landmarkTrials: [
      {
        name: 'Reinstein et al. / Mathematical Model of Corneal Biomechanics in PRK, LASIK, and SMILE',
        year: '2013 (J Refract Surg)',
        conclusion: 'Demostró que SMILE preserva teóricamente mayor fuerza de tracción corneal total postoperatoria que LASIK debido a la preservación del estroma anterior fuerte.',
        fellowshipRelevance: 'Fundamento biomecánico moderno de la cirugía lenticular intrastromal.'
      }
    ],
    histopathologyAndGenetics: 'En Queratitis Lamelar Difusa: Infiltrado denso estéril compuesto predominantemente por neutrófilos polimorfonucleares confinados en el espacio de la interfase lamelar sin invasión al estroma suprayacente o subyacente. En Haze post-PRK: Depósito anárquico de proteoglicanos y colágeno desestructurado sintetizado por miofibroblastos reactivos alfa-SMA positivos.',
    surgicalPearls: [
      'En extracción del lentículo en SMILE: Disecar primero el plano anterior del lentículo (justo por debajo del capuchón) y después el plano posterior antes de extraerlo con la pinza; si se diseca el posterior primero, el lentículo pierde tensión y la disección anterior se vuelve sumamente difícil.',
      'En repositioning de flap post-LASIK: Alinear escrupulosamente las marcas cutáneas de tinta preoperatorias en el borde del flap e irrigar la interfase con cánula plana mientras se absorbe el exceso de líquido con esponjas de Merocel secas en el surco periférico para lograr un sellado por adhesión endotelial inmediata.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente sometido a Femto-LASIK bilateral hace 4 días acude con visión borrosa y sensación de cuerpo extraño en ojo derecho. A la lámpara de hendidura se observa un denso acúmulo celular blanco lechoso agrupado en el centro del eje visual en la interfase lamelar, con aspecto de "bloque de tiza", sin secreción purulenta conjuntival ni hipopion. La agudeza visual ha caído a 20/80. ¿Cuál es el diagnóstico exacto de esta complicación, en qué estadio se encuentra según la clasificación de Linebarger y cuál es la conducta terapéutica inmediata e ineludible?',
        answer: '1) Diagnóstico exacto: Queratitis Lamelar Difusa (DLK / Arenas del Sahara).\n2) Estadio: Estadio 3 de Linebarger (agregación celular densa central en el eje visual con compromiso de la agudeza visual corregida).\n3) Conducta Ineludible: Traslado inmediato del paciente a quirófano para realizar LEVANTAMIENTO QUIRÚRGICO DEL FLAP (Relift) y LAVADO PROFUSO DE LA INTERFASE con solución salina balanceada (BSS) estéril, removiendo mecánicamente todos los neutrófilos y detritos inflamatorios antes de recolocar el flap. Diferir el lavado o confiar únicamente en colirios de esteroides en estadio 3 precipitará la necrosis estromal (melting / Estadio 4) con daño visual irreversible.',
        trap: 'Aumentar la frecuencia de los corticoides tópicos y citar al paciente en 48 horas sin realizar el lavado quirúrgico de la interfase.'
      }
    ]
  },

  // =========================================================================
  // 3. LENTES INTRAOCULARES FÁQUICOS (EVO/EVO+ ICL): VAULTING Y MANEJO
  // =========================================================================
  {
    id: 'deep-refraccion-lentes-faquicos-icl-optica',
    title: 'Lentes Intraoculares Fáquicos de Colámero (ICL / EVO+): Biometría Óptica, Vaulting y Manejo de Complicaciones',
    subspecialtyId: 'refraccion',
    summary: 'Monografía exhaustiva sobre corrección refractiva intraocular en altas ametropías mediante Lentes Fáquicos de Cámara Posterior (EVO / EVO+ Visian ICL con puerto central KS-AquaPORT): Selección y criterios estrictos de aptitud ocular (ACD, recuento endotelial, ángulo iridocorneal), medición del diámetro blanco-blanco (WTW) y Sulcus-to-Sulcus (STS) mediante Ultrabiomicroscopía (UBM), dinámica y cuantificación del vault fisiológico (distancia ICL-cristalino) y prevención y rescate de complicaciones mayores (catarata subcapsular anterior por bajo vaulting, glaucoma por cierre angular / bloqueo pupilar por excesivo vaulting y dispersión pigmentaria).',
    definitionAndEpidemiology: 'La implantación de lentes fáquicos intraoculares de colámero (ICL) es la técnica de elección para la corrección reversible de miopías moderadas a severas (-0.50 a -18.00 D) y astigmatismo concomitante (hasta +6.00 D) en pacientes no candidatos a cirugía refractiva corneal por córneas finas (<480 µm), queratocono subclínico, elevado PTA o riesgo de ectasia. El diseño moderno EVO/EVO+ incorpora un micro-orificio central de 360 µm (AquaPORT) que permite la circulación fisiológica del humor acuoso eliminando la necesidad de realizar iridotomías periféricas láser preoperatorias.',
    anatomyAndPathophysiology: '1. Material y Posición Anatómica del ICL:\n   • Colámero (Collamer): Copolímero hidrofílico biocompatible compuesto de colágeno porcino purificado al 0.2% y HEMA (hidroxietilmetacrilato) con carga iónica negativa estromal que repele el depósito de proteínas plasmáticas y la adhesión de macrófagos.\n   • Ubicación: Cámara posterior, colocado en el surco ciliar (ciliary sulcus) descansando sus cuatro hápticas sobre la base del cuerpo ciliar por detrás del iris y suspendido sobre la cara anterior del cristalino natural.\n2. El Concepto Fundamental del "Vault" (Bóveda):\n   • Es el espacio o distancia anatómica de separación entre la cara posterior del lente ICL y la cara anterior del cristalino en el meridiano pupilar central (medido en micras mediante OCT de segmento anterior o lámpara de hendidura).\n   • Rango de Vault Óptimo / Seguro: Entre 250 µm y 750 µm (equivalente a aproximadamente 0.5 a 1.5 veces el espesor de la córnea central del paciente).\n3. Fisiopatología de los Extremos de Vaulting:\n   • Bajo Vaulting (<150-200 µm): Contacto mecánico directo o fricción intermitente durante la acomodación del ICL contra la cápsula anterior del cristalino con alteración de la nutrición metabólica acuosa del epitelio cristaliniano -> formación de opacidad / Catarata Subcapsular Anterior precoz.\n   • Alto Vaulting (>900-1000 µm): El lente se arquea excesivamente hacia adelante empujando la raíz del iris contra la malla trabecular -> cierre angular secundario periférico, bloqueo del flujo acuoso y elevación tensional aguda (glaucoma agudo por contacto iridocorneal) o dispersión pigmentaria crónica con glaucoma de pigmento.',
    clinicalExamination: {
      biomicroscopy: 'Estimación del Vault con corte fino en hendidura a 45 grados: Se compara el grosor óptico del espacio negro entre la cara posterior del ICL y el cristalino con el espesor de la córnea adyacente (CCT). Si el espacio mide la mitad del grosor corneal = ~250 µm; si mide exactamente igual al grosor corneal = ~500 µm (ideal).\nRevisión de la posición del AquaPORT central exactamente sobre el centro pupilar.',
      fundus: 'Examen de retina periférica a 360 grados bajo midriasis con indentación escleral; tratar preventivamente cualquier desgarro o degeneración retiniana rhegmatógena con láser argón al menos 2-3 semanas antes de la intervención.',
      specialSigns: '• Maniobra de Iluminación Fotópica vs Escotópica: En condiciones escotópicas (oscuridad), la midriasis fisiológica disminuye dinámicamente el vault entre 100 y 150 µm; en iluminación intensa fotópica la miosis empuja el ICL hacia atrás contra el cristalino (dinámica fisiológica que debe considerarse al interpretar la medida).'
    },
    diagnosticWorkup: [
      {
        test: 'Parámetros Anatómicos Obligatorios de Aptitud (Criterios FDA / ESCRS)',
        findings: '1) Profundidad de Cámara Anterior (ACD medido desde endotelio corneal hasta cristalino): MÍNIMO >= 2.80 mm (idealmente >= 3.00 mm).\n2) Densidad de Células Endoteliales Corneales (ECD): Mínimo >2000 a 2500 cel/mm2 según la edad del paciente.\n3) Amplitud del Ángulo Iridocorneal en Gonioscopia: Grado III o IV de Shaffer (ángulo abierto >=30 grados).\n4) Estabilidad refractiva documentada (variación <0.50 D en los últimos 12 meses).'
      },
      {
        test: 'Medición del Diámetro Blanco a Blanco (White-to-White - WTW) y Sulcus-to-Sulcus (STS)',
        findings: 'La selección del tamaño del ICL (12.1, 12.6, 13.2 o 13.7 mm) depende de la concordancia entre el WTW óptico y la UBM (Ultrabiomicroscopía de 50 MHz). Si el WTW se sobrestima, se implantará un lente demasiado grande provocando vaulting excesivo y glaucoma.'
      },
      {
        test: 'OCT de Segmento Anterior (AS-OCT) de Control Postoperatorio',
        findings: 'Medición cuantitativa micrométrica exacta del vault central en micras en posición primaria a 1 hora, 1 día, 1 mes y 1 año de la cirugía.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Glaucoma por Cierre Angular Agudo Secundario a Alto Vault', distinction: 'Ojo rojo doloroso en las primeras 24 horas postoperatorias con PIO >40 mmHg, edema corneal y vault >1000 µm con ángulo completamente cerrado; requiere pilocarpina tópica, hipotensores y recambio por un tamaño menor de ICL si no resuelve.' },
      { condition: 'Síndrome de Toxicidad del Segmento Anterior (TASS)', distinction: 'Inflamación química estéril fulminante a las 12-24h con edema corneal difuso de limbo a limbo y fibrina densa en cámara anterior pero sin infección microbiológica.' },
      { condition: 'Catarata Subcapsular Anterior Traumática', distinction: 'Opacidad estelar blanquecina en el polo anterior cristaliniano secundaria a contacto inadvertido del instrumental quirúrgico durante la inserción del cartucho del ICL.' }
    ],
    steppedManagement: {
      medical: '• Manejo Postoperatorio Inmediato:\n  - Vigilar la PIO a las 2 a 3 horas post-cirugía: Descartar retención viscosa de viscoelástico (OVD) en cámara anterior, la cual es la causa más común de pico hipertensivo agudo precoz.\n  - Tratamiento tópico estándar: Moxifloxacino 0.5% + Dexametasona 0.1% en pauta descendente durante 3 a 4 semanas.\n• En Hipertensión Ocular por Retención Viscoelástica:\n  - Hipotensores tópicos (Brimonidina + Timolol) y Acetazolamida oral (250 mg); si la PIO es >35 mmHg persistente, lavado de viscoelástico residual en lámpara de hendidura a través de la paracentesis con aguja estéril.',
      surgical: '• Manejo de Vault Anormal Irreversible:\n  1) Si Vault Excesivo (>1000 µm con hipertensión ocular refractaria o cierre angular):\n     - Retiro y recambio del lente ICL por una talla menor (ej. cambiar de 13.2 mm a 12.6 mm).\n  2) Si Vault Insuficiente (<100 µm con contacto cristaliniano evidente en OCT):\n     - Explicación del ICL y recambio por una talla mayor (ej. de 12.6 mm a 13.2 mm) antes de que se desarrolle catarata clínica permanente.\n  3) Si se desarrolla Catarata Subcapsular Anterior Significativa:\n     - Explantación simultánea del lente ICL + Facoemulsificación del cristalino cataratoso + Implante de lente intraocular pseudofáquico con cálculo de biometría estándar.'
    },
    clinicalApplicationPractical: '1. Medición meticulosa del ACD: Medir SIEMPRE el ACD desde el ENDOTELIO corneal, no desde el epitelio; si la máquina mide desde el epitelio, restar 0.5 mm para no calificar de apto a un ojo estrecho.\n2. Lavado escrupuloso del Viscoelástico: Al finalizar la implantación del ICL, el viscoelástico debe aspirarse tanto por delante como por DETRÁS del lente ICL; dejar viscoelástico atrapado detrás del colámero es la causa principal de elevación tensional tórpida en la primera noche.\n3. Rango del Vault de Seguridad: Memorizar la regla del 50%: El espacio entre el ICL y el cristalino debe verse aproximadamente igual al grosor de la córnea (unos 500 micras).',
    highYieldPearl: 'Vaulting Golden Rule: El vault fisiológico ideal del ICL oscila entre 250 y 750 µm (0.5 a 1.5 espesores corneales). Un vault <150 µm induce catarata subcapsular anterior por fricción metabólica; un vault >1000 µm induce glaucoma agudo por cierre angular.',
    keyDrugs: [
      { name: 'Acetato de Dexametasona 0.1%', dose: '1 gota cada 4 horas durante 1 semana, luego descenso', warning: 'Corticosteroide antiinflamatorio postoperatorio estándar.' },
      { name: 'Acetazolamida oral', dose: '250 mg vía oral dosis única en picos tensionales', warning: 'Inhibidor sistémico de la anhidrasa carbónica para controlar hipertensión precoz.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Criterio Mínimo de Profundidad de Cámara Anterior (ACD)',
        category: 'Cifra Clave de Corte',
        description: 'La profundidad de cámara anterior (ACD) mínima requerida para implantar un ICL EVO es de >= 2.80 mm medida desde el ENDOTELIO corneal (o >= 3.30 mm medida desde el epitelio).',
        trapToAvoid: 'Aceptar operar a un paciente con ACD de 2.6 mm creyendo que el puerto central compensará la falta de espacio.'
      },
      {
        title: 'Función del Micro-Orificio Central (KS-AquaPORT)',
        category: 'Pregunta Clásica',
        description: 'El diseño EVO ICL incorpora un puerto central de 0.36 mm (360 µm) perforado por láser que permite el flujo fisiológico del humor acuoso desde la cámara posterior a la anterior, previniendo el bloqueo pupilar y eliminando la necesidad de iridotomías periféricas previas.',
        trapToAvoid: 'Indicar iridotomías láser YAG preoperatorias en lentes de modelo EVO/EVO+ moderno.'
      }
    ],
    fellowshipKeyPoints: [
      'Cálculo del Tamaño del ICL (Sizing): Las fórmulas modernas basadas en UBM e inteligencia artificial (fórmulas de Reinstein, Dougherty y NK) combinan el Sulcus-to-Sulcus con el Lens Vault (protrusión anterior del cristalino) para predecir el vault con un error <100 µm.',
      'Reversibilidad Completa: A diferencia del LASIK o PRK donde se elimina tejido corneal irreversiblemente, la cirugía fáquica con ICL es 100% reversible; el lente puede explantarse en cualquier momento devolviendo al ojo su anatomía refractiva previa.',
      'Preservación de la Asfericidad Corneal: El ICL respeta intacta la cara anterior de la córnea, manteniendo la sensibilidad al contraste nocturna y no induciendo aberraciones esféricas de alto orden.'
    ],
    landmarkTrials: [
      {
        name: 'Packer et al. / US FDA Clinical Trial for the EVO/EVO+ ICL',
        year: '2022',
        conclusion: 'El modelo EVO con puerto central demostró una tasa de eficacia refractiva >98%, con una incidencia de formación de catarata subcapsular anterior <0.2% a 5 años sin requerir iridotomías previas.',
        fellowshipRelevance: 'Aprobación regulatoria pivotal por la FDA de la plataforma EVO en Estados Unidos.'
      }
    ],
    histopathologyAndGenetics: 'En catarata inducida por bajo vault: Vacuolización focal y proliferación fibrosa metaplásica del epitelio cristaliniano subcapsular anterior en la zona de aposición mecánica contra el colámero con depósito de material de matriz colágena fibrilar aberrante.',
    surgicalPearls: [
      'Al desplegar el ICL en cámara anterior: Verificar que los dos orificios de orientación en las hápticas apunten en la dirección correcta para garantizar que el lente no esté invertido (al revés): la marca de la háptica antero-derecha debe estar arriba a la derecha y la postero-izquierda abajo a la izquierda.',
      'Aspiración del viscoelástico: Emplear técnica bimanual de infusión/aspiración a baja velocidad (cánula de 0.8 mm) entrando suavemente por detrás del cuerpo óptico del ICL para no luxar las hápticas del surco ciliar.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente miope alto de 26 años con refracción de -11.00 D y paquimetría de 460 µm fue sometido a implante de ICL EVO+ en ojo izquierdo hace 24 horas. En el control postoperatorio refiere dolor ocular leve. A la exploración la agudeza visual espontánea es 20/20. En la lámpara de hendidura se observa un vault de 90 µm (apenas 0.2 espesores corneales) con aposición franca entre la superficie posterior del ICL y el cristalino en los movimientos pupilares. El ángulo está abierto y la PIO es de 14 mmHg. ¿Cuál es la interpretación diagnóstica de este vault, qué complicación amenaza a largo plazo y cuál es la conducta recomendada?',
        answer: '1) Interpretación diagnóstica: Se trata de un BAJO VAULTING patológico (<150 µm) secundario a un subdimensionamiento del tamaño del ICL (se implantó un lente de tamaño menor al requerido por el surco ciliar del paciente).\n2) Complicación a largo plazo: El contacto mecánico continuo y la alteración del recambio de humor acuoso sobre la cápsula anterior provocarán el desarrollo inevitable de una Catarata Subcapsular Anterior y pérdida de la visión.\n3) Conducta recomendada: No mantener una conducta expectante pasiva indefinida. Se debe programar la EXPLANTACIÓN Y RECAMBIO DEL LENTE ICL por una talla superior (ejemplo: si se implantó un 12.6 mm, recambiar por un 13.2 mm) para elevar la bóveda al rango de seguridad de 250-750 µm antes de que se inicie la opacificación epitelial del cristalino.',
        trap: 'Considerar que "como el paciente ve 20/20 y no tiene glaucoma" no hay que intervenir, permitiendo que desarrolle una catarata precoz en un paciente joven de 26 años.'
      }
    ]
  },

  // =========================================================================
  // 4. PRESBICIA Y CIRUGÍA REFRACTIVA LÁSER: PRESBYOND Y MICROMONOVISIÓN
  // =========================================================================
  {
    id: 'deep-refraccion-presbicia-presbyond-monovision',
    title: 'Presbicia y Cirugía Láser Corneal: Presbyond Laser Blended Vision, Monovisión y Aberración Esférica Controlada',
    subspecialtyId: 'refraccion',
    summary: 'Monografía exhaustiva sobre compensación quirúrgica corneal de la presbicia: Selección de dominancia ocular, monovisión tradicional vs micromonovisión (-1.25 a -1.50 D), perfil corneal asférico personalizado con inducción controlada de aberración esférica (Presbyond Laser Blended Vision de Carl Zeiss Meditec / Mel 90), expansión de la profundidad de foco (DoF), neuroadaptación binocular y criterios de exclusión.',
    definitionAndEpidemiology: 'La presbicia es la pérdida fisiológica progresiva e irreversible de la amplitud de acomodación del cristalino dependiente de la edad, manifestada universalmente a partir de los 40-45 años. El abordaje corneal con láser busca otorgar independencia de gafas para visión lejana, intermedia (ordenador/pantallas) y cercana (lectura) mediante la modulación de aberraciones corneales y asfericidad sin comprometer la visión binocular.',
    anatomyAndPathophysiology: '1. Fisiología Acomodativa y Envejecimiento:\n   • Teoría de Helmholtz: La contracción del músculo ciliar relaja la zónula de Zinn, permitiendo que la cápsula elástica del cristalino aumente su convexidad y poder dióptrico.\n   • En presbicia: Esclerosis del núcleo y corteza cristaliniana, pérdida de elasticidad capsular y aumento del volumen cristaliniano.\n2. Principio Óptico de la Monovisión Tradicional:\n   • Ojo dominante corregido para el infinito óptico (Plano / 0.00 D).\n   • Ojo no dominante corregido para visión cercana (-2.00 a -2.50 D).\n   • Limitación: Anisometropía excesiva (>2.0 D) que suprime la estereopsis fina (visión 3D) y genera una "zona muerta" o borrosa intermedia entre 60 cm y 1.5 metros.\n3. Fundamento de Presbyond Laser Blended Vision (LBV):\n   • Combina una micromonovisión anisométrica suave (-1.25 a -1.50 D en ojo no dominante) con un perfil de ablación asférico no lineal que induce una cantidad micrométrica calculada de ABERRACIÓN ESFÉRICA NEGATIVA O POSITIVA (Z 4,0).\n   • La aberración esférica controlada alarga el cono de luz cáustico focal, creando una PROFUNDIDAD DE FOCO EXTENDIDA (Extended Depth of Focus - EDOF) en cada ojo por separado.\n   • Al solaparse los rangos visuales de ambos ojos en la distancia intermedia, se genera la "Blend Zone" (zona de fusión), permitiendo visión binocular continua desde 33 cm hasta el infinito sin pérdida de estereopsis.',
    clinicalExamination: {
      biomicroscopy: 'Superficie ocular rigurosamente sana; la edad de la presbicia coincide con el pico de disfunción de glándulas de Meibomio (DGM) y ojo seco evaporativo que debe tratarse antes de la cirugía.',
      fundus: 'Descartar maculopatías, drusas o tracción vítreo-retiniana que impidan una agudeza visual potencial corregida (CDVA) de 20/20.',
      specialSigns: '• Test de Dominancia Ocular Motora vs Sensorial: Agujero en tarjeta (manos en triángulo o tarjeta de Dolman) para dominancia motora; lente +1.50 D alternante durante lectura lejana para dominancia sensorial (el ojo que tolera peor el desenfoque es el dominante).'
    },
    diagnosticWorkup: [
      {
        test: 'Prueba de Tolerancia con Lentes de Contacto (Simulación en Vida Real)',
        findings: 'Uso de lentillas blandas durante 1 a 2 semanas simulando la micromonovisión (-1.25 a -1.50 D en ojo no dominante). Confirmar que el paciente tolere la conducción nocturna y lea cómodamente su móvil sin mareos ni astenopia.'
      },
      {
        test: 'Aberrometría Corneal y de Onda Completa (WASCA / CRS-Master)',
        findings: 'Medición de la aberración esférica basal del paciente. Presbyond titula la adición de aberración esférica según la tolerancia funcional individual (Custom Ablation).'
      },
      {
        test: 'Topografía Corneal y Pupilometría Dinámica (Escotópica vs Mesópica)',
        findings: 'Diámetro pupilar mesópico ideal entre 3.5 y 5.5 mm. Pupilas excesivamente grandes (>6.5-7 mm) tienen mayor riesgo de halos y deslumbramientos nocturnos; pupilas excesivamente mióticas (<2.5 mm) reducen el beneficio de la aberración esférica periférica.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Catarata Nuclear Incipiente con "Miopización Fáquica"', distinction: 'El aumento del índice refractivo del núcleo simula una mejoría paradójica de la lectura cercana (segunda visión del anciano); requiere facoemulsificación con LIO multifocal/EDOF, no láser corneal.' },
      { condition: 'Espasmo Acomodativo / Pseudo-miopía', distinction: 'Refracción ciclopléjica obligatoria con ciclopentolato para desenmascarar el tono ciliar real.' }
    ],
    steppedManagement: {
      medical: '• Selección y Consentimiento Informado Escrupuloso:\n  - Identificar la personalidad del paciente: Pacientes perfeccionistas, conductores profesionales nocturnos o ingenieros de alta precisión milimétrica tienen menor tasa de satisfacción.\n  - Explicar la curva de neuroadaptación: El cerebro tarda de 4 a 12 semanas en fusionar la zona intermedia de Presbyond.\n• Gotas lubricantes sin conservantes pre y postoperatorias.',
      surgical: '• Procedimiento Quirúrgico (Presbyond con Láser Mel 90 / VisuMax Femto-LASIK):\n  1. Creación de flap con femtosegundo de 100 µm de espesor y diámetro amplio (9.0 mm).\n  2. Ablación en ojo dominante: Objetivo refracción lejana (0.00 D) + modulación de aberración esférica (extiende visión a rango intermedio).\n  3. Ablación en ojo no dominante: Objetivo -1.25 a -1.50 D + modulación de aberración esférica (extiende visión desde cerca a rango intermedio).\n  4. Lavado y reposición meticulosa del flap.\n• Manejo ante Intolerancia o Regresión Tardía:\n  - Si el paciente no se adapta a la micromonovisión tras 6 meses: Retoque excímer (enhancement) en el ojo no dominante para llevarlo a plano (0.00 D), transformándolo en visión lejana bilateral (el paciente volverá a usar gafas de lectura convencionales, pero sin secuelas).'
    },
    clinicalApplicationPractical: '1. Regla de Oro: NUNCA operar un Presbyond o monovisión sin realizar previamente el test de prueba con lentes de contacto blandas durante al menos 7 a 10 días.\n2. Criterio de Selección: Miopes presbitas entre 45 y 58 años con cristalino perfectamente transparente son los mejores candidatos mundiales (evitan la pérdida de acomodación residual y disfrutan de visión completa).\n3. En pacientes >60 años con opacidad cristaliniana incipiente (esclerosis nuclear grado 1-2): Desaconsejar el láser corneal y sugerir cirugía de reemplazo cristaliniano refractivo (RLE) con implante de LIO trifocal o EDOF.',
    highYieldPearl: 'Presbyond Mechanism: Combina micromonovisión suave (-1.25 a -1.50 D en ojo no dominante) con inducción de aberración esférica controlada que expande la profundidad de foco (EDOF). Esto elimina la zona muerta intermedia de la monovisión clásica y preserva la estereopsis binocular.',
    keyDrugs: [
      { name: 'Ciclopentolato 1%', dose: '3 gotas espaciadas por 10 min en evaluación previa', warning: 'Imprescindible para cicloplejía preoperatoria y determinar la esfera manifiesta pura.' },
      { name: 'Lágrimas de Ácido Hialurónico al 0.15-0.4%', dose: '1 gota cada 2-3 horas', warning: 'Mantenimiento de la película lagrimal durante el proceso de neuroadaptación.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Diferencia Clave entre Monovisión y Presbyond',
        category: 'Pregunta Clásica',
        description: 'En la monovisión pura se usan potencias esféricas estándar con una diferencia de -2.0 a -2.5 D entre ojos, perdiendo la visión intermedia y la estereopsis. Presbyond usa solo -1.25 a -1.5 D de anisometropía pero añade aberración esférica no lineal para crear una zona de fusión intermedia continua (Blend Zone).',
        trapToAvoid: 'Creer que Presbyond es una monovisión convencional con otro nombre comercial.'
      },
      {
        title: 'Aberración Esférica Inducida',
        category: 'Asociación Patognomónica',
        description: 'La aberración óptica de 4º orden responsable de alargar el cono de luz y expandir la profundidad de foco (EDOF) es la Aberración Esférica (polinomio de Zernike Z 4,0).',
        trapToAvoid: 'Confundir con el Coma (Z 3,1) o Trefoil (Z 3,3), los cuales deterioran la visión y no proporcionan profundidad de foco útil.'
      }
    ],
    fellowshipKeyPoints: [
      'Blend Zone: Región de visión intermedia (60 cm a 1 metro) donde ambos ojos colaboran activamente gracias a la profundidad de foco extendida, evitando la supresión monocular.',
      'Reversibilidad: A diferencia de los implantes de LIO multifocales donde retirar el lente exige una cirugía intraocular con riesgo endotelial/capsular, el retoque corneal en Presbyond es un procedimiento superficial de minutos para neutralizar la miopía del ojo no dominante si hubiera intolerancia.',
      'Calidad Óptica Nocturna: Mantener la aberración esférica dentro de límites fisiológicos (<0.4-0.5 µm RMS) previene halos y deslumbramientos (*glare*) severos.'
    ]
  },

  // =========================================================================
  // 5. ÓPTICA CLÍNICA, ABERROMETRÍA DE ZERNIKE Y TRANSPOSICIÓN CILÍNDRICA
  // =========================================================================
  {
    id: 'deep-refraccion-optica-clinica-aberrometria',
    title: 'Óptica Clínica Avanzada: Aberrometría de Zernike, Refracción Ciclopléjica, Cilindro Cruzado y Transposición',
    subspecialtyId: 'refraccion',
    summary: 'Monografía fundamental sobre óptica física y geométrica para oftalmólogos: Polinomios de Zernike (aberraciones de bajo vs alto orden: desfase, astigmatismo, coma, trefoil, aberración esférica), técnica de refracción subjetiva afinada con cilindro cruzado de Jackson (JCC), cálculo de círculo de menor confusión de Sturm, reglas de transposición óptica (cilindro positivo a negativo) y consideraciones ópticas de lentes esclerales y LIOs tóricos.',
    definitionAndEpidemiology: 'La óptica clínica es el pilar biomecánico y físico de la oftalmología diagnóstica y quirúrgica. Determina cómo los frentes de onda lumínicos se refractan a través de los medios transparentes del ojo (córnea, humor acuoso, cristalino y vítreo) para formar una imagen nítida sobre los fotorreceptores foveales.',
    anatomyAndPathophysiology: '1. El Ojo Esquemático y Dioptrio Ocular:\n   • Poder refractivo total del ojo emétrope en reposo: ~+60.00 Dioptrías.\n   • Córnea: ~+43.00 D (representa más de dos tercios del poder refractivo del ojo; mayor diferencia de índice de refracción aire 1.000 vs lágrima/córnea 1.376).\n   • Cristalino: ~+18.00 a +20.00 D en reposo; aumenta hasta +30.00 D en niños durante la acomodación máxima.\n   • Longitud axial emétrope promedio: ~23.5 a 24.0 mm (1 mm de cambio en longitud axial equivale aproximadamente a 3.00 Dioptrías de error refractivo en la gafa).\n2. Conoide de Sturm y Astigmatismo:\n   • En un sistema astigmático existen dos meridianos principales perpendiculares con diferente curvatura y poder refractivo.\n   • Los rayos forman dos líneas focales separadas por el "Intervalo de Sturm".\n   • En el centro del intervalo se localiza el "Círculo de Menor Confusión": punto donde el desenfoque es esférico simétrico y la imagen tiene la mejor nitidez posible.\n   • Equivalente Esférico (SE): SE = Esfera + (Cilindro / 2); ubica el círculo de menor confusión sobre la retina.\n3. Pirámide y Polinomios de Zernike:\n   • Orden 0: Pistón (desplazamiento vertical absoluto).\n   • Orden 1: Tilt / Prisma (inclinación en X e Y).\n   • Orden 2 (Bajo Orden / Lower-Order Aberrations - LOA): Representan el 85-90% de las aberraciones oculares y se corrigen con gafas convencionales:\n     - Z 2,0: Desfase / Desenfoque esférico (Miopía / Hipermetropía).\n     - Z 2,-2 y Z 2,2: Astigmatismo regular a 45°/135° y a 90°/180°.\n   • Orden 3 (Alto Orden / Higher-Order Aberrations - HOA): NO corregibles con gafas estándar:\n     - Z 3,-1 y Z 3,1: Coma vertical y horizontal (inducido por asimetría, descentramiento de LIO o queratocono temprano).\n     - Z 3,-3 y Z 3,3: Trefoil (trébol de 3 hojas).\n   • Orden 4: Z 4,0: Aberración Esférica (los rayos periféricos enfocan por delante de los paraxiales centrales; aumenta con pupilas dilatadas y causa mala visión nocturna).',
    clinicalExamination: {
      biomicroscopy: 'Examen de película lagrimal; el menisco lagrimal irregular o queratopatía punteada induce aberraciones de alto orden corneales transitorias erráticas.',
      fundus: 'Correlación de longitud axial: estafiloma posterior o miopía magna en coroides miópica.',
      specialSigns: '• Test del Agujero Estenopeico (Pinhole): Si la agudeza visual sube inmediatamente a través del estenopeico (1.0-1.2 mm), la causa de la borrosidad es un defecto refractivo óptico; si no mejora o empeora, orienta a daño macular o neuro-oftálmico.'
    },
    diagnosticWorkup: [
      {
        test: 'Refracción Ciclopléjica con Ciclopentolato al 1%',
        findings: 'Indispensable en niños, adolescentes y candidatos a cirugía refractiva. Bloquea el tono del músculo ciliar desenmascarando la hipermetropía latente y la pseudo-miopía.'
      },
      {
        test: 'Afinamiento del Eje y Potencia con Cilindro Cruzado de Jackson (JCC)',
        findings: 'Lente con cilindro positivo y negativo cruzados a 90° (+0.25 / -0.25 o +0.50 / -0.50 D). Primero se afina el EJE (alineando el mango del JCC con el eje del cilindro); luego se afina la POTENCIA (alineando las marcas rojas/blancas con el eje). Si se aumenta el cilindro negativo en 0.50 D, se debe restar 0.25 D a la esfera para mantener el círculo de menor confusión en retina.'
      },
      {
        test: 'Aberrometría de Hartmann-Shack o Trazado de Rayos (Ray-Tracing)',
        findings: 'Cuantificación del Root Mean Square (RMS) total y de HOA (valores normales de HOA RMS <0.30 µm para pupila de 6 mm). Valores elevados orientan a ectasia, cicatrices o queratocono.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Astigmatismo Irregular', distinction: 'Los dos meridianos principales no forman 90° de separación; no corregible con lentes cilíndricos en gafa; requiere lentes de contacto rígidos (RGP) o lentes esclerales que crean un dioptrio lagrimal perfecto.' },
      { condition: 'Aberraciones Internas vs Corneales', distinction: 'La aberración corneal anterior se mide con topografía; la aberración total con frente de onda; la diferencia matemática corresponde a las aberraciones internas cristalinianas (ej. tilt del cristalino o catarata incipiente).' }
    ],
    steppedManagement: {
      medical: '• Reglas de Prescripción Óptica y Transposición:\n  1) Transposición entre Cilindro Negativo y Positivo:\n     - Sumar algebraicamente la esfera y el cilindro para obtener la nueva esfera.\n     - Cambiar el signo del cilindro.\n     - Girar el eje 90 grados (+90° si es <=90°, o -90° si es >90°).\n     - Ejemplo: +2.00 -1.50 x 80° -> Nueva esfera (+2.00 - 1.50) = +0.50; Nuevo cilindro = +1.50; Nuevo eje = 170°. Resultado: +0.50 +1.50 x 170°.\n  2) Astigmatismo con la Regla (WTR):\n     - El meridiano vertical (90°) es el más curvo y potente. Se corrige con cilindro negativo a 180° (+/- 20°).\n  3) Astigmatismo contra la Regla (ATR):\n     - El meridiano horizontal (180°) es el más curvo. Se corrige con cilindro negativo a 90° (+/- 20°). Frecuente en ancianos.',
      surgical: '• Compensación Quirúrgica del Astigmatismo:\n  - Incisiones Relajantes Limbares (LRI) o arcuatas femtosegundo para astigmatismos corneales bajos (0.75 a 1.50 D).\n  - Lentes Intraoculares Tóricas para astigmatismos >=1.00 D durante facoemulsificación (alineación milimétrica del eje bajo microscopio guiada por imagen digital tipo Verion o Callisto; cada 1 grado de rotación postoperatoria reduce el efecto corrector del astigmatismo en un 3.3%; a 30 grados de rotación la corrección es CERO).'
    },
    clinicalApplicationPractical: '1. Mantenimiento del Círculo de Menor Confusión: Al afinar la graduación cilíndrica en la caja de pruebas, por cada incremento de -0.50 D de cilindro, se debe sumar +0.25 D a la esfera (compensación 2:1) para no desplazar el foco fuera de la fóvea.\n2. Vértice corneal (Back Vertex Distance - BVD): Para gafas de potencias altas (>|4.00| D), la distancia al vértice altera el poder efectivo del lente: En miopías altas, la lentilla de contacto requiere MENOS dioptrías negativas que la gafa; en hipermetropías altas, la lentilla requiere MÁS dioptrías positivas que la gafa (regla: "el lente se vuelve más positivo al acercarse al ojo").\n3. Regla del 3.3% en LIOs Tóricas: Si un LIO tórico rota 10 grados fuera de su eje marcado, pierde el 33% de su efecto corrector; a 30 grados pierde el 100% y por encima de 30 grados INDUCE astigmatismo nuevo en un meridiano diferente.',
    highYieldPearl: 'Toric LIO Rotation Rule: Cada 1 grado de rotación del eje de un LIO tórico reduce su poder corrector en un 3.3%. A 30 grados de desalineación, el poder tórico es 0%; a más de 30 grados, induce astigmatismo nuevo. El cilindro cruzado de Jackson (JCC) mantiene el equivalente esférico constante sumando esferas a razón 2:1.',
    keyDrugs: [
      { name: 'Tropicamida 1% + Fenilefrina 2.5%', dose: '1 gota cada 10 min por 2 dosis', warning: 'Midriático de acción rápida para retinografía; no paraliza completamente la acomodación en niños (usar ciclopentolato).' },
      { name: 'Ciclopentolato 1%', dose: '2 a 3 gotas separadas por 10 min', warning: 'Estándar para refracción ciclopléjica pediátrica y prequirúrgica refractiva.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Fórmula de Transposición Óptica Rápida',
        category: 'Mnemotecnia',
        description: 'Paso 1: Esfera nueva = Esfera + Cilindro. Paso 2: Invierte el signo del cilindro. Paso 3: Rota el eje 90°. (Ejemplo: -3.00 +2.00 x 40° -> -1.00 -2.00 x 130°).',
        trapToAvoid: 'Olvidar sumar con su signo algebraico la esfera y el cilindro.'
      },
      {
        title: 'Regla de Rotación de LIO Tórico (3.3% por Grado)',
        category: 'Cifra Clave de Corte',
        description: 'Pregunta constante en exámenes de ICO y Boards: "¿Cuánto porcentaje de corrección astigmática pierde un LIO tórico desalineado 15 grados?". Respuesta: 15 x 3.33% = 50% de pérdida de efectividad cilíndrica.',
        trapToAvoid: 'Creer que a 15 grados la pérdida es irrelevante.'
      }
    ],
    fellowshipKeyPoints: [
      'Astigmatismo Interno Fisiológico: El cristalino humano normal presenta aproximadamente -0.50 D de astigmatismo contra la regla (eje 90°), compensando parcialmente el astigmatismo corneal anterior con la regla (+0.50 D a 90°).',
      'Distancia al Vértice (BVD): F = F_gafa / (1 - d * F_gafa). En un miope de -10.00 D con BVD de 12 mm (0.012 m): F_contacto = -10 / (1 - 0.012*(-10)) = -10 / 1.12 = -8.92 D (la lente de contacto lleva más de 1 dioptría menos).',
      'Aberración Esférica Positiva: Los rayos periféricos enfocan por delante de los centrales; la córnea humana normal tiene una aberración esférica positiva media de +0.27 µm a 6 mm, la cual es compensada por la aberración esférica negativa del cristalino joven.'
    ]
  },

  // =========================================================================
  // 6. ANÁLISIS VECTORIAL DE ALPINS Y MANEJO DE SORPRESAS REFRACTIVAS
  // =========================================================================
  {
    id: 'deep-refraccion-astigmatismo-residual-sorpresa-refractiva',
    title: 'Análisis Vectorial de Alpins, Astigmatismo Residual y Manejo de Sorpresas Refractivas',
    subspecialtyId: 'refraccion',
    summary: 'Monografía exhaustiva sobre el análisis matemático y clínico del astigmatismo mediante el método vectorial de Noel Alpins y descomposición en componentes de Fourier / vectores polares de Thibos (M, J0, J45): definiciones rigurosas de Astigmatismo Inducido Objetivo (TIA), Astigmatismo Inducido Quirúrgicamente (SIA), Vector Diferencia (DV), Índice de Corrección (CI = SIA/TIA), Índice de Éxito (IOS) y Ángulo de Error (AE); diagnóstico y categorización de sorpresas refractivas post-cirugía de catarata o post-láser excímer (sorpresa esférica miópica/hipermetrópica, sorpresa astigmática por rotación de LIO tórico o cicatrización asimétrica); algoritmo secuencial de manejo intervencionista: 1) Reposicionamiento rotacional temprano del LIO tórico desalineado antes de 4-6 semanas guiado por calculadoras vectoriales online (AstigmatismFix.com y Barrett Toric RX), 2) Retoque corneal con láser excímer mediante relift de flap de LASIK o PRK de superficie con mitomicina C (MMC 0.02% durante 12-20 segundos), 3) Implante de LIO suplementario en surco ciliar ("Piggyback" secundario reversible tipo Sulcoflex de óptica cóncava-convexa y hápticos amplios sin contacto para prevenir el síndrome de opacificación interlenticular ILO y dispersión pigmentaria), y 4) Recambio de lente intraocular (LIO exchange) si la cápsula posterior está íntegra.',
    definitionAndEpidemiology: 'El astigmatismo residual y las sorpresas refractivas esferocilíndricas postoperatorias representan una de las principales causas de insatisfacción visual y disfotopsias tras cirugía facorrefractiva y cirugía refractiva corneal con láser. Aunque los avances en biometría óptica de fuente de barrido (SS-OCT) y fórmulas de última generación han reducido el error biométrico, entre un 5% y un 15% de los pacientes pseudofáquicos o post-LASIK presentan una sorpresa refractiva residual superior a +/- 0.50 a 0.75 dioptrías (D) de equivalente esférico o un astigmatismo refractivo no deseado >= 0.75 D. Dado que el astigmatismo no puede sumarse ni restarse como un escalar simple al poseer magnitud y orientación meridional (eje), su evaluación cuantitativa exige un análisis vectorial trigonométrico bidimensional formal.',
    anatomyAndPathophysiology: '1. Fundamentos Matemáticos del Análisis Vectorial de Alpins (1993):\n   • El astigmatismo clínico se expresa en notación refractiva clásica (Cilindro x Eje θ). En el espacio polar se duplica el ángulo (2θ) para representar la naturaleza periódica de 180° del astigmatismo.\n   • Vector Objetivo / TIA (Target Induced Astigmatism): El cambio astigmático que la cirugía pretendía inducir en magnitud y eje para neutralizar el astigmatismo preoperatorio.\n   • Vector Quirúrgico Real / SIA (Surgically Induced Astigmatism): El cambio astigmático real que la cirugía efectivamente produjo.\n   • Vector Diferencia / DV (Difference Vector): El astigmatismo residual que persiste tras la cirugía; representa el error vectorial absoluto que debe corregirse para alcanzar el objetivo planificado (DV = 0 en el resultado ideal).\n   • Magnitudes y Ratios Clave de Alpins:\n     - Índice de Corrección (CI = SIA / TIA): CI = 1.00 indica corrección exacta; CI > 1.00 representa sobrecorrección; CI < 1.00 representa hipocorrección astigmática.\n     - Ángulo de Error (AE): La diferencia angular entre el eje del SIA obtenido y el eje del TIA previsto (positivo si es en sentido antihorario; negativo si es horario).\n     - Coeficiente de Ajuste (Coefficient of Adjustment = 1 / CI): Factor por el cual el cirujano debe multiplicar su plan quirúrgico futuro para calibrar su nomograma personal.\n2. Descomposición Polar de Thibos (M, J0, J45):\n   • Descompone cualquier lente esferocilíndrico (S, C x θ) en tres componentes de Fourier independientes no correlacionados:\n     - M (Equivalente Esférico) = S + C/2.\n     - J0 (Astigmatismo Jackson regular a 90°/180°) = -(C/2) * cos(2θ).\n     - J45 (Astigmatismo Jackson oblicuo a 45°/135°) = -(C/2) * sin(2θ).\n   • Esta notación ortogonal permite calcular medias estadísticas, desviaciones estándar y análisis multivariantes rigurosos en series clínicas.\n3. Fisiopatología de la Rotación del LIO Tórico:\n   • En las primeras 2 a 4 semanas postoperatorias, el saco capsular no ha experimentado fibrosis ni fusión de las hojas anterior y posterior.\n   • Factores de rotación: Ojos miopes axiales largos (>25 mm) con saco capsular agrandado (>10.5 mm de diámetro ecuatorial), retención inadvertida de viscoelástico (OVD) detrás de la óptica que facilita el deslizamiento, o diseño biomecánico de hápticos poco rígidos.\n   • Pérdida de corrección: Por cada 1 grado de desalineación axial entre las marcas del LIO y el eje corneal empinado (*steep*), el LIO pierde un 3.33% de su capacidad cilíndrica. A 30 grados de rotación, la corrección del astigmatismo es exactamente CERO (0%); a más de 30 grados, el LIO empeora la visión induciendo un astigmatismo nuevo de mayor magnitud en un meridiano diferente.',
    clinicalExamination: {
      biomicroscopy: 'En pacientes pseudofáquicos: Examen con lámpara de hendidura con pupila dilatada al 100%. Visualización de las marcas de alineación del LIO tórico (puntos o líneas grabadas en la periferia óptica), evaluando el meridiano exacto con la hendidura orientada o con el goniómetro de la lámpara. Evaluación de la cápsula anterior (fusión capsular, fibrosis, fimosis o desgarro inadvertido) y de la cámara anterior (profundidad ACD y ausencia de celularidad/flare).\nEn pacientes post-cirugía corneal con láser: Evaluación de los bordes del flap de LASIK (microestrías, estrías de tracción, invasión epitelial en la interfase o queratitis lamelar difusa cicatrizal) o presencia de *haze* subepitelial post-PRK.',
      fundus: 'Examen de retina para descartar edema macular cistoide pseudofáquico (Irvine-Gass) o patología vitreomacular que justifique la mala visión independientemente del defecto refractivo.',
      specialSigns: '• Test de Cilindro Cruzado de Jackson Manifest: Afinamiento milimétrico del astigmatismo residual en gafa de pruebas; si la corrección cilíndrica restablece inmediatamente una agudeza visual de 20/20, se confirma que la causa de la borrosidad es puramente óptica refractiva.\n• Medición del Eje de Rotación del LIO Tórico: Comparación del eje actual del LIO con el eje de implantación deseado. Si la rotación es de 20 grados, el LIO solo está ejerciendo un 33% de su efecto corrector.\n• Asimetría de Vault o Inclinación (*Tilt*): Un LIO descentrado o inclinado más de 5 a 7 grados respecto al eje visual introduce astigmatismo oblicuo y aberración de coma de alto orden.'
    },
    diagnosticWorkup: [
      {
        test: 'Topografía Corneal y Tomografía de Coherencia Óptica de Segmento Anterior (AS-OCT)',
        findings: 'Evalúa la curvatura anterior y posterior de la córnea (astigmatismo corneal total en Pentacam / Cassini / IOLMaster 700). En ojos post-LASIK con sorpresa refractiva, el AS-OCT mide el grosor exacto del flap residual y del lecho estromal residual (RSB) disponible para planificar un eventual retratamiento con excímer.'
      },
      {
        test: 'Calculadoras Vectoriales Online de Reposicionamiento Tórico (AstigmatismFix.com y Barrett Toric RX)',
        findings: 'Estándar clínico de toma de decisiones: Se introducen los datos preoperatorios, el modelo y potencia del LIO implantado, el eje previsto, y la refracción manifiesta actual junto con el eje actual del LIO bajo dilatación. El software calcula mediante análisis vectorial trigonométrico:\n1) Si la sorpresa se debe a rotación pura del LIO y hacia qué meridiano exacto debe rotarse para minimizar el astigmatismo residual.\n2) El astigmatismo residual mínimo alcanzable si se rota el LIO a ese nuevo eje ideal.\n3) Si la rotación por sí sola no resolverá el problema (por ejemplo, si el poder cilíndrico del LIO fue erróneo de inicio), indicando la necesidad de recambio de LIO o láser corneal.'
      },
      {
        test: 'Aberrometría de Frente de Onda Total (Wavefront Ocular Total)',
        findings: 'Diferencia el astigmatismo regular de bajo orden (Z2,-2 y Z2,2) de las aberraciones de alto orden (HOA) inducidas por tilt cristaliniano, aberración de coma (Z3,-1) o trefoil (Z3,-3).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Descentramiento o Inclinación del LIO (Tilt/Decentration)', distinction: 'El LIO está en el eje rotacional correcto pero desplazado lateralmente >0.5 mm o angulado >5-7°; induce astigmatismo irregular con aberración de coma elevada que no se corrige completamente con cilindro regular en gafa.' },
      { condition: 'Edema Macular Cistoide Pseudofáquico (Irvine-Gass)', distinction: 'La refracción manifiesta no mejora la agudeza visual a 20/20 y la OCT macular muestra engrosamiento foveal con quistes intrarretinianos hiporreflectivos petaloideos.' },
      { condition: 'Opacificación Capsular Posterior (PCO) Temprana', distinction: 'Pérdida de sensibilidad al contraste y visión borrosa con proliferación de perlas de Elschnig visibles en retroiluminación antes de cualquier alteración refractiva mayor.' }
    ],
    steppedManagement: {
      medical: '• 1. Manejo Conservador Inicial y Optimización de la Superficie Ocular:\n  - ESPERAR AL MENOS 4 A 6 SEMANAS postoperatorias antes de tomar decisiones quirúrgicas definitivas para permitir la estabilización refractiva, la reabsorción completa del edema corneal y la retracción capsular.\n  - Tratamiento agresivo del Ojo Seco postoperatorio con lágrimas artificiales sin conservantes y ciclosporina tópica (la inestabilidad lagrimal altera la queratometría hasta en 1.0 D).\n  - Prescripción temporal de gafas o lentes de contacto si el paciente requiere función visual inmediata mientras se estabiliza la refracción.\n• 2. Evaluación con Calculadora Vectorial (AstigmatismFix / Barrett Toric RX):\n  - Introducir los parámetros postoperatorios a la 3ª-4ª semana para determinar si la solución óptima es la rotación quirúrgica del LIO, el retratamiento con excímer o un implante secundario.',
      surgical: '• 1. REPOSICIONAMIENTO ROTACIONAL QUIRÚRGICO DEL LIO TÓRICO (Ventana Ideal: 2 a 6 semanas postoperatorias):\n  - Indicado si la calculadora demuestra que rotar el LIO a un nuevo eje reducirá el astigmatismo residual a <= 0.50 D.\n  - Técnica Quirúrgica:\n    * Dilatación pupilar máxima y marcaje corneal milimétrico del nuevo eje objetivo bajo lámpara de hendidura con paciente sentado.\n    * Paracentesis lateral suave e inyección de Viscoelástico Cohesivo (Hialuronato de sodio al 1% o Healon GV) entre la cara anterior del LIO y la cápsula anterior, y por debajo de la óptica para desadherir cuidadosamente los hápticos del saco capsular.\n    * Con un gancho manipulador de LIO (ej. Lester o Sinskey), rotar el LIO en sentido horario hasta alinear las marcas con el nuevo eje marcado.\n    * Aspiración meticulosa y completa del viscoelástico (B/I) para evitar que la retención de OVD facilite una redislocación postoperatoria.\n• 2. RETOQUE CORNEAL CON LÁSER EXCÍMER (Bioptics Corneal) A Partir de los 2-3 Meses:\n  - Indicado si la sorpresa es esferocilíndrica mixta o si la cápsula ya está fusionada:\n    * En ojos post-LASIK previo: Levantamiento del flap corneal original (*Flap Relift*) con espátula fina sin necesidad de nuevo corte de femtosegundo, raspado cuidadoso del epitelio del borde del flap para evitar invasión epitelial, y fotoablación estromal excímer personalizada guiada por frente de onda o topografía.\n    * En ojos post-faco sin cirugía refractiva previa: PRK de Superficie guiada por frente de onda con aplicación de Mitomicina C tópica al 0.02% (MMC) durante 15 a 30 segundos sobre el lecho estromal para prevenir *haze* subepitelial cicatrizal.\n• 3. IMPLANTE DE LIO SUPLEMENTARIO EN SURCO CILIAR ("PIGGYBACK" SECUNDARIO):\n  - Estándar de elección en sorpresas esféricas altas o cuando el paciente rechaza el láser corneal o la córnea es delgada/irregular:\n    * Implante de un LIO específico de surco ciliar (ej. Rayner Sulcoflex): Posee hápticos ondulados redondeados largos (13.5-14.0 mm de diámetro total) que garantizan fijación estable en el surco ciliar, borde óptico redondeado cóncavo-convexo posterior para evitar el contacto directo con el LIO primario endosacular (eliminando el riesgo de Síndrome de Opacificación Interlenticular - ILO) y óptica amplia de 6.5 mm para prevenir atrapamiento pupilar.\n    * Permite correcciones esféricas (+/- 1.0 a +/- 10.0 D) y cilíndricas tóricas con altísima predictibilidad y total reversibilidad (puede explantarse en cualquier momento con anestesia tópica en 5 minutos).\n• 4. RECAMBIO DE LENTE INTRAOCULAR (LIO EXCHANGE):\n  - Reservado para errores groseros de cálculo de LIO en ojos donde la cápsula posterior está INTACTA y se interviene precozmente (<4 a 8 semanas):\n    * La luxación y corte del LIO dentro de la cámara anterior con tijeras de Packard y su extracción con trépanos o por incisión ampliada conlleva un riesgo sustancial de rotura capsular posterior, diálisis zonular y vitrectomía anterior obligada.'
    },
    clinicalApplicationPractical: '1. No Haga Capsulotomía YAG sin Haber Resuelto la Refracción: El error más grave e irreparable en un paciente descontento con una sorpresa refractiva postoperatoria es realizarle una capsulotomía con láser Nd:YAG para "limpiar la cápsula". Una vez abierta la cápsula posterior, el recambio del LIO o su rotación segura se vuelven técnicamente peligrosísimos, y se cierra la puerta a un explante limpio.\n2. La Ventana de Oportunidad para Rotar el LIO: Si un LIO tórico ha rotado 25 grados, programe su reposicionamiento antes de la 4ª a 6ª semana. Pasados 2 meses, la fibrosis del saco capsular sella los hápticos, requiriendo viscodisección agresiva que puede desgarrar la zónula.\n3. AstigmatismFix.com al Rescate: Nunca intente "adivinar" hacia dónde rotar un LIO basándose en la refracción en gafa. El ojo humano combina la potencia del LIO en su eje actual con la potencia corneal; use siempre software de análisis vectorial trigonométrico que le indicará el grado exacto al que debe orientarse.',
    highYieldPearl: 'Alpins Vector Analysis & Toric Pearl: Cada 1° de rotación del LIO tórico reduce un 3.3% su poder corrector; a 30° la corrección es 0% y a >30° induce más astigmatismo. PROHIBIDO HACER CAPSULOTOMÍA YAG en una sorpresa refractiva hasta no decidir si el LIO requiere rotación o recambio. El implante Piggyback en surco (Sulcoflex) es la técnica más segura y reversible para sorpresas hipermetrópicas/miópicas sin tocar la córnea ni el saco capsular.',
    keyDrugs: [
      { name: 'Mitomicina C (MMC) 0.02%', dose: 'Aplicación tópica con esponja estéril por 12 a 30 segundos tras ablación PRK', warning: 'Antimetabolito alquilante; lavar profusamente con 20-30 mL de BSS frío para prevenir toxicidad endotelial y evitar haze estromal.' },
      { name: 'Hialuronato de Sodio 1% Cohesivo (Healon GV / Provisc)', dose: 'Instilación intracameral para viscodisección del saco capsular', warning: 'Aspiración meticulosa obligatoria al terminar para evitar hipertensión ocular postoperatoria aguda.' },
      { name: 'Acetato de Prednisolona 1% o Dexametasona tópica', dose: '1 gota cada 4-6 horas en pauta descendente por 4 semanas', warning: 'Control de la inflamación post-rotación o post-retoque láser; monitorizar PIO por riesgo de respuesta hipertensiva corticoidea.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Los Vectores Clave de Alpins: TIA, SIA y DV',
        category: 'Definición Rigurosa',
        description: 'TIA = Astigmatismo que se quería inducir. SIA = Astigmatismo que realmente se indujo. DV (Difference Vector) = Astigmatismo residual que falta por corregir para llegar a cero. Si el resultado es perfecto, DV = 0 y CI (SIA/TIA) = 1.00.',
        trapToAvoid: 'Confundir el SIA con el resultado postoperatorio final; el SIA es el cambio vectorial entre el pre y el postoperatorio.'
      },
      {
        title: 'La Regla de Oro: Prohibido YAG en Sorpresa Refractiva',
        category: 'Trampa de Tribunal',
        description: 'Pregunta canónica de tribunales: "Paciente intervenido de catarata hace 3 semanas con implante de LIO tórico; presenta agudeza visual de 20/50 y refracción +1.00 -2.50 x 85°. La cápsula posterior muestra leve fibrosis incipiente. ¿Cuál es la conducta a seguir?". Respuesta: Evaluar el eje del LIO en lámpara de hendidura, calcular el vector en AstigmatismFix y programar reposicionamiento rotacional o retoque. La realización de capsulotomía Nd:YAG está estrictamente contraindicada.',
        trapToAvoid: 'Responder que se realiza capsulotomía Nd:YAG para "aclarar el eje visual" antes de corregir la refracción.'
      },
      {
        title: 'Opacificación Interlenticular (ILO) en Piggyback Antiguo',
        category: 'Complicación Quirúrgica',
        description: 'Cuando se implantaban dos LIOs acrílicos juntos DENTRO del mismo saco capsular, las células epiteliales del cristalino proliferaban en la interfase entre ambas ópticas creando una membrana opaca insoluble (ILO). En la técnica contemporánea, el LIO secundario se implanta en el SURCO CILIAR con bordes redondeados (Sulcoflex), eliminando el ILO.',
        trapToAvoid: 'Implantar dos LIOs convencionales dentro del saco capsular para corregir un defecto alto.'
      }
    ],
    fellowshipKeyPoints: [
      'Análisis de Thibos en Revistas Científicas: La mayoría de los comités editoriales de oftalmología (JCRS, Ophthalmology, AJO) exigen reportar los resultados astigmáticos descompuestos en vectores de Thibos (M, J0, J45) para permitir análisis de covarianza y estadística gaussiana estándar.',
      'Momento Límite para Rotación de LIO Tórico: La adherencia capsular se consolida entre las semanas 6 y 12; si la rotación se intenta pasados los 3 meses, el riesgo de zonulolisis y desgarro capsular anterior se multiplica por 5.',
      'Piggyback vs Relift de Flap: En ojos con paquimetría corneal límite o aberraciones corneales basales elevadas, el piggyback con LIO de surco es muy superior al retoque con láser porque no debilita la biomecánica estromal ni altera la asfericidad corneal.'
    ],
    landmarkTrials: [
      {
        name: 'Alpins N. / Astigmatism Analysis by the Alpins Method',
        year: '1993-2001 (Journal of Cataract & Refractive Surgery)',
        conclusion: 'Estableció el sistema de análisis vectorial matemático estándar universal adoptado por la ASCRS, ESCRS y ANSI para evaluar el astigmatismo inducido quirúrgicamente y los errores rotacionales.',
        fellowshipRelevance: 'Marco teórico de referencia para cualquier publicación o examen de alta especialidad en cirugía refractiva.'
      }
    ],
    surgicalPearls: [
      'Marcaje Corneal en Lámpara con Paciente Sentado: Nunca marque los ejes astigmáticos con el paciente acostado en la camilla de quirófano; la ciclotorsión fisiológica al pasar de bipedestación a decúbito supino puede alcanzar entre 2 y 10 grados, induciendo un error rotacional yatrogénico sistemático.',
      'Técnica de Rotación con BSS y Viscoelástico Suave: Tras despegar el LIO del saco capsular con viscoelástico cohesivo, rote el LIO SIEMPRE en sentido de las agujas del reloj (horario) para evitar que los hápticos se doblen contra su curvatura de memoria; aspire el viscoelástico presionando suavemente la óptica del LIO hacia la cápsula posterior para fijarlo en su posición final.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 58 años fue intervenido de cirugía de catarata en su ojo derecho hace 3 semanas, habiéndose planificado emetropía mediante el implante de un LIO tórico de +21.50 D con un cilindro tórico de T5 (+3.00 D en plano de LIO para corregir 2.06 D de astigmatismo corneal en el eje empinado de 90°). En su revisión actual, el paciente refiere visión borrosa con sombras y deslumbramiento; la agudeza visual sin corrección es 20/60 y con corrección de +0.50 -2.00 x 30° alcanza 20/20. Al examinar el ojo bajo dilatación pupilar máxima en la lámpara de hendidura, las marcas del LIO tórico se observan orientadas a 120° (30 grados fuera del eje previsto de 90°). La cápsula posterior está íntegra y transparente. ¿Cuál es la pérdida porcentual de efecto corrector astigmático que experimenta el paciente, cuál es la conducta que NUNCA debe realizarse y cuál es el plan quirúrgico escalonado inmediato?',
        answer: '1) Pérdida Porcentual de Efecto Corrector:\n   - El LIO tórico ha rotado 30 grados fuera de su eje previsto (120° vs 90°).\n   - Según la regla de rotación de LIO tórico (3.33% de pérdida por cada grado de desalineación): 30° x 3.33% = 100% de pérdida de efectividad. La corrección del astigmatismo corneal es CERO (0%), y además la desalineación a más de 30° está induciendo un astigmatismo oblicuo adicional no deseado en el meridiano de 30°.\n2) Conducta Formalmente Contraindicada: NUNCA realizar una capsulotomía con láser Nd:YAG en este momento. La apertura de la cápsula posterior imposibilitaría o complicaría de forma severa cualquier manipulación rotacional quirúrgica del LIO en el saco.\n3) Plan Quirúrgico Escalonado Inmediato:\n   - Introducir los datos en la calculadora vectorial online (AstigmatismFix.com o Barrett Toric RX) para confirmar si la rotación del LIO a un eje óptimo neutralizará el cilindro residual a <0.50 D.\n   - Dado que el postoperatorio es de solo 3 semanas (saco capsular elástico no fibrosado), la conducta de elección es el REPOSICIONAMIENTO ROTACIONAL QUIRÚRGICO DEL LIO TÓRICO:\n     * Marcaje corneal del eje exacto con paciente sentado bajo lámpara.\n     * En quirófano, viscodisección del saco capsular con viscoelástico cohesivo, rotación cuidadosa del LIO en sentido horario hasta el eje determinado por la calculadora vectorial, aspiración completa del viscoelástico y sellado de heridas.\n   - Si tras la rotación persistiese un cilindro residual inaceptable a los 2-3 meses (por ejemplo, por error de cálculo de K corneal), se podrá plantear un retoque corneal con PRK + MMC o un LIO suplementario Sulcoflex en surco ciliar.',
        trap: 'Hacer una capsulotomía con láser Nd:YAG pensando que hay opacificación capsular o no reconocer que a 30 grados de rotación el efecto del LIO tórico es nulo.'
      }
    ]
  },

  // =========================================================================
  // 7. CÁLCULO DE LIO EN OJOS CON CIRUGÍA REFRACTIVA PREVIA (POST-LASIK/RK)
  // =========================================================================
  {
    id: 'deep-refraccion-calculo-lio-ojos-operados-post-lasik-rk',
    title: 'Cálculo de Lentes Intraoculares en Ojos con Cirugía Refractiva Previa (Post-LASIK, PRK y RK)',
    subspecialtyId: 'refraccion',
    summary: 'Monografía exhaustiva sobre el cálculo biométrico de lentes intraoculares (LIO) en pacientes intervenidos previamente de cirugía refractiva corneal (LASIK/PRK miópico o hipermetrópico, y queratotomía radial / RK): análisis biofísico y óptico de los tres errores capitales que conducen a la temida "sorpresa hipermetrópica postoperatoria" en cirugías estándar: 1) Error del índice queratométrico refractivo (el índice queratométrico ficticio universal 1.3375 asume una relación intacta de radios anterior/posterior del 82%; la ablación excímer aplana la cara anterior sin modificar la posterior, destruyendo esta relación y sobreestimando el poder dióptrico corneal real), 2) Error del radio de curvatura por medición paracentral (los queratómetros estándar miden a 3.2 mm de diámetro, por fuera de la zona óptica central efectiva aplanada), y 3) Error de la Posición Efectiva del Lente (ELP) en fórmulas clásicas de vergencia de 3ª generación (SRK/T, Holladay 1, Hoffer Q) donde una K falsamente plana hace creer a la fórmula que la cámara anterior es ficticiamente poco profunda, prediciendo un LIO muy anterior e infraestimando dramáticamente la potencia requerida; revisión de los métodos contemporáneos independientes de datos históricos: Barrett True-K (No-History y con historia), Haigis-L (que desacopla el cálculo de la ELP de la K corneal mediante medición directa del ACD ultrasónico/óptico), Shammas-PL, OCT de alta resolución (corneal power RTVue) y trazado de rayos (Ray-Tracing); consideraciones críticas en ojos con Queratotomía Radial (RK previa): inestabilidad biomecánica, aplanamiento diurno progresivo hiperópico tardío, proscripción estricta de LIOs multifocales difractivos por aberraciones corneales severas y objetivo refractivo prudente en miopía leve (-0.75 a -1.25 D).',
    definitionAndEpidemiology: 'El cálculo del poder dióptrico de la lente intraocular (LIO) en pacientes sometidos con anterioridad a cirugía refractiva corneal (LASIK, PRK o Queratotomía Radial - RK) constituye uno de los desafíos más complejos y frecuentes de la cirugía facorrefractiva contemporánea. Con más de 40 millones de pacientes operados de cirugía refractiva en las últimas tres décadas que actualmente alcanzan la edad de desarrollo de cataratas (55 a 75 años), este grupo poblacional tiene expectativas refractivas extraordinariamente exigentes (deseo de emetropía e independencia de gafas). Cuando se utilizan queratómetros convencionales y fórmulas clásicas de 3ª generación (como SRK/T o Holladay 1), hasta el 60-70% de estos pacientes experimentan una grave "sorpresa hipermetrópica postoperatoria", dejándolos con mala visión lejana y severa incapacidad visual.',
    anatomyAndPathophysiology: '1. Los Tres Errores Físicos y Biométricos Clave en Ojos Post-LASIK Miópico:\n   • Error 1: Error del Índice Queratométrico Refractivo Estandarizado (Keratometric Index Error):\n     - La córnea humana virgen tiene un índice refractivo estromal real de 1.376 y un endotelio bañado por humor acuoso (1.336). Tradicionalmente, los queratómetros y topógrafos no miden la cara posterior; asumen un "ojo esquemático" de Gullstrand donde la relación entre el radio de curvatura anterior (Ra) y posterior (Rp) es constante y fija: Rp/Ra = 82.2% (aprox. 6.8 mm / 7.7 mm).\n     - Para calcular la potencia corneal total midiendo únicamente la cara anterior, los equipos aplican un "índice queratométrico refractivo ficticio" de n = 1.3375.\n     - Tras una ablación miópica con láser excímer, la superficie corneal anterior se aplana significativamente (aumenta Ra), pero la cara posterior permanece intacta (Rp inalterado). La relación normal del 82% se rompe por completo.\n     - Al aplicar la constante 1.3375 a la nueva curvatura anterior aplanada, el queratómetro SOBREESTIMA el poder dióptrico corneal real en aproximadamente 1.0 a 3.0 D (cree que la córnea refracta más de lo que realmente refracta).\n   • Error 2: Error del Radio de Curvatura por Medición Paracentral (Radius Error):\n     - Los queratómetros estándar (Javal, IOLMaster convencional) miden los anillos reflejados en una corona circular paracentral de aproximadamente 3.0 a 3.2 mm de diámetro.\n     - En córneas prolatas normales, el centro y la paracentro son homogéneos. Sin embargo, tras una ablación excímer miópica, la zona de máximo aplanamiento está en el ápice central (zona óptica efectiva de 2 mm), mientras que a 3.2 mm la córnea comienza a empinarse en la zona de transición.\n     - Medir a 3.2 mm captura una curvatura más curva que la del centro óptico real por donde mira el paciente, SOBREESTIMANDO adicionalmente el poder corneal.\n   • Error 3: Error de la Posición Efectiva del Lente (ELP Error) en Fórmulas Clásicas de Vergencia:\n     - Este es el error de mayor magnitud clínica. Las fórmulas clásicas de 3ª generación (SRK/T, Holladay 1, Hoffer Q) utilizan la curvatura corneal (K) para predecir la Posición Efectiva del Lente (ELP), es decir, la distancia axial a la que descansará el LIO postoperatorio respecto a la córnea.\n     - La fórmula asume la regla geométrica anatómica normal: "Córnea plana = ojo con cámara anterior estrecha/poco profunda".\n     - Al introducir la K aplanada post-LASIK (ej. 37.0 D en lugar de la K original de 44.0 D), la fórmula deduce erróneamente que la cámara anterior es extremadamente plana y que el LIO quedará posicionado muy anterior en el ojo.\n     - Un LIO situado muy hacia adelante en el ojo necesita menos dioptrías para enfocar la retina. Por lo tanto, la fórmula recomienda un LIO de potencia INSUFICIENTEMENTE BAJA.\n     - Cuando el cirujano implanta ese LIO débil dentro del saco capsular anatómico real (que sigue estando a una profundidad normal de 3.5 a 4.0 mm), los rayos convergen por DETRÁS de la retina, resultando en una DESASTROSA SORPRESA HIPERMETRÓPICA (+2.00 a +4.00 D).\n2. Peculiaridades en Post-LASIK Hipermetrópico:\n   • El láser excímer aplana la media periferia y empina el centro corneal (córnea hiperprolata). Ocurre el fenómeno inverso: la queratometría estándar subestima la potencia real, y las fórmulas clásicas pueden inducir una sorpresa postoperatoria miópica.\n3. Peculiaridades en Ojos Post-Queratotomía Radial (RK Previa):\n   • Las incisiones corneales radiales profundas (>90-95% del espesor estromal) debilitan drásticamente la resistencia estructural biomecánica de la córnea.\n   • Aplanamiento diurno progresivo fluctuante: La córnea es más curva por la mañana y se aplana a lo largo del día por la presión del parpadeo y la fluctuación tensional (cambio miópico matutino e hiperópico vespertino de 1.0 a 2.0 D).\n   • Aplanamiento hipermetrópico continuo a largo plazo: Los ojos post-RK experimentan un aplanamiento corneal secular progresivo durante décadas (+1.0 a +3.0 D de cambio hiperópico en 10-20 años).\n   • Aberraciones ópticas corneales de alto orden masivas (HOA), coma y scattering severo en la interfase de las cicatrices incisionales, que contraindican de forma absoluta los lentes intraoculares multifocales o trifocales difractivos.',
    clinicalExamination: {
      biomicroscopy: 'En pacientes post-LASIK: Visualización del borde circular periférico del flap corneal (habitualmente a 8.5-9.0 mm), evaluación de la claridad de la interfase corneal en corte fino (ausencia de invasión epitelial, calcificaciones o microestrías centrales).\nEn pacientes post-PRK: Ausencia de flap; evaluación de la transparencia estromal anterior con haz oblicuo para descartar *haze* subepitelial o cicatrización reticular.\nEn pacientes post-RK: Conteo exacto del número de incisiones radiales (4, 8, 16 o 32 incisiones), evaluación de su profundidad y extensión (si cruzan el limbo esclerocorneal o si invaden la zona óptica central <3 mm), presencia de inclusiones epiteliales dentro de las incisiones o microperforaciones antiguas.',
      fundus: 'Examen de retina para evaluar la longitud axial y descatar estafiloma miópico posterior, degeneraciones retinianas periféricas en empalizada (*lattice*) o membranas epirretinianas concomitantes.',
      specialSigns: '• Maniobra de Hendidura Fina en RK: Si las incisiones radiales se abren o se observan quistes epiteliales blanquecinos en los cortes de lámpara, existe alto riesgo de dehiscencia de la incisión durante la cirugía de catarata al realizar la paracentesis.\n• Fluctuación Diurna Refractiva en RK: Medición de la refracción a las 8:00 AM y a las 18:00 PM; una variación >0.75 D confirma inestabilidad biomecánica activa.'
    },
    diagnosticWorkup: [
      {
        test: 'Calculadora Oficial de la ASCRS para Ojos Post-Cirugía Refractiva (ASCRS Post-Refractive IOL Calculator)',
        findings: 'Herramienta clínica de consenso internacional (postrefractive.ascrs.org): Introduce datos biométricos actuales y calcula simultáneamente el poder de la LIO mediante múltiples fórmulas avanzadas divididas en dos grupos:\n1) Métodos sin datos previos (No-History Methods - los más utilizados hoy día):\n   • Barrett True-K (No-History): Considerada actualmente la fórmula más precisa y consistente a nivel mundial (predicción de +/- 0.50 D en >70% de ojos post-LASIK). Modifica la K corneal anterior y posterior y utiliza un algoritmo especial para desacoplar el cálculo de la ELP de la curvatura medida.\n   • Haigis-L: Modifica la fórmula de Haigis clásica; utiliza una curva de regresión matemática para transformar la K medida en una K corregida y calcula la ELP basándose exclusivamente en la profundidad de la cámara anterior anatómica real (ACD) y la longitud axial (AL), sin depender de la curvatura corneal.\n   • Shammas-PL: Desarrollada por H. John Shammas; calcula la K corregida sin requerir datos históricos y estima la posición del LIO independientemente de K.\n2) Métodos con datos previos (History-Based Methods):\n   • Requieren la K pre-LASIK y la refracción pre-LASIK estable; aunque históricamente populares (método de la historia clínica), hoy se sabe que los datos históricos son con frecuencia inexactos y no superan a Barrett True-K No-History.'
      },
      {
        test: 'Tomografía de Coherencia Óptica de Segmento Anterior (AS-OCT) y Topografía de Cara Posterior (Total Corneal Power)',
        findings: 'Equipos como Pentacam AXL, Cassini o IOLMaster 700 con Total Keratometry (TK): Miden directamente la curvatura y elevación de la CARA POSTERIOR de la córnea mediante trazado de rayos o reflexión de Scheimpflug/SS-OCT, calculando el poder refractivo total neto de la córnea (Net Corneal Power) sin asumir proporciones fijas.'
      },
      {
        test: 'Biometría Óptica de Fuente de Barrido (Swept-Source OCT Biometry)',
        findings: 'Medición micrométrica de la Longitud Axial (AL), Profundidad de Cámara Anterior desde epitelio y endotelio (ACD), Grosor del Cristalino (Lens Thickness - LT) y Blanco-a-Blanco (WTW).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Ectasia Corneal Iatrogénica Post-LASIK no diagnosticada', distinction: 'Curvatura corneal irregular asimétrica progresiva con elevación posterior anormal en Pentacam (BAD-D > 2.6); requiere estabilización con Crosslinking antes de plantear cirugía de catarata.' },
      { condition: 'Astigmatismo Irregular por Microestrías Centrales de Flap', distinction: 'Pérdida de mejor agudeza visual corregida preoperatoria que no mejora con refracción esferocilíndrica; visible en retroiluminación y biomicroscopía confocal.' },
      { condition: 'Ojo Seco Severo Neurotrófico Post-LASIK', distinction: 'Queratometría que fluctúa más de 1.5 D entre tomas consecutivas; requiere tratamiento intensivo antes de fijar la biometría.' }
    ],
    steppedManagement: {
      medical: '• 1. Optimización Preoperatoria Rigurosa de la Superficie Corneal:\n  - La causa número uno de error biométrico en ojos post-LASIK es la película lagrimal inestable inducida por la denervación corneal previa.\n  - Tratamiento durante 3 a 4 semanas previas a la biometría definitiva con lágrimas artificiales sin conservantes, higiene de párpados y ciclosporina tópica al 0.05% si hay queratitis punteada.\n  - REPETIR la biometría óptica en dos visitas separadas; si la K queratométrica varía más de 0.25 a 0.50 D, no operar hasta estabilizar la córnea.\n• 2. Consentimiento Informado Especial y Expectativas Realistas:\n  - Advertir explícitamente al paciente sobre el riesgo incrementado de sorpresa refractiva residual (15-25% requerirán corrección con gafa, lente de contacto o retoque secundario) y menor precisión que en ojos vírgenes.',
      surgical: '• 1. ESTRATEGIA DE SELECCIÓN DE LIO EN OJOS POST-LASIK / PRK MIÓPICO:\n  - Fórmulas de Elección: Barrett True-K No-History (o Haigis-L y Shammas-PL). Comparar los resultados en la calculadora de la ASCRS.\n  - Selección de Potencia: Ante discrepancia entre fórmulas, elegir la fórmula que recomiende el LIO de MAYOR POTENCIA dióptrica (más positivo), ya que es preferible un pequeño error miópico residual (-0.50 D, que el paciente tolera bien y le confiere visión intermedia) frente a una sorpresa hipermetrópica (+1.50 D) que destruye la visión a todas las distancias.\n  - Objetivo Refractivo Programado: Fijar el target entre -0.25 D y -0.50 D de miopía para garantizar emetropía funcional.\n  - Tipo de LIO a Implantar:\n    * LIO Monofocal Asférico con Aberración Esférica Negativa (ej. Tecnis ZCB00 con -0.27 µm de aberración esférica o AcrySof IQ con -0.20 µm): La ablación miópica previa induce abundante aberración esférica POSITIVA en la córnea; un LIO con aberración esférica negativa compensa el sistema óptico restaurando la sensibilidad al contraste.\n    * PROHIBICIÓN RELATIVA DE LIOs MULTIFOCALES DIFRACTIVOS TRIFOCALES: La córnea post-LASIK ya tiene aberraciones de alto orden (HOA) aumentadas; sumarle la pérdida de sensibilidad al contraste y halos de una óptica difractiva produce disfotopsias severas y mala calidad visual.\n• 2. ESTRATEGIA ESPECIAL EN OJOS CON QUERATOTOMÍA RADIAL (RK PREVIA):\n  - Fórmulas de Elección: Barrett True-K Post-RK (específicamente calibrada para RK).\n  - Objetivo Refractivo Programado: FIJAR EL TARGET ENTRE -0.75 D Y -1.25 D DE MIOPÍA RESIDUAL.\n    * Justificación crítica: La córnea post-RK experimentará un aplanamiento hipermetrópico progresivo a lo largo de los años siguientes a la cirugía de catarata; si se apunta a la emetropía (0.0 D), el paciente quedará hiperétrope (+1.50 D) a corto o medio plazo.\n  - Selección de LIO: LIO MONOFOCAL O LIO EDOF NO DIFRACTIVO DE FRENTE DE ONDA (ej. Vivity). ¡LOS LIOS TRIFOCALES DIFRACTIVOS ESTÁN FORMALMENTE CONTRAINDICADOS EN POST-RK!\n  - Precauciones Quirúrgicas en Ojos Post-RK:\n    * NUNCA cruzar ni cortar una incisión radial con las incisiones de la facoemulsificación.\n    * Realizar la incisión principal tunelizada en la esclera posterior (túnel escleral a 1.5-2.0 mm del limbo) o en córnea clara estrictamente centrada entre dos incisiones radiales sanas con margen de seguridad.\n    * Mantener la presión de irrigación y vacío en niveles bajos a moderados para no sobredistender la cámara anterior y provocar dehiscencia o reapertura de las incisiones de RK.'
    },
    clinicalApplicationPractical: '1. No Pida Datos Históricos Desesperadamente: Muchos oftalmólogos pierden semanas buscando la historia clínica preoperatoria de un LASIK de hace 20 años. Los estudios modernos demuestran que las fórmulas sin datos históricos (Barrett True-K No-History y Haigis-L) son IGUALES O SUPERIORES a los métodos basados en historia, porque las córneas cambian con la edad y los datos antiguos suelen estar mal documentados.\n2. La Regla del "Más Fuerte": Si la calculadora de la ASCRS le muestra que Barrett True-K recomienda +21.0 D, Haigis-L recomienda +21.5 D y Shammas recomienda +21.5 D, elija +21.5 D. La sorpresa hipermetrópica es devastadora e imperdonable para un paciente operado de miopía; un ligero remanente miópico de -0.50 D es un éxito clínico.\n3. Ojos Post-RK y Túnel Escleral: Si el paciente tiene 8 o 16 incisiones de queratotomía radial, realizar una incisión de faco en córnea clara tiene alto riesgo de abrir una incisión de RK ("córnea en pétalos de margarita"). Realice una incisión escleral tunelizada posterior; entrará a cámara anterior por debajo del estroma sin comprometer las heridas radiales.',
    highYieldPearl: 'Post-Refractive IOL Pearl: Los 3 errores son: 1) Índice queratométrico 1.3375 erróneo, 2) Curvatura paracentral sobreestimada, 3) Error de predicción de ELP (fórmulas clásicas asumen cámara plana). Usar Barrett True-K No-History en calculadora ASCRS. En post-LASIK miópico, elegir siempre LIO monofocal asférico con aberración esférica negativa y apuntar a -0.25/-0.50 D. En post-RK, apuntar a -0.75/-1.00 D por el aplanamiento hiperópico continuo y usar incisión escleral.',
    keyDrugs: [
      { name: 'Ciclosporina Tópica 0.05% o 0.1%', dose: '1 gota cada 12 horas durante 4 semanas pre-biometría', warning: 'Inmunomodulador para restaurar la superficie corneal neurotrófica en ojo seco post-LASIK antes de la medición de K.' },
      { name: 'Moxifloxacino 0.5% o Cefuroxima Intracameral', dose: '1.0 mg en 0.1 mL intracameral al cierre', warning: 'Profilaxis estándar de endoftalmitis; vital en ojos post-RK con incisiones profundas potencialmente permeables.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Los 3 Errores Biométricos Post-LASIK Miópico',
        category: 'Pregunta Clásica',
        description: 'Pregunta obligada en exámenes de certificación: "¿Cuáles son los mecanismos que producen la sorpresa hipermetrópica post-LASIK?". Respuesta: 1) Error del índice queratométrico (1.3375 no aplica), 2) Error del radio corneal (medición paracentral sobreestima la potencia central), 3) Error de la ELP (la fórmula clásica predice un LIO falsamente anterior e implanta una lente insuficiente).',
        trapToAvoid: 'Responder únicamente que la córnea es plana sin explicar el error de la ELP en las fórmulas de vergencia.'
      },
      {
        title: 'Por qué Barrett True-K y Haigis-L no fallan en la ELP',
        category: 'Biofísica Aplicada',
        description: 'Barrett True-K calcula la ELP mediante un modelo trigonométrico universal que no vincula la posición del LIO a la K corneal modificada. Haigis-L calcula la ELP basándose exclusivamente en el ACD anatómico medido directamente por interferometría óptica.',
        trapToAvoid: 'Utilizar SRK/T o Holladay 1 directamente con la K del queratómetro en un ojo post-LASIK.'
      },
      {
        title: 'Por qué Contraindicar LIOs Difractivos en Post-RK',
        category: 'Trampa de Tribunal',
        description: 'Las incisiones de queratotomía radial generan aberraciones corneales asimétricas y scattering masivo de la luz. Si se implanta un LIO trifocal difractivo que divide la luz en múltiples focos, el paciente experimentará una pérdida inaceptable de sensibilidad al contraste, deslumbramiento incapacitante y disfotopsias intratables.',
        trapToAvoid: 'Ceder a la petición del paciente de quedar sin gafas implantando un LIO trifocal en un ojo post-RK.'
      }
    ],
    fellowshipKeyPoints: [
      'Total Keratometry (TK) de IOLMaster 700: Integra la medición real de la curvatura posterior mediante tomografía OCT de barrido, permitiendo utilizar la fórmula Barrett True-K TK con resultados refractivos superiores al 75% en +/- 0.50 D.',
      'Aplanamiento Hipermetrópico Secular en RK: En el ensayo prospective PERK (Prospective Evaluation of Radial Keratotomy), el 43% de los ojos continuaron aplanándose más de 1.0 D entre el 1º y 10º año postoperatorio; este drift hiperópico no se detiene con la edad.',
      'LIOs con Aberración Esférica Negativa: La ablación miópica induce aberración esférica corneal positiva media de +0.50 a +0.80 µm (frente a los +0.27 µm del ojo virgen). Un LIO con -0.27 µm (Tecnis) neutraliza mejor la óptica ocular que un LIO neutro o con aberración esférica positiva.'
    ],
    landmarkTrials: [
      {
        name: 'PERK Study (Prospective Evaluation of Radial Keratotomy Study)',
        year: '1984-1994 (Waring et al., Ophthalmology)',
        conclusion: 'Demostró que la queratotomía radial provoca una inestabilidad corneal biomecánica permanente a largo plazo, caracterizada por un desplazamiento refractivo hipermetrópico progresivo continuo y fluctuación diurna.',
        fellowshipRelevance: 'Justifica por qué en ojos post-RK el objetivo refractivo biométrico debe apuntar a miopía (-0.75 a -1.25 D).'
      },
      {
        name: 'Wang L, Koch DD. / Evaluation of IOL Calculation Methods in Post-Refractive Eyes',
        year: '2008-2015 (JCRS & Ophthalmology)',
        conclusion: 'Demostró en series multicéntricas que los métodos independientes de historia clínica (Barrett True-K No-History y Haigis-L) superan en predictibilidad a los métodos basados en datos históricos preoperatorios.',
        fellowshipRelevance: 'Estableció las bases científicas de la calculadora de la ASCRS y de la práctica clínica actual.'
      }
    ],
    surgicalPearls: [
      'Construcción de la Incisión en Ojos Post-RK: Nunca realice incisiones corneales claras cruzando las cicatrices radiales. Si el ojo tiene 8 incisiones, construya una incisión en túnel escleral posterior a 2.0 mm del limbo, disecando un bolsillo hacia la córnea clara; esto preserva la integridad del estroma y previene la apertura traumática de las incisiones de RK con atalamia súbita intraoperatoria.',
      'Control de la Profundidad de Cámara Anterior (ACD): Evite presiones de infusión altas durante la facoemulsificación en ojos post-refractivos; las córneas debilitadas por incisiones o flaps finos son más vulnerables a traumatismos biomecánicos y edema postoperatorio prolongado.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 62 años acude para cirugía de catarata en su ojo izquierdo. Tiene antecedentes de haber sido operado de LASIK miópico hace 18 años (su graduación previa estimada era de -6.00 D, pero no tiene registros médicos ni topografías antiguas). La biometría óptica estándar en un equipo convencional muestra una longitud axial de 26.2 mm y una queratometría de K1 = 37.50 D y K2 = 38.00 D (K promedio = 37.75 D). El residente utiliza la fórmula clásica SRK/T con esa K y calcula un LIO de +14.50 D para emetropía (0.0 D). ¿Qué complicaciones refractivas ocurrirán si implanta ese LIO de +14.50 D, cuáles son los tres mecanismos fisiopatológicos del error, cuál es la herramienta contemporánea que debe usarse y qué tipo de LIO y target recomendaría?',
        answer: '1) Complicación Refractiva Inevitable:\n   - El paciente sufrirá una SEVERA SORPRESA HIPERMETRÓPICA POSTOPERATORIA (quedará con una graduación residual de aproximadamente +2.50 a +3.50 D), experimentando visión muy borrosa tanto de lejos como de cerca.\n2) Los Tres Mecanismos Fisiopatológicos del Error:\n   a) Error del Índice Queratométrico: El equipo utiliza n = 1.3375 asumiendo una relación radio anterior/posterior del 82%; el LASIK miópico aplanó la cara anterior dejando la posterior intacta, sobreestimando la potencia refractiva real de la córnea.\n   b) Error del Radio de Medición: Los queratómetros miden a 3.2 mm de diámetro, por fuera de la zona óptica central aplanada de 2 mm, midiendo una córnea más curva de la que realmente tiene el paciente en su eje visual.\n   c) Error de la Posición Efectiva del Lente (ELP) de SRK/T: La fórmula SRK/T asume que una córnea plana de 37.75 D implica una cámara anterior geométricamente plana y un LIO muy anterior; por ello, infraestima la potencia requerida recomendando un LIO demasiado débil (+14.50 D en lugar de los +17.0 a +17.5 D que el ojo realmente necesita).\n3) Herramienta Contemporánea y Fórmulas:\n   - Utilizar la Calculadora de la ASCRS para Ojos Post-Cirugía Refractiva (ASCRS Post-Refractive Calculator) y fórmulas No-History: BARRETT TRUE-K NO-HISTORY, HAIGIS-L y SHAMMAS-PL (o medir cara posterior con Total Keratometry TK).\n   - Las fórmulas correctas indicarán un LIO de mayor poder (típicamente entre +17.0 y +17.5 D).\n4) Tipo de LIO y Target Refractivo:\n   - Objetivo Refractivo: Fijar el target en ligera miopía (-0.25 a -0.50 D) para evitar a toda costa la hipermetropía.\n   - Tipo de LIO: LIO MONOFOCAL ASFÉRICO CON ABERRACIÓN ESFÉRICA NEGATIVA (ej. Tecnis ZCB00 o AcrySof IQ) para compensar la alta aberración esférica positiva inducida por el LASIK miópico previo. Contraindicar LIOs trifocales difractivos por alto riesgo de pérdida de sensibilidad al contraste.',
        trap: 'Confiar en la fórmula SRK/T estándar o pensar que sin la historia clínica antigua no es posible calcular con precisión el LIO.'
      }
    ]
  }
];

