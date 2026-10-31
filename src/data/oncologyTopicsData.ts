import { TopicDeepDive } from '../types/ophthalmology';

export const ONCOLOGY_TOPICS: TopicDeepDive[] = [
  // =========================================================================
  // 1. MELANOMA UVEAL (COROIDES, CUERPO CILIAR E IRIS)
  // =========================================================================
  {
    id: 'deep-onco-melanoma-uveal',
    title: 'Melanoma Uveal: Cáncer Intraocular Primario en Adultos (Coroides, Cuerpo Ciliar e Iris)',
    subspecialtyId: 'oncologia',
    summary: 'Monografía exhaustiva sobre melanoma uveal (coroides 85-90%, cuerpo ciliar 5-8%, iris 3-5%): factores de riesgo de transformación de nevus a melanoma con la mnemotecnia TFSOM-UHHD, análisis del ensayo multicéntrico COMS (braquiterapia epiescleral con placa de Yodo-125 vs enucleación), hallazgos ecográficos patognomónicos en modo A (reflectividad baja <60% con ángulo kappa) y modo B (vaciamiento acústico y sombra en champiñón por rotura de Bruch), histopatología de Callender (fusiforme A/B vs epitelioide), diseminación hematógena hepática (>90%), citogenética pronóstica de Monosomía 3 y pérdida de BAP1, y tratamiento sistémico de primera línea con el anticuerpo biespecífico Tebentafusp.',
    definitionAndEpidemiology: 'El melanoma uveal es la neoplasia maligna intraocular primaria más frecuente en adultos, con una incidencia de aproximadamente 5 a 7 casos por millón de habitantes al año en poblaciones caucásicas. La edad media de presentación se sitúa entre los 55 y 62 años, sin predilección significativa por sexo. A diferencia del melanoma cutáneo, el melanoma uveal no guarda una relación etiológica directa con la radiación solar ultravioleta (excepto en el iris) y carece de drenaje linfático intraocular, diseminándose de forma puramente hematógena con un tropismo casi exclusivo por el hígado (sitio de la primera metástasis en más del 90-95% de los pacientes diseminados).',
    anatomyAndPathophysiology: '1. Origen Celular y Vías de Señalización:\n   • Proliferación clonal maligna a partir de melanocitos derivados de la cresta neural residentes en el estroma uveal vascularizado.\n   • Mutaciones conductoras iniciadoras tempranas (>90% de los casos): Mutaciones mutuamente excluyentes en los genes GNAQ o GNA11 (codón Q209 o R183), o con menor frecuencia en CYSLTR2 o PLCB4. Estas mutaciones bloquean la subunidad alfa de la proteína G en estado activo GTP, estimulando de forma constitutiva las vías de proliferación celular MAP-kinasa (MAPK/MEK/ERK) y Hippo/YAP/TAZ.\n2. Eventos Citogenéticos Secundarios Determinantes de Metástasis:\n   • Monosomía del cromosoma 3 (-3): Pérdida de una copia completa del cromosoma 3, fuertemente asociada a la inactivación del gen supresor tumoral BAP1 (BRCA1-associated protein 1) en el locus 3p21.1. Confiere un fenotipo biológico de alta malignidad celular epitelioide y un riesgo de metástasis hepática >70% a 5 años.\n   • Ganancia del brazo largo del cromosoma 8 (8q): Potencia la letalidad de la monosomía 3 mediante amplificación del oncogén c-Myc.\n   • Mutaciones en SF3B1 (cromosoma 2q): Pronóstico intermedio con metástasis tardías a los 8-12 años.\n   • Mutaciones en EIF1AX (cromosoma Xp): Asociadas a disomía 3 y excelente pronóstico vital (<5% de metástasis).\n3. Crecimiento Anatómico y Ruptura de Membrana de Bruch:\n   • El tumor crece inicialmente en el estroma coroideo adoptando una forma de cúpula.\n   • Al superar la resistencia biomecánica de la membrana de Bruch y el epitelio pigmentario de la retina (EPR), el tumor hernia su tejido hacia el espacio subretiniano, adoptando la clásica configuración en "hongo" o "champiñón" con constricción en el cuello de ruptura.\n   • La alteración del EPR suprayacente y la vasculatura coriocapilar genera trasudación masiva de fluido seroso dependiente de la gravedad, culminando en un desprendimiento de retina exudativo secundario.',
    clinicalExamination: {
      biomicroscopy: 'En melanomas de iris: Nódulo o masa estromal sobreelevada heterocroma, vascularización intrínseca desorganizada, ectropión uveae focal, corectopia pupilar, hifema espontáneo y siembra de células pigmentadas en el ángulo camerular con hipertensión ocular refractaria por invasión trabecular. En melanomas del cuerpo ciliar o coroideos anteriores: Vasos epiesclerales tortuosos dilatados en el cuadrante correspondiente ("vasos centinela"), subluxación o catarata sectorial por contacto cristaliniano, y masa ciliar visible a la biomicroscopía tras dilatación pupilar máxima o gonioscopia de indentación.',
      fundus: 'Masa coroidea elevada cupuliforme o en champiñón, de coloración variable (desde marrón oscura a grisácea o amelanótica en un 20-25%), con presencia de acúmulos parcheados de pigmento naranja superficial sobre su superficie y desprendimiento seroso de retina exudativo inferior que con frecuencia compromete la mácula.',
      specialSigns: '• Mnemotecnia TFSOM-UHHD para nevus coroideo sospechoso (Shields et al.):\n  - T (Thickness): Grosor > 2.0 mm ecográfico.\n  - F (Fluid): Fluido subretiniano presente en SD-OCT.\n  - S (Symptoms): Síntomas visuales (fotopsias, escotoma, metamorfopsia).\n  - O (Orange pigment): Pigmento naranja superficial (lipofuscina patológica).\n  - M (Margin): Margen tumoral a < 3 mm del borde de la papila óptica.\n  - UH (Ultrasound Hollowness): Vaciamiento acústico interno y reflectividad baja en ecografía.\n  - H (Halo absent): Ausencia de halo hipopigmentado circular benigno.\n  - D (Drusen absent): Ausencia de drusas crónicas (la presencia de drusas traduce cronicidad y bajo riesgo de transformación rápida).'
    },
    diagnosticWorkup: [
      {
        test: 'Ecografía Ocular Estandarizada Modo A y B',
        findings: 'Estándar de oro para el diagnóstico local: En Modo A muestra reflectividad acústica interna baja a media (<60%) con ángulo kappa regular descendente ("slope") por homogeneidad celular tumoral y vascularización interna. En Modo B evidencia masa sobreelevada en cúpula o champiñón con vaciamiento acústico interno ("acoustic hollowing"), excavación coroidea escleral posterior ("choroidal excavation") y sombra acústica retrobulbar.'
      },
      {
        test: 'Tomografía de Coherencia Óptica de Dominio Espectral (EDI-OCT)',
        findings: 'Cuantificación micrométrica de fluido subretiniano (SRF) neurosensorial suprayacente, pérdida de la zona elipsoide foveal, engrosamiento y nodularidad del EPR y visualización de la interfase coroidea en tumores de menos de 3 mm de espesor.'
      },
      {
        test: 'Autofluorescencia de Fondo de Ojo (FAF)',
        findings: 'El pigmento naranja produce una hiperautofluorescencia confluente intensa debido a la acumulación de gránulos de lipofuscina fagocitados por macrófagos y células del EPR sobre la superficie del tumor activo.'
      },
      {
        test: 'Resonancia Magnética (RM) Abdominal con Contraste Hepatoespecífico',
        findings: 'Cribado sistémico de referencia: La RM con gadoxetato disódico (Primovist) es la técnica más sensible para detectar micrometástasis hepáticas subcentimétricas antes de que sean evidentes en ecografía o TC abdominal.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Nevus Coroideo Benigno', distinction: 'Lesión aplanada o con grosor <2 mm, con drusas suprayacentes, halo hipopigmentado regular, ausencia de fluido subretiniano activo y ausencia de pigmento naranja.' },
      { condition: 'Hemangioma Coroideo Circunscrito', distinction: 'Reflectividad interna acústica ultra-alta del 100% en modo A (sin vaciamiento acústico) y fenómeno de lavado ("washout") tardío característico en ICG.' },
      { condition: 'Metástasis Coroidea Amelanótica', distinction: 'Reflectividad acústica interna alta (60-90%), masa frecuentemente multifocal o bilateral, y desprendimiento seroso masivo no proporcional al grosor tumoral.' }
    ],
    steppedManagement: {
      medical: '• Vigilancia estrecha de nevus sospechosos pequeños (<2 mm de grosor, 0-1 factores TFSOM-UHHD) cada 3 a 6 meses con retinografía y EDI-OCT.\n• En pacientes con melanoma metastásico HLA-A*02:01 positivo: Infusión semanal del anticuerpo biespecífico Tebentafusp (Kimmtrak, proteína de fusión TCR-anti-CD3), el primer fármaco que demostró prolongar la supervivencia global en melanoma uveal metastásico.\n• Vigilancia hepática con RM abdominal con contraste hepatobiliar semestral en pacientes de alto riesgo (GEP Clase 2 / Monosomía 3).',
      surgical: '• Tumores medianos (2.5 a 10 mm grosor, base <=16 mm): Braquiterapia epiescleral con placa de Yodo-125 (I-125) con dosis de 85 Gy al ápex tumoral (estándar de oro COMS conservador del ojo).\n• Tumores grandes (>10 mm grosor o base >16 mm), invasión del nervio óptico u ojos ciegos dolorosos: Enucleación primaria con muñón largo de nervio óptico (10-15 mm) e implante orbitario de hidroxiapatita o polietileno poroso.\n• Tumores de iris resecables: Iridectomía o iridociclectomía sectorial si hay compromiso del ángulo camerular.'
    },
    clinicalApplicationPractical: '1. Ante una lesión pigmentada coroidea, aplicar rigurosamente la regla TFSOM-UHHD: la presencia de 3 o más factores confiere un riesgo >50% de crecimiento hacia melanoma en 5 años.\n2. Todo paciente diagnosticado de melanoma uveal requiere cribado hepático (el 90% de las metástasis iniciales se localizan en hígado). La ecografía simple pierde lesiones milimétricas; solicitar RM hepática con contraste hepatobiliar.\n3. Si se realiza braquiterapia con placa, ofertar la toma de biopsia por aspiración con aguja fina (FNAB) para pronóstico molecular (BAP1 / GEP Clase 2).',
    highYieldPearl: 'COMS Trial: La braquiterapia con placa de Yodo-125 ofrece una supervivencia global idéntica a la enucleación a los 5, 10 y 12 años en melanomas coroideos medianos (~27% mortalidad a 10 años en ambos grupos), preservando el globo ocular en más del 85% de los pacientes.',
    keyDrugs: [
      { name: 'Tebentafusp (Kimmtrak)', dose: '20 mcg semana 1, 30 mcg semana 2, 68 mcg semanal IV en pacientes HLA-A*02:01+', warning: 'Síndrome de liberación de citocinas (SLC) e hipotensión en las primeras infusiones; requiere monitorización hospitalaria.' },
      { name: 'Yodo-125 (Braquiterapia)', dose: '85 Gy al ápex tumoral a una tasa de 0.60 - 1.05 Gy/h', warning: 'Riesgo de retinopatía y neuropatía óptica por radiación tardía; vigilar y tratar con Anti-VEGF.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Ensayo Clínico COMS: Supervivencia Idéntica',
        category: 'Pregunta Clásica',
        description: 'Pregunta reina de tribunal: "¿La enucleación primaria confiere mayor supervivencia que la braquiterapia en melanoma coroideo mediano?". Respuesta: NO. El ensayo COMS demostró a 5, 10 y 12 años que la mortalidad por metástasis es exactamente la misma (27% a 10 años).',
        trapToAvoid: 'Indicar enucleación de entrada creyendo que extirpar el ojo previene metástasis mejor que la braquiterapia en tumores medianos.'
      },
      {
        title: 'Signo Ecográfico Patognomónico en Modo A',
        category: 'Asociación Patognomónica',
        description: 'El melanoma coroideo muestra reflectividad acústica interna baja a media (<60%) con ángulo kappa regular descendente y vaciamiento acústico ("acoustic hollowing"), debido a la gran homogeneidad y vascularización de las células tumorales.',
        trapToAvoid: 'Confundir la baja reflectividad del melanoma con la alta reflectividad (100%) del hemangioma coroideo.'
      },
      {
        title: 'Citogenética Pronóstica: BAP1 y Monosomía 3',
        category: 'Cifra Clave de Corte',
        description: 'La pérdida de BAP1 (en 3p21.1) unida a Monosomía del cromosoma 3 define el perfil de expresión génica Clase 2 de Castle Biosciences, con un riesgo de metástasis hepática >70% a 5 años.',
        trapToAvoid: 'Atribuir a las mutaciones de GNAQ/GNA11 el pronóstico de supervivencia (estas son mutaciones iniciadoras tempranas sin valor pronóstico independiente).'
      }
    ],
    fellowshipKeyPoints: [
      'Clasificación histopatológica de Callender modificada: Fusiforme A (núcleo en cigarro, cromatina fina, benigno/bajo grado), Fusiforme B (más grande, nucleolo visible) y Epitelioide (célula poligonal grande, pleomórfica, nucleolo prominente, mitosis frecuentes; confiere el peor pronóstico vital).',
      'El desprendimiento de retina en melanoma uveal es de tipo EXUDATIVO (seroso dependiente de gravedad), sin rotura retiniana y sin pigmento en vítreo (signo de Shafer negativo).',
      'La vía de diseminación del melanoma uveal es hematógena hacia el hígado; la afectación ganglionar linfática solo ocurre si el tumor rompe la esclera e invade la conjuntiva o la órbita externa.'
    ],
    landmarkTrials: [
      {
        name: 'COMS (Collaborative Ocular Melanoma Study)',
        year: '2001 (Arch Ophthalmol)',
        conclusion: 'En melanomas coroideos medianos, no hubo diferencias en supervivencia entre enucleación y braquiterapia con I-125. En melanomas grandes, la radioterapia externa pre-enucleación no mejoró la supervivencia.',
        fellowshipRelevance: 'Estableció la braquiterapia con placa de Yodo-125 como el estándar de oro mundial para el melanoma uveal mediano.'
      }
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 58 años presenta una masa coroidea temporal de 3.5 mm de grosor con líquido subretiniano y pigmento naranja en OD. La ecografía en modo A muestra reflectividad interna del 35%. ¿Cuál es el diagnóstico más probable, qué estudio de estadificación sistémica es prioritario y qué tratamiento ocular recomienda?',
        answer: 'Diagnóstico: Melanoma coroideo mediano. Estadificación: RM abdominal con contraste hepatobiliar (Primovist) y pruebas de función hepática (GGT, FA, transaminasas) para descartar metástasis hepáticas (>90% de los casos). Tratamiento ocular estándar: Braquiterapia epiescleral con placa de Yodo-125 (I-125 con 85 Gy al ápex tumoral), avalada por el ensayo COMS con preservación del globo ocular y supervivencia idéntica a la enucleación.',
        trap: 'Proponer la enucleación de entrada o solicitar únicamente una radiografía de tórax olvidando el cribado hepático.'
      }
    ]
  },

  // =========================================================================
  // 2. RETINOBLASTOMA PEDIÁTRICO Y GENÉTICA RB1
  // =========================================================================
  {
    id: 'deep-onco-retinoblastoma',
    title: 'Retinoblastoma: Tumor Intraocular Maligno Pediátrico y Genética RB1',
    subspecialtyId: 'oncologia',
    summary: 'Monografía exhaustiva sobre retinoblastoma infantil (incidencia 1 en 15.000 a 20.000 nacidos vivos): modelo genético de dos golpes de Knudson en el gen supresor tumoral RB1 (locus 13q14), formas hereditarias germinales (bilaterales/multifocales) vs no hereditarias esporádicas, clínica cardinal de leucocoria y estrabismo, hallazgo ecográfico y tomográfico de calcificaciones intratumorales densas, Clasificación Internacional de Filadelfia (ICRB Grupos A a E), quimioterapia intraarterial supraselectiva de arteria oftálmica (IAC con melfalán, carboplatino y topotecán), quimioterapia intravítrea con técnica de seguridad de lavado de la aguja y crioterapia transconjuntival, y contraindicación absoluta de punción con aguja fina (PAAF) o biopsia intraocular.',
    definitionAndEpidemiology: 'El retinoblastoma es la neoplasia maligna intraocular primaria más común en la población pediátrica, representando el 3% de todos los cánceres infantiles. Se estima una incidencia anual de 1 caso por cada 15.000 a 20.000 recién nacidos vivos (aproximadamente 250 a 300 casos nuevos al año en EE. UU.). Más del 90% se diagnostica antes de los 3 años de edad, con una edad media al diagnóstico de 12 meses en los casos bilaterales (casi siempre hereditarios) y de 24 meses en los unilaterales. Si no se trata a tiempo, el retinoblastoma es invariablemente mortal por invasión directa del nervio óptico hacia el sistema nervioso central o por metástasis hematógenas a médula ósea y hueso.',
    anatomyAndPathophysiology: '1. Hipótesis de Dos Golpes de Knudson y Biología de RB1:\n   • El gen RB1 (localizado en el cromosoma 13q14.2) es el primer gen supresor tumoral clonado en la historia médica. Codifica la fosfoproteína nuclear pRb, regulador maestro de la transición del ciclo celular de la fase G1 a la fase S al secuestrar a los factores de transcripción E2F.\n   • Forma Germinal / Hereditaria (40% de los casos): El paciente nace con la primera mutación (primer golpe) presente en todas las células del organismo (heterocigoto). La pérdida o mutación del alelo normal restante en una sola célula retiniana (segundo golpe) desencadena la oncogénesis. Cursa con tumores multifocales, bilaterales y alto riesgo de segundas neoplasias malignas a lo largo de la vida (osteosarcomas en fémur/tibia, sarcomas de partes blandas y melanomas, exacerbados si reciben radioterapia externa).\n   • Forma No Hereditaria / Somática (60% de los casos): Ambos alelos de RB1 se inactivan de forma adquirida y espontánea en un único retinoblasto durante el desarrollo embrionario. Los tumores son estrictamente unifocales y unilaterales.\n   • Retinoblastoma Trilateral: Afectación bilateral hereditaria asociada a un tumor neuroblástico primitivo intracraneal ectópico en la glándula pineal (pinealoblastoma) o paraselar.\n2. Patrones de Crecimiento Histopatológico:\n   • Endofítico: Crece desde la retina neurosensorial hacia la cavidad vítrea, produciendo siembra vítrea ("vitreous seeds") en copos de nieve.\n   • Exofítico: Crece hacia el espacio subretiniano, produciendo desprendimiento de retina exudativo masivo y siembra subretiniana.\n   • Infiltrativo difuso (1-2%): No forma masa discreta; engrosa la retina y simula uveítis infantil con pseudohipopion tumoral.',
    clinicalExamination: {
      biomicroscopy: 'Normal en fases iniciales. En fases avanzadas: Neovascularización del iris (rubeosis iridis) con hifema espontáneo, pupila en midriasis paralítica, glaucoma secundario neovascular con buftalmos y presencia de pseudohipopion blanquecino en cámara anterior (acúmulo de células tumorales flotantes).',
      fundus: 'Masa retiniana nodular de color blanco-rosado translúcido o cremoso, con vasos tumorales dilatados y tortuosos que bucean en su superficie, focos de siembra vítrea blanquecina ("polvo o perlas vítreas") y exudación subretiniana.',
      specialSigns: '• Leucocoria (Reflejo Pupilar Blanco / "Ojo de Gato Amaurotico"): Signo de presentación cardinal en más del 60% de los casos, visible a simple vista o detectado por los padres en fotografías con flash.\n• Estrabismo (20% de los casos): Secundario a la pérdida de fijación foveal por invasión macular del tumor; todo estrabismo pediátrico exige examen minucioso del fondo de ojo bajo midriasis farmacológica completa.'
    },
    diagnosticWorkup: [
      {
        test: 'Ecografía Ocular Estandarizada Modo A y B',
        findings: 'Estudio de primera línea: Masa intraocular heterogénea de alta reflectividad con focos hiperecogénicos de calcificación distrófica intratumoral que proyectan una sombra acústica posterior cónica muy densa. La presencia de calcio en una masa intraocular en un menor de 3 años es prácticamente patognomónica de retinoblastoma.'
      },
      {
        test: 'Resonancia Magnética (RM) de Encéfalo y Órbitas con Gadolinio',
        findings: 'Modalidad de imagen de elección para evaluar la extensión extraocular: Evalúa el grosor del nervio óptico y la invasión tumoral postlaminar hacia el quiasma, descarta invasión de la pared escleral y descarta pinealoblastoma trilateral en el SNC. Evita la radiación ionizante de la TC (la TC está contraindicada por inducir segundas neoplasias en portadores de mutación RB1 germinal).'
      },
      {
        test: 'Examen Bajo Anestesia General (EUA - Examination Under Anesthesia)',
        findings: 'Examen obligatorio de ambos ojos con oftalmoscopia binocular indirecta de 360 grados con indentación escleral, mapeo tumoral con cámara RetCam y tonometría de aplanación.'
      },
      {
        test: 'Estudio Genético Molecular de RB1 en Sangre Periférica',
        findings: 'Secuenciación de nueva generación (NGS) y MLPA del gen RB1 para asesoramiento genético familiar y cribado de hermanos.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Enfermedad de Coats', distinction: 'Varones escolares con telangiectasias retinianas idiopáticas marcadas, exudación lipídica subretiniana masiva rica en cristales de colesterol, ausencia de masa nodular y ausencia de calcificaciones en la ecografía.' },
      { condition: 'Persistencia de Vasculatura Fetal (PFV / PHPV)', distinction: 'Presente desde el nacimiento, ojo con microftalmos unilateral, proceso ciliar elongado traccionado hacia el centro y masa fibrovascular retrolental con persistencia del vaso hialoideo.' },
      { condition: 'Toxocariasis Ocular Infantil', distinction: 'Granuloma periférico o posterior con tractos vitreorretinianos traccionales densos, antecedente de geofagia o contacto con cachorros, inflamación vítrea severa y ELISA positivo para Toxocara.' }
    ],
    steppedManagement: {
      medical: '• Quimioterapia Intraarterial Supraselectiva (IAC) de la arteria oftálmica mediante microcatéter femoral: Melfalán (3-5 mg) + Carboplatino y Topotecán mensualmente por 3-4 ciclos (salvamento ocular >85% en Grupos B-D).\n• Quimioterapia Intravítrea con técnica de seguridad anti-siembra: Inyecciones de Melfalán (20-30 µg) para siembra vítrea refractaria.\n• Quimioterapia Intravenosa Sistémica (VEC: Vincristina, Etopósido, Carboplatino) en casos bilaterales o de alto riesgo histopatológico.',
      surgical: '• Terapia focal directa (Grupos A y B pequeños): Termoterapia transpupilar con láser diodo infrarrojo (TTT) o crioterapia transescleral en doble ciclo.\n• Enucleación primaria con muñón largo de nervio óptico (10-15 mm) en tumores del Grupo E, ojos con rubeosis iridis, glaucoma neovascular o invasión masiva de cámara anterior.'
    },
    clinicalApplicationPractical: '1. NUNCA realizar biopsia por punción (PAAF) ni paracentesis en sospecha de retinoblastoma por el riesgo letal de diseminación tumoral a órbita.\n2. Todo niño con estrabismo o leucocoria requiere examen de fondo de ojo bajo midriasis farmacológica completa inmediata.\n3. Si se confirma retinoblastoma hereditario/bilateral, realizar cribado periódico de RM cerebral hasta los 5 años para descartar pinealoblastoma trilateral.',
    highYieldPearl: 'Retinoblastoma Board Pearl: La biopsia con aguja fina o vitrectomía diagnóstica está terminantemente prohibida por el riesgo de diseminación orbitaria fatal. Masa retiniana con calcificaciones ecográficas en menores de 3 años = Retinoblastoma hasta demostrar lo contrario.',
    keyDrugs: [
      { name: 'Melfalán intraarterial', dose: '3 a 5 mg infundido en arteria oftálmica', warning: 'Agente alquilante de alta toxicidad tumoral; monitorizar toxicidad neutropénica transitoria.' },
      { name: 'Topotecán intraarterial / intravítreo', dose: '0.5 a 1 mg intraarterial / 20 µg intravítreo', warning: 'Inhibidor de topoisomerasa I; excelente sinergia con melfalán en siembra vítrea.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'CONTRAINDICACIÓN ABSOLUTA DE BIOPSIA (PAAF)',
        category: 'Trampa de Tribunal',
        description: 'Pregunta canónica de examen: "¿Está indicada la biopsia intraocular o PAAF para confirmar retinoblastoma antes de enucleación o quimioterapia?". Respuesta: CONTRAINDICACIÓN FORMAL Y ABSOLUTA. La punción viola la cápsula ocular y produce siembra en el trayecto de la aguja hacia la órbita, aumentando dramáticamente la mortalidad por metástasis.',
        trapToAvoid: 'Plantear una biopsia diagnóstica previa para "estar seguros del diagnóstico".'
      },
      {
        title: 'Calcificaciones Intratumorales en Ecografía',
        category: 'Asociación Patognomónica',
        description: 'La presencia de calcificaciones densas hiperecogénicas con sombra acústica posterior en una masa intraocular pediátrica orienta de forma contundente a retinoblastoma (presentes en >90-95% de los casos).',
        trapToAvoid: 'Solicitar TC craneofacial en niños con retinoblastoma germinal por el riesgo de inducir un segundo sarcoma por radiación ionizante (usar siempre RM).'
      },
      {
        title: 'Modelo de Knudson y Locus del Gen RB1',
        category: 'Cifra Clave de Corte',
        description: 'El gen RB1 se localiza en el cromosoma 13q14.2. Los casos bilaterales (40%) son germinales (hereditarios) y transmiten la mutación con herencia autosómica dominante con un 90% de penetrancia.',
        trapToAvoid: 'Asumir que un retinoblastoma unilateral nunca puede ser hereditario (el 10-15% de los unilaterales son germinales).'
      }
    ],
    fellowshipKeyPoints: [
      'Rosetas de Flexner-Wintersteiner: Formaciones tubulares histopatológicas altamente específicas de retinoblastoma con prolongaciones que rodean una luz central.',
      'Factores de alto riesgo histopatológico en ojo enucleado: Invasión del nervio óptico post-laminar (más allá de la lámina cribosa), invasión del borde de sección quirúrgica del muñón del nervio óptico o invasión masiva de la coroides (>3 mm); exigen quimioterapia adyuvante sistémica.',
      'Técnica de seguridad en inyecciones intravítreas de Melfalán: Hipotonizar el ojo con paracentesis previa, usar aguja 30G, retirar la aguja bajo crioterapia transescleral en el punto de entrada y lavar profusamente con suero estéril.'
    ],
    landmarkTrials: [
      {
        name: 'International Retinoblastoma Staging System (IRSS)',
        year: '2006 (Pediatr Blood Cancer)',
        conclusion: 'Estandarizó la clasificación histopatológica post-enucleación para definir qué pacientes requieren quimioterapia sistémica adyuvante preventiva de metástasis.',
        fellowshipRelevance: 'Guía de referencia para decidir tratamiento adyuvante en ojos enucleados.'
      }
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un lactante de 14 meses presenta leucocoria en ojo izquierdo. La ecografía en modo B revela una masa sólida intraocular con múltiples focos de calcificación que proyectan sombra acústica. El ojo presenta rubeosis iridis y presión intraocular de 40 mmHg. ¿Cuál es la clasificación ICRB, por qué está contraindicada la PAAF y cuál es el tratamiento definitivo?',
        answer: 'Clasificación: Retinoblastoma Grupo E (ojo destruido con glaucoma neovascular secundario). La PAAF está terminantemente contraindicada por el riesgo letal de diseminación tumoral extraocular a órbita y metástasis sistémica. Tratamiento definitivo: Enucleación primaria oncológica con muñón largo de nervio óptico (10-15 mm) enviando la pieza a anatomía patológica para descartar invasión post-laminar.',
        trap: 'Intentar tratamiento conservador con quimioterapia intraarterial en un ojo Grupo E con glaucoma neovascular irreversible, o solicitar biopsia previa.'
      }
    ]
  },

  // =========================================================================
  // 3. TUMORES METASTÁSICOS OCULARES (MAMA Y PULMÓN)
  // =========================================================================
  {
    id: 'deep-onco-metastasis-oculares',
    title: 'Tumores Metastásicos Oculares: Cáncer Intraocular Secundario Más Frecuente (Mama y Pulmón)',
    subspecialtyId: 'oncologia',
    summary: 'Monografía completa sobre metástasis oculares, la neoplasia intraocular maligna más frecuente en adultos (superando al melanoma primario en una proporción de 3:1): vías de diseminación hematógena arterial por arterias ciliares posteriores cortas, orígenes primarios principales (carcinoma de mama en mujeres 40-50%, carcinoma broncogénico de pulmón en varones 30-40%, gastrointestinal y renal), características fundoscópicas (masas amelanóticas blanco-cremosas o amarillentas, multifocales en el 30% y bilaterales en el 20-25%), desprendimiento de retina seroso exudativo plano desproporcionado, ecografía modo A con reflectividad interna ALTA (>60-90%) por heterogeneidad tisular celular, diagnóstico diferencial con melanoma amelanótico y hemangioma coroideo, y terapéutica paliativa mediante radioterapia externa fraccionada (EBRT), radiocirugía con Gamma Knife, braquiterapia con placa y terapia sistémica dirigida (inhibidores de tirosina quinasa, hormonoterapia y anticuerpos conjugados).',
    definitionAndEpidemiology: 'Las metástasis a la úvea constituyen el tumor intraocular maligno más prevalente en la población adulta humana, con una incidencia clínica que supera con creces la del melanoma uveal primario. En series necrópsicas de pacientes fallecidos por cáncer diseminado, entre el 8% y el 12% presentan metástasis intraoculares subclínicas microscópicas. La coroides es el sitio anatómico de alojamiento en más del 88-90% de los casos (debido al inmenso flujo vascular por las arterias ciliares posteriores cortas), seguida del iris (8-10%) y el cuerpo ciliar (2-3%). En mujeres, el tumor primario de origen es el carcinoma de mama en el 40-50% de los casos (con una latencia media de 3 a 5 años tras el tumor primario); en varones, el tumor primario más común es el carcinoma de pulmón en el 30-40% (en el cual la metástasis ocular suele ser la primera manifestación clínica de la enfermedad en hasta un tercio de los casos).',
    anatomyAndPathophysiology: '1. Ruta Hematógena de Diseminación:\n   • Las células tumorales metastásicas procedentes de la circulación sistémica viajan por vía arterial carotídea -> arteria oftálmica -> arterias ciliares posteriores cortas y largas -> lecho microvascular coriocapilar posterior.\n   • La densa vasculatura coriocapilar del polo posterior actúa como un lecho de atrapamiento biológico y filtrado de émbolos tumorales.\n2. Patrón de Crecimiento y Afectación del Epitelio Pigmentario:\n   • Las células metastásicas infiltran y expanden lateralmente el estroma coroideo de forma rápida y multilobulada, adoptando una forma aplanada en meseta o ligeramente cupuliforme (rara vez rompen la membrana de Bruch ni forman masas en hongo como el melanoma).\n   • Provocan una disrupción funcional precoz y extensa de la barrera hematorretiniana externa (uniones estrechas de las células del EPR), lo que desencadena una trasudación profusa de líquido subretiniano seroso desproporcionadamente abundante respecto al grosor apical tumoral.\n   • A nivel del EPR se producen fenómenos de metaplasia pigmentaria en "polvo de estrellas" y cambios atróficos, pero típicamente SIN los cúmulos gruesos de pigmento naranja (lipofuscina) que caracterizan al melanoma activo.',
    clinicalExamination: {
      biomicroscopy: 'En metástasis de polo posterior: Segmento anterior habitualmente normal. En metástasis de iris o cuerpo ciliar: Masa amelanótica amarillenta o blanco-rosada nodular o infiltrante difusa en estroma de iris, pseudohipopion tumoral blanco en cámara anterior (acúmulo de células tumorales necrosadas descamadas) e hipertensión ocular severa por invasión trabecular.',
      fundus: 'Masa o placas coroideas sobreelevadas de coloración blanco-cremosa, amarillenta o pálida con bordes mal definidos, frecuentemente multifocales (varias masas en el mismo ojo en el 30%) y bilaterales (en el 20-25%). Se acompaña de desprendimiento de retina seroso exudativo extenso que puede alcanzar la periferia inferior.',
      specialSigns: '• Lesión Multifocal y Bilateral: La presencia de más de una masa o afectación bilateral orienta de forma contundente a metástasis frente a melanoma primario (el melanoma es casi exclusivamente unifocal y unilateral).\n• Desprendimiento Seroso Desproporcionado: Un tumor de escasa elevación (p. ej. 1.5 a 2 mm) con desprendimiento de retina masivo tridimensional es altamente sugestivo de metástasis.\n• Diagnóstico en Pulmón: En varones con masa coroidea sin antecedente conocido de cáncer, el primer examen obligado es una TC torácica para buscar carcinoma pulmonar oculto.'
    },
    diagnosticWorkup: [
      {
        test: 'Ecografía Ocular Estandarizada Modo A y B',
        findings: 'Prueba cardinal de diferenciación tumoral: En Modo A muestra reflectividad acústica interna ALTA (>60-90%) con ángulo kappa ancho y espigas irregulares por la heterogeneidad de la arquitectura celular metastásica. En Modo B revela masa cupuliforme aplanada o en meseta con reflectividad interna densa, sin vaciamiento acústico ni excavación coroidea escleral profunda.'
      },
      {
        test: 'Tomografía de Coherencia Óptica (SD-OCT / EDI-OCT)',
        findings: 'Visualiza la elevación en meseta con líquido subretiniano profuso foveal y un aspecto ondulado irregular del EPR suprayacente denominado "signo de la superficie abollada" (bumpy pattern), con detritos subretinianos hiperreflectivos.'
      },
      {
        test: 'Angiografía Fluoresceínica (FAG) e Indocianina (ICG)',
        findings: 'En FAG muestra hipofluorescencia precoz por bloqueo coriocapilar con hiperfluorescencia tardía por difusión vascular focal ("pinpoints"). En ICG permanece hipofluorescente durante todas las fases angiográficas.'
      },
      {
        test: 'Tomografía por Emisión de Positrones / TC (PET-TC Corporal)',
        findings: 'Identificación del tumor primario de origen y estadificación metastásica sistémica completa (hueso, pulmón, hígado, ganglios linfáticos).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Melanoma Coroideo Amelanótico', distinction: 'Reflectividad acústica interna baja (<60%) en modo A con vaciamiento acústico, casi siempre unilateral y unifocal, con presencia frecuente de pigmento naranja (lipofuscina).' },
      { condition: 'Hemangioma Coroideo Circunscrito', distinction: 'Reflectividad acústica interna del 100% en modo A, coloración rojo-anaranjada brillante y fenómeno de lavado ("washout") rápido en ICG.' },
      { condition: 'Coroiditis Serpiginosa o Uveítis Posterior', distinction: 'Signos inflamatorios vítreos activos, cicatrización geográfica progresiva centrífuga y buena respuesta inicial a corticoides sistémicos.' }
    ],
    steppedManagement: {
      medical: '• Búsqueda y tratamiento del tumor primario sistémico (mamografía, TC toracoabdominal, PET-TC corporal total y marcadores tumorales).\n• Terapias sistémicas dirigidas según inmunofenotipo: En cáncer de mama (hormonoterapia + inhibidores CDK4/6 como Palbociclib; terapia anti-HER2 con Trastuzumab/Pertuzumab); en cáncer de pulmón (inhibidores de tirosina quinasa anti-EGFR como Osimertinib o anti-ALK como Alectinib).\n• Inyecciones intravítreas de Anti-VEGF (Bevacizumab) como coadyuvante para reabsorber rápidamente el líquido subretiniano foveal y aliviar la visión.',
      surgical: '• Radioterapia Externa Fraccionada (EBRT): Tratamiento local de elección para preservar la visión (30 a 40 Gy en 10-15 fracciones), con resolución del tumor y del desprendimiento seroso en >85-90% de los casos.\n• Radiocirugía Estereotáctica con Gamma Knife (15-20 Gy en dosis única) en metástasis solitarias refractarias.\n• Braquiterapia epiescleral con placa de Yodo-125 en tumores radio-resistentes aislados. La enucleación está reservada exclusivamente para ojos ciegos con dolor intratable secundario a glaucoma neovascular.'
    },
    clinicalApplicationPractical: '1. Ante una masa coroidea amelanótica en un varón sin antecedente de cáncer, solicitar de inmediato una TC torácica: hasta un 30% de los carcinomas de pulmón debutan como metástasis ocular.\n2. Si hay afectación bilateral o multifocal, el diagnóstico es metástasis con altísima probabilidad (el melanoma primario es casi siempre unifocal y unilateral).\n3. Evitar enucleaciones innecesarias: las metástasis responden excelentemente a radioterapia externa fraccionada y a las nuevas terapias sistémicas dirigidas preservando el ojo.',
    highYieldPearl: 'Metástasis Coroideas en Ecografía Modo A: Presentan reflectividad acústica interna ALTA (>60-90%) con ángulo kappa ancho (por heterogeneidad tisular), a diferencia del melanoma uveal primario que tiene reflectividad BAJA (<60%) por homogeneidad celular densa.',
    keyDrugs: [
      { name: 'Osimertinib', dose: '80 mg vía oral una vez al día en adenocarcinoma de pulmón EGFR+', warning: 'Excelente penetración en SNC y ojo; vigilar toxicidad cardíaca (prolongación de QT) y neumonitis intersticial.' },
      { name: 'Bevacizumab intravítreo', dose: '1.25 mg en 0.05 mL intravítreo', warning: 'Acelera la reabsorción del líquido subretiniano exudativo asociado a la metástasis.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Reflectividad Ecográfica en Modo A: Metástasis vs Melanoma',
        category: 'Pregunta Clásica',
        description: 'En ecografía modo A: Las metástasis muestran reflectividad interna ALTA (60-90%) y ángulo kappa ancho por heterogeneidad tisular. El melanoma coroideo muestra reflectividad interna BAJA (<60%) con ángulo kappa estrecho por celularidad densa homogénea.',
        trapToAvoid: 'Catalogar una lesión de alta reflectividad ecográfica como melanoma coroideo.'
      },
      {
        title: 'Multifocalidad y Bilateralidad',
        category: 'Asociación Patognomónica',
        description: 'La presencia de múltiples masas amelanóticas en el mismo ojo o en ambos ojos en un adulto es patognomónica de metástasis coroideas (bilaterales en 20-25%, multifocales en 30%).',
        trapToAvoid: 'Diagnosticar un melanoma uveal multicéntrico (es una rareza biológica casi inexistente).'
      },
      {
        title: 'Tumor Primario Más Frecuente según Sexo',
        category: 'Cifra Clave de Corte',
        description: 'En mujeres: Cáncer de mama (40-50% de los casos); suele haber antecedente oncológico conocido años antes. En varones: Cáncer de pulmón (30-40%); suele debutar con la metástasis ocular sin antecedente oncológico previo.',
        trapToAvoid: 'Descartar metástasis en un varón porque niega antecedentes previos de cáncer.'
      }
    ],
    fellowshipKeyPoints: [
      'El desprendimiento de retina seroso asociado a metástasis coroideas es plano, dependiente de la gravedad y frecuentemente muy desproporcionado respecto al pequeño espesor de la masa tumoral subyacente.',
      'En metástasis de iris, el desprendimiento de células tumorales en la cámara anterior genera un pseudohipopion blanquecino estéril sin signos inflamatorios infecciosos.',
      'La radioterapia externa fraccionada (EBRT) a dosis de 30-40 Gy consigue el control local de la masa y el aclaramiento del líquido subretiniano en más del 85-90% de los ojos tratados.'
    ],
    landmarkTrials: [
      {
        name: 'Shields et al. Survey of 520 Eyes with Uveal Metastases',
        year: '1997 (Ophthalmology)',
        conclusion: 'Mayor serie clínica que demostró que el 88% de las metástasis se alojan en la coroides, el cáncer de mama es el origen más frecuente en mujeres y el de pulmón en varones, y la radioterapia externa controla el tumor en >85%.',
        fellowshipRelevance: 'Estudio seminal de referencia para la epidemiología y semiología de las metástasis uveales.'
      }
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer de 54 años con antecedente de cáncer de mama tratado hace 3 años consulta por visión borrosa en ojo derecho (20/80). Al examen de fondo de ojo se aprecian dos placas coroideas amarillentas amelanóticas aplanadas en polo posterior con desprendimiento de retina seroso foveal. ¿Cuál es el diagnóstico prioritario, qué hallazgo ecográfico en modo A espera encontrar y cuál es el manejo de elección?',
        answer: 'Diagnóstico: Metástasis coroideas multifocales por carcinoma de mama. Ecografía en modo A: Reflectividad acústica interna ALTA (>60-90%) con ángulo kappa ancho y espigas irregulares (por heterogeneidad celular). Manejo de elección: Radioterapia externa fraccionada conformada (30 a 40 Gy en 10-15 fracciones) asociada a terapia sistémica hormonal o diana dirigida según receptores de su tumor primario (anti-HER2 o inhibidores CDK4/6), logrando control tumoral y reabsorción del líquido en >90% sin necesidad de enucleación.',
        trap: 'Confundir las lesiones con un melanoma amelanótico multifocal y proponer enucleación.'
      }
    ]
  },

  // =========================================================================
  // 4. NEOPLASIAS DE LA SUPERFICIE OCULAR (OSSN) Y MELANOMA CONJUNTIVAL
  // =========================================================================
  {
    id: 'deep-onco-neoplasias-superficie-ossn',
    title: 'Neoplasias de la Superficie Ocular (OSSN): Displasias Epiteliales, Carcinoma Escamoso y Melanoma Conjuntival',
    subspecialtyId: 'oncologia',
    summary: 'Monografía exhaustiva sobre neoplasias de la conjuntiva y córnea: espectro histopatológico de la Neoplasia Escamosa de la Superficie Ocular (OSSN) desde la Neoplasia Intraepitelial Conjuntival/Corneal (CIN Grados I, II y III) y carcinoma in situ hasta el Carcinoma de Células Escamosas (SCC) invasor y los tumores melanocíticos (Melanosis Primaria Adquirida con Atipia - PAM vs Melanoma Conjuntival maligno), factores de riesgo asociados (radiación solar UV-B, VPH serotipos oncogénicos 16 y 18, tabaquismo y VIH en pacientes jóvenes), semiología biomicroscópica con vasos en horquilla y leucoplaquia superficial, técnica quirúrgica estándar de oro de Shields ("no-touch" con margen de 4 mm, alcoholización corneal y crioterapia de doble ciclo), y protocolos de quimioterapia tópica no quirúrgica de vanguardia (Interferón alfa-2b, 5-Fluorouracilo al 1% y Mitomicina C al 0.02-0.04%).',
    definitionAndEpidemiology: 'La Neoplasia Escamosa de la Superficie Ocular (OSSN, Ocular Surface Squamous Neoplasia) es el tumor maligno no pigmentado más frecuente de la superficie ocular en el ser humano, con una incidencia mundial de 0.2 a 3.5 casos por 100.000 habitantes al año (alcanzando tasas mucho más altas en regiones ecuatoriales con alta radiación solar como África y el Caribe). Afecta predominantemente a varones entre la 6ª y 7ª década de la vida, pero en menores de 50 años se asocia de forma abrumadora a infección por el Virus de la Inmunodeficiencia Humana (VIH) y xeroderma pigmentoso. El término OSSN engloba desde la displasia epitelial focal hasta el carcinoma epidermoide invasor con penetración a través de la membrana basal epitelial hacia la sustancia propia conjuntival y esclera.',
    anatomyAndPathophysiology: '1. Origen Anatómico en la Zona de Transición Límbica:\n   • Más del 95% de las lesiones de OSSN se originan en el limbo esclerocorneal interpalpebral (con predilección por el limbo nasal y temporal).\n   • Las células madre epiteliales límbicas (LSC) en las empalizadas de Vogt presentan una alta tasa de replicación celular, haciéndolas vulnerables a mutaciones genéticas inducidas por radiación UV.\n2. Mecanismos Moleculares de Oncogénesis:\n   • Mutaciones inducidas por UV en el gen supresor tumoral TP53 (mutaciones con firma UV C->T y CC->TT).\n   • Infección oncogénica por el Virus del Papiloma Humano (VPH) serotipos 16 y 18: La oncoproteína vírica E6 degrada la proteína p53 y la oncoproteína E7 inactiva a la proteína pRb, desbloqueando el ciclo celular sin control.\n   • Pérdida de adhesión celular por disminución de E-cadherina y sobreexpresión de metaloproteinasas (MMP-2, MMP-9) que lisan la membrana basal facilitando la invasión estromal.\n3. Espectro Histopatológico de la OSSN:\n   • CIN I (Displasia Leve): Atipia nuclear confinada al tercio inferior del epitelio.\n   • CIN II (Displasia Moderada): Células displásicas que ocupan los dos tercios basales.\n   • CIN III / Carcinoma In Situ: Displasia de espesor completo sin rebasar la membrana basal intacta.\n   • Carcinoma Epidermoide Invasor: Las células tumorales rompen la membrana basal e invaden la lámina propia de la conjuntiva; riesgo de diseminación a ganglios linfáticos preauriculares y submandibulares.\n4. Melanosis Primaria Adquirida (PAM) y Melanoma Conjuntival:\n   • La PAM con atipia celular severa progresa a melanoma conjuntival en más del 50% de los casos.\n   • El melanoma conjuntival es una neoplasia maligna muy agresiva que, a diferencia del melanoma uveal, posee drenaje linfático conjuntival profuso hacia ganglios regionales y vías hematógenas a pulmón y cerebro.',
    clinicalExamination: {
      biomicroscopy: 'Lesión sobreelevada gelatinosa, papilomatosa o leucopláquica (con queratinización superficial nacarada) centrada en el limbo esclerocorneal, con extensión corneal en "lengüeta" o velo grisáceo translúcido avascular superficial que avanza sobre la membrana de Bowman. Presencia de vasos nutricios tortuosos dilatados y vasos intrínsecos en "horquilla" o en sacacorchos.',
      fundus: 'Generalmente normal, salvo invasión intraocular escleral tardía en carcinomas desatendidos.',
      specialSigns: '• Vasos en Horquilla / Loops Vasculares: Microvascularización patognomónica visible a gran aumento en lámpara de hendidura en las formas papilomatosas de OSSN.\n• Tinción con Rosa de Bengala / Verde de Lisamina: Tiñe intensamente las células displásicas descamadas sin mucina superficial.\n• Palpación Ganglionar Sistemática: En todo carcinoma invasor o melanoma conjuntival es mandatorio palpar minuciosamente los ganglios preauriculares, parotídeos y submandibulares.'
    },
    diagnosticWorkup: [
      {
        test: 'Tomografía de Coherencia Óptica de Segmento Anterior de Alta Resolución (HR-OCT)',
        findings: 'Biopsia óptica no invasiva de referencia: Muestra un epitelio hiperreflectivo engrosado con transición abrupta entre el epitelio normal adyacente y la lesión tumoral ("shadowing" posterior profundo). Permite diferenciar OSSN (epitelio engrosado) de pterigión o displasias melanocíticas.'
      },
      {
        test: 'Citología de Impresión Conjuntival (CIC)',
        findings: 'Recolección celular no traumática mediante papel de acetato de celulosa sobre la superficie tumoral, teñida con Papanicolaou o PAS para documentar atipia nuclear y pérdida de células caliciformes.'
      },
      {
        test: 'Biopsia Excisional con Estudio Histopatológico e Inmunohistoquímica',
        findings: 'Diagnóstico definitivo: Marcadores Ki-67 (índice de proliferación en capas superficiales), p53 y citoqueratinas CK14 y CK19. En lesiones melanocíticas: Melan-A, HMB-45 y SOX-10.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Pterigión o Pingüécula Inflamada', distinction: 'Lesión fibrovascular elastótica triangular regular sin vasos en horquilla, sin engrosamiento epitelial hiperreflectivo en HR-OCT y sin leucoplaquia queratinizada.' },
      { condition: 'Panus Corneal Inflamatorio', distinction: 'Neovascularización superficial secundaria a blefaritis crónica o rosácea sin atipia celular ni bordes abruptos en HR-OCT.' },
      { condition: 'Amiloidosis Conjuntival', distinction: 'Masa amarillenta serosa cérea friable en fondos de saco sin vasos en horquilla que tiñe con Rojo Congo (birrefringencia verde manzana).' }
    ],
    steppedManagement: {
      medical: '• Quimioterapia Tópica Primaria (de elección en tumores extensos >4 horas horarias o multifocales):\n  1) Interferón alfa-2b (IFN a-2b): 1 millón UI/mL 1 gota 4 veces al día continuo hasta 1-2 meses tras la resolución clínica completa (tasa de éxito >85-90%, sin toxicidad corneal ni dolor).\n  2) 5-Fluorouracilo (5-FU) al 1%: 1 gota 4 veces al día en ciclos de 1 semana seguidos de 3 semanas de descanso (2 a 4 ciclos).\n  3) Mitomicina C (MMC) al 0.02-0.04%: Ciclos de 1 semana con 1 semana de descanso; requiere tapones lagrimales para evitar estenosis canalicular.',
      surgical: '• Biopsia Excisional con Técnica Estándar de Oro de Shields:\n  1) Margen conjuntival libre de al menos 4.0 mm alrededor de la lesión.\n  2) Técnica "No-Touch" estricta (no manipular el tumor directamente para evitar desprendimiento y siembra de células tumorales).\n  3) Alcoholización corneal con etanol absoluto al 100% durante 30-40 segundos en el lecho corneal con raspado Beaver.\n  4) Crioterapia limbar en doble ciclo rápido de congelación a -80ºC y descongelación lenta.\n  5) Cierre reconstructivo con trasplante de membrana amniótica o autoinjerto conjuntival.'
    },
    clinicalApplicationPractical: '1. Ante una masa límbica sospechosa en un paciente menor de 50 años, solicitar serología para VIH de forma obligatoria (la OSSN es marcador centinela de SIDA en jóvenes).\n2. En la técnica de Shields, respetar siempre el margen de 4 mm y la alcoholización corneal: reduce la recidiva de más del 50% al 5%.\n3. Si se prescribe Mitomicina C tópica, ocluir obligatoriamente los puntos lagrimales con tapones de silicona para evitar estenosis canalicular irreversible.',
    highYieldPearl: 'OSSN Cirugía de Shields: Margen conjuntival libre de 4 mm + alcoholización corneal al 100% por 30s + crioterapia en doble ciclo en los bordes conjuntivales con técnica estricta "no-touch".',
    keyDrugs: [
      { name: 'Interferón alfa-2b tópico', dose: '1 millón UI/mL 1 gota 4 veces al día', warning: 'Conservar refrigerado a 4ºC; excelente tolerancia, sin dolor ni epitelioqueratopatía.' },
      { name: 'Mitomicina C tópica 0.02-0.04%', dose: '1 gota 4 veces al día en ciclos de 1 semana', warning: 'Riesgo de estenosis canalicular y queratopatía tóxica; proteger puntos lagrimales con tapones.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Técnica Quirúrgica de Shields en OSSN',
        category: 'Pregunta Clásica',
        description: 'La técnica estándar de oro de Shields incluye: 1) Margen macroscópico libre de 4 mm; 2) Principio "No-Touch"; 3) Alcoholización corneal al 100% por 30-40s; 4) Doble ciclo de crioterapia en bordes conjuntivales; 5) Cierre con membrana amniótica.',
        trapToAvoid: 'Hacer una resección marginal estrecha con bisturí dentro del tumor sembrando células malignas en la esclera sana.'
      },
      {
        title: 'OSSN en Jóvenes Menores de 50 Años y Despistaje de VIH',
        category: 'Pregunta Clásica',
        description: 'La presentación de OSSN en pacientes menores de 50 años es un marcador centinela de inmunodepresión severa por infección no diagnosticada por VIH. Todo paciente joven con OSSN debe someterse de forma obligatoria a serología para VIH.',
        trapToAvoid: 'Tratar la lesión en un adulto joven sin solicitar estudio serológico para VIH.'
      },
      {
        title: 'Complicación Específica de la Mitomicina C Tópica',
        category: 'Trampa de Tribunal',
        description: 'La Mitomicina C (MMC) tópica puede causar estenosis y fibrosis irreversible del punto y canalículo lagrimal. Es imperativo colocar tapones lagrimales de silicona (punctum plugs) oclusivos antes de iniciar los ciclos de colirio de MMC.',
        trapToAvoid: 'Prescribir colirio de MMC sin proteger los puntos lagrimales con tapones.'
      }
    ],
    fellowshipKeyPoints: [
      'La HR-OCT (High-Resolution OCT) de segmento anterior permite diferenciar la OSSN del pterigión: la OSSN presenta un epitelio engrosado hiperreflectivo con transición abrupta, mientras que el pterigión muestra epitelio normal con tejido subepitelial engrosado.',
      'En el melanoma conjuntival, el factor pronóstico histológico más importante para metástasis es el grosor tumoral (espesor de Breslow): tumores >1.5-2.0 mm tienen alto riesgo de metástasis ganglionares y requieren biopsia del ganglio centinela.',
      'La crioterapia conjuntival debe aplicarse en doble ciclo rápido de congelación a -80ºC y descongelación lenta espontánea (el daño letal celular ocurre durante la descongelación lenta por recristalización intracelular).'
    ],
    landmarkTrials: [
      {
        name: 'Shields et al. Surgical Approach for OSSN',
        year: '1997 (Arch Ophthalmol)',
        conclusion: 'Estableció la técnica "no-touch" con margen de 4 mm y crioterapia limbar, demostrando una reducción drástica de recurrencias locales del 56% al 5%.',
        fellowshipRelevance: 'Protocolo quirúrgico universalmente adoptado en centros de referencia oncológica.'
      }
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 64 años presenta una masa gelatinosa sobreelevada en limbo nasal de ojo izquierdo con vasos en horquilla y leucoplaquia que invade 2 mm de córnea periférica. ¿Cuáles son los pasos quirúrgicos obligatorios según la técnica de Shields y qué alternativa médica no invasiva existe?',
        answer: 'Pasos de Shields: 1) Margen conjuntival libre de 4.0 mm de tejido macroscópicamente sano; 2) Principio "No-Touch" estricto; 3) Quimioablación corneal con etanol absoluto al 100% durante 30-40 segundos con raspado epitelial; 4) Crioterapia de doble ciclo rápido en bordes conjuntivales; 5) Reconstrucción con membrana amniótica. Alternativa médica no quirúrgica: Quimioterapia tópica con colirio de Interferón alfa-2b (1 millón UI/mL 4 veces/día) hasta 1 mes tras resolución clínica completa.',
        trap: 'Hacer una biopsia incisional intralesional violando el principio "no-touch".'
      }
    ]
  },

  // =========================================================================
  // 5. TUMORES ORBITARIOS (LINFOMAS, GLÁNDULA LAGRIMAL, GLIOMAS Y HEMANGIOMAS)
  // =========================================================================
  {
    id: 'deep-onco-tumores-orbitarios',
    title: 'Tumores Orbitarios: Linfomas MALT, Neoplasias de Glándula Lagrimal, Gliomas y Hemangiomas',
    subspecialtyId: 'oncologia',
    summary: 'Monografía completa sobre patología tumoral del espacio orbitario en adultos y niños: tumores linfoproliferativos anexiales (Linfoma MALT de zona marginal extranodal vs Linfoma B difuso de células grandes agresivo), tumores epiteliales de la glándula lagrimal con la dicotomía quirúrgica vital entre Adenoma Pleomorfo benigno (crecimiento lento indoloro que remodela la fosa lagrimal ósea sin erosionarla, exigiendo resección completa en bloque con cápsula intacta para evitar recidiva maligna) frente a Carcinoma Adenoide Quístico (neoplasia destructiva con dolor orbitario temprano por invasión perineural y osteólisis en TAC), Glioma del nervio óptico (astrocitoma pilocítico infantil fuertemente ligado a Neurofibromatosis tipo 1), Tumores vasculares (Hemangioma cavernoso como el tumor benigno intraconal más prevalente del adulto) y Rabdomiosarcoma orbitario pediátrico como emergencia oncológica médica de rápida evolución.',
    definitionAndEpidemiology: 'Los tumores orbitarios comprenden un amplio espectro de procesos proliferativos neoplásicos benignos y malignos desarrollados dentro de la pirámide ósea orbitaria, afectando el cono muscular intraconal, el espacio extraconal, los pares craneales, la glándula lagrimal o el periostio. En adultos, los tumores orbitarios primarios benignos más frecuentes son los vasculares (Hemangioma Cavernoso / Hemangioma venoso de flujo lento), mientras que las neoplasias malignas más habituales son los Linfomas Anexiales Oculares (55% de los tumores malignos orbitarios). En niños, el quiste dermoide es la masa benigna más común, el glioma del nervio óptico el tumor neural más prevalente y el Rabdomiosarcoma es la neoplasia maligna mesenquimal primaria más frecuente y de mayor agresividad.',
    anatomyAndPathophysiology: '1. Linfoma Orbitario de Tejido Linfoide Asociado a Mucosas (MALT):\n   • Neoplasia de linfocitos B monoclonales maduros de la zona marginal, frecuentemente asociada a estimulación antigénica crónica o infección por Chlamydia psittaci en ciertas áreas geográficas.\n   • Infiltra moldeándose pasivamente a las estructuras anatómicas normales de la órbita (cono muscular y globo ocular) sin erosionar hueso.\n   • Marcadores de inmunohistoquímica: CD20+, CD79a+, CD5-, CD10-, CD23-, ciclina D1-.\n2. Tumores de la Glándula Lagrimal (Regla del 50/50):\n   • El 50% de las masas de la glándula lagrimal son procesos inflamatorios/reactivos (dacrioadenitis, sarcoidosis, enfermedad por IgG4).\n   • El otro 50% son tumores epiteliales, de los cuales el 50% son Adenomas Pleomorfos benignos y el 50% carcinomas malignos (principalmente Carcinoma Adenoide Quístico).\n   • Adenoma Pleomorfo: Hamartoma epitelial/estromal encapsulado; si se realiza biopsia incisional o se rompe la pseudocápsula intraoperatoriamente, se produce una siembra masiva que recidiva de forma agresiva o se transforma en Carcinoma ex Adenoma Pleomorfo letal.\n   • Carcinoma Adenoide Quístico (ACC): Tumor bifásico altamente maligno con patrón cribiforme en "queso suizo"; tropismo extremo por las vainas perineurales de los nervios ciliares y rama oftálmica de V1, causando dolor temprano y metástasis a pulmón y hueso.\n3. Glioma del Nervio Óptico (Astrocitoma Pilocítico de Grado I de la OMS):\n   • Proliferación astrocitaria fusiforme con fibras de Rosenthal en el espesor del nervio óptico.\n   • Más del 50-70% de los casos se asocian a Neurofibromatosis tipo 1 (mutación en gen NF1 en 17q11.2, proteína neurofibromina).\n4. Rabdomiosarcoma Orbitario Pediátrico:\n   • Neoplasia maligna de precursores de músculo estriado esquelético (rabdomioblastos indiferenciados).\n   • Subtipo más frecuente: Embrionario (80%, excelente respuesta a quimioterapia); Subtipo Alveolar (translocaciones PAX3-FOXO1 o PAX7-FOXO1 con peor pronóstico).',
    clinicalExamination: {
      biomicroscopy: 'Proptosis unilateral (exoftalmos axial en tumores intraconares o distópico no axial en masas extraconares de glándula lagrimal que desplazan el globo hacia abajo y adentro), congestión conjuntival episcleral, quemosis y limitación de la motilidad ocular extrínseca (oftalmoplejía restrictiva con diplopía). En glioma óptico: Signo del menisco o edema papilar que evoluciona a atrofia óptica pálida con defecto pupilar aferente relativo (DPAR / pupila de Marcus Gunn) y vasos optociliares de derivación.',
      fundus: 'Pliegues coroideos en el polo posterior (estrías horizontales por compresión escleral posterior extrínseca), edema de papila o atrofia óptica pálida.',
      specialSigns: '• Síntoma Guía: Dolor Orbitario: El dolor intenso en una masa de glándula lagrimal sugiere fuertemente Carcinoma Adenoide Quístico (por invasión perineural). El Adenoma Pleomorfo es rigurosamente indoloro.\n• Masa en "Salmón" Subconjuntival: La presencia de una placa carnosa color salmón brillante en fondo de saco conjuntival es patognomónica de Linfoma MALT.\n• Proptosis Fulminante en Días en un Niño: Rabdomiosarcoma orbitario pediátrico hasta demostrar lo contrario (urgencia médica absoluta).'
    },
    diagnosticWorkup: [
      {
        test: 'Tomografía Computarizada (TC) de Órbita con Cortes Finos (Axial y Coronal)',
        findings: 'Modalidad de elección para evaluar hueso: En adenoma pleomorfo muestra fosa lagrimal remodelada y adelgazada pero con cortical ósea íntegra. En carcinoma adenoide quístico muestra destrucción osteolítica apolillada con invasión del periostio y calcificaciones focales intratumorales.'
      },
      {
        test: 'Resonancia Magnética (RM) de Órbitas y Encéfalo con Supresión Grasa y Gadolinio',
        findings: 'Excelente definición tisular: En glioma óptico muestra engrosamiento fusiforme del nervio óptico con señal hiperintensa en T2 y trayecto tortuoso en "kinking". En hemangioma cavernoso masa ovoide intraconal bien delimitada con realce homogéneo progresivo en fases tardías.'
      },
      {
        test: 'Biopsia Orbitaria e Inmunohistoquímica (Excisional vs Incisional)',
        findings: 'En linfomas: Biopsia incisional con tejido en fresco para citometría de flujo y clonalidad de cadenas ligeras kappa/lambda. En adenoma pleomorfo: PROHIBIDA LA BIOPSIA INCISIONAL; exige resección completa en bloque.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Orbitopatía Tiroidea de Graves (TED)', distinction: 'Afectación típicamente bilateral y simétrica de vientres musculares extraoculares respetando tendones (signo de IMSLO), retracción palpebral y anticuerpos TSI positivos.' },
      { condition: 'Pseudotumor Inflamatorio Orbitario (IOID)', distinction: 'Comienzo hiperagudo con dolor exquisito, quemosis, engrosamiento difuso de músculos con compromiso de inserciones tendinosas y respuesta espectacular a corticoides en 24h.' },
      { condition: 'Celulitis Orbitaria Bacteriana', distinction: 'Fiebre, leucocitosis, sinusitis etmoidal adyacente y proptosis dolorosa caliente sin masa nodular encapsulada.' }
    ],
    steppedManagement: {
      medical: '• Linfoma MALT localizado (Estadio IE): Radioterapia externa conformada a dosis moderadas (24 a 30 Gy), logrando control local >95-98%.\n• Linfoma diseminado: Inmunoterapia sistémica con Rituximab (anti-CD20) + quimioterapia (CHOP o bendamustina).\n• Rabdomiosarcoma pediátrico: Protocolo urgente multimodal con quimioterapia sistémica (Vincristina, Actinomicina D, Ciclofosfamida - VAC) + radioterapia local.',
      surgical: '• Adenoma Pleomorfo: Orbitotomía lateral de Wright con extirpación en bloque de la masa con cápsula intacta y margen de lóbulo lagrimal sano sin biopsia previa.\n• Carcinoma Adenoide Quístico: Resección en bloque extendida o exenteración orbitaria seguida de radioterapia con protones.\n• Hemangioma cavernoso: Orbitotomía anterior o lateral con resección completa de la masa encapsulada si produce compresión del nervio óptico o proptosis desfigurante.'
    },
    clinicalApplicationPractical: '1. Ante una masa en la fosa lagrimal indolora y de crecimiento lento: NUNCA biopsiar. Indicar resección quirúrgica completa en bloque con cápsula intacta (sospecha de adenoma pleomorfo).\n2. Si la masa lagrimal es dolorosa y rápida con erosión ósea en TC: Sospechar carcinoma adenoide quístico; aquí sí está indicada la biopsia incisional diagnóstica previa.\n3. Niño con proptosis súbita unilateral que evoluciona en días: Tratar como emergencia oncológica (rabdomiosarcoma orbitario), remitir a oncología pediátrica para biopsia inmediata.',
    highYieldPearl: 'Adenoma Pleomorfo de Glándula Lagrimal: Crecimiento lento e INDOLORO que remodela el hueso sin destruirlo. La biopsia incisional o ruptura capsular está terminantemente prohibida porque induce siembra orbitaria inoperable o transformación maligna.',
    keyDrugs: [
      { name: 'Rituximab', dose: '375 mg/m2 IV semanal por 4 semanas', warning: 'Anticuerpo anti-CD20 de elección en linfomas B orbitarios; cribado previo de hepatitis B.' },
      { name: 'Vincristina / Actinomicina D / Ciclofosfamida (VAC)', dose: 'Protocolo IRS pediátrico según superficie corporal', warning: 'Mielosupresión severa, neuropatía periférica y cistitis hemorrágica.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'PROHIBICIÓN FORMAL DE BIOPSIA EN ADENOMA PLEOMORFO',
        category: 'Trampa de Tribunal',
        description: 'NUNCA realizar una biopsia por punción (PAAF) ni biopsia incisional en una masa de glándula lagrimal con sospecha de Adenoma Pleomorfo. Romper la pseudocápsula provoca siembra tumoral que recidiva de forma agresiva o se transforma en Carcinoma ex Adenoma Pleomorfo letal.',
        trapToAvoid: 'Hacer una biopsia con aguja fina o biopsia incisional de una masa en la fosa lagrimal.'
      },
      {
        title: 'Dolor y Osteólisis en Carcinoma Adenoide Quístico',
        category: 'Pregunta Clásica',
        description: 'La presencia de DOLOR orbitario en una masa lagrimal es el signo cardinal que orienta a Carcinoma Adenoide Quístico (por invasión perineural de ramas de V1). En TC muestra osteólisis destructiva apolillada del hueso orbitario.',
        trapToAvoid: 'Catalogar como proceso inflamatorio benigno una masa lagrimal dolorosa con destrucción ósea.'
      },
      {
        title: 'Rabdomiosarcoma como Emergencia Pediátrica',
        category: 'Asociación Patognomónica',
        description: 'La proptosis de evolución explosiva en días o semanas en un niño previamente sano con edema palpebral es un Rabdomiosarcoma Orbitario hasta que se demuestre lo contrario; requiere biopsia e inicio urgente de quimioterapia VAC.',
        trapToAvoid: 'Tratar el cuadro como celulitis preseptal/orbitaria con antibióticos ambulatorios retrasando el diagnóstico.'
      }
    ],
    fellowshipKeyPoints: [
      'El linfoma MALT orbitario es un tumor que "moldea" las estructuras normales (envuelve el globo y músculos sin infiltrar ni erosionar el hueso), produciendo una imagen típica en "escultura" en la TC.',
      'El glioma del nervio óptico produce un engrosamiento fusiforme regular del nervio con conservación de la duramadre, a diferencia del meningioma de la vaina del nervio óptico que produce el signo de las "vías de tranvía" (tram-track sign) en TC con contraste.',
      'El hemangioma cavernoso orbitario es una masa bien encapsulada con realce progresivo de periferia al centro en la RM dinámico con contraste ("centripetal filling").'
    ],
    landmarkTrials: [
      {
        name: 'Intergroup Rhabdomyosarcoma Study Group (IRSG)',
        year: '2001 (J Clin Oncol)',
        conclusion: 'Demostró que la quimioterapia sistémica combinada (VAC) asociada a radioterapia conformada alcanza tasas de curación superiores al 90% en rabdomiosarcoma orbitario sin necesidad de exenteración primaria.',
        fellowshipRelevance: 'Transformó el rabdomiosarcoma de una enfermedad letal o mutilante a una enfermedad curable conservando el ojo.'
      }
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer de 45 años consulta por una masa firme e INDOLORA en el tercio externo del párpado superior derecho de 2 años de evolución. La TC de órbita revela una masa bien circunscrita en la fosa de la glándula lagrimal que remodela y adelgaza la cortical ósea sin signos de erosión ni calcificaciones. ¿Cuál es el diagnóstico más probable, qué procedimiento diagnóstico está formalmente contraindicado y cuál es la técnica quirúrgica de elección?',
        answer: 'Diagnóstico: Adenoma Pleomorfo de la glándula lagrimal. Procedimiento contraindicado: Biopsia incisional o punción con aguja (PAAF), ya que la ruptura de la cápsula produce siembra celular en la órbita con recidivas múltiples y transformación a carcinoma ex-adenoma pleomorfo. Técnica quirúrgica de elección: Orbitotomía lateral de Wright con extirpación completa en bloque de la glándula y la masa con su cápsula intacta envuelta en periostio sano.',
        trap: 'Hacer una biopsia incisional previa para confirmar histología antes de operar.'
      }
    ]
  },

  // =========================================================================
  // 6. TUMORES PALPEBRALES MALIGNOS (BASOCELULAR, ESPINOCELULAR Y SEBÁCEO)
  // =========================================================================
  {
    id: 'deep-onco-tumores-palpebrales',
    title: 'Tumores Palpebrales Malignos: Carcinoma Basocelular, Espinocelular y Carcinoma de Glándulas Sebáceas',
    subspecialtyId: 'oncologia',
    summary: 'Monografía completa sobre cáncer de los párpados y anexos: epidemiología y semiología de las tres neoplasias malignas palpebrales capitales: 1) Carcinoma Basocelular (BCC), el más frecuente (85-90% de los cánceres palpebrales, localizado en párpado inferior y canto medial), con sus variantes histológicas noduloulcerativo perlado con telangiectasias vs morfeiforme esclerosante infiltrativo de bordes invisibles; 2) Carcinoma Espinocelular (SCC), originado en queratinocitos epidérmicos con crecimiento más rápido, ulceración destructiva e invasión perineural con diseminación retrógrada intracraneal; y 3) Carcinoma de Glándulas Sebáceas (SGC), originado en glándulas de Meibomio o Zeiss, famoso por ser el "gran simulador" (masquerade syndrome) de chalazión recidivante y blefaroconjuntivitis crónica unilateral con madarosis, caracterizado por diseminación pagetoide intraepitelial conjuntival que exige biopsias en mapa conjuntivales (map biopsies), tinción lipídica con Oil Red O o adipofilina, y resección micrográfica de Mohs o escisión amplia con control histológico de márgenes.',
    definitionAndEpidemiology: 'Los tumores malignos palpebrales representan más del 40% de todos los cánceres del territorio periorbitario y cabeza y cuello. Dada la extrema exposición de los párpados a la radiación solar y la complejidad tisular del borde libre palpebral, su incidencia es elevada, particularmente en individuos caucásicos mayores de 60 años. El Carcinoma Basocelular (BCC) es el rey indiscutible, constituyendo el 85-90% de todos los casos (localizado en párpado inferior en el 50-60%, canto interno en el 25-30%, párpado superior en el 10% y canto externo en el 5%). El Carcinoma de Células Escamosas o Espinocelular (SCC) representa el 5% de los casos (pero es 40 veces más propenso a metastatizar a ganglios linfáticos regionales y órbita). El Carcinoma de Glándulas Sebáceas (SGC) representa el 3-5% en poblaciones occidentales (y hasta el 25-30% en Asia), con una predilección especial por el párpado superior y una tasa de mortalidad del 10 al 20% si se demora el diagnóstico.',
    anatomyAndPathophysiology: '1. Carcinoma Basocelular (BCC):\n   • Origen en las células germinativas basales pluripotenciales de la epidermis folicular.\n   • Vía oncogénica conductora: Mutaciones inactivadoras en el gen supresor tumoral PTCH1 o mutaciones activadoras en SMO (proteína Smoothened), activando de forma aberrante la vía de señalización Hedgehog/GLI.\n   • Subtipo Morfeiforme / Esclerosante: Cordones de células basales infiltrantes comprimidas en un estroma colágeno fibroso denso que se extienden horizontal y profundamente varios milímetros más allá del margen clínico visible, con alta tasa de recidiva e invasión orbitaria.\n2. Carcinoma Espinocelular (SCC):\n   • Transformación maligna de queratinocitos epidérmicos de la capa espinosa, precedido frecuentemente por lesiones premalignas (queratosis actínica o cuerno cutáneo).\n   • Marcada tendencia a la invasión perineural: Las células malignas infiltran el perineuro de ramas sensoriales del nervio trigémino (nervio supraorbitario o infraorbitario) y migran retrógradamente hacia la hendidura esfenoidal y el seno cavernoso sin producir masa palpable evidente.\n3. Carcinoma de Glándulas Sebáceas (SGC):\n   • Origen en las células sebáceas secretoras de las glándulas de Meibomio (aproximadamente 25 en el tarso superior y 20 en el inferior) o en las glándulas de Zeiss asociadas a las pestañas.\n   • Diseminación Pagetoide (Pagetoid Spread): Células tumorales malignas individuales o en pequeños nidos anaplásticos que migran dentro del epitelio conjuntival y corneal normal a distancia del tumor primario sin romper la membrana basal.\n   • Asociación al Síndrome de Muir-Torre: Variante genética del Síndrome de Lynch con mutaciones en genes de reparación de emparejamientos erróneos del ADN (MMR: MSH2, MLH1, MSH6) que asocia carcinomas sebáceos y tumores gastrointestinales viscerales.',
    clinicalExamination: {
      biomicroscopy: 'En BCC nodular: Nódulo traslúcido ceroso con borde perlado sobreelevado, telangiectasias superficiales arborizadas y umbilicación o ulceración central ("úlcera de Jacob"). Madarosis localizada (pérdida focal de pestañas patognomónica de malignidad en el borde palpebral). En BCC morfeiforme: Placa indurada pálida blanco-amarillenta cicatrizal con retracción del borde palpebral y ectropión o entropión mecánico cicatrizal. En Carcinoma Sebáceo: Nódulo amarillo indurado intratarsal firme no doloroso simétrico a chalazión que no responde al tratamiento habitual, engrosamiento difuso del borde palpebral con hiperemia conjuntival tarsal unilateral.',
      fundus: 'Normal; en tumores invasivos del canto medial, evaluar invasión orbitaria anterior y restricción motora.',
      specialSigns: '• Madarosis Focal: La pérdida de pestañas en la zona de una lesión palpebral es un signo de alta sospecha de invasión tumoral maligna del folículo piloso.\n• Signo del Menisco Perlado: Bordes enrollados en cuenta de collar perlado con telangiectasias en el carcinoma basocelular nodular.\n• Chalazión Recidivante en Anciano: Todo chalazión que recidiva tras curetaje o muestra características atípicas en un adulto mayor debe considerarse Carcinoma Sebáceo hasta demostrar lo contrario.'
    },
    diagnosticWorkup: [
      {
        test: 'Biopsia Palpebral Diagnóstica (Incisional o Excisional de Espesor Completo)',
        findings: 'Estudio de referencia: Biopsia cuneiforme de espesor completo del párpado que incluya borde libre, piel, tarso y conjuntiva. En carcinoma sebáceo: Procesar tejido en fresco no deshidratado en alcohol para tinción con Oil Red O o Sudán IV (identifica vacuolas de lípidos intracitoplasmáticos).'
      },
      {
        test: 'Biopsias en Mapa Conjuntivales (Map Biopsies) para Carcinoma Sebáceo',
        findings: 'Mapeo geométrico obligatorio: Toma de múltiples pequeñas biopsias incisionales de conjuntiva bulbar y tarsal superior, inferior y fondos de saco en cuadrantes para delimitar la presencia de diseminación pagetoide intraepitelial microscópica antes de reconstruir el párpado.'
      },
      {
        test: 'Inmunohistoquímica Específica',
        findings: 'En Carcinoma Sebáceo: Positividad intensa para Adipofilina, Perilipina y Factor de Transcripción Androgénico (AR). En BCC: Ber-EP4 positivo y EMA negativo (lo que lo diferencia del SCC que es EMA positivo y Ber-EP4 negativo).'
      },
      {
        test: 'TC / RM de Órbita y Encéfalo con Contraste',
        findings: 'Obligatoria en tumores de canto medial o con invasión perineural demostrada para evaluar invasión del ápex orbitario, fosa pterigopalatina y seno cavernoso.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Chalazión Crónico / Blefaritis Unilateral', distinction: 'Lesión inflamatoria benigna sin madarosis que cede tras curetaje o calor; si recidiva en ancianos exige biopsia para descartar carcinoma sebáceo.' },
      { condition: 'Queratocantoma Palpebral', distinction: 'Crecimiento hiperagudo en semanas con cráter central relleno de queratina que puede involucionar espontáneamente pero debe extirparse como SCC de bajo grado.' },
      { condition: 'Granuloma Piogénico', distinction: 'Masa carnosa vascular polipoide sangrante de crecimiento rápido secundaria a cirugía o trauma previo, sensible a corticoides tópicos o resección simple.' }
    ],
    steppedManagement: {
      medical: '• En Carcinoma Basocelular avanzado o inoperable: Terapia oral con inhibidores de la vía Hedgehog (Vismodegib 150 mg/día o Sonidegib 200 mg/día), logrando tasas de respuesta del 60-70%.\n• En Carcinoma Espinocelular localmente avanzado o metastásico: Inmunoterapia sistémica con Cemiplimab (anti-PD-1) o Pembrolizumab.\n• Criocirugía o Mitomicina C tópica adyuvante en carcinoma sebáceo con diseminación pagetoide residual conjuntival.',
      surgical: '• Cirugía Micrográfica de Mohs: Estándar de oro de resección (recidiva <1-2%), obligatoria en tumores de canto interno, variantes morfeiformes, carcinomas sebáceos y tumores recidivantes.\n• Escisión quirúrgica con margen libre guiado por congelación: 4 mm en BCC nodular, 5-6 mm en SCC y 5-6 mm en Carcinoma Sebáceo.\n• Reconstrucción palpebral funcional: Cierre directo por planos (<33%), colgajo de Tenzel (33-50%), técnica de Hughes para párpado inferior (>50%) o técnica de Cutler-Beard para párpado superior (>50%).'
    },
    clinicalApplicationPractical: '1. Los carcinomas en el canto medial (inner canthus) son de altísimo riesgo: invaden precozmente el periostio, la fosa lagrimal y penetran a la órbita profunda; exigir márgenes quirúrgicos amplios o técnica de Mohs.\n2. Todo chalazión operado en un paciente mayor de 60 años debe enviarse a anatomía patológica; si recidiva, realizar biopsia de espesor completo y biopsias en mapa conjuntivales para descartar carcinoma sebáceo.\n3. Si un paciente con carcinoma espinocelular refiere entumecimiento o dolor facial, sospechar invasión perineural retrógrada y pedir RM de base de cráneo.',
    highYieldPearl: 'Carcinoma de Glándulas Sebáceas: Gran simulador de chalazión recidivante o blefaroconjuntivitis crónica en adultos mayores. Su diseminación pagetoide intraepitelial conjuntival exige la toma de biopsias en mapa (map biopsies) y tinción con Oil Red O o adipofilina.',
    keyDrugs: [
      { name: 'Vismodegib (Erivedge)', dose: '150 mg vía oral una vez al día continuo', warning: 'Inhibidor de Smoothened (Hedgehog) para BCC inoperable; espasmos musculares, alopecia, disgeusia y teratogenicidad estricta.' },
      { name: 'Cemiplimab (Libtayo)', dose: '350 mg IV cada 3 semanas', warning: 'Anticuerpo anti-PD-1 de elección en carcinoma epidermoide avanzado; toxicidad inmunomediada.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Peligro Oncológico del Canto Medial (Inner Canthus)',
        category: 'Trampa de Tribunal',
        description: 'Los carcinomas basocelulares ubicados en el canto interno tienen el peor pronóstico local debido a que invaden rápidamente el periostio delgado de los huesos propios nasales, la vaina lagrimal, el tabique orbitario y penetran silenciosamente al ápex orbitario y al seno etmoidal.',
        trapToAvoid: 'Subestimar una lesión nodular pequeña en el canto interno tratándola con crioterapia simple o margen mínimo sin control histológico.'
      },
      {
        title: 'Mimetismo del Carcinoma de Glándulas Sebáceas',
        category: 'Pregunta Clásica',
        description: 'El Carcinoma Sebáceo suele diagnosticarse erróneamente durante meses como chalazión recidivante o blefaroconjuntivitis asimétrica unilateral con pérdida de pestañas (madarosis). Todo chalazión reoperado en un adulto mayor debe enviarse obligatoriamente a patología.',
        trapToAvoid: 'Desechar el tejido cureteado de un chalazión recurrente sin remitirlo a anatomía patológica.'
      },
      {
        title: 'Invasión Perineural en Carcinoma Espinocelular',
        category: 'Asociación Patognomónica',
        description: 'El Carcinoma Espinocelular presenta una predilección especial por la invasión de las vainas perineurales de ramas del trigémino (V1 y V2). El paciente puede referir entumecimiento cutáneo, disestesias o dolor facial antes de que haya invasión orbitaria macroscópica.',
        trapToAvoid: 'Atribuir la anestesia facial en el dermatoma infraorbitario a una neuralgia benigna en un paciente con cáncer de párpado.'
      }
    ],
    fellowshipKeyPoints: [
      'El subtipo morfeiforme / esclerosante de carcinoma basocelular se caracteriza por cordones infiltrativos que se extienden horizontal y profundamente varios milímetros más allá de los bordes clínicos visibles; la cirugía micrográfica de Mohs es obligatoria.',
      'En la reconstrucción de párpado inferior con técnica de Hughes, se crea un colgajo tarsoconjuntival del párpado superior que cubre la pupila y se secciona en un segundo tiempo quirúrgico a las 2-3 semanas.',
      'El Síndrome de Muir-Torre debe investigarse en pacientes con carcinomas sebáceos y queratoacantomas mediante cribado de inestabilidad de microsatélites y colonoscopia preventiva.'
    ],
    landmarkTrials: [
      {
        name: 'Muir-Torre Syndrome Consortium Guidelines',
        year: '2014 (J Clin Oncol)',
        conclusion: 'Demostró que hasta un 30% de los carcinomas sebáceos palpebrales se asocian a mutaciones de genes de reparación de emparejamientos erróneos (Lynch), requiriendo cribado sistémico.',
        fellowshipRelevance: 'Estableció el despistaje genético familiar en pacientes con carcinoma sebáceo.'
      }
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 72 años ha sido intervenida quirúrgicamente de "chalazión" en párpado superior izquierdo en dos ocasiones durante los últimos 9 meses con recidiva inmediata. A la exploración presenta engrosamiento indurado del borde tarsal con madarosis localizada. ¿Cuál es la sospecha diagnóstica prioritaria, qué tinción histológica especial debe solicitarse y cuál es la conducta quirúrgica reglada antes de la reconstrucción?',
        answer: 'Sospecha: Carcinoma de Glándulas Sebáceas de Meibomio (SGC). Tinción especial: Tinción de lípidos en tejido fresco con Oil Red O o Sudán IV, o inmunohistoquímica para Adipofilina. Conducta reglada: Biopsia de espesor completo para confirmación histológica y realización de biopsias en mapa conjuntivales (map biopsies) en múltiples cuadrantes para delimitar la presencia de diseminación pagetoide intraepitelial antes de planear la resección amplia y reconstrucción definitiva.',
        trap: 'Realizar un tercer curetaje simple en la consulta o planear un colgajo reconstructivo sin control previo de márgenes mediante biopsias en mapa.'
      }
    ]
  },

  // =========================================================================
  // 7. DIAGNÓSTICO AVANZADO Y GENÉTICA MOLECULAR EN ONCOLOGÍA OCULAR
  // =========================================================================
  {
    id: 'deep-onco-diagnostico-genetica-molecular',
    title: 'Diagnóstico Avanzado y Genética Molecular en Oncología Ocular',
    subspecialtyId: 'oncologia',
    summary: 'Monografía integradora de alta especialidad sobre el arsenal diagnóstico multimodal y la revolución genómica en oncología oftálmica: 1) Técnicas de imagen cuantitativa avanzada: Ecografía ocular estandarizada con sondas de 8 MHz y 20 MHz (medición tridimensional micrométrica, evaluación de reflectividad interna acústica cuantitativa, vaciamiento acústico y ángulo kappa), Biomicroscopía Ultrasónica (UBM de 50 MHz) para tumores de iris, cuerpo ciliar y ángulo iridocorneal; Tomografía de Coherencia Óptica con técnica de profundidad mejorada (EDI-OCT) y Swept-Source OCT para medición del grosor coroideo e interfase neurosensorial; Autofluorescencia de fondo (FAF) para mapeo metabólico de lipofuscina activa; 2) Citogenética y Biología Molecular de Vanguardia: Biopsia por aspiración con aguja fina (FNAB) transescleral/transvitreana guiada por ecografía; Perfiles de Expresión Génica (GEP de 15 genes de DecisionDx-Melanoma Castle Biosciences: Clase 1A/1B de bajo riesgo vs Clase 2 con pérdida de BAP1 de muy alto riesgo metastásico hematógeno); Citogenética por MLPA, FISH y SNP array (Monosomía del cromosoma 3, deleción de 1p, ganancia de 6p protectora y ganancia de 8q); Mutaciones conductoras iniciadoras (GNAQ, GNA11, PLCB4, CYSLTR2) vs mutaciones de pronóstico secundario (BAP1 en 3p21, SF3B1, EIF1AX); Protocolos de cribado hepático precoz con Resonancia Magnética con contraste hepatobiliar semestral y biopsia líquida con ADN tumoral circulante (ctDNA).',
    definitionAndEpidemiology: 'La oncología ocular moderna ha transitado desde un enfoque puramente morfológico y anatomoclínico hacia una medicina de precisión personalizada basada en la integración de técnicas de imagen multimodal de resolución micrométrica y la caracterización citogenética y molecular exhaustiva de cada tumor. En patologías como el melanoma uveal y el retinoblastoma, el análisis molecular permite predecir con una precisión superior al 90-95% qué pacientes desarrollarán metástasis letales en los siguientes 5 a 10 años, permitiendo instaurar protocolos de cribado hepático precoz, enrolamiento en ensayos clínicos adyuvantes con terapias biológicas dirigidas (Tebentafusp) y asesoramiento genético familiar reproductivo.',
    anatomyAndPathophysiology: '1. Vías Moleculares y Mutaciones en Melanoma Uveal:\n   • Mutaciones Iniciadoras Tempranas: Ocurren en más del 90% de los melanomas uveales en los genes GNAQ o GNA11 (y con menor frecuencia CYSLTR2 o PLCB4). Codifican subunidades alfa de proteínas G triméricas (G-alpha-q/11) que quedan constitutivamente activadas bloqueadas en conformación unida a GTP. Estimulan de forma descontrolada las cascadas de fosforilación intracelular de PKC, MAPK (MEK/ERK) y la vía Hippo mediante activación de YAP/TAZ.\n   • Mutaciones Pronósticas Secundarias Excluyentes:\n     a) BAP1 (BRCA1-associated protein 1, locus 3p21.1): Gen supresor tumoral que codifica una deubiquitinasa nuclear implicada en la reparación del daño al ADN, control de la cromatina y ferroptosis. Su pérdida de función (por mutación somática unida a Monosomía del cromosoma 3) desencadena el perfil de Expresión Génica Clase 2, con transición epitelioide y riesgo de metástasis hepática >70% a 5 años.\n     b) SF3B1 (Subunidad 1 del factor de splicing 3b, en 2q33.1): Mutaciones puntuales recurrentes (R625) que alteran el procesamiento del ARN mensajero; confiere riesgo intermedio con metástasis tardías a los 8-12 años.\n     c) EIF1AX (Factor de iniciación eucariota 1A, en Xp22.12): Asociado a Disomía del cromosoma 3 y excelente pronóstico vital (metástasis <5% a 5 años).\n2. Arquitectura Citogenética Clásica:\n   • Monosomía 3 (-3): Pérdida de un alelo completo del cromosoma 3; predictor cardinal de muerte metastásica.\n   • Ganancia de 8q (+8q): Duplicación del oncogén c-Myc que sinergiza con la monosomía 3 acortando el tiempo libre de enfermedad.\n   • Ganancia de 6p (+6p): Asociada a conservación de disomía 3 y a un curso clínico relativamente benigno y protector contra metástasis.',
    clinicalExamination: {
      biomicroscopy: 'La ecobiomicroscopía UBM de 50 MHz permite explorar con resolución de 25-50 micras las estructuras ocultas tras el iris: ángulo iridocorneal, senos ciliares, procesos ciliares y cuerpo ciliar anterior, delimitando si una masa de iris infiltra el espolón escleral o cuerpo ciliar.',
      fundus: 'Correlación de imagen multimodal en lámpara: Visualización de pigmento naranja (lipofuscina) con FAF, desprendimiento seroso con EDI-OCT y medición tridimensional con ecografía estandarizada.',
      specialSigns: '• Biopsia Líquida (ctDNA): Detección de mutaciones circulantes en sangre periférica de GNAQ/GNA11 y amplificaciones de 8q mediante PCR digital en gotas (ddPCR), permitiendo monitorizar recurrencias sistémicas microscópicas antes de que sean visibles en RM.'
    },
    diagnosticWorkup: [
      {
        test: 'Perfil de Expresión Génica (GEP de 15 Genes - DecisionDx-Melanoma)',
        findings: 'Estándar molecular de oro clínico: Analiza mediante RT-PCR la expresión cuantitativa de 12 genes discriminadores tumorales y 3 genes de control interno a partir de una muestra de FNAB. Clasifica el tumor en:\n• Clase 1A: Muy bajo riesgo de metástasis (riesgo <2-5% a 5 años).\n• Clase 1B: Riesgo intermedio de metástasis (riesgo ~20% a 5 años).\n• Clase 2: Muy alto riesgo de metástasis hepática (riesgo >72% a 5 años; fuertemente correlacionado con monosomía 3 y pérdida de BAP1).'
      },
      {
        test: 'Amplificación de Sondas Dependiente de Ligadura Múltiple (MLPA) y FISH',
        findings: 'Determina alteraciones cromosómicas numéricas en cromosomas 1p, 3, 6 y 8 a partir de ADN tumoral extraído con FNAB. Detecta Monosomía 3 y ganancia de 8q con alta sensibilidad.'
      },
      {
        test: 'Biomicroscopía Ultrasónica (UBM de 50 MHz)',
        findings: 'Transductor ultrasónico de alta frecuencia para segmento anterior: Determina el grosor exacto de tumores de iris y cuerpo ciliar, invasión del ángulo camerular, ciclodiálisis y contacto con la cápsula cristaliniana anterior con penetración de 4-5 mm y resolución axial de 25 µm.'
      },
      {
        test: 'Tomografía de Coherencia Óptica de Profundidad Mejorada (EDI-OCT / Swept-Source)',
        findings: 'Desplaza el punto de foco cero hacia la interfase esclerocoroidea, permitiendo medir el grosor coroideo total, la presencia de líquido subretiniano foveal inaparente en fundoscopia, y la infiltración de la coriocapilar en masas <3 mm.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Pseudomelanoma Coroideo', distinction: 'Lesiones pigmentadas benignas como hipertrofia congénita del EPR (CHRPE con lagunas despigmentadas bien delimitadas y halo neto), hematoma subretiniano o melanocitoma de papila.' },
      { condition: 'Osteoma Coroideo', distinction: 'Masa calcificada en polo posterior en mujeres jóvenes con placa densa hiperreflectiva en ecografía que produce sombra acústica completa y TAC confirmatorio.' },
      { condition: 'Escleritis Posterior Nodular', distinction: 'Engrosamiento escleral doloroso con signo de la "T" ecográfica (líquido en espacio subtenoniano) y respuesta inmediata a corticoides orales.' }
    ],
    steppedManagement: {
      medical: '• Vigilancia sistémica estratificada según GEP:\n  - Clase 1A: Ecografía hepática y enzimas hepáticas anuales.\n  - Clase 1B: RM hepática anual.\n  - Clase 2 (Alto Riesgo): RM abdominal con contraste hepatobiliar semestral estricta para detección de metástasis hepáticas resecables en oligometástasis.\n• Ensayos adyuvantes sistémicos en pacientes Clase 2 / Monosomía 3 con terapia biológica dirigida (Tebentafusp si HLA-A*02:01+ o inhibidores de HDAC).',
      surgical: '• Biopsia por aspiración con aguja fina (FNAB) transescleral/transvítrea con aguja 25-27G guiada por ecografía al colocar la placa de braquiterapia para estudio citogenético y molecular.\n• Tratamiento local del tumor primario según criterios de tamaño con braquiterapia I-125 o enucleación.\n• Manejo quirúrgico de oligometástasis hepáticas: Resección hepática segmentaria en cuña o quimioembolización transarterial hepática (TACE) combinada con perfusión hepática aislada (IHP).'
    },
    clinicalApplicationPractical: '1. La prueba de expresión génica (GEP) Clase 2 tiene un valor predictivo positivo >90% para metástasis hepática a 5 años; estos pacientes requieren vigilancia semestral con RM hepática de alta resolución.\n2. Las mutaciones de GNAQ/GNA11 son universales en el melanoma uveal y no diferencian si el paciente morirá de metástasis; el factor crítico a buscar es la pérdida de BAP1 y la Monosomía 3.\n3. La UBM de 50 MHz es la única prueba no invasiva que visualiza con nitidez tumores ocultos tras el iris en el cuerpo ciliar anterior.',
    highYieldPearl: 'Valor Pronóstico Molecular: La pérdida del gen BAP1 (en 3p21.1) y la Monosomía del cromosoma 3 son los biomarcadores moleculares determinantes de letalidad y metástasis hepática en melanoma uveal (GEP Clase 2 con >70% de metástasis a 5 años). La ganancia de 6p confiere un efecto biológico protector.',
    keyDrugs: [
      { name: 'Tebentafusp', dose: '68 mcg IV semanal continuo en HLA-A*02:01+', warning: 'Biespecífico soluble redireccionador de células T contra gp100; monitorizar síndrome de liberación de citocinas.' },
      { name: 'Gadoxetato disódico (Primovist)', dose: '0.025 mmol/kg IV para RM hepática', warning: 'Contraste hepatoespecífico que identifica micrometástasis hepáticas de 2-3 mm.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'BAP1 y Monosomía 3 como Marcadores Clave',
        category: 'Pregunta Clásica',
        description: 'La pérdida de función de BAP1 (3p21.1) y la monosomía del cromosoma 3 son los factores pronósticos individuales más potentes para predecir metástasis hepática en melanoma uveal (perfil Clase 2). Las mutaciones de GNAQ/GNA11 carecen de valor pronóstico independiente.',
        trapToAvoid: 'Responder que GNAQ o GNA11 predicen el pronóstico vital en el examen de especialidad.'
      },
      {
        title: 'Ganancia de 6p como Factor Protector',
        category: 'Asociación Patognomónica',
        description: 'La ganancia del brazo corto del cromosoma 6 (6p) se asocia fuertemente con la disomía 3 y confiere un efecto biológico protector contra el desarrollo de metástasis a distancia, con una supervivencia global significativamente superior.',
        trapToAvoid: 'Interpretar cualquier anomalía cromosómica como signo de mal pronóstico.'
      },
      {
        title: 'Resolución de UBM vs Ecografía Convencional',
        category: 'Cifra Clave de Corte',
        description: 'La UBM utiliza frecuencias ultra-altas (50 MHz) logrando una resolución axial de 25-50 µm con penetración de 4-5 mm (ideal para iris y cuerpo ciliar). La ecografía estandarizada de 8-10 MHz tiene resolución de 150-200 µm con penetración de 40 mm (ideal para polo posterior y órbita).',
        trapToAvoid: 'Solicitar UBM para explorar un tumor coroideo del polo posterior.'
      }
    ],
    fellowshipKeyPoints: [
      'El perfil de expresión génica (GEP) de DecisionDx-Melanoma fue validado en múltiples estudios prospectivos del Collaborative Ocular Oncology Group (COOG), convirtiéndose en el estándar de estratificación molecular en Norteamérica.',
      'La biopsia líquida mediante detección de ADN tumoral circulante (ctDNA) para mutaciones de GNAQ/GNA11 en plasma es una técnica emergente para monitorizar recidivas micrometastásicas hepáticas antes de que sean visibles en pruebas de imagen.',
      'El síndrome de predisposición a tumores BAP1 (BAP1-TPDS) es un trastorno hereditario autosómico dominante que confiere alto riesgo de melanoma uveal, melanoma cutáneo, mesotelioma y carcinoma de células renales.'
    ],
    landmarkTrials: [
      {
        name: 'COOG 1 (Collaborative Ocular Oncology Group Report 1)',
        year: '2012 (Ophthalmology)',
        conclusion: 'Validó prospectivamente que el perfil de expresión génica de 15 genes (GEP) predice de forma superior e independiente a todos los factores clínicos el riesgo de metástasis hepática en melanoma uveal.',
        fellowshipRelevance: 'Estableció el estándar clínico de estratificación molecular mediante biopsia por aguja fina.'
      }
    ],
    fellowOralBoardQuestions: [
      {
        question: 'A un paciente de 52 años se le realiza una braquiterapia con placa por un melanoma coroideo mediano y se toma una biopsia por aguja fina (FNAB). El resultado informa: Perfil de Expresión Génica Clase 2, Monosomía del cromosoma 3 y pérdida de expresión de BAP1. ¿Qué implicaciones pronósticas tiene este resultado y cuál es el protocolo de vigilancia sistémica recomendado?',
        answer: 'Implicación pronóstica: Alto riesgo de muerte por metástasis hepática hematógena (>70-72% a 5 años). Protocolo de vigilancia sistémica: Dado el altísimo riesgo, se indica vigilancia hepática intensiva mediante Resonancia Magnética abdominal con contraste hepatoespecífico (gadoxetato) cada 6 meses durante al menos 5 años, alternando con TC torácica anual, y evaluación para enrolamiento en ensayos clínicos adyuvantes con terapias biológicas dirigidas (Tebentafusp si es HLA-A*02:01 positivo).',
        trap: 'Indicar únicamente una ecografía abdominal anual o no advertir al paciente del alto riesgo de metástasis hepática.'
      }
    ]
  },

  // =========================================================================
  // 8. LINFOMA INTRAOCULAR VITREORRETINIANO PRIMARIO (VRL / SÍNDROME MASCARADA)
  // =========================================================================
  {
    id: 'deep-onco-linfoma-intraocular-vitreorretiniano',
    title: 'Linfoma Intraocular Vitreorretiniano Primario (VRL / Síndrome Mascarada Maligno del SNC)',
    subspecialtyId: 'oncologia',
    summary: 'Monografía exhaustiva sobre Linfoma Intraocular Vitreorretiniano Primario (VRL / PIOL), un subtipo agresivo de Linfoma Primario del Sistema Nervioso Central (LPSNC/PCNSL) de estirpe B difuso de células grandes (DLBCL >95%): presentación como síndrome de mascarada uveítico crónico refractario a esteroides en adultos mayores (>50-60 años), infiltrados subretinianos/sub-EPR cremosos amarillo-blanquecinos con patrón en "piel de leopardo", vitritis en sábanas y copos de nieve, vitrectomía diagnóstica en fresco con citopatología urgente, ratio interleucina IL-10/IL-6 > 1.0 (IL-10 > 400 pg/mL), detección de la mutación somática patognomónica MYD88 L265P mediante PCR digital, protocolo de biopsia sin corte excesivo para preservar viabilidad linfomatosa lábil, y tratamiento con quimioterapia intravítrea (Metotrexato 400 µg/0.1 mL y Rituximab 1 mg/0.1 mL) junto con protocolo sistémico hematológico MATRix y neuroimagen cerebral estricta con RM potenciada con gadolinio.',
    definitionAndEpidemiology: 'El linfoma vitreorretiniano primario (VRL / PIOL) es una neoplasia hematológica maligna intraocular poco frecuente pero letal, que representa una manifestación o extensión directa de un Linfoma Primario del Sistema Nervioso Central (LPSNC). En más del 95-98% de los casos se trata de un linfoma no Hodgkin difuso de células B grandes (DLBCL). Típicamente afecta a pacientes entre la sexta y octava década de la vida (edad media de 55 a 65 años) sin predominio claro de género en inmunocompetentes. Entre el 65% y el 85% de los pacientes con VRL primario desarrollarán afectación del parénquima cerebral o leptomeníngeo durante los 2 a 3 años siguientes al diagnóstico ocular. A la inversa, el 15-25% de los pacientes diagnosticados de LPSNC cerebral presentan compromiso ocular en algún momento de su evolución. Debido a su sintomatología insidiosa y similitud con la uveítis posterior o intermedia crónica, el retraso diagnóstico promedio oscila entre 12 y 24 meses.',
    anatomyAndPathophysiology: '1. Origen Celular e Infiltración Ocular:\n   • Proliferación clonal de linfocitos B grandes centroblásticos o inmunoblásticos malignos que colonizan el ojo a través de las arcadas vasculares retinianas o penetrando desde las meninges a lo largo de las vainas del nervio óptico.\n   • Tropismo específico por la interfase vitreorretiniana y el espacio subretiniano: las células tumorales atraviesan las uniones estrechas del endotelio vascular retiniano y se localizan inicialmente entre la membrana de Bruch y el epitelio pigmentario de la retina (EPR), o entre el EPR y los fotorreceptores neurosensoriales.\n2. Bases Genéticas y Vías de Señalización:\n   • Mutación somática recurrente en el gen MYD88 (L265P) en más del 70-85% de los casos: conduce a la activación constitutiva de la vía del receptor tipo Toll (TLR) e hiperactivación aberrante del factor nuclear kappa B (NF-κB), bloqueando la apoptosis celular y estimulando la proliferación.\n   • Mutaciones concomitantes frecuentes en CD79B, PIM1 y deleciones en CDKN2A (9p21).\n3. Desregulación Inmune y Perfil de Citocinas:\n   • Los linfocitos B malignos secretan masivamente Interleucina 10 (IL-10), una citocina antiinflamatoria e inmunosupresora que promueve la supervivencia de los linfocitos B tumorales y neutraliza la respuesta inmune antitumoral de los linfocitos T del huésped.\n   • En contraste, los procesos inflamatorios no malignos (uveítis infecciosas o autoinmunes) generan predominio de Interleucina 6 (IL-6), producida por células del estroma y linfocitos T activados.\n   • Un cociente o ratio IL-10 / IL-6 en humor vítreo o acuoso > 1.0 (especialmente con IL-10 > 400 pg/mL) presenta una sensibilidad >85% y especificidad >90% para linfoma intraocular.',
    clinicalExamination: {
      biomicroscopy: 'Típicamente cámara anterior con celularidad leve a moderada (flare y células 1-2+) que no guarda proporción con la vitritis posterior. Puede presentar precipitados queráticos finos dispersos o en placas endoteliales atípicas sin sinequias posteriores evidentes (signo de bajo grado inflamatorio). La presión intraocular suele ser normal o levemente elevada por trabeculitis tumoral en estadios avanzados.',
      fundus: 'Vitritis marcada y asimétrica con agregados celulares vítreos en grumos espesos, cordones, velos o "aurora boreal" densa. En el fondo de ojo destacan lesiones infiltrativas multifocales sub-EPR blanco-amarillentas o cremosas de bordes geográficos redondeados o policíclicos en el polo posterior y media periferia, con elevaciones en cúpula pequeña que tras responder o involucionar dejan áreas de atrofia del EPR parcheada con hiperpigmentación focal conformando el clásico patrón en "piel de leopardo" ("leopard-skin spot" / piel de naranja).',
      specialSigns: '• Patrón en "piel de leopardo" (Leopard-skin spot): Áreas moteadas de hiper e hipopigmentación del EPR tras la regresión de infiltrados tumorales subretinianos.\n• Grumos vítreos en copos o cordones (aurora boreal): Acúmulos de linfocitos neoplásicos suspendidos en el gel vítreo que no responden o reaparecen rápidamente tras la suspensión de corticoterapia sistémica.\n• Fenómeno de Mascarada refractaria: Paciente mayor de 50 años rotulado de "uveítis intermedia o posterior idiopática" con respuesta parcial transitoria a esteroides pero recaída invariable con empeoramiento visual progresivo.'
    },
    diagnosticWorkup: [
      {
        test: 'Vitrectomía Vía Pars Plana (PPV 23G/25G) Diagnóstica en Fresco',
        findings: 'Procedimiento de referencia: Se debe recolectar la muestra vítrea primaria (1-2 mL de vítreo puro no diluido) con baja tasa de corte (600-800 cpm) para evitar la lisis celular mecánica, enviándola en fresco de inmediato (<30-60 minutos) al laboratorio de patología en medio RPMI o citofijador suave (ej. CytoLyt). Las células linfomatosas son extremadamente frágiles y se autolisan con rapidez.'
      },
      {
        test: 'Citopatología e Inmunohistoquímica Vítrea / Citometría de Flujo',
        findings: 'Identifica células grandes linfomatosas (2 a 3 veces el diámetro de un linfocito maduro), con alta relación núcleo-citoplasma, cromatina vesicular gruesa, nucléolos prominentes múltiples y mitosis atípicas. Inmunofenotipo de línea B con positividad intensa para CD19, CD20, CD22, CD79a y restricción clonal de cadenas ligeras kappa o lambda en citometría de flujo.'
      },
      {
        test: 'Cociente de Interleucinas Vítreas / Acuosas (IL-10 / IL-6)',
        findings: 'Cuantificación mediante inmunoensayo multiplex: Ratio IL-10 / IL-6 > 1.0 (o IL-10 > 400 pg/mL) fuertemente sugestivo de VRL; ratio < 1.0 orienta a uveítis inflamatoria o infecciosa.'
      },
      {
        test: 'PCR Digital / Detección Molecular de la Mutación MYD88 L265P',
        findings: 'Detección mediante PCR digital en gotas (ddPCR) o PCR específica de alelo de la mutación somática MYD88 c.794T>C (p.Leu265Pro) en ADN genómico extraído de vítreo o humor acuoso, con especificidad diagnóstica superior al 95-99%.'
      },
      {
        test: 'Tomografía de Coherencia Óptica de Dominio Espectral (SD-OCT)',
        findings: 'Depósitos hiperreflectivos nodulares o confluentes entre el EPR y la membrana de Bruch (infiltrados sub-EPR) y entre el EPR y la zona elipsoide/fotorreceptores, con ondulación irregular del EPR y focos hiperreflectivos intrarretinianos/intravítreos.'
      },
      {
        test: 'Resonancia Magnética Cerebral con Gadolinio y Punción Lumbar',
        findings: 'Imprescindible para estatificación del SNC: Evalúa lesiones intraparenquimatosas hiperintensas con captación homogénea o anular de contraste periventriculares o en cuerpo calloso; la punción lumbar con citología y citometría de flujo descarta diseminación leptomeníngea.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Uveítis Intermedia Idiopática / Pars Planitis', distinction: 'Típicamente pacientes jóvenes (<40 años), con bancos de nieve (snowbanks) inferiores marcados, exudados perivenulares e IL-6 francamente superior a IL-10.' },
      { condition: 'Coroiditis Serpiginosa / Tuberculosis Coroidea', distinction: 'Lesiones atróficas geográficas centrifugas desde la papila, cicatrización fibrosa marcada y pruebas positivas para micobacterias (IGRA/Mantoux), sin grumos celulares en aurora boreal.' },
      { condition: 'Retinocoroiditis por Toxoplasmosis', distinction: 'Foco satélite de retinitis activa blanco-cremosa hiperintensa adyacente a cicatriz hiperpigmentada antigua con vasculitis focal marcada e IgM/IgG anti-Toxoplasma positiva.' }
    ],
    steppedManagement: {
      medical: '• Enfermedad Ocular Aislada (sin masa cerebral demostrable en RM y PL negativa):\n  - Quimioterapia Intravítrea de Primera Línea: Inyecciones semanales de Metotrexato intravítreo (400 µg en 0.1 mL) durante 4 semanas (fase de inducción), seguidas de quincenal durante 2 meses (consolidación) y mensual por 9 meses (mantenimiento).\n  - Alternativa biológica intravítrea: Rituximab intravítreo (1.0 mg en 0.1 mL) en ojos refractarios o con queratopatía epitelial inducida por metotrexato.\n• Compromiso del SNC concomitante o enfermedad sistémica (PCNSL):\n  - Protocolo MATRix sistémico hematológico intensivo: Metotrexato a altas dosis (3.5 g/m² IV), Citarabina, Tiotepa y Rituximab IV, seguido de consolidación con Quimioterapia a Altas Dosis y Trasplante Autólogo de Progenitores Hematopoyéticos (TAPH / ASCT) o Radioterapia Holocraneal (WBRT 36-40 Gy en casos seleccionados).',
      surgical: '• Vitrectomía diagnóstica con puerto de 23G o 25G: corte lento, aspiración manual directa y procesamiento inmediato sin fijación alcohólica ácida.\n• En caso de opacidad vítrea refractaria densa que impide el control fundoscópico o desprendimiento de retina traccional/reumatógeno secundario a la manipulación: Vitrectomía terapéutica completa con pelado de membranas e inyección de quimioterapia al cierre del procedimiento.'
    },
    clinicalApplicationPractical: '1. Ante cualquier adulto >50-60 años con "vitritis bilateral idiopática" que no responde a esteroides o que recae invariablemente al reducir la prednisona, debe sospecharse activamente un linfoma vitreorretiniano.\n2. La muestra vítrea debe obtenerse en vítreo puro (sin infusión salina abierta al inicio) y entregarse en mano al anatomopatólogo en menos de media hora con solicitud expresa de sospecha de linfoma; la congelación o el retraso lisan los linfoblastos y generan biopsias "falsas negativas".\n3. La cuantificación de IL-10/IL-6 en humor acuoso mediante punción de cámara anterior en consulta es una herramienta de cribado no invasiva que orienta la indicación de vitrectomía.',
    highYieldPearl: 'Criterio Molecular de Oro: La combinación de un cociente vítreo IL-10 / IL-6 > 1.0 junto con la detección molecular de la mutación somática MYD88 L265P por PCR digital confirma el diagnóstico de Linfoma Vitreorretiniano de células B grandes con una especificidad superior al 98%, superando las limitaciones de la citología convencional con escasez de células intactas.',
    keyDrugs: [
      { name: 'Metotrexato Intravítreo', dose: '400 µg / 0.1 mL intravítreo en régimen stepped', warning: 'Riesgo de queratopatía epitelial punteada difusa corneal y desepitelización; monitorizar superficie corneal en cada inyección.' },
      { name: 'Rituximab Intravítreo', dose: '1.0 mg / 0.1 mL (anti-CD20)', warning: 'Riesgo de uveítis anterior reactiva esteroide-sensible e inflamación estéril transitoria.' },
      { name: 'Metotrexato Sistémico a Altas Dosis', dose: '3.5 a 8 g/m² IV con rescate de Leucovorina', warning: 'Pilar de PCNSL; requiere hiperhidratación alcalina estricta y monitorización estrecha de función renal y aclaramiento plasmático.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Ratio de Citocinas IL-10 vs IL-6',
        category: 'Perla de Examen',
        description: 'La IL-10 elevada con ratio IL-10/IL-6 > 1.0 es altamente específica de Linfoma Vitreorretiniano (las células neoplásicas B producen IL-10). En cambio, las uveítis infecciosas e inflamatorias cursan con IL-6 predominantemente elevada (ratio < 1.0).',
        trapToAvoid: 'Confundir qué interleucina está elevada en el linfoma: recordar que la "L" de Linfoma va con IL-10 (Linfoma = diez).'
      },
      {
        title: 'Mutación Patognomónica MYD88 L265P',
        category: 'Biología Molecular',
        description: 'La mutación L265P en el gen MYD88 es el marcador molecular de mayor rendimiento diagnóstico en muestras intraoculares con celularidad escasa, presente en más del 80% de los casos de VRL de células B grandes.',
        trapToAvoid: 'Esperar encontrar reordenamientos de BAP1 o GNAQ, que corresponden a melanoma uveal.'
      },
      {
        title: 'Condición de la Muestra en Vitrectomía Diagnóstica',
        category: 'Técnica Quirúrgica',
        description: 'Las células de linfoma en vítreo son extraordinariamente frágiles. Se debe realizar vitrectomía sin infusión al inicio (vítreo puro), con baja tasa de corte (600-800 cpm) o corte desconectado, aspiración con jeringa y transporte inmediato en fresco.',
        trapToAvoid: 'Conectar el aspirador al sistema de vacío de alta tasa de corte (ej. 7500 cpm) o enviar la muestra en formol concentrado al 10% que degrada el ADN y la citología.'
      }
    ],
    fellowshipKeyPoints: [
      'Todo paciente diagnosticado de VRL ocular aislado requiere una RM encefálica con cortes finos y contraste de gadolinio, junto con punción lumbar citológica, repetida cada 3 a 6 meses por 3 años debido al riesgo del 70-80% de desarrollar LPSNC.',
      'El uso de corticoides orales o intravítreos previo a la vitrectomía diagnóstica induce lisis linfocítica ("citotoxicidad lítica inducida por esteroides") y puede negativizar transitoriamente la citología y el rendimiento de la PCR; idealmente suspender esteroides 2-3 semanas antes de la biopsia si es clínicamente tolerable.',
      'En pacientes ancianos con enfermedad intraocular bilateral refractaria que no toleran inyecciones intravítreas semanales prolongadas, la radioterapia ocular con haz externo a dosis bajas (30-36 Gy fraccionados) logra altas tasas de remisión local aunque con riesgo de retinopatía por radiación tardía.'
    ],
    landmarkTrials: [
      {
        name: 'IELSG32 (International Extranodal Lymphoma Study Group Trial 32)',
        year: '2016 (Lancet Haematology)',
        conclusion: 'Demostró que la adición de Rituximab y Tiotepa al régimen de Metotrexato a altas dosis y Citarabina (Régimen MATRix) incrementa significativamente la tasa de respuesta completa (49% vs 23%) y la supervivencia libre de progresión en linfoma primario del SNC.',
        fellowshipRelevance: 'Estableció el estándar de tratamiento quimioterápico sistémico para pacientes con compromiso SNC u ocular agresivo bilateral.'
      }
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer de 64 años es remitida por vitritis bilateral refractaria diagnosticada como uveítis posterior crónica, en tratamiento con prednisona oral sin mejoría sostenida. En el fondo de ojo se aprecian grumos vítreos en sábana e infiltrados sub-EPR amarillentos en polo posterior. ¿Cuál es su algoritmo de sospecha diagnóstica, cómo debe coordinarse la vitrectomía y qué biomarcadores específicos solicitará?',
        answer: 'Sospecha: Linfoma Vitreorretiniano Primario (VRL) / Síndrome Mascarada maligno del SNC. Algoritmo diagnóstico: 1) Suspender corticoterapia oral si es posible durante 2 semanas para evitar apoptosis tumoral. 2) Vitrectomía vía pars plana 25G diagnóstica: obtención de vítreo puro (1-2 mL) con tasa de corte baja y envío inmediato en fresco (<30 min) en medio celular adecuado. 3) Solicitar Citopatología urgente, Inmunocitoquímica (CD20, CD19), citometría de flujo para clonalidad de cadenas ligeras kappa/lambda, cociente de citocinas IL-10/IL-6 (>1.0 a favor de linfoma), y análisis molecular de la mutación somática MYD88 L265P mediante PCR digital. 4) Solicitar de forma prioritaria Resonancia Magnética cerebral con contraste de gadolinio y punción lumbar con citología para descartar afectación activa del parénquima cerebral o leptomeninges.',
        trap: 'Continuar aumentando los esteroides orales creyendo que es una uveítis autoinmune idiopática o realizar la vitrectomía diluyendo la muestra en varios litros de infusión salina sin avisar al patólogo.'
      }
    ]
  },

  // =========================================================================
  // 9. HEMANGIOMA COROIDEO CIRCUNSCRITO (CCH)
  // =========================================================================
  {
    id: 'deep-onco-hemangioma-coroideo-circunscrito',
    title: 'Hemangioma Coroideo Circunscrito (CCH): Diagnóstico Multimodal y Terapia Fotodinámica',
    subspecialtyId: 'oncologia',
    summary: 'Monografía completa y avanzada sobre el Hemangioma Coroideo Circunscrito (CCH), una neoplasia vascular hamartomatosa benigna solitaria de la coroides sin asociación sindrómica sistémica (a diferencia del hemangioma coroideo difuso del Síndrome de Sturge-Weber): localización preferente en el polo posterior dentro de 2 diámetros papilares de la fóvea/nervio óptico, desprendimiento seroso macular exudativo y edema macular cistoide crónico con metamorfopsia e hipermetropización hiperópicamente adquirida, hallazgos ecográficos de reflectividad interna ultra-alta (95-100% en modo A sin ángulo kappa) y ausencia de vaciamiento acústico en modo B, angiografía con fluoresceína (patrón precoz en encaje vascular con tinción tardía) e indocianina verde patognomónica (hiperfluorescencia precoz intensa <30 s seguida del fenómeno de lavado tardío "wash-out" a los 20-30 min), diagnóstico diferencial crucial con melanoma amelanótico y metástasis coroidea, y tratamiento de elección de primera línea con Terapia Fotodinámica (TFD / PDT con verteporfina estándar), logrando la resolución completa del líquido subretiniano y la oclusión vascular selectiva sin daño neurosensorial térmico.',
    definitionAndEpidemiology: 'El hemangioma coroideo circunscrito (CCH) es un tumor vascular benigno hamartomatoso congénito pero de diagnóstico tardío en la edad adulta (típicamente entre la tercera y quinta década de la vida, 30 a 55 años). Afecta a hombres y mujeres por igual y se presenta de forma esporádica y solitaria, sin afectación cutánea ni anomalías neurológicas sistémicas (a diferencia de la variante difusa asociada a la facomatosis encefalotrigeminal o Síndrome de Sturge-Weber). La mayoría de los casos son asintomáticos durante décadas hasta que el crecimiento lento del tumor o la alteración progresiva de la coriocapilar y el EPR suprayacente generan desprendimiento de retina seroso foveal, hipermetropización adquirida por sobreelevación macular o degeneración quística intrarretiniana.',
    anatomyAndPathophysiology: '1. Arquitectura Histopatológica y Vascular:\n   • Proliferación vascular benigna compuesta por grandes canales vasculares cavernosos o capilares dilatados de paredes delgadas tapizados por una monocapa de células endoteliales maduras sin atipia citológica ni mitosis.\n   • Los espacios vasculares están separados por delgados tabiques de tejido conectivo estromal intervascular con melanocitos coroideos comprimidos residuales.\n2. Mecanismo de Pérdida Visual y Descompensación Exudativa:\n   • Durante años, el EPR suprayacente mantiene la adherencia retiniana mediante bombas metabólicas activas.\n   • Con el tiempo, la cronicidad del flujo vascular de alto volumen induce atrofia del EPR, rotura de las uniones zonula occludens y fibrosis subretiniana.\n   • Se produce una trasudación serosa masiva de fluido libre de proteínas hacia el espacio subretiniano, acumulándose en la fóvea por gravedad y provocando desprendimiento neurosensorial exudativo macular y metamorfopsias severas.\n   • La sobreelevación física de la mácula acorta el eje anteroposterior óptico efectivo, induciendo un cambio refractivo hiperópico sintomático característico.',
    clinicalExamination: {
      biomicroscopy: 'Segmento anterior estrictamente normal sin rubeosis, neovascularización ni celularidad en cámara anterior. En casos crónicos descompensados con desprendimiento de retina exudativo masivo de larga data puede observarse hipertensión ocular secundaria o catarata sectorial posterior muy tardía.',
      fundus: 'Masa coroidea solitaria de color rojo-naranja salmón ("salmon-pink") a rojizo-anaranjado, de bordes redondeados u ovalados mal delimitados que se funden de forma suave y gradual con la coroides adyacente sana. Típicamente cupuliforme baja (grosor habitual de 1.5 a 4.0 mm; diámetro de base 6 a 12 mm), localizada en polo posterior temporal a la fóvea o yuxtapapilar. Es frecuente observar alteraciones pigmentarias superficiales del EPR y desprendimiento seroso retiniano foveal dependiente de la gravedad con edema macular cistoide suprayacente.',
      specialSigns: '• Tono Rojo-Naranja Salmón Típico: La coloración rojiza vascular similar a la coroides normal hace que con frecuencia pase desapercibido en el examen oftalmoscópico indirecto si no se ajusta la iluminación o se utiliza luz roja libre (verde aneritra, con la que el tumor prácticamente "desaparece" al ser una lesión puramente vascular profunda).\n• Signo del Lavado Tardío ("Wash-out" en ICGA): La indocianina verde llena intensamente los canales vasculares en segundos y se aclara ("lava") precozmente a los 20-30 minutos, quedando hipofluorescente en comparación con el estroma coroideo circundante teñido.\n• Cambio Refractivo Hiperópico Adquirido: Incremento repentino de 1.5 a 3.5 dioptrías de hipermetropía por elevación anterior del plano foveal.'
    },
    diagnosticWorkup: [
      {
        test: 'Ecografía Ocular Estandarizada Modo A y B',
        findings: 'Examen de máxima especificidad diagnóstica: En Modo A muestra una reflectividad acústica interna uniformemente muy alta (95-100% de altura de espícula) que se mantiene sin atenuación a lo largo de todo el espesor tumoral, con ángulo kappa plano (debido a las múltiples interfaces acústicas reflectivas creadas por las paredes de los vasos cavernosos llenos de hematíes). En Modo B muestra una masa acústicamente sólida de base amplia en cúpula suave, sin excavación coroidea, sin vaciamiento acústico y sin sombra acústica retrobulbar.'
      },
      {
        test: 'Angiografía con Verde de Indocianina (ICGA)',
        findings: 'Estándar angiográfico confirmatorio: En fase precoz (<30 segundos) muestra hiperfluorescencia masiva, rápida e intensa con repleción uniforme de toda la red vascular intrínseca antes que los vasos retinianos. En fases tardías (20-30 minutos) experimenta un marcado aclaramiento o "wash-out" tumoral, donde el hemangioma se torna relativamente hipofluorescente respecto al fondo coroideo circundante.'
      },
      {
        test: 'Angiografía con Fluoresceína (FAG)',
        findings: 'Fase arteriovenosa precoz con hiperfluorescencia en fino encaje vascular intrínseco. En fases tardías presenta hiperfluorescencia confluente por difusión ("leakage") del colorante a través de los espacios vasculares con tinción del estroma y del fluido subretiniano o acumulación en patrón petaloide de edema macular cistoide.'
      },
      {
        test: 'Tomografía de Coherencia Óptica de Profundidad Mejorada (EDI-OCT / SS-OCT)',
        findings: 'Elevación coroidea regular en cúpula suave, adelgazamiento y compresión de la coriocapilar suprayacente, desprendimiento de retina neurosensorial foveal con fluido subretiniano hiporreflectivo y degeneración quística intrarretiniana crónica.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Melanoma Coroideo Amelanótico', distinction: 'Reflectividad acústica interna baja a media (<60% en modo A) con vaciamiento acústico en modo B; en ICG no presenta el fenómeno de "wash-out" tardío rápido y suele presentar pigmento naranja en FAF.' },
      { condition: 'Metástasis Coroidea (ej. mama, pulmón)', distinction: 'Masa de color amarillo-cremoso más lobulada, frecuentemente multifocal o bilateral, reflectividad interna ecográfica moderada a alta (60-80%) irregular, y desprendimiento seroso desproporcionadamente masivo respecto a su altura.' },
      { condition: 'Coriorretinopatía Serosa Central Crónica', distinction: 'Engrosamiento paquicoroideo difuso sin masa ecográfica focal sobreelevada >1.5 mm, con hiperpermeabilidad focal en ICG y fuga puntual ("en chimenea" o mancha de tinta) en FAG.' }
    ],
    steppedManagement: {
      medical: '• Tumores Asintomáticos Extra-Maculares sin Líquido Subretiniano ni Compromiso Foveal:\n  - Vigilancia periódica con retinografía, SD-OCT y ecografía cada 6 a 12 meses sin intervención activa.\n• Manejo Médico Coadyuvante de Secuelas:\n  - En casos con edema macular cistoide persistente post-TFD: Inyecciones intravítreas de anti-VEGF (Aflibercept/Ranibizumab) o implante de dexametasona intravítreo (Ozurdex) como terapia sinérgica reductora de la permeabilidad vascular residual.',
      surgical: '• Terapia Fotodinámica (TFD / PDT) con Verteporfina - Estándar de Oro de Elección:\n  - Parámetros: Verteporfina IV 6 mg/m² infundida durante 10 minutos, seguida a los 15 minutos de la aplicación de láser diodo no térmico a 689 nm con fluencia estándar (50 J/cm², intensidad 600 mW/cm², duración 83 segundos). Se cubre la base tumoral completa con un margen de seguridad de 500 µm.\n  - Mecanismo: Los radicales libres de oxígeno y el oxígeno singlete generados por la verteporfina fotoactivada inducen daño selectivo del endotelio vascular con trombosis intraluminal y oclusión permanente de los canales vasculares cavernosos sin fotocoagular ni destruir los fotorreceptores neurosensoriales suprayacentes.\n  - Resultados: Reabsorción completa del fluido subretiniano en >90-95% de los ojos tratados en 4 a 8 semanas, aplanamiento o retracción tumoral significativa y recuperación visual estable.\n• Alternativas en Tumores Gigantes (>4-5 mm grosor) Refractarios a TFD:\n  - Braquiterapia epiescleral con placa de I-125 o radioterapia con haz de protones a dosis bajas (20-25 Gy) si la TFD repetida no logra controlar la exudación masiva.'
    },
    clinicalApplicationPractical: '1. Ante una lesión solitaria rojo-naranja en polo posterior con líquido subretiniano, la ecografía modo A es el discriminador clínico más rápido: si la reflectividad interna es del 100% plana y sin atenuación, es virtualmente diagnóstico de hemangioma coroideo.\n2. La Terapia Fotodinámica (PDT) revolucionó el pronóstico del CCH: antes se empleaba fotocoagulación con láser de argón, que generaba escotomas permanentes destructivos sobre la mácula. La PDT es no destructiva para la retina suprayacente y logra el secado completo del espacio subretiniano.\n3. La ICG con su signo de "wash-out" tardío diferencia con absoluta seguridad un hemangioma coroideo de un melanoma amelanótico o una metástasis en casos dudosos.',
    highYieldPearl: 'Firma Angiográfica y Ecográfica Patognomónica: La combinación de una reflectividad acústica interna ultra-alta del 100% en Modo A ecográfico y el fenómeno de lavado tardío ("wash-out") en la angiografía con verde de indocianina a los 20-30 minutos confirma el diagnóstico de Hemangioma Coroideo Circunscrito y descarta de forma categórica el melanoma coroideo amelanótico.',
    keyDrugs: [
      { name: 'Verteporfina (Visudyne)', dose: '6 mg/m² superficie corporal IV en infusión de 10 minutos', warning: 'Fotosensibilidad cutánea y retiniana severa durante 48 horas post-infusión; el paciente debe evitar la exposición a la luz solar directa o lámparas halógenas.' },
      { name: 'Aflibercept Intravítreo', dose: '2.0 mg / 0.05 mL intravítreo', warning: 'Uso adyuvante en edema macular cistoide crónico secundario con respuesta exudativa incompleta tras PDT.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Reflectividad Ecográfica Modo A: 100% vs Baja',
        category: 'Perla de Examen Oral',
        description: 'El hemangioma coroideo presenta espículas internas de reflectividad ultra-alta (95-100%) por sus abundantes paredes endoteliales vasculares reflectivas. En contraste, el melanoma uveal presenta reflectividad acústica baja (<60%) por su celularidad uniforme y homogénea.',
        trapToAvoid: 'Describir vaciamiento acústico o sombra en champiñón para un hemangioma coroideo.'
      },
      {
        title: 'Fenómeno de Wash-out en ICG',
        category: 'Angiografía Diagnóstica',
        description: 'El llenado ultra-rápido en fases muy tempranas (<30 s) seguido de un aclaramiento o lavado ("wash-out") a los 20-30 minutos donde la lesión queda hipofluorescente con halo es el signo patognomónico de CCH en ICG.',
        trapToAvoid: 'Confundir el comportamiento en ICG con el melanoma coroideo, que muestra hipofluorescencia precoz y tinción intrínseca tardía irregular.'
      },
      {
        title: 'Tratamiento de Elección: PDT con Verteporfina',
        category: 'Terapéutica Moderna',
        description: 'La Terapia Fotodinámica con fluencia estándar es el tratamiento de primera línea de elección. La fotocoagulación con láser térmico directo de argón está obsoleta y formalmente contraindicada en el área foveal.',
        trapToAvoid: 'Recomendar fotocoagulación con argón o radioterapia como primera línea en hemangiomas foveales pequeños o medianos.'
      }
    ],
    fellowshipKeyPoints: [
      'La variante circunscrita (CCH) no se asocia al Síndrome de Sturge-Weber ni a nevus flammeus trigeminal facial; cuando un paciente presenta hemangioma coroideo difuso (en "salsa de tomate") y glaucoma ipsilateral temprano, se trata de una facomatosis de Sturge-Weber (mutación somática en GNAQ R183Q).',
      'Un solo tratamiento con PDT suele bastar para conseguir la reabsorción del líquido subretiniano en >85% de los casos; si persiste exudación foveal al tercer mes post-tratamiento, se puede realizar una segunda sesión con parámetros estándar con total seguridad.',
      'El cambio refractivo hiperópico adquirido en un paciente de 40 años que acude por pérdida de visión cercana no siempre es presbicia simple; debe examinarse el polo posterior para descartar una masa coroidea sobreelevada foveal como el CCH.'
    ],
    landmarkTrials: [
      {
        name: 'Schmidt-Erfurth et al. / Jurklies et al. Multi-Center PDT for CCH',
        year: '2002-2004 (Ophthalmology & Retina)',
        conclusion: 'Demostró que la Terapia Fotodinámica con Verteporfina produce el cese de la exudación vascular y la resolución completa del desprendimiento seroso macular en más del 90% de los pacientes con hemangioma coroideo circunscrito, con estabilización o mejoría de la agudeza visual sin daño de la retina neurosensorial.',
        fellowshipRelevance: 'Estableció a la PDT como el tratamiento estándar de oro universal de primera línea para el hemangioma coroideo circunscrito sintomático.'
      }
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 42 años acude por metamorfopsia y visión borrosa en su ojo derecho de 3 meses de evolución, habiendo notado que su graduación se volvió más hiperópica. La agudeza visual es 20/60. En el fondo de ojo se aprecia una lesión sobreelevada de color rojo-anaranjado salmón de 3 mm de espesor temporal a la fóvea con líquido subretiniano que compromete la mácula. ¿Cuáles son los dos diagnósticos diferenciales prioritarios, qué dos pruebas complementarias confirmarán el diagnóstico exacto y cuál es el tratamiento de elección?',
        answer: 'Diagnósticos diferenciales prioritarios: 1) Hemangioma Coroideo Circunscrito (CCH) vs 2) Melanoma Coroideo Amelanótico (también metástasis coroidea solitaria). Pruebas confirmatorias: 1) Ecografía ocular estandarizada Modo A: Si muestra una reflectividad acústica interna ultra-alta del 100% plana sin atenuación confirma hemangioma coroideo (el melanoma mostraría reflectividad baja <60% con ángulo descendente). 2) Angiografía con verde de indocianina (ICGA): Mostrará hiperfluorescencia precoz intensa en los primeros 30 segundos seguida del fenómeno patognomónico de aclaramiento o lavado tardío ("wash-out") a los 25 minutos. Tratamiento de elección: Terapia Fotodinámica (PDT) con Verteporfina intravenosa (6 mg/m²) a fluencia estándar (50 J/cm², 83 s, 689 nm), la cual produce trombosis selectiva de los canales vasculares y reabsorción completa del líquido subretiniano preservando la arquitectura neurosensorial macular.',
        trap: 'Confundirlo con un melanoma amelanótico e indicar innecesariamente una enucleación o braquiterapia con radiación alta, o aplicar fotocoagulación con láser térmico directo de argón destruyendo los fotorreceptores foveales.'
      }
    ]
  }
];

