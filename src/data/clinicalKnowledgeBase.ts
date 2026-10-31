import { ResidentResponseResult } from '../types/ophthalmology';

export interface ClinicalDossier extends ResidentResponseResult {
  id: string;
  keywords: string[];
  subspecialty: string;
  differentialDiagnoses: string[];
}

export const OPHTHALMOLOGY_KNOWLEDGE_BASE: ClinicalDossier[] = [
  // 1. CÓRNEA: Queratitis por Acanthamoeba
  {
    id: 'kb-cornea-acanthamoeba',
    keywords: ['acanthamoeba', 'lente de contacto', 'lentes de contacto', 'perineuritis', 'infiltrado perineural', 'lago', 'piscina', 'agua dulce', 'dolor desproporcionado'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Queratitis infecciosa por Acanthamoeba (trofozoítos y quistes de doble pared). Sospechar siempre ante dolor ocular severo desproporcionado a los hallazgos en portador de lentes de contacto expuesto a agua no estéril.',
    pathophysiology: 'Invasión y penetración de Acanthamoeba (frecuentemente asociada a microtrauma epitelial por LC). Los trofozoítos se adhieren al epitelio mediante proteínas de unión a manosa, invaden el estroma liberando proteasas citopáticas y tienen tropismo específico por los nervios corneales estromales (produciendo perineuritis radial y dolor neurálgico severo). Los quistes de doble pared son altamente resistentes a la desecación y antisépticos habituales.',
    clinicalApplication: {
      guardia: '1) Suspender inmediatamente el uso de lentes de contacto en ambos ojos y remitir estuche con solución a microbiología.\n2) Tinción con fluoresceína y raspado corneal profundo con hoja de bisturí nº 15.\n3) Tinción con Blanco de Calcoflúor (microscopía de fluorescencia) para visualizar quistes amebianos, y cultivo en agar no nutritivo sembrado con E. coli inactivada.\n4) Descartar coinfección bacteriana por Pseudomonas.',
      tratamiento: '• Terapia médica amebicida tópica combinada de primera línea: Biguanida (Polihexametileno biguanida - PHMB 0.02% o Clorhexidina 0.02%) + Diamidina aromática (Propamidina 0.1% - Brolene o Hexamidina 0.1%).\n• Posología: 1 gota cada hora día y noche durante las primeras 48 horas; luego espaciar progresivamente cada 2 horas durante el día por 3-4 semanas; mantener tratamiento mínimo 3 a 6 meses para erradicar quistes viables.\n• Ciclopléjico: Atropina 1% o Ciclopentolato 1% cada 8h para alivio del espasmo ciliar.\n• AINEs orales para el dolor neuropático severo.',
      criteriosDerivacionOQuirurgicos: 'Adelgazamiento estromal progresivo inminente a perforación o necrosis estromal refractaria: Queratoplastia penetrante terapéutica (PKP) "en caliente" con margen corneal sano amplio.',
      contraindicaciones: 'CONTRAINDICACIÓN FORMAL: NUNCA usar corticoides tópicos en etapas precoces sin cobertura amebicida estricta durante varias semanas. Los esteroides reducen la inflamación aparente pero favorecen el enquistamiento y empeoran dramáticamente el pronóstico a largo plazo.'
    },
    pearlHighYield: 'Dolor desproporcionado a la biomicroscopía + Infiltrados perineurales radiales en portador de lentes de contacto = Acanthamoeba. El cultivo de elección es Agar No Nutritivo con Escherichia coli.',
    keyReferences: 'AAO BCSC Section 8: External Disease and Cornea / Moorfields Eye Hospital Guidelines',
    differentialDiagnoses: ['Queratitis por VHS (dendrítica/estromal)', 'Queratitis por Pseudomonas', 'Queratitis fúngica (Fusarium)', 'Queratopatía neurotrófica']
  },

  // 2. CÓRNEA: Quemadura química ocular
  {
    id: 'kb-cornea-quemadura-quimica',
    keywords: ['quemadura', 'alcali', 'acido', 'cal', 'sosa caustica', 'lejia', 'blanqueamiento', 'isquemia limbica', 'roper-hall', 'dua', 'hidroxido de calcio'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Quemadura ocular química aguda por agente alcalino (álcali) o ácido. Los álcalis causan necrosis por licuefacción y saponificación tisular profunda, penetrando rápidamente a cámara anterior.',
    pathophysiology: 'Los agentes alcalinos (pH >11, ej. hidróxido de calcio en cal o sosa cáustica) saponifican los ácidos grasos de las membranas celulares, desnaturalizan colágeno y penetran estroma y cámara anterior en minutos, dañando las células madre del limbo (empalizadas de Vogt) y la malla trabecular. La isquemia límbica (blanqueamiento escleral) traduce trombosis vascular profunda y pronostica deficiencia de células madre límbicas (LSCD).',
    clinicalApplication: {
      guardia: '1) TRATAMIENTO ANTES DE LA HISTORIA CLÍNICA: Irrigación copiosa inmediata continua con 2 a 3 litros de solución salina balanceada, suero fisiológico o Ringer lactato.\n2) Eversión doble del párpado superior e inferior con torunda húmeda para remover partículas sólidas de cal ocultas en fondos de saco.\n3) Medición seriada del pH lagrimal con tira reactiva en fondo de saco hasta alcanzar la neutralidad (pH 7.0 a 7.4), reevaluando a los 20 minutos de cesar el lavado.',
      tratamiento: '• Doxiciclina oral 100 mg cada 12 horas (inhibe fuertemente metaloproteinasas y colagenasas, previniendo el "melting" corneal).\n• Vitamina C (ácido ascórbico): 1-2 g/día vía oral y colirio de ascorbato tópico al 10% cada 2 horas (cofactor esencial de hidroxilación de prolina para síntesis de colágeno).\n• Corticoides tópicos potentes (Prednisolona 1% cada 2h) ÚNICAMENTE los primeros 7 a 10 días para reducir la fase inflamatoria inicial; suspender después del día 10 para evitar inducir lisis corneal.\n• Citrato sódico tópico al 10% (inhibe neutrófilos).\n• Ciclopléjico (Atropina 1% c/12h) y lágrimas artificiales sin conservantes horarias.',
      criteriosDerivacionOQuirurgicos: 'En quemaduras graves (Roper-Hall III-IV con isquemia >50%): Transplante de membrana amniótica en las primeras 48-72 horas para reducir inflamación y dolor; tenonoplastia si hay isquemia escleral severa. Trasplante alogénico o autólogo de células madre límbicas en fase tardía.',
      contraindicaciones: '1) NUNCA intentar "neutralizar" el agente con un ácido débil frente a álcali (la reacción exotérmica causa quemadura térmica adicional destructiva).\n2) NUNCA mantener corticoides tópicos más de 10-14 días si persiste defecto epitelial por riesgo de melting y perforación corneal.'
    },
    pearlHighYield: 'La quemadura química es la única patología donde el tratamiento (irrigación) precede a la toma de agudeza visual. El grado de isquemia límbica (blanqueamiento) define el pronóstico visual (Clasificación de Roper-Hall y Dua).',
    keyReferences: 'AAO BCSC Section 8 & Wills Eye Hospital Manual 8th Edition',
    differentialDiagnoses: ['Quemadura térmica ocular', 'Queratopatía por radiación UV', 'Abrasión corneal extensa']
  },

  // 3. CÓRNEA: Queratitis por Herpes Simple (VHS)
  {
    id: 'kb-cornea-herpes-simple',
    keywords: ['herpes', 'vhs', 'hsv', 'ulcera dendritica', 'dendrita', 'bulbos terminales', 'hipoestesia corneal', 'aciclovir', 'ganciclovir', 'estromal necrotizante', 'endotelitis'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Queratitis por Virus Herpes Simple (VHS-1): Formas epitelial (úlcera dendrítica o geográfica), estromal inmunológica (discoiforme) o estromal necrotizante.',
    pathophysiology: 'Reactivación del virus VHS latente en el ganglio de Gasser del nervio trigémino -> transporte retrógrado por las ramas oftálmicas (V1) hacia el epitelio corneal -> replicación vírica lítica con formación de úlcera dendrítica con bulbos terminales. La afectación de ramas de V1 causa hipoestesia corneal característica. La forma estromal es una reacción de hipersensibilidad tipo IV mediada por complejos inmunes contra antígenos virales retenidos en el estroma.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía con tinción doble: Fluoresceína tiñe el lecho de la dendrita desnudo de epitelio; Rosa de Bengala o Verde de Lisamina tiñe las células epiteliales infectadas y los bulbos terminales.\n2) Comprobar sensibilidad corneal con hilo de algodón de Cochet-Bonnet (marcadamente disminuida en VHS comparado con ojo contralateral).',
      tratamiento: '• Queratitis Epitelial Dendrítica: Ganciclovir oftálmico en gel al 0.15% 5 veces al día o Aciclovir pomada 3% 5 veces al día durante 7-10 días (o Valaciclovir oral 500 mg c/12h en intolerancia tópica).\n• Queratitis Estromal Inmune (Discoiforme con edema central y precipitados queráticos): Corticoides tópicos (Prednisolona 1% o Fluorometolona) con pauta descendente lenta SIEMPRE acompañados de cobertura profiláctica con Aciclovir oral 400 mg c/12h o Valaciclovir 500 mg/día (Estudio HEDS).',
      criteriosDerivacionOQuirurgicos: 'Perforación corneal por queratitis estromal necrotizante: Cianoacrilato o queratoplastia tectónica de urgencia.',
      contraindicaciones: 'CONTRAINDICACIÓN ABSOLUTA: PROHIBIDOS LOS CORTICOIDES TÓPICOS en la fase epitelial dendrítica activa. Provocan replicación viral desenfrenada transformando la dendrita en una "úlcera geográfica" gigante con melting.'
    },
    pearlHighYield: 'HEDS Trial (Herpetic Eye Disease Study): En queratitis estromal por VHS, los corticoides tópicos aceleran la resolución de la inflamación pero deben asociarse obligatoriamente a antivirales sistémicos para evitar recurrencias.',
    keyReferences: 'Herpetic Eye Disease Study (HEDS I y II) / AAO BCSC Section 8',
    differentialDiagnoses: ['Pseudodendrita por Herpes Zóster', 'Queratitis por Acanthamoeba', 'Abrasión corneal en cicatrización', 'Toxicidad por conservantes']
  },

  // CÓRNEA: Ojo Seco y Superficie Ocular (TFOS DEWS II)
  {
    id: 'kb-cornea-ojo-seco-dgm',
    keywords: ['ojo seco', 'dews ii', 'tfos', 'dgm', 'meibomio', 'meibomianitis', 'blefaritis', 'sjogren', 'bak', 'conservantes', 'lisamina', 'schirmer', 'osmolaridad'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Enfermedad de Ojo Seco (DED) según consenso internacional TFOS DEWS II: subtipos acuodeficiente (Síndrome de Sjögren primario o secundario a artritis reumatoide) y evaporativo (Disfunción de Glándulas de Meibomio / MGD y blefaritis), agravado frecuentemente por toxicidad por conservantes (cloruro de benzalconio / BAK).',
    pathophysiology: 'Pérdida de la homeostasis de la película lagrimal con inestabilidad lagrimal e hiperosmolaridad (>308 mOsm/L o diferencia interocular >8 mOsm/L). La hiperosmolaridad activa vías de señalización MAP kinasa con liberación de citocinas (IL-1b, TNF-a) y metaloproteinasas (MMP-9) que inducen apoptosis de células epiteliales corneales y caliciformes conjuntivales. En DGM, la alteración lipídica acelera la evaporación (TBUT <10 s). Los conservantes como BAK provocan disrupción detergente de las membranas celulares y queratopatía punteada confluente.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía con tinción dual: Fluoresceína sódica (defecto intercelular) y Verde de Lisamina (células desvitalizadas sin mucina, graduación de Oxford).\n2) Medición no invasiva del tiempo de rotura lagrimal (TBUT <10 s patológico).\n3) Test de Schirmer I sin anestesia (<=5 mm en 5 min confirma déficit acuoso severo tipo Sjögren).\n4) Examen de bordes palpebrales y expresión de meibum (evaluar si es claro, turbio o en "pasta de dientes").\n5) Suspender inmediatamente todo colirio conservado con BAK.',
      tratamiento: '• Higiene palpebral diaria: Compresas calientes a 40-45ºC por 10 min + masaje vertical + limpiadores con aceite de árbol de té si hay Demodex.\n• Lágrimas artificiales y sustitutos monodosis RIGUROSAMENTE LIBRES DE CONSERVANTES (Ácido Hialurónico al 0.15-0.4% o Trehalosa) cada 2 a 4 horas.\n• Doxiciclina oral 50-100 mg/día durante 8-12 semanas (inhibe lipasas bacterianas y MMP-9 en DGM).\n• Antiinflamatorios tópicos: Ciclo corto de 2-3 semanas con corticoide de baja penetración (Loteprednol 0.5% o Fluorometolona 0.1%) para yugular la inflamación aguda.\n• Inmunomoduladores crónicos: Ciclosporina A 0.05-0.1% tópica cada 12-24 horas (Restasis, Ikervis) o Lifitegrast 5%.\n• Suero autólogo al 20% en casos severos refractarios con queratopatía neurotrófica.',
      criteriosDerivacionOQuirurgicos: 'Colocación de tapones lagrimales de silicona (punctum plugs) ÚNICAMENTE tras haber controlado la inflamación de la superficie ocular (nunca en presencia de MMP-9 elevado). Tarsorrafia lateral o lentes esclerales en queratopatías por exposición severa.',
      contraindicaciones: '1) NUNCA colocar tapones lagrimales en un ojo activamente inflamado (retiene mediadores inflamatorios concentrados que empeoran la necrosis epitelial).\n2) NUNCA prescribir colirios multidosis con cloruro de benzalconio (BAK) a pacientes con queratitis punteada difusa.'
    },
    pearlHighYield: 'TFOS DEWS II: Osmolaridad lagrimal >=308 mOsm/L o asimetría interocular >8 mOsm/L es el biomarcador objetivo individual más fiable de ojo seco. Si un paciente con glaucoma empeora de ojo rojo y escozor tras meses de tratamiento, la causa es toxicidad por BAK, no alergia ni progresión del glaucoma.',
    keyReferences: 'TFOS DEWS II Report 2017 (The Ocular Surface) / AAO Preferred Practice Pattern Dry Eye',
    differentialDiagnoses: ['Toxicidad conjuntival por conservantes (BAK)', 'Queratoconjuntivitis límbica superior de Theodore', 'Blefaritis por Demodex', 'Queratopatía neurotrófica']
  },

  // CÓRNEA: Queratocono y Ectasias Corneales
  {
    id: 'kb-cornea-queratocono-cxl',
    keywords: ['queratocono', 'ectasia', 'pentacam', 'belin-ambrosio', 'bad-d', 'crosslinking', 'cxl', 'dresden', 'kmax', 'anillos intraestromales', 'hidrops', 'vogt'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Queratocono y ectasias corneales progresivas: diagnóstico precoz subclínico mediante tomografía Scheimpflug Pentacam (mapas de elevación posterior Belin-Ambrósio BAD-D), biomecánica Corvis ST y tratamiento estabilizador con Crosslinking corneal (CXL de Dresden).',
    pathophysiology: 'Degradación enzimática estromal por sobreexpresión de metaloproteinasas (MMP-1, MMP-9) y deficiencia de TIMP-1, combinada con microtraumatismo mecánico continuo por frotamiento ocular crónico ("eye rubbing" en atopia). Se produce deslizamiento interlamelar de fibrillas de colágeno con adelgazamiento focal y protrusión en cono, astigmatismo miópico irregular y aberración comática de alto orden.',
    clinicalApplication: {
      guardia: '1) Refracción y agudeza visual con gafas vs estenopeico (la falta de corrección a 20/20 con cilindros altos orienta a astigmatismo irregular).\n2) Biomicroscopía: Búsqueda de estrías verticales de Vogt, anillo basal de Fleischer (filtro azul cobalto) y adelgazamiento paracentral inferior.\n3) Tomografía Pentacam obligatoria: Valorar elevación posterior (>16 µm patológica), mapa paquimétrico (desplazamiento del punto más fino) e índice global BAD-D (>1.6 sospecha, >2.6 ectasia confirmada).\n4) PROHIBICIÓN FORMAL DEL FROTAMIENTO OCULAR.',
      tratamiento: '• Control estricto de alergia ocular con Olopatadina tópica y lágrimas frías para erradicar el frotamiento.\n• Rehabilitación visual: Gafas en fases iniciales; lentes de contacto permeables al gas (RGP) corneales o lentes esclerales de gran diámetro en casos moderados a avanzados.\n• Crosslinking Corneal de Riboflavina/UVA (Protocolo de Dresden): Indicado de urgencia ante progresión documentada (aumento de Kmax >=1.0 D en 1 año o paquimetría decreciente >=20 µm). Detiene la progresión en >95% de los casos.',
      criteriosDerivacionOQuirurgicos: '1) Anillos o segmentos intraestromales (ICRS) asistidos por femtosegundo para regularizar la curvatura corneal en pacientes intolerantes a lentes de contacto.\n2) Queratoplastia Lamelar Anterior Profunda (DALK con técnica de Anwar Big-Bubble) en ectasias avanzadas sin rotura previa de Descemet (CERO riesgo de rechazo endotelial).\n3) En hidrops agudo: NUNCA operar en agudo; manejo médico con pomada hipertónica NaCl 5% o pneumodescemetopexia con gas C3F8.',
      contraindicaciones: '1) NUNCA realizar cirugía refractiva con láser Excímer (LASIK o PRK) en sospecha de queratocono o BAD-D >1.6 (desencadena ectasia iatrogénica fulminante).\n2) NUNCA realizar CXL con irradiación UVA si el grosor estromal desepitelizado es menor a 400 micras sin previa hinchazón osmótica con riboflavina hipoosmolar (riesgo de toxicidad endotelial irreversible).'
    },
    pearlHighYield: 'La elevación en la cara posterior corneal en el mapa de elevación posterior de Pentacam es el signo tomográfico más temprano de queratocono, precediendo en años a los cambios en la cara anterior. El grosor mínimo desepitelizado para CXL es de 400 µm.',
    keyReferences: 'Global Consensus on Keratoconus and Ectatic Diseases (Cornea 2015) / Dresden CXL Protocol',
    differentialDiagnoses: ['Degeneración marginal pelúcida', 'Queratoglobo', 'Ectasia post-LASIK', 'Astigmatismo miópico congénito alto']
  },

  // CÓRNEA: Queratopatía Bullosa Pseudofáquica y Cirugía Endotelial (DMEK)
  {
    id: 'kb-cornea-queratopatia-bullosa-dmek',
    keywords: ['queratopatia bullosa', 'pseudofaquica', 'descompensacion endotelial', 'dmek', 'dsaek', 'recuento endotelial', 'densidad critica', 'bula', 'fuchs', 'cloruro de sodio hipertonico'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Queratopatía Bullosa Pseudofáquica (PBK) y fallo endotelial postquirúrgico: pérdida celular por debajo de la densidad endotelial crítica (<500-700 cél/mm2), edema estromal y rotura de bulas epiteliales con dolor lancinante, manejada mediante trasplante endotelial selectivo (DMEK vs DSAEK).',
    pathophysiology: 'Daño celular endotelial irreversible por energía ultrasónica intraoperatoria acumulada, trauma mecánico por fragmentos nucleares, contacto de LIO de cámara anterior o pérdida senil acelerada en córneas con distrofia de Fuchs previa. Al caer el recuento endotelial por debajo de 500-700 cél/mm2, la bomba Na+/K+ ATPasa claudica, el estroma se sobrehidrata y el fluido atraviesa Bowman formando bulas epiteliales subepiteliales que estallan exponiendo terminaciones nerviosas libres ciliares del trigémino.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía con fluoresceína: Visualizar bulas rotas centrales, edema estromal con pérdida del brillo epitelial y pliegues en Descemet.\n2) Evaluar cámara anterior: Posición del LIO (descartar LIO de cámara anterior con fijación angular o contacto de hápticas con endotelio) y descartar vítreo en CA.\n3) Alivio inmediato del dolor: Colocar lente de contacto blando terapéutico de vendaje + antibiótico profiláctico sin conservantes.\n4) Paquimetría óptica/ultrasónica (grosor corneal frecuentemente >700-800 µm) y microscopía especular periférica.',
      tratamiento: '• Deshidratación osmótica: Solución salina hipertónica al 5% (NaCl 5%) colirio cada 4 horas y ungüento al acostarse.\n• Hipotensores oculares acuosos (Timolol, Brimonidina, Dorzolamida) para reducir la fuerza hidrostática que empuja líquido hacia el estroma; EVITAR análogos de prostaglandinas.\n• Cirugía Reconstructiva de Elección: Queratoplastia Endotelial de Membrana de Descemet (DMEK) o DSAEK.\n• Si hay un LIO de cámara anterior o vítreo en CA: Explantación obligatoria del LIO + vitrectomía anterior profunda + fijación escleral de LIO en cámara posterior (Yamane) simultánea con el trasplante endotelial.',
      criteriosDerivacionOQuirurgicos: 'En ojos ciegos sin potencial visual (agudeza visual No Percepción Luminosa): PROSCRITO el trasplante de córnea; el tratamiento de elección es el Recubrimiento Conjuntival Total de Gundersen (Gundersen flap) o micropunción estromal anterior para erradicar el dolor definitivamente.',
      contraindicaciones: '1) NUNCA prescribir colirios anestésicos tópicos para el dolor a demanda ambulatoria (causan necrosis epitelial masiva y perforación).\n2) NUNCA confiar en una tonometría de Goldmann central en córnea edematosa sin considerar que la PIO real puede estar hasta 10 mmHg más alta por el efecto esponjoso del estroma.'
    },
    pearlHighYield: 'Densidad endotelial crítica: <500-700 cél/mm2. DMEK proporciona una recuperación visual superior (agudeza >=20/25 en >85%) y una tasa de rechazo del aloinjerto <1% (la más baja de todos los trasplantes humanos). En ojos ciegos dolorosos, la indicación es Gundersen flap.',
    keyReferences: 'Melles et al. DMEK 2006 / Price et al. Ophthalmology 2014 / AAO BCSC Section 8',
    differentialDiagnoses: ['Distrofia de Fuchs avanzada', 'Rechazo endotelial de injerto previo', 'Queratopatía tóxica del segmento anterior (TASS)', 'Edema corneal por glaucoma agudo']
  },

  // CÓRNEA: Queratoconjuntivitis Vernal (VKC) y Alergia Severa
  {
    id: 'kb-cornea-alergia-vernal-trantas',
    keywords: ['vernal', 'vkc', 'atopica', 'akc', 'papilas gigantes', 'empedrado', 'cobblestone', 'horner-trantas', 'trantas', 'shield ulcer', 'ulcera en escudo', 'mbp', 'ciclosporina', 'verkazia'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Queratoconjuntivitis Vernal (VKC) y espectro alérgico ocular severo: hipersensibilidad mixta mediada por IgE y linfocitos Th2 con infiltración masiva de eosinófilos, papilas gigantes tarsales superiores en empedrado, Puntos de Horner-Trantas límbicos y riesgo de Úlcera en Escudo (Shield Ulcer) inducida por la proteína básica mayor (MBP).',
    pathophysiology: 'Activación de linfocitos Th2 con producción de IL-4, IL-5 e IL-13 que reclutan masivamente mastocitos y eosinófilos a la conjuntiva. La desgranulación de eosinófilos libera mediadores citotóxicos directos (Proteína Básica Mayor - MBP, Proteína Catiónica de Eosinófilos - ECP). La MBP disuelve los complejos de adhesión epitelial y la membrana de Bowman en el tercio superior de la córnea, impidiendo la reepitelización y formando la úlcera en escudo.',
    clinicalApplication: {
      guardia: '1) EVERSION PALPEBRAL SUPERIOR OBLIGATORIA: Inspección de papilas gigantes (>1 mm de diámetro) en tarso superior.\n2) Tinción con fluoresceína para descartar úlcera en escudo o queratitis punteada de Tobgy.\n3) Exploración del limbo superior buscando nódulos gelatinosos y Puntos de Horner-Trantas patognomónicos.\n4) Medición obligatoria de la presión intraocular (riesgo altísimo de glaucoma cortisónico infantil por tratamientos previos).',
      tratamiento: '• Desbridamiento mecánico en lámpara de hendidura o quirófano con hoja de bisturí de la placa blanca de moco y MBP en la base de la úlcera en escudo Grado 2-3 para permitir la migración epitelial.\n• Lente de contacto blando terapéutico de vendaje + colirio antibiótico sin conservantes.\n• Inmunomoduladores tópicos de base a largo plazo: Ciclosporina A catiónica 0.1% (Verkazia) 1 gota 4 veces al día en brotes, reduciendo a 2 veces al día; o Tacrolimus ungüento oftálmico 0.03-0.1% en fondos de saco.\n• Corticoides tópicos de superficie (Loteprednol 0.5% o Fluorometolona 0.1%) en ciclos cortos de 1 a 2 semanas para brotes agudos, SIEMPRE con monitorización estricta de PIO.\n• Antihistamínicos y estabilizadores de mastocitos tópicos (Olopatadina 0.2%) y compresas frías.',
      criteriosDerivacionOQuirurgicos: 'Úlcera en escudo refractaria a desbridamiento: Queratectomía superficial con recubrimiento de Membrana Amniótica (AMT) fijada con sutura o adhesivo de fibrina.',
      contraindicaciones: '1) PROHIBIDO el frotamiento ocular compulsivo (factor directo desencadenante de queratocono secundario severo en atópicos).\n2) PROHIBIDO prescribir corticoides tópicos potentes sin supervisión periódica cada 2 semanas por el riesgo catastrófico de glaucoma cortisónico ceguera silente pediátrica.'
    },
    pearlHighYield: 'Puntos de Horner-Trantas = Patognomónicos de Queratoconjuntivitis Vernal (acúmulos de eosinófilos en el limbo superior). La úlcera en escudo es una úlcera neuro-química tóxica causada por la Proteína Básica Mayor (MBP) de los eosinófilos, NO por infección primaria.',
    keyReferences: 'VEKTIS Study (Ophthalmology 2019) / AAO Pediatric Allergy Guidelines',
    differentialDiagnoses: ['Queratoconjuntivitis atópica (AKC)', 'Conjuntivitis papilar gigante (GPC)', 'Tracoma por Chlamydia', 'Toxicidad por conservantes']
  },

  // CÓRNEA: Rechazo Inmunológico del Injerto Corneal y Queratoplastia
  {
    id: 'kb-cornea-trasplante-khodadoust',
    keywords: ['rechazo injerto', 'queratoplastia', 'pkp', 'dalk', 'dmek', 'dsaek', 'khodadoust', 'linea de khodadoust', 'precipitados queraticos', 'falla del injerto', 'metilprednisolona'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Rechazo Inmunológico Agudo del Aloinjerto Corneal (Rechazo Endotelial con Línea patognomónica de Khodadoust): urgencia médica absoluta en paciente trasplantado mediada por linfocitos T citotóxicos CD8+, diferenciada de la falla primaria del injerto y revertible con corticoterapia sistémica y tópica intensiva inmediata.',
    pathophysiology: 'Ruptura del privilegio inmunológico corneal por inflamación, neovascularización receptora o retirada prematura de esteroides. Células dendríticas presentadoras de antígeno viajan por vasos linfáticos límbicos a ganglios regionales presentando antígenos HLA clase I y II a linfocitos T. Linfocitos T citotóxicos CD8+ efectores migran a cámara anterior e infiltran el endotelio donante, formando una línea de batalla mononuclear destructiva (Línea de Khodadoust) que migra a través del botón corneal lisando las células endoteliales donantes y dejando tras de sí edema estromal y epitelial irreversible.',
    clinicalApplication: {
      guardia: '1) Exploración biomicroscópica minuciosa con hendidura fina del botón donante y córnea receptora.\n2) Identificación de la Línea de Khodadoust: Línea blanquecina ondulada endotelial con precipitados queráticos adheridos en el disco donante que avanza desde la periferia hacia el centro.\n3) Cuantificar celularidad y flare en cámara anterior (Tyndall 2+ a 4+).\n4) Tonometría de aplanación (la trabeculitis puede elevar severamente la PIO).\n5) Descartar queratitis infecciosa sobre suturas flojas.',
      tratamiento: '• Corticoterapia Sistémica Intravenosa en Pulsos (Protocolo de Rescate Inmediato):\n  - Metilprednisolona intravenosa: 500 a 1000 mg IV diarios en infusión lenta durante 1 a 3 días consecutivos.\n• Corticoterapia Tópica Horaria sin Conservantes:\n  - Acetato de Prednisolona al 1% o Dexametasona 0.1%: 1 gota CADA HORA las 24 horas del día durante las primeras 48 horas (incluso despertando por la noche).\n• Inyección subconjuntival o peribulbar de Dexametasona (4-8 mg) para niveles intraoculares inmediatos.\n• Ciclopléjico (Ciclopentolato 1% c/8h) e hipotensores tópicos (Timolol/Brimonidina; evitar análogos de PG).\n• Desescalar muy lentamente a lo largo de 3 a 6 meses una vez revertida la línea y aclarado el estroma.',
      criteriosDerivacionOQuirurgicos: 'Si el rechazo es irreversible tras 4-6 semanas y evoluciona a descompensación corneal definitiva (falla secundaria): Re-queratoplastia (re-DMEK o re-DSAEK si el estroma anterior permanece transparente, o PKP si hay fibrosis difusa). En desprendimiento temprano de injerto endotelial DMEK: Maniobra de re-bubbling intracameral con aire o gas SF6 al 20%.',
      contraindicaciones: '1) NUNCA demorar el inicio del tratamiento intensivo con esteroides; cada día de retraso reduce drásticamente la probabilidad de revertir el rechazo.\n2) NUNCA confundir una Falla Primaria del Injerto (el botón nunca fue transparente desde el día 1 postoperatorio) con un Rechazo Endotelial (el injerto fue transparente y se descompensa con signos inflamatorios semanas o meses después).'
    },
    pearlHighYield: 'Línea de Khodadoust = Patognomónica de Rechazo Endotelial de Injerto Corneal. Tratado en las primeras 24-48 horas se revierte en >85-90% de los casos. En Queratoplastia Lamelar Anterior Profunda (DALK), el riesgo de rechazo endotelial es CERO (0%) porque se preserva el endotelio propio.',
    keyReferences: 'Collaborative Corneal Transplantation Studies (CCTS) / AAO BCSC Section 8 / Anshu et al. DMEK Rejection',
    differentialDiagnoses: ['Falla primaria del injerto (PGF)', 'Queratitis infecciosa bacteriana sobre sutura', 'Hipertensión ocular con edema corneal', 'Desprendimiento de injerto DMEK']
  },

  // CÓRNEA: Queratitis Infecciosa Bacteriana (Pseudomonas) y Fúngica (Fusarium)
  {
    id: 'kb-cornea-queratitis-infecciosa-bacteriana-fungica',
    keywords: ['queratitis bacteriana', 'pseudomonas', 'staphylococcus', 'queratitis fungica', 'fusarium', 'aspergillus', 'trauma vegetal', 'infiltrado estromal', 'hipopion', 'natamicina', 'colirios reforzados', 'vancomicina', 'ceftazidima', 'lesiones satelite'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Queratitis Infecciosa Aguda Grave: Úlcera bacteriana hiperaguda por Pseudomonas aeruginosa (necrosis licuefactiva estromal rápida, secreción verdosa mucopurulenta e hipopion en portadores de lentes) frente a Queratitis fúngica filamentosa (Fusarium solani / Aspergillus) con bordes plumosos y lesiones satélite tras microtrauma vegetal.',
    pathophysiology: 'En Pseudomonas: adherencia por pili tipo IV a epitelio corneal dañado -> producción masiva de elastasa (LasB), proteasa alcalina y exotoxina A que digieren el estroma corneal produciendo necrosis licuefactiva fulminante y perforación en 24-48 horas. En hongos filamentosos: las hifas invaden profundamente orientándose paralelamente a las laminillas estromales y penetran la membrana de Descemet hacia cámara anterior sin resistencia enzimática; el infiltrado presenta bordes plumosos mal delimitados e infiltrados inmunes satélites.',
    clinicalApplication: {
      guardia: '1) Raspado corneal urgente de bordes y fondo de la úlcera con espátula de Kimura o aguja 25G.\n2) Extensiones para frotis inmediato: Tinción de Gram (bacilos gramnegativos en Pseudomonas), Giemsa y Blanco de Calcoflúor (microscopía de fluorescencia para hifas fúngicas).\n3) Siembra directa en medios de cultivo: Agar sangre (bacterias), agar chocolate (Neisseria, Haemophilus), caldo de tioglicolato y Agar Sabouraud dextrosa a 25-30ºC para hongos.\n4) Si la úlcera mide >2 mm, compromete eje visual o presenta hipopion: Ingreso hospitalario o revisión obligada a las 24 horas.',
      tratamiento: '• Queratitis bacteriana severa: Terapia antibiótica tópica reforzada dual de amplio espectro:\n  - Vancomicina reforzada 50 mg/mL (1 gota cada 1 hora alternada) + Ceftazidima reforzada 50 mg/mL (o Tobramicina reforzada 14 mg/mL).\n  - Monoterapia de alternativa: Fluoroquinolona de 4ª generación (Moxifloxacino 0.5% o Gatifloxacino 0.5%) cada 15 min las primeras 2 horas, luego cada hora.\n• Queratitis fúngica filamentosa (Fusarium, Aspergillus):\n  - Natamicina suspensión al 5% tópica: 1 gota cada 1 hora día y noche (fármaco de elección avalado por el ensayo MUTT I).\n  - De segunda línea o afección estromal profunda: Voriconazol 1% tópico + Voriconazol oral 200 mg c/12h.\n• Ciclopléjico: Atropina 1% o Ciclopentolato 1% cada 8 horas.',
      criteriosDerivacionOQuirurgicos: 'Adelgazamiento estromal progresivo inminente a perforación o perforación franca: Adhesivo tisular de cianoacrilato con lente terapéutico (si perforación <1.5 mm) o Queratoplastia Penetrante Terapéutica (PKP) "en caliente" con margen corneal sano amplio de al menos 1-1.5 mm.',
      contraindicaciones: '1) PROHIBIDO el uso de corticoides tópicos en etapas iniciales activas bacterianas o en cualquier sospecha fúngica (desencadenan necrosis masiva e invasión fúngica endotelial).\n2) NUNCA ocluir con parche un ojo con sospecha de infección bacteriana o fúngica activa (el calor y la anoxia aceleran la proliferación y perforación).'
    },
    pearlHighYield: 'Ensayo MUTT I (Mycotic Ulcer Treatment Trial): La Natamicina tópica al 5% es significativamente superior al Voriconazol tópico para queratitis por hongos filamentosos (Fusarium), con menor tasa de perforación corneal y mejor agudeza visual final.',
    keyReferences: 'MUTT I and II Trials (JAMA Ophthalmol 2013) / SCUT Trial (Arch Ophthalmol 2012) / AAO BCSC Section 8',
    differentialDiagnoses: ['Acanthamoeba', 'Queratitis estromal por VHS', 'Queratitis por micobacterias atípicas', 'Úlcera neurotrófica sobreinfectada']
  },

  // CÓRNEA: Distrofias Corneales IC3D (Fuchs, TGFBI y Macular)
  {
    id: 'kb-cornea-distrofias-ic3d',
    keywords: ['distrofias corneales', 'ic3d', 'fuchs', 'guttas', 'tcf4', 'lattice', 'reticular', 'rojo congo', 'granular', 'masson', 'macular', 'azul alcian', 'ebmd', 'cogan', 'tgfbi', '5q31'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Distrofias Corneales según la Clasificación IC3D: Distrofia Endotelial de Fuchs (guttas, gen TCF4), Distrofias Estromales ligadas al gen TGFBI en 5q31 (Lattice tipo I amiloide y Granular tipo I hialina) frente a Distrofia Macular (autosómica recesiva, mucopolisacáridos, gen CHST6), y Distrofia de Membrana Basal Epitelial (EBMD / Cogan).',
    pathophysiology: 'Fuchs: mutación con expansión de tripletes CTG18.1 en el gen TCF4 que causa apoptosis endotelial prematura y secreción focal aberrante de colágeno fibrilar hacia la membrana de Descemet formando excrecencias colágenas en gota (guttas endoteliales). Al agotarse el endotelio claudica la deshidratación corneal, iniciándose el edema estromal y epitelial. En TGFBI (5q31): mutaciones de la proteína queratoepitelina; en Lattice depósitos amiloides filamentosos ramificados que tiñen con Rojo Congo (birrefringencia verde manzana); en Granular depósitos hialinos teñidos con tricrómico de Masson; en Macular mutación en CHST6 con déficit de sulfatotransferasa y acúmulo difuso de glicosaminoglicanos teñidos con Azul Alcián que llega hasta el limbo esclerocorneal sin zona clara de respeto.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía con iluminación especular y retroiluminación: Visualizar guttas centrales en "aspecto de metal batido" en Fuchs, o depósitos lineares ramificados (Lattice) o en "migas de pan" (Granular).\n2) Tinción con fluoresceína: Descartar rotura de bulas epiteliales en Fuchs descompensada o erosiones matutinas en EBMD.\n3) Paquimetría óptica/ultrasónica: Cuantificar edema matutino (aumento de paquimetría al despertar).\n4) Microscopía especular: Evaluar densidad endotelial, polimegatismo y pleomorfismo celular.',
      tratamiento: '• Fuchs inicial: Solución salina hipertónica de cloruro sódico al 5% (NaCl 5%) 4 veces al día y ungüento al acostarse; uso de secador de pelo a distancia de un brazo por las mañanas para acelerar la evaporación lagrimal.\n• Cirugía reconstructiva de elección en Fuchs: DMEK (Queratoplastia Endotelial de Membrana de Descemet) o DSAEK.\n• Distrofias estromales (Lattice, Granular) con compromiso visual o erosiones: Queratectomía Fototerapéutica (PTK con láser excímer) si los depósitos son anteriores; Queratoplastia Lamelar Anterior Profunda (DALK) si el endotelio es sano.\n• EBMD con erosiones recurrentes: Lubricantes densos nocturnos, lentes de contacto de vendaje terapéutico, pomada NaCl 5%, micropunción estromal anterior.',
      criteriosDerivacionOQuirurgicos: 'Descompensación corneal con pérdida visual irreversible o dolor por bulas recurrentes: DMEK/DSAEK en Fuchs; DALK o PKP en distrofias estromales avanzadas.',
      contraindicaciones: '1) PROHIBIDO realizar cirugía refractiva con LASIK en pacientes con EBMD (provoca desprendimiento epitelial masivo intraoperatorio o flap sloughing) ni en distrofias TGFBI (desencadena recidiva agresiva y acelerada de depósitos en la interfase corneal).'
    },
    pearlHighYield: 'Regla mnemotécnica histopatológica clásica de distrofias de córnea: "Marilyn Monroe Always Gets Her Men in L.A. County" -> Macular: Alcian blue (mucopolisacáridos, AR); Granular: Hyaline Masson trichrome (hialina, AD); Lattice: Amyloid Congo red (amiloide, AD). Fuchs se debe a expansión en TCF4.',
    keyReferences: 'IC3D Classification of Corneal Dystrophies 2nd Edition (Cornea 2015) / AAO BCSC Section 8',
    differentialDiagnoses: ['Guttas seniles fisiológicas', 'Queratopatía en banda', 'Distrofia polimorfa posterior (PPMD)', 'Degeneración nodular de Salzmann']
  },

  // CÓRNEA: Trauma Corneal, Anillo de Óxido y Erosión Recurrente
  {
    id: 'kb-cornea-trauma-erosion-cuerpo-extrano',
    keywords: ['cuerpo extrano', 'rust ring', 'anillo de oxido', 'algerbrush', 'erosion corneal recurrente', 'abrasion corneal', 'fresa', 'punzon', 'asp', 'ptk', 'metal'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Trauma Corneal Superficial: Cuerpo extraño metálico intraestromal con formación de anillo de óxido férrico (Rust Ring) y Síndrome de Erosión Corneal Recurrente (RCES) postraumático tras abrasión con bordes tangenciales (uñas, ramas, hojas de papel).',
    pathophysiology: 'La esquirla metálica se oxida rápidamente en el estroma corneal hidratado (<24 horas), liberando iones férricos que se difunden formando un anillo pardo de óxido (rust ring) que ejerce efecto citotóxico inhibiendo la migración epitelial. En el Síndrome de Erosión Recurrente, la injuria inicial daña la lámina lúcida y densa de la membrana basal epitelial; los hemidesmosomas regenerados son anómalos e inestables; al abrir bruscamente los párpados en la mañana, la adherencia del tarso seco avulsiona el epitelio corneal mal anclado provocando dolor lancinante agudo.',
    clinicalApplication: {
      guardia: '1) Instilar anestésico tópico (Tetracaína 0.5% / Proparacaína).\n2) Extracción reglada del cuerpo extraño metálico con aguja fina de 27G o 30G montada en jeringa bajo visión directa en lámpara de hendidura.\n3) Eliminación del anillo de óxido férrico (rust ring): Desbridar con aguja fina o fresa rotatoria de Algerbrush; si el óxido es profundo o cercano a Descemet, posponer 24-48h para permitir que el hierro se reblandezca y migre hacia la superficie de forma segura.\n4) Doble eversión palpebral superior para descartar cuerpos extraños subtarsales retenidos.\n5) Prescribir pomada antibiótica profiláctica (Tobramicina o Eritromicina) y lente de contacto de vendaje terapéutico.',
      tratamiento: '• Episodio agudo de erosión recurrente: Lente de contacto blando terapéutico (BCL) continuo por 4 a 6 semanas + pomada antibiótica sin conservantes.\n• Terapia de mantenimiento a largo plazo (6-12 meses): Pomada oftálmica hipertónica de cloruro sódico al 5% (NaCl 5%) aplicada estrictamente cada noche al acostarse (deshidrata el epitelio aumentando la adherencia de hemidesmosomas).\n• Doxiciclina oral 50 mg cada 12 horas + corticoide tópico suave (Fluorometolona) durante 4 semanas para inhibir metaloproteinasas de matriz (MMP-9) que lisan los complejos de anclaje.',
      criteriosDerivacionOQuirurgicos: 'Erosiones recurrentes refractarias a tratamiento médico:\n1) Micropunción Estromal Anterior (ASP) con aguja 27G fuera del eje pupilar (induce fibrosis focal de anclaje).\n2) Queratectomía Fototerapéutica (PTK con láser excímer de 5-8 µm) en el eje visual para ablación superficial de Bowman y recreación de una membrana basal regular.',
      contraindicaciones: '1) NUNCA prescribir colirios anestésicos tópicos para uso domiciliario por el paciente (inducen melting estromal, queratopatía neurotrófica y perforación ocular).\n2) NUNCA realizar micropunción estromal anterior en el eje óptico central (genera opacidades estromales permanentes y astigmatismo irregular).'
    },
    pearlHighYield: 'El despertar con dolor ocular punzante agudo y lagrimeo con antecedente de un rasguño previo por uña de bebé o rama vegetal es patognomónico del Síndrome de Erosión Corneal Recurrente. El pilar profiláctico de mantenimiento es la pomada de NaCl 5% nocturna.',
    keyReferences: 'AAO BCSC Section 8 / Wills Eye Hospital Corneal Trauma Protocol',
    differentialDiagnoses: ['Distrofia de Cogan (EBMD)', 'Queratitis herpética dendrítica', 'Úlcera infecciosa bacteriana incipiente', 'Cuerpo extraño subtarsal retenido']
  },

  // CÓRNEA: Herpes Zóster Oftálmico (HZO) y Signo de Hutchinson
  {
    id: 'kb-cornea-herpes-zoster-oftalmico',
    keywords: ['herpes zoster', 'hzo', 'signo de hutchinson', 'hutchinson', 'pseudodendrita', 'neuralgia posherpetica', 'v1', 'nasociliar', 'valaciclovir', 'aciclovir oral'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Herpes Zóster Oftálmico (HZO): reactivación del virus varicela-zóster (VVZ) en el ganglio de Gasser que compromete la división oftálmica del nervio trigémino (V1), con Signo de Hutchinson patognomónico, pseudodendritas corneales en placa, uveítis anterior hipertensiva y riesgo de neuralgia posherpética.',
    pathophysiology: 'Reactivación del VVZ acantonado en ganglios sensoriales con diseminación centrífuga por la rama oftálmica de V1. La rama nasociliar inerva tanto la punta y ala de la nariz como las estructuras del globo ocular (córnea, iris, cuerpo ciliar). La presencia de vesículas cutáneas en la punta de la nariz (Signo de Hutchinson) predice un riesgo del 75-80% de afectación ocular ipsilateral severa. En la córnea, el virus produce pseudodendritas (placas epiteliales sobreelevadas mucosas, sin bulbos terminales, que tiñen débilmente con fluoresceína). La afectación estromal posterior y la uveítis se deben a vasculitis oclusiva isquémica mediada por complejos inmunes.',
    clinicalApplication: {
      guardia: '1) Inspección dermatológica rigurosa del dermatoma V1 ipsilateral (respeto estricto de la línea media frontal).\n2) Comprobar Signo de Hutchinson (vesículas o costras en la punta nasal).\n3) Biomicroscopía corneal: Diferenciar pseudodendritas (sobreelevadas, sin bulbos terminales verdaderos) de las dendritas de VHS (excavadas con bulbos terminales).\n4) Medir la presión intraocular con aplanación (la trabeculitis por HZO genera picos de PIO muy elevados).\n5) Evaluar sensibilidad corneal táctil con algodón (hipoestesia marcada).',
      tratamiento: '• Antiviral Sistémico Oral Inmediato (iniciar en las primeras 72h tras el exantema):\n  - Valaciclovir: 1000 mg vía oral cada 8 horas (3 g/día) durante 7 a 10 días (de elección por mejor biodisponibilidad y posología).\n  - Alternativa: Aciclovir oral 800 mg 5 veces al día (4 g/día) por 7 a 10 días.\n  - En inmunodeprimidos o afectación del vértice orbitario: Aciclovir intravenoso 10 mg/kg cada 8 horas.\n• Queratitis estromal o uveítis anterior hipertensiva: Corticoides tópicos (Prednisolona 1% cada 4-6h) con pauta de reducción sumamente lenta a lo largo de meses, SIEMPRE manteniendo cobertura antiviral profiláctica.\n• Pseudodendritas epiteliales tempranas: Lubricantes oculares sin conservantes y pomada de eritromicina; no requieren antivirales tópicos rutinarios.',
      criteriosDerivacionOQuirurgicos: 'Defecto epitelial neurotrófico persistente refractario: Cenegermin (rhNGF / Oxervate), recubrimiento con membrana amniótica o tarsorrafia quirúrgica temporal.',
      contraindicaciones: 'NUNCA suspender bruscamente los corticoides tópicos en queratitis o uveítis por Zóster; la retirada súbita genera un efecto rebote severo con trabeculitis aguda y pérdida visual.'
    },
    pearlHighYield: 'Signo de Hutchinson positivo = Vesículas en la punta de la nariz (rama nasociliar del trigémino); implica un 75-80% de probabilidad de afectación ocular. Las lesiones corneales de Zóster son PSEUDODENDRITAS (en placa, sobreelevadas, sin bulbos terminales).',
    keyReferences: 'Zoster Eye Disease Study (ZEDS) / AAO BCSC Section 8 / Hope-Simpson Hypothesis',
    differentialDiagnoses: ['Queratitis por Virus Herpes Simple (VHS)', 'Queratitis por Acanthamoeba', 'Abrasión corneal recurrente', 'Erosión por toxicidad medicamentosa']
  },

  // CÓRNEA: Degeneraciones Corneales (Pterigión, Queratopatía en Banda y EDTA)
  {
    id: 'kb-cornea-degeneraciones-pterigion-banda',
    keywords: ['pterigion', 'pinguecula', 'autoinjerto limbar', 'esclera desnuda', 'queratopatia en banda', 'edta', 'quelacion', 'arco senil', 'gerontoxon', 'stocker', 'recidiva'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Degeneraciones y Depósitos Corneales: Pterigión primario y recidivante (degeneración elastótica conjuntival que cruza el limbo y destruye la membrana de Bowman) tratado con autoinjerto conjuntival limbar (CAG) con fibrina vs Queratopatía en Banda calcárea tratada con desepitelización y quelación estromal con EDTA sódico al 3%.',
    pathophysiology: 'En Pterigión: exposición solar crónica a radiación UV-B focalizada en el limbo nasal (efecto Coroneo) que daña las células madre límbicas y estimula fibroblastos conjuntivales aberrantes con sobreexpresión de TGF-beta, VEGF y metaloproteinasas; esto produce elastosis tisular, neovascularización e invasión centrípeta destruyendo la membrana de Bowman. Se asocia a la línea férrica de Stocker en su borde anterior. En Queratopatía en Banda: precipitación de sales de fosfato cálcico (hidroxiapatita) en la membrana de Bowman y estroma anterior dentro de la hendidura interpalpebral; los factores desencadenantes incluyen evaporación lagrimal con alcalinización en ojos con uveítis crónica pediátrica (artritis idiopática juvenil), silicona intraocular o hipercalcemia sistémica.',
    clinicalApplication: {
      guardia: '1) Valorar extensión del pterigión (distancia en mm desde el limbo hacia el centro pupilar) y astigmatismo corneal asimétrico inducido por aplanamiento horizontal.\n2) En queratopatía en banda: Inspección con biomicroscopía para identificar la banda horizontal blanco-grisácea con orificios lúcidos circulares ("aspecto en queso suizo" donde los nervios corneales perforan Bowman) y descartar erosiones epiteliales por espículas de calcio.\n3) Solicitar niveles de calcio, fósforo y ácido úrico sérico si no hay causa ocular obvia.',
      tratamiento: '• Cirugía de elección para Pterigión: Escisión amplia de cabeza y cuerpo del pterigión + reconstrucción obligatoria con Autoinjerto Conjuntival Autólogo con células madre límbicas (CAG) tomado del limbo superior, fijado preferentemente con Adhesivo Biológico de Fibrina (Tisseel) en lugar de suturas (tasa de recidiva <2-3% vs >30-50% con técnica de esclera desnuda).\n• Manejo de la Queratopatía en Banda:\n  - Quelación química con EDTA: En quirófano o lámpara de hendidura con anestesia tópica, desepitelizar mecánicamente la zona de la banda; aplicar solución de Sal Disódica de EDTA al 3% mediante hisopo de algodón frotando suavemente durante 3 a 5 minutos hasta que los depósitos de calcio se disuelvan por completo; lavar abundantemente con solución salina balanceada y colocar lente terapéutico blando de vendaje.',
      criteriosDerivacionOQuirurgicos: 'Pterigión con invasión >3 mm que amenaza el eje visual o induce astigmatismo irregular refractivo; queratopatía en banda con dolor por erosiones recurrentes o reducción de la agudeza visual central.',
      contraindicaciones: '1) PROHIBIDA la técnica quirúrgica de "esclera desnuda" sin injerto para el pterigión debido a su inaceptable tasa de recidiva agresiva (>40%).\n2) NUNCA emplear Mitomicina C (MMC) sin control estricto de tiempo y concentración por riesgo de necrosis escleral avascular, melting corneal y glaucoma.'
    },
    pearlHighYield: 'Para pterigión, el autoinjerto conjuntival autólogo con células madre límbicas y adhesivo de fibrina es la técnica de elección (recidiva <3%). En queratopatía en banda, los espacios redondeados libres de calcio en "queso suizo" corresponden a los canales de paso de los nervios ciliares a través de la membrana de Bowman; el tratamiento resolutivo es la quelación con EDTA sódico 3%.',
    keyReferences: 'Cochrane Review: Conjunctival autograft for pterygium / AAO BCSC Section 8: External Disease and Cornea',
    differentialDiagnoses: ['Neoplasia Escamosa de la Superficie Ocular (OSSN)', 'Pseudopterigión postraumático', 'Queratopatía lipídica', 'Degeneración nodular de Salzmann']
  },

  // CORNEA: Queratitis Ulcerativa Periférica (PUK) y Úlcera de Mooren
  {
    id: 'kb-cornea-puk-vasculitis-mooren',
    keywords: ['puk', 'queratitis ulcerativa periferica', 'ulcera de mooren', 'vasculitis', 'artritis reumatoide', 'wegener', 'gpa', 'c-anca', 'corneal melt', 'aines contraindicados', 'rituximab', 'cianoacrilato'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Queratitis Ulcerativa Periférica (PUK) asociada a Vasculitis Sistémica frente a Úlcera de Mooren Primaria.',
    pathophysiology: 'Depósito de inmunocomplejos en el lecho vascular del limbo esclerocorneal con reclutamiento masivo de neutrófilos activados y liberación descontrolada de metaloproteinasas (MMP-1, MMP-9) que lisan las fibras de colágeno estromal ("corneal melt"). En PUK se asocia a vasculitis sistémicas letales (Artritis Reumatoide activa con 40% de mortalidad a 5 años o Granulomatosis con Poliangitis GPA c-ANCA positiva). La Úlcera de Mooren es autoinmune ocular idiopática pura que respeta la esclera y presenta un borde socavado en festón.',
    clinicalApplication: {
      guardia: '1) Paciente con adelgazamiento corneal yuxtalimbar en semiluna doloroso: Examen bajo lámpara de hendidura con tinción de fluoresceína y hendidura fina para medir la profundidad estromal remanente y descartar descemetocele inminente o perforación.\n2) Evaluar la esclera contigua: Si hay escleritis necrotizante violácea que no aclara con fenilefrina, es una PUK sistémica hasta demostrar lo contrario.\n3) Solicitar de urgencia: c-ANCA (anti-PR3), p-ANCA, Factor Reumatoide, anti-CCP, ANA, reactantes de fase aguda y TC de tórax.\n4) ¡PROHIBICIÓN ESTRICTA DE AINES TÓPICOS! (Nepafenaco, ketorolaco, diclofenaco están contraindicados absolutamente por desencadenar necrosis estromal licuefactiva fulminante y perforación en horas).',
      tratamiento: '• Terapia Médica Sistémica Inmediata (Salva la vida y el ojo):\n  - Bolos IV de Metilprednisolona: 1 g/día durante 3 días consecutivos.\n  - Inmunosupresión biológica de rescate en PUK: Rituximab (anti-CD20) o Ciclofosfamida oral/pulsos IV en coordinación con Reumatología.\n  - Doxiciclina oral 100 mg cada 12 horas (inhibe directamente metaloproteinasas estromales MMP-1 y MMP-9).\n• Terapia Quirúrgica Tectónica:\n  - Sellado con adhesivo tisular de Cianoacrilato + Lente de contacto terapéutica en perforaciones o descemetoceles <1 mm.\n  - Resección de conjuntiva límbica adyacente (peritomía amplia de 3-4 mm) en Úlcera de Mooren y PUK refractaria para eliminar la fuente de colagenasas y neutrófilos.\n  - Queratoplastia tectónica lamelar en parche en semiluna si la pérdida de sustancia es >2 mm.',
      criteriosDerivacionOQuirurgicos: 'Adelgazamiento estromal >80%, descemetocele o sospecha de vasculitis sistémica necrotizante.',
      contraindicaciones: 'PROHIBICIÓN ABSOLUTA DE AINES TÓPICOS. PROHIBIDO tratar únicamente con colirios a un paciente con PUK y vasculitis sistémica.'
    },
    pearlHighYield: 'PUK Board Pearl: Adelgazamiento en semiluna yuxtalimbar con escleritis = Vasculitis sistémica (AR o GPA c-ANCA/PR3). Mortalidad del 40% a 5 años sin inmunosupresión sistémica. ¡AINEs tópicos formalmente CONTRAINDICADOS por inducir corneal melt y perforación!',
    keyReferences: 'Foster CS et al. Systemic immunosuppression for PUK / AAO BCSC Section 8',
    differentialDiagnoses: ['Degeneración Marginal de Terrien (epitelio intacto, no dolorosa)', 'Queratitis bacteriana marginal por estafilococo', 'Úlcera de Mooren clásica']
  },

  // CORNEA: Deficiencia de Células Madre Límbicas (LSCD) y SLET
  {
    id: 'kb-cornea-lscd-slet',
    keywords: ['lscd', 'deficiencia de celulas madre limbicas', 'empalizadas de vogt', 'conjuntivalizacion corneal', 'celulas caliciformes', 'slet', 'clet', 'klal', 'quemadura quimica', 'aniridia', 'pax6'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Deficiencia de Células Madre Límbicas (LSCD). Invasión patológica conjuntival sobre la córnea y fallo regenerativo epitelial.',
    pathophysiology: 'Destrucción o disfunción del nicho de las empalizadas de Vogt en el limbo esclerocorneal (por quemaduras químicas por álcalis, Stevens-Johnson, aniridia congénita por mutación de PAX6 o uso crónico de conservantes). La pérdida de la barrera anatómica límbica permite la migración de epitelio conjuntival sobre la córnea, perdiendo la transparencia y avascularidad fisiológicas con pannus fibrovascular de 360 grados y erosiones crónicas.',
    clinicalApplication: {
      guardia: '1) Biomicroscopia de alta magnificación: Desaparición de las empalizadas de Vogt en el limbo.\n2) Tinción con fluoresceína en remolino (vortex pattern) y avance de pannus fibrovascular superficial con pérdida de la línea nítida límbica.\n3) Prueba diagnóstica patognomónica de referencia (Gold Standard): Citología de impresión corneal con tinción de PAS que demuestra células caliciformes (goblet cells ricas en mucina) sobre la superficie de la córnea.\n4) ¡REGLA QUIRÚRGICA ABSOLUTA!: NUNCA realizar una queratoplastia penetrante (PKP) convencional en un ojo con LSCD no reconstruido, pues el injerto donante se conjuntivalizará y fracasará en el 100% de los casos.',
      tratamiento: '• Manejo Médico Inicial: Eliminación total de colirios con conservantes (cero cloruro de benzalconio BAK), lubricantes libres de conservantes, suero autólogo al 20-50% y adaptación de lentes esclerales de gran diámetro (PROSE).\n• Tratamiento Quirúrgico de Elección en LSCD Unilateral:\n  - SLET Autólogo (Simple Limbal Epithelial Transplantation): Disección del pannus corneal receptor, colocación de membrana amniótica humana criopreservada fijada con adhesivo de fibrina, y siembra de 8 a 12 microinjertos limbares (tomados de una pequeña biopsia de 2x1 mm del ojo contralateral sano) adheridos con fibrina.\n• Tratamiento Quirúrgico en LSCD Bilateral:\n  - SLET Alogénico o KLAL (Keratolimbal Allograft) bajo inmunosupresión sistémica rigurosa (Tacrolimus + Micofenolato) o trasplante de mucosa oral cultivada (COMET).\n• Queratoplastia óptica secundaria: Solo puede plantearse 6 a 12 meses después de haber restaurado con éxito un epitelio corneal sano y estable mediante SLET.',
      criteriosDerivacionOQuirurgicos: 'Pannus corneal con invasión del eje visual y citología de impresión positiva para células caliciformes.',
      contraindicaciones: 'PROHIBIDO realizar queratoplastia penetrante óptica directa en ojos con deficiencia límbica activa sin reconstrucción limbar previa.'
    },
    pearlHighYield: 'LSCD Board Pearl: Pérdida de empalizadas de Vogt + conjuntivalización corneal. Gold standard: Citología de impresión con células caliciformes (PAS+). Cirugía de elección en unilaterales: SLET autólogo sobre membrana amniótica. ¡NUNCA realizar trasplante corneal penetrante sin restaurar antes el limbo!',
    keyReferences: 'Sangwan et al. SLET technique / TFOS Limbal Stem Cell Deficiency Guidelines',
    differentialDiagnoses: ['Ojo seco severo con queratopatía punteada grosera', 'Neoplasia Intraepitelial de la Superficie Ocular (OSSN)', 'Pannus tracomatoso']
  },

  // CORNEA: Penfigoide Ocular Cicatrizal (MMP) y Stevens-Johnson / NET
  {
    id: 'kb-cornea-penfigoide-stevens-johnson',
    keywords: ['penfigoide de membranas mucosas', 'mmp', 'penfigoide ocular cicatrizal', 'simblefaron', 'foster', 'stevens-johnson', 'ssj', 'net', 'dapsona', 'g6pd', 'membrana amniotica urgente'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Enfermedades Cicatrizales de la Superficie Ocular: Penfigoide de Membranas Mucosas (MMP) y Síndrome de Stevens-Johnson / NET.',
    pathophysiology: '1) Penfigoide de Membranas Mucosas (MMP): Enfermedad autoinmune crónica mediada por autoanticuerpos frente a la membrana basal conjuntival (anti-BP180, laminina-332) con depósito lineal de IgG/C3 que activa miofibroblastos y fibrosis progresiva.\n2) Síndrome de Stevens-Johnson (SSJ / NET): Reacción de hipersensibilidad tipo IV mediada por linfocitos CD8+ inducida por fármacos (Sulfas, Antiepilépticos) con apoptosis masiva del epitelio mucocutáneo y necrosis conjuntival.',
    clinicalApplication: {
      guardia: '1) En sospecha de Penfigoide (paciente anciano con conjuntivitis crónica): Eversión obligada del párpado inferior y medición milimétrica de la profundidad del fondo de saco inferior (sospecha si <8 mm) y búsqueda de puentes de simbléfaron.\n2) Confirmación de Penfigoide: Biopsia conjuntival para Inmunofluorescencia Directa (DIF) que revela depósito lineal continuo de IgG/IgA/C3 en la membrana basal.\n3) En Síndrome de Stevens-Johnson en UCI/Urgencias (VENTANA CRÍTICA DE 7-10 DÍAS):\n   • Interconsulta urgente inmediata; no esperar a la fase cicatrizal tardía.\n   • Lisis diaria suave de pseudomembranas para impedir adherencias conjuntivales.\n   • COLOCACIÓN HIPERAGUDA DE MEMBRANA AMNIÓTICA (ProKera o suturada a fórnices y margen palpebral con bolsters) en los primeros 7 días de la enfermedad; es la única medida demostrada que previene la ceguera cicatrizal irreversible.',
      tratamiento: '• Manejo Médico de Penfigoide:\n  - Los corticoides tópicos son ineficaces para frenar la fibrosis submucosa.\n  - Dapsona oral 50 a 150 mg/día (¡OBLIGATORIO solicitar dosificación de enzima G6PD previa para evitar anemia hemolítica mortal!).\n  - En progresión rápida o Foster III-IV: Ciclofosfamida oral/pulsos IV o terapia biológica con Rituximab (1000 mg días 1 y 15).\n• En SSJ crónico con ojo seco y queratinización terminal: Queratoprótesis de Boston Tipo I o Tipo II / OOKP.',
      criteriosDerivacionOQuirurgicos: 'Colocación urgente de membrana amniótica en fase aguda de SSJ. Inmunosupresión sistémica en penfigoide.',
      contraindicaciones: 'PROHIBIDA la cirugía ocular electiva en penfigoide sin control inmunosupresor sistémico previo (desencadena reactivación fulminante).'
    },
    pearlHighYield: 'Penfigoide vs SSJ Board Pearl: Penfigoide = Enfermedad autoinmune progresiva con autoanticuerpos en BMZ (DIF lineal IgG/C3); tratamiento inmunosupresor sistémico (Dapsona si G6PD normal, Ciclofosfamida, Rituximab). SSJ = Reacción aguda a fármacos; colocación urgente de Membrana Amniótica en fórnices en los primeros 7 días previene la ceguera cicatrizal.',
    keyReferences: 'Foster CS Cicatricial Pemphigoid Staging / Gregory DG Amniotic Membrane in Acute SJS',
    differentialDiagnoses: ['Pseudopenfigoide tóxico por colirios con BAK', 'Conjuntivitis cicatrizal tracomatosa (afecta párpado superior)', 'Enfermedad injerto contra huésped (GVHD)']
  },

  // CORNEA: Queratocono Avanzado e Hidrops Corneal Agudo
  {
    id: 'kb-cornea-hidrops-agudo-neumotaponamiento',
    keywords: ['hidrops corneal', 'queratocono', 'rotura de descemet', 'eye rubbing', 'frotamiento ocular', 'edema en vidrio lechoso', 'c3f8', 'sf6', 'neumotaponamiento', 'as-oct'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Hidrops Corneal Agudo en Queratocono Avanzado por Rotura Espontánea de la Membrana de Descemet.',
    pathophysiology: 'Fractura mecánica aguda de la membrana de Descemet y el endotelio en el vértice del cono ectásico adelgazado, desencadenada habitualmente por frotamiento ocular compulsivo (eye rubbing) en atópicos o pacientes con Síndrome de Down. El humor acuoso penetra masivamente en el estroma corneal desprovisto de bomba endotelial, produciendo un edema masivo en "vidrio lechoso", lagunas estromales y bullas epiteliales con paquimetría superior a 1200-1500 µm.',
    clinicalApplication: {
      guardia: '1) Paciente con queratocono que consulta por dolor súbito, ojo rojo violáceo y caída abrupta de la agudeza visual.\n2) Biomicroscopia: Edema estromal difuso blanquecino en vidrio esmerilado que borra los detalles de la cámara anterior.\n3) Realizar inmediatamente prueba de Seidel con fluoresceína al 2% para descartar perforación corneal verdadera.\n4) Examen confirmatorio de referencia: AS-OCT (OCT de Segmento Anterior) para visualizar la brecha de Descemet, los extremos enrollados ("scrolls") y macroquistes estromales.\n5) ¡PROHIBIDO indicar queratoplastia penetrante en fase edematosa aguda! (El tejido hiperedematoso no retiene suturas y tiene un índice de fracaso inaceptable).',
      tratamiento: '• Estándar Quirúrgico Contemporáneo de Rescate Rápido:\n  - Neumotaponamiento Intracameral con Gas Isoexpansivo: Inyección intracameral de 0.2 a 0.3 mL de Perfluoropropano (C3F8 al 14%) o Hexafluoruro de azufre (SF6 al 20%) llenando 2/3 de la cámara anterior.\n  - Mecanismo: La burbuja de gas actúa como una férula mecánica neumática que sella la brecha de Descemet, acortando la resolución del edema de 3-4 meses a solo 2-3 semanas y reduciendo la neovascularización y leucoma residual.\n  - ¡IRIDOTOMÍA PERIFÉRICA DE SEGURIDAD OBLIGATORIA!: Previene el glaucoma agudo por bloqueo pupilar por gas.\n  - Posicionamiento estricto en decúbito supino (boca arriba) durante 48 a 72 horas.\n• Manejo Médico Coadyuvante: Colirio de Cloruro de Sodio al 5% hiperosmótico, colirio hipotensor acuoso (Timolol + Dorzolamida) y profilaxis antibiótica sin conservantes.',
      criteriosDerivacionOQuirurgicos: 'Neumotaponamiento intracameral con gas C3F8 temprano en las primeras 2 semanas del cuadro.',
      contraindicaciones: 'NUNCA realizar trasplante corneal urgente (PKP) en pleno edema agudo. PROHIBIDO inyectar gas C3F8 al 100% puro (debe diluirse a concentración isoexpansiva al 14%).'
    },
    pearlHighYield: 'Hidrops Corneal Board Pearl: Rotura aguda de la membrana de Descemet en queratocono por frotamiento ocular compulsivo. El Neumotaponamiento Intracameral con gas C3F8 al 14% sella la brecha y reduce la resolución de meses a 2 semanas. Iridotomía obligada para evitar bloqueo pupilar. ¡No operar PKP en fase aguda!',
    keyReferences: 'Basu S et al. Intracameral Gas Injection in Acute Hydrops / AAO BCSC Section 8',
    differentialDiagnoses: ['Queratitis infecciosa bacteriana con hipopión', 'Queratopatía bullosa pseudofáquica descompensada', 'Desprendimiento de Descemet post-quirúrgico']
  },

  // CORNEA: Queratopatía Neurotrófica (NK) y Cenegermina
  {
    id: 'kb-cornea-queratopatia-neurotrofica-cenegermina',
    keywords: ['queratopatia neurotrofica', 'nk', 'mackie', 'denervacion trigemino', 'v1', 'anestesia corneal', 'ped', 'oxervate', 'cenegermina', 'rhngf', 'suero autologo', 'neurotizacion'],
    subspecialty: 'Córnea y Superficie Ocular',
    diagnosticSummary: 'Queratopatía Neurotrófica (NK). Trastorno degenerativo por denervación trigeminal sensitiva con pérdida de trofismo epitelial.',
    pathophysiology: 'Lesión o disfunción de la división oftálmica del nervio trigémino (V1) debida a infección herpética previa (HZO o VHS), cirugía de fosa posterior (resección de neurinoma del acústico / schwannoma vestibular), diabetes avanzada o toxicidad por conservantes (BAK). La pérdida de neuropéptidos sensoriales esenciales (Sustancia P, CGRP, NGF) detiene la mitosis epitelial y produce defectos epiteliales persistentes (PED) que progresan a la perforación en ausencia patognomónica de dolor.',
    clinicalApplication: {
      guardia: '1) Paciente con defecto epitelial corneal grande o úlcera estromal que llamativamente NO REFIERE DOLOR ni fotofobia.\n2) Test de Sensibilidad Corneal (Estesiometría de Cochet-Bonnet o filamento de algodón) OBLIGATORIO: Constata hipoestesia severa o anestesia corneal completa ($0\text{ cm}$ de filamento).\n3) Clasificación de Mackie:\n   • Estadio 1: Queratitis punteada difusa e hiperplasia epitelial opaca.\n   • Estadio 2: Defecto Epitelial Persistente (PED) ovalado de bordes lisos enrollados y engrosados.\n   • Estadio 3: Úlcera estromal indolente, adelgazamiento (melting) o perforación corneal franca.\n4) RM de ángulo pontocerebeloso si no hay causa herpética clara conocida.',
      tratamiento: '• Terapia Biológica de Vanguardia (Estadios 2 y 3 de Mackie):\n  - CENEGERMINA al 0.002% (Factor de Crecimiento Nervioso Recombinante Humano rhNGF - Oxervate): 1 gota cada 2 horas (6 veces al día) durante 8 semanas continuas. Es el primer tratamiento biológico que cura el epitelio y regenera las fibras del plexo nervioso subbasal en IVCM.\n• Medidas Terapéuticas Coadyuvantes:\n  - Eliminación absoluta de cualquier colirio con conservantes (cero BAK).\n  - Gotas de Suero Autólogo al 20-50% (aporta sustancia P y factores de crecimiento biológicos).\n  - Lente de contacto terapéutica de gran diámetro o lente escleral permeable al gas (PROSE).\n  - Tarsorrafia temporal quirúrgica (o ptosis inducida con toxina botulínica en el elevador del párpado) si no se dispone de Cenegermina.\n• Tratamiento Quirúrgico Definitivo en Refractarios:\n  - Neurotización Corneal Quirúrgica: Transferencia microquirúrgica de ramas del nervio supraorbitario o supratroclear al limbo esclerocorneal.',
      criteriosDerivacionOQuirurgicos: 'Defecto epitelial persistente >2 semanas o úlcera estromal neurotrófica.',
      contraindicaciones: 'PROHIBIDO prescribir colirios con conservantes (BAK) o AINEs tópicos en un ojo neurotrófico. NUNCA realizar raspado corneal traumático en un PED neurotrófico.'
    },
    pearlHighYield: 'Queratopatía Neurotrófica Board Pearl: Denervación de V1 (post-herpes, neurinoma del acústico o diabetes). Ausencia patognomónica de dolor con defecto epitelial persistente ovalado de bordes enrollados (Mackie 2). Tratamiento biológico de elección: Cenegermina (rhNGF tópica 6 veces/día por 8 semanas) o neurotización corneal.',
    keyReferences: 'Bonini S et al. REPARO Trial for Cenegermin / Mackie Classification of Neurotrophic Keratitis',
    differentialDiagnoses: ['Queratitis por exposición por parálisis del VII par', 'Toxicidad iatrogénica por colirios con BAK o anestésicos tópicos', 'Queratitis herpética dendrítica activa']
  },

  // 4. GLAUCOMA: Cierre angular primario agudo
  {
    id: 'kb-glaucoma-cierre-angular',
    keywords: ['cierre angular', 'bloqueo pupilar', 'glaucoma agudo', 'midriasis media', 'edema microquistico', 'manitol', 'acetazolamida', 'iridotomia', 'yag', 'pio 50', 'pio 60'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Ataque Agudo de Glaucoma por Cierre Angular Primario con Bloqueo Pupilar. Urgencia oftalmológica mayor que puede conducir a atrofia óptica irreversible en pocas horas.',
    pathophysiology: 'En ojos con longitud axial corta, cámara anterior estrecha y cristalino voluminoso, la aposición entre el borde pupilar y la cara anterior del cristalino genera un bloqueo pupilar relativo -> aumento de presión en cámara posterior -> abombamiento anterior del iris periférico ("iris en bombe") -> oclusión completa de la malla trabecular por el iris -> ascenso fulminante de la PIO (40-70 mmHg) con edema corneal microquístico e isquemia del esfínter pupilar (midriasis media arrefléctica).',
    clinicalApplication: {
      guardia: '1) Canalizar vía venosa periférica.\n2) Infusión rápida de Manitol 20% IV a dosis de 1.5 a 2 g/kg (250-300 mL en adulto) a pasar en 30-45 minutos (deshidrata el cuerpo vítreo y reduce el volumen intraocular).\n3) Acetazolamida 500 mg VO o IV (inhibidor de anhidrasa carbónica para frenar producción de humor acuoso).\n4) Hipotensores tópicos triples: Timolol 0.5% + Brimonidina 0.15% + Brinzolamida 1% (1 gota cada uno).\n5) Corticoide tópico (Prednisolona 1%) para reducir la inflamación de cámara anterior.',
      tratamiento: '• Pilocarpina 2% tópica: Solo es efectiva cuando la PIO desciende por debajo de 30-35 mmHg (por encima de esa presión, la isquemia del esfínter pupilar impide su contracción).\n• Tratamiento definitivo: Iridotomía periférica con láser Nd:YAG (LPI) tan pronto como la córnea aclare y ceda el edema (típicamente a las pocas horas tras romper el ataque).\n• IRIDOTOMÍA PROFILÁCTICA OBLIGATORIA EN EL OJO CONTRALATERAL.',
      criteriosDerivacionOQuirurgicos: 'Si el ataque es refractario a medicación máxima tras 2 horas: Paracentesis corneal descompresiva en lámpara de hendidura por oftalmólogo experto o facoemulsificación / extracción del cristalino (el estudio EAGLE demostró que la extracción precoz de cristalino transparente es superior a la iridotomía en cierre angular primario con PIO >30).',
      contraindicaciones: '1) NUNCA instilar colirios midriáticos (Tropicamida, Fenilefrina, Ciclopentolato, Atropina).\n2) Precaución con Manitol en ancianos con insuficiencia cardíaca congestiva o insuficiencia renal severa (riesgo de edema agudo de pulmón por sobrecarga de volumen circulante).'
    },
    pearlHighYield: 'El ojo contralateral en un ataque agudo tiene un 50-80% de riesgo de sufrir el mismo cuadro en 5 años; la iridotomía periférica con láser YAG profiláctica bilateral es obligatoria.',
    keyReferences: 'EGS Guidelines 5th Edition / EAGLE Trial (Lancet 2016)',
    differentialDiagnoses: ['Glaucoma neovascular agudo', 'Glaucoma facomórfico', 'Glaucoma maligno (bloqueo ciliar)', 'Uveítis hipertensiva']
  },

  // 5. GLAUCOMA: Hipema traumático y Anemia Falciforme (Drepanocitosis)
  {
    id: 'kb-glaucoma-hipema-drepanocitosis',
    keywords: ['hipema', 'falciforme', 'drepanocitosis', 'sickle cell', 'sickledex', 'sangre en camara anterior', 'bloqueo trabecular', 'eritrocitos'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Hipema traumático en paciente con rasgo o enfermedad de células falciformes (Sickle Cell Trait / Hemoglobinopatía S).',
    pathophysiology: 'En pacientes con HbS, las condiciones naturales de la cámara anterior (relativa hipoxia y pH ligeramente ácido) inducen la polimerización de la hemoglobina anormal y la falciformación ("sickling") de los hematíes. Los eritrocitos falciformes rígidos e insolubles quedan atrapados en los poros de la malla trabecular, obstruyéndola por completo. En estos pacientes, elevaciones moderadas de PIO (>24 mmHg durante >24 horas) causan isquemia de la cabeza del nervio óptico y oclusión de la arteria central de la retina.',
    clinicalApplication: {
      guardia: '1) Reposo estricto con cabecera elevada a 30-45º para favorecer el depósito gravitacional inferior del hipema lejos del eje visual y ángulo superior.\n2) Despistaje obligatorio en todo paciente con hipema de ascendencia africana o mediterránea: prueba de Sickledex o electroforesis de hemoglobina.\n3) Protector ocular rígido transparente (sin apósito compresivo) para prevenir resangrado (el resangrado ocurre típicamente entre el 3er y 5to día).\n4) Monitoreo de PIO cada 6-8 horas.',
      tratamiento: '• Hipotensores tópicos permitidos: Beta-bloqueantes tópicos (Timolol 0.5% c/12h).\n• Ciclopléjico (Atropina 1% c/12h) para inmovilizar iris y cuerpo ciliar y prevenir resangrado.\n• Corticoide tópico (Prednisolona 1% c/6h) para estabilizar la barrera hematoacuosa.',
      criteriosDerivacionOQuirurgicos: 'Lavado quirúrgico de cámara anterior por paracentesis: En falciforme si la PIO es >24 mmHg durante más de 24 horas continuas; en pacientes sin falciforme si PIO >50 mmHg por 5 días o >35 mmHg por 7 días, hipema total "black ball" que dura 5 días, o signos de tinción hemática corneal estromal precoz.',
      contraindicaciones: 'CONTRAINDICACIONES FORMALES EN FALCIFORME:\n1) PROHIBIDA la Acetazolamida y Metazolamida (los inhibidores de anhidrasa carbónica inducen acidosis sistémica y en humor acuoso, acelerando masivamente la falciformación).\n2) PROHIBIDO el Manitol sistémico (la deshidratación hiperosmolar hemoconcentra y agrava el sickling vascular).\n3) Evitar agonistas alfa-adrenérgicos potentes (vasoconstricción de microcirculación del nervio óptico).'
    },
    pearlHighYield: 'En hipema con anemia falciforme, la acetazolamida está CONTRAINDICADA de forma absoluta porque la acidosis metabólica promueve sickling masivo en la malla trabecular.',
    keyReferences: 'Wills Eye Manual 8th Ed: Traumatic Hyphema / AAO BCSC Section 10',
    differentialDiagnoses: ['Hipema por neovasos de iris (rubeosis)', 'Hipema espontáneo por xantogranuloma juvenil', 'Pseudohipema en retinoblastoma']
  },

  // GLAUCOMA: GPAA, Ensayo OHTS, Paquimetría y Hemorragia de Drance
  {
    id: 'kb-glaucoma-gpaa-ohts-drance',
    keywords: ['gpaa', 'glaucoma primario angulo abierto', 'ohts', 'emgt', 'drance', 'hemorragia en astilla', 'paquimetria fina', 'cct <555', 'regla isnt', 'pio meta', 'target iop'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Glaucoma Primario de Ángulo Abierto (GPAA) con Signos de Progresión Activa (Hemorragia de Drance) y Factores de Alto Riesgo del Ensayo OHTS.',
    pathophysiology: 'Aumento de la resistencia al flujo de salida del humor acuoso en la malla trabecular yuxtacanalicular cribiforme y pared interna del canal de Schlemm. La elevación de la PIO genera deformación y compresión retrógrada de la lámina cribosa, bloqueando el transporte axoplásmico de neurotrofinas (BDNF) y desencadenando apoptosis programada dependiente de caspasas en las células ganglionares retinianas (CGR). La hemorragia de Drance en astilla en el borde del disco traduce un microinfarto vascular focal por cizallamiento activo en las placas de la lámina cribosa.',
    clinicalApplication: {
      guardia: '1) Gonioscopia de 4 espejos de Sussman/Zeiss: Confirmar ángulo completamente abierto (Shaffer 3-4) en 360 grados sin sinequias ni material PEX o pigmentario.\n2) Paquimetría corneal central ultrasónica (CCT): Identificar si CCT <555 µm (factor pronóstico independiente más potente según el ensayo OHTS).\n3) Fondo de ojo con lente de alta magnificación (60D/66D): Búsqueda activa de hemorragias de disco en astilla (Drance) en los polos temporales superior e inferior.\n4) Toma seriada de PIO diurna para detectar picos y fluctuaciones.',
      tratamiento: '• Ajuste de la PIO Meta (Target IOP): Reducción mínima del 25-30% en daño leve, y >=40% con PIO <12-14 mmHg en daño avanzado o progresión activa (ensayo AGIS).\n• Primera Línea de Elección:\n  - Trabeculoplastia Láser Selectiva (SLT) de 360 grados según el ensayo LiGHT (Lancet 2019): Opción de primera línea altamente coste-efectiva (74% libres de gotas a 3 años).\n  - Análogos de prostaglandinas tópicos (Latanoprost 0.005%, Bimatoprost 0.01%, Travoprost 0.004%) 1 gota nocturna.\n• Terapia Combinada si persiste progresión:\n  - Añadir Beta-bloqueante (Timolol 0.5% c/12h).\n  - Alfa-2 agonista (Brimonidina 0.15% c/12h).\n  - Inhibidor de anhidrasa carbónica tópico (Dorzolamida 2% c/12h).\n  - Inhibidor de Rho-quinasa (Netarsudil 0.02% diario).',
      criteriosDerivacionOQuirurgicos: 'Progresión estructural (OCT de CFNR con pérdida >4-5 µm/año) o funcional reproducible en campimetría a pesar de terapia médica máxima tolerada -> derivación para cirugía filtrante (Trabeculectomía con MMC o MIGS).',
      contraindicaciones: '1) NUNCA recetar Timolol en pacientes con asma bronquial, EPOC o bloqueo cardíaco AV de 2º/3º grado.\n2) NUNCA ignorar una hemorragia de Drance: es un signo inequívoco de daño activo que exige intensificar el tratamiento.'
    },
    pearlHighYield: 'Ensayo OHTS: La paquimetría fina (<555 µm) triplica el riesgo de progresión a glaucoma. La Hemorragia de Drance predice la aparición de una muesca en el reborde y un defecto campimétrico en el mismo meridiano en 12-18 meses; exige reducir la PIO meta un 20-30% adicional de inmediato.',
    keyReferences: 'OHTS Landmark Trial (Arch Ophthalmol 2002) / EMGT Study / EGS Guidelines 5th Ed',
    differentialDiagnoses: ['Hipertensión Ocular (OHT)', 'Glaucoma de Presión Normal (GPN)', 'Neuropatía óptica isquémica anterior (NOIA)', 'Excavación fisiológica grande']
  },

  // GLAUCOMA: Glaucomas Congénitos y Pediátricos (Buftalmos, Megalocórnea y Cirugía)
  {
    id: 'kb-glaucoma-congenito-buftalmos',
    keywords: ['glaucoma congenito', 'buftalmos', 'megalocornea', 'estrias de haab', 'cyp1b1', 'goniotomia', 'trabeculotomia', 'brimonidina contraindicada', 'lactante ojo grande', 'epifora fotofobia'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Glaucoma Congénito Primario (GCP) con Buftalmos, Megalocórnea y Estrías de Haab. Emergencia quirúrgica pediátrica.',
    pathophysiology: 'Detención del desarrollo embriológico de las células de la cresta neural en el ángulo iridocorneal que conduce a la persistencia de una malla trabecular inmadura no funcional ("Membrana de Barkan") con inserción anterior anómala del iris. Debido a la elasticidad de los tejidos oculares en menores de 3 años, la PIO elevada produce distensión global del globo ocular (buftalmos), elongación corneal (megalocórnea >12.0 mm) y roturas de la membrana de Descemet (Estrías de Haab). Genética: Mutaciones en CYP1B1 (2p22) y LTBP2.',
    clinicalApplication: {
      guardia: '1) Reconocimiento de la tríada cardinal: Epífora (lagrimeo sin secreción), Fotofobia intensa (el bebé entierra la cara) y Blefaroespasmo.\n2) Medir diámetro corneal horizontal con regla/compás: >11.0 mm al nacer o >12.0 mm en el primer año es patológico.\n3) Inspección de córnea: Edema lechoso ("vidrio esmerilado") y líneas refringentes curvilíneas horizontales en endotelio (Estrías de Haab).\n4) Programar Examen Bajo Anestesia General (EUA) inmediato con tonometría de Perkins antes de 5 min post-inducción.',
      tratamiento: '• El tratamiento del GCP es EMINENTEMENTE QUIRÚRGICO:\n  - Goniotomía ab interno de Barkan: De primera elección cuando la córnea está suficientemente transparente para visualizar el ángulo.\n  - Trabeculotomía ab externo o circunferencial de 360 grados: De primera elección cuando la córnea está opaca o edematosa.\n• Fármacos tópicos puente preoperatorios: Dorzolamida 2% tópico c/8-12h y Timolol 0.25% c/12h con oclusión lagrimal.',
      criteriosDerivacionOQuirurgicos: 'Remisión urgente inmediata a Cirugía de Glaucoma Pediátrico. Tras el éxito tensional, rehabilitación visual con corrección refractiva de miopía/astigmatismo y parche para prevenir ambliopía.',
      contraindicaciones: '¡PROHIBICIÓN ABSOLUTA DE BRIMONIDINA!: En menores de 2 años, la brimonidina cruza la barrera hematoencefálica inmadura causando coma, depresión severa del SNC y parada respiratoria/apnea potencialmente letal.'
    },
    pearlHighYield: 'Glaucoma Congénito Board Pearl: El tratamiento es estrictamente QUIRÚRGICO (Goniotomía si córnea clara, Trabeculotomía si córnea opaca). La Brimonidina está ABSOLUTAMENTE CONTRAINDICADA en <2 años por riesgo de apnea letal. La excavación en lactantes es elásticamente reversible (cupping reversal).',
    keyReferences: 'AAO BCSC Section 10: Glaucoma / Childhood Glaucoma Research Network (CGRN) Guidelines',
    differentialDiagnoses: ['Obstrucción congénita del conducto lagrimal', 'Megalocórnea ligada al X', 'Trauma obstétrico por fórceps (roturas verticales)', 'Distrofia CHED']
  },

  // GLAUCOMA: Glaucomas Secundarios (PEX, Pigmentario y Neovascular)
  {
    id: 'kb-glaucoma-secundarios-pex-pigmentario',
    keywords: ['glaucoma pseudoexfoliativo', 'pex', 'loxl1', 'debilidad zonular', 'glaucoma pigmentario', 'huso de krukenberg', 'transiluminacion iris', 'glaucoma neovascular', 'rubeosis', 'anti-vegf'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Glaucomas Secundarios de Alta Morbilidad Quirúrgica: Pseudoexfoliativo (PEX), Síndrome de Dispersión Pigmentaria y Glaucoma Neovascular (GNV).',
    pathophysiology: '1) PEX: Síntesis patológica sistémica de material elástico fibrilar anómalo ligado a mutaciones en LOXL1 que obstruye la malla trabecular y destruye las fibras zonulares del cristalino (fragilidad zonular extrema). 2) Pigmentario: Iris cóncavo que roza mecánicamente contra las fibras zonulares anteriores durante los movimientos pupilares, liberando melanina que colmata la malla trabecular (huso de Krukenberg endotelial). 3) Neovascular: Isquemia retiniana extensa con liberación de VEGF que forma una membrana fibrovascular contráctil que ocluye el ángulo como una cremallera (zippering).',
    clinicalApplication: {
      guardia: '1) En sospecha de PEX: Dilatar la pupila y buscar en la cápsula anterior del cristalino las 3 zonas concéntricas de caspa fibrilar y facodonesis en movimientos oculares.\n2) En sospecha de Pigmentario: Buscar banda vertical de pigmento en endotelio corneal (Huso de Krukenberg) y transiluminación en rueda de carro en iris.\n3) En Glaucoma Neovascular: Fondo de ojo urgente para identificar oclusión venosa retiniana isquémica o retinopatía diabética proliferativa activa.',
      tratamiento: '• En PEX: Hipotensores tópicos triples precoces y SLT; si requiere facoemulsificación, tener disponible anillo de tensión capsular (CTR) por riesgo masivo de rotura zonular.\n• En Pigmentario: Iridotomía con láser YAG puede aplanar el iris cóncavo al ecualizar presiones; evitar deportes de impacto previo a tratamiento.\n• En Glaucoma Neovascular:\n  1) Inyección intravítrea INMEDIATA de Anti-VEGF (Bevacizumab / Aflibercept) para inducir regresión de neovasos en 24-48 horas;\n  2) Panfotocoagulación Retiniana con Láser (PRP) de urgencia;\n  3) Implante de Válvula de Drenaje (Ahmed) si hay cierre sinequial irreversible en >180º.',
      criteriosDerivacionOQuirurgicos: 'Remisión inmediata a subespecialidad de Glaucoma y Retina.',
      contraindicaciones: 'En Glaucoma Neovascular y Glaucoma Uveítico: CONTRAINDICADAS formalmente las prostaglandinas (empeoran la inflamación y el edema macular) y la pilocarpina (rompe la barrera hematoacuosa y causa sinequias).'
    },
    pearlHighYield: 'Glaucomas Secundarios Board Pearl: En PEX hay elastosis ligada a LOXL1 con fragilidad zonular extrema que exige anillo de tensión capsular (CTR). En Glaucoma Neovascular el Anti-VEGF urgente + PRP es el paso inicial antes de la válvula de Ahmed. Prostaglandinas y pilocarpina están contraindicadas.',
    keyReferences: 'AAO BCSC Section 10 / European Glaucoma Society Guidelines / TVT Study',
    differentialDiagnoses: ['Glaucoma uveítico hiperagudo', 'Melanoma de iris con invasión angular', 'Glaucoma facolítico', 'Glaucoma de células fantasma']
  },

  // GLAUCOMA: Procedimientos Láser (SLT, LPI) y Cirugía Filtrante (Trabeculectomía con MMC y Tubos)
  {
    id: 'kb-glaucoma-laser-cirugia-filtrante',
    keywords: ['slt', 'trabeculoplastia selectiva', 'light trial', 'iridotomia yag', 'lpi', 'trabeculectomia', 'mitomicina c', 'mmc', 'seidel ampolla', 'blebitis', 'endoftalmitis ampolla', 'valvula ahmed', 'baerveldt', 'tvt study'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Terapéutica Intervencionista en Glaucoma: Láseres (SLT de Primera Línea, LPI), Trabeculectomía con Mitomicina C y Manejo de Ampollas de Filtración.',
    pathophysiology: 'La Trabeculoplastia Láser Selectiva (SLT) induce fototermólisis subcelular selectiva de las células trabeculares pigmentadas sin daño colágeno térmico colateral, estimulando la remodelación biológica endotelial. La Trabeculectomía crea una fístula de drenaje artificial subtenoniana; la Mitomicina C (MMC) alquila el ADN de los fibroblastos Tenonianos inhibiendo de por vida la cicatrización fibrótica destructiva mediada por TGF-beta.',
    clinicalApplication: {
      guardia: '1) Evaluación de Ampolla de Filtración (Sistema de Indiana/Moorfields): Medir altura, extensión vascular y realizar TEST DE SEIDEL con fluoresceína y luz de cobalto.\n2) Si Seidel Positivo precoz: Si es fuga puntiforme con cámara formada, reducir esteroides, lente terapéutica o parche compresivo 24h; si hay atalamia (cámara plana), resuturar de inmediato en quirófano.\n3) Diagnóstico de Infección de Ampolla:\n   • Blebitis: Material mucopurulento blanquecino localizado en la ampolla con cámara anterior limpia o reacción leve y sin vitrítis -> Tratamiento intensivo con colirios antibióticos fortificados (Vancomicina + Ceftazidima) cada hora.\n   • Endoftalmitis Asociada a Ampolla: Hipopión en cámara anterior, dolor agudo y vitrítis con pérdida de visión -> Emergencia: Inyección intravítrea inmediata de antibióticos (Vancomicina 1 mg + Ceftazidima 2.25 mg) o vitrectomía de urgencia.',
      tratamiento: '• SLT de 360 grados: Avalada por el ensayo LiGHT como primera línea (100 disparos en 360º con lente de Latina).\n• Iridotomía Periférica con Láser YAG (LPI): Instilar Apraclonidina 1% o Brimonidina pre y post-láser para prevenir el pico hipertensivo; SIEMPRE realizar LPI profiláctica en ojo contralateral.\n• Dispositivos de Drenaje (Ensayo TVT): En ojos con cirugías intraoculares previas (pseudofáquicos o trabeculectomía fallida), el tubo de Baerveldt o válvula de Ahmed es superior a la re-trabeculectomía.',
      criteriosDerivacionOQuirurgicos: 'Ampolla encistada no funcionante con PIO alta: Bleb needling con aguja 27-30G y MMC subconjuntival.',
      contraindicaciones: 'En trabeculectomía: NUNCA usar Mitomicina C sin lavado copioso con al menos 20-30 mL de BSS (riesgo de toxicidad endotelial y necrosis escleral).'
    },
    pearlHighYield: 'Cirugía Filtrante Board Pearl: Ensayo LiGHT avala la SLT como primera línea (no lesiona colágeno, es repetible). Ensayo TVT avala el tubo de drenaje en ojos previamente operados. Diferenciar Blebitis (infección de ampolla sin vitrítis, colirios fortificados) de Endoftalmitis (hipopión + vitrítis, inyecciones intravítreas urgentes).',
    keyReferences: 'LiGHT Trial (Lancet 2019/2023) / TVT Study (AJO 2012) / EGS Guidelines 5th Ed',
    differentialDiagnoses: ['Fallo de fístula por fibrosis de Tenon', 'Ampolla encistada (Tenon cyst)', 'Maculopatía hipotónica por sobrefiltración', 'Desprendimiento coroideo seroso']
  },

  // GLAUCOMA: Evaluación Estructural y Funcional (OCT de CFNR, Ganglionares y Campo Visual)
  {
    id: 'kb-glaucoma-evaluacion-oct-campimetria',
    keywords: ['oct cfnr', 'tsnit', 'celulas ganglionares', 'gcc', 'gcl-ipl', 'efecto suelo', '50 micras', 'campimetria humphrey', 'sita standard', 'escalon nasal', 'ronne', 'escotoma bjerrum', 'falsos positivos', 'gpa progresi\u00f3n'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Diagnóstico Estructural y Funcional Avanzado en Glaucoma: Correlación OCT de CFNR / Células Ganglionares Maculares y Campimetría Computarizada Humphrey.',
    pathophysiology: 'Pérdida axonal retrógrada que se refleja estructuralmente como adelgazamiento de la capa de fibras nerviosas de la retina (CFNR peripapilar) y del complejo de células ganglionares macular (GCC), con pérdida funcional topográficamente concordante en el campo visual que respeta el rafe temporal horizontal (escalón nasal de Rønne). En el OCT, cuando la CFNR alcanza 45-50 µm de grosor, se produce el "efecto suelo" (floor effect) debido al tejido glial y vascular residual, perdiendo utilidad para monitorear progresión adicional.',
    clinicalApplication: {
      guardia: '1) Interpretación de Confiabilidad en Campimetría Humphrey:\n   • Falsos Positivos (FP): Si >15%, el examen NO ES CONFIABLE (paciente "gatillo fácil" que genera campos falsamente normales con números blancos).\n   • Pérdidas de Fijación: Si >20%, verificar con el gráfico de monitorización de mirada (gaze tracking).\n   • Falsos Negativos: En daño avanzado refleja fatiga biológica del campo visual.\n2) Lectura del Gráfico de Desviación Modelo (Pattern Deviation): Elimina el velo de opacidades de medios difusas (catarata) y resalta los defectos focales glaucomatosos verdaderos.\n3) En OCT: Comprobar que la intensidad de la señal sea >=7/10 para evitar falsos adelgazamientos de la base de datos.',
      tratamiento: '• Si el defecto en campimetría 24-2 está a menos de 5 grados del centro foveolar: Solicitar de inmediato campo visual 10-2 (el 24-2 tiene 6 grados entre puntos y puede pasar por alto un escotoma central amenazante).\n• Ante progresión funcional confirmada en 3 campos consecutivos (GPA): Reducir la PIO meta en un 20-30% adicional respecto a la basal.',
      criteriosDerivacionOQuirurgicos: 'Deterioro campimétrico rápido con pendiente de MD peor a -1.5 dB/año ("progresor rápido") -> indicación quirúrgica filtrante sin dilación.',
      contraindicaciones: 'NUNCA monitorizar a un paciente con glaucoma avanzado terminal (CFNR <=50 µm) mediante OCT peripapilar debido al efecto suelo; en estos pacientes el seguimiento debe ser estrictamente funcional mediante campos visuales 10-2.'
    },
    pearlHighYield: 'OCT y Campimetría Board Pearl: Falsos Positivos >15% invalidan la campimetría Humphrey. Cuando la CFNR peripapilar llega a 50 µm (efecto suelo), el OCT deja de ser útil y el monitoreo debe realizarse con campos visuales 10-2. Si el defecto roza los 5º de fijación, solicitar campo 10-2 de inmediato.',
    keyReferences: 'AAO BCSC Section 10 / Hodapp-Parrish-Anderson Criteria / EGS Guidelines 5th Ed',
    differentialDiagnoses: ['Neuropatía óptica no glaucomatosa con respeto vertical', 'Hemianopsia bitemporal quiasmática', 'Drusas del disco óptico enterradas', 'Artefacto por papila oblicua miópica']
  },

  // GLAUCOMA: Glaucoma Maligno (Desvío de Humor Acuoso / Bloqueo Ciliar)
  {
    id: 'kb-glaucoma-maligno',
    keywords: ['glaucoma maligno', 'bloqueo ciliar', 'ciliary block', 'desvio acuoso', 'aqueous misdirection', 'atalamia', 'camara plana con pio alta', 'atropina', 'pilocarpina contraindicada', 'zhv', 'hialoidotomia yag'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Glaucoma Maligno (Síndrome de Desvío del Humor Acuoso o Bloqueo Ciliar). Emergencia posquirúrgica mayor.',
    pathophysiology: 'Desvío anómalo retrógrado del humor acuoso recién formado por los procesos ciliares hacia el interior y detrás del cuerpo vítreo (atrapamiento vítreo) debido a un bloqueo a nivel cilio-hialoideo tras cirugía intraocular incisional. El volumen vítreo expandido empuja en bloque hacia adelante a todo el diafragma iridocristaliniano (o complejo iris-LIO), colapsando y aplanando de forma uniforme tanto el centro como la periferia de la cámara anterior con elevación severa de la PIO a pesar de existir una iridotomía periférica permeable.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía: Cámara anterior totalmente plana o con contacto iridocorneal central y periférico completo (atalamia Grado 3) y PIO muy elevada.\n2) Comprobar en lámpara de hendidura que la iridotomía periférica ESTÉ PATENTE (lo que descarta bloqueo pupilar).\n3) Ecografía ocular en Modo B URGENTE: Mandatoria para confirmar que la coroides está aplicada en 360 grados y descartar efusión serosa supracoroidea o hematoma expulsivo supracoroideo.\n4) Iniciar terapia médica de choque de inmediato.',
      tratamiento: '• PROTOCOLO MÉDICO DE CHOQUE (50% de éxito en 48h):\n  1) ATROPINA al 1% tópica cada 8 horas (FARMACOTERAPIA CAPITAL): Relaja y retrae el músculo ciliar hacia atrás y hacia afuera, tensando la zónula y tirando del diafragma hacia el polo posterior.\n  2) Manitol al 20% IV (1.5-2 g/kg en 45 min) para deshidratar el compartimento vítreo posterior.\n  3) Supresores de la producción acuosa: Acetazolamida 500 mg VO/IV + Timolol 0.5% + Dorzolamida 2% + Brimonidina 0.15%.\n• TRATAMIENTO INVASIVO SI FRACASA EL TRATAMIENTO MÉDICO:\n  - En pseudofáquicos: Capsulotomía posterior y Hialoidotomía anterior con láser Nd:YAG a través de la pupila o de la iridotomía para comunicar el espacio vítreo con la cámara anterior.\n  - En fáquicos o refractarios: Vitrectomía pars plana anterior con Zonulo-Hialoido-Vitrectomía (ZHV) para crear una ventana de comunicación directa permanente.',
      criteriosDerivacionOQuirurgicos: 'Remisión urgente a quirófano para vitrectomía pars plana ZHV si la cámara permanece plana tras 48 horas de tratamiento médico máximo.',
      contraindicaciones: '¡PROHIBICIÓN ABSOLUTA DE PILOCARPINA Y MIÓTICOS!: La pilocarpina contrae el cuerpo ciliar hacia adelante, agravando catastróficamente el desvío y colapsando de forma permanente la cámara anterior.'
    },
    pearlHighYield: 'Glaucoma Maligno Board Pearl: Cámara anterior totalmente plana + PIO alta + iridotomía periférica patente. Los ciclopléjicos (Atropina 1%) son el tratamiento curativo de elección. ¡Los mióticos (Pilocarpina) están CONTRAINDICADOS de forma absoluta! En pseudofáquicos, la hialoidotomía YAG rompe el bloqueo.',
    keyReferences: 'AAO BCSC Section 10: Glaucoma / Chandler and Grant Glaucoma',
    differentialDiagnoses: ['Desprendimiento coroideo seroso por hipotonía (PIO baja)', 'Hemorragia supracoroidea expulsiva (dolor insoportable y masa oscura en eco B)', 'Bloqueo pupilar relativo (iridotomía ausente)']
  },

  // GLAUCOMA: Síndrome Iridocorneal Endotelial (ICE)
  {
    id: 'kb-glaucoma-ice-sindrome',
    keywords: ['sindrome ice', 'chandler', 'atrofia esencial de iris', 'cogan-reese', 'plata martillada', 'células ice', 'corectopia', 'pseudopolicoria', 'valvula ahmed', 'unilateral'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Síndrome Iridocorneal Endotelial (ICE) con Glaucoma Secundario de Ángulo Cerrado por Tracción Sinequial.',
    pathophysiology: 'Metaplasia de células endoteliales corneales que adoptan un comportamiento epitelial migratorio ("células ICE"). Proliferan sobre la línea de Schwalbe hacia la malla trabecular y la superficie anterior del iris. La contracción fibrótica progresiva de esta membrana endotelial anómala tracciona el iris formando sinequias anteriores periféricas anchas que traccionan la pupila hacia la sinequia (corectopia), eversión del borde pupilar (ectropión uveae), agujeros atróficos (pseudopolicoria) y cierre angular progresivo con hipertensión ocular refractaria.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía: Afección estricta UNILATERAL en mujer adulta joven (20-45 años). Córnea con endotelio en "plata martillada" o "bronce batido" y corectopia manifiesta.\n2) Microscopía especular corneal: Confirmación diagnóstica con inversión patognomónica del patrón celular (centros celulares oscuros rodeados de bordes hiperreflectivos claros).\n3) Gonioscopia de 4 espejos: Sinequias anteriores periféricas altas que sobrepasan la línea de Schwalbe.\n4) Descartar queratopatía bullosa con solución salina hipertónica.',
      tratamiento: '• Manejo médico: Reducir la PIO con colirios que disminuyan la secreción acuosa (Timolol, Dorzolamida, Brimonidina). Colirio hipertónico de NaCl 5% en la mañana para el edema corneal.\n• Tratamiento Quirúrgico del Glaucoma:\n  - La trabeculectomía convencional suele fracasar a medio plazo porque la membrana de células ICE prolifera sobre la fístula escleral tapándola.\n  - Procedimiento de elección: Implante de Dispositivo de Drenaje Valvulado (Válvula de Ahmed con MMC) con tubo orientado al cuadrante con menor tracción sinequial.\n• En descompensación endotelial severa: Queratoplastia endotelial (DMEK o DSAEK) tras estabilizar la PIO.',
      criteriosDerivacionOQuirurgicos: 'Remisión a subespecialidad de Córnea y Glaucoma para implante de tubo y trasplante endotelial.',
      contraindicaciones: 'Evitar mióticos (Pilocarpina) porque aumentan la tracción sobre la raíz del iris y aceleran el cierre angular.'
    },
    pearlHighYield: 'Síndrome ICE Board Pearl: Afección UNILATERAL en mujeres jóvenes. Células endoteliales en "plata martillada" en microscopía especular. La variante de Chandler cursa con edema corneal severo con PIO poco elevada. Los implantes de tubo valvulado son superiores a la trabeculectomía.',
    keyReferences: 'AAO BCSC Section 10: Glaucoma / Shields Textbook of Glaucoma',
    differentialDiagnoses: ['Distrofia Polimorfa Posterior (bilateral, autosómica dominante)', 'Síndrome de Axenfeld-Rieger (bilateral con anomalías sistémicas)', 'Melanoma de iris']
  },

  // GLAUCOMA: Glaucomas Facogénicos (Facolítico vs Facomórfico vs Partículas)
  {
    id: 'kb-glaucoma-facogenico-subtipos',
    keywords: ['glaucoma facolitico', 'glaucoma facomorfico', 'particulas lenticulares', 'catarata hipermadura', 'catarata intumescente', 'macrófagos gigantes', 'proteinas hmw', 'facoemulsificacion urgente', 'pseudohipopion blanco'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Glaucoma Facogénico: Glaucoma Facolítico (obstrucción trabecular por proteínas de alto peso molecular y macrófagos) vs Facomórfico (cierre angular por catarata intumescente).',
    pathophysiology: '1) Glaucoma Facolítico: En cataratas hipermaduras o morganianas, la cápsula permanece macroscópicamente íntegra pero permite el escape microscópico de proteínas solubles de alto peso molecular (HMW) hacia la cámara anterior; macrófagos gigantes fagocitan estas proteínas y colmatan la malla trabecular cribiforme con cámara anterior profunda. 2) Glaucoma Facomórfico: Aumento anteroposterior masivo del cristalino intumescente hidratado que empuja el iris hacia adelante provocando bloqueo pupilar secundario y aplanamiento de la cámara anterior.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía: Evaluar profundidad de la cámara anterior.\n   • Cámara anterior PROFUNDA con catarata blanca lechosa y partículas flotantes = Glaucoma Facolítico.\n   • Cámara anterior PLANA o estrecha con pupila en midriasis media = Glaucoma Facomórfico.\n2) Ecografía Modo B: Confirmar masa cristaliniana y descartar desprendimiento de retina o tumor posterior.\n3) Descompresión médica inmediata preoperatoria para evitar hemorragia expulsiva.',
      tratamiento: '• Descompresión médica inmediata:\n  1) Manitol 20% IV (1.5-2 g/kg en 45 min) + Acetazolamida 500 mg VO/IV.\n  2) Hipotensores tópicos (Timolol, Dorzolamida, Brimonidina).\n  3) Corticoide tópico (Prednisolona 1% cada hora) para reducir la inflamación trabecular.\n• TRATAMIENTO CURATIVO DEFINITIVO:\n  - EXTRACCIÓN DE LA CATARATA / FACOEMULSIFICACIÓN DE URGENCIA una vez estabilizada la PIO.\n  - En facolítico: Utilizar tinción capsular con Azul de Tripán al 0.06% por cápsula elástica arrugada y viscoelástico cohesivo pesado.\n  - En partículas lenticulares retenidas post-cirugía: Lavado y aspiración bimanual completa de restos corticales en cámara anterior.',
      criteriosDerivacionOQuirurgicos: 'Programación quirúrgica para lensectomía/facoemulsificación de urgencia en <24 horas.',
      contraindicaciones: 'NUNCA operar con PIO >40-50 mmHg sin descompresión previa con manitol (alto riesgo de hemorragia supracoroidea expulsiva masiva al abrir el ojo).'
    },
    pearlHighYield: 'Glaucomas Facogénicos Board Pearl: En Facolítico la cápsula está ÍNTEGRA y la cámara es PROFUNDA (obstrucción por macrófagos y proteínas HMW). En Facomórfico la cámara es PLANA por cristalino intumescente. El tratamiento definitivo curativo en ambos es la EXTRACCIÓN DEL CRISTALINO.',
    keyReferences: 'AAO BCSC Section 10: Glaucoma / Wills Eye Manual 8th Ed',
    differentialDiagnoses: ['Endoftalmitis infecciosa bacteriana aguda', 'Ataque agudo de cierre angular primario', 'Uveítis anterior hipertensiva herpética']
  },

  // GLAUCOMA: Hipertensión Venosa Epiescleral (Sturge-Weber y Fístula Carótido-Cavernosa)
  {
    id: 'kb-glaucoma-sturge-weber-fcc',
    keywords: ['hipertension venosa epiescleral', 'sturge-weber', 'nevus flammeus', 'vino de oporto', 'salsa de tomate', 'fistula carotido-cavernosa', 'fcc', 'vasos en sacacorchos', 'soplo orbitario', 'sangre canal de schlemm', 'hemorragia expulsiva'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Glaucoma por Elevación de la Presión Venosa Epiescleral: Síndrome de Sturge-Weber y Fístula Carótido-Cavernosa (FCC).',
    pathophysiology: 'Conforme a la ecuación de Goldmann (PIO = F/C + Pe), cada elevación de 1 mmHg en la presión venosa epiescleral (Pe normal: 8-10 mmHg) incrementa la PIO en 1 mmHg directamente. En Sturge-Weber coexisten disgenesia trabecular con shunts arteriovenosos epiesclerales y hemangioma coroideo difuso (GNAQ somático). En la FCC, la comunicación anormal entre la arteria carótida y el seno cavernoso transmite alta presión a la vena oftálmica superior y vasos epiesclerales.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía: Vasos epiesclerales dilatados en sacacorchos que no blanquean con fenilefrina 2.5%; quemosis en cabeza de medusa.\n2) Gonioscopia: Sangre refluida espontáneamente en el interior del Canal de Schlemm en 360 grados.\n3) Auscultación orbitaria con campana de estetoscopio: Búsqueda de soplo pulsátil sincrónico con pulso en FCC.\n4) En niños con nevus flammeus en párpado superior (V1): Medir PIO y diámetro corneal inmediatamente.',
      tratamiento: '• En Fístula Carótido-Cavernosa: Embolización endovascular por Neurorradiología Intervencionista (tratamiento causal definitivo).\n• En Síndrome de Sturge-Weber:\n  - Fármacos que reducen la secreción acuosa: Betabloqueantes (Timolol), IAC (Dorzolamida, Acetazolamida) y Brimonidina.\n  - Si requiere cirugía filtrante (Trabeculectomía o Válvula): MÁXIMA PRECAUCIÓN: La descompresión súbita causa efusión uveal masiva o hemorragia expulsiva mortal para el ojo. Exige esclerotomías posteriores profilácticas pre-colocadas y cámara presurizada con viscoelástico.',
      criteriosDerivacionOQuirurgicos: 'Remisión a Neurorradiología Intervencionista (FCC) o Cirugía de Glaucoma Pediátrico de alta complejidad (Sturge-Weber).',
      contraindicaciones: 'NUNCA realizar trabeculectomía rápida sin viscoelástico en Sturge-Weber (riesgo crítico de hemorragia expulsiva del hemangioma coroideo difuso).'
    },
    pearlHighYield: 'Hipertensión Venosa Epiescleral Board Pearl: La elevación de la Pe sube la PIO milímetro a milímetro (Ecuación de Goldmann). Sturge-Weber asocia nevus flammeus en V1 y hemangioma en "salsa de tomate"; su cirugía filtrante exige máxima precaución por riesgo letal de hemorragia expulsiva. FCC produce vasos en sacacorchos y soplo orbitario.',
    keyReferences: 'AAO BCSC Section 10: Glaucoma / Kanski Clinical Ophthalmology',
    differentialDiagnoses: ['Trombosis del seno cavernoso séptica', 'Orbitopatía de Graves distiroidea', 'Conjuntivitis alérgica crónica']
  },

  // GLAUCOMA: Glaucoma por Recesión Angular Traumática
  {
    id: 'kb-glaucoma-recesion-angular',
    keywords: ['recesion angular', 'trauma contuso', 'espolon escleral prominente', 'banda ciliar ancha', 'anillo de vossius', 'glaucoma tardio', '10 a 20 a\u00f1os', 'slt contraindicada', 'iridodialisis'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Glaucoma Secundario por Recesión Angular Post-Traumática. Daño bimodal con riesgo de hipertensión tardía.',
    pathophysiology: 'Impacto contuso cerrado que genera compresión anteroposterior y una onda de choque hidrostática lateral que desgarra la cara anterior del músculo ciliar entre sus fibras longitudinales y circulares. Aunque la recesión en sí es un marcador de impacto, el glaucoma tardío (que aparece entre 10 y 20 años después del golpe) se produce por endotelización trabecular anómala y esclerosis cicatrizal progresiva de la malla trabecular contundida.',
    clinicalApplication: {
      guardia: '1) En la fase aguda del traumatismo: Controlar el hipema y la PIO con reposo y colirios. NO realizar gonioscopia de indentación en la primera semana por riesgo de resangrado.\n2) A las 4 a 6 semanas post-trauma: Gonioscopia de 4 espejos bilateral comparativa obligada.\n3) Signos gonioscópicos patognomónicos: Banda del cuerpo ciliar ensanchada (>2-3 veces el ancho del ojo contralateral) y espolón escleral blanco nacarado hiper-prominente en el meridiano afecto.\n4) Si la recesión abarca >180-240 grados (>2-3 cuadrantes): El paciente tiene un riesgo >50% de glaucoma crónico tardío y debe seguirse con toma de PIO anual de por vida.',
      tratamiento: '• Tratamiento farmacológico: Análogos de prostaglandinas tópicos (Latanoprost, Travoprost) como primera elección para potenciar el drenaje uveoescleral remanente + Betabloqueantes (Timolol).\n• Los mióticos (Pilocarpina) son ineficaces porque el músculo ciliar está desinsertado mecánicamente del espolón escleral.\n• Trabeculectomía con Mitomicina C o Válvula de Ahmed si el tratamiento médico no controla la PIO.',
      criteriosDerivacionOQuirurgicos: 'Seguimiento oftalmológico anual de por vida ante recesión >180 grados.',
      contraindicaciones: '¡CONTRAINDICACIÓN DE TRABECULOPLASTIA LÁSER (SLT/ALT)!: El láser trabecular tiene una tasa de fracaso muy elevada y puede desencadenar picos hipertensivos reactivos severos debido a la fibrosis trabecular subyacente.'
    },
    pearlHighYield: 'Recesión Angular Board Pearl: Desgarro entre fibras longitudinales y circulares del músculo ciliar tras trauma contuso (banda ciliar ensanchada y espolón blanco prominente). El glaucoma es bimodal y suele aparecer 10 a 20 años después por endotelización trabecular. Si >180-240º, riesgo de glaucoma >50%. SLT contraindicada.',
    keyReferences: 'AAO BCSC Section 10: Glaucoma / Wills Eye Manual 8th Ed',
    differentialDiagnoses: ['Ciclodiálisis traumática (cursa con hipotonía <5 mmHg)', 'Ángulo abierto amplio fisiológico en miopía alta', 'Uveítis anterior postraumática']
  },

  // GLAUCOMA: Glaucoma de Presión Normal (GPN) y Red Flags
  {
    id: 'kb-glaucoma-presion-normal-red-flags',
    keywords: ['glaucoma presion normal', 'gpn', 'ntg', 'cntgs', 'hemorragia de drance', 'palidez mayor que excavacion', 'red flags', 'nocturnal dipping', 'saos', 'raynaud', 'meridiano vertical'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Glaucoma de Presión Normal (GPN). Daño axonal progresivo con PIO <=21 mmHg. Protocolo de descartes y "Red Flags" para neuroimagen.',
    pathophysiology: 'Susceptibilidad biológica anómala de la lámina cribosa y disrregulación vascular microcirculatoria (Síndrome de Flammer, Raynaud, migraña). Las caídas nocturnas excesivas de presión arterial diastólica (nocturnal dips <50 mmHg inducidos por antihipertensivos orales tomados de noche) y la hipoxemia intermitente por SAOS colapsan la presión de perfusión ocular (PPO = PA - PIO). El ensayo landmark CNTGS demostró que reducir un 30% la PIO basal frena la progresión campimétrica del 35% al 12%.',
    clinicalApplication: {
      guardia: '1) Si en consulta/guardia se observa excavación papilar con PIO normal: Solicitar curva tensional horaria diurna y paquimetría central (descartar córneas ultrafinas <500 µm que den falsos negativos).\n2) BÚSQUEDA SISTEMÁTICA DE "RED FLAGS" (Signos de alarma que descartan glaucoma y obligan a RM cráneo-órbita urgente):\n   • Disociación Anillo-Excavación: "Palidez del anillo > Excavación". En glaucoma el anillo remanente es rosado; si está pálido, es un tumor compresivo o neuropatía isquémica.\n   • Respeto del meridiano vertical en campimetría (sospecha de afección quiasmática/retroquiasmática).\n   • Paciente <50 años con progresión acelerada o pérdida de agudeza visual central precoz.\n   • Defecto pupilar aferente relativo unilateral marcado con asimetría discordante de papila.\n   • Alteración precoz severa de la visión en color (desaturación del rojo).\n3) Fondo de ojo: Registrar activamente si hay Hemorragias de Drance en astilla; indican progresión inminente del escotoma en los siguientes 6 meses.',
      tratamiento: '• Meta tensional: Reducción del 30-40% respecto a la PIO basal (meta habitual <=10-12 mmHg).\n• Primera elección: Análogos de prostaglandinas (Tafluprost, Latanoprost) administrados por la noche + Brimonidina 0.15% (neuroprotección demostrada en ensayo LoGTS).\n• ¡PRECAUCIÓN CON BETABLOQUEANTES SISTÉMICOS Y TÓPICOS!: Evitar timolol por la noche (exacerba la bradicardia y el dip diastólico nocturno). Coordinar con Cardiología para trasladar antihipertensivos a la mañana.\n• Trabeculectomía con Mitomicina C si hay progresión documentada con PIO en rango normal.',
      criteriosDerivacionOQuirurgicos: 'RM cerebral y de órbitas obligada ante cualquier Red Flag. Trabeculectomía con MMC si progresa el campo visual.',
      contraindicaciones: 'No clasificar como GPN a pacientes con papilas pálidas sin descartar adenoma hipofisario o meningioma con RM.'
    },
    pearlHighYield: 'GPN Board Pearl: Ensayo CNTGS (reducción 30% frena progresión). Hemorragias de Drance frecuentes. "Palidez > Excavación" o respeto del meridiano vertical NO es glaucoma: es un tumor compresivo hasta demostrar lo contrario en RM cráneo-órbita.',
    keyReferences: 'CNTGS (Collaborative Normal-Tension Glaucoma Study) / LoGTS Study / AAO BCSC Section 10',
    differentialDiagnoses: ['Meningioma del ala esfenoidal / Adenoma hipofisario', 'Neuropatía óptica isquémica anterior antigua', 'Falso GPN por CCT <480 um']
  },

  // GLAUCOMA: Complicaciones Filtrantes y Blebitis
  {
    id: 'kb-glaucoma-complicaciones-filtrantes-blebitis',
    keywords: ['blebitis', 'fuga de ampolla', 'bleb leak', 'seidel positivo', 'maculopatia hipotonica', 'quiste de tenon', 'needling', '5-fu', 'mitomicina c', 'kissing choroidals', 'atalamia'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Complicaciones de Cirugía Filtrante (Trabeculectomía): Hipotonía, Fuga de Ampolla, Blebitis y Falla Cicatrizal.',
    pathophysiology: 'El uso de antimetabolitos (MMC) previene la fibrosis del flap pero induce adelgazamiento y necrosis avascular conjuntival tardía ("ampolla en porcelana"). Las microperforaciones permiten la fuga de acuoso (Seidel positivo), hipotonía (<5 mmHg) y colapso ocular con pliegues coriorretinianos (maculopatía hipotónica). La rotura de la barrera conjuntival es la vía de entrada para Streptococcus pneumoniae y Moraxella, originando blebitis que puede evolucionar a endoftalmitis fulminante.',
    clinicalApplication: {
      guardia: '1) Paciente operado de trabeculectomía que acude con ojo rojo o dolor: Realizar de inmediato prueba de Seidel con fluoresceína al 2% bajo luz azul cobalto.\n2) DIFERENCIAR BLEBITIS DE ENDOFTALMITIS:\n   • Blebitis: Ampolla blanca lechosa ("huevo frito") con inyección ciliar pero VÍTREO TOTALMENTE CLARO y fondo de ojo nítido.\n   • Endoftalmitis de ampolla: Ampolla purulenta + hipopión + turbidez vítrea densa y pérdida de visión.\n3) Si hay Atalamia: Clasificar según Spaeth. Grado 1 (periférica), Grado 2 (hasta margen pupilar), Grado 3 (atalamia completa con contacto endotelio-cristalino/LIO: EMERGENCIA QUIRÚRGICA en <24-48h por riesgo de descompensación endotelial irreversible).\n4) En ecografía B: Buscar efusiones coroideas en contacto central ("kissing choroidals"); indicación de drenaje quirúrgico supracoroideo inmediato.',
      tratamiento: '• Protocolo de Blebitis: Ingreso, colirios fortificados de Vancomicina (50 mg/mL) + Ceftazidima (50 mg/mL) alternados cada hora + Moxifloxacino.\n• Protocolo de Endoftalmitis: Punción vítrea urgente + inyección intravítrea de Vancomicina 1 mg + Ceftazidima 2.25 mg.\n• Manejo de Fuga de Ampolla: Lente de contacto terapéutica de gran diámetro (16-18 mm) + antibiótico tópico sin conservantes; si persiste, avance conjuntival con plastia escleral.\n• Manejo de Maculopatía Hipotónica: Atropina 1% c/8h + parche ocular; resutura del flap escleral si no remite en semanas.\n• Ampolla enquistada (Quiste de Tenon): Needling con aguja 27/30G y 5-Fluorouracilo (5 mg) o MMC subconjuntival.',
      criteriosDerivacionOQuirurgicos: 'Atalamia Grado 3 de Spaeth, "kissing choroidals", endoftalmitis o fuga de ampolla refractaria.',
      contraindicaciones: 'NUNCA prescribir pomadas oftálmicas ante ampolla con Seidel positivo: el vehículo puede penetrar a cámara anterior y provocar endotelitis masiva.'
    },
    pearlHighYield: 'Complicaciones Filtrantes Board Pearl: Seidel positivo en ampolla avascular es la puerta de entrada a endoftalmitis por Streptococcus y Moraxella. La blebitis respeta el vítreo; si hay vitritis, requiere punción vítrea e inyección intravítrea de vancomicina + ceftazidima en <2 horas.',
    keyReferences: 'Wills Eye Manual 8th Ed: Bleb-Related Infections / AAO BCSC Section 10',
    differentialDiagnoses: ['Endoftalmitis bacteriana aguda post-quirúrgica', 'Hiperfiltración precoz con Seidel negativo', 'Quiste de Tenon']
  },

  // GLAUCOMA: Glaucoma en el Embarazo y la Lactancia
  {
    id: 'kb-glaucoma-embarazo-lactancia',
    keywords: ['glaucoma embarazo', 'lactancia', 'brimonidina apnea neonatal', 'timolol bradicardia fetal', 'latanoprost parto pretermino', 'slt en embarazo', 'nasolacrimal occlusion', 'nlo', 'categoria fda'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Manejo del Glaucoma en la Gestante y Lactante. Teratogenicidad, seguridad fetal y contraindicaciones críticas.',
    pathophysiology: 'Durante la gestación, la PIO desciende de forma fisiológica 2 a 4 mmHg en el 2º y 3º trimestres por acción de la progesterona y relaxina. Sin embargo, la absorción sistémica nasofaríngea de colirios oftálmicos (hasta 80% del volumen) cruza libremente la placenta y se concentra intensamente en la leche materna, con potencial toxicidad cardiopulmonar y neurológica en el feto y neonato.',
    clinicalApplication: {
      guardia: '1) En toda mujer en edad fértil con glaucoma que consulta por retraso menstrual: Suspender temporalmente fármacos de alto riesgo y realizar prueba de embarazo.\n2) MANEJO FARMACOLÓGICO TRIMESTRE A TRIMESTRE:\n   • Primer Trimestre (Organogénesis): Evitar medicación si es posible. Si es mandatorio tratar: Brimonidina 0.15% (Categoría B) es la más segura.\n   • Segundo y Tercer Trimestre: Timolol 0.25% a dosis baja matutina con NLO estricta. ¡Suspender timolol 2-3 días antes del parto para evitar bradicardia fetal y bloqueo AV neonatal!\n   • ¡SUSPENDER BRIMONIDINA ANTES DEL PARTO!: Riesgo inminente de apnea neonatal.\n3) TÉCNICA DE OCLUSIÓN LAGRIMONASAL (NLO): Compresión digital firme sobre el canto interno con ojos cerrados durante 3 a 5 minutos tras instilar cada gota; reduce la absorción sistémica en >65%.\n4) TRABECULOPLASTIA LÁSER SELECTIVA (SLT): Tratamiento de elección no farmacológico en gestantes; seguro en cualquier trimestre.',
      tratamiento: '• Primera línea en gestación: SLT o Brimonidina (solo en 1º y 2º trimestres).\n• En Lactancia Materna: ¡BRIMONIDINA ESTÁ CONTRAINDICADA DE FORMA ABSOLUTA! (Atraviesa la barrera hematoencefálica inmadura del lactante causando sedación, hipotermia, coma y apnea neonatal potencialmente letal).\n• Fármacos de rescate en lactancia: Betabloqueantes a dosis baja o análogos de prostaglandinas (Latanoprost) inmediatamente tras la toma materna.\n• Cirugía: Si se requiere trabeculectomía durante el embarazo, realizar en 2º trimestre SIN MITOMICINA C NI 5-FU (¡antimetabolitos contraindicados absolutamente por teratogénesis!).',
      criteriosDerivacionOQuirurgicos: 'Coordinación estrecha con Obstetricia y Neonatología. Cirugía filtrante sin antimetabolitos si hay falla médica.',
      contraindicaciones: 'PROHIBICIÓN ABSOLUTA DE BRIMONIDINA EN LACTANCIA. PROHIBICIÓN ABSOLUTA DE MITOMICINA C Y 5-FU EN EMBARAZO.'
    },
    pearlHighYield: 'Glaucoma en Embarazo Board Pearl: La Brimonidina es Categoría B en gestación pero ¡MORTAL EN LACTANCIA por apnea central y coma neonatal! Timolol: suspender 48-72h antes del parto para evitar bradicardia neonatal. ¡MMC y 5-FU prohibidos en embarazadas!',
    keyReferences: 'AAO Guidelines: Glaucoma in Pregnancy / Wills Eye Manual 8th Ed',
    differentialDiagnoses: ['Hipertensión ocular gestacional transitoria', 'Preeclampsia con compromiso vascular coroideo', 'Síndrome de VKH']
  },

  // GLAUCOMA: Biomecánica Corneal, Histéresis y OHTS
  {
    id: 'kb-glaucoma-paquimetria-histeresis',
    keywords: ['ohts', 'paquimetria', 'cct', 'histeresis corneal', 'ch', 'crf', 'ora', 'corvis st', 'falacia de correccion', 'tonometria goldmann', 'lamina cribosa'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Biomecánica Corneal, Paquimetría e Histéresis. Ensayo Landmark OHTS y evaluación viscoelástica del nervio óptico.',
    pathophysiology: 'Hans Goldmann calibró su tonómetro asumiendo un CCT estándar de 520 um. El ensayo OHTS demostró que el CCT es un factor de riesgo independiente mayor: córneas <555 um tienen el triple de riesgo de conversión a glaucoma que córneas >588 um. La Histéresis Corneal (CH) cuantifica la amortiguación viscoelástica tisular. Córneas con baja histéresis (<8 mmHg) reflejan una lámina cribosa mecánicamente débil y distensible que se colapsa ante presiones normales.',
    clinicalApplication: {
      guardia: '1) Medición de Paquimetría Ultrasónica Central obligada en todo paciente con sospecha de glaucoma o hipertensión ocular.\n2) LA FALACIA DE LAS TABLAS DE CORRECCIÓN:\n   • La EGS y la AAO prohíben explícitamente aplicar tablas lineales de ajuste numérico (sumar o restar mmHg a la PIO).\n   • La paquimetría debe interpretarse como un factor de riesgo biológico CUALITATIVO independiente, no una corrección matemática.\n3) En pacientes post-LASIK/PRK: La tonometría de Goldmann siempre infraestima la PIO en 4-8 mmHg por remoción estromal anterior; usar tonómetro de contorno dinámico (Pascal) o tonometría de rebote.\n4) Ocular Response Analyzer (ORA): Una CH baja (<8 mmHg) predice progresión glaucomatosa acelerada independiente de la PIO medida.',
      tratamiento: '• Pacientes con Hipertensión Ocular y CCT <555 um: Iniciar tratamiento hipotensor precoz según criterios OHTS (reduce conversión a glaucoma en 50%).\n• Pacientes con Histéresis Baja (<8.0 mmHg): Establecer PIO meta más agresiva (reducción >35-40%).\n• Los análogos de prostaglandinas mejoran la compliance viscoelástica corneal al inducir remodelado trabecular y estromal vía MMPs.',
      criteriosDerivacionOQuirurgicos: 'OHTS Risk Calculator para definir inicio de colirios.',
      contraindicaciones: 'No dar de alta a un paciente con PIO "baja" de Goldmann tras LASIK sin considerar el adelgazamiento iatrogénico de la córnea.'
    },
    pearlHighYield: 'OHTS & Biomecánica Board Pearl: Ensayo OHTS demostró que CCT <555 um triplica el riesgo de progresión a glaucoma. Las fórmulas lineales de ajuste de PIO están PROHIBIDAS por EGS y AAO. La Histéresis Corneal baja (<8 mmHg) es un biomarcador independiente de fragilidad de la lámina cribosa.',
    keyReferences: 'OHTS (Ocular Hypertension Treatment Study) / European Glaucoma Society Guidelines 5th Ed',
    differentialDiagnoses: ['Falsa hipertensión ocular por córnea gruesa >600 um', 'Falso GPN post-LASIK con córnea de 440 um', 'Edema corneal con paquimetría artificialmente engrosada']
  },

  // GLAUCOMA: Síndrome de Posner-Schlossman y Ciclitis de Fuchs
  {
    id: 'kb-glaucoma-posner-schlossman-fuchs',
    keywords: ['posner-schlossman', 'crisis glaucomatociclitica', 'ciclitis heterocromica de fuchs', 'signo de amsler', 'sin sinequias posteriores', 'cmv', 'precipitados estrellados 360', 'ganciclovir', 'valganciclovir', 'trabeculitis'],
    subspecialty: 'Glaucoma y Presión Intraocular',
    diagnosticSummary: 'Síndromes Hipertensivos Oculares Inflamatorios: Síndrome de Posner-Schlossman (CMV/HSV) y Síndrome Uveítico de Fuchs.',
    pathophysiology: '1) Síndrome de Posner-Schlossman: Trabeculitis herpética/CMV aguda y recurrente con disfunción del endotelio trabecular; genera PIO de 40-50 mmHg con apenas 3-5 células inflamatorias en cámara anterior.\n2) Síndrome de Fuchs: Infección vírica persistente (Rubéola en occidente, CMV en Asia) con infiltración linfocitaria crónica que produce atrofia del estroma iridiano (heterocromía), neovascularización angular frágil sin membranas fibrovasculares y esclerosis trabecular.',
    clinicalApplication: {
      guardia: '1) En Síndrome de Posner-Schlossman:\n   • Paciente joven con dolor leve, visión borrosa y halos de colores con PIO de 40 a 55 mmHg.\n   • Biomicroscopia: 2 a 5 precipitados retroqueráticos pequeños, redondos, blanco-grisáceos centrales; cámara anterior profunda con flare leve; ángulo gonioscópicamente abierto sin sinequias.\n   • Diagnóstico etiológico: Solicitar PCR de humor acuoso para Citomegalovirus (CMV), HSV y VZV si las crisis son recurrentes.\n2) En Síndrome Uveítico de Fuchs:\n   • Precipitados retroqueráticos patognomónicos: Estrellados o punteados blancos, difusos en TODO el endotelio (360 grados, de limbo superior a inferior) unidos por finos filamentos.\n   • Heterocromía de iris: Iris hipocrómico con aspecto apolillado en el ojo afectado.\n   • ¡REGLA DE ORO DE FUCHS!: Ausencia absoluta de sinequias posteriores (si hay sinequias, NO es Fuchs).\n   • Signo de Amsler: Sangrado filiforme en ángulo durante la paracentesis o indentación gonioscópica por fragilidad de los neovasos angulares.\n   • Catarata subcapsular posterior precoz y glaucoma crónico.',
      tratamiento: '• Manejo de Posner-Schlossman:\n  - Acetato de prednisolona 1% cada 2-4 horas en fase aguda (pauta descendente rápida).\n  - Supresores de acuoso (Timolol + Dorzolamida + Brimonidina). ¡CONTRAINDICADOS ANÁLOGOS DE PROSTAGLANDINAS Y PILOCARPINA!\n  - Si PCR es positiva para CMV: Ganciclovir gel 0.15% 5 veces/día o Valganciclovir oral 900 mg c/12h por 3 semanas, luego 450 mg c/12h para evitar recurrencias.\n• Manejo de Fuchs:\n  - ¡NO TRATAR LA CELULARIDAD LEVE CON CORTICOIDES! La inflamación de Fuchs es refractaria a esteroides; el uso de cortisona solo acelera la catarata y produce glaucoma corticoideo añadido.\n  - Hipotensores tópicos (Betabloqueantes, IAC, Alfa-agonistas).\n  - Válvula de Ahmed si el glaucoma es refractario.',
      criteriosDerivacionOQuirurgicos: 'PCR de acuoso para CMV en Posner-Schlossman recurrente. Válvula de Ahmed en glaucoma refractario.',
      contraindicaciones: 'PROHIBIDO latanoprost en Posner-Schlossman por inducir edema macular quistoide. PROHIBIDO corticoides crónicos en Fuchs.'
    },
    pearlHighYield: 'Uveítis Hipertensiva Board Pearl: Posner-Schlossman = PIO 40-50 mmHg con inflamación mínima unilateral ligada a CMV; contraindicadas prostaglandinas. Fuchs = precipitados estrellados difusos 360º + heterocromía + NUNCA sinequias posteriores + signo de Amsler. En Fuchs no usar corticoides para la celularidad.',
    keyReferences: 'AAO BCSC Section 9: Intraocular Inflammation & Section 10: Glaucoma / Foster & Vitale Uveitis',
    differentialDiagnoses: ['Ataque agudo de cierre angular primario', 'Uveítis anterior herpética aguda necrotizante', 'Glaucoma neovascular verdadero']
  },

  // 6. RETINA: Desprendimiento de Retina Regmatógeno y Reglas de Lincoff
  {
    id: 'kb-retina-desprendimiento-lincoff',
    keywords: ['desprendimiento de retina', 'lincoff', 'shafer', 'polvo de tabaco', 'macula on', 'macula off', 'herradura', 'vitrectomia', 'cerclaje', 'fotopsias', 'miodesopsias'],
    subspecialty: 'Retina Médica y Quirúrgica',
    diagnosticSummary: 'Desprendimiento de Retina Regmatógeno (DRR) secundario a rotura retiniana de espesor total (desgarro en herradura o agujero atrófico).',
    pathophysiology: 'Desprendimiento de vítreo posterior (DVP) agudo anómalo con tracción vitreorretiniana focal persistente sobre la base del vítreo -> desgarro retiniano en herradura -> paso de humor vítreo licuado a través de la rotura hacia el espacio subretiniano potencial (entre los fotorreceptores y el epitelio pigmentario de la retina - EPR). El signo de Shafer ("polvo de tabaco" en vítreo anterior) corresponde a células del EPR liberadas tras la rotura.',
    clinicalApplication: {
      guardia: '1) Examen meticuloso de retina periférica de 360º con oftalmoscopio binocular indirecto (OBI) y depresión escleral con lente de 20D o 28D.\n2) DETERMINAR EL ESTADO MACULAR:\n• MÁCULA ON (fóvea aplicada): URGENGIA QUIRÚRGICA ABSOLUTA para intervenir en <24 horas para preservar la visión central.\n• MÁCULA OFF (fóvea desprendida): Cirugía semiurgente (dentro de los primeros 7-10 días, pues el pronóstico visual final no difiere significativamente tras la desinserción foveal).\n3) Reposo postural dirigido para que la gravedad impida la progresión del líquido hacia la mácula.',
      tratamiento: '• Aplicación de las Reglas de Lincoff para localizar la rotura causal:\n  - DR superior que cruza el meridiano de las 12h: la rotura está en las 12h o a 1.5 horas de reloj a cada lado.\n  - DR superior temporal o nasal: rotura en el borde superior a 1.5 horas.\n  - DR inferior: la rotura se encuentra en el lado más alto del nivel de líquido subretiniano.\n• Opciones quirúrgicas:\n  - Retinopexia neumática (inyección intravítrea de gas SF6 o C3F8 + láser/crioterapia): en roturas superiores únicas de cuadrante temporal/superior con desprendimiento no complicado.\n  - Vitrectomía pars plana (VPP 23G/25G/27G) con cerclaje escleral o endotaponamiento con gas o aceite de silicona.\n  - Cirugía escleral clásica (buckle / cerclaje con esponja de silicona + crioterapia).',
      criteriosDerivacionOQuirurgicos: 'Todo DR regmatógeno debe derivarse de urgencia al equipo de retina quirúrgica.',
      contraindicaciones: 'No demorar la intervención de un paciente con Mácula ON: cada hora cuenta antes de que el líquido despegue la foveola y deteriore irreversiblemente los conos foveales.'
    },
    pearlHighYield: 'Mácula ON = Quirófano urgente en <24 horas para salvar la visión foveal. El signo de Shafer positivo tras DVP predice rotura retiniana en >90% de los casos.',
    keyReferences: 'Lincoff Rules for Retinal Detachment / AAO BCSC Section 12',
    differentialDiagnoses: ['Desprendimiento de retina traccional (proliferación diabética)', 'Desprendimiento exudativo (Vogt-Koyanagi-Harada, tumor)', 'Retinosquisis senil degenerativa']
  },

  // 7. RETINA: Oclusión de la Arteria Central de la Retina (OACR)
  {
    id: 'kb-retina-oacr-arteria-central',
    keywords: ['oacr', 'arteria central', 'mancha rojo cereza', 'embolo de hollenhorst', 'amaurosis fugaz', 'isquemia retiniana', 'palidez retiniana', 'arteritis de celulas gigantes', 'acg', 'horton'],
    subspecialty: 'Retina Médica y Quirúrgica',
    diagnosticSummary: 'Oclusión de la Arteria Central de la Retina (OACR): Equivalente oftálmico a un accidente cerebrovascular isquémico agudo (Stroke).',
    pathophysiology: 'Obstrucción embólica (émbolo de colesterol de Hollenhorst de carótida, émbolo cálcico valvular o trombo plaquetario) o arterítica (vasculitis necrosante de la arteria oftálmica/arterias ciliares posteriores en Arteritis de Células Gigantes). Ocasiona isquemia catastrófica de las dos terceras partes internas de la retina neurosensorial (células ganglionares y fibras nerviosas), provocando edema citotóxico intracelular blanquecino lechoso opaco. La foveola conserva su transparencia porque solo posee fotorreceptores nutridos por la coriocapilar, contrastando con el polo posterior pálido y originando la clásica "mancha rojo cereza".',
    clinicalApplication: {
      guardia: '1) Si inicio <4 horas: Medidas empíricas de descompresión para aumentar perfusión e intentar desplazar el émbolo (masaje ocular digital firme intermitente, paracentesis de cámara anterior de 0.1 mL, Acetazolamida 500 mg IV/oral, colirios hipotensores).\n2) DESCARTAR INMEDIATAMENTE ETIOLOGÍA ARTERÍTICA (Arteritis de Células Gigantes / Horton) en pacientes >50 años:\n  - Preguntar: cefalea temporal, claudicación mandibular, astenia, polimialgia reumática, hipersensibilidad al peinado.\n  - Analítica urgente de guardia: VSG y Proteína C Reactiva (PCR).\n  - Si VSG >50-100 o PCR elevada: BOLOS DE METILPREDNISOLONA 1g/día IV por 3 días antes de la biopsia de arteria temporal para salvar el ojo contralateral.',
      tratamiento: '• Manejo no arterítico (embólico): Interconsulta de código ictus urgente / Unidad de Ictus para prevención de ictus cerebral y muerte vascular (riesgo de ACV en las siguientes semanas >20%).\n• Estudio cardiovascular urgente: Ecodoppler de troncos supraaórticos/carotídeo y ecocardiograma transesofágico/Holter.',
      criteriosDerivacionOQuirurgicos: 'Protocolos de fibrinólisis intraarterial con r-tPA por radiología intervencionista si el paciente llega a un centro especializado antes de las 4.5 horas.',
      contraindicaciones: 'NUNCA dar de alta a un paciente con OACR a su domicilio sin estudio vascular carotídeo o valoración por Neurología.'
    },
    pearlHighYield: 'La presencia de una arteria ciliorretiniana permeable (presente en ~15-20% de la población, originada de las ciliares posteriores) preserva una pequeña isla foveal de agudeza visual 20/20 dentro de un campo visual totalmente ciego.',
    keyReferences: 'AHA/ASA Scientific Statement: Management of Central Retinal Artery Occlusion / AAO BCSC Section 12',
    differentialDiagnoses: ['Oclusión de rama arterial (BRAO)', 'Neuropatía óptica isquémica arterítica (NOIA-A)', 'Oclusión de vena central retiniana (OVCR)', 'Enfermedad de Tay-Sachs']
  },

  // RETINA: Coriorretinopatía Serosa Central y Espectro Paquicoroides
  {
    id: 'kb-retina-csc-paquicoroides',
    keywords: ['coriorretinopatia serosa central', 'csc', 'paquicoroides', 'corticoides contraindicados', 'humo de chimenea', 'punto de tinta', 'eplerenona', 'tfd media dosis', 'ensayo place', 'desprendimiento seroso'],
    subspecialty: 'Retina Médica y Quirúrgica',
    diagnosticSummary: 'Coriorretinopatía Serosa Central (CSC) y Espectro Paquicoroides. Desprendimiento seroso foveal neurosensorial por hiperpermeabilidad coroidea focal.',
    pathophysiology: 'Vasodilatación anómala de vasos de la capa de Haller ("paquivasos") y congestión venosa que eleva la presión hidrostática del estroma coroideo, rompiendo la barrera de uniones estrechas del EPR y permitiendo el paso de líquido rico en proteínas al espacio subretiniano. Los corticoides aumentan la reactividad endotelial coroidea y alteran la bomba del EPR, siendo el mayor disparador iatrogénico.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía: Elevación en cúpula transparente de la retina macular, pérdida del reflejo foveolar, micropsia y metamorfopsia en rejilla de Amsler.\n2) ANAMNESIS DIRIGIDA EXHAUSTIVA DE CORTICOIDES: Preguntar expresamente por aerosoles nasales para rinitis, inhaladores bronquiales, cremas para eccema dérmico o infiltraciones articulares.\n3) SD-OCT con EDI: Medir grosor coroideo subfoveal (>400-500 µm) y visualizar líquido subretiniano con elongación de segmentos externos de fotorreceptores.\n4) Si dura >3 meses o es recurrente: Angiografía Fluoresceínica (fuga en punto de tinta o humo de chimenea) y Angiografía con Verde de Indocianina (placas de hiperpermeabilidad coroidea).',
      tratamiento: '• CSC Aguda (<3 meses): Observación activa y SUSPENSIÓN INMEDIATA DE TODOS LOS CORTICOIDES. El 80-90% resuelve espontáneamente.\n• CSC Crónica (>3 meses) o Profesional: Terapia Fotodinámica con Verteporfina a MEDIA DOSIS (Half-Dose PDT: 3 mg/m², 50 J/cm², 83 s). Respaldada por el ensayo PLACE como estándar de oro superior al láser micropulso subumbral.\n• Antagonistas mineralocorticoides (Eplerenona 25-50 mg/día VO) como alternativa temporal si no hay disponibilidad de TFD.',
      criteriosDerivacionOQuirurgicos: 'Remisión a subespecialidad de retina si el líquido subretiniano persiste más de 3 meses o si el OCTA sugiere neovasculopatía paquicoroidea asociada.',
      contraindicaciones: 'CONTRAINDICACIÓN FORMAL ABSOLUTA: NUNCA prescribir corticosteroides tópicos, sistémicos ni perioculares ante una sospecha de CSC; los esteroides pueden causar desprendimientos ampollosos gigantes o inducir neovascularización macular rápida.'
    },
    pearlHighYield: 'CSC Board Pearl: NUNCA usar corticoides (los empeoran drásticamente). El ensayo PLACE demostró la superioridad de la TFD a media dosis sobre el láser micropulso en CSC crónica. Preguntar siempre por corticoides nasales, dérmicos o inhalados.',
    keyReferences: 'PLACE Trial (Ophthalmology 2018) / AAO BCSC Section 12: Retina and Vitreous',
    differentialDiagnoses: ['Neovasculopatía paquicoroidea (MNV Tipo 1)', 'Síndrome de Vogt-Koyanagi-Harada', 'Hemangioma coroideo circunscrito', 'Metástasis coroidea']
  },

  // RETINA: Agujero Macular Idiopático y Tracción Vitreomacular
  {
    id: 'kb-retina-agujero-macular-vmt',
    keywords: ['agujero macular', 'watzke-allen', 'gass', 'ivts', 'traccion vitreomacular', 'vmt', 'pelado de ilm', 'inverted flap', 'michalewska', 'posicion prona'],
    subspecialty: 'Retina Médica y Quirúrgica',
    diagnosticSummary: 'Agujero Macular de Espesor Total (FTMH) y Síndrome de Tracción Vitreomacular (VMT). Defecto foveal completo secundario a fuerzas traccionales anteroposteriores y tangenciales.',
    pathophysiology: 'Desprendimiento vítreo anómalo en la foveola que genera tracción anteroposterior sobre las células de Müller centrales, culminando en avulsión del fotorreceptor foveolar, cavitación intrarretiniana y dehiscencia de espesor total de la retina neurosensorial. El pelado de la membrana limitante interna (ILM) elimina los miofibroblastos contráctiles y estimula la proliferación glial reparadora de Müller.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía: Defecto redondeado foveal rojizo bien delimitado con borde engrosado por halo de líquido subretiniano y depósitos amarillentos en la base.\n2) Test de Watzke-Allen: Proyectar una hendidura fina de luz sobre el agujero; el paciente percibe una ruptura o estrechamiento central del haz luminoso.\n3) SD-OCT Macular (Clasificación IVTS):\n   • Pequeño: Diámetro mínimo <=250 µm.\n   • Mediano: >250 µm y <=400 µm.\n   • Grande: >400 µm (requiere técnicas quirúrgicas avanzadas de flap invertido).',
      tratamiento: '• VMT sintomático aislado sin agujero: Observación (resolución espontánea en 20-30%) o Vitrectomía Pars Plana si la metamorfopsia es incapacitante.\n• Agujero Macular de Espesor Total:\n  - Vitrectomía Pars Plana 25G/27G + Desprendimiento de hialoides posterior.\n  - En agujeros <=400 µm: Pelado circular completo de la membrana limitante interna (ILM) teñida con Brilliant Blue G en 360 grados alrededor de la fóvea.\n  - En agujeros grandes >400 µm: Técnica de Flap Invertido de ILM (Inverted ILM Flap de Michalewska) para elevar la tasa de cierre del 80% al 98%.\n  - Intercambio fluido-gas con SF6 20% o C3F8 14% + posición prona (face-down) durante 3 a 5 días.',
      criteriosDerivacionOQuirurgicos: 'Programación quirúrgica pronta (mejores resultados visuales si se opera dentro de los primeros 6 meses desde el inicio de síntomas).',
      contraindicaciones: 'PROHIBICIÓN ESTRICTA: El paciente con gas intraocular expansible NUNCA debe viajar en avión, subir a montañas de gran altitud ni recibir anestesia general con óxido nitroso (N2O) por riesgo inminente de ceguera por glaucoma agudo por sobreexpansión.'
    },
    pearlHighYield: 'Agujero Macular Board Pearl: Si el agujero mide >400 µm (Grande según IVTS), la técnica quirúrgica de elección es el Flap Invertido de ILM (Michalewska) para evitar falla de cierre primario. Prohibido viajar en avión con gas intraocular.',
    keyReferences: 'International Vitreomacular Traction Study (IVTS) / Michalewska et al. (Ophthalmology 2010)',
    differentialDiagnoses: ['Pseudagujero macular (asociado a MER)', 'Agujero lamelar macular', 'Foveoquisis miópica', 'Maculopatía solar']
  },

  // RETINA: DMAE Seca y Atrofia Geográfica
  {
    id: 'kb-retina-dmae-atrofia-geografica-complemento',
    keywords: ['atrofia geografica', 'dmae seca', 'crora', 'areds-2', 'complemento', 'pegcetacoplan', 'syfovre', 'avacincaptad', 'izervay', 'foveal sparing', 'autofluorescencia'],
    subspecialty: 'Retina Médica y Quirúrgica',
    diagnosticSummary: 'DMAE Seca Avanzada y Atrofia Geográfica (cRORA). Pérdida confluente de fotorreceptores, EPR y coriocapilar mediada por desregulación de la vía alternativa del complemento.',
    pathophysiology: 'Estrés oxidativo crónico y acúmulo de lípidos modificados (drusas y pseudodrusas reticulares) con pérdida de función en inhibidores del complemento (CFH). La hiperactivación de la cascada del complemento activa C3 y C5, ensamblando el Complejo de Ataque a la Membrana (MAC C5b-9) en la superficie basal del EPR que provoca necrosis celular y apoptosis fotorreceptora centrípeta.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía y FAF: Zonas bien delimitadas de palidez coroidea con vasos visibles; en Autofluorescencia se aprecia hipoautofluorescencia absoluta central rodeada por bordes hiperautofluorescentes que predicen rápida expansión.\n2) SD-OCT: Criterios cRORA (pérdida de EPR >=250 µm + atrofia de fotorreceptores + hipertransmisión coroidea sin desgarro).\n3) Evaluar Foveal Sparing: Preservación de un islote central foveal que mantiene agudeza 20/25-20/40 pero con escotomas paracentrales que impiden la lectura fluida.',
      tratamiento: '• Prevención en DMAE intermedia: Fórmula AREDS-2 estricta (Luteína 10 mg + Zeaxantina 2 mg + Vit C 500 mg + Vit E 400 UI + Zinc y Cobre). ¡NUNCA betacaroteno en fumadores por riesgo de cáncer pulmonar!\n• Tratamiento de Atrofia Geográfica aprobados por FDA:\n  - Pegcetacoplán (Syfovre): Inhibidor de C3 y C3b intravítreo cada 25 a 60 días (ensayos OAKS/DERBY).\n  - Avacincaptad Pegol (Izervay): Inhibidor de C5 intravítreo mensual (ensayos GATHER1/2).\n  - Ambos enlentecen la tasa de progresión de la atrofia en 18-30% anual pero NO devuelven la visión ya perdida.',
      criteriosDerivacionOQuirurgicos: 'Remisión a retina médica para cuantificación de tasa de progresión en autofluorescencia y evaluación de candidatos a inhibidores del complemento.',
      contraindicaciones: 'No prometer mejoría visual con inhibidores del complemento (su único objetivo es frenar la expansión atrófica). Monitorizar conversión a DMAE húmeda (7-12% de riesgo).'
    },
    pearlHighYield: 'Atrofia Geográfica Board Pearl: AREDS-2 sustituyó el betacaroteno por Luteína y Zeaxantina para eliminar el riesgo de cáncer de pulmón en fumadores. Pegcetacoplán (C3) y Avacincaptad (C5) frenan la expansión de la atrofia pero no regeneran tejido perdido; aumentan el riesgo de DMAE exudativa secundaria.',
    keyReferences: 'AREDS-2 Study (JAMA 2013) / OAKS & DERBY Trials (Lancet 2023) / CAM Consensus',
    differentialDiagnoses: ['Distrofia de Stargardt de inicio tardío', 'Toxicidad por hidroxicloroquina', 'Atrofia girata']
  },

  // RETINA: Desprendimiento Traccional en Diabetes y Fenómeno Crunch
  {
    id: 'kb-retina-drt-diabetico-crunch',
    keywords: ['desprendimiento traccional', 'drt', 'fenomeno crunch', 'crunch macular', 'retinopatia diabetica proliferativa', 'vitrectomia diabetica', 'segmentacion', 'delaminacion', 'anti-vegf prequirurgico'],
    subspecialty: 'Retina Médica y Quirúrgica',
    diagnosticSummary: 'Desprendimiento de Retina Traccional (DRT) y Desprendimiento Mixto en Retinopatía Diabética Proliferativa Avanzada. Síndrome de Crunch Macular post-anti-VEGF.',
    pathophysiology: 'Isquemia retiniana extensa que induce neovasos adheridos a la corteza vítrea posterior. La proliferación miofibroblástica contrae tangencialmente la hialoides, traccionando mecánicamente la retina en configuración cóncava. Si la tracción rompe la retina, se transforma en desprendimiento mixto traccional-regmatógeno (convexo y de avance rápido). El uso de anti-VEGF sin cirugía inmediata precipita una fibrosis retráctil acelerada ("crunch").',
    clinicalApplication: {
      guardia: '1) Biomicroscopía y Ecografía Modo B: Superficie retiniana cóncava e inmóvil adherida a bandas blanquecinas en arcadas. Si se vuelve convexa y bulbosa, buscar desgarros (desprendimiento mixto urgente).\n2) Búsqueda de hemorragia premacular o vítrea densa acompañante.\n3) ALERTA DE CRUNCH: Si se inyecta anti-VEGF (Bevacizumab/Aflibercept) para reducir sangrado intraoperatorio, la vitrectomía DEBE realizarse estrictamente a los 3 a 5 días (máximo 7 días).',
      tratamiento: '• DRT extramacular estable: Observación estrecha y panfotocoagulación láser cautelosa en áreas isquémicas libres de tracción.\n• DRT con compromiso foveal o desprendimiento mixto: Vitrectomía Pars Plana microincisional 25G:\n  - Inyección de Bevacizumab 1.25 mg intravítreo 3-5 días antes de la vitrectomía.\n  - VPP con tinción por triamcinolona.\n  - Disección de membranas mediante Segmentación (cortar puentes inter-placas) y Delaminación (separar plano retiniano con cuchilla o tijeras en paralelo a vasos).\n  - Panfotocoagulación con endoláser en 360 grados y tamponamiento con gas C3F8 o aceite de silicona.',
      criteriosDerivacionOQuirurgicos: 'Cirugía urgente en <1 semana si hay compromiso macular reciente o desprendimiento mixto.',
      contraindicaciones: 'CONTRAINDICACIÓN CRÍTICA: NUNCA inyectar anti-VEGF en un paciente con DRT diabético y citarlo a control semanas después. La contracción fibrótica masiva desgarrará la mácula (fenómeno de crunch diabético irreversible).'
    },
    pearlHighYield: 'DRT Diabético Board Pearl: La ventana quirúrgica tras anti-VEGF preoperatorio es estrictamente de 3 a 5 días para evitar el temible "crunch macular". El DRT es cóncavo e inmóvil; si se torna convexo y móvil, es un desprendimiento mixto traccional-regmatógeno que exige cirugía de urgencia.',
    keyReferences: 'DRVS Report 5 / DRCR.net Protocol S / AAO BCSC Section 12',
    differentialDiagnoses: ['Desprendimiento regmatógeno primario', 'Retinopatía proliferativa por drepanocitosis', 'Hemorragia vítrea aislada sin desprendimiento']
  },

  // RETINA: Retinopatía del Prematuro (ROP) y Clasificación ICROP-3
  {
    id: 'kb-retina-rop-icrop3-etrop',
    keywords: ['retinopatia del prematuro', 'rop', 'icrop-3', 'etrop', 'rop tipo 1', 'plus disease', 'a-rop', 'beat-rop', 'rainbow', 'ranibizumab neonatal', 'laser diodo'],
    subspecialty: 'Retina Pediátrica y Prematurez',
    diagnosticSummary: 'Retinopatía del Prematuro (ROP). Vasoproliferación anormal por inmadurez vascular neonatal sujeta a hiperoxia inicial seguida de isquemia relativa.',
    pathophysiology: 'Fase 1 (Vaso-obliteración): El oxígeno suplementario suprime HIF-1α y colapsa los niveles de VEGF e IGF-1, deteniendo el avance vascular centrífugo normal. Fase 2 (Vasoproliferación): Hacia las 32-34 semanas PMA, la retina periférica no perfundida se vuelve hipóxica, sobreexpresando masivamente VEGF que produce penachos neovasculares en la interfase cresta/retina avascular y enfermedad Plus.',
    clinicalApplication: {
      guardia: '1) Criterios de Tamizaje: Recién nacidos con peso <=1,500 gramos O edad gestacional <=30 semanas (o curso clínico inestable entre 1,500-2,000 g).\n2) Momento del primer examen: a las 4 semanas de vida posnatal o a las 31 semanas PMA (lo que ocurra más tarde).\n3) Oftalmoscopía Indirecta con blefarostato neonatal y depresión escleral tras midriasis suave (Ciclopentolato 0.5% + Fenilefrina 2.5%).\n4) Determinar Zona (I, II o III), Estadio (1 a 5) y presencia de Enfermedad Plus (dilatación y tortuosidad en >=2 cuadrantes).',
      tratamiento: '• Criterio ROP Tipo 1 (Tratamiento Obligatorio en <48-72h según ETROP):\n  1) Zona I, cualquier estadio con enfermedad Plus.\n  2) Zona I, Estadio 3 sin Plus.\n  3) Zona II, Estadio 2 ó 3 con Plus.\n• Modalidades Terapéuticas:\n  - Anti-VEGF Intravítreo (Ranibizumab 0.2 mg en 0.02 mL ó Bevacizumab 0.625 mg en 0.025 mL): De elección en Zona I y A-ROP (Aguda Agresiva) por ensayo BEAT-ROP y RAINBOW (evita la destrucción del campo visual con láser).\n  - Fotocoagulación con Láser Diodo Confluente de toda la retina avascular: Tratamiento definitivo no dependiente de recurrencias en Zona II.\n• Si progresa a Estadio 4 o 5: Vitrectomía lensectomía pediátrica especializada.',
      criteriosDerivacionOQuirurgicos: 'Tratamiento mandatorio en <72 horas tras el diagnóstico de ROP Tipo 1 para evitar ceguera bilateral irreversible.',
      contraindicaciones: 'Al usar anti-VEGF: El seguimiento ambulatorio debe extenderse estrictamente hasta >55-65 semanas PMA por riesgo de recurrencia tardía cuando el fármaco se depura y la retina continúa avascular.'
    },
    pearlHighYield: 'ROP Board Pearl: Criterios ETROP Tipo 1 (Plus en Zona I, Estadio 3 en Zona I, o Plus en Zona II con estadio 2/3) obligan a tratar en <72h. En Zona I y A-ROP, el anti-VEGF es de elección (BEAT-ROP / RAINBOW) pero exige seguimiento estricto hasta >60 semanas PMA por riesgo de recurrencia tardía.',
    keyReferences: 'ICROP-3 (Ophthalmology 2021) / ETROP Trial / BEAT-ROP (NEJM 2011) / RAINBOW (Lancet 2019)',
    differentialDiagnoses: ['Vitreorretinopatía exudativa familiar (FEVR)', 'Incontinencia pigmentaria', 'Persistencia de vasculatura fetal (PVF)']
  },

  // RETINA: Distrofias Hereditarias, Stargardt y Terapia Génica (Luxturna)
  {
    id: 'kb-retina-stargardt-luxturna',
    keywords: ['distrofias hereditarias', 'retinosis pigmentaria', 'stargardt', 'abca4', 'silencio coroideo', 'rpe65', 'luxturna', 'voretigene neparvovec', 'vitamina a contraindicada', 'espículas óseas'],
    subspecialty: 'Retina Médica y Genética Ocular',
    diagnosticSummary: 'Distrofias Hereditarias de Retina: Retinosis Pigmentaria (RP), Enfermedad de Stargardt (STGD1 / gen ABCA4) y Amaurosis Congénita de Leber con Terapia Génica (Luxturna / RPE65).',
    pathophysiology: '1) Retinosis Pigmentaria: Pérdida inicial de bastones periféricos por mutaciones genéticas que provoca nictalopía y campo tubular, seguida de degeneración foveal secundaria de conos. 2) Stargardt: Mutaciones bialélicas en ABCA4 con falla en la eliminación de N-retinilideno-PE y acumulación masiva de lipofuscina citotóxica (A2E) que lisa el EPR macular. 3) RPE65: Bloqueo de la isomerasa del ciclo visual; los fotorreceptores permanecen metabólicamente inactivos pero vivos en etapas precoces.',
    clinicalApplication: {
      guardia: '1) En sospecha de Retinosis Pigmentaria: Buscar tríada clásica (espículas óseas perivasculares, atenuación arteriolar marcada y palidez cérea papilar) y descartar edema macular quístico en OCT.\n2) En Stargardt: Maculopatía en bronce bruñido o baba de caracol con flecks amarillos pisciformes; en Angiografía Fluoresceínica destaca el patognomónico "Silencio Coroideo" (Dark Choroid por absorción de azul por la lipofuscina).\n3) Pruebas electrofisiológicas: ERG de campo completo según protocolo ISCEV para confirmar disfunción de bastones/conos.\n4) Test Genético NGS obligatorio: Paneles multigenéticos de IRD para determinar mutaciones patogénicas específicas.',
      tratamiento: '• Edema macular en RP: Dorzolamida tópica 2% cada 8-12 horas como primera línea (estimula bomba hídrica del EPR sin efectos adversos esteroideos).\n• Enfermedad de Stargardt: ¡PROHIBIDA LA SUPLEMENTACIÓN CON VITAMINA A! (acelera la acumulación de A2E tóxico). Prescribir filtros solares con absorción UV/azul.\n• TERAPIA GÉNICA APROBADA (Luxturna / Voretigene Neparvovec):\n  - Indicada para mutaciones bialélicas patogénicas confirmadas en el gen RPE65 con células retinianas viables residuales.\n  - Inyección subretiniana meticulosa de 1.5 x 10^11 genomas vectoriales en 0.3 mL mediante vitrectomía pars plana.\n  - Restaura el ciclo visual y la capacidad de navegación en penumbra (test MLMT).',
      criteriosDerivacionOQuirurgicos: 'Asesoramiento genético formal y derivación a centros de referencia acreditados para terapia génica ocular.',
      contraindicaciones: 'Enfermedad de Stargardt: PROHIBICIÓN ABSOLUTA DE SUPLEMENTOS CON VITAMINA A O BETACAROTENOS (aceleran la muerte celular foveal).'
    },
    pearlHighYield: 'Distrofias de Retina Board Pearl: En Stargardt la Vitamina A está TOTALMENTE CONTRAINDICADA por acelerar la acumulación de lipofuscina (A2E). Voretigene neparvovec (Luxturna) es la primera terapia génica in vivo aprobada por FDA/EMA, curativa para mutaciones bialélicas en RPE65 si hay células viables.',
    keyReferences: 'ProgStar Study / Luxturna Phase 3 Trial (Lancet 2017) / AAO BCSC Section 12',
    differentialDiagnoses: ['Síndrome de Usher (RP + sordera)', 'Síndrome de Bardet-Biedl (RP + obesidad + polidactilia)', 'Toxicidad por cloroquina/hidroxicloroquina']
  },

  // 8. NEUROFTALMOLOGÍA: Neuropatía Óptica Isquémica Anterior Arterítica (NOIA-A / ACG)
  {
    id: 'kb-neuro-noia-arteritica',
    keywords: ['noia', 'noia-a', 'arteritis de celulas gigantes', 'horton', 'claudicacion mandibular', 'vsg', 'pcr', 'metilprednisolona', 'biopsia arteria temporal', 'edema de papila palido', 'tiza'],
    subspecialty: 'Neuroftalmología',
    diagnosticSummary: 'Neuropatía Óptica Isquémica Anterior Arterítica (NOIA-A) secundaria a Arteritis de Células Gigantes (Arteritis de la Temporal / Enfermedad de Horton).',
    pathophysiology: 'Vasculitis granulomatosa necrosante sistémica de vasos de mediano y gran calibre que afecta las arterias ciliares posteriores cortas que irrigan la cabeza del nervio óptico (círculo arterial de Zinn-Haller). La oclusión trombótica causa infarto isquémico transmural masivo de la papila óptica con edema pálido "en tiza" ("chalky-white disc edema").',
    clinicalApplication: {
      guardia: '1) Criterios de sospecha en paciente >50 años con pérdida visual monocular súbita y papilitis pálida:\n  - Claudicación mandibular al masticar (el síntoma más específico, cociente de probabilidad >9).\n  - Cefalea temporal reciente o dolor en cuero cabelludo al peinarse.\n  - Polimialgia reumática (dolor en cinturas escapular y pélvica).\n  - Astenia y pérdida de peso involuntaria.\n2) Solicitar analítica urgente de urgencias: VSG (frecuentemente >70-100 mm/h) y PCR (marcador más sensible que la VSG en fases iniciales) y plaquetas (trombocitosis reactiva).',
      tratamiento: '• INICIAR INMEDIATAMENTE METILPREDNISOLONA 1000 mg (1 g) IV AL DÍA DURANTE 3 DÍAS CONSECUTIVOS.\n• Continuar con Prednisona oral 1 mg/kg/día durante 4-6 semanas con descenso muy gradual según clínica y VSG/PCR.\n• Tocilizumab (anticuerpo anti-IL-6) como ahorrador de corticoides aprobado en ACG.\n• Protección gástrica con IBP y profilaxis de osteoporosis con calcio + vitamina D.',
      criteriosDerivacionOQuirurgicos: 'Biopsia de la arteria temporal unilateral o bilateral (segmento mínimo de 2 a 3 cm de longitud para evitar skip lesions). La biopsia puede realizarse de forma reglada en las siguientes 1-2 semanas sin que los esteroides alteren la confirmación histopatológica.',
      contraindicaciones: 'NUNCA ESPERAR A LOS RESULTADOS DE LA BIOPSIA PARA INICIAR LOS CORTICOIDES. El ojo contralateral puede cegarse en cuestión de horas o días si se retrasa la terapia.'
    },
    pearlHighYield: 'La claudicación mandibular es el síntoma de mayor especificidad clínica. Si se sospecha NOIA-A, los esteroides IV a dosis altas deben iniciarse de inmediato para salvar el ojo contralateral.',
    keyReferences: 'AAO BCSC Section 5: Neuro-Ophthalmology / GiACTA Trial',
    differentialDiagnoses: ['NOIA No Arterítica (NOIA-NA, papila hiperémica, disc at risk)', 'Neuritis óptica desmielinizante', 'OACR', 'Papiledema bilateral']
  },

  // 9. NEUROFTALMOLOGÍA: Parálisis del III Par Craneal con compromiso pupilar
  {
    id: 'kb-neuro-paralisis-tercer-par',
    keywords: ['tercer par', 'iii par', 'motor ocular comun', 'midriasis', 'aneurisma', 'comunicante posterior', 'acomp', 'angiotac', 'ptosis', 'estrabismo'],
    subspecialty: 'Neuroftalmología',
    diagnosticSummary: 'Parálisis del III Par Craneal (Nervio Oculomotor) con Afectación Pupilar (Midriasis arrefléctica): Aneurisma de la Arteria Comunicante Posterior (AComP) hasta demostrar lo contrario.',
    pathophysiology: 'Las fibras parasimpáticas pupiloconstrictoras discurren en la periferia más superficial y dorsomedial del III par craneal, por lo que son exquisitamente sensibles a la compresión extrínseca (como la expansión de un aneurisma sacular en la unión de la arteria carótida interna y la comunicante posterior). En cambio, la isquemia microvascular (diabetes, hipertensión) afecta el núcleo central del tronco nervioso respetando las fibras pupilares periféricas ("pupil-sparing").',
    clinicalApplication: {
      guardia: '1) Exploración clínica: Ptosis palpebral ipsilateral, ojo desviado "hacia abajo y afuera" (hipotorsión y abducción por acción no contrarrestada del IV y VI par), pupila dilatada arreactiva.\n2) SOLICITAR ANGIOGRAFÍA POR TOMOGRAFÍA COMPUTARIZADA (ANGIO-TAC CEREBRAL Y DE POLÍGONO DE WILLIS) URGENTE.\n3) Si la angio-TAC es negativa pero la sospecha clínica de aneurisma es muy alta, realizar Angiografía Convencional con Sustracción Digital (DSA).',
      tratamiento: '• Interconsulta urgente a Neurocirugía / Neurorradiología Intervencionista para clipaje quirúrgico o embolización con coils endovasculares de inmediato para prevenir la rotura catastrófica del aneurisma y hemorragia subaracnoidea letal.',
      criteriosDerivacionOQuirurgicos: 'Todo compromiso pupilar o dolor retroocular agudo en parálisis del III par requiere ingreso neuroquirúrgico inmediato.',
      contraindicaciones: '1) NUNCA asumir causa diabética o isquémica si hay compromiso de la pupila.\n2) Una parálisis "incompleta" que evoluciona con dilatación pupilar tardía debe considerarse compresiva y reevaluarse con neuroimagen.'
    },
    pearlHighYield: 'Parálisis del III par + Midriasis pupilar = Aneurisma de la arteria comunicante posterior (AComP). Emergencia neuroquirúrgica vital.',
    keyReferences: 'AAO BCSC Section 5: Neuro-Ophthalmology / NANOS Guidelines',
    differentialDiagnoses: ['Infarto microvascular isquémico del III par (respeta pupila)', 'Miastenia gravis ocular (nunca afecta pupila)', 'Síndrome del vértice orbitario', 'Fístula carótido-cavernosa']
  },

  // 10. CRISTALINO Y CATARATA: Endoftalmitis Aguda Postquirúrgica
  {
    id: 'kb-catarata-endoftalmitis-evs',
    keywords: ['endoftalmitis', 'facoemulsificacion', 'evs', 'hipopion', 'vancomicina', 'ceftazidima', 'vitrectomia', 'percepcion de luz', 'inyeccion intravitrea'],
    subspecialty: 'Cristalino y Cirugía de Catarata',
    diagnosticSummary: 'Endoftalmitis Aguda Postquirúrgica tras Cirugía de Catarata (3 a 7 días postoperatorios). Microorganismo más frecuente: Staphylococcus epidermidis (coagulasa negativo).',
    pathophysiology: 'Inoculación bacteriana intraocular desde la flora conjuntival/palpebral del paciente durante la cirugía -> replicación en humor acuoso y vítreo -> liberación de toxinas y activación leucocitaria masiva -> formación de hipopion, fibrina en cámara anterior, vitritis y necrosis de la retina sensorial.',
    clinicalApplication: {
      guardia: '1) Determinar la Agudeza Visual basal de forma estricta (aplicación directa de los criterios del estudio EVS - Endophthalmitis Vitrectomy Study).\n2) Toma de muestra microbiológica: Punción aspirativa vítrea (0.1 a 0.2 mL) y acuosa (0.1 mL) para tinción de Gram, Giemsa y cultivo en medios enriquecidos.',
      tratamiento: '• TERAPIA ANTIMICROBIANA INTRAVÍTREA INMEDIATA:\n  - Vancomicina intravítrea 1.0 mg / 0.1 mL (cubre Gram positivos, incluidos MRSA y Enterococo).\n  - Ceftazidima intravítrea 2.25 mg / 0.1 mL (cubre Gram negativos, incluida Pseudomonas; en alérgicos a betalactámicos usar Amikacina 0.4 mg/0.1 mL).\n  - Dexametasona intravítrea 0.4 mg / 0.1 mL coadyuvante.\n• Colirios tópicos fortificados de vancomicina y ceftazidima cada hora + Ciclopentolato 1% cada 8h.',
      criteriosDerivacionOQuirurgicos: 'CRITERIO EVS CAPITAL:\n• Si la visión es de PERCEPCIÓN DE LUZ (PL) o peor -> VITRECTOMÍA PARS PLANA URGENTE EN QUIRÓFANO (el EVS demostró que triplica la probabilidad de alcanzar agudeza final 20/40 frente a punción simple).\n• Si la visión es de MOVIMIENTO DE MANOS (MM) o mejor -> PUNCIÓN E INYECCIÓN INTRAVÍTREA de antibióticos ("Tap and Inject") con resultados equivalentes a vitrectomía.',
      contraindicaciones: 'No retrasar la punción y las inyecciones intravítreas esperando resultados de laboratorio o traslado diferido.'
    },
    pearlHighYield: 'Estudio EVS: Si la visión inicial es Percepción de Luz (PL) -> Vitrectomía Pars Plana de urgencia. Si es Movimiento de Manos o mejor -> Punción con inyección intravítrea de antibióticos.',
    keyReferences: 'Endophthalmitis Vitrectomy Study (EVS) / ESCRS Guidelines for Cataract Surgery',
    differentialDiagnoses: ['Síndrome Tóxico del Segmento Anterior (TASS - ocurre <24h postfaco, no duele tanto, sin vitritis)', 'Retención de viscoelástico con pico de PIO', 'Uveítis facoantigénica']
  },

  // 11. CRISTALINO: Rotura Capsular Posterior en Facoemulsificación
  {
    id: 'kb-catarata-rotura-capsular',
    keywords: ['rotura capsular', 'capsula posterior', 'diálisis zonular', 'facoemulsificacion', 'caida de nucleo', 'viscoelastico dispersivo', 'vitrectomia anterior', 'triamcinolona'],
    subspecialty: 'Cristalino y Cirugía de Catarata',
    diagnosticSummary: 'Rotura Capsular Posterior (RCP) intraoperatoria durante facoemulsificación de catarata con o sin prolapso vítreo.',
    pathophysiology: 'Pérdida de la integridad de la cápsula posterior (por aspiración inadvertida, trauma con terminal de ultrasonido o debilidad zonular preexistente) -> rotura de la membrana hialoidea anterior -> herniación de humor vítreo hacia la cámara anterior -> riesgo de tracción en la base del vítreo con desgarros retinianos periféricos y migración de fragmentos nucleares a cavidad vítrea.',
    clinicalApplication: {
      guardia: 'CONDUCTA QUIRÚRGICA PASO A PASO:\n1) NO RETIRAR LA PIEZA DE MANO DE LA CÁMARA ANTERIOR DE MANERA BRUSCA. Si se retira, la cámara colapsa a 0 mmHg y el vítreo prolapsa masivamente.\n2) Mantener la irrigación en posición estática e inyectar viscoelástico dispersivo (OVD) a través de la paracentesis lateral para presurizar la cámara y retener el núcleo antes de retirar la pieza.\n3) Visualizar bandas vítreas transparentes en cámara anterior tiñendo con Triamcinolona acetónido intracameral diluida (1:10).\n4) Vitrectomía anterior bimanual por incisiones separadas (corte alto >3000-5000 cpm, flujo y vacío moderados).',
      tratamiento: '• Si el fragmento nuclear migró al vítreo posterior profundo: NUNCA intentar rescatarlo o "pescarlo" a ciegas con la pieza de faco (riesgo masivo de desprendimiento y desgarro retiniano gigante). Limpiar incisión y remitir al retinólogo para vitrectomía pars plana reglada diferida.\n• Elección de LIO:\n  - Si la rexis anterior está intacta y hay buen soporte periférico: LIO de 3 piezas en sulcus (descontar 0.5 a 1.0 dioptrías si se implanta en sulcus en vez de saco) o captura óptica de la óptica a través de la rexis.\n  - Si no hay soporte capsular: LIO de fijación escleral (técnica Yamane) o LIO de cámara anterior con soporte angular.',
      criteriosDerivacionOQuirurgicos: 'Comprobar al final que las heridas están herméticas y libres de vítreo (suturar incisión principal con nylon 10-0). Administrar antibióticos intracamerales y vigilar picos de PIO postoperatorios en las primeras 24 horas.',
      contraindicaciones: '1) NUNCA traccionar de hebras vítreas con pinzas o tijeras sin cortar previamente con el vitréctomo.\n2) NUNCA implantar un lente monobloque acrílico de 1 pieza en el sulcus ciliar (causa síndrome UGH: uveítis, glaucoma e hipema).'
    },
    pearlHighYield: 'Un lente intraocular de una sola pieza (single-piece) NUNCA debe implantarse en el sulcus ciliar; el roce de los hápticos gruesos contra el iris posterior produce síndrome UGH (Uveítis, Glaucoma, Hipema).',
    keyReferences: 'ESCRS Guidelines for Cataract Surgery / AAO BCSC Section 11',
    differentialDiagnoses: ['Diálisis zonular aislada', 'Desprendimiento de Descemet', 'Hemorragia expulsiva coroidea']
  },

  // 12. UVEÍTIS: Uveítis Anterior HLA-B27
  {
    id: 'kb-uveitis-hla-b27',
    keywords: ['hla-b27', 'espondilitis', 'sinequias', 'ciclopentolato', 'uveitis anterior', 'tyndall', 'espondiloartropatia', 'lumbalgia inflamatoria'],
    subspecialty: 'Uveítis e Inflamación Ocular',
    diagnosticSummary: 'Uveítis Anterior Aguda asociada al antígeno HLA-B27 (Espondilitis Anquilosante, Artritis Reactiva, Psoriasis, Enfermedad Inflamatoria Intestinal).',
    pathophysiology: 'Respuesta autoinmune asociada al complejo mayor de histocompatibilidad HLA-B27. Desencadena vasculitis del iris y cuerpo ciliar con colapso de la barrera hematoacuosa y exudación intensa de fibrina y neutrófilos hacia la cámara anterior, formando depósitos endoteliales finos y sinequias posteriores entre el margen pupilar y el cristalino.',
    clinicalApplication: {
      guardia: '1) Graduar la celularidad en cámara anterior según la escala SUN (0 a 4+).\n2) Descartar sinequias posteriores tempranas examinando la regularidad pupilar.\n3) Preguntar por lumbalgia matutina que mejora con el ejercicio y rigidez lumbar.',
      tratamiento: '• Midriático-Ciclopléjico potente obligatorio: Ciclopentolato 1% cada 8 horas o Atropina 1% cada 12 horas (inmoviliza la pupila, rompe sinequias incipientes y alivia el dolor por espasmo ciliar).\n• Corticoide tópico de alta potencia: Acetato de Prednisolona al 1% (o Dexametasona 0.1%) 1 gota cada 1-2 horas durante la fase aguda activa.\n• Pauta descendente lenta en 4 a 6 semanas una vez resuelto el Tyndall para evitar rebotes.\n• Solicitar HLA-B27 y radiografía de articulaciones sacroilíacas.',
      criteriosDerivacionOQuirurgicos: 'Si se forma seclusión pupilar en 360 grados con iris en bombe y elevación aguda de la PIO: Iridotomía periférica con láser YAG de urgencia.',
      contraindicaciones: 'No suspender bruscamente el corticoide tópico; las uveítis HLA-B27 tienen una marcada tasa de recidiva por rebote si el descenso es prematuro.'
    },
    pearlHighYield: 'El ciclopléjico en uveítis anterior cumple tres funciones terapéuticas clave: 1) Rompe y previene sinequias posteriores; 2) Alivia el dolor por espasmo ciliar; 3) Reestabiliza la barrera hematoacuosa.',
    keyReferences: 'SUN Criteria for Uveitis / AAO BCSC Section 9',
    differentialDiagnoses: ['Uveítis herpética (asocia atrofia de iris e hipertensión ocular)', 'Sífilis ocular', 'Posner-Schlossman']
  },

  // 13. UVEÍTIS: Toxoplasmosis Ocular Activa
  {
    id: 'kb-uveitis-toxoplasmosis',
    keywords: ['toxoplasmosis', 'toxoplasma', 'faro en la niebla', 'retinocoroiditis', 'pirimetamina', 'sulfadiazina', 'bactrim', 'trimetoprim', 'leucovorina', 'acido folinico'],
    subspecialty: 'Uveítis e Inflamación Ocular',
    diagnosticSummary: 'Retinocoroiditis activa por Toxoplasma gondii. Causa más común de uveítis posterior infecciosa en individuos inmunocompetentes.',
    pathophysiology: 'Infección parasitaria intracelular obligada. Tras la rotura de quistes tisulares latentes de bradizoítos en la retina, los taquizoítos proliferan activamente causando necrosis coagulativa retiniana focal y exudación vítrea adyacente ("faro en la niebla"). Típicamente el foco activo surge en el margen de una cicatriz coriorretiniana atrófica e hiperpigmentada previa.',
    clinicalApplication: {
      guardia: '1) Fondo de ojo con oftalmoscopio indirecto: Buscar lesión blanco-cremosa exudativa adyacente a cicatriz pigmentada con vitritis focal suprayacente.\n2) Determinar si la lesión amenaza la visión (criterios de tratamiento):\n  - Localización en mácula o haz papilomacular.\n  - A menos de 2 a 3 diámetros papilares del nervio óptico.\n  - Pérdida visual severa o vitritis densa que impide el seguimiento.\n  - Paciente inmunodeprimido.',
      tratamiento: '• Terapia clásica cuádruple:\n  - Pirimetamina (dosis de carga 100 mg el día 1, luego 25-50 mg/día VO).\n  - Sulfadiazina (1 g cada 6 horas VO).\n  - Ácido folínico (Leucovorina 10-25 mg VO 3 veces por semana para prevenir toxicidad hematológica medular).\n  - Prednisona oral 0.5-1 mg/kg/día iniciada 24-48 horas DESPUÉS de haber comenzado los antiparasitarios.\n• Alternativa ampliamente utilizada y de similar eficacia: Trimetoprim / Sulfametoxazol (Bactrim Forte 160/800 mg c/12h) + Prednisona oral.\n• Hemograma semanal si se usa pirimetamina.',
      criteriosDerivacionOQuirurgicos: 'Vitrectomía pars plana únicamente si hay desprendimiento de retina regmatógeno secundario o hemorragia vítrea densa que no aclara.',
      contraindicaciones: 'CONTRAINDICACIÓN FORMAL: NUNCA administrar esteroides sistémicos o inyecciones perioculares/subtenonianas de esteroides sin cobertura antiparasitaria activa previa; las inyecciones de depósito causan necrosis retiniana fulminante incontrolable.'
    },
    pearlHighYield: 'Signo del "faro en la niebla": Foco blanquecino activo de retinocoroiditis visto a través de la vitritis celular densa. El ácido folínico es obligatorio con pirimetamina para prevenir aplasia medular.',
    keyReferences: 'AAO BCSC Section 9: Intraocular Inflammation and Uveitis',
    differentialDiagnoses: ['Necrosis Retiniana Aguda (ARN por herpes)', 'Sífilis ocular', 'Toxocariasis', 'Linfoma intraocular primario']
  },

  // 13b. UVEÍTIS: Artritis Idiopática Juvenil (AIJ) y Uveítis Pediátrica Silenciosa
  {
    id: 'kb-uveitis-aij-pediatrica',
    keywords: ['aij', 'artritis idiopatica juvenil', 'ojo blanco', 'queratopatia en banda', 'ana positivo', 'oligoarticular', 'sycamore', 'adalimumab', 'screening aij'],
    subspecialty: 'Uveítis e Inflamación Ocular',
    diagnosticSummary: 'Uveítis anterior crónica asociada a Artritis Idiopática Juvenil (AIJ) oligoarticular ANA positiva en niñas pequeñas. Cuadro traicioneramente asintomático en ojo blanco.',
    pathophysiology: 'Desregulación autoinmune mediada por linfocitos T colaboradores Th1/Th17 contra antígenos de la barrera hematoacuosa iridociliar. En niños no produce inyección ciliar ni dolor. La inflamación crónica induce precipitación de sales de fosfato cálcico en la membrana de Bowman (queratopatía en banda), sinequias posteriores fibróticas de 360°, catarata complicada y glaucoma secundario por cierre o trabeculitis.',
    clinicalApplication: {
      guardia: '1) Recordar que los niños pequeños con AIJ NO se quejan de dolor ni tienen el ojo rojo. La consulta suele ser tardía por leucocoria (catarata) o estrabismo por ambliopía.\n2) Realizar biomicroscopía protocolizada cada 3 meses en niñas <6 años con oligoartritis y ANA (+).\n3) Si hay flare persistente pero con 0 células en CA, NO aumentar esteroides (el flare traduce incompetencia de barrera de larga data, no celularidad activa).',
      tratamiento: '• Inducción tópica: Acetato de prednisolona 1% cada 2-4 horas con descenso gradual.\n• Regla de los 3 meses: Si tras 3 meses requiere >1-2 gotas/día para mantener inactividad (cero células) o desarrolla catarata/glaucoma esteroideo, iniciar Metotrexato subcutáneo (10-15 mg/m²/semana) con ácido fólico.\n• Terapia biológica de primera línea (Ensayo SYCAMORE): Adalimumab subcutáneo cada 2 semanas asociado a metotrexato si hay refractariedad.',
      criteriosDerivacionOQuirurgicos: 'Si hay queratopatía en banda que invade el eje visual: Quelación con EDTA disódico al 2% en quirófano. Cirugía de catarata: sólo tras 3-6 meses de inactividad absoluta (cero células) bajo profilaxis esteroidea.',
      contraindicaciones: 'CONTRAINDICACIÓN: Evitar el uso prolongado de corticoides tópicos u orales a dosis altas en niños sin ahorradores sistémicos; causan catarata temprana, glaucoma irreversible y retraso pondoestatural.'
    },
    pearlHighYield: 'Niña <6 años con oligoartritis y ANA positivo = Uveítis en ojo blanco asintomático. La tríada tardía es queratopatía en banda + catarata + glaucoma. Adalimumab (ensayo SYCAMORE) es el biológico de elección.',
    keyReferences: 'SYCAMORE Trial (NEJM 2017) / ACR-AAP Screening Guidelines for JIA-associated Uveitis',
    differentialDiagnoses: ['Retinoblastoma difuso anterior (pseudohipopión tumoral)', 'Queratitis herpética', 'Toxocariasis ocular']
  },

  // 13c. UVEÍTIS: Uveítis Intermedia, Pars Planitis y Esclerosis Múltiple
  {
    id: 'kb-uveitis-pars-planitis-esclerosis-multiple',
    keywords: ['uveitis intermedia', 'pars planitis', 'snowbanks', 'snowballs', 'esclerosis multiple', 'dedos de dawson', 'emq uveitico', 'point trial', 'ozurdex'],
    subspecialty: 'Uveítis e Inflamación Ocular',
    diagnosticSummary: 'Uveítis Intermedia y Pars Planitis (subgrupo idiopático con bancos de nieve en pars plana inferior y bolas de nieve vítreas), con Edema Macular Quístico como causa principal de pérdida visual.',
    pathophysiology: 'Inflamación centrada en el vítreo intermedio, la pars plana y la retina periférica anterior a la ora serrata. Los snowbanks inferiores organizan tejido fibrovascular retráctil. Las citoquinas vítreas (IL-6, VEGF, TNF-α) rompen la barrera hematorretiniana interna produciendo Edema Macular Quístico (EMQ) foveolar.',
    clinicalApplication: {
      guardia: '1) Examen oftalmoscópico indirecto con indentación escleral de la pars plana inferior a hora 6: Buscar bancos de nieve exudativos y snowballs flotantes.\n2) Cuantificar el grosor macular foveal con SD-OCT.\n3) En todo adulto joven con uveítis intermedia, solicitar OBLIGATORIAMENTE Resonancia Magnética Cerebral con gadolinio para descartar placas desmielinizantes de Esclerosis Múltiple (criterios de McDonald).',
      tratamiento: '• Unilateral o asimétrica: Corticoides locales de primera línea: Inyección subtenoniana posterior de Triamcinolona 40 mg o Implante intravítreo de Dexametasona 0.7 mg (Ozurdex, según ensayo POINT).\n• Bilateral o refractaria: Prednisona oral a 1 mg/kg/día con descenso escalonado.\n• Ahorradores sistémicos: Metotrexato, Micofenolato mofetilo o Adalimumab (ensayos VISUAL I y II).',
      criteriosDerivacionOQuirurgicos: 'Vitrectomía pars plana si hay EMQ traccional crónico, tracción vitreorretiniana periférica con desgarros o hemorragia vítrea persistente.',
      contraindicaciones: 'CONTRAINDICACIÓN FORMAL: Si la RM cerebral muestra lesiones desmielinizantes compatibles con Esclerosis Múltiple, los agentes anti-TNF-α (Adalimumab/Infliximab) están TERMINANTEMENTE CONTRAINDICADOS porque exacerban la desmielinización central.'
    },
    pearlHighYield: 'La causa número uno de baja visual en Pars Planitis es el Edema Macular Quístico (tratar con Ozurdex/Triamcinolona según ensayo POINT). Descartar siempre Esclerosis Múltiple; si hay desmielinización, los anti-TNF están prohibidos.',
    keyReferences: 'POINT Trial (Ophthalmology 2019) / MUST Trial / AAO BCSC Section 9',
    differentialDiagnoses: ['Sarcoidosis ocular intermedia', 'Linfoma intraocular primario (en >50 años)', 'Enfermedad de Lyme']
  },

  // 13d. UVEÍTIS: Sífilis Ocular y Neurosífilis
  {
    id: 'kb-uveitis-sifilis-neurosifilis',
    keywords: ['sifilis ocular', 'neurosifilis', 'treponema pallidum', 'asppc', 'penicilina sodica intravenosa', 'jarisch-herxheimer', 'gran simuladora', 'argyll robertson'],
    subspecialty: 'Uveítis e Inflamación Ocular',
    diagnosticSummary: 'Sífilis Ocular por Treponema pallidum ("La Gran Simuladora"): Coriorretinitis placoide posterior aguda (ASPPC), panuveítis y vasculitis retiniana.',
    pathophysiology: 'Invasión hematógena de espiroquetas que cruzan activamente la barrera hematoencefálica y hematorretiniana, causando endarteritis obliterante necrotizante con denso infiltrado plasmocitario en úvea, retina y nervio óptico. En ASPPC se produce desorganización transitoria de la banda elipsoide y del EPR con placas hiperreflectivas reversibles tras antibioterapia.',
    clinicalApplication: {
      guardia: '1) Toda sífilis ocular se maneja como NEUROSÍFILIS independientemente del resultado de LCR.\n2) Solicitar algoritmo serológico: Pruebas treponémicas (FTA-ABS / TP-PA) + No treponémicas cuantitativas (VDRL / RPR).\n3) Solicitar serología obligatoria de VIH (coinfección frecuente) y punción lumbar.',
      tratamiento: '• HOSPITALIZACIÓN OBLIGATORIA: Penicilina G Sódica Cristalina Acuosa: 18 a 24 millones de UI al día por vía INTRAVENOSA (3-4 millones UI cada 4 horas) durante 10 a 14 días.\n• Prevención de Jarisch-Herxheimer: Prednisona oral 40-60 mg/día iniciando 24h antes o junto con la primera dosis de penicilina.\n• En alergia comprobada: Desensibilización hospitalaria a penicilina (de elección).',
      criteriosDerivacionOQuirurgicos: 'Vitrectomía pars plana diagnóstica únicamente ante sospecha de vitritis refractaria o desprendimiento de retina secundario.',
      contraindicaciones: 'CONTRAINDICACIÓN GRAVE: NUNCA tratar la sífilis ocular con Penicilina Benzatínica intramuscular; no alcanza niveles terapéuticos en ojo ni LCR y permite la progresión a ceguera y daño neurológico.'
    },
    pearlHighYield: 'Toda sífilis ocular se trata como NEUROSÍFILIS con Penicilina G Sódica acuosa IV (18-24 millones UI/día x 10-14 días). La penicilina benzatínica IM es ineficaz e insuficiente.',
    keyReferences: 'CDC STI Treatment Guidelines for Ocular Syphilis (MMWR 2021) / AAO BCSC Section 9',
    differentialDiagnoses: ['APMPPE', 'VKH', 'Retinitis por CMV', 'Tuberculosis intraocular']
  },

  // 13e. UVEÍTIS: Tuberculosis Intraocular
  {
    id: 'kb-uveitis-tuberculosis-ocular',
    keywords: ['tuberculosis ocular', 'tuberculoma', 'periflebitis oclusiva', 'velas de cera', 'esquema ripe', 'etambutol', 'neuropatia optica toxica', 'ppd', 'quantiferon'],
    subspecialty: 'Uveítis e Inflamación Ocular',
    diagnosticSummary: 'Tuberculosis Intraocular por Mycobacterium tuberculosis: Granulomas coroideos, coroiditis serpiginosa-like y periflebitis retiniana oclusiva con neovascularización periférica.',
    pathophysiology: 'Invasión micobacteriana hematógena del estroma coroideo altamente vascularizado o respuesta de hipersensibilidad retardada tipo IV frente a antígenos bacilares. Induce granulomas caseificantes o vasculitis perivenosa ("velas de cera") con extensas áreas de isquemia retiniana y proliferación neovascular mediada por VEGF.',
    clinicalApplication: {
      guardia: '1) Examen con FAG de campo amplio: Identificar periflebitis retiniana, áreas de retina isquémica no perfundida y abanicos neovasculares.\n2) Confirmar con QuantiFERON-TB Gold e induración de PPD (≥10 mm) y TAC torácica de alta resolución.\n3) Monitoreo mensual de agudeza visual y visión de colores (Ishihara) durante el tratamiento con Etambutol.',
      tratamiento: '• Esquema Antituberculoso Cuádruple (RIPE) durante 2 meses: Rifampicina (600 mg/día) + Isoniazida (300 mg/día + Piridoxina 50 mg/día) + Pirazinamida (1.5-2 g/día) + Etambutol (15-20 mg/kg/día).\n• Mantenimiento con Rifampicina + Isoniazida durante 7 a 10 meses adicionales (total 9-12 meses).\n• Corticoides orales (Prednisona 1 mg/kg/día) iniciados tras 48-72h de cobertura RIPE para frenar la reacción inmunológica tisular.',
      criteriosDerivacionOQuirurgicos: 'Panfotocoagulación con láser argón sobre la retina isquémica para regresar la neovascularización. Vitrectomía si hay hemorragia vítrea persistente.',
      contraindicaciones: 'CONTRAINDICACIÓN: Ante el menor indicio de discromatopsia rojo-verde o caída de visión por toxicidad óptica de Etambutol, SUSPENDER EL ETAMBUTOL DE INMEDIATO para evitar atrofia óptica irreversible.'
    },
    pearlHighYield: 'Periflebitis retiniana oclusiva + granulomas coroideos + PPD/IGRA positivo = Tuberculosis ocular. Tratamiento RIPE por 9-12 meses. Suspender Etambutol inmediatamente si hay discromatopsia rojo-verde.',
    keyReferences: 'COTuver Consensus Guidelines on Tubercular Uveitis (Ophthalmology 2021) / COTS Study',
    differentialDiagnoses: ['Sarcoidosis ocular', 'Coroiditis serpiginosa autoinmune', 'Enfermedad de Eales idiopática']
  },

  // 13f. UVEÍTIS: Vogt-Koyanagi-Harada (VKH) y Oftalmía Simpática
  {
    id: 'kb-uveitis-vkh-oftalmia-simpatica',
    keywords: ['vkh', 'vogt koyanagi harada', 'oftalmia simpatica', 'dalen-fuchs', 'sunset glow fundus', 'pulsos de metilprednisolona', 'ventana 14 dias', 'desprendimiento seroso exudativo'],
    subspecialty: 'Uveítis e Inflamación Ocular',
    diagnosticSummary: 'Panuveítis granulomatosas autoinmunes bilaterales dirigidas contra melanocitos uveales: Síndrome de VKH vs Oftalmía Simpática tras trauma penetrante en ojo excitador.',
    pathophysiology: 'Respuesta autoinmune mediada por linfocitos T Th1/Th17 contra antígenos de melanocitos (tirosinasa y TRP) asociada a HLA-DRB1*0405. Infiltración masiva coroidea que disrumpe la barrera hematorretiniana externa y genera desprendimientos serosos de retina multifocales tabicados. En fases crónicas hay pérdida de melanocitos con fondo en atardecer ("sunset glow fundus"). Nódulos de Dalen-Fuchs entre Bruch y EPR.',
    clinicalApplication: {
      guardia: '1) En VKH: Identificar líquido subretiniano multifocal en SD-OCT con engrosamiento coroideo masivo (>700 µm) y papilitis bilateral.\n2) En trauma ocular penetrante: Cerrar la herida en <24h. Si el ojo está ciego (No PL) y desorganizado, la enucleación profiláctica dentro de los primeros 14 DÍAS previene la oftalmía simpática.\n3) Si la oftalmía simpática ya estalló en el ojo simpatizante, enuclear el ojo traumatizado ya no cura al ojo sano; iniciar megadosis de esteroides IV.',
      tratamiento: '• Inducción de Urgencia: Metilprednisolona IV 1,000 mg/día por 3 días consecutivos.\n• Descenso muy lento de Prednisona oral (1-1.5 mg/kg/día) a lo largo de NO MENOS DE 6 a 9 MESES para evitar recurrencias y fondo en atardecer.\n• Inmunosupresores precoces: Ciclosporina A (3-5 mg/kg/día) o Micofenolato mofetilo (2 g/día) iniciados en las primeras 2-4 semanas.',
      criteriosDerivacionOQuirurgicos: 'Enucleación profiláctica del ojo excitador ciego <14 días post-trauma penetrante.',
      contraindicaciones: 'CONTRAINDICACIÓN: NUNCA suspender los corticoides sistémicos antes de los 6 meses en VKH; produce recidiva crónica inmediata con despigmentación irreversible del fondo de ojo.'
    },
    pearlHighYield: 'VKH = desprendimientos serosos multifocales + engrosamiento coroideo extremo + pleocitosis. Requiere pulsos de metilprednisolona IV y descenso oral en >6 meses. Enucleación en Oftalmía Simpática: solo previene antes de 14 días.',
    keyReferences: 'Revised Diagnostic Criteria for VKH (Read et al., 2001) / AAO BCSC Section 9',
    differentialDiagnoses: ['Oftalmía Simpática (requiere antecedente de trauma penetrante)', 'CSC bullosa por esteroides', 'Escleritis posterior']
  },

  // 13g. UVEÍTIS: Vasculitis en Enfermedad de Behçet
  {
    id: 'kb-uveitis-behcet-vasculitis',
    keywords: ['behcet', 'hipopion movil', 'hla-b51', 'arteritis retiniana oclusiva', 'aftas orales', 'patergia', 'infliximab', 'adalimumab', 'visual trial'],
    subspecialty: 'Uveítis e Inflamación Ocular',
    diagnosticSummary: 'Vasculitis retiniana arterial oclusiva necrotizante e hipopión móvil estéril en Enfermedad de Behçet (asociada a HLA-B51). Emergencia oftalmológica visual.',
    pathophysiology: 'Vasculitis necrotizante por activación neutrofílica masiva y depósito de inmunocomplejos con necrosis fibrinoide de paredes arteriolares y venosas retinianas. Causa trombosis vascular y áreas extensas de infarto isquémico retiniano irreversible en cada brote inflamatorio.',
    clinicalApplication: {
      guardia: '1) Hipopión característicamente "frío", estéril, altamente móvil que cambia con la postura de la cabeza, sin sinequias fijas tempranas.\n2) Fondo de ojo: Arteritis retiniana con envainamiento blanquecino e infartos algodonosos confluentes.\n3) Interrogar por aftas bucales recurrentes (≥3 veces/año) y úlceras genitales.',
      tratamiento: '• EMERGENCIA VISUAL: Iniciar inmediatamente Terapia Biológica Anti-TNF-α: Infliximab IV (5 mg/kg en sem 0, 2, 6) o Adalimumab SC (80 mg carga, luego 40 mg c/2 sem).\n• Pulsos de Metilprednisolona IV (1 g/día x 3 días) seguidos de prednisona oral como terapia puente.\n• Mantenimiento a largo plazo: Azatioprina (2.5 mg/kg/día VO).',
      criteriosDerivacionOQuirurgicos: 'Panfotocoagulación con láser argón sobre áreas isquémicas de no perfusión capilar para prevenir neovascularización y glaucoma neovascular.',
      contraindicaciones: 'CONTRAINDICACIÓN: Evitar monoterapia prolongada con corticoides orales; no evitan la pérdida visual por daño isquémico acumulativo. Evitar Ciclosporina A si hay sospecha de compromiso neurológico (Neuro-Behçet).'
    },
    pearlHighYield: 'Behçet: Hipopión móvil estéril + arteritis retiniana oclusiva + HLA-B51. Es una emergencia visual que exige Terapia Biológica Anti-TNF (Infliximab o Adalimumab) precoz.',
    keyReferences: 'EULAR Recommendations for Behçet Disease / VISUAL I-II Trials (NEJM 2016)',
    differentialDiagnoses: ['Necrosis Retiniana Aguda (ARN)', 'Endoftalmitis bacteriana endógena', 'Retinopatía lúpica']
  },

  // 14. ESTRABISMO Y PEDIATRÍA: Leucocoria y Retinoblastoma
  {
    id: 'kb-pedia-retinoblastoma-leucocoria',
    keywords: ['leucocoria', 'retinoblastoma', 'calcificaciones', 'gen rb1', 'pupila blanca', 'reflejo blanco', 'paaf contraindicada', 'enucleacion', 'coats', 'catarata congenita'],
    subspecialty: 'Estrabismo y Oftalmopediatría',
    diagnosticSummary: 'Leucocoria en el paciente pediátrico: Retinoblastoma (tumor intraocular maligno más frecuente de la infancia, mutación del gen supresor tumoral RB1 en 13q14).',
    pathophysiology: 'Proliferación clonal maligna neuroblástica originada a partir de células fotorreceptoras retinianas inmaduras. El crecimiento endofítico se proyecta hacia la cavidad vítrea con siembras vítreas; el crecimiento exofítico genera desprendimiento de retina exudativo. Su rápida necrosis tumoral produce calcificaciones distróficas intratumorales características en >90% de los casos.',
    clinicalApplication: {
      guardia: '1) Toda leucocoria pediátrica es un RETINOBLASTOMA hasta que se demuestre lo contrario.\n2) Examen bajo anestesia (EBA) con dilatación pupilar máxima y oftalmoscopio indirecto con indentación escleral en ambos ojos (el 30-40% son bilaterales y germinales hereditarios).\n3) Resonancia Magnética (RM) de cerebro y órbitas para evaluar invasión del nervio óptico y descartar retinoblastoma trilateral (asociación con pinealoblastoma intracraneal).\n4) Ecografía ocular modo B (hiperecogenicidad con sombra acústica posterior por calcificaciones).',
      tratamiento: '• Quimioterapia intraarterial (QIA) a través de la arteria oftálmica (melfalán, topotecán, carboplatino) en centros oncológicos de referencia.\n• Terapias locales de consolidación: Crioterapia, termoterapia transpupilar (TTT) con láser diodo o braquiterapia con placa de Yodo-125.\n• Enucleación primaria con muñón largo de nervio óptico (>10 mm) en tumores avanzados del Grupo E (glaucoma neovascular, afectación de cámara anterior o invasión masiva).',
      criteriosDerivacionOQuirurgicos: 'Derivación inmediata a centro de referencia de Oncología Ocular Pediátrica.',
      contraindicaciones: 'CONTRAINDICACIÓN ESTRICTA Y ABSOLUTA: PROHIBIDA LA PUNCIÓN ASPIRATIVA CON AGUJA FINA (PAAF) O CUALQUIER BIOPSIA INTRAOCULAR. La aguja siembra células malignas en la órbita, provocando diseminación sistémica extraocular metastásica letal.'
    },
    pearlHighYield: 'En leucocoria pediátrica, la punción o biopsia intraocular está formalmente prohibida por riesgo de diseminación extraocular tumoral letal.',
    keyReferences: 'ICRC Classification of Retinoblastoma / AAO BCSC Section 6',
    differentialDiagnoses: ['Catarata congénita', 'Enfermedad de Coats (telangiectasias y exudación masiva)', 'Persistencia de vasculatura fetal (PHPV)', 'Toxocariasis ocular']
  },

  // 15. OCULOPLÁSTICA: Celulitis Preseptal vs Orbitaria
  {
    id: 'kb-oculo-celulitis-orbitaria',
    keywords: ['celulitis preseptal', 'celulitis orbitaria', 'oftalmoplejia', 'proptosis', 'absceso subperiostico', 'septo orbitario', 'sinusitis etmoidal', 'dpar'],
    subspecialty: 'Oculoplástica, Vía Lagrimal y Órbita',
    diagnosticSummary: 'Diagnóstico diferencial y manejo de Celulitis Orbitaria (postseptal) versus Celulitis Preseptal tras sinusitis etmoidal o traumatismo.',
    pathophysiology: 'El septo orbitario actúa como barrera anatómica fibrosa. La celulitis orbitaria suele originarse por contigüidad desde las celdillas etmoidales a través de las perforaciones vasculares de la lámina papirácea. La infección bacteriana dentro del cono muscular o espacio subperióstico comprime los nervios y vasos orbitarios, pudiendo diseminarse retrógradamente por las venas oftálmicas avalvulares al seno cavernoso (trombosis séptica del seno cavernoso).',
    clinicalApplication: {
      guardia: '1) BUSCAR LOS 4 SIGNOS CARDINALES DE COMPROMISO ORBITARIO (POSTSEPTAL):\n  - Proptosis (exoftalmometría de Hertel asimétrica >2 mm).\n  - Oftalmoplejía / restricción dolorosa con los movimientos oculares.\n  - Defecto pupilar aferente relativo (DPAR / Marcus Gunn) o disminución de agudeza visual.\n  - Quemosis conjuntival marcada.\n2) Si presenta cualquiera de estos signos: TAC DE ÓRBITAS Y SENOS PARANASALES CON CONTRASTE IV urgente.',
      tratamiento: '• Ingreso hospitalario obligatorio con antibióticos intravenosos de amplio espectro:\n  - Ceftriaxona 2 g/día IV (o Ampicilina/Sulbactam 1.5-3 g IV cada 6 horas) + Vancomicina 15-20 mg/kg cada 12 horas IV (para cobertura de Staphylococcus aureus resistente a meticilina - MRSA).\n• Descongestionantes nasales tópicos y corticoides sistémicos tras 24-48h de antibióticos IV si hay mejoría clínica.',
      criteriosDerivacionOQuirurgicos: 'Drenaje quirúrgico urgente por Oculoplástica / Otorrinolaringología si hay: Absceso subperióstico >10 mm en TAC, afectación de la visión, presencia de DPAR, o falta de mejoría tras 24-48 horas de antibióticos IV.',
      contraindicaciones: 'NUNCA tratar de forma ambulatoria con antibióticos orales a un paciente con celulitis y dolor al mover los ojos o proptosis.'
    },
    pearlHighYield: 'La presencia de proptosis, oftalmoplejía dolorosa o defecto pupilar aferente (DPAR) diferencia con 100% de certeza la celulitis orbitaria de la preseptal.',
    keyReferences: 'AAO BCSC Section 7: Orbit, Eyelids, and Lacrimal System / CDC Guidelines',
    differentialDiagnoses: ['Celulitis preseptal', 'Trombosis del seno cavernoso', 'Pseudotumor orbitario inflamatorio idiopático', 'Fístula carótido-cavernosa']
  },

  // 16. OCULOPLÁSTICA: Orbitopatía Tiroidea de Graves
  {
    id: 'kb-oculo-graves-orbitopatia',
    keywords: ['graves', 'orbitopatia tiroidea', 'dalrymple', 'cas', 'eugogo', 'vertice orbitario', 'neuropatia distiroidea', 'don', 'descompresion orbitaria', 'i\'m slow'],
    subspecialty: 'Oculoplástica, Vía Lagrimal y Órbita',
    diagnosticSummary: 'Orbitopatía de Graves (Oftalmopatía Tiroidea) con sospecha de Neuropatía Óptica Distiroidea Compresiva (DON).',
    pathophysiology: 'Trastorno autoinmune mediado por autoanticuerpos contra el receptor de TSH (TRAb) e IGF-1R sobre los fibroblastos orbitarios -> proliferación fibroblástica y secreción masiva de glucosaminoglucanos hidrofílicos (ácido hialurónico) con infiltrado linfocitario -> engrosamiento masivo de los vientres de los músculos extraoculares (respetando sus inserciones tendinosas) y expansión de la grasa orbitaria -> apiñamiento ("crowding") en el vértice orbitario que comprime mecánicamente el nervio óptico.',
    clinicalApplication: {
      guardia: '1) Signos cardinales de alarma de compresión del nervio óptico (DON):\n  - Disminución de agudeza visual.\n  - Alteración en la visión cromática (test de Ishihara alterado: signo muy precoz y sensible).\n  - Presencia de DPAR o defecto en el campo visual central.\n  - Edema de papila o palidez.\n2) TAC orbitaria sin contraste (cortes coronales y axiales finos) para evaluar el crowding en el vértice orbitario y confirmar el engrosamiento muscular.',
      tratamiento: '• Si hay Neuropatía Óptica Distiroidea activa:\n  - Bolos de METILPREDNISOLONA IV: 500 mg a 1000 mg IV al día durante 3 días consecutivos.\n  - Teprotumumab (anticuerpo monoclonal anti-IGF-1R) aprobado para reducir proptosis y actividad.\n• Medidas de superficie: Lágrimas artificiales sin conservantes diurnas, pomadas nocturnas y oclusión con cámara húmeda para queratopatía por exposición.',
      criteriosDerivacionOQuirurgicos: 'DESCOMPRESIÓN ORBITARIA QUIRÚRGICA URGENTE (pared medial y suelo de la órbita) si la neuropatía óptica distiroidea no responde a los bolos de esteroides IV en 48-72 horas.',
      contraindicaciones: 'El tabaquismo cuadruplica el riesgo de progresión y reduce la eficacia de los esteroides; el cese del tabaco es mandatorio.'
    },
    pearlHighYield: 'Mnemotecnia del orden de afectación muscular en Graves: "I\'M SLOw": Recto Inferior > Recto Medial > Recto Superior > Recto Lateral. Los tendones se respetan en la TAC.',
    keyReferences: 'EUGOGO Consensus Statement / AAO BCSC Section 7',
    differentialDiagnoses: ['Miositis orbitaria idiopática (afecta tendones)', 'Fístula carótido-cavernosa', 'Metástasis orbitaria']
  },

  // 17. REFRACCIÓN: Criterios de Seguridad en LASIK y Ectasia
  {
    id: 'kb-refra-seguridad-lasik',
    keywords: ['lasik', 'ectasia', 'lecho estromal residual', 'rsb', 'pta', 'pentacam', 'belin-ambrosio', 'queratocono frustro', 'icl', 'prk'],
    subspecialty: 'Refracción, Óptica y Cirugía Refractiva',
    diagnosticSummary: 'Evaluación de seguridad refractiva corneal preoperatoria y prevención de la ectasia corneal iatrogénica post-LASIK.',
    pathophysiology: 'La creación de un flap corneal y la ablación estromal con láser excímer debilitan la integridad biomecánica intrínseca de la córnea (concentrada principalmente en los dos tercios anteriores del estroma). Si el tejido estromal remanente es insuficiente o existe una debilidad subclínica previa (queratocono frustro), la presión intraocular normal causa un abombamiento ectásico progresivo hacia adelante con astigmatismo irregular y pérdida visual no corregible.',
    clinicalApplication: {
      guardia: 'CÁLCULO SISTEMÁTICO DE REGLAS DE SEGURIDAD:\n1) LECHO ESTROMAL RESIDUAL (RSB):\n   RSB = Paquimetría total - Espesor del flap - Profundidad de ablación.\n   Límite de seguridad estricto moderno: RSB > 300 µm (mínimo absoluto 250 µm).\n2) PERCENTAGE OF TISSUE ALTERED (PTA de Santhiago):\n   PTA = (Espesor del flap + Profundidad de ablación) / Paquimetría total.\n   Si PTA >= 40%, existe un riesgo exponencialmente mayor de ectasia corneal.\n3) Tomografía corneal Pentacam: Analizar mapa de elevación posterior (límites de +12-15 µm) y display de Belin-Ambrósio (BAD-D < 1.6 normal; > 2.6 sospechoso/patológico).',
      tratamiento: '• Si el paciente NO es apto para LASIK:\n  - Valorar PRK / Cirugía de superficie si la paquimetría es límite pero la topografía es totalmente normal.\n  - Si la miopía es alta (>6-8 dioptrías) o la córnea es delgada (<500 µm): Implante de Lente Fáquico de Cámara Posterior (ICL - Visian) si la profundidad de cámara anterior es >=3.0-3.2 mm y el recuento endotelial es normal.',
      criteriosDerivacionOQuirurgicos: 'Manejo de la ectasia post-LASIK si se produce: Crosslinking corneal (CXL) para frenar la progresión; anillos intraestromales (ICRS) o queratoplastia lamelar/penetrante.',
      contraindicaciones: 'CONTRAINDICADO EL LASIK si: Queratocono o queratocono frustro en topografía, paquimetría corneal <480-500 µm, RSB <300 µm, PTA >=40% o curvatura corneal postoperatoria prevista <36 D o >49 D.'
    },
    pearlHighYield: 'PTA (Percentage of Tissue Altered) = (Flap + Ablación) / Paquimetría. Un PTA >= 40% es el factor predictivo independiente más potente de ectasia corneal post-LASIK.',
    keyReferences: 'Santhiago MR et al. PTA Study / AAO BCSC Section 13: Refractive Surgery',
    differentialDiagnoses: ['Queratocono clínico primario', 'Degeneración marginal pelúcida', 'Queratoglobo']
  },

  // ==========================================
  // ONCOLOGÍA OCULAR (7 TEMAS FUNDAMENTALES)
  // ==========================================

  // 1. Melanoma Uveal / Coroideo
  {
    id: 'kb-onco-melanoma-coroideo',
    keywords: ['melanoma', 'melanoma coroideo', 'melanoma uveal', 'nevus', 'coms', 'tfsom', 'uhhd', 'pigmento naranja', 'lipofuscina', 'reflectividad baja', 'braquiterapia', 'yodo-125', 'monosomia 3', 'bap1', 'tebentafusp'],
    subspecialty: 'Oncología Ocular',
    diagnosticSummary: 'Melanoma Uveal / Coroideo (cáncer intraocular primario más frecuente en adultos) vs Nevus Coroideo con Factores de Riesgo (TFSOM-UHHD).',
    pathophysiology: 'Proliferación clonal maligna de melanocitos de la úvea posterior impulsada por mutaciones somáticas en GNAQ o GNA11 en >85-90% de los casos. La progresión hacia fenotipo metastásico letal está determinada por la pérdida del cromosoma 3 (Monosomía 3) e inactivación por mutación somática del gen supresor tumoral BAP1 (en 3p21), confiriendo perfil genómico Clase 2 con diseminación hematógena casi exclusiva hacia sinusoides hepáticos (>90% de metástasis).',
    clinicalApplication: {
      guardia: '1) EVALUAR FACTORES DE RIESGO DE TRANSFORMACIÓN (Mnemotecnia TFSOM-UHHD):\n   • T (Thickness): Grosor ecográfico apical >2.0 mm.\n   • F (Fluid): Presencia de líquido subretiniano (SRF) foveal o perilesional demostrado en OCT.\n   • S (Symptoms): Pérdida visual, fotopsias o escotomas.\n   • O (Orange pigment): Acúmulos de lipofuscina naranja sobre la superficie tumoral (hiperautofluorescentes).\n   • M (Margin): Margen anterior de la lesión a <=3 mm del disco óptico.\n   • UH (Ultrasound Hollowness): Vaciamiento acústico con reflectividad interna baja (<60%) en ecografía modo A.\n   • D (Diameter): Diámetro basal >5.0 mm.\n2) Ecografía ocular estandarizada modos A y B: buscar reflectividad interna baja en ángulo kappa y vaciamiento acústico.',
      tratamiento: '• Si se confirma Melanoma Coroideo Mediano (2.5 a 10 mm grosor apical y base <=16 mm según criterios COMS):\n  - Braquiterapia epiescleral con placa de Yodo-125 (I-125) administrando 85 Gy al ápex tumoral.\n  - El ensayo COMS demostró idéntica supervivencia global y mortalidad por metástasis a 10-12 años frente a la enucleación, conservando el globo ocular.\n• Si es melanoma grande (>10 mm de grosor o >16 mm de base) o invade el nervio óptico: Enucleación primaria con muñón largo de nervio óptico (10-15 mm).\n• Si hay metástasis hepáticas HLA-A*02:01+: Terapia diana con Tebentafusp (inmuno-movilizador bi-específico gp100 x CD3).',
      criteriosDerivacionOQuirurgicos: 'Derivación urgente a Centro de Referencia en Oncología Ocular para estadificación hepática (RM hepática con contraste hepatobiliar y enzimas hepáticas: GGT, FA, LDH, transaminasas).',
      contraindicaciones: 'CONTRAINDICACIÓN: NUNCA realizar punción intraocular a ciegas o biopsia incisional abierta por riesgo de rotura capsular escleral y diseminación tumoral a órbita.'
    },
    pearlHighYield: 'Ensayo COMS: La braquiterapia con placa de Yodo-125 tiene la misma supervivencia global a 5, 10 y 12 años que la enucleación en melanoma mediano (~27% mortalidad a 10 años en ambos grupos). Monosomía 3 + pérdida de BAP1 predice metástasis hepática >70%.',
    keyReferences: 'Collaborative Ocular Melanoma Study (COMS) Group / AAO BCSC Section 4 / AJCC 8th Edition',
    differentialDiagnoses: ['Nevus coroideo benigno', 'Hemangioma coroideo circunscrito', 'Metástasis coroidea (mama/pulmón)', 'Proliferación melanocítica uveal difusa (BDUMP)', 'Osteoma coroideo']
  },

  // 2. Retinoblastoma Pediátrico
  {
    id: 'kb-onco-retinoblastoma',
    keywords: ['retinoblastoma', 'leucocoria', 'estrabismo infantil', 'rb1', 'calcificaciones', 'semillas vitreas', 'icrb', 'contraindicacion paaf', 'enucleacion', 'melfalan', 'trilateral'],
    subspecialty: 'Oncología Ocular',
    diagnosticSummary: 'Retinoblastoma intraocular infantil (tumor intraocular maligno primario más común en niños) originado en la retina neurosensorial.',
    pathophysiology: 'Mutación bialélica en ambas copias del gen supresor de tumores RB1 (localizado en el cromosoma 13q14) según la hipótesis de dos golpes de Knudson. En la forma hereditaria (40% de los casos), la primera mutación es germinal y la segunda somática, causando tumores bilaterales, multifocales y riesgo elevado de segundos tumores (osteosarcomas y pinealoblastoma trilateral en el SNC). En la forma esporádica (60%), ambas mutaciones ocurren somáticamente en la célula precursora, siendo unilateral y unifocal.',
    clinicalApplication: {
      guardia: '1) SIGNOS DE PRESENTACIÓN FRECUENTES:\n   • Leucocoria (reflejo pupilar blanco): 60% de los casos.\n   • Estrabismo convergente o divergente de reciente aparición: 20% de los casos.\n2) PROCEDIMIENTOS OBLIGATORIOS Y CONTRAINDICADOS:\n   • OBLIGATORIO: Examen bajo anestesia general (EUA) con oftalmoscopia binocular indirecta de 360° y RetCam.\n   • OBLIGATORIO: Ecografía ocular modo B (masa retiniana con focos calcificados de altísima reflectividad con sombra acústica posterior).\n   • OBLIGATORIO: Resonancia Magnética (RM) cerebral y orbitaria con contraste de gadolinio para valorar invasión retro-laminar del nervio óptico y descartar retinoblastoma trilateral en glándula pineal.\n   • PROHIBICIÓN ABSOLUTA: PROHIBIDA LA BIOPSIA POR PUNCIÓN (PAAF) O VITRECTOMÍA (siembra tumoral orbitaria letal).',
      tratamiento: '• Clasificación Internacional de Retinoblastoma Intraocular (ICRB):\n  - Grupo A (tumores pequeños <=3 mm alejados de mácula): Crioterapia transescleral o Termoterapia transpupilar (TTT) con láser diodo.\n  - Grupos B, C y D: Quimioterapia intraarterial oftálmica (IAC) supraselectiva con cateterismo de la arteria oftálmica infundiendo Melfalán, Carboplatino o Topotecán; o Quimioterapia sistémica intravenosa (VEC) + consolidación local focal.\n  - Siembras vítreas refractarias: Quimioterapia intravítrea con Melfalán con técnica estricta de crioterapia en el sitio de entrada de la aguja.\n  - Grupo E (ojo ciego doloroso, invasión de cámara anterior, glaucoma neovascular, phthisis bulbi): ENUCLEACIÓN PRIMARIA CON MUÑÓN LARGO DE NERVIO ÓPTICO (10-15 mm).',
      criteriosDerivacionOQuirurgicos: 'Remisión inmediata en <24 horas a Centro Oncológico Pediátrico Especializado. Consejo genético y secuenciación del gen RB1 en sangre a todos los pacientes y familiares de primer grado.',
      contraindicaciones: 'CONTRAINDICACIÓN FORMAL Y ABSOLUTA: PAAF o biopsia diagnóstica de la masa. Está PROHIBIDA la radioterapia externa (EBRT) en retinoblastoma hereditario por el riesgo de inducir osteosarcomas orbitarios radioinducidos.'
    },
    pearlHighYield: 'Leucocoria en niño menor de 3 años es RETINOBLASTOMA hasta demostrar lo contrario. La biopsia con aguja o vitrectomía está formalmente PROHIBIDA por diseminación extraocular letal. Ecografía demuestra calcificaciones patognomónicas.',
    keyReferences: 'International Classification of Retinoblastoma (ICRB) / AAO BCSC Section 4: Intraocular Tumors / Shields CL et al.',
    differentialDiagnoses: ['Enfermedad de Coats (telangiectasias retinianas con exudación lipídica masiva)', 'Persistencia de Vasculatura Fetal (PFV / PHPV)', 'Toxocariasis ocular (granuloma vítreo)', 'Retinopatía del Prematuro (ROP estadio 5)', 'Astrocitoma retiniano']
  },

  // 3. Tumores Metastásicos Oculares (Mama y Pulmón)
  {
    id: 'kb-onco-metastasis-oculares',
    keywords: ['metastasis', 'metastasis coroidea', 'cancer de mama', 'cancer de pulmon', 'reflectividad alta', 'modo a alta', 'desprendimiento seroso plano', 'radioterapia externa', 'ebrt', 'multifocal', 'bilateral'],
    subspecialty: 'Oncología Ocular',
    diagnosticSummary: 'Tumores Metastásicos Oculares a Coroides (cáncer intraocular maligno secundario más frecuente en adultos, superando al melanoma 3:1).',
    pathophysiology: 'Diseminación hematógena arterial por arterias ciliares posteriores cortas hacia el lecho coriocapilar. Origen primario principal: carcinoma de mama en mujeres (40-50%) y carcinoma broncogénico de pulmón en varones (30-40%). Infiltración estromal aplanada en meseta con rotura difusa de la barrera hematorretiniana externa y desprendimiento seroso de retina masivo y desproporcionado respecto al espesor del tumor.',
    clinicalApplication: {
      guardia: '1) Fondo de ojo: Placas coroideas amarillentas amelanóticas de bordes difusos, multifocales en el 30% y bilaterales en el 20-25%, con desprendimiento seroso extenso.\n2) ECOGRAFÍA MODO A: Reflectividad acústica interna ALTA (>60-90%) con ángulo kappa ancho y espigas irregulares por heterogeneidad tisular (clave absoluta para diferenciar del melanoma que es <60%).\n3) Despistaje sistémico: En varones sin antecedente conocido, TC de tórax urgente (el 30% debuta como metástasis ocular). En mujeres, mamografía bilateral y TC toracoabdominal.',
      tratamiento: '• Tratamiento local de elección: Radioterapia Externa Fraccionada (EBRT, 30 a 40 Gy en 10-15 fracciones) o Radiocirugía estereotáctica con Gamma Knife (15-20 Gy), logrando control tumoral y reabsorción del líquido en >85-90% conservando el ojo.\n• Terapias sistémicas dirigidas según inmunofenotipo del tumor primario: Inhibidores CDK4/6 y anti-HER2 en mama; inhibidores de tirosina quinasa (Osimertinib, Alectinib) en pulmón.\n• Inyecciones intravítreas de Anti-VEGF (Bevacizumab) para acelerar la reabsorción del líquido foveal.',
      criteriosDerivacionOQuirurgicos: 'Manejo multidisciplinario con Oncología Médica y Radioterápica. La enucleación está reservada exclusivamente para ojos ciegos con dolor intratable por glaucoma neovascular.',
      contraindicaciones: 'NUNCA plantear enucleación de entrada en metástasis coroideas; responden excelentemente a radioterapia conservando el ojo.'
    },
    pearlHighYield: 'Metástasis Coroideas en Ecografía Modo A: Muestran reflectividad acústica interna ALTA (>60-90%) con ángulo kappa ancho (por heterogeneidad celular), a diferencia del melanoma uveal que tiene reflectividad BAJA (<60%). Son multifocales (30%) y bilaterales (25%).',
    keyReferences: 'Shields CL et al. Survey of 520 Eyes with Uveal Metastases / AAO BCSC Section 4',
    differentialDiagnoses: ['Melanoma coroideo amelanótico', 'Hemangioma coroideo circunscrito', 'Osteoma coroideo', 'Escleritis posterior nodular']
  },

  // 4. Neoplasias de la Superficie Ocular (OSSN y Melanoma Conjuntival)
  {
    id: 'kb-onco-ossn-superficie',
    keywords: ['ossn', 'cin', 'carcinoma escamoso conjuntiva', 'melanoma conjuntival', 'shields no-touch', 'interferon alfa-2b', '5-fu', 'mitomicina c', 'vasos en horquilla', 'vih', 'margen 4 mm', 'alcoholizacion'],
    subspecialty: 'Oncología Ocular',
    diagnosticSummary: 'Neoplasia Escamosa de la Superficie Ocular (OSSN: displasias CIN I-III, carcinoma in situ y carcinoma invasor) y Melanoma Conjuntival.',
    pathophysiology: 'Transformación neoplásica de células madre epiteliales del limbo corneoescleral mediada por radiación UV-B, VPH oncogénico (16/18) o VIH en jóvenes. Espectro desde displasia intraepitelial hasta carcinoma epidermoide invasor con penetración de la membrana basal. El melanoma conjuntival surge de PAM con atipia celular o de novo y posee drenaje linfático conjuntival profuso hacia ganglios regionales.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía: Lesión límbica gelatinosa, papilomatosa o leucoplásica con vasos intrínsecos en horquilla y extensión corneal en velo grisáceo.\n2) HR-OCT de segmento anterior: Epitelio engrosado hiperreflectivo con transición abrupta con el tejido sano.\n3) En menores de 50 años: Solicitar serología para VIH obligatoria (marcador centinela de inmunosupresión).\n4) Palpar ganglios preauriculares y submandibulares.',
      tratamiento: '• Cirugía estándar de oro de Shields: Resección en bloque con margen libre de 4 mm, técnica "No-Touch" estricta, alcoholización corneal con etanol 100% por 30-40s, crioterapia limbar de doble ciclo y cierre con membrana amniótica.\n• Quimioterapia tópica conservadora (de elección en tumores extensos o multifocales): Interferón alfa-2b (1 millón UI/mL 4 veces/día) hasta 1 mes post-resolución; 5-Fluorouracilo (5-FU) 1% o Mitomicina C (MMC) 0.02-0.04% (con tapones lagrimales para evitar estenosis canalicular).',
      criteriosDerivacionOQuirurgicos: 'En carcinomas invasores con compromiso escleral profundo: Esclerectomía laminar con parche escleral donante. En melanomas conjuntivales avanzados: Biopsia del ganglio centinela preauricular.',
      contraindicaciones: 'PROHIBIDO realizar resección marginal intralesional sin técnica "no-touch" ni crioterapia limbar (riesgo de recidiva >50%).'
    },
    pearlHighYield: 'OSSN Cirugía de Shields: Margen conjuntival libre de 4 mm + alcoholización corneal al 100% por 30s + crioterapia en doble ciclo en los bordes conjuntivales con técnica estricta "no-touch". En menores de 50 años, descartar siempre infección por VIH.',
    keyReferences: 'Shields CL et al. Surgical Approach for OSSN / AAO BCSC Section 4',
    differentialDiagnoses: ['Pterigión o pingüécula inflamada', 'Panus corneal inflamatorio', 'Amiloidosis conjuntival', 'Papiloma conjuntival benigno']
  },

  // 5. Tumores Orbitarios (Linfomas, Glándula Lagrimal, Gliomas y Hemangiomas)
  {
    id: 'kb-onco-tumores-orbitarios',
    keywords: ['tumores orbitarios', 'adenoma pleomorfo', 'carcinoma adenoide quistico', 'fosa lagrimal', 'osteolisis', 'prohibido biopsiar', 'linfoma malt', 'glioma optico', 'rabdomiosarcoma', 'hemangioma cavernoso', 'proptosis'],
    subspecialty: 'Oncología Ocular',
    diagnosticSummary: 'Tumores Orbitarios: Linfomas MALT, Neoplasias de Glándula Lagrimal (Adenoma Pleomorfo vs Carcinoma Adenoide Quístico), Glioma del Nervio Óptico y Rabdomiosarcoma.',
    pathophysiology: 'Adenoma Pleomorfo: Hamartoma epitelial/estromal encapsulado; si se biopsia o rompe la cápsula, se produce siembra con recidivas inoperables o transformación maligna. Carcinoma Adenoide Quístico: Tumor altamente maligno con invasión perineural de ramas de V1 (dolor) y osteólisis en TAC. Linfoma MALT: Neoplasia de células B maduras que moldea estructuras orbitarias. Rabdomiosarcoma: Neoplasia mesenquimal maligna infantil de rápida proliferación.',
    clinicalApplication: {
      guardia: '1) Exploración: Proptosis (axial en intraconares vs distópica inferior en glándula lagrimal), motilidad ocular extrínseca y reflejo fotomotor (DPAR).\n2) TC orbitaria con cortes finos: Evalúa remodelación ósea lisa (adenoma pleomorfo) vs destrucción osteolítica apolillada (carcinoma adenoide quístico).\n3) Síntoma capital: DOLOR = Sospechar Carcinoma Adenoide Quístico por invasión perineural (el adenoma pleomorfo es rigurosamente indoloro).\n4) Niño con proptosis explosiva en días: Tratar como emergencia (Rabdomiosarcoma).',
      tratamiento: '• Adenoma Pleomorfo: Orbitotomía lateral con extirpación en bloque de la glándula y masa envuelta en periostio intacto SIN BIOPSIA PREVIA.\n• Carcinoma Adenoide Quístico: Biopsia incisional diagnóstica previa -> resección radical o exenteración + radioterapia con haz de protones.\n• Linfoma MALT localizado (IE): Radioterapia externa local conformada (24-30 Gy, curación >95%).\n• Rabdomiosarcoma: Biopsia urgente + Quimioterapia sistémica inmediata (VAC: Vincristina, Actinomicina D, Ciclofosfamida) + radioterapia.',
      criteriosDerivacionOQuirurgicos: 'Remisión urgente a Cirugía Orbitaria y Oncología. Todo niño con proptosis aguda debe ingresarse sin demora.',
      contraindicaciones: 'PROHIBICIÓN ABSOLUTA: NUNCA realizar PAAF ni biopsia incisional de una masa en fosa lagrimal con sospecha de adenoma pleomorfo.'
    },
    pearlHighYield: 'Adenoma Pleomorfo de Glándula Lagrimal: Masa INDOLORA que remodela el hueso sin destruirlo; la biopsia incisional está terminantemente PROHIBIDA para evitar siembra o transformación maligna. DOLOR + Osteólisis = Carcinoma Adenoide Quístico.',
    keyReferences: 'AAO BCSC Section 4: Ophthalmic Pathology and Intraocular Tumors / Wright Orbit Surgery',
    differentialDiagnoses: ['Orbitopatía tiroidea de Graves (IMSLO)', 'Pseudotumor inflamatorio orbitario (IOID)', 'Celulitis orbitaria bacteriana', 'Quiste dermoide']
  },

  // 6. Tumores Palpebrales Malignos (Basocelular, Espinocelular y Sebáceo)
  {
    id: 'kb-onco-tumores-palpebrales',
    keywords: ['tumores palpebrales', 'carcinoma basocelular', 'bcc', 'carcinoma espinocelular', 'carcinoma sebaceo', 'meibomio', 'chalazion recurrente', 'madarosis', 'biopsias en mapa', 'oil red o', 'adipofilina', 'cirugia de mohs', 'canto interno'],
    subspecialty: 'Oncología Ocular',
    diagnosticSummary: 'Tumores Palpebrales Malignos: Carcinoma Basocelular (BCC, 85-90%), Carcinoma Espinocelular (SCC, invasión perineural) y Carcinoma de Glándulas Sebáceas de Meibomio (SGC, simulador de chalazión con diseminación pagetoide).',
    pathophysiology: 'BCC: Mutaciones en PTCH1/SMO con activación de vía Hedgehog; nódulo perlado con telangiectasias y madarosis. SCC: Queratinocitos atípicos con queratinización e invasión de ramas del trigémino (V1/V2). SGC: Glándulas de Meibomio/Zeiss con diseminación pagetoide intraepitelial en conjuntiva y córnea; asociado a Muir-Torre (inestabilidad de microsatélites).',
    clinicalApplication: {
      guardia: '1) Signos de alarma: Nódulo indurado perlado, úlcera que no cicatriza, pérdida focal de pestañas (madarosis) o chalazión recidivante en mayores de 50 años.\n2) Tumores en canto medial: Altísimo riesgo de invasión ósea orbitaria anterior rápida.\n3) En Carcinoma Sebáceo: Toma obligatoria de BIOPSIAS EN MAPA CONJUNTIVALES (map biopsies) en cuadrantes para delimitar diseminación pagetoide antes de operar.\n4) Palpación ganglionar preauricular y submandibular sistemática.',
      tratamiento: '• Cirugía Micrográfica de Mohs: Estándar de oro de resección (recidiva <1-2%), obligatoria en canto interno, subtipos morfeiformes, carcinomas sebáceos y recidivas.\n• Escisión con margen libre por congelación: 4 mm en BCC nodular, 5-6 mm en SCC y sebáceo.\n• Reconstrucción palpebral: Colgajo de Tenzel (33-50%), técnica de Hughes en párpado inferior (>50%) o técnica de Cutler-Beard en párpado superior (>50%).\n• Terapia médica en BCC inoperable: Vismodegib oral (inhibidor de vía Hedgehog).',
      criteriosDerivacionOQuirurgicos: 'Todo chalazión recurrente reoperado en ancianos debe enviarse a patología con tinción de lípidos (Oil Red O o adipofilina).',
      contraindicaciones: 'NUNCA tirar el contenido de un chalazión recurrente sin biopsia. NUNCA tratar un tumor de canto medial con crioterapia ciega sin confirmación histológica de márgenes.'
    },
    pearlHighYield: 'Todo chalazión recurrente en adulto mayor o blefaritis crónica unilateral es un CARCINOMA SEBÁCEO hasta demostrar lo contrario. Exige biopsias en mapa conjuntivales para detectar diseminación pagetoide y tinción Oil Red O o adipofilina.',
    keyReferences: 'AAO BCSC Section 4 / Muir-Torre Guidelines / Mohs Micrographic Surgery Guidelines',
    differentialDiagnoses: ['Chalazión recurrente benigno', 'Blefaritis crónica estafilocócica', 'Queratocantoma palpebral', 'Granuloma piogénico']
  },

  // 7. Diagnóstico Avanzado y Genética Molecular en Oncología Ocular
  {
    id: 'kb-onco-diagnostico-genetica-molecular',
    keywords: ['diagnostico avanzado', 'genetica molecular', 'bap1', 'monosomia 3', 'gep clase 2', 'castle biosciences', 'decisiondx', 'fnab', 'ecografia modo a', 'ubm 50 mhz', 'edi-oct', 'tebentafusp', 'ctdna', 'biopsia liquida'],
    subspecialty: 'Oncología Ocular',
    diagnosticSummary: 'Diagnóstico Avanzado Multimodal y Genética Molecular en Oncología Ocular: Ecografía Estandarizada, UBM de 50 MHz, EDI-OCT, Biopsia por Aguja Fina (FNAB), BAP1 y GEP Clase 1 vs 2.',
    pathophysiology: 'En melanoma uveal, la pérdida alélica del cromosoma 3 (Monosomía 3) unida a la inactivación por mutación de BAP1 (en 3p21.1) determina la transición molecular hacia el perfil de Expresión Génica Clase 2 de Castle Biosciences, con un riesgo de metástasis hematógena hepática >70% a 5 años. La ganancia de 6p confiere protección relativa. Las mutaciones de GNAQ/GNA11 son eventos iniciadores tempranos universales sin valor pronóstico independiente.',
    clinicalApplication: {
      guardia: '1) Imagen multimodal: UBM de 50 MHz para masas de iris/cuerpo ciliar (resolución 25 µm); EDI-OCT para grosor coroideo y líquido subretiniano foveal; FAF para mapeo de lipofuscina (pigmento naranja).\n2) Biopsia por aspiración con aguja fina (FNAB) con aguja 25-27G transescleral/transvítrea al colocar la placa de braquiterapia para estudio citogenético (MLPA / FISH) y de expresión génica (GEP).\n3) Protocolo de vigilancia según GEP:\n   • Clase 1A (Bajo riesgo): Ecografía hepática anual.\n   • Clase 2 / Monosomía 3 / BAP1 negativo (Alto riesgo): RM abdominal hepatoespecífica CADA 6 MESES durante los primeros 5 años para detectar micrometástasis hepáticas resecables precozmente.',
      tratamiento: '• Pacientes Clase 2 metastásicos o en adyuvancia HLA-A*02:01+: Terapia biológica con Tebentafusp semanal IV.\n• Ensayos clínicos con inhibidores de HDAC o inhibidores de MEK.\n• Manejo de oligometástasis hepáticas mediante resección segmentaria, radiofrecuencia o quimioembolización transarterial (TACE).',
      criteriosDerivacionOQuirurgicos: 'Remisión a comités multidisciplinarios de Oncología Ocular y Oncología Médica para secuenciación molecular y cribado hepático precoz.',
      contraindicaciones: 'NUNCA confiar únicamente en enzimas hepáticas o ecografía simple para cribado en pacientes Clase 2; la RM con contraste hepatoespecífico (Primovist) es mandatoria.'
    },
    pearlHighYield: 'Valor Pronóstico Molecular: La pérdida de BAP1 (3p21.1) y la Monosomía 3 definen el perfil de expresión génica Clase 2 con >70% de metástasis hepática a 5 años. La ganancia de 6p es protectora. GNAQ y GNA11 son mutaciones iniciadoras sin valor pronóstico.',
    keyReferences: 'Collaborative Ocular Oncology Group (COOG Reports 1 & 2) / DecisionDx-Melanoma Castle / TCGA Uveal Melanoma',
    differentialDiagnoses: ['Pseudomelanoma coroideo', 'Osteoma coroideo', 'Melanocitoma de papila', 'Escleritis posterior nodular']
  },

  // ==========================================
  // CATARATA: 6 DOSSIERS CLÍNICOS DE ALTO RENDIMIENTO
  // ==========================================
  {
    id: 'kb-catarata-biometria-postlasik',
    keywords: ['biometria postlasik', 'post prk', 'post rk', 'barrett true-k', 'haigis-l', 'shammas', 'sorpresa hipermetropica', 'indice queratometrico 1.3375', 'camara anterior', 'lio postrefractiva', 'kane post-refractive'],
    subspecialty: 'Cristalino y Cirugía de Catarata',
    diagnosticSummary: 'Cálculo Biométrico de LIO en Ojos Sometidos a Cirugía Refractiva Previa (Post-LASIK, PRK y RK): Prevención del Error Hipermetrópico.',
    pathophysiology: 'En córneas vírgenes, la queratometría estándar asume un índice refractivo ficticio de 1.3375 basado en una relación fija entre la curvatura anterior y posterior corneal (82%). Tras LASIK miópico, la ablación estromal aplana la superficie anterior sin modificar la posterior, rompiendo dicha relación y sobreestimando la potencia refractiva corneal neta (K ficticia sobreestimada). Si se emplean fórmulas de 3ª generación (SRK/T, Holladay 1), se comete un doble error: 1) Error de radio queratométrico (sobreestima el poder dióptrico corneal); 2) Error de estimación de posición efectiva de la lente (ELP, al asumir que una córnea plana corresponde a una cámara anterior estrecha, situando el LIO falsamente anterior). Como consecuencia, la fórmula calcula una lente de potencia insuficiente, produciendo una severa sorpresa postoperatoria hipermetrópica no deseada.',
    clinicalApplication: {
      guardia: '1) Anamnesis quirúrgica detallada: Historial de cirugía refractiva (LASIK, PRK, RK, SMILE), refracción preoperatoria y queratometría pre-láser si estuvieran disponibles (método de historia clínica).\n2) Biometría óptica no invasiva de barrido de fuente (Swept-Source OCT como IOLMaster 700 o Argos): Medición directa del radio corneal posterior real (Total Keratometry / TK).\n3) Topografía/tomografía corneal de Scheimpflug (Pentacam): Mapeo del poder refractivo total (TCRP a 3.0 o 4.0 mm) para verificar la homogeneidad de la zona óptica central.',
      tratamiento: '• Fórmulas de Elección:\n  - Barrett True-K (con o sin datos prequirúrgicos): Estándar internacional con menor desviación refractiva absoluta media.\n  - Kane Post-Refractive Formula: Incorpora modelos de regresión de inteligencia artificial.\n  - Haigis-L y Shammas No-History: Excelente alternativa cuando no se dispone de ningún dato refractivo previo.\n• En Post-RK (Queratotomía Radial):\n  - Riesgo de fluctuación diurna de la curvatura corneal y efecto de aplanamiento hipermetrópico progresivo a largo plazo.\n  - Seleccionar como objetivo refractivo una ligera miopía (-0.75 D a -1.00 D) para evitar hipermetropías sintomáticas.',
      criteriosDerivacionOQuirurgicos: 'Consentimiento informado estricto: advertir sobre el riesgo residual de sorpresa refractiva (±0.50 a 1.00 D) y la posible necesidad de retoque secundario mediante excímer, lente piggyback sulcus (Add-On) o recambio de LIO.',
      contraindicaciones: '¡PROHIBICIÓN ABSOLUTA!: NUNCA utilizar fórmulas de vergencia estándar no ajustadas (SRK/T, Holladay 1, Hoffer Q) con los valores K de un queratómetro estándar tras LASIK/PRK.'
    },
    pearlHighYield: 'Cálculo LIO Post-LASIK Board Pearl: El queratómetro estándar sobreestima la potencia corneal y las fórmulas de 3ª generación subestiman la ELP, generando SORPRESA HIPERMETRÓPICA. El estándar de oro es la fórmula Barrett True-K (o Kane post-refractive) y la medición de queratometría total (TK con tomografía de cara posterior).',
    keyReferences: 'Barrett GD et al. JCRS 2016 / ASCRS Post-Refractive IOL Calculator / AAO BCSC Section 11',
    differentialDiagnoses: ['Astigmatismo corneal irregular post-LASIK', 'Ectasia corneal post-refractiva', 'Falso eje por ojo seco severo', 'Descentramiento del flap corneal']
  },
  {
    id: 'kb-catarata-ifis-malyugin',
    keywords: ['ifis', 'tamsulosina', 'silodosina', 'iris flacido', 'bloqueador alfa-1a', 'anillo malyugin', 'prolapso de iris', 'fenilefrina intracameral', 'omnic', 'miosis intraoperatoria'],
    subspecialty: 'Cristalino y Cirugía de Catarata',
    diagnosticSummary: 'Síndrome de Iris Flácido Intraoperatorio (IFIS) inducido por Antagonistas Alfa-1A Adrenérgicos (Tamsulosina, Silodosina): Estrategia Preventiva y Quirúrgica.',
    pathophysiology: 'Los antagonistas selectivos de receptores adrenérgicos alfa-1A (tamsulosina, silodosina, terazosina) utilizados para la hiperplasia benigna de próstata bloquean los receptores alfa-1A del músculo dilatador del iris. Esto produce no sólo una relajación tónica del músculo, sino una atrofia fibrilar progresiva irreversible del estroma iridiano. Intraoperatoriamente, esto desencadena la Tríada Clásica de Chang-Campbell (IFIS): 1) Estroma iridiano ondulante y flácido en respuesta a las corrientes hidrodinámicas habituales; 2) Tendencia extrema al prolapso iridiano espontáneo hacia las incisiones quirúrgicas principales y paracentesis; 3) Miosis pupilar progresiva y resistente durante el procedimiento quirúrgico a pesar de la dilatación preoperatoria estándar.',
    clinicalApplication: {
      guardia: '1) Interrogatorio dirigido preoperatorio: Preguntar explícitamente a todo paciente varón (y mujeres tratadas por espasmo ureteral o litiasis) por el uso actual o HISTÓRICO de tamsulosina (Omnic) u otros bloqueadores alfa. Aclarar que una sola dosis tomada años antes puede condicionar IFIS permanente.\n2) Gradación del IFIS (Chang): Leve (ondas de estroma), Moderado (ondas + miosis sin prolapso), Severo (tríada completa con prolapso iridiano continuo y constricción pupilar a <3 mm).',
      tratamiento: '• Profilaxis y Manejo Farmacológico:\n  - Inyección intracameral al inicio de la cirugía de Fenilefrina 1.5% + Lidocaína 1% libre de conservantes (Epi-Shugarcaine o Phenylephrine/Ketorolac / Omidria): Aumenta el tono muscular del dilatador y reduce drásticamente las ondas y prolapsos.\n  - Atropina tópica al 1% 40 minutos antes de la cirugía.\n  - Viscoelástico de alta viscosidad o cohesivo-dispersivo (Healon5 o Healon GV) para viscomidriasis transitoria.\n• Manejo Quirúrgico de Pupila Pequeña y Soporte Mecánico:\n  - Incisiones corneales claras más largas y ligeramente más anteriores en córnea clara para reducir el gradiente de presión que atrae el iris.\n  - Anillo de Expansión Pupilar de Malyugin (Malyugin Ring de 6.25 o 7.0 mm): Proporciona midriasis circular estable sin desgarros del esfínter.\n  - Ganchos retractores de iris de 4 puntos (Iris hooks).',
      criteriosDerivacionOQuirurgicos: 'Suspender la tamsulosina días antes NO previene el síndrome debido a la atrofia del dilatador, y puede desencadenar retención urinaria aguda. El urólogo NO debe suspender el fármaco; el cirujano debe adaptar su técnica quirúrgica.',
      contraindicaciones: 'NUNCA intentar facoemulsificación con pupila contraída <4 mm y estroma ondulante sin soporte mecánico o simpaticomiméticos intracamerales; riesgo de desgarro del esfínter, iridodialisis y rotura capsular posterior.'
    },
    pearlHighYield: 'IFIS Board Pearl: Provocado por antagonistas alfa-1A (Tamsulosina). Suspender el fármaco no sirve porque la atrofia del músculo dilatador es permanente. El manejo incluye Fenilefrina intracameral libre de conservantes, incisiones más largas y Anillo de Malyugin de 6.25/7.0 mm.',
    keyReferences: 'Chang DF, Campbell JR. JCRS 2005 / ASCRS and AAO Educational Update on IFIS',
    differentialDiagnoses: ['Miosis por pseudoexfoliación capsular', 'Sinequias posteriores uveíticas', 'Trauma de esfínter iridiano previo', 'Neuropatía autonómica diabética']
  },
  {
    id: 'kb-catarata-polar-posterior',
    keywords: ['catarata polar posterior', 'hidrodelineacion pura', 'contraindicacion hidrodisseccion', 'placa posterior', 'anillo dorado', 'rotura capsular posterior', 'golden ring', 'corteza adherida'],
    subspecialty: 'Cristalino y Cirugía de Catarata',
    diagnosticSummary: 'Catarata Polar Posterior: Abordaje Quirúrgico Atraumático, Hidrodelineación sin Hidrodissección y Prevención de Desastre Capsular.',
    pathophysiology: 'Opacidad redonda discoide blanquecina densa ubicada en el polo central de la cápsula posterior, originada por la migración aberrante y persistencia de células epiteliales lenticulares embrionarias de la línea germinativa. En el 26% al 36% de los ojos, la cápsula posterior subyacente está ausente congénitamente o adelgazada a nivel microscópico, hallándose la masa catarral íntimamente fusionada a la hialoides anterior y al ligamento de Wieger. Si el cirujano realiza una hidrodissección convencional, la onda de líquido a presión impacta contra la placa adherida, produciendo una rotura capsular posterior expansiva ("blowout") inmediata con caída súbita del núcleo a la cavidad vítrea.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía en lámpara de hendidura: Identificar la placa circular posterior densa con anillos concéntricos "en diana", pequeñas condensaciones satélites y evaluar la integridad visible de la interfase vítreo-capsular.\n2) Examen de lámpara con hendidura fina a 45°: Determinar si existe sombra acústica o brecha libre entre la placa y la cápsula posterior.\n3) Planificación de quirófano: Consentimiento informado específico explicando el riesgo triplicado de rotura capsular, vitrectomía anterior y necesidad de LIO en surco o fijación secundaria.',
      tratamiento: '• Protocolo Quirúrgico Estricto:\n  - Capsulorrexis: Tamaño moderado (5.0 a 5.2 mm); evitar una rexismegalia que impida capturar la óptica del LIO si se rompe la cápsula posterior.\n  - HIDRODISSECCIÓN: ESTRICTAMENTE CONTRAINDICADA. No inyectar líquido subcapsular periférico.\n  - HIDRODELINEACIÓN PURA: Inserción cuidadosa de la cánula dentro del espesor de la masa nuclear para inyectar un bolo suave que delimite el núcleo interno de la concha epinuclear, visualizando el característico "anillo dorado" (golden ring).\n  - Facoemulsificación del endonúcleo dentro de la concha epinuclear protectora a bajos parámetros de vacío y flujo de infusión para evitar oscilaciones de cámara.\n  - Manejo de la placa posterior: NO traccionar con la cánula de I/A; retirar la corteza periférica con aspiración bimanual y dejar la placa central adherida para el final.\n  - Si persiste opacidad densa adherida a cápsula intacta: Dejarla in situ para posterior capsulotomía con láser Nd:YAG a los 2-3 meses postoperatorios.',
      criteriosDerivacionOQuirurgicos: 'Si durante la aspiración se evidencia rotura capsular posterior con prolapso vítreo: pasar de inmediato a vitrectomía anterior bimanual pars plana y soporte con OVD dispersivo.',
      contraindicaciones: 'NUNCA realizar hidrodissección en una catarata polar posterior. NUNCA intentar raspar enérgicamente la placa central de la cápsula posterior con la punta de una cánula o gancho de aspiración.'
    },
    pearlHighYield: 'Catarata Polar Posterior Board Pearl: La cápsula posterior está ausente o desvitalizada en >25% de los casos. La hidrodissección convencional está TERMINANTEMENTE PROHIBIDA por riesgo de blowout capsular. Realizar siempre HIDRODELINEACIÓN pura con golden ring, operar dentro de la copa epinuclear y dejar la placa central residual para láser Nd:YAG diferido.',
    keyReferences: 'Vasavada AR et al. JCRS 2008 / Osher RH et al. Cataract Surgery in Posterior Polar Cataracts / AAO BCSC Section 11',
    differentialDiagnoses: ['Catarata subcapsular posterior senil difusa', 'Persistencia de vasculatura fetal (PFV / PHPV)', 'Mancha de Mittendorf con restos de arteria hialoidea', 'Fibrosis capsular posterior traumática']
  },
  {
    id: 'kb-catarata-tass-endotoxinas',
    keywords: ['tass', 'sindrome toxico del segmento anterior', 'edema de limbo a limbo', 'hipopion esteril', 'endotoxinas', 'detergentes enzimaticos', 'autoclave', 'dexametasona topica horaria', 'tass vs endoftalmitis', 'primeras 24 horas'],
    subspecialty: 'Cristalino y Cirugía de Catarata',
    diagnosticSummary: 'Síndrome Tóxico del Segmento Anterior (TASS): Reacción Inflamatoria Hiperaguda No Infecciosa y Diagnóstico Diferencial con Endoftalmitis.',
    pathophysiology: 'Respuesta inflamatoria estéril fulminante del segmento anterior secundaria a la introducción inadvertida de una sustancia tóxica en la cámara anterior durante la cirugía intraocular. Las etiologías incluyen: 1) Residuos de detergentes enzimáticos o desinfectantes en el instrumental no aclarado; 2) Endotoxinas bacterianas termoestables (lipopolisacáridos / LPS) procedentes del agua de generadores de vapor en autoclaves; 3) Fármacos o conservantes intraoculares tóxicos (cloruro de benzalconio, concentraciones erróneas de antibióticos o adrenalina con bisulfito); 4) Variaciones de pH u osmolaridad en soluciones de irrigación (BSS adulterado). El tóxico produce una lisis endotelial corneal difusa aguda con incompetencia masiva de la bomba endotelial de Na+/K+ ATPasa.',
    clinicalApplication: {
      guardia: '1) Cronología clínica hiperaguda: Aparición dentro de las PRIMERAS 12 A 24 HORAS tras la cirugía (en contraste con la endoftalmitis infecciosa, que suele debutar al 3º-7º día).\n2) Examen de polo anterior: Edema corneal difuso característico "de limbo a limbo" (edema endotelial no localizado), reacción fibrinoide intensa en cámara anterior con formación rápida de HIPOPION ESTÉRIL y ausencia de vitrítis posterior.\n3) Síntomas: Ojo rojo con dolor nulo o leve a moderado (discordancia entre la gravedad del aspecto biomicroscópico y la ausencia de dolor terebrante intenso propio de una endoftalmitis bacteriana).\n4) Fondo de ojo y Ecografía B: Claridad vítrea normal o vitrítis mínima refractaria. Retina aplicada sin condensaciones masivas.',
      tratamiento: '• Terapia Médica Antiinflamatoria Inmediata:\n  - Acetato de prednisolona 1% o Dexametasona 0.1% tópico: 1 gota CADA HORA durante las primeras 24-48 horas.\n  - Hipotensores tópicos (Timolol, Dorzolamida) para controlar picos de PIO por trabeculitis química.\n  - Si la inflamación es extrema: Bolo corto de Prednisona oral 1 mg/kg/día o metilprednisolona.\n• Evaluación de Respuesta:\n  - El TASS responde dramáticamente a los corticoides intensivos con aclaramiento del hipopión y mejoría del edema corneal en 24 horas.\n  - Si a las 24 horas empeora la turbidez, aparece dolor agudo o vitrítis ecográfica: Tratar de inmediato como sospecha de endoftalmitis infecciosa (inyección intravítrea empírica de Vancomicina + Ceftazidima).',
      criteriosDerivacionOQuirurgicos: 'Protocolo de Brote Epidemiológico: Si se detectan 2 o más casos de TASS en la misma sesión quirúrgica, SE DEBE SUSPENDER INMEDIATAMENTE EL QUIRÓFANO, retirar todos los lotes de viscoelásticos, BSS y fármacos, y auditar el circuito de esterilización y autoclave.',
      contraindicaciones: 'NUNCA administrar prostaglandinas tópicas. NUNCA subestimar un caso con vitrítis ecográfica progresiva creyendo que es TASS cuando en realidad es una endoftalmitis bacteriana de inicio fulminante por Gram negativos o Streptococcus.'
    },
    pearlHighYield: 'TASS vs Endoftalmitis Board Pearl: El TASS aparece a las <12-24 horas con edema corneal "de limbo a limbo", dolor leve/moderado, hipopion estéril sin vitrítis posterior y responde espectacularmente a corticoides horarios. La endoftalmitis bacteriana aguda debuta entre el día 3 y 7 con dolor pulsátil intolerable, quemosis marcada y vitrítis densa.',
    keyReferences: 'Mamdani FH et al. Ophthalmology 2006 / ASCRS TASS Taskforce Guidelines',
    differentialDiagnoses: ['Endoftalmitis bacteriana hiperaguda (Pseudomonas, Streptococcus)', 'Reacción a restos corticales masivos retenidos', 'Uveítis anterior aguda HLA-B27', 'Queratopatía bullosa pseudofáquica descompensada']
  },
  {
    id: 'kb-catarata-irvine-gass',
    keywords: ['irvine-gass', 'edema macular pseudofaquico', 'petalos de flor', 'capa plexiforme externa', 'presmed study', 'oct macular', 'triamcinolona subtenon', 'anti-vegf irvine gass', 'aines topicos', 'corticoides'],
    subspecialty: 'Cristalino y Cirugía de Catarata',
    diagnosticSummary: 'Edema Macular Cistoide Pseudofáquico (Síndrome de Irvine-Gass): Fisiopatología, Protocolo del Ensayo PREMED y Manejo Terapéutico.',
    pathophysiology: 'Complicación macular más frecuente de la cirugía de catarata no complicada, con un pico de incidencia entre la 4ª y 6ª semana postoperatoria. La manipulación quirúrgica en el polo anterior y las ondas de ultrasonido estimulan la síntesis de prostaglandinas (PGE2, PGF2a) y leucotrienos mediada por ciclooxigenasa (COX-1 y COX-2). Estos mediadores inflamatorios difunden retrógradamente a través de la cavidad vítrea hacia el polo posterior, alterando las uniones oclusivas estrechas (zonula occludens) del endotelio capilar perifoveal retiniano (ruptura de la barrera hematorretiniana interna). El fluido seroso se acumula en espacios cistoideos dentro de la Capa Plexiforme Externa (Capa de Henle), originando el clásico patrón en "pétalos de flor". Factores de riesgo: diabetes mellitus, rotura capsular posterior con pérdida vítrea, uveítis previa y epirretinopatías.',
    clinicalApplication: {
      guardia: '1) Manifestación clínica: Pérdida visual subaguda e indolora o metamorfopsias a las 4-6 semanas de una cirugía de facoemulsificación previamente exitosa.\n2) OCT Macular de Dominio Espectral (SD-OCT): Engrosamiento foveal central (>320 µm) con cavidades cistoideas intrarretinianas hiporreflectivas en la capa plexiforme externa y pérdida de la depresión foveal.\n3) Angiografía con Fluoresceína (FAG): Fuga precoz de capilares perifoveales con acúmulo tardío formando el típico patrón en "pétalos de flor" (flower-petal appearance) e hiperfluorescencia del disco óptico (signo clave de inflamación activa).',
      tratamiento: '• Profilaxis Primaria según el Ensayo Multicéntrico Europeo PREMED:\n  - En pacientes de riesgo (Diabéticos): La combinación de Corticoide tópico (Dexametasona) + AINE tópico (Bromfenaco 0.09% o Nepafenaco 0.1-0.3%) más inyección subconjuntival de Triamcinolona reduce la tasa de CME del 15.6% al 4.2%.\n  - En pacientes estándar: Uso de AINE tópico profiláctico preoperatorio y postoperatorio durante 3 a 4 semanas.\n• Tratamiento del Síndrome de Irvine-Gass Establecido:\n  - Primera línea combinada: AINE tópico (Bromfenaco 1 gota c/12h o Nepafenaco 1 gota c/8h) + Corticoide de alta penetración (Acetato de prednisolona 1% c/6h) durante 8 a 12 semanas.\n  - Resistencia a gotas tópicas: Inyección periocular posterior de Acetónido de Triamcinolona (20-40 mg subtenoniano) o implante intravítreo de Dexametasona de liberación prolongada (Ozurdex 0.7 mg).\n  - Casos recalcitrantes refractarios: Anti-VEGF intravítreo o vitrectomía pars plana si coexiste tracción vítrea macular.',
      criteriosDerivacionOQuirurgicos: 'Monitoreo mensual con OCT macular. La mayoría de los casos resuelven en 3 a 6 meses con recuperación de agudeza visual.',
      contraindicaciones: 'NUNCA usar análogos de prostaglandinas tópicos (Latanoprost, Bimatoprost) en pacientes con Irvine-Gass o riesgo alto de edema macular; suspender inmediatamente si los estaban utilizando.'
    },
    pearlHighYield: 'Irvine-Gass Board Pearl: Pico de incidencia a las 4-6 semanas por prostaglandinas que difunden de anterior a posterior hacia la capa de Henle (pétalos de flor). El ensayo PREMED demostró que la combinación de AINE tópico + Corticoide es sinérgica y superior a la monoterapia. Los análogos de prostaglandinas tópicos están contraindicados.',
    keyReferences: 'PREMED Study (Ophthalmology 2018) / ESCRS Guidelines for Cataract Surgery',
    differentialDiagnoses: ['Edema macular diabético descompensado', 'Membrana epirretiniana con tracción foveal', 'Oclusión de rama venosa retiniana (OVCR)', 'Uveítis intermedia (pars planitis)']
  },
  {
    id: 'kb-catarata-yamane-pex',
    keywords: ['yamane', 'fijacion escleral sin sutura', 'doble aguja', 'pex', 'pseudoexfoliacion', 'loxl1', 'debilidad zonular', 'subluxacion de cristalino', 'hapticos pvdf', 'flanged haptic', 'aguja 30g tsk'],
    subspecialty: 'Cristalino y Cirugía de Catarata',
    diagnosticSummary: 'Debilidad Zonular Extrema, Subluxación de Cristalino y Fijación Escleral sin Sutura de Lente Intraocular con Doble Aguja (Técnica de Yamane).',
    pathophysiology: 'La pseudoexfoliación capsular (PEX, mutaciones en LOXL1), el traumatismo ocular previo, el síndrome de Marfan (mutaciones en FBN1 / fibrilina-1) y la homocistinuria causan lisis proteolítica y elongación de las fibras zonulares de Zinn. Durante la facoemulsificación o espontáneamente, la diálisis zonular extensa (>90-120°) impide la estabilización del saco capsular, haciendo inviable el implante endocapsular estándar e incluso desaconsejando el anillo de tensión capsular (CTR). La técnica desarrollada por Shin Yamane permite fijar un LIO de 3 piezas en el espacio retroiridiano mediante la exteriorización y abombamiento térmico ("flange" o reborde esférico) de sus hápticos de polivinilideno difluoruro (PVDF), creando un soporte rígido intrascleral sin necesidad de suturas de Prolene degradables ni colgajos esclerales conjuntivales.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía con lámpara de hendidura: Explorar signos sutiles de inestabilidad zonular preoperatoria: Facodonesis (temblor del cristalino al mover los ojos), Iridodonesis (temblor del iris), asimetría en la profundidad de la cámara anterior e iluminación retroiridiana con pérdida de paralelismo del margen pupilar.\n2) Pseudoexfoliación en cápsula anterior: Tres zonas clásicas (anillo central transparente, banda intermedia clara y corona periférica granular de caspa fibrilar).\n3) Sospecha de luxación intraoperatoria: Profundización súbita de cámara anterior con inclinación nuclear e incapacidad de rotación del núcleo.',
      tratamiento: '• Manejo de Debilidad Zonular Parcial Intraoperatoria (<90-120°):\n  - Ganchos capsulares de soporte temporal (Capsule retractors) anclados al borde de la capsulorrexis durante la facoemulsificación.\n  - Anillo de Tensión Capsular Estándar (CTR): Redistribuye las fuerzas ecuatoriales hacia los sectores de zónula sana; implantar antes o después de la aspiración cortical.\n  - Segmento de Ahmed o Anillo de Cionni con sutura escleral (Gore-Tex o PTFE CV-8) en diálisis de 120° a 180°.\n• Técnica de Fijación Escleral sin Sutura con Doble Aguja de Yamane (en Afaquia o Falta de Soporte):\n  - Lente intraocular de 3 piezas compatible con hápticos de PVDF elásticos (ej. CT LUCIA 602 o Sensar AR40e).\n  - Inserción de agujas 27G o 30G de pared delgada TSK a 2.0 mm del limbo anatómico a través de túneles esclerales oblicuos de 1.5 a 2.0 mm de longitud en el plano escleral, exactamente a 180° de distancia angular.\n  - El háptico proximal y distal se introducen dentro de la luz de las agujas (técnica de enhebrado intracameral bimanual).\n  - Exteriorización simultánea de ambos hápticos sobre la superficie escleral.\n  - Aplicación de termocauterio oftálmico a 1 mm de la punta del háptico: El calor derrite el plástico PVDF formando un reborde esférico ("flange" o botón de 0.3 mm).\n  - Empuje suave del botón dentro del túnel escleral para enterrarlo bajo la cápsula de Tenon y conjuntiva, fijando la lente perfectamente centrada y sin inclinación (tilt).',
      criteriosDerivacionOQuirurgicos: 'Si el núcleo o fragmentos caen a la cavidad vítrea: Vitrectomía anterior bimanual pars plana para limpiar la cámara anterior y vítreo prolapsado, cerrar incisiones corneales y remitir al cirujano vitreorretiniano para vitrectomía pars plana formal con lensectomía fragmatómica posterior.',
      contraindicaciones: 'NUNCA utilizar lentes intraoculares monopieza acrílicas de una sola pieza en el sulcus o con técnica de Yamane; sus hápticos gruesos y bordes no redondeados causan síndrome UGH (Uveítis-Glaucoma-Hifema).'
    },
    pearlHighYield: 'Yamane Board Pearl: Técnica sin suturas de doble aguja (30G TSK a 2 mm del limbo con túneles de 1.5-2 mm a 180°). Requiere LIO de 3 piezas con hápticos de PVDF, creando bridas térmicas de 0.3 mm enterradas en el túnel escleral. En PEX o debilidad zonular, nunca usar LIO monopieza en surco por riesgo de síndrome UGH.',
    keyReferences: 'Yamane S et al. Ophthalmology 2017 / AAO BCSC Section 11',
    differentialDiagnoses: ['Subluxación traumática del cristalino', 'Síndrome de Marfan (subluxación superotemporal)', 'Homocistinuria (subluxación inferonasal)', 'Microesferofaquia']
  },

  // =========================================================================
  // NEUROOFTALMOLOGÍA
  // =========================================================================

  // 1. NEURO: NOIA Arterítica por Arteritis de Células Gigantes (ACG / Horton)
  {
    id: 'kb-neuro-noia-arteritica',
    keywords: ['noia-a', 'arteritis de celulas gigantes', 'horton', 'claudicacion mandibular', 'vsg', 'pcr', 'biopsia de arteria temporal', 'metilprednisolona', 'edema de papila palido', 'dpar'],
    subspecialty: 'Neuroftalmología',
    diagnosticSummary: 'Neuropatía Óptica Isquémica Anterior Arterítica (NOIA-A) secundaria a Arteritis de Células Gigantes (ACG): Emergencia oftalmológica absoluta en mayores de 50 años con riesgo inminente de ceguera bilateral irreversible en horas o días.',
    pathophysiology: 'Panarteritis granulomatosa inmunomediada que afecta preferentemente a arterias de mediano y gran calibre ricas en lámina elástica interna (ramas de la carótida externa y arterias ciliares cortas posteriores). La infiltración transmural por macrófagos y células gigantes multinucleadas con destrucción de la lámina elástica causa oclusión trombótica de las arterias ciliares cortas posteriores, provocando infarto isquémico transmural total de la cabeza del nervio óptico y la coroides peripapilar.',
    clinicalApplication: {
      guardia: '1) Sospecha clínica inmediata ante paciente >50 años (especialmente mujeres >70) con pérdida visual monocular súbita indolora o amaurosis fugaz previa.\n2) Búsqueda dirigida de síntomas sistémicos: Cefalea temporal nueva/intensa, hipersensibilidad en cuero cabelludo (dolor al peinarse), claudicación mandibular al masticar (signo más específico) y polimialgia reumática (dolor en cinturas escapular y pélvica).\n3) Fondo de ojo: Edema de papila pálido "en tiza" o blanco lechoso, con hemorragias en llama y retardo masivo en el llenado de la coroides peripapilar en la angiografía fluoresceínica.\n4) Laboratorio urgente: VSG (frecuentemente >70-100 mm/h), Proteína C Reactiva cuantitativa (PCR elevada >20-40 mg/L) y plaquetas (trombocitosis reactiva).',
      tratamiento: '• INICIO INMEDIATO DE PULSOS DE CORTICOSTEROIDES SIN ESPERAR LA BIOPSIA:\n  - Metilprednisolona intravenosa: 1 g IV al día durante 3 a 5 días consecutivos.\n  - Seguido de Prednisona oral a dosis alta: 1 a 1.5 mg/kg/día (típicamente 60 a 80 mg/día) durante 4 a 6 semanas, con pauta de descenso extraordinariamente lenta (a lo largo de 12 a 18 meses).\n  - Gastroprotección (Omeprazol) y profilaxis de osteoporosis (Calcio + Vitamina D + Bifosfonatos).\n• Terapia Biológica Ahorradora de Esteroides:\n  - Tocilizumab (anticuerpo monoclonal anti-receptor de IL-6): 162 mg subcutáneo semanal (Ensayo GiACTA); reduce recaídas y ahorra dosis acumulada de corticoides.',
      criteriosDerivacionOQuirurgicos: 'Biopsia de Arteria Temporal (TAB): Debe realizarse dentro de las primeras 1 a 2 semanas tras iniciar esteroides (el resultado histológico no se altera en los primeros 14-28 días). Extraer un segmento de arteria temporal de AL MENOS 2 a 3 cm de longitud para evitar falsos negativos por "skip lesions" (lesiones segmentarias no contiguas). Si la biopsia ipsilateral es negativa y la sospecha clínica persiste muy alta, realizar biopsia contralateral.',
      contraindicaciones: 'CONTRAINDICACIÓN MORTAL: NUNCA esperar el resultado de la biopsia de arteria temporal ni el turno quirúrgico para iniciar los corticoides sistémicos. El ojo contralateral se afecta en hasta el 50-70% de los casos no tratados en las primeras 24 a 72 horas.'
    },
    pearlHighYield: 'NOIA-A Board Pearl: La claudicación mandibular es el síntoma sistémico con mayor especificidad (90%). La combinación de VSG elevada (>50) + PCR cuantitativa elevada tiene una sensibilidad diagnóstica superior al 97%. La biopsia debe medir al menos 2-3 cm para evitar "skip lesions".',
    keyReferences: 'GiACTA Trial (NEJM 2017) / NANOS Guidelines / AAO BCSC Section 5',
    differentialDiagnoses: ['NOIA No Arterítica (NOIA-NA / crowded disc)', 'Oclusión de arteria central de la retina (OACR)', 'Neuritis óptica atípica', 'Neuropatía óptica compresiva aguda']
  },

  // 2. NEURO: Síndrome de Horner por Disección de Carótida Interna
  {
    id: 'kb-neuro-horner-carotida',
    keywords: ['horner', 'diseccion carotidea', 'apraclonidina', 'cocaina', 'anisocoria', 'ptosis inversa', 'anhidrosis', 'dolor cervical', 'angio-tc', 'tercera neurona'],
    subspecialty: 'Neuroftalmología',
    diagnosticSummary: 'Síndrome de Horner Agudo Doloroso secundario a Disección de la Arteria Carótida Interna: Emergencia neurovascular mayor por riesgo fulminante de ictus isquémico tromboembólico en el hemisferio cerebral.',
    pathophysiology: 'Desgarro de la íntima en la arteria carótida interna extracraneal (frecuentemente tras traumatismo cervical menor, manipulación quiropráctica, esfuerzo o espontáneo en displasia fibromuscular). La formación de un hematoma intramural en la pared arterial comprime las fibras simpáticas oculosimpáticas de 3ª neurona posganglionar que ascienden en el plexo pericarotídeo hacia la órbita. Esto interrumpe el tono simpático dilatador del iris y el tono del músculo tarsal superior de Müller.',
    clinicalApplication: {
      guardia: '1) Inspección pupilar en penumbra y luz: Anisocoria que AUMENTA EN LA OSCURIDAD (la pupila patológica es la MÁS PEQUEÑA porque no dilata adecuadamente).\n2) Examen de párpados: Ptosis leve del párpado superior (1-2 mm por paresia del músculo de Müller) + "Ptosis inversa" o elevación sutil del párpado inferior (por paresia del músculo tarsal inferior), dando la falsa impresión de enoftalmos.\n3) Síntoma cardinal de alarma: Dolor cervical ipsilateral, dolor retroorbitario o facial de inicio brusco.\n4) En la disección de carótida interna extracraneal típica (posganglionar distal a la bifurcación carotídea), la anhidrosis facial suele estar AUSENTE porque las fibras simpáticas vasomotoras faciales viajan con la arteria carótida externa.',
      tratamiento: '• Test Farmacológico Confirmatorio en Consulta/Guardia:\n  - Apraclonidina al 0.5% (o 1%): Agonista alfa-2 con acción débil alfa-1. En ojo con Horner, la pérdida de inervación simpática causa supersensibilidad por denervación de receptores alfa-1. Al instilar 1 gota en ambos ojos, a los 30-45 minutos produce "REVERSIÓN DE LA ANISOCORIA": la pupila de Horner se dilata potentemente y la ptosis se corrige, mientras que el ojo sano no se modifica.\n  - Nota: En casos hiperagudos (<48-72h) puede haber falsos negativos porque la supersensibilidad tarda unos días en desarrollarse; en esos casos se prefiere el test con Cocaína 4-10% (la pupila de Horner NO dilata tras cocaína).\n• Manejo Médico Neurovascular:\n  - Anticoagulación (Heparina de bajo peso molecular continuada con anticoagulantes orales) o antiagregación plaquetaria dual (Aspirina + Clopidogrel) para prevenir embolias cerebrales a la ACM.',
      criteriosDerivacionOQuirurgicos: 'Neuroimagen Urgente Inmediata de Emergencia: Angio-TC o Angio-RM de cerebro y cuello desde el arco aórtico hasta el polígono de Willis. Si se observa estenosis en "cola de ratón", pseudoaneurisma o hematoma intramural en creciente hiperintenso en T1 con supresión grasa: Manejo conjunto con neurocirugía vascular y neurología de ictus.',
      contraindicaciones: 'CONTRAINDICACIÓN ABSOLUTA: PROHIBIDO dilatar la pupila con fenilefrina o tropicamida antes de documentar y filmar la anisocoria basal y realizar los tests diagnósticos de pupila.'
    },
    pearlHighYield: 'Horner Agudo Doloroso = Disección de la arteria carótida interna hasta demostrar lo contrario. Requiere Angio-TC/RM urgente de cuello y cerebro. La apraclonidina 0.5% produce el fenómeno de "reversión de la anisocoria" (la pupila pequeña patológica se vuelve la más grande).',
    keyReferences: 'NANOS Carotid Dissection Consensus / AAO BCSC Section 5: Neuro-Ophthalmology',
    differentialDiagnoses: ['Pupila de Adie', 'Parálisis del III par con midriasis', 'Uveítis anterior con sinequias posteriores', 'Anisocoria fisiológica esencial']
  },

  // 3. NEURO: Miastenia Gravis Ocular y Test del Hielo
  {
    id: 'kb-neuro-miastenia-ice-test',
    keywords: ['miastenia gravis', 'ice pack test', 'test del hielo', 'anticuerpos achr', 'antireceptor de acetilcolina', 'musk', 'edrofonio', 'piridostigmina', 'timoma', 'fatigabilidad'],
    subspecialty: 'Neuroftalmología',
    diagnosticSummary: 'Miastenia Gravis Ocular (OMG): Trastorno autoinmune de la unión neuromuscular postsináptica con fatigabilidad fluctuante de la musculatura extraocular y elevador del párpado sin alteración pupilar.',
    pathophysiology: 'Autoanticuerpos patogénicos dirigidos contra el receptor nicotínico de acetilcolina (AChR) en la membrana muscular postsináptica (o menos frecuentemente contra MuSK o LRP4). Los anticuerpos bloquean estéricamente la unión de la acetilcolina, inducen endocitosis del receptor y activan el complemento con destrucción y aplanamiento de los pliegues postsinápticos de la placa motora terminal. Los músculos extraoculares son extraordinariamente susceptibles debido a sus altas frecuencias de disparo neuronal, menor densidad de receptores y menor expresión de proteínas reguladoras del complemento.',
    clinicalApplication: {
      guardia: '1) Anamnesis: Ptosis y diplopía fluctuantes que EMPEORAN hacia el final de la tarde o con el esfuerzo visual sostenido.\n2) Exploración de fatigabilidad:\n   • Prueba de la mirada sostenida hacia arriba durante 60 segundos: Provoca caída progresiva del párpado superior.\n   • Signo de Cogan del salto palpebral (Cogan twitch): Al pasar la mirada desde abajo hacia la posición primaria, el párpado superior se eleva bruscamente de más (overshoot) y luego cae aleteando.\n3) Regla de Oro Pupilar: Las pupilas son RIGUROSAMENTE NORMALES y reactivas a la luz (el iris es músculo liso inervado por el sistema nervioso autónomo).\n4) Test del Paquete de Hielo (Ice Pack Test):\n   • Medir la hendidura palpebral o MRD1 basal en el ojo con ptosis.\n   • Aplicar una compresa con hielo picado sobre el párpado cerrado durante 2 minutos continuos.\n   • Positivo: Elevación del párpado de AL MENOS >=2 mm inmediatamente después de retirar el hielo (la baja temperatura inhibe la enzima acetilcolinesterasa aumentando la acetilcolina disponible en la hendidura sináptica). Sensibilidad y especificidad >90% para OMG.',
      tratamiento: '• Sintomático inicial: Inhibidores de la acetilcolinesterasa:\n  - Bromuro de Piridostigmina (Mestinon): Iniciar a 30-60 mg vía oral cada 6 u 8 horas, ajustando según respuesta clínica.\n• Inmunosupresión en OMG refractaria o para prevenir progresión a forma sistémica generalizada:\n  - Prednisona oral matutina: Iniciar con titulación progresiva cuidadosa (10-20 mg/día escalando hasta 0.5-1 mg/kg/día) para evitar la crisis miasténica paradójica inicial transitoria.\n  - Ahorradores de corticoides: Azatioprina, Micofenolato mofetilo.\n• Tamizaje tumoral mediastínico:\n  - TAC o RM de tórax con contraste para descartar Timoma o hiperplasia tímica.\n  - Timectomía quirúrgica: Indicada de rigor si hay timoma y recomendada en adultos jóvenes con AChR positivo (Ensayo multicéntrico MGTX).',
      criteriosDerivacionOQuirurgicos: 'La cirugía de estrabismo o de ptosis palpebral está formalmente diferida hasta que la enfermedad haya alcanzado estabilidad farmacológica e inmunológica estricta durante un mínimo de 12 a 24 meses.',
      contraindicaciones: 'CONTRAINDICACIÓN FORMAL: NUNCA prescribir fármacos bloqueantes neuromusculares como antibióticos Aminoglucósidos (Gentamicina, Tobramicina), Fluoroquinolonas, Macrólidos, Betabloqueantes sistémicos o colirios de Timolol (pueden precipitar una crisis miasténica respiratoria letal).'
    },
    pearlHighYield: 'Miastenia Gravis: NUNCA afecta la pupila. El Test del Hielo (Ice Pack Test) positivo (+2 mm de elevación palpebral tras 2 min de frío) tiene >90% de especificidad y supera en seguridad al viejo test de Tensilon (Edrofonio) que podía causar bradicardia severa.',
    keyReferences: 'MGTX Trial (NEJM 2016) / NANOS Guidelines / AAO BCSC Section 5',
    differentialDiagnoses: ['Parálisis del III par craneal (requiere descartar aneurisma)', 'Síndrome de Lambert-Eaton', 'Oftalmoplejía externa progresiva crónica (CPEO)', 'Orbitopatía de Graves']
  },

  // 4. NEURO: Neuropatía Óptica Hereditaria de Leber (LHON)
  {
    id: 'kb-neuro-lhon-mitocondrial',
    keywords: ['lhon', 'neuropatia de leber', 'mitocondrial', 'm.11778g>a', 'idebenona', 'telangiectasias peripapilares', 'pseudoedema', 'herencia materna', 'escotoma cecocentral'],
    subspecialty: 'Neuroftalmología',
    diagnosticSummary: 'Neuropatía Óptica Hereditaria de Leber (LHON): Neuropatía óptica mitocondrial de herencia estrictamente materna con pérdida visual central severa y secuencial en varones jóvenes.',
    pathophysiology: 'Mutaciones puntuales en el ADN mitocondrial (ADNmt) que codifican subunidades del Complejo I de la cadena de transporte de electrones de la fosforilación oxidativa (NADH deshidrogenasa). La mutación m.11778G>A (gen MT-ND4) es la más prevalente a nivel mundial (~70%), seguida de m.11778G>A, m.14484T>C y m.3460G>A. La deficiencia de ATP y la sobreproducción de especies reactivas de oxígeno (ROS) provocan degeneración apoptótica selectiva de las células ganglionares de la retina en el haz papilomacular (axones parvocelulares finos de alta demanda metabólica).',
    clinicalApplication: {
      guardia: '1) Paciente típico: Varón de 15 a 35 años (varones representan >80-85% de los portadores sintomáticos) con pérdida de agudeza visual central subaguda, indolora y profunda (<=20/200 a cuenta dedos).\n2) Compromiso secuencial: El segundo ojo se afecta inexorablemente semanas o meses después (habitualmente a los 2-4 meses).\n3) Fondo de ojo en fase aguda: Pseudoedema de papila (la papila se ve hiperémica e inflamada pero la capa de fibras no tiene fuga real), telangiectasias microangiopáticas peripapilares tortuosas y ausencia de excavación.\n4) Angiografía con Fluoresceína (FAG): CONFIRMACIÓN PATOGNOMÓNICA: Las telangiectasias peripapilares NO FUGAN fluoresceína en fases tardías (pseudoedema sin fuga verdadera, lo que descarta papiledema o neuritis óptica inflamatoria).\n5) Campimetría: Escotoma cecocentral denso bilateral.',
      tratamiento: '• Manejo Médico Específico con Antioxidantes Mitocondriales:\n  - Idebenona (Raxone): Análogo sintético de la Coenzima Q10 de cadena corta que transfiere electrones directamente al Complejo III evitando el Complejo I defectuoso. Dosis autorizada: 900 mg/día vía oral repartidos en 3 tomas (300 mg c/8h con las comidas).\n  - Iniciar lo más precozmente posible antes del año de evolución del primer ojo y mantener un mínimo de 24 meses continuos.\n• Terapia Génica Intravítrea (GS010 / Lumevoq / Lenadogene nolparvovec):\n  - Vector AAV2 que transfiere el gen humano ND4 recombinante al núcleo celular (alotópica); ensayos clínicos RESCUE y REVERSE demostraron mejoría bilateral en pacientes con mutación m.11778G>A.\n• Medidas de Estilo de Vida Indispensables:\n  - CESE TOTAL DEL TABAQUISMO Y DEL CONSUMO DE ALCOHOL: Los tóxicos exógenos mitocondriales desencadenan o aceleran catastróficamente la apoptosis axonal en portadores.',
      criteriosDerivacionOQuirurgicos: 'Panel genético molecular de ADN mitocondrial en sangre periférica para las 3 mutaciones primarias (11778, 14484 y 3460). Valoración por genética médica y consejo genético (las madres portadoras transmiten la mutación al 100% de sus hijos e hijas, pero solo los varones expresan mayoritariamente la enfermedad).',
      contraindicaciones: 'CONTRAINDICACIÓN FORMAL: Prohibido administrar esteroides intravenosos u orales como si fuera una neuritis óptica desmielinizante (no aportan ningún beneficio y pueden inducir toxicidad metabólica). PROHIBIDO fumar.'
    },
    pearlHighYield: 'LHON Board Pearl: Herencia mitocondrial materna estricta (madres transmiten a todos los hijos; varones afectados NO transmiten la enfermedad a su descendencia). En FAG, las telangiectasias peripapilares NO fugan colorante (diferencia crítica con la neuritis óptica verdadera). El tratamiento específico es Idebenona 900 mg/día.',
    keyReferences: 'RHODOS Trial (Brain 2011) / RESCUE & REVERSE Trials (Ophthalmology 2021) / AAO BCSC Section 5',
    differentialDiagnoses: ['Neuritis óptica retrobulbar desmielinizante (ONTT)', 'Neuropatía óptica tóxico-nutricional (tabaco/alcohol)', 'Atrofia óptica dominante de Kjer (OPA1)', 'Compresión quiasmática o de fosa anterior']
  },

  // =========================================================================
  // OFTALMOLOGÍA PEDIÁTRICA Y ESTRABISMO
  // =========================================================================

  // 5. PEDIATRÍA: Exotropia Intermitente Infantil y Escala de Newcastle
  {
    id: 'kb-pediatria-exotropia-newcastle',
    keywords: ['exotropia', 'x(t)', 'newcastle', 'cierre monocular al sol', 'divergencia', 'rectos laterales', 'prisma adaptacion', 'fijacion', 'estereopsis'],
    subspecialty: 'Estrabismo y Oftalmopediatría',
    diagnosticSummary: 'Exotropia Intermitente Infantil X(T): Estrabismo divergente más frecuente de la infancia, clasificado por la Escala de Control de Newcastle y manejado con oclusión, prismas o cirugía de rectos laterales.',
    pathophysiology: 'Falla o fatiga de los mecanismos de fusión cortical binocular para mantener alineados los ejes visuales en divergencia. Se subdivide según la relación de la desviación lejana versus cercana (Clasificación de Burian): 1) Exceso de divergencia verdadero (desviación de lejos significativamente mayor que de cerca que persiste tras el test de oclusión diagnóstica monocular de Scobee por 45-60 min); 2) Pseudoexceso de divergencia (la desviación de cerca aumenta tras suspender la convergencia fusional sostenida); 3) Básica (magnitud similar a distancia y cerca); 4) Insuficiencia de convergencia (desviación mayor de cerca).',
    clinicalApplication: {
      guardia: '1) Signo patognomónico anamnésico: Cierre monocular reflejo de un ojo al aire libre bajo luz solar brillante (signo del deslumbramiento por pérdida de fusión bifoveal).\n2) Medición de la desviación con Cover Test alternante con prismas (APCT) a 6 metros (lejos), a 33 cm (cerca) y a distancia extrema (>30 metros mirando por la ventana).\n3) Evaluación del Control con la Escala de Control de Newcastle (NCS, puntuación de 0 a 9):\n   • Grado 0: Exoforia (solo se desvía tras el cover test y se recupera instantáneamente).\n   • Grado 1-2: Se desvía tras cover test pero requiere parpadeo para refijar.\n   • Grado 3: Exotropia espontánea que se recupera sola.\n   • Grado 4: Exotropia espontánea que permanece desviada más del 50% del tiempo de fijación.',
      tratamiento: '• Manejo No Quirúrgico Inicial:\n  - Corrección óptica refractiva completa bajo cicloplejía total: Prescribir miopía completa o hipercorrección miópica moderada (-1.00 a -2.00 D) para inducir convergencia acomodativa involuntaria.\n  - Terapia de Oclusión a Tiempo Parcial (Part-Time Patching): Ocluir el ojo dominante 2 a 4 horas al día para reducir la supresión cortical monocular y mejorar el control fusional (Ensayo PEDIG ATS-3).\n  - Terapia ortóptica de convergencia en casos con insuficiencia de convergencia.\n• Manejo Quirúrgico Reglado:\n  - Indicaciones: Deterioro progresivo del control (Escala de Newcastle >=4-5 puntos de forma constante), descompensación a tropia durante más del 50% de las horas de vigilia o pérdida de la agudeza estereoscópica fina (Titmus/TNO).\n  - Procedimiento estándar de elección: Retroinserción Bilateral de Músculos Rectos Laterales (BMR): Retroinsertar ambos RL entre 5.0 y 8.0 mm según la tabla de Parks dosimétrica.\n  - Si la desviación es asimétrica o monocular: Retroinserción de RL + Resección de RM del mismo ojo (procedimiento R&R).',
      criteriosDerivacionOQuirurgicos: 'Monitoreo de la agudeza estereoscópica: La caída de la estereopsia de cerca (<100 segundos de arco) o la presencia de diplopía constante son criterios quirúrgicos mayores.',
      contraindicaciones: 'NUNCA hipocorrregir la miopía en niños con exotropia intermitente (empeora drásticamente el control de la desviación al privar al niño del estímulo acomodativo natural).'
    },
    pearlHighYield: 'Exotropia Board Pearl: El cierre de un ojo bajo la luz solar intensa es patognomónico de exotropia intermitente. La prueba de oclusión monocular de 45-60 min (test de Scobee) diferencia el exceso de divergencia verdadero del pseudoexceso de divergencia al disipar la convergencia fusional tónica.',
    keyReferences: 'PEDIG ATS-3 Trial (Ophthalmology 2010) / AAO BCSC Section 6',
    differentialDiagnoses: ['Exotropia sensorial (por opacidad de medios)', 'Exotropia consecutiva (sobrecorrección de ET)', 'Síndrome de Duane Tipo 2', 'Parálisis del III par con compromiso de RM']
  },

  // 6. PEDIATRÍA: Síndrome de Retracción de Duane y Cocontracción Anómala
  {
    id: 'kb-pediatria-duane-cocontraccion',
    keywords: ['duane', 'cocontraccion', 'retraccion de duane', 'ausencia de vi par', 'ramificacion anomala iii par', 'enoftalmos en aduccion', 'hendidura palpebral', 'upshoot', 'downshoot'],
    subspecialty: 'Estrabismo y Oftalmopediatría',
    diagnosticSummary: 'Síndrome de Retracción de Duane (Tipo 1, 2 y 3): Trastorno congénito de inervación craneal (CCDD) por agenesia del núcleo del VI par y reinervación anómala por el III par.',
    pathophysiology: 'Agenesia congénita del núcleo motor del VI par craneal (Abducens) y de su nervio en el tronco encefálico. Ramas aberrantes de la división inferior del III par craneal (Oculomotor) inervan de forma anómala al músculo recto lateral. En el Tipo 1 (el más frecuente, 85% de casos): El músculo recto lateral no recibe inervación en el intento de abducción (deficiencia de abducción). Al mirar en ADUCCIÓN, el III par se activa estimulando simultáneamente al recto medial Y al recto lateral; esta COCONTRACCIÓN simultánea tracciona del globo ocular hacia el interior de la órbita ósea, produciendo ENOFTALMOS patognomónico y estrechamiento mecánico de la hendidura palpebral.',
    clinicalApplication: {
      guardia: '1) Examen de motilidad ocular:\n   • Tipo 1: Marcada limitación o ausencia de abducción con aducción conservada o discretamente limitada.\n   • Tipo 2: Limitación de la aducción con abducción normal o levemente afectada.\n   • Tipo 3: Limitación severa tanto de la abducción como de la aducción.\n2) Signos clínicos patognomónicos en la aducción:\n   • Retracción del globo ocular (Enoftalmos visible).\n   • Estrechamiento de la hendidura palpebral (el párpado se cierra parcialmente).\n   • Fenómenos de "Upshoot" o "Downshoot": Movimientos espasmódicos bruscos de elevación o depresión del globo al aducir por deslizamiento del recto lateral hipertenso sobre la curvatura del globo ocular (efecto "cuerda de arco" o bridling effect).\n3) Tortícolis compensatorio hacia el lado del ojo afecto para mantener ortoforia en la mirada al frente.',
      tratamiento: '• La mayoría de los casos leves NO requieren tratamiento quirúrgico si tienen ortoforia en posición primaria sin tortícolis significativo.\n• Indicaciones Quirúrgicas Mayores:\n  - Tortícolis compensatorio significativo (>10-15°).\n  - Desviación manifiesta en posición primaria (endotropia o exotropia descompensada).\n  - Enoftalmos severo desfigurante o upshoot/downshoot marcado.\n• Técnicas Quirúrgicas de Elección:\n  - En Duane Tipo 1 con endotropia: Retroinserción amplia del Músculo Recto Medial (RM) ipsilateral (5 a 7 mm) para corregir el ángulo y eliminar el tortícolis.\n  - Si coexiste upshoot/downshoot severo: División en "Y" de las fibras del Recto Lateral (Y-splitting) o retroinserción del RL.',
      criteriosDerivacionOQuirurgicos: 'CONTRAINDICACIÓN QUIRÚRGICA FORMAL: NUNCA REALIZAR RESECCIÓN DEL MÚSCULO RECTO LATERAL en un Síndrome de Duane; acorta un músculo fibrosado inervado anómalamente empeorando de forma catastrófica el enoftalmos y la retracción.',
      contraindicaciones: 'PROHIBIDA LA RESECCIÓN DEL RECTO LATERAL. La corrección quirúrgica en Duane se basa exclusivamente en DEBILITAMIENTOS (retroinserciones) o transposiciones verticales (Hummelsheim/Foster modificado).'
    },
    pearlHighYield: 'Síndrome de Duane: Agenesia del VI par con inervación anómala del RL por el III par. Enoftalmos y cierre palpebral en aducción por cocontracción simultánea de RM y RL. NUNCA resecar el recto lateral (empeora el enoftalmos).',
    keyReferences: 'Engle EC. Genetic basis of Cranial Cruciate Dysinnervation Disorders / AAO BCSC Section 6',
    differentialDiagnoses: ['Parálisis aislada del VI par craneal', 'Síndrome de Moebius', 'Fractura orbitaria con atrapamiento del RM', 'Fibrosis congénita de músculos extraoculares (CFEOM)']
  },

  // 7. PEDIATRÍA: Aniridia Congénita y Síndrome WAGR
  {
    id: 'kb-pediatria-aniridia-wagr',
    keywords: ['aniridia', 'pax6', 'wagr', 'tumor de wilms', 'ecografia renal', 'hipoplasia foveal', 'queratopatia aniridica', 'glaucoma congenito', 'catarata', 'microdelecíon 11p13'],
    subspecialty: 'Estrabismo y Oftalmopediatría',
    diagnosticSummary: 'Aniridia Congénita (mutación PAX6 / Deleción 11p13 Síndrome WAGR): Pan-oftalmopatía del neuroectodermo y cresta neural con ausencia de iris, alto riesgo de Nefroblastoma pediátrico y tamizaje renal obligatorio.',
    pathophysiology: 'Mutación o deleción heterocigota en el gen maestro del desarrollo ocular PAX6 localizado en el cromosoma 11p13. El gen PAX6 orquesta la génesis del iris, córnea, cristalino, ángulo iridocorneal y retina foveal. En casos esporádicos (no familiares), hasta un 30% de los pacientes tienen una microdeleción génica contigua que engloba tanto al gen PAX6 como al gen WT1 (Wilms Tumor 1), configurando el Síndrome WAGR (Wilms, Aniridia, anomalías Genitourinarias y Retraso psicomotor), con un riesgo del 50% de desarrollar Tumor de Wilms en los primeros años de vida.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía y exploración en lámpara de hendidura o quirófano:\n   • Ausencia total o casi completa del iris (aniridia clínica; suele quedar un muñón rudimentario periférico visible en gonioscopia).\n   • Queratopatía por deficiencia de células madre del limbo (LSC defect): Invasión centrípeta de epitelio conjuntival vascularizado, adelgazamiento y pannus corneal.\n   • Catarata subcapsular congénita o desarrollo temprano de catarata cortical.\n2) Fondo de ojo y OCT:\n   • Hipoplasia foveal severa con nistagmo sensorial congénito pendular.\n   • Hipoplasia del nervio óptico.\n3) Tonometría periódica: El 50-70% desarrollan glaucoma secundario en la infancia por cierre progresivo del ángulo por el muñón iridiano rudimentario.',
      tratamiento: '• TAMIZAJE DE VIDA O MUERTE: ECOGRAFÍA ABDOMINAL/RENAL OBLIGATORIA:\n  - En toda aniridia congénita esporádica: Realizar ecografía renal cada 3 meses desde el nacimiento hasta los 8 años de vida para detección precoz de Tumor de Wilms antes de metástasis.\n  - Estudio citogenético con hibridación in situ fluorescente (FISH) o MLPA para la microdeleción 11p13 (PAX6-WT1).\n• Manejo Médico Oftalmológico:\n  - Filtros solares coloreados tintados y lentes de contacto cosméticos de iris artificial con pupila central opaca para reducir la fotofobia extrema.\n  - Lágrimas artificiales sin conservantes para la superficie corneal.\n  - Hipotensores oculares (análogos de prostaglandinas, betabloqueantes) para el glaucoma; evitar inhibidores de la anhidrasa carbónica tópicos si hay queratopatía descompensada.\n• Manejo Quirúrgico del Glaucoma Anirídico:\n  - Goniotomía o trabeculotomía en etapas muy tempranas; sin embargo, los dispositivos de drenaje de tubo (Válvula de Ahmed) son la técnica de elección en glaucoma anirídico establecido.',
      criteriosDerivacionOQuirurgicos: 'Trasplante de Células Madre Límbicas (KLAL o SLET alogénico) en la edad adulta para queratopatías anirídicas opacificantes avanzadas. La lensectomía debe realizarse con extrema delicadeza por fragilidad capsular y zonular.',
      contraindicaciones: 'NUNCA olvidar el tamizaje ecográfico renal trimestral en un lactante con aniridia esporádica. No realizar queratoplastia penetrante (PKP) convencional sin reconstituir previamente el limbo corneal (el botón se rechaza y opacifica de inmediato).'
    },
    pearlHighYield: 'Aniridia Board Pearl: La aniridia no es solo ausencia de iris, es una pan-oftalmopatía (hipoplasia foveal, glaucoma, queratopatía límbica, catarata). Toda aniridia esporádica exige descartar Síndrome WAGR (deleción 11p13 con gen WT1) y realizar ecografía renal trimestral hasta los 8 años de edad.',
    keyReferences: 'Hingorani M et al. Aniridia (Surv Ophthalmol 2012) / AAO BCSC Section 6',
    differentialDiagnoses: ['Coloboma amplio de iris inferior', 'Disgenesia de Rieger / Axenfeld-Rieger', 'Síndrome de Peters', 'Midriasis farmacológica o traumática']
  },

  // 8. PEDIATRÍA: Obstrucción Congénita de Vía Lagrimal (CNLDO) y Válvula de Hasner
  {
    id: 'kb-pediatria-cnldo-hasner',
    keywords: ['cnldo', 'hasner', 'valvula de hasner', 'obstruccion lagrimal congenita', 'masaje de crigler', 'sondaje lagrimal', 'dacriocistocele', 'amniocele', 'epifora neonatal'],
    subspecialty: 'Estrabismo y Oftalmopediatría',
    diagnosticSummary: 'Obstrucción Congénita del Conducto Nasolagrimal (CNLDO): Imperforación membranosa de la válvula de Hasner en el meato inferior, dacriocistocele congénito de emergencia y algoritmo de sondaje lagrimal.',
    pathophysiology: 'Falla en la canalización embriológica caudal del cordón ectodérmico que origina el conducto nasolagrimal, resultando en la persistencia de una membrana mucosa que ocluye la válvula de Hasner a nivel de su desembocadura en el meato nasal inferior bajo el cornete inferior. En el 90-95% de los lactantes se canaliza espontáneamente durante el primer año de vida. Si coexiste una obstrucción simultánea proximal de la válvula de Rosenmüller, se forma un Dacriocistocele congénito con atrapamiento de moco y líquido amniótico a tensión dentro del saco.',
    clinicalApplication: {
      guardia: '1) Clínica típica: Epífora persistente (lagrimeo continuo sin llanto), menisco lagrimal alto y secreción mucopurulenta matutina sin hiperemia ciliar ni corneal (ojo blanco) que inicia a las 2 a 4 semanas de vida.\n2) Maniobra exploratoria: Presión digital firme sobre el saco lagrimal en el canto medial: Se observa reflujo inmediato de material mucoso denso a través de los puntos lagrimales superior e inferior.\n3) Test de desaparición de fluoresceína al 2% (FDT): Retención patológica del colorante amarillo en el lago lagrimal transcurridos 5 minutos.\n4) EMERGENCIA: Masa nodular azulada tensa e indolora bajo el tendón cantal medial en un recién nacido = DACRIOCISTOCELE CONGÉNITO (riesgo de celulitis fulminante y compromiso de la vía respiratoria en lactantes con respiración nasal obligada).',
      tratamiento: '• Manejo Conservador Inicial (<12 meses de edad):\n  - Masaje Hidrostático de Crigler: El cuidador coloca el dedo índice sobre el tendón cantal medial cerrando el canalículo superior/inferior, y desliza con presión hidrostática firme hacia abajo en dirección al meato nasal para reventar la membrana de Hasner. Realizar 10 repeticiones 3 a 4 veces al día.\n  - Higiene palpebral y colirio antibiótico tópico de amplio espectro (Tobramicina 0.3% o Ácido Fusídico) solo durante los episodios de secreción mucopurulenta profusa.\n• Procedimiento Quirúrgico Intervencionista:\n  - Sondaje de Vía Lagrimal (Probing): Indicado a partir de los 10-12 meses si no hay resolución espontánea, o antes (urgente) si hay dacriocistocele o dacriocistitis recurrente.\n  - Técnica: Dilatación del punto lagrimal superior con dilatador de Nettleship -> Inserción vertical de sonda de Bowman calibre 00/0 -> Rotación horizontal 90° hacia la pared medial del saco hasta tocar hueso firme (hard stop) -> Rotación vertical 90° hacia abajo dentro del conducto nasolagrimal hasta superar la resistencia membranosa de Hasner (pop táctil) -> Comprobación con irrigación de fluoresceína y aspiración en meato inferior.\n  - Intubación con tubo de Silicón (Crawford o Ritleng): Si el sondaje simple fracasa o ante niños mayores de 2 años con estenosis compleja.',
      criteriosDerivacionOQuirurgicos: 'Dacriocistorrinostomía (DCR) pediátrica externa o endoscópica: Reservada para fracasos reiterados de sondaje con intubación y anomalías óseas congénitas.',
      contraindicaciones: 'NUNCA forzar la sonda de Bowman si se encuentra un tope blando esponjoso (soft stop); esto indica que la sonda está acodando la pared del canalículo y crear una falsa vía iatrogénica irreversible.'
    },
    pearlHighYield: 'CNLDO Board Pearl: El 90% de las obstrucciones congénitas resuelven con masaje de Crigler en el primer año. El sitio más frecuente de obstrucción es la Válvula de Hasner en el meato inferior. El dacriocistocele neonatal requiere descompresión urgente por riesgo de dacriocistitis aguda y obstrucción respiratoria nasal.',
    keyReferences: 'PEDIG CNLDO Trials (Ophthalmology 2008 & 2012) / AAO BCSC Section 6',
    differentialDiagnoses: ['Glaucoma congénito primario (con buftalmos, fotofobia y edema corneal)', 'Conjuntivitis neonatal bacteriana (Chlamydia, gonococo)', 'Agenesia o atresia de puntos lagrimales', 'Triquiasis o entropión congénito']
  },

  // =========================================================================
  // OCULOPLÁSTICA, ÓRBITA Y VÍA LAGRIMAL
  // =========================================================================

  // 9. OCULOPLÁSTICA: Entropión Involutivo Senil y Tira Tarsal Lateral
  {
    id: 'kb-oculoplastica-entropion-lts',
    keywords: ['entropion', 'ectropion', 'tira tarsal lateral', 'lts', 'retractores de jones', 'involutivo', 'cabalgamiento del orbicular', 'snap-back', 'distraction test', 'quickert'],
    subspecialty: 'Oculoplástica, Órbita y Vía Lagrimal',
    diagnosticSummary: 'Entropión Involutivo Palpebral Senil: Inversión del margen palpebral con triquiasis secundaria y queratopatía mecánica, corregido mediante Tira Tarsal Lateral (LTS) y reinserción de retractores.',
    pathophysiology: 'Conjunción multifactorial del envejecimiento tisular: 1) Laxitud horizontal palpebral por atenuación y elongación de los tendones cantales medial y lateral; 2) Desinserción o atenuación de los retractores del párpado inferior (fascia capsulopalpebral homóloga al elevador superior), lo que permite que el borde tarsal inferior rote hacia adentro; 3) Cabalgamiento ascendente de las fibras preseptales del músculo orbicular de los párpados sobre las fibras pretarsales durante el parpadeo; 4) Enoftalmos senil por atrofia de la grasa retrobulbar orbitaria.',
    clinicalApplication: {
      guardia: '1) Biomicroscopía: Margen palpebral inferior totalmente rotado hacia la superficie ocular; las pestañas rozan directamente el epitelio corneal (queratitis punteada, úlcera corneal o adelgazamiento estromal).\n2) Tests de Laxitud Horizontal:\n   • Distraction Test: Se pinza el párpado inferior separándolo del globo ocular (>6-8 mm indica laxitud horizontal patológica).\n   • Snap-Back Test: Se tracciona el párpado inferior hacia abajo y se suelta sin permitir parpadeo (si no regresa instantáneamente a contactar el globo, confirma claudicación del tono cantal).\n3) Descarte de Entropión Cicatrizal: Inspeccionar la conjuntiva tarsal inferior buscando líneas blancas fibróticas o fondos de saco acortados (síndrome de Stevens-Johnson, penfigoide ocular cicatrizal o tracoma).',
      tratamiento: '• Alivio Temporal Inmediato en Consulta/Guardia:\n  - Cinta adhesiva microporo fijada desde el margen palpebral inferior tensando en dirección hacia la mejilla para evertir el párpado.\n  - Pomada lubricante abundante y lente de contacto terapéutico para proteger la córnea del roce de las pestañas.\n  - Suturas de tracción eversoras temporales de Quickert en consulta si el paciente no puede operarse de inmediato.\n• Cirugía Reconstructiva Definitiva de Elección:\n  - Técnica de Tira Tarsal Lateral (Lateral Tarsal Strip - LTS) de Anderson combinada con Reinserción de Retractores de Jones:\n    1. Cantotomía lateral y cantólisis del pilar inferior del tendón cantal lateral.\n    2. Disección del borde lateral del tarso inferior retirando epitelio conjuntival y piel anterior para crear una lengüeta o tira tarsal desprovista de epitelio.\n    3. Reinserción de los retractores del párpado inferior al borde inferior del tarso con suturas reabsorbibles 5-0.\n    4. Anclaje de la tira tarsal lateral al periostio del reborde orbitario lateral (al tubérculo orbitario de Whitnall) en dirección superoposterior con sutura no reabsorbible (Poliéster o Prolene 4-0 o 5-0).\n    5. Cierre cantal por planos.',
      criteriosDerivacionOQuirurgicos: 'En Entropión Cicatrizal: NO realizar acortamiento horizontal convencional porque agrava la contracción; requiere injerto de mucosa oral (labio inferior o paladar duro) o mucosa conjuntival para alargar la lámina posterior.',
      contraindicaciones: 'NUNCA realizar una corrección simple de entropión sin verificar el estado de la lámina posterior ni evaluar la laxitud medial; la sobrecorrección sin fijación periostica causa ectropión consecutivo yatrogénico.'
    },
    pearlHighYield: 'Entropión Involutivo: La tríada patogénica es laxitud horizontal, desinserción de retractores y cabalgamiento del orbicular pretarsal. La Tira Tarsal Lateral (LTS) anclada al periostio del tubérculo de Whitnall corrige la laxitud horizontal y es la base quirúrgica estándar.',
    keyReferences: 'Anderson RL & Gordy DD. The Lateral Tarsal Strip (Arch Ophthalmol 1979) / AAO BCSC Section 7',
    differentialDiagnoses: ['Triquiasis aislada (folículos anómalos)', 'Distiquiasis congénita/adquirida (hilera de pestañas en orificios de Meibomio)', 'Entropión cicatrizal (penfigoide/Stevens-Johnson)', 'Epibléfaron congénito']
  },

  // 10. OCULOPLÁSTICA: Patología Lagrimal del Adulto, Actinomyces y DCR
  {
    id: 'kb-oculoplastica-dcr-actinomyces',
    keywords: ['dcr', 'dacriocistorrinostomia', 'actinomyces', 'canaliculitis', 'dacriolitos', 'granos de azufre', 'cresta lagrimal', 'osteotomia', 'meato medio', 'silastic'],
    subspecialty: 'Oculoplástica, Órbita y Vía Lagrimal',
    diagnosticSummary: 'Obstrucción del Conducto Nasolagrimal en el Adulto (PANDO), Canaliculitis Supurativa por Actinomyces israelii y Dacriocistorrinostomía (DCR Externa vs Endonasal).',
    pathophysiology: '1) Obstrucción Adquirida Primaria del Conducto Nasolagrimal (PANDO): Fibrosis idiopática crónica y estenosis concéntrica de la mucosa del conducto nasolagrimal por remodelación de la matriz en mujeres postmenopáusicas (por cambios hormonales y conductos óseos más estrechos). Esto genera estasis lagrimal, proliferación bacteriana secundaria (Staphylococcus aureus, Streptococcus pneumoniae) y dacriocistitis aguda o crónica con dilatación del saco.\n2) Canaliculitis Crónica: Infección bacteriana localizada del canalículo lagrimal producida típicamente por Actinomyces israelii (bacteria anaerobia filamentosa Gram positiva). Forma microcolonias sólidas insolubles llamadas "gránulos de azufre" o dacriolitos que taponan el canalículo impidiendo la respuesta a antibióticos tópicos.',
    clinicalApplication: {
      guardia: '1) En Canaliculitis por Actinomyces: Signo patognomónico: "Punto lagrimal en volcán" (pouty punctum), engrosado, eritematoso y protruyente. A la expresión bimanual del canalículo, brotan múltiples gránulos amarillentos o concreciones sólidas con olor fétido.\n2) En Dacriocistitis Aguda: Masa eritematosa, tumefacta y exquisitamente dolorosa en el canto medial por debajo del tendón cantal medial (en topografía del saco lagrimal).\n3) Exploración de Permeabilidad Lagrimal:\n   • Lavado de vía lagrimal con cánula y solución salina: En obstrucción nasolagrimal completa distal se produce reflujo total inmediato por el punto lagrimal opuesto (reflujo superior o inferior) sin paso de líquido a la faringe.\n   • Hard stop vs Soft stop al sondaje: En obstrucción nasolagrimal distal se palpa hueso duro (cresta lagrimal posterior), confirmando canalículos permeables.',
      tratamiento: '• Tratamiento de la Canaliculitis por Actinomyces:\n  - CANALICULOTOMÍA QUIRÚRGICA: Imprescindible realizar una pequeña incisión horizontal en la pared posterior del canalículo para curetaje mecánico completo de todos los dacriolitos y gránulos de azufre, seguida de irrigación con Penicilina G.\n• Tratamiento de la Dacriocistitis Aguda:\n  - Antibioticoterapia sistémica oral o IV inmediata (Amoxicilina-Clavulánico 875/125 mg c/8h o Cefazolina IV) + compresas calientes.\n  - Si hay fluctuación abcedada: Drenaje percutáneo con aguja fina o incisión mínima.\n• Cirugía Definitiva: Dacriocistorrinostomía (DCR Externa vs Endoscópica):\n  - Indicada tras la resolución del cuadro agudo en toda obstrucción nasolagrimal no tumoral.\n  - Principio quirúrgico: Creación de un bypass o fístula permanente entre la mucosa del saco lagrimal y la mucosa nasal del MEATO MEDIO a través de una osteotomía ósea (resección del hueso lagrimal y apófisis frontal del maxilar de 10-15 mm de diámetro).\n  - Sutura de colgajos mucosos anteriores y posteriores con Vicryl 5-0 + colocación de tubos de intubación bicanalicular de Silastic durante 6 a 12 semanas.',
      criteriosDerivacionOQuirurgicos: 'CONTRAINDICACIÓN FORMAL EN AGUDO: PROHIBIDO realizar irrigación forzada o sondaje lagrimal durante la fase aguda flemonosa de una dacriocistitis (riesgo de romper el saco y provocar una celulitis orbitaria postseptal diseminada).',
      contraindicaciones: 'NUNCA operar una DCR si se sospecha un tumor maligno del saco lagrimal (signos de alarma: masa que sobrepasa el tendón cantal medial hacia arriba, reflujo sanguinolento espontáneo o induración pétrea; en ese caso se debe realizar TAC orbitario y biopsia excisional en bloque).'
    },
    pearlHighYield: 'DCR Board Pearl: La DCR conecta el saco lagrimal con el meato nasal medio (NUNCA el inferior). El "punto lagrimal en volcán" (pouty punctum) con concreciones en gránulos de azufre es patognomónico de canaliculitis por Actinomyces israelii y exige canaliculotomía con legrado.',
    keyReferences: 'Tarbet MH & Custer PL. External DCR (Ophthalmology 1995) / AAO BCSC Section 7',
    differentialDiagnoses: ['Dacriocistocele congénito', 'Mucocele del seno etmoidal', 'Tumor maligno del saco lagrimal (carcinoma epidermoide/linfoma)', 'Celulitis preseptal']
  },

  // 11. OCULOPLÁSTICA: Carcinoma de Glándulas Sebáceas de Meibomio (SGC)
  {
    id: 'kb-oculoplastica-carcinoma-sebaceo',
    keywords: ['carcinoma sebaceo', 'sgc', 'meibomio', 'diseminacion pagetoide', 'biopsia en mapa', 'oil red o', 'simulador de chalazion', 'mohs', 'ganglio centinela', 'parpado superior'],
    subspecialty: 'Oculoplástica, Órbita y Vía Lagrimal',
    diagnosticSummary: 'Carcinoma de Glándulas Sebáceas Palpebrales (SGC): La gran neoplasia maligna simuladora del párpado superior, con diseminación intraepitelial pagetoide, metástasis ganglionares y alta mortalidad si se retrasa el diagnóstico.',
    pathophysiology: 'Neoplasia maligna agresiva originada en las células sebáceas holocrinas de las glándulas de Meibomio del tarso palpebral (75-80% de casos) o en las glándulas de Zeis de las pestañas o carúncula. Predomina en el párpado superior debido a su mayor número de glándulas de Meibomio (~30-40 en párpado superior vs ~20-30 en inferior). Posee un patrón biológico altamente agresivo caracterizado por la "diseminación pagetoide" (migración intraepitelial de células neoplásicas individuales a través de la conjuntiva tarsal, fórnix, conjuntiva bulbar e incluso epitelio corneal), lo que crea márgenes quirúrgicos falsamente libres en resecciones convencionales. Hace metástasis por vía linfática a ganglios preauriculares y submandibulares.',
    clinicalApplication: {
      guardia: '1) LA GRAN SIMULADORA: Sospechar siempre ante:\n   • "Chalazión" recidivante en el mismo sitio del párpado superior en un paciente anciano (>60-70 años).\n   • Blefaroconjuntivitis crónica difusa unilateral que no responde al tratamiento médico habitual.\n   • Pérdida focal de pestañas (madarosis) o engrosamiento amarillento indurado focal del borde tarsal.\n2) Examen con eversión palpebral superior obligatoria: Se observa engrosamiento amarillento-anaranjado o aspecto de masa friable/papilar en la cara tarsal conjuntival.\n3) Palpación ganglionar meticulosa: Palpación reglada de ganglios preauriculares, parotídeos, submandibulares y de la cadena cervical anterior.',
      tratamiento: '• Diagnóstico Histopatológico Inicial:\n  - BIOPSIA INCISIONAL EN ESPESOR TOTAL: Tomar un fragmento representativo que incluya tarso y margen palpebral.\n  - ADVERTENCIA CRÍTICA A ANATOMÍA PATOLÓGICA: Procesar una muestra EN FRESCO (sin fijar en parafina ni alcohol) para tinción de lípidos con OIL RED O o SUDAN IV (los solventes de la parafina convencional disuelven los lípidos de las células sebáceas haciendo que el tumor parezca un carcinoma escamoso indiferenciado).\n  - Mapeo Conjuntival (Map Biopsies): Si se confirma SGC, se deben tomar múltiples biopsias conjuntivales seriadas de fórnices y bulbar para descartar extensión pagetoide subclínica.\n• Tratamiento Quirúrgico Oncológico:\n  - Cirugía Micrográfica de Mohs o Resección Amplia en cuña con márgenes de seguridad de 5 a 6 mm guiada por cortes congelados.\n  - Reconstrucción palpebral según defecto (Técnica de Hughes para párpado superior/inferior, colgajo de Cutler-Beard o colgajo miocutáneo de Tenzel).\n  - Biopsia de Ganglio Centinela (SLNB) en tumores >10-20 mm o con invasión vascular/perineural.\n  - Exenteración orbitaria si existe invasión profunda del contenido orbitario.',
      criteriosDerivacionOQuirurgicos: 'Remisión prioritaria a Centro de Referencia Oncológica Oculoplástica. La mortalidad a 5 años oscila entre el 10% y el 25% principalmente por metástasis ganglionares y hematógenas tardías.',
      contraindicaciones: 'NUNCA curetear repetidamente un "chalazión" recurrente en un adulto mayor sin remitir el tejido a biopsia histopatológica formal. Prohibido procesar la muestra únicamente con fijación en parafina sin estudio lipídico previo.'
    },
    pearlHighYield: 'Carcinoma Sebáceo Board Pearl: El 75% ocurre en el párpado superior (mayor cantidad de glándulas de Meibomio). Clásico simulador de chalazión recidivante o blefaroconjuntivitis unilateral con madarosis. Requiere tinción Oil Red O en tejido en fresco para lípidos intracitoplasmáticos y biopsias en mapa conjuntivales por diseminación pagetoide.',
    keyReferences: 'Shields JA et al. Sebaceous Carcinoma (Surv Ophthalmol 2004) / AAO BCSC Section 7',
    differentialDiagnoses: ['Chalazión crónico granulomatoso', 'Carcinoma basocelular (BCC nodular/morfeiforme)', 'Carcinoma epidermoide', 'Penfigoide ocular cicatrizal']
  },

  // 12. OCULOPLÁSTICA: Rabdomiosarcoma Orbitario Infantil vs Seudotumor
  {
    id: 'kb-oculoplastica-rabdomiosarcoma',
    keywords: ['rabdomiosarcoma', 'rms', 'tumor orbitario pediatrico', 'proptosis infantil aguda', 'desmina', 'miogenina', 'embrionario', 'alveolar', 'irsg', 'biopsia orbitaria urgente'],
    subspecialty: 'Oculoplástica, Órbita y Vía Lagrimal',
    diagnosticSummary: 'Rabdomiosarcoma Orbitario Pediátrico: Tumor maligno mesenquimal primario más frecuente de la órbita en niños; emergencia médica caracterizada por proptosis y tumefacción de progresión fulminante.',
    pathophysiology: 'Proliferación neoplásica maligna de células mesenquimales pluripotenciales embrionarias primitivas con diferenciación hacia músculo estriado esquelético (rabdomioblastos), originadas en el tejido conectivo orbitario (NO en los músculos extraoculares preexistentes). Subtipos histológicos: 1) Embrionario (el más frecuente, 75-80% de casos, excelente pronóstico con supervivencia >90%); 2) Alveolar (9% de casos, peor pronóstico, frecuente en cuadrante inferior con translocaciones t(2;13) o t(1;13) asociadas a fusión PAX3/PAX7-FOXO1); 3) Botrioide y Pleomórfico.',
    clinicalApplication: {
      guardia: '1) Presentación clínica cardinal: Niño de 5 a 8 años que debuta con PROPTOSIS UNILATERAL RÁPIDAMENTE PROGRESIVA que evoluciona en días o semanas (con frecuencia simula un proceso infeccioso o celulitis orbitaria por edema palpebral y quemosis).\n2) Localización tumoral típica: Cuadrante superonasal o superotemporal de la órbita, desplazando el globo ocular hacia abajo y afuera.\n3) Signos inflamatorios variables pero frecuentemente SIN dolor intenso ni fiebre (discordancia con celulitis).\n4) Neuroimagen Urgente (TAC o RM de Órbita con Contraste):\n   • Masa de partes blandas homogénea o heterogénea extracónica bien circunscrita que capta intensamente contraste.\n   • Evaluar signos de osteólisis o erosión de las paredes óseas orbitarias y descartar invasión a la fosa craneal anterior o senos paranasales.',
      tratamiento: '• BIOPSIA INCISIONAL ORBITARIA URGENTE:\n  - Mandatorio realizar biopsia de tejido para confirmación histológica e inmunohistoquímica de emergencia.\n  - Marcadores inmunohistoquímicos confirmatorios: Desmina (+), Miogenina / MyoD1 (+) y Actina muscular específica (+).\n• Protocolo Terapéutico Oncológico Combinado Multimodal (Protocolos IRSG / COG):\n  - QUIMIOTERAPIA SISTÉMICA DE INDUCCIÓN: Régimen VAC (Vincristina + Actinomicina D + Ciclofosfamida).\n  - RADIOTERAPIA EXTERNA FRACCIONADA DE ALTA PRECISIÓN: Dosis total de 36 a 50 Gy dirigida a la órbita; el rabdomiosarcoma es extraordinariamente radiosensible y quimiosensible.\n  - La exenteración orbitaria mutilante está FORMALMENTE EN DESUSO como terapia primaria; se reserva únicamente para fallas o recurrencias tumorales refractarias a quimio-radioterapia.',
      criteriosDerivacionOQuirurgicos: 'Estadificación sistémica completa inmediata: Punción-aspiración y biopsia de médula ósea, punción lumbar para citología del LCR, TAC toraco-abdominal y PET-CT para descartar enfermedad metastásica a distancia.',
      contraindicaciones: 'CONTRAINDICACIÓN MORTAL: NUNCA demorar la neuroimagen ni asumir que una proptosis infantil aguda es una simple "celulitis orbitaria preseptal" si no responde fulminantemente a antibióticos intravenosos en 24-48 horas. Cada día de retraso puede transformar un tumor curable en una neoplasia intracraneal letal.'
    },
    pearlHighYield: 'Rabdomiosarcoma Orbitario Board Pearl: Tumor maligno mesenquimal orbitario primario más común en la infancia (pico a los 5-8 años). Proptosis aguda que evoluciona en días (simula celulitis). El subtipo embrionario es el más común y tiene excelente pronóstico (>90% sobrevida) con quimioterapia VAC + radioterapia externa. La exenteración primaria ya no se realiza.',
    keyReferences: 'Intergroup Rhabdomyosarcoma Study Group (IRSG) Protocols / AAO BCSC Section 7',
    differentialDiagnoses: ['Celulitis orbitaria postseptal con absceso subperióstico', 'Seudotumor inflamatorio orbitario (Miositis idiopática)', 'Quiste dermoide roto inflamado', 'Neuroblastoma metastásico a órbita']
  }
];



