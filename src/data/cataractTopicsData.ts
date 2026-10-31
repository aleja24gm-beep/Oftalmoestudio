import { TopicDeepDive } from '../types/ophthalmology';

export const CATARACT_TOPICS: TopicDeepDive[] = [
  // =========================================================================
  // 1. FISIOPATOLOGÍA DEL CRISTALINO Y CLASIFICACIÓN LOCS III
  // =========================================================================
  {
    id: 'deep-catarata-fisiopatologia-clasificacion-locs',
    title: 'Fisiopatología del Cristalino, Bioquímica del Envejecimiento y Clasificación Morfológica LOCS III',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre la biología, metabolismo y bioquímica del cristalino: Glutatión, vía del sorbitol y estrés oxidativo, agregación de cristalinas y cromóforos pardos (pigmentos urocromos), clasificación estandarizada LOCS III (Opalescencia Nuclear NO, Color Nuclear NC, Cortical C y Subcapsular Posterior P), y correlación directa con la densidad ultrasonográfica intraoperatoria y pérdida de células endoteliales.',
    definitionAndEpidemiology: 'La catarata es la opacificación del cristalino natural que compromete la agudeza visual. Es la principal causa de ceguera evitable y reversible en el mundo (responsable del ~50% de los casos globales de ceguera, afectando a más de 20 millones de personas, con una prevalencia superior al 60% en individuos mayores de 70 años). La cirugía de catarata es la intervención quirúrgica más realizada en toda la medicina, con más de 30 millones de procedimientos anuales a nivel mundial.',
    anatomyAndPathophysiology: '1. Arquitectura y Homeostasis Avascular del Cristalino:\n   • Estructura biconvexa, avascular y desprovista de inervación, suspendida del cuerpo ciliar por la zónula de Zinn.\n   • Monocapa de epitelio cúbico anterior (células epiteliales del cristalino - LEC) metabólicamente activa; en el ecuador, las células se diferencian de por vida y se alargan para formar fibras lenticulares concéntricas que pierden sus núcleos y orgánulos (zona de desorganización organelar) para garantizar la transparencia óptica.\n2. Mecanismos Bioquímicos de Pérdida de Transparencia:\n   • Envejecimiento Nuclear: Disminución progresiva del glutatión reducido (GSH) en el núcleo lenticular por falla de transporte desde la corteza -> oxidación de puentes disulfuro en las proteínas cristalinas (alfa, beta, gamma) -> desnaturalización, formación de agregados proteicos de alto peso molecular (>50 MDa) que dispersan la luz y acumulación de cromóforos fluorescentes (urocromos derivados del triptófano) con esclerosis y tinción amarillento-parda (catarata brunescente/negra).\n   • Catarata Cortical: Ruptura de las uniones comunicantes (conexina 46 y 50) y falla de la bomba Na+/K+-ATPasa de las LEC -> ingreso masivo de agua y sodio con pérdida de potasio -> hidratación osmótica de las fibras corticales con formación de hendiduras de agua (water clefts), vacuolas intralenticulares y opacidades espiculares o en cuna (*cortical spokes*).\n   • Catarata Subcapsular Posterior (SCP): Migración anómala de células epiteliales del ecuador hacia el polo posterior debajo de la cápsula posterior, donde sufren hipertrofia vesicular y degeneración anómala (células de Wedl o células vesiculares), interrumpiendo el eje visual nodal de forma precoz y severa.',
    clinicalExamination: {
      biomicroscopy: 'Examen bajo dilatación pupilar completa con haz fino a 45 grados: Gradación de la densidad del núcleo (color amarillo pajizo a marrón oscuro/negro), espículas radiales corticales con hendiduras de agua que avanzan desde la periferia ecuatorial, y placa granular blanco-grisácea iridiscente subcapsular posterior central.',
      fundus: 'Pérdida del reflejo rojo de fondo transiluminado proporcional a la densidad de la catarata. Oftalmoscopía indirecta para descartar patología vitreorretiniana coexistente (degeneración macular, desprendimientos de retina, retinopatía diabética).',
      specialSigns: '• Miopía de índice (cambio miópico o "segunda visión del anciano"): Aumento del índice de refracción del núcleo esclerótico que permite al paciente senil leer de cerca sin sus gafas de presbicia habituales.\n• Diplopía monocular o poliopía por refracción irregular en hendiduras corticales.\n• Deslumbramiento discapacitante (*glare*) severo y caída de la sensibilidad al contraste, particularmente en catarata subcapsular posterior al conducir de noche frente a los faros de los autos.'
    },
    diagnosticWorkup: [
      {
        test: 'Sistema de Clasificación Morfológica Estandarizada LOCS III (Lens Opacities Classification System III)',
        findings: 'Escala semicuantitativa decimal (1.0 a 6.9) comparada con diapositivas estándar de referencia:\n- Opalescencia Nuclear (NO 1 a 6) y Color Nuclear (NC 1 a 6): Evalúa la densidad física y esclerosis del núcleo.\n- Catarata Cortical (C 1 a 5): Porcentaje de la circunferencia pupilar ocupado por espículas corticales (C1 <10% hasta C5 >50%).\n- Catarata Subcapsular Posterior (P 1 a 5): Porcentaje del área pupilar posterior ocupado por opacidad granular (P1 <3% hasta P5 >50%).'
      },
      {
        test: 'Microscopía Especular Endotelial Corneal',
        findings: 'Determinación obligatoria preoperatoria de la densidad de células endoteliales (ECD, normal 2,000-2,500 cél/mm²), pleomorfismo y polimegatismo; en cataratas densas (NO >4-5) la energía de ultrasonidos dispersada puede causar pérdida de hasta 10-15% de células endoteliales.'
      },
      {
        test: 'OCT de Segmento Anterior y Scheimpflug (Pentacam)',
        findings: 'Densintometría del cristalino cuantitativa tridimensional en porcentaje de luz dispersada (PNS - Pentacam Nucleus Staging de 1 a 5) y medición de la profundidad de cámara anterior (ACD) y grosor del cristalino (LT).'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Esclerosis Nuclear Fisiológica Senil',
        distinction: 'Aumento amarillento del núcleo sin pérdida significativa de agudeza visual de Snellen ni limitación funcional de la vida diaria del paciente.'
      },
      {
        condition: 'Opacificación Capsular Posterior (PCO)',
        distinction: 'Ocurre en pacientes ya intervenidos de catarata (pseudofáquicos) por proliferación de células epiteliales residuales en la cápsula posterior.'
      },
      {
        condition: 'Edema Corneal o Distrofia Endotelial de Fuchs Descompensada',
        distinction: 'Disminución visual matutina con halos alrededor de las luces por edema estromal y epitelial de la córnea, independiente de la transparencia del cristalino.'
      }
    ],
    steppedManagement: {
      medical: 'Medidas Previas y Criterios Quirúrgicos:\n• No existe tratamiento farmacológico médico eficaz aprobado para disolver, revertir o prevenir la progresión de las cataratas seniles (los colirios antioxidantes carecen de evidencia clínica demostrada).\n• Indicación Quirúrgica: Determinada por el impacto funcional de la pérdida visual en las actividades cotidianas del paciente (conducción, lectura, trabajo), no exclusivamente por una cifra arbitraria de Snellen.\n• Indicaciones Médicas Mandatorias de Cirugía:\n  - Glaucoma Facolítico o Facomórfico (cierre angular agudo inducido por cristalino intumescente).\n  - Uveítis Facoantigénica (inflamación granulomatosa por escape de proteínas lenticulares).\n  - Necesidad de visualizar y tratar patología del fondo de ojo (retinopatía diabética proliferativa o desprendimiento de retina que requiere fotocoagulación o vitrectomía).',
      surgical: 'Técnicas Quirúrgicas de Elección:\n• Facoemulsificación con Implante de Lente Intraocular (LIO) Plegable en Saco Capsular: Técnica estándar de oro mundial.\n  - Microincisión corneal autosellante de 2.2 a 2.4 mm.\n  - Capsulorrexis circular continua (CCC) calibrada de 5.0 a 5.5 mm.\n  - Hidrodissección meticulosa para lograr la rotación libre del núcleo sin tracción zonular.\n  - Emulsificación y aspiración del núcleo mediante ultrasonidos longitudinales o torsionales (Ozil).\n  - Aspiración bimanual de corteza residual con cánula de I/A.\n  - Implante de LIO monobloque hidrofóbico o hidrofílico en el saco capsular bajo viscoelástico.\n• Cirugía de Catarata Asistida por Láser de Femtosegundo (FLACS): Automatización de incisiones, capsulotomía perfecta y prefractura del núcleo con láser previo a la aspiración con facoemulsificador.\n• Extracción Extracapsular de Catarata Manual (EECC) o Cirugía Manual de Pequeña Incisión (MSICS): Indicada en cataratas hipermaduras grado LOCS NO6/NC6 (negras/brunescentes) con endotelio limítrofe o en países en desarrollo.'
    },
    clinicalApplicationPractical: 'Conducta en Consulta: Al clasificar una catarata según LOCS III, correlacionar la esclerosis nuclear con la estrategia de facoemulsificación: Un núcleo blanco blando (NO1-NO2) se aspira casi enteramente con vacío sin requerir ultrasonidos excesivos; un núcleo denso marrón (NO4-NO5) exige técnica de fractura mecánica (Phaco Chop), protección endotelial reforzada con viscoelástico dispersivo (Viscoat) y modulación torsional para evitar descompensación endotelial postoperatoria.\\n\\nCuidado con la catarata subcapsular posterior (SCP): Provoca una caída catastrófica de agudeza visual de cerca y fotofobia extrema a pesar de tener una densidad nuclear mínima; no diferir la cirugía esperando que el cristalino "madure".',
    highYieldPearl: 'LOCS III estandariza la opalescencia nuclear (NO 1-6), color nuclear (NC 1-6), cortical (C 1-5) y subcapsular posterior (P 1-5). La subcapsular posterior (células de Wedl) deteriora severamente la visión cercana y causa deslumbramiento nocturno precoz.',
    keyDrugs: [
      {
        name: 'Condroitín Sulfato + Hialuronato Sódico (Viscoat)',
        dose: 'Instilación en cámara anterior al inicio y antes de cada paso de nucleofractura en cataratas densas.',
        warning: 'Viscoelástico dispersivo de bajo peso molecular que se adhiere tenazmente al endotelio corneal protegiéndolo de los ultrasonidos y turbulencias; aspirar cuidadosamente al final para evitar picos de PIO.'
      },
      {
        name: 'Hialuronato Sódico al 1.0% - 1.4% (Provisc / Healon)',
        dose: 'Inyección intracameral para profundizar la cámara anterior y facilitar la capsulorrexis y la inserción del LIO.',
        warning: 'Viscoelástico cohesivo de alto peso molecular; fácil de aspirar en bloque al concluir la cirugía.'
      },
      {
        name: 'Moxifloxacino Intracameral Libre de Conservantes',
        dose: '0.5 mg en 0.1 mL inyectados en cámara anterior al finalizar la cirugía tras hidratar incisiones.',
        warning: 'Excelente alternativa profiláctica a la cefuroxima; amplio espectro contra Gram positivos y Gram negativos sin dilución compleja de farmacia.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Células de Wedl en Catarata Subcapsular Posterior',
        category: 'Asociación Patognomónica',
        description: 'Las células vesiculares globulares gigantes de Wedl resultan de la migración aberrante y diferenciación defectuosa de células epiteliales lenticulares hacia la cápsula posterior. Son el sustrato celular de la catarata subcapsular posterior.',
        trapToAvoid: 'Confundir las células de Wedl con las perlas de Elschnig (estas últimas aparecen en la opacificación capsular posterior postoperatoria).'
      },
      {
        title: 'Miopización de Índice vs Presbicia',
        category: 'Pregunta Clásica',
        description: 'La esclerosis nuclear aumenta el índice de refracción del núcleo cristaliniano, induciendo un desplazamiento miópico (-1.00 D a -3.00 D) que compensa temporalmente la presbicia senil. El paciente cree erróneamente que "su vista ha mejorado espontáneamente".',
        trapToAvoid: 'Recetar gafas de cerca sin explorar el cristalino en lámpara de hendidura en un anciano con cambio miópico súbito.'
      },
      {
        title: 'Glaucoma Facolítico vs Facomórfico',
        category: 'Cifra Clave de Corte',
        description: 'Glaucoma Facomórfico: Cierre angular agudo mecánico por un cristalino intumescente engrosado que bloquea la pupila. Glaucoma Facolítico: Glaucoma de ángulo abierto por escape de proteínas lenticulares de alto peso molecular a través de microfisuras de la cápsula en cataratas maduras que obstruyen la malla trabecular (fagocitadas por macrófagos).',
        trapToAvoid: 'Confundir el mecanismo de ángulo abierto con macrófagos del facolítico con el bloqueo pupilar de ángulo cerrado del facomórfico.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudio LOCS III (Chylack et al., Arch Ophthalmol 1993): Validó la reproducibilidad inter e intraobservador del sistema de clasificación fotográfico, convirtiéndose en el estándar universal para ensayos clínicos de catarata.',
      'Correlación LOCS III y Pérdida Endotelial (JCRS 2012): Grados de NO superiores a 4.0 se asocian a un incremento del 300% en el tiempo de ultrasonidos efectivo disipado (CDE), con una pérdida celular endotelial que puede sobrepasar el 12-15% sin viscoelásticos dispersivos adecuados.'
    ],
    landmarkTrials: [
      {
        name: 'The Lens Opacities Classification System III (LOCS III)',
        year: '1993',
        conclusion: 'Estableció un sistema cuantitativo decimal riguroso para graduar el tipo y severidad de las opacidades cristalinianas en clínica e investigación científica.',
        fellowshipRelevance: 'Sistema de estadificación obligatorio en investigación clínica y auditorías de calidad en cirugía refractiva y de catarata.'
      }
    ],
    histopathologyAndGenetics: 'Genética: Polimorfismos en genes de cristalinas (CRYAA, CRYBB2, CRYGC), conexinas (GJA3, GJA8) y genes del metabolismo antioxidante (EPHX2, GSTM1). Histopatología: En esclerosis nuclear: Homogeneización densa acelular del núcleo con pérdida de límites celulares interlamelares y agregación de cromóforos pardos. En cortical: Globulillos de Morgagni (gotas eosinófilas de mielina y detritos celulares) entre fibras desintegradas. En subcapsular posterior: Células vesiculares de Wedl vacuoladas eosinófilas sobre la superficie interna de la cápsula posterior.',
    surgicalPearls: [
      'En cataratas blancas intumescentes (con licuefacción cortical y alta presión intracapsular): Realizar punción central con aguja de 27G conectada a jeringa para aspirar el líquido lechoso antes de iniciar la capsulorrexis, evitando la temida extensión incontrolada en bandera argentina (*Argentinean flag sign*).',
      'Uso de Azul de Tripano al 0.06% (VisionBlue): Aplicar bajo burbuja de aire en toda catarata sin reflejo rojo de fondo para teñir la cápsula anterior y garantizar una capsulorrexis circular continua segura y calibrada.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 72 años con antecedentes de diabetes mellitus consulta por disminución progresiva de visión en ambos ojos, pero refiere que desde hace 6 meses "ya no necesita gafas para leer el periódico". Al examen su agudeza visual de lejos sin corrección es 20/80 en OD y 20/100 en OI; con refracción miópica de -2.50 D alcanza 20/30 en ambos ojos. La biomicroscopía muestra una esclerosis nuclear amarillento-ámbar compatible con LOCS III NO3/NC3 en ambos ojos, con una cámara anterior profunda y PIO de 15 mmHg. ¿Cuál es la base fisiopatológica de la mejoría temporal de su visión cercana, cómo se clasifica este fenómeno refractivo y cuál es el momento adecuado para indicar la facoemulsificación?',
        answer: '1) Base Fisiopatológica:\n   - La esclerosis nuclear progresiva del cristalino induce un incremento en la densidad física y compactación de las proteínas cristalinas centrales, elevando significativamente el índice de refracción del núcleo cristaliniano.\n   - Este cambio incrementa el poder refractivo dióptrico total del ojo, generando un desplazamiento esferoidal miópico (miopización de índice).\n2) Denominación Clínica:\n   - Fenómeno de "Miopización de Índice" o popularmente "Segunda Visión del Anciano" (*second sight of the elderly*), que neutraliza temporalmente la presbicia preexistente permitiendo la lectura cercana sin lentes convexos.\n3) Momento de Indicación Quirúrgica:\n   - La facoemulsificación electiva con implante de LIO está indicada cuando la pérdida de visión lejana, la alteración de la sensibilidad al contraste o el deslumbramiento incapacitante comiencen a interferir con las actividades diarias, laborales o de conducción del paciente, o cuando la refracción ya no permita una compensación visual confortable.',
        trap: 'Asumir que el paciente experimentó una regeneración biológica de la acomodación ciliar o retrasar la cirugía creyendo que la visión cercana conservada indica que no hay enfermedad lenticular.'
      }
    ]
  },

  // =========================================================================
  // 2. BIOMETRÍA ÓPTICA, FÓRMULAS DE LIO Y OJOS POST-REFRACTIVA
  // =========================================================================
  {
    id: 'deep-catarata-biometria-optica-formulas-lio',
    title: 'Biometría Óptica Moderna, Fórmulas de LIO (Barrett, Kane, Hill-RBF) y Ojos con Cirugía Corneal Previa',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre biometría óptica de coherencia óptica (SS-OCT / PCI), evolución generacional de fórmulas de cálculo de LIO (desde vergencia teórica de 3ª generación hasta inteligencia artificial y trazado de rayos: Barrett Universal II, Kane, Hill-RBF, Olsen), predicción de la Posición Efectiva de la Lente (ELP) y la catástrofe de la sorpresa refractiva post-cirugía refractiva corneal (error queratométrico e índice de refracción efectivo) resuelta mediante Barrett True-K y OCT epitelial.',
    definitionAndEpidemiology: 'El cálculo del poder dióptrico de la lente intraocular (LIO) es el determinante más crítico del resultado refractivo en la cirugía de catarata moderna. Con las expectativas crecientes de la cirugía facorrefractiva, la meta actual es lograr un resultado refractivo dentro de ±0.50 D en más del 85-90% de los ojos vírgenes y en >70% de los ojos con cirugía refractiva previa (LASIK, PRK, RK).',
    anatomyAndPathophysiology: '1. Parámetros Biométricos Cardinales:\n   • Longitud Axil (AL): Medida desde el vértice corneal hasta la membrana limitante interna retiniana foveal por tomografía de coherencia óptica de fuente de barrido (SS-OCT / IOLMaster 700 o Argos) con precisión micrométrica (<10 µm).\n   • Poder Corneal (K): Queratometría anterior y posterior total (TK) mediante trazado de rayos o Scheimpflug.\n   • Profundidad de Cámara Anterior (ACD), Grosor del Cristalino (LT) y Distancia Blanco-Blanco (WTW).\n2. Posición Efectiva de la Lente (ELP):\n   • Es la distancia teórica desde la superficie anterior de la córnea hasta el plano óptico principal del LIO implantado en el saco capsular.\n   • Es la mayor fuente de error biométrico (responsable de >35-40% del error refractivo postoperatorio total). Un error de apenas 1.0 mm en la predicción de la ELP produce un error refractivo de 1.5 a 2.0 D en el plano de las gafas.\n3. Las Dos Grandes Trampas Biométricas en Ojos Post-LASIK Miópico:\n   • Error del Instrumento / Queratometría: Los queratómetros estándar asumen un radio fijo constante entre la curvatura anterior y posterior de la córnea (índice queratométrico estándar 1.3375). Tras un LASIK miópico, la cara anterior se aplana mientras la posterior queda intacta -> el queratómetro convencional SOBRESTIMA el poder corneal real.\n   • Error de la Fórmula de ELP: Las fórmulas clásicas de 3ª generación (SRK/T, Holladay 1) utilizan el valor de K para estimar la ELP (asumen que a menor K, cámara más estrecha) -> predicen erróneamente un LIO demasiado anterior -> SELECCIONAN UN LIO DE PODER INSUFICIENTE -> GRAVE SORPRESA HIPERMETRÓPICA POSTOPERATORIA.',
    clinicalExamination: {
      biomicroscopy: 'Identificación minuciosa de la interfaz o cicatriz del flap de LASIK, marcas de queratotomía radial (RK) con incisiones corneales profundas, o leucomas post-PRK. Evaluación de la regularidad de la película lagrimal (el ojo seco es la causa número uno de mediciones biométricas espurias e inconsistentes).',
      fundus: 'Descarte de estafiloma miópico posterior en ojos miopes altos mediante oftalmoscopia y OCT (la biometría acústica convencional por ultrasonido suele medir hasta el fondo del estafiloma extrafoveal, sobreestimando la longitud axial).',
      specialSigns: '• Sorpresa Hipermetrópica Postoperatoria tras LASIK miópico calculado con fórmulas no ajustadas.\n• Fluctuación diurna de la refracción en ojos con Queratotomía Radial (RK).'
    },
    diagnosticWorkup: [
      {
        test: 'Biometría Óptica Swept-Source OCT (SS-OCT / IOLMaster 700 / Argos)',
        findings: 'Adquisición de la longitud axial foveal con verificación simultánea del corte tomográfico foveolar central (foveal fixation check), queratometría de superficie posterior y anterior (Total Keratometry - TK) y paquimetría corneal central.'
      },
      {
        test: 'Topografía Corneal y Tomografía Scheimpflug (Pentacam / Sirius)',
        findings: 'Mapeo de la potencia corneal real neta (Total Corneal Refractive Power - TCRP en zona de 3 mm y 4 mm) y descarte de ectasia corneal latente o astigmatismos irregulares que contraindicarían LIOs tóricos o multifocales.'
      },
      {
        test: 'Fórmulas Modernas de Última Generación e Inteligencia Artificial',
        findings: '• En Ojos Vírgenes: Barrett Universal II (fórmula teórica de 5 variables), Kane Formula (combina óptica de vergencia teórica con regresión de machine learning no lineal), Hill-RBF 3.0 (red neuronal de reconocimiento de patrones basada exclusivamente en IA) y Olsen (utiliza trazado de rayos y el concepto C-constant para predecir la ELP real con el grosor del cristalino).\n• En Ojos Post-LASIK / PRK / RK: Barrett True-K (con o sin datos históricos previos), Haigis-L, Shammas sin historia previa, y fórmulas que utilizan Total Keratometry (Barrett TK).'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Error de Longitud Axial por Estafiloma Miópico',
        distinction: 'En biometría por aplanamiento ultrasónico, la sonda acústica no alinea la fóvea oblicua del estafiloma, registrando una longitud irrealmente más larga que subdosifica el LIO.'
      },
      {
        condition: 'Mediciones Inconsistentes por Enfermedad de la Superficie Ocular',
        distinction: 'Queratometrías con desviación estándar elevada y miras topográficas distorsionadas que revierten tras tratamiento intensivo de blefaritis y lágrimas artificiales sin conservantes.'
      },
      {
        condition: 'Ojo con Aceite de Silicona Intravítreo',
        distinction: 'La velocidad de propagación del ultrasonido en aceite de silicona (980 m/s) es mucho más lenta que en vítreo normal (1532 m/s), induciendo un alargamiento axil artificial masivo si no se activa el modo silicona.'
      }
    ],
    steppedManagement: {
      medical: 'Optimización de la Superficie Corneal Previa a la Biometría:\n• Tratamiento riguroso de la disfunción de glándulas de Meibomio (DGM) y ojo seco durante 2 a 4 semanas previas a las mediciones biométricas definitivas.\n• Repetir la queratometría si existe una discrepancia >0.75 D entre ambos ojos o entre diferentes dispositivos (topógrafo vs biómetro).\n• Suspender lentes de contacto antes de la biometría: Blandas esféricas mínimo 1-2 semanas; tóricas 2 semanas; rígidas permeables al gas (RGP) mínimo 3-4 semanas hasta estabilización topográfica.',
      surgical: 'Estrategia de Selección y Ajuste de la Potencia del LIO:\n• En Ojos Cortos (AL <22.0 mm): Seleccionar fórmulas de Kane, Haigis o Hoffer Q (fórmulas de 3ª generación infraestiman el poder).\n• En Ojos Largos (AL >26.0 mm): Seleccionar Barrett Universal II (con factor de corrección de Wang-Koch integrado) o Kane; evitar SRK/T no modificado por tendencia a sorpresa hipermetrópica postoperatoria.\n• En Ojos Post-LASIK Miópico:\n  - Utilizar el software de la ASCRS IOL Calculator seleccionando Barrett True-K no-history method o Haigis-L.\n  - Apuntar siempre a una miopía residual de diana leve (-0.50 D a -0.75 D) para salvaguardar contra sorpresas hipermetrópicas que arruinan la visión intermedia y lejana.\n• Manejo de la Sorpresa Refractaria Postoperatoria Severa (>1.5 D residual no deseada):\n  1) Retoque refractario con Láser Corneal (LASIK o PRK) tras estabilización capsular (semana 6-8).\n  2) Recambio del LIO (IOL Exchange) antes de que ocurra fibrosis capsular densa (<3-4 semanas).\n  3) Implante de un LIO secundario complementario en sulcus (LIO Piggyback Sulcoflex).'
    },
    clinicalApplicationPractical: 'Regla de Oro en Biometría Post-Cirugía Refractiva: NUNCA utilizar fórmulas convencionales de 3ª generación (SRK/T, Holladay 1, Hoffer Q) en un ojo que tuvo LASIK o PRK previo; hacerlo condena al paciente a una sorpresa hipermetrópica severa (el paciente queda con +2.00 D o +3.00 D, sin visión de lejos ni de cerca). Utilizar siempre la calculadora online de la ASCRS con la fórmula Barrett True-K.\\n\\nCálculo en Queratotomía Radial (RK): Los ojos con RK previa presentan aplanamiento corneal central extremo con gran inestabilidad biomecánica; apuntar a una miopía residual de -1.00 D a -1.50 D, advirtiendo al paciente sobre fluctuaciones visuales a lo largo del día.',
    highYieldPearl: 'En ojos post-LASIK miópico, las fórmulas clásicas sobrestiman el poder corneal (K) y fallan en predecir la ELP, provocando una sorpresa hipermetrópica masiva. La fórmula de elección es Barrett True-K. En ojos normales, Kane y Barrett Universal II son el estándar de oro.',
    keyDrugs: [
      {
        name: 'Gotas de Hialuronato de Sodio al 0.18% sin conservantes',
        dose: '1 gota 4 a 6 veces al día durante 2 semanas antes de repetir la biometría en ojo seco.',
        warning: 'Optimiza la regularidad de la película lagrimal garantizando queratometrías reproducibles.'
      },
      {
        name: 'Ciclosporina Tópica 0.05% - 0.1%',
        dose: '1 gota cada 12 horas en ojo seco inflamatorio severo prequirúrgico.',
        warning: 'Mejora la calidad de la superficie corneal antes de la implantación de LIOs premium tóricos o multifocales.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Error Queratométrico en Post-LASIK Miópico',
        category: 'Trampa de Tribunal',
        description: '¿Por qué la queratometría estándar falla tras LASIK miópico? Respuesta: Porque asume una relación fija entre curvatura anterior y posterior (índice 1.3375). Al aplanar solo la cara anterior, sobrestima el poder real de la córnea, lo que conduce a seleccionar un LIO más débil de lo necesario con sorpresa hipermetrópica.',
        trapToAvoid: 'Calcular el LIO de un paciente post-LASIK utilizando la K media del autorrefractómetro o queratómetro estándar.'
      },
      {
        title: 'Fórmulas según Longitud Axial',
        category: 'Cifra Clave de Corte',
        description: 'Ojos cortos (<22.0 mm): Kane, Haigis, Hoffer Q. Ojos normales (22.0 a 24.5 mm): Todas rinden bien (Kane, Barrett II, Hill-RBF). Ojos largos (>26.0 mm): Barrett Universal II (usa modificación de Wang-Koch), Kane.',
        trapToAvoid: 'Usar Hoffer Q o Holladay 1 en miopías magnas de 30 mm sin ajuste de longitud axial.'
      },
      {
        title: 'La C-Constant de Olsen',
        category: 'Pregunta Clásica',
        description: 'La fórmula de Olsen predice la ELP mediante la constante "C", que ubica el centro del LIO como una fracción fija del grosor del cristalino del paciente medido por biometría óptica, independiente de la curvatura corneal.',
        trapToAvoid: 'Creer que todas las fórmulas dependen de la K corneal para ubicar la posición de la lente.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudio Multicéntrico de Melles et al. (Ophthalmology 2018): Evaluó más de 18,500 ojos y demostró que las fórmulas más modernas (Barrett Universal II y Hill-RBF) superaron estadísticamente a todas las fórmulas tradicionales de 3ª generación (SRK/T, Holladay 1, Hoffer Q), alcanzando el 80% de ojos dentro de ±0.50 D.',
      'Validación de la Fórmula Kane (Connell & Kane, JCRS 2020): En más de 10,000 ojos demostró la menor mediana de error absoluto (MedAE) global en ojos cortos, medios y largos.'
    ],
    landmarkTrials: [
      {
        name: 'Comparison of Modern IOL Power Calculation Formulas (Melles et al.)',
        year: '2018',
        conclusion: 'Las fórmulas de nueva generación (Barrett Universal II) y las basadas en inteligencia artificial mejoraron significativamente la precisión refractiva global frente a las fórmulas de vergencia tradicionales.',
        fellowshipRelevance: 'Consolidó el cambio de paradigma global hacia fórmulas de 4ª y 5ª generación en todos los centros quirúrgicos modernos.'
      }
    ],
    histopathologyAndGenetics: 'Física Óptica: La fórmula de vergencia paraxial clásica de Binkhorst-Colenbrander relaciona el índice de refracción de los medios oculares (córnea 1.376, humor acuoso 1.336, vítreo 1.336) con el vértice corneal. En ojos con Queratotomía Radial (RK), los cortes en el 90-95% del estroma corneal debilitan la arquitectura biomecánica, generando un aplanamiento central hipermetrópico progresivo con los años.',
    surgicalPearls: [
      'Al realizar capsulorrexis en ojo con LIO tórico o multifocal: Calibrar rigurosamente el diámetro a 5.25 mm para cubrir 360 grados del borde óptico anterior del LIO; una rexis demasiado amplia permite el tilting o rotación del LIO, alterando la posición efectiva de la lente predicha por la biometría.',
      'Si se produce una sorpresa refractiva post-LASIK de +2.50 D diagnosticada a las 4 semanas: La opción quirúrgica más limpia y predecible antes de que ocurra fibrosis capsular es el recambio del LIO (IOL Exchange) a través de la misma incisión de 2.4 mm mediante corte óptico del lente con tijeras de Pacman.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 62 años acude a su consulta para cirugía de catarata en ojo derecho. En la historia clínica figura que se sometió a una cirugía de LASIK miópico exitosa hace 15 años para corregir -6.00 D en ambos ojos, pero no conserva ningún reporte quirúrgico previo. La biometría óptica con SS-OCT registra una longitud axial de 26.20 mm y una queratometría estándar simulada (SimK) de 38.50 D. Si usted calcula el poder del LIO utilizando la fórmula tradicional SRK/T o Holladay 1, ¿qué complicación refractiva sufrirá el paciente, cuáles son las dos fuentes de error que explican este fenómeno y qué fórmula y software especializado debe emplear para evitarlo?',
        answer: '1) Complicación Refractiva Postoperatoria:\n   - El paciente sufrirá una grave e inaceptable SORPRESA HIPERMETRÓPICA POSTOPERATORIA (el paciente quedará hipermétrope con +2.00 a +3.00 D, perdiendo la visión lejana y cercana).\n2) Las Dos Fuentes Fisiopatológicas de Error:\n   a) Error del Instrumento / Queratometría: Los queratómetros estándar asumen un índice refractivo corneal ficticio de 1.3375 basado en una relación fija entre curvatura anterior y posterior. El LASIK miópico aplanó la cara anterior dejando intacta la posterior, por lo que el instrumento sobrestima el poder dióptrico de la córnea (cree que la córnea es más potente de lo que realmente es).\n   b) Error de la Fórmula de ELP: Las fórmulas de 3ª generación (SRK/T, Holladay 1) utilizan el valor de queratometría para estimar la Posición Efectiva de la Lente (ELP); al ingresar una K tan plana (38.50 D), la fórmula asume erróneamente que la cámara anterior es extremadamente estrecha y que el LIO quedará muy adelante -> calcula una lente de menor poder dióptrico del necesario.\n3) Conducta y Fórmulas Correctas:\n   - Utilizar la calculadora online de la ASCRS (American Society of Cataract and Refractive Surgery IOL Calculator) seleccionando la pestaña "Prior Myopic LASIK/PRK" sin datos históricos.\n   - Fórmula de Elección: Barrett True-K (No-History) o Kane post-refractive formula (o Haigis-L).\n   - Utilizar Queratometría Total (Total Keratometry - TK) que mide directamente la cara posterior de la córnea.\n   - Apuntar a una refracción diana ligeramente miópica (-0.50 D a -0.75 D) para proteger al paciente de cualquier hipermetropía residual.',
        trap: 'Aceptar el poder del LIO que arroja automáticamente el biómetro con fórmulas estándar sin activar el modo post-refractivo o no advertir al paciente del riesgo de ajuste residual.'
      }
    ]
  },

  // =========================================================================
  // 3. DINÁMICA DE FLUIDOS Y ULTRASONIDOS EN FACOEMULSIFICACIÓN
  // =========================================================================
  {
    id: 'deep-catarata-dinamica-fluidica-facoemulsificacion',
    title: 'Dinámica de Fluidos y Ultrasonidos en Facoemulsificación: Flujo, Vacío, Surge y Modulación de Energía',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre los principios físicos y bioingeniería de la facoemulsificación moderna: Bombas peristálticas vs venturi, flujo de aspiración, vacío, presión de infusión activa e intraocular (IOP objetivo), fenómeno de surge post-oclusión y mecanismos de compensación activa, física de la cavitación acústica y ultrasonidos longitudinales vs torsionales (Ozil) con modulación de pulsos y ráfagas (burst) para minimizar la pérdida de células endoteliales.',
    definitionAndEpidemiology: 'La dinámica de fluidos y la modulación ultrasónica son los fundamentos físicos que determinan la estabilidad de la cámara anterior, la eficiencia en la fragmentación del núcleo y la seguridad endotelial en la facoemulsificación. La optimización de estos parámetros ha reducido la tasa de rotura capsular y la pérdida de células endoteliales de >10-12% en las primeras décadas de la facoemulsificación a <3-5% en centros quirúrgicos contemporáneos.',
    anatomyAndPathophysiology: '1. Sistemas de Bomba de Fluidos:\n   • Bomba Peristáltica (basada en flujo): Rodillos mecánicos que comprimen un tubo flexible; el vacío se genera ÚNICAMENTE cuando la punta de faco se ocluye con material nuclear. Excelente control y seguridad en cámara anterior.\n   • Bomba Venturi (basada en vacío directo): El flujo de aire presurizado crea una presión negativa directa instantánea; genera vacío de inmediato sin necesidad de oclusión previa. Mayor capacidad de atracción y persecución de fragmentos (*followability*).\n2. El Fenómeno de Surge Post-Oclusión (Colapso de Cámara Anterior):\n   • Durante la oclusión de la punta de faco por un fragmento denso, la bomba continúa intentando aspirar, alcanzando el vacío máximo programado (ej. 450-500 mmHg) mientras el tubo flexible de aspiración se colapsa parcialmente.\n   • En el instante exacto en que el fragmento se rompe y la oclusión se libera súbitamente (*break of occlusion*), el vacío acumulado en la línea aspira violentamente un bolo de líquido de la cámara anterior a gran velocidad.\n   • Si la velocidad de infusión que entra al ojo es menor que este pico de aspiración brusco, la presión intraocular cae a cero -> la cámara anterior se colapsa súbitamente -> la cápsula posterior asciende impulsada por la presión vítrea y es succionada hacia la punta del faco -> ROTURA CAPSULAR POSTERIOR INMEDIATA.\n3. Ultrasonidos Longitudinales vs Torsionales (Ozil):\n   • Ultrasonido Longitudinal Clásico: Movimiento de vaivén hacia adelante y hacia atrás a 28-40 kHz; fragmenta por impacto directo mecánico y microcavitación acústica, pero produce "repulsión" del fragmento (efecto martillo neumático) que genera turbulencias y calor friccional en la incisión corneal.\n   • Ultrasonido Torsional (Ozil): Oscilación lateral rotacional de la punta a 32 kHz; fragmenta mediante cizallamiento continuo sin repeler el fragmento, manteniendo la oclusión con una reducción de hasta 60-70% en la energía disipada acumulada (CDE).',
    clinicalExamination: {
      biomicroscopy: 'Postoperatorio inmediato: Córnea transparente con incisión principal competente sin edema térmico ("wound burn"). Ausencia de pliegues en la membrana de Descemet ni estromales que denotarían sobreexposición a ultrasonidos.',
      fundus: 'Reflejo de fondo nítido con LIO centrado en el saco capsular.',
      specialSigns: '• Quemadura Térmica de la Incisión (*Wound Burn*): Blanqueamiento estromal blanquecino en la herida corneal principal con contracción tisular y astigmatismo irregular masivo postoperatorio por sobrecalentamiento friccional de la pieza de mano ante oclusión prolongada sin flujo de refrigeración.'
    },
    diagnosticWorkup: [
      {
        test: 'Monitoreo de Energía Disipada Acumulada (Cumulative Dissipated Energy - CDE)',
        findings: 'Cálculo algorítmico en la consola de facoemulsificación que mide el total de energía ultrasónica entregada al ojo (CDE = [% de potencia media x tiempo de ultrasonido en segundos] / 100). En cataratas estándar grado NO2-NO3 el CDE debe mantenerse <8-10; valores >20-30 se asocian a edema corneal prolongado.'
      },
      {
        test: 'Sistemas de Infusión Activa Dinámica (Centurion Active Sentry / Stellaris)',
        findings: 'Presurización activa de la cámara anterior mediante bolsas de compresión controladas por transductores de presión en la pieza de mano que detectan el colapso de presión en milisegundos y aumentan la infusión instantáneamente, eliminando el surge post-oclusión.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Quemadura Térmica de la Herida (Wound Burn) vs Incisión Incompetente Simple',
        distinction: 'El wound burn presenta blanqueamiento blanquecino acartonado de los bordes con apertura corneal en boca de pez que no sella con hidratación estromal y exige sutura con nylon 10-0.'
      },
      {
        condition: 'Desprendimiento de Membrana de Descemet por Inserción de Instrumental',
        distinction: 'Ocurre por ingresar con la punta del faco en un plano corneal falso; visualización de un flap corneal interno despegado con edema corneal suprayacente.'
      }
    ],
    steppedManagement: {
      medical: 'Parámetros Fluidos y Ajustes según Etapa Quirúrgica (Bomba Peristáltica):\n• Esculpido Central (Sculpting / Surco):\n  - Vacío bajo (50-80 mmHg), Flujo de aspiración moderado (18-25 mL/min), Botella a 70-80 cmH2O (o IOP objetivo de 40-50 mmHg).\n  - Ultrasonido longitudinal continuo o torsional moderado (40-60%).\n• Fractura y Cuadrantes (Quadrant Removal / Chipping):\n  - Vacío ALTO (350-450 mmHg) para empalar firmemente el fragmento nuclear y sujetarlo mecánicamente.\n  - Flujo de aspiración alto (35-42 mL/min) para atraer los fragmentos hacia la punta (*followability*).\n  - Modulación de energía en Pulsos (Pulse a 20-50 pps) o Micro-ráfagas (Burst con ciclos de trabajo del 30-50%) para enfriar la punta entre impactos y evitar quemaduras térmicas.\n• Aspiración de Corteza (Epinúcleo e I/A):\n  - Vacío moderado a alto (300-400 mmHg), Flujo de aspiración 25-30 mL/min, cero ultrasonidos.',
      surgical: 'Tácticas Quirúrgicas para Prevenir el Colapso de Cámara y Surge:\n• Usar tubos de aspiración rígidos de bajo cumplimiento (*low-compliance tubing*) con orificios internos de ventilación microbacteriana que limitan la despresurización súbita.\n• Si se emulsiona un núcleo duro grado 4 o 5: Utilizar viscoelásticos dispersivos (Condroitín sulfato) para revestir el endotelio y reaplicar cada 60-90 segundos; asegurar que la incisión corneal no quede excesivamente ajustada (la manga de silicona requiere un flujo de salida continuo para enfriar la aguja de titanio).\n• Ante sospecha de quemadura de la herida (blanqueamiento estromal): Detener inmediatamente los ultrasonidos, verificar que la irrigación esté abierta y colocar una sutura de nylon 10-0 radial al terminar la cirugía para restaurar la arquitectura geométrica corneal.'
    },
    clinicalApplicationPractical: 'Consejo Cardinal de Seguridad en Residencia: Si la cámara anterior fluctúa o se hace superficial durante la emulsificación de un fragmento, NUNCA elevar ciegamente el vacío; verificar primero la altura de la botella de infusión o la presión activa del sistema, descartar escape masivo de fluido a través de incisiones sobredimensionadas y asegurarse de que la manga de infusión de silicona no esté ocluida dentro del túnel corneal.\\n\\nModulación de Ultrasonidos en Modo Burst: En cataratas muy duras, utilizar el modo Burst permite clavar la punta en el núcleo con un disparo de ultrasonido único de milisegundos sin generar calor continuo, logrando un sellado perfecto para dividir el núcleo con el chopper.',
    highYieldPearl: 'El surge post-oclusión es la causa número uno de rotura capsular durante la facoemulsificación: Ocurre cuando se rompe una oclusión a alto vacío y la aspiración súbita colapsa la cámara anterior, atrayendo la cápsula posterior hacia la punta del faco.',
    keyDrugs: [
      {
        name: 'Solución Salina Balanceada Plus con Bicarbonato y Glutatión (BSS Plus)',
        dose: 'Infusión intraocular continua de 500 mL durante la cirugía de facoemulsificación.',
        warning: 'Mantiene el pH fisiológico, osmolaridad y los puentes disulfuro endoteliales; reduce el edema corneal frente a solución fisiológica simple.'
      },
      {
        name: 'Adrenalina Intracameral Libre de Conservantes (Epinefrina 1:1000 diluida 1:4 en BSS)',
        dose: '0.1 a 0.2 mL inyectados en cámara anterior al inicio de la cirugía.',
        warning: 'Mantiene una midriasis farmacológica estable durante todo el procedimiento y previene el síndrome de iris flácido (IFIS).'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Bomba Peristáltica vs Venturi',
        category: 'Pregunta Clásica',
        description: 'La bomba peristáltica solo genera vacío cuando la punta se ocluye físicamente con tejido; la bomba Venturi genera vacío instantáneamente en cuanto se pisa el pedal en posición 2, creando un flujo de atracción continuo sin necesidad de contacto.',
        trapToAvoid: 'Creer que una bomba peristáltica atrae fragmentos lejanos con alto vacío sin que haya flujo de aspiración.'
      },
      {
        title: 'Cavitación Acústica',
        category: 'Asociación Patognomónica',
        description: 'Mecanismo físico por el cual la aguja de ultrasonidos genera microburbujas de vapor a alta frecuencia que implosionan con presiones de miles de atmósferas y temperaturas extremas locales, fragmentando la corteza y núcleo cristaliniano.',
        trapToAvoid: 'Asumir que el ultrasonido solo corta por contacto físico directo como un bisturí.'
      },
      {
        title: 'Mecanismo del Wound Burn',
        category: 'Trampa de Tribunal',
        description: 'Se produce cuando no hay flujo de líquido refrigerante a través de la incisión corneal (por aspiración ocluida combinada con manga comprimida o túnel muy ajustado), elevando la temperatura de la punta de titanio a >60 °C en segundos y desnaturalizando el colágeno estromal.',
        trapToAvoid: 'Continuar pisando el pedal en posición 3 de ultrasonido continuo cuando la punta está ocluida y no hay flujo visible en la manga.'
      }
    ],
    fellowshipKeyPoints: [
      'Tecnología Torsional Ozil (Liu et al., JCRS 2007): Demostró una reducción del 45% en la energía disipada acumulada (CDE) y un 60% menos de turbulencias endoteliales comparado con el ultrasonido longitudinal clásico.',
      'Sistemas de Presurización Activa (Solomon et al., JCRS 2016): La infusión activa mantuvo una PIO objetivo constante y redujo la profundidad del surge post-oclusión a menos de 5 mmHg de fluctuación frente a los >30 mmHg de las botellas gravitacionales tradicionales.'
    ],
    landmarkTrials: [
      {
        name: 'Evaluation of Torsional Ultrasound in Cataract Surgery (JCRS)',
        year: '2007',
        conclusion: 'El ultrasonido torsional redujo significativamente la energía acústica total disipada y el tiempo quirúrgico de emulsificación, preservando la viabilidad endotelial.',
        fellowshipRelevance: 'Estableció el estándar biomecánico de las plataformas modernas de facoemulsificación.'
      }
    ],
    histopathologyAndGenetics: 'Biofísica Celular: El endotelio corneal humano es una monocapa de células hexagonales no proliferativas detenidas en fase G1 del ciclo celular. El estrés por cavitación acústica y los radicales libres hidroxilo producidos por los ultrasonidos inducen rotura de las uniones ocluyentes y apoptosis endotelial si el tiempo efectivo de ultrasonido excede los límites de seguridad.',
    surgicalPearls: [
      'Al realizar la incisión corneal principal: Calibrar un túnel corneal cuadrado o ligeramente rectangular (ancho de 2.2 a 2.4 mm con una longitud estromal de 1.5 a 1.75 mm en plano biplanar o triplanar); esto garantiza el sellado hidráulico autosellante sin fuga peritubo ni atrapamiento excesivo de la manga.',
      'Si se emulsiona el último fragmento nuclear remanente: Bajar el vacío a 250 mmHg y colocar la espátula de chopper detrás del fragmento como escudo protector entre la punta del faco y la cápsula posterior flotante.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Durante la remoción del último cuadrante nuclear en una cirugía de facoemulsificación en un paciente anciano, la punta del facoemulsificador queda completamente ocluida a 450 mmHg de vacío. Súbitamente, el fragmento se desintegra y se aspira hacia la línea, observándose un aplanamiento instantáneo y violento de la cámara anterior con ascenso de la cápsula posterior hacia la punta. ¿Cuál es el fenómeno físico que acaba de ocurrir, cuál es su mecanismo íntimo, qué complicación quirúrgica inminente precipita y qué tres ajustes en los parámetros de la máquina de faco previenen este escenario?',
        answer: '1) Fenómeno Físico:\n   - "Surge Post-Oclusión" (Colapso Dinámico de la Cámara Anterior por Ruptura Brusca de Oclusión).\n2) Mecanismo Íntimo:\n   - Durante la oclusión completa de la punta a alto vacío (450 mmHg), los tubos elásticos de la línea de aspiración se comprimen y almacenan una gran energía potencial negativa.\n   - Al desintegrarse el fragmento, la oclusión se libera de golpe (*break of occlusion*) y el vacío acumulado aspira súbitamente un volumen considerable de líquido de la cámara anterior a una velocidad mucho mayor que la velocidad con la que la botella de infusión puede reponerlo.\n   - La presión intraocular cae transitoriamente a cero o negativa, y el gradiente de presión vítrea empuja la cápsula posterior hacia adelante hacia el puerto de aspiración.\n3) Complicación Quirúrgica Inminente:\n   - Rotura Capsular Posterior (PCR) con aspiración y prolapso de humor vítreo hacia la cámara anterior.\n4) Tres Ajustes de Máquina para Prevenir el Surge:\n   - 1) Utilizar tubos de aspiración rígidos de bajo cumplimiento (*low-compliance tubing*) que no se deformen bajo alto vacío.\n   - 2) Emplear sistemas de facoemulsificación con Infusión Activa Dinámica (Centurion Active Sentry) o elevar la altura de la botella de infusión gravitacional para aumentar la presión de entrada.\n   - 3) Reducir el límite de vacío máximo programado (a 250-300 mmHg) y el flujo de aspiración al manipular el último fragmento nuclear cercano a la cápsula posterior.',
        trap: 'Creer que el surge se debe a una fuga de la incisión corneal o intentar compensarlo acelerando la aspiración con el pedal.'
      }
    ]
  },

  // =========================================================================
  // 4. TÉCNICAS DE FACOEMULSIFICACIÓN Y NUCLEOTOMÍA
  // =========================================================================
  {
    id: 'deep-catarata-tecnicas-faco-nucleotomia',
    title: 'Técnicas de Nucleotomía: Divide and Conquer, Stop & Chop, Phaco Chop Vertical/Horizontal y Cataratas Duras',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre las estrategias de fractura y emulsificación del núcleo cristaliniano: Técnica clásica de Divide y Vencerás (Gimbel), Stop & Chop (Koch), Chopping Horizontal (Nagahara) y Chopping Vertical (escuela de Alió/Chang), cinemática de la separación nuclear por cizallamiento sin estrés zonular, y adaptaciones quirúrgicas obligatorias para cataratas hipermaduras, brunescentes y negras.',
    definitionAndEpidemiology: 'La nucleotomía es el paso quirúrgico central de la facoemulsificación en el que el núcleo cristaliniano se fractura mecánicamente en fragmentos manipulables antes de su emulsificación. La selección de la técnica de nucleotomía correcta según la dureza del núcleo (clasificación LOCS III) permite reducir el tiempo de ultrasonido en más del 50-70% y minimizar el trauma a la zónula y al endotelio corneal.',
    anatomyAndPathophysiology: '1. Arquitectura Física del Núcleo y Epinúcleo:\n   • El cristalino se organiza en capas concéntricas con un gradiente de densidad creciente desde la corteza subcapsular externa hacia el núcleo fetal central.\n   • Entre el núcleo esclerótico denso y la corteza blanda subyace el epinúcleo, que actúa como un amortiguador anatómico protector contra la cápsula posterior.\n2. Principios Biomecánicos de la Nucleofractura:\n   • Esculpido (Sculpting): Remueve tejido por ablación ultrasónica continua; requiere mayor energía acústica pero no ejerce tracción sobre la zónula si el núcleo está estabilizado.\n   • Fractura por Compresión / Cizallamiento (Chopping): Utiliza la fuerza mecánica intrínseca de una segunda punta (chopper) para dividir el núcleo a lo largo de los planos de clivaje naturales de las fibras cristalinianas.\n3. Comparación entre Phaco Chop Horizontal y Vertical:\n   • Chopping Horizontal (Nagahara): La punta de faco se empala en el centro del núcleo con alto vacío; el chopper se desliza horizontalmente debajo de la capsulorrexis periférica rodeando el ecuador nuclear y se desplaza hacia la punta de faco dividiendo el núcleo de afuera hacia adentro. Excelente en núcleos de dureza blanda a intermedia (NO2-NO3).\n   • Chopping Vertical ("Quick Chop"): La punta de faco se empala profundamente en el núcleo central; el chopper vertical (afilado en la punta) se introduce en el núcleo inmediatamente adyacente a la punta del faco y se presiona hacia abajo mientras la punta levanta ligeramente el núcleo, fracturando la masa de adentro hacia afuera mediante fuerzas vectoriales opuestas. Técnica de elección en cataratas duras (NO4-NO5) y pupilas pequeñas porque no requiere maniobrar en el ecuador periférico invisible.',
    clinicalExamination: {
      biomicroscopy: 'Determinación precisa del grado LOCS III: Diferenciar una catarata blanda blanca intumescente (corteza licuefactada) de una catarata densa brunescente/negra con núcleo gigante de 9 mm que ocupa casi todo el saco capsular sin epinúcleo amortiguador.',
      fundus: 'Evaluación del reflejo rojo de fondo bajo midriasis para guiar la visualización de la profundidad de la hendidura central.',
      specialSigns: '• Signo del Puente Posterior Incompleto: Falla en la fractura de la placa nuclear posterior por esculpido o empalado insuficiente, manteniendo los dos heminúcleos unidos por detrás ("en libro abierto").'
    },
    diagnosticWorkup: [
      {
        test: 'Gradación Biomicroscópica de Dureza Nuclear',
        findings: 'Grado 1 (gris-blanco, blanda); Grado 2 (amarillo pálido, blanda-media); Grado 3 (ámbar-dorado, dureza media); Grado 4 (marrón-ámbar, dura); Grado 5/6 (brunescente-negra, dureza pétrea extrema).'
      },
      {
        test: 'Densintometría Scheimpflug Pentacam (PNS)',
        findings: 'Mapeo de la densidad óptica nuclear para programar la potencia del facoemulsificador antes de entrar al quirófano.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Catarata Brunescente Dura vs Catarata Cortical Madura',
        distinction: 'La cortical madura es blanca pero blanda con corteza licuefactada; la brunescente es densa, coriácea, de color caoba y ofrece gran resistencia al corte.'
      },
      {
        condition: 'Subluxación Zonular Coexistente (PEX)',
        distinction: 'Presencia de facodonesis o iridodonesis preoperatoria que desaconseja técnicas de esculpido vigoroso y obliga al uso de ganchos capsulares y choppers atraumáticos.'
      }
    ],
    steppedManagement: {
      medical: 'Estrategia Quirúrgica por Técnica de Nucleotomía:\n• 1. Divide and Conquer (Gimbel):\n  - Indicación: Técnica ideal de aprendizaje para residentes y cataratas de dureza intermedia.\n  - Pasos: Esculpir una hendidura longitudinal central profunda (profundidad de ~3-4 diámetros de punta de faco) hasta visualizar el reflejo rojo posterior; rotar el núcleo 90 grados y esculpir una segunda hendidura en cruz; colocar la punta del faco y la espátula en el fondo de las hendiduras y fracturar en 4 cuadrantes independientes empujando en direcciones opuestas.\n• 2. Stop & Chop (Koch):\n  - Esculpir un surco central único y fracturar el núcleo en dos mitades (Stop); a continuación, cambiar los parámetros a alto vacío y choppear cada heminúcleo con chopper (Chop).\n  - Combina la seguridad del surco inicial con la rapidez y ahorro de ultrasonidos del chop.\n• 3. Phaco Chop Puro (Vertical / Horizontal):\n  - No requiere esculpido previo; empalado directo con alto vacío en modo Burst y fractura inmediata.\n  - Reduce el CDE a menos de la mitad y no ejerce fuerzas de tracción sobre las zónulas.',
      surgical: 'Manejo Específico de Cataratas Negras / Brunescentes Extremas (NO5-NO6):\n• Incisión principal ligeramente más amplia (2.4 a 2.8 mm) para evitar el calentamiento estromal.\n• Capsulorrexis amplia de 5.5 a 6.0 mm teñida con Azul de Tripano (VisionBlue) para facilitar la exteriorización de fragmentos voluminosos.\n• Hidrodissección suave pero muy completa; si el núcleo es gigante, el epinúcleo está ausente, por lo que la punta del faco trabaja peligrosamente cerca de la cápsula posterior desnuda.\n• Técnica de Nucleotomía de Elección: "Pre-Chopping" mecánico con pinzas de Akahoshi o Phaco Chop vertical con chopper de punta afilada larga; fracturar el núcleo en 6 u 8 fragmentos pequeños (*micro-chopping*) para no sobrecargar el endotelio corneal.\n• Protección Endotelial Activa: Técnica del "Soft Shell" de Arshinoff (capa de viscoelástico dispersivo Viscoat contra el endotelio recubierta por una capa de viscoelástico cohesivo Healon sobre el núcleo).'
    },
    clinicalApplicationPractical: 'Consejo Práctico en Quirófano: Si al intentar fracturar un núcleo en Divide and Conquer los cuadrantes no se separan en el fondo, NUNCA fuerce los instrumentos lateralmente (eso desgarrará las zónulas); la causa es que el surco central no es lo suficientemente profundo. Profundice la zanja central con ultrasonidos hasta que el lecho posterior sea translúcido y permita ver con claridad la corteza posterior antes de volver a aplicar las fuerzas vectoriales opuestas.\\n\\nCuidado con el Chopping Horizontal en cataratas duras: En núcleos coriáceos, la punta del chopper puede resbalar sobre las fibras coriáceas anteriores; en estos casos, el chopping vertical penetra profundamente en el epicentro nuclear fracturando la placa posterior con mínima manipulación ecuatorial.',
    highYieldPearl: 'Phaco Chop reduce el tiempo de ultrasonido efectivo (CDE) en más del 50% comparado con Divide and Conquer y no genera estrés sobre las zónulas. En cataratas duras, la técnica del "Soft Shell" de Arshinoff es obligatoria para proteger el endotelio.',
    keyDrugs: [
      {
        name: 'Azul de Tripano 0.06% (VisionBlue)',
        dose: '0.1 a 0.2 mL instilados en cámara anterior bajo burbuja de aire durante 30 segundos.',
        warning: 'Tiñe selectivamente la membrana basal de la cápsula anterior de azul brillante sin lesionar el endotelio; indispensable en cataratas maduras para visualizar la capsulorrexis.'
      },
      {
        name: 'Técnica Soft-Shell (Viscoat + Provisc / Healon)',
        dose: 'Instilación secuencial: primero viscoelástico dispersivo contra la córnea, luego cohesivo en el centro.',
        warning: 'Mantiene una cúpula protectora estable frente a los ultrasonidos prolongados en cataratas hipermaduras.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Técnica de Fractura y Estrés Zonular',
        category: 'Asociación Patognomónica',
        description: 'La técnica de Phaco Chop ejerce fuerzas de compresión centrípetas dirigidas hacia el centro del núcleo, protegiendo las zónulas; el Divide and Conquer tradicional ejerce fuerzas centrífugas hacia la periferia capsular, transmitiendo mayor estrés zonular.',
        trapToAvoid: 'Indicar Divide and Conquer agresivo con surcos no completados en pacientes con pseudoexfoliación y zónulas débiles.'
      },
      {
        title: 'Signo de la Bandera Argentina',
        category: 'Trampa de Tribunal',
        description: 'En cataratas intumescentes con alta presión intralenticular, al perforar la cápsula anterior con el cistótomo se produce una extensión incontrolada espontánea del desgarro hacia ambos extremos de la periferia ecuatorial por la despresurización brusca, recordando las franjas de la bandera argentina.',
        trapToAvoid: 'Iniciar la capsulorrexis en una catarata intumescente sin teñir con azul de tripano ni despresurizar el centro con aguja aspirativa.'
      },
      {
        title: 'Cavitación en Phaco Chop Vertical',
        category: 'Pregunta Clásica',
        description: 'En el chopping vertical, la fuerza que fractura el núcleo es el cizallamiento inducido por el desplazamiento vertical en planos opuestos entre el chopper que desciende y la punta del faco que tracciona hacia arriba, quebrando el núcleo a lo largo de las láminas naturales.',
        trapToAvoid: 'Intentar empujar horizontalmente el chopper vertical como si fuera un chopper de Nagahara.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudios Comparativos de Wong et al. (JCRS 2009): Demostraron que el Phaco Chop redujo el tiempo de ultrasonido en un 55% y la pérdida celular endotelial a los 3 meses fue significativamente menor en comparación con Divide and Conquer en núcleos de grado moderado a duro.',
      'Técnica del Soft-Shell de Steve Arshinoff (JCRS 1999): Creó el estándar de oro viscoquirúrgico de doble compartimento adoptado en todo el mundo para cirugía de cataratas complejas.'
    ],
    landmarkTrials: [
      {
        name: 'The Soft-Shell Technique in Cataract Surgery (Arshinoff)',
        year: '1999',
        conclusion: 'El uso combinado de viscoelásticos dispersivos y cohesivos simultáneos maximizó la protección del endotelio corneal y la estabilidad del espacio intraocular.',
        fellowshipRelevance: 'Principio viscoquirúrgico universalmente enseñado en residencias y fellowships quirúrgicos.'
      }
    ],
    histopathologyAndGenetics: 'Física de Materiales Lenticulares: El núcleo cristaliniano humano envejece perdiendo elasticidad plástica por deshidratación y compactación de láminas de cristalinas insolubles en agua (WI-fraction). A diferencia de los polímeros homogéneos, el cristalino maduro presenta planos de anisotropía radial con suturas en "Y" anterior y posterior invertida que actúan como guías de propagación de fractura mecánica durante el chopping.',
    surgicalPearls: [
      'Si se desgarra la capsulorrexis durante la nucleotomía: Detener inmediatamente la cirugía; NO rotar el núcleo mecánicamente; inyectar viscoelástico dispersivo bajo el fragmento para estabilizarlo y convertir la técnica a una aspiración lenta a bajo vacío con botella baja para no convertir el desgarro anterior en una rotura capsular posterior.',
      'Al realizar chopping en catarata dura: Asegurarse de que la punta del faco ingrese al menos 2/3 del grosor nuclear antes de aplicar el chopper; si el empalamiento es superficial, solo se arrancará un fragmento superficial anterior sin lograr la fractura completa de la placa posterior.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Se encuentra realizando una facoemulsificación en una catarata dura grado LOCS NO5 en un ojo con cámara anterior poco profunda. Tras esculpir las dos primeras ramas de una técnica Divide and Conquer, usted intenta fracturar el núcleo colocando los instrumentos en el fondo del surco, pero los dos heminúcleos se resisten a separarse por detrás y la zónula se bambolea peligrosamente. ¿Cuál es el error técnico cometido, cuál es el riesgo de insistir en empujar con fuerza lateral y cuál es la maniobra quirúrgica correcta para resolver la situación con seguridad?',
        answer: '1) Error Técnico Cometido:\n   - La hendidura o surco central no se profundizó lo suficiente hacia la placa nuclear posterior.\n   - En cataratas duras, la placa nuclear posterior es coriácea y gruesa; si queda un puente de tejido nuclear de más de 1 mm uniendo los fragmentos, la fuerza mecánica de apertura solo flexiona el tejido sin romperlo.\n2) Riesgo de Insistir Empujando con Fuerza Lateral:\n   - Transmisión masiva de fuerzas de tensión de cizallamiento directamente hacia el aparato zonular de 360 grados, pudiendo causar diálisis zonular masiva, luxación del núcleo hacia la cavidad vítrea y rotura de la cápsula posterior.\n3) Maniobra Quirúrgica Correcta para Resolverlo:\n   - Suspender inmediatamente la tracción mecánica lateral con los instrumentos.\n   - Inyectar viscoelástico dispersivo para proteger el endotelio y el saco.\n   - Volver a entrar con la punta del faco y, bajo visión directa del fondo del surco con el reflejo rojo de fondo, esculpir cuidadosamente la base de la zanja central hasta adelgazar la placa posterior hasta un espesor translúcido membranoso (<0.5 mm).\n   - Una vez alcanzada la profundidad adecuada, colocar las puntas de los dos instrumentos en el fondo absoluto de la zanja bien apoyadas en lados opuestos y aplicar una separación suave y corta en planos divergentes; el núcleo se separará limpiamente sin ninguna resistencia zonular.',
        trap: 'Aumentar la fuerza de empuje con los instrumentos contra un puente nuclear duro no adelgazado, desgarrando la zónula.'
      }
    ]
  },

  // =========================================================================
  // 5. ROTURA CAPSULAR POSTERIOR (PCR) Y VITRECTOMÍA ANTERIOR BIMANUAL
  // =========================================================================
  {
    id: 'deep-catarata-complicaciones-rotura-capsular-pcr',
    title: 'Rotura Capsular Posterior (PCR), Pérdida de Vítreo y Vitrectomía Anterior Bimanual Pars Plana',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre la complicación intraoperatoria más temida de la cirugía de catarata: Rotura Capsular Posterior (PCR) con o sin prolapso vítreo, protocolo de emergencia "No retirar la pieza de mano", vitrectomía anterior bimanual pars plana vs limbar con tinción con triamcinolona libre de conservantes, preservación del soporte capsular anterior, captura óptica de LIO de 3 piezas en sulcus y prevención del edema macular de Irvine-Gass y endoftalmitis.',
    definitionAndEpidemiology: 'La Rotura Capsular Posterior (PCR - *Posterior Capsule Rupture*) es la principal complicación quirúrgica intraoperatoria de la facoemulsificación, con una incidencia reportada de 1.0% a 2.5% en cirujanos experimentados y de 3.5% a 6.0% en curvas de aprendizaje de programas de residencia. La pérdida de vítreo asociada eleva exponencialmente el riesgo de desprendimiento de retina regmatógeno (hasta 4-5 veces), edema macular quístico (síndrome de Irvine-Gass) y endoftalmitis infecciosa postoperatoria.',
    anatomyAndPathophysiology: '1. Factores Predisponentes Anatómicos y Quirúrgicos:\n   • Cápsula posterior extremadamente delgada (espesor fisiológico central de solo 4 a 9 µm, la membrana basal más fina del cuerpo humano).\n   • Pseudoexfoliación (PEX), cámaras anteriores poco profundas o hiperprofundas en miopes magnos con síndrome de bloqueo de infusión inversa, cataratas polares posteriores congénitas y pupilas mióticas no dilatadas.\n2. Mecánica de la Pérdida de Vítreo:\n   • Defecto en la cápsula posterior -> el gradiente de presión intraocular o la aspiración inadvertida arrastra el humor vítreo formado hacia la cámara anterior a través de la brecha capsular.\n   • Las mechas vítreas transparentes se incarceran en las incisiones corneales, generando tracción anteroposterior continua sobre la base del vítreo periférico en la ora serrata, predisponiendo a desgarros retinianos gigantes en herradura.\n3. Secuelas si el Vítreo Incarcerado no se Reseca Exhaustivamente:\n   • Pupila discórica "en gota" traccionada hacia la herida.\n   • Incompetencia del sellado corneal con escape de humor acuoso (Seidel positivo tardío) y fístulas que permiten la entrada de bacterias de la flora conjuntival hacia el ojo (endoftalmitis).\n   • Tracción vitreorretiniana que desencadena el síndrome de Irvine-Gass.',
    clinicalExamination: {
      biomicroscopy: 'Postoperatorio precoz: Córnea con edema estromal localizado o difuso, Tyndall celular exagerado en cámara anterior con restos corticales o nucleares retenidos. Pupila no circular "en lágrima" traccionada hacia la incisión principal o paracentesis por mechas vítreas incarceradas. Presencia de mecha vítrea blanquecina exteriorizada en la herida corneal que tiñe con fluoresceína.',
      fundus: 'Edema de papila o edema macular en pétalos de flor visible con lente de 90D/78D a las 4-6 semanas (Irvine-Gass). Presencia de fragmentos nucleares sobre la retina inferior en casos de luxación inadvertida a la cavidad vítrea.',
      specialSigns: '• Signo del Movimiento Nuclear Brusco Intraoperatorio: Profundización súbita o asimétrica de la cámara anterior con inclinación o alejamiento del fragmento nuclear (*tilt*).\n• Signo de la Pupila que se Deforma o Miocisa durante la aspiración por aspiración de vítreo formed.'
    },
    diagnosticWorkup: [
      {
        test: 'Tinción Intracameral con Acetónido de Triamcinolona Libre de Conservantes',
        findings: 'ESTÁNDAR DE ORO INTRAOPERATORIO: Inyección de 0.1 mL de triamcinolona micronizada diluida (1:10 en BSS); los cristales de corticoide se adhieren selectivamente a las fibrillas de colágeno vítreas transparentes, volviéndolas de color blanco brillante opaco de fácil visualización bajo el microscopio quirúrgico.'
      },
      {
        test: 'Test de Seidel con Fluoresceína al 2%',
        findings: 'Examen obligatorio de todas las incisiones al concluir la cirugía para confirmar ausencia de mechas vítreas incarceradas que filtren fluido acuoso.'
      },
      {
        test: 'SD-OCT Macular a las 4-6 Semanas',
        findings: 'Tamizaje mandatorio de edema macular cistoide de Irvine-Gass en todos los ojos que sufrieron PCR y vitrectomía anterior.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Diálisis Zonular Aislada sin Rotura Capsular',
        distinction: 'El saco capsular y la cápsula posterior están íntegros pero se desprenden del ecuador por desinserción de las fibras zonulares; se trata con anillo de tensión capsular (CTR).'
      },
      {
        condition: 'Desprendimiento de Membrana de Descemet',
        distinction: 'Lámina transparente en cámara anterior que proviene de la córnea y no del cristalino ni de la cápsula posterior.'
      }
    ],
    steppedManagement: {
      medical: 'Protocolo de Emergencia Inmediato ante PCR ("REGLA DE ORO: NO RETIRAR LA PUNTA DEL FACO"):\n• Paso 1: Congelar el pie en el pedal (posición 1 de irrigación continua). NUNCA retirar la pieza de mano bruscamente de la cámara anterior.\n  - Justificación: Retirar el instrumento despresuriza de golpe el ojo, la cámara anterior se colapsa y la presión vítrea posterior prolapsa una masa gigante de vítreo hacia adelante, agrandando catastróficamente el desgarro capsular.\n• Paso 2: Con la mano izquierda, introducir viscoelástico dispersivo denso (Viscoat) a través de la paracentesis lateral para presurizar y estabilizar la cámara anterior y sellar el defecto capsular.\n• Paso 3: Retirar suavemente la punta del faco ÚNICAMENTE cuando la cámara esté completamente visco-tamponada.\n• Manejo Médico Postoperatorio Intensivo:\n  - Combinación sinérgica de Corticoide tópico de alta potencia (Prednisolona acetato 1% c/4-6h) + AINE tópico (Nepafenaco 0.3% o Ketorolaco 0.5% diario) durante un mínimo de 8 a 12 semanas para prevenir el edema macular de Irvine-Gass.\n  - Ciclopléjico tópico (Ciclopentolato 1% BID) y antibiótico tópico profiláctico.',
      surgical: 'Técnica de Vitrectomía Anterior Bimanual (Abordaje de Elección):\n• SEPARACIÓN OBLIGATORIA DE INFUSIÓN Y CORTE (Bimanual):\n  - NUNCA usar vitrectomía coaxial por la incisión principal (la infusión empuja el vítreo hacia la incisión creando un círculo vicioso de tracción).\n  - Incisión de irrigación: Cánula de BSS a través de una paracentesis lateral corneal a baja presión.\n  - Puerto de corte/aspiración: Vitreófago de 23G o 25G introducido por una paracentesis corneal separada o, PREFERENTEMENTE, por vía transconjuntival PARS PLANA a 3.5 mm del limbo.\n• Parámetros del Vitreófago: Tasa de corte máxima (Cut Rate ≥2500 a 5000 cpm para no traccionar las fibras vítreas), bajo vacío (100-150 mmHg) y botella baja (40-50 cmH2O).\n• Si quedan Fragmentos Nucleares Remanentes:\n  - Si son blandos o pequeños: Se pueden viscodiseccionar hacia la cámara anterior sobre el soporte de viscoelástico y emulsificarlos con cuidado o extraerlos manualmente.\n  - SI UN FRAGMENTO NUCLEAR DURO CAE AL VÍTREO POSTERIOR ("Dropped Nucleus"): NUNCA intentar perseguir o pescar el núcleo en la profundidad de la cavidad vítrea con el vitreófago o la punta del faco (causará desgarros retinianos gigantes masivos). Concluir la vitrectomía anterior, limpiar la herida, implantar el LIO si hay soporte o dejar afáquico y derivar a un cirujano vitreorretiniano para vitrectomía pars plana formal con facofragmentación en 1 a 2 semanas.\n• Selección y Fijación del Lente Intraocular (LIO):\n  - Si la capsulorrexis anterior está intacta y hay soporte periférico adecuado: Implantar LIO de 3 piezas en el sulcus ciliar (reducir el poder dióptrico en 0.5 D a 1.0 D respecto a la fórmula capsular) con captura óptica a través de la rexis anterior.\n  - Si no hay soporte capsular: LIO de fijación escleral sin suturas (técnica de Yamane con LIO de 3 piezas) o LIO de cámara anterior de asas abiertas Z-flex con iridotomía periférica profiláctica.'
    },
    clinicalApplicationPractical: 'Conducta Clave ante Sospecha de Vítreo en la Herida: Al terminar la cirugía, pasar una esponja de celulosa estéril (Weck-cel) sobre el labio de las incisiones y paracentesis; si la pupila se estira o se deforma al tirar de la esponja, hay vítreo incarcerado. Inyectar triamcinolona para teñir las mechas y completar la vitrectomía hasta que la pupila esté redonda, reactiva y el Seidel sea estrictamente negativo.\\n\\nCuidado con la incisión principal: Si la incisión principal de faco de 2.4 mm se deformó por maniobras de conversión, colocar una sutura de nylon 10-0 con nudo enterrado; no confiar en la hidratación estromal simple en ojos que sufrieron vitrectomía anterior.',
    highYieldPearl: 'Ante una rotura capsular posterior: NUNCA retirar la punta del faco sin antes inyectar viscoelástico dispersivo por la paracentesis. La vitrectomía anterior DEBE ser bimanual (preferiblemente pars plana) a corte alto (≥3000 cpm) y baja aspiración.',
    keyDrugs: [
      {
        name: 'Triamcinolona Micronizada Libre de Conservantes (Triesence / Trigon diluido)',
        dose: '0.1 mL de suspensión al 1% instilada en cámara anterior.',
        warning: 'Tiñe las fibras vítreas de color blanco tiza permitiendo confirmar la vitrectomía completa; aspirar el exceso para evitar picos hipertensivos postoperatorios.'
      },
      {
        name: 'Acetilcolina Intracameral (Miochol-E)',
        dose: '0.5 a 1.0 mL instilados en cámara anterior al finalizar la vitrectomía.',
        warning: 'Induce miosis farmacológica inmediata; permite confirmar que la pupila quede perfectamente circular y libre de tracciones vítreas residuales.'
      },
      {
        name: 'Nepafenaco 0.3% o Ketorolaco 0.5% Tópico',
        dose: '1 gota al día (nepafenaco) o cada 6-8 horas (ketorolaco) durante 12 semanas postoperatorias.',
        warning: 'Prevención mandatoria del edema macular quístico de Irvine-Gass en ojos con vitrectomía anterior.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'La Regla de Oro ante Rotura Capsular',
        category: 'Trampa de Tribunal',
        description: 'La peor maniobra que puede cometer un cirujano ante la sospecha de rotura capsular es retirar la punta del faco bruscamente. Eso despresuriza el ojo, colapsa la cámara y succiona vítreo masivo hacia adelante, transformando una pequeña fisura en un desastre quirúrgico.',
        trapToAvoid: 'Retirar el facoemulsificador antes de introducir viscoelástico dispersivo denso por la paracentesis.'
      },
      {
        title: 'Ajuste de Poder de LIO en Sulcus',
        category: 'Cifra Clave de Corte',
        description: 'Al implantar un LIO de 3 piezas en el sulcus ciliar (más anterior que el saco capsular), se debe REDUCIR el poder dióptrico: -0.50 D si el poder calculado para saco era de 18.0 a 24.0 D; -1.00 D si era >24.0 D.',
        trapToAvoid: 'Implantar un LIO monobloque acrílico de una sola pieza en el sulcus (las asas gruesas causan síndrome UGH: uveítis-glaucoma-hifema).'
      },
      {
        title: 'Parámetros del Vitreófago Anterior',
        category: 'Pregunta Clásica',
        description: 'Para evitar tracción sobre la retina periférica, la vitrectomía anterior requiere: Tasa de corte ALTA (Cut Rate ≥3000-5000 cpm), vacío BAJO (100-150 mmHg) y botella baja. El corte alto fragmenta las hebras de colágeno antes de que se desplacen.',
        trapToAvoid: 'Subir el vacío y bajar el corte al realizar vitrectomía anterior creyendo que se aspira más rápido.'
      }
    ],
    fellowshipKeyPoints: [
      'Encuesta del Royal College of Ophthalmologists (NOCOR Study): Demostró que la vitrectomía anterior bimanual pars plana reduce en un 60% la incidencia de edema macular cistoide y desprendimiento de retina secundario en comparación con la vitrectomía limbar coaxial anterior.',
      'Prevención de Endoftalmitis post-PCR (ESCRS): En ojos con rotura capsular y vitrectomía anterior, el riesgo de endoftalmitis aumenta hasta 8 veces; la inyección de Cefuroxima (1 mg/0.1 mL) o Moxifloxacino intracameral al cierre y la hermeticidad con suturas son mandatorias.'
    ],
    landmarkTrials: [
      {
        name: 'ESCRS Guidelines for Prevention and Management of Posterior Capsular Rupture',
        year: '2018',
        conclusion: 'Consenso internacional que normalizó la vitrectomía anterior bimanual con tinción con triamcinolona y el ajuste de LIO de 3 piezas en sulcus con captura óptica.',
        fellowshipRelevance: 'Guía clínica estándar exigida en exámenes de certificación de la ESCRS y del International Council of Ophthalmology (ICO).'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Humor vítreo prolapsado compuesto por una red tridimensional de fibrillas de colágeno tipo II interconectadas por cadenas de ácido hialurónico hidratado. Cuando el vitreófago tracciona una sola hebra sin cortarla, la fuerza mecánica se transmite íntegramente a lo largo de las macromoléculas de colágeno hasta la base del vítreo en la ora serrata, desprendiendo mecánicamente el epitelio retiniano periférico.',
    surgicalPearls: [
      'Al realizar captura óptica de un LIO de 3 piezas: Colocar las hápticas en el sulcus ciliar y, con una espátula o manipulador de Kuglen, empujar la óptica de 6 mm suavemente hacia atrás a través de la capsulorrexis anterior intacta de 5 mm; la cápsula anterior "abraza" la óptica, manteniéndola perfectamente centrada y aislada de los vasos del iris.',
      'Si sospecha caída de fragmento nuclear al vítreo: NUNCA intente atraparlo con la punta del faco en la cavidad vítrea profunda. Aspire la corteza residual que esté en cámara anterior, realice una vitrectomía anterior exhaustiva teñida con triamcinolona, cierre herméticamente con suturas y derive con tranquilidad a retina para vitrectomía pars plana diferida.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Durante la aspiración de la corteza lenticular residual en hora 6 con la cánula de irrigación/aspiración tras haber retirado el núcleo, usted observa que la cámara anterior se profundiza bruscamente, el reflejo rojo se altera y una lámina redondeada con borde libre se hace visible en el cuadrante inferior, apareciendo una mecha transparente que hace que la pupila se distorsione hacia la incisión. ¿Cuál es el diagnóstico, cuáles son los tres pasos inmediatos obligatorios que debe ejecutar en los siguientes 10 segundos y qué técnica de vitrectomía anterior debe emplear?',
        answer: '1) Diagnóstico Intraoperatorio:\n   - Rotura Capsular Posterior (PCR) con aspiración y prolapso de humor vítreo hacia la cámara anterior e incisión corneal.\n2) Tres Pasos Inmediatos Obligatorios:\n   - Paso 1 (Pedal): Mantener la infusión y NO RETIRAR la cánula de I/A bruscamente de la cámara anterior para evitar el colapso ocular súbito y la tracción vítrea masiva.\n   - Paso 2 (Viscoelástico): Introducir una cánula de viscoelástico dispersivo denso (Viscoat) por la paracentesis lateral y rellenar la cámara anterior para tamponar la brecha capsular y empujar el vítreo hacia atrás.\n   - Paso 3 (Retiro): Retirar la pieza de I/A de la incisión solo cuando la cámara esté presurizada y llena de viscoelástico.\n3) Técnica de Vitrectomía Anterior Indicada:\n   - Vitrectomía Anterior BIMANUAL (Separar irrigación de corte):\n     * Irrigación: Por paracentesis lateral con cánula de BSS a bajo flujo.\n     * Corte/Aspiración: Con vitreófago de 23G/25G introducido por pars plana (3.5 mm del limbo) o paracentesis separada a alta tasa de corte (Cut rate ≥3000-5000 cpm) y bajo vacío (100-150 mmHg).\n     * Tinción con Triamcinolona libre de conservantes para identificar todas las mechas de colágeno vítreo.\n     * Constatar pupila redonda reactiva y ausencia de vítreo en incisiones con esponja de celulosa antes de considerar el implante de LIO de 3 piezas en sulcus con captura óptica.',
        trap: 'Retirar la pieza de mano bruscamente del ojo al asustarse por la rotura, o usar vitrectomía coaxial por la incisión principal empujando el vítreo hacia afuera con la infusión.'
      }
    ]
  },

  // =========================================================================
  // 6. SUBLUXACIÓN ZONULAR, PSEUDOEXFOLIACIÓN (PEX) Y TÉCNICA DE YAMANE
  // =========================================================================
  {
    id: 'deep-catarata-subluxacion-cristalino-yamane',
    title: 'Subluxación Zonular, Síndrome de Pseudoexfoliación (PEX), Anillos de Tensión Capsular (CTR) y Técnica de Yamane',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre el manejo de la debilidad zonular extrema: Síndrome de Pseudoexfoliación capsular (mutación LOXL1, material fibrilar extracelular, mala midriasis e hipotonía zonular), Marfan y traumatismos, uso de retractores capsulares y Anillos de Tensión Capsular (CTR, Cionni, Ahmed Capsular Tension Segment), y la técnica de fijación escleral de LIO sin suturas con agujas de pared delgada inventada por Shin Yamane (Flanged Intrascleral Haptic Fixation).',
    definitionAndEpidemiology: 'La subluxación del cristalino y la inestabilidad zonular complican del 2% al 5% de las cirugías de catarata en centros generales y hasta más del 15% en regiones con alta prevalencia de Pseudoexfoliación (PEX en Escandinavia, Cuenca Mediterránea y poblaciones andinas). Las causas hereditarias más frecuentes son el Síndrome de Marfan (mutación FBN1, subluxación típicamente superotemporal) y la Homocistinuria (mutación CBS, subluxación inferonasal).',
    anatomyAndPathophysiology: '1. Fisiopatología de la Pseudoexfoliación Capsular (PEX):\n   • Elastosis sistémica mediada por variantes en el gen de la lisil oxidasa-like 1 (LOXL1).\n   • Acumulación y agregación progresiva de material fibrilar fibrilar blanco-grisáceo amiloide en la cápsula anterior del cristalino, zónulas de Zinn, iris y malla trabecular.\n   • El material se deposita en las inserciones zonulares tanto en el cuerpo ciliar como en el cristalino, induciendo fragmentación zonular enzimática, debilidad elástica extrema y diálisis espontánea o inducida durante la capsulorrexis.\n2. Dinámica del Anillo de Tensión Capsular (CTR - Capsular Tension Ring):\n   • Dispositivo de PMMA flexible que se expande contra el ecuador capsular de 360 grados.\n   • Redistribuye las fuerzas de tensión desde las áreas zonulares intactas sanas hacia los cuadrantes con debilidad o diálisis zonular (útil en diálisis <3 a 4 horas de reloj o <90-120 grados).\n   • Si la diálisis supera los 120-150 grados o hay pérdida masiva de soporte, el CTR convencional no es suficiente y se requiere un anillo suturado a esclera (Cionni CTR) o un segmento capsular de Ahmed fijado con sutura de PTFE (Gore-Tex) o Prolene 8-0.\n3. Principios Biomecánicos de la Técnica de Yamane:\n   • Fijación intrascleral de las hápticas de un LIO de 3 piezas sin suturas mediante túneles esclerales angulados y confección de rebordes o bridas terminales (*flanges*) con cauterio de baja temperatura.\n   • Elimina por completo las complicaciones de las suturas esclerales tradicionales (erosión conjuntival tardía, rotura de suturas de Prolene 10-0 a los 5-10 años con luxación recurrente del LIO y endoftalmitis).',
    clinicalExamination: {
      biomicroscopy: 'En lámpara de hendidura con pupila dilatada:\n- En PEX: Patrón en 3 zonas sobre la cápsula anterior (disco central translúcido, zona intermedia libre por frotamiento del esfínter de iris y banda periférica granular estriada); depósitos blanquecinos "en copos de nieve" en el borde pupilar; transiluminación del iris con atrofia del esfínter ("moth-eaten"); mala dilatación pupilar farmacológica (rigidez fibrótica del estroma iridiano).\n- Signos de Inestabilidad Zonular: Iridodonesis (temblor del iris) y Facodonesis (temblor del cristalino al mover los ojos); asimetría de la profundidad de la cámara anterior; prolapso de vítreo hacia la cámara anterior a través de una brecha zonular.',
      fundus: 'Inspección de la periferia para descartar roturas retinianas traccionales asociadas.',
      specialSigns: '• Subluxación superotemporal del cristalino en Síndrome de Marfan.\n• Subluxación inferonasal del cristalino en Homocistinuria.\n• Signo del Desplazamiento Capsular en la Capsulorrexis (la cápsula anterior se arruga y se desplaza en bloque al clavar el cistótomo por falta de contra-tensión zonular).'
    },
    diagnosticWorkup: [
      {
        test: 'Biomicroscopía Ultrasónica de Alta Frecuencia (UBM - 50 MHz)',
        findings: 'Visualización directa de las fibras zonulares retroiridianas, medición micrométrica del ángulo de inclinación del cristalino (tilt) y cuantificación de la extensión horaria de la diálisis zonular oculta tras el iris.'
      },
      {
        test: 'Gonioscopía con Lente de 4 Espejos',
        findings: 'Presencia de hiperpigmentación trabecular densa irregular ("Línea de Sampaolesi": banda de pigmento localizada por delante de la línea de Schwalbe) y depósitos de material pseudoexfoliativo en el ángulo.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Síndrome de Dispersión Pigmentaria (PDS)',
        distinction: 'Afecta a varones jóvenes miopes; huso de Krukenberg endotelial vertical denso, defectos de transiluminación en la media periferia del iris por roce con zónulas, pero zónulas intactas sin PEX.'
      },
      {
        condition: 'Subluxación Postraumática Aislada',
        distinction: 'Antecedente de contusión ocular con retroceso angular (recessión angular) y diálisis traumática localizada sin material de pseudoexfoliación.'
      }
    ],
    steppedManagement: {
      medical: 'Evaluación y Manejo Preoperatorio en PEX:\n• Dilatación Pupilar Agresiva: Combinación tópica de Ciclopentolato 1% + Fenilefrina 10% + AINE tópico cada 15 min por 3 dosis; en quirófano: Adrenalina intracameral libre de conservantes diluida en BSS.\n• Control tensional: El síndrome de PEX se asocia a Glaucoma Pseudoexfoliativo (agresivo, con picos de PIO muy elevados y fluctuaciones severas); optimizar hipotensores tópicos antes de la cirugía.',
      surgical: 'Estrategia Quirúrgica Paso a Paso en Inestabilidad Zonular:\n• 1. Confección de la Capsulorrexis con Zónulas Débiles:\n  - Utilizar tijeras de micro-Vannas o cistótomo muy afilado para punzar la cápsula sin empujar el cristalino hacia atrás.\n  - Si el cristalino se mueve, estabilizar el saco capsular colocando 2 a 4 Retractores Capsulares de Iris flexibles de nylon o ganchos de Chang a través de paracentesis dedicadas para suspender el reborde de la rexis durante la facoemulsificación.\n• 2. Cuándo y Cómo Insertar el Anillo de Tensión Capsular (CTR):\n  - REGLA DE ORO: NO insertar el CTR antes de la hidrodissección o en fases precoces si no es indispensable, ya que el anillo atrapa las fibras corticales contra el ecuador dificultando enormemente su aspiración posterior.\n  - Momento ideal: Tras aspirar la mayor cantidad posible de corteza o cuando el núcleo ya esté fracturado.\n  - Si la zónula falla en >120-150 grados: Suturar un Segmento de Ahmed o anillo de Cionni a la esclera con sutura Gore-Tex o Prolene 8-0 a 2 mm del limbo.\n• 3. Técnica de Yamane (Fijación Escleral sin Suturas) ante Pérdida Total de Soporte Capsular:\n  - Selección de LIO: LIO de 3 piezas con hápticas de PVDF (fluoruro de polivinilideno, ej. CT Lucia o PN6A; las hápticas de PMMA ordinarias se quiebran al manipularlas).\n  - Pasos Técnicos Fundamentales:\n    1) Marcar dos puntos esclerales diametralmente opuestos a 180 grados, exactamente a 2.0 mm por detrás del limbo esclerocorneal.\n    2) Tunelización Escleral: Insertar una aguja de 30G de pared delgada (thin-wall needle) en ángulo oblicuo de 20 grados respecto a la superficie escleral, creando un túnel intraescleral de 1.5 a 2.0 mm antes de penetrar al vítreo anterior.\n    3) Canulación de la Háptica Guía: Introducir la háptica anterior del LIO dentro del lumen de la primera aguja.\n    4) Segunda Tunelización: Realizar el segundo túnel a 180 grados y canular la háptica posterior.\n    5) Exteriorización y Flange: Extraer ambas agujas simultáneamente exteriorizando los extremos de las hápticas sobre la conjuntiva.\n    6) Formación de la Brida (Flange): Acercar la punta de un cauterio oftálmico de baja temperatura a 1 mm del extremo de la háptica (sin tocarla directamente); el calor funde el material formando un bulbo o reborde redondeado de 0.3 mm.\n    7) Reintroducción: Empujar las bridas hacia el interior de los túneles esclerales, donde quedan firmemente ancladas sin suturas, garantizando un centrado perfecto y sin inclinación (*tilt*).'
    },
    clinicalApplicationPractical: `Consejo Crítico en Pseudoexfoliación: En todo paciente con PEX, realizar gonioscopía preoperatoria y buscar facodonesis en la lámpara de hendidura moviendo el haz mientras el paciente fija al frente y parpadea; advertir siempre en el consentimiento informado sobre la posibilidad de requerir dispositivos de soporte capsular (CTR) o cambio de plan a fijación escleral.

Cuidado con las hápticas en la técnica de Yamane: NUNCA usar lentes de 1 sola pieza acrílica monobloque (sus asas gruesas no entran en agujas y causan hifema masivo); utilizar exclusivamente LIOs de 3 piezas con hápticas resistentes a la deformación térmica (PVDF).`,
    highYieldPearl: 'En subluxación leve (<90-120°), el Anillo de Tensión Capsular (CTR) expande el saco redistribuyendo fuerzas. Sin soporte capsular, la técnica de Yamane fija un LIO de 3 piezas en túneles esclerales a 2 mm del limbo mediante bridas bulbosas (flanges) con cauterio, sin suturas.',
    keyDrugs: [
      {
        name: 'Adrenalina Intracameral 1:1000 sin conservantes (diluida 1:4 en BSS)',
        dose: '0.2 mL inyectados en cámara anterior en ojos con PEX al inicio.',
        warning: 'Revierte la rigidez del esfínter pupilar y mantiene la midriasis durante la cirugía.'
      },
      {
        name: 'Acetazolamida Oral (Diamox)',
        dose: '250 mg VO cada 8-12 horas en picos hipertensivos postoperatorios por PEX.',
        warning: 'Inhibidor sistémico de la anhidrasa carbónica; monitorizar función renal y descartar alergia a sulfas.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Genética de la Pseudoexfoliación',
        category: 'Asociación Patognomónica',
        description: 'El gen LOXL1 (Lisil Oxidasa-Like 1) en el cromosoma 15q24 es el principal factor genético asociado a PEX. Modula el entrecruzamiento de elastina y colágeno; su disfunción conduce a la elastosis fibrilar patológica sistémica y ocular.',
        trapToAvoid: 'Desconocer la relación entre mutación en LOXL1 y síndrome de pseudoexfoliación.'
      },
      {
        title: 'Homocistinuria vs Marfan: Dirección de Subluxación',
        category: 'Pregunta Clásica',
        description: 'Síndrome de Marfan: Subluxación SUPEROTEMPORAL (cónsone con "Marfan = Arriba"). Homocistinuria: Subluxación INFERONASAL (cónsone con "Homocistinuria = Abajo", herencia autosómica recesiva, déficit de cistationina beta-sintasa y riesgo de trombosis vascular letal con anestesia general).',
        trapToAvoid: 'Confundir las direcciones vectoriales de subluxación entre Marfan y Homocistinuria en el examen oral.'
      },
      {
        title: 'Ángulo de Inserción en la Técnica de Yamane',
        category: 'Cifra Clave de Corte',
        description: 'Los túneles esclerales de Yamane deben realizarse a 2.0 mm del limbo esclerocorneal, con una angulación de 20 grados respecto al limbo y 5 a 10 grados respecto a la superficie escleral, para asegurar que el LIO quede paralelo al iris sin inducir astigmatismo ni descentrado.',
        trapToAvoid: 'Puncionar a 1 mm del limbo (causa roce iridiano con hifema y glaucoma) o a más de 3 mm (induce desplazamiento hipermetrópico masivo).'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo Landmark de Shin Yamane (Ophthalmology 2017): Describió la fijación intrascleral con bridas (*flanged intrascleral haptic fixation*) con aguja de 30G de pared delgada en 100 ojos, demostrando excelente estabilidad anatómica, baja pérdida celular endotelial y ausencia de tilt significativo a largo plazo.',
      'Estudio Multicéntrico de Gimbel et al. (JCRS): Demostró que el implante de Anillos de Tensión Capsular (CTR) en ojos con pseudoexfoliación redujo en un 80% la incidencia de luxación tardía del complejo saco-LIO a los 10 años postoperatorios.'
    ],
    landmarkTrials: [
      {
        name: 'Flanged Intrascleral Intraocular Lens Fixation with Double-Needle Technique (Yamane et al.)',
        year: '2017',
        conclusion: 'La técnica de doble aguja con fijación de bridas sin suturas proporcionó una fijación rápida, firme y anatómicamente reproducible para ojos sin soporte capsular.',
        fellowshipRelevance: 'Revolucionó el abordaje quirúrgico contemporáneo de la afaquia y subluxación cristaliniana en todo el mundo.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología de PEX: Material fibrilar extracelular característico con microfibrillas de 30 a 50 nm con periodicidad cruzada de 10 nm compuestas por elastina, amiloide P, fibrilina-1 y clusterina, sintetizadas anormalmente por células del epitelio no pigmentado ciliar, células del iris y endotelio trabecular.',
    surgicalPearls: [
      'Al realizar la capsulorrexis en Marfan o PEX severo: La zónula no ofrece resistencia; fijar el borde capsular con pinzas de micro-rexis de 23G mientras con una segunda mano se estabiliza el núcleo con una espátula para no desgarrar las pocas zónulas residuales sanas.',
      'Confección del reborde (flange) en Yamane: Sostener la háptica con pinzas a 2 mm del extremo para que sirva como disipador de calor y evitar que el bulbo fundido se contraiga excesivamente hacia la entrada del túnel escleral.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 76 años con antecedentes de Glaucoma Pseudoexfoliativo avanzado acude para cirugía de catarata en ojo izquierdo. Tras una capsulorrexis dificultosa teñida con azul de tripano, usted observa que durante la hidrodissección el cuadrante nasal del saco capsular se desinserta en 3 horas horarias continuas (de hora 7 a hora 10), apreciándose vítreo asomando en el espacio desinsertado mientras el núcleo permanece íntegro dentro del saco. ¿Cuál es la complicación, cuál es el dispositivo endocapsular que debe insertar, en qué momento específico debe colocarlo y qué maniobra debe realizar si la diálisis se expande a más de 5 horas de reloj?',
        answer: '1) Complicación Intraoperatoria:\n   - Diálisis Zonular localizada de 90 grados (3 horas horarias) secundaria al Síndrome de Pseudoexfoliación (PEX).\n2) Dispositivo de Elección:\n   - Anillo de Tensión Capsular (CTR - Capsular Tension Ring) estándar de PMMA.\n3) Momento Quirúrgico de Inserción:\n   - Si el núcleo aún no ha sido fracturado y no hay vítreo abundante en cámara anterior: Estabilizar transitoriamente el reborde de la capsulorrexis en el área de la diálisis con 1 o 2 Retractores Capsulares flexibles (ganchos de iris) colocados en la rexis.\n   - No insertar el CTR completo inmediatamente si es posible evitarlo, porque atrapará la corteza contra el ecuador; si la inestabilidad impide emulsionar el núcleo, inyectar el CTR con inyector deslizándolo hacia el cuadrante sano antes de abordar la diálisis.\n   - Limpiar el vítreo herniado con vitrectomía anterior bimanual a bajo vacío.\n4) Conducta si la Diálisis se Extiende a >5 Horas (>150 Grados):\n   - Un CTR convencional ya no es suficiente, ya que el saco se descentrará hacia el lado opuesto.\n   - Debe colocarse un Segmento de Tensión Capsular de Ahmed (CTS) o un Anillo de Cionni suturado a la pared escleral con sutura de PTFE (Gore-Tex) o Prolene 8-0 a 2.0 mm del limbo en el meridiano de la diálisis máxima, o proceder a la extracción del saco con fijación escleral del LIO mediante la técnica de Yamane.',
        trap: 'Insertar un CTR estándar cuando la diálisis supera los 180 grados creyendo que estabilizará el ojo sin necesidad de anclaje escleral.'
      }
    ]
  },

  // =========================================================================
  // 7. PUPILA PEQUEÑA Y SÍNDROME IFIS POR TAMSULOSINA
  // =========================================================================
  {
    id: 'deep-catarata-pupila-pequena-ifis-tamsulosina',
    title: 'Manejo de Pupila Pequeña y Síndrome de Iris Flácido Intraoperatorio (IFIS por Tamsulosina): Retractores y Anillo de Malyugin',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre las estrategias de dilatación mecánica y farmacológica en cirugía de catarata: Síndrome de Iris Flácido Intraoperatorio (IFIS - descrito por Chang y Campbell), bloqueo irreversible de receptores adrenérgicos alfa-1A por tamsulosina, tríada patognomónica de IFIS, uso de midriáticos intracamerales combinados (fenilefrina/ketorolaco), esfinterotomías, retractores de iris de titanio/nylon y expansores pupilares mecánicos (Anillo de Malyugin de 1ª y 2ª generación).',
    definitionAndEpidemiology: 'El Síndrome de Iris Flácido Intraoperatorio (IFIS - *Intraoperative Floppy Iris Syndrome*) fue caracterizado en 2005 por David Chang y John Campbell. Se presenta en hasta el 70-90% de los pacientes que toman o han tomado Tamsulosina (antagonista selectivo del receptor alfa-1A adrenérgico utilizado para la hiperplasia prostática benigna) y en menor grado con otros antagonistas alfa-1 (silodosina, doxazosina, terazosina) o antipsicóticos. Es un factor de riesgo mayor de rotura capsular posterior y aspiración de iris.',
    anatomyAndPathophysiology: '1. Inervación del Iris y Receptores Alfa-1A:\n   • El músculo dilatador del iris es una capa mioepitelial delgada inervada por el sistema simpático a través de receptores adrenérgicos alfa-1A.\n   • La Tamsulosina bloquea estos receptores con altísima afinidad y produce una atrofia muscular por desuso irreversible del músculo dilatador.\n   • Por ello, suspender la tamsulosina días o semanas antes de la cirugía NO previene el IFIS, ya que la atrofia del músculo dilatador persiste de forma indefinida incluso años después de interrumpir el fármaco.\n2. La Tríada Clásica Patognomónica de IFIS:\n   1) Estroma iridiano flácido y ondulante que vibra con las mínimas corrientes de infusión de fluidos en la cámara anterior.\n   2) Tendencia marcada y repetida del iris a prolapsarse hacia las incisiones corneales (principal y paracentesis) durante la manipulación con instrumental.\n   3) Miosis pupilar progresiva e inexorable durante el curso de la cirugía a pesar de midriáticos tópicos preoperatorios estándar.',
    clinicalExamination: {
      biomicroscopy: 'En consulta preoperatoria: Pupila pequeña (<4.0-5.0 mm de diámetro tras instilación de ciclopentolato y fenilefrina tópicos). En pacientes con PEX, sinequias posteriores o diabetes mellitus, la rigidez o atrofia del esfínter limita la dilatación.',
      fundus: 'Dificultad para examinar el polo posterior y la periferia a través de pupilas no reactivas.',
      specialSigns: '• Prolapso del iris a través de la incisión principal en cuanto se introduce el instrumento de faco.\n• Iris que se arruga y pierde su arquitectura estromal fisiológica al entrar en contacto con fluidos.'
    },
    diagnosticWorkup: [
      {
        test: 'Anamnesis Farmacológica Dirigida Obligatoria',
        findings: 'Interrogatorio exhaustivo sobre el uso actual o HISTÓRICO de tamsulosina (Flomax / Secotex / Omnic), silodosina, alfuzosina o fármacos para la próstata o hipertensión en todo paciente programado para cirugía de catarata.'
      },
      {
        test: 'Pupilometría Dinámica Preoperatoria',
        findings: 'Medición milimétrica del diámetro pupilar máximo bajo midriasis; pupilas <5.0 mm requieren preparación instrumental específica (anillos de expansión o retractores de iris).'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Miosis Fibrótica por Sinequias Posteriores (Uveítis)',
        distinction: 'El iris está rígido y adherido a la cápsula anterior por bandas de fibrina (no es flácido ni prolapsa); responde a sinequiólisis mecánica con espátula.'
      },
      {
        condition: 'Pupila Rígida por Pseudoexfoliación (PEX)',
        distinction: 'Asociada a material blanquecino en el reborde y debilidad zonular sin el aspecto ondulante y flotante del estroma de IFIS.'
      }
    ],
    steppedManagement: {
      medical: 'Estrategia Farmacológica Pre y Perioperatoria en IFIS:\n• NO suspender la tamsulosina de forma brusca antes de la cirugía (no evita el IFIS y puede desencadenar retención urinaria aguda).\n• Cóctel Midriático Intracameral Estabilizador (Solución de Shugarcaine):\n  - Inyección intracameral de Adrenalina 1:1000 libre de conservantes (0.2 mL diluidos en BSS con Lidocaína al 1% sin epinefrina comercial).\n  - Estimula directamente los receptores alfa residuales, acidifica transitoriamente y paraliza el estroma iridiano, incrementando la rigidez del iris y reduciendo drásticamente el prolapso.\n• Omidria (Fenilefrina 1.01% + Ketorolaco 0.3% intracameral en BSS): Mantiene la dilatación pupilar y suprime la miosis mediada por prostaglandinas intraoperatorias.',
      surgical: 'Técnicas de Dilatación Mecánica:\n• 1. Visco-Midriasis con Viscoelásticos Pesados:\n  - Inyección de Hialuronato sódico de alta cohesividad (Healon5 o Healon GV) sobre la pupila para forzar mecánicamente la dilatación (efecto transitorio durante la capsulorrexis).\n• 2. Expansores Pupilares Mecánicos (Anillo de Malyugin de 1ª y 2ª Generación):\n  - Dispositivo de polipropileno monofilamento con 4 asas circulares que atrapan el iris en 4 puntos equidistantes, expandiendo la pupila a un diámetro cuadrado calibrado de 6.25 mm o 7.0 mm.\n  - Se introduce y retira mediante un inyector dedicado a través de la incisión de 2.2-2.4 mm.\n  - Ventajas: No requiere incisiones corneales adicionales, distribuye la tensión uniformemente en 360 grados sin desgarrar el esfínter y mantiene el iris totalmente inmóvil durante la facoemulsificación.\n• 3. Retractores de Iris Flexibles de Nylon (Ganchos de Iris):\n  - Se introducen 4 o 5 ganchos a través de microparacentesis dedicadas en los 4 cuadrantes.\n  - Ajustar en configuración de diamante con un gancho subincisional por debajo de la herida principal para evitar que el iris prolapse hacia el túnel de faco.\n• 4. Esfinterotomías Múltiples Microscópicas:\n  - Micropellizcos o microcortes de 0.5 mm en el borde pupilar con tijeras de Vannas en pupilas fibróticas muy seniles.'
    },
    clinicalApplicationPractical: `Conducta Clave en Quirófano ante Paciente con Antecedente de Tamsulosina: 1) Diseñar un túnel corneal ligeramente más largo y más anterior en córnea clara; un túnel corto o posterior promueve el prolapso inmediato del iris con la punta del faco. 2) Inyectar adrenalina intracameral diluida antes de cualquier viscoelástico. 3) Si la pupila mide <5 mm o el estroma empieza a ondular, NUNCA esperar a que ocurra una complicación; colocar inmediatamente un Anillo de Malyugin o retractores de iris de entrada.

Cuidado al retirar el Anillo de Malyugin: Al terminar de aspirar la corteza y colocar el LIO, desenganchar las asas del anillo cuidadosamente con el manipulador de Osher; evitar tirar del anillo si una de las asas sigue trabada en el iris para no desgarrar la raíz del iris (iridodiálisis).`,
    highYieldPearl: 'Tamsulosina = IFIS (estroma flácido, tendencia al prolapso y miosis progresiva). Suspender el fármaco NO lo previene. El tratamiento de elección combina Adrenalina intracameral y expansión mecánica con Anillo de Malyugin o retractores de iris.',
    keyDrugs: [
      {
        name: 'Adrenalina Intracameral Libre de Conservantes (1:1000 diluida 1:4 en BSS)',
        dose: '0.2 mL inyectados en cámara anterior tras la incisión inicial.',
        warning: 'Pilar farmacológico del manejo de IFIS; aumenta el tono del iris y revierte la flacidez estromal.'
      },
      {
        name: 'Healon5 (Hialuronato Sódico al 2.3%)',
        dose: 'Instilación lenta sobre el centro pupilar para viscomidriasis.',
        warning: 'Viscoelástico viscoadaptativo ultradenso; aspirar exhaustivamente al finalizar para prevenir hipertensión ocular severa.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Suspensión de Tamsulosina Pre-Cirugía',
        category: 'Trampa de Tribunal',
        description: '¿Se debe suspender la tamsulosina 2 semanas antes de operar una catarata? Respuesta: NO. Ensayos clínicos demostraron que la atrofia del dilatador es permanente y el IFIS ocurre con igual severidad; suspenderla solo causa retención urinaria aguda. La conducta correcta es mantener el fármaco y preparar el quirófano para IFIS.',
        trapToAvoid: 'Aconsejar suspender la tamsulosina creyendo que eso eliminará el riesgo de IFIS intraoperatorio.'
      },
      {
        title: 'Subtipo de Receptor Bloqueado por Tamsulosina',
        category: 'Pregunta Clásica',
        description: 'La tamsulosina es un antagonista uroselectivo de los receptores adrenérgicos ALFA-1A (subtipo que predomina en el estroma prostático y en el músculo dilatador del iris humano).',
        trapToAvoid: 'Responder receptores beta o alfa-2 adrenérgicos.'
      },
      {
        title: 'Configuración en Diamante de los Retractores de Iris',
        category: 'Asociación Patognomónica',
        description: 'Al colocar retractores de iris en IFIS, colocarlos en configuración de diamante (con un retractor situado directamente por debajo del túnel principal) retrae el iris subincisional, impidiendo mecánicamente su prolapso hacia la incisión de faco.',
        trapToAvoid: 'Colocar los retractores en cuadrado dejando el iris subincisional libre para prolapsar.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudio Pivotal de David Chang y John Campbell (JCRS 2005): Describió por primera vez el IFIS y su asociación con tamsulosina, reportando una tasa inicial de complicaciones de PCR del 12% que cayó a <0.5% con el uso protocolizado de adrenalina intracameral y anillos de expansión.',
      'Ensayo Clínico sobre Anillo de Malyugin (Malyugin, JCRS 2006): Demostró que el anillo de polipropileno con 4 espirales de esquina mantiene una pupila cuadrada estable de 6.25 mm sin dañar el esfínter iridiano ni producir atonía pupilar permanente.'
    ],
    landmarkTrials: [
      {
        name: 'Intraoperative Floppy Iris Syndrome Associated with Tamsulosin (Chang & Campbell)',
        year: '2005',
        conclusion: 'Identificó la relación causal entre antagonistas alfa-1A y el síndrome de iris flácido, estableciendo las estrategias de dilatación mecánica y farmacológica modernas.',
        fellowshipRelevance: 'Uno de los artículos de técnica quirúrgica más citados y de mayor impacto clínico en la historia de la oftalmología moderna.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología del Iris en IFIS: Microscopía electrónica demuestra atrofia por desuso de las células musculares lisas del dilatador del iris con reducción del número de miofilamentos contráctiles, vacuolización citoplasmática y pérdida del tono simpático basal, manteniéndose normal el músculo esfínter parasimpático.',
    surgicalPearls: [
      'Al implantar el Anillo de Malyugin: Enganchar primero el asa distal en el iris a las 12 horas; luego las asas laterales a las 3 y 9 horas con el manipulador; y finalmente retraer el inyector para liberar el asa proximal a las 6 horas.',
      'Si el iris prolapsa por la incisión: NUNCA empujarlo directamente hacia adentro con fuerza (eso desgarra el estroma y destruye el endotelio); despresurizar la cámara inyectando viscoelástico por la paracentesis lateral contraria y masajear suavemente la incisión para que el iris retorne por gradiente hidrostático.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente varón de 68 años con hiperplasia prostática benigna en tratamiento con Tamsulosina desde hace 4 años acude para facoemulsificación. La pupila dilata inicialmente a 4.5 mm. Apenas ingresa usted con la punta del facoemulsificador a la cámara anterior, el estroma iridiano comienza a ondular violentamente como una bandera al viento y el iris de hora 12 prolapsa a través de la incisión corneal principal, mientras la pupila se cierra rápidamente a 2.5 mm impidiendo ver el núcleo. ¿Cuál es el diagnóstico, cuál es la tríada clínica de este cuadro, cómo resuelve el prolapso agudo del iris y qué dispositivo mecánico debe colocar para continuar la cirugía con total seguridad?',
        answer: '1) Diagnóstico Intraoperatorio:\n   - Síndrome de Iris Flácido Intraoperatorio (IFIS - Intraoperative Floppy Iris Syndrome) severo inducido por Tamsulosina.\n2) Tríada Clínica Patognomónica de IFIS:\n   - a) Estroma del iris flácido y ondulante ante las corrientes de infusión de fluidos.\n   - b) Prolapso repetido del iris hacia las incisiones quirúrgicas (principal o paracentesis).\n   - c) Miosis pupilar progresiva e involuntaria durante la intervención.\n3) Resolución del Prolapso Agudo del Iris:\n   - Suspender inmediatamente la infusión de la pieza de faco (pedal en 0).\n   - NO empujar el iris hacia adentro a través de la herida principal con pinzas (provocaría atrofia estromal y defectos de transiluminación permanentes).\n   - Introducir una cánula de viscoelástico cohesivo denso (Healon GV o Healon5) por la paracentesis lateral contraria y rellenar la cámara anterior; la presión hidrostática empujará el iris suavemente hacia adentro en su plano anatómico.\n4) Conducta Mecánica y Farmacológica Inmediata para Continuar la Cirugía:\n   - Inyectar Adrenalina Intracameral diluida en BSS (0.2 mL) para restaurar el tono de los receptores alfa residuales del dilatador.\n   - Colocar de inmediato un Expansor Pupilar Mecánico: Anillo de Malyugin (Malyugin Ring de 6.25 mm o 7.0 mm) mediante su inyector dedicado para atrapar el iris en 4 puntos y fijar una pupila cuadrada amplia e inmóvil, O colocar 4 Retractores de Iris de nylon flexibles en configuración de diamante con un gancho subincisional que bloquee el paso del iris hacia la herida principal.',
        trap: 'Intentar continuar la facoemulsificación a través de la pupila de 2.5 mm con el iris prolapsado, lo que inevitablemente termina en aspiración del iris, hemorragia y rotura capsular posterior.'
      }
    ]
  },

  // =========================================================================
  // 8. CATARATA POLAR POSTERIOR
  // =========================================================================
  {
    id: 'deep-catarata-catarata-polar-posterior',
    title: 'Catarata Polar Posterior: Adelgazamiento Capsular, Criterios de Riesgo, Hidrodelineación sin Hidrodissección y Manejo de Ruptura',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre el mayor desafío anatómico en cirugía del cristalino: Catarata Polar Posterior (PPC), defecto congénito del desarrollo, adelgazamiento extremo o ausencia preexistente de la cápsula posterior central (tasa de rotura de hasta 25-35%), clasificación de Duke-Elder y Vasavada, REGLA DE ORO: Hidrodelineación meticulosa con PROHIBICIÓN ABSOLUTA de hidrodissección, descompresión mecánica del núcleo y vitrectomía anterior de rescate.',
    definitionAndEpidemiology: 'La Catarata Polar Posterior (PPC - *Posterior Polar Cataract*) es una variante morfológica congénita infrecuente (incidencia de 1 a 3 por cada 3,000 pacientes con catarata) con patrón de herencia autosómico dominante (ligada a mutaciones en genes de cristalinas y conexinas) o esporádica. Se caracteriza por una masa discoidea blanca densa redondeada localizada en el polo posterior del cristalino, íntimamente adherida a la cápsula posterior o asociada a una ausencia congénita de la misma.',
    anatomyAndPathophysiology: '1. Origen Embriológico y Defecto Capsular Congénito:\n   • Falla en la apoptosis y reabsorción normal de la túnica vasculosa lentis anterior y del sistema de la arteria hialoidea embrionaria.\n   • En el centro de la placa polar, la cápsula posterior es extremadamente delgada (1-2 µm) o está completamente ausente en el 25% al 35% de los ojos antes de iniciar la cirugía.\n   • Las fibras lenticulares posteriores están anquilosadas e integradas directamente en el colágeno capsular.\n2. El Peligro Letal de la Hidrodissección Convencional:\n   • Si el cirujano inyecta inadvertidamente una ola de fluido de hidrodissección hacia la cápsula posterior, la onda hidráulica golpea el área debilitada o desprovista de cápsula.\n   • El aumento instantáneo de la presión intracapsular rompe violentamente la cápsula posterior y empuja el núcleo denso entero directamente hacia el fondo de la cavidad vítrea (*dropped nucleus* instantáneo).',
    clinicalExamination: {
      biomicroscopy: 'Placa blanco-nacarada redondeada circunscrita bien delimitada de 2.0 a 4.0 mm centrada en el polo posterior del cristalino inmediatamente por delante de la cápsula posterior, con aspecto característico en "anillos de cebolla" concéntricos o halo de satélites circundantes.\n- Clasificación de Vasavada:\n  * Tipo 1: Placa polar posterior pequeña y estacionaria sin opacidades circundantes.\n  * Tipo 2: Placa polar asociada a opacidades satélites corticales (mayor riesgo de dehiscencia).\n  * Tipo 3: Placa densa con signos evidentes de adelgazamiento capsular en hendidura.\n  * Tipo 4: Placa polar asociada a rotura o desgarro capsular preexistente evidente.',
      fundus: 'Sombra acústica o bloqueo del reflejo macular central por la placa densa.',
      specialSigns: '• Anillos concéntricos de cebolla en la placa polar.\n• Ausencia de movilidad de la placa al rotar el núcleo.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT de Segmento Anterior de Alta Resolución (AS-OCT)',
        findings: 'ESTUDIO PREOPERATORIO CRÍTICO: Visualización directa de la cápsula posterior subyacente a la placa polar; permite documentar si la cápsula está intacta y continua, extremadamente adelgazada o rota de forma preexistente.'
      },
      {
        test: 'Biomicroscopía Ultrasónica (UBM)',
        findings: 'Confirmación de la integridad zonular de 360 grados y ausencia de afectación de la pars plana.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Catarata Subcapsular Posterior Ordinaria (SCP)',
        distinction: 'Placa granular difusa sin bordes concéntricos ni halo de cebolla; la cápsula subyacente es normal y tolera la hidrodissección sin riesgo de estallido.'
      },
      {
        condition: 'Mancha de Mittendorf',
        distinction: 'Remanente glial pequeño (<1 mm) de la arteria hialoidea situado inferonasal al polo posterior, estacionario y sin repercusión visual severa.'
      }
    ],
    steppedManagement: {
      medical: 'Consentimiento Informado Especial y Asesoramiento Preoperatorio:\n• Explicar con total transparencia al paciente que la catarata polar posterior tiene un riesgo congénito de rotura capsular posterior de hasta un 25-35%, incluso en manos de los cirujanos más experimentados del mundo, con posibilidad de requerir vitrectomía y una segunda intervención.',
      surgical: 'Técnica Quirúrgica Modificada según Vasavada (Protocolo Anti-Rotura):\n• REGLA DE ORO CARDINAL: PROHIBICIÓN ABSOLUTA DE LA HIDRODISSECCIÓN. NUNCA inyectar fluido hacia la cápsula posterior.\n• Paso 1 (Capsulorrexis Calibrada):\n  - Capsulorrexis circular continua de 5.0 a 5.2 mm (no excesivamente grande) para que, en caso de rotura capsular posterior central, el borde de la rexis anterior quede íntegro permitiendo la captura óptica de un LIO de 3 piezas en sulcus.\n• Paso 2 (Hidrodelineación Interna Pura):\n  - Insertar la cánula de hidrodelineación dentro de la sustancia nuclear (en la interfase entre núcleo central y epinúcleo) e inyectar fluido suavemente hacia el centro del cristalino para separar el núcleo interno del epinúcleo amortiguador.\n  - El epinúcleo permanece adherido a la cápsula posterior actuando como una barrera anatómica protectora ("escudo epinuclear").\n• Paso 3 (Emulsificación del Núcleo):\n  - Emulsionar el núcleo interno con técnica de "Stop & Chop" o "Slow Motion Faco" a bajo vacío y bajo flujo, SIN rotar el cristalino dentro del saco (la rotación forzada desgarra las adherencias focales polares de la cápsula).\n• Paso 4 (Manejo de la Placa Polar Adherida):\n  - La placa polar posterior se deja OBLIGATORIAMENTE para el final absoluto de la cirugía, una vez que el resto del núcleo y la corteza periférica han sido aspirados.\n  - Inyectar viscoelástico dispersivo bajo los bordes de la placa para viscodiseccionarla suavemente hacia adelante; si está firmemente adherida y no se despega con maniobras suaves, DEJARLA en su sitio e implantar el LIO en saco; la placa residual se resolverá fácilmente de forma ambulatoria a los 2-3 meses mediante capsulotomía con Láser Nd:YAG.\n• Paso 5 (Si se produce Rotura Capsular Posterior):\n  - No retirar la punta de faco; inyectar viscoelástico dispersivo inmediatamente.\n  - Vitrectomía anterior bimanual pars plana.\n  - Conversión a implante de LIO de 3 piezas en sulcus con captura óptica a través de la capsulorrexis anterior.'
    },
    clinicalApplicationPractical: 'Instrucción Vital para el Residente: El día que opere una catarata polar posterior, escriba en letras gigantes en la pizarra del quirófano: "NO REALIZAR HIDRODISSECCIÓN". La costumbre refleja del cirujano de inyectar BSS bajo la cápsula anterior tras la rexis es la causa del 90% de las roturas catastróficas con caída del núcleo al vítreo en cataratas polares.\\n\\nCuidado con pulir la cápsula posterior: NUNCA usar la cánula de pulido capsular ni la función "Capsule Polish" de la máquina sobre una cápsula polar posterior; el mínimo roce romperá el defecto central.',
    highYieldPearl: 'En Catarata Polar Posterior: PROHIBICIÓN ABSOLUTA DE HIDRODISSECCIÓN (causa rotura capsular y dropped nucleus inmediato). Se realiza HIDRODELINEACIÓN pura para dejar el epinúcleo como escudo protector. La placa central adherida se deja para capsulotomía YAG diferida.',
    keyDrugs: [
      {
        name: 'Viscoat (Condroitín Sulfato + Hialuronato Sódico)',
        dose: 'Instilación copiosa para viscodisección hidrostática atraumática de la placa polar.',
        warning: 'Excelente adhesión y tamponamiento de defectos capsulares centrales microscópicos.'
      },
      {
        name: 'Azul de Tripano 0.06%',
        dose: 'Tinción capsular anterior inicial para asegurar una capsulorrexis de 5.0 mm perfecta.',
        warning: 'Garantiza el soporte anterior para captura óptica del LIO si la cápsula posterior se rompe.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Hidrodelineación vs Hidrodissección en Polar Posterior',
        category: 'Asociación Patognomónica',
        description: 'La maniobra obligatoria en catarata polar posterior es la HIDRODELINEACIÓN (separa el núcleo del epinúcleo). La maniobra terminantemente prohibida es la HIDRODISSECCIÓN (rompe la cápsula posterior adelgazada congénitamente).',
        trapToAvoid: 'Realizar hidrodissección en una catarata polar posterior.'
      },
      {
        title: 'Conducta ante Placa Polar Firmemente Adherida',
        category: 'Trampa de Tribunal',
        description: 'Si la placa polar central no se desprende con viscodisección suave al final de la cirugía, la conducta correcta es NO insistir en aspirarla mecánicamente; se deja en su sitio, se implanta el LIO en el saco capsular y se remueve con Láser Nd:YAG a los 2-3 meses en la consulta.',
        trapToAvoid: 'Tironear de la placa polar con la cánula de I/A rompiendo la cápsula posterior intacta.'
      },
      {
        title: 'Tasa de Rotura Capsular en Polar Posterior',
        category: 'Cifra Clave de Corte',
        description: 'La incidencia de defecto capsular posterior preexistente o rotura intraoperatoria en cataratas polares posteriores oscila entre el 25% y el 35%, incluso con cirujanos de alta experiencia.',
        trapToAvoid: 'Prometer al paciente una cirugía sin complicaciones como si fuera una catarata senil habitual.'
      }
    ],
    fellowshipKeyPoints: [
      'Técnicas Quirúrgicas de Abhay Vasavada (JCRS 1999 / 2008): Describió el principio de hidrodelineación con viscodisección cerrada de la placa polar posterior, reduciendo la tasa histórica de rotura capsular del 36% al 7.5% en series prospectivas.',
      'AS-OCT en Catarata Polar Posterior (JCRS 2014): Demostró que la presencia de una capa transparente hiporreflectiva continua detrás de la placa polar predice una cápsula intacta con un 98% de especificidad.'
    ],
    landmarkTrials: [
      {
        name: 'Management of Posterior Polar Cataract (Vasavada & Singh)',
        year: '1999',
        conclusion: 'La eliminación de la hidrodissección y el uso de hidrodelineación con epinúcleo protector transformó la seguridad quirúrgica en cataratas polares posteriores.',
        fellowshipRelevance: 'Protocolo de referencia obligatorio en todos los atlas y programas de subespecialidad de segmento anterior.'
      }
    ],
    histopathologyAndGenetics: 'Genética: Ligamiento autosómico dominante a mutaciones en los genes CRYAB (cristalina alfa-B), CRYAA y GJA3 (conexina 46). Histopatología: Masa celular distrófica subcapsular compuesta por restos degenerados de fibras lenticulares, acúmulos amorfos de colágeno y engrosamiento fibroso de la membrana basal capsular con ausencia focal de la lámina elástica de la cápsula posterior en el epicentro.',
    surgicalPearls: [
      'Al realizar la hidrodelineación en polar posterior: Colocar la punta de la cánula de 27G a 45 grados dentro de la masa nuclear a mitad de camino entre la rexis y el centro; inyectar pulsos microscópicos de BSS hasta observar la aparición de un "anillo dorado" (*golden ring*) que confirma la separación del núcleo sin onda líquida posterior.',
      'Si se produce rotura capsular durante la extracción del epinúcleo: La rexis anterior está intacta; colocar un LIO de 3 piezas en sulcus y realizar captura óptica abotonando la óptica a través de la capsulorrexis anterior; el LIO queda perfectamente estable y centrado de por vida.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 38 años acude a su consulta por disminución visual bilateral y quejas intensas de encandilamiento al conducir de noche. En la lámpara de hendidura con pupila dilatada usted observa en ojo derecho una placa densa blanco-nacarada redondeada de 3.0 mm en el polo posterior del cristalino con anillos concéntricos en capas de cebolla, inmediatamente adyacente a la cápsula posterior. El paciente desea operarse mediante facoemulsificación. ¿Cuál es el diagnóstico de certeza, cuál es la maniobra estándar de la cirugía de catarata que está TERMINANTEMENTE CONTRAINDICADA realizar en este paciente y cuál es la estrategia viscoquirúrgica si la placa central no se despega fácilmente al final?',
        answer: '1) Diagnóstico de Certeza:\n   - Catarata Polar Posterior (PPC - Posterior Polar Cataract) congénita en ojo derecho.\n2) Maniobra Terminantemente Prohibida:\n   - La HIDRODISSECCIÓN convencional está FORMALMENTE PROHIBIDA.\n   - Justificación: En la catarata polar posterior existe un adelgazamiento congénito extremo o una dehiscencia anatómica preexistente de la cápsula posterior central (en el 25-35% de los ojos). Realizar una hidrodissección inyecta una onda hidráulica a alta presión que rompe la cápsula posterior de forma fulminante y empuja el núcleo directamente hacia la cavidad vítrea (*dropped nucleus*).\n   - Maniobra sustituta obligatoria: HIDRODELINEACIÓN PURA (inyectar dentro de la masa nuclear para aislar el núcleo central, dejando el epinúcleo intacto como escudo protector sobre la cápsula posterior).\n3) Estrategia si la Placa Central no se Despega al Final:\n   - NUNCA intentar traccionar o raspar mecánicamente la placa polar adherida con la cánula de I/A o curetas capsulares.\n   - Inyectar viscoelástico dispersivo para viscodiseccionarla suavemente; si permanece firmemente adherida, la conducta correcta es DEJARLA EN SU LUGAR, aspirar el resto de la corteza e implantar la lente intraocular en el saco capsular.\n   - Citar al paciente a los 2 a 3 meses para realizar una Capsulotomía con Láser Nd:YAG ambulatoria en consulta, la cual pulverizará la placa central sobre el LIO de forma completamente segura y sin riesgo intraoperatorio.',
        trap: 'Realizar hidrodissección inadvertida al inicio de la cirugía o tironear agresivamente de la placa polar adherida rompiendo la cápsula posterior.'
      }
    ]
  },

  // =========================================================================
  // 9. SÍNDROME TÓXICO DEL SEGMENTO ANTERIOR (TASS) VS ENDOFTALMITIS POSTFACO
  // =========================================================================
  {
    id: 'deep-catarata-tass-vs-endoftalmitis-evs',
    title: 'Síndrome Tóxico del Segmento Anterior (TASS) vs Endoftalmitis Postoperatoria Aguda (Protocolo EVS y Profilaxis ESCRS)',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre las dos emergencias inflamatorias postoperatorias mayores en cirugía de catarata: Síndrome Tóxico del Segmento Anterior (TASS - reacción no infecciosa estéril por endotoxinas, detergentes enzimáticos o desinfectantes, inicio ultrarrápido <12-24h, edema corneal de limbo a limbo, ausencia de vitritis y respuesta milagrosa a corticoides tópicos intensivos) vs Endoftalmitis Postquirúrgica Aguda (infección bacteriana por S. epidermidis/S. aureus, inicio a las 48-72h, dolor intenso, hipopion, vitritis densa, ensayo EVS y profilaxis ESCRS con Cefuroxima intracameral).',
    definitionAndEpidemiology: 'El Síndrome Tóxico del Segmento Anterior (TASS - *Toxic Anterior Segment Syndrome*) es una inflamación inflamatoria no infecciosa aguda estéril grave del segmento anterior causada por la entrada inadvertida de sustancias tóxicas durante la cirugía intraocular. Afecta típicamente a brotes o epidemias en centros quirúrgicos (con incidencias que pueden superar el 5-10% en un mismo día quirúrgico). La Endoftalmitis Infecciosa Postoperatoria Aguda es una infección bacteriana o fúngica de la cavidad vítrea, con una incidencia global de 0.03% a 0.08% cuando se utiliza profilaxis antibiótica intracameral.',
    anatomyAndPathophysiology: '1. Fisiopatología del TASS (Toxicidad Química y Endotóxica Directa):\n   • Daño citotóxico difuso agudo masivo sobre las células del endotelio corneal y la malla trabecular.\n   • Causas más frecuentes: Residuos de detergentes enzimáticos no aclarados en el interior del instrumental hueco (cánulas de I/A, piezas de faco), endotoxinas bacterianas resistentes al autoclave procedentes de autoclaves a vapor con agua contaminada, pH o electrolitos anómalos en soluciones intracamerales, o conservantes tóxicos (cloruro de benzalconio).\n   • El endotelio corneal sufre necrosis o disfunción funcional aguda generalizada, produciendo un edema corneal difuso estromal que se extiende de limbo a limbo.\n2. Fisiopatología de la Endoftalmitis Aguda (Colonización Infecciosa Vítrea):\n   • Inoculación bacteriana intraocular (principalmente a partir de la flora conjuntival y del margen palpebral del propio paciente: *Staphylococcus epidermidis* en >70%, *Staphylococcus aureus*, estreptococos o bacilos Gram negativos como *Pseudomonas*).\n   • Proliferación microbiana masiva en el humor vítreo (un medio acelular rico en nutrientes que carece de defensas inmunitarias celulares eficaces).\n   • Quimiotaxis masiva de neutrófilos hacia el vítreo con liberación de enzimas líticas, toxinas bacterianas y radicales libres que destruyen la retina sensorial en horas.',
    clinicalExamination: {
      biomicroscopy: '• En TASS (Inicio Ultraprecoz en las primeras 12 a 24 horas postoperatorias):\n  - Ojo blanco o hiperemia conjuntival moderada, con escaso o nulo dolor ocular.\n  - Edema corneal difuso simétrico severo de "limbo a limbo" (edema en vidrio esmerilado que abarca toda la córnea sin respetar la periferia).\n  - Fibrina exuberante en cámara anterior e hipopion estéril.\n  - Daño del esfínter de iris con pupila atónica midriática fija no reactiva.\n  - PIO marcadamente elevada por trabeculitis química.\n  - Vítreo posterior rigurosamente TRANSPARENTE y libre de celularidad (en ecografía o fondo).\n• En Endoftalmitis Aguda (Inicio Clásico al 3º a 7º día postoperatorio):\n  - Dolor ocular progresivo, profundo, sordo y desproporcionado.\n  - Pérdida brusca y acelerada de agudeza visual (frecuentemente a Percepción Luminosa o Cuenta Dedos).\n  - Quemosis conjuntival e inyección ciliar violácea con edema palpebral.\n  - Hipopion purulento progresivo que aumenta de nivel cada hora.\n  - Vitritis densa masiva (Tyndall vítreo 3+ a 4+) que borra por completo el reflejo rojo de fondo.',
      fundus: 'En TASS: Reflejo de fondo visualizable a través del edema corneal con retina y papila normales. En Endoftalmitis: Pérdida total del reflejo de fondo (visión grisácea opaca); en ecografía B: ecos inflamatorios densos difusos en cavidad vítrea.',
      specialSigns: '• Tiempo de Aparición: <12-24h = TASS vs 3-7 días = Endoftalmitis.\n• Edema corneal de limbo a limbo (patognomónico de TASS).\n• Respuesta milagrosa en 24h a corticoides tópicos intensivos (TASS).'
    },
    diagnosticWorkup: [
      {
        test: 'Ecografía Ocular Modo B de Alta Resolución',
        findings: 'PRUEBA CLAVE DE DIFERENCIACIÓN: En TASS la cavidad vítrea posterior está anecoica y completamente libre de ecos celulares (vítreo limpio). En Endoftalmitis se observan ecos vítreos móviles moderados a densos en 360 grados, engrosamiento coriorretiniano y membranas inflamatorias.'
      },
      {
        test: 'Punción Vítrea Diagnóstica (Tap Vítreo) y Tinción de Gram / Cultivos',
        findings: 'Mandatorio ante la menor sospecha de Endoftalmitis: Inoculación inmediata de 0.1-0.2 mL de vítreo en agar sangre, agar chocolate, tioglicolato y medio Sabouraud.'
      },
      {
        test: 'Auditoría Quirúrgica Inmediata de la Central de Esterilización',
        findings: 'Ante un caso de TASS: Clausura cautelar del quirófano e inspección de los ciclos de autoclave, agua de lavado de instrumental, descarte de detergentes enzimáticos en instrumental tubular y revisión de lotes de medicación intraocular.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Endoftalmitis Crónica Postoperatoria por Cutibacterium (Propionibacterium) acnes',
        distinction: 'Aparición tardía (semanas o meses postoperatorias); uveítis granulomatosa recidivante de baja intensidad con placa blanca lechosa intracapsular sobre el LIO.'
      },
      {
        condition: 'Uveítis Anterior Severa por Retención de Restos Corticales',
        distinction: 'Presencia de material blanquecino floculento cortical en cámara anterior inferior con respuesta inflamatoria que cede al aspirar el resto.'
      }
    ],
    steppedManagement: {
      medical: 'Tratamiento Protocolizado del TASS:\n• Corticoterapia Tópica Intensiva Inmediata: Acetato de Prednisolona al 1% o Dexametasona tópica 1 gota CADA HORA día y noche las primeras 24 a 48 horas.\n• Corticoides Sistémicos Coadyuvantes: Prednisona oral a 1 mg/kg/día o bolos de metilprednisolona en casos graves.\n• Control de Hipertensión Ocular: Hipotensores tópicos no prostaglandínicos (Dorzolamida + Timolol).\n• Respuesta esperada: Mejoría espectacular en 24 a 48 horas con aclaramiento rápido del edema corneal y desaparición del hipopion.\n\nTratamiento de Urgencia de la Endoftalmitis Aguda (Protocolo EVS):\n• 1) Inyección Intravítrea Urgente de Antibióticos de Amplio Espectro:\n  - Vancomicina intravítrea: 1.0 mg en 0.1 mL (cobertura bactericida para Gram positivos y MRSA).\n  - Ceftazidima intravítrea: 2.25 mg en 0.1 mL (o Amikacina 0.4 mg en 0.1 mL en alérgicos) para Gram negativos y Pseudomonas.\n  - Dexametasona intravítrea: 0.4 mg en 0.1 mL (antiinflamatorio coadyuvante).\n  - Las inyecciones se administran en jeringas estériles SEPARADAS a través de pars plana (3.5 mm del limbo en pseudofáquicos) previa aspiración de 0.1 mL de vítreo para cultivo.\n• 2) Terapia Tópica Adyuvante: Colirios fortificados de Vancomicina (50 mg/mL) y Ceftazidima (50 mg/mL) cada hora, asociados a ciclopléjico cada 8 horas.',
      surgical: 'Criterio Quirúrgico del Endophthalmitis Vitrectomy Study (EVS):\n• Si la Agudeza Visual Inicial es de PERCEPCIÓN LUMINOSA (PL) DUDOSA:\n  - Indicación Mandatoria de Vitrectomía Pars Plana (PPV) Completa de URGENCIA INMEDIATA en quirófano.\n  - Demostró triplicar la probabilidad de recuperar agudeza visual funcional útil (≥20/40) frente a la punción-inyección aislada (33% vs 11%).\n• Si la Agudeza Visual Inicial es de CUENTA DEDOS (CF) O MEJOR:\n  - Se puede realizar Punción Vítrea e Inyección Intravítrea de Antibióticos (*Tap and Inject*) en lámpara de hendidura o quirófano sin vitrectomía inmediata, ya que el ensayo EVS demostró resultados visuales finales idénticos entre ambos grupos.\n• En TASS refractario con edema corneal crónico irreversible (descompensación endotelial tardía): Trasplante de córnea endotelial laminar (DMEK o DSAEK).'
    },
    clinicalApplicationPractical: 'Regla de Oro ante Inflamación Postoperatoria: Si duda entre TASS y Endoftalmitis en las primeras 24 horas, examine el vítreo con ecografía B y valore el dolor: El TASS ocurre en <24h sin afectación vítrea y cede milagrosamente a corticoides tópicos intensivos; la endoftalmitis debuta típicamente al 3º-5º día con dolor severo y vitritis densa. Ante cualquier duda o si el ojo no mejora con esteroides en 12 horas, tratar como endoftalmitis con antibióticos intravítreos inmediatos.\\n\\nProfilaxis ESCRS Obligatoria: La inyección intracamerular de Cefuroxima (1.0 mg en 0.1 mL) o Moxifloxacino (0.5 mg en 0.1 mL) al finalizar la cirugía es el estándar de seguridad global que reduce 5 veces la incidencia de endoftalmitis.',
    highYieldPearl: 'TASS = estéril, inicio ultraprecoz (<24h), edema corneal de limbo a limbo, sin dolor severo y vítreo limpio; cura con corticoides tópicos intensivos. Endoftalmitis = infecciosa, inicio al 3º-5º día, dolor sordo intenso, vitritis densa; requiere antibióticos intravítreos urgentes (Vancomicina + Ceftazidima). Criterio EVS: Vitrectomía inmediata si la visión es PL.',
    keyDrugs: [
      {
        name: 'Vancomicina Intravítrea',
        dose: '1.0 mg en 0.1 mL BSS mediante aguja de 30G a 3.5 mm del limbo.',
        warning: 'Pilar bactericida para Gram positivos; inyectar lentamente con jeringa independiente de la ceftazidima.'
      },
      {
        name: 'Ceftazidima Intravítrea',
        dose: '2.25 mg en 0.1 mL BSS.',
        warning: 'Excelente cobertura anti-pseudomonas sin la toxicidad macular isquémica de los aminoglucósidos.'
      },
      {
        name: 'Cefuroxima Intracameral Profiláctica (Aprokam)',
        dose: '1.0 mg en 0.1 mL inyectados en cámara anterior al sellar las incisiones.',
        warning: 'Estándar ESCRS que redujo la endoftalmitis de 0.35% a 0.07%; verificar reconstitución exacta para evitar edema tóxico.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Criterio de Agudeza Visual del EVS',
        category: 'Cifra Clave de Corte',
        description: 'La Vitrectomía Pars Plana inmediata en endoftalmitis postfaco solo demostró beneficio estadístico sobre la punción simple en pacientes que ven únicamente Percepción Luminosa (PL). Si el paciente cuenta dedos o ve mejor, el Tap-and-Inject tiene igual pronóstico final.',
        trapToAvoid: 'Indicar vitrectomía pars plana urgente en un paciente que cuenta dedos a 2 metros argumentando que "el EVS lo exige".'
      },
      {
        title: 'Edema de Limbo a Limbo en TASS',
        category: 'Asociación Patognomónica',
        description: 'El edema corneal estromal difuso que llega de limbo a limbo sin respetar la periferia en las primeras 12 a 24 horas es la firma biomicroscópica de toxicidad endotelial por TASS.',
        trapToAvoid: 'Confundir el edema corneal difuso de TASS con una descompensación mecánica postoperatoria focal sobre la herida.'
      },
      {
        title: 'Microorganismo más Prevalente en Endoftalmitis Postfaco',
        category: 'Pregunta Clásica',
        description: '¿Cuál es la bacteria más frecuentemente aislada en endoftalmitis postquirúrgica aguda tras facoemulsificación? Respuesta: Staphylococcus epidermidis (estafilococo coagulasa-negativo, en >70% de cultivos positivos), con mucho mejor pronóstico visual que Staphylococcus aureus.',
        trapToAvoid: 'Responder Pseudomonas o Streptococcus (son más destructivos pero mucho menos frecuentes).'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo Landmark EVS (Endophthalmitis Vitrectomy Study Group, Arch Ophthalmol 1995): Ensayo aleatorizado en 420 pacientes que estableció las pautas universales de vitrectomía según la agudeza visual inicial y demostró que los antibióticos sistémicos intravenosos no aportaron ningún beneficio.',
      'Ensayo Multicéntrico ESCRS (JCRS 2007): Demostró en más de 16,000 pacientes que la profilaxis con Cefuroxima intracameral a 1 mg/0.1 mL previene en casi 5 veces la endoftalmitis postoperatoria.'
    ],
    landmarkTrials: [
      {
        name: 'Endophthalmitis Vitrectomy Study (EVS)',
        year: '1995',
        conclusion: 'La vitrectomía inmediata benefició de forma estadísticamente significativa exclusivamente a ojos con agudeza visual de percepción luminosa (PL); los antibióticos sistémicos intravenosos fueron innecesarios.',
        fellowshipRelevance: 'El ensayo clínico más influyente de la historia en infecciones intraoculares postquirúrgicas.'
      },
      {
        name: 'ESCRS Study on Endophthalmitis Prophylaxis',
        year: '2007',
        conclusion: 'La cefuroxima intracameral al final de la facoemulsificación redujo la incidencia de endoftalmitis postoperatoria de 0.35% a 0.07%.',
        fellowshipRelevance: 'Transformó los protocolos médico-legales y de bioseguridad quirúrgica en todo el planeta.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: En TASS: Necrosis coagulativa masiva del endotelio corneal con lisis celular difusa, pérdida de las uniones ocluyentes y marcada trabeculitis estéril con depósitos proteicos amorfos. En Endoftalmitis: Abscesos vítreos con millones de polimorfonucleares neutrófilos desintegrados (piocitos), infiltración transmural de la retina y desorganización de la elipsoide por exotoxinas bacterianas.',
    surgicalPearls: [
      'Al realizar punción vítrea diagnóstica (Tap): Introducir aguja de 25G a 3.5 mm del limbo en el cuadrante inferotemporal dirigida hacia el centro de la cavidad vítrea; aspirar lentamente 0.1 a 0.2 mL antes de inyectar los antibióticos para no sobrepresurizar el ojo.',
      'En vitrectomía por endoftalmitis: Cortar a alta frecuencia en el centro del vítreo para despejar el eje visual sin traccionar la base del vítreo ni forzar el desprendimiento del hialoides posterior adherido a la retina friable.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 73 años operada de facoemulsificación sin complicaciones aparentes en el día de ayer, acude a su control del día 1 postoperatorio. No refiere dolor ocular significativo, pero la agudeza visual es de Cuenta Dedos a 1 metro. A la biomicroscopía se evidencia un edema corneal estromal difuso que se extiende simétricamente de limbo a limbo en 360 grados, fibrina en cámara anterior y un nivel de hipopion estéril de 1 mm. La pupila está midriática fija a 5 mm. La ecografía modo B muestra una cavidad vítrea completamente transparente y anecoica sin ecos celulares. ¿Cuál es el diagnóstico de certeza, qué diferencia cardinal tiene con la endoftalmitis infecciosa aguda y cuál es el régimen terapéutico inmediato?',
        answer: '1) Diagnóstico de Certeza:\n   - Síndrome Tóxico del Segmento Anterior (TASS - Toxic Anterior Segment Syndrome) en ojo derecho.\n2) Diferencias Cardinales con la Endoftalmitis Infecciosa Aguda:\n   - Cronología: El TASS debuta de forma ultraprecoz en las primeras 12 a 24 horas postoperatorias; la endoftalmitis bacteriana aguda debuta clásicamente al 3º a 7º día.\n   - Sintomatología: En TASS el dolor es mínimo o ausente; en endoftalmitis el dolor es severo, punzante y progresivo.\n   - Compromiso Corneal: En TASS el edema corneal es difuso de "limbo a limbo" por toxicidad endotelial química directa; en endoftalmitis el edema suele ser sectorial o estromal tardío.\n   - Compromiso Vítreo: En TASS el humor vítreo está rigurosamente LIMPIO y anecoico en ecografía B; en endoftalmitis la vitritis densa con ecos abundantes es la regla.\n3) Régimen Terapéutico Inmediato:\n   - Corticoterapia Tópica de Alta Potencia Intensiva: Acetato de Prednisolona al 1% (o Dexametasona tópica) 1 gota CADA HORA durante el día y pomada nocturna.\n   - Corticoterapia Sistémica Coadyuvante: Prednisona oral a 1 mg/kg/día (60 mg/día) con protección gástrica.\n   - Control de la PIO con colirios hipotensores tópicos no prostaglandínicos (Dorzolamida + Timolol cada 12h).\n   - Monitoreo en 12 a 24 horas: Se espera una mejoría clínica espectacular con aclaramiento del edema corneal. Si en 24 horas el cuadro no mejora o el vítreo se enturbia, se debe reclasificar como sospecha de endoftalmitis e inyectar Vancomicina + Ceftazidima intravítreas.\n   - Notificación y Auditoría: Alertar inmediatamente a la central de esterilización para poner en cuarentena los autoclaves y revisar los detergentes enzimáticos del instrumental.',
        trap: 'Confundir el cuadro con endoftalmitis e inyectar antibióticos intravítreos innecesarios en la cavidad vítrea sin ecografía, o no administrar esteroides tópicos intensivos permitiendo la necrosis endotelial permanente.'
      }
    ]
  },

  // =========================================================================
  // 10. EDEMA MACULAR QUÍSTICO PSEUDOFÁQUICO (SÍNDROME DE IRVINE-GASS)
  // =========================================================================
  {
    id: 'deep-catarata-edema-macular-irvine-gass',
    title: 'Edema Macular Quístico Pseudofáquico (Síndrome de Irvine-Gass): Fisiopatología, Diagnóstico Multimodal y Terapia Sinérgica Corticoide + AINE',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre el Edema Macular Quístico Pseudofáquico (Síndrome de Irvine-Gass): Incidencia clínica (1-2%) vs angiográfica/tomográfica (hasta 10-20%), mediadores inflamatorios prostaglandínicos y citoquinas vítreas, pico de presentación a las 4-6 semanas postoperatorias, diagnóstico multimodal con SD-OCT (quistes en plexiforme externa) y FAG (patrón patognomónico en pétalos de flor con tinción papilar), factores de riesgo predisponentes (rotura capsular, diabetes, uveítis, tracción vítrea) y tratamiento escalonado sinérgico con AINEs y corticoides tópicos, perioculares e intravítreos (Ozurdex).',
    definitionAndEpidemiology: 'El Síndrome de Irvine-Gass es el Edema Macular Quístico (EMQ) que se desarrolla tras la cirugía de catarata no complicada o complicada. Fue descrito angiográficamente por S. Rodman Irvine (1953) y J. Donald M. Gass (1966). El EMQ subclínico detectable por SD-OCT o angiografía ocurre en el 10% al 20% de las facoemulsificaciones no complicadas, pero solo un 1.0% a 2.5% de los pacientes desarrollan EMQ clínicamente significativo con pérdida de agudeza visual. En cirugías complicadas con rotura capsular o pérdida de vítreo, la incidencia se dispara hasta un 15-30%.',
    anatomyAndPathophysiology: '1. Cascada Inflamatoria y Ruptura de Barrera Hematorretiniana:\n   • El trauma quirúrgico sobre el iris, cuerpo ciliar y cristalino estimula la liberación intraocular de fosfolipasa A2 y ácido araquidónico.\n   • Activación masiva de la ciclooxigenasa (COX-1 y COX-2) con síntesis de prostaglandinas inflamatorias (PGE2, PGF2α) y citoquinas (VEGF, IL-6).\n   • Estas moléculas difunden retrógradamente a través de la cavidad vítrea hacia la retina foveal.\n   • Las prostaglandinas aumentan la permeabilidad vascular endotelial de la red capilar perifoveal, rompiendo la barrera hematorretiniana interna.\n2. Localización Anatómica de los Quistes en Capa de Henle:\n   • El fluido proteico seroso se acumula en los espacios intercelulares de la capa plexiforme externa (capa de fibras de Henle) y capa nuclear interna de la mácula.\n   • Debido a la disposición radial anatómica oblicua de los axones de los conos foveales en la capa de Henle, los quistes adoptan una configuración geométrica estrellada centrada en la foveola, conformando el patrón clásico en "pétalos de flor".\n3. Cronología Típica de Presentación:\n   • El pico de incidencia ocurre entre las 4 y 6 semanas postoperatorias (coincidiendo muchas veces con la suspensión prematura de las gotas antiinflamatorias postoperatorias prescritas).',
    clinicalExamination: {
      biomicroscopy: 'En lámpara de hendidura con lente de no contacto (90D / Superfield) bajo dilatación máxima: Pérdida del reflejo foveolar normal en diana, engrosamiento retiniano macular y visualización de pequeños microquistes transparentes translúcidos foveolares.',
      fundus: 'Edema papilar hiperémico leve concomitante en hasta un 30-50% de los casos (capilaritis papilar reaccional). En polo anterior: Descartar mechas vítreas incarceradas en la incisión o tracción pupilar.',
      specialSigns: '• Patrón en "pétalos de flor" (*flower-petal pattern*) en la angiografía con fluoresceína en fases tardías.\n• Fuga hiperfluorescente de la papila óptica ("fuga papilar caliente").'
    },
    diagnosticWorkup: [
      {
        test: 'Tomografía de Coherencia Óptica de Dominio Espectral (SD-OCT)',
        findings: 'ESTUDIO DIAGNÓSTICO DE PRIMERA LÍNEA: Cuantificación del grosor foveal central (aumento del CST >300-450 µm) y visualización nítida de espacios quísticos hiporreflectivos intrarretinianos tabicados en la capa plexiforme externa y nuclear interna foveal, con o sin fluido subretiniano asociado.'
      },
      {
        test: 'Angiografía con Fluoresceína (FAG)',
        findings: 'Fase Temprana: Fuga capilar perifoveal difusa en manguito. Fase Tardía (10-15 minutos): Acumulación hiperfluorescente de colorante en pétalos de flor rodeando la foveola avascular, asociada a hiperfluorescencia y tinción tardía del disco óptico.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Edema Macular Diabético (DME) Exacerbado por Cirugía',
        distinction: 'Presencia de exudados duros lipídicos, microaneurismas y hemorragias retinianas previas en el polo posterior.'
      },
      {
        condition: 'Edema Macular por Oclusión Venosa Retiniana de Rama (BRVO)',
        distinction: 'Distribución sectorial confinada a un cuadrante venoso con hemorragias en llama y cruces arteriovenosos patológicos.'
      },
      {
        condition: 'Membrana Epirretiniana Traccional Previa',
        distinction: 'Lámina hiperreflectiva sobre la limitante interna con arrugamiento de capas retinianas internas.'
      }
    ],
    steppedManagement: {
      medical: 'Estrategia Terapéutica Escalonada Sinérgica:\n• Paso 1 (Terapia Combinada Sinérgica Tópica de Primera Línea durante 8 a 12 Semanas):\n  - Corticoide Tópico de Alta Penetración: Acetato de Prednisolona 1% cada 6 horas (o Dexametasona 0.1%).\n  - ASOCIADO A AINE Tópico de Alta Eficacia: Nepafenaco 0.3% una vez al día (o Ketorolaco 0.5% cada 6-8 horas, o Bromfenaco 0.09% cada 12 horas).\n  - Racionalidad Biológica: Los corticoides inhiben la fosfolipasa A2 y los AINEs bloquean directamente la ciclooxigenasa (COX-1/COX-2), logrando un bloqueo enzimático bidireccional de la síntesis de prostaglandinas con tasas de resolución del 80-90%.\n• Paso 2 (Casos Refractarios a Gotas Tópicas tras 4 a 6 Semanas):\n  - Inyección Periocular Subtenoniana Posterior de Acetónido de Triamcinolona: 40 mg en 1 mL en cuadrante superotemporal.\n  - Corticoterapia Oral: Prednisona oral a 0.5 mg/kg/día durante 2 semanas con descenso progresivo.\n• Paso 3 (EMQ Crónico Persistente o Recurrente):\n  - Implante Intravítreo Liberador de Dexametasona 0.7 mg (Ozurdex): Gran potencia antiinflamatoria mantenida durante 4 a 6 meses con resolución del edema en >85% de los casos refractarios.\n  - Inyecciones Intravítreas de Anti-VEGF (Ranibizumab o Aflibercept) si coexiste componente vascular o retinopatía.',
      surgical: 'Manejo Quirúrgico de Complicaciones Mecánicas:\n• Si el EMQ se asocia a mechas vítreas incarceradas en la incisión corneal con tracción anteroposterior del iris:\n  - Liberación con Nd:YAG Láser de la mecha vítrea corneal en la lámpara de hendidura.\n  - Si es refractario: Vitrectomía anterior bimanual pars plana formal con pupiloplastia para eliminar el anclaje traccional sobre la base del vítreo.'
    },
    clinicalApplicationPractical: 'Prevención Obligatoria en Pacientes Diabéticos: En todo paciente con diabetes mellitus (incluso sin retinopatía diabética aparente), prescribir un AINE tópico (Nepafenaco o Ketorolaco) iniciando 3 días antes de la cirugía de catarata y manteniéndolo durante 8 a 12 semanas postoperatorias; esto reduce en más de un 80% la incidencia de Irvine-Gass.\\n\\nCuidado al suspender las gotas al mes: El paciente que acude al mes post-faco viendo 20/20 puede presentar una caída visual a las 5 o 6 semanas al suspender los colirios; sospechar siempre Irvine-Gass y solicitar SD-OCT foveal inmediato.',
    highYieldPearl: 'Irvine-Gass: Pico a las 4-6 semanas postoperatorias por prostaglandinas. SD-OCT: quistes en capa de Henle. FAG: pétalos de flor + fuga papilar caliente. Terapia de primera línea: Combinación sinérgica de Corticoide tópico + AINE tópico por 8-12 semanas.',
    keyDrugs: [
      {
        name: 'Nepafenaco Tópico 0.3% (Nevanac)',
        dose: '1 gota al día en el ojo operado durante 8 a 12 semanas.',
        warning: 'Profármaco que penetra intacto la córnea y se bioactiva a amfenaco en la cámara anterior y retina; menor toxicidad epitelial que ketorolaco.'
      },
      {
        name: 'Acetato de Prednisolona 1% (Pred Forte)',
        dose: '1 gota cada 6 horas durante 4 semanas, luego cada 8 horas por 4 semanas y reducción gradual.',
        warning: 'Monitorear presión intraocular por riesgo de respuesta hipertensiva esteroidea.'
      },
      {
        name: 'Implante Intravítreo de Dexametasona 0.7 mg (Ozurdex)',
        dose: 'Inyección intravítrea única en casos crónicos refractarios a terapia tópica.',
        warning: 'Biodegradable; vigilar PIO y verificar que el LIO y la cápsula estén íntegros para evitar migración del implante a cámara anterior.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Capa Retiniana de los Quistes en Irvine-Gass',
        category: 'Pregunta Clásica',
        description: '¿En qué capa anatómica de la retina se localizan primariamente los espacios quísticos del Síndrome de Irvine-Gass? Respuesta: En la Capa Plexiforme Externa (Capa de fibras de Henle), y secundariamente en la Capa Nuclear Interna.',
        trapToAvoid: 'Responder que se localizan en la capa de fibras nerviosas o bajo el epitelio pigmentario.'
      },
      {
        title: 'FAG: Pétalos de Flor y Fuga Papilar',
        category: 'Asociación Patognomónica',
        description: 'La combinación de acumulación en "pétalos de flor" foveolar con tinción e hiperfluorescencia del disco óptico en fases tardías de la FAG es diagnóstica de Irvine-Gass y lo diferencia del edema macular diabético simple.',
        trapToAvoid: 'Describir pétalos de flor sin hiperfluorescencia papilar como específico de Irvine-Gass.'
      },
      {
        title: 'Sinergia Farmacológica AINE + Corticoide',
        category: 'Cifra Clave de Corte',
        description: 'Los ensayos clínicos demuestran que la combinación de un AINE tópico + Corticoide tópico es significativamente superior a cualquiera de los dos fármacos en monoterapia para acelerar la resolución del edema y recuperar la agudeza visual.',
        trapToAvoid: 'Retirar el corticoide y dejar solo el AINE al diagnosticar un Irvine-Gass activo.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudio Landmark PREMED (ESCRS, JCRS 2018): Ensayo multicéntrico europeo aleatorizado en 914 pacientes que demostró que la combinación de AINE tópico (Bromfenaco) + Corticoide tópico redujo la incidencia de EMQ a solo 1.5% frente al 4.2% del corticoide solo y 3.8% del AINE solo.',
      'Ensayo POINT (MUST Study Group, Ophthalmology 2019): Validó la superioridad de los corticoides locales (triamcinolona subtenoniana y Ozurdex) sobre los anti-VEGF para el control del edema macular inflamatorio.'
    ],
    landmarkTrials: [
      {
        name: 'PREMED Study (Prevention of Macular Edema after Cataract Surgery - ESCRS)',
        year: '2018',
        conclusion: 'La combinación de corticoides tópicos y AINEs tópicos es el régimen de profilaxis y tratamiento más eficaz contra el edema macular pseudofáquico.',
        fellowshipRelevance: 'Estableció el estándar clínico universal de prescripción postoperatoria en cirugía de catarata moderna.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Vacuolización y degeneración hidrópica de las células gliales de Müller foveolares con pérdida de las uniones intercelulares y acumulación de fluido rico en albúmina en la capa plexiforme externa; ausencia de proliferación neovascular intrínseca.',
    surgicalPearls: [
      'Si se identifica una mecha vítrea tironeando de la incisión en un paciente con Irvine-Gass: Aplicar Láser Nd:YAG en la lámpara de hendidura enfocando sobre la mecha de vítreo en la cámara anterior con energía de 1.5 a 2.5 mJ para seccionar la hebra; la liberación de la tracción suele resolver el edema macular en pocas semanas.',
      'En pacientes con antecedente de uveítis o diabetes que requieren cirugía de catarata: Aplicar profilaxis con AINEs tópicos durante 12 semanas y considerar una inyección subtenoniana de triamcinolona o implante de Ozurdex al finalizar la facoemulsificación.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 69 años sin antecedentes diabéticos fue intervenida de facoemulsificación en ojo izquierdo hace 5 semanas sin complicaciones intraoperatorias aparentes, alcanzando 20/20 a la semana. En la semana 4 suspendió las gotas postoperatorias de corticoide según la pauta indicada. Hoy consulta por visión borrosa indolora y ondulación de las líneas rectas (metamorfopsia) en el ojo operado, con caída de agudeza visual a 20/60. El segmento anterior está tranquilo sin celularidad y el LIO está perfectamente centrado en el saco. El SD-OCT foveal revela múltiples espacios quísticos intrarretinianos foveales con un grosor central de 480 µm. ¿Cuál es el diagnóstico de certeza, cuál es su pico fisiopatológico de presentación y cuál es el régimen farmacológico sinérgico de primera línea?',
        answer: '1) Diagnóstico de Certeza:\n   - Edema Macular Quístico Pseudofáquico (Síndrome de Irvine-Gass) en ojo izquierdo.\n2) Pico Fisiopatológico de Presentación:\n   - El pico de incidencia del Síndrome de Irvine-Gass ocurre típicamente entre las 4 y 6 semanas postoperatorias, desencadenado por la síntesis y difusión persistente de prostaglandinas inflamatorias a través de la cavidad vítrea hacia la red capilar perifoveal, lo cual coincide frecuentemente con la retirada del tratamiento antiinflamatorio postoperatorio.\n3) Régimen Farmacológico Sinérgico de Primera Línea:\n   - Terapia Combinada Dual Tópica (Evidencia Ensayo PREMED - ESCRS):\n     * Corticoide Tópico de Alta Penetración: Acetato de Prednisolona al 1% (o Dexametasona 0.1%) 1 gota cada 6 horas durante 4 semanas, reduciendo gradualmente a lo largo de un total de 8 a 12 semanas.\n     * ASOCIADO A: AINE Tópico potente: Nepafenaco al 0.3% una vez al día (o Ketorolaco al 0.5% cada 6 horas) durante 8 a 12 semanas ininterrumpidas.\n     * Racionalidad: Los corticoides inhiben la vía de la fosfolipasa A2 y los AINEs inhiben la ciclooxigenasa (COX-1/COX-2), logrando un bloqueo sinérgico completo de la síntesis de prostaglandinas.\n   - Control con SD-OCT en 4 semanas para documentar la reabsorción de los quistes foveales y descartar respuesta hipertensiva esteroidea.',
        trap: 'Asumir que se trata de una membrana epirretiniana o recetar solo lubricantes oculares sin instaurar la terapia combinada de corticoide + AINE a tiempo.'
      }
    ]
  },

  // =========================================================================
  // 11. LIOS TÓRICOS Y PREMIUM PARA PRESBICIA (EDOF Y MULTIFOCALES)
  // =========================================================================
  {
    id: 'deep-catarata-lios-toricos-premium-presbicia',
    title: 'LIOs Tóricas y Premium para Presbicia (EDOF, Trifocales): Selección del Paciente, Eje de Astigmatismo y Manejo de Disfotopsias',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre lentes intraoculares avanzadas (LIOs Premium): LIOs Tóricas (cálculo con queratometría posterior total - Total Keratometry, marcado del eje pre e intraoperatorio, regla de rotación de 3° = 10% de pérdida de efecto cilíndrico) vs LIOs de Rango Extendido de Foco (EDOF - frente de onda esférico y estenopeico) vs LIOs Trifocales difractivas, criterios estrictos de selección del paciente, y algoritmo diagnóstico y terapéutico de disfotopsias positivas (halos, glare, starbursts) y negativas.',
    definitionAndEpidemiology: 'Las Lentes Intraoculares Premium (LIOs Tóricas, EDOF y Trifocales) buscan la independencia de gafas tanto para distancia lejana como intermedia y cercana. Aproximadamente el 35-40% de los pacientes candidatos a cirugía de catarata presentan un astigmatismo corneal corneal corneal ≥1.0 D que justifica corrección con LIO tórico. Las LIOs para presbicia representan más del 15-25% de los implantes en la práctica privada contemporánea.',
    anatomyAndPathophysiology: '1. Principios Ópticos de las LIOs Tóricas y la Regla del Eje:\n   • Corrigen el astigmatismo corneal regular mediante curvaturas cilíndricas talladas en la superficie anterior o posterior de la óptica.\n   • REGLA CLAVE DE ROTACIÓN: Por cada 1 grado (1°) que un LIO tórico se desalinea o rota respecto al meridiano corneal empinado diana, pierde aproximadamente un 3.3% de su poder cilíndrico efectivo. Si el LIO rota 30 grados, el efecto cilíndrico se neutraliza por completo (0% de corrección), y si rota más de 30°, introduce un nuevo astigmatismo en un eje oblicuo peor que el basal.\n   • Importancia del Astigmatismo Corneal Posterior: La superficie posterior de la córnea actúa como una lente negativa divergente que genera en promedio 0.3 a 0.5 D de astigmatismo contra la regla (vertical). Ignorar la cara posterior sobrecorrige los astigmatismos con la regla e infracorrige los contra la regla.\n2. Óptica de las LIOs para Presbicia (Trifocales vs EDOF):\n   • LIOs Trifocales Difractivas: Dividen el frente de onda de luz incidente en tres focos focales discretos (lejos, intermedio a 60 cm y cerca a 40 cm) mediante escalones o anillos concéntricos difractivos. Proporcionan excelente agudeza visual de cerca, pero causan dispersión de luz secundaria con pérdida de sensibilidad al contraste y disfotopsias fotópicas (halos y destellos nocturnos).\n   • LIOs de Profundidad de Foco Extendida (EDOF - *Extended Depth of Focus*): Elongación continua del foco mediante aberración esférica negativa controlada o tecnología no difractiva de frente de onda; proporcionan excelente visión de lejos e intermedia con mínimos halos, pero requieren apoyo para lectura de letra muy fina de cerca.\n3. Disfotopsias Positivas vs Negativas:\n   • Disfotopsias Positivas: Fenómenos luminosos no deseados (halos, deslumbramiento *glare*, destellos radiales *starbursts*) producidos por la difracción de los anillos o por la reflexión interna en los bordes cuadrados truncados del LIO.\n   • Disfotopsias Negativas: Sombra oscura arqueada o semilunar fija en el campo visual temporal periférico, producida por la sombra proyectada por el borde anterior de la capsulorrexis o por el espacio entre el iris y el LIO en ojos con cámara profunda.',
    clinicalExamination: {
      biomicroscopy: 'Verificación del centrado y rotación del LIO tórico en lámpara de hendidura con haz fino orientado sobre el transportador de grados. Examen corneal: Confirmación de superficie regular sin ojo seco ni queratopatía punteada.',
      fundus: 'Fóvea estrictamente normal sin drusas ni patología de la interfase vitreorretiniana.',
      specialSigns: '• Marcado de referencia preoperatorio con el paciente sentado erguido para evitar el ciclogiro torsional (que puede rotar el ojo de 5 a 10 grados al acostarse en la camilla).'
    },
    diagnosticWorkup: [
      {
        test: 'Topografía y Tomografía Corneal Scheimpflug (Pentacam / Sirius)',
        findings: 'CRITERIO OBLIGATORIO DE EXCLUSIÓN: Descartar astigmatismo irregular, queratocono frustro o ectasia; confirmar que el astigmatismo sea estrictamente regular y simétrico "en pajarita" (bow-tie).'
      },
      {
        test: 'Biometría Óptica con Total Keratometry (TK) y Calculador Barrett Toric',
        findings: 'Cálculo del LIO tórico incorporando directamente la curvatura posterior de la córnea medida por trazado de rayos o el algoritmo de predicción matemático de Barrett.'
      },
      {
        test: 'Aberrometría de Frente de Onda y Análisis de Células Endoteliales',
        findings: 'Determinación de la aberración esférica corneal total (Zernike Z 4,0); pacientes con aberraciones corneales de alto orden (HOA) elevadas (>0.3-0.4 µm) son malos candidatos para LIOs difractivos.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Disfotopsias por Mal Alveolado o Desalineación vs Neuroadaptación Fisiológica',
        distinction: 'Los halos normales disminuyen progresivamente a lo largo de 3 a 6 meses por neuroadaptación cortical; si el LIO está descentrado o basculado, las disfotopsias persisten intensas.'
      },
      {
        condition: 'Opacificación Capsular Posterior Temprana (PCO)',
        distinction: 'Perlas de Elschnig que incrementan la dispersión de luz sobre los anillos difractivos simulando falla de la óptica del LIO.'
      }
    ],
    steppedManagement: {
      medical: 'Criterios Estrictos de Selección del Paciente para LIOs Multifocales:\n• Contraindicaciones Absolutas: Ojo seco moderado a severo, distrofia endotelial de Fuchs, degeneración macular senil (DMAE) en cualquier estadio, retinopatía diabética, glaucoma con defectos campimétricos, antecedentes de cirugía refractiva con aberraciones altas, y personalidades hipercríticas o conductores nocturnos profesionales.\n• Manejo del Astigmatismo Residual Post-LIO Tórico:\n  - Si el LIO tórico rotó en las primeras 2-3 semanas: Utilizar la calculadora online de rotación (AstigmatismFix.com o Berdahl & Hardten Calculator) ingresando la refracción manifiesta y el eje actual del LIO para determinar cuántos grados rotarlo en quirófano.\n• Manejo de las Disfotopsias Positivas Persistentes:\n  - Tranquilizar y explicar el proceso de neuroadaptación cerebral (esperar 3-6 meses).\n  - Colirios mióticos suaves (Brimonidina 0.1% o Pilocarpina 0.5% nocturna) para reducir el diámetro pupilar y ocultar los anillos periféricos del LIO en la oscuridad.\n  - Tratamiento intensivo de la lágrima artificial.',
      surgical: 'Técnicas Quirúrgicas Específicas:\n• Marcado del Eje en LIOs Tóricas: Marcar los meridianos de 0 y 180 grados con el paciente sentado recto mirando al frente; en quirófano, alinear las marcas de la lente exactamente sobre el meridiano empinado calculado.\n• Reposicionamiento Quirúrgico de LIO Tórico Rotado:\n  - Momento ideal: A las 1 a 3 semanas postoperatorias antes de que ocurra fusión capsular densa.\n  - Técnica: Entrar por paracentesis, inyectar viscoelástico cohesivo para abrir suavemente el saco capsular y rotar el LIO con espátula de Kuglen hasta el nuevo meridiano óptimo calculado.\n• Recambio del LIO (IOL Exchange) en Disfotopsias Intolerables:\n  - Si el paciente presenta disfotopsias intolerables tras 6 meses sin neuroadaptación: Recambiar el LIO multifocal por un LIO monofocal o EDOF asférico mediante corte óptico a través de incisión de 2.4 mm.'
    },
    clinicalApplicationPractical: 'Consejo Cardinal en Consulta de LIOs Premium: La clave del éxito de un LIO multifocal reside en el manejo de las expectativas del paciente. Decirle siempre antes de la cirugía: "Usted verá halos y destellos luminosos alrededor de los faros de noche durante los primeros meses; su cerebro aprenderá a ignorarlos gradualmente". Si el paciente lo sabe antes, lo acepta como parte del proceso; si lo descubre después, lo considerará una complicación quirúrgica.\\n\\nCuidado con el Láser YAG precoz: NUNCA realizar capsulotomía con Láser YAG precoz en un paciente insatisfecho con un LIO multifocal; una vez abierta la cápsula posterior, el recambio quirúrgico del LIO se vuelve diez veces más complejo y riesgoso por pérdida de vítreo.',
    highYieldPearl: 'Por cada 1° de rotación de un LIO tórico se pierde ~3.3% del poder cilíndrico (a 30° la corrección es CERO). En LIOs multifocales difractivos, NUNCA realizar capsulotomía YAG prematura si el paciente está insatisfecho, ya que dificulta enormemente un recambio.',
    keyDrugs: [
      {
        name: 'Tartrato de Brimonidina 0.1% (Alphagan P)',
        dose: '1 gota en la noche 30 minutos antes de conducir.',
        warning: 'Induce miosis farmacológica suave sin espasmo acomodativo, reduciendo los halos nocturnos en pacientes con LIOs multifocales.'
      },
      {
        name: 'Lágrimas Artificiales de Hialuronato Sódico al 0.15% con Ectoína',
        dose: '1 gota 4 veces al día.',
        warning: 'Estabiliza el film lagrimal previniendo aberraciones de alto orden de la superficie corneal.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Regla del 1° = 3.3% en LIOs Tóricas',
        category: 'Cifra Clave de Corte',
        description: 'La rotación de un LIO tórico reduce su eficacia a razón de 3.3% por grado. A los 10° pierde un tercio de su efecto; a los 30° el astigmatismo residual es igual al preoperatorio en magnitud; a >30° incrementa el astigmatismo.',
        trapToAvoid: 'Dejar un LIO tórico desalineado 20 grados creyendo que "casi no afectará la visión".'
      },
      {
        title: 'Astigmatismo Corneal Posterior: Dirección',
        category: 'Pregunta Clásica',
        description: 'La cara posterior de la córnea genera un astigmatismo promedio de 0.30 a 0.50 D con orientación "Contra la Regla" (eje vertical más curvo actuando como lente cóncava negativa).',
        trapToAvoid: 'Ignorar la curvatura posterior y sobrecorregir astigmatismos con la regla.'
      },
      {
        title: 'Capsulotomía YAG en LIOs Premium Insatisfechos',
        category: 'Trampa de Tribunal',
        description: 'Realizar capsulotomía YAG en un paciente con disfotopsias graves rompe la cápsula posterior, impidiendo un recambio seguro del LIO en el saco capsular. Primero se debe agotar la adaptación y, si persiste, recambiar con cápsula cerrada.',
        trapToAvoid: 'Hacer capsulotomía YAG precoz pensando que "limpiará los halos" de un LIO multifocal.'
      }
    ],
    fellowshipKeyPoints: [
      'Calculadora Barrett Toric (Graham Barrett, JCRS 2016): Demostró ser significativamente más precisa que los métodos tradicionales al incorporar un modelo matemático predictivo del astigmatismo corneal posterior, reduciendo los errores refractivos en más del 40%.',
      'Consenso de la ASCRS sobre Disfotopsias (Masket et al., JCRS 2018): Estableció que las disfotopsias negativas se deben a la sombra proyectada por el borde anterior de la rexis sobre la superficie del LIO y se resuelven mediante captura óptica inversa o piggyback.'
    ],
    landmarkTrials: [
      {
        name: 'Barrett Toric Calculator with Predicted Posterior Corneal Astigmatism',
        year: '2016',
        conclusion: 'El cálculo tórico que incorpora la córnea posterior redujo significativamente el astigmatismo residual no deseado post-cirugía.',
        fellowshipRelevance: 'Calculador universal estándar adoptado en las plataformas biométricas globales.'
      }
    ],
    histopathologyAndGenetics: 'Óptica Física: Las LIOs trifocales difractivas funcionan por el principio de superposición de ondas de Huygens-Fresnel, donde microestructuras concéntricas con alturas escalonadas del orden de micrómetros inducen diferencias de fase que enfocan la luz en órdenes difractivos 0 (lejos), +1 (intermedio) y +2 (cerca).',
    surgicalPearls: [
      'Al implantar un LIO tórico: Aspirar exhaustivamente todo el viscoelástico que quede DETRÁS del LIO en el saco capsular; el viscoelástico retenido retro-óptico es la causa principal de rotura del LIO durante las primeras 6 a 12 horas postoperatorias.',
      'Alineación intraoperatoria: Sobrecorregir ligeramente la rotación unos 2-3 grados en sentido contrario al sentido de las agujas del reloj antes de aspirar el viscoelástico, ya que al desinflar la cámara el LIO suele girar levemente en el sentido horario.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 54 años altamente motivada para eliminar sus gafas de lectura y de lejos solicita una lente intraocular trifocal en ambos ojos. Durante el examen preoperatorio, usted constata una agudeza visual corregida de 20/20 bilateral, pero en la tomografía de coherencia óptica (SD-OCT) identifica una sutil membrana epirretiniana parafoveal en ojo derecho sin tracción ni edema y en la biomicroscopía se aprecian glándulas de Meibomio obstruidas con tiempo de rotura lagrimal (BUT) de 4 segundos. ¿Es esta paciente una buena candidata para un LIO trifocal difractivo, qué complicaciones funcionales experimentará si se implanta y qué alternativa premium de menor riesgo debe recomendarle?',
        answer: '1) Candidatura:\n   - La paciente NO ES una buena candidata para una lente intraocular trifocal difractiva en este momento (presenta dos contraindicaciones relativas mayores).\n2) Complicaciones Funcionales si se Implanta un LIO Trifocal:\n   - Disfunción de Superficie Ocular (Ojo Seco / DGM): La película lagrimal irregular dispersa la luz y altera la óptica difractiva del LIO, provocando fluctuación visual constante, caída marcada de la sensibilidad al contraste y aumento intolerable de deslumbramientos (*glare*) y halos.\n   - Membrana Epirretiniana (MER): Las LIOs difractivas dividen la energía luminosa en varios focos (perdiendo entre un 15% y 18% de luz por dispersión difractiva inherente). Si la retina foveal presenta una patología de la interfase que altera los fotorreceptores, la pérdida acumulativa de sensibilidad al contraste resultará en una visión borrosa y "lavada" permanente muy frustrante para la paciente.\n3) Conducta y Alternativa Recomendada:\n   - Paso 1: Tratar agresivamente la superficie ocular durante 4 semanas (compresas tibias, higiene palpebral, lágrimas artificiales sin conservantes) hasta normalizar el BUT (>10 s) y regularizar la topografía corneal.\n   - Alternativa de LIO de Elección: En lugar de un LIO trifocal difractivo, ofrecer un LIO Monofocal Plus o una lente de Rango Extendido de Foco No Difractiva (EDOF basada en frente de onda, ej. Alcon Vivity o Tecnis Eyhance) que no divide la luz en focos discretos ni genera pérdida de contraste, tolerando mucho mejor la presencia de la membrana epirretiniana y proporcionando excelente visión lejana e intermedia.',
        trap: 'Implantar un LIO trifocal difractivo en presencia de una enfermedad de la superficie ocular no tratada o patología macular incipiente.'
      }
    ]
  },

  // =========================================================================
  // 12. OPACIFICACIÓN CAPSULAR POSTERIOR (PCO) Y LÁSER ND:YAG
  // =========================================================================
  {
    id: 'deep-catarata-opacificacion-capsular-yag',
    title: 'Opacificación Capsular Posterior (PCO), Biología de Células Epiteliales del Cristalino y Capsulotomía con Láser Nd:YAG',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre la complicación tardía más frecuente de la cirugía de catarata: Opacificación Capsular Posterior (PCO - "segunda catarata"), proliferación y metaplasia de células epiteliales residuales (células LEC de zona ecuatorial y subcapsular anterior), perlas de Elschnig y anillo de Soemmerring, prevención con biomateriales y diseño de borde cuadrado posterior de 360°, técnica estandarizada de Capsulotomía con Láser Nd:YAG (energía mínima eficaz, patrón en cruz/cruce y tamaño calibrado al diámetro pupilar mesópico) y prevención de complicaciones (picos de PIO, fosas en el LIO "lens pitting", desprendimiento de retina y edema de Irvine-Gass).',
    definitionAndEpidemiology: 'La Opacificación Capsular Posterior (PCO - *Posterior Capsule Opacification*) es la complicación postoperatoria tardía más prevalente de la cirugía de catarata, ocurriendo en el 20% al 40% de los ojos de adultos entre los 2 y 5 años postoperatorios, y en prácticamente el 100% de los ojos pediátricos si no se realiza capsulorrexis posterior primaria. Es la indicación número uno de procedimientos con láser en pacientes operados de catarata.',
    anatomyAndPathophysiology: '1. Biología Celular de la PCO:\n   • Tras la aspiración de la catarata, persisten células epiteliales del cristalino (LEC) metabólicamente activas en la cara interna de la cápsula anterior residual (células "A") y en el ecuador capsular (células "E").\n   • Proliferación y Migración Ecuatorial (Tipo Perlas de Elschnig):\n     - Las células "E" del ecuador proliferan y migran activamente sobre la cápsula posterior hacia el eje visual, donde se diferencian en racimos de células gigantes redondeadas vesiculares transparentes u opacas conocidas como "Perlas de Elschnig".\n     - La acumulación de restos corticales y células en el receso ecuatorial forma una banda gruesa anular periférica llamada "Anillo de Soemmerring".\n   • Metaplasia Fibrosa (Tipo Fibrosis Capsular):\n     - Las células "A" subcapsulares anteriores sufren una transición epitelio-mesénquima (EMT) mediada por TGF-beta, transformándose en miofibroblastos que secretan colágeno tipo I y III y alfa-actina de músculo liso, causando arrugamiento capsular y retracción fimótica de la rexis (*capsular phimosis*).\n2. Factores de Diseño del LIO que Previenen la PCO:\n   • Material del LIO: Los LIOs de acrílico hidrofóbico se adhieren biofísicamente a la cápsula posterior mediante fibronectina, bloqueando el espacio de migración celular.\n   • Diseño de Borde Posterior Cuadrado de 360 Grados (Square-Edge Barrier): El borde afilado en ángulo de 90 grados ejerce una presión focal concentrada sobre la cápsula que detiene físicamente el avance de las células epiteliales migratorias (efecto barrera de David Apple).',
    clinicalExamination: {
      biomicroscopy: 'En lámpara de hendidura con haz fino oblicuo y retroiluminación coaxial: Visualización de racimos de perlas transparentes refractivas en "huevas de rana" (perlas de Elschnig) sobre el eje pupilar posterior, o bandas de fibrosis capsular blanquecina densa con pliegues radiados que cruzan la fóvea. Valorar el espacio entre la cápsula posterior y la superficie posterior del LIO.',
      fundus: 'Pérdida de nitidez de los detalles del fondo de ojo y reducción del reflejo rojo de transiluminación.',
      specialSigns: '• Perlas de Elschnig en racimo.\n• Anillo de Soemmerring ecuatorial.\n• Fimosis capsular anterior con reducción concéntrica del diámetro de la capsulorrexis a <3 mm.'
    },
    diagnosticWorkup: [
      {
        test: 'Biomicroscopía con Iluminación en Retroiluminación Digital (Software EPCO)',
        findings: 'Cuantificación objetiva del porcentaje de opacidad capsular en el área pupilar central de 3 mm.'
      },
      {
        test: 'Tonometría de Aplanación de Goldmann Pre y Post-Láser',
        findings: 'Medición obligatoria de la PIO basal antes del láser y a la hora post-capsulotomía (detección de picos hipertensivos agudos por detritos capsulares en el trabéculo).'
      },
      {
        test: 'Oftalmoscopía Binocular Indirecta con Depresión Escleral Previa',
        findings: 'Examen de la periferia retiniana de 360 grados antes de disparar el láser para descartar desgarros retinianos asintomáticos o degeneración en empalizada (*lattice*) preexistente.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Síndrome de Distensión del Saco Capsular Tardío (Capsular Block Syndrome)',
        distinction: 'Acumulación de líquido lechoso transparente o blanco entre el LIO y la cápsula posterior distendida hacia atrás con miopización; se resuelve de forma espectacular al abrir la cápsula con láser YAG.'
      },
      {
        condition: 'Opacificación Intrínseca del Biomaterial del LIO (Glistenings / Calcificación)',
        distinction: 'Microvacuolas de agua dentro del espesor del polímero acrílico o depósitos de calcio dentro de la sustancia de LIOs hidrofílicos; la cápsula posterior está limpia.'
      }
    ],
    steppedManagement: {
      medical: 'Protocolo Profiláctico y Manejo Médico del Procedimiento con Láser Nd:YAG:\n• Preparación Previa:\n  - Instilar 1 gota de Tartrato de Brimonidina al 0.15% o Apraclonidina al 1% 30 a 45 minutos antes de la capsulotomía para prevenir el pico de hipertensión ocular post-láser.\n  - Dilatación pupilar moderada con Tropicamida 1% (evitar midriasis paralítica extrema que impida ver el centro pupilar mesópico del paciente).\n  - Anestesia tópica con Proparacaína al 0.5%.\n• Farmacoterapia Post-Láser:\n  - Corticoide Tópico de Potencia Media-Alta: Acetato de Prednisolona 1% o Fluorometolona cada 6 horas durante 5 a 7 días para sofocar la inflamación uveal reaccional.\n  - Control tensional a los 60 minutos post-láser; si la PIO aumenta >5 mmHg, administrar hipotensores adicionales.',
      surgical: 'Técnica de Capsulotomía con Láser Nd:YAG:\n• Selección de la Lente de Contacto: Utilizar lente de contacto de Abraham para capsulotomía YAG (con botón de aumento de +66 D) que amplía la imagen, estabiliza el ojo y actúa como disipador de calor corneal.\n• Parámetros del Láser:\n  - Modo fundamental (Q-switched Nd:YAG a 1064 nm).\n  - ENERGÍA MÍNIMA EFICAZ: Iniciar con 0.8 a 1.2 mJ por disparo (evitar disparos >2.0 mJ que dañan la superficie del LIO).\n  - Offset Posterior: Ajustar el desfase focal del haz de tratamiento entre 100 y 200 µm por DETRÁS del haz de puntería he-ne para no impactar la superficie posterior del LIO de acrílico o silicona.\n• Estrategia de Disparo (Técnica en Cruz o Canasta):\n  - Disparar a lo largo de las líneas de tensión capsular.\n  - Realizar una apertura cruciforme (en cruz o estrella de 4 puntas) o en canasta de herradura comenzando a las 12 horas y abriendo hacia los extremos.\n  - Tamaño de la Apertura: El diámetro de la capsulotomía debe ser igual al diámetro de la pupila en condiciones mesópicas (~3.5 a 4.0 mm); NUNCA hacer la apertura más grande que el diámetro óptico del LIO de 6.0 mm (permite la salida del vítreo anterior y descentrado del lente).'
    },
    clinicalApplicationPractical: 'Consejo para Evitar Dañar la Lente (Lens Pitting): El daño por impacto directo del láser YAG sobre la óptica del LIO (*lens pitting*) genera cráteres y microfisuras que producen deslumbramientos permanentes. Para evitarlo: 1) Ajustar siempre el offset posterior en la consola del láser; 2) Enfocar en la cápsula y disparar en las áreas donde la cápsula está más separada de la cara posterior del LIO; 3) Utilizar la mínima energía capaz de cortar el tejido (0.8 a 1.0 mJ).\\n\\nAdvertencia en Ojos Altos Miopes: En pacientes con longitud axial >26 mm, la capsulotomía con láser YAG eleva el riesgo de Desprendimiento de Retina Regmatógeno hasta 3-4 veces por desprendimiento del vítreo posterior inducido por la onda de choque; revisar minuciosamente la retina periférica antes de indicar el procedimiento.',
    highYieldPearl: 'PCO = proliferación de células epiteliales (perlas de Elschnig). Capsulotomía Nd:YAG: Usar mínima energía (0.8-1.2 mJ), offset posterior para evitar picar el LIO (lens pitting) y brimonidina profiláctica para evitar picos de PIO. Apertura calibrada a ~3.5-4 mm.',
    keyDrugs: [
      {
        name: 'Tartrato de Brimonidina 0.15% (Alphagan P)',
        dose: '1 gota 45 minutos antes y 1 gota inmediatamente después del láser Nd:YAG.',
        warning: 'Agonista alfa-2 que suprime la secreción acuosa y previene picos agudos de PIO causados por detritos capsulares.'
      },
      {
        name: 'Acetato de Prednisolona 1% (Pred Forte)',
        dose: '1 gota cada 6 horas durante 5 a 7 días post-láser.',
        warning: 'Suprime la uveítis anterior reaccional y previene el edema macular de Irvine-Gass post-YAG.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Perlas de Elschnig vs Células de Wedl',
        category: 'Asociación Patognomónica',
        description: 'Perlas de Elschnig = Proliferación postoperatoria tardía de células epiteliales sobre la cápsula posterior en pacientes pseudofáquicos. Células de Wedl = Células vesiculares que forman la catarata subcapsular posterior congénita o senil en pacientes fáquicos.',
        trapToAvoid: 'Confundir las perlas de Elschnig con las células de Wedl en una pregunta de histopatología.'
      },
      {
        title: 'Borde Cuadrado Posterior de 360° (Efecto David Apple)',
        category: 'Pregunta Clásica',
        description: 'La característica geométrica más importante de un LIO para prevenir la PCO es el BORDE POSTERIOR CUADRADO afilado de 90 grados en toda su circunferencia, que ejerce una barrera de presión física contra la migración celular.',
        trapToAvoid: 'Creer que el material hidrofílico previene mejor la PCO que el borde cuadrado hidrofóbico.'
      },
      {
        title: 'Complicaciones Graves del Láser Nd:YAG',
        category: 'Cifra Clave de Corte',
        description: 'Complicaciones documentadas de capsulotomía YAG: Pico agudo de PIO (más común, en >15-30% sin profilaxis), Lens Pitting (marcas en LIO), Desprendimiento de Retina Regmatógeno (riesgo relativo x3-4, especialmente en miopes altos) y Edema Macular Quístico de Irvine-Gass.',
        trapToAvoid: 'Considerar la capsulotomía YAG como un procedimiento "menor" exento de riesgo de desprendimiento de retina.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudios de David Apple et al. (Surv Ophthalmol 2000): Demostraron en miles de ojos postmortem que el diseño de borde cuadrado posterior continuo y la angulación de las hápticas son los factores determinantes para bloquear la proliferación de células de Elschnig hacia el eje visual.',
      'Incidencia de Desprendimiento de Retina post-YAG (Am J Ophthalmol 2012): La onda de choque fotodisruptiva del láser YAG licua el gel vítreo anterior e induce desprendimiento de vítreo posterior agudo, con una tasa de desgarro retiniano del 1% al 2% en miopes magnos.'
    ],
    landmarkTrials: [
      {
        name: 'The Square-Edge Barrier Concept for Prevention of PCO (Apple et al.)',
        year: '2000',
        conclusion: 'El diseño de barrera mecánica de borde cuadrado truncado de 360 grados redujo drásticamente la tasa de opacificación capsular posterior en todo el mundo.',
        fellowshipRelevance: 'Hito histórico de la bioingeniería óptica que rediseñó todas las plataformas de LIOs modernas.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Las perlas de Elschnig son acúmulos microscópicos de células epiteliales lenticulares gigantes con citoplasma balonado eosinófilo vacuolado y núcleos periféricos que sintetizan colágeno y material hialino anómalo; el anillo de Soemmerring histológico consiste en un estrangulamiento capsular ecuatorial relleno de fibras cristalinianas residuales y detritos lipídicos.',
    surgicalPearls: [
      'Si se identifica una fimosis capsular anterior severa (rexis contraída a <2.5 mm con riesgo de luxación del saco): Realizar 3 a 4 disparos de láser YAG radiales relajantes sobre el reborde fibrótico de la capsulorrexis anterior antes de abrir la cápsula posterior, liberando las fuerzas de tracción centrípeta.',
      'Al realizar capsulotomía en LIOs multifocales difractivos: Centrar la apertura exactamente sobre el centro del patrón de anillos difractivos; no hacer la apertura excesivamente grande para no desestabilizar la óptica ni perder la interacción con la cápsula.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 67 años con miopía magna (longitud axial de 27.50 mm) operado de catarata sin complicaciones hace 2 años con implante de LIO en saco capsular, consulta por pérdida progresiva de agudeza visual de 6 meses. La agudeza visual actual es de 20/60. A la biomicroscopía se aprecian densas perlas de Elschnig en racimo y fibrosis capsular que ocluyen el eje visual central. Usted decide realizar una capsulotomía con Láser Nd:YAG. ¿Cuál es la preparación farmacológica profiláctica indispensable antes del procedimiento, qué parámetros de energía y enfoque en el láser debe aplicar para no dañar el LIO y de qué complicación retiniana grave debe advertir al paciente debido a su longitud axial?',
        answer: '1) Preparación Farmacológica Profiláctica Previa:\n   - Instilar 1 gota de Tartrato de Brimonidina al 0.15% (o Apraclonidina al 1%) 30 a 45 minutos antes del láser para suprimir la producción de humor acuoso y prevenir el pico hipertensivo agudo intraocular post-láser (que ocurre por obstrucción de la malla trabecular por detritos capsulares y prostaglandinas).\n   - Dilatación pupilar moderada con Tropicamida 1% (evitar midriasis paralítica que dificulte identificar el eje mesópico visual del paciente).\n2) Parámetros de Seguridad del Láser Nd:YAG para no Dañar el LIO (Evitar Lens Pitting):\n   - Utilizar lente de contacto de Abraham con viscoelástico para magnificar y estabilizar la imagen.\n   - Mínima Energía Eficaz: Ajustar la energía entre 0.8 y 1.2 mJ por disparo (nunca disparar energías elevadas innecesarias >2 mJ).\n   - Ajuste del Offset Posterior: Configurar el desfase focal del haz de tratamiento entre 100 y 200 µm por DETRÁS del haz de puntería he-ne visible, de modo que la microimplosión por cavitación de plasma ocurra exactamente en la cápsula posterior sin picar la cara posterior de la óptica del LIO.\n   - Diseñar una apertura en cruz o canasta de aproximadamente 3.5 a 4.0 mm (calibrada al tamaño pupilar mesópico del paciente).\n3) Complicación Retiniana Grave Relacionada con su Miopía Magna:\n   - Desprendimiento de Retina Regmatógeno (DRR).\n   - Justificación: En ojos con miopía magna (longitud axial >26 mm), la onda de choque fotodisruptiva del láser Nd:YAG viaja a través del humor vítreo licuado induciendo un desprendimiento del vítreo posterior agudo con tracción sobre la retina periférica miópica atrófica, elevando el riesgo de desgarros retinianos periféricos y DRR hasta 3 a 4 veces frente a la población emétrope.\n   - Conducta: Examen oftalmoscópico indirecto meticuloso con depresión escleral de la retina periférica de 360 grados antes del láser y advertir al paciente que consulte de urgencia ante fotopsias o lluvia de moscas volantes.',
        trap: 'Disparar el láser Nd:YAG con energías altas (>2.5 mJ) sin desfase focal posterior (picando el LIO con deslumbramiento permanente) o no revisar la retina periférica en un miope alto.'
      }
    ]
  },

  // =========================================================================
  // 13. CIRUGÍA ASISTIDA POR LÁSER DE FEMTOSEGUNDO (FLACS) VS FACO MANUAL
  // =========================================================================
  {
    id: 'deep-catarata-femtofaco-flacs',
    title: 'Cirugía de Catarata Asistida por Láser de Femtosegundo (FLACS) vs Faco Manual: Capsulotomía, CDE e Incisiones Arcuatas',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva y comparativa sobre Cirugía de Catarata Asistida por Láser de Femtosegundo (FLACS / Femtosecond Laser-Assisted Cataract Surgery) frente a Facoemulsificación Manual convencional: principios biofísicos de fotodisrupción no térmica por plasma con pulsos ultracortos (10^-15 s a 1053 nm); pasos quirúrgicos automatizados guiados por imagen tomográfica OCT tridimensional de segmento anterior en tiempo real (capsulotomía circular continua perfecta con solapamiento óptico de 360°, pre-fragmentación y reblandecimiento del núcleo cristaliniano en cuadrantes/cilindros, incisiones corneales principales y paracentesis autoestancas, e incisiones arcuatas corneales penetrantes o intraestromales / ISAKK para reducción del astigmatismo corneal anterior); evidencia clínica rigurosa y meta-análisis (Ensayos ESCRS FLACS vs Manual, FEMCAT y FACT): reducción demostrada de Energía Disipada Acumulada (CDE) y menor pérdida celular endotelial en cataratas densas vs ausencia de superioridad en agudeza visual final con corrección; manejo de riesgos específicos: mióticas intraoperatorias inducidas por prostaglandinas liberadas por el láser, micro-puentes capsulares (capsular tags), burbujas de gas en cámara anterior que dificultan la hidrodisección y síndrome de bloqueo capsular neumático.',
    definitionAndEpidemiology: 'FLACS (Femtosecond Laser-Assisted Cataract Surgery) es la integración de un láser de estado sólido de pulsos de femtosegundo con un sistema de tomografía de coherencia óptica (OCT) tridimensional o cámara Scheimpflug acoplada al globo ocular mediante una interfaz de aplanación o inmersión líquida. Su propósito es automatizar y dotar de precisión micrométrica a los cuatro pasos críticos iniciales de la cirugía de catarata: capsulotomía anterior, fragmentación del núcleo cristaliniano, incisiones corneales transparentes e incisiones arcuatas corneales limbares para astigmatismo. Representa aproximadamente el 8-15% de las cirugías de catarata en centros privados de alta tecnología a nivel mundial.',
    anatomyAndPathophysiology: '1. Principios Biofísicos de la Fotodisrupción por Femtosegundo:\n   • El láser emite pulsos de luz en el infrarrojo cercano (1030-1053 nm) con una duración ultracorta de femtosegundos (10^-15 s).\n   • Al concentrar fotones en un foco diminuto (1-2 µm) se alcanza una densidad de potencia astronómica (>10^12 W/cm2) superando el umbral de ruptura óptica del tejido.\n   • Generación de un estado de plasma (electrones y iones libres) seguido de ondas de choque acústicas y cavitación de microburbujas de agua y CO2 que separan mecánicamente las laminillas tisulares sin disipación térmica ni daño a estructuras colaterales.\n2. Mecánica de la Capsulotomía por Láser:\n   • Diseña un corte circular geométricamente perfecto, con reproducibilidad del diámetro de ±0.1 mm y centrado exacto sobre el eje pupilar, el limbo o el vértice de la cápsula anterior.\n   • Proporciona un solapamiento uniforme de 360 grados de la cápsulorrexis sobre la óptica del LIO, optimizando la posición efectiva de la lente (ELP) y reduciendo el tilt (inclinación) y la descentración en LIOs Premium (tóricos y multifocales).\n3. Reducción de la Energía Ultrasónica (CDE):\n   • La fragmentación previa del núcleo en cilindros concéntricos, cuadrantes o rejillas en "cubos" reblandece la catarata antes de introducir la pieza de mano de facoemulsificación.\n   • Reduce la Energía Disipada Acumulada (Cumulative Dissipated Energy - CDE) entre un 35% y un 60%, con menor estrés oxidativo sobre el endotelio corneal, especialmente beneficioso en cataratas brunescentes duras (LOCS III NO4-NO5) y córneas frágiles (guttas / Distrofia de Fuchs incipiente).',
    clinicalExamination: {
      biomicroscopy: 'En evaluación preoperatoria para FLACS:\n• Examen biomicroscópico corneal minucioso: Descartar leucomas corneales, pterigión nasal extenso, queratotomías radiales previas o cicatrices que dispersen la energía del haz láser induciendo capsulotomías incompletas.\n• Diámetro y Dilatación Pupilar: La pupila farmacológica debe alcanzar al menos 5.5 a 6.0 mm para permitir una capsulotomía de 5.0 a 5.2 mm sin impacto del láser sobre el borde del iris (lo que provocaría miosis reactiva violenta y sangrado).\n• Profundidad de Cámara Anterior: Examinar estrechez angular o cámara plana que impida el acoplamiento correcto de la interfase de succión.',
      fundus: 'Normal; verificar ausencia de patología macular o estafilomas que comprometan la fijación del paciente durante el acoplamiento del dock.',
      specialSigns: '• Signo del Puente Capsular (Capsular Tag): Pequeño puente tisular microscópico donde el láser no cortó al 100% la cápsula debido a sombras de opacidades o movimientos micrométricos oculares.\n• Prostaglandin-Induced Miosis: Constricción pupilar brusca que ocurre en los 2 a 5 minutos posteriores a los disparos del láser sobre la cápsula y el cristalino.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT de Segmento Anterior Integrado en la Plataforma Láser',
        findings: 'Escaneo tomográfico en tiempo real de 360 grados que localiza con resolución micrométrica la superficie anterior y posterior de la córnea, el grosor corneal, el iris, la cápsula anterior, el grosor del cristalino (Lens Thickness) y la cápsula posterior (estableciendo una zona de seguridad posterior de al menos 500-700 µm libre de disparos láser para evitar perforación).'
      },
      {
        test: 'Topografía Corneal y Tomografía Pentacam / Casia',
        findings: 'Planificación de incisiones arcuatas corneales penetrantes o intraestromales (ISAKK): Permite situar las arcuatas exactamente en el meridiano más curvo corneal para tratar astigmatismos corneales regulares de 0.50 a 1.25 D.'
      },
      {
        test: 'Microscopía Especular Endotelial Preoperatoria',
        findings: 'Cuantificación de la densidad celular endotelial (ECD): Ojos con ECD limítrofe (1000-1400 cél/mm2) se benefician especialmente de la reducción de CDE ultrasónico que aporta el femtosegundo.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Facoemulsificación Manual Convencional',
        distinction: 'Capsulorrexis circular continua realizada manualmente con cistótomo o pinza de Utrata; mayor variabilidad en tamaño y circularidad, pero sin incremento del costo instrumental y sin riesgo de miosis inducida por prostaglandinas.'
      },
      {
        condition: 'Capsulotomía con Zepto o CapsuLaser',
        distinction: 'Dispositivos de capsulotomía selectiva termoeléctrica o por colorante que no fragmentan el núcleo ni tallan incisiones corneales, limitándose exclusivamente a la apertura capsular.'
      },
      {
        condition: 'Cirugía Extracapsular (EECC) o MSICS',
        distinction: 'Extracción manual del núcleo entero a través de incisión escleral amplia de 6-7 mm sin ultrasonidos, indicada en cataratas hipermaduras pétreas en entornos de escasos recursos.'
      }
    ],
    steppedManagement: {
      medical: '• Profilaxis Farmacológica Obligatoria Previa al Láser:\n  - Prevención de la Miosis Reactiva por Prostaglandinas:\n    * Instilar colirio de AINE tópico (Ketorolaco 0.5% o Bromfenaco 0.09% o Nepafenaco 0.1%) cada 15 minutos durante 1 hora antes de la cirugía para bloquear la síntesis de prostaglandinas E2 inducidas por la cavitación del láser.\n    * Midriasis máxima con combinación de Ciclopentolato 1% + Fenilefrina 10% + Tropicamida 1%.\n    * Uso de epinefrina libre de conservantes (1:1000 diluida 1:10 en solución BSS) o fenilefrina/lidocaína intracamerular (Mydrane) al entrar a la cámara anterior si se produce miosis tras el acoplamiento del dock.',
      surgical: '• Secuencia Quirúrgica Estandarizada de FLACS:\n  1. Acoplamiento (Docking) y Aplicación del Vacío:\n     - Fijación del cono de interfase líquido (Liquid Optics Interface) centrado en el limbo; verificar que la presión intraocular inducida por el vacío no comprometa la perfusión retiniana.\n  2. Disparo del Láser Automatizado Guiado por OCT:\n     - Capsulotomía anterior (diámetro estándar de 5.0 a 5.2 mm para solapar ópticas de 6.0 mm).\n     - Fragmentación nuclear en cuadrantes con cilindros concéntricos respetando el margen de seguridad de 500 µm de la cápsula posterior.\n     - Incisiones arcuatas corneales penetrantes o intraestromales (ISAKK) al 80-90% de profundidad paquimétrica en el meridiano curvo.\n     - Apertura de las incisiones corneales transparentes principales y accesorias.\n  3. Paso al Quirófano Estéril (Facoemulsificación):\n     - Retirada de la cápsula anterior ("disco capsular"): Inspeccionar siempre con pinza de Utrata con tracción centrípeta para detectar posibles puentes capsulares incompletos (capsular tags); NO arrancar la cápsula con fuerza centrífuga para no generar un desgarro hacia la periferia.\n     - DESCOMPRESIÓN DE GAS ANTES DE LA HIDRODISECCIÓN: La fragmentación del láser genera burbujas de gas atrapadas detrás del núcleo; antes de inyectar líquido de hidrodisección, presionar el núcleo centralmente para liberar el gas hacia la cámara anterior; una hidrodisección brusca en saco cerrado con gas acumulado puede causar el temido Síndrome de Bloqueo Capsular Neumático con explosión de la cápsula posterior y luxación del núcleo.\n     - Aspiración del núcleo pre-fragmentado con ultrasonidos mínimos (CDE reducido) y aspiración cortical habitual.'
    },
    clinicalApplicationPractical: '1. Nunca Realice una Hidrodisección Vigorosa tras FLACS: La cavitación del femtosegundo genera microburbujas de gas que quedan atrapadas entre el polo posterior del cristalino y la cápsula posterior. Si inyecta solución salina con fuerza sin liberar antes el gas, la presión hidroneumática reventará la cápsula posterior (Síndrome de Bloqueo Capsular). Deprima primero el núcleo suavemente para que escape la burbuja.\n2. Evaluar siempre el borde capsular con pinza: Aunque la pantalla del láser diga "capsulotomy complete", examine el borde de 360 grados con una pinza de rexis; si existe un micro-puente tisular ("tag"), complételo manualmente con tijeras de Vannas o pinza antes de aspirar.\n3. AINEs antes del láser son obligatorios: El disparo del láser sobre la cápsula y el iris libera prostaglandinas inmediatas que cierran la pupila en 2 minutos; premedicar con nepafenaco o ketorolaco 1 hora antes previene esta complicación de forma radical.',
    highYieldPearl: 'FLACS Board Pearl: Reduce la energía disipada acumulada (CDE) y ofrece capsulotomías circulares perfectas de 360°. OBLIGATORIO: Premedicar con AINEs tópicos para prevenir miosis inducida por prostaglandinas y desgasificar el núcleo antes de la hidrodisección para evitar el Síndrome de Bloqueo Capsular.',
    keyDrugs: [
      { name: 'Nepafenaco 0.3% / Bromfenaco 0.09%', dose: '1 gota cada 15 min en la hora previa al procedimiento', warning: 'Inhibe la COX-1/2 y previene la miosis intraoperatoria reactiva inducida por el femtosegundo.' },
      { name: 'Fenilefrina / Lidocaína intracamerular (Mydrane)', dose: '0.2 mL inyectados en cámara anterior al inicio', warning: 'Restaura y mantiene la midriasis farmacológica durante la aspiración del cristalino.' },
      { name: 'BSS (Solución Salina Balanceada Plus)', dose: 'Irrigación continua durante facoemulsificación', warning: 'Mantiene la cámara anterior profunda y protege el endotelio corneal.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Qué Demostraron los Ensayos FEMCAT y FACT sobre FLACS',
        category: 'Pregunta Clásica',
        description: 'Ensayos landmark FEMCAT (Lancet 2020) y FACT (ESCRS 2020): Compararon FLACS vs Facoemulsificación Manual en miles de pacientes. Conclusión: FLACS reduce significativamente la energía ultrasónica (CDE) y aporta capsulotomías más precisas, pero NO DEMOSTRÓ SUPERIORIDAD en agudeza visual final corregida, calidad de vida ni tasa global de complicaciones en cirugías estándar.',
        trapToAvoid: 'Afirmar que FLACS proporciona una agudeza visual postoperatoria estadísticamente superior a la faco manual convencional en ojos sanos.'
      },
      {
        title: 'El Síndrome de Bloqueo Capsular por Femtosegundo',
        category: 'Trampa de Tribunal',
        description: 'Pregunta de Boards: "¿Cuál es el mecanismo de la rotura de la cápsula posterior durante la hidrodisección en una cirugía de FLACS?". Respuesta: El atrapamiento de gas generado por la fotodisrupción en el espacio retrocristaliniano. Al inyectar líquido sin descomprimir el gas, se produce una hiperpresión hidroneumática que estalla la cápsula posterior ("Pneumatic Capsular Block Syndrome").',
        trapToAvoid: 'Inyectar fluidos de hidrodisección a alta presión sin haber desgasificado el saco previamente.'
      },
      {
        title: 'Fuerza Biomecánica del Borde de la Capsulotomía: Láser vs Manual',
        category: 'Cifra Clave de Corte',
        description: 'La capsulorrexis manual tiene un borde continuo liso y elástico con mayor resistencia a la tracción que el borde de la capsulotomía por láser, el cual microscópicamente presenta pequeñas micro-indentaciones festoneadas ("can-opener-like microgrooves") producidas por los pulsos individuales del láser.',
        trapToAvoid: 'Tirar con fuerza excesiva hacia afuera del borde capsular cortado con láser creyendo que es mecánicamente indestructible.'
      }
    ],
    fellowshipKeyPoints: [
      'Incisiones Arcuatas Intraestromales (ISAKK): El láser de femtosegundo puede tallar incisiones arcuatas corneales que no atraviesan el epitelio corneal (intraestromales al 80-90% de profundidad respetando los 20% anterior y posterior), eliminando el riesgo de infección, ojo seco por denervación o sobrecorrección.',
      'Centrado de la Capsulotomía: En implante de LIOs tóricos o multifocales, el centrado guiado por el vértice de la cápsula o el eje visual (ángulo kappa) optimiza la transferencia de modulación óptica frente a la rexis manual no centrada.',
      'CDE en Cataratas Brunescentes: En cataratas duras de grado 4 y 5 de LOCS III, la fragmentación en rejilla cilíndrica con femtosegundo reduce el CDE ultrasónico hasta en un 50%, disminuyendo drásticamente la tasa de edema corneal postoperatorio precoz.'
    ],
    landmarkTrials: [
      {
        name: 'FEMCAT Trial (Femtosecond Laser vs Manual Phacoemulsification Trial)',
        year: '2020 (Lancet)',
        conclusion: 'Ensayo clínico multicéntrico aleatorizado controlado en más de 800 pacientes: Demostró que FLACS no aportó ventajas estadísticamente significativas en éxito refractivo, agudeza visual postoperatoria ni costo-efectividad frente a la facoemulsificación manual de rutina.',
        fellowshipRelevance: 'Puso fin al debate comercial confirmando que el valor real de FLACS reside en casos seleccionados (cataratas duras, córneas con bajo recuento endotelial y LIOs Premium).'
      }
    ],
    histopathologyAndGenetics: 'En microscopía electrónica de barrido del borde capsular: La capsulotomía por láser de femtosegundo muestra una serie continua de pequeñas indentaciones esféricas microscópicas coalescentes ("pitting line") producidas por la implosión de plasma de cada pulso, a diferencia de la línea de desgarro puro lisa y continua de la capsulorrexis manual.',
    surgicalPearls: [
      'En caso de rotura o pérdida de succión durante el docking (suction break): Si el láser ya disparó la capsulotomía parcialmente, NO intentar re-acoplar el láser; pasar de inmediato al microscopio quirúrgico y completar la capsulotomía manualmente con pinza de Utrata como si fuera una rexis convencional.',
      'Aspiración de Epitelio Anterior: Tras aspirar los fragmentos nucleares y masas corticales, aspirar meticulosamente la cara inferior del reborde de la capsulotomía con la cánula de irrigación-aspiración en 360 grados para eliminar células epiteliales residuales y prevenir la fimosis capsular anterior.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Durante la realización de una cirugía de catarata asistida por láser de femtosegundo (FLACS) en un paciente con catarata nuclear moderada y una córnea con 1200 cél/mm2, el láser completa la capsulotomía de 5.1 mm y la fragmentación en 4 cuadrantes sin incidentes. Al pasar al microscopio quirúrgico y colocar viscoelástico, el cirujano procede a realizar una hidrodisección vigorosa con cánula curva. Súbitamente, el cirujano escucha un chasquido microscópico, la cámara anterior se profundiza bruscamente y el núcleo cristaliniano se hunde en el polo posterior. ¿Cuál fue el error técnico catastrófico cometido, cuál es el mecanismo fisiopatológico del accidente y cómo debió realizarse la hidrodisección en este paciente?',
        answer: '1) Error Técnico Catastrófico: Realizar una hidrodisección vigorosa a alta presión sin haber desgasificado previamente el saco capsular.\n2) Mecanismo Fisiopatológico:\n   - La fotodisrupción con láser de femtosegundo genera cavitación de plasma con microburbujas de gas (agua y dióxido de carbono) que quedan atrapadas en el espacio retrocristaliniano, entre el polo posterior del núcleo y la cápsula posterior.\n   - La capsulotomía por láser crea una apertura perfectamente calibrada pero que puede quedar ocluida por el núcleo desplazado hacia adelante.\n   - Al inyectar un bolo rápido de líquido de hidrodisección en un saco ocluido con gas retenido, se genera una hiperpresión hidroneumática súbita catastrófica ("Síndrome de Bloqueo Capsular Neumático").\n   - Esta presión supera la resistencia biomecánica de la cápsula posterior, originando un estallido o desgarro gigante de la cápsula posterior con luxación completa del núcleo hacia la cavidad vítrea posterior.\n3) Técnica Correcta Obligatoria en FLACS:\n   - Antes de cualquier hidrodisección, se debe ejercer una presión o masaje suave ("burping" o descompresión nuclear) sobre el centro del cristalino con una espátula o cánula roma, permitiendo que las burbujas de gas acumuladas escapen hacia la cámara anterior.\n   - Posteriormente, realizar una hidrodisección "suave, lenta y dividida" inyectando micro-alícuotas de BSS en dos o más puntos cardinales mientras se verifica que el líquido drene libremente por el reborde de la capsulotomía.',
        trap: 'Realizar hidrodisección rápida en bolo en FLACS como si fuera una facoemulsificación manual convencional.'
      }
    ]
  },

  // =========================================================================
  // 14. FACOEMULSIFICACIÓN EN OJOS VITRECTOMIZADOS Y MIOPES ALTOS
  // =========================================================================
  {
    id: 'deep-catarata-ojos-vitrectomizados-miopes-altos',
    title: 'Facoemulsificación en Ojos Vitrectomizados y Miopes Altos: Síndrome de Infusión Inversa, Zonulopatía y Biometría Wang-Koch',
    subspecialtyId: 'catarata',
    summary: 'Monografía exhaustiva sobre cirugía de catarata en ojos de alta complejidad biomecánica: vitrectomizados previos y miopes magnos (longitud axial AL >26.0 mm). Desafíos anatómicos y fisiopatológicos: ausencia de soporte vítreo posterior, fluctuación extrema de la cámara anterior, hipermovilidad capsular y síndrome de infusión inversa (Lens-Iris Diaphragm Retropulsion Syndrome - LIDRS); debilidad zonular oculta, zónula laxa y riesgo de dehiscencia circunferencial; cataratas nucleares de progresión acelerada por hiperoxigenación vítrea post-vitrectomía con gas o aceite de silicona retenido; perlas de biometría y cálculo de LIO en ojos largos: el fenómeno de hipermetropía iatrogénica por sobreestimación de la longitud axial con fórmulas de vergencia tradicionales (SRK/T y Holladay 1) y aplicación obligatoria de fórmulas contemporáneas de inteligencia artificial (Kane, Barrett Universal II con corrección de Wang-Koch o Hill-RBF 3.0); maniobras quirúrgicas de rescate: elevación del diafragma iridocristaliniano con espátula, reducción de la altura de la botella de infusión, uso de anillos de tensión capsular (CTR) y selección de LIOs de 3 piezas.',
    definitionAndEpidemiology: 'La cirugía de catarata en pacientes vitrectomizados y miopes patológicos representa uno de los escenarios quirúrgicos de mayor exigencia técnica en el polo anterior. La vitrectomía previa acelera la opacificación nuclear del cristalino en más del 80% de los ojos fáquicos en los primeros 12 a 24 meses debido al aumento masivo de la tensión tisular de oxígeno en la cavidad vítrea. Por su parte, los ojos con miopía axial alta (AL >26.0 mm o equivalente esférico >-6.00 D) presentan una combinación crítica de cámara anterior anormalmente profunda, esclera elástica laxa, zónula elongada frágil y riesgo elevado de desprendimiento de retina regmatógeno postoperatorio.',
    anatomyAndPathophysiology: '1. Fisiopatología de la Aceleración de la Catarata Post-Vitrectomía:\n   • En un ojo fáquico normal, el gel vítreo intacto consume oxígeno y mantiene un gradiente fisiológico de hipoxia severa en el polo posterior del cristalino (PO2 <10 mmHg).\n   • Al extirpar el vítreo, el humor acuoso rico en oxígeno percola libremente a través de la cavidad vítrea fluida, elevando la PO2 en la cara posterior del cristalino a más de 25-30 mmHg.\n   • Este estrés oxidativo crónico causa desnaturalización acelerada de las proteínas cristalinianas (cristalinas alfa y beta) y acumulación de cromóforos pardos que producen esclerosis nuclear brunescente precoz.\n2. Mecánica del Síndrome de Infusión Inversa (Lens-Iris Diaphragm Retropulsion Syndrome - LIDRS):\n   • En ojos vitrectomizados y miopes magnos, existe una adherencia anatómica laxa en la unión iridocristaliniana que actúa como una válvula unidireccional.\n   • Cuando la presión de infusión entra a través de la punta de faco, el líquido pasa a la cámara posterior empujando el iris contra la cápsula anterior.\n   • El diafragma iridocristaliniano se desplaza violentamente hacia atrás (retropulsión masiva), profundizando la cámara anterior de forma extrema, dilatando la pupila al máximo y generando dolor sordo agudo por estiramiento del cuerpo ciliar.\n   • Al estar la cámara exageradamente profunda, el cirujano pierde el plano de trabajo y la estabilidad de las maniobras de corte.\n3. Alteraciones Biomecánicas de la Zónula y Saco Capsular:\n   • Los miopes magnos tienen zónulas estiradas, finas y frágiles debido al agrandamiento del globo ecuatorial.\n   • La ausencia de soporte del gel vítreo detrás de la cápsula posterior deja a la cápsula flotando en un espacio líquido sin amortiguación hidráulica, aumentando el riesgo de rotura capsular posterior espontánea ante el mínimo contacto con la punta de ultrasonidos.',
    clinicalExamination: {
      biomicroscopy: '• En Ojos Vitrectomizados: Identificar esclerotomías previas cicatrizadas en pars plana, presencia de aceite de silicona emulsificado en menisco superior o gotas subendoteliales en cámara anterior, sinequias posteriores post-vitrectomía y placa subcapsular posterior fibrótica densa.\n• En Miopía Magna: Cámara anterior extremadamente profunda (>3.5-4.0 mm), adelgazamiento escleral periférico, iridodonesis o facodonesis discreta (alerta máxima de zonulopatía) y pupila con pobre respuesta a midriáticos por atrofia del estroma del iris.\n• Evaluación del Cristalino: Esclerosis nuclear brunescente densa con núcleo duro que requiere mayor energía ultrasónica.',
      fundus: 'Evaluar polo posterior y periferia: Estafiloma miópico macular posterior, atrofia coriorretiniana peripapilar miópica, conos miópicos y descartar desgarros o degeneraciones en empalizada en retina periférica que requieran fotocoagulación con láser argón previa a la cirugía de catarata.',
      specialSigns: '• Maniobra de Elevación del Iris con Espátula: Al introducir una espátula de iris a través de la paracentesis y despegar suavemente el borde pupilar de la cápsula anterior, se rompe el sello hermético valvular; el líquido acumulado detrás del iris se iguala y la cámara anterior recupera de inmediato su profundidad fisiológica normal.'
    },
    diagnosticWorkup: [
      {
        test: 'Biometría Óptica de Coherencia (IOLMaster 700 / Lenstar 900)',
        findings: 'Medición precisa de la longitud axial (AL). En ojos con aceite de silicona intraocular retenido: Ajustar el biométrico al modo "Silicone Oil Filled Eye" (el aceite de silicona tiene un índice de refracción de 1.405 y una velocidad de propagación de sonido más lenta, lo que falsea las mediciones si no se calibra).'
      },
      {
        test: 'Cálculo del LIO con Fórmulas de Última Generación (Kane, Barrett Universal II, Hill-RBF 3.0)',
        findings: 'Fórmulas modernas de inteligencia artificial obligatorias: En ojos con AL >26.0 mm, las fórmulas de vergencia tradicionales antiguas (SRK/T, Holladay 1) sobreestiman la profundidad de cámara provocando un error hipermetrópico iatrogénico grave (+1.00 a +2.50 D); el uso de Kane o Barrett con el factor de ajuste de Wang-Koch elimina este error sistemático logrando emetropía.'
      },
      {
        test: 'Ecografía Ocular en Modo B (si opacidad densa no permite fondo)',
        findings: 'Verifica la indemnidad retiniana en la cavidad vítrea, descarta desprendimientos de retina serosos o traccionales y delimita la profundidad y convexidad del estafiloma posterior.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Síndrome de Pseudoexfoliación (PEX) con Zonulopatía',
        distinction: 'Presenta material fibrilar blanquecino en cápsula anterior y borde pupilar, cámara anterior habitualmente estrecha y aumento severo de la PIO; no comparte el estafiloma ni la longitud axial alargada del miope.'
      },
      {
        condition: 'Miopía de Índice pura por Catarata Nuclear Brunescente',
        distinction: 'El paciente miope de toda la vida experimenta una "segunda vista" (aumento de miopía que le permite leer de cerca sin gafas); se diferencia de la miopía axial patológica porque su longitud axial es normal (<24 mm).'
      },
      {
        condition: 'Bloqueo Pupilar Clásico por Ángulo Cerrado',
        distinction: 'Provoca aplanamiento súbito extremo de la cámara anterior con elevación masiva de la PIO, a la inversa del síndrome de infusión inversa donde la cámara se profundiza exageradamente.'
      }
    ],
    steppedManagement: {
      medical: '• Preparación Preoperatoria y Retinopatía Miopigénica:\n  - Examen minucioso de 360 grados de la retina periférica miópica con oftalmoscopia binocular indirecta bajo midriasis máxima.\n  - Si se detectan desgarros en herradura, orificios atróficos o áreas de degeneración en empalizada (lattice degeneration): Realizar FOTOCOAGULACIÓN CON LÁSER ARGÓN profiláctica al menos 2 a 3 semanas antes de la cirugía de catarata para mitigar el riesgo de desprendimiento de retina regmatógeno postoperatorio.\n• Manejo Médico Postoperatorio:\n  - Corticoides tópicos intensivos (Prednisolona 1% cada 4-6 horas) durante 4 semanas + AINE tópico (Bromfenaco o Nepafenaco) durante 6 semanas para prevenir el Edema Macular Quístico de Irvine-Gass, cuya incidencia está triplicada en ojos vitrectomizados.',
      surgical: '• Estrategia Quirúrgica y Maniobras en el Quirófano:\n  1. Ajuste de Parámetros de la Máquina de Faco (Fluidica Suave):\n     - REDUCIR LA ALTURA DE LA BOTELLA DE INFUSIÓN (o la presión de infusión en sistemas activos a 35-45 mmHg): Disminuye la presión hidrostática que empuja el diafragma iridocristaliniano hacia atrás.\n     - Flujo de aspiración moderado (25-30 mL/min) y vacío calibrado (250-300 mmHg) para evitar fluctuaciones rápidas de cámara.\n  2. Resolución Inmediata del Síndrome de Infusión Inversa (LIDRS):\n     - Si durante la infusión la cámara se profundiza abruptamente, la pupila se dilata de golpe y el paciente siente dolor:\n       * Detener la infusión -> introducir un manipulador de iris por la paracentesis -> despegar suavemente el borde posterior del iris de la cápsula anterior.\n       * Esto rompe el vacío valvular, permitiendo que el líquido atrapado en la cámara posterior escape hacia adelante, nivelando la profundidad de la cámara anterior al instante.\n  3. Manejo de la Fragilidad Zonular (Zonulopatía Miopigénica):\n     - Capsulorrexis de tamaño adecuado (5.0 a 5.5 mm); una rexis pequeña <4.5 mm predispone a fimosis capsular severa tardía por debilidad zonular.\n     - Implante de un ANILLO DE TENSIÓN CAPSULAR (CTR - Capsular Tension Ring):\n       * Indicado ante cualquier evidencia de diálisis zonular, pliegues capsulares o hipermovilidad del saco.\n       * Redistribuye las fuerzas de tracción de las fibras zonulares intactas a lo largo de los 360 grados de la circunferencia capsular, mantiene el ecuador abierto y estabiliza el saco.\n  4. Selección e Implante del LIO:\n     - En ojos vitrectomizados y miopes magnos: Evitar LIOs de una pieza de hápticas flexibles si la zónula está comprometida o el saco es gigante; preferir LIOs hidrofóbicos de 3 piezas con diámetro total de 13.0 a 13.5 mm o LIOs con hápticas de bucle cerrado amplio para evitar rotación y descentración.\n     - En ojos rellenos de aceite de silicona que no se retirará: Emplear lentes de material ACRÍLICO HIDROFÓBICO (o PMMA); NUNCA IMPLANTAR LIOS DE SILICONA (el aceite de silicona se adhiere de forma irreversible a la óptica de silicona opacificándola permanentemente).'
    },
    clinicalApplicationPractical: '1. Deshacer el Bloqueo de Infusión Inversa en 1 segundo: Si al introducir la pieza de faco la cámara anterior se profundiza como un pozo sin fondo y el paciente se queja de dolor ocular sordo severo, no luche con la pieza de mano; tome una espátula por la paracentesis, levante el borde del iris separándolo de la cápsula y la cámara volverá de inmediato a su posición normal.\n2. La Fórmula Tradicional SRK/T dejará al Miope Hipermétrope: En ojos con longitud axial >26.0 mm, las fórmulas clásicas cometen un error sistemático de cálculo hipermetrópico ("hyperopic surprise"). Use siempre la fórmula Kane o Barrett Universal II con el ajuste de Wang-Koch.\n3. Aceite de Silicona y LIOs de Silicona son Incompatibles: Si un paciente tiene o puede llegar a necesitar aceite de silicona por patología vitreorretiniana, está formalmente prohibido implantar un LIO de silicona; las moléculas de silicona se unen irreversiblemente creando una placa aceitosa opaca intratable.',
    highYieldPearl: 'Vitrectomized/High Myope Board Pearl: LIDRS (Infusión Inversa) se resuelve levantando el iris con espátula. Fórmulas de cálculo de LIO obligatorias: Kane o Barrett con corrección de Wang-Koch (evitan la sorpresa hipermetrópica). NUNCA usar LIO de silicona si hay antecedente de aceite de silicona.',
    keyDrugs: [
      { name: 'Prednisolona acetato 1% colirio', dose: '1 gota cada 4 a 6 horas durante 4 a 6 semanas', warning: 'Profilaxis antiinflamatoria intensiva indispensable en ojos vitrectomizados.' },
      { name: 'Bromfenaco 0.09% o Nepafenaco 0.1%', dose: '1 gota cada 12-24 horas durante 6 semanas', warning: 'Prevención demostrada de edema macular de Irvine-Gass post-faco en ojos miopes/vitrectomizados.' },
      { name: 'Fenilefrina / Tropicamida tópica', dose: '1 gota cada 15 min 1 hora antes', warning: 'Midriasis preoperatoria; monitorizar posibles sinequias posteriores post-vitrectomía.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Por Qué los Miopes Altos Sufren Sorpresa Hipermetrópica con SRK/T',
        category: 'Pregunta Clásica',
        description: 'Pregunta clásica de examen: "¿Por qué las fórmulas tradicionales de vergencia (Holladay 1, SRK/T) inducen un error hipermetrópico postoperatorio en ojos con longitud axial >26 mm?". Respuesta: Porque asumen erróneamente que un ojo largo tiene una cámara anterior proporcionalmente hiperprofunda con un cristalino más posterior, prediciendo una posición efectiva del LIO (ELP) errónea. La solución es aplicar la Corrección de Wang-Koch o utilizar fórmulas de última generación como Kane o Barrett Universal II.',
        trapToAvoid: 'Calcular el LIO de un miope de 28 mm con la fórmula SRK/T estándar sin corrección y dejar al paciente en +1.50 D.'
      },
      {
        title: 'Contraindicación Absoluta de LIOs de Silicona con Aceite de Silicona',
        category: 'Trampa de Tribunal',
        description: 'Pregunta trampa recurrente: "¿Qué material de LIO está categóricamente contraindicado en un ojo que tiene aceite de silicona en cavidad vítrea o que tiene alto riesgo de requerir tamponamiento con silicona?". Respuesta: LIO de Silicona. El aceite de silicona interactúa hidrofóbicamente adhiriéndose de forma irreversible a la superficie de la óptica de silicona, opacificándola con condensación y requiriendo explante del LIO.',
        trapToAvoid: 'Implantar un LIO de silicona en un paciente vitrectomizado por desprendimiento de retina complejo.'
      },
      {
        title: 'Manejo Quirúrgico del Síndrome de Infusión Inversa (LIDRS)',
        category: 'Asociación Patognomónica',
        description: 'Profundización súbita extrema de la cámara anterior con midriasis refleja máxima y dolor ciliar agudo al iniciar la infusión = Lens-Iris Diaphragm Retropulsion Syndrome (LIDRS). Maniobra correctora patognomónica: Levantar suavemente el margen pupilar del iris con un manipulador para romper el sello de infusión retrógrada.',
        trapToAvoid: 'Subir la altura de la botella de infusión para intentar "llenar" más la cámara (eso empeora catastróficamente la retropulsión).'
      }
    ],
    fellowshipKeyPoints: [
      'Factor de Ajuste de Wang-Koch (Ophthalmology 2011): Modifica matemáticamente la longitud axial medida en ojos largos (>25.0 mm) para corregir el sesgo hipermetrópico sistemático de las fórmulas clásicas de vergencia.',
      'Anillo de Tensión Capsular (CTR): Su implante temprano tras completar la capsulorrexis o antes de la facoemulsificación expande el saco capsular en 360 grados, protege las fibras zonulares elongadas de fuerzas de cizallamiento tangenciales y previene el desprendimiento capsular tardío.',
      'Incidencia de Desprendimiento de Retina Regmatógeno Post-Faco en Miopes: En pacientes con longitud axial >26.0 mm, el riesgo acumulado de DRR post-faco a 5 años oscila entre el 1.5% y el 3.8% (frente a <0.2% en emétropes), siendo mandatorio el examen retiniano periférico profiláctico preoperatorio.'
    ],
    landmarkTrials: [
      {
        name: 'Wang-Koch AL Adjustment for High Myopia IOL Calculation',
        year: '2011 (J Cataract Refract Surg)',
        conclusion: 'Demostró que el ajuste no lineal de la longitud axial en ojos largos reduce drásticamente la tasa de sorpresas hipermetrópicas postoperatorias del 40% a menos del 10% cuando se emplean fórmulas de vergencia clásicas.',
        fellowshipRelevance: 'Hito biométrico que transformó el estándar de cálculo de LIO en miopía magna en todo el mundo.'
      }
    ],
    histopathologyAndGenetics: 'En ojos vitrectomizados y miopes patológicos: Histopatología revela elongación y degeneración de las fibras zonulares con microfragmentación de fibrilina-1 y microfibrillas de elastina en microscopía electrónica; la cápsula posterior muestra pérdida de colágeno tipo IV con zonas de adelgazamiento extremo irregular propensas a rotura mecánica.',
    surgicalPearls: [
      'Al realizar la capsulorrexis en un miope magno con cámara muy profunda: Disminuir la altura de la botella de infusión o trabajar con viscoelástico cohesivo pesado (Healon GV o Healon5); la cámara muy profunda favorece que la rexis tienda a escaparse periféricamente hacia el ecuador, por lo que las fuerzas de tracción con la pinza deben dirigirse predominantemente de forma centrípeta.',
      'Al aspirar masas corticales posteriores en ojo vitrectomizado: No aplicar vacío alto directamente sobre la cápsula posterior; la cápsula no tiene amortiguación vítrea detrás y presenta un movimiento oscilante ("trampolín") que puede ser aspirado accidentalmente por el orificio de 0.3 mm de la cánula de I/A induciendo rotura capsular en el último segundo.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 56 años con miopía magna intervenido de vitrectomía pars plana con aceite de silicona hace 8 meses por desprendimiento de retina regmatógeno acude para cirugía de catarata y retiro programado del aceite. La biometría óptica con IOLMaster arroja una longitud axial de 28.45 mm. Su médico residente calcula el LIO con la fórmula tradicional SRK/T estándar y selecciona un LIO plegable de silicona de una pieza para colocar en el saco capsular. Durante el inicio de la facoemulsificación en quirófano, en cuanto el cirujano introduce la pieza de mano, la cámara anterior se profundiza bruscamente de manera abismal, la pupila se dilata al máximo y el paciente grita de dolor. ¿Cuáles fueron los dos errores conceptuales graves cometidos por el residente en la planificación preoperatoria, cuál es el fenómeno intraoperatorio agudo que acaba de suceder y cuál es la maniobra quirúrgica exacta para revertirlo de inmediato?',
        answer: '1) Errores Conceptuales Graves del Residente en la Planificación Preoperatoria:\n   - Primer Error (Cálculo Biométrico): Seleccionar la fórmula SRK/T estándar sin corrección en un ojo de 28.45 mm; esto causará una "sorpresa hipermetrópica" iatrogénica masiva de +1.50 a +2.00 D. Debe utilizarse una fórmula contemporánea de inteligencia artificial (Kane, Hill-RBF 3.0 o Barrett Universal II con ajuste de Wang-Koch) configurada en modo "ojo con aceite de silicona".\n   - Segundo Error (Material y Diseño del LIO): Escoger un LIO de SILICONA en un ojo vitrectomizado con aceite de silicona; el aceite de silicona remanente se adherirá irreversiblemente a la superficie óptica del LIO de silicona produciendo una opacificación grasa permanente con pérdida total de visión. Debe emplearse un LIO de material ACRÍLICO HIDROFÓBICO (o PMMA).\n2) Fenómeno Intraoperatorio Agudo:\n   - Síndrome de Infusión Inversa (Lens-Iris Diaphragm Retropulsion Syndrome - LIDRS).\n   - Mecanismo: En ojos vitrectomizados y miopes grandes, el flujo de irrigación presiona el iris contra la cápsula creando un sello hermético valvular; el líquido pasa a la cámara posterior forzando el diafragma iridocristaliniano hacia atrás, hiperprofundizando la cámara y generando dolor sordo por estiramiento ciliar agudo.\n3) Maniobra Quirúrgica Exacta de Reversión Inmediata:\n   - Introducir una espátula roma de iris a través de una de las paracentesis y levantar suavemente el reborde pupilar del iris separándolo de la cápsula anterior.\n   - Esta maniobra rompe el sello hermético valvular, permitiendo que el líquido acumulado detrás del iris drene libremente hacia la cámara anterior, restaurando la profundidad fisiológica normal de la cámara en 1 segundo y aliviando el dolor del paciente.\n   - Como medida coadyuvante complementaria: Bajar de inmediato la altura de la botella de infusión a 40-50 cm para disminuir la presión hidrostática.',
        trap: 'Aumentar la infusión pensando que la cámara está colapsada, o implantar un LIO de silicona en un ojo con aceite de silicona.'
      }
    ]
  }
];

