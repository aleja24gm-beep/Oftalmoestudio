import { TopicDeepDive } from '../types/ophthalmology';

export const CORNEA_TOPICS: TopicDeepDive[] = [
  // =========================================================================
  // 1. OJO SECO Y ENFERMEDAD DE LA SUPERFICIE OCULAR
  // =========================================================================
  {
    id: 'deep-cornea-ojo-seco-superficie',
    title: 'Ojo Seco y Enfermedad de la Superficie Ocular: TFOS DEWS II, DGM, Blefaritis, Síndrome de Sjögren y Toxicidad por Conservantes',
    subspecialtyId: 'cornea',
    summary: 'Monografía exhaustiva sobre enfermedad de ojo seco (DED) basada en el consenso internacional TFOS DEWS II: subtipos fisiopatológicos (deficiencia acuosa por Sjögren y enfermedades autoinmunes vs evaporativo por disfunción de glándulas de Meibomio / meibomianitis y blefaritis), biomarcadores cuantitativos (osmolaridad lagrimal, meniscometría, tiempo de rotura lagrimal no invasivo NIKBUT, tinción con verde de lisamina / fluoresceína en escala de Oxford), toxicidad corneal por conservantes (cloruro de benzalconio / BAK) y algoritmo terapéutico escalonado (lubricantes sin conservantes, ciclosporina 0.05-0.1%, lifitegrast, tapones lagrimales y suero autólogo al 20-50%).',
    definitionAndEpidemiology: 'Trastorno multifactorial de la superficie ocular caracterizado por una pérdida de la homeostasis de la película lagrimal y acompañado de síntomas oculares, en el que la inestabilidad de la película lagrimal, la hiperosmolaridad, la inflamación y el daño de la superficie ocular y las anomalías neurosensoriales desempeñan funciones etiológicas (definición del TFOS DEWS II, 2017). Prevalencia global del 5% al 50% según criterios diagnósticos, marcadamente superior en mujeres posmenopáusicas y usuarios crónicos de pantallas digitales o lentes de contacto.',
    anatomyAndPathophysiology: '1. El Círculo Vicioso del Ojo Seco (TFOS DEWS II):\n   • Desencadenante primario: Disminución de la secreción lagrimal (deficiencia acuosa) o evaporación excesiva por déficit de la capa lipídica (deficiencia evaporativa por DGM).\n   • Hiperosmolaridad de la película lagrimal (>308 mOsm/L o diferencia interocular >8 mOsm/L).\n   • Estrés osmótico en células epiteliales corneales y conjuntivales -> activación de vías de señalización intracelular (MAP kinasa p38, NF-kB).\n   • Liberación masiva de citocinas proinflamatorias (IL-1beta, TNF-alfa, IL-6) y metaloproteinasas de matriz (MMP-9).\n   • Muerte celular por apoptosis de enterocitos y células caliciformes conjuntivales con pérdida de mucinas hidrofílicas de membrana (MUC1, MUC4, MUC16).\n   • Inestabilidad de la película lagrimal con rotura precoz (TBUT <10 s), perpetuando la hiperosmolaridad y el daño epitelial.\n2. Subtipos Clínicos y Etiologías Sistémicas:\n   • Deficiencia Acuosa (ADDE):\n     a) Síndrome de Sjögren (primario o secundario a Artritis Reumatoide o Lupus): Destrucción autoinmune mediada por linfocitos T de los acinos de las glándulas lagrimales y salivales; presencia de autoanticuerpos Anti-Ro/SSA y Anti-La/SSB.\n     b) No Sjögren: Senilidad glándular, deficiencia androgénica, fármacos sistémicos (antihistamínicos, betabloqueantes, antidepresivos tricíclicos, diuréticos).\n     c) Tiroidopatía (Orbitopatía de Graves): Aumento del área de apertura palpebral por proptosis y retracción, con evaporación masiva asociada.\n     d) Deficiencia de Vitamina A (Xeroftalmía): Metaplasia escamosa con pérdida total de células caliciformes, manchas espumosas de Bitot conjuntivales y queratomalacia estromal.\n   • Deficiencia Evaporativa (EDE):\n     a) Disfunción de Glándulas de Meibomio (DGM) y Meibomianitis: Obstrucción hiperqueratósica de los orificios glandulares y alteración en la composición lipídica meibum (ácidos grasos insaturados polares alterados) que no previene la evaporación.\n     b) Blefaritis Anterior (estafilocócica con collaretes cilíndricos de Demodex folliculorum y seborreica) y Blefaritis Posterior.\n     c) Toxicidad por Colirios y Conservantes: El Cloruro de Benzalconio (BAK) es un detergente de amonio cuaternario que lisa las membranas celulares epiteliales, destruye la microvellosidades corneales y desencadena queratitis punteada difusa superficial y ojo seco iatrogénico grave en pacientes con glaucoma bajo tratamiento hipotensor crónico.',
    clinicalExamination: {
      biomicroscopy: 'Menisco lagrimal inferior adelgazado (<0.2 mm medible con corte fino), detritos mucosos flotantes, queratopatía punteada superficial (SPK) con tinción positiva a fluoresceína sódica (defecto de uniones intercelulares) y verde de lisamina / rosa de Bengala (células epiteliales desvitalizadas sin glicocálix). Examen de bordes palpebrales: telangiectasias marginales, tapones de meibum en orificios glandulares, expresión meibomiana de calidad anormal (aceite turbio o pasta espesa en "pasta de dientes"), collaretes ciliares cilíndricos característicos de infestación por Demodex.',
      fundus: 'Normal; en pacientes con artritis reumatoide o vasculitis sistémica, descartar vasculitis retiniana o escleritis posterior asociada.',
      specialSigns: '• Test de Schirmer I (sin anestesia): Mide la secreción lagrimal total (basal + refleja); normal >10 mm a los 5 minutos (patológico <=5 mm en 5 min, típico en Sjögren).\n• Test de Schirmer II (con anestesia tópica y estimulación nasal con hisopo): Mide la reserva refleja lagrimal.\n• Tiempo de Rotura de la Película Lagrimal (TBUT): Instilación de fluoresceína sin conservante; tiempo desde el último parpadeo hasta la aparición de la primera zona seca negra no teñida en la córnea (Normal: >10 segundos; Anormal: <10 segundos).\n• Manchas de Bitot: Placas blanco-grisáceas triangulares de aspecto espumoso en la conjuntiva bulbar temporal en xeroftalmía por déficit de vitamina A.'
    },
    diagnosticWorkup: [
      {
        test: 'Osmolaridad de la Película Lagrimal (TearLab System)',
        findings: 'Prueba no invasiva de referencia del TFOS DEWS II: Osmolaridad normal <=300 mOsm/L. Valor >=308 mOsm/L o una diferencia interocular >8 mOsm/L confirma pérdida de homeostasis y ojo seco clínicamente significativo.'
      },
      {
        test: 'Detección Rápida de MMP-9 en Lágrima (InflammaDry)',
        findings: 'Inmunoensayo en punto de atención (Point-of-Care) que detecta niveles de Metaloproteinasa de Matriz 9 (MMP-9) superiores a 40 ng/mL, confirmando inflamación activa de la superficie ocular e indicando necesidad de corticoterapia tópica o ciclosporina.'
      },
      {
        test: 'Meibografía Infrarroja No Invasiva',
        findings: 'Visualización de la arquitectura glandular de Meibomio con cuantificación del porcentaje de pérdida o atrofia acinar (meiboscore 0 a 3).'
      },
      {
        test: 'Panel Serológico de Enfermedades Autoinmunes (Sjögren / Artritis Reumatoide)',
        findings: 'Anticuerpos Anti-Ro/SSA y Anti-La/SSB (positivos en Sjögren primario), Factor Reumatoide (FR) y anticuerpos anti-péptidos citrulinados (anti-CCP).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Toxicidad Farmacológica Ocular por BAK (Cloruro de Benzalconio)', distinction: 'Queratopatía punteada confluente tóxica sin componente inflamatorio primario que desaparece de 2 a 4 semanas tras retirar los colirios conservados con BAK y cambiar a fórmulas "preservative-free".' },
      { condition: 'Queratoconjuntivitis Límbica Superior de Theodore (SLK)', distinction: 'Inflamación del limbo superior con hiperemia conjuntival bulbar superior marcada, queratinización límbica y filamentos epiteliales superiores, fuertemente asociada a disfunción tiroidea.' },
      { condition: 'Queratopatía Neurotrófica (NK)', distinction: 'Hipoestesia o anestesia corneal demostrable con el estesiómetro de Cochet-Bonnet, con defecto epitelial de bordes lisos enrollados y escasa sintomatología subjetiva de dolor.' }
    ],
    steppedManagement: {
      medical: '• Algoritmo Terapéutico Escalonado TFOS DEWS II:\n  1) Paso 1 (Medidas Ambientales y Básicas):\n     - Modificación del entorno (humidificadores, descansos de pantalla regla 20-20-20).\n     - Higiene de párpados: Compresas calientes (40-45ºC durante 10 minutos) seguidas de masaje palpebral vertical + limpiadores con Aceite de Árbol de Té (Tea Tree Oil al 50% o Terpinen-4-ol) si hay Demodex.\n     - Lágrimas artificiales y sustitutos lagrimales RIGUROSAMENTE LIBRES DE CONSERVANTES (Ácido hialurónico 0.15-0.4%, Trehalosa, Carboximetilcelulosa).\n     - Suplementación oral con ácidos grasos esenciales Omega-3 (EPA/DHA 1000-2000 mg/día).\n  2) Paso 2 (Inflamación Persistente y MGD Severa):\n     - Corticoides tópicos de baja penetración (Loteprednol etabonato 0.5% o Fluorometolona 0.1%) en ciclos cortos de 2 a 4 semanas para "apagar el fuego" inflamatorio.\n     - Inmunomoduladores tópicos de uso crónico: Ciclosporina A al 0.05% o 0.1% (Restasis, Ikervis, Cequa) cada 12 o 24 horas, o Lifitegrast 5% (antagonista de LFA-1).\n     - Doxiciclina oral a dosis sub-antimicrobiana (50 a 100 mg/día durante 2 a 3 meses) por su potente inhibición de MMP-9 y lipasas bacterianas en meibomianitis.\n     - Oclusión de puntos lagrimales con tapones de silicona (punctum plugs) temporales o permanentes (SOLO tras haber controlado la inflamación de la superficie ocular).\n  3) Paso 3 (Casos Severos y Queratopatía Filamentosa):\n     - Suero Autólogo al 20% a 50% libre de conservantes (aporta factores de crecimiento epitelial EGF, NGF, TGF-beta, vitamina A y fibronectina).\n     - Lentes de contacto terapéuticos esclerales de gran diámetro (PROSE / Vaulting escleral que baña continuamente la córnea en reservorio líquido salino).\n  4) Paso 4 (Refractario Terminal): Membrana amniótica criopreservada (ProKera), oclusión quirúrgica permanente de puntos lagrimales con electrocauterio, o tarsorrafia lateral.',
      surgical: '• Tarsorrafia lateral o medial temporal para reducir el área de hendidura palpebral evaporativa en ojos secos neurotróficos o tiroidopatías con queratopatía por exposición refractaria.'
    },
    clinicalApplicationPractical: '1. NUNCA colocar tapones lagrimales (punctum plugs) en un ojo activamente inflamado con MMP-9 elevado o tinción masiva con lisamina; retener lágrimas con alta concentración de citocinas inflamatorias concentradas empeorará dramáticamente la queratopatía.\n2. Pacientes con glaucoma en tratamiento crónico múltiple: Si presentan ardor, ojo rojo y queratitis punteada, la causa más común no es el fallo del glaucoma sino la toxicidad por Cloruro de Benzalconio (BAK); cambiar inmediatamente a colirios monodosis libres de conservantes.\n3. Diferenciar Schirmer I de Schirmer II: Schirmer I sin anestesia evalúa la secreción lagrimal total refleja; si sale <5 mm, confirma hiposecreción severa de glándula lagrimal típica de Sjögren.',
    highYieldPearl: 'TFOS DEWS II Diagnostic Pearl: Una osmolaridad lagrimal >=308 mOsm/L o una diferencia interocular >8 mOsm/L es el biomarcador objetivo individual más fiable de pérdida de homeostasis en ojo seco, superior a las pruebas de Schirmer convencionales.',
    keyDrugs: [
      { name: 'Ciclosporina A tópica 0.05% - 0.1%', dose: '1 gota cada 12 a 24 horas durante mínimo 6 meses', warning: 'Inhibidor de calcineurina que estimula la producción lagrimal endógena; ardor inicial en primeras semanas.' },
      { name: 'Doxiciclina oral', dose: '50 a 100 mg diarios por 6 a 12 semanas', warning: 'Efecto antiinflamatorio inhibidor de MMP-9 y lipasas en DGM; fotosensibilidad y molestias gástricas.' },
      { name: 'Suero autólogo 20%', dose: '1 gota 4 a 6 veces al día', warning: 'Preparación hemoderivada estéril congelada; excelente para queratopatía neurotrófica y Sjögren severo.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Criterio de Schirmer Patológico en Síndrome de Sjögren',
        category: 'Cifra Clave de Corte',
        description: 'En los criterios clasificatorios ACR/EULAR para Síndrome de Sjögren primario: Test de Schirmer I sin anestesia <= 5 mm en 5 minutos en al menos un ojo, asociado a puntuación de tinción ocular (OSS) >= 5 con verde de lisamina / fluoresceína.',
        trapToAvoid: 'Considerar normal un Schirmer de 6 a 10 mm en pacientes sintomáticos sin valorar la tinción de la superficie con lisamina.'
      },
      {
        title: 'La Trampa de los Tapones Lagrimales en Ojo Inflamado',
        category: 'Trampa de Tribunal',
        description: 'Pregunta canónica de examen: "¿Cuándo está contraindicado colocar tapones de punto lagrimal en un paciente con ojo seco severo?". Respuesta: En presencia de inflamación activa de la superficie ocular no tratada (MMP-9 elevado, queratopatía severa activa). Ocluir los puntos retiene las citocinas proinflamatorias en contacto continuo con el epitelio corneal.',
        trapToAvoid: 'Colocar tapones de entrada como primera medida sin haber prescrito antiinflamatorios (esteroides o ciclosporina) previamente.'
      },
      {
        title: 'Diferencia en Tinción: Fluoresceína vs Verde de Lisamina',
        category: 'Asociación Patognomónica',
        description: '• Fluoresceína sódica: Tiñe los defectos epiteliales corneales y espacios intercelulares donde se han roto las uniones ocluyentes.\n• Verde de lisamina y Rosa de Bengala: Tiñen selectivamente células conjuntivales y corneales epiteliales desvitalizadas o que han perdido la capa protectora de mucinas (glicocálix).',
        trapToAvoid: 'Evaluar la conjuntiva únicamente con fluoresceína (la fluoresceína apenas se visualiza en la esclera blanca; el verde de lisamina es mandatorio para conjuntiva).'
      }
    ],
    fellowshipKeyPoints: [
      'Cloruro de Benzalconio (BAK): Es el conservante oftálmico más tóxico; a concentraciones tan bajas como 0.005% induce desprendimiento de uniones estrechas epiteliales (zonula occludens), apoptosis celular y reducción en el número de células caliciformes en biopsias conjuntivales.',
      'Meibomian Gland Probing (Sondaje de Maskin): Canulación mecánica de los conductos de las glándulas de Meibomio con microcánulas de 1 a 4 mm para liberar la fibrosis intraductal en MGD obstructiva grave refractaria.',
      'Lentes Esclerales en Ojo Seco: El apoyo escleral evita tocar la córnea ultrasensible y crea un reservorio líquido estéril que promueve la curación de defectos epiteliales persistentes en pacientes con Sjögren y enfermedad injerto contra huésped (EICH).'
    ],
    landmarkTrials: [
      {
        name: 'TFOS DEWS II (Tear Film & Ocular Surface Society Dry Eye Workshop II)',
        year: '2017 (Ocul Surf)',
        conclusion: 'Redefinió el ojo seco como una enfermedad inflamatoria y neurosensorial multifactorial; protocolizó los árboles diagnósticos y de tratamiento escalonado en 4 pasos basados en evidencia.',
        fellowshipRelevance: 'Guía de referencia mundial obligatoria en exámenes de acreditación y práctica clínica.'
      }
    ],
    histopathologyAndGenetics: 'En biopsia de glándula salival menor labial en Sjögren: Focos de infiltración linfocítica periductal con >=50 células mononucleares por 4 mm2 de parénquima glandular (Focus Score >=1). En superficie ocular: Metaplasia escamosa no queratinizante a queratinizante con pérdida de células caliciformes productoras de MUC5AC.',
    surgicalPearls: [
      'Al aplicar tapones de colágeno temporales reabsorbibles: Insertar el tapón profundamente en el canalículo vertical (debe quedar sumergido); a diferencia de los de silicona que deben conservar el collarete externo visible en el reborde del meato lagrimal.',
      'En tarsorrafia lateral temporal para ojo seco neurotrófico: Desepitelizar cuidadosamente los márgenes palpebrales anterior y posterior a la línea gris a lo largo de 4-6 mm antes de pasar suturas de colchonero con almohadillas de bolsters para asegurar una fusión fibrosa firme que no se abra precozmente.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 56 años con Artritis Reumatoide seropositiva y sequedad bucal consulta por sensación constante de arenilla, fotofobia y visión borrosa fluctuante. La exploración con lámpara de hendidura muestra un menisco lagrimal casi ausente, TBUT de 3 segundos y tinción marcada con verde de lisamina en conjuntiva y córnea inferior (grado 4 en escala de Oxford). El test de Schirmer I es de 2 mm a los 5 minutos en ambos ojos. ¿Cuál es el diagnóstico de sospecha primario, qué prueba serológica y biopsia solicitará para confirmarlo, y cuál es el manejo médico integral inmediato?',
        answer: '1) Diagnóstico de sospecha: Síndrome de Sjögren Secundario a Artritis Reumatoide con Ojo Seco por Deficiencia Acuosa Severo (TFOS DEWS II Grado 3-4).\n2) Confirmación diagnóstica: Solicitar autoanticuerpos séricos específicos Anti-Ro/SSA y Anti-La/SSB, Factor Reumatoide y anticuerpos anti-CCP. Para confirmación definitiva según criterios ACR/EULAR, solicitar Biopsia de glándulas salivales menores del labio inferior para cuantificar el Focus Score (>=1 foco de 50 linfocitos/4 mm2).\n3) Manejo médico integral:\n   a) Lágrimas artificiales libres de conservantes (Ácido Hialurónico al 0.4% o Trehalosa) cada 1-2 horas.\n   b) Ciclo corto de esteroide tópico de superficie (Loteprednol 0.5% cada 8 horas por 3 semanas) para apagar la inflamación epitelial.\n   c) Iniciar de inmediato Ciclosporina A tópica al 0.1% cada 12-24 horas o Lifitegrast 5% para tratamiento inmunomodulador a largo plazo.\n   d) Pomada lubricante nocturna sin conservantes y gafas de cámara húmeda.\n   e) NO colocar tapones lagrimales en este momento; esperar a controlar la inflamación activa de la superficie antes de plantear oclusión de puntos o suero autólogo al 20%.',
        trap: 'Colocar tapones de punto lagrimal en la primera consulta con inflamación ocular severa activa.'
      }
    ]
  },

  // =========================================================================
  // 2. QUERATITIS INFECCIOSA: BACTERIANA, VIRAL, FÚNGICA Y ACANTHAMOEBA
  // =========================================================================
  {
    id: 'deep-cornea-queratitis-infecciosa-algoritmo',
    title: 'Queratitis Infecciosa: Bacteriana, Viral, Fúngica y por Acanthamoeba — Diagnóstico Microbiológico y Protocolo Antimicrobiano',
    subspecialtyId: 'cornea',
    summary: 'Monografía integral de urgencia sobre el algoritmo diagnóstico y terapéutico de las úlceras e infecciones corneales: protocolo estricto de raspado corneal con siembra en medios específicos (Agar sangre, chocolate, Sabouraud, caldo tioglicolato y agar no nutritivo con E. coli), tinciones de urgencia (Gram, Giemsa, Blanco de Calcoflúor y KOH), espectro microbiano diferencial (bacterias virulentas como Pseudomonas y S. aureus vs hongos filamentosos por Fusarium/Aspergillus y levaduras por Candida vs protozoos por Acanthamoeba vs queratitis herpética), pautas de antibióticos fortificados (Vancomicina 50 mg/mL + Ceftazidima 50 mg/mL), natamicina tópica al 5% (ensayo MUTT I), biguanidas (PHMB / Clorhexidina al 0.02%) y análisis crítico del ensayo SCUT para corticoides coadyuvantes.',
    definitionAndEpidemiology: 'La queratitis infecciosa es una de las principales causas de pérdida visual severa y ceguera monocular en todo el mundo. Constituye una emergencia oftalmológica donde el retraso diagnóstico o el inicio empírico inadecuado de corticoides tópicos puede conducir a necrosis estromal (melting), descemetocele y perforación ocular. Los factores de riesgo predominantes varían según el patógeno: uso de lentes de contacto blandos (Pseudomonas, Acanthamoeba), traumatismo vegetal agrícola (hongos filamentosos), inmunosupresión o cirugía previa (Candida, bacterias oportunistas) y reactivación viral neurotrófica (VHS, VVZ).',
    anatomyAndPathophysiology: '1. Pérdida de la Barrera Epitelial y Adhesión Microbiana:\n   • El epitelio corneal intacto resiste a la inmensa mayoría de patógenos (excepciones que atraviesan epitelio intacto: Neisseria gonorrhoeae, Corynebacterium diphtheriae, Listeria monocytogenes y Haemophilus aegyptius).\n   • Tras una microerosión o hipoxia por lente de contacto, las bacterias y protozoos se unen al estroma desprotegido mediante adhesinas, fimbrias o receptores de manosa.\n2. Mecanismos de Daño Tisular por Etiología:\n   • Queratitis Bacteriana: Pseudomonas aeruginosa secreta exotoxina A, elastasas y proteasas que destruyen la matriz estromal en horas, atrayendo una infiltración masiva de neutrófilos del hospedador que liberan metaloproteinasas (MMP-2 y MMP-9), provocando necrosis licuefactiva fulminante.\n   • Queratitis Fúngica: Las hifas de hongos filamentosos (Fusarium, Aspergillus) penetran profundamente a través de las laminillas de colágeno e incluso atraviesan la membrana de Descemet intacta hacia la cámara anterior sin necesidad de perforación franca macroscópica.\n   • Queratitis por Acanthamoeba: Los trofozoítos se transforman en quistes altamente resistentes de doble pared compuestos por celulosa que se adhieren a los nervios corneales estromales, provocando una neuritis radial exquisitamente dolorosa y necrosis en anillo.\n   • Queratitis Herpética Viral: Replicación activa en células epiteliales (lisis celular que forma la dendrita con bulbos terminales) o respuesta inmunológica celular retardada contra antígenos virales en el estroma (queratitis disciforme / estromal inmunitaria).',
    clinicalExamination: {
      biomicroscopy: '• Bacteriana: Infiltrado denso blanco-amarillento focal o extenso con edema estromal periférico, defecto epitelial suprayacente, hipopion en cámara anterior y secreción mucopurulenta (verdosa adherente en Pseudomonas).\n• Fúngica: Infiltrado grisáceo-blanquecino con BORDES DESHILACHADOS O PLUMOSOS ("feathery borders"), lesiones satélite estromales independientes alrededor de la lesión principal, hipopion denso convexo viscoso y anillo inmunológico de Wessely.\n• Acanthamoeba: Infiltrados perineurales estromales radiales (perineuritis radial), microquistes epiteliales, dolor desproporcionado a los hallazgos clínicos, e infiltrado anular tardío en 360 grados.\n• Herpética: Úlcera dendrítica epitelial clásica lineal ramificada con bulbos terminales ("terminal bulbs") que captan fluoresceína en el centro y rosa de Bengala en los bordes.',
      fundus: 'Frecuentemente opacificado; en toda úlcera corneal severa con hipopion o perforación, solicitar Ecografía ocular modo B urgente para descartar endoftalmitis infecciosa secundaria.',
      specialSigns: '• Test de Seidel positivo con fluoresceína al 2%: Revela microperforación estromal activa.\n• Hipoestesia corneal unilateral marcada: Signo cardinal de infección herpética neurotrófica.'
    },
    diagnosticWorkup: [
      {
        test: 'Raspado Corneal Microbiológico de Urgencia (Protocolo Universal)',
        findings: 'Toma bajo lámpara de hendidura con anestésico sin conservantes (Proparacaína 0.5%) usando hoja de bisturí nº 15 o espátula de Kimura. Debe rasparse la base activa y los bordes profundos del infiltrado estromal.'
      },
      {
        test: 'Batería de Tinciones Rápidas Inmediatas (Resultados en <30 min)',
        findings: '• Tinción de Gram: Diferencia cocos Gram positivos (S. aureus, S. pneumoniae) de bacilos Gram negativos (Pseudomonas).\n• Tinción de Giemsa: Visualiza hifas fúngicas, bacterias y amebas.\n• Blanco de Calcoflúor (Calcofluor White) con microscopio de fluorescencia: Se une a la quitina fúngica y celulosa de los quistes de Acanthamoeba arrojando fluorescencia blanco-azulada brillante.\n• KOH al 10-20%: Disuelve la queratina celular dejando ver las hifas fúngicas septadas o levaduras.'
      },
      {
        test: 'Siembra en Medios de Cultivo con Técnica en "C"',
        findings: '• Agar Sangre 5%: Bacterias aerobias a 35ºC.\n• Agar Chocolate: Haemophilus y Neisseria a 35ºC con 5% CO2.\n• Agar Sabouraud Dextrosa sin cicloheximida: Hongos a 25-30ºC.\n• Caldo Tioglicolato: Bacterias anaerobias.\n• Agar No Nutritivo (NNA) con recubrimiento de Escherichia coli: Cultivo específico para Acanthamoeba (las amebas consumen la bacteria creando surcos de fagocitosis visibles a la microscopía).'
      },
      {
        test: 'Microscopía Confocal In Vivo (HRT3 / RCM)',
        findings: 'Técnica no invasiva que visualiza en tiempo real quistes amebianos esféricos altamente reflectivos de doble pared (10-25 µm) o hifas fúngicas septadas hiperreflectivas ramificadas a 45 grados.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Queratitis Marginal por Hipersensibilidad Estafilocócica (Infiltrados Catarrates)', distinction: 'Infiltrados estromales múltiples pequeños cerca del limbo separados del mismo por un INTERVALO CORNEAL CLARO LÚCIDO, epitelio intacto o defecto mínimo, sin hipopion, asociados a blefaritis crónica; responden rápidamente a esteroides tópicos suaves.' },
      { condition: 'Queratitis Ulcerativa Periférica (PUK)', distinction: 'Adelgazamiento corneal en semiluna en la periferia límbica asociado a escleritis necrosante y enfermedades autoinmunes sistémicas (Artritis Reumatoide, Granulomatosis con Poliangeítis GPA) con cultivos bacterianos estériles.' },
      { condition: 'Queratopatía Tóxica por Abuso de Anestésicos Tópicos', distinction: 'Infiltrado anular estromal central denso que remeda queratitis por Acanthamoeba, con antecedente de autoadministración repetida de proparacaína o tetracaína para aliviar dolor ocular.' }
    ],
    steppedManagement: {
      medical: '• Queratitis Bacteriana Grave (Infiltrado >2 mm, central o con hipopion):\n  - Terapia de Choque con Colirios Antibióticos Fortificados:\n    a) Vancomicina fortificada (50 mg/mL): 1 gota cada 1 hora día y noche las primeras 48 horas (cubre Gram positivos, incluidos SARM y S. pneumoniae).\n    b) Ceftazidima fortificada (50 mg/mL) o Tobramicina fortificada (14 mg/mL): 1 gota cada 1 hora alternada con la vancomicina (cubre Gram negativos, incluida Pseudomonas aeruginosa).\n  - Monoterapia de alternativa en úlceras pequeñas (<2 mm) no centrales: Fluoroquinolonas de 4ª generación (Moxifloxacino 0.5% o Gatifloxacino 0.5%) cada 1 hora.\n  - Ciclopléjico (Ciclopentolato 1% o Atropina 1% c/8h) para alivio del espasmo ciliar y prevención de sinequias posteriores.\n  - Corticoides Tópicos Coadyuvantes (Criterios del Ensayo SCUT):\n    * SOLO indicados si el cultivo es positivo para bacterias confirmadas, tras al menos 48 a 72 horas de tratamiento antibiótico intensivo y con mejoría clínica documentada.\n    * FORMALMENTE CONTRAINDICADOS de entrada o en sospecha de hongos, Nocardia o Acanthamoeba.\n• Queratitis Fúngica:\n  - Hongos filamentosos (Fusarium, Aspergillus): Suspensión tópica de Natamicina al 5% (fármaco de elección según el ensayo MUTT I) cada 1 hora día y noche.\n  - Levaduras (Candida): Anfotericina B fortificada tópica (0.15% a 0.25%) o Voriconazol tópico al 1% cada 1 hora.\n  - En casos estromales profundos: Voriconazol oral (200 mg cada 12 horas) coadyuvante.\n  - CONTRAINDICADOS ABSOLUTAMENTE LOS CORTICOIDES en queratitis fúngica activa.\n• Queratitis por Acanthamoeba:\n  - Terapia antiamébica combinada dual de choque:\n    * Polihexametileno biguanida (PHMB al 0.02%) o Digluconato de Clorhexidina al 0.02% cada 1 hora día y noche las primeras 48 horas.\n    * Asociado a Brolamidina al 0.1% (Brolene) o Hexamidina tópica.\n    * Tratamiento prolongado durante un mínimo de 3 a 6 meses para erradicar las formas quísticas latentes.',
      surgical: '• Adhesivo Tisular de Cianoacrilato + Lente de Contacto Terapéutico: En microperforaciones o descemetoceles pequeños (<1.5 mm de diámetro).\n• Queratoplastia Penetrante Terapéutica / Tectónica (PKP "en caliente"): Indicada de urgencia ante perforación inminente grande (>2 mm) o fracaso del tratamiento médico antimicrobiano máximo con necrosis progresiva.'
    },
    clinicalApplicationPractical: '1. NUNCA iniciar colirios que contengan corticoides ni antibióticos combinados con dexametasona antes de realizar el raspado corneal microbiológico con Gram y cultivo.\n2. La Natamicina al 5% es el estándar de oro en queratitis por hongos filamentosos: El ensayo MUTT demostró que la Natamicina es significativamente superior al Voriconazol tópico en agudeza visual final y tasa de perforación en queratitis por Fusarium.\n3. Sospecha de Acanthamoeba en usuarios de lentes de contacto: Todo paciente con dolor ocular insoportable que no cede con analgésicos y muestra apenas infiltrados estromales discretos o perineuritis radial debe tratarse de inmediato como Acanthamoeba con biguanidas tópicas.',
    highYieldPearl: 'MUTT Trial I (JAMA Ophthalmol 2013): En queratitis fúngica por hongos filamentosos (especialmente Fusarium), la Natamicina tópica al 5% fue significativamente superior al Voriconazol tópico al 1%, logrando una agudeza visual 2 líneas mejor y una tasa de perforación corneal tres veces menor.',
    keyDrugs: [
      { name: 'Vancomicina fortificada 50 mg/mL', dose: '1 gota cada 1 hora alternada con Ceftazidima', warning: 'Preparación estéril magistral; refrigerar a 4ºC; caducidad corta de 7 a 14 días.' },
      { name: 'Natamicina suspensión 5%', dose: '1 gota cada 1 hora las 24 horas del día', warning: 'Fármaco de elección según ensayo MUTT para hongos filamentosos; no usar en monoterapia para levaduras.' },
      { name: 'PHMB 0.02% (Polihexametileno biguanida)', dose: '1 gota cada 1 hora en fase de ataque', warning: 'Cida contra trofozoítos y quistes de Acanthamoeba; requiere meses de tratamiento continuado.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Bacterias Capaces de Atravesar el Epitelio Corneal Intacto',
        category: 'Mnemotecnia',
        description: 'Mnemotecnia clásica para los únicos patógenos que penetran la córnea sin necesidad de traumatismo o erosión previa: "Neisseria Corynebacterium Listeria Haemophilus" (NCLH: Neisseria gonorrhoeae, Corynebacterium diphtheriae, Listeria monocytogenes y Haemophilus aegyptius).',
        trapToAvoid: 'Creer que Pseudomonas puede penetrar la córnea con epitelio intacto (Pseudomonas requiere SIEMPRE una brecha epitelial previa).'
      },
      {
        title: 'Conclusiones del Ensayo SCUT sobre Corticoides en Queratitis',
        category: 'Pregunta Clásica',
        description: 'El Steroids for Corneal Ulcers Trial (SCUT, Arch Ophthalmol 2012): El uso de corticoides tópicos coadyuvantes tras 48-72h de antibióticos NO mejoró la visión a los 3 meses en el total de pacientes, pero aportó beneficio significativo en el subgrupo de úlceras centrales profundas severas (visión basal <20/200) o causadas por Pseudomonas.',
        trapToAvoid: 'Administrar corticoides de entrada antes de 48 horas o prescribirlos sin tener un cultivo bacteriano confirmado.'
      },
      {
        title: 'Bordes Plumosos y Lesiones Satélite',
        category: 'Asociación Patognomónica',
        description: 'Infiltrado corneal estromal blanco-grisáceo con márgenes plumosos o deshilachados en encaje y focos satélites aislados alrededor del infiltrado principal = Queratitis Fúngica por hongo filamentoso (Fusarium / Aspergillus).',
        trapToAvoid: 'Tratar como bacteriana y añadir esteroides (los esteroides disparan la multiplicación fúngica con melting corneal masivo).'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo MUTT II (JAMA Ophthalmol 2016): Evaluó la adición de Voriconazol oral en queratitis fúngicas severas y concluyó que el voriconazol oral NO reduce la tasa de perforación ni la necesidad de queratoplastia terapéutica frente a placebo en úlceras por Fusarium, aunque puede considerarse en Candida.',
      'Agar No Nutritivo con E. coli (NNA): El medio de cultivo estándar para Acanthamoeba; los trofozoítos se alimentan de la capa bacteriana de E. coli dejando surcos microscópicos visibles con el objetivo de 10x invertido.',
      'Crosslinking Corneal Fotoquímico PACK-CXL: Uso de riboflavina y luz ultravioleta A como coadyuvante antimicrobiano que induce estrés oxidativo y ruptura de ADN bacteriano/fúngico en úlceras infecciosas refractarias antes de la cirugía.'
    ],
    landmarkTrials: [
      {
        name: 'SCUT (Steroids for Corneal Ulcers Trial)',
        year: '2012 (Arch Ophthalmol)',
        conclusion: 'Corticoides tópicos coadyuvantes tras cobertura antibiótica no alteran la agudeza visual global a 3 meses pero mejoran la agudeza en úlceras centrales graves y causadas por Pseudomonas sin aumentar perforaciones.',
        fellowshipRelevance: 'El ensayo multicéntrico aleatorizado que definió el papel de los corticoides en queratitis bacteriana.'
      },
      {
        name: 'MUTT I (Mycotic Ulcer Treatment Trial I)',
        year: '2013 (JAMA Ophthalmol)',
        conclusion: 'Natamicina tópica al 5% demostró superioridad clínica estadísticamente significativa frente a Voriconazol tópico al 1% en queratitis por hongos filamentosos.',
        fellowshipRelevance: 'Estableció la Natamicina como el estándar de oro mundial indiscutible en queratitis fúngica.'
      }
    ],
    histopathologyAndGenetics: 'En queratitis fúngica: Tinciones histopatológicas de Gomori-Grocott (metenamina de plata) tiñe las paredes fúngicas de negro y ácido peryódico de Schiff (PAS) las tiñe de magenta brillante. En Acanthamoeba: Quistes con doble pared poligonal rugosa que tiñen intensamente con Blanco de Calcoflúor y Giemsa.',
    surgicalPearls: [
      'En Queratoplastia Penetrante Terapéutica por infección activa: El diámetro del trépano donante debe sobredimensionarse al menos 1.5 a 2.0 mm por fuera del límite visible del infiltrado infeccioso para garantizar márgenes quirúrgicos sanos libres de microorganismos viables.',
      'Al aplicar adhesivo tisular de cianoacrilato en una microperforación: Secar completamente el estroma corneal con esponjas de celulosa estériles antes de depositar una microgota de pegamento sobre un disco de plástico; el pegamento polimeriza al instante en contacto con fluidos acuosos.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un varón de 42 años agricultor acude por dolor, ojo rojo y disminución visual severa en ojo derecho tras recibir un golpe con una rama de árbol hace 10 días. En la biomicroscopía se observa un infiltrado estromal blanco-grisáceo de 3.5 mm de diámetro con bordes plumosos deshilachados, dos lesiones satélite focales inferiores y un hipopion espeso de 2 mm. ¿Cuál es su sospecha etiológica prioritaria, qué tinción microbiológica urgente solicita y cuál es el tratamiento farmacológico tópico de primera línea según el ensayo MUTT I?',
        answer: '1) Sospecha etiológica prioritaria: Queratitis fúngica micótica por hongo filamentoso (Fusarium solani o Aspergillus fumigatus) secundaria a traumatismo vegetal.\n2) Tinción microbiológica urgente: Raspado corneal estromal profundo para tinción con Blanco de Calcoflúor (Calcofluor White bajo microscopía de fluorescencia) y tinción con KOH al 10% / Giemsa para visualización directa de hifas septadas ramificadas.\n3) Tratamiento de primera línea: Instilación tópica inmediata de suspensión oftálmica de Natamicina al 5%, 1 gota cada 1 hora las 24 horas del día (fármaco de elección según el ensayo pivotal MUTT I). Los corticoides tópicos o sistémicos están TERMINANTEMENTE CONTRAINDICADOS.',
        trap: 'Prescribir colirios de esteroides para reducir el hipopion o indicar voriconazol en monoterapia desconociendo la superioridad demostrada de la natamicina en el ensayo MUTT.'
      }
    ]
  },

  // =========================================================================
  // 3. QUERATOCONO Y ECTASIAS CORNEALES
  // =========================================================================
  {
    id: 'deep-cornea-queratocono-ectasias',
    title: 'Queratocono y Ectasias Corneales: Tomografía Belin-Ambrósio (Pentacam), Crosslinking (CXL) y Anillos Intraestromales',
    subspecialtyId: 'cornea',
    summary: 'Monografía completa sobre ectasias corneales primarias e iatrogénicas: queratocono progresivo, degeneración marginal pelúcida (mapa en alas de mariposa / pinza de langosta) y queratoglobo; diagnóstico tomográfico de alta sensibilidad mediante cámara Scheimpflug (Pentacam con índices BAD-D y elevación posterior excluida); biomecánica corneal (Corvis ST y Ocular Response Analyzer ORA); prevención primaria (campaña "Stop Eye Rubbing"); protocolo de Crosslinking corneal con riboflavina y luz ultravioleta A (CXL de Dresde clásico epi-off vs acelerado) con hidratación hipotónica en córneas finas (<400 µm); implante de segmentos de anillos intraestromales (ICRS con láser de femtosegundo); manejo del hydrops corneal agudo y Queratoplastia Lamelar Anterior Profunda (DALK con técnica de gran burbuja de Anwar).',
    definitionAndEpidemiology: 'El queratocono es una ectasia corneal primaria, bilateral, asimétrica y no inflamatoria caracterizada por adelgazamiento progresivo del estroma y protrusión cónica paracentral o inferior de la córnea, induciendo miopía progresiva, astigmatismo irregular y aberraciones de alto orden (predominantemente coma vertical). Prevalencia estimada de 1 en 500 a 1 en 2000 individuos, con inicio habitual en la pubertad y progresión activa hasta los 35-40 años de edad. Fuertemente ligado al frotamiento ocular crónico compulsivo ("eye rubbing") en el contexto de atopias, alergia ocular y factores genéticos predisponentes.',
    anatomyAndPathophysiology: '1. Cascada Fisiopatológica de la Ectasia Corneal:\n   • Microtraumatismo mecánico continuo por frotamiento ocular crónico -> estrés de cizallamiento en queratocitos estromales.\n   • Liberación local de citocinas inflamatorias (IL-1, TNF-alfa) y metaloproteinasas (MMP-1, MMP-13).\n   • Apoptosis acelerada de queratocitos y degradación de proteoglicanos queratán-sulfato.\n   • Deslizamiento interlamelar de las fibras de colágeno estromal tipo I con pérdida de enlaces cruzados covalentes fisiológicos.\n   • Adelgazamiento estromal progresivo máximo en el vértice del cono con pérdida de rigidez biomecánica.\n   • Deformación ectásica anterior y posterior bajo la fuerza constante de la presión intraocular fisiológica.\n2. Fisiopatología del Hydrops Corneal Agudo:\n   • El estiramiento biomecánico extremo supera la elasticidad de la membrana de Descemet -> ruptura física espontánea de la membrana de Descemet y endotelio.\n   • Entrada masiva y descontrolada de humor acuoso de la cámara anterior al estroma corneal.\n   • Edema corneal masivo agudo con pérdida brusca de transparencia y dolor sordo transitorio.',
    clinicalExamination: {
      biomicroscopy: 'En estadios precoces la lámpara de hendidura puede ser completamente normal (diagnóstico precoz puramente tomográfico). En estadios moderados a avanzados:\n• Estrías de Vogt: Finas líneas verticales estromales posteriores de tensión por estiramiento que desaparecen al ejercer compresión digital suave sobre el globo.\n• Anillo de Fleischer: Depósito epitelial basocelular de hemosiderina férrica en la base periférica del cono (resaltado con filtro azul cobalto).\n• Adelgazamiento estromal central/paracentral visible en corte fino de hendidura.\n• Cicatrices o leucomas estromales apicales por microtraumatismos repetidos.\nEn Degeneración Marginal Pelúcida (DMP): Banda periférica inferior de adelgazamiento estromal de 1-2 mm de anchura respetando estrictamente el limbo esclerocorneal, con protrusión corneal inmediatamente por encima de la zona adelgazada.',
      fundus: 'Reflejo en "gota de aceite" de Charleux en oftalmoscopia directa a 30 cm; esquiascopia con sombras en tijera (scissor shadows) dinámicas patognomónicas.',
      specialSigns: '• Signo de Munson: Protrusión o deformación en "V" angulada del margen del párpado inferior en la mirada hacia abajo.\n• Signo de Rizzuti: Enfoque de un haz de luz cónico en la esclera límbica nasal cuando se proyecta una linterna tangencial desde el lado temporal.'
    },
    diagnosticWorkup: [
      {
        test: 'Tomografía Scheimpflug (Pentacam) y Belin-Ambrósio Enhanced Ectasia Display (BAD)',
        findings: 'El estándar de oro para el diagnóstico precoz de queratocono subclínico (fruste):\n• Desviación final BAD-D: Valor <1.6 es normal; entre 1.6 y 2.6 sospecha de ectasia; >2.6 ectasia confirmada.\n• Elevación posterior anormal respecto a la Esfera de Mejor Ajuste Excluida (Enhanced Reference BFS): Elevación posterior >12-14 µm es patológica.\n• Punto más delgado (Thinnest Point - TP) desplazado inferotemporalmente con paquimetría <480 µm e índice de progresión paquimétrica acelerado.'
      },
      {
        test: 'Biomecánica Corneal Dinámica (Corvis ST / Ocular Response Analyzer ORA)',
        findings: 'Disminución marcada de la Histéresis Corneal (CH) y del Factor de Resistencia Corneal (CRF), con índice combinado tomográfico-biomecánico (CBI y TBI de Ambrósio >0.5) capaz de detectar debilidad biomecánica antes de cualquier cambio en mapas de curvatura.'
      },
      {
        test: 'Topografía de Curvatura Sagital / Tangencial (Placido)',
        findings: 'Asimetría dióptrica con incurvamiento inferior marcado (índice I-S >1.4 D), astigmatismo irregular asimétrico en "pajarita torcida" (skewed radial axes) y queratometría máxima (Kmax) elevada (>47-48 D).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Degeneración Marginal Pelúcida (DMP)', distinction: 'Adelgazamiento estromal en semiluna en la córnea periférica inferior a 1-2 mm del limbo con área corneal central conservada; mapa topográfico patognomónico en "alas de mariposa" o "pinza de langosta" (crab-claw).' },
      { condition: 'Queratoglobo', distinction: 'Adelgazamiento globular difuso de limbo a limbo presente desde el nacimiento; protrusión esférica total de toda la córnea con altísimo riesgo de rotura ante mínimos traumatismos.' },
      { condition: 'Ectasia Corneal Iatrogénica Post-LASIK', distinction: 'Aparición progresiva de incurvamiento y adelgazamiento años después de un LASIK en pacientes con PTA >=40% o lecho estromal residual (RSB) insuficiente <250-300 µm.' }
    ],
    steppedManagement: {
      medical: '• Prevención Primaria Ineludible: PROHIBICIÓN ESTRICTA Y TOTAL DEL FROTAMIENTO OCULAR ("Stop Eye Rubbing"). Tratamiento activo de la alergia subyacente con antihistamínicos tópicos sin conservantes (Olopatadina 0.2%).\n• En Queratocono Progresivo Documentado:\n  - CROSSLINKING CORNEAL DEL COLÁGENO (CXL Protocolo de Dresde Epi-Off):\n    * Desepitelización central de 9 mm -> instilación de Riboflavina al 0.1% con dextrano cada 2 min durante 30 min -> irradiación con luz UVA (365 nm a 3 mW/cm2) durante 30 min.\n    * Mecanismo: Generación de oxígeno singlete y radicales libres que crean enlaces covalentes cruzados entre fibras de colágeno estromal, aumentando la rigidez biomecánica en más del 300% y frenando la progresión en >95% de los casos.\n    * REGLA DE SEGURIDAD ESTROMAL: Si la córnea desepitelizada mide <400 µm, es OBLIGATORIO inducir edema osmótico con Riboflavina hipotónica libre de dextrano hasta superar los 400 µm para proteger el endotelio corneal de toxicidad UVA.\n• Rehabilitación Visual Óptica:\n  - Lentes de contacto rígidos permeables al gas (RGP) o lentes esclerales de gran diámetro (crean una superficie refractiva perfecta sobre el reservorio salino neutralizando aberraciones de alto orden).\n• Manejo del Hydrops Corneal Agudo:\n  - NUNCA realizar queratoplastia en fase aguda.\n  - Tratamiento conservador: Ciclopléjico + Solución salina hipertónica tópica al 5% (NaCl 5%) + hipotensores tópicos.\n  - Procedimiento activo de aceleración: Inyección intracamerular de gas expansible (C3F8 al 14% o SF6 al 20%) o aire para aponer la membrana de Descemet rota contra el estroma posterior.',
      surgical: '• Segmentos de Anillos Intraestromales (ICRS / Keraring / Ferrara):\n  - Canales tallados en estroma profundo (a 75-80% de profundidad paquimétrica) asistidos por láser de femtosegundo; efecto de aplanamiento central y regularización corneal para mejorar la tolerancia a lentes de contacto.\n• En Queratocono Avanzado con Opacidad Apical o Intolerancia a Lentes:\n  - QUERATOPLASTIA LAMELAR ANTERIOR PROFUNDA (DALK con Técnica de "Big Bubble" de Anwar):\n    * Disección estromal completa con inyección de aire profunda hasta desprender la membrana de Descemet del estroma posterior.\n    * VENTAJA VITAL: Preserva el endotelio propio del paciente y elimina al 100% el riesgo de rechazo endotelial (la principal causa de pérdida tardía del injerto en PKP).'
    },
    clinicalApplicationPractical: '1. Educar al paciente: El frotamiento ocular es el motor principal de la ectasia; frotarse los ojos con los nudillos eleva la presión corneal transitoria a más de 300 mmHg, rompiendo los puentes de colágeno.\n2. Criterio formal de progresión para indicar CXL: Incremento de Kmax >= 1.0 D en 12 meses, aumento del astigmatismo subjetivo o pérdida de paquimetría estromal >= 10-15 µm.\n3. En hydrops agudo: Explicar al paciente que la agudeza visual se recuperará en 6 a 12 semanas conforme las células endoteliales migren y cicatricen la brecha de Descemet; operar de urgencia es un error grave.',
    highYieldPearl: 'CXL 400-Micron Golden Rule: El protocolo de Dresde exige un lecho estromal residual mínimo desepitelizado de 400 µm antes de activar la luz UVA; si el estroma es más fino, la radiación UVA penetrará hasta la monocapa endotelial provocando necrosis celular endotelial irreversible y queratopatía bullosa.',
    keyDrugs: [
      { name: 'Riboflavina 0.1% con dextrano (normoosmolar)', dose: '1 gota cada 2 min durante 30 min', warning: 'Fotosensibilizador esencial para CXL; absorbe la luz UVA y protege tejidos profundos.' },
      { name: 'Riboflavina hipotónica 0.1% (sin dextrano)', dose: '1 gota cada 2 min hasta paquimetría >400 µm', warning: 'Uso obligatorio para inflar córneas finas por edema osmótico estromal controlado.' },
      { name: 'Cloruro de sodio hipertónico 5% (NaCl 5%)', dose: '1 gota cada 4 a 6 horas', warning: 'Agente osmótico tópico para manejo médico de edema en hydrops corneal agudo.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Signo Tomográfico más Precoz de Queratocono Subclínico',
        category: 'Asociación Patognomónica',
        description: 'La elevación posterior anormal en la pantalla Belin-Ambrósio (BAD-D) del Pentacam referida a la esfera de mejor ajuste excluida (Enhanced Reference BFS) es el cambio más precoz, apareciendo años antes de que la topografía anterior de Placido o la queratometría muestren asimetrías.',
        trapToAvoid: 'Descartar queratocono basándose únicamente en mapas topográficos axiales de curvatura anterior normales.'
      },
      {
        title: 'Conducta Correcta ante Hydrops Corneal Agudo',
        category: 'Trampa de Tribunal',
        description: 'Pregunta canónica de Boards: "Un paciente con queratocono presenta dolor súbito y opacificación corneal blanquecina total con edema estromal masivo por hydrops agudo. ¿Cuál es la conducta adecuada?". Respuesta: Manejo médico conservador (hipertónicos tópicos y ciclopléjicos) o inyección de gas intracameral. El trasplante de córnea está formalmente contraindicado en fase aguda.',
        trapToAvoid: 'Indicar queratoplastia penetrante de urgencia en caliente durante el hydrops activo.'
      },
      {
        title: 'Por Qué DALK es Superior a PKP en Queratocono',
        category: 'Pregunta Clásica',
        description: 'En queratocono el endotelio corneal del paciente es completamente sano y joven. La Queratoplastia Lamelar Anterior Profunda (DALK) preserva este endotelio receptor propio, eliminando para siempre el riesgo de rechazo endotelial (la principal causa de ceguera del injerto en PKP a 10 y 20 años).',
        trapToAvoid: 'Realizar un trasplante penetrante de grosor total (PKP) cuando la membrana de Descemet está intacta sin perforación previa.'
      }
    ],
    fellowshipKeyPoints: [
      'Técnica de la Gran Burbuja (Big-Bubble de Anwar): Inyección de aire con aguja de calibre 27-30G bisel hacia abajo en el estroma posterior profundo que despega suavemente la membrana de Descemet del estroma corneal posterior mediante un plano de clivaje neumático anatómico perfecto.',
      'Degeneración Marginal Pelúcida: Se diferencia del queratocono porque el punto de adelgazamiento máximo está a 1-2 mm del limbo inferior con una córnea central de espesor normal; no presenta anillo de Fleischer ni estrías de Vogt.',
      'Santhiago PTA Model: En cirugía refractiva previa, un Porcentaje de Tejido Alterado (PTA = [Flap + Ablación] / Paquimetría Central) >= 40% es el factor predictor individual más potente de ectasia iatrogénica post-LASIK.'
    ],
    landmarkTrials: [
      {
        name: 'Dresden Protocol Crosslinking Study (Wollensak et al.)',
        year: '2003 (Am J Ophthalmol)',
        conclusion: 'El crosslinking corneal con riboflavina y radiación UVA demostró por primera vez detener la progresión del queratocono en el 100% de los ojos tratados a 3 años de seguimiento, aplanando la queratometría máxima en más de 2 dioptrías.',
        fellowshipRelevance: 'Pilar fundacional del manejo moderno no invasivo de las ectasias corneales progresivas.'
      }
    ],
    histopathologyAndGenetics: 'En queratocono: Fragmentación y roturas focales en la membrana de Bowman con invasión de prolongaciones de queratocitos hacia el epitelio, adelgazamiento estromal central con empaquetamiento irregular de laminillas colágenas y depósito de hemosiderina férrica en las células epiteliales basales que delimitan el anillo de Fleischer.',
    surgicalPearls: [
      'Al implantar anillos intraestromales (ICRS): La profundidad de corte del túnel con femtosegundo debe situarse estrictamente al 75-80% de la paquimetría más delgada en el trayecto del canal para evitar extrusión superficial del segmento o perforación en cámara anterior.',
      'En DALK si se rompe la membrana de Descemet durante la trepanación o disección: Si la rotura es pequeña y periférica, convertir a técnica de disección manual viscodisección; si la rotura es central amplia, convertir de inmediato a Queratoplastia Penetrante (PKP) reglada.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un joven de 19 años con atopia severa y antecedente de frotamiento ocular enérgico es evaluado por astigmatismo irregular creciente. En el examen del ojo derecho la lámpara de hendidura muestra córnea transparente sin leucomas. La refracción es -2.50 -3.75 a 85º (AV 20/30). El Pentacam revela una paquimetría mínima de 445 µm, Kmax de 49.8 D (que aumentó 1.4 D respecto al año anterior) y una desviación BAD-D de 3.42 con elevación posterior de +22 µm. ¿Cuál es el diagnóstico de certeza, cuál es la indicación terapéutica prioritaria para frenar la enfermedad y qué precaución técnica de seguridad debe adoptarse durante el procedimiento?',
        answer: '1) Diagnóstico de certeza: Queratocono primario progresivo documentado en ojo derecho (confirmado por incremento de Kmax >1.0 D en 12 meses y BAD-D francamente ectásico >2.6).\n2) Indicación prioritaria: CROSSLINKING CORNEAL DEL COLÁGENO (CXL Protocolo de Dresde Epi-Off) para detener la progresión de la ectasia, asociado a prohibición terminante del frotamiento ocular y tratamiento antialérgico tópico sin conservantes.\n3) Precaución técnica de seguridad obligatoria: Tras retirar el epitelio corneal central de 9 mm, se debe medir la paquimetría estromal ultrasónica o con tomografía; si el estroma residual es inferior a 400 µm (como suele ocurrir al desepitelizar una córnea con paquimetría total de 445 µm), se debe instilar Riboflavina hipotónica al 0.1% libre de dextrano hasta que el estroma se hinche osmóticamente y supere los 400 µm de grosor antes de activar la luz UVA, previniendo la toxicidad endotelial irreversible.',
        trap: 'Indicar cirugía refractiva con láser (LASIK o PRK) o recetar gafas y citar en 1 año sin indicar Crosslinking ante una progresión demostrada.'
      }
    ]
  },

  // =========================================================================
  // 4. DISTROFIAS CORNEALES: EPITELIALES, ESTROMALES Y ENDOTELIALES (IC3D)
  // =========================================================================
  {
    id: 'deep-cornea-distrofias-ic3d',
    title: 'Distrofias Corneales: Epiteliales, Estromales y Endoteliales (Clasificación Molecular IC3D, Genética TGFBI y Fuchs)',
    subspecialtyId: 'cornea',
    summary: 'Monografía exhaustiva de nivel fellowship sobre el espectro completo de distrofias corneales según la Clasificación Internacional IC3D: distrofias epiteliales y subepiteliales (Distrofia de Membrana Basal Epitelial / EBMD / Cogan / Map-Dot-Fingerprint, Reis-Bücklers mutación R124L y Thiel-Behnke mutación R555Q), distrofias estromales ligadas al gen TGFBI en 5q31 (Lattice tipo 1 amiloide, Granular tipo 1 hialina, Granular tipo 2 / Avellino combinada) y distrofia Macular autosómica recesiva (gen CHST6 en 16q22 con mucopolisacáridos); regla mnemotécnica universal de tinciones histopatológicas ("Marilyn Monroe Always Gets Her Man in L.A. County"); Distrofia Endotelial de Fuchs (FECD) con expansión de tripletes del gen TCF4, microscopía especular y tratamiento quirúrgico con DMEK.',
    definitionAndEpidemiology: 'Las distrofias corneales son trastornos genéticos primarios, hereditarios, bilaterales, habitualmente simétricos y de progresión lenta que no están asociados a inflamación previa ni enfermedades sistémicas. La Clasificación del Comité Internacional de Distrofias Corneales (IC3D, 2ª edición 2015) categoriza cada entidad según su nivel de evidencia: Categoría 1 (gen y mutación bien mapeados y caracterizados), Categoría 2 (mapeada a un locus específico), Categoría 3 (entidad bien definida sin mapeo confirmado) y Categoría 4 (sospecha clínica sin evidencia concluyente). La Distrofia de Fuchs es la más prevalente en la clínica (>4% en adultos mayores de 50 años).',
    anatomyAndPathophysiology: '1. Distrofias Epiteliales y de Membrana de Bowman:\n   • Distrofia de Membrana Basal Epitelial (EBMD / Cogan / Map-Dot-Fingerprint):\n     - Defecto en la síntesis de la membrana basal con formación de membranas multilaminares engrosadas aberrantes y proyecciones digitiformes intraepiteliales que atrapan células en descamación (quistes o "dots").\n     - Falta de formación de hemidesmosomas normales -> desprendimiento fácil del epitelio ante mínimos roces, causando el 50% de los casos de Síndrome de Erosión Corneal Recurrente (RCES).\n   • Distrofias de Bowman (mutaciones en TGFBI en 5q31):\n     - Reis-Bücklers (CDB1 / mutación R124L): Reemplazo de la membrana de Bowman por material fibrilar laminado en "varillas" (rod-like) que genera erosiones recurrentes severas en la primera década de la vida.\n     - Thiel-Behnke (CDB2 / mutación R555Q): Depósito subepitelial en "panal de abeja" (curly fibers en microscopía electrónica).\n2. Distrofias Estromales Clásicas y Gen TGFBI (Gen de la Queratocan / Factor de Crecimiento Transformante Beta-Inducido):\n   • Distrofia Lattice / Reticular tipo 1 (mutación R124C):\n     - Depósito de AMILOIDE en el estroma anterior y medio en líneas ramificadas transparentes en "red de araña" o "vidrio esmerilado".\n   • Distrofia Granular tipo 1 / Groenouw I (mutación R555W):\n     - Depósito de HIALINA en depósitos blanquecinos discretos redondeados en "migajas de pan" en estroma anterior con ESTROMA INTERMEDIO TRANSPARENTE.\n   • Distrofia Granular tipo 2 / Avellino (mutación R124H):\n     - Depósitos combinados de hialina y amiloide; NUNCA realizar cirugía refractiva láser LASIK o PRK porque desencadena una reactivación y depósito masivo catastrófico en la interfase.\n   • Distrofia Macular / Groenouw II (Autosómica RECESIVA, mutación en gen CHST6 en 16q22):\n     - Defecto en la sulfatación del queratán-sulfato estromal con depósito difuso de MUCOPOLISACÁRIDOS / GLICOSAMINOGLICANOS que afecta a todo el espesor estromal de LIMBO A LIMBO (el estroma intermedio NO es transparente).\n3. Distrofia Endotelial de Fuchs (FECD):\n   • Expansión intrónica del triplete (CTG)n en el gen TCF4 en el cromosoma 18q21.\n   • Apoptosis acelerada de células endoteliales y secreción aberrante de colágeno hacia la membrana de Descemet posterior, formando excrecencias focales nodulares llamadas GUTTAS endoteliales (aspecto en "metal batido" a la retroiluminación).\n   • Cuando la densidad endotelial cae por debajo de 500-800 cél/mm2, la bomba Na+/K+ ATPasa fracasa, generando edema estromal y queratopatía bullosa epitelial.',
    clinicalExamination: {
      biomicroscopy: '• En EBMD: Mapas geográficos grisáceos tenues, puntos blanquecinos (quistes) y huellas dactilares refractivas que se aprecian mejor con retroiluminación y tinción de fluoresceína (patrón en negativo).\n• En Lattice 1: Finas líneas ramificadas dicotómicas en celosía entrelazadas en estroma anterior con córnea interpuesta clara y pérdida precoz de la sensibilidad corneal.\n• En Granular 1: Opacidades blanco-tiza redondeadas discretas bien delimitadas ("copos de nieve") con estroma intermedio absolutamente transparente.\n• En Macular: Opacidades grisáceas mal delimitadas difusas que se extienden hasta el mismo limbo esclerocorneal, con estroma corneal turbio difuso y adelgazamiento central precoz.\n• En Fuchs: Guttas endoteliales centrales densas ("gotas de rocío" o "metal martillado"), pigmentación endotelial en polvo y edema estromal matutino.',
      fundus: 'Normal; en Fuchs avanzado la visión del fondo se dificulta por el edema corneal difuso.',
      specialSigns: '• Mnemotecnia de Tinciones Histopatológicas ("Marilyn Monroe Always Gets Her Man in L.A. County"):\n  - Macular: Alcian blue (Azul Alcián / Mucopolisacáridos).\n  - Granular: Masson trichrome (Tricrómico de Masson / Hialina teñida de rojo brillante).\n  - Lattice: Amyloid con Congo red (Rojo Congo / Birrefringencia verde manzana bajo luz polarizada).\n• Signo del Deslumbramiento Matutino en Fuchs: La visión es peor al despertar (por falta de evaporación nocturna bajo párpados cerrados) y mejora a lo largo del día al evaporarse el líquido.'
    },
    diagnosticWorkup: [
      {
        test: 'Microscopía Especular y Confocal de Endotelio Corneal',
        findings: 'En Distrofia de Fuchs: Pleomorfismo (variación de forma celular) y polimegatismo (variación de tamaño) severos, con pérdida de la densidad celular endotelial (ECD <1000 cél/mm2) y visualización de áreas oscuras acelulares centrales que corresponden a las guttas.'
      },
      {
        test: 'Paquimetría Corneal Óptica y Ultrasónica Seriada Matutina vs Vespertina',
        findings: 'En Fuchs: Córnea engrosada (>600-640 µm) a primera hora de la mañana por edema nocturno que disminuye parcialmente por la tarde.'
      },
      {
        test: 'Análisis Genético Molecular (Panel de Secuenciación TGFBI, CHST6 y TCF4)',
        findings: 'Confirmación inequívoca de la mutación puntual en el exón 4 u 11 de TGFBI (R124 o R555) o expansión de TCF4.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Queratopatía Bullosa Pseudofáquica', distinction: 'Unilateral, antecedente directo de cirugía de catarata complicada o traumatismo quirúrgico intraocular, sin guttas endoteliales en el ojo contralateral.' },
      { condition: 'Amiloidosis Sistémica con Afectación Corneal (Lattice tipo 2 / Síndrome de Meretoja)', distinction: 'Mutación en gen de la Gelsolina (GSN en 9q34); líneas en celosía más periféricas y escasas asociadas a neuropatía craneal progresiva con parálisis facial bilateral y piel laxa péndula.' },
      { condition: 'Guttas Corneales Secundarias Inflamatorias (Hassall-Henle Bodies)', distinction: 'Guttas periféricas fisiológicas ligadas a la edad que no comprometen el centro corneal ni provocan edema estromal.' }
    ],
    steppedManagement: {
      medical: '• Distrofia de Membrana Basal Epitelial (EBMD / Erosiones Recurrentes):\n  - Pomadas lubricantes hipertónicas (NaCl 5%) al acostarse para evitar adherencia del párpado al epitelio.\n  - En crisis aguda de erosión: Lente de contacto terapéutico de vendaje durante 4 a 6 semanas + Doxiciclina oral 50 mg/día para inhibir MMP-9.\n• Distrofia de Fuchs Precoz:\n  - Solución salina hipertónica tópica al 5% (NaCl 5% en gotas diurnas y pomada nocturna).\n  - Uso de secador de pelo con aire templado a un brazo de distancia por las mañanas durante 5-10 minutos para acelerar la evaporación corneal.\n  - Hipotensores tópicos (evitando análogos de prostaglandinas que aumentan edema o inflamación) para reducir el gradiente de filtración acuosa.',
      surgical: '• En EBMD / Distrofias Anteriores Superficiales (Reis-Bücklers):\n  - Fotoqueratectomía Terapéutica con Láser Excímer (PTK): Ablación de 5 a 10 micras de la membrana de Bowman para alisar la superficie y permitir la formación de hemidesmosomas firmes.\n  - Desbridamiento epitelial con espátula y raspado con fresa de diamante (Diamond Burr Polishing).\n• En Distrofias Estromales (Lattice / Granular / Macular):\n  - Queratoplastia Lamelar Anterior Profunda (DALK): De elección si el endotelio es sano; recurrencia tardía posible en el injerto tras 5-10 años.\n• En Distrofia Endotelial de Fuchs Descompensada:\n  - QUERATOPLASTIA ENDOTELIAL DE MEMBRANA DE DESCEMET (DMEK):\n    * Procedimiento de elección estándar moderno: Reemplazo anatómico puro de la membrana de Descemet y endotelio (espesor de 10-15 µm).\n    * Agudeza visual postoperatoria superior (>85% logran 20/25 o mejor) y tasa de rechazo inmunológico <1%.\n  - DSAEK (Queratoplastia Endotelial Automatizada) como alternativa en ojos complejos o vitrectomizados.\n  - Descemet Stripping Only (DSO / Descemetorrexis sin injerto): Remoción central de Descemet de 4 mm sin colocar donante en pacientes con endotelio periférico viable, apoyado con inhibidores de ROCK tópicos (Ripasudil / Netarsudil).'
    },
    clinicalApplicationPractical: '1. CONTRAINDICACIÓN FORMAL ABSOLUTA DE LASIK/PRK EN DISTROFIA DE AVELLINO (Granular tipo 2): Realizar cirugía refractiva corneal con láser en pacientes con mutación R124H de TGFBI despierta un depósito masivo destructivo de material granular en la interfase lamelar que provoca ceguera corneal en meses.\n2. Mnemotecnia de Masson / Rojo Congo: En exámenes de residencia y fellow, relacionar siempre Lattice con Amiloide y Rojo Congo, y Granular con Hialina y Masson.\n3. Distrofia Macular es la ÚNICA autosómica recesiva del grupo clásico: Recordar que en la Macular los depósitos llegan de limbo a limbo y el estroma intermedio no es transparente, a diferencia de Granular y Lattice que tienen córnea intermedia limpia y son autosómicas dominantes.',
    highYieldPearl: 'IC3D Board Pearl: La Distrofia Macular (CHST6) es la única de herencia AUTOSÓMICA RECESIVA entre las distrofias estromales clásicas; sus depósitos de mucopolisacáridos (Azul Alcián) abarcan de limbo a limbo sin respetar el estroma intermedio.',
    keyDrugs: [
      { name: 'Solución salina hipertónica 5% (NaCl 5%)', dose: '1 gota cada 4 a 6 horas y pomada nocturna', warning: 'Agente deshidratante osmótico indispensable para el edema matutino en Distrofia de Fuchs.' },
      { name: 'Ripasudil / Netarsudil (Inhibidores ROCK)', dose: '1 gota cada 12 horas en protocolo DSO', warning: 'Estimula la proliferación y migración de células endoteliales periféricas tras descemetorrexis central.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'La Regla de Oro de las Tinciones Estromales (Marilyn Monroe)',
        category: 'Mnemotecnia',
        description: 'Mnemotecnia clásica universal: "Marilyn Monroe Always Gets Her Man in L.A. County":\n• M-M-A: Macular = Mucopolisacárido = Alcian blue (Azul Alcián).\n• G-H-M: Granular = Hialina = Masson trichrome (Tricrómico de Masson).\n• L-A-C: Lattice = Amiloide = Congo red (Rojo Congo con birrefringencia verde manzana).',
        trapToAvoid: 'Asignar el Rojo Congo a la distrofia granular o el Masson a la distrofia macular.'
      },
      {
        title: 'Por Qué LASIK está Contraindicado en Distrofia Granular / Avellino',
        category: 'Trampa de Tribunal',
        description: 'Pregunta canónica de Boards: "Un paciente joven asintomático con antecedentes familiares de distrofia granular tipo 2 (Avellino) desea someterse a Cirugía LASIK para miopía. ¿Cuál es la conducta?". Respuesta: El LASIK está FORMALMENTE CONTRAINDICADO. La fotoablación y el corte del flap reactivan exponencialmente la producción de TGFBI, generando una recurrencia densa y masiva de depósitos que opacifica la córnea de forma irreversible.',
        trapToAvoid: 'Aceptar realizar LASIK o PRK asumiendo que "la córnea es transparente ahora".'
      },
      {
        title: 'Herencia de las Distrofias Estromales',
        category: 'Cifra Clave de Corte',
        description: 'Lattice tipo 1 (TGFBI R124C), Granular tipo 1 (TGFBI R555W) y Granular tipo 2 (TGFBI R124H) son AUTOSÓMICAS DOMINANTES. La Distrofia Macular (CHST6) es AUTOSÓMICA RECESIVA.',
        trapToAvoid: 'Decir que todas las distrofias corneales estromales son dominantes.'
      }
    ],
    fellowshipKeyPoints: [
      'DMEK vs DSAEK en Distrofia de Fuchs: DMEK proporciona una recuperación visual más rápida (20/20 a 20/25 a los 3 meses), menor tasa de rechazo inmunológico (<1% a 5 años frente a 5-10% en DSAEK) y no induce hipermetropía hipermetrópica residual porque no trasplanta estroma adicional.',
      'DSO (Descemet Stripping Only): Indicado en pacientes con Distrofia de Fuchs donde las guttas están estrictamente confinadas a los 4-5 mm centrales y la periferia conserva >1000 cél/mm2; el endotelio periférico migra y cubre el área desnudada sin requerir tejido donante ni inmunosupresión.',
      'Distrofia de Schnyder (gen UBIAD1 en 1p36): Depósito estromal de colesterol y fosfolípidos que forma un anillo o cristales centrales amarillentos birrefringentes; exige perfil lipídico sérico para descartar hipercolesterolemia.'
    ],
    landmarkTrials: [
      {
        name: 'IC3D Classification of Corneal Dystrophies (2nd Edition)',
        year: '2015 (Cornea)',
        conclusion: 'Integró la genética molecular con la histopatología clínica creando el árbol taxonómico mundial de referencia categorizado por niveles de evidencia.',
        fellowshipRelevance: 'El estándar de clasificación universal evaluado en todos los exámenes de subespecialidad.'
      }
    ],
    histopathologyAndGenetics: 'En Distrofia de Fuchs: Engrosamiento de la membrana de Descemet con presencia de excrecencias colágenas focales posteriores nodulares (guttas) que protruyen hacia la cámara anterior, con atrofia y aplanamiento de las células endoteliales suprayacentes.',
    surgicalPearls: [
      'En preparación del tejido para DMEK: Despegar el rollo de Descemet-endotelio del donante (técnica de "peeling" con pinza) con extremo cuidado en el borde periférico para no desgarrar la membrana; el tejido adopta espontáneamente una configuración en rollo cilíndrico ("scroll") con el endotelio mirando hacia afuera.',
      'En cámara anterior: Emplear maniobras bimanuales de percusión suave sobre la superficie externa corneal ("tapping") para desenrollar el rollo de DMEK e inyectar una burbuja de aire o gas SF6 al 20% para aponer el injerto contra el estroma receptor.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 58 años consulta por visión borrosa matutina en ambos ojos que tarda 2 horas en aclararse tras levantarse. Al examen biomicroscópico con retroiluminación se aprecian múltiples guttas endoteliales densas en los 5 mm centrales de la córnea que confluyen en aspecto de "metal batido", con paquimetría corneal central matutina de 635 µm y endotelio con pleomorfismo severo en microscopía especular. ¿Cuál es el diagnóstico de certeza, qué gen presenta la mutación más frecuente y cuál es la técnica quirúrgica de elección cuando la descompensación persiste a lo largo del día?',
        answer: '1) Diagnóstico de certeza: Distrofia Endotelial de Fuchs (FECD) en fase de descompensación endotelial precoz con edema estromal matutino.\n2) Gen asociado más frecuente: Expansión de tripletes CTG en el intrón 3 del gen TCF4 (cromosoma 18q21).\n3) Técnica quirúrgica de elección: Queratoplastia Endotelial de Membrana de Descemet (DMEK). Permite el reemplazo selectivo de la membrana de Descemet y el endotelio enfermo por un injerto donante puro de 10-15 µm, logrando una visión de 20/20 a 20/25 con una tasa de rechazo inmunológico mínima (<1%).',
        trap: 'Proponer queratoplastia penetrante (PKP) convencional de grosor total en un paciente con estroma anterior completamente sano.'
      }
    ]
  },

  // =========================================================================
  // 5. QUERATOPATÍA BULLOSA PSEUDOFÁQUICA Y DISFUNCIÓN ENDOTELIAL
  // =========================================================================
  {
    id: 'deep-cornea-queratopatia-bullosa-endotelio',
    title: 'Queratopatía Bullosa Pseudofáquica y Disfunción Endotelial: Densidad Crítica, Terapia Hiperosmolar e Inhibidores ROCK',
    subspecialtyId: 'cornea',
    summary: 'Monografía exhaustiva sobre descompensación endotelial adquirida postquirúrgica: fisiopatología de la pérdida endotelial crítica (<500-700 cél/mm2) tras cirugía de catarata complicada (energía ultrasónica excesiva, traumatismo mecánico, retención de fragmentos nucleares en ángulo o implante de LIO de cámara anterior de fijación angular), cascade de edema estromal a edema epitelial con formación y ruptura de bulas dolorosas, manejo médico conservador (agentes osmóticos NaCl 5%, vendaje terapéutico con lente de contacto, reducción de PIO), nuevas dianas farmacológicas con inhibidores de la kinasa asociada a Rho (ROCK inhibitors: Ripasudil, Netarsudil), Descemet Stripping Only (DSO), técnicas quirúrgicas de queratoplastia endotelial (DMEK vs DSAEK) y procedimientos paliativos para ojos ciegos dolorosos (recubrimiento conjuntival de Gundersen y micropunción estromal anterior).',
    definitionAndEpidemiology: 'La Queratopatía Bullosa Pseudofáquica (PBK) o Afáquica (ABK) es la descompensación edematosa irreversible de la córnea debida a la pérdida celular masiva del endotelio tras cirugía intraocular del segmento anterior (principalmente facoemulsificación o implante de lentes intraoculares). Históricamente representaba la indicación número uno de queratoplastia penetrante en el mundo occidental; hoy en día se maneja mediante técnicas lamelares de microincisión (DMEK/DSAEK).',
    anatomyAndPathophysiology: '1. Fisiología de la Bomba Endotelial y Densidad Crítica:\n   • El endotelio corneal es una monocapa de células hexagonales unidas por zónulas occludens incompletas que no se dividen activamente in vivo (permanecen arrestadas en fase G1 del ciclo celular).\n   • Densidad normal al nacer: ~3500-4000 cél/mm2; en adulto joven: ~2500-3000 cél/mm2; pérdida fisiológica senil: 0.5-0.6% al año.\n   • DENSIDAD CELULAR CRÍTICA: Cuando la densidad cae por debajo de 500 a 700 células/mm2, la actividad de la bomba Na+/K+ ATPasa y los canales de bicarbonato se vuelven cuantitativamente insuficientes para expulsar el agua que filtra pasivamente desde la cámara anterior.\n2. Secuencia Patogénica del Edema Corneal:\n   • Pérdida de la deshidratación estromal fisiológica (78% de hidratación normal) -> hinchamiento del estroma corneal con pérdida del espaciamiento regular lamelar de las fibrillas de colágeno (edema estromal difuso con estrías de Descemet).\n   • El fluido a tensión atraviesa la membrana de Bowman hacia el epitelio basal.\n   • Edema epitelial intra e intercelular (microquistes epiteliales).\n   • Confluencia del líquido subepitelial formando grandes ampollas o bulas que despegan el epitelio de la membrana de Bowman (Queratopatía Bullosa).\n   • RUPTURA DE BULAS: Expone terminaciones nerviosas libres de las fibras ciliares del trigémino -> dolor ocular agudo exquisito, fotofobia y blefaroespasmo, con puerta de entrada para sobreinfección bacteriana secundaria.',
    clinicalExamination: {
      biomicroscopy: 'Córnea engrosada edematosa de aspecto en "vidrio deslustrado" con pérdida del brillo epitelial. Presencia de microquistes intraepiteliales y bulas epiteliales transparentes sobreelevadas que se tiñen en su base con fluoresceína sódica al romperse. Edema estromal difuso de limbo a limbo con pliegues gruesos en la membrana de Descemet. En cámara anterior: valorar posición del LIO (LIO en saco vs LIO de cámara anterior con soporte angular), presencia de vítreo en cámara anterior tocando el endotelio (síndrome de contacto vítreo-endotelial), o fragmentos cristalinianos retenidos en seno cameral.',
      fundus: 'Visión borrosa del fondo por pérdida de transparencia de medios; ecografía modo B indicada si se sospecha edema macular quístico concomitante (Síndrome de Irvine-Gass) o patología vitreorretiniana.',
      specialSigns: '• Test de Fluoresceína: Zonas de desepitelización focal con fluorescencia brillante tras el estallido de bulas.\n• Tonometría de Aplanación de Goldmann Falsamente Baja: El edema estromal y epitelial reduce artificialmente la resistencia corneal a la aplanación, arrojando lecturas de PIO significativamente subestimadas (la PIO real puede estar marcadamente más alta).'
    },
    diagnosticWorkup: [
      {
        test: 'Microscopía Especular de No Contacto',
        findings: 'Imposible de obtener reflejo especular en áreas con edema epitelial severo; en áreas periféricas viables muestra densidad endotelial crítica (<500-600 cél/mm2), marcada pérdida de hexagonalidad (<50% pleomorfismo) y aumento de polimegatismo (>40%).'
      },
      {
        test: 'OCT de Segmento Anterior (AS-OCT)',
        findings: 'Medición micrométrica del espesor corneal central (CCT frecuentemente >650-800 µm), delimitación de bulas subepiteliales y visualización de la posición anatómica de las hápticas y óptica del LIO respecto al endotelio.'
      },
      {
        test: 'Gonioscopia de Cuatro Espejos de Sussman / Goldmann',
        findings: 'Descartar restos cristalinianos o fragmentos nucleares impactados en el ángulo camerular inferior o sinequias anteriores periféricas extensas que mantengan inflamación endotelial crónica.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Distrofia Endotelial de Fuchs en Fase Avanzada', distinction: 'Bilateral, presencia de guttas endoteliales abundantes en el ojo contralateral no intervenido, progresión lenta previa a la cirugía.' },
      { condition: 'Síndrome de Rechazo del Injerto Endotelial', distinction: 'Ocurre en un ojo con trasplante previo; presencia de la línea de Khodadoust con precipitados queráticos endoteliales sobre el botón donante.' },
      { condition: 'Queratopatía Tóxica del Segmento Anterior (TASS)', distinction: 'Inflamación estéril masiva hiperaguda a las 12-24 horas postoperatorias con hipopion estéril y edema corneal de limbo a limbo por toxicidad química de instrumental quirúrgico o viscoelásticos.' }
    ],
    steppedManagement: {
      medical: '• Terapia Médica Conservadora (Fase Inicial / Preparación Quirúrgica):\n  1) Agentes Hiperosmolares Tópicos:\n     - Cloruro de Sodio al 5% (NaCl 5%) en colirio (1 gota cada 4 horas) y ungüento al acostarse; crea un gradiente osmótico que deshidrata el epitelio corneal reduciendo las bulas.\n     - Uso de secador de pelo con aire tibio a distancia por las mañanas durante 5-10 minutos.\n  2) Control Riguroso de la Presión Intraocular:\n     - Mantener la PIO en rangos bajos (10 a 14 mmHg) con hipotensores tópicos (Brimonidina, Timolol, Dorzolamida) para reducir la fuerza hidrostática que empuja el agua hacia el estroma.\n     - EVITAR análogos de prostaglandinas (Latanoprost/Bimatoprost) por riesgo de exacerbar edema macular quístico (Irvine-Gass) o reactivar inflamación.\n  3) Alivio del Dolor de Bulas Rotas:\n     - Lente de contacto terapéutico blando de hidrogel de silicona de uso continuo prolongado (actúa como vendaje corneal protegiendo las terminaciones nerviosas libres expuestas).\n     - Colirios lubricantes y antibiótico profiláctico sin conservantes (Moxifloxacino 0.5%) mientras persistan defectos epiteliales.\n  4) Terapia Farmacológica Regenerativa (Inhibidores de ROCK):\n     - Colirios de inhibidores de Rho-quinasa (Ripasudil al 0.4% o Netarsudil al 0.02% cada 12 horas): Promueven la adhesión, migración y proliferación de células endoteliales periféricas remanentes.',
      surgical: '• Cirugía de Reemplazo Endotelial Selectivo (Estándar de Oro Moderno):\n  1) Queratoplastia Endotelial de Membrana de Descemet (DMEK):\n     - Técnica de elección si la superficie corneal y el estroma anterior no presentan cicatrices o fibrosis subepitelial permanente.\n     - Reemplazo puro de membrana de Descemet y endotelio (10-15 µm).\n  2) Queratoplastia Endotelial Automatizada con Disección de Descemet (DSAEK):\n     - Indicada en ojos con anatomía alterada, afaquia, LIO de cámara anterior, iris anómalo o vitrectomizados previos.\n• Manejo Simultáneo del LIO Malposicionado:\n  - Si existe un LIO de cámara anterior de fijación angular antiguo o contacto vítreo: Explantación del LIO + Vitrectomía anterior profunda + Fijación escleral de un nuevo LIO (técnica de Yamane) o fijación iridiana retroiris (lente Artisan) en el mismo tiempo quirúrgico del trasplante endotelial.\n• Procedimientos Paliativos para Ojos Ciegos Dolorosos (Sin Potencial Visual Útil):\n  - Recubrimiento Conjuntival Total de Gundersen: Desepitelización corneal y deslizamiento de un colgajo conjuntival bulbar delgado sobre la córnea desnudada; elimina el dolor de las bulas al sepultar las terminaciones nerviosas bajo epitelio conjuntival vascularizado.\n  - Micropunción Estromal Anterior con Aguja (ASP): Induce cicatrización fibrótica focal entre epitelio y Bowman impidiendo la formación de nuevas bulas.'
    },
    clinicalApplicationPractical: '1. Ante una queratopatía bullosa con bulas rotas, NUNCA prescribir colirios anestésicos tópicos para el dolor a demanda domiciliaria; el abuso de anestésicos provoca necrosis epitelial masiva, melting estromal y perforación corneal.\n2. La tonometría de Goldmann sobre una córnea con edema epitelial subestima la PIO real en hasta 10 mmHg; palpar digitalmente el ojo o considerar la tonometría de contorno dinámico (Pascal) si se sospecha glaucoma hipertensivo asociado.\n3. Si el estroma corneal ha desarrollado neovascularización profunda o fibrosis cicatrizal densa irreversible tras años de queratopatía bullosa, la queratoplastia endotelial (DMEK/DSAEK) ya no devolverá la transparencia visual central y estará indicada una Queratoplastia Penetrante (PKP) de grosor total.',
    highYieldPearl: 'Endothelial Pump Failure: Cuando la densidad celular endotelial desciende de 500-700 cél/mm2, la deshidratación activa estromal se interrumpe y la presión hidrostática intraocular fuerza la entrada masiva de líquido, culminando en la formación de bulas epiteliales dolorosas.',
    keyDrugs: [
      { name: 'Solución salina hipertónica 5% (NaCl 5%)', dose: '1 gota cada 4 horas + pomada nocturna', warning: 'Deshidrata el epitelio por gradiente osmótico; ardor transitorio tras instilación.' },
      { name: 'Brimonidina 0.2% + Timolol 0.5%', dose: '1 gota cada 12 horas', warning: 'Hipotensor ocular de elección; reduce el flujo acuoso y el gradiente de filtración endotelial.' },
      { name: 'Ripasudil 0.4% (Inhibidor ROCK)', dose: '1 gota cada 12 horas', warning: 'Uso en disfunción endotelial y protocolo DSO; induce hiperemia conjuntival transitoria.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Cifra Crítica de Densidad Celular Endotelial',
        category: 'Cifra Clave de Corte',
        description: 'La densidad celular endotelial crítica por debajo de la cual el estroma corneal se descompensa inexorablemente en edema crónico y queratopatía bullosa es de 500 a 700 células/mm2 (densidad normal >2500 cél/mm2).',
        trapToAvoid: 'Indicar facoemulsificación en un paciente con recuento endotelial previo de 600 cél/mm2 sin advertir formalmente del altísimo riesgo de requerir DMEK posterior.'
      },
      {
        title: 'Conducta Paliativa en Ojo Ciego Doloroso por Queratopatía Bullosa',
        category: 'Pregunta Clásica',
        description: 'Pregunta canónica de Boards: "¿Cuál es el procedimiento quirúrgico de elección para aliviar el dolor intractable por ruptura de bulas en un ojo ciego sin potencial visual (agudeza visual No Percepción Luminosa)?". Respuesta: Recubrimiento conjuntival de Gundersen (Gundersen flap) o micropunción estromal anterior. Un trasplante de córnea está proscrito en un ojo sin visión útil.',
        trapToAvoid: 'Indicar trasplante corneal (DMEK o PKP) en un ojo ciego sin pronóstico de rehabilitación visual.'
      },
      {
        title: 'Tonometría Engañosa en Córnea Edematosa',
        category: 'Trampa de Tribunal',
        description: 'En queratopatía bullosa, la tonometría de Goldmann en el centro corneal marca presiones falsamente bajas debido al efecto "esponja" del estroma hidratado. Un paciente puede estar en glaucoma severo de 35 mmHg y el tonómetro registrar 14 mmHg.',
        trapToAvoid: 'Descartar hipertensión ocular o suspender hipotensores basándose en una tonometría de aplanación central en córnea edematosa.'
      }
    ],
    fellowshipKeyPoints: [
      'Gundersen Flap: Colgajo conjuntival delgado pediculado disecado libre de cápsula de Tenon que se rota y sutura sobre la córnea completamente desepitelizada; elimina el dolor de las bulas en >98% de los casos.',
      'DMEK en Ojos con LIO de Cámara Anterior: Si el paciente tiene un LIO de soporte angular que causa la descompensación, el LIO debe retirarse obligatoriamente; dejar el LIO de CA destruirá el nuevo injerto endotelial en meses por traumatismo mecánico.',
      'Síndrome de Irvine-Gass Concomitante: Ocurre en un 15-20% de pacientes con queratopatía bullosa pseudofáquica crónica; siempre que los medios lo permitan o tras el aclaramientodel injerto, descartar edema macular con OCT de mácula.'
    ],
    landmarkTrials: [
      {
        name: 'Melles et al. / Descemet Membrane Endothelial Keratoplasty (DMEK)',
        year: '2006 (Cornea)',
        conclusion: 'Pioneros en la técnica de trasplante puro de membrana de Descemet y endotelio que revolucionó el tratamiento de la queratopatía bullosa con resultados visuales sin precedentes.',
        fellowshipRelevance: 'La mayor revolución quirúrgica en patología corneal de las últimas dos décadas.'
      }
    ],
    histopathologyAndGenetics: 'En queratopatía bullosa: Ausencia casi total de células endoteliales sobre la superficie posterior de la membrana de Descemet, edema masivo estromal con pérdida de la birrefringencia del colágeno, desprendimiento ampollar del epitelio de la membrana de Bowman y engrosamiento fibroso subepitelial cicatrizal (pannus corneal degenerativo).',
    surgicalPearls: [
      'En DMEK sobre ojo pseudofáquico con queratopatía bullosa: Mantener la pupila en miosis farmacológica intraoperatoria estricta con Carbacol o Acetilcolina intracameral para evitar que la burbuja de aire o gas que sostiene el injerto se desplace detrás del iris hacia la cámara vítrea.',
      'Al realizar Descemetorrexis receptora: Usar un gancho inverso de Price para pelar la Descemet en un diámetro de 8.5 a 9.0 mm asegurando una superficie estromal limpia sin remanentes que interfieran con la aposición del injerto.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 72 años con antecedente de cirugía de catarata complicada con rotura de cápsula posterior e implante de LIO de cámara anterior en ojo izquierdo hace 3 años presenta disminución visual severa (cuenta dedos) y dolor ocular urente matutino diario con sensación de cuerpo extraño. A la biomicroscopía se aprecian bulas epiteliales confluentes centrales, varias de ellas rotas con defecto epitelial, edema estromal con CCT de 740 µm y el LIO de cámara anterior en contacto próximo con el endotelio periférico. ¿Cuál es el diagnóstico sindrómico exacto, cuál es la conducta médica inmediata para el dolor y cuál es el plan quirúrgico definitivo?',
        answer: '1) Diagnóstico exacto: Queratopatía Bullosa Pseudofáquica (PBK) descompensada con bulas epiteliales rotas, secundaria a daño endotelial mecánico continuado por LIO de cámara anterior.\n2) Conducta médica inmediata para el dolor: Colocación de un Lente de Contacto Terapéutico blando de vendaje con antibiótico tópico profiláctico sin conservantes (Moxifloxacino) y solución salina hipertónica al 5% (NaCl 5%) para aliviar el dolor de las terminaciones nerviosas expuestas y acelerar la reepitelización.\n3) Plan quirúrgico definitivo:\n   a) Explantación obligatoria del LIO de cámara anterior que perpetúa la lesión endotelial.\n   b) Vitrectomía anterior profunda reglada para limpiar cualquier resto de vítreo en cámara anterior.\n   c) Implante de un nuevo LIO fijado escleralmente sin suturas (técnica de Yamane) o fijado a iris en cámara posterior.\n   d) Queratoplastia Endotelial de Membrana de Descemet (DMEK) o DSAEK en el mismo tiempo o de forma diferida para restaurar la función de la bomba endotelial y la transparencia corneal.',
        trap: 'Realizar un trasplante endotelial (DMEK) dejando el LIO de cámara anterior in situ (el contacto con el LIO destruirá el injerto donante).'
      }
    ]
  }
,
  // =========================================================================
  // 6. TRAUMA CORNEAL, EROSIÓN RECURRENTE, CUERPOS EXTRAÑOS Y QUEMADURA QUÍMICA
  // =========================================================================
  {
    id: 'deep-cornea-trauma-erosion-cuerpo-extrano-quemadura',
    title: 'Trauma Corneal, Síndrome de Erosión Recurrente, Cuerpos Extraños y Quemadura Química (Roper-Hall, Dua y SLET)',
    subspecialtyId: 'cornea',
    summary: 'Monografía exhaustiva sobre traumatología de la córnea y urgencias reconstructivas: cuerpos extraños corneales metálicos superficiales e intraestromales, remoción precisa del anillo de óxido férrico (siderosis focal), síndrome de erosión corneal recurrente (RES/RCES) con disfunción de hemidesmosomas y membrana basal epitelial, algoritmo médico-quirúrgico escalonado (pomada hipertónica NaCl 5%, doxiciclina + esteroide suave para inhibir MMP-9, micropunción estromal anterior ASP y PTK excímer), laceraciones de espesor parcial y total con técnica de sutura radial 10-0, y quemaduras químicas agudas por álcalis vs ácidos con estratificación pronóstica de Roper-Hall y Dua, protocolo de irrigación inmediata de urgencia con Ringer Lactato / Diphoterine, terapia médica anticatabólica (Ácido Ascórbico tópico y sistémico, Doxiciclina, Citrato de sodio) y reconstrucción quirúrgica de la superficie ocular con membrana amniótica y trasplante simple de células madre límbicas (SLET).',
    definitionAndEpidemiology: 'El traumatismo corneal y de la superficie ocular constituye una de las principales causas de morbilidad visual prevenible en edad laboral y de consultas en servicios de urgencias oftalmológicas (hasta el 15-20% de las urgencias). Las quemaduras químicas por álcalis representan una urgencia médica absoluta en la que el tiempo de lavado de los primeros minutos dicta el pronóstico de supervivencia de las células madre del limbo esclerocorneal.',
    anatomyAndPathophysiology: '1. Cuerpos Extraños Corneales y Anillo de Óxido:\n   • Impacto de partículas de hierro a alta velocidad (esmerilado, soldadura, corte de metales).\n   • Liberación rápida de iones de hierro (Fe2+/Fe3+) que reaccionan con el agua del estroma y forman hidróxido de hierro, depositándose en forma de un anillo de óxido castaño en la membrana de Bowman y estroma anterior.\n   • La persistencia del anillo de óxido perpetúa la quimiotaxis de neutrófilos, retarda la reepitelización y puede causar necrosis estromal estéril o cicatrización opaca con astigmatismo irregular.\n2. Síndrome de Erosión Corneal Recurrente (RCES / RES):\n   • Fisiopatología: Ausencia o disfunción adquirida o congénita de los complejos de anclaje epitelial (hemidesmosomas, fibrillas de colágeno VII y lámina lúcida de la membrana basal epitelial).\n   • Asociación clínica: Traumatismo mecánico corneal previo por uña de bebé o rama vegetal (frecuentemente meses o años antes), o distrofia primaria de membrana basal epitelial (EBMD / Cogan).\n   • Durante el sueño REM con párpados cerrados y disminución de oxígeno, el epitelio se edematiza ligeramente y se adhiere a la conjuntiva palpebral superior; al abrir bruscamente los párpados al despertar, el epitelio se desgaja mecánicamente de la membrana de Bowman.\n   • Aumento patológico crónico de metaloproteinasa de matriz 9 (MMP-9) en las lágrimas que disuelve prematuramente las láminas basales regeneradas.\n3. Quemaduras Químicas (Álcalis vs Ácidos):\n   • Álcalis (lejía, soda cáustica NaOH, amoníaco NH3, cal viva Ca(OH)2): Provocan SAPONIFICACIÓN de los ácidos grasos de las membranas celulares y desnaturalización de los glucosaminoglicanos estromales. No tienen efecto barrera; penetran rápidamente en segundos al estroma, cámara anterior, endotelio, iris y cristalino causando necrosis licuefactiva profunda y daño masivo a las células madre límbicas (LSCs).\n   • Ácidos (sulfúrico, clorhídrico, fluorhídrico): Coagulan las proteínas tisulares formando una barrera insoluble precipitada ("escara") que limita la penetración a planos profundos (a excepción del ácido fluorhídrico, que actúa como álcali por la penetración del ion fluoruro).\n   • Consecuencia terminal: Deficiencia de Células Madre Límbicas (LSCD) con conjuntivalización de la córnea, neovascularización, queratinización y pérdida de la transparencia.',
    clinicalExamination: {
      biomicroscopy: '• Cuerpos extraños: Partícula radiopaca metálica o vegetal localizada en epitelio o estroma; presencia de edema estromal perilesional y anillo de óxido anaranjado-marrón circundante. Cámara anterior con reacción inflamatoria ciliar (Tyndall 1+ a 2+).\n• Erosión recurrente: Defecto epitelial irregular o áreas de epitelio "flácido" sobreelevado que se desprende con la espátula o al parpadeo; microquistes epiteliales y líneas en mapa en el lecho.\n• Quemadura química: Grado de clarificación corneal vs aspecto en "vidrio esmerilado" o "córnea de porcelana"; isquemia límbica evaluada por el blanqueamiento vascular en los 360 grados del limbo esclerocorneal; pérdida de epitelio conjuntival y corneal; necrosis palpebral y quemosis severa.',
      fundus: 'En quemaduras graves o sospecha de cuerpo extraño intraocular (IOFB): No visualizable directamente si hay opacidad corneal; descartar perforación o IOFB mediante TC orbitaria sin contraste y ecografía ocular modo B de urgencia.',
      specialSigns: '• Test de Seidel con Fluoresceína al 2%: Demuestra fuga de humor acuoso (prueba positiva: reguero de color verde claro diluido por el acuoso oscuro) confirmando microperforación o laceración corneal de espesor completo.\n• Signo de Isquemia Límbica: Blanqueamiento avascular de la red vascular perilímbica; el grado horario de afectación (horas de reloj límbico) es el biomarcador pronóstico número uno de ceguera corneal permanente.'
    },
    diagnosticWorkup: [
      {
        test: 'Medición Inmediata del pH Conjuntival con Tira Reactiva',
        findings: 'Prueba imperativa en quemadura química: Colocar tira de papel tornasol o tira urinaria en fondo de saco inferior; el pH normal de la superficie ocular es de 7.0 a 7.4. Un pH >8.0 indica álcali activo residual; un pH <6.5 indica ácido.'
      },
      {
        test: 'OCT de Segmento Anterior (AS-OCT)',
        findings: 'Determinación exacta de la profundidad de impacto del cuerpo extraño corneal, grosor de estroma residual tras remoción y delimitación de fístulas corneales micrométricas.'
      },
      {
        test: 'Tinción con Fluoresceína Sódica y Filtro Azul Cobalto',
        findings: 'Delimitación del área de desepitelización corneal; detección de microdesgarros epiteliales y prueba de Seidel para descartar herida penetrante.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Cuerpo Extraño Intraocular Oculto (IOFB) con Microperforación', distinction: 'Herida corneal autoperforada pequeña con iris desplazado o prolapsado, hipotonía ocular, defecto pupilar aferente relativo o asimetría de profundidad de cámara anterior; obligatorio solicitar TC de órbita multicorte.' },
      { condition: 'Queratitis Infecciosa Sobreañadida a Quemadura o Erosión', distinction: 'Aparición de un infiltrado estromal blanquecino denso con necrosis purulenta, hipopion o aumento marcado del dolor tras 24-48 horas.' },
      { condition: 'Queratitis por Adenovirus con Infiltrados Subepiteliales', distinction: 'Antecedente de conjuntivitis epidémica folicular con secreción acuosa y adenopatía preauricular semanas antes, múltiples infiltrados numulares subepiteliales redondos bilaterales.' }
    ],
    steppedManagement: {
      medical: '• PROTOCOLO DE URGENCIA ABSOLUTA EN QUEMADURAS QUÍMICAS:\n  1) Irrigación Inmediata Profusa:\n     - Iniciar de inmediato SIN demora para exámenes ni anamnesis prolongada.\n     - Solución de elección: Ringer Lactato (o solución salina 0.9% o Diphoterine si está disponible); irrigar un mínimo de 1 a 2 litros durante al menos 15 a 30 minutos utilizando un lente de irrigación de Morgan o cánula IV.\n     - Evertir párpados superior e inferior (doble eversión con separador de Desmarres) y barrer mecánicamente fondos de saco con hisopo para retirar partículas sólidas retenidas (como cal viva residual).\n     - Medir pH conjuntival cada 10 minutos post-lavado; mantener irrigación continua hasta lograr pH neutro estricto (7.0 - 7.4) verificado a los 15 minutos de cesar la infusión.\n  2) Terapia Médica Anticatabólica y Reepitelizante:\n     - Ácido Ascórbico (Vitamina C): Estimula la síntesis de colágeno por los queratocitos; dosis: 2 g/día vía oral + colirio de Ascorbato sódico al 10% cada 2 horas.\n     - Doxiciclina oral 100 mg cada 12 horas: Potente inhibidor no competitivo de metaloproteinasas (MMP-8 y MMP-9), previniendo el melting estromal.\n     - Citrato de Sodio tópico al 10%: Quelante de calcio e inhibidor de la desgranulación y activación de neutrófilos polimorfonucleares.\n     - Corticoides tópicos potentes (Acetato de Prednisolona 1% cada 1-2 horas): Disminuyen la inflamación destructiva aguda; ATENCIÓN CRÍTICA: Deben suspenderse o reducirse a partir del día 10-14 por riesgo de inhibir la síntesis de colágeno y favorecer el melting estromal.\n     - Ciclopléjico tópico (Atropina 1% cada 8-12 horas) y lubricantes sin conservantes.\n• MANEJO DEL ANILLO DE ÓXIDO Y CUERPO EXTRAÑO:\n  - Instilación de anestésico tópico (Tetracaína/Proparacaína al 0.5%).\n  - Extracción del cuerpo extraño con aguja de calibre fino (27G o 30G) bajo lámpara de hendidura con bisel hacia arriba.\n  - Remoción completa del anillo de óxido férrico residual con fresa rotatoria de Algerbrush o punta de aguja; si el óxido es muy profundo central, puede dejarse que migre hacia la superficie en 24-48 horas para su extracción segura sin perforar.\n• MANEJO ESCALONADO DE LA EROSIÓN CORNEAL RECURRENTE (RCES):\n  1) Fase Aguda: Lente de contacto blando terapéutico de vendaje + colirio antibiótico sin conservantes (Moxifloxacino) + lubricación intensa.\n  2) Fase de Mantenimiento (Mínimo 6 a 12 meses): Pomada de Cloruro de Sodio hipertónico al 5% (NaCl 5%) nocturna al acostarse; la hiperosmolaridad deshidrata el epitelio y fortalece las uniones de hemidesmosomas.\n  3) Tratamiento Anti-MMP-9: Doxiciclina oral 50-100 mg/día combinada con Fluorometolona tópica 0.1% cada 8 horas durante 6 a 8 semanas.',
      surgical: '• Intervenciones Quirúrgicas en Trauma y Quemaduras:\n  - Trasplante Simple de Células Madre Límbicas (SLET): Tratamiento de elección moderno para deficiencia límbica unilateral; se extrae un pequeño fragmento de limbo sano donante (2x2 mm) del ojo contralateral, se divide en 8-10 microinjertos y se distribuyen sobre la córnea desnudada adheridos con adhesivo de fibrina tisular sobre una membrana amniótica receptora.\n  - Recubrimiento con Membrana Amniótica (AMT): Aplicada precozmente en quemaduras agudas grado II a IV de Roper-Hall; aporta propiedades antiinflamatorias, antifibróticas y factores de crecimiento epitelial.\n  - Micropunción Estromal Anterior con Aguja (ASP) en RCES: Múltiples punciones superficiales (profundidad de 50-100 µm) en el área de la membrana de Bowman desepitelizada fuera del eje visual con aguja 25G/27G; estimula la fibrosis focal y anclaje epitelial.\n  - Queratectomía Fototerapéutica (PTK con Láser Excímer): Ablación superficial de 5 a 10 micras de la membrana de Bowman irregular para permitir una reepitelización basal sana adherente.'
    },
    clinicalApplicationPractical: '1. NUNCA esperar a que se normalice la historia clínica o se disponga de colirios especiales para empezar a lavar una quemadura por álcalis; cada segundo de retraso en la irrigación significa pérdida irreparable de células madre límbicas y daño transmural al iris y endotelio.\n2. Si el cuerpo extraño es de hierro y queda un anillo de óxido periférico, debe fresarse completamente con Algerbrush; si no se retira el óxido, la córnea continuará inflamada, dolorosa y tardará semanas en cerrar.\n3. Si un paciente joven despierta a las 4 de la mañana con dolor ocular súbito lacinante tras abrir los ojos y tiene el antecedente de un rasguño con la uña de su hijo hace un año, el diagnóstico es Síndrome de Erosión Corneal Recurrente; prescribir pomada hipertónica de NaCl 5% nocturna obligatoria por al menos 6 meses para prevenir recidivas.',
    highYieldPearl: 'Roper-Hall vs Dua Classification: La escala clásica de Roper-Hall estratifica las quemaduras en Grados I a IV basándose en la clarificación corneal y la isquemia límbica. La Clasificación de Dua (Grados I a VI) es más sensible al cuantificar la isquemia límbica en horas de reloj (horas de limbo) y el porcentaje de conjuntiva bulbar necrosada (Dua Grado VI = >9 horas de isquemia límbica y >75% de conjuntiva afectada, pronóstico visual muy malo).',
    keyDrugs: [
      { name: 'Ácido Ascórbico (Vitamina C)', dose: '2 g/día oral + colirio 10% cada 2 horas', warning: 'Cofactor esencial de la prolil y lisil hidroxilasa para la síntesis de colágeno estromal nuevo en quemaduras químicas.' },
      { name: 'Doxiciclina oral', dose: '100 mg cada 12 horas por 2 a 3 meses', warning: 'Inhibe metaloproteinasas MMP-8 y MMP-9 degradantes de colágeno; reduce riesgo de descemetocele y melting.' },
      { name: 'Pomada Salina Hipertónica 5% (NaCl)', dose: 'Aplicar al acostarse durante 6 a 12 meses', warning: 'Pilar angular preventivo de recurrencias en síndrome de erosión corneal recurrente (RCES).' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Manejo Inicial Indispensable de Quemadura por Cal Viva',
        category: 'Pregunta Clásica',
        description: 'La cal viva (óxido de calcio) al contacto con el agua experimenta una reacción exotérmica que produce hidróxido de calcio y calor. Sin embargo, la prioridad absoluta sigue siendo la irrigación inmediata profusa con barrido mecánico exhaustivo con hisopo de todos los fondos de saco tras eversión palpebral doble para remover todo remanente sólido particulado.',
        trapToAvoid: 'Retrasar el lavado buscando soluciones neutralizantes químicas; el agua corriente o el Ringer Lactato son el tratamiento inmediato.'
      },
      {
        title: 'Límite Temporal Estricto para Corticoides en Quemaduras Químicas',
        category: 'Trampa de Tribunal',
        description: 'Los corticoides tópicos intensivos son fundamentales los primeros 7 a 10 días para frenar la quimiotaxis de neutrófilos, pero DEBEN suspenderse o reducirse a partir del día 10-14. A partir de esa fecha, los queratocitos intentan reparar el estroma y los esteroides inhiben la síntesis de colágeno, promoviendo el colapso estromal y la perforación.',
        trapToAvoid: 'Mantener corticoides potentes durante más de 14 días continuados en una quemadura con defecto epitelial persistente.'
      },
      {
        title: 'Mecanismo de Acción de la Doxiciclina en Quemaduras y RCES',
        category: 'Pregunta Clásica',
        description: 'Pregunta recurrente en exámenes de especialidad: "¿Por qué se utiliza doxiciclina oral en traumatismos químicos corneales y erosión recurrente si no hay infección bacteriana?". Respuesta: Por su potente acción antiinflamatoria no antimicrobiana como inhibidor directo de las metaloproteinasas de matriz colagenasas (MMP-2, MMP-8 y MMP-9).',
        trapToAvoid: 'Creer que la doxiciclina se prescribe como profilaxis antibiótica contra infecciones bacterianas en estos contextos.'
      }
    ],
    fellowshipKeyPoints: [
      'Simple Limbal Epithelial Transplantation (SLET): Técnica desarrollada por Virender Sangwan (2012) que requiere solo un área mínima de 2x2 mm de limbo donante sano autólogo, a diferencia de los injertos tradicionales de limbo amplio (CLAU) que ponían en riesgo el ojo donante.',
      'Test de Seidel Oculto: Presionar suavemente el globo ocular sobre el párpado superior o el limbo opuesto mientras se observa con filtro azul cobalto; una microfístula corneal puede no fugar espontáneamente pero fugar con la maniobra de Valsalva o presión digital leve.',
      'Siderosis Corneal Residual: El óxido de hierro no removido tiñe irreversiblemente la membrana de Bowman y los queratocitos estromales circundantes, generando un leucoma refractivo definitivo con fotofobia refleja persistente.'
    ],
    landmarkTrials: [
      {
        name: 'Sangwan et al. / Simple Limbal Epithelial Transplantation (SLET)',
        year: '2012 (Br J Ophthalmol)',
        conclusion: 'En 125 pacientes con deficiencia de células madre límbicas unilateral por quemaduras químicas, la técnica SLET logró una superficie corneal avascular, transparente y epitelizada en el 76% de los casos con solo una pequeña biopsia del ojo contralateral sano.',
        fellowshipRelevance: 'El estándar de oro mundial actual para la reconstrucción de la superficie ocular en quemaduras monoculares.'
      }
    ],
    histopathologyAndGenetics: 'En biopsia de superficie ocular en deficiencia límbica por quemadura química: Pérdida total de células basales del limbo, metaplasia escamosa epitelial con queratinización superficial, células caliciformes en la superficie corneal (confirmadas mediante tinción de PAS o inmunohistoquímica para Citoqueratina CK19 y MUC5AC) demostrando la invasión conjuntival anómala (conjuntivalización de la córnea).',
    surgicalPearls: [
      'Al suturar una laceración corneal traumática con nylon 10-0: Los puntos deben ser radiales apuntando perpendicularmente al meridiano de la herida, con mordidas más largas en el centro y más cortas cerca del limbo para evitar aplanar el meridiano central, enterrando siempre los nudos hacia el lado escleral o límbico para facilitar la reepitelización.',
      'En la preparación del lecho para SLET o AMT en quemaduras químicas: Realizar una peritomía de 360 grados disecando minuciosamente todo el tejido fibrovascular y pannus conjuntivalizado que invade la córnea hasta exponer una membrana de Bowman limpia antes de fijar los microinjertos.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un trabajador de la construcción de 34 años es traído a urgencias 20 minutos después de que una bolsa de cemento (cal viva) explotara en su rostro. Refiere dolor extremo y disminución de visión en ojo derecho. A la llegada usted observa partículas blancuzcas entre los párpados. ¿Cuál es su conducta inmediata minuto a minuto, cómo evaluará la gravedad con la clasificación de Dua y cuál será la terapia médica anticatabólica que instaurará una vez normalizado el pH?',
        answer: '1) Conducta Inmediata: NO interrogar extensamente ni enviar a admisión. Tras instilar tetracaína anestésica tópica, iniciar irrigación ocular profusa inmediata con Ringer Lactato (mínimo 2 litros durante 30 minutos). Evertir doblemente ambos párpados y barrer exhaustivamente fondos de saco con hisopo para retirar todo resto sólido de cal. Medir pH conjuntival con tira reactiva y continuar lavando hasta alcanzar pH 7.0 a 7.4 estable 15 minutos tras detener la infusión.\n2) Clasificación de Gravedad de Dua: Examinar el limbo bajo lámpara de hendidura con filtro azul y luz blanca: evaluar las horas de reloj de blanqueamiento isquémico límbico (0 a 12 horas) y el porcentaje de conjuntiva bulbar necrosada (0 a 100%). Grado I-II: <3 horas de isquemia (excelente pronóstico); Grado IV: 6 a 9 horas de isquemia (pronóstico reservado); Grado V-VI: >9 a 12 horas de isquemia límbica completa con >75% de conjuntiva dañada (pronóstico muy grave con pérdida total de células madre límbicas).\n3) Terapia Médica Anticatabólica:\n   - Ácido Ascórbico oral (2 g/día) + colirio de ascorbato de sodio 10% cada 2 horas.\n   - Doxiciclina oral 100 mg cada 12 horas para inhibir colagenasas y MMP-9.\n   - Citrato de sodio tópico al 10% cada 2 horas.\n   - Acetato de prednisolona 1% cada 2 horas durante los primeros 7-10 días (suspender a partir del día 10-14).\n   - Ciclopléjico, lágrimas sin conservantes y considerar recubrimiento temprano con membrana amniótica (AMT) o preparación para SLET.',
        trap: 'Realizar un lavado de 5 minutos, registrar pH normal superficial mientras persisten fragmentos de cal en el fondo de saco superior que siguen liberando álcali.'
      }
    ]
  },

  // =========================================================================
  // 7. HERPES OCULAR: QUERATITIS POR VHS Y HERPES ZÓSTER OFTÁLMICO
  // =========================================================================
  {
    id: 'deep-cornea-herpes-ocular-vhs-vzo',
    title: 'Herpes Ocular: Queratitis por Virus Herpes Simple (VHS), Herpes Zóster Oftálmico (HZO), Ensayos HEDS I/II y Signo de Hutchinson',
    subspecialtyId: 'cornea',
    summary: 'Monografía integral sobre infecciones herpéticas de la córnea y segmento anterior: Virus Herpes Simple tipo 1 (VHS-1) con sus diferentes fenotipos clínicos (queratitis epitelial infecciosa dendrítica y geográfica, queratitis estromal inmune no necrotizante, queratitis estromal necrotizante fulminante, endotelitis disciforme hipertensiva y queratopatía neurotrófica secundaria), análisis metodológico exhaustivo de los ensayos multicéntricos HEDS (Herpetic Eye Disease Study I y II), pautas de profilaxis antiviral oral a largo plazo (Aciclovir 400 mg c/12h o Valaciclovir 500 mg/día) y contraindicaciones absolutas del uso de corticoides en fase epitelial; y Herpes Zóster Oftálmico (HZO) por reactivación del Virus Varicela-Zóster en la rama oftálmica V1 del nervio trigémino, valor diagnóstico y pronóstico del signo de Hutchinson (nervio nasociliar), diferenciación de pseudodendritas zosterianas vs dendritas verdaderas de VHS, protocolo de tratamiento con Valaciclovir a dosis plenas (1000 mg c/8h por 7-10 días) y manejo de la neuralgia postherpética (NPH).',
    definitionAndEpidemiology: 'El Virus Herpes Simple (VHS) y el Virus Varicela-Zóster (VVZ) son virus ADN de la familia Herpesviridae con capacidad de latencia de por vida en el ganglio sensitivo del trigémino (ganglio de Gasser). La queratitis por VHS es la causa infecciosa número uno de ceguera corneal unilateral en países desarrollados. La reactivación de HZO ocurre en hasta un 20% de la población general a lo largo de su vida, con una incidencia marcadamente incrementada en mayores de 50 años e inmunodeprimidos.',
    anatomyAndPathophysiology: '1. Latencia y Reactivación Viral del VHS-1:\n   • Infección primaria: Generalmente en la infancia por contacto mucocutáneo oral o conjuntival (frecuentemente asintomática o como blefaroconjuntivitis folicular con adenopatía preauricular).\n   • Transporte axoplásmico retrógrado a través de los nervios sensoriales ciliares hasta el ganglio sensitivo trigeminal de Gasser, donde el genoma viral permanece en estado latente episomal.\n   • Estímulos desencadenantes: Fiebre, radiación ultravioleta (UVB), estrés emocional, menstruación, microtraumatismos o inmunosupresión sistémica/tópica inducen transcripción viral activa y transporte anterógrado hacia el epitelio corneal.\n2. Subtipos Clínicos Fisiopatológicos del VHS:\n   • Queratitis Epitelial Infecciosa (Dendrítica / Geográfica): Replicación viral activa y citólisis directa de las células epiteliales corneales con formación de vesículas intraepiteliales que confluyen formando una lesión ulcerosa lineal ramificada con bulbos terminales. El uso erróneo de corticoides tópicos inhibe la respuesta inmune local, permitiendo la proliferación descontrolada confluente del virus en forma de "úlcera geográfica" o ameboide.\n   • Queratitis Estromal Inmune (Intersticial / No Necrotizante): Reacción de hipersensibilidad mediada por linfocitos T CD4+ e inmunocomplejos (tipo IV y III de Gell y Coombs) frente a antígenos virales retenidos en el estroma corneal. Cursa con infiltrado estromal y edema estromal con EPITELIO INTACTO.\n   • Queratitis Estromal Necrotizante: Combinación destructiva de invasión y replicación viral activa directa en los queratocitos estromales sumada a una respuesta inflamatoria inmune masiva; genera necrosis caseosa licuefactiva estromal, vascularización profunda y alto riesgo de descemetocele y perforación.\n   • Endotelitis Corneal (Disciforme): Inflamación mediada por inmunidad celular dirigida contra las células endoteliales corneales; provoca fallo transitorio de la bomba endotelial con edema estromal y epitelial circunscrito en disco redondo central o paracentral, acompañado de precipitados queráticos retroqueráticos (PKs) e hipertensión ocular por trabeculitis concomitante.\n   • Queratopatía Neurotrófica Herpética: Pérdida persistente de la sensibilidad corneal (hipoestesia/anestesia) debida a la destrucción de las terminaciones nerviosas sensoriales del plexo subbasal trigeminal; conduce a defecto epitelial persistente indoloro con bordes redondeados engrosados y cicatrización deficiente.\n3. Herpes Zóster Oftálmico (HZO) y Signo de Hutchinson:\n   • Reactivación del VVZ en la primera división (V1 oftálmica) del quinto par craneal.\n   • El nervio nasociliar inerva la punta, el ala y el dorso de la nariz a través del nervio nasal externo, así como las estructuras intraoculares (córnea, iris, cuerpo ciliar). Las vesículas herpéticas en la punta de la nariz (SIGNO DE HUTCHINSON POSITIVO) correlacionan con un riesgo superior al 75-80% de complicaciones intraoculares graves (uveítis anterior hipertensiva con atrofia sectorial de iris, queratitis estromal profunda, escleritis y neuropatía óptica).',
    clinicalExamination: {
      biomicroscopy: '• VHS Epitelial: Úlcera dendrítica característica: ramificación dicotómica con bordes sobreelevados y bulbos o botones terminales verdaderos en los extremos de las ramas; tiñe intensamente en el lecho central ulcerado con fluoresceína sódica (defecto epitelial) y en los bordes marginales con rosa de Bengala o verde de lisamina (células epiteliales infectadas cargadas de viriones activos).\n• VHS Estromal Inmune: Infiltrado estromal nebuloso unifocal o multifocal con edema estromal circundante y pliegues en Descemet, SIN defecto epitelial suprayacente; puede presentar anillo inmune de Wessely (precipitado de inmunocomplejos antígeno-anticuerpo estromales).\n• Endotelitis Disciforme: Área redonda circunscrita de edema estromal y epitelial de bordes nítidos, con finos precipitados queráticos blanquecinos adheridos al endotelio exclusivamente en el área de edema; cámara anterior con Tyndall leve y PIO elevada.\n• HZO Pseudodendritas: Lesiones epiteliales ramificadas en placas estrelladas sobreelevadas mucinosas SIN bulbos terminales verdaderos, con tinción mínima de fluoresceína y tinción prominente con rosa de Bengala; típicamente sobre una superficie corneal con hipoestesia severa.',
      fundus: 'En HZO: Examen minucioso de periferia retiniana para descartar Necrosis Retiniana Aguda (ARN) o Necrosis Retiniana Externa Progresiva (PORN), caracterizadas por infiltrados retinianos blanquecinos confluentes y vasculitis oclusiva periférica.',
      specialSigns: '• Estesometría Corneal de Cochet-Bonnet: Hipoestesia o anestesia corneal marcada (longitud de filamento <30-40 mm indica compromiso neurotrófico severo).\n• Signo de Hutchinson: Erupción vesicular en la punta o ala lateral de la nariz en HZO; orienta a afectación intraocular inminente o activa.'
    },
    diagnosticWorkup: [
      {
        test: 'Microscopía Confocal In Vivo (IVCM - Heidelberg HRT/Rostock)',
        findings: 'Visualización directa de la destrucción masiva y adelgazamiento del plexo nervioso subbasal corneal; presencia de células dendríticas presentadoras de antígeno hiperactivas y microrrizomas regenerativos anómalos.'
      },
      {
        test: 'PCR en Tiempo Real de Frotis Corneal o Humor Acuoso',
        findings: 'Detección cuantitativa de ADN viral de VHS-1, VHS-2 o VVZ; prueba de elección en casos atípicos, queratitis estromal necrotizante, endotelitis dudosa o sospecha de necrosis retiniana.'
      },
      {
        test: 'Tinción con Rosa de Bengala / Verde de Lisamina',
        findings: 'Tiñe con coloración magenta o verde brillante las células epiteliales degeneradas y cargadas de viriones vivos que bordean los bulbos terminales de la úlcera dendrítica de VHS.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Pseudodendrita por Queratitis por Acanthamoeba', distinction: 'Dolor desproporcionado respecto a los signos clínicos, usuario de lentes de contacto o exposición a aguas recreativas, infiltrados perineurales radiales en nervios estromales, falta de respuesta a antivirales tópicos.' },
      { condition: 'Úlcera Epitelial por Abuso de Anestésicos Tópicos', distinction: 'Defecto epitelial anular persistente con infiltrado estromal en anillo amarillento denso central, edema severo y queratopatía neurotrófica secundaria a toxicidad química.' },
      { condition: 'Queratitis por Adenovirus (EKC)', distinction: 'Infiltrados subepiteliales numulares bilaterales que no tiñen con fluoresceína, precedidos por conjuntivitis folicular hiperaguda con pseudomembranas y adenopatía preauricular dolorosa.' }
    ],
    steppedManagement: {
      medical: '• ALGORITMO TERAPÉUTICO DIFERENCIAL DEL HERPES OCULAR:\n  1) Queratitis Epitelial Infecciosa por VHS (Dendrítica / Geográfica):\n     - Antiviral Tópico: Gel de Ganciclovir al 0.15% (Virgan) 1 gota 5 veces al día hasta la reepitelización (usualmente 5-7 días), luego 1 gota 3 veces al día durante 7 días adicionales; O Pomada de Aciclovir 3% 5 veces al día.\n     - Alternativa Oral (preferida en intolerancia tópica o toxicidad epitelial): Valaciclovir 500 mg vía oral cada 12 horas o Aciclovir 400 mg 5 veces al día durante 7 a 10 días.\n     - Desbridamiento epitelial suave con hisopo estéril de los bordes dendríticos (reduce la carga viral viva).\n     - CORTICOIDES TÓPICOS RIGUROSAMENTE CONTRAINDICADOS (riesgo de úlcera geográfica gigante, melting y perforación).\n  2) Queratitis Estromal Inmune y Endotelitis por VHS (Conclusiones Ensayo HEDS I):\n     - Corticoides Tópicos: Acetato de Prednisolona 1% (o Dexametasona 0.1%) cada 2 a 4 horas inicialmente; una vez controlada la inflamación, instaurar una PAUTA DESCENDENTE MUY LENTA durante varios meses (retirar 1 gota cada 4 a 6 semanas para evitar el efecto rebote).\n     - Cobertura Antiviral Profiláctica Obligatoria: Siempre asociar Aciclovir oral 400 mg cada 12 horas o Valaciclovir 500 mg/día mientras dure el tratamiento con esteroides tópicos.\n  3) Queratitis Estromal Necrotizante por VHS:\n     - Dosis Antiviral Terapéutica Plena Sistémica: Valaciclovir oral 1000 mg cada 8 horas o Aciclovir 800 mg 5 veces al día.\n     - Corticoides tópicos administrados con extrema precaución solo tras haber asegurado concentraciones antivirales sistémicas terapéuticas plenas por al menos 48 horas.\n  4) Profilaxis de Recurrencias según Ensayo Landmark HEDS II:\n     - Indicada en pacientes con 2 o más episodios al año o queratitis estromal previa: Aciclovir oral 400 mg dos veces al día (o Valaciclovir 500 mg una vez al día) durante un periodo mínimo de 1 año continuo (reduce la tasa de recurrencias en un 41% a 50%).\n  5) Herpes Zóster Oftálmico (HZO) Agudo:\n     - Terapia Antiviral Sistémica Inmediata: Valaciclovir oral 1000 mg cada 8 horas (o Aciclovir oral 800 mg 5 veces al día, o Famciclovir 500 mg cada 8 horas) durante 7 a 10 días.\n     - Iniciar obligatoriamente en las primeras 72 horas del exantema para reducir la duración de las lesiones y la incidencia de neuralgia postherpética (NPH).\n     - Manejo de Uveítis o Queratitis Estromal en HZO: Corticoides tópicos de descenso lento + ciclopléjicos.\n     - Manejo de la Neuralgia Postherpética (NPH): Gabapentina (iniciando 300 mg/día hasta 1800 mg/día) o Pregabalina (75-150 mg c/12h); parches dérmicos de Lidocaína al 5% o Capsaicina.',
      surgical: '• Queratoplastia en Córnea Herpética (PKP o DALK):\n  - SOLO debe realizarse con el ojo en "frío absoluto" (mínimo 6 a 12 meses libre de cualquier signo de inflamación activa).\n  - Profilaxis antiviral sistémica perioperatoria mandatoria: Aciclovir oral 400-800 mg c/12h durante al menos 1 a 2 años post-trasplante para evitar el rechazo o reactivación sobre el injerto donante.\n• Cenegermin (Factor de Crecimiento Nervioso rhNGF - Oxervate): Tratamiento médico biológico aprobado para queratopatía neurotrófica herpética estadios 2 y 3 (1 gota 6 veces al día durante 8 semanas), induce regeneración de las fibras nerviosas y cierre del defecto epitelial persistente.\n• Recubrimiento conjuntival o tarsorrafia temporal para úlceras neurotróficas refractarias.'
    },
    clinicalApplicationPractical: '1. Regla de Oro en Guardia de Urgencias: NUNCA prescribir colirios combinados de antibiótico con corticoide (como Tobramicina + Dexametasona) a un ojo rojo con tinción positiva a fluoresceína sin haber descartado microscópicamente una dendrita herpética. Un corticoide en una dendrita la transformará en una úlcera geográfica gigante en 48-72 horas.\n2. Todo paciente con signo de Hutchinson positivo (vesícula en la punta nasal) requiere examen oftalmológico exhaustivo con lámpara de hendidura, tonometría de aplanación (riesgo de trabeculitis hipertensiva) y fondo de ojo con pupila dilatada, independientemente de que refiera o no síntomas oculares en ese momento.\n3. En queratitis estromal inmune herpética, el descenso de los corticoides tópicos debe ser extraordinariamente lento; retirar el corticoide bruscamente genera un rebote inmunológico devastador con necrosis estromal.',
    highYieldPearl: 'HEDS Landmark Conclusions: El Herpetic Eye Disease Study I (HEDS I) demostró que los corticoides tópicos coadyuvantes aceleran significativamente la resolución de la queratitis estromal herpética no necrotizante. El HEDS II demostró que la profilaxis oral con Aciclovir 400 mg dos veces al día durante 1 año reduce a la mitad el riesgo de recurrencia de queratitis estromal y en un 41% cualquier forma de herpes ocular.',
    keyDrugs: [
      { name: 'Gel de Ganciclovir 0.15% (Virgan)', dose: '1 gota 5 veces al día hasta reepitelización, luego 3 veces al día por 7 días', warning: 'Menor toxicidad epitelial que la pomada de Aciclovir 3%; fármaco tópico de elección en úlcera dendrítica.' },
      { name: 'Valaciclovir oral', dose: 'HZO: 1000 mg cada 8 horas (7-10 días); VHS terapéutico: 500 mg c/12h; Profilaxis: 500 mg/día', warning: 'Profármaco con biodisponibilidad oral 3 a 5 veces superior al aciclovir; ajustar dosis según filtrado glomerular renal.' },
      { name: 'Cenegermin 20 µg/mL (Oxervate)', dose: '1 gota cada 2 horas (6 veces al día) durante 8 semanas', warning: 'Factor de crecimiento nervioso recombinante humano para queratopatía neurotrófica estadio 2-3; mantener refrigerado.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Signo de Hutchinson y su Inervación Anatómica Exacta',
        category: 'Asociación Patognomónica',
        description: 'El Signo de Hutchinson (vesículas herpéticas en el ala, punta o raíz nasal) corresponde a la distribución del nervio nasal externo, rama terminal del NERVIO NASOCILIAR (división V1 oftálmica del trigémino). Dado que el nervio nasociliar también proporciona la inervación sensorial a la córnea y globo ocular (a través de los nervios ciliares largos), su afectación cutánea predice en >75% inflamación intraocular grave.',
        trapToAvoid: 'Responder que la punta de la nariz está inervada por la rama maxilar (V2); el nervio nasociliar pertenece estrictamente a V1.'
      },
      {
        title: 'Diferencia Biomicroscópica entre Dendrita de VHS y Pseudodendrita de HZO',
        category: 'Pregunta Clásica',
        description: 'La dendrita verdadera de VHS es una úlcera excavada que presenta bulbos terminales ("terminal buds") verdaderos en los extremos de las ramas, con tinción central de fluoresceína y bordes con rosa de bengala. La pseudodendrita de HZO es una lesión en placa SOBREELEVADA, ramificada pero SIN bulbos terminales, con escasa o nula tinción con fluoresceína y tinción prominente con rosa de bengala.',
        trapToAvoid: 'Tratar una pseudodendrita zosteriana de HZO con colirios antivirales tópicos; se trata de una reacción epitelial hiperplásica que requiere antivirales sistémicos y lubricación.'
      },
      {
        title: 'Pauta de Profilaxis Antiviral según Ensayo HEDS II',
        category: 'Cifra Clave de Corte',
        description: 'La pauta recomendada y validada por el ensayo landmark HEDS II para prevenir recurrencias de queratitis estromal herpética es Aciclovir oral 400 mg dos veces al día (o Valaciclovir 500 mg una vez al día) durante un periodo ininterrumpido de 12 meses (1 año).',
        trapToAvoid: 'Prescribir profilaxis durante solo 1 o 2 meses; las recurrencias aumentan drásticamente si se interrumpe antes del año.'
      }
    ],
    fellowshipKeyPoints: [
      'Atrofia Sectorial de Iris en Uveítis Herpética: La endotelitis y queratouveítis por VHS o VVZ cursan con trabeculitis e isquemia del esfínter pupilar, dejando atrofia sectorial del iris con transiluminación positiva (la atrofia es típicamente en parches/difusa en VHS y sectorial bien delimitada en HZO).',
      'Queratoplastia en Queratitis Herpética Inactiva: Tasa de supervivencia del injerto del 80-90% si se opera tras un periodo de inactividad inflamatoria estricta >=6 meses y bajo profilaxis sistémica continua con aciclovir 400 mg c/12h por 1 a 2 años.',
      'Necrosis Retiniana Aguda (ARN): Complicación vitreorretiniana devastadora asociada a VHS-1 o VVZ; triada de arteriolitis oclusiva periférica retiniana, necrosis retiniana multifocal confluente y vitritis severa; requiere tratamiento antiviral intravenoso inmediato y vitrectomía temprana por riesgo altísimo de desprendimiento de retina regmatógeno por desgarros gigantes.'
    ],
    landmarkTrials: [
      {
        name: 'HEDS I & II (Herpetic Eye Disease Study Group)',
        year: '1994 - 1998 (Arch Ophthalmol / Ophthalmology / NEJM)',
        conclusion: 'HEDS I: Los corticoides tópicos aceleran significativamente la resolución de la queratitis estromal activa cuando se combinan con antivirales tópicos. HEDS II: El aciclovir oral profiláctico a dosis de 400 mg dos veces al día durante 1 año reduce en un 41% el riesgo de recurrencia de cualquier tipo de herpes ocular y en un 50% la queratitis estromal en pacientes con antecedentes frecuentes.',
        fellowshipRelevance: 'La serie de ensayos clínicos aleatorizados más influyente en la historia del manejo de las infecciones herpéticas de la córnea.'
      }
    ],
    histopathologyAndGenetics: 'En biopsia corneal o frotis de Tzanck: Células gigantes multinucleadas con cuerpos de inclusión intranucleares eosinofílicos de Cowdry tipo A (patognomónicos de infección por virus de la familia Herpesviridae); pérdida total de los queratocitos estromales e infiltración difusa por linfocitos T CD4+ y macrófagos.',
    surgicalPearls: [
      'Al realizar Queratoplastia Lamelar Anterior Profunda (DALK) en pacientes con leucoma cicatrizal postherpético inactivo: Asegurarse de que el paciente no haya presentado episodios previos de endotelitis; si hubo afección endotelial, la queratoplastia penetrante (PKP) es la técnica indicada debido a la pérdida celular endotelial subclínica.',
      'Sutura en Queratoplastia Post-Herpética: Utilizar puntos sueltos de monofilamento de nylon 10-0 en lugar de sutura continua, permitiendo retirar selectivamente cualquier punto flojo o neovascularizado que pueda precipitar un rechazo inmune o reactivación herpética focal.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente varón de 68 años con antecedentes de hipertensión arterial consulta por dolor urente periorbitario derecho intenso de 4 días de evolución, seguido de la aparición de una erupción vesicular eritematosa en la frente derecha y en la punta de la nariz. A la exploración biomicroscópica presenta ojo rojo con hiperemia ciliar moderada, córnea con lesiones ramificadas lineales sobreelevadas mucinosas en el tercio superior que no tienen bulbos terminales y tiñen escasamente con fluoresceína, cámara anterior con celularidad 2+ y PIO de 32 mmHg en ojo derecho. ¿Cuál es el diagnóstico clínico exhaustivo, cuál es el significado anatómico del signo en la punta nasal, qué fármacos sistémicos y tópicos prescribirá inmediatamente y cuál es el plan de profilaxis a largo plazo?',
        answer: '1) Diagnóstico Clínico Exhaustivo: Herpes Zóster Oftálmico (HZO) agudo en territorio de la rama V1 con Signo de Hutchinson positivo, complicado con Queratitis Epitelial por Pseudodendritas Zosterianas y Queratouveítis Anterior Hipertensiva (Trabeculitis Herpética aguda).\n2) Signo de Hutchinson: Compromiso de la rama nasal externa del nervio nasociliar (división V1); indica invasión viral de las ramas que inervan el globo ocular y predice afectación intraocular grave en >75% de los pacientes.\n3) Esquema Farmacológico Inmediato:\n   a) Terapia Antiviral Sistémica: Valaciclovir oral 1000 mg cada 8 horas (o Aciclovir 800 mg 5 veces/día) durante 7 a 10 días para frenar la replicación viral y reducir el riesgo de neuralgia postherpética.\n   b) Terapia Antihipertensiva Ocular: Hipotensores acuosos tópicos (Timolol 0.5% + Dorzolamida 2% cada 12 horas o Brimonidina 0.2%); EVITAR análogos de prostaglandinas por riesgo de empeorar la uveítis.\n   c) Terapia Antiinflamatoria Tópica: Corticoide tópico (Acetato de Prednisolona 1% cada 2 a 4 horas) para controlar la trabeculitis y la uveítis anterior; colirio ciclopléjico (Ciclopentolato 1% cada 8 horas) para el dolor y prevención de sinequias posteriores.\n   d) Lubricantes tópicos sin conservantes para proteger el epitelio corneal.\n4) Manejo de la Neuralgia Postherpética (NPH): Si el dolor neuropático urente persiste tras la fase aguda, iniciar precozmente neuromoduladores (Gabapentina 300 a 1800 mg/día o Pregabalina 75 a 150 mg cada 12 horas). Recomendar vacunación recombinante Shingrix para prevención secundaria tras la resolución del cuadro.',
        trap: 'Confundir las pseudodendritas zosterianas con dendritas de VHS y contraindicar erróneamente los corticoides tópicos para la trabeculitis y uveítis hipertensiva que requiere esteroides de urgencia.'
      }
    ]
  },

  // =========================================================================
  // 8. ALERGIA OCULAR Y QUERATOCONJUNTIVITIS VERNAL O ATÓPICA
  // =========================================================================
  {
    id: 'deep-cornea-alergia-vernal-atopica-gpc',
    title: 'Alergia Ocular: Queratoconjuntivitis Vernal (VKC), Atópica (AKC), Papilar Gigante (GPC) y Queratoconjuntivitis Límbica Superior (SLK)',
    subspecialtyId: 'cornea',
    summary: 'Monografía exhaustiva sobre el espectro de hipersensibilidad alérgica e inmunológica ocular: Queratoconjuntivitis Vernal (VKC) en niños y adolescentes masculinos (papilas gigantes en empedrado "cobblestone" tarsales superiores, puntos de Horner-Trantas límbicos y úlcera en escudo / Shield ulcer mediada por toxicidad de la proteína básica mayor de eosinófilos), Queratoconjuntivitis Atópica (AKC) en adultos con dermatitis eccematosa (papilas tarsales inferiores, blefaritis crónica cicatrizal, neovascularización periférica de 360 grados, simbléfaron y asociación directa a queratocono por frotamiento ocular crónico), Conjuntivitis Papilar Gigante (GPC) no atópica secundaria a cuerpos extraños y lentes de contacto blandos (acúmulo de depósitos proteicos antigénicos desnaturalizados), y Queratoconjuntivitis Límbica Superior de Theodore (SLK) asociada a disfunción tiroidea (hiperemia bulbar superior, queratitis punteada superior, microtraumatismo por fricción palpebral y resección conjuntival); junto con el algoritmo terapéutico escalonado moderno con inmunomoduladores tópicos ahorradores de corticoides (Ciclosporina A 0.1% catiónica - Verkazia e Ikervis, Tacrolimus ungüento oftálmico 0.03-0.1%), esteroides de baja penetración (Loteprednol / Fluorometolona) y manejo quirúrgico de la úlcera en escudo.',
    definitionAndEpidemiology: 'Las alergias oculares representan un espectro clínico que oscila desde formas benignas autolimitadas (Conjuntivitis Alérgica Estacional SAC y Perenne PAC, afectando al 15-25% de la población) hasta formas severas con amenaza visual permanente como la Queratoconjuntivitis Vernal (VKC) y la Queratoconjuntivitis Atópica (AKC). La VKC predomina en varones de 4 a 15 años en climas cálidos y secos (Mediterráneo, Latinoamérica, Oriente Medio), con tendencia a remitir tras la pubertad. La AKC es una enfermedad crónica bilateral del adulto (20 a 50 años) fuertemente asociada a dermatitis atópica severa y asma.',
    anatomyAndPathophysiology: '1. Mecanismos Inmunológicos Diferenciales:\n   • SAC y PAC: Reacciones de hipersensibilidad inmediata Tipo I mediadas por IgE pura. Desgranulación de mastocitos con liberación de histamina, triptasa y leucotrienos que inducen prurito agudo, vasodilatación conjuntival y quemosis.\n   • VKC y AKC: Reacciones inmunológicas mixtas (Tipo I mediada por IgE + Tipo IV mediada por linfocitos T colaboradores Th2):\n     - Infiltración masiva de la conjuntiva por mastocitos, eosinófilos activados y linfocitos T.\n     - Secreción de citocinas Th2 (IL-4, IL-5, IL-13) que reclutan eosinófilos y perpetúan la producción de IgE.\n     - DESGRANULACIÓN DE EOSINÓFILOS: Liberan proteínas citotóxicas catiónicas directas: Proteína Básica Mayor (MBP), Proteína Catiónica de Eosinófilos (ECP) y Neurotoxina Derivada de Eosinófilos (EDN).\n     - FISIOPATOLOGÍA DE LA ÚLCERA EN ESCUDO (Shield Ulcer): La Proteína Básica Mayor (MBP) es directamente citotóxica para las células epiteliales corneales y degrada la membrana de Bowman, impidiendo la migración y adherencia epitelial y generando una úlcera ovalada indolente y excavada en el tercio superior de la córnea.\n2. Subtipos Clínicos Clásicos:\n   • Queratoconjuntivitis Vernal (VKC):\n     a) Forma Palpebral: Hipertrofia papilar masiva en conjuntiva tarsal superior con papilas poligonales aplanadas >1 mm de diámetro ("aspecto en empedrado" o cobblestone appearance).\n     b) Forma Límbica: Común en razas pigmentadas (africanos y asiáticos); presencia de nódulos límbicos gelatinosos y Puntos de Horner-Trantas (agregados microscópicos blanquecinos de eosinófilos degenerados y restos epiteliales en el limbo superior).\n     c) Forma Mixta: Coexistencia de papilas tarsales y afección límbica.\n   • Queratoconjuntivitis Atópica (AKC):\n     - Afecta predominantemente la conjuntiva tarsal inferior con papilas más pequeñas pero con fibrosis conjuntival progresiva, pérdida de fondos de saco y acortamiento conjuntival (simbléfaron).\n     - Párpados: Eccema periorbitario crónico, engrosamiento en "cuello de gallo", madarosis (pérdida de pestañas en tercio lateral) y pliegue de Dennie-Morgan (doble pliegue cutáneo infraorbitario característico de atopia).\n     - Córnea: Neovascularización superficial periférica de 360 grados, queratopatía lipídica secundaria y altísimo riesgo de desarrollar queratocono por frotamiento ocular compulsivo crónico ("eye rubbing").\n   • Conjuntivitis Papilar Gigante (GPC):\n     - Reacción inmunológica no atópica inducida por traumatismo mecánico crónico y sensibilización antigénica por proteínas desnaturalizadas adheridas a cuerpos extraños (lentes de contacto blandos hidrofílicos en >90% de los casos, prótesis oculares o suturas de monofilamento de nylon expuestas tras queratoplastia o cirugía de cataratas).\n   • Queratoconjuntivitis Límbica Superior de Theodore (SLK):\n     - Inflamación crónica bilateral de etiología mecánica y microtraumática caracterizada por hiperemia conjuntival bulbar superior en llama, queratitis punteada superficial superior y filamentos epiteliales corneales.\n     - Fuerte asociación a disfunción tiroidea (Enfermedad de Graves-Basedow / tiroidopatía autoinmune en 30-50% de los pacientes).',
    clinicalExamination: {
      biomicroscopy: '• VKC: Papilas gigantes poligonales sobreelevadas en conjuntiva tarsal superior tras eversión palpebral, secreción mucosa espesa y elástica filamentosa en "cuerdas de violín", puntos de Horner-Trantas blanco-amarillentos en el limbo esclerocorneal superior, queratopatía punteada epitelial superior de Tobgy que puede confluir formando una Úlcera en Escudo (Shield Ulcer) ovalada superficial o profunda en el tercio superior/medio corneal.\n• AKC: Blefaritis eccematosa palpebral con escamas y fisuras cantonales, conjuntiva tarsal inferior hiperémica con papilas finas y fibrosis blanquecina subconjuntival, pannus neovascular corneal de 360 grados y opacidades subepiteliales.\n• GPC: Eversión palpebral superior muestra papilas gigantes con centro vascularizado e hiperemia en usuario de lentes de contacto que refiere intolerancia y desplazamiento continuo del lente.',
      fundus: 'Generalmente normal; en pacientes pediátricos con VKC que han recibido corticoides tópicos prolongados no controlados, evaluar excavación de la papila óptica para descartar glaucoma cortisónico iatrogénico grave y catarata subcapsular posterior.',
      specialSigns: '• Puntos de Horner-Trantas: Acúmulos focales de eosinófilos patognomónicos en el limbo superior.\n• Úlcera en Escudo de Tobgy (Grados 1 a 3): Grado 1 (defecto epitelial superficial plano); Grado 2 (úlcera con bordes engrosados y base opaca con placa de moco y detritos de MBP); Grado 3 (úlcera profunda con placa calcificada o lipídica densa que no reepiteliza).\n• Signo de Hertoghe: Pérdida o adelgazamiento del tercio lateral de las cejas en queratoconjuntivitis atópica y eccema severo.'
    },
    diagnosticWorkup: [
      {
        test: 'Eversión Palpebral Superior Obligatoria',
        findings: 'Examen clínico cardinal imprescindible: Visualización directa de las papilas gigantes en empedrado (diámetro >1 mm) en el tarso superior; indispensable en cualquier niño con prurito intenso, fotofobia o secreción filamentosa.'
      },
      {
        test: 'Citología de Raspado Conjuntival (Tinción de Giemsa)',
        findings: 'Identificación de abundantes eosinófilos intraepiteliales (la presencia de tan solo 1 a 2 eosinófilos por campo de gran aumento es diagnóstica de alergia ocular activa, ya que el epitelio conjuntival normal carece totalmente de eosinófilos).'
      },
      {
        test: 'Pruebas de Función Tiroidea (TSH, T4 libre, Anticuerpos Anti-TPO y TSI)',
        findings: 'Indicadas en toda sospecha de Queratoconjuntivitis Límbica Superior de Theodore (SLK) para descartar hipertiroidismo o tiroiditis autoinmune subyacente.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Conjuntivitis Folicular por Chlamydia (Tracoma o Inclusión)', distinction: 'Foliculos conjuntivales con centros germinales avasculares en fondo de saco inferior, vascularización corneal superior (pannus tracomatoso), líneas de cicatrización de Arlt en tarso superior.' },
      { condition: 'Toxicidad Farmacológica por Conservantes (BAK)', distinction: 'Queratopatía punteada difusa sin prurito predominante ni papilas gigantes tras uso prolongado de colirios hipotensores conservados.' },
      { condition: 'Penfigoide Ocular Cicatrizal (MMP)', distinction: 'Adultos mayores, fibrosis conjuntival progresiva con acortamiento simblefárico de fondos de saco inferiores, triquiasis y ausencia de prurito alérgico estacional.' }
    ],
    steppedManagement: {
      medical: '• ALGORITMO TERAPÉUTICO ESCALONADO EN ALERGIA OCULAR SEVERA (VKC / AKC):\n  1) Terapia de Base Continua:\n     - Antihistamínicos tópicos combinados con estabilizadores de mastocitos de acción dual (Olopatadina al 0.1-0.2% cada 12-24 horas, o Ketotifeno 0.025% cada 12 horas).\n     - Lágrimas artificiales frías sin conservantes (lavan mecánicamente alérgenos y citocinas proinflamatorias del film lagrimal).\n     - Compresas frías sobre párpados (vasoconstricción refleja y alivio del prurito).\n     - PROHIBICIÓN TERMINAL DEL FROTAMIENTO OCULAR ("No eye rubbing") para prevenir la ectasia corneal y queratocono secundario.\n  2) Inmunomoduladores Tópicos Ahorradores de Esteroides (Pilar Angular Moderno):\n     - Ciclosporina A catiónica tópica al 0.1% (Verkazia): Aprobada específicamente para VKC severa pediátrica; dosis: 1 gota 4 veces al día durante las fases activas, reduciendo a 2 veces al día como mantenimiento; inhibe selectivamente la transcripción de IL-2 en linfocitos T y frena la infiltración de eosinófilos.\n     - Ungüento de Tacrolimus oftálmico al 0.03% o 0.1%: Aplicado en fondo de saco conjuntival o en bordes palpebrales una o dos veces al día; extraordinariamente potente en AKC y VKC refractarias a ciclosporina.\n  3) Manejo de Brotes Agudos con Corticoides Tópicos:\n     - Esteroides "de superficie" con bajo perfil de elevación de PIO y baja penetración: Loteprednol etabonato al 0.5% o Fluorometolona al 0.1% cada 4 a 6 horas durante ciclos cortos de 1 a 2 semanas con retirada progresiva.\n     - Solo en brotes inflamatorios hiperagudos refractarios: Ciclo de choque ultracorto con Acetato de Prednisolona al 1% o Dexametasona durante 5 a 7 días.\n     - CONTROL ESTRICTO DE LA PIO EN CADA CONSULTA para prevenir glaucoma cortisónico pediátrico inadvertido.\n  4) Manejo Específico de la Conjuntivitis Papilar Gigante (GPC):\n     - Suspensión temporal inmediata del uso de lentes de contacto durante 3 a 6 semanas.\n     - Cambio a lentes de contacto desechables de reemplazo diario de hidrogel de silicona una vez resuelta la inflamación, o retirada de suturas expuestas.\n  5) Manejo de la Queratoconjuntivitis Límbica Superior (SLK):\n     - Lubricación intensa sin conservantes, lentes de contacto terapéuticos blandos de gran diámetro, aplicación de solución de nitrato de plata al 0.5% en la conjuntiva bulbar superior o inyecciones subconjuntivales de triamcinolona.',
      surgical: '• Manejo Quirúrgico de la Úlcera en Escudo (Shield Ulcer):\n  - Grado 1 (úlcera limpia superficial): Responde a tratamiento médico intensivo con colirio de Ciclosporina/Tacrolimus + antibiótico profiláctico + lente de contacto blando terapéutico de vendaje.\n  - Grado 2 y 3 (base con placa blanquecina de moco y MBP compactada o calcificada que impide la reepitelización):\n    * Desbridamiento quirúrgico mecánico del lecho ("scraping" o "debridement") bajo microscopio con hoja de bisturí nº 15 para remover completamente la placa de moco y detritos de eosinófilos hasta exponer la membrana de Bowman viable.\n    * Queratectomía superficial con o sin recubrimiento con Membrana Amniótica (AMT) fijada con suturas 10-0 o adhesivo de fibrina tisular para aportar factores tróficos y acelerar la reepitelización.\n• Resección Quirúrgica de Conjuntiva Bulbar Superior en SLK Refractaria:\n  - Resección en media luna (peritomía superior de 5 a 8 mm) de la conjuntiva bulbar redundante superior flácida para eliminar el tejido redundante traumatizado por el párpado.'
    },
    clinicalApplicationPractical: '1. NUNCA prescribir colirios de corticosteroides a repetición con receta abierta a pacientes con alergia ocular crónica (especialmente niños con VKC). El frotamiento continuo y el uso crónico de esteroides sin supervisión es la combinación más trágica en oftalmología pediátrica, resultando en glaucoma cortisónico terminal con ceguera irreversible y queratocono severo bilateral.\n2. Todo niño que acuda a la consulta con fotofobia intensa que le impide abrir los ojos, parpadeo constante y antecedentes de atopia DEBE ser sometido a eversión palpebral superior; si no se invierte el párpado, las papilas gigantes y la úlcera en escudo pasarán completamente desapercibidas.\n3. Si un paciente usuario de lentes de contacto blandos consulta porque su lente "se sube hacia arriba cada vez que parpadea" y presenta visión borrosa progresiva, sospechar Conjuntivitis Papilar Gigante (GPC); las papilas gigantes del tarso superior enganchan mecánicamente el borde del lente desplazándolo hacia el fondo de saco superior.',
    highYieldPearl: 'Shield Ulcer Pathogenesis: La úlcera en escudo de la queratoconjuntivitis vernal no es una úlcera infecciosa primaria; es una úlcera neuro-química tóxica provocada por la liberación masiva de Proteína Básica Mayor (MBP) de los eosinófilos concentrados en las papilas gigantes superiores, la cual impide físicamente la adherencia del epitelio corneal.',
    keyDrugs: [
      { name: 'Ciclosporina A catiónica 0.1% (Verkazia)', dose: '1 gota 4 veces al día durante brotes, reducir a 2 veces al día como mantenimiento', warning: 'Inmunomodulador ahorrador de corticoides de elección en VKC pediátrica; no eleva la PIO ni causa cataratas.' },
      { name: 'Tacrolimus ungüento oftálmico 0.03% - 0.1%', dose: 'Aplicar en fondo de saco inferior cada 12 a 24 horas', warning: 'Potencia inmunomoduladora superior a la ciclosporina; útil en AKC severa y eccema palpebral; sensación de ardor inicial.' },
      { name: 'Loteprednol etabonato 0.5%', dose: '1 gota cada 6 a 8 horas durante periodos cortos (máximo 2-3 semanas)', warning: 'Esteroide retro-metabólico con bajísima penetración y mínimo riesgo de hipertensión ocular.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Mecanismo de Toxicidad de la Úlcera en Escudo (Shield Ulcer)',
        category: 'Pregunta Clásica',
        description: 'Pregunta clásica de tribunal: "¿Qué sustancia bioquímica liberada por los eosinófilos es la responsable directa del daño tisular y falta de reepitelización en la úlcera en escudo de la queratoconjuntivitis vernal?". Respuesta: La Proteína Básica Mayor (MBP - Major Basic Protein).',
        trapToAvoid: 'Responder que la úlcera se produce por infección bacteriana sobreañadida o por traumatismo mecánico puro del párpado.'
      },
      {
        title: 'Asociación Patognomónica de Puntos de Horner-Trantas',
        category: 'Asociación Patognomónica',
        description: 'Los Puntos de Horner-Trantas son agregados blanquecinos discretos sobreelevados en el limbo corneal superior, compuestos exclusivamente por cúmulos de eosinófilos y células epiteliales necróticas; son patognomónicos de la Queratoconjuntivitis Vernal (VKC) en fase activa.',
        trapToAvoid: 'Confundirlos con flicténulas o islotes de Fuchs (los islotes de Fuchs se ubican en el margen de avance del pterigión).'
      },
      {
        title: 'Riesgo Iatrogénico Fatal de Corticoides en Niños con VKC',
        category: 'Trampa de Tribunal',
        description: 'Hasta un 30% de los niños son "altos respondedores" a corticoides tópicos (desarrollan elevación severa de la PIO >30 mmHg en pocas semanas). En niños pequeños, el glaucoma cortisónico cursa de forma asintomática sin dolor, provocando excavación papilar total irreversible antes de ser detectado.',
        trapToAvoid: 'Dar altas o recetas repetibles de corticoides tópicos sin control tonométrico riguroso cada 2 a 4 semanas.'
      }
    ],
    fellowshipKeyPoints: [
      'Asociación AKC y Queratocono: La queratoconjuntivitis atópica es el factor de riesgo sistémico más potente para el desarrollo y progresión rápida de ectasias corneales (queratocono y queratoglobo) debido a la combinación de degradación enzimática estromal por MMPs y el frotamiento ocular crónico incontrolable.',
      'Cataratas Atópicas: Pacientes con AKC severa presentan frecuentemente catarata atópica característica anterior o posterior en "escudo" o "forma estrellada" subcapsular anterior, secundaria a la liberación de mediadores inflamatorios y frotamiento crónico.',
      'Queratitis Infecciosa Sobreañadida en AKC: Marcada predisposición a queratitis bacteriana por Staphylococcus aureus y queratitis herpética recurrente (por alteración de la inmunidad celular epitelial mediada por Th1).'
    ],
    landmarkTrials: [
      {
        name: 'VEKTIS Study (Leonardi et al.)',
        year: '2019 (Ophthalmology)',
        conclusion: 'Ensayo clínico fase III multicéntrico, aleatorizado y doble ciego que demostró la eficacia y seguridad superior de la Ciclosporina A tópica al 0.1% en emulsión catiónica (Verkazia) en niños con queratoconjuntivitis vernal grave, logrando una reducción dramática en la puntuación de tinción corneal y necesidad de esteroides de rescate sin elevación de la PIO.',
        fellowshipRelevance: 'El ensayo landmark que estableció formalmente el cambio de paradigma de esteroides a inmunomoduladores tópicos en VKC.'
      }
    ],
    histopathologyAndGenetics: 'En biopsia de papilas gigantes en VKC y GPC: Proliferación de tejido conectivo estromal fibrovascular denso con engrosamiento epitelial e invaginaciones glanduliformes; infiltración masiva por mastocitos (frecuentemente desgranados), eosinófilos, células plasmáticas secretoras de IgE y linfocitos Th2 con sobreexpresión de receptores CCR3 y eotaxina.',
    surgicalPearls: [
      'Al desbridar una úlcera en escudo Grado 2-3 en quirófano: Utilizar una hoja de bisturí nº 15 para legrar tangencialmente la placa blancuzca cérea de la base hasta observar tejido corneal claro brillante subyacente; si la placa no se remueve por completo, el epitelio donante de los márgenes jamás migrará sobre ella.',
      'En resección de conjuntiva bulbar superior para SLK: Resecar un área de 5 mm de ancho adyacente al limbo de hora 10 a hora 2 sin coagular excesivamente la esclera subyacente, permitiendo que cicatrice por segunda intención para fijar la conjuntiva redundante a la episclera.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un niño de 9 años acude a consulta traído por sus padres por prurito ocular bilateral intolerable, lagrimeo y fotofobia extrema que le impide asistir al colegio en los meses de primavera y verano. A la inspección camina con la cabeza agachada y los ojos cerrados. Tras instilar anestésico tópico y evertir el párpado superior del ojo derecho, usted observa una masa de papilas poligonales aplanadas de 1.5 a 2 mm en aspecto de empedrado, abundantes filamentos mucosos elásticos y, en el tercio superior de la córnea, una lesión ovalada transversal de 3x2 mm con base blanquecina opaca y bordes sobreelevados que tiñe con fluoresceína. En el ojo izquierdo se observan nódulos gelatinosos en el limbo superior con puntos blanquecinos discretos. ¿Cuál es el diagnóstico sindrómico exacto en ambos ojos, qué complicación corneal presenta el ojo derecho y cuál es su estadio, y cuál es el esquema terapéutico médico-quirúrgico integral inmediato y a largo plazo?',
        answer: '1) Diagnósticos Sindrómicos:\n   • Queratoconjuntivitis Vernal (VKC) forma mixta (palpebral y límbica) bilateral severa activa.\n   • Ojo izquierdo: Queratoconjuntivitis vernal límbica con presencia patognomónica de Puntos de Horner-Trantas.\n   • Ojo derecho: Complicación con Úlcera en Escudo (Shield Ulcer) de Tobgy Grado 2 (úlcera con placa de moco y depósitos de Proteína Básica Mayor de eosinófilos en su lecho).\n2) Manejo Terapéutico Integral:\n   a) Manejo de la Úlcera en Escudo (OD):\n      - Desbridamiento mecánico en lámpara de hendidura o quirófano con hoja de bisturí para remover completamente la placa de moco y detritos citotóxicos de la base.\n      - Colocación de lente de contacto blando terapéutico de vendaje + colirio antibiótico profiláctico sin conservantes (Moxifloxacino 0.5% cada 6 horas).\n   b) Terapia Médica Antiinflamatoria e Inmunomoduladora (Ambos Ojos):\n      - Inmunomodulador Ahorrador de Esteroides: Ciclosporina A catiónica 0.1% (Verkazia) 1 gota 4 veces al día (fármaco de mantenimiento a largo plazo para controlar la infiltración por Th2 y eosinófilos).\n      - Ciclo de Choque Corticoideo Ultracorto: Loteprednol etabonato al 0.5% o Fluorometolona al 0.1% cada 4 a 6 horas durante 10 a 14 días con descenso progresivo rápido para apagar el brote inflamatorio agudo.\n      - Antihistamínico/Estabilizador de Mastocitos: Olopatadina 0.2% 1 gota al día.\n      - Lágrimas artificiales frías sin conservantes frecuentes y compresas frías.\n   c) Advertencia Crítica y Educación: Prohibición absoluta del frotamiento ocular y control riguroso de la presión intraocular cada 2 semanas mientras reciba esteroides tópicos.',
        trap: 'Prescribir únicamente corticoides tópicos potentes sin iniciar inmunomoduladores (Ciclosporina A), lo que conducirá a dependencia de esteroides, rebote severo al suspenderlos y glaucoma cortisónico infantil iatrogénico.'
      }
    ]
  },

  // =========================================================================
  // 9. DEGENERACIONES Y DEPÓSITOS CORNEALES
  // =========================================================================
  {
    id: 'deep-cornea-degeneraciones-depositos',
    title: 'Degeneraciones y Depósitos Corneales: Pterigión, Pingüécula, Queratopatía en Banda Cálcica, Salzmann, Arco Senil y Depósitos de Hierro',
    subspecialtyId: 'cornea',
    summary: 'Monografía exhaustiva sobre las degeneraciones y depósitos corneales no hereditarios más relevantes en la práctica oftalmológica: Pterigión y pingüécula (degeneración elastótica del colágeno por radiación ultravioleta B, islotes de Fuchs, línea de Stocker, indicaciones quirúrgicas por astigmatismo corneal con regla inducido o compromiso axial, técnica de escisión con autoinjerto conjuntival autólogo limbar CAG fijado con adhesivo de fibrina tisular para reducir la recurrencia a <2-5% vs técnica de esclera desnuda con 30-80% de fallo, y uso juicioso de Mitomicina C 0.02%), Queratopatía en Banda Cálcica (depósito de hidroxiapatita en membrana de Bowman con aspecto en "queso suizo", etiologías oculares crónicas como uveítis en Artritis Idiopática Juvenil AIJ vs metabólicas por hipercalcemia sistémica, y técnica de quelación química con EDTA disódico al 1.5-3%), Degeneración Nodular de Salzmann (nódulos epiteliales y subepiteliales avasculares de tejido conectivo acelular, queratectomía superficial / peeling mecánico o PTK excímer), Arco Senil (gerontoxon con intervalo lúcido de Vogt, relevancia diagnóstica del arco juvenil en menores de 40 años para despistaje de dislipidemias familiares), y Atlas de Líneas de Hierro y Depósitos Cromáticos Corneales (Anillo de Fleischer en queratocono, Línea de Hudson-Stähli fisiológica senil, Línea de Stocker en pterigión, Línea de Ferry en ampolla filtrante, y Córnea Verticillata por amiodarona o Enfermedad de Fabry).',
    definitionAndEpidemiology: 'Las degeneraciones corneales son alteraciones tisulares estructurales adquiridas, típicamente unilaterales o asimétricas, no hereditarias, asociadas al envejecimiento fisiológico, factores ambientales (radiación UV, sequedad, viento), inflamación ocular crónica o trastornos metabólicos sistémicos. El pterigión es endémico en el "cinturón del pterigión" (regiones geográficas intertropicales entre 37º de latitud norte y sur) con prevalencias superiores al 10-25%.',
    anatomyAndPathophysiology: '1. Pterigión y Pingüécula (Degeneración Elastótica):\n   • Exposición acumulativa a radiación ultravioleta B (UVB) -> fotooxidación celular en las células madre del limbo esclerocorneal nasal (fenómeno de Coroneo: la luz incidente temporal se focaliza en el limbo nasal por reflexión corneal interna).\n   • Mutaciones oncogénicas en el gen supresor tumoral p53 en células epiteliales límbicas.\n   • Síntesis anómala de factores angiogénicos (VEGF, bFGF) y activación desregulada de metaloproteinasas de matriz (MMP-1, MMP-2, MMP-3) que disuelven activamente la membrana de Bowman.\n   • Proliferación de tejido fibrovascularizado subconjuntival con degeneración elastótica basófila del colágeno ("elastosis") que cruza el limbo e invade la córnea subepitelial destruyendo irreversiblemente la membrana de Bowman.\n2. Queratopatía en Banda Cálcica (Calcific Band Keratopathy):\n   • Depósito de cristales de hidroxiapatita (fosfato de calcio, Ca5(PO4)3(OH)) a nivel extracelular en la membrana basal epitelial, membrana de Bowman y estroma superficial.\n   • Fisiopatología de precipitación: Precipitación de sales de calcio facilitada por la alcalosis relativa de la hendidura interpalpebral (evaporación continua de lágrimas con pérdida de CO2 hacia el aire ambiente).\n   • Causas Principales:\n     a) Oculares Crónicas: Uveítis anterior crónica persistente (clásica en Artritis Idiopática Juvenil AIJ oligoarticular ANA positiva), ftisis bulbi, edema corneal crónico prolongado, presencia de aceite de silicona en cámara anterior.\n     b) Sistémicas (Hipercalcemia / Hiperfosfatemia): Hiperparatiroidismo primario, insuficiencia renal crónica terminal (producto calcio-fósforo elevado), sarcoidosis (síntesis desregulada de 1,25-dihidroxivitamina D por macrófagos granulomatosos), mieloma múltiple y toxicidad por vitamina D.\n3. Degeneración Nodular de Salzmann:\n   • Nódulos subepiteliales blanco-azulados redondeados y elevados, únicos o múltiples, compuestos por colágeno hialinizado desorganizado acelular intermedio entre el epitelio y la membrana de Bowman.\n   • Respuesta cicatrizal hipertrófica a inflamación crónica persistente de la superficie ocular (blefaritis crónica, queratoconjuntivitis flictenular, queratocono, uso crónico de lentes de contacto).\n   • Los nódulos están separados de la membrana de Bowman por un plano de clivaje bien definido, lo que permite su pelado quirúrgico simple.\n4. Atlas de Depósitos de Hierro Corneal y Córnea Verticillata:\n   • Anillo de Fleischer: Depósito de ferritina en el epitelio basal de la córnea alrededor de la base del cono ectásico en queratocono.\n   • Línea de Hudson-Stähli: Línea horizontal de hemosiderina fisiológica senil en la unión de los dos tercios superiores y el tercio inferior corneal, coincidiendo con el punto de contacto de los bordes palpebrales durante el parpadeo.\n   • Línea de Stocker: Depósito de hierro vertical localizado en el epitelio corneal justo por delante del vértice o cabeza de avance del pterigión.\n   • Línea de Ferry: Línea de hierro curva semicircular por delante del borde de una ampolla de filtración quirúrgica de trabeculectomía prominente.\n   • Córnea Verticillata (Queratopatía en Remolino / Vortex Keratopathy): Acúmulo de depósitos de lípidos en el epitelio basal corneal que adoptan un patrón dorado arremolinado irradiado desde el centro hacia la periferia en forma de remolino; causas cardinales: Amiodarona (en >90% de los pacientes tratados), Cloroquina/Hidroxicloroquina, Tamoxifeno, y Enfermedad de Fabry (trastorno de almacenamiento lisosomal ligado al cromosoma X por deficiencia de alfa-galactosidasa A con acúmulo de globotriaosilceramida).',
    clinicalExamination: {
      biomicroscopy: '• Pterigión: Lesión fibrovascular carnosa triangular con base periférica conjuntival bulbar y vértice orientado hacia el centro corneal. Partes anatómicas: Cuerpo (conjuntival), Cuello (limbar) y Cabeza o Ápice (corneal). Por delante de la cabeza se observan pequeñas manchas blanco-grisáceas epiteliales denominadas Islotes de Fuchs y una línea pigmentada de hierro denominada Línea de Stocker. Provoca tracción corneal induciendo astigmatismo corneal con regla (aplanamiento del meridiano horizontal).\n• Pingüécula: Nódulo submucoso amarillento elevado de aspecto grasiento en la conjuntiva bulbar interpalpebral nasal o temporal adyacente al limbo, SIN invadir la córnea ni romper la membrana de Bowman.\n• Queratopatía en Banda Cálcica: Placa blanquecina-grisácea opaca horizontal que cruza la hendidura interpalpebral de limbo a limbo respetando un intervalo transparente periférico adyacente al limbo esclerocorneal; aspecto clásico en "queso suizo" (Swiss cheese appearance) debido a la presencia de múltiples orificios redondos transparentes que corresponden a los canales de paso de los nervios corneales a través de la membrana de Bowman desprovista de calcio.\n• Salzmann: Nódulos blanco-azulados sobreelevados duros en media luna o círculos paracentrales con adelgazamiento epitelial suprayacente y pooling de fluoresceína perilesional.\n• Arco Senil (Gerontoxon): Anillo estromal periférico bilateral blanco-amarillento de 360 grados, separado del limbo por el Intervalo lúcido de Vogt.',
      fundus: 'En queratopatía en banda cálcica o arco juvenil: descartar retinopatía hipertensiva o aterosclerótica y signos de uveítis posterior o vasculitis retiniana.',
      specialSigns: '• Intervalo Lúcido de Vogt: Espacio de estroma corneal periférico completamente transparente de 1 mm entre el arco senil y el limbo esclerocorneal.\n• Manchas de Fuchs: Islotes subepiteliales de avance en el margen anterior del pterigión.'
    },
    diagnosticWorkup: [
      {
        test: 'Topografía Corneal / Queratometría Pentacam',
        findings: 'Demostración de astigmatismo corneal con regla asimétrico inducido por la tracción mecánica del pterigión (aplanamiento del meridiano horizontal nasal con elevación corneal focal).'
      },
      {
        test: 'Panel Metabólico Completo de Calcio y Fósforo Sérico',
        findings: 'Mandatorio en todo paciente con Queratopatía en Banda Cálcica sin causa ocular primaria evidente: Calcio total y corregido por albúmina, fósforo inorgánico sérico, hormona paratiroidea intacta (PTH) y función renal (creatinina/urea) para descartar hiperparatiroidismo o insuficiencia renal.'
      },
      {
        test: 'Perfil Lipídico Sérico Completo en Menores de 40 Años',
        findings: 'Mandatorio ante el hallazgo de Arco Senil en paciente menor de 40 años ("Arco Juvenil"): Colesterol total, c-LDL, c-HDL y triglicéridos para despistaje de hipercolesterolemia familiar monogénica tipo IIa.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Pseudopterigión', distinction: 'Pliegue conjuntival adherido a la córnea secundario a traumatismo previo, quemadura o úlcera marginal; a diferencia del pterigión verdadero, NO destruye la membrana de Bowman de forma difusa y permite pasar una sonda fina bajo el cuello límbico (sondeo libre positivo).' },
      { condition: 'Neoplasia Escamosa de la Superficie Ocular (OSSN / Displasia Límbica)', distinction: 'Lesión gelatinosa papiliforme o leucoplásica con vasos en horquilla ("hairpin loops") y pérdida de la arquitectura normal en citología exfoliativa o biopsia incisional.' },
      { condition: 'Distrofia Estromal de Schnyder', distinction: 'Bilateral, depósitos centrales de cristales de colesterol y fosfolípidos con mutación en el gen UBIAD1, asociada a arco corneal denso juvenil pero con afectación central estromal temprana.' }
    ],
    steppedManagement: {
      medical: '• Manejo Conservador de Pterigión y Pingüécula:\n  - Fotoprotección UV estricta con gafas de sol polarizadas con filtro UV400 y sombrero de ala ancha.\n  - Lubricación intensiva con lágrimas artificiales sin conservantes.\n  - En pingüeculitis aguda inflamada: Ciclos cortos de 5 a 7 días de corticoide tópico de superficie (Fluorometolona 0.1% o Loteprednol 0.5%) o AINE tópico.\n• Manejo Médico de Salzmann Asintomático: Lubricación ocular y control de blefaritis asociada con calor local e higiene palpebral.',
      surgical: '• CIRUGÍA DEL PTERIGIÓN (ESTÁNDAR DE ORO MUNDIAL):\n  1) Indicaciones Quirúrgicas Formales:\n     - Invasión corneal progresiva >2.5 a 3 mm desde el limbo amenazando el eje visual pupilar.\n     - Inducción de astigmatismo corneal significativo con regla o aberraciones ópticas que impiden la agudeza visual corregida o adaptación de lentes.\n     - Inflamación recurrente refractaria (pterigión carnoso hipervascularizado).\n     - Restricción mecánica de la motilidad ocular con diplopía en abducción/aducción por anclaje a la cápsula de Tenon.\n  2) Técnica Quirúrgica de Elección:\n     - Escisión microquirúrgica cuidadosa de la cabeza y cuerpo del pterigión con disección meticulosa de la cápsula de Tenon engrosada subyacente.\n     - Reconstrucción del lecho con AUTOINJERTO CONJUNTIVAL AUTÓLOGO LIMBAR (CAG - Conjunctival Autograft): Se diseca un injerto conjuntival bulbar libre superior delgado que incluye células madre del limbo superior y se fija sobre el lecho escleral con adhesivo de fibrina tisular (Tisseel) o suturas reabsorbibles 8-0 (Vicryl); reduce la tasa de recidiva a menos del 2% a 5% (en comparación con la técnica histórica de "esclera desnuda" que recidiva en el 30% a 80% de los casos).\n     - Terapia Coadyuvante con Mitomicina C (MMC al 0.02% durante 1 a 2 minutos sobre la esclera): Reservada estrictamente para pterigiones recidivantes agresivos; requiere lavado profuso con 100 mL de solución salina por riesgo temible de necrosis escleral avascular ("melting escleral") y endoftalmitis tardía.\n• QUELACIÓN QUÍMICA CON EDTA EN QUERATOPATÍA EN BANDA CÁLCICA:\n  1) Instilación de anestésico tópico y colocación de blefarostato bajo microscopio.\n  2) Desepitelización mecánica cuidadosa con espátula de hockey o bisturí romo sobre la placa cálcica interpalpebral.\n  3) Aplicación de solución estéril de EDTA disódico al 1.5% a 3% (ácido etilendiaminotetraacético) mediante hisopos de celulosa (Weck-cel) o anillo de reservorio frotando suavemente durante 3 a 5 minutos; el EDTA actúa como quelante del ion calcio soluble, disolviendo por completo la placa dura y recuperando la transparencia de la membrana de Bowman en minutos.\n  4) Lavado profuso con suero salino y colocación de un lente de contacto blando terapéutico de vendaje con colirio antibiótico hasta la reepitelización completa.\n• QUERATECTOMÍA SUPERFICIAL MECÁNICA EN SALZMANN:\n  - Los nódulos de Salzmann presentan un plano de disección natural entre el tejido hialino y la membrana de Bowman subyacente intacta.\n  - Con una espátula corneal de espátula roma o pinza de relojero fina, se realiza un pelado ("peeling") mecánico traccionando del borde del nódulo; se desprenden limpiamente dejando una superficie lisa sin requerir ablación con láser.'
    },
    clinicalApplicationPractical: '1. NUNCA operar un pterigión con la técnica de "esclera desnuda" (bare sclera) pura; la tasa de recidiva es inaceptablemente alta (hasta el 80%), y un pterigión recidivante es mucho más invasivo, agresivo y difícil de reintervenir que el primario.\n2. Si un paciente joven de 28 años presenta un arco corneal blanco bilateral completo a la biomicroscopía, NO considerarlo un hallazgo senil trivial; solicitar de inmediato un perfil lipídico sérico; puede ser la primera manifestación clínica de una hipercolesterolemia familiar que amenace su vida por infarto agudo de miocardio precoz.\n3. En la quelación con EDTA para queratopatía en banda, la desepitelización previa es obligatoria; el epitelio intacto es impermeable al EDTA y la quelación fracasará si no se desbrida primero el epitelio suprayacente.',
    highYieldPearl: 'Conjunctival Autograft (CAG) vs Bare Sclera: El metaanálisis de Cochrane demostró de forma concluyente que la escisión de pterigión con autoinjerto conjuntival autólogo (CAG) fijado con adhesivo de fibrina reduce el riesgo de recidiva en más de 6 veces en comparación con la esclera desnuda pura, además de acelerar la cicatrización y minimizar el dolor postoperatorio.',
    keyDrugs: [
      { name: 'EDTA Disódico al 1.5% - 3%', dose: 'Aplicación tópica con hisopo durante 3 a 5 minutos tras desepitelización', warning: 'Quelante químico del calcio; neutralizar con abundante suero salino tras completar la quelación.' },
      { name: 'Adhesivo tisular de Fibrina (Tisseel)', dose: 'Aplicación intraoperatoria para fijación de injerto conjuntival', warning: 'Hemoderivado biológico; reduce dramáticamente el tiempo quirúrgico y el dolor postoperatorio comparado con suturas.' },
      { name: 'Fluorometolona 0.1%', dose: '1 gota cada 6 a 8 horas por 5 a 7 días en pingüeculitis', warning: 'Esteroide de baja penetración intraocular para inflamación episódica de la superficie.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Significado Clínico del Arco Juvenil en Menores de 40 Años',
        category: 'Asociación Patognomónica',
        description: 'La presencia de Arco Senil (arco lipídico corneal) en pacientes menores de 40 años ("Arco Juvenil") tiene una correlación patognomónica con hiperlipidemia sistémica grave, en particular Hipercolesterolemia Familiar Tipo IIa por mutación en el receptor de LDL, con alto riesgo de enfermedad coronaria prematura.',
        trapToAvoid: 'Ignorar el hallazgo catalogándolo de degeneración senil benigna habitual sin solicitar analítica de lípidos urgente.'
      },
      {
        title: 'Técnica Quirúrgica de Pterigión con Menor Tasa de Recidiva',
        category: 'Pregunta Clásica',
        description: 'En exámenes de especialidad: "¿Cuál es la técnica quirúrgica de elección para el pterigión primario asociada a la menor tasa de recidiva comprobada?". Respuesta: Escisión del pterigión con Autoinjerto Conjuntival Límbar Autólogo (CAG) fijado con adhesivo tisular de fibrina.',
        trapToAvoid: 'Responder "esclera desnuda sola" o "esclera desnuda con radioterapia beta".'
      },
      {
        title: 'Aspecto en Queso Suizo de la Queratopatía en Banda Cálcica',
        category: 'Mnemotecnia',
        description: 'El patrón en "queso suizo" de la queratopatía en banda cálcica se debe a que el calcio precipita en la membrana de Bowman pero respeta los orificios fisiológicos perforantes por donde los nervios ciliares corneales cruzan hacia el epitelio, dejando pequeños círculos transparentes indemnes dentro de la placa blanca.',
        trapToAvoid: 'Confundir los orificios transparentes con zonas de adelgazamiento estromal o descemetoceles.'
      }
    ],
    fellowshipKeyPoints: [
      'Línea de Stocker vs Anillo de Fleischer: La línea de Stocker se ubica en el epitelio corneal por delante del pterigión (depósito de hierro por estancamiento de la lágrima en el escalón del tejido). El anillo de Fleischer se ubica en la base del cono en el queratocono.',
      'Toxicidad por Mitomicina C en Cirugía de Pterigión: La aplicación excesiva de MMC (concentraciones >0.04% o tiempos >3 minutos) o su lavado insuficiente puede desencadenar necrosis escleral avascular diferida ("scleral melting") y perforación escleral con endoftalmitis bacteriana años después de la cirugía.',
      'Córnea Verticillata sin Medicación: Si un paciente varón joven presenta queratopatía en remolino arremolinada (verticillata) y no consume amiodarona ni antipalúdicos, debe sospecharse de inmediato Enfermedad de Fabry; solicitar niveles leucocitarios de alfa-galactosidasa A y estudio genético (riesgo de fallo renal terminal, cardiopatía y ACV).'
    ],
    landmarkTrials: [
      {
        name: 'Koranyi et al. / Fibrin Glue vs Sutures in Conjunctival Autografting',
        year: '2004 (Ophthalmology)',
        conclusion: 'En un estudio prospectivo aleatorizado de 81 ojos con pterigión, el uso de adhesivo tisular de fibrina en lugar de suturas de nylon o vicryl redujo significativamente el tiempo quirúrgico (15 min vs 34 min), eliminó prácticamente el dolor y la inflamación postoperatoria, y mostró una menor tasa de recurrencia.',
        fellowshipRelevance: 'El ensayo landmark que popularizó el uso de sellantes tisulares de fibrina en cirugía de segmento anterior.'
      }
    ],
    histopathologyAndGenetics: 'En examen histopatológico de pterigión escindido: Tinción con hematoxilina-eosina y Verhoeff-Van Gieson muestra degeneración elastótica basófila del colágeno subepitelial con fibras elásticas anormales gruesas rizadas y desorganizadas (positivas para elastina en tinción de Weigert), vascularización prominente y células epiteliales con atipia nuclear leve y mutaciones en p53 en el limbo.',
    surgicalPearls: [
      'Al tomar el autoinjerto conjuntival superior para pterigión: Disecar el injerto lo más FINO posible, libre de toda adherencia a la cápsula de Tenon ("Tenon-free conjunctival graft"); incluir la Tenon en el injerto aumenta el grosor, el edema postoperatorio y la tasa de retracción o fallo del injerto.',
      'Al realizar quelación con EDTA: Utilizar EDTA disódico estéril a pH neutro (7.4); el EDTA actúa exclusivamente como agente quelante por afinidad de quelación química y no por corrosión ácida, por lo que no dana el estroma subyacente si la Bowman está íntegra.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 56 años con antecedente de insuficiencia renal crónica en hemodiálisis y artritis reumatoide consulta por disminución progresiva de visión y sensación de roce arenoso en ambos ojos de 2 años de evolución. A la biomicroscopía se observa en ambos ojos una banda blanquecina densa horizontal que ocupa la hendidura interpalpebral atravesando la córnea de limbo a limbo pero respetando un estrecho margen de 1 mm transparente periférico. La placa presenta múltiples orificios redondos transparentes en su espesor dándole un aspecto en "queso suizo". ¿Cuál es el diagnóstico sindrómico exacto, qué prueba analítica metabólica debe solicitar de inmediato, cuál es el procedimiento terapéutico de elección en quirófano y qué fármaco específico aplicará sobre la córnea desepitelizada?',
        answer: '1) Diagnóstico Exacto: Queratopatía en Banda Cálcica (Calcific Band Keratopathy) interpalpebral bilateral sintomática con compromiso axial.\n2) Pruebas Analíticas Inmediatas: Perfil metabólico fosfocálcico completo: Calcio sérico iónico y total, albúmina, fósforo inorgánico, producto calcio-fósforo (riesgo de precipitación tisular si el producto Ca x P supera 55-60 mg2/dL2) y hormona paratiroidea intacta (PTH) para descartar hiperparatiroidismo secundario o terciario frecuente en pacientes en hemodiálisis.\n3) Procedimiento Terapéutico de Elección: Quelación química corneal con EDTA disódico (Etilendiaminotetraacetato disódico) bajo microscopio quirúrgico:\n   a) Desepitelización mecánica del área de la placa con espátula corneal tras anestesia tópica.\n   b) Aplicación tópica continua de solución estéril de EDTA disódico al 1.5% a 3% frotando suavemente con esponjas de celulosa durante 3 a 5 minutos hasta que los depósitos cálcicos se disuelvan por quelación química y la córnea recupere su transparencia.\n   c) Irrigación profusa con solución salina balanceada para neutralizar el lecho.\n   d) Colocación de un lente de contacto terapéutico blando de vendaje con antibiótico tópico sin conservantes hasta el cierre del defecto epitelial.',
        trap: 'Intentar fresar o raspar bruscamente la placa con bisturí sin usar EDTA (lo que perforará o cicatrizará opacamente la membrana de Bowman) o aplicar EDTA sobre el epitelio intacto sin haberlo desbridado previamente.'
      }
    ]
  },

  // =========================================================================
  // 10. TRASPLANTE DE CÓRNEA: PK, DALK, DSAEK Y DMEK; RECHAZO Y FALLA DEL INJERTO
  // =========================================================================
  {
    id: 'deep-cornea-trasplante-rechazo-falla',
    title: 'Trasplante de Córnea: PK, DALK, DSAEK y DMEK — Indicaciones, Técnicas, Diagnóstico y Manejo del Rechazo y Falla del Injerto',
    subspecialtyId: 'cornea',
    summary: 'Monografía exhaustiva de nivel de fellowship sobre queratoplastia y trasplante corneal: modalidades quirúrgicas de espesor completo vs lamelares modernas (Queratoplastia Penetrante PKP de grosor total con sus riesgos de ojo abierto y astigmatismo irregular; Queratoplastia Lamelar Anterior Profunda DALK mediante técnica de Gran Burbuja de Anwar que elimina al 100% el riesgo de rechazo endotelial; y Queratoplastias Endoteliales Lamelares Posteriores DSAEK vs DMEK anatómica pura de 10-15 µm con agudeza visual 20/20 y la tasa de rechazo inmune más baja de todos los trasplantes humanos <1%), fisiopatología inmunológica del rechazo del aloinjerto corneal mediado por células T y antígenos HLA clase I y II, atlas biomicroscópico diferencial de las formas clínicas de rechazo (Rechazo Endotelial con la línea migratoria patognomónica de Khodadoust y precipitados queráticos retroinjerto, Rechazo Epitelial con línea epitelial teñida y Rechazo Estromal con infiltrados subepiteliales numulares de Krachmer), protocolo médico de rescate hiperagudo con pulsos de Metilprednisolona intravenosa y corticoterapia tópica sin conservantes horaria, diagnóstico diferencial con la Falla Primaria del Injerto donante (Primary Graft Failure) por daño endotelial irreversible y descompensación tardía por agotamiento celular, y maniobra de re-bubbling con aire/gas SF6 en queratoplastia endotelial desprendida.',
    definitionAndEpidemiology: 'La queratoplastia es el procedimiento de trasplante de órganos y tejidos más exitoso y frecuentemente realizado en la medicina mundial (>180.000 procedimientos anuales a nivel global). La córnea goza de "privilegio inmunológico" fisiológico (ausencia de vascularización sanguínea y linfática en el lecho central, expresión de FasL en endotelio y cámara anterior rica en factores inmunosupresores TGF-beta). Sin embargo, el rechazo inmunológico del aloinjerto continúa siendo la principal causa evitable de fracaso y pérdida del injerto corneal a mediano y largo plazo.',
    anatomyAndPathophysiology: '1. Selección de Técnica Quirúrgica según el Estrato Corneal Lesionado:\n   • Queratoplastia Penetrante (PK / PKP): Reemplazo de grosor completo (epitelio, estroma, Descemet y endotelio). Reservada hoy en día para afectación transmural cicatrizal de todas las capas corneales (leucomas traumáticos de espesor completo, hidrops corneal con rotura de Descemet curado con leucoma profundo transmural, quemaduras graves cicatrizales o fracasos repetidos de técnicas lamelares).\n   • Queratoplastia Lamelar Anterior Profunda (DALK): Reemplazo selectivo del epitelio y estroma respetando la membrana de Descemet y el endotelio PROPIOS del receptor. Indicada en patologías estromales con endotelio sano (Queratocono y ectasias corneales sin hidrops previo, distrofias estromales Lattice, Granular o Macular, cicatrices estromales infecciosas inactivas). VENTAJA CARDINAL: Cero riesgo de rechazo endotelial (la forma irreversible de pérdida del injerto).\n   • Queratoplastia Endotelial Lamelar Posterior (DSEK/DSAEK vs DMEK): Reemplazo selectivo de la monocapa endotelial y la membrana de Descemet patológicas a través de incisiones autosellantes de 2.4 a 4.0 mm, manteniendo la integridad anatómica y refractiva del estroma anterior y epitelio receptores. Indicadas en Queratopatía Bullosa Pseudofáquica, Distrofia Endotelial de Fuchs y fallo endotelial tardío:\n     - DSAEK: Injerto de 70 a 130 µm compuesto por estroma posterior donante + Descemet + endotelio.\n     - DMEK: Injerto ultrafino de 10 a 15 µm compuesto EXCLUSIVAMENTE por membrana de Descemet y endotelio donante. Recuperación visual mucho más rápida (80-90% logran agudeza >=20/25), aberraciones corneales mínimas y tasa de rechazo endotelial extraordinariamente baja (<1-2% vs 8-10% en DSAEK y 15-25% en PKP).\n2. Inmunología del Rechazo del Injerto Corneal:\n   • El privilegio inmunológico se rompe si existen vasos sanguíneos corneales receptores en más de 2 cuadrantes, antecedentes de rechazo previo, queratoplastia previa o inflamación activa de la superficie ocular (ojos de "alto riesgo").\n   • Vías de Alorreconocimiento:\n     - Vía Directa: Las células presentadoras de antígeno (CPA / células dendríticas) del estroma corneal donante migran a través de los vasos linfáticos límbicos hacia los ganglios linfáticos regionales y presentan los antígenos HLA clase I y II directamente a los linfocitos T CD4+ y CD8+ del receptor.\n     - Vía Indirecta: Las CPAs del propio receptor procesan y presentan péptidos del tejido donante.\n   • Respuesta Efectora: Linfocitos T citotóxicos CD8+ activados migran hacia la córnea y liberan perforina y granzimas, induciendo la apoptosis rápida e irreversible de las células endoteliales donantes.\n3. Fisiopatología de la Falla del Injerto (Graft Failure):\n   • Rechazo Inmunológico: Inflamación aguda mediada por el sistema inmunitario contra el injerto previamente transparente y funcional tras un periodo libre de inflamación (usualmente semanas, meses o años postoperatorios).\n   • Falla Primaria del Injerto (Primary Graft Failure - PGF): Edema estromal y epitelial irreversible presente desde el DÍA 1 POSTOPERATORIO inmediato, que nunca se aclara. Causada por daño celular endotelial letal durante la preservación en banco de ojos (medio Optisol-GS contaminado, tiempo de muerte a preservación excesivo, endotelio inviable) o trauma quirúrgico excesivo durante la inserción y despliegue del injerto endotelial.\n   • Falla Tardía / Agotamiento Endotelial: Descompensación edematosa lenta y progresiva tras años de función normal por pérdida celular endotelial acumulativa senil acelerada en ausencia de signos de rechazo inflamatorio agudo.',
    clinicalExamination: {
      biomicroscopy: '• RECHAZO ENDOTELIAL AGUDO (Urgencia de Nivel 1):\n  - Línea de Khodadoust (Endothelial Rejection Line): Línea patognomónica blanquecina ondulada compuesta por células mononucleares inflamatorias y precipitados queráticos adheridos al endotelio donante; migra activamente a través del botón corneal donante, dejando detrás de sí estroma engrosado densamente edematoso y epitelio con microquistes, mientras que el estroma por delante de la línea permanece transparente.\n  - Precipitados queráticos finos o gruesos (PKs) limitados estrictamente al disco corneal donante (respetando la córnea receptora circundante).\n  - Reacción inflamatoria en cámara anterior con celularidad y flare (Tyndall 2+ a 4+).\n• RECHAZO EPITELIAL:\n  - Línea epitelial elevada festoneada que tiñe positivamente con fluoresceína y avanza a través del injerto donante reemplazando las células epiteliales donantes por las del receptor; buen pronóstico si se trata precozmente.\n• RECHAZO ESTROMAL:\n  - Infiltrados inmunes numulares subepiteliales de Krachmer (similares a los de la queratitis por adenovirus) o neovascularización estromal activa que penetra la interfase donante-receptor con enturbiamiento localizado.\n• DESPRENDIMIENTO DEL INJERTO EN DMEK/DSAEK:\n  - Separación anatómica del injerto endotelial respecto al estroma posterior receptor visible con hendidura fina; el área desprendida muestra edema corneal localizado suprayacente.',
      fundus: 'Generalmente no valorable en rechazos endoteliales avanzados con edema severo; si hay vitritis acompañante o pérdida de reflejo de fondo, realizar ecografía modo B para descartar endoftalmitis o rechazo vascularizado difuso.',
      specialSigns: '• Línea de Khodadoust: Signo patognomónico indiscutible de rechazo endotelial activo.\n• Mnemotecnia RSV para el Paciente: Síntomas de alarma que el paciente trasplantado debe conocer: Redness (Ojo rojo), Sensitivity to light (Fotofobia), Vision decrease (Disminución brusca de visión).\n• Ausencia de Dolor Agudo: El rechazo del injerto cursa con visión borrosa y ojo rojo pero tÍpicamente SIN el dolor punzante exquisito característico de una queratitis infecciosa.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT de Segmento Anterior (AS-OCT) de Alta Resolución',
        findings: 'Examen de elección para evaluar la aposición del injerto en DMEK y DSAEK: Identificación de desprendimientos focales o totales del injerto ("graft detachment"), presencia de líquido en la interfase donante-receptor y medición del grosor corneal paquimétrico del injerto y estroma receptor.'
      },
      {
        test: 'Microscopía Especular Endotelial',
        findings: 'Demostración de pérdida masiva de densidad celular endotelial (ECD) en comparación con el conteo previo del banco de ojos; presencia de sombras celulares acromáticas y bordes celulares indistintos durante el rechazo activo.'
      },
      {
        test: 'Tonometría de Aplanación y Control de PIO',
        findings: 'Evaluación rigurosa de la presión intraocular; la trabeculitis concomitante al rechazo endotelial o la respuesta corticoidea hipertensiva puede elevar drásticamente la PIO.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Falla Primaria del Injerto (PGF)', distinction: 'El injerto NUNCA ha sido transparente desde el primer día de la cirugía; no hay periodo previo de claridad corneal ni signos inflamatorios activos en cámara anterior.' },
      { condition: 'Hipertensión Ocular Aguda / Glaucoma con Edema Corneal', distinction: 'Edema difuso sin precipitados queráticos ni línea de Khodadoust; PIO marcadamente elevada (>40-50 mmHg) que se aclara rápidamente tras normalizar la presión.' },
      { condition: 'Queratitis Infecciosa Bacteriana o Fúngica en el Injerto', distinction: 'Infiltrado estromal denso purulento con necrosis licuefactiva focal, dolor ocular agudo intenso y defecto epitelial con secreción, frecuentemente en el trayecto de un punto de sutura flojo.' }
    ],
    steppedManagement: {
      medical: '• PROTOCOLO DE URGENCIA DEL RECHAZO ENDOTELIAL AGUDO (INICIAR DE INMEDIATO):\n  1) Corticoterapia Sistémica Intensiva (Pulsos Intravenosos):\n     - Indicada en rechazos severos, ojos únicos, injertos de alto riesgo o refractarios a gotas tópicas:\n     - Metilprednisolona intravenosa: 500 mg a 1000 mg IV en infusión lenta en 100 mL de suero fisiológico durante 1 hora al día durante 1 a 3 días consecutivos (bajo monitorización cardiovascular y glucémica).\n     - Alternativa oral: Prednisona oral a dosis de 1 mg/kg/día durante 1 semana con descenso progresivo en 3 a 4 semanas.\n  2) Corticoterapia Tópica Horaria sin Conservantes:\n     - Acetato de Prednisolona al 1% o Dexametasona al 0.1% sin conservantes: 1 gota CADA HORA las 24 horas del día durante las primeras 48 horas (incluso despertando por la noche).\n     - A medida que la línea de Khodadoust se detiene y el edema estromal comienza a clarear (usualmente día 3 a 5), descender progresivamente a 1 gota cada 2 horas por 1 semana, luego 6 veces al día por 2 semanas, manteniendo un tratamiento tópico de mantenimiento a largo plazo.\n  3) Inyecciones Perioculares de Corticoides:\n     - Inyección subconjuntival o peribulbar de Dexametasona fosfato (4 a 8 mg) o Triamcinolona acetónido (20 mg) para asegurar concentraciones terapéuticas inmediatas en la cámara anterior.\n  4) Control de Hipertensión Ocular Secundaria y Cicloplejía:\n     - Hipotensores tópicos (Timolol 0.5%, Dorzolamida 2%, Brimonidina); EVITAR análogos de prostaglandinas.\n     - Ciclopentolato 1% cada 8 horas para aliviar el espasmo ciliar y prevenir sinequias.\n  5) Inmunosupresores Sistémicos en Ojos de Alto Riesgo:\n     - En pacientes con rechazos endoteliales recurrentes o vascularización cuadrántica extensa: Asociar Ciclosporina A oral (3-5 mg/kg/día), Tacrolimus oral (0.05-0.1 mg/kg/día) o Micofenolato Mofetilo (1 g cada 12 horas) durante 6 a 12 meses.',
      surgical: '• Maniobra de Re-bubbling en Queratoplastia Endotelial (DMEK / DSAEK):\n  - Indicada ante el desprendimiento del injerto endotelial detectado en la primera o segunda semana postoperatoria (desprendimiento >20-30% del injerto o que afecta el eje pupilar con edema suprayacente).\n  - Procedimiento en lámpara de hendidura o quirófano: Reinyección de una burbuja de aire estéril o gas hexafluoruro de azufre al 20% (SF6 20%) en cámara anterior mediante aguja o cánula de 30G para reaplicar mecánicamente el injerto contra el estroma posterior receptor, manteniendo al paciente en decúbito supino durante 24-48 horas.\n• Re-Queratoplastia (Re-Graft) en Falla Irreversible:\n  - Si el rechazo endotelial no responde al protocolo intensivo tras 4 a 6 semanas y el edema corneal se vuelve permanente con pérdida celular irreversible, está indicada una nueva queratoplastia (re-DMEK o re-DSAEK si el estroma anterior permanece claro, o queratoplastia penetrante PKP si existe cicatrización estromal difusa irreversible).'
    },
    clinicalApplicationPractical: '1. Ante todo paciente trasplantado de córnea que consulte por ojo rojo o disminución de visión: NUNCA posponer la exploración ni catalogarlo de "conjuntivitis banal". Un rechazo endotelial tratado en las primeras 24-48 horas se revierte en más del 80-90% de los casos; si se demora más de una semana, la pérdida endotelial será irreversible y el injerto fallará de forma definitiva.\n2. La línea de Khodadoust es una línea migratoria que se desplaza hacia el centro del botón donante: Si durante el tratamiento con corticoides la línea se desvanece y el estroma recupera la transparencia, confirma respuesta terapéutica exitosa.\n3. Si un injerto endotelial DMEK está desprendido en el postoperatorio precoz, la córnea estará edematosa simulando un fallo primario. Realizar siempre AS-OCT para descartar desprendimiento del rollo donante; una simple reinyección de aire (re-bubbling) salvará el trasplante en minutos.',
    highYieldPearl: 'Khodadoust Line: La línea de Khodadoust representa la frontera activa donde los linfocitos T citotóxicos del receptor están destruyendo físicamente las células endoteliales donantes en un rechazo alogénico; es un signo patognomónico que indica una urgencia médica absoluta en oftalmología.',
    keyDrugs: [
      { name: 'Metilprednisolona Intravenosa', dose: '500 mg a 1000 mg IV diarios durante 1 a 3 días', warning: 'Pilar del rescate sistémico en rechazo endotelial agudo severo o de alto riesgo.' },
      { name: 'Acetato de Prednisolona al 1% sin conservantes', dose: '1 gota cada hora las primeras 48 horas día y noche', warning: 'Corticosteroide tópico de mayor penetración en cámara anterior; agitar bien el frasco antes de instilar.' },
      { name: 'Gas Hexafluoruro de Azufre (SF6) al 20%', dose: 'Inyección intracameral para re-bubbling en DMEK/DSAEK', warning: 'Mezcla no expansible que proporciona soporte mecánico neumático al injerto endotelial durante 4 a 6 días.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Signo Patognomónico del Rechazo Endotelial Corneal',
        category: 'Asociación Patognomónica',
        description: 'La presencia de una línea blanquecina ondulada en la superficie endotelial del injerto donante con precipitados queráticos retroinjerto que separa el estroma edematoso del transparente se denomina LÍNEA DE KHODADOUST y es patognomónica de rechazo inmunológico endotelial activo.',
        trapToAvoid: 'Confundirla con estrías de Vogt (en queratocono), pliegues en la membrana de Descemet o la línea de demarcación del crosslinking.'
      },
      {
        title: 'Tasa Comparativa de Rechazo Endotelial entre DMEK, DSAEK y PKP',
        category: 'Cifra Clave de Corte',
        description: 'La tasa de rechazo inmunológico endotelial a los 2 años en DMEK es extraordinariamente baja (<1% a 2%), frente al 8-10% en DSAEK y al 15-25% en Queratoplastia Penetrante (PKP). En DALK, el riesgo de rechazo endotelial es literalmente CERO (0%) porque se conserva el endotelio propio del paciente.',
        trapToAvoid: 'Creer que la queratoplastia lamelar anterior (DALK) puede presentar rechazo endotelial; en DALK solo pueden existir rechazos epiteliales o estromales reversibles.'
      },
      {
        title: 'Diferencia Crítica entre Falla Primaria del Injerto y Rechazo Inmunológico',
        category: 'Pregunta Clásica',
        description: 'En exámenes de fellowship: "¿Cómo diferenciar clínicamente una Falla Primaria del Injerto de un Rechazo del Injerto Endotelial?". Respuesta: La falla primaria está presente desde el primer día postoperatorio (el injerto jamás clareó) y no responde a esteroides. El rechazo inmunológico ocurre tras un periodo previo de claridad corneal (semanas a meses postoperatorios) y se acompaña de inflamación en cámara anterior y línea de Khodadoust.',
        trapToAvoid: 'Confundir un injerto DMEK desprendido precozmente con una falla primaria; siempre realizar AS-OCT antes de declarar una falla primaria.'
      }
    ],
    fellowshipKeyPoints: [
      'Indicaciones de Big-Bubble en DALK: Técnica descrita por Anwar en la que se inyecta aire en el estroma posterior profundo con aguja de 27-30G; si la burbuja se expande hasta el limbo (Big-Bubble tipo 1 entre estroma y capa de Dua, o tipo 2 entre capa de Dua y Descemet), permite la separación anatómica limpia de la membrana de Descemet sin perforarla.',
      'Orientación del Injerto en DMEK: El rollo endotelial donante se enrolla espontáneamente con el endotelio hacia el exterior; para evitar implantar el injerto invertido (con el endotelio mirando hacia el estroma), se utilizan marcas asimétricas en la periferia del injerto (marca en "S" o "F" de Price) que confirman la orientación correcta intraoperatoria.',
      'Protocolo de Retirada de Suturas en PKP: En queratoplastia penetrante con suturas sueltas de nylon 10-0, se realiza topografía corneal seriada a partir de los 3-6 meses para retirar selectivamente las suturas en los meridianos más curvos (con mayor tensión radial) y reducir el astigmatismo corneal inducido.'
    ],
    landmarkTrials: [
      {
        name: 'Collaborative Corneal Transplantation Studies (CCTS)',
        year: '1992 (Arch Ophthalmol)',
        conclusion: 'Estudio multicéntrico prospectivo que demostró que el tipaje HLA-A, B y DR no mejoró la supervivencia del injerto en receptores de alto riesgo de forma costo-efectiva general, pero la compatibilidad ABO y el control estricto de la neovascularización previa son fundamentales para la supervivencia del aloinjerto.',
        fellowshipRelevance: 'El ensayo landmark más importante sobre inmunogenética y compatibilidad histológica en trasplante corneal.'
      },
      {
        name: 'Anshu et al. / DMEK vs DSEK Immune Rejection Rates',
        year: '2012 (Ophthalmology)',
        conclusion: 'En una cohorte comparativa de gran tamaño, la tasa de rechazo del aloinjerto a los 2 años fue del 1% en el grupo DMEK frente al 9% en el grupo DSAEK (reducción de 9 veces), convirtiendo a DMEK en el procedimiento de menor inmunogenicidad de la cirugía de trasplantes.',
        fellowshipRelevance: 'El estudio que demostró la superioridad inmunológica definitiva de DMEK.'
      }
    ],
    histopathologyAndGenetics: 'En examen anatomopatológico de un botón de queratoplastia penetrante fallido por rechazo endotelial: Densidad celular endotelial reducida a prácticamente cero células viables, membrana de Descemet engrosada con depósitos de fibrina y presencia de linfocitos T CD8+ citotóxicos adheridos a la superficie endotelial posterior; colágeno estromal desorganizado con pérdida de la periodicidad fibrilar regular y engrosamiento marcado por imbibición acuosa.',
    surgicalPearls: [
      'Al realizar trepanación receptora y donante en Queratoplastia Penetrante (PKP): El diámetro del botón corneal donante debe sobredimensionarse usualmente en 0.25 a 0.50 mm respecto al orificio receptor (ej. trepano donante de 7.75-8.0 mm para un receptor de 7.5 mm) para evitar el aplanamiento corneal postoperatorio, el glaucoma por cierre angular y permitir un adecuado cierre estanco sin tensión excesiva.',
      'Técnica de Anwar en DALK (Big-Bubble): La aguja debe introducirse con el bisel hacia abajo y avanzar hasta el estroma paracentral profundo a menos de 100 micras de la Descemet antes de inyectar aire con jeringa de 5 mL; si se observa la aparición de una gran burbuja blanca circular nítida con borde circunscrito de 8 mm, se ha alcanzado el plano lamelar perfecto.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 48 años sometida a Queratoplastia Penetrante (PKP) en ojo izquierdo hace 8 meses por queratocono avanzado, con evolución postoperatoria excelente y agudeza visual de 20/30 con corrección, consulta a urgencias por disminución brusca de agudeza visual a 20/200, enrojecimiento ocular y fotofobia moderada de 24 horas de evolución. Refiere que hace 3 semanas su médico de cabecera le suspendió el colirio de fluorometolona que usaba de mantenimiento. A la exploración biomicroscópica se observa hiperemia ciliar moderada, injerto corneal con edema estromal y epitelial en la mitad inferior, cámara anterior con celularidad 3+ y, en la cara endotelial del injerto donante, una línea blanquecina festoneada que avanza desde el borde inferior hacia el centro corneal con precipitados queráticos retroinjerto adheridos. La córnea receptora periférica permanece transparente. ¿Cuál es el diagnóstico sindrómico exacto y patognomónico, cuál es el mecanismo inmunológico efector subyacente y cuál es el esquema terapéutico médico de rescate inmediato que instaurará en este preciso momento?',
        answer: '1) Diagnóstico Exacto: Rechazo Inmunológico Endotelial Agudo del Aloinjerto Corneal con Línea de Khodadoust patognomónica activa en Queratoplastia Penetrante, desencadenado por la suspensión prematura del corticoide tópico.\n2) Mecanismo Inmunológico Subyacente: Reacción de hipersensibilidad alogénica Tipo IV mediada por células: Linfocitos T citotóxicos CD8+ alorreactivos del receptor reconocen antígenos del complejo mayor de histocompatibilidad (MHC / HLA clase I) en las células endoteliales donantes, migran a la cámara anterior y provocan la lisis apoptótica activa de la monocapa endotelial a lo largo de la línea de Khodadoust.\n3) Protocolo Terapéutico Inmediato de Rescate:\n   a) Corticoterapia Tópica Horaria Intensiva: Acetato de Prednisolona al 1% (o Dexametasona 0.1%) colirio sin conservantes, instilar 1 gota CADA HORA las 24 horas del día durante las primeras 48 horas.\n   b) Corticoterapia Sistémica Intravenosa en Pulsos: Metilprednisolona intravenosa 500 mg a 1000 mg IV diluidos en 100 mL de solución salina administrados en infusión de 1 hora al día durante 3 días consecutivos.\n   c) Inyección Subconjuntival de Rescate: Dexametasona fosfato 4 a 8 mg en fondo de saco inferior.\n   d) Ciclopléjico y Control Tonométrico: Ciclopentolato 1% cada 8 horas y colirios hipotensores acuosos si la PIO está elevada (evitando análogos de prostaglandinas).\n   e) Seguimiento diario: Una vez que la línea de Khodadoust se detenga y el edema aclare, desescalar lentamente los corticoides tópicos a lo largo de varios meses y mantener una dosis mínima de mantenimiento indefinida.',
        trap: 'Catalogar el cuadro de "queratitis o uveítis postoperatoria inespecífica" y prescribir antibióticos o esteroides a dosis bajas (ej. cada 8 horas), perdiendo la ventana crítica de 48 horas para salvar el endotelio donante antes del fallo irreversible del injerto.'
      }
    ]
  },

  {
  id: "deep-cornea-puk-ulcerativa-periferica-mooren",
  title: "Queratitis Ulcerativa Periférica (PUK), Vasculitis Sistémica (GPA/Wegener, AR) y Úlcera de Mooren",
  subspecialtyId: "cornea",
  summary: "Monografía exhaustiva sobre las queratopatías destructivas periféricas y el adelgazamiento corneal yuxtalimbar mediado por mecanismos autoinmunes: 1) Queratitis Ulcerativa Periférica (PUK) asociada a vasculitis y colagenopatías sistémicas potencialmente mortales (Artritis Reumatoide activa, Granulomatosis con Poliangitis [GPA / antes Wegener], Poliarteritis Nodosa [PAN], Lupus Eritematoso Sistémico y Policondritis Recidivante); 2) Fisiopatología del \Corneal Melt\: depósito de inmunocomplejos en el plexo vascular epiescleral y límbico con reclutamiento masivo de neutrófilos y liberación descontrolada de metaloproteinasas de matriz colagenolíticas (MMP-1, MMP-8, MMP-9); 3) Diagnóstico diferencial crucial: PUK sistémica frente a Úlcera de Mooren (enfermedad autoinmune corneal idiopática pura NO asociada a vasculitis sistémica, caracterizada por un festón o borde socavado que avanza circunferencial y centralmente respetando la esclera subyacente); 4) Pista de laboratorio y biomarcadores: c-ANCA (anticuerpos anti-proteinasa 3 / PR3) patognomónicos de GPA, p-ANCA (mieloperoxidasa), Factor Reumatoide, anti-CCP y ANA; y 5) Abordaje terapéutico de choque: ¡PROHIBICIÓN ABSOLUTA DE AINES TÓPICOS! (riesgo de perforación corneal hiperaguda), bolos intravenosos de metilprednisolona seguidos de terapia biológica sistémica (Rituximab, Ciclofosfamida, Infliximab) y manejo quirúrgico tectónico (adhesivo tisular de cianoacrilato, membrana amniótica o injerto corneal laminar en semiluna).",
  definitionAndEpidemiology: "La Queratitis Ulcerativa Periférica (PUK) es una inflamación destructiva no infecciosa del estroma corneal periférico adyacente al limbo esclerocorneal, caracterizada por un defecto epitelial yuxtalimbar en semiluna asociado a pérdida estromal y queratolisis progresiva. En más del 50-60% de los casos, la PUK es la manifestación ocular inicial de una enfermedad vascular sistémica potencialmente mortal no diagnosticada; la presencia de PUK en Artritis Reumatoide confiere una mortalidad sistémica a 5 años de hasta el 30-40% por vasculitis necrotizante coronaria o mesentérica si no se instaura inmunosupresión sistémica agresiva. La Úlcera de Mooren es una afección autoinmune primaria estrictamente corneal sin compromiso escleral ni sistémico.",
  anatomyAndPathophysiology: "1. Inmunopatogenia del Adelgazamiento Límbico Periférico:\n   • La córnea periférica posee una arquitectura inmunológica única en comparación con la córnea central: mayor vascularización adyacente (arcadas vasculares límbicas), mayor concentración de linfocitos, macrófagos, células de Langerhans presentadoras de antígeno y componentes del complemento (C1q) e inmunoglobulinas (IgM e IgG).\n   • Activación Inmunológica Sistémica: En pacientes con vasculitis sistémica (AR, GPA), los inmunocomplejos circulantes se depositan en el lecho vascular del limbo esclerocorneal.\n   • Quimiotaxis y Degranulación de Neutrófilos: La activación del complemento (C3a, C5a) recluta oleadas de neutrófilos al estroma periférico.\n   • Cascada Colagenolítica: Los neutrófilos y los queratocitos activados liberan metaloproteinasas de matriz destructivas (MMP-1 colagenasa intersticial, MMP-8 y MMP-9 gelatinasa B) que degradan selectivamente las laminillas de colágeno estromal tipo I, induciendo necrosis licuefactiva rápida (corneal melt) que puede perforar la córnea en 24 a 48 horas.\n2. Fisiopatología de la Úlcera de Mooren:\n   • Reacción de hipersensibilidad autoinmune mediada por células contra antígenos estromales corneales específicos (antígeno calgranulina C o antígeno asociado a membrana corneal).\n   • Dos formas clínicas: Mooren Benigna Unilateral (pacientes ancianos, indolente, buena respuesta a inmunosupresión) vs Mooren Maligna Bilateral (varones jóvenes africanos o asiáticos, extraordinariamente agresiva, no responde a corticoides, perfora rápidamente).\n   • Característica histopatológica cardinal: Borde estromal \"socavado\" o en \"saliente\" (overhanging edge) infiltrado por células plasmáticas y eosinófilos que avanza devorando el estroma anterior y respetando la membrana de Descemet y la esclera.",
  clinicalExamination: {
    biomicroscopy: "• En PUK: Infiltrado estromal semilunar en la periferia corneal (típicamente entre las 10h y las 2h o inferior) con defecto epitelial suprayacente, adelgazamiento estromal en canaleta con base ulcerada y escleritis necrotizante o anterior asociada en el 30-50% de los casos (vasos epiesclerales profundos inmóviles que no aclaran con fenilefrina al 2.5%).\n• En Úlcera de Mooren: Úlcera periférica con borde anterior sobreelevado (\"en ola marina\" o socavado) que avanza de la periferia al centro; la esclera adyacente NO está inflamada (ausencia total de escleritis).",
    fundus: "Descarte de vasculitis retiniana asociada, oclusiones arteriolares o coroiditis en contexto de vasculitis sistémica.",
    specialSigns: "• Signo del Festón Socavado (Mooren): Al explorar con la hendidura fina, el borde activo de la úlcera forma un labio o tejadillo estromal bajo el cual penetra el epitelio.\n• Ausencia de escleritis en Mooren: Permite diferenciarla de la PUK por AR o GPA donde la epiesclera profunda y esclera contiguas están típicamente hiperémicas y edematosas."
  },
  diagnosticWorkup: [
    {
      test: "Panel Inmunológico y de Vasculitis Sistémica de Urgencia",
      findings: "c-ANCA (anti-PR3) y p-ANCA (anti-MPO), Factor Reumatoide (FR), anticuerpos anti-péptido citrulinado (anti-CCP), ANA, complemento (C3, C4), anticuerpos antifosfolípido y velocidad de sedimentación globular (VSG/PCR)."
    },
    {
      test: "Tomografía Computarizada (TC) de Senos Paranasales y Tórax",
      findings: "Enfermedad por GPA (Wegener): Revela nódulos pulmonares cavitados, infiltrados pulmonares y sinusitis destructiva ósea."
    },
    {
      test: "Raspado y Cultivo Microbiológico Corneal Inmediato",
      findings: "Descarte mandatorio de sobreinfección bacteriana secundaria por Staphylococcus o Pseudomonas antes de inmunosuprimir."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Úlcera de Mooren vs PUK por Vasculitis Sistémica",
      distinction: "Mooren no tiene afección escleral (esclera blanca no inflamada) ni vasculitis sistémica y tiene borde socavado; PUK se asocia a escleritis necrotizante y anticuerpos c-ANCA o FR/anti-CCP positivos."
    },
    {
      condition: "Degeneración Marginal de Terrien",
      distinction: "Adelgazamiento periférico no inflamatorio bilateral, epitelio intacto (fluoresceína negativa), presencia de pseudopterigión atípico, pannus vascular superficial y ectasia corneal con alto astigmatismo contra la regla; NO hay necrosis colagenolítica activa."
    },
    {
      condition: "Queratoconjuntivitis Flictenular",
      distinction: "Nódulo límbico inflamatorio sobreelevado con neovasos que responde rápidamente a corticoides tópicos leves; suele asociarse a hipersensibilidad a proteínas de Blefaritis estafilocócica o Tuberculosis."
    }
  ],
  steppedManagement: {
    medical: "• ¡PROHIBICIÓN FORMAL ABSOLUTA DE AINES TÓPICOS!:\n  - Ketorolaco, Diclofenaco o Nepafenaco tópico activan metaloproteinasas residuales e inhiben la síntesis de queratocitos, induciendo perforación corneal catastrófica (\"corneal melt\") en pocas horas.\n• Terapia Inmunosupresora Sistémica Inmediata (SALVA LA VISIÓN Y LA VIDA):\n  - Bolos intravenosos de Metilprednisolona: 500 mg a 1000 mg IV al día durante 3 días consecutivos.\n  - Ciclofosfamida oral o IV (1-2 mg/kg/día) o Rituximab (anticuerpo anti-CD20, 375 mg/m2 semanal por 4 dosis o 1000 mg los días 1 y 15): Es el tratamiento estándar de rescate para remitir la vasculitis sistémica en GPA y AR.\n  - Agentes biológicos anti-TNF (Infliximab, Adalimumab): Alta eficacia en PUK refractaria por Artritis Reumatoide.\n  - Doxiciclina oral (100 mg cada 12 horas): Potente inhibidor no específico de metaloproteinasas estromales (MMP-1 y MMP-9).\n  - Gotas de Suero Autólogo al 20-50% o N-acetilcisteína al 10%: Para aportar factores de crecimiento y frenar colagenasas.",
    surgical: "• Intervenciones Tectónicas Oculares si hay Perforación o Descemetocele:\n  - Cianoacrilato (Adhesivo tisular) + Lente de Contacto Terapéutica de Gran Diámetro:\n    * Indicado en microperforaciones o adelgazamiento extremo <0.5-1 mm.\n  - Resección Límbica de Conjuntiva (Conjunctival Resection):\n    * En Úlcera de Mooren y PUK activa: Escindir una tira de 3-4 mm de conjuntiva límbica adyacente para eliminar el reservorio local de neutrófilos, anticuerpos y colagenasas que atacan la córnea.\n  - Injerto de Membrana Amniótica (AMT) multicapa: Facilita la reepitelización y aporta antiproteasas.\n  - Queratoplastia Tectónica Lamelar en Parche (LKP en semiluna): En perforaciones grandes $>2\text{ mm}$ con botón corneal o escleral donante fijado con suturas de monofilamento 10-0 enterradas."
  },
  clinicalApplicationPractical: "1. ¡ALERTA VITAL DE GUARDIA!: Si un paciente con Artritis Reumatoide o sospecha de vasculitis consulta por dolor ocular y úlcera en semiluna periférica, NUNCA prescriba AINEs tópicos ni se limite a colirios. El paciente se encuentra en riesgo inminente de perforación corneal y de muerte por vasculitis sistémica; ingrese de inmediato para bolos de metilprednisolona y solicite c-ANCA y TC de tórax.\n2. Cuidado con los AINEs en Farmacia: Los pacientes con ojo rojo doloroso a menudo se automedican con colirios analgésicos; interrogue específicamente si ha usado ketorolaco o diclofenaco tópico ante cualquier adelgazamiento corneal.\n3. En Úlcera de Mooren refractaria: La peritomía conjuntival amplia con escisión de la conjuntiva límbica adyacente en el cuadrante afecto frena la progresión en más del 70% de los casos al eliminar la fuente de colagenasas.",
  highYieldPearl: "PUK Board Pearl: Adelgazamiento en semiluna yuxtalimbar + escleritis = Vasculitis sistémica (AR o GPA c-ANCA). Mortalidad a 5 años del 40% si no se inmunosuprime con ciclofosfamida/rituximab. ¡AINEs tópicos estrictamente PROHIBIDOS por inducir melt y perforación!",
  keyDrugs: [
    {
      name: "Metilprednisolona IV",
      dose: "1000 mg al día durante 3 días",
      warning: "Terapia de choque sistémica inicial para frenar la colagenolisis activa."
    },
    {
      name: "Rituximab / Ciclofosfamida",
      dose: "Protocolo de vasculitis reumatoidea / Wegener",
      warning: "Fármacos de rescate obligatorios para remitir la enfermedad vascular sistémica."
    },
    {
      name: "Doxiciclina oral",
      dose: "100 mg cada 12 horas",
      warning: "Inhibe directamente las metaloproteinasas MMP-1 y MMP-9 estromales."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Diferenciación Patognomónica: PUK vs Mooren",
      category: "Asociación Patognomónica",
      description: "La PUK se asocia a escleritis adyacente y vasculitis sistémica potencialmente letal (GPA c-ANCA, AR). La Úlcera de Mooren respeta la esclera (esclera blanca), tiene borde socavado festoneado y carece de patología sistémica.",
      trapToAvoid: "Dar AINEs tópicos para el dolor a un paciente con adelgazamiento periférico, lo que provoca la perforación corneal en 24 horas."
    }
  ],
  landmarkTrials: [
    {
      name: "Foster et al. / Systemic Immunosuppressive Therapy for PUK",
      year: "1984 (Ophthalmology)",
      conclusion: "Demostró que la mortalidad a 5 años en pacientes con PUK asociada a enfermedad reumatológica sin inmunosupresión sistémica superaba el 36%, y que el tratamiento inmunosupresor sistémico activo (ciclofosfamida) reducía la mortalidad al 3% además de preservar el ojo.",
      fellowshipRelevance: "El ensayo landmark que estableció que la PUK no es una enfermedad del ojo sino un marcador de muerte sistémica inminente."
    }
  ],
  histopathologyAndGenetics: "En biopsia de tejido límbico y córnea en PUK: Necrosis fibrinoide vascular en arteriolas epiesclerales con infiltrado perivascular denso de neutrófilos CD15+, macrófagos y depósito masivo de inmunocomplejos (IgG, IgM) y C3 en la membrana basal endotelial de los vasos límbicos.",
  surgicalPearls: [
    "Al aplicar cianoacrilato en una perforación por PUK: Secar minuciosamente la base estromal con esponja de celulosa (el pegamento sólo polimeriza en contacto con humedad pero no se adhiere si flota en humor acuoso abundante); colocar una gota milimétrica con la punta de una cánula 30G y cubrir inmediatamente con lente de contacto terapéutica de 16-18 mm.",
    "Peritomía límbica en Úlcera de Mooren: Realizar la escisión conjuntival de al menos 3 a 4 mm desde el limbo hacia el fórnix resecando la cápsula de Tenon superficial; cauterizar suavemente el lecho episcleral para eliminar vasos aportadores de neutrófilos."
  ],
  fellowOralBoardQuestions: [
    {
      question: "Una mujer de 54 años con Artritis Reumatoide deformante acude a urgencias por dolor ocular insoportable en ojo derecho, fotofobia y lagrimeo. A la exploración presenta un defecto epitelial yuxtalimbar superior de 4 mm con adelgazamiento estromal en canaleta que deja visible una fina lámina de Descemet transparente sin estroma residual (descemetocele inminente). La esclera contigua superior presenta una inyección violácea profunda que no aclara con fenilefrina. Su médico general le prescribió gotas de ketorolaco cada 8 horas hace 3 días. ¿Cuál es el diagnóstico sindrómico exacto, por qué el ketorolaco ha empeorado dramáticamente el cuadro y cuál es el plan de rescate médico y tectónico urgente?",
      answer: "1) Diagnóstico: Queratitis Ulcerativa Periférica (PUK) con escleritis necrotizante anterior asociada a Artritis Reumatoide activa con descemetocele inminente.\n2) Impacto del Ketorolaco: Los AINEs tópicos inhiben la síntesis de prostaglandinas fisiológicas pero no detienen la cascada de lipooxigenasa ni las metaloproteinasas; además, inhiben la proliferación y migración de queratocitos y epitelio corneal, provocando una activación masiva paradójica de metaloproteinasas estromales (MMP-1, MMP-9) que desencadena un colapso corneal licuefactivo hiperagudo (\"corneal melt\").\n3) Plan de Rescate Inmediato:\n   - Suspender de inmediato y definitivamente el ketorolaco tópico.\n   - Ingreso hospitalario urgente para bolos intravenosos de Metilprednisolona (1000 mg/día por 3 días) seguidos de inmunosupresión con Rituximab o Ciclofosfamida coordinado con Reumatología.\n   - Doxiciclina oral 100 mg c/12h por su efecto anticromolítico/inhibidor de MMPs.\n   - Protección tectónica: Sellado inmediato del descemetocele con adhesivo tisular de cianoacrilato bajo lámpara de hendidura o quirófano + Lente de contacto terapéutica de gran diámetro; si la base es muy ancha (>2 mm), parche tectónico corneal lamelar en semiluna con suturas 10-0.",
      trap: "Considerarlo un problema corneal superficial y prescribir antibióticos tópicos con más AINEs para el dolor, lo que resulta en perforación ocular y prolapso de iris en menos de 24 horas."
    }
  ]
},

  {
  id: "deep-cornea-deficiencia-celulas-madre-limbicas-lscd",
  title: "Deficiencia de Células Madre Límbicas (LSCD): Fisiopatología, Citología de Impresión y Reconstrucción Ocular (SLET, CLET, KLAL)",
  subspecialtyId: "cornea",
  summary: "Monografía exhaustiva sobre la Deficiencia de Células Madre Límbicas (LSCD, Limbal Stem Cell Deficiency): 1) Destrucción o disfunción del nicho microambiental de las empalizadas de Vogt en el limbo esclerocorneal; 2) Pérdida de la barrera anatómica con invasión patológica del fenotipo conjuntival sobre la superficie corneal (conjuntivalización corneal con células caliciformes, neovascularización corneal superficial de 360 grados, metaplasia escamosa, opacidad estromal y erosiones epiteliales recurrentes crónicas); 3) Etiologías primarias congénitas (Aniridia congénita por mutaciones de PAX6, displasia ectodérmica, queratitis asociada a deficiencia endocrina múltiple APECED) frente a causas secundarias adquiridas (quemaduras químicas por álcalis/ácidos, Síndrome de Stevens-Johnson, Penfigoide de membranas mucosas, toxicidad iatrogénica por conservantes [BAK] o antimetabolitos [MMC/5-FU], uso crónico de lentes de contacto y cirugías limbares múltiples); 4) Diagnóstico definitivo de referencia: Citología de impresión corneal con tinción de PAS / Papanicolaou demostrando células caliciformes (goblet cells) productoras de mucina (MUC5AC) y queratinas conjuntivales (K4/K13) en lugar de queratinas corneales (K3/K12); y 5) Abordaje quirúrgico reconstructivo contemporáneo: trasplante autólogo si el ojo adelfo está sano mediante SLET (Simple Limbal Epithelial Transplantation: técnica innovadora de microinjertos limbares sobre membrana amniótica con pegamento de fibrina) frente a CLET (cultivo ex vivo) y procedimientos alogénicos (KLAL / keratolimbal allograft o SLET alogénico) o trasplante de mucosa oral cultivada (COMET) en afección bilateral.",
  definitionAndEpidemiology: "La Deficiencia de Células Madre Límbicas (LSCD) es una insuficiencia regenerativa grave de la superficie corneal originada por la pérdida o agotamiento funcional de las células madre epiteliales de la córnea (LSCs) localizadas en las criptas basales de las empalizadas de Vogt. Al desaparecer esta población germinal y su nicho de señalización Wnt/Notch, el epitelio conjuntival avanza sobre la córnea, perdiéndose la transparencia y la avascularidad fisiológicas. Puede ser unilateral (típica de traumatismos químicos o mecánicos) o bilateral (aniridia, Stevens-Johnson, penfigoide), afectando de forma devastadora la calidad de vida y agudeza visual.",
  anatomyAndPathophysiology: "1. El Nicho Anatómico de las Empalizadas de Vogt:\n   • En el limbo esclerocorneal, las células madre epiteliales se ubican en la capa basal de las empalizadas de Vogt y en las criptas epiteliales del limbo (LEC).\n   • Este nicho proporciona un microambiente hipóxico relativo, protegido de la radiación ultravioleta por la melanina de los melanocitos basales contiguos, y mantenido por fibroblastos estromales estirados y una membrana basal rica en laminina-511 y colágeno IV.\n   • Las LSCs se dividen asimétricamente originando Células Amplificadoras Transitorias (TACs), que migran centrípetamente hacia el centro corneal y verticalmente hacia la superficie para reponer el epitelio corneal cada 7 a 14 días (Teoría XYZ de Thoft).\n2. Mecanismo de la Conjuntivalización:\n   • En condiciones sanas, el limbo actúa como una \"barrera física y bioquímica\" infranqueable que impide que el epitelio conjuntival, más invasivo y vascularizado, colonice la córnea.\n   • Al destruirse más del 50-75% del limbo de forma continua:\n     a) Ruptura de la barrera de adhesión -> El epitelio conjuntival migra y cubre la córnea;\n     b) Angiogénesis descontrolada -> La ausencia de factores antiangiogénicos limbares (sFLT-1, endostatina) y el aumento de VEGF promueven la invasión de neovasos superficiales desde las arcadas epiesclerales;\n     c) Metaplasia y Disfunción -> La conjuntiva sobre la córnea sufre adelgazamiento, pierde sus uniones desmosómicas estables y produce erosiones espontáneas crónicas, defectos epiteliales persistentes (PED), ulceración estromal y queratinización.",
  clinicalExamination: {
    biomicroscopy: "1) Ausencia de las empalizadas de Vogt en la biomicroscopía con alta magnificación;\n2) Tinción con fluoresceína en remolino o \"en fuegos artificiales\" (vortex keratopathy/whorl pattern) que revela un epitelio corneal deslustrado, irregular y con retraso en la captación de contraste;\n3) Pannus fibrovascular superficial que avanza $360^circ$ desde el limbo sobre la membrana de Bowman;\n4) Queratocitos activados y neovasos en estroma superficial.",
    fundus: "Frecuentemente inaccesible por opacidad corneal central; ecografía B para descartar patología del polo posterior.",
    specialSigns: "• Pérdida de la \Línea Límbica\: Transición normal nítida entre la esclera blanca y la córnea transparente sustituida por un epitelio translúcido irregular.\n• Tinción en \empalizada invertida\: Retención prolongada de fluoresceína en los márgenes de avance de las células conjuntivales migrantes."
  },
  diagnosticWorkup: [
    {
      test: "Citología de Impresión Corneal (Gold Standard Diagnóstico)",
      findings: "Tiras de acetato de celulosa aplicadas en la córnea central; tinción con PAS demuestra células caliciformes (goblet cells) ricas en mucina y tinción inmunocitoquímica positiva para queratina K13/K19 y negativa para K3/K12."
    },
    {
      test: "Microscopía Confocal In Vivo (IVCM / Heidelberg HRT-Rostock)",
      findings: "Demuestra pérdida de células basales límbicas pequeñas de alta reflectividad, presencia de células conjuntivales metaplásicas con baja relación núcleo-citoplasma y vasos sanguíneos endoteliales estromales."
    },
    {
      test: "OCT de Segmento Anterior (AS-OCT)",
      findings: "Mide el grosor epitelial corneal (adelgazamiento difuso a <30 µm) y la interfase del pannus fibrovascular sobre Bowman."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Queratopatía Epitelial Punteada Severa por Ojo Seco",
      distinction: "En ojo seco severo las empalizadas de Vogt están intactas y la citología de impresión no muestra células caliciformes en el centro de la córnea."
    },
    {
      condition: "Neoplasia Intraepitelial de la Superficie Ocular (OSSN)",
      distinction: "La OSSN es una lesión gelatinosa o leucoplásica unilateral localizada con neovasos en horquilla gruesos (hairpin loops) que invade la córnea como una masa bien delimitada; en LSCD la conjuntivalización es laminar circunferencial."
    },
    {
      condition: "Pannus Tracomatoso Clásico",
      distinction: "Invasión vascular superior con antecedentes de tracoma endémico y líneas de cicatrización conjuntival de Arlt en párpado superior."
    }
  ],
  steppedManagement: {
    medical: "• Medidas de Apoyo Inicial en LSCD Parcial o Leve:\n  - Eliminación absoluta de conservantes en colirios (¡cero cloruro de benzalconio BAK!).\n  - Lentes de contacto esclerales de gran diámetro permeables al gas (PROSE / Boston Scleral Lens): Mantienen un reservorio líquido continuo que oxigena y lubrica el epitelio remanente.\n  - Gotas de Suero Autólogo al 20-50% o Plasma Rico en Factores de Crecimiento (PRGF).\n  - Desbridamiento epitelial mecánico periódico (PRK mecánica sin láser) en déficits focales para permitir la recolonización de células madre adyacentes viables.",
    surgical: "• Cirugías Reconstructivas Contemporáneas (Selección por Lateralidad):\n  1) LSCD UNILATERAL (Ojo Contralateral Sano como Donante):\n     - SLET Autólogo (Simple Limbal Epithelial Transplantation):\n       * TÉCNICA DE ELECCIÓN MUNDIAL: Se extrae un fragmento diminuto de 2x1 mm de limbo del ojo sano donante; en el ojo receptor se diseca el pannus, se coloca membrana amniótica humana fijada con cola de fibrina biológica y se cortan los 2 mm de limbo en 8 a 12 microinjertos que se distribuyen uniformemente sobre el amnios.\n       * Ventajas sobre CLET: No requiere laboratorio de cultivo celular GMP; éxito anatómico y visual >80-85% a 3 años.\n  2) LSCD BILATERAL (Ambos Ojos Afectados):\n     - Alo-SLET o KLAL (Keratolimbal Allograft de donante cadáver o familiar vivo HLA-compatible) bajo inmunosupresión sistémica rigurosa (Tacrolimus + Micofenolato mofetilo durante al menos 1-2 años).\n     - COMET (Cultivated Oral Mucosal Epithelial Transplantation): Trasplante de epitelio de mucosa oral del propio paciente cultivado sobre membrana amniótica; no requiere inmunosupresión pero presenta mayor neovascularización.\n  3) ¿Cuándo realizar el Trasplante de Córnea (Queratoplastia Lamelar o PKP)?:\n     - ¡NUNCA realizar una queratoplastia penetrante en un ojo con LSCD activa sin reconstruir el limbo previamente! El injerto donante se conjuntivalizará y fallará en el 100% de los casos. La queratoplastia solo puede intentarse 6 a 12 meses DESPUÉS de un SLET exitoso que haya restaurado un epitelio corneal estable."
  },
  clinicalApplicationPractical: "1. Regla de Oro en Reconstrucción de Superficie: Si un paciente con quemadura química grave presenta opacidad corneal central y conjuntivalización, NO realice un trasplante de córnea (PKP) primario. La córnea donante carece de células madre y se opacificará de inmediato. Primero debe realizarse una reconstrucción límbica (SLET) y, tras estabilizar la superficie durante 6-12 meses, se evalúa la queratoplastia óptica.\n2. Técnica de SLET: Los microinjertos limbares deben colocarse con la cara epitelial hacia arriba sobre la membrana amniótica y rodearse de adhesivo de fibrina evitando que el pegamento los cubra totalmente (lo que impediría la migración centrípeta de las células madre).\n3. Retiro de Lentes de Contacto: En sospecha de LSCD inducida por lentes de contacto (frecuente en uso prolongado con hipoxia superior), suspender el uso durante 3 meses; en estadios iniciales el epitelio puede regenerarse espontáneamente.",
  highYieldPearl: "LSCD Board Pearl: Pérdida de empalizadas de Vogt + conjuntivalización corneal con neovasos $360^circ$. Gold standard diagnóstico: Citología de impresión con células caliciformes (PAS+). Cirugía de elección en unilaterales: SLET autólogo. ¡NUNCA realizar queratoplastia penetrante sin restaurar antes el limbo!",
  keyDrugs: [
    {
      name: "Suero autólogo 20-50% colirio",
      dose: "1 gota 4 a 6 veces al día",
      warning: "Aporta EGF, fibronectina y vitamina A vitales para el soporte de las células madre."
    },
    {
      name: "Tacrolimus oral / tópico",
      dose: "En aloinjertos limbares (KLAL/Alo-SLET)",
      warning: "Monitoreo de función renal y niveles séricos obligatorio en trasplantes alogénicos."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Citología de Impresión y Trasplante en LSCD",
      category: "Pregunta Clásica",
      description: "La presencia de células caliciformes (goblet cells ricas en mucina teñidas con PAS) sobre la córnea confirma de forma inequívoca el diagnóstico de LSCD. Un tribunal de examen reprobará inmediatamente a quien proponga una queratoplastia penetrante estándar sin reconstruir el limbo primero.",
      trapToAvoid: "Indicar trasplante de córnea convencional (PKP) a un paciente con deficiencia límbica total, el cual fallará por conjuntivalización completa."
    }
  ],
  landmarkTrials: [
    {
      name: "Sangwan et al. / Simple Limbal Epithelial Transplantation (SLET)",
      year: "2012 (Br J Ophthalmol)",
      conclusion: "Describió la técnica quirúrgica de SLET en 6 pacientes con quemaduras oculares severas unilaterales, logrando una superficie corneal completamente epitelizada y transparente en el 100% de los casos sin necesidad de laboratorios de cultivo celular.",
      fellowshipRelevance: "El ensayo pionero que revolucionó la reconstrucción ocular mundial por su accesibilidad, bajo coste y alta eficacia clínica."
    }
  ],
  histopathologyAndGenetics: "En cortes histológicos de pannus corneal en LSCD: Reemplazo del epitelio corneal estratificado regular por un epitelio conjuntival estratificado no queratinizado conteniendo abundantes células caliciformes intraepiteliales PAS positivas; ausencia de membrana de Bowman en áreas de infiltración fibrovascular con abundantes capilares de pared delgada.",
  surgicalPearls: [
    "Al tomar el injerto donante para SLET en el ojo contralateral sano: Utilizar un trépano de 2 mm o microtijeras de Vannas a nivel del limbo superior a las 12 horas; incluir 1 mm de córnea clara y 1 mm de conjuntiva límbica para asegurar la captura del nicho basal de las empalizadas de Vogt sin inducir un déficit iatrogénico en el ojo donante.",
    "Fijación de Membrana Amniótica en SLET: Colocar siempre el amnios con la cara del estroma esponjoso hacia abajo (pegada al lecho corneal) y la membrana basal hacia arriba; los microinjertos limbares se adhieren firmemente a la membrana basal del amnios usando trombina y fibrinógeno."
  ],
  fellowOralBoardQuestions: [
    {
      question: "Un varón de 28 años sufrió una quemadura severa por soda cáustica (álcali) en su ojo derecho hace 1 año. Tras la fase aguda, el ojo quedó con agudeza visual de movimiento de manos. A la exploración presenta pérdida completa de las empalizadas de Vogt en 360 grados, un pannus fibrovascular opaco que cubre toda la superficie corneal y citología de impresión positiva para células caliciformes en centro de córnea. El ojo izquierdo es completamente sano, con agudeza visual de 20/20 y limbo indemne. Su médico residente de primer año le propone realizar una Queratoplastia Penetrante (PKP) para devolverle la visión. ¿Cuál es su respuesta a la propuesta del residente, qué procedimiento quirúrgico reconstructivo es el estándar de oro contemporáneo y cómo se realiza paso a paso?",
      answer: "1) Crítica a la Propuesta del Residente: La propuesta es totalmente errónea y está formalmente contraindicada. En un ojo con Deficiencia Total de Células Madre Límbicas (LSCD), un botón de queratoplastia penetrante carece de células madre limbares; en pocas semanas las células conjuntivales del receptor invadirán el injerto donante, provocando neovascularización, desepitelización crónica, necrosis y rechazo endotelial irreversible con 100% de tasa de fallo.\n2) Procedimiento Quirúrgico de Elección: SLET Autólogo (Simple Limbal Epithelial Transplantation) utilizando tejido del ojo contralateral sano.\n3) Técnica Quirúrgica Paso a Paso:\n   a) Ojo Receptor: Peritomía límbica de 360 grados y disección meticulosa de todo el pannus fibrovascular superficial sobre la membrana de Bowman hasta dejar el lecho corneal liso y avascular.\n   b) Preparación del Lecho: Colocar un injerto de membrana amniótica humana criopreservada con la membrana basal hacia arriba, cubriendo toda la córnea y limbo, suturada con monofilamento 10-0 o adherida con adhesivo de fibrina tisular (Tisseel).\n   c) Obtención Donante: En el ojo izquierdo sano, se diseca una pequeña biopsia limbar de 2x1 mm del limbo superior (zona de máxima densidad de células madre).\n   d) Fragmentación y Siembra: Dicha biopsia de 2 mm se secciona en 8 a 12 fragmentos diminutos sobre una placa de corte y se colocan concéntricamente sobre la membrana amniótica alrededor del centro visual.\n   e) Fijación: Los microfragmentos se fijan con una microgota de adhesivo de fibrina y se coloca una lente de contacto terapéutica de gran diámetro durante 4 semanas hasta lograr la reepitelización completa.",
      trap: "Aceptar la queratoplastia penetrante directa sin restaurar primero el microambiente y la población de células madre limbares."
    }
  ]
},

  {
  id: "deep-cornea-penfigoide-cicatrizal-stevens-johnson",
  title: "Penfigoide de Membranas Mucosas (MMP / Ocular Cicatricial Pemphigoid) y Síndrome de Stevens-Johnson / NET",
  subspecialtyId: "cornea",
  summary: "Monografía exhaustiva sobre las enfermedades ampollares y cicatrizales de la superficie ocular: 1) Penfigoide de Membranas Mucosas (MMP, antes Penfigoide Ocular Cicatrizal): patogenia autoinmune crónica con autoanticuerpos dirigidos contra antígenos de la membrana basal epitelial (anti-BP180 / colágeno XVII, anti-BP230, subunidad beta-4 de integrina y laminina-332 / epiligrina); 2) Clasificación de Foster del Penfigoide Ocular (Estadio I: conjuntivitis crónica recurrente con fibrosis subepitelial fina; Estadio II: acortamiento y pérdida de profundidad del fondo de saco inferior; Estadio III: formación de puentes de simbléfaron entre conjuntiva palpebral y bulbar; Estadio IV: anquilobléfaron, queratinización completa de la superficie corneal y xeroftalmia terminal); 3) Síndrome de Stevens-Johnson (SSJ) y Necrólisis Epidérmica Tóxica (NET): reacción inmunológica de hipersensibilidad retardada tipo IV mediada por linfocitos T citotóxicos CD8+ y granzima B/perforina inducida por fármacos (Sulfonamidas, Alopurinol, Antiepilépticos como Carbamazepina/Fenitoína/Lamotrigina, AINEs); 4) Manejo de urgencia en fase hiperaguda de SSJ/NET: colocación inmediata de Membrana Amniótica en fórnices y margen palpebral con anillo de Procera en los primeros 7-10 días (ventana de oportunidad biológica crítica para prevenir ceguera cicatrizal); y 5) Protocolo inmunosupresor sistémico escalonado en Penfigoide (Dapsona si glucosa-6-fosfato deshidrogenasa normal, Metotrexato, Micofenolato mofetilo, Ciclofosfamida oral/pulsos IV en progresión rápida y Rituximab en enfermedad refractaria).",
  definitionAndEpidemiology: "El Penfigoide de Membranas Mucosas (MMP) con compromiso ocular es una enfermedad autoinmune sistémica ampollar crónica progresiva caracterizada por cicatrización conjuntival bilateral y retracción conjuntival irreversible. Afecta típicamente a pacientes mayores de 60-70 años con predominio femenino (2:1). Sin tratamiento inmunosupresor sistémico, evoluciona invariablemente a la ceguera bilateral por queratinización total y déficit límbico absoluto. El SSJ/NET es una emergencia dermatológica y oftalmológica aguda con desprendimiento epidérmico mucocutáneo masivo ($<10%$ superficie corporal en SSJ, $>30%$ en NET) y daño ocular agudo grave en el 50-80% de los supervivientes.",
  anatomyAndPathophysiology: "1. Inmunopatogenia del Penfigoide de Membranas Mucosas (MMP):\n   • Pérdida de tolerancia inmune frente a componentes hemidesmosómicos de la zona de la membrana basal (BMZ) de la conjuntiva y mucosas oral, nasal y genital.\n   • Autoanticuerpos patogénicos IgG e IgA y activación de la vía clásica del complemento con depósito lineal continuo de C3 en la unión dermoepidérmica.\n   • Reclutamiento de mastocitos, eosinófilos y macrófagos que secretan citoquinas profibróticas (TGF-beta, IL-4, IL-13).\n   • Activación sostenida de miofibroblastos conjuntivales: Síntesis desordenada y contracción de haces de colágeno en la lámina propia de la conjuntiva, con fibrosis retráctil submucosa progresiva que borra los fondos de saco y oblitera los conductos excretores de las glándulas lagrimales principales y accesorias (Krause y Wolfring).\n2. Inmunopatogenia de SSJ / NET:\n   • Linfocitos T citotóxicos CD8+ y células Natural Killer (NK) específicos del fármaco o sus metabolitos liberan la proteína citotóxica Granulisina, perforina y granzima B.\n   • Esta liberación masiva induce la apoptosis diseminada de queratinocitos epidérmicos y del epitelio de la superficie ocular en toda su extensión.\n   • Fase aguda: Desprendimiento epitelial mucoso completo con formación de pseudomembranas densas, necrosis del margen palpebral con desnudamiento de la línea de unión mucocutánea (Línea de Marx), denudación corneal completa y oclusión de orificios de glándulas de Meibomio.",
  clinicalExamination: {
    biomicroscopy: "• En MMP: Estrías fibróticas blanquecinas subepiteliales en conjuntiva tarsal inferior, pliegues mucosos tensos, acortamiento del fondo de saco inferior (medir en milímetros con regla bajo eversión forzada; normal $>8\text{ mm}$), simbléfaron (bridas conjuntivales cicatrizales fijas), triquiasis, distiquiasis, entropión cicatrizal y queratinización epitelial corneal.\n• En SSJ/NET fase aguda: Quemosis hemorrágica masiva, pseudomembranas blanquecinas confluentes en fórnices, defecto epitelial corneal total, margen palpebral cruento y ulcerado.\n• En SSJ fase crónica: Triquiasis severa de 360 grados, sequedad ocular absoluta (Schirmer 0 mm), déficit de células madre limbares con queratinización epidermoide corneal (\"córnea de piel\").",
    fundus: "Habitualmente inaccesible; ecografía B de seguimiento.",
    specialSigns: "• Maniobra de Tirantez del Fórnix Inferior: Al traccionar el párpado inferior hacia abajo y pedir al paciente que mire hacia arriba, se evidencian bandas fibróticas verticales inextensibles que limitan la elevación del globo ocular.\n• Desaparición de las criptas del fórnix: Borramiento completo de los fondos de saco conjuntivales en estadios avanzados de Foster."
  },
  diagnosticWorkup: [
    {
      test: "Biopsia Conjuntival Bulbar con Inmunofluorescencia Directa (DIF)",
      findings: "Patognomónico: Depósito lineal continuo de inmunoglobulinas (IgG, IgA) y/o complemento C3 a lo largo de la zona de la membrana basal conjuntival (BMZ). Sensibilidad del 60-70%; una DIF negativa NO descarta el diagnóstico si la clínica es típica."
    },
    {
      test: "Citología de Impresión Conjuntival y Test de Schirmer I y II",
      findings: "Pérdida total de células caliciformes y queratinización celular masiva con escamas nucleadas; Schirmer I frecuentemente $<2\text{ mm}$ a los 5 minutos."
    },
    {
      test: "Test de Deficiencia de Glucosa-6-Fosfato Deshidrogenasa (G6PD)",
      findings: "Obligatorio antes de iniciar tratamiento con Dapsona para prevenir hemólisis masiva y metahemoglobinemia."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Pseudopenfigoide Inducido por Fármacos Tópicos",
      distinction: "Cicatrización conjuntival unilateral o bilateral inducida por colirios antiglaucomatosos crónicos (Pilocarpina, Timolol con BAK); la DIF es negativa y el cuadro se estabiliza al suspender el colirio culpable."
    },
    {
      condition: "Conjuntivitis Cicatrizal por Adenovirus o Clamidias (Tracoma)",
      distinction: "La cicatrización tracomatosa afecta preferentemente el párpado superior (Líneas de Arlt) y no es autoinmune progresiva; el penfigoide inicia en el párpado inferior y progresa de forma implacable."
    },
    {
      condition: "Enfermedad Injerto contra Huésped (GVHD) Ocular Crónica",
      distinction: "Antecedente de trasplante alogénico de médula ósea/células hematopoyéticas; presenta ojo seco severo y pseudomembranas."
    }
  ],
  steppedManagement: {
    medical: "• Abordaje en Penfigoide de Membranas Mucosas (MMP):\n  - ¡LOS CORTICOIDES TÓPICOS SON INEFICACES PARA FRENAR LA FIBROSIS SUBEPITELIAL! Solo controlan síntomas superficiales.\n  - Estadio Leve a Moderado de Progresión Lenta:\n    * Dapsona oral: 50 a 150 mg/día (¡comprobar previamente niveles normales de enzima G6PD; monitorizar hemograma y metahemoglobina!).\n    * Alternativa: Metotrexato oral/subcutáneo (15-25 mg/semana con ácido fólico) o Micofenolato mofetilo (1-2 g/día).\n  - Estadio Grave o de Progresión Rápida (Foster III-IV o fallo de primera línea):\n    * Ciclofosfamida oral (1-2 mg/kg/día) o en pulsos IV mensuales asociada a prednisona oral (1 mg/kg/día descendente).\n    * Rituximab (anti-CD20): Terapia biológica de primera línea en penfigoide refractario o intolerante a ciclofosfamida (1000 mg IV los días 1 y 15).\n• Abordaje Hiperagudo en Síndrome de Stevens-Johnson / NET (VENTANA CRÍTICA DE 7-10 DÍAS):\n  - Retiro inmediato del fármaco causal desencadenante.\n  - Lisis diaria suave de pseudomembranas conjuntivales con varilla de vidrio o espátula roma para evitar adherencias.\n  - Colocación temprana de Membrana Amniótica Criopreservada (ProKera o parche quirúrgico de amnios grande de $360^circ$ que cubra fórnices y bordes libres palpebrales suturado con prolene 6-0 bolsters):\n    * ¡REDUCE DRÁSTICAMENTE EL SIMBLÉFARON Y LA PÉRDIDA VISUAL CRÓNICA!\n  - Antibióticos tópicos sin conservantes, lubricación intensa sin BAK y corticoides tópicos sin conservantes (Dexametasona sin BAK cada 2 horas en fase inflamatoria aguda).",
    surgical: "• Cirugías Reconstructivas en Estadios Cicatrizales Tardíos:\n  - Corrección de Triquiasis y Entropión Cicatrizal: Depilación con láser de argón, crioterapia o avance de retractores con injerto de mucosa oral.\n  - ¡CONTRAINDICACIÓN DE CIRUGÍAS OCULARES ELECTIVAS SIN INMUNOSUPRESIÓN COMPLETA!: Cualquier incisión quirúrgica (incluyendo catarata o queratoplastia) en un ojo con penfigoide activo desencadena una reactivación fulminante de la fibrosis que devora el ojo en semanas.\n  - Queratoprótesis de Boston Tipo I o Tipo II (u Osteo-odonto-queratoprótesis de Strampelli/Falcinelli - OOKP):\n    * Única opción de rehabilitación visual en estadios terminales con queratinización corneal completa y xerosis total donde los trasplantes biológicos fracasan invariablemente."
  },
  clinicalApplicationPractical: "1. PROTOCOLO DE URGENCIA EN STEVENS-JOHNSON EN UCI: Si un dermatólogo o intensivista le solicita interconsulta por un paciente con SSJ/NET, acuda de inmediato. No espere a que la piel cicatrice. La ventana para colocar membrana amniótica en los párpados y fórnices es en los primeros 7 a 10 días; esperar 3 semanas significa condenar al paciente a simbléfaron cicatrizal de por vida.\n2. Medición del Fórnix Inferior con Regla Milimétrica: Todo paciente anciano con conjuntivitis crónica bilateral que no responde a lágrimas debe ser explorado evirtiendo el párpado inferior y midiendo la profundidad del fondo de saco. Si mide menos de 8 mm o hay pliegues de simbléfaron incipientes, derive a córnea/inmunología para biopsia y Dapsona antes de que progrese a Foster III.\n3. Toxicidad por Dapsona: Solicite analítica con niveles de G6PD antes de la primera dosis; si prescribe dapsona en un paciente con déficit de G6PD, provocará una anemia hemolítica intravascular letal.",
  highYieldPearl: "Penfigoide vs SSJ Board Pearl: Penfigoide = Enfermedad autoinmune progresiva con autoanticuerpos en BMZ (DIF lineal IgG/C3); tratamiento médico inmunosupresor sistémico obligatorio (Dapsona/Ciclofosfamida/Rituximab). SSJ = Reacción aguda a fármacos; la colocación urgente de Membrana Amniótica en fórnices en los primeros 7 días previene la ceguera cicatrizal.",
  keyDrugs: [
    {
      name: "Dapsona oral",
      dose: "50-150 mg al día",
      warning: "¡Medir G6PD previa!; riesgo de hemólisis y metahemoglobinemia."
    },
    {
      name: "Rituximab IV",
      dose: "1000 mg días 1 y 15",
      warning: "Terapia biológica de elección en penfigoide grave refractario."
    },
    {
      name: "Ciclofosfamida oral",
      dose: "1-2 mg/kg/día",
      warning: "Monitoreo de hematuria por cistitis hemorrágica y leucopenia."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Manejo de Fase Aguda en Stevens-Johnson",
      category: "Trampa de Tribunal",
      description: "La medida más costo-efectiva y determinante para prevenir la ceguera en el Síndrome de Stevens-Johnson es el trasplante urgente de Membrana Amniótica en los fórnices y bordes palpebrales durante los primeros 7-10 días de la enfermedad. Esperar a la fase cicatrizal crónica es un error irreparable.",
      trapToAvoid: "Indicar únicamente lubricantes y colirios antibióticos en un SSJ en UCI sin colocar membrana amniótica en los fondos de saco."
    }
  ],
  landmarkTrials: [
    {
      name: "Gregory et al. / Amniotic Membrane Transplantation in Acute SJS/TEN",
      year: "2016 (Ophthalmology)",
      conclusion: "Demostró que el trasplante temprano de membrana amniótica en la fase hiperaguda de SSJ/NET preserva una agudeza visual de 20/20 a 20/40 en >80% de los pacientes y reduce drásticamente el simbléfaron y la sequedad extrema frente al manejo conservador clásico.",
      fellowshipRelevance: "El ensayo que transformó el estándar de oro en las unidades de quemados y UCIs a nivel internacional."
    }
  ],
  histopathologyAndGenetics: "En biopsia conjuntival de Penfigoide Ocular: Inmunofluorescencia directa positiva con banda lineal fluorescente continua de IgG, IgA y factor C3 del complemento en la lámina lúcida de la zona de la membrana basal epitelial conjuntival; infiltrado mononuclear difuso de células T CD4+ y CD8+ con histiocitos y proliferación desmedida de fibroblastos secretores de colágeno.",
  surgicalPearls: [
    "Colocación de Membrana Amniótica con Conformador en SSJ: Utilizar una lámina grande de membrana amniótica de 5x5 cm; envolver un conformador plástico de fórnix o anillo de Procera y asegurar la membrana a través de todo el espesor del párpado superior e inferior con puntos en U de sutura Prolene 4-0 anclados sobre bolsters de algodón o silicona.",
    "Lisis Diaria de Pseudomembranas: Aplicar colirio anestésico sin conservantes y con una torunda humedecida o espátula de iris desbridar meticulosamente las membranas fibrinopurulentas en fondo de saco superior e inferior cada 24 horas para impedir que se organicen en puentes fibróticos."
  ],
  fellowOralBoardQuestions: [
    {
      question: "Una mujer de 71 años consulta por enrojecimiento ocular bilateral crónico de 14 meses de evolución, diagnosticado y tratado repetidamente por múltiples médicos como \"blefaroconjuntivitis alérgica y ojo seco\" con colirios lubricantes y corticoides suaves sin mejoría. A la eversión del párpado inferior se aprecian bandas fibróticas submucosas blanquecinas que acortan el fórnix inferior a 5 mm de profundidad, con una pequeña adherencia simblefárica lateral entre conjuntiva palpebral y bulbar en ojo derecho. No hay antecedentes sistémicos de interés. ¿Cuál es el diagnóstico clínico más probable según la clasificación de Foster, qué prueba diagnóstica debe solicitarse para confirmarlo, qué examen previo es indispensable antes de iniciar la primera línea farmacológica y por qué la cirugía de catarata está formalmente contraindicada en este momento?",
      answer: "1) Diagnóstico Clínico: Penfigoide de Membranas Mucosas (MMP / Penfigoide Ocular Cicatrizal) en Estadio II-III de Foster (acortamiento de fondo de saco y simbléfaron incipiente).\n2) Prueba Diagnóstica Confirmatoria: Biopsia conjuntival bulbar (preferentemente de zona mínimamente inflamada) enviada en medio de Michel para Inmunofluorescencia Directa (DIF), buscando el depósito lineal característico de IgG, IgA o C3 en la membrana basal conjuntival.\n3) Examen Previo Indispensable: Dosificación de la enzima Glucosa-6-Fosfato Deshidrogenasa (G6PD) en sangre antes de iniciar Dapsona oral (fármaco de primera elección en enfermedad leve-moderada) para evitar hemólisis intravascular letal y metahemoglobinemia.\n4) Contraindicación de la Cirugía Ocular: Cualquier cirugía ocular incisional (como facoemulsificación) realizada en un ojo con penfigoide activo sin control inmunosupresor sistémico previo desencadena una reactivación explosiva de la inflamación conjuntival, acelerando la fibrosis, el simbléfaron y el colapso de la superficie ocular en pocas semanas.",
      trap: "Aceptar operar la catarata de la paciente \"para mejorar su visión rápidamente\" sin haber iniciado inmunosupresión sistémica y estabilizado el penfigoide durante al menos 6 meses."
    }
  ]
},

  {
  id: "deep-cornea-microsporidiosis-micobacterias-nocardia",
  title: "Queratitis Infecciosas Atípicas y Complejas: Micobacterias No Tuberculosas (NTM post-LASIK), Nocardia y Microsporidiosis",
  subspecialtyId: "cornea",
  summary: "Monografía exhaustiva sobre las queratopatías infecciosas atípicas, emergentes y refractarias al tratamiento estándar: 1) Queratitis por Micobacterias No Tuberculosas (NTM, Non-Tuberculous Mycobacteria: Mycobacterium chelonae, M. fortuitum, M. abscessus) típicamente asociadas a cirugía refractiva corneal incisional o lamelar (infección tardía de la interfase del flap de LASIK o PRK) o cuerpos extraños de suelo/vegetales; 2) Características biomicroscópicas de NTM: infiltrados estromales tardíos indurados blanquecinos de aspecto en \"vidrio esmerilado\" (ground glass) o \"agrietado\" con borde dendritiforme o digitado que no responden a fluoroquinolonas convencionales; 3) Queratitis por Nocardia (Nocardia asteroides, N. brasiliensis): bacterias grampositivas filamentosas aerobias débilmente ácido-alcohol resistentes (tinción de Kinyoun modificada positiva), caracterizadas por infiltrados punteados superficiales agrupados en \"corona radiada\" o \"collar de perlas\" (wreath-like pattern) tras traumatismo o contacto con tierra; 4) Microsporidiosis Corneal (Vittaforma corneae, Encephalitozoon cuniculi/hellem): parásitos intracelulares formadores de esporas que producen queratoconjuntivitis epitelial punteada gruesa bilateral en pacientes con VIH/inmunodepresión o queratitis estromal profunda unilateral en inmunocompetentes tras deportes al aire libre o contacto con barro; y 5) Protocolos diagnósticos de laboratorio especializados (Ziehl-Neelsen, Kinyoun modificado, Calcoflúor blanco, PCR multiplex) y esquemas antibióticos y antiparasitarios dirigidos (Amikacina fortificada 20-40 mg/mL, Claritromicina tópica/oral, Trimetoprima-Sulfametoxazol, Fumagilina tópica y Voriconazol/Albendazol).",
  definitionAndEpidemiology: "Las queratitis infecciosas atípicas engloban patógenos bacterianos fastidiosos y parásitos que suelen pasar desapercibidos en los cultivos bacterianos rutinarios y conllevan retrasos diagnósticos críticos. Las NTM constituyen la causa más frecuente de queratitis infecciosa en la interfase post-LASIK (apareciendo de 2 a 8 semanas tras el procedimiento). Nocardia y Microsporidios representan causas clásicas de queratitis de evolución tórpida tras traumatismos con tierra o exposición a aguas contaminadas.",
  anatomyAndPathophysiology: "1. Biología y Resistencia de las Micobacterias Atípicas (NTM):\n   • Pertenecen a las micobacterias de crecimiento rápido (Grupo IV de Runyon: colonias en cultivo en <7 días).\n   • Pared celular extremadamente hidrofóbica rica en ácidos micólicos y lípidos complejos que impide la penetración de antibióticos hidrofílicos comunes (como betalactámicos) y resiste la acción de desinfectantes hospitalarios estándar.\n   • Tienen tropismo por la interfase avascular creada tras la creación del flap de LASIK con microquerátomo o láser de femtosegundo, donde forman biofilms bacterianos resistentes a la fagocitosis.\n2. Inmunopatogenia de Nocardia asteroides:\n   • Bacterias actinomicetales filamentosas ramificadas que simulan hifas fúngicas.\n   • Resisten la muerte intracelular en macrófagos y secretan catalasa y superóxido dismutasa.\n   • Generan una respuesta piógena y granulomatosa focal en el estroma anterior con microabscesos perlados coalescentes.\n3. Biología de los Microsporidios:\n   • Hongos parásitos intracelulares obligados que infectan las células epiteliales de la córnea mediante la extrusión de un tubo polar que inyecta su esporoplasma en el citoplasma del queratocito.\n   • En inmunodeprimidos (VIH con CD4 <100 células/uL): Queratoconjuntivitis epitelial punteada gruesa bilateral indolente.\n   • En inmunocompetentes: Infección estromal granulomatosa profunda inducida por traumatismo con barro o agua estancada.",
  clinicalExamination: {
    biomicroscopy: "• En NTM (Post-LASIK): Infiltrados multifocales blanquecinos puntiformes o estriados en la interfase flap-lecho (\"signo del vidrio agrietado\"), hipopión tardío escaso, edema corneal mínimo en fases precoces.\n• En Nocardia: Infiltrados epiteliales y estromales anteriores sobreelevados amarillo-blanquecinos de 1-2 mm organizados en anillo o guirnalda (\"wreath-like pattern\" o patrón en corona) rodeados de halos de condensación satélite.\n• En Microsporidiosis Epitelial: Córnea con abundantes lesiones punteadas blanco-grisáceas gruesas confluentes, difusas, refractarias a colirios antibióticos estándar; en forma estromal: infiltrado estromal profundo en disco con necrosis focal.",
    fundus: "Polo posterior generalmente conservado salvo extensión endoftálmica en casos extremadamente tardíos.",
    specialSigns: "• Patrón en Corona Radiada / Guirnalda de Perlas (Wreath Pattern) de Nocardia: Lesiones puntiformes individuales que se unen formando un círculo periférico de aspecto patognomónico.\n• Retraso en Aparición Post-LASIK (NTM): A diferencia de Staphylococcus aureus que infecta el LASIK a las 24-48 horas, las NTM debutan clínicamente a las 2 a 8 semanas del procedimiento quirúrgico."
  },
  diagnosticWorkup: [
    {
      test: "Raspado Corneal y Tinciones Microbiológicas Específicas",
      findings: "Tinción de Gram (bacilos grampositivos filamentosos delgados en Nocardia; NTM frecuentemente no se tiñen bien o son \"fantasmas\"), Tinción de Kinyoun modificada (positiva en Nocardia), Ziehl-Neelsen (positiva en NTM) y Blanco de Calcoflúor o Giemsa (esporas ovales refractarias de 1-2 µm con banda polar central en Microsporidiosis)."
    },
    {
      test: "Cultivo en Medios Especiales Prolongados",
      findings: "Agar Löwenstein-Jensen, Agar Chocolate, Agar Sangre y Caldo Tioglicolato incubados a $30^circ\text{C}$ y $37^circ\text{C}$ durante al menos 14 a 21 días (descarte de crecimiento lento)."
    },
    {
      test: "PCR Multiplex y Secuenciación del Gen 16S rRNA / hsp65",
      findings: "Identificación genotípica rápida y diferenciación entre M. chelonae, M. fortuitum y M. abscessus."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Queratitis Bacteriana por Pseudomonas aeruginosa",
      distinction: "Pseudomonas es fulminante en 24-48 horas con necrosis licuefactiva masiva, secreción verdosa mucopurulenta profusa y perforación rápida; NTM es tórpida e indolente en semanas."
    },
    {
      condition: "Queratitis Fúngica Filamentosa (Fusarium)",
      distinction: "Bordes plumosos e hifas tabadas en calcoflúor; sensible a Natamicina y Voriconazol; NTM no responde a antifúngicos."
    },
    {
      condition: "Queratitis por Acanthamoeba",
      distinction: "Dolor atroz desproporcionado con perineuritis radial y quistes de doble pared en raspado; Nocardia no presenta perineuritis."
    }
  ],
  steppedManagement: {
    medical: "• Esquema Específico en Queratitis por NTM (Micobacterias Atípicas):\n  1) Amikacina colirio fortificado (20 a 40 mg/mL) cada 30-60 minutos en alternancia con:\n  2) Claritromicina tópica al 1-2% o Azitromicina al 1% cada hora.\n  3) Fluoroquinolona de 4ª generación (Moxifloxacino al 0.5% o Gatifloxacino cada hora).\n  4) Terapia oral complementaria: Claritromicina oral 500 mg cada 12 horas o Azitromicina 500 mg/día.\n  5) ¡DURACIÓN DEL TRATAMIENTO!: Mantener de 6 a 12 semanas para evitar recidivas por persistencia intracelular.\n• Esquema Específico en Queratitis por Nocardia:\n  1) Amikacina fortificada (20-40 mg/mL) colirio cada hora (fármaco de máxima sensibilidad).\n  2) Trimetoprima-Sulfametoxazol (TMP-SMX) colirio al 1.6%/0.8% o Sulfacetamida sódica al 10-15% cada hora + TMP-SMX oral (160/800 mg c/12h).\n• Esquema Específico en Microsporidiosis Corneal:\n  - Forma epitelial (VIH/Inmunodeprimidos):\n    * Fumagilina tópica al 0.007% (Fumidil B) 4 a 6 veces al día (fármaco específico).\n    * Albendazol oral: 400 mg cada 12 horas durante 2 a 4 semanas.\n    * Inicio urgente de Terapia Antirretroviral de Gran Actividad (TARGA) para elevar CD4 $>200\text{ células/uL}$.\n  - Forma estromal (Inmunocompetentes):\n    * Voriconazol tópico al 1% + Voriconazol oral 200 mg c/12h.",
    surgical: "• Intervenciones Quirúrgicas Específicas:\n  - En Infección de Interfase Post-LASIK por NTM:\n    * ¡LEVANTAMIENTO DEL FLAP QUIRÚRGICO OBLIGATORIO!: La penetración de los colirios a la interfase a través del flap intacto es insignificante.\n    * Desbridamiento mecánico del lecho estromal y de la cara profunda del flap con espátula o esponja empapada en Amikacina (40 mg/mL) o Claritromicina al 1%.\n    * Si los infiltrados no remiten y amenazan la córnea central: AMPUTACIÓN DEL FLAP (Flap Amputation); extirpar el flap elimina el nido de biofilm microbiano y permite que los colirios fortificados curen el lecho residual.\n  - En Queratitis por Nocardia o Microsporidiosis estromal no respondedora: Desbridamiento epitelial repetido o Queratoplastia Lamelar Tectónica / Penetrante."
  },
  clinicalApplicationPractical: "1. Infección post-LASIK que aparece a las 3 semanas: No piense en Staphylococcus; sospeche inmediatamente Micobacterias No Tuberculosas (NTM). No pierda tiempo: programe al paciente en quirófano para levantar el flap, tomar muestras para cultivo con Ziehl-Neelsen e irrigar el lecho con Amikacina 40 mg/mL.\n2. Sospecha de Nocardia ante patrón en guirnalda: Solicite explícitamente al laboratorio de microbiología tinción de Kinyoun modificada y mantener los cultivos durante 2 semanas; si sólo solicita cultivo bacteriano rutinario, a las 48 horas informarán \"cultivo negativo\" y el paciente perderá la córnea.\n3. Microsporidiosis en Inmunocompetente tras deportes acuáticos/barro: Si los cultivos de bacterias y hongos son negativos y el paciente no responde a natamicina ni moxifloxacino, solicite tinción de calcoflúor o Giemsa para descartar microsporidios y trate con voriconazol/fumagilina.",
  highYieldPearl: "Queratitis Atípicas Board Pearl: NTM = Post-LASIK tardío (semanas), infiltrado en interfase (\"vidrio esmerilado\"), tratamiento con Amikacina + Claritromicina + lavado de interfase (o amputación de flap). Nocardia = Kinyoun modificado positivo, patrón en guirnalda/corona, responde a Amikacina y TMP-SMX. Microsporidiosis = Esporas intracelulares, tratar con Fumagilina/Albendazol.",
  keyDrugs: [
    {
      name: "Amikacina fortificada (20-40 mg/mL)",
      dose: "1 gota cada hora",
      warning: "Tratamiento de elección tanto en NTM como en Nocardia."
    },
    {
      name: "Claritromicina colirio 1% / oral 500 mg",
      dose: "1 gota c/hora y 500 mg VO c/12h",
      warning: "Terapia combinada obligada en NTM (M. chelonae/fortuitum)."
    },
    {
      name: "Albendazol oral / Fumagilina",
      dose: "400 mg VO c/12h y colirio 0.007%",
      warning: "Terapia antiparasitaria dirigida en microsporidiosis corneal."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Conducta ante Infección de Interfase Post-LASIK",
      category: "Pregunta Clásica",
      description: "Ante una queratitis de interfase tardía post-LASIK por NTM, la conducta obligada es levantar quirúrgicamente el flap para tomar muestras de cultivo e irrigar con antibióticos fortificados (Amikacina). Si el cuadro empeora, la amputación del flap es el procedimiento quirúrgico de rescate definitivo.",
      trapToAvoid: "Tratar una infección de interfase post-LASIK únicamente con colirios tópicos sin levantar el flap quirúrgico."
    }
  ],
  landmarkTrials: [
    {
      name: "Solomon et al. / Infectious Keratitis Following LASIK",
      year: "2003 (Ophthalmology)",
      conclusion: "Estudio multicéntrico que documentó que las Micobacterias No Tuberculosas (NTM) son los agentes patógenos aislados con mayor frecuencia en queratitis de interfase de inicio tardío tras LASIK, y que el levantamiento del flap con irrigación de amikacina y claritromicina logra la mayor tasa de resolución con preservación visual.",
      fellowshipRelevance: "El ensayo de referencia para protocolos de complicaciones infecciosas en cirugía refractiva."
    }
  ],
  histopathologyAndGenetics: "En biopsia de tejido corneal o flap amputado por NTM: Bacilos finos ácido-alcohol resistentes intracelulares y extracelulares agrupados en conglomerados densos teñidos con Ziehl-Neelsen, con ausencia de necrosis masiva de neutrófilos e infiltración de histiocitos y células epitelioides granulomatosas.",
  surgicalPearls: [
    "Técnica de Levantamiento del Flap en Infección: Utilizar un disector de flap romo para reabrir el margen sin romper la bisagra; tomar muestras raspando directamente la cara profunda del lecho estromal con hoja de bisturí Nº 15 e irrigar exhaustivamente con 10 mL de solución de Amikacina fortificada a 20 mg/mL antes de reponer el flap sin suturas o con 2 puntos de nylon 10-0 si hay necrosis del borde.",
    "Amputación del Flap: Secciona el flap en su base respetando 1 mm de la bisagra con tijeras de Westcott si existe necrosis estromal central $>50%$ del flap que impida el control de la infección."
  ],
  fellowOralBoardQuestions: [
    {
      question: "Un paciente de 34 años sometido a LASIK miópico bilateral sin complicaciones hace 4 semanas consulta por visión borrosa indolora y leve sensación de cuerpo extraño en ojo derecho de 6 días de evolución. A la lámpara de hendidura el epitelio corneal anterior está intacto, pero en la interfase entre el flap y el lecho estromal se aprecian 4 infiltrados blanquecinos indurados digitados con aspecto en vidrio esmerilado que respetan el eje pupilar pero se extienden en la periferia. Su oftalmólogo general aumentó la dosis de fluorometolona a cada 2 horas creyendo que se trataba de una Queratitis Lamelar Difusa (DLK o \"arenas del Sahara\"). ¿Cuál es el diagnóstico más probable, por qué aumentar el corticoide fue un error crítico y cuál es el protocolo de manejo quirúrgico y farmacológico inmediato?",
      answer: "1) Diagnóstico Más Probable: Queratitis Infecciosa de Interfase Post-LASIK por Micobacterias No Tuberculosas (NTM, probablemente Mycobacterium chelonae o M. fortuitum).\n2) Error del Corticoide: Confundir una infección tardía por NTM con DLK (que aparece en las primeras 24-72 horas y es estéril) e intensificar los corticoides tópicos suprime la respuesta inmune local, facilitando la proliferación bacteriana descontrolada y la formación de biofilms en la interfase.\n3) Protocolo Inmediato:\n   - Suspender inmediatamente los corticoides tópicos.\n   - Trasladar al paciente a quirófano para levantamiento quirúrgico estéril del flap de LASIK.\n   - Raspado directo del lecho y de la cara interna del flap para frotis (Gram, Ziehl-Neelsen / Kinyoun) y cultivo en Löwenstein-Jensen y Agar Sangre por 2 semanas.\n   - Lavado profuso de la interfase con solución de Amikacina fortificada (20-40 mg/mL).\n   - Reposición del flap e inicio de Amikacina fortificada tópica (20 mg/mL) cada hora + Claritromicina tópica al 1% cada hora + Claritromicina oral 500 mg cada 12 horas.\n   - Si los infiltrados progresan tras 5-7 días de tratamiento médico intensivo: Amputación quirúrgica del flap para erradicar el biofilm.",
      trap: "Confundir NTM tardía con Queratitis Lamelar Difusa (DLK) y aumentar los esteroides, lo que destruye el estroma corneal."
    }
  ]
},

  {
  id: "deep-cornea-hidrops-agudo-queratocono",
  title: "Queratocono Avanzado e Hidrops Corneal Agudo: Rotura de la Membrana de Descemet, Neumotaponamiento con Gas (C3F8/SF6) y Manejo Quirúrgico",
  subspecialtyId: "cornea",
  summary: "Monografía exhaustiva sobre las complicaciones extremas del queratocono y las ectasias corneales progresivas: 1) Hidrops Corneal Agudo (Acute Corneal Hydrops): rotura espontánea o mecánicamente inducida de la membrana de Descemet y la monocapa endotelial en el cono ectásico adelgazado, desencadenada frecuentemente por frotamiento ocular compulsivo crónico (eye rubbing) en pacientes atópicos o con Síndrome de Down; 2) Fisiopatología del Edema Hiperagudo: penetración fulminante de humor acuoso a la sustancia propia del estroma corneal con pérdida instantánea de la deshidratación activa endotelial, produciendo un edema masivo en \"vidrio lechoso\" (ground-glass appearance), lagunas quísticas estromales intratorácicas y bullas epiteliales con riesgo de perforación y dolor severo; 3) Historia natural frente a resolución cicatrizal: aplanamiento corneal paradójico post-hidrops pero con opacidad cicatrizal estromal densa y vascularización que multiplica el riesgo de rechazo en queratoplastia posterior; 4) Abordaje diagnóstico con OCT de Segmento Anterior (AS-OCT): medición precisa de la brecha de retracción de la membrana de Descemet (descemetorrexia espontánea con bordes enrollados) y detección de macroquistes estromales; y 5) Protocolo terapéutico de choque: manejo conservador tradicional (3 a 5 meses de edema con colirios hipertónicos NaCl 5%, ciclopléjicos y profilaxis) frente al Estándar Quirúrgico Contemporáneo de Rescate Rápido mediante Neumotaponamiento Intracameral con gas isoexpansivo (Perfluoropropano C3F8 al 14% o Hexafluoruro de azufre SF6 al 20%) combinado con suturas corneales de grosor completo aproximadoras, acortando el tiempo de resolución a 2-3 semanas y previniendo la neovascularización.",
  definitionAndEpidemiology: "El Hidrops Corneal Agudo es una complicación aguda potencialmente devastadora que ocurre en el 2% al 3% de los pacientes con queratocono avanzado u otras ectasias corneales (queratoglobo, degeneración marginal pelúcida). Se presenta con dolor súbito, fotofobia intensa y pérdida visual abrupta secundaria a la rotura mecánica de la membrana de Descemet y el endotelio suprayacente. Es significativamente más frecuente en varones jóvenes con atopia severa (queratoconjuntivitis vernal) y frotamiento ocular vigoroso continuo, así como en pacientes con trisomía 21 (Síndrome de Down).",
  anatomyAndPathophysiology: "1. Mecánica de la Rotura de la Membrana de Descemet:\n   • En el queratocono avanzado, el estroma corneal apical se encuentra críticamente adelgazado ($<300-350 mu\text{m}$) con degradación del colágeno y estrés de tracción biomecánico extremo.\n   • El frotamiento ocular repetido genera picos súbitos de presión intraocular que superan el límite elástico de la membrana de Descemet (a pesar de su grosor relativo de 10-12 µm en adultos).\n   • Al fracturarse la Descemet, sus extremos rotos elásticos se retraen y se enrollan hacia la cámara anterior en espiral (\"scrolls\" o rollos de Descemet).\n2. Imbibición y Edema Estromal Masivo:\n   • Al perderse la barrera impermeable y las bombas metabólicas endoteliales Na+/K+ ATPasa en el área de la fractura, el humor acuoso penetra libremente a gran presión hacia el estroma corneal.\n   • Los glicosaminoglicanos estromales (queratán sulfato, condroitín sulfato) se hidratan instantáneamente, aumentando el grosor corneal de 300 µm a más de 1200-1800 µm en pocas horas.\n   • Se forman grandes lagos intrestromales de líquido (pseudomicroquistes o macroquistes estromales) y bullas subepiteliales.\n3. Proceso de Cicatrización Espontánea:\n   • Las células endoteliales adyacentes viables sufren metaplasia, migran sobre el estroma denudado y cierran lentamente la brecha secretando una nueva membrana basal en un periodo de 8 a 16 semanas.\n   • Consecuencia biológica: El estroma edematoso se reemplaza por tejido fibrótico cicatrizal denso (leucoma central vascularizado). Paradójicamente, la cicatriz retrae y aplana el cono ectásico, pero reduce drásticamente la visión y promueve el rechazo si se trasplanta.",
  clinicalExamination: {
    biomicroscopy: "1) Edema corneal central o paracentral inferior masivo, opalescente, lechoso en \"vidrio esmerilado\", que impide visualizar detalles del iris y pupila;\n2) Bullas epiteliales con tinción de fluoresceína punteada o prueba de Seidel negativa (descarta perforación verdadera, aunque existe microfuga);\n3) Cámara anterior formada pero estrecha por el abombamiento posterior de la córnea engrosada;\n4) Hiperemia ciliar periquerática violácea intensa y epífora constante.",
    fundus: "Completamente bloqueado por la opacidad corneal; ecografía modo B indicada si se sospecha patología posterior.",
    specialSigns: "• Signo del Leucoma Aplanador: Meses después de resuelto el hidrops, la queratometría puede aplanarse más de 10 dioptrías debido a la contractura de miofibroblastos cicatrizales.\n• Rollos de Descemet en AS-OCT: Visualización patognomónica de los extremos enrollados de la membrana de Descemet flotando en cámara anterior."
  },
  diagnosticWorkup: [
    {
      test: "OCT de Segmento Anterior de Alta Resolución (AS-OCT)",
      findings: "Examen de referencia definitorio: Identifica el sitio exacto de la fractura de la membrana de Descemet, mide el tamaño de la brecha en milímetros, visualiza los extremos enrollados y localiza macroquistes estromales profundos."
    },
    {
      test: "Prueba de Seidel con Fluoresceína al 2%",
      findings: "Obligatoria de inmediato para descartar perforación corneal franca espontánea (Seidel positivo)."
    },
    {
      test: "Paquimetría Óptica / Ultrasonográfica de Emergencia",
      findings: "Demuestra incremento del espesor corneal central a valores típicamente superiores a 1000-1500 µm."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Queratitis Infecciosa Ulcerada con Hipopión",
      distinction: "En hidrops el epitelio está intacto o con bullas cerradas (sin infiltrado purulento de necrosis bacteriana/fúngica) y no hay hipopión verdadero; en queratitis infecciosa hay secreción purulenta y cultivo positivo."
    },
    {
      condition: "Queratopatía Bullosa Pseudofáquica Descompensada",
      distinction: "Ocurre en ojos operados de catarata ancianos sin ectasia previa, de instauración lenta y progresiva; el hidrops es hiperagudo en un paciente joven con queratocono conocido."
    },
    {
      condition: "Desprendimiento de Descemet Iatrogénico Postquirúrgico",
      distinction: "Ocurre tras inserción de instrumental quirúrgico en facoemulsificación en la incisión corneal, no por ectasia apical espontánea."
    }
  ],
  steppedManagement: {
    medical: "• Abordaje Médico Conservador (Fase Inicial / Coadyuvante):\n  - Cloruro de Sodio hipertónico al 5% (ungüento nocturno y colirio 4 a 6 veces al día): Favorece la deshidratación osmótica epitelial y alivia las bullas.\n  - Ciclopléjico potente (Ciclopentolato 1% o Atropina 1% c/8-12h): Alivia el dolor por espasmo ciliar reflejo.\n  - Antibiótico tópico profiláctico sin conservantes (Moxifloxacino o Tobramicina c/8h): Previene la sobreinfección bacteriana en caso de rotura de bullas epiteliales.\n  - Hipotensores tópicos no prostaglandínicos (Timolol 0.5% + Dorzolamida 2% c/12h): Reducir la PIO disminuye el gradiente hidrostático que empuja humor acuoso a través de la brecha de Descemet.\n  - ¡PRECAUCIÓN EXTREMA CON CORTICOIDES TÓPICOS!: En las primeras 2-3 semanas los corticoides deben EVITARSE o usarse a dosis mínimas, ya que inhiben la migración endotelial necesaria para sellar la fractura y aumentan el riesgo de perforación y necrosis estromal.",
    surgical: "• Tratamiento Quirúrgico Contemporáneo de Rescate Rápido:\n  1) Neumotaponamiento Intracameral con Gas Isoexpansivo (TÉCNICA DE ELECCIÓN):\n     - Fármacos gaseosos utilizados:\n       * Perfluoropropano (C3F8) al 14% (gas no expansivo de larga duración: permanece 3 a 4 semanas);\n       * Hexafluoruro de azufre (SF6) al 20% (permanece 1 a 2 semanas);\n       * Aire estéril puro (duración corta: 3 a 5 días; menor eficacia).\n     - Técnica: Paracentesis corneal bajo lámpara de hendidura o quirófano, descompresión de humor acuoso e inyección intracameral de 0.2 a 0.3 mL de gas al 14% de C3F8 llenando el 60-70% de la cámara anterior.\n     - Mecanismo: La tensión superficial de la burbuja de gas actúa como una férula mecánica neumática que sella la brecha y aplana los extremos enrollados contra el estroma, impidiendo la entrada de acuoso y acortando la resolución del edema de 3-4 meses a solo 2-3 semanas.\n     - Posicionamiento estricto: El paciente debe permanecer en decúbito supino (boca arriba) mirando al techo durante las primeras 48-72 horas.\n     - ¡PRECAUCIÓN CON EL BLOQUEO PUPILAR POR GAS!: Es mandatorio realizar una iridotomía periférica profiláctica previa o intraoperatoria para evitar glaucoma agudo por bloqueo pupilar por la burbuja de gas.\n  2) Suturas Corneales de Compresión / Coaptación (Combined Suturing and Gas):\n     - Si el AS-OCT demuestra macroquistes estromales gigantes o una brecha de Descemet $>2-3\text{ mm}$:\n     - Pasar 1 a 3 puntos de monofilamento de nylon 10-0 de grosor completo a través del estroma corneal para coaptar manualmente los bordes de la fractura combinados con la inyección de gas C3F8."
  },
  clinicalApplicationPractical: "1. ¡PROHIBICIÓN ESTRICTA DE FROTAMIENTO OCULAR!: El frotamiento ocular compulsivo (eye rubbing) es la causa directa del 90% de los hidrops. Prescriba antialérgicos tópicos (olopatadina), lágrimas artificiales frías y brinde educación estricta al paciente y a sus familiares para erradicar el hábito.\n2. Evite la Queratoplastia Penetrante Precoz: Nunca intente realizar un trasplante de córnea (PKP o DALK) en plena fase aguda edematosa de un hidrops. Los tejidos están inflamados, reblandecidos, las suturas se desgarran y el injerto fallará. Espere a que el edema resuelva completamente con neumotaponamiento con gas y cicatrice durante 3 a 6 meses antes de considerar queratoplastia óptica electiva.\n3. Riesgo de Rechazo Post-Hidrops: Los leucomas post-hidrops suelen vascularizarse profundamente desde el limbo; advierta al paciente que su ojo ha pasado de ser un trasplante de bajo riesgo inmunológico a uno de alto riesgo por la neovascularización corneal.",
  highYieldPearl: "Hidrops Corneal Board Pearl: Rotura aguda de la membrana de Descemet y endotelio en queratocono avanzado por frotamiento ocular compulsivo. El Neumotaponamiento Intracameral con gas C3F8 al 14% sella la brecha y reduce la resolución de meses a 2 semanas. ¡Iridotomía obligada para evitar bloqueo pupilar!",
  keyDrugs: [
    {
      name: "Perfluoropropano (C3F8) al 14%",
      dose: "0.2 a 0.3 mL inyección intracameral",
      warning: "Gas isoexpansivo; mantener decúbito supino; riesgo de bloqueo pupilar."
    },
    {
      name: "Cloruro de sodio 5% colirio / ungüento",
      dose: "1 gota 4-6 veces/día y ungüento noche",
      warning: "Deshidratación osmótica para control de microquistes epiteliales."
    },
    {
      name: "Moxifloxacino 0.5% colirio",
      dose: "1 gota cada 8 horas",
      warning: "Profilaxis contra sobreinfección en bullas abiertas."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Manejo Contemporáneo del Hidrops Corneal Agudo",
      category: "Pregunta Clásica",
      description: "El tratamiento de elección moderno del hidrops corneal agudo es el neumotaponamiento intracameral con gas isoexpansivo (C3F8 al 14% o SF6 al 20%), el cual reaplica los extremos enrollados de la Descemet guiado por AS-OCT y acelera la recuperación visual en semanas en lugar de meses.",
      trapToAvoid: "Indicar trasplante de córnea urgente (PKP) en la fase edematosa aguda del hidrops en lugar de manejo conservador o neumotaponamiento con gas."
    }
  ],
  landmarkTrials: [
    {
      name: "Basu et al. / Intracameral Gas Injection in Acute Corneal Hydrops",
      year: "2011 (Ophthalmology)",
      conclusion: "Demostró en un ensayo prospectivo aleatorizado que la inyección intracameral de gas C3F8 o SF6 redujo el tiempo medio de resolución del edema corneal de 65 días (manejo médico) a tan sólo 22 días (grupo de gas), con menor tasa de neovascularización y menor leucoma residual.",
      fellowshipRelevance: "El ensayo landmark que estableció el neumotaponamiento intracameral con gas como el nuevo estándar de oro quirúrgico en hidrops."
    }
  ],
  histopathologyAndGenetics: "En examen anatomopatológico de botón corneal post-hidrops: Rotura de espesor completo de la membrana de Descemet con los extremos enrollados en espiral (\"scrolls\") hacia la cámara anterior; marcada desorganización del colágeno estromal con lagunas interlamelares ópticamente vacías y fibrosis cicatrizal con queratocitos activados; atenuación o ausencia de la monocapa endotelial en el área de fractura.",
  surgicalPearls: [
    "Preparación de Gas C3F8 al 14% para Inyección: El perfluoropropano puro al 100% es un gas expansivo que triplica su volumen intraocular provocando glaucoma devastador. Debe diluirse exactamente a concentración isoexpansiva no expansiva del 14% (mezclando 0.7 mL de gas puro C3F8 con 4.3 mL de aire ambiente estéril en jeringa de 5 mL pasada a través de filtro de 0.22 µm).",
    "Iridotomía Periférica de Seguridad: Al realizar neumotaponamiento intracameral con gas, realice siempre una iridotomía periférica inferior (a las 6 horas) quirúrgica o con láser YAG previa; esto permite que el humor acuoso continúe fluyendo hacia la cámara anterior incluso si la burbuja de gas empuja la pupila hacia atrás, evitando el bloqueo pupilar hiperagudo."
  ],
  fellowOralBoardQuestions: [
    {
      question: "Un joven de 19 años con queratocono severo bilateral y atopia intensa acude a urgencias por dolor súbito, lagrimeo y caída brusca de visión en ojo izquierdo a cuenta dedos hace 12 horas tras frotarse los ojos violentamente. A la exploración presenta edema corneal lechoso masivo paracentral inferior con paquimetría de 1450 micras y cámara anterior estrecha pero formada. La prueba de Seidel es negativa. En el AS-OCT se observa una fractura de la membrana de Descemet de 1.8 mm de longitud con extremos enrollados hacia la cámara anterior. Su médico residente de guardia le propone esperar 4 meses con colirios salinos hipertónicos o programar una queratoplastia penetrante (PKP) la próxima semana. ¿Cuál es su conducta médica y quirúrgica inmediata paso a paso?",
      answer: "1) Crítica a la Propuesta del Residente: Esperar 4 meses condena al paciente a un edema prolongado con neovascularización estromal extensa y leucoma masivo. Operar una PKP de urgencia en tejido corneal hiperedematoso activo e inflamado es una mala praxis con alto riesgo de dehiscencia de suturas y fracaso del injerto.\n2) Conducta Inmediata de Elección: Neumotaponamiento Intracameral con Gas Isoexpansivo (C3F8 al 14%) en quirófano o bajo lámpara de hendidura.\n3) Procedimiento Quirúrgico Paso a Paso:\n   a) Paracentesis limbar temporal con bisturí de 15 grados y aspiración controlada de 0.2-0.3 mL de humor acuoso para descomprimir el globo.\n   b) Iridotomía periférica quirúrgica inferior con tijera o con aguja para prevenir bloqueo pupilar secundario a la burbuja de gas.\n   c) Inyección intracameral de 0.2 a 0.3 mL de mezcla de gas isoexpansivo Perfluoropropano (C3F8 al 14%), rellenando dos tercios de la cámara anterior.\n   d) Verificación tonométrica manual para asegurar que la PIO sea fisiológica (ojo normotenso).\n   e) Indicación estricta de reposo en posición decúbito supino (boca arriba) durante 48 a 72 horas para que la burbuja flote contra la cara posterior del cono y mantenga reaplicada la Descemet.\n   f) Cobertura tópica: colirio de moxifloxacino c/8h, ciclopentolato c/12h y colirio de timolol/dorzolamida c/12h.",
      trap: "Realizar una queratoplastia penetrante en fase aguda o inyectar gas al 100% sin diluir a concentración isoexpansiva (14%), lo que provocaría un glaucoma agudo fulminante."
    }
  ]
},

  {
  id: "deep-cornea-dalk-tecnica-anwar-complicaciones",
  title: "Queratoplastia Lamelar Anterior Profunda (DALK): Técnica de Gran Burbuja de Anwar, Capa de Dua y Conversión a PKP",
  subspecialtyId: "cornea",
  summary: "Monografía quirúrgica de máxima especialización sobre la Queratoplastia Lamelar Anterior Profunda (DALK, Deep Anterior Lamellar Keratoplasty): 1) Principio quirúrgico fundamental: reemplazo selectivo del 100% del estroma corneal patológico conservando intacta la membrana de Descemet y la monocapa endotelial nativa del receptor en pacientes con patología estromal sin compromiso endotelial (queratocono, distrofias estromales de TGFBI, leucomas superficiales/profundos postinfecciosos); 2) Eliminación absoluta del Rechazo Endotelial Inmunológico (la causa número uno de falla del injerto a largo plazo en PKP); 3) La Técnica de la Gran Burbuja de Anwar (Big-Bubble Technique): canulación estromal profunda paracentral con aguja 27G o 30G a menos de 100 micras de la Descemet e inyección de aire para crear una separación neumática lamelar limpia; 4) Los Dos Tipos de Gran Burbuja según la Capa de Dua (Harminder Dua): Burbuja Tipo 1 (entre el estroma posterior y la capa pre-Descemética de Dua: borde nítido circular blanco de hasta 8.5 mm, sumamente resistente a la rotura) frente a Burbuja Tipo 2 (entre la capa de Dua y la membrana de Descemet pura: borde delgado translúcido que inicia en periferia y es altamente frágil); 5) Manejo de complicaciones intraoperatorias: microperforación frente a macroperforación de la membrana de Descemet y los criterios estandarizados de conversión a Queratoplastia Penetrante (PKP); y 6) Ventajas biomecánicas: conservación del globo ocular a \"cielo cerrado\" durante la mayor parte de la cirugía, inmunidad al rechazo endotelial, menor tasa de glaucoma postoperatorio y sobrevida del injerto superior al 95% a 20 años.",
  definitionAndEpidemiology: "La Queratoplastia Lamelar Anterior Profunda (DALK) es el estándar de oro quirúrgico para todas las enfermedades corneales que afectan al epitelio, la membrana de Bowman y el estroma corneal pero respetan el endotelio corneal (conteo endotelial sano $>2000\text{ cél/mm}^2$). Aunque técnicamente más demandante que la Queratoplastia Penetrante (PKP), ofrece ventajas definitivas: elimina el riesgo de rechazo endotelial del injerto, permite suspender los corticoides tópicos tempranamente (reduciendo el glaucoma cortisónico y catarata) y preserva la integridad estructural tectónica del globo ocular con menor riesgo de hemorragia expulsiva supracoroidea intraoperatoria.",
  anatomyAndPathophysiology: "1. Anatomía Estromal Profunda y la Capa de Dua:\n   • Descrita por Harminder Dua en 2013: Capa acelular hiper-resistente de colágeno denso de 10 a 15 µm de espesor ubicada inmediatamente anterior a la membrana de Descemet.\n   • Biomecánica: Puede soportar presiones neumáticas de hasta 1.5 a 2 bar (más de 1000 mmHg) antes de romperse, proporcionando el soporte estructural que hace viable la DALK.\n2. Biofísica de la Separación Neumática (Big Bubble de Anwar):\n   • El estroma corneal anterior y medio tiene laminillas de colágeno entrelazadas fuertemente; el estroma posterior tiene laminillas paralelas débilmente unidas entre sí y a la capa de Dua.\n   • Al inyectar aire a alta presión en el estroma posterior profundo ($<100 mu\text{m}$ de Descemet), el aire viaja a lo largo de las líneas de menor resistencia y crea una burbuja de clivaje que despega el estroma en un plano anatómico perfecto de 360 grados.\n3. Burbuja Tipo 1 vs Burbuja Tipo 2:\n   • Burbuja Tipo 1 (Sub-estromal / Pre-Dua):\n     - Plano de clivaje: Entre el estroma corneal profundo y la capa de Dua.\n     - Apariencia clínica: Burbuja circular blanca bien delimitada de 7.5 a 8.5 mm que crece del centro a la periferia.\n     - Resistencia: EXTREMADAMENTE FUERTE Y RESISTENTE (la capa de Dua protege la Descemet subyacente).\n   • Burbuja Tipo 2 (Pre-Descemética pura):\n     - Plano de clivaje: Entre la capa de Dua y la membrana de Descemet.\n     - Apariencia clínica: Burbuja delgada y grande que suele iniciar en la periferia y extenderse al centro, de borde translúcido.\n     - Resistencia: MUY FRÁGIL; cualquier toque con instrumental rompe la Descemet desnuda.\n4. Biología a Largo Plazo: Ausencia de Pérdida Endotelial Acelerada:\n   • En PKP, el aloinjerto pierde células endoteliales de forma continua a una tasa del 4-7% anual (frente al 0.6% fisiológico), llevando al fallo tardío a los 10-15 años.\n   • En DALK, el endotelio es el PROPIO del paciente; la densidad celular endotelial permanece estable de por vida.",
  clinicalExamination: {
    biomicroscopy: "Injerto corneal lamelar transparente sin edema estromal, interfase receptora-donante óptica limpia sin fibrosis ni opacidades residuales; ausencia completa de edema endotelial o celularidad en cámara anterior.",
    fundus: "Visualización nítida del polo posterior tras el recambio estromal.",
    specialSigns: "• Ausencia de Línea de Khodadoust de Por Vida: El paciente con DALK puede desarrollar rechazo epitelial o subepitelial, pero NUNCA desarrollará un rechazo endotelial (la línea de Khodadoust es imposible en DALK porque el endotelio no es donante sino nativo)."
  },
  diagnosticWorkup: [
    {
      test: "Microscopía Especular Endotelial Preoperatoria",
      findings: "Obligatoria: Verificar densidad endotelial receptora sana ($>2000\text{ cél/mm}^2$) con pleomorfismo y polimegatismo fisiológicos (descarta endotelitis o distrofia de Fuchs coexistente)."
    },
    {
      test: "OCT de Segmento Anterior (AS-OCT)",
      findings: "Cuantifica la profundidad del leucoma o cicatriz estromal para planificar la profundidad de inserción de la aguja de Anwar."
    },
    {
      test: "Topografía / Tomografía Corneal Postoperatoria",
      findings: "Monitoreo del astigmatismo regular e irregular inducido por las suturas."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "DALK vs Queratoplastia Penetrante (PKP)",
      distinction: "En DALK el endotelio y cámara anterior nunca se tocan (a cielo cerrado); en PKP se extrae todo el espesor corneal con apertura completa de la cámara anterior y riesgo de hemorragia expulsiva y rechazo endotelial."
    },
    {
      condition: "DALK de Anwar vs Desbridamiento Manual Melles",
      distinction: "La técnica de Anwar usa aire para separar la Descemet sin tocarla (interfase óptica lisa y AV 20/20); el desbridamiento manual con espátulas deja estroma residual que induce astigmatismo irregular e interfase opaca."
    }
  ],
  steppedManagement: {
    medical: "• Manejo Médico Postoperatorio:\n  - Corticoterapia Tópica Abreviada: Como no existe riesgo de rechazo endotelial, los corticoides tópicos (Prednisolona 1% o Fluorometolona) pueden retirarse gradualmente a los 3 a 6 meses de la intervención (en PKP se mantienen a menudo por años o de por vida).\n  - Esto reduce drásticamente las complicaciones por corticoterapia: hipertensión ocular/glaucoma secundario y catarata inducida por esteroides.\n  - Retiro selectivo de suturas guiado por topografía corneal a partir de los 6 a 12 meses para reducir el astigmatismo astigmático regular.",
    surgical: "• Técnica Quirúrgica de la Gran Burbuja de Anwar (Big-Bubble Step-by-Step):\n  1) Trepanación Parcial Receptora: Con trépano corneal de succión (Hessburg-Barron o Hanna) al 60-80% del grosor corneal central (habitualmente 300-400 µm de profundidad).\n  2) Paracentesis limbar descompresiva: Aspirar 0.1 mL de humor acuoso para ablandar el globo ocular.\n  3) Canulación Estromal Profunda: Aguja 27G o 30G montada en jeringa de 5 mL con aire, doblada a 60 grados con el bisel hacia abajo; avanzar la punta en el estroma posterior paracentral hasta situarse a $<90 mu\text{m}$ de la membrana de Descemet.\n  4) Inyección Neumática Rápida: Inyectar 2 a 3 mL de aire con presión firme continua; la aparición súbita de un anillo blanco opaco brillante confirma la Gran Burbuja Tipo 1.\n  5) Queratectomía Estromal Anterior: Extirpar el estroma superficial con tijeras de corneal o cuchillete.\n  6) Apertura de la Burbuja y Resección del Estroma Profundo: Realizar una microapertura en la cúpula de la burbuja, introducir una espátula de iris para proteger la Descemet y resecar los cuatro cuadrantes estromales profundos con tijeras de Vannas.\n  7) Preparación del Botón Donante y Sutura: En el botón corneal donante, PELAR Y DESECHAR TOTALMENTE LA MEMBRANA DE DESCEMET Y EL ENDOTELIO DONANTE con una esponja seca; colocar el estroma donante sobre la Descemet receptora desnuda y suturar con 16 puntos sueltos o sutura continua de nylon 10-0.\n• Algoritmo de Manejo ante Perforación Intraoperatoria de Descemet:\n  - MICROPERFORACIÓN FOCAL PERIFÉRICA ($<1\text{ mm}$):\n    * Si la cámara se mantiene formada y no hay pérdida de aire: CONTINUAR LA DALK; inyectar una burbuja de aire en cámara anterior al final para reaplicar la microperforación.\n  - MACROPERFORACIÓN CENTRAL O DESGARRO EXTENSO ($>2\text{ mm}$):\n    * Si la cámara anterior colapsa y el estroma no puede disecarse con seguridad:\n    * ¡CONVERSIÓN INMEDIATA A QUERATOPLASTIA PENETRANTE (PKP)! Comprobar la perforación, completar la trepanación de espesor total y suturar un botón donante penetrante completo (con su propio endotelio)."
  },
  clinicalApplicationPractical: "1. Selección de Pacientes: DALK es la cirugía de elección en Queratocono avanzado, Distrofia Granular/Lattice de Groenouw y cicatrices post-queratitis que respeten el endotelio. Nunca realice DALK si el paciente tiene una distrofia endotelial de Fuchs o un conteo endotelial preoperatorio $<1500\text{ cél/mm}^2$.\n2. ¿Cómo saber si la Gran Burbuja fue exitosa?: Al inyectar aire, si la córnea se vuelve blanca lechosa difusa sin un anillo nítido, el aire entró al estroma superficial (enfisema estromal falso); retire la aguja y reintente en otro cuadrante o proceda a disección manual lamelar.\n3. Pelar el Endotelio Donante: Nunca olvide pelar la membrana de Descemet y el endotelio del botón donante antes de suturarlo; dejar dos membranas de Descemet en contacto induce una doble interfase con opacidad óptica severa.",
  highYieldPearl: "DALK Board Pearl: Reemplazo estromal total conservando la Descemet y endotelio receptor sano. Elimina al 100% el rechazo endotelial del injerto. Técnica de Anwar Big-Bubble: Tipo 1 (Pre-Dua, muy resistente) vs Tipo 2 (Pre-Descemet, frágil). Si hay macroperforación $>2\text{ mm}$, convertir a PKP.",
  keyDrugs: [
    {
      name: "Prednisolona 1% colirio",
      dose: "1 gota cada 6 horas por 3-6 meses",
      warning: "Permite un retiro mucho más rápido que en PKP al no haber riesgo de rechazo endotelial."
    },
    {
      name: "Moxifloxacino 0.5% colirio",
      dose: "1 gota cada 8 horas hasta retiro de epitelio",
      warning: "Profilaxis antibiótica estándar de interfase."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Criterio de Conversión de DALK a PKP",
      category: "Trampa de Tribunal",
      description: "Una microperforación periférica pequeña permite continuar la DALK colocando una burbuja de aire en cámara anterior al terminar. Una macroperforación grande central con desgarro amplio de la Descemet colapsa la cámara y obliga a convertir a Queratoplastia Penetrante (PKP) utilizando un botón donante completo con endotelio.",
      trapToAvoid: "Intentar forzar una DALK sobre una Descemet con desgarro central de 4 mm, lo que resultará en un desprendimiento endotelial masivo e hidrops postoperatorio."
    }
  ],
  landmarkTrials: [
    {
      name: "Borderie et al. / DALK vs Penetrating Keratoplasty for Keratoconus",
      year: "2012 (Ophthalmology)",
      conclusion: "Ensayo prospectivo a 5 años que demostró que DALK ofrece una agudeza visual final comparable a PKP (20/25) pero con una sobrevida del injerto significativamente superior a largo plazo debido a la ausencia absoluta de episodios de rechazo endotelial inmunológico.",
      fellowshipRelevance: "El ensayo de referencia que consolidó a DALK como el nuevo estándar de oro en cirugía de queratocono."
    }
  ],
  histopathologyAndGenetics: "En examen histopatológico de córnea resecada en DALK: Muestra de estroma anterior y medio resecado teñido con hematoxilina-eosina que evidencia fragmentación focal de la membrana de Bowman y desorganización de laminillas estromales en queratocono; la superficie posterior del espécimen es perfectamente lisa correspondiente al plano de clivaje acelular pre-Dua.",
  surgicalPearls: [
    "Ángulo y Bisel de la Aguja de Anwar: Doblar la aguja 27G a 60 grados a unos 4 mm de la punta; introducir la aguja a través del fondo de la trepanación en el estroma paracentral con el bisel apuntando HACIA ABAJO; avanzar hasta que la punta quede inmediatamente por encima del reflejo endotelial antes de inyectar.",
    "Doble Burbuja de Seguridad: Antes de inyectar aire en el estroma, inyectar una pequeña burbuja de aire en la cámara anterior a través de la paracentesis; cuando la aguja avanza en el estroma, la burbuja intracameral se desplaza a la periferia; al inyectar aire con éxito en el estroma, la gran burbuja comprime y aplana la pequeña burbuja intracameral, confirmando la separación neumática perfecta."
  ],
  fellowOralBoardQuestions: [
    {
      question: "Se encuentra realizando una Queratoplastia Lamelar Anterior Profunda (DALK) con técnica de Gran Burbuja de Anwar en un paciente de 26 años con queratocono avanzado y conteo endotelial de 2600 cél/mm2. Tras trepanar al 75% e inyectar aire, obtiene una Gran Burbuja Tipo 1 circular nítida de 8 mm. Sin embargo, al realizar la apertura de la cúpula estromal con bisturí de 15 grados, la punta del bisturí profundiza inadvertidamente y produce un desgarro central lineal de 3.5 mm en la membrana de Descemet, produciéndose la salida inmediata de humor acuoso y el colapso total de la cámara anterior. ¿Cuál es su conducta quirúrgica inmediata en este preciso momento de la intervención y qué cambios en la preparación del botón donante debe realizar?",
      answer: "1) Conducta Inmediata: Reconocer la macroperforación central de la membrana de Descemet y CONVERTIR INMEDIATAMENTE A QUERATOPLASTIA PENETRANTE (PKP).\n2) Justificación: Un desgarro central de 3.5 mm en la membrana de Descemet y capa de Dua es irreparable; si se coloca el estroma donante de DALK, el humor acuoso penetrará masivamente provocando un edema permanente de la interfase, desprendimiento endotelial irreversible y fracaso inmediato del injerto.\n3) Pasos Quirúrgicos de la Conversión:\n   a) Colocar viscoelástico cohesivo en cámara anterior para profundizar la cámara y proteger el cristalino.\n   b) Introducir tijeras corneales curvas (de Katzin o Castroviejo) a través del corte trepanado previo y resecar los 360 grados del complejo estroma-Descemet-endotelio receptor residual, completando una queratectomía penetrante de espesor total.\n   c) PREPARACIÓN DEL BOTÓN DONANTE: ¡NO PELAR LA MEMBRANA DE DESCEMET NI EL ENDOTELIO DEL TEJIDO DONANTE! Para una PKP se requiere un botón corneal de espesor completo con endotelio viable donante.\n   d) Si el botón donante ya había sido pelado para la DALK planeada: Solicitar de inmediato a banco de ojos una segunda córnea donante con endotelio viable para trasplante penetrante.\n   e) Suturar el botón penetrante completo al lecho receptor con 16 puntos de nylon 10-0 con control de astigmatismo mediante queratoscopio de Maloney.",
      trap: "Intentar continuar la DALK suturando la Descemet rota con puntos finos, lo que conduce invariablemente a hidrops postoperatorio y descompensación corneal irreversible."
    }
  ]
},

  {
  id: "deep-cornea-queratopatia-neurotrofica-cenegermina",
  title: "Queratopatía Neurotrófica (NK): Clasificación de Mackie, Neurobiología Trigeminal y Terapia con Cenegermina (rhNGF)",
  subspecialtyId: "cornea",
  summary: "Monografía exhaustiva sobre la Queratopatía Neurotrófica (NK, Neurotrophic Keratopathy): 1) Fisiopatología de la denervación sensitiva corneal mediada por la rama oftálmica del nervio trigémino (V1); 2) Pérdida del soporte trófico de neuropéptidos sensoriales esenciales (Sustancia P, Péptido Relacionado con el Gen de la Calcitonina [CGRP], Factor de Crecimiento Nervioso [NGF]) que conduce al colapso de la mitosis epitelial, pérdida de microvellosidades, retraso en la cicatrización y desepitelización indolora progresiva; 3) Etiologías clásicas: infección herpética previa (Herpes Zóster Oftálmico y Herpes Simplex), cirugías neuroquirúrgicas de la fosa posterior (resección de neurinoma del acústico / schwannoma vestibular, descompresión microvascular del trigémino), diabetes mellitus de larga evolución con neuropatía autonómica, toxicidad crónica por anestésicos tópicos o colirios conservados con cloruro de benzalconio (BAK) y uso prolongado de lentes de contacto; 4) Clasificación Clínica de Mackie (Estadio 1: queratopatía punteada superficial difusa e hiperplasia epitelial turbia con defecto de la película lagrimal; Estadio 2: Defecto Epitelial Persistente [PED] ovalado indoloro con bordes enrollados y engrosados; Estadio 3: Úlcera estromal indolente, lisis estromal [melting] y perforación corneal franca sin respuesta inflamatoria ni dolor); y 5) Algoritmo terapéutico moderno: lágrimas sin conservantes, suero autólogo, lentes esclerales, tarsorrafia temporal frente a la revolución biológica con Cenegermina (rhNGF: factor de crecimiento nervioso humano recombinante al 0.002% - Oxervate) que induce curación epitelial completa y regeneración de nervios corneales subbasales, y neurotización corneal quirúrgica (transferencia del nervio supraorbitario o supratroclear).",
  definitionAndEpidemiology: "La Queratopatía Neurotrófica (NK) es una enfermedad degenerativa corneal poco frecuente y potencialmente cegadora caracterizada por la reducción o abolición completa de la sensibilidad corneal (anestesia/hipoestesia corneal). La córnea es uno de los tejidos con mayor densidad de inervación del cuerpo humano (aproximadamente 7000 nociceptores por mm²); la pérdida de esta inervación sensorial trigeminal interrumpe el arco reflejo lagrimal y priva al epitelio de neuromediadores tróficos, produciendo defectos epiteliales espontáneos que no cicatrizan y progresan a la perforación ocular en ausencia de dolor.",
  anatomyAndPathophysiology: "1. Neuroanatomía y Red Nerviosa Corneal:\n   • Los nervios ciliares largos (ramas de la división oftálmica V1 del nervio trigémino) penetran en el estroma corneal medio-periférico.\n   • Forman el plexo estromal y ascienden perforando la membrana de Bowman para constituir el Plexo Nervioso Subbasal (SNP), ubicado entre la capa de células basales y la Bowman.\n   • Los axones sensoriales liberan continuamente neuropéptidos tróficos: Sustancia P, CGRP, NGF y neurotrofina-3, que estimulan la proliferación, adhesión desmosómica y migración de los queratocitos y células epiteliales.\n2. Consecuencias de la Denervación Trigeminal:\n   • Falla Epitelial Metabólica: Se detiene la mitosis de las células basales; las células epiteliales superficiales pierden sus microvellosidades y desmosomas, desprendiéndose espontáneamente.\n   • Pérdida del Reflejo del Parpadeo y Secreción Lagrimal: El paciente no parpadea ante estímulos mecánicos ni sequedad, exacerbando la deshidratación y microtraumatismo de la superficie.\n   • El Fenómeno Indoloro: El paciente no experimenta dolor, fotofobia ni sensación de cuerpo extraño a pesar de tener un defecto epitelial de espesor total o una perforación inminente (lo que retrasa la consulta médica).\n3. Mecanismo de Acción de la Cenegermina (rhNGF):\n   • Es el factor de crecimiento nervioso humano recombinante producido en Escherichia coli.\n   • Se une con alta afinidad al receptor de tirosina quinasa A (TrkA) y al receptor de neurotrofina p75NTR en el epitelio corneal y en las terminaciones nerviosas sensoriales remanentes.\n   • Estimula directamente la supervivencia, proliferación y diferenciación epitelial, promueve la síntesis de colágeno y activa la regeneración axonal de las fibras del plexo subbasal.",
  clinicalExamination: {
    biomicroscopy: "• Estadio 1 (Mackie): Queratitis punteada superficial grosera (SPK), hiperplasia epitelial opalescente, disminución del menisco lagrimal, epitelio deslustrado.\n• Estadio 2 (Mackie): Defecto Epitelial Persistente (PED) típicamente circular u ovalado en el tercio inferior o central, con bordes del epitelio enrollados, sobreelevados y engrosados que no muestran avance centrípeto; edema estromal subyacente con pliegues en Descemet; ausencia de dolor.\n• Estadio 3 (Mackie): Úlcera estromal con adelgazamiento progresivo (corneal melt), descemetocele transparente en el fondo de la úlcera o perforación franca; llamativa ausencia de inyección ciliar pronunciada y ausencia de dolor.",
    fundus: "Normal si los medios lo permiten.",
    specialSigns: "• Test de Estesiometría de Cochet-Bonnet: Medición cuantitativa de la sensibilidad corneal con filamento de nylon de longitud variable (0 a 6 cm); longitud $<4\text{ cm}$ indica hipoestesia patológica; $0\text{ cm}$ indica anestesia neurotrófica total.\n• Discordancia Síntoma-Signo Extrema: Paciente con un defecto corneal del 80% del estroma que acude caminando tranquilo diciendo que \"sólo nota la visión un poco nublada\"."
  },
  diagnosticWorkup: [
    {
      test: "Estesiometría Corneal (Cochet-Bonnet o Filamento de Algodón)",
      findings: "Examen de cabecera obligado: Hipoestesia o anestesia corneal bilateral o unilateral en los cuatro cuadrantes y centro corneal."
    },
    {
      test: "Microscopía Confocal In Vivo (IVCM)",
      findings: "Demuestra pérdida completa, fragmentación o atrofia severa de las fibras nerviosas del plexo nervioso subbasal (longitud y densidad nerviosa $<5\text{ mm/mm}^2$; normal $>20\text{ mm/mm}^2$)."
    },
    {
      test: "Resonancia Magnética Cerebral con Cortes Finos en Ángulo Pontocerebeloso",
      findings: "Descarte de lesiones compresivas del V par craneal (neurinoma del acústico, meningioma petroclival) si no hay antecedente herpético conocido."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Queratitis por Exposición (Lagoftalmos)",
      distinction: "Se asocia a cierre palpebral incompleto (parálisis facial VII par o ectropión); la sensibilidad corneal inicial está conservada y el defecto se localiza en el tercio inferior expuesto."
    },
    {
      condition: "Defecto Epitelial Persistente por Toxicidad Farmacológica",
      distinction: "Antecedente de uso de 4 o más colirios conservados con BAK o abuso de anestésicos tópicos; mejora rápidamente al retirar los tóxicos y la sensibilidad suele estar conservada."
    },
    {
      condition: "Queratitis Infecciosa Herpética Activa",
      distinction: "La queratitis epitelial activa por VHS presenta dendritas con bulbos terminales activos que captan rosa de bengala y se replican activamente; la úlcera neurotrófica es una secuela trófica postinfecciosa con bordes redondeados enrollados lisos sin replicación viral."
    }
  ],
  steppedManagement: {
    medical: "• Algoritmo Terapéutico Escalonado por Estadios de Mackie:\n  - Estadio 1 de Mackie:\n    * Eliminación total de conservantes (usar colirios unidosis libres de BAK).\n    * Lubricación intensiva con lágrimas artificiales de alta viscosidad (Hialuronato de sodio 0.4% o carboximetilcelulosa).\n    * Oclusión puntual lagrimal (plugs de silicona en puntos inferiores y superiores).\n  - Estadio 2 de Mackie (Defecto Epitelial Persistente - PED):\n    * CENEGERMINA al 0.002% (20 µg/mL colirio - Oxervate):\n      • Terapia biológica de primera línea revolucionaria: Instilar 1 gota 6 veces al día (cada 2 horas) durante 8 semanas continuas.\n      • Ensayos REPARO y DEFENDO: Logró la cicatrización epitelial completa en más del 72-80% de los pacientes refractarios a otros tratamientos, con regeneración comprobada de fibras nerviosas subbasales en IVCM.\n    * Suero Autólogo al 20% o 50% (6 veces al día) o Plasma Rico en Factores de Crecimiento (PRGF).\n    * Lente de Contacto Terapéutica de Gran Diámetro o Lente Escleral Permeable al Gas (PROSE).\n    * Pomada oftálmica antibiótica sin conservantes profiláctica nocturna (eritromicina).\n  - Estadio 3 de Mackie (Adelgazamiento / Perforación Inminente):\n    * Cianoacrilato con parche de lente de contacto si perforación $<1\text{ mm}$.\n    * Injerto de Membrana Amniótica multicapa (ProKera o en quirófano suturada).",
    surgical: "• Intervenciones Quirúrgicas en Casos Refractarios:\n  - Tarsorrafia Temporal (Quirúrgica o con Inyección de Toxina Botulínica en el Elevador del Párpado):\n    * Procedimiento clásico altamente efectivo: Cierra mecánicamente la hendidura palpebral reduciendo la evaporación y el roce durante el parpadeo hasta lograr la curación epitelial.\n  - Neurotización Corneal Quirúrgica (Técnica Innovadora Definitiva):\n    * Transferencia nerviosa microquirúrgica utilizando el nervio supraorbitario o supratroclear ipsilateral (o nervio sural interpuesto desde el lado contralateral) transpolado hacia el limbo esclerocorneal subconjuntival.\n    * Restaura la inervación sensitiva corneal real y la producción de neuropéptidos en 6 a 12 meses, curando definitivamente la enfermedad de base."
  },
  clinicalApplicationPractical: "1. Medición de Sensibilidad Corneal en Ojo Rojo Indoloro: Si evalúa a un paciente con un defecto epitelial corneal grande que asegura no tener dolor y no le molesta la luz, compruebe de inmediato la sensibilidad corneal con un filamento de algodón o Cochet-Bonnet. Está ante una Queratopatía Neurotrófica y los colirios comunes no la curarán.\n2. Cuidado con los Colirios Conservados: El uso crónico de gotas con conservantes (BAK) en un ojo neurotrófico es veneno celular; destruye las microvellosidades residuales y acelera la necrosis estromal. Todo tratamiento debe ser estrictamente sin conservantes (PF).\n3. Tarsorrafia con Toxina Botulínica: Si el paciente rechaza una tarsorrafia quirúrgica con suturas por razones estéticas, inyecte 10-15 unidades de toxina botulínica tipo A en el músculo elevador del párpado superior transcutáneo; inducirá una ptosis protectora completa reversible que dura 6 a 8 semanas, tiempo suficiente para que el defecto epitelial cicatrice bajo suero autólogo o cenegermina.",
  highYieldPearl: "Queratopatía Neurotrófica Board Pearl: Denervación de V1 trigeminal (post-herpes, neurinoma del acústico o diabetes). Ausencia patognomónica de dolor con defecto epitelial persistente ovalado de bordes enrollados (Mackie 2). Tratamiento de vanguardia: Cenegermina (rhNGF tópica 6 veces/día por 8 semanas) o neurotización corneal.",
  keyDrugs: [
    {
      name: "Cenegermina 0.002% (rhNGF - Oxervate)",
      dose: "1 gota 6 veces al día durante 8 semanas",
      warning: "Factor de crecimiento nervioso recombinante; fármaco biológico curativo."
    },
    {
      name: "Suero autólogo 20-50% colirio",
      dose: "1 gota cada 2 a 4 horas",
      warning: "Aporta sustancia P, NGF y fibronectina biológica autóloga."
    },
    {
      name: "Hialuronato de sodio 0.4% sin conservantes",
      dose: "1 gota cada 2 horas",
      warning: "Lubricación hipotónica intensiva libre de toxicidad."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Clasificación de Mackie y Cenegermina",
      category: "Cifra Clave de Corte",
      description: "Mackie 1 (queratopatía punteada e hiperplasia), Mackie 2 (PED ovalado de bordes enrollados sin dolor), Mackie 3 (úlcera estromal y perforación). La Cenegermina (rhNGF) se administra durante 8 semanas continuas (6 gotas al día) y es la única terapia que induce regeneración axonal comprobada en IVCM.",
      trapToAvoid: "Prescribir antibióticos aminoglucósidos o AINEs a un defecto epitelial neurotrófico creyendo que es una úlcera infecciosa, lo que perfora la córnea en días."
    }
  ],
  landmarkTrials: [
    {
      name: "Bonini et al. / REPARO Phase II Trial on Cenegermina in Neurotrophic Keratitis",
      year: "2018 (Ophthalmology)",
      conclusion: "Ensayo clínico fase II controlado aleatorizado multicéntrico en 156 pacientes con queratopatía neurotrófica estadio 2 y 3 de Mackie: Demostró que Cenegermina tópica al 0.002% logró la curación epitelial completa en el 72% de los pacientes a las 8 semanas frente al 33% en el grupo placebo, con una tasa de recurrencia mínima al año.",
      fellowshipRelevance: "El ensayo landmark que permitió la aprobación por la FDA y la EMA del primer colirio biológico de factor de crecimiento nervioso en la historia de la oftalmología."
    }
  ],
  histopathologyAndGenetics: "En microscopía confocal in vivo (IVCM) y biopsia corneal en NK: Pérdida dramática o ausencia total de las fibras del plexo nervioso subbasal con valores de longitud nerviosa total $<2\text{ mm/mm}^2$; células basales hiperreflectivas desorganizadas con pérdida de la arquitectura en panal de abeja y bordes epiteliales enrollados hipo-reflectivos sin queratocitos en migración activa.",
  surgicalPearls: [
    "Técnica de Tarsorrafia Temporal Lateral: Realizar una incisión intermarginal de 4 a 6 mm en el borde libre del párpado superior e inferior temporal respetando la línea de pestañas; desepitelizar la tira de la unión mucocutánea y suturar ambos párpados con un punto en U de colchonero con Prolene 5-0 anclado sobre tubos de silicona (bolsters) para evitar necrosis por presión.",
    "Neurotización Corneal con Nervio Supraorbitario: Disección endoscópica coronal o a través de incisión en ceja del nervio supraorbitario ipsilateral; movilizar las ramas sensoriales hacia el fórnix superior y tunelizarlas hacia el limbo superior e inferior, anclando 4 a 6 fascículos nerviosos al estroma límbico con suturas de nylon 10-0 y cola de fibrina."
  ],
  fellowOralBoardQuestions: [
    {
      question: "Un paciente de 62 años intervenido hace 6 meses de un schwannoma vestibular (neurinoma del acústico) por vía retrosigmoidea acude a consulta derivado por \"ojo rojo crónico resistente a colirios\" en ojo derecho. A la exploración presenta agudeza visual de 20/100, un defecto epitelial corneal central ovalado de 4x3 mm con bordes sobreelevados y engrosados que tiñe intensamente con fluoresceína y adelgazamiento estromal del 30% en su base. El paciente no refiere dolor alguno ni fotofobia. El test de Cochet-Bonnet con filamento al máximo de 6 cm es completamente negativo (cero sensibilidad corneal). Su médico residente sugiere pautar colirio de tobramicina-dexametasona y realizar raspado corneal para cultivo bacteriano. ¿Cuál es el diagnóstico sindrómico exacto según la clasificación de Mackie, cuál es la crítica a la propuesta del residente y cuál es el abordaje terapéutico escalonado contemporáneo que incluye el fármaco biológico de elección?",
      answer: "1) Diagnóstico Exacto: Queratopatía Neurotrófica (NK) Estadio 2 de Mackie (Defecto Epitelial Persistente - PED con bordes enrollados y adelgazamiento estromal temprano) secundaria a lesión iatrogénica del nervio trigémino (V par) durante la resección neuroquirúrgica del neurinoma del acústico.\n2) Crítica a la Propuesta del Residente: La propuesta es contraproducente y peligrosa. La queratopatía neurotrófica es una enfermedad degenerativa por denervación, no una infección bacteriana primaria; el raspado corneal traumatizará aún más un epitelio incapaz de regenerarse, y la dexametasona con tobramicina inhibirá la migración epitelial, favoreciendo la lisis estromal y la perforación corneal.\n3) Abordaje Terapéutico Contemporáneo:\n   a) Terapia Biológica de Elección: Cenegermina al 0.002% (rhNGF - Oxervate), 1 gota cada 2 horas (6 veces al día) durante 8 semanas continuas para estimular la cicatrización epitelial y la regeneración de los axones del plexo subbasal.\n   b) Medidas Coadyuvantes Inmediatas: Lágrimas artificiales de hialuronato de sodio sin conservantes horarias, suspensión de cualquier colirio con BAK y colocación de una Lente de Contacto Terapéutica de Gran Diámetro o membrana amniótica criopreservada (ProKera).\n   c) Si no hay acceso a Cenegermina: Suero autólogo al 20-50% cada 2 horas + Tarsorrafia temporal lateral quirúrgica con sutura no absorbible sobre bolsters.\n   d) Tratamiento Quirúrgico Definitivo si es refractario: Neurotización corneal directa transferiendo ramas del nervio supraorbitario ipsilateral al limbo esclerocorneal.",
      trap: "Confundir una úlcera neurotrófica indolora con una queratitis bacteriana y realizar raspados traumáticos con colirios tóxicos."
    }
  ]
},

  // =========================================================================
  // 11. QUERATITIS ULCERATIVA PERIFÉRICA (PUK) Y ÚLCERA DE MOOREN
  // =========================================================================
  {
    id: 'deep-cornea-queratitis-ulcerativa-periferica-puk',
    title: 'Queratitis Ulcerativa Periférica (PUK) y Úlcera de Mooren: Fisiopatología Inmune, Escleritis Asociada y Terapia Biológica',
    subspecialtyId: 'cornea',
    summary: 'Monografía exhaustiva sobre adelgazamiento y necrosis estromal periférica: diferenciación diagnóstica entre Queratitis Ulcerativa Periférica (PUK) asociada a vasculitis sistémica autoinmune (Artritis Reumatoide, Granulomatosis con Poliangeítis / GPA c-ANCA, Poliarteritis Nodosa / PAN) y Úlcera de Mooren idiopática (autoinmunidad localizada antígeno corneal soluble sin compromiso sistémico); cascada de degradación por metaloproteinasas MMP-1, MMP-8 y MMP-9 producidas por neutrófilos reclutados por el plexo capilar epiescleral límbico; contraindicación categórica de AINEs tópicos (inductores de melting corneal fulminante); protocolo de inmunosupresión sistémica de rescate (pulsos de metilprednisolona, ciclofosfamida y agentes biológicos anti-CD20 Rituximab / anti-TNF Adalimumab e Infliximab); técnicas quirúrgicas tectónicas (recesión conjuntival adyacente, queratectomía en cuña lamelar perimétrica, cianoacrilato y parches de pericardio/córnea donante).',
    definitionAndEpidemiology: 'La Queratitis Ulcerativa Periférica (PUK) es una necrosis estromal ulcerada en semiluna que afecta la periferia corneal límbica (a menos de 2 mm del limbo), típicamente asociada a un defecto epitelial y adelgazamiento estromal progresivo. En más del 50% de los casos coexiste con escleritis necrosante y traduce una vasculitis sistémica oculta o descompensada con mortalidad cardiovascular y renal acumulada del 30-40% a 5 años si no se instaura inmunosupresión sistémica agresiva. La causa sistémica más frecuente es la Artritis Reumatoide (34-50%), seguida de GPA (Wegener) y PAN. La Úlcera de Mooren es una forma primaria idiopática autoinmune confinada al ojo sin afectación sistémica ni escleritis asociada.',
    anatomyAndPathophysiology: '1. Arquitectura Límbica y Predisposición Anatómica:\n   • La córnea periférica recibe nutrición del plexo capilar epiescleral y conjuntival límbico, albergando una concentración elevada de inmunoglobulinas (IgM e IgG), células dendríticas presentadoras de antígeno y componentes del complemento (C1q) que no existen en el estroma central avascular.\n2. Inmunopatogenia de la PUK:\n   • Depósito de inmunocomplejos circulantes (Hipersensibilidad Tipo III) en las vénulas poscapilares del plexo límbico -> activación del complemento (C3a, C5a) y vasculitis oclusiva isquémica local.\n   • Reclutamiento y diapédesis masiva de neutrófilos polimorfonucleares y macrófilos activados al estroma periférico.\n   • Degranulación y liberación de proteasas líticas: Elastasa neutrofílica y Metaloproteinasas de Matriz (MMP-1 colagenasa intersticial, MMP-8 y MMP-9 gelatinasa B).\n   • Digestión acelerada del colágeno estromal tipo I y proteoglicanos con melting en semiluna que avanza concéntricamente y hacia el centro corneal.\n3. Inmunopatogenia de la Úlcera de Mooren:\n   • Reacción de autoinmunidad celular y humoral dirigida contra un antígeno corneal diana específico (Calgranulina C y antígeno corneal específico soluble CO-Ag) con infiltración linfocitaria T helper Th1/Th17 en el estroma marginal y bordes en socavón (undermining edge) característicos, SIN escleritis adyacente.',
    clinicalExamination: {
      biomicroscopy: '• En PUK: Adelgazamiento estromal arqueado en semiluna que comienza típicamente en el limbo inferior o interpalpebral, con defecto epitelial suprayacente teñido con fluoresceína, bordes abruptos y escleritis necrosante o inflamación epiescleral profunda violácea adyacente fija a la maniobra con fenilefrina al 10%.\n• En Úlcera de Mooren: Infiltrado estromal periférico que progresa hacia el centro con un característico borde anterior excavado o socavado ("undermining overhang border") que avanza circunferencialmente dejando un estroma posterior adelgazado y vascularizado sin intervalo claro entre el limbo y la úlcera, con ausencia total de escleritis asociada.\n• Casos avanzados: Descemetocele translúcido pulsátil en foso periférico o perforación ocular con prolapso iridiano secundario.',
      fundus: 'Evaluar descartando vasculitis retiniana oclusiva, coroiditis asociada o edema de papila en el contexto de vasculitis sistémicas sistémicas (GPA, PAN o lupus eritematoso sistémico).',
      specialSigns: '• Signo del Borde Socavado (Undermining Edge): En la lámpara de hendidura, la superficie anterior del estroma sano sobresale en voladizo sobre la base adelgazada de la úlcera (patognomónico de Úlcera de Mooren).\n• Test de Blanqueamiento con Fenilefrina 10%: En PUK asociada a escleritis necrosante, la red vascular escleral profunda NO blanquea con fenilefrina al 10% (a diferencia de la epiescleritis pura que blanquea completamente).'
    },
    diagnosticWorkup: [
      {
        test: 'Panel Reumatológico y Vasculítico Sistémico de Urgencia',
        findings: 'Examen de laboratorio obligatorio de inmediato: Factor Reumatoide (FR) y anticuerpos anti-péptidos citrulinados cíclicos (Anti-CCP); anticuerpos anticitoplasma de neutrófilos (c-ANCA / anti-PR3 para Wegener, p-ANCA / anti-MPO para PAN / PAM); ANA y anti-ADNdc; velocidad de sedimentación globular (VSG) y proteína C reactiva (PCR); función renal con sedimento urinario (microhematuria / proteinuria que alerta de glomerulonefritis necrotizante por GPA).'
      },
      {
        test: 'Cultivo Microbiológico Corneal y Raspado de Bordes',
        findings: 'Raspado bacteriano y fúngico obligatorio para descartar sobreinfección microbiana oportunista antes de iniciar inmunosupresión sistémica.'
      },
      {
        test: 'OCT de Segmento Anterior (AS-OCT)',
        findings: 'Permite cuantificar con precisión micrométrica el porcentaje de estroma residual, la presencia de descemetocele y monitorear la respuesta objetiva a la terapia médica sin tocar el ojo con anestésicos.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Degeneración Marginal de Terrien',
        distinction: 'Degeneración no inflamatoria, típicamente bilateral, que inicia en limbo superior con ectasia estromal periférica indolora cubierta por epitelio completamente intacto, pannus superficial y depósito lipídico en banda en su margen de avance, sin dolor ni hiperemia escleral activa.'
      },
      {
        condition: 'Queratitis Marginal por Hipersensibilidad Estafilocócica (Infiltrados Catarrales)',
        distinction: 'Infiltrados estromales subepiteliales múltiples separados del limbo por un "INTERVALO LÚCIDO CLARO CORNEAL", asociados a blefaritis bacteriana crónica y que responden rápidamente a esteroides tópicos leves.'
      },
      {
        condition: 'Úlcera Corneal Infecciosa Periférica (Pseudomonas, Hongos)',
        distinction: 'Infiltrado purulento denso con abundante edema estromal periférico, hipopion espeso en cámara anterior y frotis positivo para bacterias u hongos.'
      }
    ],
    steppedManagement: {
      medical: '• REGLA DE ORO DE SEGURIDAD ABSOLUTA: PROHIBICIÓN TERMINANTE DE AINES TÓPICOS (Ketorolaco, Diclofenaco, Bromfenaco, Nepafenaco): Desencadenan un melting corneal hiperagudo fulminante con perforación en 48-72 horas.\n• Queratitis Ulcerativa Periférica (PUK Inmune Sistémica):\n  - Terapia de Choque Inmediata:\n    * Pulsos intravenosos de Metilprednisolona (1 g/día IV durante 3 días consecutivos bajo monitorización de presión arterial y glucosa).\n    * Seguidos de Prednisona oral a dosis de 1 mg/kg/día con pauta descendente lenta tutelada por Reumatología.\n  - Inmunosupresión Ahorradora y Terapia Biológica de Rescate:\n    * Ciclofosfamida oral (2 mg/kg/día) o pulsos intravenosos (en GPA o vasculitis necrosante con riesgo vital o perforación inminente).\n    * RITUXIMAB (Anticuerpo monoclonal anti-CD20): Infusión de 1000 mg en los días 1 y 15 (o 375 mg/m2 semanal x 4 dosis), con remisión espectacular en PUK refractaria por Artritis Reumatoide o GPA.\n    * Agentes Anti-TNF-alfa: Infliximab (5 mg/kg IV) o Adalimumab (40 mg SC cada 14 días).\n  - Inhibidores de Metaloproteinasas Vía Oral:\n    * Doxiciclina 100 mg cada 12 horas VO (inhibe la transcripción de MMP-1, MMP-8 y MMP-9 y reduce el melting).\n    * Vitamina C oral (Ácido ascórbico 2 g/día) como cofactor para la síntesis de colágeno nuevo.\n• Úlcera de Mooren Unilateral / Bilateral:\n  - Corticoides tópicos intensivos sin conservantes cada 1-2 horas + Ciclosporina tópica al 1% o Tacrolimus tópico al 0.03% cada 12 horas.\n  - Si no responde o en forma bilateral maligna agresiva: Inmunosupresión sistémica con Ciclosporina oral (3-5 mg/kg/día) o Metotrexato (15-25 mg/semana).',
      surgical: '• Medidas Quirúrgicas Locales Tectónicas:\n  - Recesión Conjuntival Límbica Adyacente (Peritotomía/Periectomía):\n    * Resección de una franja de 3 a 5 mm de conjuntiva bulbar y tenon hiperémica adyacente a la úlcera para retirar la fuente vascular local de neutrófilos, anticuerpos y metaloproteinasas.\n  - Aplicación de Adhesivo Tisular de Cianoacrilato + Lente de Contacto Terapéutico:\n    * Indicado en áreas de adelgazamiento extremo (>80%) o microperforaciones (<1.5 mm).\n  - Queratectomía Lamelar Tectónica en Semiluna (Tectonic Crescent Patch Graft):\n    * Injerto lamelar o penetrante tallado a medida con córnea donante fijado con nylon 10-0 para restaurar la integridad del globo ocular.\n    * NUNCA realizar queratoplastia tectónica sin haber controlado previamente la inflamación sistémica con inmunosupresores, pues el injerto sufrirá melting periférico inmediato.'
    },
    clinicalApplicationPractical: '1. Reconocimiento de PUK como Emergencia Médica Sistémica: Una PUK no es solo un problema de la córnea; es la traducción directa de una vasculitis de vasos pequeños con una mortalidad global asociada del 30-40% a 5 años si no se trata con inmunosupresión sistémica. Interconsulta urgente inmediata a Reumatología.\n2. Cuidado con los Colirios de AINEs: Si un paciente acude con adelgazamiento corneal periférico y dolor, jamás prescriba AINEs tópicos para el dolor. Los AINEs bloquean las prostaglandinas protectoras y disparan las colagenasas estromales, perforando la córnea.\n3. Recesión conjuntival al pie del quirófano: En Mooren o PUK de progresión galopante, despegar y retirar 4 mm de conjuntiva inflamada periférica corta de raíz el suministro local de MMPs y frena el melting mientras los fármacos sistémicos alcanzan niveles terapéuticos.',
    highYieldPearl: 'PUK vs Mooren Board Pearl: La PUK se acompaña SIEMPRE de escleritis necrosante contigua y se asocia a vasculitis sistémica letal (Artritis Reumatoide, GPA c-ANCA). La Úlcera de Mooren es IDIOPÁTICA, confinada al ojo, tiene borde anterior socavado ("undermining overhang") y NUNCA presenta escleritis asociada.',
    keyDrugs: [
      { name: 'Metilprednisolona intravenosa', dose: '1000 mg/día IV durante 3 días consecutivos', warning: 'Monitorizar glucemia, presión arterial y profilaxis con IBP antes de iniciar.' },
      { name: 'Rituximab (MabThera)', dose: '1000 mg IV los días 1 y 15 (repetir a los 6 meses)', warning: 'Anticuerpo anti-CD20; descartar hepatitis B, tuberculosis y reactivación JC previa.' },
      { name: 'Doxiciclina oral', dose: '100 mg cada 12 horas vía oral', warning: 'Inhibe directamente la síntesis y activación de metaloproteinasas MMP-8 y MMP-9 estromales.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Mortalidad Sistémica Oculta de la PUK',
        category: 'Cifra Clave de Corte',
        description: 'La presencia de PUK en un paciente con Artritis Reumatoide o vasculitis necrotizante indica vasculitis sistémica activa; la tasa de mortalidad a 5 años por infarto miocárdico o insuficiencia renal necrotizante alcanza hasta el 30-40% en ausencia de inmunosupresión sistémica inmunomoduladora.',
        trapToAvoid: 'Limitarse a tratar la PUK únicamente con colirios tópicos o pegamento sin derivación urgente a Reumatología para inmunosupresión sistémica.'
      },
      {
        title: 'El Borde Socavado de la Úlcera de Mooren',
        category: 'Asociación Patognomónica',
        description: 'Borde periférico en socavón ("undermining edge") donde el epitelio y estroma anterior sobresalen sobre la base de la úlcera sin afectación escleral = Úlcera de Mooren.',
        trapToAvoid: 'Confundirla con degeneración de Terrien (Terrien es indolora, epitelio intacto y borde lipídico).'
      },
      {
        title: 'Contraindicación Letal de AINEs Tópicos en Córnea Adelgazada',
        category: 'Trampa de Tribunal',
        description: 'Pregunta recurrente de Boards: "¿Qué clase de fármaco oftálmico tópico está terminantemente contraindicado en un paciente con adelgazamiento corneal periférico activo por PUK?". Respuesta: Los Antiinflamatorios No Esteroideos tópicos (AINEs tópicos: diclofenaco, ketorolaco, nepafenaco). Inducen queratólisis corneal estromal fulminante (corneal melting).',
        trapToAvoid: 'Prescribir ketorolaco o nepafenaco tópico para calmar el dolor ocular en un adelgazamiento corneal.'
      }
    ],
    fellowshipKeyPoints: [
      'Rituximab en PUK por GPA y Artritis Reumatoide: Los ensayos RAVE y RITUXVAS demostraron que el Rituximab no es inferior y a menudo es superior a la Ciclofosfamida oral para inducir y mantener la remisión en vasculitis asociadas a ANCA.',
      'Diferenciación Terrien vs Mooren vs PUK: Terrien es típicamente superior, bilateral, asintomática, con epitelio íntegro y pseudopterigión; Mooren no tiene escleritis; PUK tiene escleritis necrosante contigua y pruebas sistémicas positivas.',
      'Antígenos en Úlcera de Mooren: Anticuerpos circulantes dirigidos contra la proteína de fijación de calcio Calgranulina C (S100A12) expresada en el estroma corneal.'
    ],
    landmarkTrials: [
      {
        name: 'RAVE Trial (Rituximab for ANCA-Associated Vasculitis)',
        year: '2010 (N Engl J Med)',
        conclusion: 'Rituximab demostró ser equivalente a la ciclofosfamida para la inducción de la remisión en vasculitis asociadas a ANCA graves y superior en pacientes con enfermedad recidivante.',
        fellowshipRelevance: 'Transformó el algoritmo terapéutico mundial de la PUK severa y la escleritis necrosante por GPA.'
      }
    ],
    histopathologyAndGenetics: 'En biopsia de PUK: Infiltrado neutrofílico estromal masivo con vasculitis leucocitoclástica en vasos epiesclerales adyacentes, depósito vascular de IgM, IgG y C3 en inmunofluorescencia y necrosis de licuefacción colágena. En Mooren: Infiltrado predominantemente de linfocitos T CD4+ helper y células plasmáticas en el estroma y limbo conjuntival sin vasculitis sistémica.',
    surgicalPearls: [
      'En recesión conjuntival para PUK/Mooren: Realizar una peritotomía límbica en 360 grados o del cuadrante afectado y disecar la conjuntiva y cápsula de Tenon 4-5 mm hacia atrás, anclándola a la epiesclera posterior con puntos reabsorbibles de Vicryl 8-0 para alejar permanentemente el estímulo inmunogénico del lecho ulcerado.',
      'Al aplicar cianoacrilato en melting corneal: Desecar meticulosamente el lecho con una torunda de celulosa; colocar un disco de plástico polietileno de 2-3 mm con una microgota de adhesivo en la punta de una aguja de 30G y aponer suavemente; proteger inmediatamente con una lente de contacto terapéutica empapada en antibiótico sin conservantes.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 52 años con antecedentes de artritis reumatoide de 15 años de evolución acude por dolor ocular terebrante severo, fotofobia e hiperemia profunda violácea en ojo izquierdo de 5 días de evolución. A la biomicroscopía se evidencia un área de adelgazamiento en semiluna de 4 mm de extensión entre las 3 y las 6 del limbo corneal con un defecto epitelial del 70% del estroma y escleritis necrosante adyacente que no blanquea con fenilefrina. ¿Cuál es el diagnóstico sindrómico, qué clase de fármaco tópico está terminantemente contraindicado y cuál es el plan terapéutico de emergencia para salvar el ojo y la vida del paciente?',
        answer: '1) Diagnóstico: Queratitis Ulcerativa Periférica (PUK) con escleritis necrosante activa asociada a Artritis Reumatoide descompensada (vasculitis autoinmune sistémica).\n2) Fármaco formalmente contraindicado: Antiinflamatorios No Esteroideos (AINEs) tópicos (como nepafenaco, diclofenaco, ketorolaco); inducen queratólisis aguda fulminante y perforación corneal.\n3) Plan terapéutico de emergencia:\n   a) Terapia de Choque Inmediata: Ingreso hospitalario para infusión intravenosa de pulsos de Metilprednisolona (1000 mg/día IV durante 3 días) bajo cobertura protectora gástrica y monitorización cardiovascular, seguida de prednisona oral a 1 mg/kg/día.\n   b) Terapia Inmunosupresora Dirigida / Biológica de Elección: Iniciar Rituximab (1000 mg IV los días 1 y 15) o infusión de Infliximab/Ciclofosfamida en conjunto con Reumatología para frenar la vasculitis necrosante sistémica.\n   c) Manejo Ocular Coadyuvante: Doxiciclina oral 100 mg c/12h (inhibidor de MMPs), lágrimas artificiales sin conservantes horarias, lentes de contacto terapéuticas o cianoacrilato si el espesor residual es <20%.\n   d) Si progresa: Resección conjuntival límbica adyacente para retirar los mediadores inflamatorios locales.',
        trap: 'Manejar a la paciente ambulatoriamente con lágrimas y colirios de esteroides o prescribir un colirio de AINE para aliviar el dolor.'
      }
    ]
  },

  // =========================================================================
  // 12. DEFICIENCIA DE CÉLULAS MADRE LÍMBICAS (LSCD) Y RECONSTRUCCIÓN DE SUPERFICIE
  // =========================================================================
  {
    id: 'deep-cornea-deficiencia-celulas-madre-limbicas-lscd',
    title: 'Deficiencia de Células Madre Límbicas (LSCD) y Reconstrucción de la Superficie Ocular: SLET, CLET y KLAL',
    subspecialtyId: 'cornea',
    summary: 'Monografía exhaustiva sobre Deficiencia de Células Madre Límbicas (LSCD): etiologías primarias hereditarias (Aniridia congénita por mutación en PAX6, displasia ectodérmica) y adquiridas secundarias (quemaduras químicas por álcalis/ácidos, Síndrome de Stevens-Johnson / NET, penfigoide cicatrizal ocular, uso crónico de lentes de contacto y cirugías previas múltiples); fisiopatología del nicho límbico y pérdida de las empalizadas de Vogt; conjuntivalización corneal con neovascularización superficial, metaplasia escamosa y defectos epiteliales persistentes; diagnóstico confirmatorio mediante Citología de Impresión (citoqueratinas K13/K19 conjuntivales vs K3/K12 corneales) y microscopía confocal in vivo (IVCM); clasificación por estadios según el consenso mundial de 2019; técnicas de reconstrucción de superficie ocular: Trasplante Simple de Epitelio Límbico (SLET autólogo vs alogénico), Trasplante Cultivado de Epitelio Límbico (CLET), Alotrasplante Queratolímbico (KLAL) y Queratoprótesis de Boston tipo 1 en daño bilateral terminal.',
    definitionAndEpidemiology: 'La Deficiencia de Células Madre Límbicas (LSCD) es una patología grave de la superficie ocular originada por la pérdida cuantitativa o disfunción funcional de las células madre epiteliales corneales ubicadas en las empalizadas de Vogt del limbo esclerocorneal. La falta de esta barrera homeostática permite la invasión centrípeta del epitelio conjuntival sobre la superficie de la córnea (conjuntivalización). Puede ser primaria (genética, destacando la aniridia asociada a haploinsuficiencia de PAX6 en 11p13) o secundaria adquirida, siendo las quemaduras químicas oculares la causa más frecuente de forma unilateral y el Síndrome de Stevens-Johnson / NET la causa principal de daño bilateral destructivo.',
    anatomyAndPathophysiology: '1. El Nicho Anatómico Límbico y las Células Madre Límbicas (LSCs):\n   • En las empalizadas de Vogt y las criptas límbicas existen células madre basales con alta capacidad proliferativa, ciclo celular lento y marcadores de pluripotencia (p63-alfa, ABCB5, C/EBP-delta).\n   • Estas células dan origen a células de amplificación transitoria (TAC) que migran centrípetamente hacia el centro corneal y verticalmente hacia la superficie para reponer el epitelio corneal cada 7 a 14 días (Hipótesis XYZ de Thoft: X = proliferación basal, Y = migración centrípeta, Z = descamación superficial; X + Y = Z).\n   • El limbo actúa como una barrera anatómica y fisiológica impenetrable que impide que el epitelio conjuntival invada la córnea.\n2. Fisiopatología de la LSCD:\n   • Destrucción térmica, química o autoinmune del nicho estromal límbico.\n   • Incapacidad para generar epitelio corneal estratificado transparente (expresión de queratinas K3 y K12).\n   • Pérdida de la barrera de contención límbica -> migración centrípeta de epitelio conjuntival sobre la membrana de Bowman.\n   • CONJUNTIVALIZACIÓN CORNEAL: El epitelio conjuntival fenotípicamente aberrante transporta células caliciformes productoras de mucina (MUC5AC) y queratinas K13 y K19 a la córnea.\n   • Neovascularización corneal superficial arborescente, inflamación crónica de la interfase, irregularidad refractiva severa, defectos epiteliales persistentes (PED) y opacificación corneal estromal progresiva.',
    clinicalExamination: {
      biomicroscopy: '• En LSCD incipiente o parcial: Pérdida focal de la arquitectura regular de las empalizadas de Vogt en el examen con aumento máximo y filtro azul cobalto; presencia de un epitelio corneal mate, deslustrado, de textura irregular en vidrio esmerilado que avanza desde el sector límbico afectado hacia el centro.\n• Tinción con Fluoresceína: Revela una hiperpermeabilidad y tinción epitelial punteada tardía en patrón verticilado o en huso (late fluorescein staining), delimitando con precisión la línea de avance conjuntival.\n• En LSCD total (360º): Conjuntivalización corneal completa en los cuatro cuadrantes, vascularización corneal superficial de 360 grados, metaplasia escamosa, queratinización superficial difusa, defectos epiteliales recalcitrantes recurrentes e infiltración cicatrizal estromal profunda.',
      fundus: 'Frecuentemente inaccesible por opacidad corneal; requiere ecografía ocular en modo B para evaluar retina y nervio óptico.',
      specialSigns: '• Pérdida de las Empalizadas de Vogt: Desaparición de las finas crestas radiales blanquecinas interpalpebrales normales del limbo esclerocorneal.\n• Tinción con Verde de Lisamina: Tiñe selectivamente las células caliciformes conjuntivales ectópicas sobre la superficie corneal.'
    },
    diagnosticWorkup: [
      {
        test: 'Citología de Impresión Corneal (Gold Standard Diagnóstico)',
        findings: 'Técnica mínimamente invasiva con disco de acetato de celulosa: La presencia de células caliciformes (tinción PAS positiva) y de citoqueratinas K13 o K19 en la superficie corneal confirma de forma categórica la conjuntivalización patológica y la LSCD (el epitelio corneal normal expresa exclusivamente K3 y K12 y carece totalmente de células caliciformes).'
      },
      {
        test: 'Microscopía Confocal In Vivo (IVCM)',
        findings: 'Demuestra la ausencia anatómica de las empalizadas de Vogt, pérdida de la morfología hexagonal del epitelio basal corneal, presencia de células globulares hiperreflectivas correspondientes a células caliciformes y vasos sanguíneos tortuosos en estroma superficial.'
      },
      {
        test: 'OCT de Segmento Anterior (AS-OCT) de Alta Resolución',
        findings: 'Muestra adelgazamiento del epitelio corneal, hiperreflectividad epitelial anormal y pérdida de la demarcación normal entre la lámina propia de la córnea y la conjuntiva límbica.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Queratopatía en Remolino (Cornea Verticillata) por Amiodarona o Fabry',
        distinction: 'Líneas epiteliales en huso curvilíneas doradas sin defecto de barrera, sin células caliciformes ni neovascularización, con empalizadas de Vogt perfectamente intactas.'
      },
      {
        condition: 'Pannus Flictenular o Tracoma',
        distinction: 'Neovascularización periférica superior asociada a infiltrados inflamatorios cicatrizales; el epitelio intermedio conserva su fenotipo corneal normal.'
      },
      {
        condition: 'Neoplasia Escamosa de la Superficie Ocular (OSSN)',
        distinction: 'Lesión exofítica gelatinosa o papilomatosa unilateral con vasos en horquilla ("hairpin loops") focales y atipia nuclear en biopsia.'
      }
    ],
    steppedManagement: {
      medical: '• Optimización Agresiva de la Superficie Ocular Previa a Cualquier Cirugía:\n  - Control estricto del microambiente ocular: Eliminación total de conservantes (BAK), lágrimas artificiales sin conservantes de alta retención.\n  - Supresión de la inflamación activa: Ciclosporina tópica al 0.05-0.1% o Tacrolimus en pomada al 0.03% cada 12 horas.\n  - Manejo de la exposición y párpados: Corrección de entropión, triquiasis y disfunción meibomiana.\n  - Lentes de Contacto Esclerales Permeables al Gas (PROSE / Esclerales de gran diámetro): Mantienen un reservorio salino oxigenado continuo protegiendo la córnea del roce parpebral.\n  - Suero autólogo al 20-50% o PRGF rico en factores tróficos (EGF, FGF, fibronectina).',
      surgical: '• Algoritmo de Reconstrucción de la Superficie Ocular según Lateralidad:\n  1. LSCD UNILATERAL (Ojo Contralateral Sano):\n     - TRASPLANTE SIMPLE DE EPITELIO LÍMBICO AUTÓLOGO (SLET Autólogo):\n       * Técnica estándar moderna de elección mundial (inventada por Sangwan en 2012).\n       * Se toma un injerto diminuto de 2x2 mm de limbo del ojo sano contralateral -> se corta en 8-10 microfragmentos diminutos -> se fijan sobre la córnea desepitelizada del ojo enfermo con cola de fibrina sobre una membrana amniótica.\n       * VENTAJA VITAL: Mínimo riesgo para el ojo donante y no requiere inmunosupresión sistémica.\n     - Injerto Autólogo de Limbo Conjuntival (CLAU): Extirpación de dos sectores de 2 horas de limbo del ojo contralateral (mayor morbilidad donante).\n  2. LSCD BILATERAL (Ambos Ojos Afectados):\n     - Opciones Alogénicas (Requieren inmunosupresión sistémica con Ciclosporina A, Tacrolimus o Micofenolato durante al menos 1-2 años):\n       * SLET Alogénico o Alotrasplante Queratolímbico Vivo-Relacionado (LR-KLAL de familiar directo HLA-compatible) o Donante Cadavérico (C-KLAL).\n     - Trasplante de Mucosa Bucal Cultivada (COMET): Uso de epitelio autólogo oral para evitar inmunosupresión.\n  3. LSCD Terminal Bilateral con Ojo Seco Severo o Queratoplastias Fracasadas Múltiples:\n     - QUERATOPRÓTESIS DE BOSTON TIPO 1 (en ojos con humedad y parpadeo funcional) o Queratoprótesis Osteo-Odonto (OOKP) en ojos secos cicatrizales extremos.'
    },
    clinicalApplicationPractical: '1. NUNCA realizar una Queratoplastia Penetrante (PKP) directa en un ojo con LSCD: Si realiza un trasplante de córnea de grosor total sin haber restaurado previamente las células madre límbicas, el injerto donante se conjuntivalizará, neovascularizará y fracasará catastróficamente en cuestión de semanas a meses.\n2. Secuencia Terapéutica Obligatoria de Dos Tiempos: Primero restaurar el limbo con SLET o CLAU y esperar 6 a 12 meses hasta obtener una superficie epitelial transparente y estable; solo después de esto, si persiste leucoma estromal profundo, se realiza la queratoplastia óptica (DALK o PKP).\n3. SLET es la técnica más costo-efectiva del mundo: A diferencia del CLET cultivado en laboratorio (que requiere laboratorios GMP carísimos), el SLET permite expandir in vivo las células madre utilizando una membrana amniótica como andamiaje biológico en un solo acto quirúrgico.',
    highYieldPearl: 'LSCD Board Rule: El diagnóstico de certeza es la presencia de Células Caliciformes y Citoqueratinas K13/K19 en la córnea mediante Citología de Impresión. Jamás realizar PKP sin restaurar primero el limbo con SLET (autólogo si es unilateral, alogénico si es bilateral).',
    keyDrugs: [
      { name: 'Ciclosporina A oral (Neoral)', dose: '3 a 5 mg/kg/día en 2 tomas (niveles valle 100-200 ng/mL)', warning: 'Inmunosupresión obligatoria en alotrasplantes límbicos alogénicos (KLAL/SLET alogénico).' },
      { name: 'Tacrolimus tópico 0.03% pomada', dose: 'Aplicar en fondo de saco cada 12 horas', warning: 'Inmunosupresor tópico potente que reduce neovascularización e inflamación de la superficie.' },
      { name: 'Cola de fibrina biológica (Tisseel / Beriplast)', dose: 'Adhesión intraoperatoria de microinjertos y membrana amniótica', warning: 'Polimerización en segundos; evitar tracción mecánica durante el secado.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Citoqueratinas Corneales vs Conjuntivales',
        category: 'Asociación Patognomónica',
        description: 'Epitelio corneal sano expresa K3 y K12 (sin células caliciformes). Epitelio conjuntival expresa K13, K19 y mucina MUC5AC (con células caliciformes). Su hallazgo sobre la córnea es patognomónico de LSCD.',
        trapToAvoid: 'Creer que la córnea normal tiene células caliciformes basales.'
      },
      {
        title: 'Por Qué Fracasa la PKP en LSCD',
        category: 'Pregunta Clásica',
        description: 'La córnea donante de una PKP contiene estroma y endotelio, pero NO contiene células madre límbicas del limbo. Sin células madre propias para renovar el epitelio, la conjuntiva del receptor invade y destruye el injerto en semanas.',
        trapToAvoid: 'Indicar trasplante de córnea convencional como primer paso en un paciente con quemadura química total.'
      },
      {
        title: 'SLET Autólogo: La Innovación Quirúrgica del Siglo XXI',
        category: 'Trampa de Tribunal',
        description: 'En LSCD unilateral, el SLET (Simple Limbal Epithelial Transplantation) solo requiere un fragmento minúsculo de 2x2 mm del ojo sano, eliminando el riesgo de inducir LSCD iatrogénica en el ojo donante (complicación histórica del CLAU de gran tamaño).',
        trapToAvoid: 'Realizar resecciones límbicas donantes amplias (>4-6 horas) que pongan en peligro el ojo sano.'
      }
    ],
    fellowshipKeyPoints: [
      'Clasificación Global de LSCD (Consenso Internacional 2019): Estadio I (afectación parcial sin comprometer los 2 mm centrales de córnea), Estadio II (afectación parcial que invade los 2 mm centrales), Estadio III (LSCD total del 100% de la superficie corneal con 360 grados de pérdida límbica).',
      'Marcadores Inmunohistoquímicos de Células Madre: p63-alfa y ABCB5 identifican con precisión las verdaderas células madre autorrenovables en el estrato basal límbico.',
      'Aniridia Congénita y LSCD: Mutación en PAX6 en 11p13; la queratopatía anirídica progresa inexorablemente desde la infancia con invasión vascular de 360 grados debido a un fallo genético intrínseco del nicho límbico.'
    ],
    landmarkTrials: [
      {
        name: 'Sangwan et al. / SLET Clinical Outcomes Trial',
        year: '2012 (Br J Ophthalmol) & 2016 (Ophthalmology)',
        conclusion: 'El trasplante simple de epitelio límbico (SLET) logró una superficie corneal epitelial transparente y vascularmente estable en más del 76% de los ojos con LSCD unilateral severa, manteniendo la agudeza visual a largo plazo sin inmunosupresión sistémica.',
        fellowshipRelevance: 'Estableció el SLET como la técnica quirúrgica de referencia mundial para la LSCD unilateral.'
      }
    ],
    histopathologyAndGenetics: 'En LSCD: Citología de impresión y biopsia demuestran epitelio no queratinizado de tipo conjuntival con células caliciformes PAS-positivas sobre la membrana de Bowman desorganizada, vascularización estromal superficial e infiltrado inflamatorio de células T crónico.',
    surgicalPearls: [
      'Técnica Quirúrgica de SLET Autólogo: Tras peritotomía límbica de 360º y queratectomía superficial completa para retirar el pannus conjuntival de la córnea, se extiende una membrana amniótica humana criopreservada con la cara epitelial hacia arriba sobre el estroma corneal y se fija con cola de fibrina; el injerto límbico de 2x2 mm del ojo sano se secciona en 8 a 10 microfragmentos diminutos con hoja de bisturí de 15º y se distribuyen equidistantemente en círculos concéntricos sobre la membrana amniótica fijándolos con una película fina de fibrina; se finaliza colocando una lente de contacto terapéutica de gran diámetro.',
      'Preservación de la Membrana de Bowman: Durante la queratectomía superficial para retirar la conjuntivalización corneal, mantenerse estrictamente superficial para no desgarrar la membrana de Bowman, lo que evitará haze e irregularidades estromales posteriores.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un varón de 30 años sufrió una quemadura química severa por cal viva (álcali) en ojo derecho hace 1 año. Actualmente presenta una agudeza visual de cuenta dedos a 1 metro, con 360 grados de conjuntivalización corneal, neovascularización estromal superficial masiva, pérdida completa de las empalizadas de Vogt y defectos epiteliales recurrentes. El ojo izquierdo es completamente normal con AV de 20/20 y limbo indemne. Su residente sugiere programar una Queratoplastia Penetrante (PKP) convencional de inmediato. ¿Por qué es un error fatal la propuesta del residente, qué prueba diagnóstica confirma la patología y cuál es la técnica quirúrgica reconstructiva contemporánea de elección?',
        answer: '1) Crítica a la PKP Inmediata: La propuesta del residente llevará al fracaso absoluto del injerto. El paciente presenta una Deficiencia Total de Células Madre Límbicas (LSCD Estadio III). Un injerto de PKP no aporta células madre límbicas; sin nicho límbico funcional, el epitelio conjuntival del receptor invadirá el injerto donante en pocas semanas, originando vascularización, melting y opacificación irreversible.\n2) Prueba Diagnóstica Confirmatoria: Citología de Impresión Corneal con tinción de PAS e inmunohistoquímica para Citoqueratinas K13/K19; la demostración de células caliciformes y citoqueratinas conjuntivales sobre la córnea confirma de forma inequívoca la LSCD.\n3) Técnica Quirúrgica de Elección: TRASPLANTE SIMPLE DE EPITELIO LÍMBICO AUTÓLOGO (SLET Autólogo):\n   - Se toma una biopsia diminuta de limbo de 2x2 mm del ojo izquierdo sano (sin causarle daño).\n   - Se realiza peritotomía y retirada de todo el pannus fibrovascular del ojo derecho receptor.\n   - Se fija una membrana amniótica humana con cola de fibrina sobre la córnea y se dividen los microinjertos límbicos en 8-10 fragmentos adheridos con fibrina concéntricamente.\n   - No requiere inmunosupresión sistémica y restablece un epitelio corneal transparente y estable en más del 75-80% de los casos. Si tras 6-12 meses persiste leucoma estromal profundo, se procederá en un segundo tiempo a una queratoplastia óptica.',
        trap: 'Realizar un injerto penetrante de córnea de grosor total sin haber reconstruido previamente el limbo esclerocorneal.'
      }
    ]
  }
];

