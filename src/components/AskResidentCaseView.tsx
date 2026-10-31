import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Stethoscope, 
  AlertOctagon, 
  CheckCircle2, 
  BookOpen, 
  Pill, 
  FileText, 
  RotateCcw, 
  BookmarkPlus,
  HelpCircle,
  Tag,
  ChevronRight,
  ShieldAlert,
  Layers,
  ArrowRight,
  Key
} from 'lucide-react';
import { ResidentResponseResult, SubspecialtyId } from '../types/ophthalmology';
import { SUBSPECIALTY_MODULES } from '../data/modulesData';
import { askResidentCaseAPI, getStoredApiKey } from '../services/geminiService';
import { OPHTHALMOLOGY_KNOWLEDGE_BASE, ClinicalDossier } from '../data/clinicalKnowledgeBase';

interface AskResidentCaseViewProps {
  initialTopic?: string;
  initialSubspecialty?: string;
  onSaveAsCustomQuestion?: (data: any) => void;
  onOpenApiKeyModal?: () => void;
}

export const AskResidentCaseView: React.FC<AskResidentCaseViewProps> = ({
  initialTopic = '',
  initialSubspecialty = 'cornea',
  onSaveAsCustomQuestion,
  onOpenApiKeyModal
}) => {
  const [questionText, setQuestionText] = useState<string>(initialTopic);
  const [subspecialty, setSubspecialty] = useState<string>(initialSubspecialty);
  const [residencyYear, setResidencyYear] = useState<string>('R2/R3 - Intermedio');
  const [focusArea, setFocusArea] = useState<string>('Diagnóstico urgente y aplicación en guardia');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ResidentResponseResult | null>(null);
  const [matchedDossier, setMatchedDossier] = useState<ClinicalDossier | null>(null);
  const [resultSource, setResultSource] = useState<'gemini' | 'curated-engine'>('curated-engine');
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('all');
  const [hasApiKey, setHasApiKey] = useState<boolean>(() => Boolean(getStoredApiKey()));

  React.useEffect(() => {
    const checkKey = () => setHasApiKey(Boolean(getStoredApiKey()));
    window.addEventListener('storage', checkKey);
    return () => window.removeEventListener('storage', checkKey);
  }, []);

  // Key Clinical Presentation Presets from our rich Knowledge Base
  const CLINICAL_PRESETS = [
    // --- CÓRNEA Y SUPERFICIE OCULAR (10 TEMAS FUNDAMENTALES DE ALTA RENTABILIDAD) ---
    {
      title: 'Ojo Seco Severo: Sjögren vs DGM y Toxicidad por BAK',
      area: 'cornea',
      text: 'Mujer de 52 años con artritis reumatoide refiere sensación de arenilla intensa, visión fluctuante y quemazón ocular que empeoró tras usar gotas para glaucoma conservadas con BAK. Biomicroscopía: TBUT de 3 segundos, Schirmer I de 3 mm en 5 min, tinción corneal con verde de lisamina (Oxford grado 3) y meibomio en pasta de dientes. ¿Diagnóstico según TFOS DEWS II, conducta frente al conservante BAK y escalonamiento terapéutico con ciclosporina y tapones lagrimales?'
    },
    {
      title: 'Úlcera Bacteriana por Pseudomonas vs Fúngica por Fusarium',
      area: 'cornea',
      text: 'Varón de 28 años portador de lentes de contacto blandas con dolor ocular agudo, secreción verdosa mucopurulenta profusa y un infiltrado estromal central licuefactivo con hipopion de 1.5 mm que progresa rápidamente en 24h. ¿Cuál es el microorganismo causal más agresivo, protocolo de colirios antibióticos reforzados de guardia y cuándo sospechar etiología fúngica filamentosa con lesiones satélite tras trauma vegetal?'
    },
    {
      title: 'Acanthamoeba en Portador de Lentes (Infiltrados Perineurales)',
      area: 'cornea',
      text: 'Paciente de 24 años usuario de lentes de contacto que se bañó en un lago; presenta dolor ocular insoportable desproporcionado a los hallazgos iniciales y en lámpara de hendidura se observan infiltrados perineurales radiales y anillo estromal de Wessely. ¿Diagnóstico exacto, medio de cultivo microbiológico de elección y terapia tópica combinada de primera línea con biguanidas?'
    },
    {
      title: 'Queratocono Progresivo: Pentacam, CXL y Manejo de Hidrops',
      area: 'cornea',
      text: 'Joven de 19 años atópico con frotamiento ocular compulsivo, disminución de visión y astigmatismo miópico irregular rápidamente progresivo. Pentacam muestra elevación posterior de +28 µm y BAD-D de 3.2. Además, su hermano mayor presenta dolor súbito y blanqueamiento corneal por hidrops agudo. ¿Criterios para indicar Crosslinking (CXL protocolo de Dresden) y cuál es el manejo médico y gas intracameral del hidrops agudo?'
    },
    {
      title: 'Distrofias Corneales IC3D: Fuchs, TGFBI (Lattice/Granular) y Macular',
      area: 'cornea',
      text: 'Mujer de 62 años con visión borrosa matutina que aclara por la tarde, hallando en biomicroscopía múltiples guttas centrales en "metal batido" y edema estromal (Distrofia de Fuchs). Su hijo presenta depósitos estromales filamentosos ramificados que tiñen con Rojo Congo. ¿Cuál es la base genética de las distrofias estromales TGFBI frente a la macular autosómica recesiva y qué tinción histoquímica es específica para cada una?'
    },
    {
      title: 'Queratopatía Bullosa Pseudofáquica: Descompensación y DMEK',
      area: 'cornea',
      text: 'Paciente de 74 años sometido a cirugía de catarata compleja con ultrasonido prolongado y LIO de cámara anterior; acude 8 meses después con bulas epiteliales dolorosas que se rompen, edema estromal de 740 µm y recuento endotelial de 420 cél/mm². ¿Cuál es el manejo paliativo de guardia y por qué la queratoplastia endotelial DMEK o DSAEK es la técnica reconstructiva de elección frente a la PK tradicional?'
    },
    {
      title: 'Trauma Corneal: Cuerpo Extraño Metálico y Síndrome de Erosión Recurrente',
      area: 'cornea',
      text: 'Trabajador metalúrgico acude tras impacto de esquirla en córnea derecha hace 48h; se observa cuerpo extraño metálico con halo de óxido férrico estromal (rust ring). A las semanas refiere dolor lancinante súbito al abrir el ojo por la mañana (erosión corneal recurrente). ¿Técnica reglada de extracción del anillo de óxido con fresa de Alger y manejo agudo y definitivo de la erosión recurrente?'
    },
    {
      title: 'Quemadura Ocular por Álcali (Sosa Cáustica / Cal): Roper-Hall IV',
      area: 'cornea',
      text: 'Paciente salpicado en ojo derecho con sosa cáustica hace 15 minutos; presenta isquemia límbica de más de 180 grados con córnea opaca en "porcelana" (Roper-Hall Grado IV). ¿Por qué el lavado copioso inmediato precede a cualquier examen, cómo neutralizar el pH y cuál es el protocolo médico para inhibir colagenasas estromales y prevenir el melting?'
    },
    {
      title: 'Herpes Corneal: VHS (Úlcera Dendrítica) vs Zóster (Hutchinson)',
      area: 'cornea',
      text: 'Paciente con ojo rojo y úlcera dendrítica con bulbos terminales e hipoestesia corneal por VHS; otro paciente presenta vesículas en la punta de la nariz (signo de Hutchinson) y pseudodendritas en placa por Herpes Zóster Oftálmico. ¿Por qué están PROHIBIDOS los corticoides tópicos en la fase epitelial por VHS, dosis de antivirales orales en Zóster y qué concluyó el ensayo multicéntrico HEDS?'
    },
    {
      title: 'Queratoconjuntivitis Vernal (VKC): Puntos de Horner-Trantas y Úlcera en Escudo',
      area: 'cornea',
      text: 'Niño de 8 años en primavera con prurito ocular violento, fotofobia incapacitante, secreción mucosa espesa, papilas gigantes en empedrado en conjuntiva tarsal superior, nódulos límbicos gelatinosos con puntos de Horner-Trantas y úlcera en escudo corneal superior teñida con fluoresceína. ¿Fisiopatología por Proteína Básica Mayor (MBP), desbridamiento de la placa y terapia con ciclosporina o tacrolimus?'
    },
    {
      title: 'Degeneraciones Corneales: Pterigión Recidivante y Queratopatía en Banda (EDTA)',
      area: 'cornea',
      text: 'Varón de 45 años con pterigión nasal que invade 3.5 mm de córnea provocando astigmatismo irregular e inflamación crónica; otro paciente con uveítis anterior crónica presenta una banda horizontal blanquecina con agujeros lúcidos en la hendidura interpalpebral (queratopatía en banda calcárea). ¿Por qué la escisión con autoinjerto conjuntival autólogo con limbo es superior a la esclera desnuda y cómo se realiza la quelación con EDTA sódico al 3%?'
    },
    {
      title: 'Trasplante de Córnea: Rechazo Endotelial (Línea de Khodadoust) y Rebubbling',
      area: 'cornea',
      text: 'Paciente trasplantado de córnea (PKP) acude al 6º mes con ojo rojo, visión borrosa (regla RSV) y una línea endotelial de precipitados queráticos que avanza sobre el injerto (Línea de Khodadoust) con edema estromal. Un paciente operado de DMEK presenta a las 48h un despegamiento parcial inferior del injerto endotelial. ¿Protocolo de bolos de metilprednisolona IV para revertir el rechazo y técnica de rebubbling intracameral?'
    },
    {
      title: 'Queratitis Ulcerativa Periférica (PUK) vs Mooren y Peligro de AINEs',
      area: 'cornea',
      text: 'Mujer de 56 años con Artritis Reumatoide activa consulta por dolor ocular punzante y ojo rojo. En la lámpara de hendidura se observa un adelgazamiento estromal periférico en semiluna de 3 mm en limbo nasal superior con base desepitelizada (descemetocele inminente) y escleritis necrotizante contigua. El médico de atención primaria le recetó colirio de ketorolaco cada 8 horas. ¿Por qué están PROHIBIDOS FORMALMENTE los AINEs tópicos por riesgo de "corneal melt", qué vasculitis sistémica letal (GPA c-ANCA o AR) debe descartarse y cuál es el protocolo de rescate con metilprednisolona y biológicos?'
    },
    {
      title: 'Deficiencia de Células Madre Límbicas (LSCD) y Reconstrucción con SLET',
      area: 'cornea',
      text: 'Varón de 30 años con antecedente de quemadura por álcali en ojo derecho hace 10 meses presenta pérdida total de visión a bultos, conjuntivalización de 360 grados sobre la córnea con pannus vascular superficial y citología de impresión con células caliciformes en el centro corneal. El ojo izquierdo está completamente sano. ¿Por qué está PROHIBIDO realizar una queratoplastia penetrante (PKP) primaria en este ojo y cómo se ejecuta paso a paso el SLET autólogo con microinjertos sobre membrana amniótica?'
    },
    {
      title: 'Penfigoide de Membranas Mucosas (MMP) y Stevens-Johnson en UCI',
      area: 'cornea',
      text: 'Paciente de 68 años con ojo rojo crónico presenta acortamiento del fondo de saco inferior a 4 mm y bridas de simbléfaron incipientes (Foster II-III). En la UCI, otro paciente con Necrólisis Epidérmica Tóxica (NET) inducida por carbamazepina presenta denudación de la superficie ocular en la primera semana. ¿Qué prueba obligatoria de laboratorio (G6PD) precede al inicio de Dapsona en penfigoide y por qué la colocación hiperaguda de membrana amniótica en los primeros 7 días es la única intervención que salva la visión en SSJ/NET?'
    },
    {
      title: 'Queratopatía Neurotrófica (Mackie) y Cenegermina Recombinante (rhNGF)',
      area: 'cornea',
      text: 'Paciente de 58 años operado de schwannoma vestibular (neurinoma del acústico) acude por visión borrosa en ojo derecho. A la exploración presenta un defecto epitelial persistente ovalado de bordes enrollados y engrosados en centro corneal (Mackie 2) con anestesia corneal completa al test de Cochet-Bonnet, llamativamente indoloro. ¿Cuál es el mecanismo fisiopatológico de la denervación trigeminal V1, por qué están contraindicados los colirios con BAK y cuál es la pauta biológica con Cenegermina al 0.002% (rhNGF - Oxervate)?'
    },
    // --- GLAUCOMA Y PRESIÓN INTRAOCULAR (ALTA RENTABILIDAD) ---
    {
      title: 'Ataque Agudo de Cierre Angular (APAC) y Manejo del Ojo Contralateral',
      area: 'glaucoma',
      text: 'Mujer de 64 años hipermétrope con cefalea hemicraneal, náuseas, ojo rojo violáceo doloroso, edema microquístico corneal en vidrio esmerilado, pupila en midriasis media arrefléctica y PIO de 62 mmHg. ¿Cuál es la secuencia farmacológica de choque con Manitol al 20% y Acetazolamida, en qué momento exacto se puede instilar la pilocarpina al 2% y por qué es obligatorio tratar con láser el ojo contralateral antes del alta?'
    },
    {
      title: 'GPAA: Ensayo OHTS, Paquimetría Fina y Hemorragia de Drance',
      area: 'glaucoma',
      text: 'Paciente de 56 años con GPAA moderado tratado con Latanoprost presenta una PIO de 14 mmHg en ambos ojos. En el fondo de ojo se descubre una hemorragia en astilla (Drance) en el reborde temporal-inferior de la papila derecha que no existía hace 4 meses y paquimetría central de 510 micras. Según los ensayos OHTS y EMGT, ¿cuál es el significado biológico de este hallazgo, qué reducción adicional de la PIO meta se debe pautar y qué pruebas solicitar?'
    },
    {
      title: 'Glaucoma Pseudoexfoliativo (LOXL1, Fragilidad Zonular) y Pigmentario',
      area: 'glaucoma',
      text: 'Varón de 74 años con catarata y glaucoma presenta material fibrilar blanquecino en caspa en el borde pupilar, PIO de 34 mmHg y facodonesis manifiesta. Otro paciente de 28 años miope acude con PIO de 36 mmHg tras jugar al tenis y huso de Krukenberg en endotelio corneal. ¿Qué precauciones quirúrgicas con anillo de tensión capsular (CTR) exige el PEX y cómo difiere la fisiopatología mecánica del iris cóncavo en el glaucoma pigmentario?'
    },
    {
      title: 'Glaucoma Congénito Primario (Buftalmos, Megalocórnea y Cirugía de Ángulo)',
      area: 'glaucoma',
      text: 'Lactante de 5 meses es traído por sus padres por epífora continua sin secreción, fotofobia intensa y blefaroespasmo. A la exploración presenta córneas lechosas de 12.8 mm de diámetro horizontal y estrías de Haab en membrana de Descemet. ¿Por qué está FORMALMENTE CONTRAINDICADA la Brimonidina en menores de 2 años y qué criterios anatómicos deciden entre realizar una Goniotomía de Barkan frente a una Trabeculotomía ab externo?'
    },
    {
      title: 'Hipema Traumático en Anemia Falciforme y Fármacos Contraindicados',
      area: 'glaucoma',
      text: 'Paciente afrodescendiente de 22 años con hipema grado II y PIO de 34 mmHg tras trauma contuso con rasgo de células falciformes (Sickle cell trait). ¿Por qué están FORMALMENTE PROHIBIDOS la Acetazolamida sistémica y el Manitol intravenoso en drepanocitosis y cuándo está indicado el lavado quirúrgico de cámara anterior?'
    },
    {
      title: 'Procedimientos Láser y Filtrantes: SLT (Ensayo LiGHT) vs Trabeculectomía con MMC',
      area: 'glaucoma',
      text: 'Paciente de 60 años con GPAA recién diagnosticado con PIO de 24 mmHg solicita opciones sin gotas. Otro paciente operado de trabeculectomía con Mitomicina C hace 3 semanas acude con ampolla plana y PIO de 22 mmHg; un tercer paciente presenta ampolla quística translúcida con Seidel positivo y reacción turbia intra-ampollar. Según el ensayo LiGHT, ¿cuál es el rol de la SLT de primera línea, cómo manejar el flap con lisis de suturas láser y cómo diferenciar una Blebitis de una Endoftalmitis?'
    },
    {
      title: 'Diagnóstico Estructural y Funcional: OCT de CFNR (Efecto Suelo) y Humphrey 24-2/10-2',
      area: 'glaucoma',
      text: 'Un paciente con glaucoma avanzado presenta un grosor medio de CFNR peripapilar en OCT de 48 micras en ambos ojos y su médico solicita repetir el OCT para ver progresión. En la campimetría 24-2 el informe marca Falsos Positivos de 22% y un escotoma que roza la fijación central. ¿Por qué el OCT sufre el "efecto suelo" a las 50 micras perdiendo valor diagnóstico, por qué el campo visual 24-2 es inválido y cuándo es imperativo solicitar una campimetría 10-2?'
    },
    {
      title: 'Glaucoma de Presión Normal (GPN), Red Flags y Ensayo CNTGS',
      area: 'glaucoma',
      text: 'Varón de 46 años derivado por sospecha de GPN con PIO de 16 mmHg y excavación 0.8 en OI. A la exploración del nervio óptico se observa palidez del anillo temporal desproporcionada con respecto a la excavación ("palidez > excavación"), desaturación al color rojo y un defecto en campo visual que respeta el meridiano vertical. ¿Por qué este caso NO es glaucoma, qué patología compresiva quiasmática debe descartarse con RM urgente y qué demostró el ensayo landmark CNTGS?'
    },
    {
      title: 'Glaucoma en Embarazo, Lactancia y Contraindicaciones Críticas',
      area: 'glaucoma',
      text: 'Gestante de 32 años en semana 9 con glaucoma juvenil consulta por su régimen de colirios (Latanoprost y Brimonidina). En el puerperio desea amamantar a su recién nacido. ¿Qué riesgo de parto prematuro presentan las prostaglandinas, por qué está TERMINANTEMENTE CONTRAINDICADA la Brimonidina durante la lactancia (apnea y coma neonatal) y cuál es el rol de la SLT y la oclusión del punto lagrimal (NLO)?'
    },
    {
      title: 'Síndromes Hipertensivos Inflamatorios: Posner-Schlossman vs Fuchs',
      area: 'glaucoma',
      text: 'Varón de 30 años con visión borrosa y halos de colores con PIO de 50 mmHg en OD, ojo blanco y 3 precipitados queráticos redondos centrales no pigmentados con ángulo abierto. Otra paciente presenta atrofia e hipocromía del iris en OI, precipitados estrellados difusos en 360 grados, ausencia total de sinequias posteriores y sangrado filiforme a la paracentesis (signo de Amsler). ¿Cuál es la implicación viral (CMV en Posner-Schlossman vs Rubéola en Fuchs) y por qué los corticoides están desaconsejados para la celularidad en Fuchs?'
    },
    // --- RETINA Y VÍTREO (ALTA RENTABILIDAD CLÍNICO-QUIRÚRGICA) ---
    {
      title: 'Desprendimiento de Retina y Reglas de Lincoff',
      area: 'retina',
      text: 'Miope de 55 años con fotopsias y cortina visual con desprendimiento de retina superior que cruza las 12h y signo de Shafer positivo. Mácula aún aplicada (Macula ON). ¿Dónde se ubica la rotura causal según las 4 Reglas de Lincoff, cuál es el tiempo de intervención quirúrgica estricto y qué abordaje (VPP vs Cirugía Escleral) está indicado?'
    },
    {
      title: 'Oclusión de Arteria Central (Código Ictus y Mancha Rojo Cereza)',
      area: 'retina',
      text: 'Varón de 72 años con pérdida visual súbita e indolora hace 90 min con mancha rojo cereza y edema retiniano pálido lechoso. ¿Cuáles son las medidas de descompresión aguda de emergencia en los primeros 30 minutos, por qué activa el protocolo de Código Ictus en el hospital y qué descartar de inmediato en >50 años para salvar el ojo contralateral?'
    },
    {
      title: 'Coriorretinopatía Serosa Central, Paquicoroides y Peligro de Corticoides',
      area: 'retina',
      text: 'Varón de 38 años acude por metamorfopsia, micropsia y visión atenuada en ojo derecho con desprendimiento seroso foveal y grosor coroideo de 520 micras en EDI-OCT. Refiere haber recibido una infiltración de betametasona hace 3 semanas por lumbalgia. ¿Por qué están FORMALMENTE CONTRAINDICADOS los corticosteroides en CSC, qué demostró el ensayo landmark PLACE sobre la TFD a media dosis vs láser micropulso y cuál es el rol de la eplerenona?'
    },
    {
      title: 'Agujero Macular Grande (>400 µm) y Técnica de Flap Invertido de ILM',
      area: 'retina',
      text: 'Mujer de 64 años con escotoma central en ojo izquierdo, test de Watzke-Allen positivo y SD-OCT que confirma agujero macular de espesor total de 540 micras de diámetro mínimo (Grande según clasificación IVTS). ¿Por qué el pelado simple de ILM tiene menor tasa de éxito en defectos >400 µm, cómo se ejecuta la técnica de Flap Invertido de Michalewska y qué restricciones de altitud/avión y postura prona requiere el tamponamiento gaseoso?'
    },
    {
      title: 'Atrofia Geográfica en DMAE Seca y Modulación del Complemento',
      area: 'retina',
      text: 'Mujer de 76 años con DMAE seca avanzada presenta atrofia geográfica parafoveal con foveal sparing y bordes hiperautofluorescentes en FAF. ¿Cómo actúan los nuevos inhibidores de la cascada del complemento aprobados por FDA (Pegcetacoplán anti-C3 y Avacincaptad pegol anti-C5), cómo se comunican las expectativas realistas al paciente y qué riesgo de conversión a DMAE neovascular exudativa existe?'
    },
    {
      title: 'Desprendimiento Traccional Diabético y Fenómeno de «Crunch Macular»',
      area: 'retina',
      text: 'Paciente de 54 años con retinopatía diabética proliferativa avanzada presenta desprendimiento de retina traccional con bandas fibrovasculares gruesas en arcadas. Su médico general sugiere inyectar anti-VEGF y esperar 1 mes a control. ¿Por qué esta conducta desencadena el devastador "crunch macular" diabético, cuál es la ventana quirúrgica estricta (3 a 5 días) tras anti-VEGF y cómo diferenciar un DRT puro de un desprendimiento mixto traccional-regmatógeno?'
    },
    {
      title: 'Retinopatía del Prematuro (ROP): Criterios ETROP Tipo 1 y Anti-VEGF',
      area: 'retina',
      text: 'Prematuro de 26 semanas de gestación y 780 g de peso al nacer presenta a las 33 semanas PMA neovascularización en Zona I con tortuosidad arteriolar y dilatación venosa severa (Plus disease). Según el ensayo ETROP, ¿por qué cumple criterios absolutos de ROP Tipo 1, qué demostró el ensayo BEAT-ROP y RAINBOW sobre anti-VEGF en Zona I vs láser diodo y hasta qué semana PMA debe mantenerse el seguimiento?'
    },
    {
      title: 'Distrofias Hereditarias: Stargardt (ABCA4) y Terapia Génica (Luxturna)',
      area: 'retina',
      text: 'Niño de 9 años con nictalopía severa y ERG con onda b escotópica abolida presenta mutaciones bialélicas confirmadas en el gen RPE65. Otro adolescente presenta maculopatía en bronce bruñido con silencio coroideo en FAG por mutaciones en ABCA4 (Enfermedad de Stargardt). ¿Por qué está TERMINANTEMENTE PROHIBIDA la vitamina A en Stargardt y cuáles son los requisitos anatómicos y la técnica quirúrgica subretiniana de Voretigene Neparvovec (Luxturna)?'
    },
    {
      title: 'NOIA Arterítica y Arteritis de la Temporal (ACG)',
      area: 'neuroftalmologia',
      text: 'Mujer de 75 años con pérdida visual súbita, edema de papila pálido en tiza y claudicación mandibular al masticar. ¿Pruebas analíticas urgentes de guardia (VSG, PCR), longitud mínima de biopsia de arteria temporal y por qué iniciar bolos de metilprednisolona IV 1 g/día antes de cualquier procedimiento?'
    },
    {
      title: 'Parálisis del III Par con Midriasis (Aneurisma de PCoA)',
      area: 'neuroftalmologia',
      text: 'Paciente de 49 años con ptosis súbita, ojo en down-and-out y midriasis ipsilateral arreactiva con cefalea intensa. ¿Por qué la regla de la pupila exige Angio-TC cerebral de emergencia para descartar aneurisma de la comunicante posterior y cuándo sospechar etiología isquémica diabética?'
    },
    {
      title: 'Síndrome de Horner Agudo Doloroso: Disección de Carótida Interna',
      area: 'neuroftalmologia',
      text: 'Varón de 42 años tras manipulación cervical presenta dolor cervical y retroorbitario izquierdo intenso con ptosis leve y miosis que aumenta en la oscuridad. ¿Por qué la apraclonidina al 0.5% produce "reversión de la anisocoria", por qué no hay anhidrosis facial y qué estudio neurovascular urgente previene un ictus isquémico cerebral masivo?'
    },
    {
      title: 'Miastenia Gravis Ocular: Test del Hielo (Ice Pack Test)',
      area: 'neuroftalmologia',
      text: 'Mujer de 31 años con ptosis palpebral bilateral fluctuante que empeora al anochecer y diplopía intermitente sin compromiso pupilar. ¿Cómo se realiza y evalúa el Test del Hielo (+2 mm tras 2 min), qué anticuerpos solicitar y por qué están formalmente contraindicados los aminoglucósidos y betabloqueantes?'
    },
    {
      title: 'Neuropatía de Leber (LHON): Mutación m.11778G>A e Idebenona',
      area: 'neuroftalmologia',
      text: 'Varón de 22 años con pérdida visual central indolora severa en un ojo y pseudoedema papilar hiperémico con telangiectasias peripapilares que NO fugan en la angiografía fluoresceínica. A los 3 meses se afecta el ojo contralateral. ¿Cuál es el patrón de herencia materna estricta, qué mutaciones del ADNmt buscar y cuál es el protocolo con Idebenona 900 mg/día?'
    },
    {
      title: 'Endoftalmitis Aguda Postfaco (Estudio EVS)',
      area: 'catarata',
      text: 'Paciente al 4º día postoperatorio de catarata con dolor intenso, hipopion de 2 mm y agudeza de Percepción de Luz (PL). Según el estudio EVS, ¿está indicada vitrectomía pars plana inmediata o punción simple? Detallar dosis intravítreas.'
    },
    {
      title: 'Rotura Capsular Posterior en Cirugía de Catarata',
      area: 'catarata',
      text: 'Durante la facoemulsificación se profundiza súbitamente la cámara anterior por rotura de cápsula posterior. ¿Por qué está prohibido retirar la pieza bruscamente y cómo usar viscoelástico y triamcinolona?'
    },
    {
      title: 'Cálculo de LIO Post-LASIK: Evitar la Sorpresa Hipermetrópica',
      area: 'catarata',
      text: 'Paciente miope de 58 años operado de LASIK miópico hace 15 años acude para cirugía de facoemulsificación. La queratometría estándar reporta K = 38.5 D. Si se usa la fórmula SRK/T tradicional con esa K, ¿por qué ocurrirá una severa sorpresa hipermetrópica postoperatoria y qué fórmulas modernas de 4ª/5ª generación (Barrett True-K, Kane) y tecnología tomográfica evitan este error?'
    },
    {
      title: 'Síndrome IFIS por Tamsulosina: Profilaxis y Anillo de Malyugin',
      area: 'catarata',
      text: 'Varón de 72 años en tratamiento con tamsulosina para hiperplasia prostática acude a cirugía de catarata. Durante la facoemulsificación presenta iris flácido con ondulaciones violentas, tendencia al prolapso por la incisión y miosis progresiva a 2.5 mm. ¿Por qué suspender la tamsulosina días antes es ineficaz y cuál es el protocolo intraoperatorio con fenilefrina intracameral libre de conservantes y Anillo de Malyugin?'
    },
    {
      title: 'Catarata Polar Posterior: Hidrodelineación sin Hidrodissección',
      area: 'catarata',
      text: 'Paciente de 44 años con catarata polar posterior central densa con anillos concéntricos. ¿Por qué la hidrodissección convencional está TERMINANTEMENTE CONTRAINDICADA en este tipo de catarata, cómo se ejecuta la hidrodelineación pura ("golden ring") y qué conducta intraoperatoria se adopta con la placa central adherida a la cápsula posterior?'
    },
    {
      title: 'TASS vs Endoftalmitis Postoperatoria: Diagnóstico Diferencial en <24h',
      area: 'catarata',
      text: 'A las 16 horas de una cirugía de catarata no complicada, un paciente acude con edema corneal estromal difuso "de limbo a limbo", hipopion de 1.5 mm en cámara anterior y dolor leve. En el fondo de ojo el vítreo está claro. ¿Por qué este cuadro corresponde a un Síndrome Tóxico del Segmento Anterior (TASS) y no a una endoftalmitis infecciosa, cuál es la causa más común ligada al autoclave y cómo se trata?'
    },
    {
      title: 'Edema Macular Pseudofáquico de Irvine-Gass (Ensayo PREMED)',
      area: 'catarata',
      text: 'Paciente diabético tipo 2 operado de facoemulsificación hace 5 semanas refiere pérdida gradual de visión central a 20/60. El SD-OCT macular muestra cavidades cistoideas intrarretinianas en la capa plexiforme externa (Henle) con aspecto en pétalos de flor. Según el ensayo multicéntrico PREMED, ¿por qué la combinación de AINE tópico y corticoide es sinérgica y por qué están contraindicadas las prostaglandinas?'
    },
    {
      title: 'Subluxación Zonular en PEX y Técnica de Yamane con Doble Aguja',
      area: 'catarata',
      text: 'Paciente de 78 años con pseudoexfoliación capsular (PEX) y catarata morganiana densa presenta facodonesis marcada y diálisis zonular de 150 grados durante la cirugía. Ante la imposibilidad de sostener el saco capsular ni siquiera con anillo CTR, ¿cuáles son los pasos quirúrgicos clave de la técnica de fijación escleral sin suturas con doble aguja de Yamane (agujas 30G TSK, túneles a 2 mm del limbo y bridas térmicas)?'
    },
    {
      title: 'Toxoplasmosis Ocular («Faro en la Niebla»)',
      area: 'uveitis',
      text: 'Joven de 28 años con foco blanco-amarillento de retinocoroiditis activo adyacente a cicatriz pigmentada con vitritis densa ("faro en la niebla"). ¿Terapia clásica cuádruple, por qué NUNCA dar corticoides solos y cuándo tratar?'
    },
    {
      title: 'Uveítis Anterior Aguda HLA-B27 e Hipopión Fibrinoide',
      area: 'uveitis',
      text: 'Varón de 29 años con ojo rojo muy doloroso, hipopión móvil de 1.5 mm, fibrina en cámara anterior y lumbalgia matutina que mejora con el ejercicio. ¿Cuál es el protocolo de inducción tópica inmediata, por qué es mandatoria la cicloplejía y qué espondiloartropatía sospechar?'
    },
    {
      title: 'Uveítis en AIJ Pediátrica: Ojo Blanco y Silencioso',
      area: 'uveitis',
      text: 'Niña de 4 años con oligoartritis y ANA (+). A la biomicroscopía: Tyndall 2+ y sinequias en ojo completamente blanco sin dolor. ¿Cuál es el calendario de screening según AAP/ACR, qué tríada tardía evitar y cuál es la terapia biológica de primera línea (Ensayo SYCAMORE)?'
    },
    {
      title: 'Uveítis Intermedia, Pars Planitis y Esclerosis Múltiple',
      area: 'uveitis',
      text: 'Mujer de 25 años con snowballs vítreos inferiores, bancos de nieve (snowbanks) y edema macular quístico en OCT. ¿Por qué es obligatoria la RM cerebral con gadolinio y por qué están formalmente contraindicados los anti-TNF si hay desmielinización?'
    },
    {
      title: 'Sífilis Ocular y Neurosífilis: Protocolo Hospitalario',
      area: 'uveitis',
      text: 'Paciente con coriorretinitis placoide (ASPPC), FTA-ABS (+) y VDRL 1:64. ¿Por qué está terminantemente contraindicada la penicilina benzatínica intramuscular, cuál es la dosis exacta de Penicilina G Sódica IV hospitalaria y cómo prevenir la reacción de Jarisch-Herxheimer?'
    },
    {
      title: 'Tuberculosis Ocular y Toxicidad por Etambutol',
      area: 'uveitis',
      text: 'Paciente con periflebitis retiniana oclusiva y tuberculomas coroideos con QuantiFERON (+). Inicia esquema RIPE y al mes confunde el rojo y el verde. ¿Cuál es la sospecha tóxica, qué examen solicitar y cuál es la conducta inmediata con el Etambutol?'
    },
    {
      title: 'VKH vs Oftalmía Simpática: Desprendimientos Serosos y Ventana Quirúrgica',
      area: 'uveitis',
      text: 'Paciente con traumatismo penetrante en ojo izquierdo hace 3 semanas y pérdida visual en ojo derecho con desprendimientos de retina serosos multifocales. ¿Por qué la enucleación del ojo traumatizado ya no cura al ojo derecho y cuál es la ventana profiláctica de los 14 días?'
    },
    {
      title: 'Leucocoria Pediátrica: Algoritmo de Retinoblastoma y Contraindicación de Biopsia',
      area: 'pediatria',
      text: 'Lactante de 18 meses con reflejo pupilar blanco (leucocoria) en fotografías con flash. ¿Sospecha maligna principal, estudios de imagen (TAC/RM/ecografía con calcificaciones) y por qué está TERMINANTEMENTE CONTRAINDICADA la punción / biopsia intraocular por riesgo de diseminación extraocular?'
    },
    {
      title: 'Exotropia Intermitente Infantil: Escala de Newcastle y Scobee',
      area: 'pediatria',
      text: 'Niña de 4 años que cierra un ojo al salir al sol y desvía ojo derecho hacia afuera el 60% del tiempo de vigilia. ¿Cómo cuantificar el control con la Escala de Control de Newcastle (NCS), para qué sirve la prueba de oclusión monocular de Scobee y cuándo indicar retroinserción bilateral de rectos laterales?'
    },
    {
      title: 'Síndrome de Retracción de Duane Tipo 1 y Cocontracción Anómala',
      area: 'pediatria',
      text: 'Niño de 6 años con limitación marcada de abducción en ojo izquierdo, pero que al mirar en aducción presenta enoftalmos visible con cierre parcial de la hendidura palpebral y tortícolis a la izquierda. ¿Por qué ocurre cocontracción del RM y RL inervado por el III par y por qué está FORMALMENTE PROHIBIDA la resección del recto lateral?'
    },
    {
      title: 'Aniridia Congénita (PAX6): Síndrome WAGR y Tamizaje Renal',
      area: 'pediatria',
      text: 'Recién nacido con ausencia bilateral congénita de iris, hipoplasia foveal y nistagmo sensorial. No hay antecedentes familiares de aniridia. ¿Por qué se debe solicitar estudio genético para microdeleción 11p13 (PAX6-WT1) y por qué es obligatorio el protocolo de ecografía renal cada 3 meses hasta los 8 años de vida?'
    },
    {
      title: 'Obstrucción Congénita Lagrimal (CNLDO): Válvula de Hasner y Sondaje',
      area: 'pediatria',
      text: 'Lactante de 11 meses con epífora constante y reflujo mucopurulento por puntos lagrimales a la compresión del saco en ojo blanco. ¿Por qué la imperforación membranosa de la Válvula de Hasner en el meato inferior es la causa principal, cómo se realiza el masaje de Crigler y cuál es la técnica del sondaje lagrimal con tope óseo (hard stop)?'
    },
    {
      title: 'Celulitis Orbitaria Postseptal vs Preseptal: Criterios de Chandler',
      area: 'oculoplastica',
      text: 'Niño de 7 años con edema y eritema palpebral severo tras cuadro de sinusitis etmoidal. ¿Qué signos cardinales (proptosis, quemosis, oftalmoplejía dolorosa y DPAR) diferencian con certeza la infección postseptal de la preseptal, qué estadio de Chandler indica absceso subperióstico y cuál es el protocolo de TAC y antibióticos intravenosos?'
    },
    {
      title: 'Entropión Involutivo Senil y Tira Tarsal Lateral (LTS)',
      area: 'oculoplastica',
      text: 'Anciano de 81 años con ojo rojo, dolor y pestañas inferiores que rozan la córnea provocando úlcera epitelial. Los tests de Snap-Back y Distraction muestran laxitud horizontal marcada con cabalgamiento del orbicular pretarsal. ¿Cuáles son los pasos de la técnica de Tira Tarsal Lateral (LTS) anclada al tubérculo de Whitnall combinada con reinserción de retractores de Jones?'
    },
    {
      title: 'Patología Lagrimal del Adulto: Actinomyces y DCR',
      area: 'oculoplastica',
      text: 'Mujer de 68 años con epífora crónica y canaliculitis con "punto lagrimal en volcán" (pouty punctum) del que brotan dacriolitos y gránulos de azufre amarillentos. ¿Por qué Actinomyces israelii exige canaliculotomía con curetaje y cómo se ejecuta una Dacriocistorrinostomía (DCR) creando una osteotomía hacia el meato medio?'
    },
    {
      title: 'Carcinoma de Glándulas Sebáceas de Meibomio (SGC) en Párpado Superior',
      area: 'oculoplastica',
      text: 'Paciente de 72 años con lesión amarillenta indurada en tarso superior catalogada erróneamente de "chalazión recurrente" tras dos cirugías previas, con madarosis localizada. ¿Por qué es mandatorio enviar tejido en fresco para tinción Oil Red O, por qué realizar biopsias conjuntivales en mapa para pesquisar diseminación pagetoide y cómo planificar la resección con márgenes de 5 mm?'
    },
    {
      title: 'Rabdomiosarcoma Orbitario Pediátrico: Proptosis Fulminante',
      area: 'oculoplastica',
      text: 'Niño de 6 años debuta con proptosis unilateral en cuadrante superonasal rápidamente progresiva en 10 días simulando una infección orbitaria. La neuroimagen muestra masa extracónica bien delimitada con erosión ósea incipiente. ¿Por qué es el tumor mesenquimal orbitario maligno primario más común en niños, marcadores inmunohistoquímicos (desmina/miogenina) y por qué el protocolo IRSG emplea quimioterapia VAC y radioterapia en lugar de exenteración?'
    },
    {
      title: 'Criterios de Seguridad en LASIK (RSB y PTA)',
      area: 'refraccion',
      text: 'Paciente de 25 años con miopía de -7.50 D y paquimetría de 505 micras que solicita LASIK. ¿Cómo calcular el lecho estromal residual (RSB) y el PTA de Santhiago para evitar ectasia corneal iatrogénica?'
    },
    // --- ONCOLOGÍA OCULAR (7 TEMAS FUNDAMENTALES DE ALTA RENTABILIDAD) ---
    {
      title: 'Melanoma Uveal / Coroideo: Ensayo COMS y Criterios TFSOM-UHHD',
      area: 'oncologia',
      text: 'Varón de 58 años con masa sobreelevada coroidea temporal de 3.5 mm de grosor ecográfico, líquido subretiniano y pigmento naranja en SD-OCT. La ecografía en modo A muestra reflectividad acústica interna baja (35%) con ángulo kappa pronunciado y vaciamiento acústico. Según el ensayo COMS, ¿cuál es el tratamiento de elección para conservar el globo ocular y qué metástasis sistémica buscar de inmediato?'
    },
    {
      title: 'Retinoblastoma Infantil y Procedimientos Contraindicados',
      area: 'oncologia',
      text: 'Lactante de 14 meses con leucocoria en ojo izquierdo y masa nodular con calcificaciones focales ecográficas densas. ¿Por qué está FORMALMENTE CONTRAINDICADA la punción o biopsia (PAAF), cuál es la base genética en 13q14 (RB1) y cuál es el manejo en tumores Grupo E?'
    },
    {
      title: 'Tumores Metastásicos Oculares (Mama y Pulmón): Modo A y Desprendimiento Plano',
      area: 'oncologia',
      text: 'Mujer de 54 años con antecedente de carcinoma ductal infiltrante de mama consulta por pérdida visual y metamorfopsia; el fondo de ojo revela dos masas coroideas amelanóticas amarillentas con desprendimiento seroso extenso. En ecografía modo A la reflectividad interna es ALTA (80%). ¿Por qué es el cáncer intraocular más frecuente en adultos, cómo se diferencia del melanoma y cuál es el rol de la radioterapia externa fraccionada?'
    },
    {
      title: 'Neoplasia Escamosa de Superficie Ocular (OSSN) y Técnica de Shields',
      area: 'oncologia',
      text: 'Varón de 64 años con lesión gelatinosa en limbo nasal con vasos en horquilla y leucoplaquia que invade 2 mm de córnea periférica. ¿Cuáles son los pasos quirúrgicos obligatorios según la técnica "no-touch" de Shields (margen de 4 mm, alcoholización y crioterapia) y qué esquemas de quimioterapia tópica con Interferón alfa-2b o 5-FU están indicados?'
    },
    {
      title: 'Tumores Orbitarios: Adenoma Pleomorfo vs Carcinoma de Glándula Lagrimal',
      area: 'oncologia',
      text: 'Paciente con masa palpable en fosa lagrimal. ¿Qué datos clínicos (dolor vs indoloro) y radiológicos en TC (remodelación lisa vs osteólisis destructiva apolillada) diferencian de forma vital al Adenoma Pleomorfo benigno del Carcinoma Adenoide Quístico, y por qué está PROHIBIDO biopsiar el adenoma pleomorfo?'
    },
    {
      title: 'Tumores Palpebrales: Carcinoma Basocelular vs Carcinoma Sebáceo de Meibomio',
      area: 'oncologia',
      text: 'Mujer de 70 años con chalazión en párpado superior que ha recidivado 3 veces tras legrado, con madarosis localizada y eritema conjuntival; otro paciente presenta un nódulo perlado con telangiectasias en canto interno. ¿Por qué el carcinoma sebáceo exige biopsias en mapa conjuntivales para detectar diseminación pagetoide y cuándo usar cirugía micrográfica de Mohs?'
    },
    {
      title: 'Diagnóstico Avanzado y Genética Molecular: BAP1, GEP Clase 2 y UBM',
      area: 'oncologia',
      text: 'A un paciente operado de melanoma coroideo se le realiza biopsia con aguja fina (FNAB) transescleral. El perfil molecular informa Monosomía del cromosoma 3, pérdida de BAP1 (3p21) y perfil DecisionDx Clase 2. ¿Qué riesgo de metástasis hepática a 5 años predice este perfil, cuál es el protocolo de vigilancia con RM hepática y cuándo utilizar UBM de 50 MHz para tumores de iris y cuerpo ciliar?'
    }
  ];

  // Clinical symptom/keyword chips
  const CLINICAL_SYMPTOM_CHIPS = [
    'Dolor desproporcionado',
    'Mancha rojo cereza',
    'Isquemia límbica (blanqueamiento)',
    'Línea de Khodadoust (Rechazo)',
    'Puntos de Horner-Trantas (VKC)',
    'Guttas y TCF4 (Fuchs)',
    'Anillo de óxido (Rust Ring)',
    'Signo de Hutchinson (HZO)',
    'Infiltrados perineurales',
    'Osmolaridad TFOS >=308',
    'Hipema y Sickle cell',
    'PIO >45 mmHg con midriasis',
    'Hemorragia de Drance',
    'Buftalmos y Megalocórnea',
    'Estrías de Haab',
    'SLT LiGHT (1ª línea)',
    'Efecto suelo CFNR 50 um',
    'Escalón nasal de Rønne',
    'PEX y Fragilidad Zonular',
    'Huso de Krukenberg',
    'Ampolla con Seidel / Blebitis',
    'Válvula de Ahmed vs Baerveldt',
    'Signo de Shafer (polvo de tabaco)',
    'Claudicación mandibular',
    'Midriasis + Parálisis III par',
    'Hipopion postoperatorio',
    'Rotura capsular posterior',
    'Leucocoria en lactante',
    'TFSOM-UHHD (Melanoma)',
    'Monosomía 3 y BAP1',
    'Modo A >60% (Metástasis)',
    'Adenoma Pleomorfo (No Biopsiar)',
    'Proptosis y oftalmoplejía',
    'Faro en la niebla (Toxoplasma)',
    'PTA >= 40% y RSB < 300 um',
    'Biopsias en mapa y Oil Red O',
    'Reversión con Apraclonidina',
    'Test del Hielo (Miastenia)',
    'LHON (m.11778G>A)',
    'Cocontracción y Duane',
    'WAGR y Wilms (11p13)',
    'Válvula de Hasner (Crigler)',
    'Tira Tarsal Lateral (LTS)',
    'Punto en volcán y Actinomyces',
    'Rabdomiosarcoma (Desmina/VAC)'
  ];

  const handleAsk = async (customPrompt?: string) => {
    const textToSubmit = customPrompt || questionText;
    if (!textToSubmit.trim()) return;

    setIsLoading(true);
    setResult(null);
    setMatchedDossier(null);
    setSavedSuccess(false);

    try {
      const response = await askResidentCaseAPI(
        textToSubmit,
        subspecialty,
        residencyYear,
        focusArea
      );
      setResult(response.data);
      setResultSource(response.source);
      if (response.matchedDossier) {
        setMatchedDossier(response.matchedDossier);
      }
    } catch (err) {
      console.error('Error resolving clinical inquiry:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveToBank = () => {
    if (!result) return;
    if (onSaveAsCustomQuestion) {
      onSaveAsCustomQuestion({
        id: `custom-${Date.now()}`,
        subspecialtyId: (subspecialty as SubspecialtyId) || 'cornea',
        topic: questionText.slice(0, 60) + (questionText.length > 60 ? '...' : ''),
        difficulty: residencyYear as any,
        clinicalVignette: questionText,
        questionText: '¿Cuál es el diagnóstico más probable y la conducta de guardia inmediata?',
        options: [
          `A) ${result.diagnosticSummary}`,
          `B) Tratamiento conservador con observación domiciliaria sin medicación`,
          `C) Indicar corticoides tópicos potentes sin cobertura antimicrobiana`,
          `D) Dilatación pupilar forzada con fenilefrina 10%`
        ],
        correctIndex: 0,
        explanation: result.pathophysiology,
        clinicalApplication: `${result.clinicalApplication.guardia}\n\nTratamiento: ${result.clinicalApplication.tratamiento}`,
        pearl: result.pearlHighYield,
        tags: [subspecialty, 'Consulta Residente'],
        isCustom: true
      });
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  const filteredPresets = selectedCategoryTab === 'all'
    ? CLINICAL_PRESETS
    : CLINICAL_PRESETS.filter((p) => p.area === selectedCategoryTab);

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center space-x-2 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>MOTOR CLÍNICO DE RESOLUCIÓN DE CASOS OFTALMOLÓGICOS</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          Consultas Clínicas de Guardia y Resolución Precisa de Casos
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Alimentado por la base de conocimientos clínicos del <strong>Basic and Clinical Science Course (AAO BCSC)</strong>, <strong>European Glaucoma Society (EGS)</strong> y <strong>ESCRS</strong>. Ingresa cualquier presentación clínica, signo biomicroscópico o dilema terapéutico para obtener una respuesta exacta con conducta paso a paso, dosis farmacológicas y contraindicaciones.
        </p>

        {/* Gemini API Status Banner */}
        {hasApiKey ? (
          <div className="mt-4 flex flex-wrap items-center justify-between p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 text-xs gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-base select-none">🔑</span>
              <span className="font-bold text-emerald-900">Google Gemini API Conectada</span>
              <span className="text-emerald-700">·</span>
              <span className="text-emerald-800">Tus consultas clínicas se procesan en tiempo real con el modelo Gemini 3.8 Flash.</span>
            </div>
            {onOpenApiKeyModal && (
              <button
                type="button"
                onClick={onOpenApiKeyModal}
                className="font-bold underline hover:text-emerald-950 cursor-pointer ml-auto text-emerald-800"
              >
                Gestionar API Key
              </button>
            )}
          </div>
        ) : (
          <div className="mt-4 flex flex-wrap items-center justify-between p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-base select-none">🔑</span>
              <span className="font-bold text-amber-900">¿Quieres respuestas con IA en vivo?</span>
              <span className="text-amber-800">· Puedes conectar tu Gemini API Key gratuita obtenida en Google AI Studio.</span>
            </div>
            {onOpenApiKeyModal && (
              <button
                type="button"
                onClick={onOpenApiKeyModal}
                className="px-3 py-1.5 rounded-lg bg-amber-200 hover:bg-amber-300 font-bold text-amber-950 transition-colors shadow-2xs cursor-pointer ml-auto"
              >
                Configurar API Key 🔑
              </button>
            )}
          </div>
        )}
      </div>

      {/* Preset Scenarios Catalog Box */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-teal-600" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Casos Clínicos de Alta Rentabilidad (Haz clic para cargar y resolver)
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">
            {filteredPresets.length} casos estructurados
          </span>
        </div>

        {/* Filter subspecialty tabs for presets (all 10 modules visible) */}
        <div className="flex flex-wrap items-center gap-1.5 pb-1">
          <button
            onClick={() => setSelectedCategoryTab('all')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-colors ${
              selectedCategoryTab === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            Todos ({CLINICAL_PRESETS.length})
          </button>
          {SUBSPECIALTY_MODULES.map((m) => {
            const count = CLINICAL_PRESETS.filter((p) => p.area === m.id).length;
            const isSelected = selectedCategoryTab === m.id;
            const isOcularOnco = m.id === 'oncologia';
            return (
              <button
                key={m.id}
                onClick={() => setSelectedCategoryTab(m.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? isOcularOnco
                      ? 'bg-rose-700 text-white shadow-xs ring-2 ring-rose-400'
                      : 'bg-teal-600 text-white shadow-xs'
                    : isOcularOnco
                      ? 'bg-rose-50 text-rose-800 border border-rose-300 hover:bg-rose-100 font-bold'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {isOcularOnco && <Sparkles className="w-3 h-3 text-rose-500" />}
                <span>{m.shortName}</span>
                {count > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected
                        ? isOcularOnco ? 'bg-rose-900 text-rose-100' : 'bg-teal-800 text-teal-100'
                        : isOcularOnco ? 'bg-rose-200 text-rose-900' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Preset scenario grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
          {filteredPresets.map((preset, idx) => {
            const isOcularOnco = preset.area === 'oncologia';
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setQuestionText(preset.text);
                  setSubspecialty(preset.area);
                  handleAsk(preset.text);
                }}
                className={`text-left p-3 rounded-lg bg-white border transition-all flex flex-col justify-between group shadow-2xs ${
                  isOcularOnco
                    ? 'border-rose-200 hover:border-rose-500 hover:bg-rose-50/40'
                    : 'border-slate-200 hover:border-teal-500 hover:bg-teal-50/40'
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider block mb-0.5 ${
                      isOcularOnco ? 'text-rose-700' : 'text-teal-700'
                    }`}
                  >
                    {isOcularOnco ? 'ONCOLOGÍA OCULAR' : preset.area.toUpperCase()}
                  </span>
                  <strong className="text-xs font-bold text-slate-900 group-hover:text-teal-900 leading-snug block mb-1">
                    {preset.title}
                  </strong>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {preset.text}
                  </p>
                </div>
                <div
                  className={`mt-2 flex items-center text-[10px] font-bold group-hover:translate-x-0.5 transition-transform ${
                    isOcularOnco ? 'text-rose-600' : 'text-teal-600'
                  }`}
                >
                  <span>Cargar y resolver</span>
                  <ChevronRight className="w-3 h-3 ml-0.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Input Form */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-5">
        {/* Selectors row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Área de Oftalmología
            </label>
            <select
              value={subspecialty}
              onChange={(e) => setSubspecialty(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-lg border border-slate-200 py-2 px-3 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
            >
              {SUBSPECIALTY_MODULES.map((mod) => (
                <option key={mod.id} value={mod.id}>
                  {mod.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Nivel de Formación
            </label>
            <select
              value={residencyYear}
              onChange={(e) => setResidencyYear(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-lg border border-slate-200 py-2 px-3 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
            >
              <option value="R1 - Inicial">R1 (Urgencias, Bases y Guardias)</option>
              <option value="R2/R3 - Intermedio">R2 / R3 (Subespecialidades y Quirófano)</option>
              <option value="R4/Fellow - Avanzado">R4 / Fellow (Cirugía Compleja y Examen EBOD/ICO)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Enfoque Deseado
            </label>
            <select
              value={focusArea}
              onChange={(e) => setFocusArea(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-lg border border-slate-200 py-2 px-3 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
            >
              <option value="Diagnóstico urgente y aplicación en guardia">Conducta de Guardia / Urgencia</option>
              <option value="Farmacología, dosis y vías de administración">Fármacos, Dosis y Vías Exactas</option>
              <option value="Técnica quirúrgica y manejo de complicaciones">Técnica Quirúrgica & Complicaciones</option>
              <option value="Preguntas clave para examen de residencia / ICO">Perlas de Examen ICO / EBOD / Consejo</option>
            </select>
          </div>
        </div>

        {/* Input Textarea with Quick-insert Chips */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Caso Clínico, Síntomas, Signos de Lámpara o Pregunta del Residente
            </label>
            <span className="text-[11px] text-slate-400">
              {questionText.length} caracteres
            </span>
          </div>

          <textarea
            rows={4}
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Ejemplo: Paciente de 24 años usuario de lentes de contacto blandas con dolor ocular severo desproporcionado, ojo rojo y perineuritis radial en lámpara de hendidura tras nadar en un lago. ¿Cuál es el diagnóstico más probable, raspado indicado y tratamiento farmacológico de primera línea?"
            className="w-full text-xs sm:text-sm rounded-xl border border-slate-200 p-3.5 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-900 placeholder:text-slate-400 leading-relaxed font-normal"
          />

          {/* Quick-insert clinical tags */}
          <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-bold text-slate-400 flex items-center mr-1">
              <Tag className="w-3 h-3 mr-1" />
              Términos clave:
            </span>
            {CLINICAL_SYMPTOM_CHIPS.map((chip, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setQuestionText((prev) => (prev ? `${prev} - ${chip}` : chip))}
                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 hover:bg-teal-100 hover:text-teal-900 text-slate-600 transition-colors border border-slate-200/70"
              >
                + {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Form Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              setQuestionText('');
              setResult(null);
              setMatchedDossier(null);
            }}
            className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Limpiar</span>
          </button>

          <button
            type="button"
            disabled={isLoading || !questionText.trim()}
            onClick={() => handleAsk()}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-teal-700/20"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Analizando Caso con Algoritmo Clínico...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Analizar y Resolver con Máxima Precisión</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* HIGHLIGHTED CLINICAL RESULTS SECTION */}
      {result && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-400">
          {/* Top Status Bar with Source Identification */}
          <div className="flex flex-wrap items-center justify-between bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-xs gap-3">
            <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Resolución Clínica de Alta Precisión</span>
              <span className="text-slate-500">·</span>
              <span className="px-2.5 py-1 rounded-md bg-teal-500/20 text-teal-300 font-mono text-xs border border-teal-500/30 inline-flex items-center space-x-1.5">
                {resultSource === 'gemini' ? (
                  <>
                    <span role="img" aria-label="llave">🔑</span>
                    <span>Google Gemini 3.8 Flash (En vivo)</span>
                  </>
                ) : (
                  <span>Protocolo Clínico Curado AAO BCSC</span>
                )}
              </span>
            </div>

            {onSaveAsCustomQuestion && (
              <button
                onClick={handleSaveToBank}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                <BookmarkPlus className="w-3.5 h-3.5" />
                <span>{savedSuccess ? '¡Guardado en Tu Banco!' : 'Guardar en Mi Banco'}</span>
              </button>
            )}
          </div>

          {/* 1. Diagnóstico Principal & Diagnósticos Diferenciales */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
              <Stethoscope className="w-4 h-4" />
              <span>1. Diagnóstico Principal de Certeza</span>
            </div>
            <p className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
              {result.diagnosticSummary}
            </p>

            {/* Differential diagnoses tags if matched */}
            {matchedDossier && matchedDossier.differentialDiagnoses && matchedDossier.differentialDiagnoses.length > 0 && (
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Diagnósticos Diferenciales a Descartar en Lámpara:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {matchedDossier.differentialDiagnoses.map((diff, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      {diff}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 2. Fundamentación Fisiopatológica y Anatómica */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-teal-600" />
              <span>2. Mecanismo Fisiopatológico y Base Anatómica</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal whitespace-pre-line">
              {result.pathophysiology}
            </p>
          </div>

          {/* 3. APLICACIÓN CLÍNICA PRÁCTICA (DESTACADA) */}
          <div className="bg-gradient-to-br from-teal-50 via-emerald-50/40 to-teal-50 rounded-2xl p-6 border-2 border-teal-500 shadow-sm space-y-5">
            <div className="flex items-center space-x-2 text-teal-900">
              <Stethoscope className="w-6 h-6 text-teal-700 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wide">
                  APLICACIÓN CLÍNICA PRÁCTICA (Conducta en el Hospital)
                </h3>
                <p className="text-xs text-teal-700 font-medium">
                  Protocolo de actuación paso a paso para el médico de guardia o consulta
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Guardia / Urgencias */}
              <div className="bg-white rounded-xl p-5 border border-teal-200 shadow-2xs space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-teal-800 uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
                  <span>Conducta Inmediata en Guardia</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-medium">
                  {result.clinicalApplication.guardia}
                </p>
              </div>

              {/* Tratamiento escalonado y dosis */}
              <div className="bg-white rounded-xl p-5 border border-teal-200 shadow-2xs space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  <Pill className="w-4 h-4 text-emerald-600" />
                  <span>Tratamiento Escalonado, Fármacos y Dosis</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-medium">
                  {result.clinicalApplication.tratamiento}
                </p>
              </div>

              {/* Criterios quirúrgicos y derivación */}
              <div className="bg-white rounded-xl p-5 border border-teal-200 shadow-2xs space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-blue-800 uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Criterios de Derivación Urgente y Quirófano</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-medium">
                  {result.clinicalApplication.criteriosDerivacionOQuirurgicos}
                </p>
              </div>

              {/* Errores y contraindicaciones */}
              <div className="bg-white rounded-xl p-5 border border-rose-300 shadow-2xs space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-rose-800 uppercase tracking-wider">
                  <AlertOctagon className="w-4 h-4 text-rose-600" />
                  <span>Contraindicaciones Absolutas & Errores a Evitar</span>
                </div>
                <p className="text-xs sm:text-sm text-rose-950 font-semibold leading-relaxed whitespace-pre-line">
                  {result.clinicalApplication.contraindicaciones}
                </p>
              </div>
            </div>
          </div>

          {/* 4. PERLA DE RESIDENCIA / HIGH YIELD */}
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-300 shadow-xs space-y-1.5">
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Perla de Examen para el Residente (High-Yield Pearl)</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-amber-950 leading-relaxed">
              {result.pearlHighYield}
            </p>
          </div>

          {/* 5. Referencias */}
          <div className="text-xs text-slate-500 font-medium flex items-center justify-between px-1">
            <span>Fuente de Información: <strong>{result.keyReferences}</strong></span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-teal-700 hover:text-teal-900 font-bold"
            >
              ↑ Volver arriba para otra consulta
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
