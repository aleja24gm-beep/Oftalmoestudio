import { TopicDeepDive } from '../types/ophthalmology';

export const GLAUCOMA_TOPICS: TopicDeepDive[] = [
  // =========================================================================
  // 1. NEUROPATÍA ÓPTICA GLAUCOMATOSA Y BIOLOGÍA CELULAR
  // =========================================================================
  {
    id: 'deep-glaucoma-neuropatia-biologia-celular',
    title: 'Neuropatía Óptica Glaucomatosa y Biología Celular: Fisiopatología Axonal, Apoptosis de Células Ganglionares y Remodelación de la Lámina Cribosa',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía fundamental sobre los mecanismos celulares y biomecánicos del daño glaucomatoso: gradiente de presión translámina cribosa (PIO vs presión del líquido cefalorraquídeo retrobulbar), compresión y remodelación de las trabéculas colágenas de la lámina cribosa, disrupción del transporte axoplásmico retrógrado y ortógrado del factor neurotrófico derivado del cerebro (BDNF), excitotoxicidad mediada por glutamato, estrés oxidativo mitocondrial, activación de la microglía y cascada de apoptosis programada dependiente de caspasas en las células ganglionares de la retina (CGR).',
    definitionAndEpidemiology: 'La neuropatía óptica glaucomatosa es una neurodegeneración progresiva y específica del nervio óptico y la vía visual anterior, caracterizada por la pérdida selectiva de las células ganglionares de la retina (CGR) y sus axones mielinizados, acompañada de una excavación profunda de la papila óptica y adelgazamiento concordante del reborde neurorretiniano. Representa la principal causa de ceguera irreversible en el mundo, afectando a más de 80 millones de personas.',
    anatomyAndPathophysiology: '1. Biomecánica de la Lámina Cribosa y Gradiente Translaminar:\n   • La lámina cribosa es una malla tridimensional de 10 a 12 placas cribiformes de colágeno tipos I, III y IV perforada por 200 a 400 haces por donde discurren los 1.2 millones de axones del nervio óptico.\n   • Gradiente de Presión Translámina Cribosa (TLPG): Diferencia entre la Presión Intraocular (PIO) anterior y la presión del Líquido Cefalorraquídeo (LCR) en el espacio subaracnoideo del nervio óptico retrobulbar. Una elevación de la PIO o una reducción patológica de la presión del LCR (frecuente en glaucoma de presión normal) amplifica este gradiente tensional, deformando y curvando hacia atrás las placas cribiformes.\n2. Bloqueo del Transporte Axoplásmico:\n   • La deformación física de las placas laminares genera una compresión y cizallamiento directo de los axones amielínicos de las CGR en los poros superior e inferior (poros con menor densidad de soporte colágeno, lo que explica la vulnerabilidad polar del reborde neurorretiniano y la regla ISNT).\n   • El cizallamiento bloquea el transporte axoplásmico retrógrado de neurotrofinas esenciales (Factor Neurotrófico Derivado del Cerebro - BDNF, y Factor de Crecimiento Nervioso - NGF) desde los colículos superiores y el cuerpo geniculado lateral hacia el soma celular en la retina.\n3. Cascada Bioquímica de Apoptosis de las CGR:\n   • Deprivación de BDNF -> Activación de proteínas pro-apoptóticas de la familia Bcl-2 (Bax, Bad, Bim) en la membrana mitocondrial externa.\n   • Permeabilización mitocondrial con liberación masiva de Citocromo C al citoplasma celular.\n   • Formación del apoptosoma (Citocromo C + Apaf-1 + procaspasa-9) y activación consecutiva de la caspasa efectora 3, culminando en condensación nuclear, fragmentación del ADN y muerte por apoptosis sin lisis celular descontrolada.\n4. Excitotoxicidad y Neuroinflamación:\n   • Disfunción de transportadores gliales de glutamato (EAAT) en células de Müller -> acúmulo patológico de glutamato extracelular con hiperactivación de receptores NMDA postsinápticos.\n   • Entrada masiva desregulada de calcio intracelular (sobrecarga cálcica) que activa calpaínas, óxido nítrico sintasa inducible (iNOS) y genera radicales libres de oxígeno (ROS).\n   • Reactividad de astrocitos y activación de la microglía laminar que secreta factor de necrosis tumoral alfa (TNF-alfa) y metaloproteinasas (MMP-2, MMP-9), perpetuando la degradación de la matriz extracelular laminar.',
    clinicalExamination: {
      biomicroscopy: 'Segmento anterior habitualmente transparente sin celularidad en cámara anterior en formas primarias; evaluación minuciosa de la córnea periférica y grosor corneal.',
      fundus: 'Papila óptica con excavación vertical aumentada, rechazo nasal de vasos sanguíneos, adelgazamiento o desaparición focal del reborde neurorretiniano ("notching") en polos vertical superior e inferior, denudación de vasos circumlineares y visualización de poros de la lámina cribosa en el fondo de la copa excavada.',
      specialSigns: '• Signo del baring de vasos circumlineares: Espacio libre o desnudo entre el vaso circumlinear y el reborde neurorretiniano por retroceso del tejido axonal.\n• Visualización de poros de la lámina cribosa (Laminar dot sign): Exposición de las perforaciones laminares grisáceas en el fondo de la excavación papilar avanzada.\n• Violación de la regla ISNT: El reborde inferior es el primero en adelgazar en la gran mayoría de los casos tempranos.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT de Capa de Fibras Nerviosas de la Retina (CFNR) peripapilar y Complejo de Células Ganglionares Macular (GCC / GCL-IPL)',
        findings: 'Pérdida axonal objetivable y adelgazamiento de la capa de células ganglionares en el polo macular y cuadrantes temporales superior e inferior del nervio óptico antes de cualquier pérdida campimétrica detectable (fase preperimétrica del glaucoma).'
      },
      {
        test: 'Campimetría Computarizada Humphrey 24-2 / 10-2 SITA',
        findings: 'Defectos funcionales focales correspondientes a los haces axonales dañados en la lámina cribosa: escotomas paracentrales precoces, escalones nasales y escotomas arciformes.'
      },
      {
        test: 'Paquimetría Corneal Central (CCT)',
        findings: 'CCT media normal: 545-555 µm. Córneas finas (<555 µm) son un factor de riesgo independiente de progresión rápida según el ensayo OHTS.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Neuropatía Óptica Isquémica Anterior No Arterítica (NOIA-NA)', distinction: 'Palidez del reborde neurorretiniano que excede a la excavación; defecto campimétrico altitudinal típicamente inferior y ojo contralateral con disco "hacinado" sin excavación fisiológica ("disc-at-risk").' },
      { condition: 'Neuropatía Óptica Compresiva (Meningioma / Adenoma Hipofisario)', distinction: 'Palidez papilar homogénea sin excavación profunda típica; defectos campimétricos bitemporales o respetando el meridiano vertical.' },
      { condition: 'Excavación Fisiológica Grande', distinction: 'Papila de gran diámetro discoidal (>2.2 mm) con reborde neurorretiniano amplio y simétrico en 360 grados que cumple estrictamente la regla ISNT, sin defectos en CFNR por OCT ni asimetría interocular >0.2.' }
    ],
    steppedManagement: {
      medical: '• Reducción de la PIO (Único tratamiento validado con evidencia Grado A): Disminuir la PIO reduce la deformación mecánica de la lámina cribosa y restablece el transporte axoplásmico.\n• Investigación en Neuroprotección Celular:\n  - Citicolina (CDP-colina): Precursor de fosfatidilcolina que estabiliza membranas neuronales y modula la apoptosis mitocondrial.\n  - Nicotinamida (Vitamina B3): Precursor de NAD+ que previene el fallo bioenergético mitocondrial de las CGR senescentes.\n  - Brimonidina: Propiedades antiapoptóticas intrínsecas demostradas en modelos animales mediante regulación positiva de bcl-2.',
      surgical: '• Indicada precozmente ante progresión documentada estructural o funcional a pesar de PIO en rango diana, o fluctuaciones extremas de la PIO que superan la resistencia biomecánica laminar.'
    },
    clinicalApplicationPractical: '1. Recordar que el daño biológico comienza a nivel molecular y axonal mucho antes de que el paciente note visión borrosa o falle el campo visual estándar (se calcula que debe perderse entre el 30% y 50% de las células ganglionares antes de que aparezca un defecto reproducible en la campimetría 24-2).\n2. Todo paciente con PIO "normal" (14-16 mmHg) pero con adelgazamiento progresivo del GCC en OCT debe ser evaluado para descartar un gradiente translaminar patológico (hipotensión sistémica nocturna, caídas de presión en sueño o presión del LCR reducida).\n3. El polo inferior del disco óptico es el más vulnerable al cizallamiento por tener poros laminares más grandes con menor soporte conectivo glial, traduciéndose en el típico escotoma campimétrico superior precoz.',
    highYieldPearl: 'Fisiopatología Celular Board Pearl: La muerte de las células ganglionares en el glaucoma es por APOPTOSIS programada dependiente de caspasas, desencadenada por el bloqueo retrógrado del transporte de BDNF en los poros superior e inferior de la lámina cribosa deformada.',
    keyDrugs: [
      { name: 'Latanoprost 0.005%', dose: '1 gota cada noche', warning: 'Aumenta el drenaje uveoescleral, reduce la compresión laminar.' },
      { name: 'Brimonidina 0.15% - 0.2%', dose: '1 gota cada 12 horas', warning: 'Alfa-2 agonista; efecto hipotensor y potencial neuroprotector; contraindicado en niños <2 años.' },
      { name: 'Nicotinamida oral (Vitamina B3)', dose: '500 a 1000 mg diarios (ensayos clínicos)', warning: 'Soporte bioenergético mitocondrial en fases experimentales activas.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Poros Laminares y Regla ISNT',
        category: 'Asociación Patognomónica',
        description: 'Los polos superior e inferior de la lámina cribosa tienen poros más amplios con menor densidad de tejido conectivo estromal de soporte. Esto condiciona que el daño glaucomatoso comience en estos polos, violando la regla ISNT y generando escotomas campimétricos arqueados.',
        trapToAvoid: 'Creer que el daño glaucomatoso inicia en el cuadrante nasal; el reborde nasal es el último en perderse.'
      }
    ]
  },

  // =========================================================================
  // 2. DINÁMICA DEL HUMOR ACUOSO Y PRESIÓN INTRAOCULAR (PIO)
  // =========================================================================
  {
    id: 'deep-glaucoma-dinamica-humor-acuoso-pio',
    title: 'Dinámica del Humor Acuoso y Presión Intraocular: Producción Ciliar, Drenaje Trabecular vs Uveoescleral, PIO Meta y Ritmo Circadiano',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía exhaustiva sobre la biofísica del humor acuoso y la tonometría ocular: mecanismos de secreción en el epitelio ciliar no pigmentado (secreción activa dependiente de Na+/K+ ATPasa y anhidrasa carbónica, ultrafiltración y difusión), flujo convencional trabecular a través de la malla yuxtacanalicular y canal de Schlemm hacia las venas epiesclerales (Ecuación de Goldmann) vs vía no convencional o uveoescleral a través del músculo ciliar y espacio supracoroideo, concepto de PIO meta personalizada según daño estructural basal (OHTS, AGIS, CIGTS) y fluctuación circadiana nocturna con picos posturales en decúbito supino.',
    definitionAndEpidemiology: 'La Presión Intraocular (PIO) es el resultado del equilibrio dinámico entre la tasa de producción de humor acuoso por los procesos ciliares y la resistencia a su evacuación a través de las vías de salida trabecular y uveoescleral. En la población general, la PIO media es de 15.5 ± 2.7 mmHg; el rango estadístico convencional de normalidad (media ± 2 DE) es de 10 a 21 mmHg. Sin embargo, la PIO es una variable biológica continua: no existe un umbral absoluto que separe ojos sanos de ojos con glaucoma.',
    anatomyAndPathophysiology: '1. Producción de Humor Acuoso:\n   • Tasa de formación: Aproximadamente 2.0 a 2.5 µL/minuto durante el día, reduciéndose en un 50% durante el sueño (ritmo circadiano).\n   • Sitio anatómico: Procesos ciliares de la pars plicata del cuerpo ciliar, revestidos por una doble capa epitelial (epitelio ciliar pigmentado externo y epitelio ciliar no pigmentado interno acoplados por uniones tipo gap junction).\n   • Tres mecanismos de transporte:\n     a) Secreción Activa (80-90% del total): Proceso energéticamente dependiente de la bomba Na+/K+ ATPasa en la membrana basolateral del epitelio no pigmentado y de la enzima Anhidrasa Carbónica tipo II y IV. Se bombean iones Na+ y HCO3- hacia la cámara posterior, creando un gradiente osmótico que arrastra agua de forma unidireccional.\n     b) Ultrafiltración: Paso de agua y solutos a favor de un gradiente hidrostático transcapilar a través del endotelio fenestrado de los capilares ciliares.\n     c) Difusión pasiva: Movimiento de solutos liposolubles a través de la membrana celular.\n2. Vías de Drenaje del Humor Acuoso:\n   • Vía Convencional o Trabecular (Flujo dependiente de la presión, 70-80% del drenaje en adultos jóvenes):\n     - Circula desde cámara posterior -> orificio pupilar -> cámara anterior -> ángulo iridocorneal.\n     - Tres capas de la malla trabecular: Malla Uveal (interna, poros de 25-75 µm), Malla Corneoescleral (intermedia, poros de 5-50 µm) y Malla Yuxtacanalicular o Cribiforme (externa, adyacente a la pared interna del canal de Schlemm).\n     - La Malla Yuxtacanalicular y la pared endotelial del Canal de Schlemm representan el sitio de máxima resistencia hidráulica al flujo del acuoso en ojos normales y en el glaucoma de ángulo abierto.\n     - Desde el canal de Schlemm, el acuoso drena por 25 a 35 canales colectores hacia el plexo venoso intraescleral y venas epiesclerales (Presión Venosa Epiescleral normal: 8 a 10 mmHg).\n     - Ecuación de Goldmann: PIO = (F / C) + Pe, donde F = tasa de producción, C = facilidad de salida trabecular y Pe = presión venosa epiescleral.\n   • Vía No Convencional o Uveoescleral (Flujo relativamente independiente de la presión, 20-30% en jóvenes, disminuye con la edad):\n     - El acuoso pasa a través de la raíz del iris y los haces del músculo ciliar hacia el espacio supracoroideo y supraciliar, saliendo a través de la esclera o los vasos vorticosos.\n     - Vía sobre la cual actúan los análogos de prostaglandinas mediante remodelación de la matriz extracelular entre los haces de músculo ciliar.\n3. Fluctuación Circadiana y Picos Tensionales:\n   • La PIO no es estática; presenta fluctuaciones fisiológicas de 3 a 5 mmHg en sujetos normales y >8-10 mmHg en pacientes con glaucoma.\n   • Pico tensional nocturno: En la mayoría de los pacientes con glaucoma, la PIO máxima ocurre durante la noche o primeras horas de la madrugada (entre las 4:00 AM y 7:00 AM) debido al decúbito supino (aumento de la presión venosa epiescleral en posición horizontal) y a cambios en el tono simpático.',
    clinicalExamination: {
      biomicroscopy: 'Tonometría de Aplanación de Goldmann (GAT, estándar de oro mundial calibrado para córneas de 520-545 µm de espesor). Inspección del menisco de fluoresceína: anchura regular de los semicírculos, pulsación ocular sincrónica con el pulso cardíaco.',
      fundus: 'Correlación entre el nivel tensional y la profundidad de la excavación.',
      specialSigns: '• Artefacto de córnea gruesa/fina: Córneas gruesas sobreestiman la PIO; córneas finas la infraestiman.\n• Curva tensional horaria diurna / Prueba de sobrecarga hídrica (Water drinking test): Ingesta de 1000 mL de agua en 10-15 minutos para provocar un pico transitorio que simula la fluctuación circadiana y el estrés trabecular.'
    },
    diagnosticWorkup: [
      {
        test: 'Tonometría de Aplanación de Goldmann calibrada',
        findings: 'Lectura milimétrica en el momento de contacto exacto de los bordes internos de ambos semicírculos de fluoresceína.'
      },
      {
        test: 'Tonometría de Contorno Dinámico de Pascal (DCT) o Tonómetro ORA (Ocular Response Analyzer)',
        findings: 'Medición de la Histéresis Corneal (CH) y PIO corneal compensada (IOPcc). Una baja histéresis corneal es un factor de riesgo independiente de progresión glaucomatosa.'
      },
      {
        test: 'Paquimetría Ultrasónica Central',
        findings: 'Imprescindible para contextualizar la lectura de Goldmann. Una CCT <555 µm duplica el riesgo de conversión a glaucoma en ojos hipertensos oculares.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Hipertensión Ocular (OHT)', distinction: 'PIO confirmada >21 mmHg sin ninguna alteración del nervio óptico en biomicroscopía o fotos estéreo, OCT de CFNR/GCC estrictamente normal y campos visuales 24-2 limpios y confiables.' },
      { condition: 'Glaucoma de Presión Normal (GPN)', distinction: 'PIO consistentemente <=21 mmHg con neuropatía óptica glaucomatosa evidente, excavación profunda y defectos campimétricos concordantes.' },
      { condition: 'Falso aumento de PIO por aplanamiento erróneo', distinction: 'Mires de fluoresceína excesivamente anchas por exceso de fluoresceína, pestañas interpuestas, compresión digital del globo por el examinador o maniobra de Valsalva involuntaria del paciente.' }
    ],
    steppedManagement: {
      medical: '• Cálculo Individualizado de la PIO Meta (Target IOP):\n  - Glaucoma Temprano (MD > -6 dB): Reducción del 25-30% de la PIO basal, manteniendo PIO <16-18 mmHg.\n  - Glaucoma Moderado (MD -6 a -12 dB): Reducción del 30-40%, manteniendo PIO <14-15 mmHg.\n  - Glaucoma Avanzado / Severo (MD < -12 dB o defecto a <5º de la fóvea): Reducción >=40-50%, manteniendo PIO <11-12 mmHg de forma continua sin picos nocturnos (criterio del ensayo AGIS).\n• Selección de fármacos según mecanismo de acción:\n  - Disminución de producción: Betabloqueantes (Timolol), Alfa-2 agonistas (Brimonidina), Inhibidores de Anhidrasa Carbónica (Dorzolamida, Acetazolamida).\n  - Aumento del drenaje trabecular: Mióticos (Pilocarpina), Inhibidores de Rho-quinasa (Netarsudil).\n  - Aumento del drenaje uveoescleral: Análogos de prostaglandinas (Latanoprost, Bimatoprost, Travoprost, Tafluprost).',
      surgical: '• Indicada cuando la PIO meta no se alcanza farmacológicamente o existe progresión documentada a pesar de cifras diurnas aparentemente normales (sospecha de picos tensionales nocturnos).'
    },
    clinicalApplicationPractical: '1. En pacientes que progresan con PIO en consulta de 15 mmHg: SIEMPRE sospechar fluctuaciones circadianas nocturnas o picos matutinos en decúbito. Realizar curva de PIO en diferentes horas del día o prueba de sobrecarga hídrica.\n2. Ensayo AGIS (Advanced Glaucoma Intervention Study): Los pacientes que mantuvieron una PIO promedio consistentemente menor a 12.0 mmHg en el 100% de sus visitas mostraron una tasa de progresión campimétrica prácticamente CERO a lo largo de 8 años.\n3. No aplicar "fórmulas fijas" de corrección paquimétrica; la relación entre grosor y elasticidad no es lineal; interpretar la CCT como un factor de riesgo biológico global, no como una resta matemática estricta.',
    highYieldPearl: 'Cálculo de Goldmann y Vía de Resistencia: El 80% de la resistencia al drenaje reside en la Malla Yuxtacanalicular y pared interna del Canal de Schlemm. El ensayo AGIS demostró que mantener la PIO <12 mmHg en todas las visitas detiene la progresión en glaucoma avanzado.',
    keyDrugs: [
      { name: 'Latanoprost 0.005%', dose: '1 gota nocturna diaria', warning: 'Aumenta el flujo uveoescleral no convencional en >30-40%.' },
      { name: 'Timolol maleato 0.5%', dose: '1 gota cada 12 horas', warning: 'Reduce la síntesis acuosa ciliar; contraindicado en asma, EPOC y bradiarritmias.' },
      { name: 'Dorzolamida 2%', dose: '1 gota cada 8 a 12 horas', warning: 'Inhibidor tópico de anhidrasa carbónica; ardor transitorio y precaución en alergia a sulfamidas.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Fórmula de Goldmann de la PIO',
        category: 'Cifra Clave de Corte',
        description: 'PIO = (F / C) + Pe. F = Tasa de flujo (aprox 2.5 µL/min); C = Facilidad o coeficiente de salida trabecular (0.28 µL/min/mmHg en normales, cae a <0.10 en glaucoma); Pe = Presión venosa epiescleral (8-10 mmHg). Si la Pe sube (fístula carótido-cavernosa o síndrome de Sturge-Weber), la PIO sube mmHg a mmHg directamente.',
        trapToAvoid: 'Olvidar que si la presión venosa epiescleral se eleva a 20 mmHg, la PIO no podrá bajar de 20 mmHg por más hipotensores que reduzcan la producción acuosa.'
      }
    ]
  },

  // =========================================================================
  // 3. GLAUCOMA PRIMARIO DE ÁNGULO ABIERTO (GPAA)
  // =========================================================================
  {
    id: 'deep-glaucoma-gpaa-epidemiologia-tamizaje',
    title: 'Glaucoma Primario de Ángulo Abierto (GPAA): Epidemiología, Historia Natural, Factores de Riesgo (OHTS, EMGT) y Protocolos de Tamizaje',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía completa sobre la forma más prevalente de glaucoma en el mundo occidental: epidemiología y carga sociosanitaria, curso clínico crónico asintomático ("ladrón silencioso de la visión"), factores de riesgo mayores y menores validados en ensayos landmark (Ocular Hypertension Treatment Study - OHTS, Early Manifest Glaucoma Trial - EMGT, Collaborative Initial Glaucoma Treatment Study - CIGTS), análisis de la paquimetría central como biomarcador de riesgo independiente, relación entre miopía axial alta y GPAA, fenotipo genético (genes MYOC/miocilina, OPTN/optineurina) y estrategias costo-efectivas de tamizaje poblacional y cribado oportunista en mayores de 40 años.',
    definitionAndEpidemiology: 'Neuropatía óptica crónica, lentamente progresiva y bilateral (aunque frecuentemente asimétrica) caracterizada por daño estructural en el nervio óptico y la capa de fibras nerviosas de la retina con pérdida funcional progresiva concordante en el campo visual, en presencia de un ángulo iridocorneal abierto a la gonioscopia y sin causa secundaria identificable. Afecta al 2-3% de la población mayor de 40 años y su prevalencia se eleva a más del 8-10% en personas mayores de 80 años y en poblaciones de ascendencia africana.',
    anatomyAndPathophysiology: '1. Factores de Riesgo Mayores Validados por Evidencia Grado A:\n   • Presión Intraocular Elevada: Factor causal modificable más importante. A mayor PIO basal, mayor tasa de conversión de hipertensión ocular a glaucoma y mayor velocidad de progresión.\n   • Edad Avanzada: El riesgo de GPAA se cuadruplica por cada década a partir de los 40 años.\n   • Raza y Etnia: Personas de ascendencia afrodescendiente o hispana tienen un riesgo 3 a 5 veces superior de GPAA, con una edad de inicio más temprana, mayor daño al diagnóstico y progresión más agresiva.\n   • Paquimetría Corneal Central (CCT) Delgada: Ensayo OHTS demostró que los pacientes con CCT <555 µm tenían el triple de riesgo de conversión en comparación con aquellos con CCT >588 µm con la misma PIO medida.\n   • Antecedentes Familiares de Primer Grado: Tener un hermano o padre con GPAA incrementa el riesgo individual entre 4 y 9 veces.\n   • Miopía Axial (Especialmente > -4.00 a -6.00 D): Ojos con longitudes axiales aumentadas presentan papilas oblicuas inclinadas con lámina cribosa adelgazada y menor soporte conectivo peripapilar.\n2. Factores de Riesgo Vasculares y Sistémicos:\n   • Hipotensión arterial sistémica nocturna (fenómeno de "dipping" patológico nocturno con caídas pronunciadas de la presión arterial media y disminución crítica de la Presión de Perfusión Ocular: PPO = Presión Arterial Diastólica - PIO; PPO <50-55 mmHg duplica el riesgo de progresión).\n   • Diabetes Mellitus tipo 2, síndrome de apnea obstructiva del sueño (SAOS) y migraña/vasoespasmo primario.\n3. Bases Genéticas:\n   • Herencia poligénica compleja en la mayoría de los casos.\n   • Gen MYOC (Miocilina, locus GLC1A en 1q24): Mutado en el 3-5% de los pacientes con GPAA del adulto y en un tercio de los glaucomas juveniles de ángulo abierto. Codifica una proteína trabecular mutada que forma agregados intracelulares insolubles que colapsan la malla cribiforme.',
    clinicalExamination: {
      biomicroscopy: 'Córnea clara, cámara anterior profunda, ángulo iridocorneal completamente abierto a la gonioscopia de 4 espejos (Shaffer grado 3 o 4 en los 360 grados) sin sinequias anteriores periféricas ni depósitos de pseudoexfoliación ni dispersión de pigmento.',
      fundus: 'Signos cardinales de neuropatía glaucomatosa en papila: excavación vertical aumentada (C/D >0.6 o asimetría interocular >0.2), adelgazamiento selectivo del reborde neurorretiniano violando la regla ISNT (Inferior > Superior > Nasal > Temporal), muescas focales del reborde, hemorragias de disco en astilla (hemorragias de Drance), atrofia peripapilar beta (con visibilidad de esclera desnuda y coriocapilar ausente) y pérdida de brillo en estrías de la CFNR.',
      specialSigns: '• Regla ISNT violada: El reborde inferior es el más ancho en ojos sanos; si el reborde inferior es más delgado que el superior o nasal, se asume patológico hasta demostrar lo contrario.\n• Hemorragia de Drance en reborde papilar: Predictor clínico más fiable de progresión activa y pérdida de campo visual en el mismo cuadrante en los siguientes 12 a 18 meses.'
    },
    diagnosticWorkup: [
      {
        test: 'Tonometría de Aplanación de Goldmann seriada',
        findings: 'Toma de PIO basal en diferentes visitas para determinar la PIO media previa al inicio de cualquier terapia.'
      },
      {
        test: 'Gonioscopia Dinámica de Zeiss / Sussman',
        findings: 'Visualización de las 4 estructuras angulares (Espolón Escleral, Malla Trabecular Pigmentada y Línea de Schwalbe) descartando goniosinequias o cierre aposicional.'
      },
      {
        test: 'OCT Spectral-Domain de CFNR peripapilar y GCC macular',
        findings: 'Mapa cuantitativo de grosor que detecta pérdida axonal y defectos en cuña o difusos comparados con base de datos normativos corregidos por edad.'
      },
      {
        test: 'Campimetría Computarizada Humphrey 24-2 / 10-2 SITA',
        findings: 'Evaluación funcional basal: mínimo 2 o 3 campos visuales confiables en los primeros 6 meses para establecer una línea de base y descartar efecto de aprendizaje.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Hipertensión Ocular (OHT)', distinction: 'PIO >21 mmHg pero sin daño estructural en papila ni OCT de CFNR y campos visuales limpios a lo largo del seguimiento.' },
      { condition: 'Glaucoma de Presión Normal (GPN)', distinction: 'PIO diurna y nocturna siempre <=21 mmHg; mayor frecuencia de hemorragias de Drance y fenómenos vasoespásticos sistémicos.' },
      { condition: 'Glaucomas Secundarios de Ángulo Abierto (PEX o Pigmentario)', distinction: 'Presencia de material blanquecino en cápsula anterior del cristalino (PEX) o defectos de transiluminación en iris y huso de Krukenberg en endotelio (pigmentario).' }
    ],
    steppedManagement: {
      medical: '• Meta terapéutica: Reducción tensional mínima del 25-30% respecto al valor basal (Ensayo EMGT demostró que cada 1 mmHg de reducción adicional de la PIO disminuye el riesgo de progresión en un 10% a 8 años).\n• Primera línea de elección:\n  - Trabeculoplastia Láser Selectiva (SLT) de 360 grados según el ensayo LiGHT (Lancet 2019): Terapia de primera línea altamente coste-efectiva, mantiene al 74% de los ojos libres de gotas a 3 años.\n  - Análogos de prostaglandinas tópicos (Latanoprost, Bimatoprost, Travoprost) 1 gota nocturna.\n• Terapia médica combinada si no se alcanza la PIO meta:\n  - Betabloqueante tópico (Timolol 0.5% c/12h).\n  - Alfa-2 agonista (Brimonidina 0.15% c/12h).\n  - Inhibidor de anhidrasa carbónica tópico (Dorzolamida 2% c/12h).\n  - Inhibidor de Rho-quinasa (Netarsudil 0.02% diario).',
      surgical: '• Indicación: Progresión documentada a pesar de tratamiento médico máximo tolerado o imposibilidad de cumplimiento del tratamiento con gotas.\n• Procedimientos: Cirugía Mínimamente Invasiva de Glaucoma (MIGS) en estadios leves-moderados combinada con catarata; Trabeculectomía con Mitomicina C o EPNP en casos avanzados.'
    },
    clinicalApplicationPractical: '1. OHTS Landmark Rule: Los pacientes con hipertensión ocular y paquimetría <555 µm tienen un riesgo 3 veces mayor de desarrollar GPAA que aquellos con córnea >588 µm. La paquimetría es el primer examen a solicitar ante una PIO elevada.\n2. EMGT Landmark Rule: El tratamiento hipotensor precoz redujo la progresión del 62% al 45% a 6 años; no demorar el tratamiento en pacientes con defectos campimétricos iniciales o factores de riesgo múltiples.\n3. Si detecta una hemorragia de Drance en la papila: NO ESPERAR a que el campo visual se deteriore; la hemorragia es una señal de que el régimen actual es insuficiente; intensificar el tratamiento de inmediato.',
    highYieldPearl: 'GPAA Landmark Pearl: Ensayo OHTS demostró que la paquimetría fina (<555 µm) es el factor pronóstico independiente más potente. Ensayo EMGT demostró que cada 1 mmHg de descenso tensional reduce la progresión en un 10%.',
    keyDrugs: [
      { name: 'Latanoprost 0.005%', dose: '1 gota cada noche', warning: 'Primera línea médica; hiperpigmentación de iris y crecimiento de pestañas.' },
      { name: 'Timolol 0.5%', dose: '1 gota cada 12 horas', warning: 'Contraindicado en asma bronquial, EPOC y bradicardia/bloqueo cardíaco.' },
      { name: 'Brimonidina 0.15%', dose: '1 gota cada 12 horas', warning: 'Alergia conjuntival folicular en 15-20% de pacientes; contraindicado en lactantes.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Tamizaje Poblacional de Glaucoma',
        category: 'Pregunta Clásica',
        description: 'La tonometría aislada NO sirve como método de tamizaje poblacional porque hasta el 30-50% de los pacientes con GPAA tienen PIO <=21 mmHg en una toma aislada (Glaucoma de Presión Normal o fluctuaciones circadianas). El cribado debe combinar evaluación de la papila óptica (oftalmoscopia/retinografía) y tonometría.',
        trapToAvoid: 'Descartar glaucoma porque el paciente tiene una PIO de 16 mmHg en consulta sin revisar la excavación del nervio óptico.'
      }
    ]
  },

  // =========================================================================
  // 4. GLAUCOMA POR CIERRE ANGULAR Y GONIOSCOPIA
  // =========================================================================
  {
    id: 'deep-glaucoma-cierre-angular-gonioscopia',
    title: 'Glaucoma por Cierre Angular y Gonioscopia: Clasificación ISGEO (PACS, PAC, PACG, APAC), Bloqueo Pupilar vs No Pupilar y Gonioscopia de Cuatro Espejos',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía quirúrgica y de guardia sobre la enfermedad por cierre angular primario: clasificación estandarizada de la ISGEO (Sospecha de Cierre Angular Primario - PACS, Cierre Angular Primario - PAC, Glaucoma Primario por Cierre Angular - PACG y Ataque Agudo - APAC), fisiopatología de mecanismos de bloqueo pupilar relativo vs mecanismos no pupilares (Síndrome de Iris en Meseta / Plateau Iris, cristalino engrosado facomórfico y bloqueo ciliar / glaucoma maligno), técnica de gonioscopia de indentación de 4 espejos de Sussman/Zeiss (clasificaciones de Shaffer y Spaeth), protocolo de choque médico en el ataque agudo y técnica de Iridotomía Periférica con Láser YAG (LPI) profiláctica y terapéutica.',
    definitionAndEpidemiology: 'La enfermedad por cierre angular primario es una condición caracterizada por la aposición o aherimiento del iris periférico a la malla trabecular que bloquea mecánicamente la salida del humor acuoso. Aunque representa solo el 20-25% de todos los glaucomas a nivel mundial, es responsable de casi el 50% de los casos de ceguera bilateral por glaucoma debido a su presentación más severa y rápida pérdida visual. Factores predisponentes: etnia asiática/inuit, sexo femenino (3:1), edad avanzada, hipermetropía con longitud axial corta (<22 mm) y cámara anterior estrecha (<2.5 mm).',
    anatomyAndPathophysiology: '1. Clasificación Internacional de la ISGEO (Foster et al., 2002):\n   • PACS (Sospecha de Cierre Angular Primario): Contacto iridotrabecular aposicional (ITC) en >=180 grados (>=2 cuadrantes) en gonioscopia en oscuridad sin indentación, pero con PIO normal, sin sinequias anteriores periféricas (PAS) y sin neuropatía óptica glaucomatosa.\n   • PAC (Cierre Angular Primario): Contacto iridotrabecular >=180 grados asociado a elevación de la PIO (>21 mmHg) o presencia de Sinequias Anteriores Periféricas (PAS), pero sin daño del nervio óptico ni defecto campimétrico.\n   • PACG (Glaucoma Primario por Cierre Angular): Contacto iridotrabecular >=180 grados con evidencia demostrada de neuropatía óptica glaucomatosa (excavación papilar, adelgazamiento de CFNR o defecto en campo visual).\n   • APAC (Cierre Angular Primario Agudo / Ataque Agudo): Oclusión brusca y total de 360 grados del ángulo iridocorneal con elevación masiva de la PIO (frecuentemente 50-80 mmHg), dolor ocular severo, cefalea hemicraneal, náuseas, vómitos, edema corneal y midriasis media.\n2. Mecanismos Fisiopatológicos:\n   • Bloqueo Pupilar Relativo (Mecanismo más frecuente, 75-80%):\n     - En midriasis media (3.5 a 5.0 mm), el roce entre la cara posterior del iris y la cápsula anterior del cristalino alcanza su máxima resistencia hidrodinámica.\n     - El acuoso queda atrapado en cámara posterior -> la presión retroiridiana supera la presión de cámara anterior -> el iris periférico se comba anteriormente ("iris bombé") y se apone contra la malla trabecular.\n   • Mecanismos No Pupilares:\n     - Síndrome de Iris en Meseta (Plateau Iris): Procesos ciliares rotados anteriormente que sostienen la raíz del iris en una posición anormalmente adelantada, manteniendo un ángulo estrecho o cerrado tras una iridotomía patente (doble joroba o double-hump sign en gonioscopia de indentación).\n     - Componente Lenticular / Facomórfico: Cristalino aumentado de diámetro anteroposterior (catarata intumescente o envejecimiento cristaliniano) que empuja el diafragma iridocristaliniano hacia adelante.\n     - Vector de empuje posterior / Bloqueo Ciliar (Glaucoma Maligno): Desvío anómalo del humor acuoso hacia el espacio vítreo posterior con aplanamiento uniforme de la cámara anterior.',
    clinicalExamination: {
      biomicroscopy: 'Técnica de Van Herick: haz luminoso fino a 60 grados en el limbo corneal temporal; mide la profundidad de la cámara anterior periférica en relación al espesor corneal (Grado 4: >1 espesor corneal; Grado 1: <1/4 de espesor, alto riesgo; Grado 0: contacto iridocorneal). En ataque agudo: edema corneal microquístico difuso en vidrio esmerilado, congestión ciliar violácea ("ojo rojo doloroso"), cámara anterior plana o muy estrecha y pupila en midriasis media ovalada vertical arrefléctica.',
      fundus: 'En ataque agudo: velado por edema; tras resolución: atrofia sectorial del estroma del iris (por isquemia arterial ciliar) y Glaukomflecken de Vogt (opacidades blanco-grisáceas subcapsulares anteriores por necrosis epitelial cristaliniana focal, patognomónicas de ataque previo resuelto).',
      specialSigns: '• Maniobra de Indentación de Sussman/Zeiss: Presionar suavemente la córnea central con lente de 4 espejos sin viscoelástico; desplaza el acuoso hacia la periferia abriendo el ángulo. Si el ángulo se abre, el cierre es puramente aposicional (reversible); si no se abre, existen sinequias anteriores periféricas fijas (PAS, irreversibles).\n• Glaukomflecken de Vogt: Huella digital retrospectiva de un ataque agudo de glaucoma previo.'
    },
    diagnosticWorkup: [
      {
        test: 'Gonioscopia Dinámica de 4 espejos (Zeiss / Sussman)',
        findings: 'Estándar de oro: Clasificación de Shaffer (Grado 4 a 0) y Spaeth (configuración del iris, nivel de inserción y anchura angular en grados).'
      },
      {
        test: 'UBM (Biomicroscopía Ultrasónica de 50 MHz)',
        findings: 'Visualiza la anatomía retroiridiana oculta: rotación anterior de procesos ciliares en iris en meseta y grosor cristaliniano.'
      },
      {
        test: 'AS-OCT (OCT de Segmento Anterior)',
        findings: 'Cuantifica la apertura angular (AOD500, TISA500) y el contacto iridotrabecular en oscuridad.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Glaucoma Neovascular en fase de cierre angular', distinction: 'Presencia de microneovasos en borde pupilar y ángulo iridocorneal con sinequias en cremallera secundarias a isquemia retiniana.' },
      { condition: 'Glaucoma Facomórfico por catarata intumescente', distinction: 'Catarata blanca hinchada intumescente con vault cristaliniano anterior prominente.' },
      { condition: 'Glaucoma Maligno (Bloqueo ciliar)', distinction: 'Aplanamiento plano total tanto de la cámara anterior central como periférica tras cirugía intraocular previa.' }
    ],
    steppedManagement: {
      medical: '• Protocolo de Choque de Urgencia en el Ataque Agudo (APAC):\n  1) Fármacos Hiperosmóticos Sistémicos:\n     - Manitol IV al 20%: 1.0 a 2.0 g/kg (250 a 500 mL) a pasar en 30-45 minutos. Deshidrata el cuerpo vítreo y reduce bruscamente el volumen posterior.\n  2) Inhibidores Sistémicos de la Anhidrasa Carbónica:\n     - Acetazolamida 500 mg VO o IV inicial, seguido de 250 mg cada 6-8 horas (añadir suplementos de potasio si se usa prolongado).\n  3) Hipotensores Tópicos en Gotas:\n     - Timolol 0.5% + Brimonidina 0.15% + Dorzolamida 2% cada 15 minutos por 3 dosis.\n     - Corticoides tópicos potentes (Prednisolona 1% cada hora) para reducir la inflamación y edema de iris.\n  4) Mióticos Tópicos:\n     - Pilocarpina al 2%: INSTILAR SOLO CUANDO LA PIO HAYA BAJADO DE 30-40 mmHg. Con PIO >40-50 mmHg, el esfínter pupilar está isquémico y paralizado; la pilocarpina no responde y puede agravar el bloqueo pupilar.',
      surgical: '• Tratamiento Quirúrgico Definitivo:\n  1) Iridotomía Periférica con Láser Nd:YAG (LPI): Procedimiento de elección una vez aclarada la córnea; crea un bypass entre cámara posterior y anterior eliminando el gradiente de presión.\n  2) TRATAR SIEMPRE EL OJO CONTRALATERAL: El 50% de los ojos contralaterales sufrirán un ataque agudo en los siguientes 5 años si no se realiza LPI profiláctica.\n  3) Extracción del Cristalino (Facoemulsificación precoz): Ensayo EAGLE (Lancet 2016) demostró que la extracción precoz del cristalino transparente o catarata inicial es más costo-efectiva y logra mejor control tensional que la LPI en pacientes con PAC con PIO >30 mmHg o PACG primario.\n  4) Iridoplastia Periférica con Láser Argón: En Síndrome de Iris en Meseta resistente a LPI.'
    },
    clinicalApplicationPractical: '1. REGLA DE ORO DE GUARDIA: NUNCA dar de alta a un paciente tras resolver un ataque agudo de glaucoma sin haber realizado o programado la IRIDOTOMÍA LÁSER PROFILÁCTICA EN EL OJO CONTRALATERAL.\n2. Si la córnea está demasiado edematosa para disparar el láser YAG: Instilar glicerina tópica al 100% o aplicar una gota de colirio hipertónico salino (NaCl 5%) para aclarar temporalmente el epitelio y permitir visualizar la cripta iridiana periférica.\n3. Ensayo EAGLE Landmark: En mayores de 50 años con cierre angular primario y PIO >30 mmHg, la extracción del cristalino mediante facoemulsificación es el tratamiento de primera línea más efectivo que la iridotomía con láser sola.',
    highYieldPearl: 'Cierre Angular Board Pearl: En ataque agudo, la Pilocarpina no actúa con PIO >30-40 mmHg por isquemia del esfínter pupilar. El ojo contralateral debe recibir SIEMPRE una iridotomía profiláctica con láser YAG para evitar un ataque en el 50% a 5 años.',
    keyDrugs: [
      { name: 'Manitol IV 20%', dose: '1.5 a 2 g/kg en infusión rápida (30-45 min)', warning: 'Agente osmótico de choque; contraindicado en insuficiencia cardíaca congestiva y edema agudo de pulmón.' },
      { name: 'Acetazolamida oral/IV', dose: '500 mg dosis de carga, luego 250 mg c/8h', warning: 'Contraindicado en acidosis metabólica, insuficiencia renal severa y alergia grave a sulfamidas.' },
      { name: 'Pilocarpina 2%', dose: '1 gota cada 15 min por 2-3 dosis (SOLO tras bajar PIO <30 mmHg)', warning: 'Miótico parasimpaticomimético; induce miopía espasmódica y cefalea supraorbitaria.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Ensayo EAGLE (Effectiveness of Early Lens Extraction for Angle-Closure Glaucoma)',
        category: 'Pregunta Clásica',
        description: 'Ensayo multicéntrico aleatorizado publicado en Lancet 2016: Comparó la extracción del cristalino mediante facoemulsificación frente a la iridotomía láser estándar en PACG recién diagnosticado y PAC con PIO >=30 mmHg. La facoemulsificación demostró mejor calidad de vida, menor necesidad de colirios hipotensores y menor costo global.',
        trapToAvoid: 'Creer que la facoemulsificación solo está indicada si el paciente tiene catarata avanzada; en cierre angular primario se extrae el cristalino por indicación mecánica anatómica.'
      }
    ]
  },

  // =========================================================================
  // 5. GLAUCOMAS SECUNDARIOS Y FORMAS ESPECIALES
  // =========================================================================
  {
    id: 'deep-glaucoma-secundarios-formas-especiales',
    title: 'Glaucomas Secundarios y Formas Especiales: Pseudoexfoliativo, Pigmentario, Neovascular, Uveítico, Corticodependiente y de Presión Normal (GPN)',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía exhaustiva y comparativa sobre las seis formas especiales y secundarias de glaucoma de mayor impacto clínico: 1) Glaucoma Pseudoexfoliativo (PEXG) ligado a mutaciones en LOXL1, fragilidad zonular extrema y riesgo quirúrgico en facoemulsificación; 2) Síndrome de Dispersión Pigmentaria (PDS) y Glaucoma Pigmentario con huso de Krukenberg, defectos de transiluminación radial en iris y concavidad inversa del iris; 3) Glaucoma Neovascular (GNV) en fases rubeótica y sinequial por isquemia retiniana extensa con protocolo anti-VEGF + PRP + implantes de drenaje; 4) Glaucoma Uveítico (mecanismos de ángulo abierto por trabeculitis vs ángulo cerrado por seclusión pupilar y sinequias anteriores periféricas); 5) Glaucoma Corticocausado (respuesta hiper-reactora esteroidea mediada por trabeculocitos y gen MYOC); y 6) Glaucoma de Presión Normal (GPN) con análisis del ensayo CNTGS, hemorragias de Drance, síndrome de Flammer y dips nocturnos de presión arterial.',
    definitionAndEpidemiology: 'Los glaucomas secundarios constituyen un grupo heterogéneo de neuropatías ópticas en las que una patología ocular o sistémica identificable altera el drenaje del humor acuoso produciendo hipertensión ocular y daño glaucomatoso. El Glaucoma de Presión Normal (GPN) es un subtipo de GPAA en el que la PIO medida nunca supera los 21 mmHg.',
    anatomyAndPathophysiology: '1. Glaucoma Pseudoexfoliativo (PEXG):\n   • Causa más común de glaucoma secundario unilateral identificable en el mundo.\n   • Genética: Fuertemente asociado a polimorfismos de un solo nucleótido en el gen LOXL1 (Lisil Oxidasa-Like 1 en 15q24), enzima clave en el entrecruzamiento de elastina.\n   • Patología elástica: Depósito de fibrillas proteínicas anormales (aspecto en "peldaños de escalera") que colmatan la malla trabecular y se adhieren a la zónula de Zinn, induciendo proteólisis enzimática y debilidad zonular extrema (facodonesis y luxación del cristalino).\n   • Picos hipertensivos elevados y fluctuaciones amplias que condicionan rápida pérdida de campo visual.\n2. Síndrome de Dispersión Pigmentaria (PDS) y Glaucoma Pigmentario:\n   • Varones jóvenes (20-40 años), miopes, con cámara anterior profunda.\n   • Fisiopatología de contacto mecánico inverso: El iris periférico presenta una concavidad posterior anómala ("iris cóncavo") que roza contra los haces de la zónula anterior durante los movimientos pupilares.\n   • Liberación masiva de melanina del epitelio pigmentario posterior del iris -> depósitos en endotelio corneal (Huso de Krukenberg) y fagocitosis de gránulos por el endotelio trabecular, colapsando los espacios cribiformes.\n3. Glaucoma Neovascular (GNV):\n   • Secuela de isquemia retiniana masiva: Regla de los Tres Tercios (1/3 por Oclusión de Vena Central de la Retina, 1/3 por Retinopatía Diabética Proliferativa y 1/3 por Síndrome Isquémico Ocular / estenosis carotídea).\n   • Liberación masiva de VEGF al vítreo y cámara anterior -> formación de neovasos desordenados en pupila (rubeosis) y ángulo -> proliferación de miofibroblastos que forman una membrana fibrovascular transparente contráctil que cierra el ángulo como una cremallera (zippering).\n4. Glaucoma Uveítico:\n   • Ángulo Abierto: Trabeculitis inflamatoria (acúmulo de fibrina, macrófagos y linfocitos en los poros trabeculares con edema trabecular endotelial).\n   • Ángulo Cerrado: Bloqueo pupilar por sinequias posteriores en 360 grados (seclusión pupilar con iris bombé) o cierre sinequial progresivo por goniosinequias inflamatorias.\n5. Glaucoma Corticoesteroideo (Respuesta Hiper-reactora a Esteroides):\n   • Aproximadamente un tercio de la población general experimenta una elevación moderada de la PIO (>6-15 mmHg) tras 2-4 semanas de corticoides tópicos potentes (dexametasona/prednisolona), y un 5% son "altos respondedores" con PIO >31 mmHg.\n   • Fisiopatología: Los corticoides inhiben la fagocitosis trabecular, inducen polimerización de actina formando fibras cruzadas anormales (CLANs) y aumentan el depósito de glicosaminoglicanos en la matriz yuxtacanalicular.\n6. Glaucoma de Presión Normal (GPN):\n   • Ensayo CNTGS (Collaborative Normal-Tension Glaucoma Study) demostró que una reducción tensional del 30% ralentiza significativamente el deterioro campimétrico.\n   • Factores vasculares no dependientes de PIO: Síndrome de desregulación vascular primaria (Síndrome de Flammer: manos y pies fríos, baja sensación de sed, hipotensión arterial constitucional, migraña), caídas nocturnas pronunciadas de la presión arterial (over-dipping nocturno) y gradiente translaminar amplificado por baja presión del LCR.',
    clinicalExamination: {
      biomicroscopy: '• En PEX: Material fibrilar blanco en caspa en reborde pupilar; cápsula anterior del cristalino con 3 zonas concéntricas (disco central translúcido, zona clara intermedia y banda granular periférica); facodonesis.\n• En Pigmentario: Huso de Krukenberg (banda vertical café endotelial corneal), cámara anterior muy profunda, transiluminación en rueda de carro en iris medio periférico y Línea de Scheie en cápsula posterior cristaliniana.\n• En GNV: Neovasos finos arborizantes anómalos en el reborde pupilar y superficie del iris; en fases avanzadas ectropión uveae y sinequias en cremallera.\n• En Uveítico: Precipitados queráticos en endotelio corneal, células y flare en cámara anterior, sinequias posteriores en reborde pupilar.\n• En GPN: Hemorragias de disco en astilla (hemorragias de Drance) mucho más frecuentes que en GPAA.',
      fundus: 'Evaluación del disco y mácula: En GPN, la excavación tiende a ser más focal con muescas profundas temporales inferiores y defectos campimétricos más cercanos a la fijación central.',
      specialSigns: '• Línea de Sampaolesi: Banda ondulada de pigmento denso por delante de la línea de Schwalbe en gonioscopia de PEX y dispersión pigmentaria.\n• Defectos de transiluminación radial en iris: Patognomónicos de síndrome de dispersión pigmentaria.\n• Seclusión pupilar con iris bombé: Sinequias posteriores en 360 grados en uveítis anterior crónica.'
    },
    diagnosticWorkup: [
      {
        test: 'Gonioscopia Dinámica de 4 espejos',
        findings: 'Diferenciación crucial: En PEX y Pigmentario se observa hiperpigmentación homogénea marrón oscura de la malla trabecular; en GNV se aprecian neovasos arborizantes que cruzan el espolón escleral hacia la malla o cierre sinequial.'
      },
      {
        test: 'Angiografía Fluoresceínica Retiniana (FAG) o Angio-OCT',
        findings: 'Mandatoria en Glaucoma Neovascular para mapear las áreas de isquemia retiniana capilar que requieren panfotocoagulación con láser.'
      },
      {
        test: 'Monitorización Ambulatoria de Presión Arterial de 24 horas (MAPA)',
        findings: 'En Glaucoma de Presión Normal para detectar caídas tensionales arteriales nocturnas severas (presión arterial diastólica <50 mmHg durante el sueño).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Síndrome de Posner-Schlossman (Crisis Glaucomatociclítica)', distinction: 'Hombre joven con episodios recurrentes unilaterales de PIO muy elevada (40-60 mmHg) con pocos precipitados queráticos pequeños no pigmentados y ángulo abierto sin sinequias.' },
      { condition: 'Glaucoma Facolítico', distinction: 'Catarata hipermadura licuefactada con escape de proteínas cristalinianas solubles a través de la cápsula íntegra que son fagocitadas por macrófagos gigantes que colmatan la malla trabecular.' },
      { condition: 'Glaucoma de Células Fantasma', distinction: 'Glaucoma secundario a hemorragia vítrea antigua; eritrocitos desnaturalizados rígidos de color caqui-amarillento (células fantasma) migran a cámara anterior obstruyendo la malla trabecular.' }
    ],
    steppedManagement: {
      medical: '• En Glaucoma Pseudoexfoliativo: Hipotensores de primera línea (análogos de PG, SLT de 360º con excelente respuesta inicial pero declive a largo plazo).\n• En Glaucoma Pigmentario: LPI con láser YAG puede revertir el iris cóncavo (bloqueo pupilar inverso) en fases tempranas al ecualizar presiones; evitar ejercicio de alto impacto previo a tratamiento.\n• En Glaucoma Neovascular: Inyección de Anti-VEGF intravítreo o intracameral INMEDIATA para inducir regresión de los neovasos en 24-48 horas + Panfotocoagulación Retiniana con láser (PRP) de urgencia. Manejo hipotensor con betabloqueantes y alfa-2; PROHIBIDAS las prostaglandinas y la pilocarpina.\n• En Glaucoma Uveítico: Corticoides tópicos potentes + ciclopléjicos (Ciclopentolato / Atropina) para romper sinequias posteriores y estabilizar la barrera hematoacuosa.\n• En Glaucoma Corticocausado: Suspender o desescalar el corticoide a uno de baja penetración (Loteprednol etabonato 0.5% o Fluorometolona 0.1%). La PIO suele normalizarse en 2 a 4 semanas.\n• En Glaucoma de Presión Normal: Reducir la PIO en un 30% respecto a la basal según el ensayo CNTGS. Suspender antihipertensivos orales nocturnos si causan hipotensión diastólica severa en sueño.',
      surgical: '• En PEX: Si requiere facoemulsificación, tener disponibles retractores de iris, anillo de tensión capsular (CTR) y técnica de viscodisección suave.\n• En GNV: Si el ángulo está cerrado por sinequias en >180º, la cirugía filtrante estándar fracasa; el procedimiento de elección es el Implante de Drenaje Valvulado (Válvula de Ahmed) con Anti-VEGF preoperatorio.'
    },
    clinicalApplicationPractical: '1. PEX Faco Pearl: El paciente con PEX y catarata tiene un riesgo 10 veces mayor de rotura capsular posterior y diálisis zonular. Si se detecta facodonesis en la lámpara, planificar el implante de un anillo de tensión capsular (CTR) y evitar maniobras agresivas de rotación.\n2. Glaucoma Neovascular Rule: NUNCA colocar una válvula de drenaje ni intentar trabeculectomía sin antes haber inyectado Anti-VEGF para secar los neovasos activos; operar sobre neovasos activos genera un hipema masivo incontrolable transquirúrgico.\n3. Si un paciente con uveítis tiene PIO de 45 mmHg: NUNCA usar pilocarpina (favorece la formación de sinequias posteriores en 360º y rompe la barrera hematoacuosa) ni prostaglandinas (empeoran la inflamación anterior y el edema macular cistoide).',
    highYieldPearl: 'Glaucomas Secundarios Board Pearl: En PEX hay mutación en LOXL1 y debilidad zonular extrema. En Glaucoma Neovascular el Anti-VEGF urgente + PRP es el paso inicial antes de la válvula de Ahmed. En uveítis y GNV, las prostaglandinas y la pilocarpina están formalmente contraindicadas.',
    keyDrugs: [
      { name: 'Bevacizumab / Aflibercept intravítreo', dose: '1.25 mg / 2 mg en inyección de rescate', warning: 'Urgente en Glaucoma Neovascular para blanquear neovasos antes de la cirugía.' },
      { name: 'Loteprednol etabonato 0.5%', dose: '1 gota cada 6 a 8 horas', warning: 'Corticoide éster blando con mínimo riesgo de elevación de la PIO comparado con dexametasona.' },
      { name: 'Ciclopentolato 1%', dose: '1 gota cada 8 horas', warning: 'Ciclopléjico esencial en glaucoma uveítico para prevenir seclusión pupilar y calmar el dolor ciliar.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Ensayo CNTGS (Collaborative Normal-Tension Glaucoma Study)',
        category: 'Pregunta Clásica',
        description: 'Demostró que una reducción tensional del 30% en pacientes con Glaucoma de Presión Normal disminuye la tasa de progresión campimétrica a 5 años del 35% al 12%. Sin embargo, en mujeres y pacientes con migraña/fenómenos vasoespásticos la progresión puede persistir a pesar del control tensional.',
        trapToAvoid: 'Pensar que en Glaucoma de Presión Normal no se deben usar colirios hipotensores porque la PIO ya está "normal".'
      }
    ]
  },

  // =========================================================================
  // 6. GLAUCOMAS CONGÉNITOS Y PEDIÁTRICOS
  // =========================================================================
  {
    id: 'deep-glaucoma-congenito-pediatrico',
    title: 'Glaucomas Congénitos y Pediátricos: Buftalmos, Megalocórnea, Estrías de Haab, Disgenesia Trabecular (CYP1B1) y Cirugía de Ángulo (Goniotomía vs Trabeculotomía)',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía quirúrgica pediátrica sobre el Glaucoma Congénito Primario (GCP) y anomalías del desarrollo del segmento anterior: tríada clínica cardinal clásica (epífora, fotofobia y blefaroespasmo), biomecánica de la esclera inmadura distensible del lactante que condiciona buftalmos y megalocórnea (>12.0 mm en el primer año de vida), roturas lineales o concéntricas en la membrana de Descemet (Estrías de Haab), base genética (mutaciones con pérdida de función en CYP1B1 y LTBP2), protocolo de examen bajo anestesia general (EUA) y técnicas quirúrgicas reconstructivas de ángulo de primera línea (Goniotomía ab interno de Barkan frente a Trabeculotomía ab externo / circunferencial de 360 grados con microcatéter iluminado).',
    definitionAndEpidemiology: 'El Glaucoma Congénito Primario (GCP) es una neuropatía óptica pediátrica bilateral (70-80% de los casos, frecuentemente asimétrica) caracterizada por elevación de la PIO debida a una disgenesia aislada del desarrollo de la malla trabecular y del ángulo iridocorneal en ausencia de anomalías sistémicas u oculares mayores. Ocurre en 1 de cada 10,000 nacidos vivos en países occidentales, con una prevalencia marcadamente superior en poblaciones con alta consanguinidad (hasta 1 en 1,200 en Arabia Saudita o comunidades gitanas eslovacas). El 80% de los casos se diagnostica durante el primer año de vida.',
    anatomyAndPathophysiology: '1. Embriología y Disgenesia Trabecular:\n   • En el desarrollo embriológico normal entre el quinto y octavo mes de gestación, las células de la cresta neural que forman el ángulo experimentan diferenciación, apoptosis y remodelación intercelular para formar los espacios trabeculares cribiformes y el canal de Schlemm.\n   • En el GCP se produce una diferenciación anómala o detención del desarrollo trabecular: la raíz del iris y el músculo ciliar se insertan de forma anormalmente anterior en la malla trabecular o directamente en la línea de Schwalbe, recubiertos por una lámina brillante condensada avascular denominada históricamente "Membrana de Barkan".\n2. Biomecánica Ocular Pediátrica (Hasta los 3 años de edad):\n   • Las fibras de colágeno de la córnea y la esclera del lactante son inmaduras, elásticas y altamente deformables bajo presión.\n   • La elevación sostenida de la PIO provoca una distensión y elongación global de todo el globo ocular (BUFTALMOS u "ojo de buey").\n   • Megalocórnea: El diámetro corneal horizontal normal al nacer es de 10.0 a 10.5 mm y alcanza 11.5 a 12.0 mm al año de edad. Un diámetro corneal horizontal >11.0 mm en un recién nacido o >12.0 mm en un lactante menor de 1 año es patológico y fuertemente sospechoso de glaucoma congénito.\n   • Estrías de Haab: Roturas curvilíneas de orientación horizontal o concéntricas al limbo en la membrana de Descemet provocadas por el estiramiento mecánico corneal rápido; condicionan edema corneal estromal agudo que cura con una cresta fibrótica endotelial residual.\n   • Miopía axial progresiva y astigmatismo corneal severo que conducen a ambliopía refractiva profunda.\n3. Genética Molecular:\n   • Herencia autosómica recesiva con penetrancia incompleta en la mayoría de los casos familiares.\n   • Gen CYP1B1 (Citocromo P450 familia 1 subfamilia B polipéptido 1, en locus GLC3A en 2p22): Responsable del 20-40% de los casos en poblaciones occidentales y >80-90% en comunidades consanguíneas. Involucrado en el metabolismo del ácido retinoico y desarrollo ocular fetal.\n   • Otros genes: LTBP2 (2p11) y TEK/ANGPT1 (receptor tirosina quinasa de angiopoyetina en desarrollo del canal de Schlemm).',
    clinicalExamination: {
      biomicroscopy: 'Tríada clásica: Epífora (lagrimeo continuo sin secreción purulenta), Fotofobia intensa (el niño entierra la cabeza en las almohadas o pecho materno) y Blefaroespasmo. Córnea edematosa azulada o lechosa ("en vidrio esmerilado"), aumento evidente del tamaño corneal, cámara anterior muy profunda por elongación escleral, pupila dilatada perezosa.',
      fundus: 'Excavación papilar grande y simétrica. A diferencia del adulto, la excavación glaucomatosa en lactantes es elástica y REVERSIBLE: si la PIO se normaliza rápidamente con cirugía, la copa papilar se reduce de tamaño ("cupping reversal") debido al retroceso elástico del canal escleral.',
      specialSigns: '• Estrías de Haab: Líneas dobles refringentes paralelas en la superficie posterior de la córnea.\n• Signo de reversibilidad de la excavación (Cupping reversal): Reducción documentada de la relación C/D tras la cirugía de ángulo exitosa en los primeros meses de vida.'
    },
    diagnosticWorkup: [
      {
        test: 'Examen Bajo Anestesia General (EUA - Examination Under Anesthesia)',
        findings: 'Protocolo estandarizado secuencial: 1) Tonometría inmediata con tonómetro de Perkins o Tono-Pen en los primeros 5 minutos tras inducción inhalatoria (el sevoflurano e isoflurano reducen la PIO artificialmente); 2) Medición con compás quirúrgico milimétrico del diámetro corneal horizontal blanco a blanco; 3) Paquimetría central; 4) Gonioscopia con lente de Koeppe o Barkan de 50 grados; 5) Fondo de ojo con oftalmoscopio indirecto.'
      },
      {
        test: 'Biometría Ocular Ultrasónica (Longitud Axial)',
        findings: 'Elongación axial acelerada en comparación con las curvas de crecimiento normales para la edad (longitud axial media al nacer: 17.5 mm; 1 año: 20.5 mm).'
      },
      {
        test: 'Estudio Genético Molecular',
        findings: 'Secuenciación de panel de genes CYP1B1 y LTBP2 para asesoramiento genético familiar.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Obstrucción Congénita de la Vía Lagrimal (Dacrioestenosis)', distinction: 'Epífora con secreción mucosa/purulenta, sin fotofobia ni blefaroespasmo, con córnea de diámetro normal y transparente.' },
      { condition: 'Megalocórnea Ligada al X (Gen CHRDL1)', distinction: 'Córneas grandes (>12.5 mm) bilaterales no progresivas, rigurosamente transparentes, con PIO normal, sin estrías de Haab ni excavación papilar.' },
      { condition: 'Distrofia Endotelial Hereditaria Congénita (CHED)', distinction: 'Edema corneal congénito bilateral profundo simétrico con PIO normal y diámetro corneal conservado.' },
      { condition: 'Trauma Obstétrico por Fórceps', distinction: 'Roturas de la membrana de Descemet unilaterales verticales u oblicuas (a diferencia de las estrías de Haab que son curvilíneas y horizontales).' }
    ],
    steppedManagement: {
      medical: '• El tratamiento del glaucoma congénito primario es EMINENTEMENTE QUIRÚRGICO. El manejo farmacológico es solo temporal como puente preoperatorio para aclarar la córnea y facilitar la visualización:\n  - Inhibidores de anhidrasa carbónica tópicos (Dorzolamida 2% c/8-12h) o sistémicos (Acetazolamida 10-15 mg/kg/día VO fraccionada).\n  - Betabloqueantes tópicos a baja concentración (Timolol 0.25% o Betaxolol con oclusión del punto lagrimal).\n  - ¡CONTRAINDICACIÓN ABSOLUTA!: La Brimonidina está FORMALMENTE CONTRAINDICADA en niños menores de 2 años por su capacidad de cruzar la barrera hematoencefálica inmadura provocando depresión del SNC, letargia, bradicardia severa, hipotensión, hipotermia y parada respiratoria/apnea.',
      surgical: '• Procedimientos Quirúrgicos de Primera Línea:\n  1) Goniotomía ab interno de Barkan:\n     - Indicación: Cuando la córnea está suficientemente transparente para permitir la visualización gonioscópica de las estructuras del ángulo con lente de Barkan o Swan-Jacob.\n     - Técnica: Incisión a través de la córnea clara periférica, avance con cuchillete de goniotomía a través de la cámara anterior bajo viscoelástico, e incisión horizontal de 120 a 180 grados en la malla trabecular justo por detrás de la línea de Schwalbe, permitiendo que el iris caiga posteriormente y se exponga el canal de Schlemm.\n  2) Trabeculotomía ab externo (o circunferencial de 360 grados con microcatéter iluminado / sutura de prolene 6-0):\n     - Indicación: Cuando la córnea está opaca o edematosa, imposibilitando la visualización directa del ángulo para goniotomía.\n     - Técnica: Disección de flap conjuntival y escleral, localización y apertura de la pared externa del canal de Schlemm (visibilizando reflujo de acuoso o sangre), canulación de la luz del canal con el trabeculótomo de Harm y rotación hacia la cámara anterior para romper la malla trabecular interna hacia la cámara anterior.\n  3) Procedimientos de Rescate en Fallos Previos: Trabeculectomía combinada con trabeculotomía, implante de tubo valvulado de Ahmed pediátrico o ciclofotocoagulación con diodo.'
    },
    clinicalApplicationPractical: '1. Lactante con lagrimeo y fotofobia: NUNCA asumir que es una simple conjuntivitis u obstrucción del conducto lagrimal si la córnea se ve mínimamente grande o nebulosa; medir el diámetro corneal blanco a blanco inmediatamente con regla milimétrica.\n2. ¡PROHIBICIÓN ESTRICTA DE BRIMONIDINA!: En menores de 2 años, la brimonidina puede provocar coma y depresión respiratoria por toxicidad simpaticomimética central. Pregunta clásica y recurrente de comités y exámenes de grado.\n3. Manejo posquirúrgico visual: Tras normalizar la PIO, la rehabilitación visual es mandataria con corrección refractiva temprana del astigmatismo/miopía inducida y terapia oclusiva con parche para prevenir la ambliopía estrábica o anisometrópica.',
    highYieldPearl: 'Glaucoma Congénito Board Pearl: El tratamiento es estrictamente QUIRÚRGICO (Goniotomía si córnea clara, Trabeculotomía si córnea opaca). La Brimonidina está ABSOLUTAMENTE CONTRAINDICADA en <2 años por riesgo de apnea letal. La excavación en lactantes es elásticamente reversible (cupping reversal).',
    keyDrugs: [
      { name: 'Dorzolamida 2%', dose: '1 gota cada 8 a 12 horas', warning: 'Hipotensor de puente preoperatorio seguro en pediatría.' },
      { name: 'Timolol 0.25%', dose: '1 gota cada 12 horas con oclusión lagrimal', warning: 'Usar a mitad de dosis que adultos y vigilar frecuencia cardíaca y reactividad bronquial.' },
      { name: 'Acetazolamida oral', dose: '10 a 15 mg/kg/día dividida en 3 tomas', warning: 'Vigilar acidosis metabólica, hipocalemia y pobre ganancia ponderal.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Estrías de Haab vs Roturas por Fórceps',
        category: 'Asociación Patognomónica',
        description: 'Las Estrías de Haab en glaucoma congénito son bilaterales (o unilaterales), horizontales o concéntricas al limbo y curvilíneas. Las roturas de Descemet por traumatismo obstétrico con fórceps son casi siempre unilaterales (ojo izquierdo más afectado por posición del feto), verticales u oblicuas, y el diámetro corneal es normal con PIO normal.',
        trapToAvoid: 'Confundir una rotura vertical traumática por fórceps con estrías de Haab de glaucoma congénito.'
      }
    ]
  },

  // =========================================================================
  // 7. EVALUACIÓN ESTRUCTURAL DEL NERVIO ÓPTICO
  // =========================================================================
  {
    id: 'deep-glaucoma-evaluacion-estructural-nervio-optico',
    title: 'Evaluación Estructural del Nervio Óptico: Regla ISNT, Relación Copa/Disco, Hemorragias de Drance, Defectos de CFNR y Análisis Multimodal con OCT',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía exhaustiva sobre el examen clínico y biométrico del nervio óptico: correlación anatomopatológica del anillo neurorretiniano, regla ISNT y sus variantes fenotípicas (ISNT invertida y variantes en papilas miópicas oblicuas), relación copa/disco (C/D) vertical y asimetría interocular significativa (>0.2), muescas o notching focales, hemorragias de disco en astilla (hemorragia de Drance) como biomarcador de progresión activa, atrofia peripapilar alfa, beta y gamma, visualización en luz aneritra de defectos en cuña de la capa de fibras nerviosas de la retina (CFNR) de Hoyt, y análisis cuantitativo multimodal con OCT de Dominio Espectral (SD-OCT peripapilar y Complejo de Células Ganglionares Macular GCC).',
    definitionAndEpidemiology: 'La evaluación estructural del nervio óptico y la retina peripapilar es el pilar central del diagnóstico y monitoreo del glaucoma. El daño estructural precede a la aparición de defectos funcionales en la perimetría estándar hasta en 4 a 8 años (glaucoma preperimétrico), periodo durante el cual se pierde entre el 30% y 50% de las células ganglionares antes de que se altere el umbral de luminancia diferencial en el campo visual.',
    anatomyAndPathophysiology: '1. Anatomía Normal del Disco Óptico:\n   • Diámetro medio vertical: 1.8 a 1.9 mm; diámetro horizontal: 1.6 a 1.7 mm. Área promedio: 2.1 a 2.8 mm2.\n   • Microdiscos (<1.5 mm2 de área): Papilas pequeñas con aparente ausencia de copa fisiológica ("crowded disc" o disco en riesgo).\n   • Megalodiscos (>3.0 mm2 de área): Papilas grandes fisiológicas con excavaciones de aspecto alarmante (C/D de 0.7 a 0.8) pero con reborde neurorretiniano amplio y homogéneo.\n   • La Regla ISNT (Jonas et al.): En papilas normales con canal escleral circular, el grosor del reborde neurorretiniano sigue un orden decreciente estricto:\n     Inferior (I) >= Superior (S) >= Nasal (N) >= Temporal (T).\n     La violación de esta regla (reborde inferior más delgado que el superior o nasal) posee una especificidad >85-90% para neuropatía óptica glaucomatosa.\n2. Biomarcadores Clínicos de Daño Glaucomatoso:\n   • Asimetría de Excavación Vertical >0.2 entre ambos ojos en ausencia de diferencias significativas en el tamaño del disco óptico (presente en <1% de la población sana normal).\n   • Muesca Focal ("Notching"): Pérdida focalizada en sacabocados del reborde neurorretiniano, típicamente a las 6 en punto (polo inferior) o a las 12 en punto (polo superior).\n   • Hemorragia de Disco en Astilla (Hemorragia de Drance): Microhemorragia lineal que se origina en los capilares del reborde neurorretiniano o cruza el margen del disco hacia la retina peripapilar, con predilección por los cuadrantes temporales inferior y superior. Traduce microinfartos focales por cizallamiento en la lámina cribosa y predice progresión funcional inminente en el mismo cuadrante en los siguientes 12-18 meses.\n   • Defectos en Cuña de Hoyt en CFNR: Franjas oscuras desnudas desprovistas del estriado blanco-plateado normal de los axones retinianos visualizables con filtro verde (luz aneritra).\n   • Atrofia Peripapilar (Zonas Alfa, Beta y Gamma):\n     - Zona Alfa (externa): Hiper e hipopigmentación irregular del EPR; presente en ojos normales y glaucomatosos.\n     - Zona Beta (intermedia): Atrofia completa del EPR y coriocapilar con visibilidad directa de los vasos coroideos gruesos y esclera; se expande progresivamente con el daño glaucomatoso.\n     - Zona Gamma (interna): Esclera desnuda debida a la retracción o ausencia de la membrana de Bruch entre el borde del canal escleral y el EPR; típica de la elongación escleral en ojos miópicos.',
    clinicalExamination: {
      biomicroscopy: 'Biomicroscopía del polo posterior con lámpara de hendidura utilizando lentes de no contacto de alta magnificación (Volk 60D, 66D, 78D o SuperField). Medición del diámetro vertical del disco óptico ajustando la longitud del haz luminoso fino y multiplicando por el factor de corrección de la lente (60D = factor 1.0x; 78D = factor 1.1x; 90D = factor 1.3x).',
      fundus: 'Inspección sistemática de los 4 cuadrantes del reborde, buscando hemorragias de Drance en el margen del disco, denudación de vasos circumlineares y rechazo nasal de la arteria y vena central de la retina.',
      specialSigns: '• Baring de vasos circumlineares: Espacio desnudo entre el vaso retiniano circumlinear y el reborde neurorretiniano por retroceso del tejido axonal.\n• Fenómeno de bayoneta (Bayoneting): Doble angulación o deflexión en ángulo agudo de los vasos sanguíneos al cruzar el borde socavado de la excavación hacia el fondo de la copa.\n• Vasos en puente (Collateral vessels / Shunt optociliar): Raramente en glaucoma crónico severo por oclusión venosa crónica compensada.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT Spectral-Domain de CFNR peripapilar (Círculo de 3.4 mm centrado en disco)',
        findings: 'Gráfica TSNIT (Temporal-Superior-Nasal-Inferior-Temporal): Identificación de jorobas de doble pico fisiológicas (picos en cuadrantes superior e inferior). En glaucoma se aprecian depresiones patológicas en los sectores temporal-inferior y temporal-superior por debajo del percentil del 5% (zona amarilla) o percentil del 1% (zona roja).'
      },
      {
        test: 'Análisis Macular del Complejo de Células Ganglionares (GCC / GCL-IPL)',
        findings: 'El 50% de las células ganglionares de la retina residen en los 16 grados centrales de la mácula. El análisis macular de grosor del complejo GCL-IPL detecta daño precoz antes de que se altere la CFNR peripapilar en glaucomas con compromiso paracentral.'
      },
      {
        test: 'Retinografía Estereoscópica de Papila centrada con filtro verde',
        findings: 'Registro fotográfico objetivo indispensable para documentar progresión temporal y detectar hemorragias de disco sutiles.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Fosas Colobomatosas o Coloboma de Papila', distinction: 'Depresión grisácea bien delimitada congénita típicamente inferotemporal que puede asociar desprendimiento seroso macular pero sin progresión campimétrica típica.' },
      { condition: 'Drusas del Disco Óptico (Buried Drusen)', distinction: 'Papila de bordes sobreelevados festoneados sin excavación central con hiperautofluorescencia intrínseca y calcificaciones de alta reflectividad con sombra acústica en ecografía modo B o EDI-OCT.' },
      { condition: 'Neuropatía Óptica Isquémica Anterior No Arterítica antigua', distinction: 'Palidez sectorial del anillo que excede con creces a la copa excavada y defecto campimétrico altitudinal brusco no evolutivo.' }
    ],
    steppedManagement: {
      medical: '• El hallazgo de adelgazamiento progresivo del reborde o de la CFNR en el análisis de progresión guiada (GPA) del OCT obliga a REDUCIR LA PIO DIANA en al menos un 20-30% adicional respecto al nivel previo, incluso si los campos visuales se mantienen temporalmente estables (daño preperimétrico activo).\n• Si se detecta una hemorragia de Drance activa: Modificar o intensificar el tratamiento médico/láser de inmediato y acortar los intervalos de control a cada 3-4 meses.',
      surgical: '• Progresión estructural rápida confirmada (pérdida de CFNR >4-5 µm/año en OCT de dominio espectral): Considerar intervención quirúrgica filtrante sin esperar a que la pérdida funcional sea irreversible en la campimetría.'
    },
    clinicalApplicationPractical: '1. Medir siempre el tamaño del disco con la lente de hendidura: Un disco con C/D de 0.7 en una papila grande (megalodisco de 2.5 mm) puede ser perfectamente normal; ese mismo C/D de 0.7 en una papila pequeña (microdisco de 1.3 mm) traduce un daño glaucomatoso devastador.\n2. El suelo estructural del OCT ("Floor effect"): Cuando la CFNR peripapilar se adelgaza a cifras de 45-50 µm, el OCT alcanza su límite de detección física (las 50 µm residuales corresponden a tejido glial cicatrizal y vasos, no a axones viables). En glaucomas avanzados, el monitoreo estructural con OCT deja de ser útil y el seguimiento debe basarse estrictamente en campos visuales 10-2.\n3. No confundir papilas oblicuas miópicas con glaucoma: En miopes altos con discos inclinados con atrofia peripapilar gamma extensa, la regla ISNT fisiológicamente no aplica y el OCT peripapilar genera abundantes "falsos positivos" (síndrome de la base de datos roja); en estos ojos el mapa macular de células ganglionares es mucho más fiable que la CFNR peripapilar.',
    highYieldPearl: 'Estructura Board Pearl: La regla ISNT es la guía clínica de oro. En ojos miópicos el OCT peripapilar sufre artefactos por papila oblicua, siendo más fiable el mapa de células ganglionares maculares (GCC). Cuando la CFNR llega a 50 µm (efecto suelo), el seguimiento debe ser por campimetría 10-2.',
    keyDrugs: [
      { name: 'Latanoprostene bunod 0.024%', dose: '1 gota nocturna', warning: 'Doble mecanismo: análogo de prostaglandina (vía uveoescleral) + donador de óxido nítrico (NO) que relaja la malla trabecular.' },
      { name: 'Netarsudil 0.02%', dose: '1 gota cada noche', warning: 'Inhibidor de Rho-quinasa; reduce resistencia de la malla trabecular; produce hiperemia conjuntival y córnea verticillata.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Hemorragia de Drance y Progresión Activa',
        category: 'Asociación Patognomónica',
        description: 'La hemorragia de Drance (en astilla en el borde del disco) es el biomarcador clínico más específico de progresión activa. Su presencia predice la aparición de una muesca en el reborde y un defecto campimétrico en el mismo meridiano en 12 a 18 meses. Aparece y se reabsorbe espontáneamente en 6 a 12 semanas, por lo que debe buscarse activamente en cada visita.',
        trapToAvoid: 'Desestimar una hemorragia de disco como "un vaso roto benigno sin importancia" o asumir que requiere aspirina.'
      }
    ]
  },

  // =========================================================================
  // 8. EVALUACIÓN FUNCIONAL (CAMPIMETRÍA Y CAMPO VISUAL)
  // =========================================================================
  {
    id: 'deep-glaucoma-evaluacion-funcional-campimetria',
    title: 'Evaluación Funcional (Campimetría y Campo Visual): Perimetría Computarizada Humphrey (SITA-Standard 24-2/10-2), Escotomas Típicos e Índices de Progresión (GPA/VFI)',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía fundamental sobre la evaluación funcional psicofísica del daño glaucomatoso: perimetría estática automatizada (SAP) de Humphrey, algoritmos de umbralización SITA-Standard, SITA-Fast y SITA-Faster, análisis de cuadrículas de prueba (24-2, 24-2C, 30-2 y 10-2), criterios de confiabilidad del examen (pérdidas de fijación, falsos positivos y falsos negativos), interpretación metódica del informe impreso (desviación total vs desviación modelo / patrón), índices globales (Desviación Media - MD, Desviación Estándar del Patrón - PSD e Índice de Campo Visual - VFI), patrones topográficos patognomónicos de pérdida campimétrica (escalón nasal de Rønne respetando el rafe horizontal, escotoma paracentral precoz, escotoma arciforme de Bjerrum y túnel residual temporal) y análisis de progresión guiada basada en eventos (GPA) y basada en tendencias (Trend analysis / pendiente de dB/año).',
    definitionAndEpidemiology: 'La campimetría computarizada o perimetría estática automatizada (SAP) es el estándar de oro para medir la sensibilidad visual diferencial en la retina central y periférica. Permite clasificar la gravedad funcional del glaucoma, monitorizar la tasa de progresión a lo largo del tiempo y evaluar la respuesta a los tratamientos hipotensores. El daño funcional típico refleja la disposición anatómica arqueada de los haces axonales de la capa de fibras nerviosas de la retina respetando el rafe temporal horizontal.',
    anatomyAndPathophysiology: '1. Correlación Retinotópica del Campo Visual:\n   • Los axones de las células ganglionares retinianas temporales a la fóvea describen una trayectoria arqueada por encima y por debajo de la mácula hacia los polos superior e inferior de la papila, encontrándose a lo largo del rafe horizontal temporal.\n   • Debido a la inversión óptica ocular (arriba se proyecta abajo, y temporal se proyecta nasal en el campo visual):\n     - Daño en el polo temporal-inferior papilar -> Escotoma arqueado en el campo visual TEMPORAL-SUPERIOR y NASAL-SUPERIOR.\n     - Daño en el polo temporal-superior papilar -> Escotoma arqueado en el campo visual NASAL-INFERIOR.\n   • Respeto estricto del meridiano horizontal (Rafe temporal): Los defectos glaucomatosos típicamente respetan el meridiano horizontal nasal, produciendo el característico "escalón nasal de Rønne". Los defectos que cruzan el meridiano vertical u horizontal sin respetar la anatomía de los haces axonales orientan a patología neurológica o vascular no glaucomatosa.\n2. Patrones Topográficos Típicos de Daño:\n   • Escalón Nasal de Rønne: Asimetría de sensibilidad entre los cuadrantes superior e inferior inmediatamente adyacentes al meridiano horizontal nasal (presente en >50% de los glaucomas precoces).\n   • Escotoma Paracentral: Depresión focal de la sensibilidad a 5-15 grados de la fóvea (frecuente en glaucoma de presión normal).\n   • Escotoma de Seidel: Escotoma paracentral en hoz que se extiende desde la mancha ciega rodeando la fijación central.\n   • Escotoma Arqueado o de Bjerrum: Defecto continuo de 360 grados de curvatura que conecta la mancha ciega con el rafe horizontal nasal atravesando todo el meridiano.\n   • Defecto Altitudinal: Pérdida total de un hemicampo visual completo (más frecuente el inferior).\n   • Remanente Tubular e Isla Temporal: En glaucomas terminales avanzados, persiste una pequeña isla central foveolar de 5 grados y una semiluna periférica temporal en el hemicampo temporal (fibras nasales papilares más resistentes).',
    clinicalExamination: {
      biomicroscopy: 'Normal; descartar opacidades de medios (catarata nuclear densa o catarata subcapsular posterior que reducen la sensibilidad media de forma homogénea disminuyendo la Desviación Media sin alterar la PSD).',
      fundus: 'Correlación estricta entre la posición de la muesca en el reborde neurorretiniano y la localización del escotoma campimétrico contralateral.',
      specialSigns: '• Escalón Nasal de Rønne: Diferencia de sensibilidad de al menos 5-10 dB entre ambos lados del meridiano horizontal nasal en al menos 2 puntos adyacentes.'
    },
    diagnosticWorkup: [
      {
        test: 'Campimetría Computarizada Humphrey 24-2 / 24-2C SITA-Standard / SITA-Faster',
        findings: 'Protocolo de lectura del reporte Humphrey:\n1) Parámetros de Confiabilidad:\n   - Falsos Positivos (FP): El parámetro individual más crítico. Mide si el paciente es "gatillo fácil". Si FP >15%, el examen es NO CONFIABLE y muestra falsos campos "super-normales" o "números blancos".\n   - Pérdidas de Fijación (FL): Medidas con técnica de Heijl-Krakau (estímulo en la mancha ciega). Si FL >20%, valorar con monitor de mirada (Gaze tracking).\n   - Falsos Negativos (FN): En ojos normales indica falta de atención; en ojos con glaucoma avanzado, un FN elevado (>20-30%) refleja fatiga retiniana biológica en áreas con escotomas profundos y no invalida automáticamente el examen.\n2) Gráfico de Desviación Modelo (Pattern Deviation): Elimina el efecto de opacidades de medios difusas (catarata, miosis) y muestra los defectos focales verdaderos debidos a neuropatía glaucomatosa.\n3) Glaucoma Hemifield Test (GHT): Compara 5 zonas emparejadas en el hemicampo superior e inferior. Resultado patológico: "Outside Normal Limits" (Fuera de límites normales).'
      },
      {
        test: 'Campimetría Humphrey 10-2 SITA-Standard',
        findings: 'Cuadrícula con 68 puntos espaciados cada 2 grados en los 10 grados centrales. MANDATORIA en: 1) Todo paciente con defecto campimétrico en 24-2 a menos de 5º de la fijación; 2) Glaucoma avanzado (MD < -12 dB); 3) Pacientes con pérdida documentada en el mapa macular de células ganglionares (GCC) en OCT con 24-2 aparentemente normal.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Neuropatía Óptica Isquémica Anterior No Arterítica (NOIA-NA)', distinction: 'Defecto altitudinal absoluto brusco con escalón horizontal neto y palidez papilar asociada sin evolución progresiva.' },
      { condition: 'Neuropatía Óptica Compresiva del Quiasma Óptico', distinction: 'Hemianopsia bitemporal que respeta estrictamente el meridiano VERTICAL medio, no el horizontal.' },
      { condition: 'Retinosis Pigmentaria', distinction: 'Pérdida en anillo periférica bilateral simétrica con atenuación vascular retiniana marcada y espículas óseas periféricas en fondo de ojo.' }
    ],
    steppedManagement: {
      medical: '• Criterios de Progresión Guiada (GPA):\n  - Análisis basado en eventos: "Posible progresión" si 3 puntos muestran deterioro estadísticamente significativo en 2 campos consecutivos; "Progresión probable" si se confirma en 3 campos consecutivos.\n  - Análisis basado en tendencias: Pendiente de caída del VFI (% de pérdida por año) o de la Desviación Media (dB/año). Una tasa de pérdida >-1.0 a -1.5 dB/año se considera "progresor rápido" y exige intensificación agresiva de la terapia hipotensora.\n• Si la progresión es confirmada en campos visuales reproducibles: Reducir la PIO meta entre un 20% y 30% adicional o programar intervención quirúrgica.',
      surgical: '• Indicada precozmente ante progresión funcional rápida a pesar de colirios hipotensores máximos tolerados.'
    },
    clinicalApplicationPractical: '1. Regla de los Tres Campos en el Diagnóstico: NUNCA cambiar un tratamiento ni diagnosticar progresión basados en un solo campo visual aislado; el 80% de los cambios aislados en un examen no se reproducen en la siguiente prueba. Exigir confirmación en al menos 2 o 3 pruebas consecutivas.\n2. El papel vital del campo 10-2: El patrón 24-2 tiene 6 grados de separación entre puntos; la fóvea puede tener un escotoma amenazante que pase totalmente desapercibido entre los puntos del 24-2. Si el OCT macular muestra daño o el 24-2 roza la fijación, solicitar de inmediato campo visual 10-2.\n3. Ojo con los Falsos Positivos: Si el reporte Humphrey tiene falsos positivos >15%, desconfiar absolutamente de la prueba; el paciente está apretando el botón sin ver el estímulo y generará falsos patrones normales.',
    highYieldPearl: 'Campimetría Board Pearl: Los Falsos Positivos (>15%) son el error más grave de confiabilidad. El campo 24-2 respeta el rafe horizontal nasal (Escalón nasal de Rønne). Si el daño está a <5º del centro, solicitar de inmediato campo 10-2 para evaluar la visión central amenazada.',
    keyDrugs: [
      { name: 'Travoprost 0.004%', dose: '1 gota nocturna', warning: 'Alta estabilidad tensional circadiana con control de picos matutinos.' },
      { name: 'Bimatoprost 0.01% - 0.03%', dose: '1 gota nocturna', warning: 'Potente eficacia hipotensora; alta incidencia de hiperemia conjuntival.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Clasificación de Severidad del Daño Funcional (Hodapp-Parrish-Anderson)',
        category: 'Cifra Clave de Corte',
        description: 'Basada en el índice de Desviación Media (MD) del campo visual Humphrey:\n• Glaucoma Leve: MD > -6.00 dB.\n• Glaucoma Moderado: MD entre -6.01 y -12.00 dB.\n• Glaucoma Severo / Avanzado: MD peor a -12.00 dB o cualquier defecto a <5º de la fijación central foveal en el mapa de desviación modelo.',
        trapToAvoid: 'Clasificar como "leve" a un paciente con MD de -3.00 dB si tiene un punto ciego foveal a 2 grados del centro; cualquier punto amenazante a <5 grados califica automáticamente como glaucoma severo.'
      }
    ]
  },

  // =========================================================================
  // 9. TRATAMIENTO MÉDICO Y FARMACOLOGÍA OCULAR
  // =========================================================================
  {
    id: 'deep-glaucoma-tratamiento-medico-farmacologia',
    title: 'Tratamiento Médico y Farmacología Ocular: Análogos de Prostaglandinas, Betabloqueantes, Alfa-2 Agonistas, Inhibidores de Anhidrasa Carbónica e Inhibidores de Rho-Quinasa',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía farmacológica exhaustiva sobre todas las familias de colirios hipotensores oculares, mecanismos moleculares de acción a nivel celular trabecular y ciliar, potencia de reducción tensional porcentual (% de descenso de la PIO), perfil de seguridad sistémica, efectos adversos locales y sistémicos, contraindicaciones absolutas y relativas de examen, combinaciones fijas libres de conservantes (preservative-free) y estrategias de mejora de la adherencia terapéutica en el paciente con tratamiento crónico.',
    definitionAndEpidemiology: 'El tratamiento farmacológico tópico con colirios hipotensores representa la modalidad terapéutica más ampliamente utilizada como manejo de inicio y mantenimiento en el glaucoma a nivel mundial. El objetivo biológico primordial es reducir la PIO a un nivel diana personalizado que impida la progresión del daño axonal, minimizando los efectos adversos locales sobre la superficie ocular y los riesgos sistémicos potencialmente mortales en pacientes polimedicados.',
    anatomyAndPathophysiology: '1. Familias Farmacológicas y Mecanismos de Acción:\n   • Análogos de Prostaglandinas F2-alfa (Latanoprost 0.005%, Bimatoprost 0.01-0.03%, Travoprost 0.004%, Tafluprost 0.0015%):\n     - Mecanismo: Agonistas del receptor prostanoide FP en el músculo ciliar. Inducen la activación de metaloproteinasas de matriz (MMP-1, MMP-2, MMP-3) que degradan y remodelan el colágeno intersticial entre los haces del músculo ciliar y la esclera, ampliando los espacios intercelulares y aumentando el drenaje no convencional uveoescleral en un 30-40%.\n     - Eficacia: Mayor potencia tensional en monoterapia (reducción del 25-35% de la PIO basal con posología cómoda de 1 gota nocturna).\n     - Efectos adversos: Hiperemia conjuntival, hiperpigmentación iridiana irreversible (estimulación de la melanogénesis en melanocitos estromales del iris), alargamiento/engrosamiento y oscurecimiento de pestañas (hipertricosis), atrofia de grasa periorbitaria (profundización del surco palpebral superior y enoftalmos por PAPS: Prostaglandin-Associated Periorbital Syndrome), reactivación de queratitis por virus herpes simple y empeoramiento de edema macular cistoide (EMC).\n   • Betabloqueantes Adrenérgicos (Timolol 0.25-0.5%, Betaxolol selectivo beta-1 0.25-0.5%, Levobunolol 0.5%):\n     - Mecanismo: Bloqueo de receptores beta-2 adrenérgicos en el epitelio ciliar no pigmentado, disminuyendo la actividad de la adenilato ciclasa y los niveles intracelulares de AMPc, lo que reduce la secreción activa de humor acuoso en un 20-25%.\n     - Eficacia: Tienen poca eficacia nocturna (durante el sueño el tono simpático decae fisiológicamente y la secreción acuosa disminuye de forma natural; añadir un betabloqueante de noche aporta escaso beneficio tensional y aumenta el riesgo de bradicardia nocturna).\n     - Contraindicaciones Absolutas: Asma bronquial, enfermedad pulmonar obstructiva crónica (EPOC) severa, bradicardia sinusal (<50 lpm), bloqueo auriculoventricular de 2º y 3º grado e insuficiencia cardíaca descompensada.\n   • Alfa-2 Agonistas Adrenérgicos (Brimonidina 0.1-0.2%, Apraclonidina 0.5-1%):\n     - Mecanismo: Mecanismo dual: 1) Agonismo en receptores alfa-2 presinápticos ciliares que reduce la síntesis de humor acuoso; 2) Estimulación de la liberación de prostaglandinas endógenas que incrementa el drenaje uveoescleral.\n     - Potencial neuroprotector: Demostrado en modelos animales.\n     - Efectos adversos: Alta tasa de blefaroconjuntivitis alérgica folicular (15-20% de pacientes tras meses de uso), somnolencia, fatiga central, sequedad bucal e hipotensión sistémica.\n     - ¡CONTRAINDICACIÓN VITAL!: Prohibido formalmente en neonatos y niños menores de 2 años por riesgo de depresión respiratoria central, letargia y coma por paso a través de la barrera hematoencefálica inmadura.\n   • Inhibidores de la Anhidrasa Carbónica (Tópicos: Dorzolamida 2%, Brinzolamida 1%; Sistémicos: Acetazolamida VO/IV, Metazolamida):\n     - Mecanismo: Inhibición reversible de la isoenzima Anhidrasa Carbónica tipo II en el epitelio ciliar no pigmentado. Bloquea la formación de iones bicarbonato (HCO3-), disminuyendo el gradiente osmótico necesario para la secreción activa de agua hacia la cámara posterior.\n     - Eficacia tópica: Reducción del 15-20% de la PIO.\n     - Efectos adversos sistémicos de la Acetazolamida oral/IV: Parestesias distales en dedos y peribucales (muy frecuentes), acidosis metabólica hiperclorémica con brecha aniónica normal, hipocalemia, anorexia, fatiga, litiasis renal de fosfato de calcio y discrasias sanguíneas raras pero letales (anemia aplásica idiosincrática).\n     - Precaución: Alergia grave documentada a sulfamidas.\n   • Inhibidores de la Rho-Kinasa / ROCK Inhibitors (Netarsudil 0.02%, Ripasudil 0.4%):\n     - Mecanismo innovador: Inhibición de la quinasa asociada a Rho (ROCK-1 y ROCK-2). Despolimeriza los filamentos de actina y disminuye la contracción de la actomiosina en las células endoteliales de la malla trabecular, relajando los espacios trabeculares cribiformes y aumentando directamente el drenaje convencional a través del canal de Schlemm. Además, reduce la presión venosa epiescleral.\n     - Efectos adversos: Hiperemia conjuntival marcada (vasodilatación epiescleral en >50%), hemorragias subconjuntivales petequiales y córnea verticillata reversible (microdepósitos lipídicos epiteliales en remolino).\n   • Agentes Parasimpaticomiméticos / Mióticos (Pilocarpina 1-4%):\n     - Mecanismo: Agonista muscarínico M3 que contrae el músculo ciliar longitudinal; tracciona el espolón escleral hacia atrás, separando las trabéculas cribiformes y reduciendo la resistencia trabecular.\n     - Efectos adversos: Miosis extrema, espasmo acomodativo doloroso con miopía inducida, cefalea supraorbitaria y aumento del riesgo de desgarro retiniano y desprendimiento de retina por tracción vítrea.',
    clinicalExamination: {
      biomicroscopy: 'Evaluación de la superficie ocular en cada control: queratitis punteada superficial por toxicidad al conservante Cloruro de Benzalconio (BAK), folículos en conjuntiva tarsal inferior (alergia a brimonidina), grado de hiperemia conjuntival y córnea verticillata (Netarsudil).',
      fundus: 'Descartar edema macular cistoide antes y durante el uso de análogos de prostaglandinas en pacientes operados de catarata reciente o con antecedentes de uveítis.',
      specialSigns: '• Córnea verticillata: Depósito epitelial amarillento en remolino inducido por Netarsudil (similar a la amiodarona).\n• PAPS (Prostaglandin-Associated Periorbital Syndrome): Pérdida de grasa orbitaria con enoftalmos relativo y profundización del surco superior.'
    },
    diagnosticWorkup: [
      {
        test: 'Tonometría seriada post-instilación',
        findings: 'Confirmación del efecto hipotensor y comprobación de adherencia.'
      },
      {
        test: 'TFBUT y Escala de Tinción Oxford con Verde de Lisamina',
        findings: 'Detección de enfermedad de la superficie ocular inducida por conservantes (BAK).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Alergia a Brimonidina vs Conjuntivitis Viral', distinction: 'La alergia a brimonidina se manifiesta como hiperemia crónica con folículos gigantes tarsales inferiores y prurito que remite entre 2 y 4 semanas tras retirar el fármaco sin afectar a familiares.' },
      { condition: 'Queratopatía Tóxica por BAK vs Ojo Seco Primario', distinction: 'Queratitis punteada difusa confluente en pacientes con múltiples colirios hipotensores que mejora drásticamente al cambiar a fórmulas monodosis libres de conservantes (preservative-free).' }
    ],
    steppedManagement: {
      medical: '• Algoritmo Escalonado Basado en Evidencia:\n  1) Primera línea: Monoterapia con Análogo de Prostaglandina (Latanoprost, Bimatoprost, Travoprost) administrado de noche, o SLT láser.\n  2) Si no alcanza la PIO meta pero hay buena respuesta: Añadir un segundo fármaco de distinta familia, preferentemente en Combinación Fija (ej. Timolol + Dorzolamida, Timolol + Brimonidina, o Latanoprost + Timolol) para mejorar la adherencia terapéutica y reducir la exposición a conservantes.\n  3) Si no hay respuesta a la primera línea: Cambiar de familia farmacológica (Switching) en lugar de añadir fármacos inútilmente.\n  4) Preferir siempre fórmulas Libres de Conservantes (Preservative-Free / PF) en pacientes con enfermedad de superficie ocular, ojo seco previo o necesidad de múltiples colirios.',
      surgical: '• Si el paciente requiere más de 2-3 colirios para controlar la PIO o presenta intolerancia severa/incumplimiento: Indicar tratamiento quirúrgico (MIGS, Trabeculectomía o SLT) en lugar de perpetuar la polifarmacia tópica.'
    },
    clinicalApplicationPractical: '1. Oclusión del Punto Lagrimal (Nasolacrimal Occlusion): Enseñar a todo paciente a presionar el canto interno contra la nariz durante 2 minutos con el ojo cerrado tras instilar la gota; esto reduce la absorción sistémica por la mucosa nasal en más del 60% y duplica la penetración intraocular del fármaco.\n2. Pacientes con Asma o EPOC: El Timolol, incluso a 1 gota, puede desencadenar un broncoespasmo severo letal por bloqueo beta-2 pulmonar. Preguntar siempre antecedentes respiratorios antes de recetar betabloqueantes tópicos; si hay duda, usar Betaxolol (selectivo beta-1) o cambiar de familia.\n3. Si un paciente tiene catarata no operada o es afáquico/pseudofáquico con rotura capsular previa: Evitar o vigilar estrechamente las prostaglandinas por el riesgo de inducir Edema Macular Cistoide (Síndrome de Irvine-Gass).',
    highYieldPearl: 'Farmacología Board Pearl: Timolol está prohibido en asma y bradicardia. Brimonidina está ABSOLUTAMENTE CONTRAINDICADA en <2 años por parada respiratoria. Las Prostaglandinas actúan sobre el drenaje uveoescleral vía MMPs y causan atrofia de grasa periorbitaria (PAPS).',
    keyDrugs: [
      { name: 'Latanoprost 0.005% libre de conservantes', dose: '1 gota nocturna', warning: 'Hipotensor de primera línea mejor tolerado en superficie ocular.' },
      { name: 'Timolol 0.5% / Dorzolamida 2% combinación fija', dose: '1 gota cada 12 horas', warning: 'Sinergia potente de supresión de producción acuosa en un solo frasco.' },
      { name: 'Netarsudil 0.02%', dose: '1 gota nocturna', warning: 'Inhibidor de Rho-quinasa; vasodilatación epiescleral y córnea verticillata.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Toxicidad Sistémica de la Acetazolamida Oral',
        category: 'Pregunta Clásica',
        description: 'La acetazolamida inhibe la anhidrasa carbónica renal, perdiendo bicarbonato por orina y reteniendo hidrogeniones y cloruro -> produce Acidosis Metabólica Hiperclorémica con Hiperventilación compensatoria (respiración de Kussmaul). Además excreta potasio (hipocalemia) y precipita fosfatos formando litiasis renal. Puede inducir anemia aplásica por mecanismo inmunoalérgico idiosincrásico no dependiente de dosis.',
        trapToAvoid: 'Olvidar medir electrolitos séricos (K+, Na+) y función renal en pacientes ancianos que toman acetazolamida por más de 72 horas.'
      }
    ]
  },

  // =========================================================================
  // 10. PROCEDIMIENTOS LÁSER EN GLAUCOMA
  // =========================================================================
  {
    id: 'deep-glaucoma-procedimientos-laser',
    title: 'Procedimientos Láser en Glaucoma: Trabeculoplastia Láser Selectiva (SLT - Ensayo LiGHT), Iridotomía Periférica YAG (LPI), Iridoplastia con Argón y Ciclofotocoagulación',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía quirúrgica exhaustiva sobre las terapias con láser en glaucoma: 1) Trabeculoplastia Láser Selectiva (SLT, Nd:YAG Q-switched 532 nm) frente a Trabeculoplastia con Argón (ALT), análisis del ensayo landmark LiGHT (Lancet 2019/2023) como terapia de primera línea; 2) Iridotomía Periférica con Láser Nd:YAG (LPI) para bloqueo pupilar en criptas de iris periférico superior cubiertas por el párpado superior, técnica con lente de Abraham y manejo del hifema intraoperatorio; 3) Iridoplastia Periférica con Láser Argón (ALPI) para retracción estromal periférica en Síndrome de Iris en Meseta; y 4) Procedimientos Ciclodestructivos: Ciclofotocoagulación Transescleral con diodo en modo continuo y micropulsado, y Endociclofotocoagulación (ECP) combinada con facoemulsificación en glaucomas refractarios.',
    definitionAndEpidemiology: 'Los procedimientos con láser en glaucoma constituyen intervenciones no invasivas en lámpara de hendidura o quirófano diseñadas para restablecer el equilibrio hidrodinámico ocular sin necesidad de una incisión quirúrgica incisional a globo abierto. Su aplicación abarca desde el tratamiento de primera línea del ángulo abierto (SLT) hasta el tratamiento preventivo y curativo del cierre angular (LPI, ALPI) y el rescate de ojos ciegos dolorosos o glaucomas terminales refractarios (ciclofotocoagulación).',
    anatomyAndPathophysiology: '1. Trabeculoplastia Láser Selectiva (SLT):\n   • Tecnología: Láser Nd:YAG doblado en frecuencia (longitud de onda de 532 nm, duración de pulso ultracorta de 3 nanosegundos y tamaño de spot fijo de 400 µm).\n   • Principio de Fototermólisis Selectiva (Anderson y Parrish): La duración del pulso (3 ns) es menor que el tiempo de relajación térmica de la melanina intrínseca (aprox. 1 microsegundo). Por ello, el láser destruye de forma selectiva y subcelular las células endoteliales trabeculares que contienen gránulos de pigmento de melanina, sin transferir calor térmico colateral a las fibras de colágeno trabecular ni a la pared endotelial del canal de Schlemm (a diferencia de la antigua ALT que causaba necrosis por quemadura y cicatrización fibrótica destructiva).\n   • Mecanismo Biológico: Reclutamiento de monocitos y macrófagos tisulares que fagocitan detritos celulares acumulados en la malla cribiforme, secreción de citocinas quimiotácticas (TNF-alfa, IL-1beta) y estimulación de la división celular endotelial que rejuvenece la matriz extracelular trabecular.\n   • Parámetros habituales: 100 disparos contiguos en 360 grados de malla trabecular pigmentada con lente de Latina, con energía de 0.6 a 1.2 mJ ajustada hasta observar microburbujas de cavitación ("champagne bubbles").\n2. Iridotomía Periférica con Láser Nd:YAG (LPI):\n   • Indicación: Tratamiento y profilaxis del bloqueo pupilar relativo (PACS, PAC, PACG, APAC y ojo contralateral).\n   • Técnica con Lente de Abraham o Wise: Diseñada con una convexidad óptica de +66 dioptrías que magnifica el iris y concentra el haz láser.\n   • Localización ideal: Tercio periférico del iris entre las 11:00 y la 1:00 (cubierto por el párpado superior para evitar la disfotopsia lineal horizontal, aunque algunos autores recomiendan posiciones temporales a las 3:00 o 9:00 si el párpado no cubre totalmente el limbo superior).\n   • Parámetros: Energía de 2 a 5 mJ por pulso, en ráfagas de 1 a 3 disparos dirigidos a una cripta iridiana o adelgazamiento estromal periférico.\n   • Signo inequívoco de patencia: Emisión violenta y súbita de una columna de humor acuoso cargada de pigmento marrón hacia la cámara anterior ("pluma de pigmento") y aplanamiento inmediato del iris bombé periférico.\n3. Iridoplastia Periférica con Láser Argón (ALPI):\n   • Indicación: Síndrome de Iris en Meseta resistente a LPI, o cierre angular agudo facomórfico que no responde al tratamiento médico de choque y en el cual el edema corneal impide una LPI.\n   • Mecanismo: Disparos de láser térmico con spot ancho (200-500 µm), baja potencia (200-400 mW) y duración larga (0.2-0.5 segundos) en la extrema periferia del iris; produce contracción por quemadura del estroma iridiano que retrae mecánicamente la raíz del iris alejándola de la malla trabecular.\n4. Procedimientos Ciclodestructivos (Ciclofotocoagulación Transescleral):\n   • Láser diodo semiconductor (810 nm): Absorbido preferencialmente por la melanina del epitelio ciliar pigmentado de los procesos ciliares.\n   • Modo Continuo (Sonda G-Probe): Destrucción térmica coagulativa de los procesos ciliares y de su vascularización ciliar en 270 a 360 grados respetando los meridianos de las 3 y 9 horas (para no lesionar arterias y nervios ciliares largos anteriores y prevenir ptosis o isquemia anterior). Riesgo: hipotonía severa, ptisis bulbi y pérdida visual.\n   • Modo Micropulsado (MicroPulse CPC): Ráfagas de microdisparos con ciclo de trabajo del 31.3% que permiten enfriamiento tisular entre pulsos; produce reducción tensional con menor inflamación intraocular y mínimo riesgo de ptisis bulbi.',
    clinicalExamination: {
      biomicroscopy: 'En SLT: Ausencia de quemadura visible (solo microburbujas); a los 60 minutos se verifica que no exista pico hipertensivo reactivo transitorio. En LPI: Comprobación de patencia completa visualizando las estructuras posteriores a través del orificio con retroiluminación o visualizando la cápsula anterior del cristalino.',
      fundus: 'Normal post-procedimiento.',
      specialSigns: '• Microburbujas en champagne (Champagne bubbles): Burbujas transitorias en la malla trabecular que indican que se alcanzó el umbral de cavitación energética en SLT.\n• Pluma de pigmento: Salida de acuoso con pigmento por el orificio de la LPI.'
    },
    diagnosticWorkup: [
      {
        test: 'Gonioscopia Dinámica previa y posterior',
        findings: 'Imprescindible antes de SLT para verificar que la malla trabecular sea visible en al menos 180-360 grados y determinar el grado de pigmentación trabecular (a mayor pigmentación, se requiere menor energía del láser).'
      },
      {
        test: 'Tonometría a los 60 minutos post-láser',
        findings: 'Protocolo de seguridad: Descartar pico hipertensivo agudo reactivo inducido por detritos inflamatorios en cámara anterior.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Hifema post-LPI vs Sangrado Continuo por Neovascularización', distinction: 'El sangrado por ruptura de microvasos iridianos en LPI es leve, autolimitado y cede en segundos al presionar suavemente la córnea con la lente de contacto Abraham; la neovascularización iridiana produce sangrado continuo profuso.' }
    ],
    steppedManagement: {
      medical: '• Profilaxis Farmacológica Obligatoria Pre y Post-Láser:\n  - Instilar 1 gota de Brimonidina 0.15% o Apraclonidina 1% 30-60 minutos antes del procedimiento y otra gota inmediatamente después para prevenir el pico tensional post-láser.\n  - Post-SLT: AINEs tópicos (Ketorolaco o Bromfenaco) o colirio lubricante durante 3-5 días (se evita el uso prolongado de corticoides potentes porque pueden atenuar el reclutamiento macrofágico terapéutico).\n  - Post-LPI: Corticoides tópicos potentes (Prednisolona 1% cada 6 horas durante 5 a 7 días) para suprimir la inflamación de cámara anterior y evitar el cierre fibrinoso secundario de la iridotomía.',
      surgical: '• Repetición de SLT: A diferencia de la antigua ALT, la SLT NO causa daño estructural a la malla trabecular y por tanto ES REPETIBLE cuando su efecto decae a los 2-3 años.'
    },
    clinicalApplicationPractical: '1. Ensayo LiGHT (Lancet 2019 / 2023): El estudio LiGHT demostró categóricamente que la SLT de 360 grados como tratamiento de PRIMERA LÍNEA en GPAA e hipertensión ocular recién diagnosticados logra que el 74% de los ojos se mantengan libres de gotas a 3 años, con menor costo para el sistema de salud y menor necesidad de cirugía filtrante en comparación con los colirios.\n2. Tamaño de la Iridotomía LPI: Debe tener un diámetro mínimo de 150 a 200 µm para garantizar que no se cierre con fibrina o pigmento en las semanas siguientes.\n3. Si un paciente tiene hifema intraoperatorio durante la LPI: NO RETIRAR LA LENTE ABRAHAM; simplemente ejercer una presión axial firme sobre el globo con la misma lente durante 20-30 segundos; la elevación transitoria de la PIO cohibirá de inmediato el sangrado venoso del iris.',
    highYieldPearl: 'Procedimientos Láser Board Pearl: Ensayo LiGHT avala la SLT como primera línea (no destruye colágeno, es repetible). En LPI, instilar Brimonidina pre y post-láser para prevenir el pico de PIO. En ciclofotocoagulación transescleral, respetar siempre los meridianos de las 3 y 9 horas.',
    keyDrugs: [
      { name: 'Apraclonidina 1% / Brimonidina 0.2%', dose: '1 gota 30 min antes y 1 gota al terminar', warning: 'Profilaxis indispensable del pico de PIO post-láser.' },
      { name: 'Prednisolona acetato 1%', dose: '1 gota cada 6 horas por 7 días post-LPI', warning: 'Previene sinequias inflamatorias y oclusión de la iridotomía.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'SLT vs ALT (Diferencias Críticas de Examen)',
        category: 'Pregunta Clásica',
        description: '• SLT: Láser Nd:YAG 532 nm, pulso ultracorto de 3 ns, spot ancho de 400 µm que cubre toda la anchura trabecular, fototermólisis selectiva de células pigmentadas sin daño térmico al colágeno -> REPETIBLE.\n• ALT (Argón): Láser de onda continua, pulso largo de 0.1 s, spot diminuto de 50 µm que produce quemadura térmica coagulativa con cráter fibrótico cicatrizal destructivo -> NO REPETIBLE.',
        trapToAvoid: 'Creer que la SLT quema mecánicamente la malla trabecular; su mecanismo es biológico de remodelación celular.'
      }
    ]
  },

  // =========================================================================
  // 11. CIRUGÍA FILTRANTE CONVENCIONAL E IMPLANTES DE DRENAJE
  // =========================================================================
  {
    id: 'deep-glaucoma-cirugia-filtrante-implantes',
    title: 'Cirugía Filtrante Convencional e Implantes de Drenaje: Trabeculectomía con Mitomicina C, Esclerectomía Profunda No Perforante (EPNP) y Dispositivos de Tubo (Ahmed vs Baerveldt - Ensayo TVT)',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía quirúrgica de alta complejidad sobre la cirugía filtrante incisional y los dispositivos de drenaje para glaucoma: 1) Trabeculectomía protegida (Cairns, 1968) con técnica reglada paso a paso: colgajo conjuntival con base en limbo vs base en fórnix, tallado del tapete o flap escleral laminar, aplicación reglada de antimetabolitos moduladores de la cicatrización (Mitomicina C 0.2-0.4 mg/mL vs 5-Fluorouracilo), esclerostomía en bloque, iridectomía periférica quirúrgica y suturas esclerales con nylon 10-0 ajustables/liberables; 2) Manejo del posoperatorio precoz y tardío: digitalización ocular, lisis de suturas con láser de argón con lente de Hoskins, y tratamiento de complicaciones mayores (hipotonía severa, ampolla avascular quística con Seidel, blebitis y endoftalmitis asociada a ampolla); 3) Esclerectomía Profunda No Perforante (EPNP) con disección de la membrana trabeculodescemética; y 4) Dispositivos de Drenaje de Humor Acuoso (GDD) tipo tubo: análisis crítico del Tube Versus Trabeculectomy Study (TVT) y ABC Trial comparando la Válvula de Ahmed (dispositivo restrictivo sensible a presión de apertura) frente al Implante de Baerveldt (no valvulado, de gran área de superficie con ligadura transitoria con Vicryl 7-0).',
    definitionAndEpidemiology: 'La cirugía filtrante convencional y los implantes de derivación acuosa constituyen el estándar de oro quirúrgico para lograr reducciones tensionales profundas y duraderas cuando la terapia médica y el láser han fracasado, o en pacientes con glaucoma avanzado que se presentan con daño severo o PIO extrema al diagnóstico. Estas cirugías crean una vía de escape artificial para el humor acuoso desde la cámara anterior hacia el espacio subconjuntival o el espacio subtenoniano ecuatorial.',
    anatomyAndPathophysiology: '1. Trabeculectomía y la Cascada de Cicatrización Fibroblástica:\n   • El factor limitante primario del éxito a largo plazo de la trabeculectomía no es el flujo hidráulico, sino la proliferación fibroblástica subconjuntival y la fibrosis cicatrizal mediada por el Factor de Crecimiento Transformante Beta (TGF-beta) y PDGF.\n   • Modulación con Antimetabolitos:\n     - Mitomicina C (MMC): Antibiótico antineoplásico derivado de Streptomyces caespitosus que alquila el ADN transversalmente, inhibiendo de forma irreversible la síntesis de ADN, la mitosis y la proliferación de fibroblastos Tenonianos. Se aplica a dosis de 0.2 a 0.4 mg/mL durante 2 a 3 minutos en esponjas quirúrgicas en el bolsillo subtenoniano amplio (o mediante inyección subconjuntival preoperatoria de 0.02 mg), seguido de un lavado copioso con al menos 20-30 mL de solución salina balanceada (BSS).\n     - 5-Fluorouracilo (5-FU): Análogo de pirimidina que inhibe la timidilato sintasa; efecto menos potente y más reversible que la MMC; útil en inyecciones subconjuntivales posoperatorias (bleb needling).\n2. Técnica Quirúrgica de la Trabeculectomía Paso a Paso:\n   • Peritomía Conjuntival: Base en fórnix (mayor facilidad y visualización) o base en limbo (menor riesgo de fuga en el borde anterior).\n   • Tallado del Flap Escleral: Espesor de medio grosor escleral (50% de profundidad, aproximadamente 300 µm), de forma rectangular (3x3 mm) o triangular.\n   • Paracentesis Corneal Previa: Con bisturí de 15 grados en córnea clara temporal para control tensional y reformación de cámara anterior con BSS o viscoelástico.\n   • Esclerostomía / Bloque Trabeculocorneal: Resección de un bloque de 1x2 mm con sacabocados de Kelly o bisturí, extirpando la malla trabecular y el canal de Schlemm.\n   • Iridectomía Periférica Quirúrgica (PI): Con tijera de Vannas sobre el iris prolapsado para evitar que la raíz del iris ocluya la esclerostomía interna.\n   • Suturas del Flap Escleral: 2 o 3 suturas de nylon 10-0 con nudos corredizos o liberables (releasable sutures), calibrando la filtración hasta observar un goteo lento pero continuo sin colapso de la cámara anterior.\n   • Cierre Conjuntival Hermético: Con nylon 10-0 o vicryl 8-0; test de Seidel negativo obligatorio.\n3. Esclerectomía Profunda No Perforante (EPNP):\n   • Cirugía filtrante que respeta la cámara anterior: Se talla un segundo flap escleral profundo hasta descifrar el canal de Schlemm, el cual se derrocha junto con la malla escleral profunda, dejando intacta una membrana trabeculodescemética (TDM) ultrafina a través de la cual el acuoso percola sin penetrar bruscamente a cámara anterior. Reduce drásticamente la hipotonía posoperatoria y el hifema.\n4. Dispositivos de Drenaje (Tubos Valvulados vs No Valvulados):\n   • Válvula de Ahmed (Modelo FP7, área 184 mm2): Dispositivo restrictivo que incorpora un mecanismo de compuerta elastomérica de silicona precalibrada que se abre cuando la PIO supera los 8-12 mmHg y se cierra cuando cae por debajo de ese nivel, previniendo la hipotonía inicial precoz.\n   • Implante de Baerveldt (Modelo BG101-350, área 350 mm2): Dispositivo NO VALVULADO con placa de mayor superficie. Como no tiene válvula de cierre, si se insertara libremente provocaría hipotonía catastrófica; exige una OCLUSIÓN TEMPORAL DEL TUBO (ligadura con sutura absorbible de Vicryl 7-0) que mantiene el tubo cerrado durante 4 a 6 semanas hasta que se forma una cápsula fibrosa peritubular protectora.',
    clinicalExamination: {
      biomicroscopy: 'Evaluación posoperatoria de la ampolla de filtración (Sistema de Clasificación de Indiana o Moorfields): 1) Altura de la ampolla (plana, baja, moderada, alta); 2) Extensión superficial (en grados de reloj); 3) Vascularización (avascular, moderadamente vascularizada, hiperémica); 4) Test de Seidel (fuga conjuntival con fluoresceína al 2% bajo luz de cobalto). Profundidad de cámara anterior y presencia de celularidad o hifema.',
      fundus: 'En hipotonía posoperatoria (PIO <6 mmHg): Evaluar edema de papila, pliegues coroideos maculares (maculopatía hipotónica) y desprendimientos coroideos serosos (efusiones coroideas con aspecto lobulado marrón oscuro periférico).',
      specialSigns: '• Test de Seidel Positivo: Dilución del colorante de fluoresceína amarillo-verdoso por el chorro claro de humor acuoso que escapa de la herida conjuntival.\n• Maculopatía Hipotónica: Pliegues estrellados en la membrana limitante interna macular acompañados de edema de papila y tortuosidad vascular en ojos con PIO <5 mmHg post-trabeculectomía.'
    },
    diagnosticWorkup: [
      {
        test: 'Biomicroscopía con Luz de Cobalto y Tira de Fluoresceína',
        findings: 'Examen de Seidel en el borde de la ampolla y sitios de sutura conjuntival.'
      },
      {
        test: 'OCT Macular y Ecografía Modo B',
        findings: 'Confirmación de maculopatía hipotónica con pliegues coriorretinianos y efusiones coroideas serosas en el posoperatorio precoz.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Blebitis vs Endoftalmitis Asociada a Ampolla (Bleb-related endophthalmitis)', distinction: 'La blebitis es una infección confinada a la ampolla filtrante (material mucopurulento blanco-lechoso en la ampolla sin compromiso vítreo, dolor moderado y cámara anterior con reacción leve); la endoftalmitis asocia hipopión denso en cámara anterior, vitrítis con pérdida del fulgor pupilar y dolor intenso. La blebitis requiere antibióticos fortificados tópicos intensivos; la endoftalmitis exige punción vítrea con inyección de vancomicina + ceftazidima o vitrectomía de urgencia.' },
      { condition: 'Desprendimiento Coroideo Seroso vs Hematoma Coroideo Expulsivo', distinction: 'La efusión serosa por hipotonía es marrón claro, lobulada, indolora y ocurre con PIO baja (<5 mmHg); la hemorragia supracoroidea masiva ocurre con DOLOR DESGARRADOR lancinante súbito, PIO muy elevada y masa coroidea oscura fija lobulada.' }
    ],
    steppedManagement: {
      medical: '• Manejo Farmacológico Posoperatorio Inmediato:\n  - Corticoides tópicos intensivos (Prednisolona 1% cada 1-2 horas en el primer mes) para frenar la proliferación fibroblástica y evitar el encistamiento de la ampolla.\n  - Ciclopléjico (Atropina 1% c/12h) para relajar el cuerpo ciliar, profundizar la cámara anterior y prevenir el bloqueo ciliar.\n  - Antibiótico tópico de amplio espectro (Moxifloxacino 0.5% c/6h por 10-14 días).\n• Manejo del Flujo Filtrante:\n  - Ampolla Plana con PIO Elevada (Filtro cerrado prematuramente): Masaje ocular digital compresivo en párpado inferior y lisis de suturas esclerales con láser de argón (utilizando lente de Hoskins) o retirada de suturas liberables.\n  - Ampolla Encistada (Tenon cyst): Quiste fibroso hiperémico de paredes gruesas que no filtra; tratamiento con "Bleb Needling" subconjuntival con aguja 27-30G y aplicación de Mitomicina C o 5-FU.',
      surgical: '• Si la fuga por Seidel es amplia o la cámara anterior es plana con contacto iridocorneal total (Grado 3): Resutura conjuntival urgente en quirófano o aplicación de parche autólogo conjuntival / membrana amniótica.'
    },
    clinicalApplicationPractical: '1. Ensayo TVT (Tube Versus Trabeculectomy Study Landmark): En ojos con cirugía previa de catarata o trabeculectomía fallida, el implante de tubo (Baerveldt) demostró mayor tasa de éxito acumulado a 5 años (70% vs 53%) y menor necesidad de reintervenciones con similar reducción tensional que la re-trabeculectomía con MMC. En ojos vírgenes, la trabeculectomía sigue siendo más efectiva para alcanzar PIO diana muy bajas (<12 mmHg).\n2. Cómo actuar ante un Seidel positivo precoz: En fugas puntiformes mínimas, reducir corticoides, aplicar lente de contacto terapéutica de gran diámetro (16-18 mm) o vendaje compresivo durante 24-48 horas. Si la cámara se aplana o la fuga es grande, resuturar en quirófano sin demora.\n3. Ampolla avascular en "papel de fumar": Las ampollas tratadas con alta concentración de MMC pueden volverse completamente avasculares y translúcidas años después de la cirugía; estos ojos tienen un riesgo permanente de por vida de desarrollar blebitis o endoftalmitis tardía por Streptococo o Haemophilus; instruir al paciente para que acuda de urgencia ante cualquier ojo rojo.',
    highYieldPearl: 'Cirugía Filtrante Board Pearl: Ensayo TVT avala el tubo de drenaje en ojos previamente operados. En trabeculectomía, la Mitomicina C inhibe permanentemente los fibroblastos. Diferenciar Blebitis (infección de ampolla sin vitrítis, colirios fortificados) de Endoftalmitis (hipopión + vitrítis, inyecciones intravítreas urgentes).',
    keyDrugs: [
      { name: 'Mitomicina C (MMC) 0.2 a 0.4 mg/mL', dose: 'Aplicación intraoperatoria por 2 a 3 minutos', warning: 'Antimetabolito potente; exige lavado copioso con 20-30 mL de BSS; riesgo de hipotonía crónica y ampolla avascular si se sobredosifica.' },
      { name: 'Prednisolona acetato 1%', dose: '1 gota cada 1-2 horas en primeras semanas', warning: 'Frenado indispensable de la cicatrización fibroblástica Tenoniana.' },
      { name: 'Atropina 1%', dose: '1 gota cada 12 horas en posoperatorio', warning: 'Mantiene la cámara anterior profunda y estabiliza el cuerpo ciliar.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Válvula de Ahmed vs Implante de Baerveldt',
        category: 'Asociación Patognomónica',
        description: '• Válvula de Ahmed: Tiene mecanismo de válvula restrictiva de apertura a 8-12 mmHg -> menor riesgo de hipotonía inicial precoz, pero mayor tasa de fase hipertensiva a las 4-8 semanas por cápsula fibrótica sobre plato pequeño (184 mm2).\n• Implante de Baerveldt: No tiene válvula (flujo libre) -> EXIGE oclusión temporal con ligadura de Vicryl 7-0 para evitar hipotonía los primeros 30-40 días, pero a largo plazo logra PIO más bajas debido a su plato mucho más amplio (350 mm2).',
        trapToAvoid: 'Olvidar ligar el tubo de Baerveldt antes de insertarlo en cámara anterior; causaría atalamia e hipotonía destructiva inmediata.'
      }
    ]
  },

  // =========================================================================
  // 12. CIRUGÍA MÍNIMAMENTE INVASIVA DE GLAUCOMA (MIGS) E INNOVACIÓN
  // =========================================================================
  {
    id: 'deep-glaucoma-migs-e-innovacion',
    title: 'Cirugía Mínimamente Invasiva de Glaucoma (MIGS) e Innovación: Dispositivos Trabeculares y Subconjuntivales, Sistemas de Liberación Sostenida, Neuroprotección y Telemetría de PIO',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía de frontera sobre las innovaciones tecnológicas y quirúrgicas en glaucoma: 1) Definición y criterios de la American Glaucoma Society (AGS) para Cirugía Mínimamente Invasiva de Glaucoma (MIGS); 2) Dispositivos microinvasivos trabeculares por abordaje ab interno que puentean la malla yuxtacanalicular hacia el canal de Schlemm (iStent inject W, Hydrus Microstent); 3) Procedimientos de dilatación o remodelación del canal de Schlemm y colectores (Canaloplastia ab interno con iTrack y sistema OMNI); 4) Implantes de filtración subconjuntival ab interno y ab externo (XEN Gel Stent con MMC y PreserFlo MicroShunt); 5) Dispositivos supracoroideos (MINIject); 6) Sistemas intraoculares de liberación sostenida de fármacos (implante intracameral biodegradable de bimatoprost Durysta e implante de travoprost iDose TR); y 7) Nuevos horizontes en telemetría continua de la PIO (lente de contacto Sensimed Triggerfish y tonometría de autorregistro iCare HOME) y estrategias avanzadas de neuroprotección celular.',
    definitionAndEpidemiology: 'La Cirugía Mínimamente Invasiva de Glaucoma (MIGS) engloba un conjunto de técnicas y dispositivos quirúrgicos caracterizados por: abordaje ab interno a través de una microincisión en córnea clara, traumatismo tisular mínimo, perfil de seguridad extremadamente elevado con rápida recuperación visual, y eficacia hipotensora moderada a sustancial orientada principalmente a glaucomas leves a moderados o como coadyuvante en la cirugía de catarata.',
    anatomyAndPathophysiology: '1. Clasificación Anatómica de los Procedimientos MIGS:\n   • Vía Trabecular (Aumento del flujo convencional puenteando la malla yuxtacanalicular):\n     - iStent inject W: Dos microstents de titanio de grado médico de 360 µm con recubrimiento de heparina que se implantan bajo gonioscopia intraoperatoria directa a través de la malla trabecular directamente en la luz del canal de Schlemm, separados 2 a 3 horas de reloj en el cuadrante nasal inferior (zona con mayor densidad de canales colectores acuosos).\n     - Hydrus Microstent: Dispositivo de nitinol biocompatible de 8 mm de longitud con memoria de forma que se introduce en el canal de Schlemm, dilatándolo en 3 horas de reloj (scaffolding) y puenteando la malla trabecular interna.\n     - Canaloplastia ab interno / Goniotomía ab interno (OMNI Surgical System, Kahook Dual Blade - KDB): Realizan dilatación viscoelástica circunferencial del canal de Schlemm o escisión precisa de una franja de malla trabecular cribiforme sin dejar implante permanente.\n   • Vía Subconjuntival (Filtración microfistulizante controlada):\n     - XEN Gel Stent (XEN 45): Tubo biocompatible de colágeno gelatinoso porcino reticulado con glutaraldehído de 6 mm de longitud y luz interna de 45 µm. Basado en la Ley de Hagen-Poiseuille, su luz de 45 µm confiere una resistencia hidráulica fija de 6 a 8 mmHg al flujo acuoso a 2 µL/min, previniendo la hipotonía severa. Requiere aplicación subconjuntival de Mitomicina C para evitar la fibrosis Tenoniana.\n     - PreserFlo MicroShunt: Dispositivo de 8.5 mm de material elastomérico biocompatible SIBS (poli-estireno-bloque-isobutileno-bloque-estireno) con luz de 70 µm implantado por vía ab externo bajo un flap conjuntival con MMC.\n   • Vía Supracoroidea (Aumento del flujo uveoescleral no convencional):\n     - MINIject: Implante poroso flexible de silicona médica biocompatible colocado en el espacio supraciliar/supracoroideo.\n2. Plataformas de Liberación Sostenida de Fármacos:\n   • Durysta (Allergan / AbbVie): Implante intracameral sólido biodegradable cilíndrico de bimatoprost al 10 µg compuesto por polímeros PLGA. Se inyecta en la cámara anterior a través de una aguja de 28G, se deposita en el ángulo inferior y libera bimatoprost de forma continua durante 90 a 120 días, con un efecto hipotensor que puede persistir hasta 1 a 2 años.\n   • iDose TR (Glaukos): Implante intracameral de titanio no biodegradable que se ancla en la malla trabecular y libera travoprost microdosificado de forma continua durante más de 12 a 24 meses, eliminando por completo la dependencia del paciente del cumplimiento de colirios diarios.\n3. Telemetría Continua de la PIO y Teleoftalmología:\n   • Tonómetro de Autorregistro iCare HOME: Tonómetro de rebote calibrado para que el propio paciente se mida la PIO en su domicilio 4 a 6 veces al día, identificando los picos hipertensivos nocturnos o de madrugada que pasan desapercibidos en la consulta diurna.',
    clinicalExamination: {
      biomicroscopy: 'En MIGS trabecular: Visualización del dispositivo correctamente alojado en el cuadrante nasal del ángulo; en XEN: ampolla subconjuntival difusa baja no avascular; en Durysta: visualización del implante cilíndrico en el ángulo inferior sin contacto endotelial.',
      fundus: 'Estabilidad de la excavación y CFNR.',
      specialSigns: '• Reflujo de sangre en el stent (Blood reflux): Sangrado mínimo transitorio retrógrado desde el canal de Schlemm a través de la luz del stent al descomprimir la cámara anterior; confirma la permeabilidad y comunicación directa con el sistema venoso epiescleral.'
    },
    diagnosticWorkup: [
      {
        test: 'Gonioscopia de Indentación Intraoperatoria (con Lente de Swan-Jacob)',
        findings: 'Indispensable para identificar la malla trabecular pigmentada nasal y verificar la profundidad de inserción del iStent o Hydrus.'
      },
      {
        test: 'Recuento de Células Endoteliales Corneales (Microscopía Especular)',
        findings: 'Monitoreo de seguridad endotelial corneal basal y periódico en pacientes con implantes en cámara anterior.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Fallo de MIGS Trabecular vs Obstrucción por Iris', distinction: 'La gonioscopia posoperatoria revela si el stent está ocluido por un proceso del iris o sinequia, o si fue implantado demasiado profundo en el estroma escleral.' }
    ],
    steppedManagement: {
      medical: '• Selección Ideal de Candidatos para MIGS Trabecular:\n  - Pacientes con GPAA leve a moderado que se someten a cirugía de catarata (Faco-iStent / Faco-Hydrus) con el objetivo de reducir la dependencia de gotas y mejorar la superficie ocular.\n  - Pacientes con intolerancia o falta de adherencia a múltiples colirios hipotensores.\n• Limitación Anatómica de los MIGS Trabeculares:\n  - La PIO final obtenida nunca podrá ser inferior a la Presión Venosa Epiescleral del paciente (8-10 mmHg); por tanto, en glaucomas muy avanzados con daño severo que exigen una PIO meta <10-12 mmHg de forma obligatoria, la cirugía filtrante subconjuntival (Trabeculectomía o PreserFlo/XEN con MMC) es superior a los stents trabeculares.',
      surgical: '• En caso de fracaso de un procedimiento MIGS trabecular: No se pierde ninguna opción quirúrgica futura; la conjuntiva permanece virgen e intacta, permitiendo realizar una trabeculectomía o implante de tubo sin compromisos anatómicos.'
    },
    clinicalApplicationPractical: '1. Ventaja Capital del MIGS Trabecular: "Conjunctiva-Sparing" (Preservación absoluta de la conjuntiva). Como el abordaje es ab interno por córnea clara, no se manipula la conjuntiva ni la cápsula de Tenon; si el paciente progresa en el futuro, la conjuntiva superior está intacta para una trabeculectomía perfecta.\n2. Ensayo HORIZON (Hydrus vs Faco sola): Demostró a 5 años que el grupo con Hydrus + Facoemulsificación tuvo una tasa de reintervenciones quirúrgicas por glaucoma un 61% menor y un mayor porcentaje de pacientes libres de medicamentos en comparación con la cirugía de catarata aislada.\n3. Requisito gonioscópico previo al MIGS trabecular: El paciente debe tener un ángulo ABIERTO a la gonioscopia; si existen sinequias anteriores periféricas en 360 grados (cierre sinequial extenso), los dispositivos trabeculares no pueden implantarse.',
    highYieldPearl: 'MIGS Board Pearl: Los stents trabeculares (iStent, Hydrus) puentean la malla yuxtacanalicular ab interno preservando la conjuntiva intacta, pero su límite inferior es la presión venosa epiescleral (~8-10 mmHg). Para PIO meta muy bajas en glaucoma avanzado se requiere filtración subconjuntival.',
    keyDrugs: [
      { name: 'Durysta (implante bimatoprost 10 µg)', dose: '1 implante intracameral', warning: 'Liberación sostenida por 4-6 meses; monitorear conteo endotelial corneal.' },
      { name: 'Mitomicina C 0.02% (subconjuntival)', dose: '0.1 mL previo a implante de XEN Gel Stent', warning: 'Previene la fibrosis Tenoniana peri-stent.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Criterios de la Definición de MIGS (American Glaucoma Society)',
        category: 'Pregunta Clásica',
        description: 'Para calificar como MIGS verdadero, el procedimiento debe cumplir 5 criterios:\n1) Abordaje ab interno a través de incisión en córnea clara;\n2) Mínimo traumatismo tisular a la anatomía ocular normal;\n3) Eficacia hipotensora con reducción clínicamente útil de la PIO;\n4) Perfil de seguridad extremadamente alto (mínimo riesgo de hipotonía profunda o desprendimiento coroideo);\n5) Rápida recuperación visual del paciente.',
        trapToAvoid: 'Considerar la trabeculectomía o la válvula de Ahmed como procedimientos MIGS; son cirugías ab externo convencionales mayores.'
      }
    ]
  }
,
  // =========================================================================
  // 13. GLAUCOMA MALIGNO (SÍNDROME DE DESVÍO DEL HUMOR ACUOSO / BLOQUEO CILIAR)
  // =========================================================================
  {
    id: 'deep-glaucoma-maligno-bloqueo-ciliar',
    title: 'Glaucoma Maligno (Síndrome de Desvío del Humor Acuoso / Bloqueo Ciliar): Fisiopatología, Diagnóstico Diferencial de Atalamia y Terapia Escalonada',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía quirúrgica de máxima complejidad sobre el Glaucoma Maligno (desvío de humor acuoso o bloqueo ciliar): etiopatogenia por aposición cilio-lenticular o cilio-hialoidea anómala con atrapamiento y secuestro retrógrado de humor acuoso en el espacio vítreo posterior, aplanamiento axial uniforme (tanto central como periférico) de la cámara anterior con elevación de la PIO tras cirugía intraocular incisional o filtrante en ojos con longitud axial corta o cierre angular previo, diagnóstico diferencial crítico frente a efusión supracoroidea y hematoma expulsivo, protocolo médico de choque con ciclopléjicos potentes (Atropina 1%), contraindicación absoluta de mióticos, y tratamiento invasivo escalonado (capsulotomía/hialoidotomía con láser Nd:YAG trans-iridotomía frente a vitrectomía anterior con zonulo-hialoido-vitrectomía ZHV vía pars plana).',
    definitionAndEpidemiology: 'El Glaucoma Maligno, históricamente descrito por von Graefe en 1869, es una complicación posoperatoria hiperaguda o subaguda potencialmente cegadora caracterizada por una cámara anterior extremadamente estrecha o totalmente plana (atalamia central y periférica) en presencia de una PIO elevada (o paradójicamente normal), con una iridotomía periférica patente y sin evidencia ecográfica de desprendimiento coroideo seroso o hemorrágico. Ocurre con mayor frecuencia en ojos hipermétropes con longitud axial corta (<21-22 mm), cámara anterior estrecha y antecedentes de glaucoma por cierre angular primario sometidos a trabeculectomía o facoemulsificación.',
    anatomyAndPathophysiology: '1. Fisiopatología del Desvío de Humor Acuoso (Aqueous Misdirection):\n   • Desencadenante: Disrupción de las relaciones anatómicas normales entre los procesos ciliares, el ecuador del cristalino (o hápticas del LIO) y la cara hialoidea anterior del vítreo tras descompresión quirúrgica brusca.\n   • Bloqueo Cilio-Hialoideo: Los procesos ciliares rotan anteriormente y se ponen en íntimo contacto con la membrana hialoidea anterior y la zónula anterior, creando una válvula unidireccional de resistencia al flujo hacia la cámara anterior.\n   • Secuestro Vítreo Posterior: El humor acuoso recién producido por el epitelio ciliar se desvía en sentido retrógrado hacia el cuerpo vítreo y el espacio retrohialoideo retrovítreo.\n   • Expansión del Compartimento Posterior: El acúmulo atrapado de acuoso expande el volumen del cuerpo vítreo posterior -> desplazamiento masivo hacia adelante de todo el diafragma iridocristaliniano (o complejo iris-LIO en pseudofáquicos) -> aplanamiento axial completo de la cámara anterior desde el centro foveolar hasta el limbo periférico y cierre angular secundario por aposición de 360 grados.\n2. La Prueba de la Iridotomía Periférica Patente:\n   • En un bloqueo pupilar convencional, la iridotomía láser o quirúrgica comunica la cámara posterior con la anterior, liberando el iris bombé y profundizando la cámara anterior central.\n   • En el glaucoma maligno, la iridotomía ESTÁ PATENTE pero es TOTALMENTE INEFICAZ porque el bloqueo no está en la pupila, sino en la hialoides anterior y el cuerpo ciliar; el iris no está abombado sino empujado uniformemente en plano hacia adelante.',
    clinicalExamination: {
      biomicroscopy: 'Cámara anterior completamente plana de limbo a centro (atalamia Grado 3 con contacto iridocorneal y endotelial corneal directo), edema corneal estromal difuso por contacto mecánico y PIO extrema, pupila fija o midriática perezosa, iridotomía periférica presente y permeable visualizable con retroiluminación.',
      fundus: 'Frecuentemente difícil de evaluar; no se observan masas lobuladas oscuras ni pliegues de desprendimiento coroideo seroso periférico.',
      specialSigns: '• Aplanamiento uniforme central y periférico: En bloqueo pupilar el centro de la cámara está moderadamente formado y la periferia cerrada; en glaucoma maligno, el centro está tan plano como la periferia (contacto endotelio-iris central).\n• Signo de respuesta paradójica a la Pilocarpina: La administración de pilocarpina contrae el músculo ciliar traccionándolo hacia adelante, desplazando aún más el diafragma vítreo hacia la córnea y agravando fulminantemente la atalamia.'
    },
    diagnosticWorkup: [
      {
        test: 'Ecografía Ocular en Modo B de Alta Resolución (o UBM de 50 MHz)',
        findings: 'Examen diagnóstico definitorio obligado: Demuestra coroides aplicada en 360 grados (descarta desprendimiento coroideo seroso o hematoma supracoroideo expulsivo), presencia de lagos de líquido anecoico ópticamente vacíos en el espacio retrovítreo o intravítreo y rotación anterior de procesos ciliares.'
      },
      {
        test: 'OCT de Segmento Anterior (AS-OCT)',
        findings: 'Cuantifica el aplanamiento axial total con profundidad de cámara anterior central (ACD) <0.5 mm o contacto endotelial completo.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Desprendimiento Coroideo Seroso (Efusiones coroideas post-trabeculectomía)', distinction: 'La cámara anterior está plana o estrecha, pero la PIO es MUY BAJA (habitualmente <4-6 mmHg) y la ecografía o fondo de ojo muestra masas periféricas lobuladas marrón claro cupuliformes.' },
      { condition: 'Hemorragia Supracoroidea Expulsiva Tardía', distinction: 'Dolor atroz insoportable de inicio súbito, PIO muy elevada y ecografía modo B que revela masas coroideas periféricas hiperecogénicas oscuras con convexidad anterior fija.' },
      { condition: 'Ataque Agudo por Bloqueo Pupilar Relativo', distinction: 'La iridotomía periférica está cerrada o ausente; al realizar una LPI patente, la cámara anterior central se profundiza de inmediato (lo que no ocurre en el glaucoma maligno).' }
    ],
    steppedManagement: {
      medical: '• Terapia Médica de Descompresión y Relajación Ciliar (Éxito del 50% en las primeras 48 horas):\n  1) Ciclopléjicos y Midriáticos Potentes (FARMACOTERAPIA CAPITAL):\n     - Atropina 1% tópica cada 8 horas + Fenilefrina 2.5% o 10% cada 8 horas. Mecanismo: La atropina paraliza el músculo ciliar, relajándolo hacia atrás y hacia afuera, lo que tensa las fibras zonulares, aplana el cristalino/LIO y tracciona el diafragma ciliohialoideo hacia el polo posterior, reabriendo la cámara anterior.\n  2) Fármacos Hiperosmóticos para Deshidratar el Vítreo:\n     - Manitol al 20% intravenoso: 1.5 a 2.0 g/kg en 45 minutos. Reduce drásticamente el volumen del gel vítreo posterior, permitiendo que el diafragma retroceda.\n  3) Supresión Máxima de Producción de Acuoso:\n     - Acetazolamida 500 mg VO/IV inicial + Timolol 0.5% + Dorzolamida 2% + Brimonidina 0.15%.\n  4) Corticoides tópicos potentes (Prednisolona 1% c/2-4h) para reducir la inflamación del cuerpo ciliar.',
      surgical: '• Intervenciones Invasivas si no responde en 48 horas:\n  1) Capsulotomía Posterior y Hialoidotomía Anterior con Láser Nd:YAG:\n     - En pacientes pseudofáquicos o afáquicos: Realizar disparos con láser YAG a través de la pupila o de la iridotomía periférica para romper la cápsula posterior y la cara hialoidea anterior (disrupción del diafragma de retención), permitiendo que el acuoso atrapado drene hacia la cámara anterior (éxito >70-80%).\n  2) Vitrectomía Anterior con Zonulo-Hialoido-Vitrectomía (ZHV) vía Pars Plana (Estándar de Oro Quirúrgico):\n     - Vitrectomía central por vía pars plana combinada con iridectomía periférica quirúrgica y escisión de un sector de zónula y cápsula anterior/posterior (creando una "ventana de comunicación unicameral" directa y permanente entre la cavidad vítrea y la cámara anterior).'
    },
    clinicalApplicationPractical: '1. ¡PROHIBICIÓN ESTRICTA DE PILOCARPINA!: Administrar pilocarpina en un glaucoma maligno es una negligencia médica grave; la contracción ciliar empuja el cristalino aún más hacia la córnea, colapsando irreversiblemente la cámara anterior y pudiendo inducir una descompensación endotelial corneal permanente en horas.\n2. El Ojo Contralateral: En todo paciente con glaucoma maligno en un ojo, el ojo contralateral tiene una predisposición anatómica idéntica; si requiere cirugía intraocular, debe recibir atropina 1% profiláctica transquirúrgica y mantenerse bajo estrecha vigilancia.\n3. Si un paciente operado de trabeculectomía llega con cámara plana y PIO alta con iridotomía patente: Pensar de inmediato en Glaucoma Maligno; solicitar ecografía B urgente para descartar hemorragia expulsiva e iniciar infusión de manitol y atropina tópica.',
    highYieldPearl: 'Glaucoma Maligno Board Pearl: Cámara anterior totalmente plana + PIO alta + iridotomía periférica patente. Los ciclopléjicos (Atropina 1%) son el tratamiento curativo de elección. ¡Los mióticos (Pilocarpina) están CONTRAINDICADOS de forma absoluta! En pseudofáquicos, la hialoidotomía YAG rompe el bloqueo.',
    keyDrugs: [
      { name: 'Atropina 1% colirio', dose: '1 gota cada 8 horas (continuar por semanas)', warning: 'Fármaco de primera línea; relaja el cuerpo ciliar hacia atrás.' },
      { name: 'Manitol IV al 20%', dose: '1.5 a 2.0 g/kg en 45 minutos', warning: 'Deshidrata el cuerpo vítreo posterior para permitir la profundización de la cámara.' },
      { name: 'Acetazolamida 500 mg', dose: '500 mg inicial, luego 250 mg c/8h', warning: 'Reduce la tasa de llenado acuoso del compartimento vítreo.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Mióticos vs Ciclopléjicos en Bloqueo Ciliar',
        category: 'Trampa de Tribunal',
        description: 'En el bloqueo pupilar estándar la pilocarpina abre el ángulo al contraer el esfínter pupilar. En el Glaucoma Maligno (bloqueo ciliar), la pilocarpina EMPEORA catastróficamente el cuadro porque el espasmo ciliar desplaza el diafragma iridocristaliniano hacia adelante. El tratamiento médico obligado es la ATROPINA (ciclopléjico).',
        trapToAvoid: 'Instilar pilocarpina a un paciente con cámara plana y PIO alta sin comprobar si la iridotomía periférica ya estaba patente.'
      }
    ]
  },

  // =========================================================================
  // 14. SÍNDROME IRIDOCORNEAL ENDOTELIAL (ICE) Y GLAUCOMA
  // =========================================================================
  {
    id: 'deep-glaucoma-ice-sindrome-iridocorneal',
    title: 'Síndrome Iridocorneal Endotelial (ICE): Síndrome de Chandler, Atrofia Esencial de Iris, Cogan-Reese y Glaucoma Refractario',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía completa sobre el espectro del Síndrome Iridocorneal Endotelial (ICE): fisiopatología de células endoteliales corneales epitelializadas anómalas ("células ICE") con aspecto patognomónico en plata martillada / halo oscuro en microscopía especular, migración aberrante de membrana sobre la malla trabecular y el iris, clasificación clínica de las tres variantes (Síndrome de Chandler, Atrofia Esencial de Iris y Síndrome de Cogan-Reese), presentación clásica unilateral en mujeres jóvenes, desarrollo de sinequias anteriores periféricas que traccionan la pupila hacia el lado de la sinequia (corectopia, ectropión uveae y pseudopolicoria), y manejo escalonado del edema corneal y glaucoma refractario secundario con dispositivos de tubo valvulados.',
    definitionAndEpidemiology: 'El Síndrome Iridocorneal Endotelial (ICE) es un trastorno unilateral, esporádico (no hereditario) y progresivo que afecta predominantemente a mujeres adultas jóvenes (20 a 50 años). Se caracteriza por anomalías proliferativas del endotelio corneal, cambios estructurales variables en el iris y desarrollo de glaucoma secundario de ángulo cerrado por tracción sinequial en más del 50% de los pacientes.',
    anatomyAndPathophysiology: '1. Fisiopatología Molecular y Celular:\n   • Célula ICE: El endotelio corneal sufre una transformación metaplásica anómala hacia un fenotipo similar a células epiteliales (expresan filamentos intermedios de queratina, se dividen activamente y presentan microvellosidades apicales anormales).\n   • Aspecto en Microscopía Especular: Pleomorfismo severo con inversión del patrón celular normal: "células con centros oscuros rodeados por bordes claros brillantes" con aspecto en "plata martillada" (beaten silver o hammered silver appearance).\n   • Membrana Proliferativa Migratoria: La monocapa endotelial aberrante secreta una membrana de Descemet anómala y migra en sentido posterior cruzando la línea de Schwalbe para recubrir la malla trabecular y la superficie anterior del estroma del iris.\n   • Sinequias Anteriores Periféricas (PAS) por Contracción: La membrana endotelial se contrae progresivamente, traccionando el iris hacia la córnea periférica y formando sinequias anteriores anchas y altas que sobrepasan la línea de Schwalbe.\n   • Deformidad del Iris: La tracción desplaza la pupila hacia el área de mayor sinequia (corectopia), eversión del epitelio pigmentario posterior (ectropión uveae) y atrofia por isquemia del estroma opuesto con formación de agujeros de espesor completo (pseudopolicoria).\n   • Causa primaria: Fuertemente vinculada a infección latente por Virus Herpes Simple (VHS) en el endotelio corneal demostrada por PCR en humor acuoso.\n2. Subtipos Clínicos Clásicos:\n   • Síndrome de Chandler (Variante más frecuente, 50%): El daño corneal predomina ampliamente; edema corneal recurrente matutino que ocurre incluso con PIO normal o ligeramente elevada (18-24 mmHg); cambios en iris mínimos o ausentes.\n   • Atrofia Esencial de Iris: Cambios devastadores en el iris con corectopia severa, atrofia estromal masiva, agujeros por fusión o dehiscencia y pseudopolicoria; glaucoma muy severo y de difícil control.\n   • Síndrome de Cogan-Reese (Síndrome del Nevus del Iris): Presencia de múltiples nódulos pigmentados amarillentos o marrones en la superficie anterior del iris rodeados por una membrana endotelial transparente; cambios corneales variables.',
    clinicalExamination: {
      biomicroscopy: 'Asimetría estricta unilateral. Córnea con edema epitelial microquístico y aspecto endotelial finamente granular en "plata martillada" en iluminación tangencial. Iris con pupila desplazada (corectopia), bordes pupilares evertidos y nódulos redondeados en Cogan-Reese.',
      fundus: 'Excavación glaucomatosa progresiva profunda concordante con el nivel tensional.',
      specialSigns: '• Endotelio en plata martillada (Beaten bronze / silver): Patognomónico en microscopía especular.\n• Corectopia que apunta a la sinequia: La pupila es traccionada en dirección a la sinequia anterior periférica más ancha y alta.'
    },
    diagnosticWorkup: [
      {
        test: 'Microscopía Especular Corneal',
        findings: 'Patrón diagnóstico definitivo: Células endoteliales pleomórficas con bordes celulares claros hiperreflectivos y núcleos/centros oscuros invertidos ("células ICE"). El ojo contralateral presenta endotelio normal.'
      },
      {
        test: 'Gonioscopia Dinámica de 4 espejos',
        findings: 'Sinequias anteriores periféricas anchas en tienda de campaña que se extienden por delante de la línea de Schwalbe hacia la córnea periférica.'
      },
      {
        test: 'Recuento Endotelial y Paquimetría',
        findings: 'Densidad endotelial drásticamente reducida (<800-1000 cél/mm2) con paquimetría aumentada por edema estromal crónico.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Distrofia Polimorfa Posterior (PPMD)', distinction: 'Bilateral, autosómica dominante (gen ZEB1), bandas vesiculares o en riel de tren en Descemet; no causa corectopia severa y el edema es raro.' },
      { condition: 'Síndrome de Axenfeld-Rieger', distinction: 'Bilateral, congénito, herencia autosómica dominante (genes PITX2, FOXC1), asocia embriotoxon posterior prominente y anomalías sistémicas dentales/faciales.' },
      { condition: 'Melanoma de Iris', distinction: 'Masa estromal pigmentada unifocal progresiva con vascularización intrínseca demostrable en UBM, sin células endoteliales anómalas en plata martillada.' }
    ],
    steppedManagement: {
      medical: '• Control del Edema Corneal:\n  - Colirios y pomadas hipertónicas de Cloruro de Sodio al 5% (NaCl 5%) instilados en la mañana para deshidratar el epitelio osmóticamente; aire caliente de secador de pelo a distancia prudente.\n• Control Hipotensor Médico:\n  - Fármacos que reducen la producción acuosa: Betabloqueantes (Timolol), Inhibidores de Anhidrasa Carbónica (Dorzolamida, Acetazolamida) y Alfa-2 agonistas (Brimonidina).\n  - Evitar mióticos (Pilocarpina) porque aumentan la tracción sobre el iris y favorecen el cierre angular.',
      surgical: '• Tratamiento Quirúrgico del Glaucoma:\n  - La Trabeculectomía convencional tiene una alta tasa de fracaso a medio plazo debido a que la membrana endotelial anómala migra sobre la esclerostomía interna ocluyendo la fístula.\n  - Procedimiento de Elección: Dispositivos de Drenaje de Humor Acuoso (Válvula de Ahmed o Tubo de Baerveldt con MMC), con inserción del tubo orientada hacia el cuadrante con menor tracción sinequial o en sulcus ciliar.\n• Tratamiento Quirúrgico Corneal:\n  - En descompensación endotelial sintomática con dolor o pérdida visual: Queratoplastia Endotelial (DMEK o DSAEK) una vez estabilizada la PIO.'
    },
    clinicalApplicationPractical: '1. Mujer de 35 años con visión borrosa matutina en un solo ojo y pupila ligeramente descentrada: Solicitar inmediatamente microscopía especular corneal; el Síndrome de Chandler suele confundirse con uveítis o glaucoma primario durante años.\n2. Si se planea cirugía filtrante en síndrome ICE: Preferir un implante de tubo valvulado (Ahmed) sobre la trabeculectomía simple; la proliferación de la membrana de células ICE sobre la fístula es la causa más común de fallo tardío de la trabeculectomía.\n3. En pacientes con corectopia marcada y fotofobia por pseudopolicoria: Pueden emplearse lentes de contacto cosméticas con pupila artificial pintada para mejorar el confort visual mientras se controla la PIO.',
    highYieldPearl: 'Síndrome ICE Board Pearl: Afección UNILATERAL en mujeres jóvenes. Células endoteliales en "plata martillada" en microscopía especular. La variante de Chandler cursa con edema corneal severo con PIO poco elevada. Los implantes de tubo valvulado son superiores a la trabeculectomía.',
    keyDrugs: [
      { name: 'Solución Salina Hipertónica NaCl 5%', dose: '1 gota cada 4 horas al levantarse', warning: 'Deshidrata el epitelio corneal osmóticamente reduciendo las microbullas.' },
      { name: 'Timolol 0.5% / Dorzolamida 2%', dose: '1 gota cada 12 horas', warning: 'Reduce la secreción ciliar para bajar la PIO por debajo del umbral de edema endotelial.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Variantes del Síndrome ICE (Mnemotecnia y Diagnóstico)',
        category: 'Asociación Patognomónica',
        description: '• Chandler: Córnea (Edema predomina, iris normal o cambios leves).\n• Atrofia Esencial: Iris (Corectopia severa, agujeros por atrofia, pseudopolicoria).\n• Cogan-Reese: Nódulos pigmentados en superficie anterior del iris (aspecto en "empedrado").',
        trapToAvoid: 'Confundir el Síndrome ICE (unilateral y adquirido) con el Síndrome de Axenfeld-Rieger (bilateral, congénito, autosómico dominante con embriotoxon posterior).'
      }
    ]
  },

  // =========================================================================
  // 15. GLAUCOMAS FACOGÉNICOS (FACOLÍTICO, FACOMÓRFICO Y FACOANTIGÉNICO)
  // =========================================================================
  {
    id: 'deep-glaucoma-facogenico-subtipos',
    title: 'Glaucomas Facogénicos: Glaucoma Facolítico, Facomórfico, por Partículas Lenticulares y Facoantigénico',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía exhaustiva y diferencial sobre los cuatro glaucomas inducidos por el cristalino: 1) Glaucoma Facolítico (catarata hipermadura licuefactada con cápsula intacta que rezuma proteínas cristalinianas de alto peso molecular fagocitadas por macrófagos gigantes que obstruyen la malla trabecular); 2) Glaucoma Facomórfico (catarata intumescente aumentada de volumen anteroposterior con cierre angular agudo por bloqueo pupilar secundario); 3) Glaucoma por Partículas Lenticulares (Lens Particle Glaucoma por restos corticales liberados tras rotura capsular quirúrgica o traumática); y 4) Glaucoma Facoantigénico (antigua endoftalmitis facoanafiláctica, reacción autoinmune granulomatosa celular contra proteínas cristalinianas secuestradas con precipitados en grasa de carnero e hipertensión ocular). Abordaje diagnóstico diferencial biomicroscópico y tratamiento quirúrgico definitivo mediante lensectomía/facoemulsificación de urgencia.',
    definitionAndEpidemiology: 'Los glaucomas facogénicos son un grupo de glaucomas secundarios causados directa o indirectamente por alteraciones morfológicas, mecánicas, proteicas o inmunológicas del cristalino. Suponen una causa frecuente de pérdida visual dolorosa aguda en pacientes ancianos con cataratas seniles avanzadas descuidadas, así como en traumatismos penetrantes o complicaciones posquirúrgicas de catarata.',
    anatomyAndPathophysiology: '1. Glaucoma Facolítico (Lens-Protein Glaucoma):\n   • Ocurre en cataratas maduras, hipermaduras o morganianas (núcleo parduzco denso flotando en corteza lechosa licuefactada).\n   • La cápsula anterior del cristalino permanece MICROSCÓPICAMENTE ÍNTEGRA (sin rotura ni desgarro macroscópico).\n   • Las proteínas cristalinianas de alto peso molecular (HMW proteins, >150 millones de Daltons) sufren hidrólisis química y escapan a través de los poros microscópicos de la cápsula anterior hacia la cámara anterior.\n   • Estas proteínas insolubles inducen una intensa quimiotaxis de monocitos tisulares que se transforman en macrófagos gigantes fagocitadores de proteínas cristalinianas ("células facolíticas").\n   • Tanto las proteínas cristalinianas libres como los macrófagos gigantes ingurgitados colmatan y bloquean mecánicamente los espacios de la malla trabecular yuxtacanalicular cribiforme -> hipertensión ocular hiperaguda (40-60 mmHg).\n2. Glaucoma Facomórfico (Phacomorphic Glaucoma):\n   • Mecanismo mecánico de masa: Catarata intumescente hidratada que experimenta un rápido crecimiento de su diámetro anteroposterior.\n   • Desplazamiento anterior del diafragma iridocristaliniano con reducción severa del espacio de la cámara anterior.\n   • Bloqueo pupilar relativo mecánico secundario: El iris periférico se comba anteriormente (iris bombé) cerrando el ángulo iridocorneal en 360 grados de forma similar a un ataque agudo de cierre angular primario.\n3. Glaucoma por Partículas Lenticulares (Lens-Particle Glaucoma):\n   • Ocurre semanas o meses después de una cirugía de catarata (facoemulsificación o extracapsular) con rotura capsular no advertida, o tras un traumatismo ocular perforante con laceración de la cápsula cristaliniana.\n   • Fragmentos libres de material cortical retenido flotan en cámara anterior y se depositan físicamente en la malla trabecular, obstruyendo los poros de drenaje.\n4. Glaucoma Facoantigénico (Antigua Endoftalmitis Facoanafiláctica):\n   • Trastorno inflamatorio granulomatosos inmunológico mediado por linfocitos T sensibilizados contra antígenos de proteínas cristalinianas que habían permanecido secuestradas inmunológicamente durante la embriogénesis.\n   • Se desencadena tras la exposición brusca de estas proteínas a la circulación tras cirugía o trauma con cápsula rota.\n   • Reacción inflamatoria granulomatosa masiva con precipitados queráticos gruesos "en grasa de carnero" (mutton-fat), sinequias posteriores y trabeculitis obstructiva con PIO muy elevada.',
    clinicalExamination: {
      biomicroscopy: '• En Facolítico: Córnea edematosa microquística; cámara anterior profunda (a diferencia del cierre angular) con celularidad densa flotante y partículas blanquecinas refulgentes (macrófagos con lípidos y proteínas), pseudohipopión blanco lechoso estéril en fondo de saco; cristalino blanco hipermaduro con cápsula arrugada.\n• En Facomórfico: Cámara anterior extremadamente baja o plana, pupila en midriasis media ovalada y catarata blanca intumescente voluminosa que empuja el iris.\n• En Partículas Lenticulares: Masas algodonosas corticales blancas libres en cámara anterior o adheridas al ángulo con edema corneal.\n• En Facoantigénico: Precipitados queráticos en grasa de carnero, reacción granulomatosa con células gigantes y sinequias posteriores tempranas.',
      fundus: 'Frecuentemente no visible por la opacidad cristaliniana densa; la ecografía modo B es obligatoria para descartar desprendimiento de retina o endoftalmitis posterior.',
      specialSigns: '• Cámara anterior profunda en Glaucoma Facolítico: Clave absoluta para diferenciarlo del glaucoma facomórfico o del ataque agudo de cierre angular primario.\n• Pseudohipopión proteico blanco: Nivel de detritos de proteínas cristalinianas y macrófagos en cámara anterior sin infección microbiana.'
    },
    diagnosticWorkup: [
      {
        test: 'Paracentesis de Cámara Anterior con Análisis Citológico de Humor Acuoso',
        findings: 'En Glaucoma Facolítico: Demuestra abundantes macrófagos gigantes distendidos con lípidos y proteínas cristalinianas fagocitadas en su citoplasma (tinción de Papanicolaou) sin presencia de bacterias ni neutrófilos.'
      },
      {
        test: 'Ecografía Ocular en Modos A y B',
        findings: 'En Glaucoma Facomórfico: Medición del grosor cristaliniano aumentado (>5.0-5.5 mm); descarta masas tumorales intraoculares o desprendimiento de retina posterior.'
      },
      {
        test: 'Gonioscopia de 4 espejos',
        findings: 'Ángulo abierto en facolítico; ángulo ocluido por aposición periférica en facomórfico; partículas corticales en ángulo en lens-particle.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Endoftalmitis Infecciosa Aguda postquirúrgica', distinction: 'Vitrítis severa, dolor extremo, hipopión compuesto de neutrófilos polimorfonucleares bacterianos y cultivo positivo.' },
      { condition: 'Ataque Agudo de Cierre Angular Primario (APAC)', distinction: 'Ocurre en ojos sin catarata intumescente o con cristalino normal; en facomórfico el ojo adelfo suele tener cámara anterior más profunda.' }
    ],
    steppedManagement: {
      medical: '• Control Tensional Médico de Urgencia Preoperatorio:\n  - Reducir la PIO antes de la cirugía para evitar la descompresión explosiva y la hemorragia supracoroidea expulsiva intraoperatoria:\n    1) Manitol 20% IV (1.5-2.0 g/kg en 45 min) + Acetazolamida 500 mg VO/IV.\n    2) Hipotensores tópicos (Timolol, Brimonidina, Dorzolamida).\n    3) Corticoides tópicos potentes (Prednisolona 1% cada 1-2 horas) para frenar la inflamación estromal ciliar.\n    4) En Facomórfico: Puede requerir iridotomía láser periférica previa o compresión corneal para romper el bloqueo.',
      surgical: '• Tratamiento Curativo Definitivo:\n  - EXTRACCIÓN QUIRÚRGICA DEL CRISTALINO / CATARATA DE URGENCIA:\n    • En Facolítico y Facomórfico: Facoemulsificación o extracción extracapsular/manual una vez estabilizada la PIO. (Riesgo quirúrgico: cápsula anterior frágil, rotura capsular y diálisis zonular por tracción; utilizar viscoelástico cohesivo de alta densidad y tinción con azul de tripán para la capsulorrexis).\n    • En Lens-Particle Glaucoma: Lavado minucioso de cámara anterior con aspiración completa de restos corticales retenidos con pieza bimanual de I/A o vitrectomía anterior si hay rotura capsular.\n    • En Facoantigénico: Lensectomía completa con vitrectomía pars plana para extirpar todo el material antigénico cristaliniano secuestrado.'
    },
    clinicalApplicationPractical: '1. Paciente anciano con catarata blanca lechosa, ojo rojo violáceo y PIO de 50 mmHg: Si la cámara anterior es PROFUNDA, el diagnóstico es Glaucoma Facolítico; si la cámara anterior es PLANA, el diagnóstico es Glaucoma Facomórfico. Pregunta clásica de residencia y boards.\n2. Azul de Tripán Obligatorio en Facolítico: La cápsula anterior en una catarata morganiana está arrugada y elástica; teñir con azul de tripán es mandatorio para realizar una capsulorrexis circular continua segura sin desgarros periféricos a la zónula.\n3. Si un paciente operado de catarata hace 1 mes consulta con PIO de 35 mmHg e inflamación persistente: Explorar meticulosamente el ángulo inferior y el reborde pupilar con gonioscopia en busca de restos corticales retenidos (Lens-particle glaucoma).',
    highYieldPearl: 'Glaucomas Facogénicos Board Pearl: En Facolítico la cápsula está ÍNTEGRA y la cámara es PROFUNDA (obstrucción por macrófagos y proteínas HMW). En Facomórfico la cámara es PLANA por cristalino intumescente. El tratamiento definitivo curativo en ambos es la EXTRACCIÓN DEL CRISTALINO.',
    keyDrugs: [
      { name: 'Manitol al 20% IV', dose: '1.5 a 2.0 g/kg infusión rápida', warning: 'Descompresión preoperatoria obligada antes de entrar al quirófano.' },
      { name: 'Prednisolona acetato 1%', dose: '1 gota cada hora en fase aguda', warning: 'Control de la inflamación trabecular y de cámara anterior.' },
      { name: 'Azul de Tripán 0.06%', dose: '0.2 mL intracameral intraoperatorio', warning: 'Visualización de la cápsula anterior frágil en cataratas morganianas.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Facolítico vs Facomórfico (Diferenciación de Examen)',
        category: 'Asociación Patognomónica',
        description: '• Facolítico: Cámara anterior PROFUNDA, ángulo abierto, cápsula intacta, proteínas HMW y macrófagos en trabécula.\n• Facomórfico: Cámara anterior ESTRECHA O PLANA, ángulo cerrado, catarata hinchada intumescente con bloqueo pupilar secundario.',
        trapToAvoid: 'Creer que en el glaucoma facolítico la cápsula está rota; la fuga proteica ocurre a través de una cápsula macroscópicamente íntegra.'
      }
    ]
  },

  // =========================================================================
  // 16. HIPERTENSIÓN VENOSA EPIESCLERAL Y GLAUCOMAS ASOCIADOS
  // =========================================================================
  {
    id: 'deep-glaucoma-hipertension-venosa-epiescleral',
    title: 'Hipertensión Venosa Epiescleral: Síndrome de Sturge-Weber, Fístula Carótido-Cavernosa (FCC) y Síndrome de Descompresión Ocular',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía biofísica y neuroftalmológica sobre los glaucomas secundarios a elevación de la Presión Venosa Epiescleral (PVE): aplicación de la Ecuación de Goldmann (relación 1:1 entre elevación de PVE y PIO), etiopatogenia y manejo del Glaucoma en el Síndrome de Sturge-Weber (encefalotrigeminal con nevus flammeus en V1 y hemangioma coroideo difuso en "salsa de tomate"), Fístula Carótido-Cavernosa (FCC directa de alto flujo vs fístulas durales indirectas de bajo flujo con quemosis en cabeza de medusa y vasos epiesclerales arterializados en sacacorchos), dilatación del seno cavernoso en neuroimagen, y riesgo catastrófico de efusión coroidea masiva o hemorragia supracoroidea expulsiva intraoperatoria por descompresión brusca en cirugía filtrante.',
    definitionAndEpidemiology: 'La Presión Venosa Epiescleral normal oscila fisiológicamente entre 8 y 10 mmHg. Cuando una anomalía vascular congénita, traumática o trombótica eleva la presión venosa epiescleral por encima de este nivel, la PIO se incrementa en una proporción milímetro a milímetro de 1:1 independientemente de la resistencia trabecular intrínseca. Los dos arquetipos clínicos clásicos son el Síndrome de Sturge-Weber en pediatría y la Fístula Carótido-Cavernosa en adultos.',
    anatomyAndPathophysiology: '1. Biofísica de la Ecuación de Goldmann:\n   • PIO = (F / C) + Pe, donde Pe es la presión venosa epiescleral.\n   • La Pe representa el "lecho receptor" terminal donde drena el humor acuoso tras abandonar el canal de Schlemm a través de los canales colectores y venas acuosas de Ascher.\n   • Si la Pe aumenta a 25 mmHg (como en una fístula carótido-cavernosa), la PIO nunca podrá ser inferior a 25 mmHg, aunque la facilidad de salida trabecular (C) sea perfecta y la producción acuosa se reduzca al mínimo.\n2. Síndrome de Sturge-Weber (Angiomatosis Encefalotrigeminal):\n   • Trastorno neurocutáneo esporádico congénito causado por mutaciones somáticas en mosaico en el gen GNAQ (9q21).\n   • Mancha en vino de Oporto (Nevus flammeus cutáneo): Típicamente afecta la distribución de las ramas oftálmica (V1) y maxilar (V2) del nervio trigémino. Si el nevus involucra el párpado superior (V1), el riesgo de glaucoma ipsilateral supera el 50%.\n   • Fisiopatología Dual del Glaucoma en Sturge-Weber:\n     a) En lactantes y primera infancia: Disgenesia trabecular del ángulo similar al glaucoma congénito primario.\n     b) En niños mayores y adultos: Elevación de la presión venosa epiescleral debida a shunts arteriovenosos en el plexo epiescleral y vasos esclerales dilatados.\n   • Hemangioma Coroideo Difuso Ipsilateral: Fondo de ojo con aspecto rojizo brillante homogéneo en "salsa de tomate" (tomato ketchup fundus) que engrosa la coroides en ecografía y predispone a desprendimiento de retina seroso.\n3. Fístula Carótido-Cavernosa (FCC):\n   • Comunicación anormal entre el sistema arterial carotídeo y el seno cavernoso venoso:\n     - FCC Directa (Tipo A de Barrow): Rotura traumática o aneurismática de la arteria carótida interna en el interior del seno cavernoso; alto flujo con aumento masivo de la presión en la vena oftálmica superior.\n     - FCC Dural / Indirecta (Tipos B, C y D): Ramas meníngeas de la carótida interna o externa conectadas con el seno cavernoso; bajo flujo, típica en mujeres posmenopáusicas hipertensas.\n   • Transmisión retrógrada de alta presión venosa hacia la vena oftálmica superior y plexo venoso epiescleral -> vasos epiesclerales arterializados en "tirabuzón" o "sacacorchos", quemosis conjuntival en cabeza de medusa, proptosis pulsátil con soplo sincrónico auscultable en órbita y neuropatía óptica compresiva/glaucomatosa.',
    clinicalExamination: {
      biomicroscopy: 'Vasos epiesclerales marcadamente ingurgitados, tortuosos y dilatados en sacacorchos que no blanquean con fenilefrina tópica al 2.5%; quemosis conjuntival; sangre libre en el canal de Schlemm en gonioscopia estática y dinámica.',
      fundus: 'En Sturge-Weber: Papila excavada con fondo de ojo rojo encendido en "salsa de tomate" y asimetría de coloración con el ojo adelfo. En FCC: Tortuosidad y dilatación de venas retinianas, hemorragias intrarretinianas difusas y pulso arterial espontáneo.',
      specialSigns: '• Sangre en el Canal de Schlemm a la gonioscopia: Signo patognomónico de presión venosa epiescleral que supera a la PIO (el gradiente tensional se invierte, refluyendo sangre de las venas epiesclerales hacia la malla trabecular).\n• Soplo orbitario audible: Auscultación con campana de estetoscopio sobre la órbita cerrada en FCC directa que desaparece al comprimir la arteria carótida ipsilateral en el cuello.'
    },
    diagnosticWorkup: [
      {
        test: 'Angio-TC o Angio-Resonancia Magnética (Angio-RM) Cerebral y Orbitaria',
        findings: 'En FCC: Dilatación masiva patognomónica de la Vena Oftálmica Superior (SOV >3-4 mm), ingurgitación del seno cavernoso ipsilateral y proptosis.'
      },
      {
        test: 'Ecografía Ocular en Modo B y Doppler Orbitario',
        findings: 'Flujo venoso invertido (hacia adelante) arterializado y turbulento en la vena oftálmica superior con ecografía Doppler.'
      },
      {
        test: 'Arteriografía Cerebral por Sustracción Digital (DSA)',
        findings: 'Estándar de oro confirmatorio y terapéutico para clasificar la fístula carótido-cavernosa y guiar la embolización endovascular.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Trombosis del Seno Cavernoso', distinction: 'Cuadro séptico hiperagudo febril con proptosis bilateral rápida, parálisis de múltiples pares craneales (III, IV, V1, VI) y estado tóxico grave.' },
      { condition: 'Orbitopatía Distiroidea de Graves', distinction: 'Retracción palpebral, engrosamiento de vientres musculares con respeto tendinoso en TC y ausencia de soplo o vasos en sacacorchos.' }
    ],
    steppedManagement: {
      medical: '• En Fístula Carótido-Cavernosa: El tratamiento de elección NO es ocular, sino la EMBOLIZACIÓN ENDOVASCULAR con coils o balón por Neurorradiología Intervencionista, que resuelve la causa primaria en >90% de los casos.\n• Terapia médica ocular mientras se programa la intervención:\n  - Hipotensores que reducen la producción acuosa: Betabloqueantes (Timolol), Alfa-2 agonistas (Brimonidina), Inhibidores de Anhidrasa Carbónica (Dorzolamida, Acetazolamida).\n  - Los fármacos que aumentan la salida trabecular (Mióticos o Netarsudil) son poco eficaces porque el lecho venoso distal está hipertenso.\n  - Lubricantes y pomadas para proteger la córnea en proptosis severa.',
      surgical: '• RIESGO QUIRÚRGICO CRÍTICO EN SÍNDROME DE STURGE-WEBER:\n  - La realización de una trabeculectomía o paracentesis descompresiva rápida en un ojo con hemangioma coroideo difuso e hipertensión venosa epiescleral provoca un descenso brusco de la PIO que descompensa el gradiente intravascular transmural.\n  - Complicación Temida: EFUSIÓN SUVEAL MASIVA INMEDIATA o HEMORRAGIA SUPRACOROIDEA EXPULSIVA FULMINANTE.\n  - Medidas de Seguridad Quirúrgica Obligatorias:\n    1) Pre-colocar esclerostomías posteriores de drenaje profiláctico (esclerotomías supracoroideas radiales a 4 mm del limbo) antes de abrir la cámara anterior.\n    2) Mantener la cámara anterior presurizada continuamente con infusión continua o viscoelástico cohesivo.\n    3) Evitar cualquier descompresión tensional súbita.'
    },
    clinicalApplicationPractical: '1. Lactante con mancha en vino de Oporto facial: Si la mancha compromete el párpado superior (rama V1 del trigémino), el riesgo de glaucoma ipsilateral es superior al 50%; programar revisión oftalmológica inmediata con medición de diámetro corneal y PIO.\n2. Varón tras traumatismo craneoencefálico con ojo rojo, quemosis y vaso en sacacorchos: NUNCA tratar como conjuntivitis; auscultar la órbita con estetoscopio: si escucha un soplo pulsátil sincrónico con el pulso cardíaco, solicitar Angio-TC urgente por sospecha de Fístula Carótido-Cavernosa.\n3. Sangre en el canal de Schlemm en gonioscopia: Si se observa una línea roja de sangre refluida en 360 grados sin que el examinador esté presionando excesivamente la lente, sospechar siempre hipertensión venosa epiescleral (Sturge-Weber o fístula vascular dural).',
    highYieldPearl: 'Hipertensión Venosa Epiescleral Board Pearl: La elevación de la Pe sube la PIO milímetro a milímetro (Ecuación de Goldmann). Sturge-Weber asocia nevus flammeus en V1 y hemangioma en "salsa de tomate"; su cirugía filtrante exige máxima precaución por riesgo letal de hemorragia expulsiva. FCC produce vasos en sacacorchos y soplo orbitario.',
    keyDrugs: [
      { name: 'Timolol 0.5%', dose: '1 gota cada 12 horas', warning: 'Reduce la producción acuosa contrarrestando la presión epiescleral de salida.' },
      { name: 'Acetazolamida oral', dose: '250 mg cada 8 horas VO', warning: 'Hipotensor sistémico de apoyo en espera de embolización endovascular.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Complicaciones en la Cirugía de Sturge-Weber',
        category: 'Trampa de Tribunal',
        description: 'La descompresión brusca al penetrar la cámara anterior en un paciente con Sturge-Weber expande los vasos del hemangioma coroideo por caída de la presión extravascular -> produce Efusión Coroidea Serosa Masiva o Hemorragia Expulsiva. Exige esclerotomías posteriores de drenaje profilácticas pre-colocadas y cámara presurizada con viscoelástico.',
        trapToAvoid: 'Realizar una trabeculectomía estándar rápida sin viscoelástico ni control de presión en un paciente con síndrome de Sturge-Weber.'
      }
    ]
  },

  // =========================================================================
  // 17. GLAUCOMA POR RECESIÓN ANGULAR Y TRAUMATISMO OCULAR CONTUSO
  // =========================================================================
  {
    id: 'deep-glaucoma-recesion-angular-trauma',
    title: 'Glaucoma por Recesión Angular y Traumatismo Ocular Contuso: Patología del Esfuerzo de Cizallamiento y Gonioscopia Seriada',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía clínico-quirúrgica sobre el Glaucoma por Recesión Angular (Angle-Recession Glaucoma) secundario a trauma ocular contuso: biomecánica de la onda expansiva hidrodinámica del impacto anterior y rotura de la cara anterior del músculo ciliar entre sus fibras longitudinales y circulares, signos biomicroscópicos inmediatos y tardíos (espolón escleral blanco prominente, ensanchamiento patológico de la banda del cuerpo ciliar, iridodiálisis y ciclodiálisis), historia natural bimodal con riesgo de glaucoma tardío entre 10 y 20 años postraumatismo por endotelización y fibrosis de la malla trabecular remanente, factores predictivos de riesgo (amplitud de la recesión >180-240 grados), y algoritmo terapéutico escalonado.',
    definitionAndEpidemiology: 'La recesión angular es un desgarro mecánico de la cara anterior del cuerpo ciliar que ocurre en el 60% al 90% de los ojos que sufren un traumatismo contuso ocular cerrado no penetrante de suficiente energía (pelotazo de tenis/pádel, puñetazo, corcho de champán). Sin embargo, solo entre el 6% y 10% de los ojos con recesión angular desarrollarán un Glaucoma por Recesión Angular tardío, el cual se presenta de forma insidiosa típicamente de 10 a 20 años después del evento traumático.',
    anatomyAndPathophysiology: '1. Biomecánica del Traumatismo Contuso en el Segmento Anterior:\n   • Durante el impacto contuso anterior, el globo ocular experimenta una compresión anteroposterior brusca con una expansión ecuatorial refleja compensatoria.\n   • La compresión desplaza el humor acuoso a gran velocidad hacia la periferia del ángulo iridocorneal (onda de choque hidrostática lateral).\n   • Las fuerzas de cizallamiento desgarran la estructura más débil del ángulo: la cara anterior del músculo ciliar, separando sus fibras musculares longitudinales (que permanecen insertadas en el espolón escleral) de las fibras circulares y radiales (que se retraen posteriormente junto con la raíz del iris).\n2. Siete Lesiones Traumáticas Concurrentes del Segmento Anterior:\n   1) Recesión Angular: Desgarro entre fibras longitudinales y circulares del músculo ciliar.\n   2) Iridodiálisis: Desinserción de la raíz del iris del cuerpo ciliar.\n   3) Ciclodiálisis: Desinserción de las fibras longitudinales del cuerpo ciliar del espolón escleral (comunica cámara anterior con espacio supracoroideo -> causa hipotonía severa).\n   4) Esfinterotomía traumática: Desgarros focales en el reborde pupilar con midriasis traumática permanente.\n   5) Facodonesis / Subluxación de Cristalino: Rotura de fibras de la zónula de Zinn.\n   6) Hipema: Rotura de vasos del círculo arterial mayor del iris o cuerpo ciliar.\n   7) Rotura de la Malla Trabecular (Trabecular tear).\n3. Fisiopatología Bimodal de la Hipertensión Ocular:\n   • Fase Precoz (Días a semanas): La elevación de la PIO se debe a hipema, trabeculitis traumática, edema endotelial o bloqueo por detritos eritrocitarios y pigmentarios.\n   • Fase Tardía (Meses a décadas post-trauma): La propia recesión muscular no eleva la PIO; lo que causa el glaucoma crónico tardío es el daño tisular difuso a la malla trabecular remanente contundida, que experimenta una proliferación endotelial fibrosa anormal con secreción de una membrana de colágeno aberrante (endotelización trabecular) y esclerosis hialina progresiva que oblitera los espacios cribiformes.',
    clinicalExamination: {
      biomicroscopy: 'Cámara anterior asimétrica (ligeramente más profunda en el cuadrante de la recesión), midriasis traumática irregular arreactiva en el meridiano afecto, muescas pupilares por roturas del esfínter y restos de pigmento en endotelio o cápsula cristaliniana (Anillo de Vossius: impronta de melanina pupilar en cápsula anterior del cristalino).',
      fundus: 'Excavación glaucomatosa unilateral progresiva en el ojo traumatizado; descartar en retina periférica diálisis retiniana en la ora serrata, roturas gigantes o roturas coroideas por contragolpe.',
      specialSigns: '• Espolón escleral blanco nacarado hiper-prominente en gonioscopia.\n• Ensanchamiento patológico de la banda del cuerpo ciliar: Comparar siempre con el ojo sano contralateral; la banda ciliar aparece dos a tres veces más ancha que en el resto del ángulo.\n• Anillo de Vossius: Huella circular de pigmento en la cara anterior del cristalino dejada por el choque del iris durante el traumatismo.'
    },
    diagnosticWorkup: [
      {
        test: 'Gonioscopia Dinámica de Comparación Bilateral',
        findings: 'Examen de oro confirmatorio: En el cuadrante recedido, la raíz del iris se inserta mucho más posteriormente, dejando expuesta una banda de cuerpo ciliar ancha de color grisáceo o pardo oscuro y un espolón escleral blanco brillante desprovisto de inserciones. Comparar siempre con la anatomía del ojo adelfo.'
      },
      {
        test: 'UBM (Biomicroscopía Ultrasónica de 50 MHz)',
        findings: 'Identifica la hendidura de separación en el espesor del músculo ciliar y descarta ciclodiálisis oculta.'
      },
      {
        test: 'Campimetría y OCT de CFNR periódico anual',
        findings: 'Detección precoz de daño glaucomatoso en pacientes con antecedentes de trauma contuso previo.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Ciclodiálisis Traumática', distinction: 'En ciclodiálisis la desinserción ocurre entre el espolón escleral y el músculo ciliar; la hendidura comunica con el espacio supracoroideo y el paciente presenta HIPOTONÍA profunda crónica (<5 mmHg) y maculopatía hipotónica (a diferencia de la recesión que produce PIO normal o alta).' },
      { condition: 'Ángulo Abierto Fisiológicamente Amplio (Miopía alta)', distinction: 'Banda del cuerpo ciliar ancha simétrica en 360 grados en ambos ojos sin espolón escleral hiper-prominente focal ni asimetría con el ojo contralateral.' }
    ],
    steppedManagement: {
      medical: '• Vigilancia de por vida: Todo paciente con recesión angular documentada en >180 grados debe someterse a toma de PIO y revisión de fondo de ojo ANUAL durante toda su vida (el glaucoma puede debutar 20 años después).\n• Tratamiento Médico Hipotensor:\n  - Primera línea: Análogos de prostaglandinas (aumentan la salida uveoescleral a través del músculo ciliar remanente) y Betabloqueantes tópicos (Timolol).\n  - Alfa-2 agonistas (Brimonidina) e Inhibidores de anhidrasa carbónica (Dorzolamida).\n  - ¡INSUFICIENCIA DE LA PILOCARPINA!: Los mióticos son ineficaces porque el músculo ciliar está desinsertado mecánicamente de su anclaje en el espolón escleral y no puede traccionar la malla trabecular.\n  - ¡CONTRAINDICACIÓN DE SLT/ALT!: El láser trabecular (SLT/ALT) tiene una tasa de fracaso muy alta y puede provocar picos hipertensivos reactivos severos debido a la fibrosis trabecular subyacente.',
      surgical: '• Tratamiento Quirúrgico:\n  - La Trabeculectomía con Mitomicina C (0.2-0.4 mg/mL) o los Dispositivos de Drenaje (Válvula de Ahmed o Baerveldt) son los procedimientos de elección cuando el tratamiento médico no controla la PIO.\n  - Si se realiza trabeculectomía, evitar el cuadrante de la recesión si la esclera está adelgazada.'
    },
    clinicalApplicationPractical: '1. Regla de Extensión de la Recesión Angular: Si la recesión angular abarca menos de 180 grados (<2 cuadrantes), el riesgo de desarrollar glaucoma a largo plazo es menor al 5-10%; si abarca entre 180 y 240 grados, el riesgo se eleva al 20-30%; si supera los 240 grados (>3 cuadrantes), más del 50% de los pacientes desarrollará glaucoma crónico severo.\n2. Paciente con hipema traumático agudo resuelto: Realizar gonioscopia de 4 espejos entre las 4 y 6 semanas post-traumatismo (nunca en la fase aguda por riesgo de resangrado) para documentar la extensión en grados de reloj de la recesión angular.\n3. Si detecta una asimetría de excavación papilar unilateral en un varón de 45 años sin causa aparente: Preguntar SIEMPRE si sufrió un golpe en el ojo durante la infancia o juventud y realizar gonioscopia en busca de banda ciliar ancha y espolón prominente.',
    highYieldPearl: 'Recesión Angular Board Pearl: Desgarro entre fibras longitudinales y circulares del músculo ciliar tras trauma contuso (banda ciliar ensanchada y espolón blanco prominente). El glaucoma es bimodal y suele aparecer 10 a 20 años después por endotelización trabecular. Si >180-240º, riesgo de glaucoma >50%. SLT contraindicada.',
    keyDrugs: [
      { name: 'Latanoprost 0.005%', dose: '1 gota nocturna', warning: 'Fármaco médico de primera elección al potenciar el drenaje uveoescleral.' },
      { name: 'Timolol 0.5%', dose: '1 gota cada 12 horas', warning: 'Hipotensor coadyuvante seguro.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Recesión Angular vs Ciclodiálisis',
        category: 'Asociación Patognomónica',
        description: '• Recesión Angular: Desgarro DENTRO del cuerpo ciliar (entre fibras musculares longitudinales y circulares). Causa HIPERTENSIÓN tardía (glaucoma).\n• Ciclodiálisis: Desinserción del cuerpo ciliar DEL ESPOLÓN ESCLERAL. Comunica con el espacio supracoroideo y causa HIPOTONÍA crónica profunda con maculopatía.',
        trapToAvoid: 'Confundir ciclodiálisis con recesión angular; la ciclodiálisis cursa con PIO <5 mmHg y la recesión con PIO elevada.'
      }
    ]
  },

  // =========================================================================
  // 18. SÍNDROME ISQUÉMICO OCULAR Y GLAUCOMA POST-VITRECTOMÍA
  // =========================================================================
  {
    id: 'deep-glaucoma-sindrome-isquemico-ocular',
    title: 'Síndrome Isquémico Ocular (OIS), Estenosis Carotídea y Glaucoma Neovascular Post-Vitrectomía',
    subspecialtyId: 'glaucoma',
    summary: 'Monografía clínico-vascular avanzada sobre la hipoperfusión ocular crónica y el glaucoma neovascular de origen vascular y quirúrgico: 1) Síndrome Isquémico Ocular (OIS) por estenosis crítica (>90%) u oclusión de la arteria carótida común o interna ipsilateral (o arteritis de células gigantes); 2) La "Paradoja Tensional" del OIS: presencia de rubeosis iridis activa con PIO normal o falsamente baja (debida a isquemia del epitelio ciliar productor de humor acuoso) y su descompensación fulminante con picos de PIO extrema (>50 mmHg) tras la revascularización carotídea (endarterectomía o stent carotídeo); 3) Glaucoma Neovascular Post-Vitrectomía: aceleración de la difusión de VEGF y aumento del aclaramiento de oxígeno tras vitrectomía pars plana y lensectomía en ojos diabéticos; y 4) Protocolo multidisciplinario de neurovascular, Eco-Doppler de troncos supraaórticos, anti-VEGF intraocular y cirugía filtrante valvulada protegida.',
    definitionAndEpidemiology: 'El Síndrome Isquémico Ocular (OIS) es la constelación de signos y síntomas oculares que resultan de una hipoperfusión arterial crónica severa de todo el globo ocular, secundaria a una estenosis carotídea ipsilateral mayor al 90% en la gran mayoría de los casos. Afecta principalmente a varones mayores de 60 años con enfermedad ateroesclerótica sistémica grave (mortalidad a 5 años del 40% por infarto agudo de miocardio o ictus). El glaucoma neovascular secundario a vitrectomía representa una complicación angiogénica acelerada en retinopatías isquémicas graves.',
    anatomyAndPathophysiology: '1. Hemodinámica de la Hipoperfusión Carotídea:\n   • La arteria oftálmica es la primera rama intracraneal principal de la arteria carótida interna.\n   • Cuando la luz de la carótida interna o común se reduce en más del 90%, la presión de perfusión en la arteria oftálmica y en la arteria central de la retina y arterias ciliares posteriores se reduce en más del 50%.\n   • Isquemia Panocular Global: Afecta tanto al segmento posterior (retina y coroides) como al segmento anterior (cuerpo ciliar e iris).\n2. La Paradoja Tensional de la Rubeosis Isquémica:\n   • La isquemia retiniana crónica induce una síntesis continua de VEGF que migra al segmento anterior, provocando neovascularización activa del iris (rubeosis iridis) y proliferación de membrana fibrovascular en el ángulo iridocorneal.\n   • Sin embargo, en el 50% de los pacientes con OIS la PIO inicial es NORMAL O BAJA (<15 mmHg) a pesar de tener un ángulo parcialmente cerrado por sinequias. Razón biológica: La isquemia severa concurrente del cuerpo ciliar paraliza las bombas Na+/K+ ATPasa del epitelio ciliar no pigmentado, abatiendo la producción de humor acuoso.\n   • La Trampa Quirúrgica de la Endarterectomía Carotídea: Tras una endarterectomía o colocación de stent carotídeo exitoso, se restablece bruscamente el flujo sanguíneo ciliar; el cuerpo ciliar recupera su capacidad secretora normal en 24-72 horas, pero como la malla trabecular estaba previamente destruida por la membrana fibrovascular, la PIO se dispara de golpe a cifras catastróficas de 50 a 65 mmHg.\n3. Fisiopatología del Glaucoma Neovascular Post-Vitrectomía:\n   • El gel vítreo normal actúa como una barrera difusional viscosa y un reservorio que consume oxígeno.\n   • Al realizar vitrectomía pars plana (y especialmente si se combina con lensectomía o extracción de cristalino sin saco), se elimina la barrera vitreocristaliniana:\n     a) El VEGF sintetizado en la retina isquémica se difunde con extrema rapidez hacia la cámara anterior por corrientes de convección libres en el humor acuoso líquido.\n     b) La presión parcial de oxígeno en el segmento anterior se altera, induciendo una rubeosis iridis hiperaguda y agresiva en las primeras 2 a 6 semanas postoperatorias en pacientes diabéticos.',
    clinicalExamination: {
      biomicroscopy: 'Cámara anterior con celularidad y flare leve crónico ("uveítis isquémica" refractaria a corticoides), microneovasos desordenados en reborde pupilar y superficie del iris sin edema corneal prominente si la PIO es baja; midriasis media perezosa.',
      fundus: 'Signos cardinales en polo posterior:\n1) Hemorragias intrarretinianas redondeadas en mancha en la media periferia (respetando relativamente el polo posterior en fases precoces);\n2) Microaneurismas y dilatación de venas retinianas SIN tortuosidad marcada (a diferencia de la oclusión de vena central donde las venas están muy tortuosas y las hemorragias son en llamarada de 360º);\n3) Pulsación espontánea de las arterias retinianas o provocable con mínima presión digital sobre el globo ocular (signo de presión de perfusión ocular críticamente baja).',
      specialSigns: '• Amaurosis Fugaz Inducida por Luz (Light-induced amaurosis): Pérdida visual transitoria indolora de segundos o minutos al pasar de la penumbra a la luz solar brillante (incapacidad de la retina isquémica para resintetizar fotopigmentos visuales con flujo arterial insuficiente).\n• Dolor Ocular Isquémico (Ocular Angina): Dolor sordo periorbitario y hemicraneal profundo que empeora de pie y alivia al acostarse.'
    },
    diagnosticWorkup: [
      {
        test: 'Eco-Doppler de Troncos Supraaórticos y Carotídeo Bilateral',
        findings: 'Examen de primera línea urgente: Identifica estenosis >90% u oclusión completa de la arteria carótida interna o común ipsilateral con flujo diastólico invertido o ausente.'
      },
      {
        test: 'Angiografía Fluoresceínica Retiniana (FAG)',
        findings: 'Tiempo de llenado arteriovenoso masivamente prolongado (>20-30 segundos; normal <11 s), retraso marcado en el llenado de la coriocapilar en parches e hiperfluorescencia de vasos por escape difuso.'
      },
      {
        test: 'Angio-TC de Vasos de Cuello y Polígono de Willis / Angio-RM',
        findings: 'Evaluación anatómica prequirúrgica vascular cerebral.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Oclusión No Isquémica de Vena Central de la Retina (OVCR)', distinction: 'En OVCR las venas están sumamente tortuosas e ingurgitadas, las hemorragias son en llamarada confluentes en polo posterior, el llenado coroideo en FAG es normal y la PIO suele ser normal o alta desde el inicio.' },
      { condition: 'Retinopatía Diabética Proliferativa Asimétrica', distinction: 'En diabetes los hallazgos son habitualmente bilaterales y simétricos; si un paciente diabético presenta retinopatía severa y rubeosis en un solo ojo con el otro ojo sano, descartar SIEMPRE estenosis carotídea homolateral agregada.' },
      { condition: 'Arteritis de Células Gigantes (ACG)', distinction: 'Puede causar isquemia ocular severa con VSG y PCR masivamente elevadas en mayores de 70 años; descartar siempre con analítica urgente.' }
    ],
    steppedManagement: {
      medical: '• Abordaje Médico Sistémico Multidisciplinario Urgente:\n  - Derivación inmediata a Cirugía Vascular y Neurología Vascular para desobstrucción carotídea (endarterectomía o angioplastia con stent), que es el tratamiento etiológico definitivo y previene un ictus isquémico letal.\n  - Antiagregación plaquetaria (Aspirina 100 mg/día) y estatinas a dosis altas.\n• Manejo Ocular de la Rubeosis y el Glaucoma:\n  - Anti-VEGF Intravítreo (Bevacizumab, Aflibercept) de rescate precoz: Para inducir la involución de los neovasos iridianos y angulares antes de que cierren irreversiblemente el ángulo con sinequias.\n  - Panfotocoagulación Retiniana con Láser (PRP): En la retina periférica isquémica accesible para yugular el estímulo angiogénico.\n  - Control estricto de la PIO con hipotensores tópicos (Betabloqueantes, Alfa-2 agonistas, IAC). Evitar análogos de prostaglandinas por inflamación.',
      surgical: '• Manejo de la Descompensación Post-Endarterectomía:\n  - Advertir al paciente y equipo vascular: Tras la cirugía carotínea, monitorizar la PIO a las 24, 48 y 72 horas por el riesgo de pico hipertensivo agudo (>50 mmHg) al reactivarse el epitelio ciliar.\n  - Si se establece un glaucoma neovascular sinequial refractario: Implante de Dispositivo de Drenaje Valvulado (Válvula de Ahmed) con Anti-VEGF preoperatorio.'
    },
    clinicalApplicationPractical: '1. Paciente mayor con rubeosis de iris pero con PIO de 11 mmHg: NUNCA asumir que el paciente está fuera de peligro; sospechar inmediatamente Síndrome Isquémico Ocular por estenosis carotídea >90% (el epitelio ciliar está en isquemia y no produce acuoso). Solicitar Eco-Doppler carotídeo urgente.\n2. Diabético con retinopatía proliferativa muy asimétrica: Si un ojo tiene proliferación severa y rubeosis y el otro ojo apenas tiene microaneurismas, existe una estenosis carotídea hemodinámica en el ojo afecto hasta demostrar lo contrario.\n3. Ojo post-vitrectomía que desarrolla rubeosis fulminante a las 3 semanas: El aclaramiento acelerado de VEGF sin vítreo exige inyección inmediata de Anti-VEGF y completar la panfotocoagulación láser periférica con lámpara de hendidura o sonda de endoláser en quirófano.',
    highYieldPearl: 'Síndrome Isquémico Ocular Board Pearl: Estenosis carotídea >90%. Paradoja: Rubeosis iridis con PIO normal o baja por isquemia del cuerpo ciliar; tras la endarterectomía carotídea, la PIO se dispara masivamente al reanudarse la secreción acuosa. Solicitar Eco-Doppler carotídeo urgente.',
    keyDrugs: [
      { name: 'Aflibercept / Bevacizumab intravítreo', dose: '2 mg / 1.25 mg inyección urgente', warning: 'Secado temporal rápido de la neovascularización iridiana activa.' },
      { name: 'Brimonidina 0.15% + Timolol 0.5%', dose: '1 gota cada 12 horas', warning: 'Tratamiento hipotensor protector sin inducir inflamación uveal.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'La Paradoja Tensional del Síndrome Isquémico Ocular',
        category: 'Asociación Patognomónica',
        description: 'La presencia de neovasos de iris (rubeosis) con PIO normal o baja (<15 mmHg) es patognomónica del Síndrome Isquémico Ocular. La endarterectomía restaura la perfusión ciliar y provoca un pico tensional hiperagudo en las primeras 48 horas.',
        trapToAvoid: 'Descartar glaucoma neovascular en un paciente con rubeosis iridis porque su PIO actual sea de 12 mmHg.'
      }
    ]
  },

  {
  id: "deep-glaucoma-presion-normal-red-flags",
  title: "Glaucoma de Presión Normal (GPN): Ensayo CNTGS, Factores Vasculares y Banderas Rojas (\"Red Flags\") para Neuroimagen",
  subspecialtyId: "glaucoma",
  summary: "Monografía clínico-diagnóstica sobre el Glaucoma de Presión Normal (GPN): daño neuropático progresivo de la cabeza del nervio óptico y defectos campimétricos típicos con PIO basal estadísticamente normal (<=21 mmHg medida por aplanación en curva tensional diurna), evidencia del Collaborative Normal-Tension Glaucoma Study (CNTGS: reducción del 30% frena progresión), factores de riesgo vasculares sistémicos independientes de la PIO (fenómeno de Raynaud, migraña, síndrome de apnea obstructiva del sueño [SAOS], caídas nocturnas de presión arterial diastólica o \"nocturnal over-dipping\" por antihipertensivos orales nocturnos, hipotensión ortostática), mayor frecuencia de hemorragias de disco en astilla (hemorragias de Drance) y escotomas paracentrales profundos cercanos a la fijación, y el algoritmo crítico de \"Red Flags\" que obligan a neuroimagen (Resonancia Magnética cerebral y de órbitas) para descartar compresión quiasmática o retrobulbar por meningiomas o adenomas hipofisarios.",
  definitionAndEpidemiology: "El Glaucoma de Presión Normal (GPN) es un subtipo de GPAA caracterizado por excavación glaucomatosa progresiva con defectos en la capa de fibras nerviosas y campo visual correspondiente, en presencia de un ángulo iridocorneal abierto y una PIO que nunca supera los 21 mmHg en múltiples mediciones (incluyendo curva horaria de 24 horas y paquimetría normal). Representa del 30% al 50% de los glaucomas primarios en poblaciones caucásicas y hasta el 70-80% en poblaciones de Asia Oriental (especialmente Japón y Corea). Es más prevalente en mujeres y ancianos.",
  anatomyAndPathophysiology: "1. Hipoperfusión y Disrregulación Vascular de la Cabeza del Nervio Óptico:\n   • En el GPN, la lámina cribosa es particularmente susceptible al daño incluso a niveles de PIO fisiológicos (\"PIO estadísticamente normal pero biológicamente intolerable\").\n   • Falla de la autorregulación vascular en las arteriolas ciliares posteriores cortas que nutren la cabeza del nervio óptico.\n   • Síndrome de Disrregulación Vascular Primaria (Síndrome de Flammer): Predisposición a vasoespasmo periférico (manos frías, acrocianosis, Raynaud, migrañas con aura).\n   • Nocturnal Over-Dipping: Descenso fisiológico excesivo de la presión arterial diastólica (>20% durante el sueño) o inducido por medicación antihipertensiva administrada por la noche, reduciendo críticamente la Presión de Perfusión Ocular Diastólica (PPOD = PAD - PIO; niveles <50 mmHg duplican la progresión glaucomatosa).\n   • Síndrome de Apnea-Hipoapnea Obstructiva del Sueño (SAOS): Episodios repetidos de hipoxemia nocturna, hipercapnia e incremento transitorio de la presión venosa intracraneal.\n2. Evidencia Landmark del Ensayo CNTGS (Collaborative Normal-Tension Glaucoma Study):\n   • Demostró que reducir la PIO basal en al menos un 30% (mediante colirios, láser o cirugía filtrante) disminuye significativamente la tasa de progresión del campo visual del 35% al 12% a los 5 años.\n   • Sin embargo, un subgrupo de pacientes progresó a pesar de la reducción tensional, confirmando la existencia de factores no dependientes de la PIO.\n3. Presión del Líquido Cefalorraquídeo (LCR) y Gradiente Translaminar:\n   • Se ha postulado una presión del LCR anormalmente baja en el espacio subaracnoideo retrobulbar en pacientes con GPN, lo que incrementa el gradiente de presión a través de la lámina cribosa (PIO - Presión retrobulbar del LCR).",
  clinicalExamination: {
    biomicroscopy: "Cámara anterior profunda, córnea transparente, sin pseudoexfoliación ni dispersión pigmentaria, ángulo grado III-IV de Shaffer sin sinequias ni hiperpigmentación patológica.",
    fundus: "1) Excavación amplia con pérdida focal del anillo neurorretiniano típicamente en los polos inferotemporal y superotemporal;\n2) Gran prevalencia de Hemorragias de Disco (Hemorragias de Drance): pequeñas hemorragias lineales en astilla que cruzan el margen escleral del disco, asociadas a progresión activa inminente del escotoma;\n3) Frecuente presencia de atrofia peripapilar beta extensa (atrofia coriorretiniana peripapilar con esclerótica visible);\n4) Escotomas campimétricos más empinados y focales cercanos al punto de fijación (escotomas paracentrales) a diferencia del GPAA donde inician como escalones nasales periféricos.",
    specialSigns: "• Disociación Anillo-Excavación (\"Palidez > Excavación\"): Signo de alarma cardinal. En el glaucoma típico, la excavación aumenta pero el anillo remanente mantiene su color rosado y sano. Si el anillo está pálido o lechoso, NO es glaucoma; es una neuropatía óptica compresiva, isquémica o inflamatoria.\n• Respeto del meridiano vertical en campo visual: Sugiere defecto quiasmático (hemianopsia bitemporal) y no glaucomatoso (que respeta el rafe horizontal)."
  },
  diagnosticWorkup: [
    {
      test: "Curva Tensional Diurna y Paquimetría Corneal Central (CCT)",
      findings: "Toma horaria de PIO (8 am a 6 pm) para descartar picos hipertensivos matutinos ocultos. Paquimetría central obligada: descartar córnea ultrafina (<500 µm) que subestime falsamente la PIO de Goldmann."
    },
    {
      test: "Monitorización Ambulatoria de la Presión Arterial (MAPA de 24 horas)",
      findings: "Detección de caídas nocturnas pronunciadas de presión arterial diastólica (nocturnal dips <50-55 mmHg) asociadas a toma nocturna de fármacos antihipertensivos sistémicos."
    },
    {
      test: "Polisomnografía Nocturna (Sospecha de SAOS)",
      findings: "Índice de apnea-hipoapnea (IAH) >15 eventos/hora que induce hipoxia retiniana nocturna."
    },
    {
      test: "Resonancia Magnética Cerebral y Orbitaria con Contraste (Criterios de \"Red Flags\")",
      findings: "Exclusión mandatoria de lesiones compresivas de vía óptica (adenoma hipofisario, craneofaringioma, meningioma del tubérculo selar o del ala esfenoidal, aneurismas carotídeos)."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Neuropatía Óptica Compresiva (Meningioma / Adenoma Hipofisario)",
      distinction: "Palidez del anillo papilar desproporcionada a la excavación, defecto que respeta el meridiano vertical en campimetría, alteración precoz de visión cromática (test de Farnsworth/Ishihara alterado) y edad <50 años."
    },
    {
      condition: "Neuropatía Óptica Isquémica Anterior No Arterítica (NOIANA) Antigua",
      distinction: "Inicio súbito con pérdida visual aguda indolora, defecto altitudinal inferior neto en campo visual, antecedente de edema de papila que resolvió dejando atrofia sectorial no excavada."
    },
    {
      condition: "Falso GPN por Córnea Muy Delgada (CCT <480 µm)",
      distinction: "Al medir con tonometría de Goldmann la PIO aparenta ser 17 mmHg pero la PIO intrínseca real corregida biomecánicamente supera los 24 mmHg."
    }
  ],
  steppedManagement: {
    medical: "• Metas Tensionales estandarizadas según el ensayo CNTGS:\n  - Reducción agresiva de la PIO en un 30% a 40% respecto a la basal (PIO meta habitual: 10 a 12 mmHg).\n  - Fármacos de Primera Línea: Análogos de Prostaglandinas (Latanoprost, Bimatoprost, Tafluprost) por su excelente eficacia hipotensora de 24 horas y mantenimiento del flujo sanguíneo peripapilar.\n  - Brimonidina 0.15% o 0.2%: En el ensayo Low-Pressure Glaucoma Study (LoGTS), la brimonidina mostró menor tasa de progresión visual que el timolol para igual reducción de PIO (propiedad neuroprotectora).\n  - ¡PRECAUCIÓN CON BETABLOQUEANTES SISTÉMICOS Y TÓPICOS!: Evitar timolol nocturno porque induce bradicardia nocturna y amplifica el nocturnal dipping diastólico.\n• Manejo Sistémico de los Factores de Riesgo:\n  - Coordinar con Cardiología/Medicina Interna para trasladar la toma de antihipertensivos sistémicos a la mañana (evitar dosis nocturnas).\n  - Manejo del SAOS con CPAP nocturno (advertir que el CPAP puede elevar transitoriamente la PIO unos 2-3 mmHg pero el beneficio de oxigenación cerebral es superior).\n  - Suplementación con Ginkgo biloba (120 mg/día) o Citicolina para optimizar microcirculación.",
    surgical: "• Si progresa a pesar de terapia médica máxima o con PIO meta no alcanzada:\n  - Trabeculoplastia Láser Selectiva (SLT): Efectiva para reducir 2-4 mmHg adicionales.\n  - Trabeculectomía con Mitomicina C (MMC a dosis plena 0.2-0.4 mg/mL por 2-3 minutos): Es la única intervención quirúrgica capaz de alcanzar de forma consistente una PIO ultra-baja en el rango de 8 a 11 mmHg requerida para frenar la pérdida en GPN avanzado."
  },
  clinicalApplicationPractical: "1. PROTOCOLO OBLIGADO DE BANDERAS ROJAS (\"RED FLAGS\") PARA RM URGENTE:\n   - Palidez del reborde neuroretiniano desproporcionada con respecto a la excavación (\"palidez > excavación\").\n   - Defecto de campo visual que respeta estrictamente la línea media vertical (afectación quiasmática/retroquiasmática).\n   - Paciente menor de 50 años.\n   - Pérdida acelerada de agudeza visual central o rápida progresión campimétrica no concordante con la PIO.\n   - Defecto Pupilar Aferente Relativo (DPAR) unilateral marcado con fondo de ojo aparentemente simétrico.\n   - Alteración temprana y grave de la visión en color (desaturación del rojo).\n   - Cefalea no explicada o síntomas endocrinológicos (galactorrea, amenorrea, disfunción eréctil por prolactinoma).\n2. Si detecta una Hemorragia de Drance en el disco: Programe campo visual y OCT macular en 2-3 meses; la hemorragia precede en 6 meses al colapso del anillo y progresión del escotoma.",
  highYieldPearl: "GPN Board Pearl: Ensayo CNTGS (reducir 30% la PIO frena progresión). Hemorragias de Drance y escotomas paracentrales frecuentes. La disociación \"palidez mayor que excavación\" o respeto del meridiano vertical NO es glaucoma: es un tumor compresivo hasta demostrar lo contrario en RM.",
  keyDrugs: [
    {
      name: "Bimatoprost 0.01% / Tafluprost 0.0015%",
      dose: "1 gota cada noche a las 21:00h",
      warning: "Fármaco de elección para lograr PIO meta <=11 mmHg sin efecto cardiodepresor nocturno."
    },
    {
      name: "Brimonidina 0.15% o 0.2%",
      dose: "1 gota cada 12 horas",
      warning: "Ensayo LoGTS demostró neuroprotección superior a timolol en GPN."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Criterios de \"Red Flags\" y Ensayo CNTGS",
      category: "Trampa de Tribunal",
      description: "Nunca diagnosticar GPN si el anillo está pálido: el glaucoma produce excavación con anillo rosado, mientras que los tumores compresivos producen palidez sin excavación profunda. El ensayo landmark CNTGS demostró que reducir un 30% la PIO frena la progresión campimétrica.",
      trapToAvoid: "Iniciar colirios y dar el alta por \"GPN\" a un paciente de 42 años con palidez temporal de papila y defecto bitemporal superior sin solicitar Resonancia Magnética."
    }
  ]
},

  {
  id: "deep-glaucoma-complicaciones-filtrantes-manejo",
  title: "Complicaciones Postquirúrgicas de Cirugías Filtrantes (Trabeculectomía y Tubos): Hipotonía, Fuga de Ampolla, Blebitis y Falla de Ampolla",
  subspecialtyId: "glaucoma",
  summary: "Monografía quirúrgica de alta complejidad sobre el espectro de complicaciones tempranas y tardías de la cirugía filtrante convencional (Trabeculectomía con MMC) y dispositivos de drenaje: 1) Hipotonía Postoperatoria Extrema (PIO <6 mmHg) y Maculopatía Hipotónica (pliegues coriorretinianos estriados en polo posterior, edema de papila y pérdida de agudeza visual central); 2) Grados de Atalamia de Spaeth y diferenciación entre desprendimiento coroideo seroso (efusión cilio-coroidea) y hemorragia supracoroidea expulsiva tardía; 3) Fuga de Ampolla (Bleb Leak con prueba de Seidel positiva temprana vs tardía por avascularidad isquémica inducida por mitomicina) y su manejo escalonado (lentes terapéuticas de gran diámetro, pegamento de fibrina autóloga, parche conjuntival de avance); 4) El espectro infeccioso de la ampolla: Blebitis (infección circunscrita a la ampolla sin vitritis) frente a Endoftalmitis asociada a ampolla (infección intraocular fulminante por Streptococcus y Moraxella) y su protocolo de punción vítrea y antibióticos intravítreos inmediatos; y 5) Manejo de la ampolla enquistada (Tenon Cyst) y falla cicatrizal mediante Needling con 5-Fluorouracilo (5-FU) o Mitomicina C (MMC).",
  definitionAndEpidemiology: "Las complicaciones post-trabeculectomía abarcan eventos amenazantes para la función visual en el postoperatorio inmediato (hipotonía, atalamia, hemorragia coroidea) y a largo plazo (fuga tardía, blebitis y endoftalmitis). El uso sistemático de antimetabolitos intraoperatorios (MMC y 5-FU) redujo drásticamente el fracaso por cicatrización pero incrementó la incidencia de ampollas avasculares delgadas, con un riesgo acumulado de infección de ampolla del 1-2% por año de por vida.",
  anatomyAndPathophysiology: "1. Fisiopatología de la Hipotonía y la Maculopatía Hipotónica:\n   • La PIO normal mantiene la tensión parietal del globo ocular.\n   • Cuando la PIO cae por debajo de 5-6 mmHg, la esclerótica se colapsa hacia adentro; como la coroides y la retina sensorial no tienen rigidez elástica escleral, se pliegan sobre sí mismas formando pliegues concéntricos radiados desde el polo posterior y la fóvea (pliegues coriorretinianos).\n   • La hipotonía persistente genera congestión venosa papilar (papiledema hipotónico) y disfunción de fotorreceptores.\n2. Clasificación de la Atalamia Postoperatoria según Spaeth:\n   • Grado 1: Aplanamiento periférico con contacto iridocorneal periférico, pero cámara anterior central bien formada con separación clara entre endotelio y cristalino.\n   • Grado 2: Contacto iridocorneal que se extiende hasta el borde pupilar; el cristalino o LIO no tocan la córnea.\n   • Grado 3: Aplanamiento axial total (atalamia completa); contacto endotelial corneal directo con el cristalino, háptica del LIO o cara vítrea anterior. Riesgo inminente de descompensación endotelial irreversible y catarata en 24-48 horas.\n3. Mecánica de la Fuga de Ampolla (Bleb Leak):\n   • Temprana (días 1 a 14): Por desgarro conjuntival limbar, falla de sutura o tensión excesiva en la herida.\n   • Tardía (meses o años): Por necrosis y adelgazamiento isquémico de la pared conjuntival inducida por toxicidad directa de la MMC sobre los fibroblastos y vasos episclerales (ampolla en \"papel de fumar\" o \"porcelana\"), permitiendo microperforaciones y paso libre de bacterias conjuntivales al interior del ojo.\n4. Espectro Infeccioso: Blebitis vs Endoftalmitis:\n   • Blebitis: Microabsceso purulento blanquecino localizado en la cavidad de la ampolla (nivel de hipopión dentro de la ampolla) con cámara anterior clara o flare leve y VÍTREO COMPLETAMENTE CLARO.\n   • Endoftalmitis asociada a ampolla: Extensión bacteriana transmural al segmento anterior y posterior con hipopión en cámara anterior, vitritis densa, pérdida del reflejo rojo y dolor ocular intolerable. Microorganismos altamente agresivos: Streptococcus pneumoniae, Haemophilus influenzae y bacilos Gram negativos.",
  clinicalExamination: {
    biomicroscopy: "• En Maculopatía Hipotónica: PIO <=5 mmHg, cámara anterior estrecha o formada, edema de córnea en pliegues de Descemet.\n• En Fuga de Ampolla: Prueba de Seidel positiva bajo tinción de fluoresceína al 2% con luz azul cobalto (el humor acuoso transparente diluye y lava la fluoresceína concentrada, produciendo una corriente de flujo verde brillante que desciende desde la ampolla).\n• En Blebitis: Ampolla lechosa, infiltrado blancoamarillento focal circunscrito (\"apariencia de huevo frito\"), inyección ciliar periquerática violácea marcada, reflejo vítreo normal.\n• En Endoftalmitis: Ampolla purulenta, hipopión en cámara anterior, turbidez vítrea masiva con pérdida de detalles de fondo de ojo.",
    fundus: "Pliegues retinianos y coroideos corrugados horizontales y oblicuos en mácula (\"signo del código de barras\" en OCT), edema papilar hiperémico, tortuosidad de vasos retinianos.",
    specialSigns: "• Maniobra de Seidel Provocada: Si la prueba de Seidel espontánea es dudosa, aplicar una presión digital suave sobre el párpado inferior; si existe una microfuga oculta, el humor acuoso saldrá a chorro a través del poro de la ampolla.\n• Desprendimiento Coroideo \"en beso\" (Kissing Choroidals): Masas coroideas periféricas hiperecogénicas que contactan en la línea media del vítreo en ecografía B; indicación quirúrgica inmediata de drenaje supracoroideo."
  },
  diagnosticWorkup: [
    {
      test: "Prueba de Seidel con Fluoresceína al 2% (Tira humedecida)",
      findings: "Identificación precisa del punto de microfuga o dehiscencia de sutura en la ampolla."
    },
    {
      test: "OCT Macular de Dominio Espectral",
      findings: "Visualiza la ondulación del complejo epitelio pigmentario de la retina / membrana de Bruch y pliegues neurosensoriales característicos de la maculopatía hipotónica."
    },
    {
      test: "Ecografía Ocular en Modo B de Alta Resolución",
      findings: "Evalúa la presencia y extensión de efusiones coroideas (lobuladas lisas anecoicas) o hemorragia supracoroidea (ecos densos convexos inmóviles) y descarta vitritis en casos de blebitis dudosa."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Hiperfiltración Precoz vs Fuga de Ampolla",
      distinction: "En hiperfiltración la PIO es baja pero la prueba de Seidel es NEGATIVA y la ampolla es exuberante; en fuga, la ampolla está plana o colapsada y el Seidel es claramente POSITIVO."
    },
    {
      condition: "Blebitis vs Endoftalmitis Asociada a Ampolla",
      distinction: "La blebitis tiene fondo de ojo y vítreo respetados sin celularidad posterior; la endoftalmitis tiene vitritis densa y requiere punción vítrea urgente e inyección de vancomicina y ceftazidima."
    },
    {
      condition: "Quiste de Tenon (Ampolla Enquistada) vs Falla Cicatrizal Plana",
      distinction: "El quiste de Tenon es una elevación cupuliforme gruesa y dura con paredes hipervascularizadas y PIO elevada (semanas 3 a 8); responde a hipotensores tópicos o needling."
    }
  ],
  steppedManagement: {
    medical: "• Manejo de la Maculopatía Hipotónica / Hiperfiltración Temprana:\n  - Ciclopléjicos (Atropina 1% cada 8 horas) para relajar el diafragma y profundizar la cámara.\n  - Reducción o suspensión de corticoides tópicos (para promover una cicatrización fisiológica de la esclera).\n  - Parche compresivo ocular controlado durante 24 horas o colocación de Lente de Contacto Terapéutica de Gran Diámetro (16 a 20 mm).\n• Manejo Médico de la Fuga de Ampolla:\n  - Lente de contacto de gran diámetro + colirio de ciprofloxacino o moxifloxacino sin conservantes profiláctico.\n  - Si no cierra: Sellador de fibrina autóloga / cianoacrilato o inyección de sangre autóloga en la ampolla (2-3 mL de sangre venosa del paciente centrifugada inyectada en el espacio subconjuntival periamapollar para inducir fibrosis selladora).\n• Protocolo Urgente de Blebitis:\n  - Ingreso hospitalario inmediato.\n  - Colirios fortificados de Vancomicina (50 mg/mL) + Ceftazidima (50 mg/mL) alternados cada hora día y noche + Moxifloxacino 0.5%.\n  - Si hay la menor sospecha de compromiso vítreo: Tratar formalmente como endoftalmitis con punción/biopsia vítrea + inyección intravítrea de Vancomicina (1 mg/0.1 mL) y Ceftazidima (2.25 mg/0.1 mL) o Amikacina.",
    surgical: "• Intervenciones Invasivas:\n  - Resutura del flap escleral: Si hay atalamia Grado 3 persistente o contacto endotelial corneal con hipotonía refractaria.\n  - Drenaje de efusiones coroideas (Esclerotomías posteriores de drenaje en cuadrantes inferiores):\n    * Obligado si hay atalamia Grado 3, contacto de coroideas (\"kissing choroidals\") o sospecha de hemorragia expulsiva.\n  - Avance Conjuntival con plastia escleral o parche de pericardio/fascia lata: En fugas tardías de ampollas necróticas delgadas por MMC donde el tejido circundante es inviable.\n  - Needling (Aguja 27G o 30G) con 5-FU (5 mg) o MMC (0.02 mg) subconjuntival: Para romper septos de ampolla enquistada (Quiste de Tenon) y restaurar el flujo al espacio subconjuntival."
  },
  clinicalApplicationPractical: "1. Regla de Oro en la Ampolla Sospechosa: Toda ampolla que se observe \"lechosa\" o con pérdida de transparencia es una BLEBITIS hasta demostrar lo contrario; examine el vítreo con lámpara de hendidura y oftalmoscopio indirecto. Si el vítreo está turbio, es una ENDOFTALMITIS y requiere inyección intravítrea en menos de 2 horas.\n2. Paciente con trabeculectomía con Seidel positivo: NUNCA prescribir pomadas oftálmicas ni ungüentos (los vehículos oleosos pueden ingresar a la cámara anterior y provocar endotelitis química y bloqueo trabecular irreversible).\n3. Maculopatía Hipotónica Crónica (>1 mes): La persistencia de pliegues maculares durante más de 6-8 semanas provoca daño permanente en los fotorreceptores con fibrosis; debe intervenirse quirúrgicamente para elevar la PIO (resutura de flap o parche escleral) antes de que la pérdida visual sea irreversible.",
  highYieldPearl: "Complicaciones Filtrantes Board Pearl: Seidel positivo tardío en ampolla avascular de MMC es la puerta de entrada a Endoftalmitis por Streptococcus y Moraxella. La blebitis respeta el vítreo; si hay vitritis, requiere punción e inyección intravítrea de vancomicina + ceftazidima urgente.",
  keyDrugs: [
    {
      name: "Vancomicina fortificada colirio (50 mg/mL)",
      dose: "1 gota cada hora alternada con ceftazidima",
      warning: "Tratamiento intensivo de choque en blebitis aguda confirmada."
    },
    {
      name: "Ceftazidima fortificada colirio (50 mg/mL)",
      dose: "1 gota cada hora alternada con vancomicina",
      warning: "Cobertura esencial para bacilos gramnegativos como Pseudomonas en infecciones de ampolla."
    },
    {
      name: "Atropina 1% colirio",
      dose: "1 gota cada 8 horas",
      warning: "Profundiza la cámara anterior y rota el diafragma ciliar en hipotonía y atalamia."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Manejo Diferencial: Blebitis vs Endoftalmitis",
      category: "Pregunta Clásica",
      description: "La presencia de celularidad vítrea es el criterio absoluto de separación entre blebitis (tratamiento tópico intensivo fortificado) y endoftalmitis asociada a ampolla (punción vítrea e inyección intravítrea inmediata de antibióticos).",
      trapToAvoid: "Dar antibióticos orales ambulatorios a un paciente con ampolla lechosa y Seidel positivo sin evaluar el polo posterior en midriasis."
    }
  ]
},

  {
  id: "deep-glaucoma-embarazo-y-lactancia",
  title: "Manejo del Glaucoma en el Embarazo y la Lactancia: Fisiología de la PIO Gestacional, Teratogenicidad y Seguridad Farmacológica",
  subspecialtyId: "glaucoma",
  summary: "Monografía clínico-farmacológica sobre el abordaje del glaucoma durante la gestación y el puerperio: 1) Cambios fisiológicos oculares en el embarazo (disminución fisiológica de la PIO de 2 a 4 mmHg en el 2º y 3º trimestre mediada por aumento de progesterona, relaxina y mejor conductancia trabecular); 2) Perfil de seguridad y teratogenicidad FDA de todos los hipotensores tópicos y sistémicos: Análogos de Prostaglandinas (riesgo de contracciones uterinas prematuras y desprendimiento coriodecidual), Betabloqueantes (Timolol: bajo peso al nacer, bradicardia fetal y bloqueo AV), Alfa-2 Agonistas (Brimonidina: Categoría B en gestación pero CONTRAINDICADA DE FORMA ABSOLUTA EN LACTANCIA Y RECIÉN NACIDOS por riesgo letal de apnea neonatal, depresión del SNC e hipotermia grave), Inhibidores de Anhidrasa Carbónica (Acetazolamida sistémica y tópica: categoría C, teratogénesis esquelética y acidosis metabólica neonatal); 3) Maniobra de oclusión del punto lagrimal (NLO) y cierre palpebral pasivo (reduce la absorción sistémica en más del 65%); 4) Opciones no farmacológicas de primera línea: Trabeculoplastia Láser Selectiva (SLT) antes de la concepción o en el 1er trimestre gestacional; y 5) Abordaje quirúrgico durante el embarazo sin uso de antimetabolitos (contraindicación absoluta de Mitomicina C y 5-Fluorouracilo).",
  definitionAndEpidemiology: "El manejo del glaucoma en mujeres en edad fértil, embarazadas o lactantes es un dilema terapéutico complejo que balancea la preservación del nervio óptico materno frente al riesgo potencial de teratogénesis, aborto o toxicidad neonatal por fármacos tópicos. Aunque la prevalencia del glaucoma juvenil y secundario en este grupo de edad es baja (1 en 5000 a 10000 gestantes), las decisiones farmacológicas conllevan implicaciones perinatales críticas.",
  anatomyAndPathophysiology: "1. Fisiología Ocular en la Gestante:\n   • Disminución Fisiológica de la PIO: Comienza en el primer trimestre y alcanza un descenso promedio de 2 a 4 mmHg en el tercer trimestre.\n   • Mecanismos biológicos: Aumento en las concentraciones séricas de progesterona (que compite con los receptores de glucocorticoides en la malla trabecular facilitando el drenaje), relaxina (induce remodelación del colágeno trabecular) y reducción de la presión venosa epiescleral debido a la disminución generalizada de las resistencias vasculares periféricas.\n   • Espesor Corneal Central (CCT): La córnea tiende a edematizarse y aumentar ligeramente su grosor durante el tercer trimestre por retención hídrica sistémica, lo que puede sobrestimar levemente la PIO en la tonometría.\n2. Farmacocinética y Transferencia Fetoplacentaria:\n   • Absorción Sistémica Nasofaríngea: Hasta el 80% del volumen de una gota oftálmica drena por la vía lagrimonasal hacia la mucosa nasal, absorbiéndose directamente al plexo vascular venoso sistémico sin pasar por el efecto de primer paso hepático materno.\n   • Cruce Placentario y Paso a la Leche Materna: La mayoría de los colirios son moléculas lipofílicas que cruzan libremente la barrera fetoplacentaria y se concentran de 2 a 10 veces en la leche materna en comparación con el plasma materno (especialmente betabloqueantes y brimonidina).\n3. Teratogenicidad Específica por Grupos Farmacológicos:\n   • Análogos de Prostaglandinas (Latanoprost, Bimatoprost, Travoprost - Categoría C):\n     - Mecanismo de riesgo: Estimulación de los receptores prostanoides FP del miometrio uterino, induciendo contracciones uterinas prematuras, amenaza de parto pretérmino y aborto en el primer y segundo trimestre.\n   • Betabloqueantes (Timolol - Categoría C):\n     - Cruza la placenta y se concentra intensamente en leche materna.\n     - Riesgos fetales/neonatales: Bradicardia fetal, retraso del crecimiento intrauterino (RCIU) e hipoglucemia neonatal. Puede provocar bloqueo cardíaco y colapso cardiovascular postparto inmediato.\n   • Alfa-2 Agonistas Adrenérgicos (Brimonidina - Categoría B en embarazo, ¡CATEGORÍA MORTAL EN LACTANCIA!):\n     - Aunque es categoría B durante la gestación y es el fármaco de elección en el 1er y 2º trimestre si se requiere medicación, en recién nacidos y lactantes cruza la barrera hematoencefálica inmadura provocando sedación profunda, letargia extrema, coma, bradicardia severa y APNEA NEONATAL POTENCIALMENTE FATAL.\n   • Inhibidores de la Anhidrasa Carbónica (Acetazolamida, Dorzolamida, Brinzolamida - Categoría C):\n     - Teratogénesis demostrada en roedores: focomelia y anomalías de extremidades (ectrodactilia).\n     - En fetos humanos tardíos: acidosis metabólica fetal profunda, hipopotasemia y retraso del crecimiento.\n   • Antimetabolitos Quirúrgicos (Mitomicina C y 5-Fluorouracilo):\n     - Agentes alquilantes citostáticos altamente teratogénicos y mutagénicos; ¡CONTRAINDICADOS DE FORMA ABSOLUTA EN CUALQUIER MOMENTO DEL EMBARAZO!",
  clinicalExamination: {
    biomicroscopy: "Superficie ocular con posibles signos de ojo seco gestacional por cambios hormonales; medición de PIO basal siempre corregida por variaciones de paquimetría corneal del embarazo.",
    fundus: "Evaluación estricta de la cabeza del nervio óptico con oftalmoscopia directa/indirecta y fotografía de papila (técnicas inocuas para el feto).",
    specialSigns: "• Maniobra de Oclusión del Punto Lagrimal (NLO): Compresión digital firme con el dedo índice sobre el canto interno (saco lagrimal) combinada con el cierre ocular suave durante 3 a 5 minutos tras la instilación; reduce la absorción plasmática del fármaco en un 67% y minimiza la exposición fetal."
  },
  diagnosticWorkup: [
    {
      test: "Campimetría Computarizada Humphrey y OCT de Nervio Óptico",
      findings: "Exámenes complementarios completamente seguros e inocuos en cualquier etapa del embarazo; no emiten radiación ionizante ni requieren fármacos sistémicos."
    },
    {
      test: "Interconsulta Perinatal con Obstetricia / Medicina Materno-Fetal",
      findings: "Monitorización del crecimiento fetal (ecografía Doppler obstétrica para descartar RCIU si la madre usa betabloqueantes)."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Hipertensión Ocular Inducida por Preeclampsia",
      distinction: "La preeclampsia puede cursar con edema de retina, exudados algodonosos, desprendimiento de retina seroso exudativo y edema papilar con proteinuria e hipertensión arterial sistémica materna, sin daño glaucomatoso previo."
    },
    {
      condition: "Cierre Angular por Síndrome de Vogt-Koyanagi-Harada o Desprendimiento Coroideo Uveítico en Gestantes",
      distinction: "Cámara anterior estrecha con desprendimiento retiniano seroso bulloso multifocal bilateral y celularidad vítrea."
    }
  ],
  steppedManagement: {
    medical: "• Estrategia Médica Trimestre a Trimestre:\n  1) Antes del Embarazo (Planificación Preconcepcional - ESCENARIO IDEAL):\n     - Realizar Trabeculoplastia Láser Selectiva (SLT) bilateral para suspender todos los colirios antes de la fertilización.\n  2) Primer Trimestre (Organogénesis Crítica - Semanas 1 a 12):\n     - Evitar TODOS los fármacos siempre que sea posible (fisiológicamente la PIO descenderá).\n     - Si es mandatorio tratar: La Brimonidina 0.15% o 0.2% es el fármaco de mayor seguridad relativa (Categoría B) en el 1er y 2º trimestre.\n  3) Segundo y Tercer Trimestre:\n     - Se puede usar Timolol 0.25% o 0.5% a la mínima dosis eficaz (1 gota por la mañana) con NLO estricta.\n     - ¡SUSPENDER TIMOLOL 2 A 3 DÍAS ANTES DEL PARTO! Para prevenir bradicardia e hipoglucemia neonatal severa durante el parto.\n     - ¡SUSPENDER BRIMONIDINA ANTES DEL PARTO! Por el riesgo inminente de apnea neonatal al nacer.\n  4) Durante la Lactancia Materna:\n     - ¡BRIMONIDINA ESTÁ CONTRAINDICADA DE FORMA ABSOLUTA! (Riesgo de muerte neonatal por apnea y colapso del SNC).\n     - Fármacos de elección en lactancia si se decide amamantar: Betabloqueantes a dosis baja (Betaxolol o Timolol con NLO estricta inmediatamente tras amamantar) o Análogos de Prostaglandinas (Latanoprost: baja excreción en leche, vida media plasmática de minutos).",
    surgical: "• Intervenciones Quirúrgicas en la Gestante:\n  - Trabeculoplastia Láser Selectiva (SLT): Tratamiento de elección en el 1er o 2º trimestre si la PIO está descontrolada; inocuo para el feto y no requiere anestesia general ni sedación.\n  - Si se requiere Cirugía Filtrante (Trabeculectomía o Dispositivo de Drenaje):\n    * Realizar preferentemente en el segundo trimestre.\n    * Anestesia tópica o subtenoniana con lidocaína pura sin epinefrina.\n    * ¡PROHIBICIÓN ABSOLUTA DE MITOMICINA C Y 5-FU! La trabeculectomía debe realizarse SIN antimetabolitos o utilizando implantes de drenaje (Válvula de Ahmed)."
  },
  clinicalApplicationPractical: "1. ¡ALERTA ROJA EN LACTANCIA CON BRIMONIDINA!: Si una madre en período de lactancia usa colirio de Brimonidina, el fármaco se concentra activamente en la leche materna; el lactante puede ingresar en paro respiratorio por apnea central inducida por alfa-2 agonistas. Nunca prescribir brimonidina a una madre que amamanta.\n2. Técnica de Nasolacrimal Occlusion (NLO): Enseñe y supervise a la paciente en la consulta cómo presionar el canto interno durante 3 minutos cerrando los ojos. Esta simple técnica física previene el paso del fármaco a la circulación sistémica en >65%.\n3. Suspensión de betabloqueantes pre-parto: Notifique al obstetra y al neonatólogo si la madre estuvo usando timolol; el pediatra debe monitorizar la frecuencia cardíaca y la glucemia del recién nacido en las primeras 24 horas.",
  highYieldPearl: "Glaucoma en Embarazo Board Pearl: La Brimonidina es Categoría B en el embarazo (fármaco de elección en el 1er trimestre) pero está TERMINANTEMENTE CONTRAINDICADA EN LACTANCIA Y RECIÉN NACIDOS por riesgo letal de apnea neonatal y coma. ¡MMC y 5-FU prohibidos en gestación!",
  keyDrugs: [
    {
      name: "Brimonidina 0.15% colirio",
      dose: "1 gota c/12h con NLO durante 1er-2º trimestre",
      warning: "Suspender antes del parto; CONTRAINDICADA ABSOLUTA EN LACTANCIA."
    },
    {
      name: "Timolol 0.25% colirio",
      dose: "1 gota por la mañana con NLO",
      warning: "Suspender 48-72h antes del parto para evitar bradicardia fetal."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Brimonidina en Embarazo vs Lactancia",
      category: "Trampa de Tribunal",
      description: "La brimonidina es Categoría B durante el embarazo (la más segura de los colirios en el 1er trimestre), pero se convierte en el fármaco más PELIGROSO durante la lactancia, donde está formalmente contraindicada por provocar apnea y parada cardiorrespiratoria neonatal.",
      trapToAvoid: "Continuar la brimonidina en el puerperio inmediato si la madre decide amamantar a su bebé."
    }
  ]
},

  {
  id: "deep-glaucoma-paquimetria-histeresis-biomecanica",
  title: "Paquimetría Corneal, Histéresis y Biomecánica Ocular: Ensayos OHTS, Ocular Response Analyzer (ORA), Corvis ST y la Falacia de las Fórmulas de Corrección",
  subspecialtyId: "glaucoma",
  summary: "Monografía exhaustiva sobre las propiedades biomecánicas del segmento anterior y su impacto en la evaluación del glaucoma: 1) Evidencia Landmark del Ocular Hypertension Treatment Study (OHTS): el espesor corneal central (CCT) como el factor de riesgo independiente más potente para la conversión de hipertensión ocular a glaucoma primario de ángulo abierto (córneas <555 µm multiplican por tres el riesgo frente a córneas >588 µm); 2) Limitaciones biofísicas de la Tonometría de Aplanación de Goldmann (diseñada originalmente para un CCT de 520-530 µm) y la Falacia de las Fórmulas Matemáticas de Corrección Lineal (la EGS y la AAO desaconsejan el uso de tablas de ajuste numérico fijo tipo Dresdner/Ehlers porque la elasticidad, curvatura y resistencia estromal varían individualmente); 3) Principios y física de la Histéresis Corneal (CH) y el Factor de Resistencia Corneal (CRF) mediante el Ocular Response Analyzer (ORA): concepto de absorción viscosa y amortiguación elástica tisular; 4) Correlación directa entre la biomecánica corneal y la deformabilidad de la lámina cribosa (una CH baja predice progresión glaucomatosa independiente de la PIO); y 5) Tonometría dinámica no contactante con cámara Scheimpflug de ultra-alta velocidad (Corvis ST) y parámetros de deformación corneal biomecánica.",
  definitionAndEpidemiology: "La evaluación biomecánica ocular moderna trasciende la medición estática del espesor corneal central (CCT) para cuantificar las propiedades viscoelásticas dinámicas de los tejidos conectivos oculares. El OHTS demostró de forma concluyente que el CCT delgado es un biomarcador mayor de susceptibilidad glaucomatosa. La Histéresis Corneal (CH) es un biomarcador independiente de diagnóstico y pronóstico; niveles bajos de CH (<8-9 mmHg) se correlacionan directamente con mayor riesgo de conversión a glaucoma y rápida progresión del campo visual.",
  anatomyAndPathophysiology: "1. Principio Biofísico de Goldmann y CCT:\n   • Hans Goldmann diseñó su tonómetro basándose en la Ley de Imbert-Fick, asumiendo que la córnea es una membrana esférica infinitamente delgada, perfectamente elástica y seca, donde la fuerza de tensión superficial del menisco lagrimal contrarresta exactamente la rigidez elástica de flexión corneal a un diámetro de aplanación de 3.06 mm.\n   • Goldmann calibró empíricamente su instrumento asumiendo un CCT estándar de 520 µm.\n   • Consecuencia clínica: Una córnea más gruesa resiste mecánicamente más a la aplanación, generando una PIO sobrestimada por Goldmann (falsa hipertensión ocular). Una córnea delgada ofrece menor resistencia a la flexión, arrojando una PIO subestimada por Goldmann (riesgo de no diagnosticar un glaucoma agresivo con PIO real peligrosa).\n2. Evidencia Landmark del OHTS (Ocular Hypertension Treatment Study):\n   • En pacientes con hipertensión ocular (PIO 24-32 mmHg):\n     - Sujetos con CCT <555 µm tuvieron un riesgo a 5 años del 36% de desarrollar glaucoma.\n     - Sujetos con CCT >588 µm tuvieron un riesgo de tan sólo el 6%.\n   • El CCT demostró ser un factor de riesgo independiente mucho más predictivo que la propia cifra basal de PIO.\n3. La Falacia de las Tablas y Fórmulas de Corrección de PIO:\n   • Durante años se emplearon nomogramas lineales (ej. \"sumar o restar 1 mmHg por cada 25 µm de desviación de 545 µm\").\n   • La European Glaucoma Society (EGS) y la American Academy of Ophthalmology (AAO) han PROHIBIDO el uso de estas fórmulas de corrección en guías oficiales.\n   • Motivo científico: La rigidez corneal no depende únicamente del grosor, sino de la hidratación estromal, la densidad de enlaces cruzados (cross-linking de colágeno), la curvatura corneal y la edad del paciente. Dos córneas con el mismo CCT de 510 µm pueden tener biomecánicas totalmente opuestas.\n4. Histéresis Corneal (CH) mediante ORA (Ocular Response Analyzer):\n   • El ORA emite un pulso de aire colimado bidireccional y registra dos puntos de aplanación (uno durante la deformación hacia adentro [P1] y otro durante el rebote elástico hacia afuera [P2]).\n   • Histéresis Corneal (CH = P1 - P2): Representa la capacidad del tejido corneal de disipar y amortiguar energía mecánica (viscoelasticidad).\n   • Una CH baja (<8 mmHg) refleja un tejido conectivo corneal y escleral frágil e inelástico.\n5. El Vínculo Córnea-Lámina Cribosa:\n   • La córnea y la lámina cribosa comparten el mismo origen embriológico mesenquimal y composición de colágeno fibrilar.\n   • Una baja histéresis corneal es un reflejo fidedigno de una lámina cribosa biomecánicamente débil, complaciente y susceptible de herniarse y estrangular las fibras del nervio óptico ante incrementos menores de PIO.",
  clinicalExamination: {
    biomicroscopy: "Examen de la superficie corneal; descarte de queratocono subclínico, edema corneal o antecedente de cirugía refractiva (LASIK/PRK), los cuales reducen artificialmente el CCT y la histéresis.",
    fundus: "Correlación entre el grosor de la CFNR en OCT y la histéresis; ojos con CH reducida muestran mayor frecuencia de muescas focales del anillo y hemorragias de disco.",
    specialSigns: "• Falso \"Glaucoma Normotensivo\" post-LASIK: Paciente con GPAA no diagnosticado cuya PIO de Goldmann mide 15 mmHg tras ablación miópica con láser excímer (CCT adelgazado a 440 µm). Su PIO real transescleral puede ser de 24 mmHg."
  },
  diagnosticWorkup: [
    {
      test: "Paquimetría Ultrasónica Corneal Central (CCT)",
      findings: "Estándar de referencia: Promedio de 5 a 10 disparos en el centro pupilar exacto (CCT normal promedio: 540-555 µm)."
    },
    {
      test: "Ocular Response Analyzer (ORA)",
      findings: "Medición de CH (normal: 10.5 +/- 1.5 mmHg) y PIO compensada por la córnea (IOPcc, independiente de la biomecánica)."
    },
    {
      test: "Corvis ST (Cámara Scheimpflug de ultra-alta velocidad)",
      findings: "Visualización dinámica de la deformación corneal en tiempo real (14000 fotogramas/seg) y cálculo de la PIO biomecánicamente corregida (bIOP)."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Hipertensión Ocular \"Falsa\" por Córnea Gruesa (>600 µm)",
      distinction: "PIO de Goldmann de 25 mmHg pero con CH alta (>12 mmHg), campo visual normal y OCT macular y peripapilar completamente estables a 10 años sin tratamiento."
    },
    {
      condition: "Glaucoma Primario Silente con Córnea Delgada (<500 µm)",
      distinction: "PIO de Goldmann de 18 mmHg con pérdida acelerada de CFNR; el CCT delgado subestima la PIO real."
    },
    {
      condition: "Edema Corneal Endotelial Crónico",
      distinction: "El CCT está artificialmente aumentado (>650 µm) debido a hidratación de la sustancia propia, pero paradójicamente la rigidez está disminuida y la CH es muy baja."
    }
  ],
  steppedManagement: {
    medical: "• Integración Clínica del CCT y la CH en el Algoritmo Terapéutico:\n  - CCT <555 µm en Hipertensión Ocular: Indicación formal de iniciar tratamiento hipotensor precoz según criterios OHTS (evita conversión a glaucoma).\n  - Histéresis Corneal Baja (CH <8.0 mmHg): Establecer una PIO meta mucho más estricta (reducción de al menos 35-40%), dado que estos pacientes tienen el doble de tasa de progresión campimétrica en ensayos prospectivos (Medeiros et al.).\n  - Selección Farmacológica: Los análogos de prostaglandinas han demostrado en múltiples estudios incrementar la histéresis corneal tras 3-6 meses de uso (al remodelar las metaloproteinasa de matriz estromal), ofreciendo un doble beneficio protector.",
    surgical: "• Consideraciones Quirúrgicas Biomecánicas:\n  - Pacientes con córneas delgadas o cirugías refractivas previas que requieran cirugía filtrante: El monitoreo con tonómetro de Pascal (Dynamic Contour Tonometry - DCT) o Tonometría de Rebote (iCare) ofrece mediciones menos influenciadas por el espesor corneal que el tonómetro de Goldmann."
  },
  clinicalApplicationPractical: "1. NUNCA use calculadoras de corrección de PIO para cambiar la cifra en la historia clínica: Decir \"la PIO medida fue 22 pero como el CCT es 590 la PIO corregida es 18\" es un error conceptual grave. La paquimetría debe considerarse un factor de riesgo INDEPENDIENTE cualitativo, no una resta aritmética.\n2. Paciente post-LASIK o post-PRK: La tonometría de Goldmann siempre infraestimará la PIO entre 4 y 8 mmHg por la remoción del estroma anterior de Bowman. En estos pacientes, utilice la tonometría de contorno dinámico (Pascal) o compárela con tonometría neumática compensada (IOPcc).\n3. La Histéresis Corneal (CH) es un factor predictor de progresión más potente que el CCT: Un ojo con CCT normal de 550 µm pero con CH de 7.2 mmHg tiene un riesgo muy elevado de pérdida campimétrica activa.",
  highYieldPearl: "Biomecánica Ocular Board Pearl: Ensayo OHTS demostró que CCT <555 µm triplica el riesgo de progresión a GPAA. Las fórmulas matemáticas de corrección están desaconsejadas por la EGS y AAO. La Histéresis Corneal baja (<8 mmHg) refleja vulnerabilidad de la lámina cribosa.",
  keyDrugs: [
    {
      name: "Latanoprost 0.005% colirio",
      dose: "1 gota por la noche",
      warning: "Reduce la PIO y mejora la compliance viscoelástica corneal vía estimulación de MMPs."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "La Falacia de las Fórmulas de Corrección de PIO",
      category: "Trampa de Tribunal",
      description: "La EGS y la AAO prohíben explícitamente aplicar fórmulas lineales de corrección matemática de la PIO basadas en paquimetría. El CCT y la histéresis son factores de riesgo independientes y no meros factores de calibración aritmética.",
      trapToAvoid: "Restar puntos de PIO a un paciente con córnea gruesa y concluir que no tiene glaucoma sin evaluar la excavación ni el OCT."
    }
  ]
},

  {
  id: "deep-glaucoma-dispersion-pigmentaria",
  title: "Síndrome de Dispersión Pigmentaria (SDP) y Glaucoma Pigmentario: Fisiopatología del Bloqueo Pupilar Invertido, Signos Patognomónicos y Terapia",
  subspecialtyId: "glaucoma",
  summary: "Monografía exhaustiva sobre el Síndrome de Dispersión Pigmentaria (SDP) y su evolución al Glaucoma Pigmentario: 1) Fisiopatología del Bloqueo Pupilar Invertido (Reverse Pupillary Block): gradiente anómalo de presión de la cámara anterior hacia la posterior que deprime el iris medio-periférico haciéndolo cóncavo, induciendo fricción iridozonular mecánica continua durante los movimientos de acomodación y midriasis con liberación masiva de gránulos de melanina del epitelio pigmentario del iris; 2) Epidemiología clásica: varones jóvenes (20-40 años), caucásicos, con miopía axial moderada (-2 a -6 D); 3) La Tríada Patognomónica: Huso de Krukenberg en el endotelio corneal central, Defectos radiales por transiluminación en rueda de carro en la media periferia del iris (Mid-peripheral slit-like transillumination defects) e Hiperpigmentación trabecular homogénea muy densa de 360 grados con Línea de Sampaolesi prominente; 4) Picos Hipertensivos Inducidos por Ejercicio Extenuante o Dilatación Pupilar farmacológica; 5) Fenómeno de \"Burn-Out\" senil con aclaramiento trabecular tardío; y 6) Tratamiento: papel preventivo y controversias de la Iridotomía Periférica con Láser (LPI) para revertir la concavidad del iris, eficacia de la SLT a baja energía y cirugía de ángulo.",
  definitionAndEpidemiology: "El Síndrome de Dispersión Pigmentaria (SDP) es una entidad bilateral caracterizada por el desprendimiento crónico de gránulos de pigmento del epitelio pigmentario del iris y su depósito en las estructuras del segmento anterior y la malla trabecular. Cuando la acumulación de pigmento satura la capacidad fagocítica de las células trabeculares provocando colapso trabecular y pérdida glaucomatosa del nervio óptico, se denomina Glaucoma Pigmentario (afecta al 30-50% de los pacientes con SDP a lo largo de su vida). Afecta predominantemente a varones miopes caucásicos jóvenes entre los 20 y 45 años.",
  anatomyAndPathophysiology: "1. El Mecanismo del Bloqueo Pupilar Invertido (Reverse Pupillary Block):\n   • En ojos miopes con cámaras anteriores profundas, los movimientos pupilares fisiológicos (parpadeo, acomodación) generan un mecanismo valvular unidireccional en el margen pupilar donde el humor acuoso pasa de la cámara posterior a la anterior pero no retorna con la misma velocidad.\n   • Como consecuencia, la presión en la cámara anterior se vuelve ligeramente mayor que en la posterior, forzando al iris periférico a curvarse hacia atrás (concavidad iridiana marcada).\n2. Fricción Irido-Zonular y Liberación de Gránulos:\n   • El iris posterior cóncavo contacta directamente con las zónulas anteriores del cristalino durante cada movimiento de contracción y dilatación de la pupila.\n   • Esta fricción mecánica abrasiva desgasta el epitelio pigmentario de la media periferia del iris, liberando millones de gránulos de melanina al humor acuoso.\n3. Obstrucción y Falla Trabecular:\n   • Los gránulos liberados son arrastrados por las corrientes térmicas de convección hacia el endotelio corneal (formando el huso de Krukenberg vertical) y hacia la malla trabecular.\n   • Las células endoteliales trabeculares fagocitan activamente el pigmento libre; sin embargo, al sobrecargarse, sufren degeneración citotóxica, desprendimiento de la membrana basal trabecular y apoptosis.\n   • Consecuencia: Colapso del espacio intertrabecular y esclerosis de la malla yuxtacanalicular con elevación extrema de la resistencia al drenaje acuoso.\n4. Fenómeno de Remisión Espontánea (\"Burn-Out\") en la Vejez:\n   • Con el envejecimiento (habitualmente después de los 60 años), el cristalino aumenta su diámetro anteroposterior (esclerosis nuclear fisiológica), empujando el iris hacia adelante y eliminando espontáneamente la concavidad y el contacto iridozonular.\n   • La dispersión de pigmento cesa; la malla trabecular puede revertir parcialmente su pigmentación (\"malla trabecular invertida\", más clara abajo que arriba).",
  clinicalExamination: {
    biomicroscopy: "1) Huso de Krukenberg: Depósito vertical fusiforme de gránulos de pigmento pardo-oscuro en el endotelio corneal central y paracentral inferior (orientado por las corrientes de convección térmica intraocular);\n2) Cámara anterior sumamente profunda con iris marcadamente cóncavo en media periferia;\n3) Defectos de Transiluminación Radial del Iris: Defectos en hendidura o \"en radios de rueda de bicicleta\" visibles al proyectar un haz coaxial estrecho a través de la pupila no dilatada;\n4) Línea de Scheie / Anillo de Zentmayer: Banda densa de pigmento en la cara posterior del cristalino a lo largo de la inserción de las fibras zonulares y ligamento de Wieger;\n5) Gránulos de pigmento flotando en humor acuoso tras ejercicio intenso.",
    fundus: "Gran frecuencia de degeneración en empalizada periférica (Lattice degeneration) y desprendimientos de retina regmatógenos (mayor que en la población miope general; requiere examen de fondo de ojo con indentación escleral). Excavación glaucomatosa profunda.",
    specialSigns: "• Picos Tensionales Post-Ejercicio: Paciente que consulta por cefalea, halos de colores y visión borrosa tras correr o levantar pesas; se debe a una lluvia aguda masiva de pigmento que ocluye temporalmente el trabéculo."
  },
  diagnosticWorkup: [
    {
      test: "Gonioscopia Dinámica de Cuatro Espejos",
      findings: "Ángulo Grado IV de Shaffer ampliamente abierto; inserción posterior del iris con concavidad periférica notoria; hiperpigmentación homogénea muy oscura (grado 4+) de 360 grados en toda la malla trabecular; Línea de Sampaolesi muy prominente por delante de la línea de Schwalbe."
    },
    {
      test: "Ecografía Biomicroscópica de Alta Frecuencia (UBM de 50 MHz)",
      findings: "Demuestra la concavidad posterior del iris y el contacto íntimo entre el epitelio pigmentario del iris y las zónulas del cristalino."
    },
    {
      test: "Campimetría Computarizada y OCT de CFNR",
      findings: "Documentación del daño neuropático que suele ser más agresivo y fluctuante que en el GPAA típico."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Síndrome de Pseudoexfoliación (PEX)",
      distinction: "El PEX afecta a ancianos (>65 años), la pigmentación trabecular es heterogénea y en parches, la atrofia del iris es en el margen pupilar (no en media periferia) y hay material fibrilar blanco en la cápsula anterior del cristalino."
    },
    {
      condition: "Melanoma Uveal / de Iris",
      distinction: "La dispersión de pigmento en el melanoma suele ser unilateral y puede acompañarse de masa visible o neovascularización; el SDP es casi invariablemente bilateral."
    },
    {
      condition: "Uveítis Anterior Hipertensiva",
      distinction: "En uveítis hay precipitados queráticos inflamatorios de células mononucleares, sinequias posteriores y celularidad activa con Tyndall verdadero (no gránulos de melanina pura)."
    }
  ],
  steppedManagement: {
    medical: "• Hipotensores Oculares Tópicos:\n  - Análogos de Prostaglandinas: Fármaco de primera elección; aumentan el flujo uveoescleral no convencional, reduciendo la dependencia de la malla trabecular congestionada.\n  - Mióticos (Pilocarpina al 1% o 2% a dosis bajas):\n    * Mecanismo: Contrae el esfínter pupilar, induciendo una ligera tensión del iris hacia el cristalino que anula la concavidad y previene la fricción iridozonular.\n    * ¡PRECAUCIÓN SEVERA EN MIOPES!: La pilocarpina contrae el músculo ciliar traccionando la base del vítreo y multiplica el riesgo de desgarro y desprendimiento de retina en pacientes con miopía axial y degeneración lattice. Requiere examen retinal periférico riguroso previo.\n  - Betabloqueantes, Alfa-agonistas e Inhibidores de Anhidrasa Carbónica según meta.",
    surgical: "• Intervenciones con Láser y Quirúrgicas:\n  - Iridotomía Periférica con Láser Nd:YAG (LPI):\n    * Fundamento biológico: Al perforar el iris se igualan las presiones entre la cámara anterior y posterior, aplanando de inmediato el iris cóncavo y despegándolo de las zónulas (cura el bloqueo pupilar invertido).\n    * Indicación: Más eficaz en pacientes jóvenes en fases tempranas del SDP con concavidad activa antes de que la malla trabecular sufra daño irreversible.\n  - Trabeculoplastia Láser Selectiva (SLT):\n    * ¡PRECAUCIÓN CON LA ENERGÍA!: Como la malla trabecular tiene una pigmentación masiva de 360 grados, absorbe muchísima más energía lumínica; debe reducirse la energía del láser a la mitad (0.3 a 0.6 mJ) y tratar sólo 90 a 180 grados por sesión para prevenir picos hipertensivos agudos post-láser severos (>40 mmHg).\n  - Cirugía Filtrante (Trabeculectomía con MMC o MIGS): Requerida en casos avanzados con colapso de la función trabecular."
  },
  clinicalApplicationPractical: "1. Paciente joven que consulta por visión borrosa y halos tras correr: Piense de inmediato en Glaucoma Pigmentario; realice gonioscopia en busca de la línea de Sampaolesi y transiluminación en rueda de carro.\n2. ¡Cuidado con la SLT en Glaucoma Pigmentario!: Tratar 360 grados con energía estándar provocará un bloqueo inflamatorio masivo de la malla ya sobrecargada con picos de PIO devastadores; inicie con baja potencia (0.4 mJ) y trate sólo 180 grados.\n3. Fondo de ojo meticuloso obligado: Todo paciente con dispersión pigmentaria debe ser revisado con lámpara de tres espejos o indentación escleral en busca de lesiones predisponentes a desprendimiento de retina.",
  highYieldPearl: "Glaucoma Pigmentario Board Pearl: Varón joven miope con bloqueo pupilar invertido (iris cóncavo). Tríada: Huso de Krukenberg + transiluminación en rueda de carro en media periferia + trabéculo 4+ con línea de Sampaolesi. LPI aplana el iris; en SLT reducir la energía para evitar picos.",
  keyDrugs: [
    {
      name: "Tafluprost / Latanoprost colirio",
      dose: "1 gota cada noche a las 21:00h",
      warning: "Aumenta el drenaje uveoescleral evitando la vía trabecular ocluida."
    },
    {
      name: "Pilocarpina 1% colirio",
      dose: "1 gota c/12h (con precaución)",
      warning: "Aplana el iris pero aumenta el riesgo de desprendimiento de retina en miopes."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Localización de la Transiluminación: Pigmentario vs PEX",
      category: "Asociación Patognomónica",
      description: "La transiluminación en el Glaucoma Pigmentario se localiza en la MEDIA PERIFERIA del iris en forma radial (\"en rueda de carro\"). En el Síndrome de Pseudoexfoliación (PEX), la transiluminación se localiza en el REBORDE PUPILAR (esfínter). Esta distinción es una pregunta clásica obligada de tribunales.",
      trapToAvoid: "Confundir la transiluminación esfinteriana del PEX con la transiluminación medioperiférica del pigmentario."
    }
  ]
},

  {
  id: "deep-glaucoma-pseudoexfoliacion-pex",
  title: "Síndrome de Pseudoexfoliación (PEX) y Glaucoma Capsular: Genética LOXL1, Zonulopatía, Desafíos Quirúrgicos en Facoemulsificación y Agresividad Clínica",
  subspecialtyId: "glaucoma",
  summary: "Monografía exhaustiva sobre el Síndrome de Pseudoexfoliación (PEX) y el Glaucoma Pseudoexfoliativo (o Capsular): 1) Biología molecular y genética del gen LOXL1 (Lisil Oxidasa-Like 1 en el cromosoma 15q24), patología de elastosis sistémica fibrilar generalizada con depósito de material microfibrilar fibrilopático en múltiples órganos (corazón, aorta, meninges, pulmones); 2) Hallazgos biomicroscópicos patognomónicos en el polo anterior: el clásico patrón en tres zonas sobre la cápsula anterior del cristalino (disco central homogéneo, zona intermedia clara pulida por el esfínter pupilar y zona periférica granular estriada), copos de \"caspa\" en el margen pupilar, atrofia del esfínter pupilar con pobre dilatación midriática y Anillo de Zentmayer en polo posterior del cristalino; 3) Zonulopatía degenerativa extrema y facodonesis: fragilidad zonular difusa con riesgo crítico de diálisis zonular, rotura de cápsula posterior y luxación tardía espontánea del complejo saco-LIO tras facoemulsificación (a los 5 a 10 años postoperatorios); 4) Comportamiento clínico del Glaucoma PEX: curso altamente agresivo con picos hipertensivos fluctuantes extremos, PIO basal más elevada que en el GPAA, mayor resistencia al tratamiento médico y progresión campimétrica acelerada; y 5) Estrategias quirúrgicas perioperatorias: uso de anillos de tensión capsular (CTR), retractores de iris/cápsula y alta respuesta a SLT inicial.",
  definitionAndEpidemiology: "El Síndrome de Pseudoexfoliación (PEX) es una enfermedad sistémica relacionada con la edad caracterizada por la síntesis y depósito progresivo de material microfibrilar anormal en la matriz extracelular de los tejidos oculares y sistémicos. Es la causa identificable más común de glaucoma secundario de ángulo abierto en el mundo (Glaucoma Pseudoexfoliativo), responsable de más del 25% de todos los glaucomas en Escandinavia, Grecia y el Mediterráneo. Afecta típicamente a mayores de 65 años, suele comenzar de forma clínicamente unilateral pero se convierte en bilateral con el tiempo, y confiere una fragilidad extrema al aparato suspensorio zonular del cristalino.",
  anatomyAndPathophysiology: "1. Genética Molecular y Mutaciones de LOXL1:\n   • Más del 99% de los pacientes con PEX portan polimorfismos de un solo nucleótido (SNPs R141L y G153D) en el gen LOXL1 (Lisil Oxidasa-Like 1), enzima responsable de la polimerización y estabilización de las fibras elásticas en la matriz extracelular.\n   • Esta alteración induce una elastosis tisular anómala con sobreproducción de complejos macromoleculares glicoproteicos fibrilares.\n2. Depósito Intraocular y Zonulopatía:\n   • El material pseudoexfoliativo es sintetizado activamente por las células del epitelio no pigmentado del cuerpo ciliar, el epitelio del cristalino, el endotelio corneal y el iris.\n   • Degeneración Zonular Crónica: El material se deposita directamente sobre el origen y las inserciones de las fibras zonulares en la cápsula del cristalino y el cuerpo ciliar, lisando enzimáticamente las fibrillas zonulares y provocando su fragmentación.\n   • Consecuencia: Debilidad zonular masiva, subluxación del cristalino, facodonesis (temblor del cristalino con los movimientos oculares) y cierre angular secundario por desplazamiento anterior del cristalino.\n3. Fisiopatología del Glaucoma PEX:\n   • Obstrucción física de la malla trabecular por acumulación masiva de material fibrilar PEX combinado con gránulos de pigmento de melanina liberados del iris atrófico.\n   • Disfunción del endotelio trabecular que pierde su capacidad de desobstrucción, provocando un aumento pronunciado de la resistencia al flujo acuoso con PIO muy fluctuante y picos de hasta 40-50 mmHg.\n4. La Luxación Tardía en Bloque del Complejo Saco-LIO:\n   • A diferencia de las complicaciones quirúrgicas inmediatas, en pacientes con PEX se presenta una complicación tardía temida a los 5-10 años de una facoemulsificación impecable: la zonulopatía progresiva conduce a la luxación espontánea completa del saco capsular íntegro conteniendo el lente intraocular hacia la cavidad vítrea.",
  clinicalExamination: {
    biomicroscopy: "1) Cápsula anterior del cristalino bajo dilatación pupilar (Signo Maestro):\n   - Zona Central: Disco translúcido continuo de material PEX que coincide con el tamaño pupilar en miosis;\n   - Zona Intermedia Clara: Anillo transparente pulido donde el iris rozó mecánicamente y limpió el material durante las excursiones pupilares;\n   - Zona Periférica: Banda anular granular escamosa con estrías radiales (\"en dientes de sierra\");\n2) Margen pupilar: Depósitos blanquecinos tipo \"caspa\" en el esfínter pupilar, atrofia del esfínter en parches con pérdida del reborde pigmentado y transiluminación pupilar focal;\n3) Midriasis deficiente: La infiltración del estroma del iris impide una dilatación pupilar farmacológica adecuada;\n4) Facodonesis e Iridodonesis: Temblor visible del iris y del cristalino al mover los ojos (indica desinserción zonular avanzada).",
    fundus: "Excavación glaucomatosa típicamente muy avanzada, asimétrica entre ambos ojos, con pérdida rápida del anillo neuroretiniano.",
    specialSigns: "• Línea de Sampaolesi Ondulada e Irregular: Depósito denso de pigmento por delante de la línea de Schwalbe en gonioscopia.\n• Asimetría Tensional Marcada: Diferencias de PIO mayores de 10-15 mmHg entre el ojo clínicamente afectado y el adelfo."
  },
  diagnosticWorkup: [
    {
      test: "Biomicroscopia con Midriasis Máxima (Examen de elección)",
      findings: "Identificación de las tres zonas capsulares en el cristalino y depósitos en el borde pupilar."
    },
    {
      test: "Gonioscopia Dinámica",
      findings: "Hiperpigmentación trabecular no homogénea (más oscura e irregular que en el pigmentario), copos blanquecinos sobre el espolón escleral y línea de Sampaolesi festoneada."
    },
    {
      test: "Ecografía de Alta Resolución / UBM",
      findings: "Evaluación de la integridad zonular y presencia de inclinación (tilt) o desplazamiento asimétrico del cristalino."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Glaucoma Primario de Ángulo Abierto (GPAA)",
      distinction: "El GPAA es simétrico, sin material capsular ni atrofia pupilar, con PIO más estable y menor tasa de progresión."
    },
    {
      condition: "Síndrome de Dispersión Pigmentaria (SDP)",
      distinction: "El SDP afecta a pacientes jóvenes miopes, la atrofia del iris es medioperiférica y la pigmentación trabecular es homogénea de 360 grados; el PEX afecta a ancianos con depósitos fibrilares blanquecinos."
    },
    {
      condition: "Exfoliación Verdadera (True Exfoliation)",
      distinction: "Deslaminación laminar de la cápsula anterior del cristalino secundaria a calor radiante extremo (sopladores de vidrio o exposición térmica infrarroja crónica); no hay material sistémico fibrilar ni afectación pupilar."
    }
  ],
  steppedManagement: {
    medical: "• Abordaje Farmacológico Riguroso:\n  - La PIO en PEX es notoriamente refractaria y muestra grandes picos circadianos.\n  - Análogos de Prostaglandinas como monoterapia inicial (Latanoprost, Bimatoprost, Travoprost); suelen requerir combinaciones fijas tempranas (Prostaglandina + Timolol o IAC + Timolol).\n  - Monitoreo frecuente de la PIO debido a la mayor velocidad de pérdida de campo visual.",
    surgical: "• Procedimientos con Láser:\n  - Trabeculoplastia Láser Selectiva (SLT):\n    * Sumamente efectiva en PEX debido a la alta carga de pigmento trabecular que absorbe selectivamente el láser.\n    * Requiere utilizar niveles bajos de energía (0.3 a 0.6 mJ) para evitar picos hipertensivos reactivos post-láser severos.\n• Consideraciones Críticas en Cirugía de Catarata (Facoemulsificación):\n  - Dilatación pupilar preoperatoria difícil: Empleo frecuente de retractores de iris de iris o anillos de expansión pupilar (Malyugin Ring).\n  - Capsulorrexis circular continua (CCC) cuidadosa: El estrés zonular durante la rexis debe minimizarse mediante cistótomo afilado y pinzas de rexis con contrasujeción.\n  - Anillos de Tensión Capsular (CTR): Indicación formal ante la menor sospecha de debilidad zonular para redistribuir las fuerzas sobre las zónulas intactas remanentes.\n  - En caso de diálisis zonular >90 grados: Anillos suturados a esclera (Cionni Ring) o extracción extracapsular/fijación escleral de LIO (Yamane).\n• Cirugía Filtrante (Trabeculectomía con MMC):\n  - La trabeculectomía en PEX tiene una excelente tasa de éxito tensional inicial pero mayor propensión a atalamia postoperatoria por flacidez del diafragma iridocristaliniano."
  },
  clinicalApplicationPractical: "1. Desafío en Pabellón: Si programa una facoemulsificación en un paciente con PEX, tenga siempre preparados en quirófano: retractores de iris, anillo de Malyugin, Anillo de Tensión Capsular (CTR), viscoelástico dispersivo de alta viscosidad y equipo de vitrectomía anterior listo para encender.\n2. Control Post-operatorio de por vida: Aunque la cirugía de catarata sea un éxito rotundo, informe al paciente que el complejo saco-LIO puede luxarse espontáneamente años más tarde debido a la naturaleza progresiva de la zonulopatía; debe controlarse anualmente.\n3. Ojo Contralateral: En un paciente con PEX clínicamente unilateral, el ojo adelfo tiene un 30-40% de probabilidades de desarrollar pseudoexfoliación en los siguientes 5 a 10 años.",
  highYieldPearl: "Pseudoexfoliación Board Pearl: Gen LOXL1. Material fibrilar en 3 zonas en cápsula anterior del cristalino + caspa pupilar. Zonulopatía extrema con riesgo de rotura capsular en facoemulsificación y luxación tardía del complejo saco-LIO a los 5-10 años. SLT altamente eficaz con baja energía.",
  keyDrugs: [
    {
      name: "Bimatoprost 0.01% / Travoprost 0.004%",
      dose: "1 gota por la noche",
      warning: "Potente eficacia hipotensora en glaucoma con picos tensionales elevados."
    },
    {
      name: "Fenilefrina 10% + Ciclopentolato 1%",
      dose: "Midriasis prequirúrgica intensiva",
      warning: "Frecuentemente insuficiente; requiere dilatación mecánica quirúrgica."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "Luxación Tardía del Complejo Saco-LIO en PEX",
      category: "Pregunta Clásica",
      description: "La causa número uno de luxación tardía espontánea del complejo saco capsular-lente intraocular (5 a 10 años post-cirugía sin trauma previo) es la zonulopatía degenerativa progresiva del Síndrome de Pseudoexfoliación.",
      trapToAvoid: "Atribuir una luxación tardía a una mala técnica quirúrgica inicial cuando se trata de la evolución natural de la elastosis zonular por LOXL1."
    }
  ]
},

  {
  id: "deep-glaucoma-uveitico-posner-schlossman-fuchs",
  title: "Glaucoma Uveítico, Síndrome de Posner-Schlossman y Ciclitis Heterocrómica de Fuchs: Trabeculitis, Mecanismos Inflamatorios y Viralidad (CMV/HSV)",
  subspecialtyId: "glaucoma",
  summary: "Monografía exhaustiva sobre los síndromes hipertensivos oculares inflamatorios y el glaucoma uveítico: 1) Doble mecanismo fisiopatológico del glaucoma uveítico: Mecanismo de Ángulo Abierto (trabeculitis inflamatoria aguda, edema de células endoteliales trabeculares, oclusión de la malla por fibrina, proteínas y macrófagos) frente a Mecanismo de Ángulo Cerrado (sinequias posteriores de 360 grados con secclusión pupilar e iris bombé, o sinequias anteriores periféricas [SAP] progresivas); 2) Crisis Glaucomatociclítica o Síndrome de Posner-Schlossman: crisis recurrentes unilaterales de PIO marcadamente elevada (40-60 mmHg) con síntomas mínimos o leves (visión borrosa y halos), inflamación anterior de bajo grado con escasos precipitados retroqueráticos redondos u ovalados blanquecinos no pigmentados centrales/paracentrales, ángulo gonioscópicamente abierto y su etiología infecciosa ligada a Citomegalovirus (CMV), Herpes Simplex (HSV) o Varicela-Zóster (VZV); 3) Síndrome Uveítico de Fuchs (Ciclitis Heterocrómica de Fuchs): tríada de heterocromía de iris (iris hipocrómico atrófico en el ojo afecto con pérdida de criptas), precipitados queráticos estrellados difusos de distribución pancorneal de 360 grados unidos por finos filamentos de fibrina, ausencia patognomónica de sinequias posteriores (¡regla de oro!), Signo de Amsler (microhifema filiforme provocado por paracentesis), catarata subcapsular posterior precoz y glaucoma crónico severo refractario secundario a rubéola o CMV; y 4) Algoritmo terapéutico integral: supresores de producción de acuoso, antivirales específicos (Ganciclovir / Valganciclovir), uso juicioso de corticoides y manejo quirúrgico (implantes valvulares de Ahmed frente a trabeculectomía con antimetabolitos).",
  definitionAndEpidemiology: "El Glaucoma Uveítico engloba el grupo heterogéneo de neuropatías ópticas hipertensivas secundarias a inflamación intraocular activa o cicatrizal. Constituye una de las formas de glaucoma más destructivas y difíciles de controlar, afectando al 10-20% de los pacientes con uveítis crónica o recurrente. El Síndrome de Posner-Schlossman y la Ciclitis Heterocrómica de Fuchs representan entidades hipertensivas específicas con implicaciones etiológicas virales directas.",
  anatomyAndPathophysiology: "1. Mecanismos Fisiopatológicos del Aumento de la PIO en Uveítis:\n   • Ángulo Abierto Agudo (Trabeculitis):\n     - Inflamación directa del endotelio de la malla trabecular que incrementa el espacio intercelular o genera edema celular y disfunción endotelial.\n     - Acúmulo de detritos inflamatorios: Fibrina, proteínas del humor acuoso (rotura de la barrera hematoacuosa) y células inflamatorias que taponan mecánicamente los poros trabeculares.\n   • Ángulo Cerrado Agudo o Crónico (Sinequial):\n     - Sinequias Posteriores de 360 Grados (Secclusión Pupilar): Bloquean el paso del humor acuoso de la cámara posterior a la anterior -> elevación de la presión retroiridiana -> Iris Bombé (abombamiento anterior convexo del iris) -> cierre angular apositivo y sinequial agudo.\n     - Sinequias Anteriores Periféricas (SAP): Puentes cicatrizales fibrilares que traccionan la base del iris sobre la malla trabecular, cerrando permanentemente el ángulo.\n   • Glaucoma Corticoesteroideo Sobreagregado: Frecuente tras tratamiento intensivo con corticoides tópicos o perioculares en pacientes \"respondedores a esteroides\" (acumulación de glicosaminoglicanos y alteración de CLANs trabeculares).\n2. Biología del Síndrome de Posner-Schlossman (Crisis Glaucomatociclítica):\n   • Cuadro de desproporción clínica extrema: PIO de 40 a 60 mmHg con apenas 3 a 5 células en cámara anterior y córnea transparente o con mínimo edema epitelial.\n   • Causa infecciosa comprobada por PCR de humor acuoso: Infección activa o reactivación de Citomegalovirus (CMV) en >50-70% de los casos (especialmente en pacientes asiáticos y jóvenes), así como HSV y VZV.\n3. Fisiopatología del Síndrome Uveítico de Fuchs:\n   • Respuesta inmune celular intraocular crónica desencadenada en la infancia por el virus de la Rubéola (en países occidentales) o CMV (en Asia).\n   • La inflamación crónica indolente produce despigmentación y atrofia difusa del estroma del iris (heterocromía), neovascularización frágil del ángulo y esclerosis trabecular fibrovascular progresiva.\n   • Los vasos angulares patológicos carecen de adventicia elástica; ante la mínima caída de PIO (como al hacer una paracentesis o indentación), sangran espontáneamente produciendo un microhifema filiforme (Signo de Amsler).",
  clinicalExamination: {
    biomicroscopy: "• En Posner-Schlossman: Córnea con edema epitelial microquístico leve; precipitados retroqueráticos pequeños, redondos, blanco-grisáceos, planos, distribuidos en el centro o tercio inferior de la córnea; flare leve (1+) y células escasas; ángulo ampliamente abierto en gonioscopia sin sinequias.\n• En Ciclitis Heterocrómica de Fuchs:\n  1) Precipitados queráticos característicos: Estrellados o punteados blancos, pequeños a medianos, NO confluentes, distribuidos en TODO el endotelio corneal (de limbo superior a inferior en 360 grados) interconectados por filamentos vítreos de fibrina;\n  2) Atrofia del estroma iridiano difusa con aspecto apolillado y pérdida de la arquitectura críptica; el ojo afecto tiene un iris más claro (hipocromía), salvo en ojos oscuros donde la atrofia del epitelio anterior puede revelar el epitelio posterior oscuro simulando hipercromía;\n  3) Nódulos de Koeppe en el borde pupilar y nódulos de Busacca en la superficie;\n  4) ¡AUSENCIA TOTAL DE SINEQUIAS POSTERIORES!: Regla de oro de Fuchs (si hay sinequias posteriores, descarte Fuchs);\n  5) Catarata subcapsular posterior temprana.",
    fundus: "Signos de vitritis leve anterior en Fuchs (corpúsculos flotantes); en Posner-Schlossman el fondo es normal pero muestra daño glaucomatoso progresivo si las crisis no se controlan.",
    specialSigns: "• Signo de Amsler (Fuchs): Sangrado en capa o filiforme en el ángulo de la cámara anterior en el lado opuesto al sitio de punción de una paracentesis o tras gonioscopia dinámica.\n• Discordancia Clínico-Tensional en Posner-Schlossman: Paciente con PIO de 52 mmHg pero prácticamente asintomático (sólo halos leves alrededor de las luces)."
  },
  diagnosticWorkup: [
    {
      test: "Paracentesis de Cámara Anterior con Análisis por PCR Multiplex",
      findings: "Determinación de ADN viral para Citomegalovirus (CMV), Virus Herpes Simplex (HSV) y Virus Varicela-Zóster (VZV)."
    },
    {
      test: "Gonioscopia Dinámica de 4 Espejos",
      findings: "En Posner-Schlossman: ángulo abierto sin sinequias. En Fuchs: ángulo abierto con finos neovasos radiales desordenados (no confundir con rubeosis diabética; estos vasos no forman membranas contráctiles sinequiales)."
    },
    {
      test: "Campimetría y OCT de Nervio Óptico",
      findings: "Monitoreo de daño axonal acumulado por crisis repetitivas."
    }
  ],
  differentialDiagnosis: [
    {
      condition: "Ataque Agudo de Cierre Angular Primario (APAC)",
      distinction: "En el APAC la cámara anterior está plana o cerrada de 360 grados, hay midriasis media paralítica y dolor extremo con náuseas; en Posner-Schlossman el ángulo está completamente abierto y los síntomas son llamativamente escasos."
    },
    {
      condition: "Uveítis Anterior Granulomatosa Clásica (Sarcoidosis, Tuberculosis, Sífilis)",
      distinction: "Presentan precipitados queráticos en grasa de carnero (mutton-fat) confluentes en el triángulo inferior de Arlt, abundantes sinequias posteriores y marcada celularidad vítrea."
    },
    {
      condition: "Glaucoma Neovascular Verdadero",
      distinction: "En glaucoma neovascular la rubeosis es densa en el reborde pupilar, forma un manto fibrovascular que cierra el ángulo con sinequias anteriores progresivas y hay isquemia retiniana extensa visible en FAG."
    }
  ],
  steppedManagement: {
    medical: "• Abordaje en la Crisis Glaucomatociclítica (Posner-Schlossman):\n  1) Control Antiinflamatorio y de la Trabeculitis:\n     - Acetato de Prednisolona 1% cada 2 a 4 horas en fase aguda (reducir rápidamente en pauta descendente al ceder la crisis).\n  2) Supresión de la PIO:\n     - Betabloqueantes tópicos (Timolol 0.5% c/12h), Alfa-2 agonistas (Brimonidina 0.15% c/12h) e Inhibidores de la Anhidrasa Carbónica (Dorzolamida 2% c/8h o Acetazolamida oral 250 mg c/8h).\n     - ¡CONTRAINDICACIÓN DE PROSTAGLANDINAS Y MIÓTICOS!: Los análogos de prostaglandinas incrementan la inflamación intraocular y pueden inducir edema macular quistoide; la pilocarpina exacerba la rotura de la barrera hematoacuosa y promueve sinequias.\n  3) Terapia Antiviral Específica si PCR es positiva para CMV:\n     - Ganciclovir tópico en gel al 0.15% (5 veces al día) o Valganciclovir oral (900 mg c/12h por 3 semanas, luego 450 mg c/12h de mantenimiento) para prevenir recurrencias.\n• Abordaje en Síndrome Uveítico de Fuchs:\n  - La inflamación anterior de Fuchs NO responde a corticoides tópicos ni orales (su uso sólo acelera la catarata y provoca glaucoma corticoideo añadido; ¡NO TRATAR LA CELULARIDAD LEVE CON CORTICOIDES!).\n  - Hipotensores tópicos de primera línea (Betabloqueantes, IAC, Alfa-agonistas).\n  - Cirugía de catarata: Facoemulsificación con implante de LIO en saco suele tener excelente pronóstico; anticipar sangrado en cámara anterior por el signo de Amsler (controlar con viscoelástico cohesivo).",
    surgical: "• Manejo Quirúrgico del Glaucoma Refractario:\n  - Implante de Dispositivo de Drenaje Valvulado (Válvula de Ahmed):\n    * Es el procedimiento quirúrgico de elección en glaucoma uveítico refractario; los tubos tienen mayor tasa de supervivencia que la trabeculectomía en ojos con inflamación crónica.\n  - Trabeculectomía con Mitomicina C (MMC):\n    * Puede realizarse únicamente si el ojo ha permanecido en QUIETUD INFLAMATORIA TOTAL (cero células) durante al menos 3 meses previos bajo profilaxis antiinflamatoria perioperatoria estricta."
  },
  clinicalApplicationPractical: "1. Paciente joven con PIO de 48 mmHg y ojo apenas rojo con 4 precipitados blancos diminutos: Es un Síndrome de Posner-Schlossman. Prescriba prednisolona tópica y supresores de acuoso (timolol + dorzolamida); no use latanoprost ni pilocarpina. Solicite PCR para CMV si el cuadro es recidivante.\n2. ¡Regla Absoluta de Fuchs!: Si un ojo tiene precipitados queráticos difusos en 360 grados pero presenta una sola sinequia posterior, NO es un síndrome de Fuchs; reoriente el diagnóstico hacia sarcoidosis, sífilis, tuberculosis o VKH.\n3. En Síndrome de Fuchs, ¡NO persiga la celularidad con esteroides!: La celularidad y flare leve en Fuchs son crónicos e inmunes a los corticoides; dar gotas de cortisona sólo acelerará la catarata e inducirá un glaucoma cortisónico severo sobreagregado.",
  highYieldPearl: "Glaucoma Uveítico Board Pearl: Posner-Schlossman: crisis recurrente de PIO 40-50 mmHg con inflamación mínima unilateral por CMV; contraindicadas prostaglandinas y pilocarpina. Fuchs: precipitados estrellados difusos en 360º + heterocromía + NUNCA sinequias posteriores + signo de Amsler.",
  keyDrugs: [
    {
      name: "Dorzolamida 2% + Timolol 0.5% colirio",
      dose: "1 gota cada 12 horas",
      warning: "Hipotensor de elección en uveítis activa sin riesgo de inducir edema macular."
    },
    {
      name: "Ganciclovir 0.15% gel oftálmico / Valganciclovir",
      dose: "Tópico 5 veces/día u oral 900 mg c/12h",
      warning: "Terapia etiológica dirigida en Posner-Schlossman con CMV positivo."
    },
    {
      name: "Prednisolona 1% colirio",
      dose: "1 gota c/2-4 horas en fase aguda",
      warning: "En Posner-Schlossman; evitar uso crónico en Fuchs."
    }
  ],
  residencyAndFellowExamTips: [
    {
      title: "La Ausencia de Sinequias Posteriores en Fuchs",
      category: "Asociación Patognomónica",
      description: "La presencia de sinequias posteriores descarta de forma categórica el Síndrome Uveítico de Fuchs. A pesar de años de inflamación anterior crónica activa, los ojos con Fuchs NUNCA forman sinequias posteriores al cristalino.",
      trapToAvoid: "Diagnosticar Ciclitis de Fuchs en un ojo con secclusión pupilar o sinequias posteriores fijas."
    }
  ]
}
];
