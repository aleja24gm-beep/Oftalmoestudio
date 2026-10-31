import { TopicDeepDive } from '../types/ophthalmology';

export const UVEITIS_TOPICS: TopicDeepDive[] = [
  // =========================================================================
  // 1. CLASIFICACIÓN SUN, PRECIPITADOS QUERÁTICOS Y UVEÍTIS ANTERIOR HLA-B27
  // =========================================================================
  {
    id: 'deep-uveitis-clasificacion-sun-anterior-aguda-hla-b27',
    title: 'Clasificación SUN, Precipitados Queráticos y Uveítis Anterior Aguda HLA-B27',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre la estandarización SUN (Standardization of Uveitis Nomenclature), gradación objetiva de células y flare en cámara anterior, tipología de precipitados queráticos (no granulomatosos vs granulomatosos en grasa de carnero), espectro HLA-B27 y espondiloartropatías seronegativas (Espondilitis Anquilosante, Artritis Reactiva, EII, Psoriasis), complicaciones sinequiales y protocolo terapéutico corticoideo intensivo.',
    definitionAndEpidemiology: 'La Uveítis Anterior Aguda (UAA) es la forma más prevalente de inflamación intraocular en el mundo (representa entre el 50% y 60% de todas las uveítis en centros de tercer nivel y >70% en atención primaria). La incidencia anual oscila entre 15 y 20 casos por 100,000 habitantes. El antígeno leucocitario humano HLA-B27 (molécula MHC de Clase I) está presente en el 50-60% de las UAA idiopáticas y en hasta el 90% de los pacientes con espondilitis anquilosante asociada.',
    anatomyAndPathophysiology: '1. Barrera Hematoacuosa y Segmento Anterior:\n   • El endotelio vascular fenestrado del estroma iridiano y las uniones estrechas (zonula occludens) del epitelio ciliar no pigmentado conforman la barrera hematoacuosa hemato-ocular anterior.\n   • Su disrupción inflamatoria permite el escape masivo de proteínas plasmáticas (flare medido por biomicroscopía o fotometría láser) y diapédesis leucocitaria hacia el humor acuoso (células Tyndall).\n2. Mecanismo Fisiopatológico de HLA-B27:\n   • Plegamiento anómalo de cadenas pesadas de HLA-B27 con formación de homodímeros que disparan la respuesta de estrés del retículo endoplásmico (UPR - Unfolded Protein Response) e inducen la vía de interleucinas IL-23/IL-17.\n   • Teoría del péptido artritogénico: Reactividad cruzada entre péptidos bacterianos entéricos (Klebsiella, Yersinia, Salmonella) y autoantígenos de la úvea anterior (mimetismo molecular).\n3. Dinámica Sinequial y Bloqueo Pupilar:\n   • La exudación masiva de fibrina coagula sobre el borde pupilar en contacto con la cápsula anterior del cristalino, formando sinequias posteriores.\n   • Si se extienden 360 grados (seclusión pupilar), se interrumpe el flujo de humor acuoso de cámara posterior a anterior -> abombamiento hacia adelante del iris periférico (Iris Bombé) -> cierre angular agudo secundario con picos de PIO devastadores.',
    clinicalExamination: {
      biomicroscopy: 'Inyección ciliar periquerática violácea ("ciliary flush"), fotofobia dolorosa intensa con espasmo ciliar, miosis reactiva. Precipitados queráticos (PK) endoteliales no granulomatosos: pequeños, blanquecinos y finos distribuidos por corrientes térmicas de convección en el tercio inferior corneal (Triángulo de Arlt). Celularidad en cámara anterior (Tyndall) de 2+ a 4+ con fibrina abundante y ocasional hipopión estéril con nivel horizontal.',
      fundus: 'Segmento posterior normal en UAA pura. Es mandatorio dilatar y explorar minuciosamente la periferia y la mácula para descartar "spill-over" de vitritis anterior, papilitis o vasculitis que reclasificarían el cuadro como panuveítis.',
      specialSigns: '• Sinequias posteriores en "hoja de trébol" o pupila irregular no circular.\n• Nódulos iridianos: Nódulos de Koeppe (en el borde del esfínter pupilar) y de Busacca (en la superficie estromal del iris, típicos de uveítis granulomatosas).\n• Fenómeno de heterocromía de iris y pérdida de criptas en Uveítis de Fuchs (sin sinequias).'
    },
    diagnosticWorkup: [
      {
        test: 'Graduación de Celularidad y Flare en Cámara Anterior según Consenso SUN',
        findings: 'Exploración con haz de hendidura de 1 mm x 1 mm a máxima intensidad luminosa y magnificación de 16x:\n- Grado 0: <1 célula por campo.\n- Grado 0.5+: 1 a 5 células.\n- Grado 1+: 6 a 15 células.\n- Grado 2+: 16 a 25 células.\n- Grado 3+: 26 a 50 células.\n- Grado 4+: >50 células o presencia de hipopión denso.\nFlare: 0 (ausente), 1+ (débil), 2+ (moderado, iris y cristalino nítidos), 3+ (marcado, detalles borrosos), 4+ (coagulación fibrinoide plástica en cámara anterior).'
      },
      {
        test: 'Tipificación Genética HLA-B27 y Evaluación Reumatológica',
        findings: 'Positividad para alelo HLA-B27. En pacientes con dolor lumbar inflamatorio matutino (criterios ASAS: rigidez matutina >30 min, mejora con ejercicio y no con reposo, edad <45 años): Radiografía simple o Resonancia Magnética de articulaciones sacroilíacas demostrando sacroileítis activa (edema óseo subcondral en secuencias STIR).'
      },
      {
        test: 'Screening Obligatorio de Enfermedades Infecciosas Simuladoras',
        findings: 'VDRL / RPR y FTA-ABS o anticuerpos treponémicos IgG/IgM (descartar sífilis ocular, que puede mimetizar cualquier patrón de UAA), PPD o QuantiFERON-TB Gold (descartar tuberculosis antes de inmunosupresión sistémica).'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Síndrome de Uveítis de Fuchs (Ciclitis Heterocrómica de Fuchs)',
        distinction: 'Típicamente unilateral, ojo blanco y asintomático sin ciliary flush, precipitados queráticos estrellados difusos en TODO el endotelio corneal, ausencia absoluta de sinequias posteriores, atrofia del estroma iridiano con heterocromía, y desarrollo precoz de catarata subcapsular y glaucoma.'
      },
      {
        condition: 'Crisis Glaucomatociclítica (Síndrome de Posner-Schlossman)',
        distinction: 'Episodios recurrentes unilaterales de elevación masiva de la PIO (40-60 mmHg) con inflamación anterior mínima (escasos PK finos no granulomatosos en endotelio central, celularidad +0.5 o +1), edema corneal microquístico e hiperemia conjuntival leve; ángulo iridocorneal completamente abierto en gonioscopía.'
      },
      {
        condition: 'Endoftalmitis Infecciosa Aguda Posquirúrgica o Endógena',
        distinction: 'Antecedente de cirugía intraocular reciente o sepsis bacteriana sistémica, vitritis densa rápidamente progresiva, edema palpebral severo y dolor desproporcionado.'
      }
    ],
    steppedManagement: {
      medical: 'Fase de Inducción Intensiva:\n1) Corticoterapia Tópica de Alta Potencia: Acetato de Prednisolona al 1% o Dexametasona 0.1% cada 1 a 2 horas durante el día en las primeras 48 a 72 horas (evitar formulaciones en fosfato sódico por menor penetración corneal estromal). En casos con fibrina densa o hipopión: 1 gota cada 30-60 minutos las primeras 6 horas.\n2) Agente Ciclopléjico / Midriático de Vida Media Intermedia: Ciclopentolato al 1% cada 8 horas o Bromhidrato de Homatropina al 2% (o Atropina 1% en cuadros muy exudativos):\n   - Rompe y previene sinequias posteriores al mantener la pupila en movimiento dinámico.\n   - Alivia el espasmo doloroso del músculo ciliar y del esfínter pupilar.\n   - Estabiliza la barrera hematoacuosa reduciendo la permeabilidad vascular.\n\nFase de Consolidación y Descenso Escalonado:\n• Reducción gradual del corticoide tópico a lo largo de 4 a 6 semanas (ej: cada 2h -> cada 4h -> 4 veces/día -> 3 veces/día -> 2 veces/día -> 1 vez/día). Jamás suspender de forma abrupta por riesgo de rebote inflamatorio severo.\n• Si hay hipertensión ocular secundaria a trabeculitis uveítica: Añadir hipotensores tópicos no prostaglandínicos (Betabloqueantes, Alfa-2 agonistas o Inhibidores de la anhidrasa carbónica tópicos u orales). Contraindicación relativa de prostaglandinas (Latanoprost) por riesgo de incrementar la inflamación y precipitar edema macular cistoide.\n\nFase Inmunomoduladora de Mantenimiento:\n• Si recurrencias frecuentes (>3-4 brotes al año), compromiso bilateral o dependencia de esteroides: Derivación a Reumatología para inicio de inhibidores del TNF-α (Adalimumab, Infliximab) o Sulfasalazina / Metotrexato.',
      surgical: 'Manejo de Complicaciones Quirúrgicas:\n• Iridotomía Periférica con Láser Nd:YAG o Quirúrgica: Indicada de urgencia ante seclusión pupilar de 360 grados con iris bombé e hipertensión ocular aguda para restablecer la comunicación entre cámaras posterior y anterior.\n• Sinequiólisis quirúrgica meticulosa durante facoemulsificación en pacientes con sinequias posteriores extensas (uso de retractores de iris de titanio o anillo de Malyugin).\n• Cirugía de catarata diferida: Operar únicamente cuando el ojo haya permanecido en remisión inflamatoria absoluta (Tyndall 0 células) durante un mínimo de 3 meses bajo profilaxis esteroidea periquirúrgica.'
    },
    clinicalApplicationPractical: 'Conducta Práctica en Guardia: Ante todo ojo rojo doloroso con fotofobia, NUNCA prescribir colirios con antibiótico-corticoide sin antes realizar examen biomicroscópico con lámpara de hendidura y fluoresceína; descartar primero queratitis herpética dendrítica (donde el corticoide provocaría una úlcera geográfica masiva).\\n\\nSi se aprecian sinequias posteriores precoces en la guardia: Instilar inmediatamente un colirio midriático potente en consulta (Fenilefrina 10% + Ciclopentolato 1% o Tropicamida) bajo supervisión médica para intentar romper las adherencias antes de que se vuelvan fibróticas permanentes.\\n\\nTodo paciente con UAA de primer episodio requiere estudio etiológico completo si el cuadro es granulomatoso, bilateral, recurrente o si asocia síntomas sistémicos (dolor articular matutino, aftas bucales o genitales, tos, erupciones cutáneas).',
    highYieldPearl: 'En Uveítis Anterior HLA-B27, el hipopión es característicamente "móvil y rico en fibrina", fluctuando rápidamente de un día a otro. Si el paciente presenta dolor lumbar nocturno que lo despierta y rigidez matutina mayor a 30 minutos, la Espondilitis Anquilosante es la causa sistémica número uno.',
    keyDrugs: [
      {
        name: 'Acetato de Prednisolona 1% (Pred Forte)',
        dose: '1 gota cada 1 a 2 horas durante la fase aguda (primeros 3-5 días); descenso escalonado en 4-6 semanas según cellularidad SUN.',
        warning: 'Suspensiones: agitar vigorosamente antes de instilar para evitar dosificación errática. Vigilar elevación de PIO por respuesta esteroidea (steroid-responder) tras 2-3 semanas de uso.'
      },
      {
        name: 'Ciclopentolato 1% (Ciclopléjico)',
        dose: '1 gota cada 8 a 12 horas mientras persista celularidad activa y riesgo de sinequias.',
        warning: 'Causa visión borrosa transitoria por parálisis de acomodación y midriasis. Contraindicado en ojos con ángulos estrechos sin iridotomía previa.'
      },
      {
        name: 'Adalimumab (Humira)',
        dose: 'Dosis de carga 80 mg SC, seguida de 40 mg SC cada 2 semanas.',
        warning: 'Anticuerpo monoclonal humanizado anti-TNF-α. Cribado estricto previo para tuberculosis latente (IGRA/PPD y Rx tórax) y desmielinización (esclerosis múltiple contraindica anti-TNF).'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Morfología de Precipitados Queráticos (PK)',
        category: 'Asociación Patognomónica',
        description: 'PK Granulomatosos ("en grasa de carnero" o mutton-fat): grandes, lardáceos, blanco-amarillentos, compuestos por macrófagos y células epitelioides -> Sarcoidosis, VKH, Tuberculosis, Sífilis. PK No Granulomatosos: pequeños, puntiformes, compuestos por linfocitos -> HLA-B27, Fuchs, Posner-Schlossman.',
        trapToAvoid: 'Clasificar una uveítis como no granulomatosa cuando presenta depósitos lardáceos gruesos en endotelio corneal.'
      },
      {
        title: 'Presión Intraocular en Uveítis Anterior',
        category: 'Trampa de Tribunal',
        description: 'En fases iniciales de UAA, la PIO suele estar BAJA (hipotonía) por hiposecreción del epitelio ciliar inflamado. Si la PIO está ELEVADA desde el inicio, sospechar etiología viral herpética (HSV/VZV/CMV), Posner-Schlossman, Fuchs o trabeculitis corticoesteroidea.',
        trapToAvoid: 'Asumir que toda uveítis anterior cursa con hipertensión ocular.'
      },
      {
        title: 'Corticoides Tópicos: Acetato vs Fosfato',
        category: 'Pregunta Clásica',
        description: 'El acetato de prednisolona es bifásico y lipofílico, atravesando con máxima biodisponibilidad el epitelio corneal intacto para alcanzar concentraciones terapéuticas en humor acuoso; el fosfato de prednisolona es hidrofílico y tiene una penetración intraocular muy inferior.',
        trapToAvoid: 'Prescribir fosfato de dexametasona o fluorometolona para tratar una uveítis anterior moderada o severa con fibrina.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudio SUN Working Group (Am J Ophthalmol 2005 / 2021): Estableció los estándares internacionales de nomenclatura, definición de actividad (inactiva, empeoramiento, mejoría, remisión >3 meses sin tratamiento) y clasificación anatómica.',
      'Ensayo RAPID-axSpA: Demostró que el tratamiento con agentes anti-TNF-α (como Certolizumab pegol o Adalimumab) en pacientes con espondiloartritis axial reduce la tasa de brotes recurrentes de uveítis anterior en más de un 50% comparado con placebo.'
    ],
    landmarkTrials: [
      {
        name: 'Standardization of Uveitis Nomenclature (SUN) Working Group Criteria',
        year: '2005',
        conclusion: 'Definió la graduación universal cuantitativa de células en CA (campos de 1x1 mm) y flare, categorizó el curso clínico (agudo, recurrente, crónico) y sentó las bases metodológicas de la investigación en uveítis.',
        fellowshipRelevance: 'Criterio de referencia internacional mandatorio para cualquier ensayo clínico y reporte de casos en uveítis.'
      }
    ],
    histopathologyAndGenetics: 'Genética: Asociación primaria con HLA-B*2705 (poblaciones caucásicas) y HLA-B*2704 (poblaciones asiáticas), así como variantes en genes de aminopeptidasas del retículo endoplásmico (ERAP1 y ERAP2) y el receptor de IL-23 (IL23R). Histopatología: Infiltrado inflamatorio en estroma del iris compuesto fundamentalmente por neutrófilos en las primeras 24-48 horas, seguidos por linfocitos T CD4+ y plasmocitos con edema vascular y depósitos de fibrina endotelial.',
    surgicalPearls: [
      'Al realizar facoemulsificación en ojos con antecedentes de uveítis HLA-B27: Romper sinequias con espátula de ciclodialisis o viscodisección hidrostática; aplicar un viscoelástico cohesivo de alta viscosidad (Healon GV) para expandir la pupila mecánicamente antes de la capsulorrexis.',
      'Selección de LIO: Implantar preferentemente LIO hidrofóbico acrílico de 1 pieza o 3 piezas dentro del saco capsular íntegro; NUNCA colocar lentes de silicona ni fijados al iris por tendencia masiva a la opacificación y formación de membranas inflamatorias fibróticas periprotésicas.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un varón de 28 años consulta por dolor ocular derecho intenso, fotofobia de 48 horas y disminución visual a 20/60. A la biomicroscopía se evidencia inyección ciliar 3+, córnea transparente con precipitados queráticos no granulomatosos en tercio inferior, celularidad en cámara anterior de 4+ con un nivel de hipopión de 1.5 mm y sinequias posteriores tempranas de 90°. La PIO es de 11 mmHg y el fondo de ojo dilatado es normal. Niega cirugías previas ni traumatismos. Refiere dolor en glúteos de predominio matutino desde hace 1 año. ¿Cuál es el diagnóstico de sospecha, qué estudios complementarios solicita y cuál es el régimen de ataque inmediato en consulta?',
        answer: '1) Diagnóstico de Sospecha:\n   - Uveítis Anterior Aguda No Granulomatosa con Hipopión en ojo derecho, asociada con alta probabilidad a Espondiloartropatía seronegativa (Espondilitis Anquilosante) mediada por HLA-B27.\n2) Régimen Terapéutico Inmediato en Consulta:\n   - Instilar inmediatamente colirio ciclopléjico-midriático: Ciclopentolato 1% asociado a Fenilefrina 10% en consulta para romper las sinequias posteriores precoces y calmar el espasmo ciliar.\n   - Corticoterapia Tópica Intensiva: Acetato de Prednisolona 1% a razón de 1 gota cada hora durante el día y pomada nocturna, reduciendo gradualmente según la celularidad SUN en controles a las 48-72h.\n   - Mantener Ciclopentolato 1% cada 8 horas.\n3) Estudios Complementarios:\n   - Tipificación genética HLA-B27.\n   - Radiografía y Resonancia Magnética de Articulaciones Sacroilíacas (para documentar sacroileítis activa según criterios ASAS).\n   - Reactantes de fase aguda: PCR y VSG.\n   - Screening infeccioso obligatorio: Serología treponémica (FTA-ABS / VDRL) y PPD / QuantiFERON-TB Gold para descartar sífilis y tuberculosis latente.',
        trap: 'Confundir el hipopión estéril de la uveítis HLA-B27 con una endoftalmitis infecciosa y puncionar la cámara anterior para antibióticos, o demorar la midriasis permitiendo una seclusión pupilar permanente con iris bombé.'
      }
    ]
  },

  // =========================================================================
  // 2. UVEÍTIS EN ARTRITIS IDIOPÁTICA JUVENIL (AIJ) Y UVEÍTIS PEDIÁTRICA
  // =========================================================================
  {
    id: 'deep-uveitis-artritis-idiopatica-juvenil-pediatrica',
    title: 'Uveítis en Artritis Idiopática Juvenil (AIJ) y Uveítis Pediátrica Silenciosa',
    subspecialtyId: 'uveitis',
    summary: 'Monografía completa sobre la principal causa de uveítis en la infancia: Uveítis anterior crónica asociada a AIJ (especialmente subtipo oligoarticular ANA positivo), naturaleza asintomática "ojo blanco silencioso", complicaciones graves irreversibles (queratopatía en banda, catarata complicada, glaucoma secundario, edema macular quístico), protocolos estrictos de screening de la AAP/ACR y terapia biológica anti-TNF (Adalimumab - Ensayo SYCAMORE).',
    definitionAndEpidemiology: 'La Artritis Idiopática Juvenil (AIJ) es la enfermedad reumática sistémica más frecuente en la infancia. La uveítis se presenta en el 10% al 20% de todos los niños con AIJ, con el riesgo máximo concentrado en niñas pequeñas (<6 años) con artritis oligoarticular (≤4 articulaciones) y anticuerpos antinucleares (ANA) positivos, en quienes la incidencia de uveítis alcanza hasta el 30%.',
    anatomyAndPathophysiology: '1. Desregulación Autoinmune Crónica de la Úvea Anterior:\n   • Proceso autoinmune mediado por linfocitos T helper (Th1 y Th17) contra antígenos de la barrera hematoacuosa iridociliar.\n   • A diferencia de las formas del adulto, cursa sin inyección ciliar ni dolor debido a la adaptación hemodinámica lenta del lecho vascular ocular infantil, convirtiéndola en una enfermedad traicioneramente asintomática ("ojo blanco y silencioso").\n2. Fisiopatología de las Complicaciones Clásicas:\n   • Queratopatía en banda: Depósitos de cristales de hidroxiapatita cálcica en la membrana de Bowman y estroma anterior secundario a la alcalosis local por evaporación lagrimal e inflamación crónica persistente.\n   • Sinequias posteriores fibróticas de 360 grados y membranas pupilares oclusivas.\n   • Catarata subcapsular posterior complicada secundaria a citoquinas inflamatorias y toxicidad corticoidea acumulada.\n   • Glaucoma uveítico de ángulo abierto (por trabeculitis y depósito de detritos) o de ángulo cerrado (por seclusión pupilar o sinequias anteriores periféricas extensas).\n   • Hipotonía ocular severa y tisis bulbi por atrofia crónica e isquemia del cuerpo ciliar.',
    clinicalExamination: {
      biomicroscopy: 'Ojo completamente blanco y no doloroso. Precipitados queráticos endoteliales no granulomatosos pequeños en triángulo de Arlt, celularidad en cámara anterior variable (desde +0.5 hasta +3 SUN) y flare persistente por daño de barrera de larga data. Depósitos cálcicos en limbo nasal y temporal a nivel de la hendidura palpebral (queratopatía en banda). Sinequias posteriores extensas que distorsionan la pupila.',
      fundus: 'Papila y retina suelen ser normales en fases iniciales; en casos graves o de larga evolución: edema de papila inflamatorio, edema macular quístico (EMQ) y exudados vítreos inferiores.',
      specialSigns: '• Tríada Clásica de AIJ Avanzada no diagnosticada: Queratopatía en banda + Catarata complicada + Glaucoma secundario.\n• Ausencia de hiperemia conjuntival ni ciliar (hallazgo engañoso que retrasa el diagnóstico meses o años si no se hace screening programado).'
    },
    diagnosticWorkup: [
      {
        test: 'Tamizaje Protocolizado de Oftalmología según la Academia Americana de Pediatría (AAP) y ACR',
        findings: 'Frecuencia de biomicroscopía con lámpara de hendidura:\n- Alto Riesgo (Oligoartritis, inicio <6 años, ANA positivo): Evaluación cada 3 MESES durante los primeros 4 años desde el diagnóstico de la artritis.\n- Riesgo Moderado (Poliartritis ANA positivo o inicio >6 años): Evaluación cada 6 meses.\n- Bajo Riesgo (Artritis sistémica de Still): Evaluación cada 12 meses.'
      },
      {
        test: 'Perfil Inmunológico Pediátrico',
        findings: 'Anticuerpos Antinucleares (ANA) por inmunofluorescencia indirecta (título positivo típicamente >1:160, principal biomarcador de riesgo de uveítis), Factor Reumatoide (típicamente negativo en oligoartritis), tipificación HLA-DRB1 y HLA-B27.'
      },
      {
        test: 'SD-OCT Macular y Tonometría de Rebote (Icare)',
        findings: 'Detección subclínica de quistes intrarretinianos foveales (EMQ) y control estrecho de PIO con tonometría amigable para niños.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Retinoblastoma Trilateral o Difuso Anterior (Síndrome de Mascarada)',
        distinction: 'Pseudohipopión blanquecino lechoso con células tumorales libres en cámara anterior sin inyección ciliar; la ecografía modo B o RM orbitaria detecta calcificaciones y masa intraocular.'
      },
      {
        condition: 'Uveítis Anterior por Herpes Simple (HSV)',
        distinction: 'Generalmente unilateral, asociada a hipertensión ocular marcada, atrofia sectorial del iris y anestesia/hipoestesia corneal.'
      },
      {
        condition: 'Toxocariasis Ocular Granulomatosa',
        distinction: 'Típicamente unilateral con masa o granuloma inflamatorio en polo posterior o periferia retiniana y bandas vitreorretinianas densas hacia la papila.'
      }
    ],
    steppedManagement: {
      medical: 'Estrategia de Control por Pasos (Consenso SHARE / ACR 2019):\n1) Corticoterapia Tópica Inicial: Acetato de prednisolona 1% o dexametasona tópica (máximo 4-6 gotas/día para inducción). La meta estricta es CERO CÉLULAS en cámara anterior (inactividad completa según SUN).\n• REGLA CARDINAL PEDIÁTRICA: Si el niño requiere >2 gotas/día de corticoide tópico después de 3 meses para mantener la inactividad, se considera fracaso terapéutico o dependencia corticoidea y DEBE iniciarse terapia inmunosupresora ahorradora (evitar cataratas y glaucoma esteroideo irreversible).\n2) Inmunosupresión Convencional de Primera Línea: Metotrexato (MTX) por vía subcutánea a dosis de 10-15 mg/m²/semana (máximo 25 mg/semana) asociado a ácido fólico oral al día siguiente.\n3) Terapia Biológica de Segunda Línea (Ensayo Landmark SYCAMORE): Adalimumab (anti-TNF-α totalmente humanizado) administrado por vía subcutánea cada 2 semanas (20 mg si peso <30 kg; 40 mg si peso ≥30 kg). Demostró superioridad abrumadora frente a placebo reduciendo el tiempo hasta la falla del tratamiento en más del 75%.\n• Si hay refractariedad: Infliximab (5-10 mg/kg cada 4-6 semanas) o Tocilizumab (anti-IL-6).',
      surgical: 'Manejo Quirúrgico Especializado:\n• Queratopatía en banda sintomática que compromete el eje visual: Quelação con EDTA disódico al 1-2% previa desepitelización corneal con raspado suave.\n• Cirugía de catarata en AIJ: Representa uno de los mayores desafíos quirúrgicos pediátricos. Criterio sine qua non: Ojo en estricta quiescencia inflamatoria completa (cero células) durante al menos 3 a 6 meses antes de la intervención. Técnica preferida: Facoemulsificación con capsulorrexis posterior primaria y vitrectomía anterior; implante de LIO en saco muy seleccionado (en niños pequeños se prefiere afaquia temporal y rehabilitación óptica para evitar membranas ciclíticas y atrofia ciliar).\n• Glaucoma refractario: Implante de dispositivo de drenaje (Válvula de Ahmed o Baerveldt); la trabeculectomía convencional fracasa con gran frecuencia en ojos pediátricos uveíticos por hiperfibrosis tenoniana exuberante.'
    },
    clinicalApplicationPractical: 'Conducta en Consulta Pediátrica: NUNCA esperar a que un niño con AIJ se queje de dolor, ojo rojo o baja visual; la uveítis es clínicamente silente hasta fases catastróficas donde ya existe catarata densa o glaucoma avanzado. El cumplimiento del calendario de screening con lámpara de hendidura según AAP/ACR salva la visión del paciente.\\n\\nCuidado con el flare aislado: El flare en cámara anterior puede persistir durante años como reflejo de incompetencia vascular irreversible residual aun cuando no haya células activas (barrera permeable "fuga pasiva"); NUNCA escalar corticoides únicamente por flare si el recuento celular es 0.',
    highYieldPearl: 'Niña pequeña con oligoartritis y ANA positivo = Uveítis anterior crónica asintomática en ojo blanco. Su complicación distintiva más temida es la tríada de Queratopatía en banda + Catarata complicada + Glaucoma.',
    keyDrugs: [
      {
        name: 'Metotrexato (MTX) Pediátrico',
        dose: '10 a 15 mg/m² una vez por semana vía subcutánea (preferida sobre oral por mayor biodisponibilidad y menor intolerancia GI).',
        warning: 'Suplementar siempre con ácido fólico (1-5 mg semanal) 24 horas después de la dosis. Monitorizar hemograma completo y enzimas hepáticas trimestralmente.'
      },
      {
        name: 'Adalimumab Pediátrico (Humira) - Ensayo SYCAMORE',
        dose: '20 mg SC cada 2 semanas (peso <30 kg) o 40 mg SC cada 2 semanas (peso ≥30 kg).',
        warning: 'Fármaco biológico anti-TNF de primera elección probado en ensayo clínico fase 3 SYCAMORE. Descartar tuberculosis latente y reacciones locales en sitio de inyección.'
      },
      {
        name: 'EDTA Disódico al 1.5% - 2%',
        dose: 'Aplicación tópica estéril en quirófano sobre la superficie corneal tras desepitelización mecánica para quelación de calcio.',
        warning: 'Enjuagar profusamente con solución salina balanceada para evitar toxicidad estromal profunda o queratolisis.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Perfil del Paciente de Máximo Riesgo en AIJ',
        category: 'Asociación Patognomónica',
        description: 'Paciente con mayor riesgo de uveítis: Femenina, edad de inicio de la artritis <6 años, forma oligoarticular (≤4 articulaciones) y título de ANA positivo. Requiere biomicroscopía cada 3 meses durante 4 años.',
        trapToAvoid: 'Espaciar el screening a 1 año en una niña con oligoartritis ANA positivo.'
      },
      {
        title: 'La Trampa del "Ojo Blanco"',
        category: 'Trampa de Tribunal',
        description: 'El ojo en la uveítis asociada a AIJ NO se pone rojo ni duele. La consulta inicial suele ocurrir por leucocoria (catarata avanzada), estrabismo sensorial secundario a baja visión o depósitos calcáreos visibles en la córnea.',
        trapToAvoid: 'Dar de alta a un niño de reumatología diciendo que "no tiene uveítis porque los ojos no están rojos".'
      },
      {
        title: 'LIO en Uveítis por AIJ',
        category: 'Pregunta Clásica',
        description: 'El implante de LIO en niños con uveítis por AIJ tiene un riesgo elevado de formación de membranas inflamatorias ciclíticas densas, sinequias y tisis bulbi. En menores de 4-6 años o con inflamación mal controlada, se prefiere la afaquia primaria con lente de contacto.',
        trapToAvoid: 'Indicar implante primario de LIO en un ojo pediátrico con uveítis activa persistente.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo SYCAMORE (Ramanan et al., NEJM 2017): Ensayo clínico aleatorizado multicéntrico que evaluó Adalimumab + Metotrexato vs Placebo + Metotrexato en niños con uveítis activa por AIJ refractaria. Adalimumab redujo el riesgo de falla terapéutica en un 75% (HR 0.25, p<0.0001), motivando la detención temprana del ensayo por superioridad indiscutible.',
      'Ensayo ADJUVITE (Quartier et al., Lancet Diabetes Endocrinol 2018): Validó la eficacia de Adalimumab en uveítis asociada a AIJ refractaria a corticoides y metotrexato.'
    ],
    landmarkTrials: [
      {
        name: 'SYCAMORE Trial (Adalimumab in Juvenile Idiopathic Arthritis-Associated Uveitis)',
        year: '2017',
        conclusion: 'Adalimumab en combinación con metotrexato es altamente eficaz para controlar la inflamación y prevenir la pérdida visual en niños con uveítis asociada a AIJ refractaria a metotrexato solo.',
        fellowshipRelevance: 'Cambió el estándar internacional de cuidado, posicionando a Adalimumab como la terapia biológica de primera línea aprobada por FDA y EMA para uveítis pediátrica.'
      }
    ],
    histopathologyAndGenetics: 'Asociación inmunogenética con alelos HLA-DRB1*08, HLA-DRB1*11 y HLA-DPB1*02. Histopatología: Infiltración linfoplasmocitaria difusa del iris y cuerpo ciliar con predominio de células plasmáticas secretoras de inmunoglobulinas y linfocitos B y T cooperadores; los precipitados queráticos están formados por monocitos y fibrina; la queratopatía en banda consiste en sales de fosfato cálcico precipitadas en la membrana basal epitelial y Bowman.',
    surgicalPearls: [
      'Durante la quelación con EDTA: Debridar el epitelio corneal suavemente con espátula de Beaver; aplicar solución de EDTA al 2% con esponja de celulosa o anillo de pozos durante 3 a 5 minutos frotando con suavidad hasta observar la disolución total del calcio bajo el microscopio; irrigar copiosamente con BSS.',
      'Lensectomía-vitrectomía en AIJ: Abordaje pars plana o limbar anterior con vitreófago de corte alto (≥5000 cpm); realizar capsulectomía posterior amplia (mínimo 5-6 mm) y vitrectomía anterior exhaustiva para eliminar el andamio vítreo donde proliferan las membranas fibróticas secundarias.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una niña de 4 años acude a control de rutina derivado por reumatología pediátrica tras ser diagnosticada hace 1 mes de oligoartritis (rodilla derecha y tobillo izquierdo) con ANA positivo 1:640. La niña no tiene quejas visuales y ambos ojos lucen completamente blancos sin hiperemia. Al examen con lámpara de hendidura en ambos ojos se observa: córnea clara, Tyndall celular de 2+ en cámara anterior con flare 1+ y presencia de 2 sinequias posteriores tempranas en ojo izquierdo; fondo de ojo normal en ambos ojos. ¿Cuál es el diagnóstico de certeza, cuál es el calendario de screening que le correspondía y cuál es el plan terapéutico escalonado?',
        answer: '1) Diagnóstico de Certeza:\n   - Uveítis Anterior Crónica Bilateral en Ojo Blanco asociada a Artritis Idiopática Juvenil (AIJ) oligoarticular ANA positiva.\n2) Calendario de Screening Obligatorio (AAP/ACR):\n   - Por pertenecer al grupo de máximo riesgo (oligoarticular, edad <6 años, ANA positivo), requiere controles biomicroscópicos estrictos cada 3 meses durante al menos 4 años.\n3) Plan Terapéutico Escalonado:\n   - Inducción Tópica Inicial: Acetato de prednisolona al 1% tópico (1 gota cada 2-4 horas) y ciclopentolato al 1% cada 12 horas en ojo izquierdo para revertir las sinequias.\n   - Monitorización estrecha a las 2-4 semanas.\n   - Criterio de Ahorrador Sistémico Precoz: Si en 2 a 3 meses requiere más de 1-2 gotas/día para mantener inactividad (cero células) o desarrolla hipertensión ocular/catarata: Iniciar inmediatamente Metotrexato subcutáneo (15 mg/m²/semana) con ácido fólico.\n   - Si tras 3 meses de Metotrexato persiste celularidad activa: Escalar a terapia biológica con Adalimumab subcutáneo cada 2 semanas (según ensayo SYCAMORE).',
        trap: 'Asumir que por tener "ojos blancos y sin quejas" la paciente no tiene compromiso ocular y espaciar el control a un año, o mantener corticoides tópicos crónicos a dosis altas causando catarata y glaucoma iatrogénico en lugar de iniciar ahorradores sistémicos tempranos.'
      }
    ]
  },

  // =========================================================================
  // 3. UVEÍTIS INTERMEDIA, PARS PLANITIS Y ESCLEROSIS MÚLTIPLE
  // =========================================================================
  {
    id: 'deep-uveitis-intermedia-pars-planitis-esclerosis-multiple',
    title: 'Uveítis Intermedia, Pars Planitis (Snowbanks/Snowballs) y Descarte de Esclerosis Múltiple',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre la inflamación intraocular con predominio vítreo según el SUN: Definición de Uveítis Intermedia vs Pars Planitis (subgrupo idiopático con bancos y bolas de nieve), fisiopatología de los snowbanks inferiores, complicación cardinal (Edema Macular Quístico - EMQ), descarte riguroso de Esclerosis Múltiple (criterios de McDonald) y Sarcoidosis, y algoritmos terapéuticos (esteroides subtenonianos, implantes de dexametasona Ozurdex, crioterapia y vitrectomía).',
    definitionAndEpidemiology: 'La Uveítis Intermedia representa entre el 8% y el 15% de todos los casos de uveítis. Cursa con una distribución bimodal de incidencia con picos en la segunda década (adolescentes/adultos jóvenes) y en la cuarta década de la vida. El término "Pars Planitis" se reserva estrictamente para la forma idiopática de uveítis intermedia que cursa con formación de bancos de nieve (*snowbanks*) en la pars plana y/o condensaciones celulares vítreas inferiores (*snowballs*), en ausencia de una enfermedad infecciosa o autoinmune sistémica subyacente.',
    anatomyAndPathophysiology: '1. Localización Anatómica Central:\n   • El foco primario de la inflamación asienta en el vítreo anterior/intermedio, la pars plana del cuerpo ciliar y la retina periférica anterior a la ora serrata.\n2. Mecánica de los Bancos de Nieve (Snowbanks) y Bolas de Nieve (Snowballs):\n   • Snowballs: Agregados globulares flotantes blanquecinos constituidos por macrófagos activados, linfocitos y detritos colágenos suspendidos en la cavidad vítrea inferior.\n   • Snowbanks: Exudados amarillento-blanquecinos densos en sábana o banco localizados sobre la pars plana y la ora serrata, predominantemente en los cuadrantes inferiores (influencia de la gravedad).\n   • Con el tiempo, los snowbanks organizan un tejido fibroglial y fibrovascular retráctil capaz de provocar neovascularización periférica, hemorragias vítreas recidivantes y desprendimientos de retina combinados traccionales-regmatógenos.\n3. Edema Macular Quístico (EMQ):\n   • Es la complicación responsable del 80% de la pérdida visual moderada a severa en uveítis intermedia.\n   • Las citoquinas inflamatorias vítreas (IL-6, VEGF, TNF-α) rompen la barrera hematorretiniana interna en los capilares foveolares, induciendo acumulación quística de líquido en la capa plexiforme externa (capa de Henle).',
    clinicalExamination: {
      biomicroscopy: 'Cámara anterior generalmente tranquila o con celularidad mínima ("spill-over" leve de 0.5+ a 1+). Ausencia de sinequias posteriores o precipitados endoteliales densos (salvo en sarcoidosis o esclerosis múltiple). Vítreo anterior con turbidez (*haze*) y celularidad franca 2+ a 4+.',
      fundus: 'Exploración con oftalmoscopio binocular indirecto e indentación escleral dinámica del meridiano de las 6 horas: Visualización de los bancos de nieve (*snowbanks*) cubriendo la pars plana inferior. En vítreo dependiente inferior: bolas de nieve redondeadas (*snowballs*). En polo posterior: pérdida de la depresión foveal con engrosamiento y quistes (EMQ), hiperemia o edema de papila inflamatorio y periflebitis retiniana periférica en manguito.',
      specialSigns: '• Bancos de nieve (Snowbanks) en pars plana inferior (patognomónicos de pars planitis si se descartan causas secundarias).\n• Vasculitis periférica oclusiva con neovascularización en la interfase avascular.'
    },
    diagnosticWorkup: [
      {
        test: 'Resonancia Magnética Cerebral y Medular con Gadolinio (Protocolo de Esclerosis Múltiple)',
        findings: 'ESTUDIO OBLIGATORIO en todo adulto joven con uveítis intermedia: Búsqueda de lesiones desmielinizantes periventriculares ovoideas orientadas perpendicularmente a los ventrículos laterales ("dedos de Dawson"), hiperintensas en secuencias FLAIR/T2 y con captación de contraste en fase activa (Criterios de McDonald de diseminación en espacio y tiempo).'
      },
      {
        test: 'Angiografía con Fluoresceína (FAG) de Campo Amplio (Ultra-Widefield FAG)',
        findings: 'Patrón clásico en pétalos de flor foveolar (edema macular cistoide en fases tardías), hiperfluorescencia papilar por capilaritis/fuga papilar, y tinción y fuga marcada a lo largo de las vénulas retinianas periféricas (periflebitis en manguito).'
      },
      {
        test: 'SD-OCT de Mácula',
        findings: 'Cuantificación micrométrica del grosor retiniano central y mapeo de espacios quísticos intrarretinianos foveales hiporreflectivos en la capa plexiforme externa y nuclear interna.'
      },
      {
        test: 'Estudio de Sarcoidosis e Infecciones',
        findings: 'TAC de tórax de alta resolución (adenopatías hiliares bilaterales simétricas), Enzima Convertidora de Angiotensina (ECA), lisozima sérica, y serología para Sífilis, Borrelia burgdorferi (Enfermedad de Lyme) y Bartonella.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Linfoma Intraocular Primario del SNC (PCNSL)',
        distinction: 'En pacientes mayores de 50 años que simulan una uveítis intermedia bilateral con vitritis crónica densa en hebras refractaria a esteroides orales.'
      },
      {
        condition: 'Sarcoidosis Ocular Intermedia',
        distinction: 'Asociada a granulomas conjuntivales o coroideos, periflebitis retiniana en "gotas en cera de vela", nódulos iridianos y adenopatías mediastínicas en TAC.'
      },
      {
        condition: 'Enfermedad de Lyme (Borreliosis)',
        distinction: 'Antecedente de picadura de garrapata, eritema migratorio, artritis de rodilla y serología IgG/IgM positiva para Borrelia confirmada por Western Blot.'
      }
    ],
    steppedManagement: {
      medical: 'Estrategia Terapéutica por Etapas (Algoritmo de Smith y Kaplan):\n• Grado 0: Si la agudeza visual es ≥20/25, no hay edema macular y sólo hay miodesopsias leves con escasos snowballs: Observación activa sin tratamiento farmacológico agresivo.\n• Paso 1 (Terapia Local de Elección para Afectación Unilateral o Asimétrica):\n  - Inyección Periocular Subtenoniana Posterior de Acetónido de Triamcinolona (40 mg / 1 mL) en el cuadrante superotemporal o inferotemporal con aguja de 27G.\n  - Implante Intravítreo Liberador de Dexametasona de 0.7 mg (Ozurdex): Gran eficacia demostrada para resolver el EMQ uveítico con efecto mantenido de 4 a 6 meses.\n• Paso 2 (Afectación Bilateral o Falla de Esteroides Locales):\n  - Prednisona oral a 1 mg/kg/día durante 2 a 4 semanas, seguida de reducción escalonada progresiva según resolución del EMQ y del haze vítreo.\n• Paso 3 (Dependencia o Resistencia a Esteroides / Bilateralidad Crónica):\n  - Terapia Inmunosupresora Ahorradora: Metotrexato (15-25 mg/semana), Micofenolato mofetilo (2 g/día) o Ciclosporina A (2-4 mg/kg/día).\n  - Fármaco Biológico: Adalimumab (ensayos VISUAL I y VISUAL II) o Infliximab.',
      surgical: 'Técnicas Ablativas y Quirúrgicas:\n• Crioterapia de Pars Plana: Aplicación transescleral de crio-coagulación con sonda sobre los bancos de nieve (snowbanks) periféricos inferiores para inducir atrofia glial y obliterar la vasculatura inflamatoria.\n• Fotocoagulación con Láser Argón Indirecto periférico sobre áreas isquémicas o neovasculares periféricas.\n• Vitrectomía Pars Plana (PPV) 23G/25G:\n  - Indicaciones Mayores: EMQ traccional crónico refractario a tratamiento médico, hemorragia vítrea densa que no aclara, desprendimiento de retina regmatógeno o traccional periférico, membranas epirretinianas traccionales, o necesidad de remover el andamio de citoquinas inflamatorias vítreas.'
    },
    clinicalApplicationPractical: 'Conducta Clave en Adultos Jóvenes: Todo paciente joven (especialmente mujeres entre 15 y 45 años) diagnosticado de Uveítis Intermedia o Pars Planitis debe someterse INVARIABLEMENTE a una Resonancia Magnética Cerebral con gadolinio para descartar Esclerosis Múltiple, aun en ausencia total de focalidad neurológica motora o sensitiva; hasta un 15-30% de los pacientes con pars planitis desarrollarán esclerosis múltiple con los años.\\n\\nCuidado con los Anti-TNF en sospecha de EM: Si la RM cerebral muestra lesiones desmielinizantes sugerentes de esclerosis múltiple, los agentes anti-TNF-α (Adalimumab, Infliximab) están FORMALMENTE CONTRAINDICADOS porque exacerban la desmielinización del SNC y pueden gatillar brotes neurológicos catastróficos.',
    highYieldPearl: 'La causa número uno de pérdida visual permanente en Uveítis Intermedia es el Edema Macular Quístico (EMQ). En adultos jóvenes con pars planitis, el descarte mandatorio es la Esclerosis Múltiple; en ellos, los anti-TNF-α están formalmente contraindicados.',
    keyDrugs: [
      {
        name: 'Acetónido de Triamcinolona Subtenoniano Posterior (Trigon)',
        dose: '40 mg (1 mL) mediante inyección en espacio subtenoniano posterior con aguja de 27G o 25G.',
        warning: 'Excelente control local de EMQ sin efectos adversos sistémicos. Vigilar hipertensión ocular esteroidea secundaria (control de PIO a las 2, 4 y 8 semanas post-inyección).'
      },
      {
        name: 'Implante Intravítreo de Dexametasona 0.7 mg (Ozurdex)',
        dose: 'Aplicador intravítreo precargado de 0.7 mg inyectado a través de pars plana (3.5 mm en pseudofáquicos, 4 mm en fáquicos).',
        warning: 'Matriz polimérica biodegradable que libera dexametasona durante 4 a 6 meses. Riesgo de migración a cámara anterior si hay rotura capsular posterior o afaquia (causa descompensación endotelial).'
      },
      {
        name: 'Micofenolato Mofetilo (CellCept)',
        dose: '1 g cada 12 horas por vía oral con el estómago vacío.',
        warning: 'Inhibidor selectivo de la inosina monofosfato deshidrogenasa (bloquea síntesis de purinas en linfocitos T y B). Monitorizar leucopenia, anemia y pruebas hepáticas.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Snowbanks vs Snowballs',
        category: 'Asociación Patognomónica',
        description: 'Snowballs: aglomerados de células en vítreo inferior flotantes. Snowbanks: exudados en sábana o banco organizados sobre la pars plana inferior. Su presencia en ausencia de causa sistémica define la Pars Planitis.',
        trapToAvoid: 'Denominar "pars planitis" a una uveítis intermedia causada por sarcoidosis o sífilis.'
      },
      {
        title: 'Asociación con Esclerosis Múltiple y Contraindicación Biológica',
        category: 'Trampa de Tribunal',
        description: 'Hasta el 15-30% de pacientes con uveítis intermedia desarrollan Esclerosis Múltiple. Si un paciente tiene lesiones desmielinizantes en la RM, los fármacos anti-TNF (Adalimumab/Infliximab) están terminantemente CONTRAINDICADOS.',
        trapToAvoid: 'Indicar Adalimumab en una uveítis intermedia sin haber realizado una RM cerebral previa para descartar desmielinización.'
      },
      {
        title: 'Causa de Baja Visual en Pars Planitis',
        category: 'Pregunta Clásica',
        description: 'La complicación que con mayor frecuencia deteriora la agudeza visual central es el Edema Macular Quístico (EMQ), seguido por la catarata subcapsular posterior y la tracción vítrea macular.',
        trapToAvoid: 'Creer que la pérdida visual se debe primariamente a la turbidez vítrea y demorar el tratamiento del edema macular.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo POINT (Multicenter Uveitis Steroid Treatment - MUST trial group, Ophthalmology 2019): Comparó inyección periocular de triamcinolona vs implante intravítreo de dexametasona (Ozurdex) vs ranibizumab intravítreo en EMQ uveítico; demostró que los corticoides intravítreos (Ozurdex) y perioculares son netamente superiores a los anti-VEGF para resolver el edema macular inflamatorio.',
      'Ensayo MUST (NEJM 2011 / JAMA 2017): Comparó el implante intraocular de fluocinolona (Retisert) frente a terapia inmunosupresora sistémica estandarizada para uveítis intermedia, posterior y panuveítis no infecciosa; a los 7 años demostró control similar pero con tasas de catarata y glaucoma quirúrgico significativamente mayores en el grupo de implante local.'
    ],
    landmarkTrials: [
      {
        name: 'POINT Study (PeriOcular vs. INTravitreal Corticosteroids for Uveitic Macular Edema)',
        year: '2019',
        conclusion: 'El implante intravítreo de dexametasona y la triamcinolona periocular lograron una reducción significativamente mayor del grosor macular central en EMQ uveítico comparados con anti-VEGF, consolidando a los corticoides locales como el tratamiento de elección.',
        fellowshipRelevance: 'Demostró que el edema macular uveítico es una entidad citoquímica y que los anti-VEGF aislados no son suficientes sin control de la inflamación.'
      }
    ],
    histopathologyAndGenetics: 'Fuerte asociación inmunogenética con los alelos HLA-DR15 (HLA-DRB1*1501) y HLA-DQw6 (mismos alelos de susceptibilidad para la esclerosis múltiple). Histopatología de los snowbanks: Tejido fibroglial denso proliferativo avascular o neovascular compuesto por astrocitos fibrilares reactivos, células gliales de Müller hipertróficas, colágeno tipo II condensado e infiltrado de células mononucleares y macrófagos espumosos.',
    surgicalPearls: [
      'Al realizar vitrectomía pars plana en Pars Planitis: Es obligatorio inducir un desprendimiento del vítreo posterior (DVP) completo con tinción con triamcinolona; aplicar depresión escleral de 360 grados por un asistente para afeitar cuidadosamente la base del vítreo y rasurar los snowbanks sin desgarrar la retina atrófica subyacente.',
      'Manejo de membranas neovasculares periféricas: Si se visualiza tejido fibrovascular activo sobre el banco de nieve, aplicar diatermia bipolar endocavitaria suave antes de la resección para evitar hemorragias intraoperatorias torrenciales.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 26 años sin antecedentes sistémicos conocidos acude por visión borrosa fluctuante y "moscas volantes" en ambos ojos de 4 meses de evolución. Su agudeza visual corregida es de 20/50 en ojo derecho y 20/40 en ojo izquierdo. La biomicroscopía anterior muestra cámaras anteriores tranquilas (0 células). En la oftalmoscopía indirecta con indentación se identifican múltiples condensaciones celulares vítreas redondeadas (snowballs) en polo posterior inferior y un banco exudativo blanquecino lineal continuo que cubre la pars plana inferior de hora 4 a hora 8 en ambos ojos. El OCT macular evidencia edema macular quístico bilateral con grosor central de 480 µm en OD y 410 µm en OI. ¿Cuál es el diagnóstico oftalmológico exacto, qué estudio sistémico es mandatorio solicitar de inmediato y qué fármacos de uso común en uveítis están formalmente contraindicados si dicho estudio resulta patológico?',
        answer: '1) Diagnóstico Oftalmológico:\n   - Uveítis Intermedia Bilateral / Pars Planitis activa con Edema Macular Quístico bilateral y bancos de nieve (snowbanks) inferiores.\n2) Estudio Sistémico Inaplazable:\n   - Resonancia Magnética (RM) de Encéfalo y Médula Espinal con gadolinio, con secuencias FLAIR y T2 de alta resolución (Protocolo de Esclerosis Múltiple), para buscar placas de desmielinización periventricular o en cuerpo calloso (Criterios de McDonald).\n3) Fármacos Absolutamente Contraindicados si hay Desmielinización:\n   - Los Fármacos Biológicos Anti-TNF-alfa (Adalimumab, Infliximab, Etanercept, Golimumab) están FORMALMENTE CONTRAINDICADOS. Su administración en pacientes con esclerosis múltiple o neuritis óptica desmielinizante latente puede inducir una progresión acelerada, exacerbación masiva de la neurodegeneración y brotes motores/sensitivos graves.\n4) Conducta Terapéutica para el EMQ:\n   - Iniciar corticoterapia local (Inyección subtenoniana posterior de Triamcinolona 40 mg o Implante intravítreo de Dexametasona Ozurdex) o prednisona oral escalonada; si requiere inmunosupresión sistémica en presencia de esclerosis múltiple, se debe recurrir a fármacos moduladores compartidos con neurología (ej. Natalizumab, Fingolimod, Rituximab o Metotrexato).',
        trap: 'Indicar Adalimumab de primera línea para la uveítis intermedia bilateral sin haber solicitado previamente una resonancia magnética cerebral con contraste.'
      }
    ]
  },

  // =========================================================================
  // 4. TOXOPLASMOSIS OCULAR Y RETINOCOROIDITIS RECURRENTE
  // =========================================================================
  {
    id: 'deep-uveitis-toxoplasmosis-ocular-retinocoroiditis',
    title: 'Toxoplasmosis Ocular: Retinocoroiditis Recurrente, Foco Satélite y Regímenes Antiparasitarios',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre la causa más común de uveítis posterior infecciosa en el mundo: Toxoplasma gondii, ciclo biológico (bradizoítos en quistes vs taquizoítos replicativos), signo patognomónico del "foco satélite" con imagen de "faro en la niebla", localizaciones de alto riesgo foveal y papilar (papilitis de Jensen), regímenes médicos clásicos (terapia cuádruple con pirimetamina/sulfadiazina vs trimetoprim/sulfametoxazol) y la regla de oro: NUNCA administrar esteroides sistémicos sin cobertura antiparasitaria.',
    definitionAndEpidemiology: 'La Toxoplasmosis Ocular, causada por el parásito protozoario intracelular obligado *Toxoplasma gondii*, es responsable del 30% al 50% de todas las uveítis posteriores en el mundo (alcanzando hasta un 70-80% en regiones endémicas como Brasil y Colombia). Aunque históricamente se consideraba casi siempre congénita, hoy se reconoce que la gran mayoría de los casos corresponden a infecciones adquiridas por ingestión de ooquistes (agua o vegetales contaminados con heces de felinos) o quistes tisulares en carnes mal cocidas.',
    anatomyAndPathophysiology: '1. Ciclo Biológico y Tropismo Retiniano:\n   • El parásito muestra un neurotropismo primario por la retina neurosensorial. El EPR y la coroides se inflaman de manera secundaria por vecindad (retinocoroiditis focal verdadera, no coroiditis primaria).\n   • Tras la infección inicial, los taquizoítos proliferan activamente destruyendo células retinianas mediante lisis lítica.\n   • Bajo presión del sistema inmune del huésped, los taquizoítos se diferencian en bradizoítos de metabolismo lento enquistados en la retina perifoveal o periférica, permaneciendo viables en estado latente de por vida.\n2. Mecanismo de Recurrencia:\n   • La ruptura espontánea o inmunomediada de la pared quística libera cientos de bradizoítos que se reconvierten en taquizoítos proliferativos, reactivando la necrosis tisular.\n   • Típicamente surge en el borde de una cicatriz coriorretiniana atrófica hiperpigmentada antigua previa (el llamado "foco satélite").\n3. Vitritis Densa Reaccional:\n   • La necrosis retiniana activa desata una respuesta inflamatoria mediada por células Th1 y secreción masiva de interferón gamma (IFN-γ), generando una vitritis severa que oscurece el fondo de ojo.',
    clinicalExamination: {
      biomicroscopy: 'Cámara anterior con inyección ciliar variable, Tyndall de 1+ a 3+, precipitados queráticos que pueden ser granulomatosos o no granulomatosos. En pacientes jóvenes es común encontrar hipertensión ocular aguda asociada (hipertensión uveítica por trabeculitis).',
      fundus: 'Signo Patognomónico: Lesión retinocoroidiana focal sobreelevada blanco-amarillenta algodonosa de bordes mal delimitados con edema intrarretiniano circundante, adyacente a una cicatriz hiperpigmentada antigua en sacabocados. La intensa vitritis suprayacente focal confiere el aspecto clásico de "Faro en la niebla" (*headlight in the fog*). Vasculitis retiniana perilesional (arteritis de Kyrieleis: manguitos nodulares de acumulación inmune en arteriolas retinianas que no comprometen el flujo intraluminal).',
      specialSigns: '• Retinocoroiditis yuxtapapilar de Jensen: Lesión activa adyacente al borde del disco óptico que produce un defecto campimétrico arciforme o escotoma en cuña que sigue el trayecto de la CFNR.\n• Foco en "faro en la niebla".\n• Placas de Kyrieleis (periarteritis nodular exudativa segmental).'
    },
    diagnosticWorkup: [
      {
        test: 'Evaluación Clínica Oftalmológica Multimodal',
        findings: 'El diagnóstico de la toxoplasmosis ocular típica es PRIMARIAMENTE CLÍNICO (visualización del foco satélite en el fondo de ojo dilatado). El SD-OCT muestra hiperreflectividad retiniana de espesor total con desorganización de capas internas, sombra acústica posterior densa y acúmulo de fluido subretiniano o células hiperreflectivas en vítreo posterior.'
      },
      {
        test: 'Serología para Toxoplasma gondii (IgG e IgM)',
        findings: 'IgG positiva confirma contacto inmunológico previo (imprescindible para el diagnóstico; una IgG negativa descarta prácticamente toxoplasmosis). IgM positiva sugiere infección adquirida reciente, pero en recurrencias oculares la IgM suele ser negativa.'
      },
      {
        test: 'PCR en Humor Acuoso o Vítreo y Coeficiente de Goldmann-Witmer',
        findings: 'Indicado en presentaciones atípicas (inmunodeprimidos con necrosis multifocal masiva, ausencia de cicatriz previa, vitritis densa que impide ver el fondo). Detección del ADN del gen B1 de Toxoplasma gondii por PCR cuantitativa en tiempo real y cálculo del ratio de producción intraocular de anticuerpos específicos.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Necrosis Retiniana Aguda (ARN por HSV o VZV)',
        distinction: 'Necrosis periférica confluentemente extensa que progresa circunferencialmente de forma rápida, arteritis oclusiva verdadera y alto riesgo de desgarros retinianos gigantes.'
      },
      {
        condition: 'Sífilis Ocular (Coriorretinitis Placoide Posterior)',
        distinction: 'Placas amarillentas confluentes subretinianas en polo posterior con patrón de leopardo en angiografía; serología treponémica positiva.'
      },
      {
        condition: 'Candidiasis Ocular o Aspergilosis Endógena',
        distinction: 'En pacientes con catéteres centrales, nutrición parenteral o adicción a drogas parenterales; lesiones algodonosas blanco-tiza que se extienden al vítreo ("en collar de perlas").'
      }
    ],
    steppedManagement: {
      medical: 'Criterios de Tratamiento Activo OBLIGATORIO:\n• Lesión que amenaza la visión: Localizada en mácula, a menos de 2-3 mm de la fóvea o dentro de las arcadas vasculares temporales.\n• Lesión yuxtapapilar adyacente al disco óptico (Riesgo de daño permanente de la CFNR).\n• Vitritis severa que reduce la visión por debajo de 20/40.\n• Paciente inmunosuprimido (VIH, trasplante, quimioterapia: riesgo de necrosis fulminante bilateral).\n(Lesiones periféricas pequeñas sin vitritis severa en pacientes inmunocompetentes pueden vigilarse sin tratamiento, aunque la mayoría de centros prefiere tratar para acelerar la cicatrización).\n\nEsquemas Terapéuticos Específicos:\n• Opción A (Terapia Clásica Cuádruple):\n  1) Pirimetamina: Dosis de carga de 100 mg el primer día (dividido en 2 tomas), seguida de 25-50 mg/día por 4 a 6 semanas.\n  2) Sulfadiazina: 1 g cada 6 horas (4 g/día) por 4 a 6 semanas.\n  3) Ácido Folínico (Leucovorina): 10 a 25 mg VO 3 veces por semana para prevenir la depresión medular inducida por pirimetamina.\n  4) Prednisona Oral: 0.5 a 1 mg/kg/día iniciada ESTRICTAMENTE 24 a 48 horas DESPUÉS de haber comenzado los antiparasitarios.\n• Opción B (Régimen de Primera Línea Moderno por Mayor Disponibilidad y Menor Toxicidad):\n  - Trimetoprim / Sulfametoxazol (Bactrim F: 160 mg TMP / 800 mg SMX) 1 comprimido cada 12 horas por 4 a 6 semanas + Prednisona oral (iniciada a las 48h).\n• Alternativa en Alérgicos a Sulfas o Embarazadas:\n  - Azitromicina (500 mg carga, luego 250 mg/día) combinada con Clindamicina (300 mg QID).\n  - Espiramicina en primer trimestre de embarazo para evitar transmisión fetal.\n• Terapia Local Intravítrea (en contraindicación o intolerancia sistémica):\n  - Inyección Intravítrea de Clindamicina (1.0 mg) + Dexametasona (0.4 mg) en 0.1 mL.',
      surgical: 'Manejo de Complicaciones Quirúrgicas:\n• Vitrectomía Pars Plana (PPV) 25G: Indicada en casos de opacidad vítrea inflamatoria densa persistente que no aclara tras meses de cicatrización, tracción vitreomacular o desprendimiento de retina regmatógeno secundario a rotura en el borde cicatrizal.\n• Neovascularización Coroidea (NVC Tipo 2) inflamatoria secundaria en el margen de la cicatriz: Tratamiento altamente eficaz con inyecciones intravítreas de anti-VEGF (Ranibizumab o Aflibercept).'
    },
    clinicalApplicationPractical: 'REGLA DE ORO DE LA TOXOPLASMOSIS: NUNCA prescribir corticosteroides sistémicos, perioculares o intravítreos en monoterapia (sin cobertura antiparasitaria activa previa o concomitante). Administrar corticoides aislados favorece la replicación descontrolada de taquizoítos, causando necrosis retiniana fulminante de espesor total y ceguera permanente.\\n\\nMonitorización de Hemograma: Si se utiliza Pirimetamina, es obligatorio realizar hemograma semanal para detectar trombocitopenia, leucopenia o anemia megaloblástica por inhibición de la dihidrofolato reductasa humana; mantener siempre el rescate con ácido folínico (leucovorina, NUNCA ácido fólico simple ya que este último puede ser utilizado por el parásito).',
    highYieldPearl: 'Foco blanco-cremoso activo adyacente a cicatriz pigmentada previa con vitritis en "faro en la niebla" = Toxoplasmosis ocular. NUNCA dar corticoides solos sin cobertura antiparasitaria.',
    keyDrugs: [
      {
        name: 'Trimetoprim / Sulfametoxazol (Bactrim F)',
        dose: '1 comprimido de 160/800 mg por vía oral cada 12 horas con las comidas durante 4 a 6 semanas.',
        warning: 'Excelente eficacia no inferior a la pirimetamina-sulfadiazina con menor costo y toxicidad. Vigilar erupciones cutáneas alérgicas (síndrome de Stevens-Johnson en alérgicos a sulfas).'
      },
      {
        name: 'Pirimetamina (Daraprim)',
        dose: 'Dosis de carga 100 mg VO día 1, luego 25 a 50 mg VO diarios por 4 a 6 semanas.',
        warning: 'Mielosupresión severa (pancitopenia). Obligatorio asociar Ácido Folínico (Leucovorina 15 mg VO 3 veces por semana) y controles hematológicos periódicos.'
      },
      {
        name: 'Prednisona Oral',
        dose: '0.5 a 1.0 mg/kg/día por vía oral, iniciándose obligatoriamente 24-48 horas DESPUÉS del inicio de antiparasitarios; descenso en 3-4 semanas.',
        warning: 'JAMÁS administrar sin cobertura antiparasitaria. Su objetivo es reducir el daño tisular foveal mediado por el huésped y acelerar el aclaramiento del vítreo.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Ácido Folínico vs Ácido Fólico',
        category: 'Trampa de Tribunal',
        description: 'Al prescribir pirimetamina para toxoplasmosis, el rescate hematológico DEBE ser con ÁCIDO FOLÍNICO (Leucovorina cálcica), NO con ácido fólico simple. El parásito no puede utilizar ácido folínico exógeno pero sí sintetiza folatos; el ácido fólico podría ser metabolizado por el parásito anulando el efecto terapéutico.',
        trapToAvoid: 'Prescribir tabletas de ácido fólico común como rescate hematológico de pirimetamina.'
      },
      {
        title: 'Arteritis de Kyrieleis',
        category: 'Asociación Patognomónica',
        description: 'Exudados nodulares perivasculares blanquecinos segmentarios a lo largo de las arteriolas retinianas cercanas al foco activo. A diferencia de una vasculitis necrotizante verdadera, la arteritis de Kyrieleis es una periarteritis segmentaria inmune que NO obstruye el flujo sanguíneo en la FAG.',
        trapToAvoid: 'Confundir las placas de Kyrieleis con émbolos arteriolares oclusivos o vasculitis por necrosis retiniana aguda.'
      },
      {
        title: 'Manejo en la Embarazada',
        category: 'Pregunta Clásica',
        description: 'En el primer trimestre del embarazo, la pirimetamina está contraindicada por teratogenicidad (antagonista de folatos). Se prescribe Espiramicina (1 g cada 8 horas) para prevenir la transmisión placentaria. En coriorretinitis materna activa que amenaza la mácula en el 2º/3º trimestre, se puede usar Espiramicina con sulfadiazina o azitromicina, o inyecciones intravítreas de Clindamicina.',
        trapToAvoid: 'Administrar pirimetamina durante el primer trimestre de gestación.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo Clínico Aleatorizado de Soheilian et al. (Ophthalmology 2011): Comparó Trimetoprim/Sulfametoxazol oral vs Inyección Intravítrea de Clindamicina + Dexametasona; demostró tasas similares de resolución del foco y mejoría de agudeza visual, consolidando la terapia intravítrea como una alternativa segura y altamente eficaz en pacientes con intolerancia sistémica o riesgo de toxicidad.',
      'Estudios Epidemiológicos de Adquisición Postnatal (Gilbert & Stanford, Lancet 2000): Demostraron que la mayoría de los casos de retinocoroiditis recurrente en adultos jóvenes corresponden a infecciones adquiridas en la infancia o adolescencia y no exclusivamente a transmisión congénita.'
    ],
    landmarkTrials: [
      {
        name: 'Trial of Intravitreal Clindamycin and Dexamethasone for Ocular Toxoplasmosis',
        year: '2011',
        conclusion: 'La inyección intravítrea de clindamicina (1 mg) y dexametasona (0.4 mg) es tan eficaz como la terapia clásica cuádruple oral, con resolución completa de la retinocoroiditis y mejor perfil de tolerabilidad.',
        fellowshipRelevance: 'Validó el abordaje local de rescate en pacientes no candidatos a medicación oral sistémica prolongada.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Necrosis coagulativa y lítica de espesor total de la retina neurosensorial con desorganización arquitectónica y denudación secundaria del EPR; en los cortes teñidos con Giemsa o hematoxilina-eosina se observan tanto quistes tisulares redondos con bradizoítosPAS-positivos como taquizoítos libres extracelulares en forma de media luna. Infiltrado denso de células plasmáticas, linfocitos y macrófagos rodeando la lesión.',
    surgicalPearls: [
      'Si se realiza vitrectomía pars plana en un paciente con antecedente de toxoplasmosis y tracción vítrea: Mantener cobertura profiláctica con Trimetoprim/Sulfametoxazol iniciada 2 días antes de la cirugía y durante 2 semanas postoperatorias para evitar la reactivación parasitaria inducida por el trauma quirúrgico.',
      'Pelado de membrana epirretiniana post-toxoplasmosis: Proceder con extrema delicadeza; la retina adyacente a cicatrices toxoplásmicas antiguas es extremadamente fina, atrófica y desprovista de limitante interna, con riesgo altísimo de provocar desgarros retinianos iatrogénicos durante la tracción con pinza.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer de 32 años consulta en urgencias por visión borrosa profunda y miodesopsias en su ojo derecho de 5 días de evolución. Su agudeza visual es de Cuenta Dedos a 2 metros. Al fondo de ojo se observa una densa vitritis grado 3+ que dificulta visualizar detalles pero permite vislumbrar en el cuadrante temporal superior, a 1 diámetro de disco de la fóvea, una lesión sobreelevada blanco-lechosa de 1.5 diámetros papilares adyacente a una cicatriz coriorretiniana hiperpigmentada antigua en sacabocados. La PIO es de 28 mmHg. La paciente no toma fármacos ni está embarazada. ¿Cuál es el diagnóstico de certeza, qué error terapéutico catastrófico debe evitarse a toda costa y cuál es el esquema farmacológico completo de primera línea?',
        answer: '1) Diagnóstico de Certeza:\n   - Reactivación de Toxoplasmosis Ocular (Retinocoroiditis focal recurrente con foco satélite) en ojo derecho, que amenaza la fóvea y asocia hipertensión ocular uveítica reaccional.\n2) Error Terapéutico Catastrófico que NUNCA debe cometerse:\n   - Administrar corticosteroides sistémicos (orales o parenterales) o perioculares/intravítreos como MONOTERAPIA sin cobertura antiparasitaria previa o concomitante. Los esteroides solos provocan la proliferación descontrolada de los taquizoítos de Toxoplasma gondii, causando necrosis retiniana fulminante masiva de espesor total y ceguera irreversible.\n3) Esquema Farmacológico Completo de Primera Línea:\n   - Cobertura Antiparasitaria Inmediata: Trimetoprim/Sulfametoxazol (Bactrim F: 160/800 mg) 1 comprimido vía oral cada 12 horas durante 4 a 6 semanas (o terapia clásica cuádruple con Pirimetamina 50 mg/día + Sulfadiazina 1 g cada 6h + Ácido Folínico 15 mg 3 veces/semana).\n   - Corticoterapia Oral Coadyuvante: Prednisona oral a 0.5 - 1 mg/kg/día, iniciándose ESTRICTAMENTE a las 24 a 48 horas de haber iniciado los antiparasitarios (dada la proximidad a la fóvea y la densa vitritis), en descenso gradual a lo largo de 3 a 4 semanas.\n   - Manejo de la Hipertensión Ocular: Añadir colirios hipotensores tópicos no prostaglandínicos (ej. Timolol 0.5% + Dorzolamida 2% cada 12 horas).\n   - Cicloplejía tópica: Ciclopentolato al 1% cada 8 horas para aliviar el dolor ciliar y prevenir sinequias.',
        trap: 'Indicar bolos de metilprednisolona o prednisona oral inmediata antes de iniciar los antiparasitarios creyendo que se trata de una uveítis autoinmune idiopática.'
      }
    ]
  },

  // =========================================================================
  // 5. SÍFILIS OCULAR Y NEUROSÍFILIS ("LA GRAN SIMULADORA")
  // =========================================================================
  {
    id: 'deep-uveitis-sifilis-ocular-neuro-sifilis',
    title: 'Sífilis Ocular y Neurosífilis: "La Gran Simuladora", Coriorretinitis Placoide y Protocolo de Penicilina IV',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre Treponema pallidum y sus manifestaciones oftalmológicas proteiformes ("la gran simuladora"): Coriorretinitis placoide posterior aguda sifilítica (ASPPC), panuveítis granulomatosa y no granulomatosa, vasculitis retiniana y papilitis. Algoritmo diagnóstico serológico (pruebas treponémicas vs no treponémicas, algoritmo inverso), la regla de oro: toda sífilis ocular se trata como NEUROSÍFILIS con Penicilina G Sódica IV, y prevención de la reacción de Jarisch-Herxheimer.',
    definitionAndEpidemiology: 'La Sífilis Ocular es causada por la espiroqueta *Treponema pallidum*. Se estima que entre el 1% y el 5% de los pacientes con sífilis sistémica desarrollan compromiso ocular, pudiendo manifestarse en cualquiera de sus estadios (primario, secundario, latente o terciario), con una frecuencia desproporcionadamente elevada en pacientes con infección concomitante por el Virus de la Inmunodeficiencia Humana (VIH). En los últimos años se ha registrado un resurgimiento epidemiológico global alarmante.',
    anatomyAndPathophysiology: '1. Capacidad Invasiva y Vasculotropismo:\n   • Treponema pallidum atraviesa activamente el endotelio capilar y la barrera hematoencefálica/hemato-ocular diseminándose por vía hematógena hacia el estroma uveal, la coroides y el nervio óptico.\n   • Provoca una endarteritis obliterante necrotizante con denso infiltrado perivascular plasmocitario.\n2. Coriorretinitis Placoide Posterior Aguda Sifilítica (ASPPC):\n   • Lesión patognomónica caracterizada por una o múltiples placas amarillo-grisáceas sobreelevadas subretinianas localizadas en el polo posterior a nivel del EPR y fotorreceptores.\n   • En SD-OCT: Pérdida reversible de la banda elipsoide y de la zona interdigitante con acumulación de material hiperreflectivo nodular sobre el EPR que resuelve íntegramente tras antibioticoterapia intravenosa adecuada.\n3. Principio de Neurosífilis Biológica:\n   • El ojo y el nervio óptico son embriológica y anatómicamente una extensión directa del diencéfalo del sistema nervioso central.\n   • Todo compromiso ocular sifilítico se considera una manifestación de neurosífilis y obliga a descartar neurosífilis clínica o asintomática mediante punción lumbar y tratamiento intravenoso formal.',
    clinicalExamination: {
      biomicroscopy: 'Cualquier patrón clínico es posible: Uveítis anterior granulomatosa con precipitados gruesos en grasa de carnero o no granulomatosa fina, roseola iridiana (telangiectasias hiperémicas en esfínter de iris), hipopión, sinequias posteriores tempranas y queratitis intersticial.',
      fundus: 'Vitritis moderada a densa ("vitritis sifilítica"), papilitis o neurorretinitis con estrella macular, envainamiento perivascular de vénulas y arterias (vasculitis retiniana extensa con oclusiones de rama), y placas placoides amarillo-cremosas confluentes foveales o yuxtapapilares (ASPPC). En etapas tardías no tratadas: retinopatía pigmentaria en sal y pimienta que simula retinosis pigmentaria.',
      specialSigns: '• Pupila de Argyll Robertson: Pupilas pequeñas bilaterales asimétricas irregulares que NO reaccionan a la luz (reflejo fotomotor ausente o muy perezoso) pero que se contraen con normalidad en la visión cercana (reflejo de acomodación-convergencia conservado: "disociación luz-cerca").\n• ASPPC (Acute Syphilitic Posterior Placoid Chorioretinitis).'
    },
    diagnosticWorkup: [
      {
        test: 'Algoritmo Diagnóstico Serológico Sifilítico Completo (Algoritmo Inverso Moderno)',
        findings: '1) Pruebas Treponémicas Específicas de Screening: Enzimoinmunoanálisis (EIA), Quimioluminiscencia (CLIA) o FTA-ABS / TP-PA: Positivas (confirman contacto permanente con Treponema pallidum; permanecen positivas de por vida).\n2) Pruebas No Treponémicas Cuantitativas: VDRL o RPR (reflejan actividad inflamatoria activa y monitorizan respuesta al tratamiento: un descenso de 4 diluciones o 2 títulos [ej. de 1:32 a 1:8] define éxito terapéutico).'
      },
      {
        test: 'Punción Lumbar y Análisis de Líquido Cefalorraquídeo (LCR)',
        findings: 'Indicada en toda sífilis ocular para documentar pleocitosis mononucleal (>5 leucocitos/µL), hiperproteinorraquia (>45 mg/dL) y VDRL en LCR (altamente específico aunque con sensibilidad del 50-70%).'
      },
      {
        test: 'Angiografía con Fluoresceína e Indocianina (FAG / ICGA) y SD-OCT',
        findings: 'En ASPPC: Hipofluorescencia precoz en FAG con hiperfluorescencia tardía progresiva en parches ("leopard-spot staining"). El ICGA muestra hipofluorescencia geográfica persistente por hipoperfusión de la coriocapilar.'
      },
      {
        test: 'Screening Obligatorio de Coinfección por VIH',
        findings: 'Determinación mandatoria de serología VIH-1/VIH-2 en todo paciente diagnosticado de sífilis ocular (hasta el 30-50% presentan coinfección).'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Epiteliopatía Pigmentaria Placoide Multifocal Posterior Aguda (APMPPE)',
        distinction: 'Ocurre en adultos jóvenes sanos tras síndrome viral, con resolución espontánea de las placas sin antibióticos; serología sifilítica negativa.'
      },
      {
        condition: 'Síndrome de Vogt-Koyanagi-Harada (VKH)',
        distinction: 'Desprendimientos serosos de retina bullosos exudativos multifocales bilaterales asociados a pleocitosis y signos auditivos/tegumentarios; serología luética negativa.'
      },
      {
        condition: 'Retinitis Viral por Citomegalovirus (CMV)',
        distinction: 'Lesiones necróticas blanco-amarillentas con hemorragias masivas intraretinianas en "queso y salsa de tomate" en pacientes con SIDA y CD4 <50 céls/µL.'
      }
    ],
    steppedManagement: {
      medical: 'Protocolo de Tratamiento Mandatorio según Guías CDC / OMS (Tratamiento de Neurosífilis):\n• Régimen Estándar de Primera Línea:\n  - Penicilina G Sódica Cristalina Acuosa: 18 a 24 millones de UI al día por vía intravenosa, administrada a dosis de 3 a 4 millones de UI cada 4 horas (o infusión continua intravenosa) durante 10 a 14 días completos.\n• Opción Ambulatoria Alternativa si no es posible la hospitalización:\n  - Penicilina G Procaína: 2.4 millones de UI intramusculares al día + Probenecid 500 mg VO cada 6 horas durante 10 a 14 días.\n• En Alergia Confirmada a Penicilinas:\n  - Hospitalización para desensibilización oral o intravenosa a Penicilina (de elección indiscutible en neurosífilis y embarazadas).\n  - Si la desensibilización no es factible: Ceftriaxona 2 g diarios IV o IM durante 14 días (con precaución por reactividad cruzada en alérgicos graves) o Doxiciclina 200 mg cada 12 horas VO por 28 días.\n\nPrevención de la Reacción de Jarisch-Herxheimer:\n• Reacción inflamatoria febril aguda con escalofríos, taquicardia y empeoramiento paradójico transitorio de la inflamación ocular en las primeras 2 a 12 horas tras iniciar la penicilina por lisis masiva de espiroquetas.\n• Profilaxis: Prednisona oral a 0.5-1 mg/kg/día iniciada de forma preventiva 24 horas antes o junto con la primera dosis de penicilina.\n\nSeguimiento Serológico Post-Tratamiento:\n• Repetir VDRL o RPR cuantitativo a los 3, 6, 12 y 24 meses; se espera una caída mínima de 4 veces en los títulos (dos diluciones).',
      surgical: 'Manejo Quirúrgico y Diagnóstico:\n• Vitrectomía Pars Plana diagnóstica: Reservada para opacidades vítreas no aclaradas con sospecha de etiología infecciosa mixta o desprendimiento de retina traccional/regmatógeno secundario.\n• Toma de muestra microbiológica intraocular: Punción de cámara anterior o biopsia vítrea pura para PCR de Treponema pallidum y VDRL en vítreo si la serología no es concluyente.'
    },
    clinicalApplicationPractical: 'REGLA DE ORO DE LA SÍFILIS OCULAR: NUNCA tratar la sífilis ocular con Penicilina Benzatínica intramuscular simple (las inyecciones intramusculares semanales utilizadas para la sífilis primaria o latente no alcanzan niveles treponemicidas en humor acuoso ni en LCR). Toda sífilis ocular se trata OBLIGATORIAMENTE con Penicilina G Sódica acuosa INTRAVENOSA en régimen de neurosífilis hospitalaria.\\n\\nCribado Sistemático en Uveítis: Dado que la sífilis puede mimetizar idénticamente cualquier tipo de uveítis (anterior, intermedia, posterior, panuveítis o vasculitis), TODO paciente evaluado por inflamación ocular de etiología no traumática debe tener un descarte serológico de sífilis antes de ser etiquetado como "idiopático" o recibir inmunosupresión sistémica.',
    highYieldPearl: 'Toda sífilis ocular se considera y se trata como NEUROSÍFILIS: Requiere Penicilina G Sódica Acuosa 18-24 millones UI/día IV durante 10 a 14 días. Las inyecciones de Penicilina Benzatínica IM son ineficaces e insuficientes.',
    keyDrugs: [
      {
        name: 'Penicilina G Sódica Acuosa Cristalina IV',
        dose: '3 a 4 millones de UI intravenosas cada 4 horas (total 18 a 24 millones UI/día) durante 10 a 14 días bajo ingreso hospitalario.',
        warning: 'Fármaco bactericida de elección. Verificar ausencia de alergia a penicilinas; si es alérgico, realizar desensibilización formal.'
      },
      {
        name: 'Prednisona Oral Coadyuvante',
        dose: '40 a 60 mg/día VO iniciando 24h antes o en paralelo a la penicilina, reduciendo en 2 a 3 semanas.',
        warning: 'Previene el empeoramiento visual por reacción inflamatoria sistémica y ocular de Jarisch-Herxheimer.'
      },
      {
        name: 'Ceftriaxona IV',
        dose: '2 g diarios por vía intravenosa durante 14 días.',
        warning: 'Alternativa en pacientes con intolerancia a penicilina no anafiláctica; menor tasa de curación en LCR que la penicilina sódica.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Penicilina Benzatínica vs Penicilina Sódica',
        category: 'Trampa de Tribunal',
        description: 'La Penicilina Benzatínica intramuscular (2.4 millones UI semanal) es el tratamiento para sífilis latente o primaria, pero está TERMINANTEMENTE CONTRAINDICADA como tratamiento único en sífilis ocular porque no penetra la barrera hematoencefálica ni hematorretiniana.',
        trapToAvoid: 'Indicar penicilina benzatínica intramuscular en el manejo de una coriorretinitis o panuveítis sifilítica.'
      },
      {
        title: 'Pupila de Argyll Robertson',
        category: 'Asociación Patognomónica',
        description: 'Disociación luz-cerca: pupila que no se contrae con la luz pero sí con la acomodación cercana. Patognomónica de neurosífilis (afectación bilateral a nivel del núcleo pretectal en el mesencéfalo posterior).',
        trapToAvoid: 'Confundir la pupila de Argyll Robertson con la pupila tónica de Adie (que suele ser unilateral y midriática).'
      },
      {
        title: 'Reversibilidad en ASPPC',
        category: 'Pregunta Clásica',
        description: 'La Coriorretinitis Placoide Sifilítica muestra una recuperación anatómica casi mágica en SD-OCT: las capas de fotorreceptores (banda elipsoide) y el EPR se reconstituyen por completo semanas después de la penicilina IV con restitución de la agudeza visual.',
        trapToAvoid: 'Pronosticar ceguera irreversible en ASPPC antes de administrar el tratamiento antibiótico adecuado.'
      }
    ],
    fellowshipKeyPoints: [
      'Guías de Tratamiento de Enfermedades de Transmisión Sexual de los CDC (MMWR 2021): Ratifican formalmente que la sífilis ocular (incluyendo uveítis anterior, posterior, panuveítis y neuritis óptica) debe ser diagnosticada y manejada con el mismo protocolo terapéutico estricto que la neurosífilis.',
      'Estudio Multicéntrico de Sífilis Ocular (Am J Ophthalmol 2017): Demostró que hasta el 70% de los pacientes con sífilis ocular confirmada presentan LCR anormal (pleocitosis, hiperproteinorraquia o VDRL positivo), justificando el tratamiento intravenoso universal.'
    ],
    landmarkTrials: [
      {
        name: 'CDC Guidelines for Treatment of Ocular Syphilis and Neurosyphilis',
        year: '2021',
        conclusion: 'Cualquier manifestación inflamatoria ocular en presencia de serología luética positiva debe considerarse neurosífilis y tratarse exclusivamente con Penicilina G sódica intravenosa continua o cada 4 horas.',
        fellowshipRelevance: 'Guía de referencia global que prohíbe el uso de penicilina intramuscular aislada en uveítis sifilítica.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Proliferación de espiroquetas identificables mediante tinción argéntica de Warthin-Starry o inmunohistoquímica específica en la coroides, retina y nervio óptico; necrosis endotelial con manguitos linfoplasmocitarios perivasculares densos ricos en células plasmáticas, células de Mott y formación de endarteritis obliterante con trombosis luminal.',
    surgicalPearls: [
      'En ojos con vitritis sifilítica refractaria o sospecha de desprendimiento de retina secundario: Realizar vitrectomía diagnóstica con extracción de muestra pura de humor vítreo sin diluir para PCR de Treponema pallidum y VDRL en vítreo; no irrigar hasta haber tomado la muestra microbiológica.',
      'Biopsia endoocular: La punción de cámara anterior para PCR de Treponema pallidum tiene una sensibilidad del 70-80% en sífilis activa, siendo muy útil cuando los títulos serológicos no treponémicos son equívocos por fenómeno de prozona.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 45 años con antecedentes de prácticas sexuales de riesgo consulta por disminución bilateral indolora pero progresiva de agudeza visual de 3 semanas de evolución. Al examen: AV 20/100 en OD y 20/80 en OI. La biomicroscopía muestra Tyndall de 1+ en cámara anterior y vitritis moderada en ambos ojos. El fondo de ojo revela múltiples lesiones blanco-amarillentas placoides de aspecto geográfico subretinianas en ambos polos posteriores que confluyen en la fóvea. La FAG demuestra hipofluorescencia temprana con tinción hiperfluorescente tardía en parches (leopard spots). El panel serológico informa: FTA-ABS positivo, VDRL reactivo a título de 1:64 y ELISA para VIH positivo con recuento de CD4 de 380 céls/µL. ¿Cuál es el diagnóstico oftalmológico de certeza, qué prueba diagnóstica complementaria debe realizarse y cuál es la prescripción terapéutica exacta?',
        answer: '1) Diagnóstico de Certeza:\n   - Sífilis Ocular Secundaria con Coriorretinitis Placoide Posterior Aguda Sifilítica (ASPPC) bilateral, en paciente con coinfección por VIH.\n2) Prueba Diagnóstica Complementaria Ineludible:\n   - Punción Lumbar para examen citoquímico y microbiológico de Líquido Cefalorraquídeo (LCR): recuento celular, proteínas, glucosa y VDRL en LCR para documentar neurosífilis asociada.\n3) Prescripción Terapéutica Exacta:\n   - Hospitalización obligatoria para Tratamiento de Neurosífilis:\n     * Penicilina G Sódica Cristalina Acuosa: 4 millones de UI por vía intravenosa cada 4 horas (total 24 millones UI/día) durante 14 días ininterrumpidos.\n   - Prevención de la Reacción de Jarisch-Herxheimer:\n     * Prednisona oral a 60 mg/día (aproximadamente 1 mg/kg) iniciando 24 horas antes o junto con la primera dosis de antibiótico, manteniéndola durante 5 a 7 días y reduciéndola progresivamente en 2 semanas.\n   - Derivación urgente a Infectología para inicio de Terapia Antirretroviral (TARV) para el VIH una vez superada la fase aguda sifilítica.\n   - Seguimiento serológico: Control cuantitativo de VDRL a los 3, 6, 12 y 24 meses buscando una caída mínima de cuatro veces en los títulos (ej. de 1:64 a ≤1:16).',
        trap: 'Indicar tratamiento ambulatorio con Penicilina Benzatínica intramuscular 2.4 millones UI una vez por semana durante 3 semanas, lo cual es ineficaz y un error médico grave que deja progresar la neurosífilis.'
      }
    ]
  },

  // =========================================================================
  // 6. TUBERCULOSIS OCULAR Y ALGORITMO INMUNO-DIAGNÓSTICO
  // =========================================================================
  {
    id: 'deep-uveitis-tuberculosis-ocular-granulomatosa',
    title: 'Tuberculosis Intraocular, Coroiditis Serpiginosa-Like y Algoritmo Inmuno-Diagnóstico (PPD/IGRA)',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre Mycobacterium tuberculosis en el ojo: Granulomas coroideos solitarios (tuberculomas) o múltiples, coroiditis serpiginosa-like multifocal, periflebitis retiniana oclusiva con neovascularización ("velas de cera"), algoritmo inmuno-diagnóstico riguroso (PPD/Mantoux vs IGRA/QuantiFERON-TB Gold), indicación de terapia antituberculosa cuádruple (RIPE: Rifampicina, Isoniazida, Pirazinamida, Etambutol) y advertencias de toxicidad farmacológica (neuropatía óptica por etambutol).',
    definitionAndEpidemiology: 'La Tuberculosis Ocular (TBO) representa entre el 2% y el 10% de las uveítis en países en desarrollo y centros de referencia global. Es causada por *Mycobacterium tuberculosis*, un bacilo ácido-alcohol resistente (BAAR) aerobio facultativo. La infección ocular suele producirse por diseminación hematógena desde un foco primario pulmonar o ganglionar (frecuentemente latente o clínicamente asintomático en el momento del diagnóstico) o por una reacción de hipersensibilidad inmunitaria mediada por células contra antígenos micobacterianos residuales.',
    anatomyAndPathophysiology: '1. Invasión Hematógena Coroidea:\n   • La densa vascularización y el elevado flujo sanguíneo por gramo de tejido de la coroides la convierten en el lecho diana preferente para el anidamiento de bacilos tuberculosos diseminados.\n2. Mecanismos Fisiopatológicos Duales:\n   • Infección Micobacteriana Directa: Proliferación de M. tuberculosis en el estroma coroideo que induce la formación de granulomas caseificantes típicos (tuberculomas coroideos únicos gigantes o múltiples tubérculos miliares).\n   • Reacción de Hipersensibilidad Tipo IV Inmunomediada: Genera una vasculitis retiniana predominantemente venosa (periflebitis retiniana oclusiva de Eales-like) o una coroiditis serpiginosa-like multifocal inmunogénica en respuesta a fragmentos de ADN micobacteriano en ausencia de bacterias viables activas multiplicándose.\n3. Isquemia Retiniana y Complicaciones Neovasculares:\n   • La periflebitis oclusiva genera extensas zonas de isquemia retiniana periférica -> liberación exagerada de VEGF -> neovascularización retiniana ("abanicos neovasculares" o fronds) y hemorragia vítrea recidivante masiva.',
    clinicalExamination: {
      biomicroscopy: 'Uveítis anterior granulomatosa con precipitados queráticos en "grasa de carnero" gruesos y lardáceos, nódulos iridianos de Koeppe en esfínter y de Busacca en estroma, sinequias posteriores y ocasional hipopión o neovascularización de iris (rubeosis).',
      fundus: '• Tuberculoma coroideo solitario: Masa subretiniana blanco-amarillenta cupuliforme sobreelevada de bordes mal definidos, frecuentemente asociada a desprendimiento seroso de la retina suprayacente.\n• Coroiditis serpiginosa-like multifocal: Placas infiltrativas blanco-cremosas confluentes que nacen en la media periferia y progresan de forma multifocal hacia el polo posterior.\n• Periflebitis retiniana: Envainamiento blanquecino grueso continuo alrededor de las venas retinianas ("en gotas de cera de vela") con hemorragias intrarretinianas en llama y áreas de no perfusión periférica.',
      specialSigns: '• Tubérculos coroideos miliares múltiples.\n• Neovascularización retiniana periférica en márgenes de isquemia venosa.\n• Cicatrices atróficas coriorretinianas hiperreflectivas con halo de hiperpigmentación.'
    },
    diagnosticWorkup: [
      {
        test: 'Algoritmo Diagnóstico Inmunológico Dual (PPD / Mantoux + IGRA)',
        findings: '1) Ensayo de Liberación de Interferón Gamma (IGRA: QuantiFERON-TB Gold Plus o T-SPOT.TB): Positivo (alta especificidad: mide secreción de IFN-γ por linfocitos T sensibilizados con antígenos ESAT-6 y CFP-10 que no están presentes en la vacuna BCG ni en la mayoría de micobacterias no tuberculosas).\n2) Prueba de Tuberculina (PPD / Mantoux): Induración eritematosa ≥10 mm (o ≥5 mm en pacientes inmunodeprimidos o con VIH) leída estrictamente a las 48-72 horas.'
      },
      {
        test: 'Estudios de Imagen Torácica de Alta Resolución',
        findings: 'Radiografía de tórax y Tomografía Computarizada (TAC) de tórax de alta resolución: Búsqueda de complejo de Ghon calcificado, adenopatías hiliares o mediastínicas calcificadas, cavitaciones apicales o infiltrados fibróticos compatibles con TB antigua o activa.'
      },
      {
        test: 'Angiografía con Fluoresceína de Campo Amplio (Ultra-Widefield FAG)',
        findings: 'Demostración de periflebitis con fuga masiva de fluoresceína perivenosa ("velas de cera"), extensas áreas periféricas de no perfusión capilar ("retina muda") y abanicos neovasculares retinoides con fuga precoz profusa.'
      },
      {
        test: 'PCR de Humor Acuoso o Vítreo para Mycobacterium tuberculosis',
        findings: 'Amplificación del elemento de inserción IS6110 de M. tuberculosis en líquido ocular; gran valor confirmatorio si es positivo, aunque su sensibilidad oscila entre el 40% y 60% por la naturaleza paucibacilar de la uveítis.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Sarcoidosis Ocular Posterior',
        distinction: 'Presenta igualmente periflebitis y granulomas, pero los granulomas no caseifican; el PPD suele ser negativo (anergia tuberculínica) y la ECA y TAC torácico muestran adenopatías simétricas no calcificadas.'
      },
      {
        condition: 'Coroiditis Serpiginosa Clásica Autoinmune',
        distinction: 'Lesiones que nacen de forma continua e inexorable desde el disco óptico extendiéndose centrífugamente de manera serpiginosa ("en pseudópodos"); PPD e IGRA negativos; no responde a antifímicos y exige inmunosupresión agresiva.'
      },
      {
        condition: 'Melanoma Coroideo Amelanótico o Metástasis Coroidea',
        distinction: 'En el caso de un tuberculoma solitario gigante; la ecografía modo B muestra reflectividad acústica interna media-baja en metástasis y masa cupuliforme regular con flujo vascular intrínseco en melanoma.'
      }
    ],
    steppedManagement: {
      medical: 'Estrategia Terapéutica Combinada (Consenso Internacional de Uveítis Tuberculosa):\n• Fase de Inducción Bactericida Cuádruple (Esquema RIPE) durante 2 MESES completos:\n  1) Rifampicina (R): 10 mg/kg/día (máx. 600 mg/día) VO en ayunas.\n  2) Isoniazida (H): 5 mg/kg/día (máx. 300 mg/día) VO en ayunas + Vitamina B6 (Piridoxina 25-50 mg/día) obligatoria para prevenir neuropatía periférica.\n  3) Pirazinamida (Z): 25-30 mg/kg/día (máx. 2 g/día) VO.\n  4) Etambutol (E): 15-20 mg/kg/día (máx. 1.2 g/día) VO (con monitorización rigurosa de agudeza visual y visión cromática).\n• Fase de Consolidación (RI) durante 7 a 10 MESES adicionales:\n  - Rifampicina + Isoniazida a dosis diarias (tratamiento antituberculoso total de 9 a 12 meses para prevenir recaídas oculares).\n• Corticoterapia Sistémica Coadyuvante Inaplazable:\n  - Prednisona oral a 0.5 a 1.0 mg/kg/día iniciada a las 48-72 horas de haber asegurado cobertura antifímica RIPE, con reducción progresiva en 2 a 3 meses.\n  - Finalidad: Frena la destrucción tisular y la neovascularización inducidas por la reacción inmune de hipersensibilidad contra los antígenos tuberculosos lisados por los antibióticos.',
      surgical: 'Manejo Quirúrgico y Fotocoagulativo:\n• Panfotocoagulación con Láser Argón Periférico Sectorial o de 360 grados: Indicada sobre todas las áreas de retina isquémica no perfundida documentadas por angiografía para suprimir la producción de VEGF y lograr la involución completa de los abanicos neovasculares.\n• Vitrectomía Pars Plana 23G/25G: En hemorragia vítrea densa que no reabsorbe en 1-2 meses, desprendimiento de retina traccional o roturas retinianas sobre áreas de atrofia necrótica.'
    },
    clinicalApplicationPractical: 'MONITORIZACIÓN OBLIGATORIA DEL ETAMBUTOL: El etambutol puede causar Neuropatía Óptica Tóxica Retrobulbar dosis-dependiente y tiempo-dependiente, caracterizada por pérdida bilateral de agudeza visual, discromatopsia rojo-verde (pérdida temprana en test de Ishihara) y escotomas centrales o cecocentrales en campimetría. Todo paciente tratado con RIPE debe someterse a control mensual de visión de colores y agudeza visual; ante el menor indicio de disfunción cromática, suspender el etambutol de forma inmediata.\\n\\nCuidado con la Isoniazida: Prescribir siempre Piridoxina (Vitamina B6 50 mg/día) para evitar polineuropatía periférica por depleción de cofactores de piridoxal.',
    highYieldPearl: 'Toda periflebitis retiniana oclusiva con granulomas coroideos y PPD/IGRA positivo requiere tratamiento antifímico cuádruple (RIPE) durante 9-12 meses. El Etambutol produce neuropatía óptica tóxica con discromatopsia rojo-verde (suspender de inmediato).',
    keyDrugs: [
      {
        name: 'Rifampicina (Rifaldin)',
        dose: '600 mg al día por vía oral en ayunas (1 hora antes o 2 horas después de las comidas).',
        warning: 'Inductor enzimático potente del citocromo P450 (disminuye niveles de anticonceptivos, corticoides y anticoagulantes). Tiñe las lágrimas, orina y sudor de color naranja-rojizo brillante.'
      },
      {
        name: 'Isoniazida (INH)',
        dose: '300 mg al día por vía oral en ayunas.',
        warning: 'Hepatotoxicidad (monitorizar transaminasas basales y mensuales). Obligatorio coadministrar Piridoxina (Vitamina B6 25-50 mg/día) para evitar neuropatía periférica.'
      },
      {
        name: 'Etambutol (Myambutol)',
        dose: '15 a 20 mg/kg/día por vía oral (dosis única matutina, típicamente 1200 mg/día).',
        warning: 'Neuropatía óptica tóxica retrobulbar con discromatopsia rojo-verde. Control mensual obligatorio de agudeza visual y láminas de Ishihara.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Neuropatía Óptica por Etambutol',
        category: 'Asociación Patognomónica',
        description: 'Pérdida precoz de la visión de colores (discromatopsia rojo-verde) y escotoma cecocentral en paciente en tratamiento antituberculoso. El fondo de ojo suele ser normal inicialmente (afectación retrobulbar). La suspensión inmediata es la única medida para revertir la toxicidad.',
        trapToAvoid: 'Continuar el etambutol argumentando que "el fondo de ojo está normal" cuando el paciente ya no distingue los números en las láminas de Ishihara.'
      },
      {
        title: 'Coroiditis Serpiginosa-Like vs Clásica',
        category: 'Trampa de Tribunal',
        description: 'La coroiditis serpiginosa-like tuberculosa es multifocal, periférica, respeta inicialmente el disco y se asocia a vitritis prominente; cura con terapia RIPE + esteroides. La serpiginosa autoinmune clásica es continua desde el disco, no tiene vitritis y se agrava si no se da inmunosupresión sistémica.',
        trapToAvoid: 'Confundir una coroiditis serpiginosa tuberculosa con la autoinmune e indicar inmunosupresores biológicos aislados, provocando la diseminación miliar de la tuberculosis.'
      },
      {
        title: 'Duración del Tratamiento en TB Ocular',
        category: 'Pregunta Clásica',
        description: 'A diferencia de la tuberculosis pulmonar simple (6 meses), la Tuberculosis Ocular requiere prolongar la fase de consolidación hasta completar al menos 9 a 12 meses de tratamiento antifímico para minimizar el riesgo de reactivación coriorretiniana.',
        trapToAvoid: 'Suspender el tratamiento antituberculoso a los 6 meses en un paciente con coroiditis tuberculosa activa.'
      }
    ],
    fellowshipKeyPoints: [
      'Criterios del Consensus Guidelines on Tubercular Uveitis (COTuver, Ophthalmology 2021): Establecieron la clasificación fenotípica estandarizada de uveítis anterior granulomatosa, periflebitis retiniana, tuberculoma coroideo y coroiditis serpiginosa-like, fijando los algoritmos de inicio de tratamiento antituberculoso según pruebas moleculares e inmunológicas.',
      'Ensayo INDEX Study (Collaborative Ocular Tuberculosis Study - COTS): Demostró que los pacientes con coroiditis serpiginosa-like y periflebitis que completaron ≥9 meses de terapia antifímica combinada con esteroides tuvieron tasas de recurrencia significativamente inferiores frente a regímenes más cortos.'
    ],
    landmarkTrials: [
      {
        name: 'COTuver Consensus Guidelines on Tubercular Uveitis',
        year: '2021',
        conclusion: 'Consenso internacional que normalizó las indicaciones de tratamiento antituberculoso cuádruple en fenotipos oculares de alta sospecha con IGRA positivo y exclusión de otras causas.',
        fellowshipRelevance: 'Guía clínica estándar utilizada en centros de referencia de uveítis para la toma de decisiones terapéuticas en tuberculosis.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Granulomas crónicos con necrosis caseosa central acelular ("queso cottage"), rodeados por una corona de células epitelioides, células gigantes multinucleadas de tipo Langhans (con núcleos periféricos dispuestos en herradura) y un manto externo de linfocitos T CD4+. En tinciones de Ziehl-Neelsen o auramina-rodamina fluorescente se identifican bacilos ácido-alcohol resistentes (BAAR).',
    surgicalPearls: [
      'Al realizar panfotocoagulación con láser en periflebitis tuberculosa: Utilizar longitud de onda verde (532 nm) o amarilla (577 nm); aplicar impactos no confluentes espaciados por un diámetro de spot cubriendo toda el área de isquemia periférica demostrada en angiografía, cuidando no coagular sobre las arcadas vasculares principales.',
      'Si se requiere biopsia de coroides o vitrectomía en tuberculoma solitario que simula tumor: Enviar la muestra para tinción de Ziehl-Neelsen, cultivo en medio Lowenstein-Jensen y PCR para IS6110; procesar el aspirado de inmediato sin fijadores alcohólicos.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente varón de 38 años originario de una zona endémica consulta por visión borrosa en su ojo izquierdo de 6 semanas. La agudeza visual es 20/70 en ojo izquierdo y 20/20 en ojo derecho. Al examen biomicroscópico se aprecian precipitados queráticos en grasa de carnero y Tyndall de 1+. El fondo de ojo izquierdo muestra una marcada periflebitis retiniana periférica con envainamientos blanquecinos venosos en gotas de cera de vela en 3 cuadrantes, acompañados de múltiples hemorragias en llama y un abanico neovascular plano que fuga profusamente en la FAG periférica. La prueba de QuantiFERON-TB Gold resulta positiva y la prueba de PPD muestra una induración de 18 mm a las 72 horas. La TAC torácica evidencia pequeños nódulos calcificados y adenopatías hiliares calcificadas. ¿Cuál es el diagnóstico oftalmológico, qué protocolo farmacológico se debe instaurar, qué advertencia toxicológica específica debe darse respecto a uno de los fármacos y qué procedimiento ambulatorio complementario debe planificarse?',
        answer: '1) Diagnóstico Oftalmológico:\n   - Tuberculosis Ocular Activa: Vasculitis retiniana (periflebitis oclusiva tipo Eales) con isquemia periférica y neovascularización retiniana secundaria.\n2) Protocolo Farmacológico Inmediato:\n   - Terapia Antituberculosa Cuádruple (RIPE) durante 2 meses completos:\n     * Rifampicina 600 mg/día VO en ayunas.\n     * Isoniazida 300 mg/día VO + Piridoxina (Vitamina B6 50 mg/día) obligatoria.\n     * Pirazinamida 1500 a 2000 mg/día VO.\n     * Etambutol 1200 mg/día VO (15-20 mg/kg).\n   - Continuar con Rifampicina + Isoniazida durante 7 a 10 meses adicionales (tratamiento total de 9 a 12 meses).\n   - Corticoterapia Oral Coadyuvante: Prednisona oral a 1 mg/kg/día iniciada a las 48-72 horas de haber arrancado el esquema RIPE, con pauta descendente progresiva a lo largo de 8 a 12 semanas para sofocar la reacción de hipersensibilidad.\n3) Advertencia Toxicológica Obligatoria sobre el Etambutol:\n   - Riesgo de Neuropatía Óptica Tóxica Retrobulbar dosis-dependiente: Instruir al paciente que ante cualquier alteración en la visión de los colores (particularmente confusión entre rojo y verde) o caída súbita de agudeza visual, debe suspender inmediatamente el Etambutol y acudir a urgencias oftalmológicas. Realizar controles mensuales de láminas de Ishihara y campimetría.\n4) Procedimiento Ambulatorio Complementario Ineludible:\n   - Panfotocoagulación con Láser Argón Periférico guiada por angiografía sobre todas las áreas de retina isquémica no perfundida para provocar la involución completa del abanico neovascular y prevenir hemorragias vítreas masivas.',
        trap: 'Iniciar corticosteroides orales en monoterapia para "frenar la vasculitis" sin cobertura antituberculosa RIPE, o no advertir de la neuropatía óptica por etambutol.'
      }
    ]
  },

  // =========================================================================
  // 7. SÍNDROME DE VOGT-KOYANAGI-HARADA (VKH) Y OFTALMÍA SIMPÁTICA
  // =========================================================================
  {
    id: 'deep-uveitis-vkh-oftalmia-simpatica-panuveitis',
    title: 'Síndrome de Vogt-Koyanagi-Harada (VKH) y Oftalmía Simpática: Panuveítis Granulomatosa y Nódulos de Dalen-Fuchs',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre las dos panuveítis granulomatosas autoinmunes contra melanocitos uveales más emblemáticas: Síndrome VKH (criterios diagnósticos internacionales revisados, fases prodrómica, uveítica aguda con desprendimientos exudativos serosos multifocales, convaleciente con fondo en atardecer "sunset glow" y crónica recurrente) vs Oftalmía Simpática (trauma penetrante o cirugía en ojo excitador con inflamación en ojo simpatizador, ventana preventiva de enucleación temprana <14 días), nódulos de Dalen-Fuchs e inmunosupresión sistémica precoz.',
    definitionAndEpidemiology: 'El Síndrome de Vogt-Koyanagi-Harada (VKH) es una enfermedad autoinmune multisistémica mediada por linfocitos T dirigida contra antígenos asociados a melanocitos (tirosinasa y TRP) presentes en el ojo, oído interno, meninges y piel. Predomina en poblaciones pigmentadas (asiáticos, hispanos y nativos americanos), con mayor prevalencia en mujeres entre la tercera y quinta década de la vida. La Oftalmía Simpática (OS) es una panuveítis granulomatosa bilateral infrecuente pero potencialmente devastadora que se desarrolla tras un traumatismo ocular penetrante accidental o cirugía intraocular en un ojo ("ojo excitador"), sensibilizando antígenos uveales que desencadenan inflamación autoinmune contra el ojo contralateral no lesionado ("ojo simpatizador").',
    anatomyAndPathophysiology: '1. Mecanismo Inmunológico Central:\n   • Pérdida de tolerancia inmune periférica contra antígenos de membrana de los melanocitos uveales mediada por linfocitos T colaboradores Th1 y Th17 activados que expresan HLA-DRB1*0405.\n   • Infiltración masiva linfocítica e histiocitaria de todo el estroma coroideo, con engrosamiento coroideo paquicoroideo difuso y necrosis focal del epitelio pigmentario de la retina (EPR).\n2. Formación de Desprendimientos de Retina Exudativos Serosos (DRE):\n   • La inflamación coroidea masiva comprime y colapsa la coriocapilar -> disrupción multifocal severa de las uniones estrechas del EPR -> paso masivo de fluido proteico subretiniano que genera múltiples desprendimientos serosos ampollosos multilobulares en el polo posterior.\n3. Histopatología Compartida y Diferencias Clave:\n   • Nódulos de Dalen-Fuchs: Pequeños granulomas subepiteliales compuestos por células epitelioides, macrófagos y células del EPR desdobladas situados entre la membrana de Bruch y el EPR.\n   • En Oftalmía Simpática: El infiltrado coroideo característicamente RESPETA la coriocapilar y la retina neurosensorial suprayacente (a diferencia del VKH donde la coriocapilar y el EPR se afectan profusamente).\n4. Ventana Preventiva de Enucleación en Oftalmía Simpática:\n   • La sensibilización antigénica y activación de linfocitos T en ganglios linfáticos regionales requiere al menos 10 a 14 días tras el traumatismo inicial. La enucleación del ojo excitador ciego y severamente desorganizado dentro de las primeras 2 semanas previene de manera casi absoluta la aparición de oftalmía simpática en el ojo contralateral.',
    clinicalExamination: {
      biomicroscopy: 'En fase aguda: Precipitados queráticos finos que evolucionan a granulomatosos en "grasa de carnero", Tyndall de 2+ a 4+, hiperemia conjuntival marcada y flare celular. En fase crónica recurrente: Uveítis anterior granulomatosa recidivante con nódulos iridianos de Dalen-Fuchs, seclusión pupilar y catarata complicada.',
      fundus: '• Fase Uveítica Aguda de VKH: Hiperemia y edema de papila inflamatorio con múltiples bolsas lobuladas de líquido subretiniano (desprendimientos de retina exudativos multifocales) en el polo posterior que pueden confluir en un desprendimiento seroso bulloso masivo.\n• Fase Convaleciente: Despigmentación coroidea generalizada difusa con pérdida de los melanocitos del estroma, otorgando al fondo de ojo un aspecto anaranjado brillante brillante patognomónico conocido como "Fondo en Atardecer" (*Sunset Glow Fundus*).\n• Presencia de Nódulos de Dalen-Fuchs: Puntos blanco-amarillentos periféricos.',
      specialSigns: '• Signo de Sugiura: Despigmentación perilímbica perilímbica (vitíligo en el limbo corneal) que aparece de forma muy precoz en pacientes asiáticos e hispanos con VKH.\n• Manifestaciones Extraoculares Sistémicas de VKH:\n  - Neurológicas (Fase Prodrómica): Cefalea intensa, pleocitosis linfocitaria en LCR, rigidez de nuca.\n  - Auditivas (Fase Aguda/Convaleciente): Acúfenos o tinnitus, disacusia y vértigo.\n  - Cutáneas/Tegumentarias (Fase Convaleciente tardía): Poliosis (mechones de cabello, pestañas o cejas blancas), alopecia areata y vitíligo simétrico.'
    },
    diagnosticWorkup: [
      {
        test: 'Criterios Diagnósticos Internacionales Revisados para Enfermedad de VKH (Read et al., 2001)',
        findings: 'Clasificación en:\n1) VKH Completo: Requiere afectación ocular bilateral, hallazgos neurológicos/auditivos Y hallazgos tegumentarios (poliosis, alopecia, vitíligo), sin antecedente de trauma ocular penetrante previo.\n2) VKH Incompleto: Afectación ocular bilateral + compromiso neurológico/auditivo O compromiso tegumentario.\n3) VKH Probable: Afectación ocular bilateral aislada típica (desprendimientos serosos de retina multifocales) sin manifestaciones extraoculares.'
      },
      {
        test: 'SD-OCT Macular de Alta Definición y EDI-OCT (Enhanced Depth Imaging)',
        findings: 'Hallazgos Patognomónicos Agudos: Múltiples espacios quísticos subretinianos tabicados por septos hiperreflectivos membranosos (líquido subretiniano multilobulado) con engrosamiento coroideo extremo (>600-800 µm) y ondulación membranosa del EPR ("EPR corrugado" o foldings).'
      },
      {
        test: 'Angiografía con Fluoresceína (FAG) e Indocianina (ICGA)',
        findings: 'FAG: Múltiples puntos de fuga pin-point precoces que coalescen en grandes lagos de hiperfluorescencia subretiniana tardía ("pooling") correspondientes a los desprendimientos serosos, con fuga papilar intensa. ICGA: Hipofluorescencia precoz y placas hipofluorescentes tardías confluentes por bloqueo vascular de la coroides profunda.'
      },
      {
        test: 'Punción Lumbar (si la presentación es atípica)',
        findings: 'Demostración de pleocitosis linfocítica estéril en el LCR (>5 leucocitos/µL con más del 80% de linfocitos mononucleares) que cede tras el inicio de esteroides.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Oftalmía Simpática',
        distinction: 'Clínica e histopatológicamente casi idéntica a VKH, pero se distingue por el ANTECEDENTE INELUDIBLE de traumatismo penetrante o cirugía intraocular en el ojo excitador contralateral.'
      },
      {
        condition: 'Coriorretinopatía Serosa Central (CSC) Bullosa Masiva',
        distinction: 'Ocurre típicamente tras administración inadvertida de corticoides en pacientes paquicoroideos; cursa sin celularidad en cámara anterior, sin vitritis ni edema papilar; los corticoides la empeoran catastróficamente.'
      },
      {
        condition: 'Escleritis Posterior',
        distinction: 'Dolor extremo al movimiento ocular con proptosis, edema periorbitario y el signo ecográfico patognomónico de la "T" (líquido en el espacio de Tenon subtenoniano).'
      }
    ],
    steppedManagement: {
      medical: 'Estrategia Terapéutica Aguda Agresiva (Ventana de Oportunidad Terapéutica):\n• Fase 1 (Megadosis Parenterales de Inducción Urgente):\n  - Metilprednisolona Intravenosa en pulsos: 1,000 mg (1 g) al día diluidos en solución salina administrados en 2 horas durante 3 DÍAS CONSECUTIVOS.\n  - Indicada para suprimir de forma fulminante la apoptosis de fotorreceptores y evitar el daño irreversible al EPR.\n• Fase 2 (Corticoterapia Oral en Descenso Extremadamente Lento):\n  - Continuar con Prednisona Oral a 1.0 a 1.5 mg/kg/día durante 2 a 4 semanas.\n  - Pauta de descenso muy pausada y estricta a lo largo de un MÍNIMO de 6 a 9 MESES. La reducción prematura (<6 meses) se asocia a una tasa de recidiva de más del 50-70% y conduce inexorablemente al estadio crónico recurrente con "sunset glow fundus".\n• Fase 3 (Inmunosupresión Ahorradora Precoz de Primera Línea):\n  - Consenso moderno: Iniciar fármacos ahorradores de esteroides en las primeras 2 a 4 semanas del diagnóstico (no esperar a la recaída):\n    * Ciclosporina A (3-5 mg/kg/día VO) o Tacrolimus.\n    * Micofenolato Mofetilo (2 g/día VO) o Azatioprina (2-2.5 mg/kg/día).\n    * Fármacos Biológicos Anti-TNF (Adalimumab): Altamente eficaces en formas refractarias o corticodependientes.',
      surgical: 'Manejo Quirúrgico en Oftalmía Simpática:\n• Enucleación Preventiva Temprana del Ojo Excitador:\n  - En pacientes con traumatismo ocular penetrante grave donde el ojo excitador lesionado está totalmente desorganizado y carece de percepción luminosa (No PL): La enucleación realizada dentro de los primeros 14 DÍAS post-trauma previene el desarrollo de oftalmía simpática en el ojo contralateral.\n  - SI LA OFTALMÍA SIMPÁTICA YA COMENZÓ EN EL OJO SIMPATIZADOR: La enucleación urgente del ojo excitador YA NO altera el curso clínico de la enfermedad en el ojo sano ni previene su progresión; la conducta mandatoria es inmunosupresión sistémica inmediata masiva.'
    },
    clinicalApplicationPractical: 'Conducta Clave en la Guardia ante Ojo Traumatizado Penetrante: El cierre quirúrgico primario de la herida corneoescleral en las primeras 24 horas debe ser anatómicamente hermético; si el ojo tiene No Percepción Luminosa (No PL) y está anatómicamente irrecuperable, asesorar al paciente sobre el riesgo de Oftalmía Simpática y discutir la enucleación formal dentro de las primeras dos semanas.\\n\\nDuración del Tratamiento en VKH: Nunca suspender los corticoides orales en menos de 6 meses; la presencia de "sunset glow fundus" traduce la pérdida irreversible de melanocitos coroideos por inflamación subclínica persistente no controlada.',
    highYieldPearl: 'Desprendimientos serosos de retina exudativos multifocales bilaterales + pleocitosis en LCR + tinnitus = VKH. Requiere pulsos de Metilprednisolona IV (1 g/día x 3 días) y descenso oral en no menos de 6 meses. Enucleación en Oftalmía Simpática: preventiva antes de 14 días.',
    keyDrugs: [
      {
        name: 'Metilprednisolona Intravenosa (Pulsos de 1 g)',
        dose: '1,000 mg IV diluidos en 250 mL de solución glucosada o fisiológica a pasar en 2 horas una vez al día durante 3 días consecutivos.',
        warning: 'Monitoreo de glucemia, presión arterial, arritmias cardíacas y profilaxis con inhibidores de bomba de protones (Omeprazol).'
      },
      {
        name: 'Ciclosporina A (Sandimmun Neoral)',
        dose: '3 a 5 mg/kg/día repartidos en dos tomas cada 12 horas por vía oral.',
        warning: 'Inhibidor de calcineurina específico de linfocitos T. Nefrotóxico e hipertensógeno: controlar creatinina sérica y TA quincenalmente.'
      },
      {
        name: 'Micofenolato Mofetilo (CellCept)',
        dose: '1 g cada 12 horas por vía oral.',
        warning: 'Ahorrador de corticoides excelente para VKH crónico. Teratogénico en mujeres en edad fértil; solicitar prueba de embarazo antes de iniciar.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Ventana Quirúrgica de los 14 Días en Oftalmía Simpática',
        category: 'Trampa de Tribunal',
        description: 'La enucleación profiláctica del ojo traumatizado ciego evita la oftalmía simpática si se realiza dentro de los primeros 14 días. Si el ojo simpatizador ya debutó con panuveítis, enuclear el ojo traumatizado ya no cura al ojo sano; la prioridad absoluta es la inmunosupresión sistémica inmediata.',
        trapToAvoid: 'Apresurarse a enuclear el ojo traumatizado una vez que la oftalmía simpática ya estalló, demorando los pulsos de corticoides sistémicos.'
      },
      {
        title: 'Sunset Glow Fundus (Fondo en Atardecer)',
        category: 'Asociación Patognomónica',
        description: 'Aspecto rojo-anaranjado brillante del fondo de ojo resultante de la desaparición de los melanocitos del estroma coroideo. Indica progresión hacia la fase convaleciente/crónica y denota tratamiento corticoideo inicial insuficiente o tardío.',
        trapToAvoid: 'Considerar que un fondo en atardecer está "curado" sin revisar la periferia para descartar inflamación subclínica.'
      },
      {
        title: 'OCT en VKH: Desprendimientos Tabicados',
        category: 'Pregunta Clásica',
        description: 'El SD-OCT en la fase aguda del VKH demuestra líquido subretiniano compartimentado por septos hiperreflectivos membranosos (fibrina y detritos celulares) con engrosamiento masivo difuso de la coroides que responde velozmente a los pulsos de esteroides.',
        trapToAvoid: 'Confundir el líquido subretiniano de VKH con edema macular cistoide y tratar con inyecciones de anti-VEGF aisladas.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudio Multicéntrico de Read et al. (Am J Ophthalmol 2001): Estableció los criterios internacionales de consenso para clasificar la enfermedad de VKH en Completo, Incompleto y Probable, vigentes en la práctica clínica moderna.',
      'Ensayo Clínico de Abu El-Asrar et al. (Br J Ophthalmol 2011 / 2017): Demostró que la adición temprana de fármacos inmunosupresores ahorradores (Micofenolato mofetilo) al régimen de esteroides en la fase aguda del VKH previene la transición al estadio crónico recurrente y el desarrollo del sunset glow fundus.'
    ],
    landmarkTrials: [
      {
        name: 'Revised Diagnostic Criteria for Vogt-Koyanagi-Harada Disease',
        year: '2001',
        conclusion: 'Definió con rigor las 4 fases evolutivas de la enfermedad (prodrómica, uveítica aguda, convaleciente y crónica recurrente) y estandarizó los requisitos sistémicos para ensayos clínicos.',
        fellowshipRelevance: 'Criterio diagnóstico universal imprescindible para certificar el diagnóstico de VKH en exámenes de subespecialidad.'
      }
    ],
    histopathologyAndGenetics: 'Fuerte asociación inmunogenética con los alelos HLA-DRB1*0405 y HLA-DR4 en poblaciones hispanas y japonesas. Histopatología: Infiltración difusa no necrotizante de todo el espesor de la coroides por linfocitos T cooperadores (CD4+) y citotóxicos (CD8+), células plasmáticas y macrófagos espumosos cargados de melanina fagocitada; presencia de Nódulos de Dalen-Fuchs epitelioides entre la membrana de Bruch y el EPR con preservación relativa de la coriocapilar en la oftalmía simpática.',
    surgicalPearls: [
      'Técnica de Enucleación Preventiva: Debe realizarse una enucleación anatómica íntegra con extirpación total de la esclera y coroides y transección limpia del nervio óptico a 8-10 mm; NUNCA realizar una evisceración en sospecha de oftalmía simpática porque la persistencia de restos uveales microscópicos en el lecho escleral perpetúa la sensibilización inmunológica.',
      'Manejo de catarata en ojo con VKH inactivo: Asegurar al menos 3 a 6 meses de inactividad clínica absoluta (cero células); aplicar profilaxis con Prednisona oral a 1 mg/kg/día iniciando 3 días antes de la facoemulsificación.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer hispana de 34 años acude a urgencias por cefalea holocraneana severa, rigidez cervical y acúfenos de 4 días de evolución, a lo que se suma hoy una rápida disminución visual bilateral. Su agudeza visual es 20/200 en ambos ojos. A la biomicroscopía se observa inyección ciliar 2+ y Tyndall de 2+ en cámara anterior sin precipitados queráticos gruesos. El fondo de ojo muestra papilas ópticas hiperémicas con márgenes borrosos y múltiples desprendimientos de retina serosos sobreelevados bilaterales confluentes en el polo posterior. El SD-OCT confirma líquido subretiniano multilobulado tabicado y grosor coroideo que excede los 750 µm en ambos ojos. Niega traumatismos o cirugías previas. ¿Cuál es el diagnóstico más probable, en qué fase evolutiva se encuentra, qué examen neurológico confirma el cuadro y cuál es el régimen de ataque inmediato?',
        answer: '1) Diagnóstico Más Probable y Fase Evolutiva:\n   - Síndrome de Vogt-Koyanagi-Harada (VKH), en transición de Fase Prodrómica a Fase Uveítica Aguda exudativa bilateral.\n2) Examen Inmediato Confirmatorio:\n   - Punción Lumbar con estudio citoquímico de Líquido Cefalorraquídeo (LCR): Demostrará pleocitosis linfocitaria estéril (>5 leucocitos/µL con predominio >80% mononucleares), certificando la inflamación meníngea concomitante.\n3) Régimen de Ataque Inmediato Ineludible:\n   - Hospitalización urgente e inicio de Megadosis de Metilprednisolona Intravenosa: Pulsos de 1,000 mg (1 g) diarios diluidos en solución fisiológica a pasar en 2 horas durante 3 DÍAS CONSECUTIVOS.\n   - Transición al 4º día a Prednisona Oral a 1.0 - 1.5 mg/kg/día con pauta descendente extraordinariamente lenta durante un mínimo de 6 a 9 meses.\n   - Iniciar precozmente (semanas 2-4) terapia ahorradora inmunomoduladora con Micofenolato Mofetilo (2 g/día) o Ciclosporina A (3-5 mg/kg/día) para evitar la progresión al estadio crónico recurrente y el "sunset glow fundus".\n   - Protección gástrica obligatoria con Omeprazol y monitorización metabólica.',
        trap: 'Confundir el cuadro con una coriorretinopatía serosa central bilateral o un papiledema por hipertensión intracraneal idiopática y demorar los pulsos de corticoides intravenosos, o suspender la prednisona oral a las 4 semanas provocando una recaída devastadora.'
      }
    ]
  },

  // =========================================================================
  // 8. VASCULITIS RETINIANAS: ENFERMEDAD DE BEHÇET Y SARCOIDOSIS OCULAR
  // =========================================================================
  {
    id: 'deep-uveitis-vasculitis-retiniana-behcet-sarcoidosis',
    title: 'Vasculitis Retinianas Autoinmunes: Enfermedad de Behçet (Arteritis Oclusiva) y Sarcoidosis Ocular (Periflebitis en Cera de Vela)',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre las dos principales etiologías autoinmunes de vasculitis retiniana: Enfermedad de Behçet (asociación HLA-B51, aftas orales/genitales, hipopión móvil no sinequiante, arteritis retiniana necrotizante oclusiva fulminante y terapia biológica anti-TNF con infliximab/adalimumab) vs Sarcoidosis Ocular (granulomas no caseificantes, periflebitis retiniana con exudados en "cera de vela", nódulos iridianos de Koeppe/Busacca, adenopatías hiliares y niveles de ECA/lisozima).',
    definitionAndEpidemiology: 'La Vasculitis Retiniana es una complicación inflamatoria grave que afecta el árbol vascular de la retina. La Enfermedad de Behçet es una vasculitis oclusiva multisistémica recurrente de vasos de cualquier calibre; prevalente a lo largo de la antigua "Ruta de la Seda" (Cuenca Mediterránea, Oriente Medio, Asia Central y Japón), con pico en varones jóvenes (20-40 años) y fuerte ligamiento al antígeno HLA-B51. La Sarcoidosis es una enfermedad granulomatosa sistémica idiopática caracterizada por granulomas no caseificantes que afecta el ojo en hasta un 25-50% de los pacientes, con predominio en mujeres y dos picos etarios (20-40 años y >50 años).',
    anatomyAndPathophysiology: '1. Enfermedad de Behçet (Vasculitis Oclusiva Neutrofílica):\n   • Depósito de inmunocomplejos circulantes y activación neutrofílica masiva mediada por citoquinas Th1 y Th17 con necrosis fibrinoide de la pared vascular.\n   • Afecta predominantemente las arteriolas y vénulas retinianas (arteritis y periflebitis oclusiva necrotizante).\n   • Cada brote inflamatorio induce trombosis microvascular extensa con infartos isquémicos de la retina neurosensorial ("retina fantasma" blanca) y atrofia óptica subsecuente.\n2. Sarcoidosis Ocular (Vasculitis Granulomatosa Perivenosa):\n   • Respuesta inmune celular desregulada mediada por linfocitos T CD4+ y macrófagos epitelioides activados que forman granulomas no caseificantes sin necrosis central.\n   • Muestra un tropismo vascular selectivo por las vénulas retinianas: infiltración perivascular transmural en nódulos que conforma los exudados blanquecinos en manguito periflebitis conocidos como "gotas en cera de vela" (*candle-wax drippings*).\n   • Afectación del nervio óptico (granulomas papilares) y de la coroides (granulomas coroideos múltiples).',
    clinicalExamination: {
      biomicroscopy: '• En Behçet: Ojo rojo muy doloroso; hipopión frío estéril móvil que cambia de posición al inclinar la cabeza del paciente y NO suele generar sinequias posteriores tempranas (diferencia clave con HLA-B27).\n• En Sarcoidosis: Uveítis anterior granulomatosa crónica con precipitados gruesos en grasa de carnero, nódulos de Koeppe (esfínter pupilar) y Busacca (estroma iridiano), nódulos conjuntivales y trabeculitis.',
      fundus: '• En Behçet: Retinitis necrotizante focal blanquecina de bordes difusos, oclusiones arteriolares retinianas segmentarias y generalizadas, hemorragias intraretinianas en llama, envainamiento perivascular blanquecino y edema de papila inflamatorio.\n• En Sarcoidosis: Periflebitis segmentaria en manguitos exudativos discontinuos ("gotas de cera de vela"), bolas de nieve vítreas en rosario ("collar de perlas") y granulomas coroideos blanco-amarillentos.',
      specialSigns: '• Test de Patergia Positivo en Behçet: Formación de pústula estéril o pápula eritematosa 24-48 horas después de una punción cutánea estéril con aguja de 20G.\n• Aftas orales dolorosas recurrentes (≥3 episodios al año, criterio obligado de Behçet) y úlceras genitales cicatrizales.\n• Signo de las "gotas en cera de vela" (Candle-wax drippings) en Sarcoidosis.'
    },
    diagnosticWorkup: [
      {
        test: 'Angiografía con Fluoresceína de Campo Amplio (Ultra-Widefield FAG)',
        findings: 'Prueba estándar de oro para monitorizar actividad y extensión:\n- En Behçet: Tinción difusa difusa perivascular ("árbol de Navidad en llamas" o fern-like leakage) con áreas masivas periféricas y maculares de no perfusión capilar (isquemia retiniana terminal).\n- En Sarcoidosis: Tinción nodular focal y fuga segmental a lo largo de las vénulas con hiperfluorescencia papilar y edema macular en pétalos de flor.'
      },
      {
        test: 'Estudios de Laboratorio e Inmunogenética en Behçet',
        findings: 'Tipificación HLA-B51 (HLA-B*5101) positiva (asociada a mayor riesgo de afectación ocular severa y pérdida visual), elevación de reactantes de fase aguda (PCR y VSG) durante los brotes.'
      },
      {
        test: 'Panel Diagnóstico de Sarcoidosis según Criterios IWOS (International Workshop on Ocular Sarcoidosis)',
        findings: 'TAC de tórax de alta resolución (adenopatías hiliares y paratraqueales bilaterales simétricas con o sin infiltrado reticulonodular), Enzima Convertidora de Angiotensina (ECA) sérica elevada, Lisozima sérica elevada, Linfopenia y biopsia conjuntival o de glándula lagrimal demostrando granulomas no caseificantes.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Necrosis Retiniana Aguda (ARN por virus herpes)',
        distinction: 'Necrosis retiniana de avance implacable periférico con desgarros gigantes; ausencia de aftas orales recurrentes; PCR vírica positiva.'
      },
      {
        condition: 'Lupus Eritematoso Sistémico (Retinopatía Lúpica)',
        distinction: 'Microangiopatía oclusiva mediada por anticuerpos antifosfolípidos con múltiples manchas algodonosas y hemorragias; ANA y anti-ADNdc positivos.'
      },
      {
        condition: 'Tuberculosis Ocular',
        distinction: 'Periflebitis y granulomas caseificantes con PPD e IGRA fuertemente positivos.'
      }
    ],
    steppedManagement: {
      medical: 'Tratamiento Específico de la Enfermedad de Behçet Ocular:\n• REGLA CARDINAL EN BEHÇET: El compromiso del segmento posterior es una EMERGENCIA VISUAL que exige inicio INMEDIATO de agentes biológicos anti-TNF-α para evitar la ceguera por atrofia retiniana isquémica acumulativa.\n• Fármacos Biológicos de Primera Línea:\n  1) Infliximab: 5 mg/kg IV en semanas 0, 2, 6 y luego cada 6 a 8 semanas (acción ultrarrápida en suprimir el brote necrótico agudo).\n  2) Adalimumab: 80 mg SC dosis de carga, luego 40 mg SC cada 2 semanas (ensayos VISUAL I y VISUAL II).\n• Inmunosupresores Convencionales Asociados: Azatioprina (2.5 mg/kg/día VO) o Ciclosporina A (3-5 mg/kg/día VO).\n• Corticoides Sistémicos: Pulsos de metilprednisolona seguidos de prednisona oral sólo como terapia puente inicial, NUNCA en monoterapia prolongada.\n\nTratamiento de la Sarcoidosis Ocular:\n• Primera Línea: Prednisona oral a 0.5 - 1.0 mg/kg/día con reducción progresiva según resolución de la periflebitis y del EMQ.\n• Inmunomoduladores Ahorradores (ante resistencia, dependencia esteroidea o intolerancia): Metotrexato (15-25 mg/semana SC) de primera elección, Azatioprina o Micofenolato mofetilo.\n• Casos Refractarios a Inmunosupresores: Adalimumab o Infliximab.',
      surgical: 'Terapia Ablativa y Manejo Quirúrgico:\n• Panfotocoagulación con Láser Argón guiada por FAG sobre áreas de isquemia retiniana extensa para prevenir el glaucoma neovascular y la neovascularización retiniana.\n• Vitrectomía Pars Plana: Para resolver hemorragias vítreas que no aclaran o desprendimientos de retina traccionales.'
    },
    clinicalApplicationPractical: 'Conducta Inmediata en Sospecha de Behçet: Interrogar minuciosamente por aftas orales dolorosas (preguntar activamente cuántas veces al año le salen y si dejan cicatriz) y úlceras en escroto/vulva; si un paciente joven presenta vasculitis retiniana oclusiva con hipopión móvil, NO demorar el inicio de terapia biológica anti-TNF (Infliximab o Adalimumab); cada día de retraso implica pérdida irreversible de lecho capilar macular.\\n\\nCuidado con la Ciclosporina en Neuro-Behçet: Si el paciente con Behçet presenta síntomas del sistema nervioso central (cefalea intensa, cambios de conducta, ataxia), la Ciclosporina A está CONTRAINDICADA por su potencial neurotoxicidad; en su lugar, se prefiere Infliximab o Azatioprina.',
    highYieldPearl: 'Enfermedad de Behçet: Hipopión móvil estéril + arteritis retiniana oclusiva + aftas orales recurrentes (asociada a HLA-B51). Es una emergencia visual que exige Terapia Biológica Anti-TNF (Infliximab o Adalimumab) precoz.',
    keyDrugs: [
      {
        name: 'Infliximab (Remicade)',
        dose: '5 mg/kg en infusión intravenosa en semanas 0, 2, 6, y luego cada 6 a 8 semanas.',
        warning: 'Anticuerpo quimérico anti-TNF-α de acción rápida de elección en crisis graves de vasculitis retiniana por Behçet. Descartar tuberculosis latente y hepatitis B antes de iniciar.'
      },
      {
        name: 'Adalimumab (Humira)',
        dose: '80 mg SC dosis inicial, luego 40 mg SC cada 2 semanas.',
        warning: 'Aprobado formalmente para uveítis intermedia, posterior y panuveítis no infecciosa activa según ensayos VISUAL I y VISUAL II.'
      },
      {
        name: 'Azatioprina (Imurel)',
        dose: '2.0 a 2.5 mg/kg/día repartidos en 2 o 3 tomas orales con las comidas.',
        warning: 'Evaluar actividad de tiopurina metiltransferasa (TPMT) antes de iniciar para evitar mielosupresión severa; control hematológico y hepático periódico.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Arteritis (Behçet) vs Flebitis (Sarcoidosis)',
        category: 'Asociación Patognomónica',
        description: 'La vasculitis en Behçet es predominantemente una arteritis oclusiva necrotizante (oclusión arterial retiniana, isquemia terminal). La vasculitis en Sarcoidosis es una periflebitis no oclusiva con exudados perivenosos nodulares ("gotas en cera de vela").',
        trapToAvoid: 'Clasificar como Sarcoidosis una panuveítis que cursa con oclusiones arteriolares masivas e infartos retinianos.'
      },
      {
        title: 'Hipopión en Behçet: Características Distintivas',
        category: 'Trampa de Tribunal',
        description: 'El hipopión en la Enfermedad de Behçet es "frío", estéril, altamente móvil con los cambios de postura de la cabeza, no se acompaña de queratopatía severa y suele reabsorberse en horas o días sin dejar sinequias posteriores masivas iniciales.',
        trapToAvoid: 'Confundir el hipopión móvil de Behçet con un hipopión bacteriano de endoftalmitis y realizar inyecciones intravítreas de antibióticos innecesarias.'
      },
      {
        title: 'Criterios IWOS para Sarcoidosis Ocular',
        category: 'Cifra Clave de Corte',
        description: 'Sarcoidosis Ocular Definitiva: biopsia positiva (tejido no ocular o conjuntiva). Sarcoidosis Ocular Presuntiva: signos oculares típicos + TAC torácico con adenopatías hiliares bilaterales. Sarcoidosis Ocular Probable: signos oculares + 2 pruebas analíticas positivas (ECA, lisozima, linfopenia) aun con Rx de tórax normal.',
        trapToAvoid: 'Descartar sarcoidosis ocular basándose exclusivamente en una radiografía simple de tórax normal sin solicitar TAC de alta resolución.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudio Multicéntrico de Sfikakis et al. (Lancet 2001 / NEJM 2005): Demostró que una infusión única de Infliximab puede suprimir la inflamación ocular y revertir la pérdida visual en más del 90% de los pacientes con ataques agudos de panuveítis por Behçet refractarios a corticoides.',
      'Ensayos VISUAL I y VISUAL II (Jaffe et al., NEJM 2016; Nguyen et al., Lancet 2016): Ensayos pivótales fase 3 que demostraron que Adalimumab redujo significativamente el riesgo de falla del tratamiento o brotes inflamatorios en uveítis intermedias, posteriores y panuveítis no infecciosas activas e inactivas.'
    ],
    landmarkTrials: [
      {
        name: 'VISUAL I Trial (Adalimumab in Active Non-Infectious Uveitis)',
        year: '2016',
        conclusion: 'Adalimumab redujo el riesgo de falla del tratamiento en un 50% (HR 0.50, p<0.001) comparado con placebo en pacientes con uveítis no infecciosa activa a pesar de dosis altas de corticoides.',
        fellowshipRelevance: 'Condujo a la primera aprobación histórica de un agente biológico por la FDA y la EMA para el tratamiento de la uveítis no infecciosa.'
      }
    ],
    histopathologyAndGenetics: 'Fuerte asociación de la Enfermedad de Behçet con el alelo HLA-B*5101 (asociado a un riesgo 6 veces mayor). Histopatología de Behçet: Vasculitis necrotizante por infiltración transmural de neutrófilos polimorfonucleares en las paredes vasculares con depósito de inmunoglobulinas y fracción C3 del complemento, necrosis fibrinoide y trombosis luminal organizada. En Sarcoidosis: Granulomas bien formados sarcoideos no caseificantes compuestos por células epitelioides y células gigantes de Langhans con cuerpos asteroides y cuerpos de Schaumann calcificados, rodeados por una banda densa de linfocitos T CD4+.',
    surgicalPearls: [
      'Láser profiláctico en Behçet: Si la angiografía ultra-widefield evidencia más de 5 diámetros de disco de no perfusión capilar periférica, fotocoagular selectivamente las zonas isquémicas para prevenir la neovascularización retiniana y el glaucoma neovascular.',
      'Facoemulsificación en Behçet: Asegurar remisión inflamatoria estricta bajo terapia biológica o azatioprina por un mínimo de 3 meses; el trauma quirúrgico puede disparar el fenómeno de patergia intraocular con brote inflamatorio postoperatorio fulminante.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un varón de 27 años acude por dolor ocular severo y pérdida brusca de agudeza visual en ojo derecho (20/400). A la lámpara de hendidura se observa una inyección periquerática violácea y un nivel de hipopión blanquecino de 1 mm que se desplaza libremente al inclinar la cabeza; el iris no muestra sinequias posteriores fijas. El fondo de ojo revela opacidad vítrea y una arteritis retiniana oclusiva extensa con infartos retinianos algodonosos periféricos y perimaculares, con envainamiento blanquecino de las ramas arteriales. El paciente refiere aftas orales recurrentes dolorosas (4-5 veces al año) y cicatrices en el escroto. ¿Cuál es el diagnóstico más probable, qué factor genético está fuertemente asociado y cuál es el tratamiento biológico de primera línea que debe instaurarse de urgencia?',
        answer: '1) Diagnóstico Más Probable:\n   - Enfermedad de Behçet con Panuveítis activa y Vasculitis Retiniana Arterial Oclusiva necrotizante grave en ojo derecho.\n2) Factor Genético Fuertemente Asociado:\n   - Antígeno Leucocitario Humano HLA-B51 (específicamente el alelo HLA-B*5101).\n3) Tratamiento Biológico de Primera Línea Inmediato:\n   - Terapia Biológica Anti-TNF-alfa Urgente: Infliximab intravenoso (5 mg/kg en infusión IV en semanas 0, 2 y 6, luego cada 6-8 semanas) o Adalimumab subcutáneo (80 mg carga, luego 40 mg cada 2 semanas).\n   - Justificación: La vasculitis oclusiva por Behçet es una emergencia oftalmológica; los corticoides aislados no previenen las recaídas ni frenan la atrofia retiniana isquémica terminal. La terapia biológica anti-TNF bloquea de forma inmediata el daño neutrofílico endotelial y preserva la agudeza visual.\n   - Terapia Coadyuvante Inicial: Pulsos de Metilprednisolona IV (1 g/día por 3 días) seguidos de prednisona oral en descenso rápido y Azatioprina (2.5 mg/kg/día) como mantenimiento a largo plazo.\n   - Evaluación de despistaje obligatorio antes de infundir el biológico: QuantiFERON-TB Gold / PPD y serología de Hepatitis B y C.',
        trap: 'Tratar el brote exclusivamente con colirios esteroideos o prednisona oral a dosis bajas sin iniciar terapia biológica anti-TNF ni inmunosupresores sistémicos, permitiendo la progresión a ceguera por isquemia macular.'
      }
    ]
  },

  // =========================================================================
  // 9. NECROSIS RETINIANA AGUDA (ARN) Y VIRAL POR HERPESVIRIDAE
  // =========================================================================
  {
    id: 'deep-uveitis-necrosis-retiniana-aguda-arn-porn',
    title: 'Síndromes de Necrosis Retiniana Viral por Herpesviridae: ARN vs PORN y Terapia Antiviral Urgente',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre las infecciones retinianas virales fulminantes necrotizantes causadas por la familia Herpesviridae: Síndrome de Necrosis Retiniana Aguda (ARN - causado por VZV y HSV-1/2 en inmunocompetentes e inmunodeprimidos, criterios de la AAO, arteritis oclusiva, vitritis densa y riesgo masivo del 50-70% de desprendimiento de retina regmatógeno por desgarros gigantes) vs Necrosis Retiniana Externa Progresiva (PORN - exclusiva de pacientes con SIDA y CD4 <50 céls/µL, vitritis ausente, afección macular precoz), confirmación por PCR intraocular y protocolos antivirales sistémicos e intravítreos inmediatos.',
    definitionAndEpidemiology: 'La Necrosis Retiniana Aguda (ARN - *Acute Retinal Necrosis*) es una retinitis necrotizante viral fulminante que se presenta típicamente en pacientes inmunocompetentes (aunque también puede ocurrir en inmunocomprometidos) de cualquier edad. Es causada principalmente por el Virus Varicela-Zóster (VZV) en pacientes mayores de 25 años y por el Virus Herpes Simple tipo 1 (HSV-1) o tipo 2 (HSV-2 en jóvenes y neonatos). La Necrosis Retiniana Externa Progresiva (PORN - *Progressive Outer Retinal Necrosis*) es una variante variante hiperaguda y devastadora causada casi exclusivamente por VZV en pacientes con inmunodepresión celular profunda (recuento de linfocitos T CD4+ <50 células/µL en pacientes con VIH/SIDA).',
    anatomyAndPathophysiology: '1. Invasión Viral y Necrosis de Espesor Total en ARN:\n   • Diseminación retrógrada o anterógrada transaxonal del virus herpes desde ganglios sensoriales craneales latentes (ganglio trigémino o geniculado) hacia la retina periférica.\n   • Infección lítica directa de fotorreceptores, neuronas bipolares y células de soporte del EPR que causa necrosis coagulativa y lítica de TODO el espesor de la retina neurosensorial.\n   • Afectación vascular primaria: Vasculitis oclusiva severa con periarteritis y trombosis luminal arteriolar que agrava la necrosis retiniana por infarto isquémico masivo.\n2. Mecánica del Desprendimiento de Retina en ARN:\n   • La retina necrosada se atrofia, se fenestra y se desintegra en la interfaz entre la retina enferma y la retina sana, generando desgarros periféricos gigantes múltiples circunferenciales.\n   • Sumado a la contracción y condensación traccional del vítreo inflamado, entre el 50% y el 70% de los ojos desarrollan un Desprendimiento de Retina Regmatógeno-Traccional complejo dentro de las 4 a 12 semanas del inicio.\n3. Fisiopatología de PORN:\n   • Infección selectiva y rápida de las capas retinianas externas (fotorreceptores y EPR) sin respuesta inflamatoria del huésped.\n   • Debido a la ausencia total de inmunidad celular, NO hay vitritis ("vítreo cristalino y transparente") ni reacción vascular inflamatoria en manguito; las lesiones confluyen a velocidad aterradora involucrando la mácula desde el inicio.',
    clinicalExamination: {
      biomicroscopy: '• En ARN: Inyección ciliar intensa, Tyndall y flare celular de 2+ a 4+ con precipitados queráticos granulomatosos en grasa de carnero; vitritis severa de moderada a densa que dificulta visualizar el fondo.\n• En PORN: Segmento anterior asombrosamente tranquilo u "ojo blanco", Tyndall de 0 a 0.5+, y ausencia notable de vitritis (vítreo transparente que permite ver la retina con absoluta claridad a pesar de la necrosis masiva).',
      fundus: '• Criterios Diagnósticos Obligatorios de ARN (Executive Committee of the American Uveitis Society):\n  1) Uno o más focos discretos de necrosis retiniana periférica de bordes geográficos bien delimitados.\n  2) Progresión circunferencial rápida de la necrosis hacia el polo posterior si no se administra tratamiento antiviral.\n  3) Vasculopatía oclusiva prominente con arteritis retiniana severa.\n  4) Vitritis y reacción inflamatoria del segmento anterior prominentes.\n• En PORN: Múltiples lesiones blanco-amarillentas opacas profundas multifocales ("en queso suizo") en la retina externa que coalescen rápidamente respetando los vasos y con compromiso macular precoz.',
      specialSigns: '• Progresión circunferencial de la necrosis periférica en ARN.\n• Compromiso bilateral (Síndrome de Barraquer-Kuhnt o ARN bilateral) en hasta un 30-50% de los casos no tratados a las semanas o meses del primer ojo por reactivación contralateral.\n• Ausencia de vitritis en paciente con SIDA y necrosis retiniana (patognomónico de PORN).'
    },
    diagnosticWorkup: [
      {
        test: 'Punción de Humor Acuoso o Vítreo para Reacción en Cadena de la Polimerasa (PCR Multiplex Viral)',
        findings: 'ESTUDIO DIAGNÓSTICO DEFINITIVO OBLIGATORIO: Detección y cuantificación del ADN viral de VZV, HSV-1, HSV-2 y CMV por PCR en tiempo real. Sensibilidad y especificidad >95% en muestras tomadas en la fase aguda activa.'
      },
      {
        test: 'Evaluación del Estado Inmunológico y Serología Viral',
        findings: 'Recuento de linfocitos CD4/CD8 y carga viral de VIH en todo paciente con retinitis necrotizante; serología luética (VDRL/FTA-ABS) y hemograma.'
      },
      {
        test: 'Fotografía Retiniana Seriada de Campo Amplio (Ultra-Widefield)',
        findings: 'Mapeo diario o cada 48 horas de los bordes de avance de la necrosis para confirmar respuesta terapéutica (detención del avance en 48-72h tras inicio antiviral).'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Retinitis por Citomegalovirus (CMV)',
        distinction: 'Ocurre en SIDA con CD4 <50 céls/µL; lesiones granulares amarillentas con hemorragias intraretinianas profusas ("en pizza o salsa de tomate") que siguen las arcadas vasculares de avance lento (semanas, no días); PCR positiva para CMV.'
      },
      {
        condition: 'Toxoplasmosis Ocular Atípica Fulminante',
        distinction: 'Foco solitario satélite o multifocal con engrosamiento retiniano de espesor total y vitritis densa; PCR positiva para T. gondii y negativa para herpesvirus.'
      },
      {
        condition: 'Endoftalmitis Fúngica o Bacteriana Endógena',
        distinction: 'Abscesos intraretinianos redondos algodonosos asociados a sepsis, catéteres intravenosos y antecedente de drogadicción parenteral.'
      }
    ],
    steppedManagement: {
      medical: 'Protocolo de Emergencia Antiviral Inmediata (Cada Hora Cuenta):\n• Paso 1 (Terapia Antiviral Intravítrea Urgente en Consulta o Quirófano):\n  - Inyección Intravítrea INMEDIATA de Ganciclovir (2.0 mg / 0.05-0.1 mL) o Foscarnet (1.2 a 2.4 mg / 0.1 mL):\n  - Justificación: Proporciona niveles antivirales tisulares masivos en la retina en menos de 30 minutos, frenando el avance mientras la medicación sistémica alcanza concentraciones terapéuticas.\n  - Repetir la inyección intravítrea 2 a 3 veces por semana hasta la resolución de la necrosis activa.\n• Paso 2 (Terapia Antiviral Sistémica de Alta Dosis):\n  - Opción Intravenosa Tradicional: Aciclovir Intravenoso a 10 a 15 mg/kg cada 8 horas (durante 7 a 14 días bajo monitorización de función renal y diuresis profusa), seguido de Valaciclovir oral (1 g TID) durante 3 a 6 meses.\n  - Opción Oral Moderna Equivalente: Valaciclovir Oral a 1,000 a 2,000 mg cada 8 horas (biodisponibilidad 5 veces superior al aciclovir oral, alcanzando niveles plasmáticos comparables al aciclovir IV).\n• Paso 3 (Corticoides Sistémicos Coadyuvantes Tardíos):\n  - Prednisona oral a 0.5 a 1.0 mg/kg/día iniciada ESTRICTAMENTE tras 48 a 72 horas de tratamiento antiviral agresivo para sofocar la vitritis inflamatoria.\n  - JAMÁS dar corticoides antes de haber establecido cobertura antiviral completa.\n• Paso 4 (Profilaxis Antitrombótica):\n  - Aspirina oral (100-300 mg/día) para reducir la hiperagregabilidad plaquetaria y prevenir la trombosis de vasos retinianos en la arteritis oclusiva.\n• Tratamiento en PORN: Requiere terapia antiviral dual combinada obligatoria (Foscarnet IV + Ganciclovir IV + inyecciones intravítreas repetidas de ambos fármacos) junto con optimización de la terapia antirretroviral (TARV).',
      surgical: 'Prevención y Reparación Quirúrgica del Desprendimiento de Retina:\n• Fotocoagulación con Láser Argón de Barrera Profiláctica: Aplicación meticulosa de 2 a 3 hileras de impactos de láser de diodo o argón en la retina sana viable inmediatamente posterior al borde de la necrosis para crear una cicatriz coriorretiniana densa adhesiva que prevenga el paso de líquido hacia la mácula si se forman desgarros.\n• Vitrectomía Pars Plana Temprana (PPV) 23G/25G con Tamponamiento con Aceite de Silicona:\n  - La técnica de elección ante el menor desprendimiento de retina regmatógeno secundario.\n  - Requiere afeitado exhaustivo de la base del vítreo, retinotomía periférica relajante si hay tracción irreductible, endoláser confluente de 360 grados y taponamiento endotamponador permanente con Aceite de Silicona (1,000 o 5,000 cSt).'
    },
    clinicalApplicationPractical: 'Conducta Inmediata en Guardia ante Sospecha de Necrosis Viral: Ante una retinitis necrotizante periférica con vitritis, NUNCA esperar el resultado de la PCR para iniciar el antiviral; realizar punción de humor acuoso para PCR en la misma lámpara de hendidura o quirófano e instilar/inyectar inmediatamente el antiviral intravítreo e iniciar Valaciclovir oral o Aciclovir IV en la primera hora de atención.\\n\\nProfilaxis Antiviral del Ojo Contralateral: El riesgo de necrosis retiniana en el segundo ojo ("ARN bilateral") alcanza hasta el 30-50% si no se mantiene profilaxis; todo paciente tratado debe continuar con Valaciclovir oral (1 g al día) durante un mínimo de 6 a 12 meses para proteger el ojo contralateral sano.',
    highYieldPearl: 'Necrosis retiniana periférica con bordes geográficos + arteritis oclusiva + vitritis densa = ARN (VZV o HSV). Es una urgencia oftalmológica: inyección intravítrea inmediata de Ganciclovir/Foscarnet + Valaciclovir/Aciclovir sistémico. Riesgo de DR por desgarros gigantes >50%.',
    keyDrugs: [
      {
        name: 'Ganciclovir Intravítreo',
        dose: '2.0 mg en 0.05 a 0.1 mL mediante inyección intravítrea con aguja de 30G; repetir 2 a 3 veces por semana según respuesta.',
        warning: 'Frena el avance de la necrosis en minutos. No genera toxicidad retiniana a dosis terapéuticas; indispensable en combinación con antivirales sistémicos.'
      },
      {
        name: 'Valaciclovir Oral (Valtrex)',
        dose: '1,000 a 2,000 mg cada 8 horas por vía oral durante 2 a 3 semanas, seguido de 1,000 mg al día como profilaxis contralateral durante 6-12 meses.',
        warning: 'Profármaco del aciclovir con excelente biodisponibilidad oral. Ajustar dosis según filtrado glomerular en pacientes con insuficiencia renal.'
      },
      {
        name: 'Foscarnet Intravítreo (Foscavir)',
        dose: '1.2 a 2.4 mg en 0.1 mL intravítreo.',
        warning: 'Inhibidor directo de la ADN polimerasa viral sin requerir fosforilación por timidina quinasa; fármaco de elección si hay resistencia a ganciclovir/aciclovir.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'ARN vs PORN: Diferencias Cardinales',
        category: 'Asociación Patognomónica',
        description: 'ARN: Inmunocompetentes, vitritis densa, arteritis oclusiva severa, necrosis de espesor total periférica que progresa al centro. PORN: Inmunodeprimidos severos (VIH con CD4 <50), vitritis ausente ("ojo blanco y vítreo limpio"), sin vasculitis, lesiones en queso suizo en retina externa con afectación macular precoz.',
        trapToAvoid: 'Descartar necrosis viral en un paciente con SIDA porque "no tiene vitritis".'
      },
      {
        title: 'Complicación Mecánica más Temida del ARN',
        category: 'Trampa de Tribunal',
        description: 'El Desprendimiento de Retina Regmatógeno con desgarros gigantes ocurre en más del 50-70% de los ojos afectados entre las semanas 4 y 12 por necrosis de la retina periférica. Requiere vitrectomía temprana y tamponamiento con aceite de silicona.',
        trapToAvoid: 'Dar de alta al paciente tras el cese de la necrosis sin vigilar periódicamente la retina periférica en busca de desgarros atróficos gigantes.'
      },
      {
        title: 'Virus Causal Predominante según la Edad',
        category: 'Pregunta Clásica',
        description: 'En pacientes mayores de 25 años, el Virus Varicela-Zóster (VZV) es el causante del 60-70% de los casos de ARN. En pacientes menores de 25 años y neonatos, el Virus Herpes Simple tipo 2 (HSV-2) y tipo 1 (HSV-1) son los más prevalentes.',
        trapToAvoid: 'Asumir que todos los casos de ARN son causados por VZV.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudio Multicéntrico de Tibbetts et al. (Ophthalmology 2010): Demostró que el tratamiento combinado de inyecciones intravítreas tempranas de ganciclovir/foscarnet asociadas a antivirales sistémicos redujo significativamente el riesgo de progresión de la necrosis y duplicó la probabilidad de agudeza visual final ≥20/40 frente a la monoterapia intravenosa.',
      'American Uveitis Society Diagnostic Criteria for Acute Retinal Necrosis (Blumenkranz et al., Am J Ophthalmol 1994): Criterios vigentes que establecen que el diagnóstico de ARN es esencialmente clínico basado en la morfología y evolución de las lesiones.'
    ],
    landmarkTrials: [
      {
        name: 'Oral Valacyclovir in the Treatment of Acute Retinal Necrosis',
        year: '2008',
        conclusion: 'El valaciclovir oral a dosis altas (2 g TID) alcanza concentraciones intraoculares terapéuticas equivalentes a las del aciclovir intravenoso, permitiendo el manejo ambulatorio seguro y eficaz tras la inyección intravítrea inicial.',
        fellowshipRelevance: 'Transformó el paradigma terapéutico del ARN evitando hospitalizaciones prolongadas cuando el paciente tolera la vía oral.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Necrosis coagulativa y lítica de espesor total de la retina con inclusión intranucleares eosinófilas de Cowdry tipo A en células de la retina y del EPR; arteritis necrotizante oclusiva transmural con trombosis intraluminal extensa, infiltrado mononuclear e histiocítico denso y roturas de la membrana limitante interna con desprendimiento regmatógeno secundario.',
    surgicalPearls: [
      'Láser profiláctico en ARN: Aplicar fotocoagulación con láser argón en retina sana a 1-2 mm por detrás del frente de avance necrótico; el láser debe aplicarse con intensidad moderada-blanquecina; evitar la fotocoagulación sobre retina necrosada friable ya que puede inducir desgarros iatrogénicos.',
      'Vitrectomía en DR por ARN: Utilizar aceite de silicona de 5,000 cSt como endotamponador primario; el gas expansible (C3F8) suele ser insuficiente debido a la multiplicidad de desgarros y a la tracción proliferative vitreoretinopathy (PVR) inflamatoria extrema.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 58 años sin antecedentes médicos acude de urgencia por disminución rápida de visión, dolor periocular y miodesopsias en su ojo derecho de 4 días de evolución. La agudeza visual es de 20/200 en OD y 20/20 en OI. La biomicroscopía muestra inyección ciliar violácea 3+, precipitados queráticos en grasa de carnero y Tyndall de 3+. En el fondo de ojo se evidencia una vitritis densa moderada y, en la periferia temporal e inferior, placas amarillo-blanquecinas confluentes de necrosis retiniana de espesor total de bordes geográficos cortados a pico que abarcan 4 horas horarias, acompañadas de periarteritis oclusiva en manguito. ¿Cuál es el diagnóstico de sospecha inmediato, qué procedimiento diagnóstico en consulta debe realizarse sin demorar el tratamiento, cuál es el esquema antiviral de ataque de primera línea y qué complicación mecánica tardía debe prevenirse?',
        answer: '1) Diagnóstico de Sospecha Inmediato:\n   - Síndrome de Necrosis Retiniana Aguda (ARN) en ojo derecho, muy probablemente secundario a Virus Varicela-Zóster (VZV) o Virus Herpes Simple (HSV-1).\n2) Procedimiento Diagnóstico Inmediato:\n   - Punción diagnóstica de cámara anterior (paracentesis) para toma de 0.1 mL de humor acuoso destinada a Reacción en Cadena de la Polimerasa (PCR Multiplex) cuantitativa para VZV, HSV-1, HSV-2 y CMV.\n   - PRINCIPIO FUNDAMENTAL: NUNCA esperar el resultado de la PCR para iniciar la terapia antiviral.\n3) Esquema Antiviral de Ataque Inmediato:\n   - En el mismo acto de la paracentesis: Inyección Intravítrea inmediata de Ganciclovir (2 mg en 0.05-0.1 mL) o Foscarnet (2.4 mg en 0.1 mL) en el ojo afectado para frenar la necrosis tisular en minutos.\n   - Terapia Antiviral Sistémica de Alta Potencia Inmediata: Valaciclovir oral a 2,000 mg cada 8 horas (o Aciclovir IV 10-15 mg/kg cada 8 horas) durante 14 a 21 días.\n   - Repetir la inyección intravítrea de ganciclovir 2 a 3 veces por semana hasta que las lesiones muestren bordes cicatrizales inactivos.\n   - Corticoterapia coadyuvante: Prednisona oral a 1 mg/kg/día iniciada OBLIGATORIAMENTE tras 48 a 72 horas de tratamiento antiviral para sofocar la vitritis.\n   - Profilaxis antitrombótica: Aspirina 100 mg/día.\n   - Profilaxis a largo plazo del ojo contralateral: Valaciclovir oral 1,000 mg/día durante al menos 6 a 12 meses.\n4) Complicación Mecánica Tardía a Prevenir:\n   - Desprendimiento de Retina Regmatógeno masivo por desgarros periféricos gigantes (riesgo del 50-70%). Se previene mediante fotocoagulación con láser de demarcación en retina sana posterior a la necrosis una vez aclarado el vítreo, y vitrectomía pars plana temprana con aceite de silicona ante cualquier desprendimiento incipiente.',
        trap: 'Administrar corticoides orales o perioculares de entrada antes de los antivirales, o demorar el tratamiento antiviral sistémico e intravítreo a la espera del resultado de la PCR.'
      }
    ]
  },

  // =========================================================================
  // 10. SÍNDROMES DE PUNTOS BLANCOS Y COROIDOPATÍAS INFLAMATORIAS
  // =========================================================================
  {
    id: 'deep-uveitis-puntos-blancos-white-dot-syndromes',
    title: 'Síndromes de Puntos Blancos y Coroidopatías Inflamatorias: MEWDS, APMPPE, Birdshot (HLA-A29), Serpiginosa y MCP/PIC',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre el complejo espectro de los Síndromes de Puntos Blancos (White Dot Syndromes): MEWDS (Síndrome de Puntos Blancos Evaginescentes, fotopsias, mancha ciega agrandada, hiperautofluorescencia y resolución espontánea), APMPPE (Epiteliopatía Pigmentaria Placoide Multifocal Posterior Aguda, patrón angiográfico "block early, stain late" y asociación crítica con vasculitis cerebral del SNC), Coriorretinopatía en Perdigonada (Birdshot Chorioretinopathy, ligamiento patognomónico >95% a HLA-A29, pérdida de onda b en ERG), Coroiditis Serpiginosa (destructiva progresiva por pseudópodos) y MCP/PIC (riesgo elevado de neovascularización macular inflamatoria).',
    definitionAndEpidemiology: 'Los Síndromes de Puntos Blancos (*White Dot Syndromes*) constituyen un grupo heterogéneo de coroidopatías y epiteliopatías inflamatorias idiopáticas no infecciosas caracterizadas por múltiples lesiones hipo o hiperreflectivas blanquecino-amarillentas a nivel de la coroides profunda, la coriocapilar y el epitelio pigmentario de la retina (EPR). Afectan predominantemente a pacientes jóvenes o de mediana edad sanos, muchas veces con pródromo de enfermedad viral previa.',
    anatomyAndPathophysiology: '1. Hipoperfusión de la Coriocapilar y Daño de Fotorreceptores:\n   • La agresión patológica primaria suele ser una coriocapilaritis no necrotizante o una epiteliopatía inflamatoria autoinmune.\n   • La isquemia focal de lobulillos de la coriocapilar conduce a la disfunción y pérdida secundaria de la capa de segmentos externos de fotorreceptores (banda elipsoide).\n2. Patrones Específicos por Entidad:\n   • MEWDS: Afectación primaria del segmento externo de los fotorreceptores foveales y parafoveales con recuperación espontánea íntegra.\n   • APMPPE: Oclusión inflamatoria de múltiples lobulillos de la coriocapilar posterior que bloquea la fluorescencia normal de la coroides en fases tempranas de la angiografía ("block early") seguido de tinción hiperfluorescente tardía del tejido edematoso suprayacente ("stain late").\n   • Birdshot (Coriorretinopatía en perdigonada): Infiltración linfocitaria coroidea profunda crónica mediada por el antígeno HLA-A29 que destruye progresivamente la arquitectura coroidea y los fotorreceptores.\n   • Coroiditis Serpiginosa: Coroiditis destructiva progresiva inexorable que nace del disco y genera atrofia corioretiniana en sacabocados con necrosis tisular.\n   • Coroiditis Multifocal (MCP) y Coroiditis Interna Punteada (PIC): Focos inflamatorios estromales coroideos que rompen la membrana de Bruch, con una propensión desproporcionada a desarrollar Neovascularización Macular Inflamatoria (NVM Tipo 2 subretiniana).',
    clinicalExamination: {
      biomicroscopy: 'Cámara anterior generalmente tranquila (cero o escasas células en MEWDS, APMPPE y PIC). En Birdshot: vitritis crónica bilateral moderada difusa característica sin sinequias.',
      fundus: '• MEWDS: Múltiples puntos blanco-anaranjados sutiles pequeños (100-200 µm) en polo posterior y media periferia con moteado o granularidad foveolar anaranjada en "fóvea en azúcar glass".\n• APMPPE: Múltiples placas grandes amarillo-cremosas sobreelevadas subretinianas bilaterales en polo posterior.\n• Birdshot: Múltiples manchas coroideas ovales o redondeadas hipopigmentadas amarillo-cremosas (de 500 a 1500 µm) que irradian radialmente desde el disco óptico hacia la periferia a lo largo de las arcadas (simulando los impactos de perdigones de escopeta).\n• Serpiginosa: Lesiones geográficas grisáceas continuas que avanzan desde la papila mediante bordes activos sobreelevados en "pseudópodos".\n• MCP / PIC: Pequeñas lesiones redondas discretas (50-200 µm) en polo posterior que evolucionan a cicatrices atróficas perforadas ("punch-out").',
      specialSigns: '• Mancha ciega agrandada en la campimetría en MEWDS (desproporcionada al aspecto del disco óptico).\n• Granularidad foveal en MEWDS.\n• Asociación de APMPPE con Vasculitis Cerebral del SNC (cefalea severa y riesgo de ictus isquémico).'
    },
    diagnosticWorkup: [
      {
        test: 'Autofluorescencia de Fondo de Ojo (FAF) y SD-OCT',
        findings: '• En MEWDS: Múltiples puntos intensamente hiperautofluorescentes en polo posterior que superan en número y claridad a los puntos visibles en oftalmoscopía; en SD-OCT se observa disrupción transitoria focal de la banda elipsoide.\n• En APMPPE: Hipoautofluorescencia temprana de las placas con hiperautofluorescencia de los bordes.'
      },
      {
        test: 'Angiografía con Fluoresceína (FAG) y con Verde de Indocianina (ICGA)',
        findings: '• En APMPPE: Patrón Patognomónico "Bloqueo precoz y Tinción tardía" (*Block early, stain late*).\n• En Birdshot: El ICGA es la prueba más sensible: múltiples manchas hipofluorescentes oscuras regulares ("placas de disparo") en todo el fondo que persisten en fases tardías y superan en número a las lesiones visibles en el fondo.'
      },
      {
        test: 'Electrorretinograma de Campo Lleno (Full-Field ERG - Protocolo ISCEV)',
        findings: 'Mandatorio en Birdshot: Disminución progresiva del cociente b/a en la respuesta escotópica y retraso marcado del tiempo de culminación del Flicker a 30 Hz (principal biomarcador para monitorizar daño y respuesta a inmunosupresores).'
      },
      {
        test: 'Tipificación HLA-A29',
        findings: 'Positiva en >95-98% de pacientes con Coriorretinopatía en Perdigonada (Birdshot). Es el ligamiento HLA más fuerte de toda la oftalmología.'
      },
      {
        test: 'Resonancia Magnética Cerebral con Gadolinio y Angio-RM (en APMPPE)',
        findings: 'OBLIGATORIA ante cualquier cefalea o focalidad en APMPPE para descartar vasculitis cerebral necrotizante del SNC.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Coriorretinitis Placoide Sifilítica (ASPPC)',
        distinction: 'Clínica idéntica a APMPPE; serología treponémica (FTA-ABS) positiva; requiere penicilina IV.'
      },
      {
        condition: 'Sarcoidosis Coroidea',
        distinction: 'Múltiples granulomas coroideos con adenopatías hiliares en TAC y ECA elevada.'
      },
      {
        condition: 'Linfoma Intraocular Primario del SNC',
        distinction: 'En pacientes >50 años con vitritis crónica y depósitos subretinianos amarillentos que simulan coroiditis.'
      }
    ],
    steppedManagement: {
      medical: 'Estrategia Terapéutica por Entidad:\n• 1. MEWDS:\n  - Curso benigno y autolimitado en el 90-95% de los casos.\n  - CONDUCTA: Observación activa sin medicación; la agudeza visual y la banda elipsoide en OCT se recuperan espontáneamente en 4 a 8 semanas.\n• 2. APMPPE:\n  - Formas típicas aisladas suelen remitir espontáneamente.\n  - Si existe compromiso foveolar grave o CUALQUIER síntoma neurológico (cefalea persistente, parestesias, debilidad): Administrar inmediatamente Prednisona oral a 1 mg/kg/día o bolos de Metilprednisolona IV para prevenir el ictus isquémico por vasculitis cerebral del SNC.\n• 3. Birdshot Chorioretinopathy (HLA-A29):\n  - Enfermedad crónica insidiosa que conduce a la ceguera legal por atrofia si no se trata enérgicamente.\n  - Requiere Inmunosupresión Sistémica Ahorradora de Larga Duración temprana:\n    * Ciclosporina A (2.5-4 mg/kg/día) sola o combinada con Micofenolato Mofetilo (2 g/día).\n    * Fármacos Biológicos Anti-TNF (Adalimumab) o Terapia con Implantes intravítreos sostenidos de Fluocinolona (Retisert / Yutiq).\n• 4. Coroiditis Serpiginosa Autoinmune:\n  - Requiere terapia inmunosupresora triple de alta potencia (corticoides orales + ciclosporina + azatioprina o micofenolato) de forma prolongada para frenar el avance centrífugo hacia la fóvea.\n• 5. Neovascularización Macular Inflamatoria (NVM Tipo 2) en MCP o PIC:\n  - Inyecciones Intravítreas de Anti-VEGF (Ranibizumab, Aflibercept) combinadas con corticoterapia sistémica o periocular para sofocar el foco inflamatorio subyacente.',
      surgical: 'Manejo Quirúrgico de Complicaciones:\n• Terapia con Implantes sostenidos de esteroides (Ozurdex o fluocinolona) en pacientes con vitritis crónica refractaria de Birdshot.\n• Vitrectomía Pars Plana ante membranas epirretinianas o tracción foveal secundaria.'
    },
    clinicalApplicationPractical: 'Alerta Roja en APMPPE: Si un paciente con diagnóstico de APMPPE consulta por dolor de cabeza intenso o síntomas neurológicos, debe ser hospitalizado DE INMEDIATO para Angio-RM y TAC cerebral; la vasculitis cerebral asociada a APMPPE puede desencadenar infartos isquémicos cerebrales mortales si no se administran megadosis de esteroides intravenosos.\\n\\nCuidado con tratar MEWDS con corticoides: El MEWDS se resuelve de manera espontánea; no sobretratar al paciente con esteroides sistémicos innecesarios que conllevan toxicidad metabólica y ocular.',
    highYieldPearl: 'Birdshot = HLA-A29 positivo en >95% (el ligamiento genético más fuerte en medicina). MEWDS = fotopsias, puntos hiperautofluorescentes y mancha ciega agrandada (cura solo). APMPPE = "block early, stain late" en FAG y riesgo de vasculitis cerebral del SNC.',
    keyDrugs: [
      {
        name: 'Ciclosporina A (Sandimmun Neoral)',
        dose: '2.5 a 4.0 mg/kg/día VO divididos en dos tomas cada 12 horas en Birdshot.',
        warning: 'Fármaco de elección para la preservación de la función retiniana y tiempos del ERG en Birdshot. Monitorizar función renal y presión arterial.'
      },
      {
        name: 'Prednisona Oral',
        dose: '1 mg/kg/día VO en APMPPE con síntomas del SNC o Coroiditis Serpiginosa activa.',
        warning: 'Indispensable para suprimir la vasculitis cerebral y frenar la necrosis en serpiginosa.'
      },
      {
        name: 'Aflibercept Intravítreo (Eylea)',
        dose: '2 mg en 0.05 mL intravítreo ante Neovascularización Macular Inflamatoria en MCP o PIC.',
        warning: 'Excelente eficacia en NVM inflamatoria; coadministrar con corticoterapia para evitar reactivación de la coroiditis.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Asociación HLA más Fuerte en Medicina',
        category: 'Asociación Patognomónica',
        description: 'La Coriorretinopatía en Perdigonada (Birdshot) presenta una asociación superior al 95-98% con el antígeno HLA-A29. Un resultado negativo para HLA-A29 descarta prácticamente el diagnóstico.',
        trapToAvoid: 'Diagnosticar Birdshot en un paciente con HLA-A29 negativo sin considerar otras panuveítis.'
      },
      {
        title: 'FAG en APMPPE: Bloqueo Precoz y Tinción Tardía',
        category: 'Pregunta Clásica',
        description: 'En fases tempranas de la FAG, las placas de APMPPE muestran hipofluorescencia por bloqueo de la coriocapilar ("block early"); en fases tardías captan fluoresceína de forma difusa ("stain late").',
        trapToAvoid: 'Describir una hiperfluorescencia precoz en las placas de APMPPE.'
      },
      {
        title: 'MEWDS y Mancha Ciega Agrandada',
        category: 'Cifra Clave de Corte',
        description: 'La presencia de una mancha ciega agrandada en el campo visual de una mujer joven miope con fotopsias y granularidad foveolar anaranjada es patognomónica de MEWDS. No requiere tratamiento médico.',
        trapToAvoid: 'Tratar un MEWDS típico con pulsos de esteroides orales innecesarios.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudios de la cohorte Birdshot (Rothova et al., Ophthalmology 2004 / 2012): Demostraron que el ERG de campo completo (especialmente el retraso de tiempo de culminación del Flicker a 30 Hz) es el biomarcador más sensible y precoz para detectar deterioro funcional progresivo, superando a la agudeza visual de Snellen.',
      'Ensayo de Inmunosupresión en Birdshot (Becker et al., Am J Ophthalmol 2010): Demostró que la introducción precoz de inhibidores de calcineurina o micofenolato estabiliza los parámetros electrofisiológicos y previene la atrofia del EPR a largo plazo.'
    ],
    landmarkTrials: [
      {
        name: 'Long-term Follow-up and Visual Prognosis in Birdshot Chorioretinopathy',
        year: '2012',
        conclusion: 'La monitorización protocolizada mediante ERG Flicker a 30 Hz y la inmunosupresión sistémica precoz previenen la pérdida visual irreversible en pacientes con Birdshot HLA-A29 positivo.',
        fellowshipRelevance: 'Estableció el protocolo universal de seguimiento funcional en centros de uveítis para Birdshot.'
      }
    ],
    histopathologyAndGenetics: 'Ligamiento genético a HLA-A*2902 (en >95% de casos de Birdshot). Histopatología: Infiltración linfocitaria multifocal perivascular del estroma coroideo profundo por linfocitos T CD4+ y CD8+ con destrucción de la capa de coriocapilar y degeneración de segmentos externos de fotorreceptores; en coroiditis serpiginosa: infiltración linfocitaria densa y macrófagos que reemplazan totalmente el EPR y la coriocapilar con fibrosis subretiniana extensa.',
    surgicalPearls: [
      'Al implantar dispositivos intraoculares de fluocinolona (Yutiq 0.18 mg o Retisert) en Birdshot: Evaluar rigurosamente el estado del cristalino y el ángulo iridocorneal; prácticamente el 100% de los pacientes fáquicos desarrollarán catarata a los 2-3 años y hasta un 30-40% requerirá cirugía filtrante para glaucoma esteroideo.',
      'Biopsia coroidea: Reservada exclusivamente para casos de coroiditis atípica refractaria que simulan linfoma o metástasis amelanóticas.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer de 24 años consulta por visión borrosa súbita y destellos luminosos continuos (fotopsias) en su ojo derecho desde hace 4 días. Su agudeza visual es 20/40 en OD y 20/20 en OI. La biomicroscopía anterior y el vítreo son normales (0 células). El fondo de ojo derecho revela múltiples manchas blanco-anaranjadas puntiformes sutiles en la media periferia temporal y una granularidad anaranjada fina en el centro de la fóvea. La autofluorescencia (FAF) muestra múltiples lesiones intensamente hiperautofluorescentes en sacabocados que superan en número a las lesiones oftalmoscópicas. La campimetría computarizada revela un marcado agrandamiento de la mancha ciega en OD. ¿Cuál es el diagnóstico de certeza, cuál es el curso natural esperado de la enfermedad y qué tratamiento médico está indicado?',
        answer: '1) Diagnóstico de Certeza:\n   - Síndrome de Puntos Blancos Evaginescentes (MEWDS - Multiple Evanescent White Dot Syndrome) en ojo derecho.\n2) Curso Natural Esperado:\n   - La enfermedad sigue un curso benigno, autolimitado y espontáneamente reversible en la gran mayoría de los casos.\n   - Las fotopsias remitirán y las lesiones hiperautofluorescentes desaparecerán progresivamente en un lapso de 4 a 8 semanas, con restitución anatómica íntegra de la banda elipsoide de los fotorreceptores en el SD-OCT y recuperación de la agudeza visual a 20/20.\n3) Tratamiento Médico Indicado:\n   - CONDUCTA DE ELECCIÓN: Observación activa y tranquilizar a la paciente. NO ESTÁ INDICADO NINGÚN TRATAMIENTO con corticosteroides tópicos, sistémicos ni antivirales/inmunosupresores.\n   - Explicar la naturaleza autolimitada del cuadro y programar un control clínico y tomográfico en 4 semanas para documentar la resolución espontánea.',
        trap: 'Confundir el agrandamiento de la mancha ciega con papiledema por hipertensión intracraneal o recetar corticoides orales a dosis altas innecesarios en una patología que cura sola.'
      }
    ]
  },

  // =========================================================================
  // 11. SÍNDROMES DE MASCARADA: LINFOMA INTRAOCULAR PRIMARIO DEL SNC
  // =========================================================================
  {
    id: 'deep-uveitis-sindromes-mascarada-linfoma-intraocular',
    title: 'Síndromes de Mascarada: Linfoma Intraocular Primario del SNC (PCNSL / DLBCL) y Vitrectomía Diagnóstica',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre la trampa de tribunal y el reto diagnóstico más temido en el paciente anciano con uveítis: Síndromes de mascarada neoplásicos, especialmente el Linfoma Primario del Sistema Nervioso Central con Afectación Intraocular (PCNSL - Linfoma difuso de células B grandes), presentación clásica ("uveítis intermedia o posterior crónica bilateral refractaria a esteroides en mayores de 50 años"), signos biomicroscópicos (células vítreas en sábanas, infiltrados sub-EPR blanco-cremosos en leopardo), protocolo de vitrectomía diagnóstica urgente (citopatología en fresco, citometría de flujo kappa/lambda, interleucinas IL-10/IL-6 >1, mutación MYD88 L265P) y manejo onco-oftalmológico.',
    definitionAndEpidemiology: 'Los Síndromes de Mascarada Ocular son un grupo de patologías no inflamatorias (predominantemente neoplásicas) que simulan clínicamente una inflamación intraocular (uveítis). El Linfoma Intraocular Primario (PIOL o VRL - *Vitreoretinal Lymphoma*) es un Linfoma Difuso de Células B Grandes (DLBCL) de alto grado extranodal y subtipo del Linfoma Primario del Sistema Nervioso Central (PCNSL). Típicamente afecta a adultos mayores (edad promedio al diagnóstico de 55 a 70 años), con una ligera preponderancia en mujeres. Hasta el 60-80% de los pacientes con linfoma vitreorretiniano desarrollarán afectación del SNC durante el curso de la enfermedad si no se diagnostica y trata a tiempo.',
    anatomyAndPathophysiology: '1. Tropismo Celular por la Retina y el Vítreo:\n   • Linfocitos B malignos de gran tamaño con alta tasa proliferativa que atraviesan la barrera hematorretiniana y se infiltran selectivamente en la cavidad vítrea y entre la membrana de Bruch y el epitelio pigmentario de la retina (EPR).\n2. Formación de Infiltrados Sub-EPR en "Piel de Leopardo":\n   • Las células linfomatosas se acumulan en el espacio sub-EPR formando cúmulos y nódulos redondeados cupuliformes amarillentos que desprenden y fracturan focalmente la monocapa del EPR.\n   • Conforme las células tumorales sufren apoptosis o involución, dejan áreas circundantes de atrofia del EPR y pigmentación granular que conforman el patrón en piel de leopardo (*leopard-skin pattern*).\n3. Infiltración del SNC:\n   • Diseminación directa o meníngea hacia el parénquima cerebral (típicamente periventricular, cuerpo calloso y ganglios basales) con riesgo de focalidad neurológica motora, cambios de conducta, convulsiones y muerte.',
    clinicalExamination: {
      biomicroscopy: 'Cámara anterior generalmente tranquila o con celularidad discreta que responde transitoriamente a corticoides pero recidiva de inmediato. Ausencia de sinequias posteriores masivas.',
      fundus: '• Vitritis crónica bilateral asimétrica: Células vítreas atípicas grandes que tienden a agruparse en "sábanas", "filamentos" o hebras lineales (a diferencia del haze inflamatorio homogéneo difuso de las uveítis clásicas).\n• Infiltrados subretinianos y sub-EPR: Múltiples lesiones nodulares blanco-amarillentas cremosas sobreelevadas subretinianas en polo posterior y media periferia.\n• Aspecto en "piel de leopardo" (*leopard-skin pattern*) tras la regresión de los infiltrados.',
      specialSigns: '• Células vítreas en hebras que no responden o "limpian" parcialmente con corticoides orales para rebotar con virulencia tras suspenderlos.\n• Asociación con lesiones cerebrales focales periventriculares en RM con gadolinio.'
    },
    diagnosticWorkup: [
      {
        test: 'Vitrectomía Pars Plana Diagnóstica con Protocolo de Biopsia Vítrea en Fresco',
        findings: 'ESTÁNDAR DE ORO DIAGNÓSTICO:\n1) Obtención de muestra de vítreo puro no diluido (1-2 mL) antes de abrir la infusión de BSS.\n2) Muestra remitida EN FRESCO INMEDIATAMENTE al laboratorio de citopatología (las células linfomatosas son extremadamente frágiles y sufren lisis rápida si se fija con formol común o se demora el procesamiento).\n3) Citopatología: Linfocitos B grandes atípicos con núcleos pleomórficos hipercrómicos, cromatina gruesa, múltiples nucléolos prominentes y escaso citoplasma basófilo (ratio núcleo/citoplasma muy elevado).'
      },
      {
        test: 'Citometría de Flujo e Inmunofenotipificación',
        findings: 'Expresión de marcadores de células B (CD19+, CD20+, CD22+) y restricción monoclonal de cadenas ligeras kappa o lambda (ratio kappa/lambda >3:1 o <0.3:1 confirma monoclonalidad neoplásica).'
      },
      {
        test: 'Perfil de Citoquinas Vítreas (Ratio Interleucina-10 / Interleucina-6)',
        findings: 'IL-10 es secretada por los linfocitos B tumorales; IL-6 es secretada por células inflamatorias no tumorales. Un RATIO IL-10 / IL-6 > 1.0 en humor vítreo o acuoso es fuertemente sugestivo de Linfoma Intraocular Primario (sensibilidad y especificidad >85-90%).'
      },
      {
        test: 'Genética Molecular: Detección de Rearreglos IgH y Mutación MYD88 L265P',
        findings: 'PCR para clonalidad del gen de la cadena pesada de inmunoglobulinas (IgH) y detección de la mutación somática MYD88 L265P (presente en >70-80% de los linfomas vitreorretinianos DLBCL).'
      },
      {
        test: 'Resonancia Magnética Cerebral con Contraste y Punción Lumbar',
        findings: 'ESTUDIO OBLIGATORIO DE EXTENSIÓN: RM cerebral de alta resolución con gadolinio para descartar masas cerebrales captantes de contraste periventriculares; punción lumbar con citología de LCR para descartar diseminación meníngea.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Uveítis Intermedia Idiopática / Pars Planitis',
        distinction: 'Ocurre en pacientes jóvenes (<40 años), cursa con snowbanks en pars plana y responde de forma duradera a corticoides sistémicos o inmunosupresores.'
      },
      {
        condition: 'Tuberculosis o Sífilis Intraocular',
        distinction: 'Serologías positivas; granulomas caseificantes o placas ASPPC; respuesta a antibióticos.'
      },
      {
        condition: 'Metástasis Coroideas Amelanóticas',
        distinction: 'Antecedente de neoplasia epitelial primaria conocida (mama, pulmón); masas cupuliformes en polo posterior con reflectividad acústica media-baja en ecografía.'
      }
    ],
    steppedManagement: {
      medical: 'Estrategia de Manejo Multidisciplinario Onco-Oftalmológico:\n• REGLA PRE-BIOPSIA FUNDAMENTAL: Suspender TODO tratamiento con corticosteroides (tópicos, orales o perioculares) durante al menos 2 a 3 semanas antes de la vitrectomía diagnóstica. Los esteroides son citolíticos para los linfocitos B del linfoma y pueden inducir apoptosis masiva de las células tumorales, resultando en biopsias vítreas falsamente negativas.\n• Tratamiento del Linfoma Ocular Aislado (sin compromiso del SNC):\n  1) Inyecciones Intravítreas de Metotrexato: 400 µg en 0.1 mL administrado con pauta bisemanal durante 4 semanas, semanal durante 8 semanas y luego mensual hasta completar 1 año.\n  2) Inyecciones Intravítreas de Rituximab: 1.0 mg en 0.1 mL (anticuerpo monoclonal anti-CD20).\n  3) Radioterapia Ocular Externa Fraccionada: Dosis de 30 a 36 Gy dirigida a ambos globos oculares si hay afectación bilateral refractaria.\n• Tratamiento del Linfoma Ocular con Afectación del SNC (PCNSL):\n  - Quimioterapia Sistémica de Alta Dosis basada en Metotrexato Intravenoso a altas dosis (≥3.5 a 8 g/m²) capaz de atravesar la barrera hematoencefálica, combinada con Citarabina y Rituximab (Esquema MATRix), seguida en pacientes seleccionados de trasplante autólogo de progenitores hematopoyéticos (TAPH).',
      surgical: 'Técnica Quirúrgica de Biopsia Vítrea en Fresco:\n• Vitrectomía Pars Plana 25G diagnóstica: Toma de 1.5 a 2.0 mL de muestra vítrea pura no diluida "en seco" antes de encender la línea de infusión de BSS.\n• Transporte en mano inmediato sin formol a patología para procesamiento en menos de 1 hora (citopatología en fresco, citometría de flujo CD19/CD20 y ratio IL-10/IL-6).\n• Vitrectomía terapéutica posterior para aclaramiento de detritos celulares neoplásicos e inyecciones intravítreas repetidas de Metotrexato o Rituximab.'
    },
    clinicalApplicationPractical: 'Conducta Clave en Adultos Mayores con Vitritis: Todo paciente mayor de 50-60 años que debute con una supuesta "uveítis intermedia o posterior bilateral" refractaria o que dependa perpetuamente de corticoides orales es un Linfoma Intraocular Primario hasta que se demuestre lo contrario; remitir de inmediato para vitrectomía diagnóstica en centro especializado.\\n\\nCoordinación de la Muestra Vítrea: Nunca realizar la vitrectomía diagnóstica sin haber coordinado previamente con el servicio de patología y citometría de flujo para asegurar que el patólogo esté esperando la muestra en el quirófano para procesarla en fresco de inmediato.',
    highYieldPearl: 'Adulto mayor (>50-60 años) con "uveítis intermedia o vitritis crónica refractaria a esteroides" = Linfoma Intraocular Primario (DLBCL). Células en sábanas + infiltrados sub-EPR en leopardo. Diagnóstico: Vitrectomía en fresco + Ratio IL-10/IL-6 > 1 + Mutación MYD88 L265P.',
    keyDrugs: [
      {
        name: 'Metotrexato Intravítreo',
        dose: '400 µg en 0.1 mL inyectados a través de pars plana con aguja de 30G según protocolo escalonado.',
        warning: 'Quimioterápico antimetabolito de primera línea para linfoma vitreorretiniano localizado. Puede inducir queratopatía punteada superficial reversible tras inyecciones múltiples.'
      },
      {
        name: 'Rituximab Intravítreo',
        dose: '1.0 mg en 0.1 mL intravítreo.',
        warning: 'Anticuerpo monoclonal anti-CD20 que induce citotoxicidad celular mediada por anticuerpos en linfocitos B malignos. Excelente opción combinada con metotrexato.'
      },
      {
        name: 'Metotrexato Sistémico a Altas Dosis',
        dose: '3.5 a 8 g/m² en infusión intravenosa hospitalaria con hiperhidratación y alcalinización urinaria.',
        warning: 'Pilar del tratamiento oncológico cuando existe compromiso del SNC documentado. Requiere rescate obligado con Leucovorina.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Ratio de Citoquinas en Linfoma: IL-10 vs IL-6',
        category: 'Cifra Clave de Corte',
        description: 'En el linfoma intraocular de células B, las células malignas producen interleucina-10 (IL-10); en las uveítis inflamatorias infecciosas o autoinmunes predomina la interleucina-6 (IL-6). Un ratio IL-10 / IL-6 > 1.0 es fuertemente diagnóstico de linfoma.',
        trapToAvoid: 'Interpretar un ratio IL-10/IL-6 invertido (<1) como sugestivo de linfoma.'
      },
      {
        title: 'La Trampa de los Corticoides Pre-Biopsia',
        category: 'Trampa de Tribunal',
        description: 'Administrar corticoides orales o inyecciones antes de una vitrectomía diagnóstica provoca lisis celular de los linfocitos neoplásicos ("efecto fantasma"), negativizando la citología y retrasando el diagnóstico mortal. Suspender corticoides al menos 2-3 semanas antes de la biopsia.',
        trapToAvoid: 'Realizar vitrectomía diagnóstica en un paciente que está recibiendo prednisona a dosis altas.'
      },
      {
        title: 'Mutación Somática Patognomónica',
        category: 'Pregunta Clásica',
        description: 'La mutación L265P en el gen MYD88 se detecta en más del 70-80% de los linfomas vitreorretinianos primarios y permite confirmar el diagnóstico molecular incluso con muestras celulares vítreas escasas.',
        trapToAvoid: 'Desconocer el valor de la mutación MYD88 en la patología molecular del linfoma ocular.'
      }
    ],
    fellowshipKeyPoints: [
      'Criterios del International Primary CNS Lymphoma Collaborative Group (IPCG, J Clin Oncol 2011): Estandarizó las recomendaciones diagnósticas y terapéuticas para el linfoma vitreorretiniano, consagrando la vitrectomía con citopatología, citometría e interleucinas como la tríada diagnóstica obligada.',
      'Ensayo IELSG32 (Ferreri et al., Lancet Haematol 2016): Demostró que la adición de Rituximab y Citarabina al Metotrexato a altas dosis (régimen MATRix) mejoró significativamente la supervivencia libre de progresión y la supervivencia global en pacientes con PCNSL.'
    ],
    landmarkTrials: [
      {
        name: 'Interleukin-10 and Interleukin-6 Levels in Aqueous and Vitreous in Ocular Lymphoma',
        year: '2011',
        conclusion: 'El cociente IL-10/IL-6 > 1.0 en muestras intraoculares demostró una sensibilidad del 89% y especificidad del 93% para diferenciar el linfoma intraocular de las uveítis inflamatorias.',
        fellowshipRelevance: 'Biomarcador citoquímico estándar utilizado a nivel mundial para guiar el diagnóstico de mascarada neoplásica.'
      }
    ],
    histopathologyAndGenetics: 'Genética: Mutaciones en MYD88 (L265P) y CD79B, con rearreglos clonales del gen IGH. Histopatología: Células linfoides de gran tamaño (2-3 veces el tamaño de un eritrocito) con núcleos vesiculosos pleomórficos, indentaciones nucleares, cromatina densa y múltiples nucléolos prominentes basófilos adheridos a la membrana nuclear; inmunohistoquímica fuertemente positiva para CD20, CD19, PAX5 y BCL6.',
    surgicalPearls: [
      'Técnica de Vitrectomía Diagnóstica: Realizar la vitrectomía con vitreófago de 25G o 27G a baja velocidad de corte (600 a 1000 cpm) y aspiración suave para no fragmentar las frágiles células tumorales; recolectar los primeros 1.5 a 2 mL de vítreo puro "seco" directamente en una jeringa estéril antes de abrir la línea de infusión de BSS.',
      'Manejo de la Muestra: Enviar la muestra inmediatamente sin diluir a mano al patólogo en un recipiente estéril refrigerado con hielo o con medio de transporte celular (RPMI); procesar en menos de 1 hora.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer de 67 años acude remitida por "uveítis intermedia bilateral crónica" de 8 meses de evolución que ha recibido múltiples ciclos de corticoides orales e inyecciones perioculares de triamcinolona. Refiere que cada vez que toma prednisona la visión aclara ligeramente, pero a las dos semanas de reducir la dosis vuelve a quedar con visión muy borrosa. Su agudeza visual es 20/100 en ambos ojos. La biomicroscopía muestra cámara anterior tranquila (cero células) y en vítreo se observan células atípicas abundantes agrupadas en sábanas y filamentos flotantes. El fondo de ojo revela múltiples infiltrados blanco-amarillentos cupuliformes profundos situados debajo del EPR en ambos polos posteriores con áreas adyacentes de atrofia en piel de leopardo. ¿Cuál es el diagnóstico de sospecha más crítico, qué paso farmacológico debe tomarse antes de cualquier procedimiento diagnóstico y cuál es el protocolo de confirmación anatomopatológica y molecular?',
        answer: '1) Diagnóstico de Sospecha Más Crítico:\n   - Síndrome de Mascarada Neoplásico: Linfoma Intraocular Primario del SNC (Vitreoretinal Lymphoma / Linfoma difuso de células B grandes DLBCL) bilateral.\n2) Paso Farmacológico Inaplazable Previo a la Biopsia:\n   - SUSPENDER DE INMEDIATO todo tratamiento con corticosteroides (orales, tópicos, perioculares) durante al menos 2 a 3 semanas antes de cualquier intervención quirúrgica diagnóstica.\n   - Justificación: Los glucocorticoides son citolíticos directos para los linfocitos tumorales del linfoma; realizar una biopsia bajo efecto esteroideo produce una lisis celular masiva, llevando a biopsias vítreas falsamente negativas que demoran catastróficamente el diagnóstico oncológico.\n3) Protocolo de Confirmación Diagnóstica Multimodal:\n   - Vitrectomía Pars Plana Diagnóstica 25G en fresco: Tomar 1.5 a 2.0 mL de muestra vítrea pura no diluida antes de encender la infusión, transportada inmediatamente en mano a patología.\n   - Citopatología en fresco: Demostración de células linfoides grandes pleomórficas atípicas con alto ratio núcleo/citoplasma y múltiples nucléolos.\n   - Citometría de flujo: Inmunofenotipo B monoclonal (CD19+, CD20+) con restricción de cadenas ligeras kappa o lambda.\n   - Citoquinas en humor vítreo: Cuantificación de interleucinas con ratio IL-10 / IL-6 > 1.0.\n   - Biología Molecular: Búsqueda de la mutación somática MYD88 L265P y clonalidad de rearreglo del gen IgH por PCR.\n   - Estudio de Extensión Ineludible: Resonancia Magnética Cerebral con gadolinio y punción lumbar para descartar compromiso encefálico y meníngeo.',
        trap: 'Realizar la vitrectomía diagnóstica mientras la paciente continúa tomando prednisona a dosis altas, o fijar la muestra vítrea con formol ordinario destruyendo las células tumorales.'
      }
    ]
  },

  // =========================================================================
  // 12. FARMACOTERAPIA INMUNOMODULADORA Y ENSAYOS CLÍNICOS EN UVEÍTIS
  // =========================================================================
  {
    id: 'deep-uveitis-inmunosupresores-biologicos-ensayos',
    title: 'Farmacoterapia Inmunomoduladora en Uveítis: Corticoides, Ahorradores, Terapia Biológica Anti-TNF-α (Adalimumab) y Ensayos Clínicos',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre el escalafón terapéutico moderno de la inflamación ocular no infecciosa: Corticosteroides (inducción con megadosis intravenosas y prednisona oral con pauta de descenso reglada), agentes ahorradores convencionales (Antimetabolitos: Metotrexato, Micofenolato mofetilo, Azatioprina; Inhibidores de Calcineurina: Ciclosporina A, Tacrolimus), la revolución de las Terapias Biológicas (Anti-TNF-α Adalimumab e Infliximab; Anti-IL-6 Tocilizumab), dispositivos de liberación prolongada intraocular (Ozurdex, Retisert, Yutiq) y análisis crítico de los ensayos landmark que transformaron la oftalmología (VISUAL I, VISUAL II, MUST, FAST, SYCAMORE).',
    definitionAndEpidemiology: 'La Terapia Inmunomoduladora Sistémica (IMT) constituye la base del tratamiento a mediano y largo plazo de las uveítis no infecciosas intermedias, posteriores y panuveítis que amenazan la visión. Aproximadamente el 35% de los pacientes con uveítis no infecciosa requieren terapia inmunosupresora ahorradora debido a la corticodependencia (imposibilidad de reducir la prednisona a ≤7.5 mg/día sin reactivación), resistencia a esteroides o intolerancia a sus graves efectos adversos sistémicos.',
    anatomyAndPathophysiology: '1. Cascada Inflamatoria Ocular y Dianas Farmacológicas:\n   • Activación de células presentadoras de antígenos (células dendríticas y macrófagos) en la úvea con estimulación de linfocitos T autorreactivos vírgenes mediada por IL-12 e IL-23.\n   • Diferenciación clonal en linfocitos efectores Th1 (secretores de IFN-γ y TNF-α) y Th17 (secretores de IL-17 e IL-22), los cuales atraviesan la barrera hematorretiniana y desatan la disrupción de la barrera endotelial, edema macular y necrosis tisular.\n2. Mecanismos Moleculares de los Fármacos:\n   • Corticosteroides: Unión al receptor citosólico de glucocorticoides con traslocación nuclear y trans-represión del factor NF-κB, bloqueando la transcripción de prácticamente todas las citoquinas inflamatorias y estabilizando las membranas endoteliales.\n   • Metotrexato: Inhibe la dihidrofolato reductasa (DHFR) y la AICAR transformilasa, induciendo acumulación extracelular de adenosina, un potente antiinflamatorio endógeno.\n   • Micofenolato Mofetilo: Inhibidor reversible no competitivo de la inosina monofosfato deshidrogenasa (IMPDH), bloqueando la síntesis de novo de guanina requerida exclusivamente por linfocitos T y B para proliferar.\n   • Ciclosporina A: Se une a la ciclofilina formando un complejo que bloquea la calcineurina, impidiendo la desfosforilación del factor NFAT y la transcripción de IL-2 (detiene la proliferación de linfocitos T efectores).\n   • Adalimumab / Infliximab: Bloquean de forma específica y con altísima afinidad el Factor de Necrosis Tumoral alfa (TNF-α) tanto soluble como unido a membrana, induciendo apoptosis de linfocitos activados y restaurando la integridad de la barrera hematorretiniana.',
    clinicalExamination: {
      biomicroscopy: 'Monitorización cuantitativa rigurosa según criterios SUN: Registro del grado de células en cámara anterior y flare en cada visita clínica. Exploración de cristalino en busca de catarata subcapsular posterior precoz por esteroides.',
      fundus: 'Control estrecho del haze vítreo (opacidad vítrea según escala del National Eye Institute / Nussenblatt de 0 a 4+), resolución de la periflebitis y de los desprendimientos de retina serosos.',
      specialSigns: '• Efectos adversos sistémicos de corticoides crónicos: Síndrome de Cushing iatrogénico (cara de luna llena, obesidad troncal, estrías purpúreas), hipertensión arterial, hiperglucemia/diabetes esteroidea, osteoporosis y necrosis avascular de cabeza femoral.\n• Hipertensión ocular por respuesta esteroidea (*steroid response*) en el 30% de la población general (mediada por acumulación de glicosaminoglicanos en el trabéculo).'
    },
    diagnosticWorkup: [
      {
        test: 'Protocolo de Seguridad Pre-Inmunosupresión Obligatorio',
        findings: 'Antes de iniciar cualquier fármaco biológico (Adalimumab/Infliximab) o inmunomodulador convencional:\n1) Descarte de Tuberculosis Latente: QuantiFERON-TB Gold Plus o PPD + Radiografía de tórax.\n2) Serología Viral: Hepatitis B (HBsAg, Anti-HBc), Hepatitis C (Anti-HCV) y VIH.\n3) Hemograma completo y bioquímica basal (Creatinina, TFG, AST, ALT, Bilirrubinas).\n4) En mujeres en edad fértil: Prueba de embarazo negativa y consentimiento de anticoncepción eficaz.'
      },
      {
        test: 'Monitorización Paraclínica Periódica durante el Tratamiento',
        findings: 'Hemograma completo, creatinina y transaminasas hepáticas cada 4 a 6 semanas los primeros 3 meses, y luego cada 2 a 3 meses de forma indefinida.'
      },
      {
        test: 'SD-OCT Macular y Angiografía de Campo Amplio',
        findings: 'Control cuantitativo del grosor retiniano central y ausencia de fuga perivascular para certificar remisión biológica completa.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Uveítis Infecciosas No Diagnosticadas (Tuberculosis, Sífilis, Herpes, Toxoplasma)',
        distinction: 'Regla de Oro: La administración de inmunosupresores sistémicos o agentes anti-TNF en presencia de una infección ocular no diagnosticada provoca diseminación bacteriana/viral fulminante con destrucción ocular irreversible.'
      },
      {
        condition: 'Linfoma Intraocular Primario del SNC',
        distinction: 'Simula uveítis crónica corticodependiente; los inmunosupresores retrasan el diagnóstico y empeoran la supervivencia.'
      }
    ],
    steppedManagement: {
      medical: 'Escalafón Terapéutico Estandarizado en Uveítis No Infecciosa:\n• Nivel 1 (Inducción Rápida con Corticosteroides):\n  - Formas Graves con amenaza foveal: Pulsos de Metilprednisolona IV (1 g/día por 3 días consecutivos).\n  - Formas Moderadas: Prednisona oral a 1 mg/kg/día durante 2 a 4 semanas.\n  - Meta: Lograr el control inflamatorio completo (Tyndall 0 células, resolución del edema macular) e iniciar inmediatamente la reducción gradual.\n• Nivel 2 (Indicaciones Mandatorias de Ahorradores Inmunosupresores):\n  - 1) Imposibilidad de reducir la prednisona por debajo de 7.5 a 10 mg/día tras 3 meses de tratamiento sin reactivación inflamatoria.\n  - 2) Toxicidad intolerable o contraindicación para corticoides (diabetes severa, osteoporosis grave, glaucoma descontrolado).\n  - 3) Ciertas patologías que exigen inmunomodulación precoz mandatoria desde el diagnóstico (Enfermedad de Behçet con vasculitis retiniana, VKH, Oftalmía Simpática, Birdshot).\n• Nivel 3 (Fármacos Ahorradores Convencionales):\n  - Metotrexato: 15 a 25 mg una vez por semana (subcutáneo u oral) + ácido fólico.\n  - Micofenolato Mofetilo: 1 g cada 12 horas VO con estómago vacío (ensayo FAST demostró eficacia comparable al metotrexato con excelente perfil de tolerancia).\n  - Azatioprina: 2 a 2.5 mg/kg/día VO.\n  - Ciclosporina A: 2.5 a 4.0 mg/kg/día VO (especialmente eficaz combinada con antimetabolitos en VKH y Birdshot).\n• Nivel 4 (Terapias Biológicas Anti-TNF-α - Aprobación FDA/EMA):\n  - Adalimumab (Humira): 80 mg dosis de carga SC, seguida de 40 mg SC cada 2 semanas (evidencia de grado A probada en ensayos VISUAL I y VISUAL II).\n  - Infliximab: 5 a 10 mg/kg IV en semanas 0, 2, 6 y luego cada 6-8 semanas (de elección en Behçet grave).\n• Nivel 5 (Implantes Intraoculares de Liberación Sostenida):\n  - Implante de Dexametasona 0.7 mg (Ozurdex, biodegradable, duración 4-6 meses).\n  - Implante de Fluocinolona acetónido 0.18 mg (Yutiq, no biodegradable, liberación sostenida continua hasta 36 meses).',
      surgical: 'Técnicas Quirúrgicas e Implantes Intraoculares:\n• Inyección intravítrea de implantes de liberación sostenida de dexametasona (Ozurdex 0.7 mg) o fluocinolona (Yutiq 0.18 mg / Retisert) a través de pars plana (3.5-4 mm del limbo).\n• Cirugía de catarata o glaucoma en ojo uveítico: Operar únicamente cuando el ojo haya permanecido en quiescencia absoluta (cero células) durante al menos 3 meses bajo profilaxis con esteroides orales.'
    },
    clinicalApplicationPractical: 'Regla del Umbral de Dosis de Mantenimiento Seguro: La dosis máxima de prednisona oral segura para mantener a largo plazo en un adulto es de ≤7.5 mg al día; dosis superiores mantenidas por más de 3 meses provocan daño osteomuscular, cardiovascular y metabólico acumulativo grave. Si un paciente requiere >7.5-10 mg/día para estar en remisión, es MANDATORIO asociar un fármaco ahorrador (Micofenolato, Metotrexato o Adalimumab).\\n\\nCribado de TB antes de Biológicos: El inicio de Adalimumab o Infliximab en un paciente con tuberculosis latente no tratada puede gatillar una tuberculosis diseminada extrapulmonar o miliar mortal; el descarte con IGRA (QuantiFERON) y radiografía de tórax es obligatorio e innegociable.',
    highYieldPearl: 'Si un paciente con uveítis no infecciosa requiere >7.5-10 mg/día de prednisona para estar inactivo, está indicada la inmunosupresión ahorradora. Adalimumab es el primer biológico aprobado por FDA/EMA para uveítis no infecciosa activa e inactiva (ensayos VISUAL I y II).',
    keyDrugs: [
      {
        name: 'Adalimumab (Humira)',
        dose: 'Dosis de carga de 80 mg SC día 1, seguida de 40 mg SC cada 2 semanas a partir de la semana 2.',
        warning: 'Primer y único anticuerpo monoclonal totalmente humanizado anti-TNF aprobado para uveítis no infecciosa intermedia, posterior y panuveítis en adultos y niños (SYCAMORE).'
      },
      {
        name: 'Micofenolato Mofetilo (CellCept)',
        dose: '1,000 mg cada 12 horas por vía oral con el estómago vacío.',
        warning: 'Inhibidor selectivo de IMPDH en linfocitos T y B. En el ensayo FAST demostró eficacia similar al metotrexato para lograr control inflamatorio libre de esteroides.'
      },
      {
        name: 'Implante Intravítreo de Fluocinolona 0.18 mg (Yutiq)',
        dose: 'Inyección intravítrea única de 0.18 mg a través de pars plana con liberador de 25G.',
        warning: 'Microimplante no biodegradable que libera fluocinolona a ritmo constante durante 36 meses. Alto riesgo de desarrollo de catarata y necesidad de hipotensores o cirugía filtrante.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Cifra de Corte de Corticodependencia',
        category: 'Cifra Clave de Corte',
        description: 'Se define corticodependencia cuando la inflamación reactiva al intentar reducir la prednisona oral por debajo de 7.5 a 10 mg/día (o >2 gotas/día de corticoide tópico en niños con AIJ). Es la indicación estándar para iniciar inmunomoduladores.',
        trapToAvoid: 'Mantener a un paciente con 20 mg/día de prednisona durante años sin asociar ahorradores sistémicos.'
      },
      {
        title: 'Ensayo FAST: Metotrexato vs Micofenolato',
        category: 'Evidencia Landmark',
        description: 'El ensayo First-line Antimetabolites as Steroid-sparing Treatment (FAST trial, JAMA 2019) comparó Metotrexato vs Micofenolato en uveítis no infecciosa; demostró que ambos tienen tasas de éxito similares (~60-70%), con leve superioridad de metotrexato en panuveítis y de micofenolato en uveítis intermedia.',
        trapToAvoid: 'Afirmar que el micofenolato es clínicamente superior al metotrexato en el control global de la uveítis.'
      },
      {
        title: 'Screening Previo a Terapia Biológica Anti-TNF',
        category: 'Pregunta Clásica',
        description: 'Tres descartes mandatorios antes de prescribir Adalimumab o Infliximab: 1) Tuberculosis latente (IGRA/PPD y Rx de tórax), 2) Infección por Hepatitis B y C, y 3) Enfermedad desmielinizante del SNC (Esclerosis Múltiple, ya que los anti-TNF exacerban la desmielinización).',
        trapToAvoid: 'Prescribir Adalimumab a un paciente con uveítis intermedia sin haber descartado esclerosis múltiple mediante neuroimagen previa.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayos VISUAL I y VISUAL II (NEJM 2016 / Lancet 2016): Demostraron que Adalimumab prolongó significativamente el tiempo hasta el fallo del tratamiento en uveítis no infecciosa activa e inactiva corticodependiente, reduciendo los brotes y permitiendo el retiro seguro de los corticoides.',
      'Ensayo MUST (Multicenter Uveitis Steroid Treatment Trial, JAMA 2017): Demostró que a los 7 años de seguimiento, la terapia inmunosupresora sistémica logró resultados visuales similares al implante intraocular de fluocinolona (Retisert) con significativamente menor tasa de catarata y glaucoma quirúrgico.'
    ],
    landmarkTrials: [
      {
        name: 'VISUAL I Trial (Adalimumab in Active Non-Infectious Uveitis)',
        year: '2016',
        conclusion: 'Adalimumab duplicó el tiempo libre de falla del tratamiento en comparación con placebo en pacientes con uveítis activa no infecciosa a pesar de corticoides.',
        fellowshipRelevance: 'Hito histórico que transformó el estándar de tratamiento de la uveítis no infecciosa en todo el mundo.'
      },
      {
        name: 'FAST Trial (First-line Antimetabolites as Steroid-sparing Treatment)',
        year: '2019',
        conclusion: 'Metotrexato y Micofenolato mofetilo mostraron una eficacia equivalente como ahorradores de esteroides de primera línea para el control de la inflamación ocular no infecciosa.',
        fellowshipRelevance: 'Validó a ambos antimetabolitos como opciones intercambiables de primera línea según costo, perfil hepático y tolerancia del paciente.'
      }
    ],
    histopathologyAndGenetics: 'Farmacogenómica: La presencia del alelo HLA-B*5101 predice una respuesta óptima a los agentes anti-TNF en la enfermedad de Behçet; la determinación de variantes en la tiopurina metiltransferasa (TPMT) es obligatoria antes de iniciar azatioprina para evitar aplasia medular fatal por acumulación de 6-tioguanina. Histopatología: La resolución de la inflamación bajo terapia biológica se caracteriza por el cese de la extravasación de fibrina, normalización de las uniones ocluyentes endoteliales y aclaramiento del infiltrado perivascular linfoplasmocitario.',
    surgicalPearls: [
      'Al implantar dispositivos de liberación sostenida de dexametasona (Ozurdex): Inyectar con ángulo tangencial a 3.5-4 mm del limbo escleral en cuadrante temporal inferior; asegurar visualización directa de la entrada de la aguja con lámpara de hendidura o indirecto para no lacerar el cristalino.',
      'Si se realiza cirugía intraocular en paciente bajo tratamiento con Adalimumab o Infliximab: No es necesario suspender el fármaco biológico si la inflamación está estrictamente controlada; suspenderlo aumenta el riesgo de un rebote inflamatorio intraocular severo postoperatorio.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer de 42 años con panuveítis no infecciosa bilateral idiopática controlada inicialmente con prednisona oral a 60 mg/día, acude a revisión a los 4 meses. Su agudeza visual es de 20/25 en ambos ojos sin celularidad activa en CA ni vitritis. Sin embargo, cada vez que su médico intenta reducir la dosis de prednisona por debajo de 15 mg/día, presenta recurrencia inmediata de vitritis y edema macular. Presenta aumento de peso de 10 kg, facies cushingoide y cifras tensionales de 145/95 mmHg. La densitometría ósea muestra osteopenia moderada. ¿Cuál es el diagnóstico farmacológico del cuadro, qué decisión terapéutica inaplazable debe tomarse y cuáles son las opciones de primera línea respaldadas por los ensayos clínicos VISUAL y FAST?',
        answer: '1) Diagnóstico Farmacológico:\n   - Uveítis no infecciosa Corticodependiente con toxicidad esteroidea sistémica severa manifiesta (síndrome de Cushing iatrogénico, hipertensión arterial y osteopenia).\n2) Decisión Terapéutica Inaplazable:\n   - Iniciar inmediatamente Terapia Inmunosupresora Sistémica Ahorradora de Esteroides para permitir el descenso seguro de la prednisona oral por debajo de 7.5 mg/día y su posterior retirada definitiva, evitando una catástrofe metabólica y cardiovascular.\n3) Opciones Terapéuticas de Primera Línea Respaldadas por Ensayos Landmark:\n   - Opción Biológica de Primera Elección (Ensayos VISUAL I y VISUAL II):\n     * Adalimumab (Humira): Dosis de carga de 80 mg vía subcutánea, seguida de 40 mg SC cada 2 semanas. Aprobado específicamente por FDA y EMA para uveítis intermedia, posterior y panuveítis no infecciosa activa e inactiva corticodependiente, con reducción demostrada del 50% en el riesgo de falla del tratamiento.\n   - Opción con Inmunomoduladores Convencionales Antimetabolitos (Ensayo FAST):\n     * Micofenolato Mofetilo (1 g cada 12 horas VO) O Metotrexato (15 a 20 mg/semana SC con ácido fólico). El ensayo multicéntrico aleatorizado FAST (JAMA 2019) demostró que ambos antimetabolitos tienen una eficacia equivalente (~60-70% de éxito en control libre de corticoides).\n4) Descarte de Seguridad Obligatorio antes de iniciar el tratamiento:\n   - Ensayo IGRA (QuantiFERON-TB Gold) y Radiografía de tórax para descartar tuberculosis latente.\n   - Serología para Hepatitis B (HBsAg, anti-HBc) y Hepatitis C.\n   - Hemograma completo y función renal y hepática basal.',
        trap: 'Aumentar la dosis de prednisona oral a 60 mg o mantener 15-20 mg/día indefinidamente sin asociar ahorradores sistémicos o biológicos, causando fracturas osteoporóticas, diabetes y necrosis avascular.'
      }
    ]
  },

  // =========================================================================
  // 13. ENFERMEDAD DE BEHÇET OCULAR
  // =========================================================================
  {
    id: 'deep-uveitis-enfermedad-behcet-ocular',
    title: 'Enfermedad de Behçet Ocular: Vasculitis Oclusiva Necrotizante, Hipopión Frío Móvil y Terapia Biológica Anti-TNF',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre Enfermedad de Behçet con afectación ocular: vasculitis sistémica oclusiva neutrofílica no granulomatosa mediada por inmunocomplejos y linfocitos Th1/Th17 con potente agregación plaquetaria; genética poblacional a lo largo de la Ruta de la Seda y ligamiento estricto a HLA-B*51; curso clínico episódico explosivo recidivante con ataques agudos autolimitados ("episodios en llamarada"); signos biomicroscópicos característicos: panuveítis no granulomatosa con hipopión transitorio móvil que cambia con la posición cefálica ("hipopión frío"), periflebitis y periarteritis retiniana oclusiva severa con envainamiento vascular, hemorragias intraretinianas, edema macular quístico, infiltrados retinianos blanquecinos necróticos focales e isquemia retiniana extensa; criterios internacionales de clasificación ICBD; abordaje farmacológico de máxima urgencia: pulsos intravenosos de metilprednisolona, contraindicación absoluta de monoterapia con corticoides para mantenimiento, e indicación prioritaria de Agentes Anti-TNF-alfa (Infliximab e Infliximab bioequivalente o Adalimumab) para frenar la pérdida visual acumulativa.',
    definitionAndEpidemiology: 'La Enfermedad de Behçet (Síndrome de Adamantiades-Behçet) es una vasculitis autoinflamatoria sistémica multisistémica crónica caracterizada por brotes recurrentes de úlceras orales aftosas dolorosas, úlceras genitales, lesiones cutáneas y panuveítis no granulomatosa recidivante con afectación vascular retiniana. Presenta una distribución geográfica endémica muy marcada a lo largo de la histórica "Ruta de la Seda" (desde el Mediterráneo oriental y Turquía hasta Japón y Corea), con prevalencias de hasta 80 a 420 por 100.000 habitantes en Turquía. Es más frecuente y ostensiblemente más grave en varones jóvenes entre los 20 y 40 años de edad. La afectación ocular ocurre en el 60-80% de los pacientes y constituye la principal causa de morbilidad y ceguera permanente por atrofia óptica e isquemia macular acumulada.',
    anatomyAndPathophysiology: '1. Inmunogenética y Desencadenantes:\n   • Fuerte asociación genética con el alelo HLA-B*51 (particularmente el subtipo HLA-B*5101), que multiplica el riesgo relativo de desarrollar la enfermedad por 5 a 6 veces.\n   • Polimorfismos en receptores de interleucina (IL-10, IL-23R) y en la aminopeptidasa del retículo endoplásmico 1 (ERAP1).\n2. Mecanismo Fisiopatológico de la Vasculitis Oclusiva:\n   • Hiperreactividad innata neutrofílica masiva con degranulación no provocada y secreción masiva de citoquinas proinflamatorias (TNF-alfa, IL-1beta, IL-6, IL-17 e IL-8).\n   • La extravasación de neutrófilos hacia el estroma del iris y cuerpo ciliar produce el característico hipopión estéril.\n   • En el polo posterior, la vasculitis afecta tanto a vénulas como a arteriolas retinianas (periflebitis y periarteritis necrosante oclusiva).\n   • Daño endotelial con activación plaquetaria intrínseca y formación de microtrombos de fibrina intramurales que obliteran el lumen vascular capilar.\n   • Áreas extensas de isquemia y necrosis retiniana difusa ("ghost vessels" o vasos en hilo de plata), edema macular grave y neovascularización prerretiniana secundaria con hemorragias vítreas recurrentes y desprendimiento traccional.',
    clinicalExamination: {
      biomicroscopy: '• Ojo Anterior: Uveítis anterior no granulomatosa aguda (células finas en endotelio corneal, AUSENCIA de precipitados queráticos en grasa de carnero). Formación de un HIPAPIÓN MÓVIL "FRÍO": Nivel blanquecino estéril de neutrófilos en la cámara anterior que cambia de posición al inclinar la cabeza del paciente (líquido libre no coagulado por falta de fibrina densa) y que puede resolverse espontáneamente o cambiar de volumen en 24 a 48 horas sin dejar sinequias.\n• Segmento Posterior: Vitritis moderada a intensa; focos blanquecinos o amarillentos algodonosos de necrosis retiniana profunda en polo posterior que desaparecen sin dejar cicatrices pigmentadas marcadas; envainamiento perivascular blanquecino grueso en manguito de vénulas y arterias; edema de papila y edema macular cistoide.',
      fundus: 'Vasculitis oclusiva retinal con hemorragias en llama y en mancha, envainamiento perivascular segmental y atrofia óptica secundaria pálida tras múltiples brotes.',
      specialSigns: '• Test de Patergia Positivo: Aparición de una pápula o pústula eritematosa estéril de 1 a 2 mm en la piel a las 24-48 horas tras una punción intradérmica estéril con aguja de calibre 20-22G en el antebrazo (signo clásico de hiperreactividad tisular neutrofílica).\n• Hipopión Móvil Libre: A diferencia del hipopión denso y fibrinoso de la espondilitis anquilosante (HLA-B27) que está adherido al endotelio, el hipopión de Behçet es fluido y oscila libremente con la gravedad.'
    },
    diagnosticWorkup: [
      {
        test: 'Angiografía Fluoresceínica de Campo Amplio (Ultra-Widefield FFA)',
        findings: 'Examen de cabecera de máxima sensibilidad: Muestra fuga masiva de fluoresceína perivascular en "árbol de navidad" o manguito hiperfluorescente difuso en fases tardías, oclusión capilar periférica extensa con áreas de retina isquémica no perfundida negra ("capillary non-perfusion") y edema macular cistoide.'
      },
      {
        test: 'Tipificación Molecular del Antígeno Leucocitario Humano HLA-B*51',
        findings: 'Positivo en más del 60-80% de los pacientes del Mediterráneo y Medio Oriente con enfermedad de Behçet ocular; apoya sólidamente la sospecha en cuadros incompletos.'
      },
      {
        test: 'Criterios Internacionales para la Enfermedad de Behçet (ICBD Score, 2014)',
        findings: 'Sistema de puntuación diagnóstica validado: Úlceras orales recurrentes (2 puntos), Úlceras genitales recurrentes (2 puntos), Afectación ocular (uveítis anterior, posterior o vasculitis: 2 puntos), Lesiones cutáneas (pseudofoliculitis, eritema nudoso: 1 punto), Manifestaciones del SNC (1 punto), Manifestaciones vasculares periféricas (tromboflebitis profunda, aneurismas: 1 punto), Test de Patergia positivo (1 punto). Puntuación total >= 4 puntos confirma el diagnóstico definitivo con sensibilidad >93%.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Uveítis Anterior Asociada a HLA-B27',
        distinction: 'Uveítis anterior UNILATERAL alternante con hipopión grueso muy fibrinoso e inmóvil adherido al cristalino e iris; sin vasculitis retiniana oclusiva ni úlceras genitales.'
      },
      {
        condition: 'Necrosis Retiniana Aguda (ARN)',
        distinction: 'Producida por herpes virus (VHS/VVZ), necrosis retiniana periférica coalescente de avance centrípeto fulminante con desprendimientos regmatógenos en el 75%; Behçet no produce desgarros gigantes ni responde a aciclovir.'
      },
      {
        condition: 'Sarcoidosis Ocular',
        distinction: 'Uveítis granulomatosa con precipitados queráticos gruesos en grasa de carnero, nódulos del iris de Koeppe/Busacca y periflebitis segmental en "velas de cera", con elevación de ECA sérica.'
      }
    ],
    steppedManagement: {
      medical: '• ENFOQUE TERAPÉUTICO DE URGENCIA REGLADO (Guías EULAR y Consenso Internacional de Uveítis):\n  - REGLA DE ORO DE SEGURIDAD ABSOLUTA: LA MONOTERAPIA CON CORTICOIDES ESTÁ PROHIBIDA EN BEHÇET OCULAR; los esteroides solos calman el brote agudo transitoriamente pero NO detienen la vasculitis oclusiva subclínica, acelerando la ceguera por atrofia retiniana.\n  - Fase de Choque (Brote Agudo Grave con Afectación Retiniana / Macular):\n    * Pulsos intravenosos de Metilprednisolona (1,000 mg/día IV durante 3 días consecutivos con monitorización cardiovascular y gastroprotección).\n    * Seguidos de Prednisona oral a dosis de 1 mg/kg/día con pauta descendente rápida en 4-6 semanas conforme el tratamiento inmunosupresor ahorrador haga efecto.\n  - Terapia Biológica de Primera Línea de Elección (Revolución Anti-TNF-alfa):\n    * INFLIXIMAB (Remicade o bioequivalentes): Infusión intravenosa de 5 mg/kg en las semanas 0, 2 y 6, y posteriormente cada 6 a 8 semanas. Fármaco de rescate más rápido y eficaz para abortar crisis de vasculitis retiniana fulminante.\n    * ADALIMUMAB (Humira): Dosis de carga de 80 mg subcutánea el día 1, seguida de 40 mg SC cada 2 semanas; altamente eficaz para inducir y mantener la remisión prolongada libre de brotes.\n  - Inmunomoduladores Convencionales Coadyuvantes / Ahorradores:\n    * Azatioprina (2.5 mg/kg/día VO) combinada con Ciclosporina A (3-5 mg/kg/día VO); la ciclosporina actúa con rapidez sobre los neutrófilos pero exige control estricto de creatinina, presión arterial y debe suspenderse si aparecen signos de neuro-Behçet.\n    * Interferón alfa-2a (IFN-alfa): Inyecciones de 3 a 6 millones de UI SC 3 veces por semana; inductor potente de remisión duradera libre de tratamiento.',
      surgical: '• Intervenciones Quirúrgicas en Complicaciones de Behçet:\n  - Fotocoagulación Panretiniana con Láser Argón (PRP):\n    * Dirigida a las áreas isquémicas de no perfusión retiniana documentadas en la FAG para inducir la regresión de la neovascularización y prevenir hemorragias vítreas masivas.\n  - Vitrectomía Pars Plana (VPP):\n    * Indicada ante hemorragia vítrea no reabsorbida tras 2-3 meses o desprendimiento traccional de retina.\n    * OBLIGATORIO: Control inmunosupresor biológico impecable durante al menos 1 a 3 meses antes de entrar a quirófano para evitar un estallido inflamatorio devastador post-quirúrgico.'
    },
    clinicalApplicationPractical: '1. Reconocer el Hipopión "Frío": Si un paciente acude con un hipopión de 1 mm pero el ojo apenas está ligeramente hiperémico, no hay dolor atroz y el hipopión se desplaza libremente al mover la cabeza, busque aftas orales y genitales; está ante una Enfermedad de Behçet.\n2. Infliximab rescata la mácula en 24-48 horas: En la vasculitis oclusiva macular de Behçet cada hora cuenta. La infusión de Infliximab a 5 mg/kg frena la degranulación neutrofílica y reabre capilares en horas, salvando la visión central.\n3. Cuidado con la Ciclosporina y el Neuro-Behçet: Si un paciente en tratamiento con Ciclosporina A para Behçet ocular refiere cefaleas intensas, visión doble o ataxia, suspenda la ciclosporina de inmediato; la ciclosporina potencia la toxicidad del SNC y puede precipitar o agravar un neuro-Behçet.',
    highYieldPearl: 'Behçet Ocular Board Rule: Hipopión frío móvil + vasculitis oclusiva retiniana severa ligada a HLA-B51 y test de patergia positivo. MONOTERAPIA CON ESTEROIDES PROHIBIDA. El tratamiento biológico de primera línea son los Anti-TNF (Infliximab o Adalimumab).',
    keyDrugs: [
      { name: 'Infliximab intravenoso (Remicade)', dose: '5 mg/kg IV en sem 0, 2, 6 y cada 6-8 sem', warning: 'Agente biológico de rescate de elección para vasculitis retiniana severa; screening de TB obligatorio.' },
      { name: 'Adalimumab subcutáneo (Humira)', dose: '80 mg SC día 1, luego 40 mg SC cada 14 días', warning: 'Anti-TNF humanizado aprobado para mantenimiento y prevención de brotes oculares recidivantes.' },
      { name: 'Azatioprina oral (Imurel)', dose: '2.5 mg/kg/día por vía oral', warning: 'Antimetabolito inmunosupresor de mantenimiento; monitorizar hemograma y transaminasas.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Hipopión de Behçet vs Hipopión de HLA-B27',
        category: 'Asociación Patognomónica',
        description: 'Behçet: Hipopión fluido, móvil con la gravedad ("frío"), libre de fibrina masiva, transitorio (dura 24-48h) y no deja sinequias. HLA-B27: Hipopión espeso, viscoso, coagulado con abundante fibrina, inmóvil, adherente a la cápsula anterior y formador de sinequias posteriores masivas.',
        trapToAvoid: 'Creer que todos los hipopiones en uveítis se comportan igual y fijan el iris.'
      },
      {
        title: 'Por Qué los Corticoides Solos están Prohibidos en Behçet',
        category: 'Pregunta Clásica',
        description: 'Pregunta clásica de tribunal de subespecialidad: "¿Por qué está contraindicada la monoterapia con glucocorticoides para el manejo de mantenimiento del Behçet ocular?". Respuesta: Porque los corticoides en monoterapia inducen una remisión sintomática superficial del brote agudo pero permiten la progresión silenciosa continua de la vasculitis oclusiva retiniana con atrofia acumulada de la CFNR e isquemia, conduciendo a ceguera irreversible en el 75% a 5 años.',
        trapToAvoid: 'Dar prednisona oral sin asociar inmediatamente un fármaco biológico Anti-TNF o azatioprina.'
      },
      {
        title: 'Contraindicación de Ciclosporina A en Neuro-Behçet',
        category: 'Trampa de Tribunal',
        description: 'La Ciclosporina A está contraindicada si el paciente desarrolla síntomas neurológicos (cefalea, focalidad, papiledema por trombosis de senos durales o meningoencefalitis), ya que presenta neurotoxicidad sinérgica que puede empeorar la lesión cerebral.',
        trapToAvoid: 'Aumentar la dosis de ciclosporina en un paciente con uveítis de Behçet que empieza con cefalea y convulsiones.'
      }
    ],
    fellowshipKeyPoints: [
      'Estudios de Sfikakis et al. (Lancet 2001 / J Rheumatol 2007): Demostraron que una sola infusión de Infliximab a 5 mg/kg indujo la remisión completa de la vasculitis retiniana aguda en más del 90% de los pacientes con Behçet en las primeras 24 a 48 horas.',
      'Criterios ICBD (International Criteria for Behçet Disease): Superan a los antiguos criterios de Mason y Barnes y a los del ISG de 1990 al no exigir obligatoriamente úlceras orales si se acumulan 4 puntos con otros hallazgos.',
      'Test de Patergia: Es altamente específico (95-98%) para Behçet pero su sensibilidad varía geográficamente (muy alta en Turquía y Japón, baja en poblaciones caucásicas occidentales).'
    ],
    landmarkTrials: [
      {
        name: 'Sfikakis et al. / Infliximab Rapid Resolution of Sight-Threatening Behcet Uveitis',
        year: '2001 (Lancet)',
        conclusion: 'La infusión de Infliximab logró una resolución casi instantánea de la panuveítis y la vasculitis activa en pacientes refractarios a inmunosupresores convencionales.',
        fellowshipRelevance: 'Inauguró la era biológica Anti-TNF en la oftalmología inflamatoria.'
      }
    ],
    histopathologyAndGenetics: 'En biopsias y estudios enucleados: Vasculitis necrotizante leucocitoclástica con infiltración neutrofílica perivascular masiva y destrucción transmural de vasos sanguíneos retinianos con trombos luminales de fibrina y plaquetas, necrosis coagulativa focal de la retina neurosensorial y depósito perivascular de IgG, IgM y fracción C3 del complemento.',
    surgicalPearls: [
      'Al realizar fotocoagulación panretiniana (PRP) en Behçet: Tratar exhaustivamente todas las zonas de isquemia periférica en 360 grados; si se dejan islotes de no perfusión, la secreción de VEGF persistirá alimentando neovasos papilares y rubeosis iridis.',
      'En vitrectomía por hemorragia vítrea: Utilizar iluminación de gran angular y mantener la infusión a baja presión; las paredes vasculares retinianas inflamadas son extremadamente frágiles y se laceran con la mínima tracción del vitreófago.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un varón de 28 años natural de Estambul consulta por disminución visual bilateral brusca de 48 horas de evolución. Refiere antecedentes de úlceras aftosas bucales dolorosas recidivantes desde la adolescencia y episodios de úlceras escrotales cicatrizadas. En la lámpara de hendidura presenta una cámara anterior con células 3+ y un nivel blanquecino de 1.5 mm de hipopion móvil libre sin fibrina adherida en ojo derecho. En el fondo de ojo de ambos ojos se observa una vitritis 2+, envainamiento vascular difuso blanquecino de vénulas y arterias retinianas con hemorragias perivasculares en llama y focos algodonosos necróticos amarillentos en polo posterior. Su médico residente prescribe colirio de dexametasona y prednisona oral a 20 mg/día como monoterapia para control ambulatorio. ¿Cuál es el diagnóstico de certeza, cuál es la crítica razonada a la conducta del residente y cuál es el protocolo de inducción y rescate de primera línea contemporáneo?',
        answer: '1) Diagnóstico de Certeza: Enfermedad de Behçet Ocular con Panuveítis no granulomatosa y Vasculitis Oclusiva Retinal Necrotizante activa bilateral (confirmada por el antecedente de aftas orales y genitales recurrentes, hipopion móvil frío y vasculitis retiniana bilateral; cumple >6 puntos en los criterios ICBD).\n2) Crítica Razonada a la Conducta del Residente: La prescripción de 20 mg/día de prednisona oral como monoterapia ambulatoria es UN ERROR MÉDICO GRAVE. En Behçet ocular la monoterapia con corticoides no detiene la obliteración vascular; una dosis de 20 mg es subóptima y retrasará la terapia definitiva, permitiendo la progresión de la necrosis retiniana y la isquemia macular que llevará a la ceguera permanente e irreversible en pocas semanas.\n3) Protocolo de Inducción y Rescate de Primera Línea Contemporáneo:\n   a) Terapia de Choque Inmediata: Ingreso hospitalario urgente para infusión de pulsos de Metilprednisolona intravenosa a dosis de 1,000 mg/día durante 3 días consecutivos bajo protección gástrica y monitorización cardiovascular.\n   b) Terapia Biológica de Elección: Iniciar de inmediato infusión intravenosa de INFLIXIMAB (Remicade) a dosis de 5 mg/kg (semanas 0, 2 y 6, y luego cada 6-8 semanas) o ADALIMUMAB subcutáneo (80 mg de carga, luego 40 mg cada 14 días), previo screening negativo obligatorio para tuberculosis (QuantiFERON) y hepatitis B/C.\n   c) Tratamiento Inmunomodulador Coadyuvante: Asociar Azatioprina oral (2.5 mg/kg/día) para mantener la remisión a largo plazo.\n   d) Angiografía Fluoresceínica de Campo Amplio: Una vez aclarado el medio, para mapear las zonas de isquemia periférica y aplicar fotocoagulación láser si hay neovascularización.',
        trap: 'Manejar la vasculitis oclusiva de Behçet con prednisona en monoterapia a dosis bajas sin iniciar terapia biológica Anti-TNF.'
      }
    ]
  },

  // =========================================================================
  // 14. SARCOIDOSIS OCULAR
  // =========================================================================
  {
    id: 'deep-uveitis-sarcoidosis-ocular',
    title: 'Sarcoidosis Ocular: Granulomas en Grasa de Carnero, Velas de Cera (Candle-Wax Drippings) y Criterios IWOS',
    subspecialtyId: 'uveitis',
    summary: 'Monografía exhaustiva sobre Sarcoidosis Ocular: enfermedad granulomatosa sistémica multiorgánica mediada por linfocitos Th1 y macrófagos activados que forman granulomas epitelioides no caseificantes característicos; espectro clínico oftalmológico (afectación ocular presente en el 25-50% de los pacientes con sarcoidosis sistémica): uveítis anterior granulomatosa con precipitados queráticos gigantes en "grasa de carnero" (mutton-fat), nódulos iridianos del margen pupilar (Koeppe) y del estroma (Busacca), sinequias posteriores anulares con seclusión pupilar; uveítis intermedia y posterior con periflebitis retiniana segmental en "gotas de cera de vela" (candle-wax drippings / taches de bougie), condensaciones vítreas en "bolas de nieve" (snowballs) y "collares de perlas" (string of pearls), granulomas coroideos solitarios o múltiples y granulomas de la cabeza del nervio óptico; criterios internacionales del International Workshop on Ocular Sarcoidosis (IWOS 2017); biomarcadores paraclínicos: Enzima Convertidora de Angiotensina (ECA), lisozima sérica, hipercalcemia/hipercalciuria, TC torácica de alta resolución (HRCT) demostrando adenopatías hiliares bilaterales y biopsia conjuntival/ganglionar confirmatoria.',
    definitionAndEpidemiology: 'La Sarcoidosis es una enfermedad inflamatoria granulomatosa sistémica idiopática de distribución mundial, caracterizada histopatológicamente por la presencia de granulomas epitelioides no caseificantes en múltiples órganos y tejidos (predominantemente pulmones, ganglios linfáticos mediastínicos, ojos y piel). Presenta una distribución etaria bimodal (un primer pico entre los 20-35 años y un segundo pico en mujeres posmenopáusicas mayores de 50 años). Prevalencia notablemente superior y curso clínico más severo en personas de raza negra (afrodescendientes en EE.UU. y el Caribe) y en poblaciones escandinavas e irlandesas. La afectación ocular ocurre en el 25% al 50% de los pacientes con sarcoidosis y en un 20-30% de los casos es la manifestación inicial que lleva al diagnóstico sistémico.',
    anatomyAndPathophysiology: '1. Inmunopatogenia del Granuloma No Caseificante:\n   • Exposición a antígenos ambientales o infecciosos desconocidos en individuos genéticamente susceptibles (asociación con alelos HLA-DRB1 y BTNL2).\n   • Activación sostenida de células dendríticas y macrófagos tisulares con secreción masiva de IL-12, IL-18 y TNF-alfa.\n   • Reclutamiento y polarización clonal hacia linfocitos T helper Th1 y Th17.\n   • Secreción elevada de Interferón gamma (IFN-γ) que estimula a los macrófagos para transformarse en Células Epitelioides gigantes multinucleadas (Células de Langhans).\n   • Formación del Granuloma Sarcoideo: Núcleo central de macrófagos epitelioides y células de Langhans rodeado por un manguito concéntrico de linfocitos T CD4+ y fibroblastos, con AUSENCIA DE NECROSIS DE CASEIFICACIÓN CENTRAL (a diferencia de la tuberculosis).\n2. Mecanismos de Afectación Ocular:\n   • Los granulomas se forman en el iris, estroma del cuerpo ciliar, coroides y vainas perivasculares adventiciales de las vénulas retinianas.\n   • Los macrófagos del granuloma expresan la enzima 1-alfa-hidroxilasa de forma extrarrenal desregulada, transformando el 25-OH-colecalciferol en 1,25-(OH)2-vitamina D3 activa (calcitriol) -> absorción intestinal masiva de calcio provocando hipercalcemia, hipercalciuria y litiasis renal.\n   • Las células endoteliales y epitelioides activadas secretan Enzima Convertidora de Angiotensina (ECA) y Lisozima a la circulación sistémica.',
    clinicalExamination: {
      biomicroscopy: '• Precipitados Queráticos (PKs) en "Grasa de Carnero" (Mutton-fat PKs): Precipitados corneales grandes, cérosos, blanco-amarillentos, redondeados, distribuidos en el triángulo inferior de Arlt sobre el endotelio corneal.\n• Nódulos Iridianos:\n  - Nódulos de Koeppe: En el borde pupilar libre del iris.\n  - Nódulos de Busacca: En la superficie del estroma anterior del iris.\n  - Nódulos del Ángulo Iridocorneal (Nódulos de Berlin / Tentáculos Trabeculares): Masa nodular en el trabéculo observable en gonioscopia.\n• Sinequias Posteriores Gruesas Anulares (Seclusio pupillae) con iris bombé y glaucoma secundario por cierre angular.',
      fundus: '• Vítreo: Celularidad y opacidades vítreas organizadas en "bolas de nieve" (snowballs) en vítreo inferior o en hebras lineales en "collar de perlas" (string of pearls).\n• Retina Vascular: Periflebitis segmental focal con exudados perivasculares blanquecinos en manguito sobreelevados conocidos como "Gotas de Cera de Vela" (Candle-wax drippings / Taches de bougie).\n• Coroides: Nódulos o granulomas coroideos múltiples redondeados pálidos blanco-amarillentos en el polo posterior y media periferia.\n• Papila Óptica: Granuloma papilar solitario (nódulo sobreelevado amarillento que indenta el disco óptico) o papiledema secundario a hipertensión intracraneal por neurosarcoidosis.',
      specialSigns: '• Gotas de Cera de Vela (Candle-Wax Drippings): Exudados periflebiticos blancos densos discontinuos a lo largo de las vénulas retinianas patognomónicos de periflebitis sarcoidea.\n• Collar de Perlas Vítreo (String-of-Pearls): Filamento de fibrina que suspende múltiples opacidades celulares redondeadas como un rosario en el vítreo anterior.'
    },
    diagnosticWorkup: [
      {
        test: 'Tomografía Computarizada Torácica de Alta Resolución (HRCT de Tórax)',
        findings: 'Examen imagenológico cardinal de mayor rendimiento diagnóstico: Demuestra Linfadenopatías Hiliares Bilaterales y Mediastínicas simétricas (presentes en >80-90% de los pacientes con sarcoidosis ocular) y micronódulos perilinfáticos pulmonares con distribución a lo largo de las cisuras broncovasculares.'
      },
      {
        test: 'Enzima Convertidora de Angiotensina (ECA) y Lisozima Sérica',
        findings: 'ECA sérica elevada en más del 60-70% de los casos activos (producida por las células epitelioides del granuloma); lisozima sérica elevada coadyuvante. Nota: La ECA puede estar falsamente normal en pacientes que reciben inhibidores de la ECA (Enalapril, Lisinopril) o corticoides.'
      },
      {
        test: 'Calcio Sérico y Calciuria de 24 Horas',
        findings: 'Detección de hipercalcemia e hipercalciuria secundaria a la producción no regulada de 1,25-dihidroxivitamina D por los macrófagos del granuloma.'
      },
      {
        test: 'Biopsia Tisular Dirigida con Histopatología (Gold Standard Definitivo)',
        findings: 'Demostración inequívoca de granulomas epitelioides NO caseificantes con tinciones negativas para bacilos ácido-alcohol resistentes (Ziehl-Neelsen negativo) y hongos (Grocott negativo). Sitios de biopsia accesible: Conjuntiva bulbar en fórnix (incluso en conjuntiva aparentemente sana tiene una rentabilidad del 30-40%), glándula lagrimal palpable, ganglio mediastínico mediante EBUS (ecobroncoscopia transbronquial).'
      },
      {
        test: 'Criterios Diagnósticos Internacionales IWOS (International Workshop on Ocular Sarcoidosis 2017)',
        findings: 'Clasifica la Sarcoidosis Ocular en 4 categorías:\n1) Sarcoidosis Ocular Definitiva: Biopsia tisular positiva + signos oculares compatibles.\n2) Sarcoidosis Ocular Presuntiva: TC torácica con adenopatías hiliares bilaterales + al menos 2 signos oculares.\n3) Sarcoidosis Ocular Probable: Biopsia y TC de tórax negativas pero al menos 3 signos oculares + 2 pruebas paraclínicas positivas (ECA, lisozima, lavado broncoalveolar con ratio CD4/CD8 >3.5).\n4) Sarcoidosis Ocular Posible: Al menos 4 signos oculares + 2 pruebas paraclínicas positivas.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Tuberculosis Ocular',
        distinction: 'Presenta granulomas caseificantes con necrosis central, PPD/QuantiFERON positivo, respuesta favorable a terapia antituberculosa de 4 fármacos y empeoramiento catastrófico con corticoides aislados.'
      },
      {
        condition: 'Sífilis Ocular (La Gran Simuladora)',
        distinction: 'Serologías luéticas positivas (VDRL/RPR y FTA-ABS/TPHA); no produce linfadenopatías hiliares bilaterales simétricas ni elevación de ECA.'
      },
      {
        condition: 'Enfermedad de Vogt-Koyanagi-Harada (VKH)',
        distinction: 'Panuveítis bilateral exudativa con pleocitosis en LCR, alopecia y poliosis; no produce nódulos en grasa de carnero ni periflebitis en velas de cera.'
      }
    ],
    steppedManagement: {
      medical: '• Algoritmo Terapéutico Estandarizado para Sarcoidosis Ocular:\n  - Uveítis Anterior Sarcoidea Aislada:\n    * Corticoides tópicos intensivos: Acetato de Prednisolona al 1% o Dexametasona 0.1% cada 1-2 horas en fase aguda, con reducción progresiva en 6-8 semanas.\n    * Ciclopléjico (Ciclopentolato 1% o Atropina 1% c/8-12h) para alivio del espasmo ciliar y prevención de sinequias posteriores anulares.\n  - Uveítis Intermedia, Posterior, Panuveítis o Afectación del Nervio Óptico:\n    * Inducción Sistémica con Glucocorticoides:\n      • En casos graves con vasculitis macular o granuloma del nervio óptico: Pulsos intravenosos de Metilprednisolona (1,000 mg/día IV x 3 días).\n      • Seguidos de Prednisona oral a dosis de 0.5 a 1.0 mg/kg/día durante 2 a 4 semanas, iniciando descenso paulatino.\n  - Inmunomodulación Ahorradora de Esteroides (Indicada si se requiere >7.5 mg/día de prednisona):\n    * Metotrexato (15 a 25 mg/semana subcutáneo u oral con ácido fólico): Fármaco ahorrador de primera línea más ampliamente validado en sarcoidosis.\n    * Micofenolato Mofetilo (1,000 mg cada 12 horas VO): Excelente tolerancia y eficacia como alternativa al metotrexato.\n    * Azatioprina (2.0 a 2.5 mg/kg/día VO).\n  - Terapia Biológica Anti-TNF-alfa (Casos Refractarios o con Neurosarcoidosis):\n    * Adalimumab (40 mg SC cada 14 días) o Infliximab (5 a 10 mg/kg IV cada 4 a 8 semanas): Altamente eficaces para inducir la regresión de granulomas coroideos y periflebitis recalcitrante.\n  - Dispositivos de Liberación Intraocular Prolongada:\n    * Implante de Dexametasona intravítreo (Ozurdex 0.7 mg) en edema macular persistente unilateral libre de vitritis severa.',
      surgical: '• Intervenciones Quirúrgicas en Sarcoidosis Ocular:\n  - Iridotomía Periférica con Láser Nd:YAG:\n    * Realizar 2 o más iridotomías basales amplias ante seclusión pupilar por sinequias posteriores (iris bombé) para restaurar la comunicación entre cámara posterior y anterior y abortar el glaucoma agudo por cierre angular secundario.\n  - Biopsia Diagnóstica de Conjuntiva o Glándula Lagrimal:\n    * Resección de folículos conjuntivales o de una muestra de conjuntiva bulbar del fórnix inferior con anestesia tópica e infiltrativa local para confirmación anatomopatológica.'
    },
    clinicalApplicationPractical: '1. Pedir siempre TC de Tórax de Alta Resolución (HRCT): Una radiografía de tórax simple se salta hasta el 30-40% de las adenopatías hiliares de la sarcoidosis precoz. Solicite directamente "HRCT de tórax sin contraste" ante toda uveítis granulomatosa inexplicable.\n2. La Biopsia de Fórnix Conjuntival es Rápida y de Bajo Riesgo: Si sospecha sarcoidosis y el fórnix inferior muestra pequeños folículos amarillentos en "huevos de rana", tome una pequeña biopsia en la lámpara de hendidura con anestesia tópica; tiene una especificidad diagnóstica del 100% al demostrar granulomas no caseificantes.\n3. Descartar siempre Tuberculosis antes de Esteroides: La tuberculosis y la sarcoidosis tienen presentaciones oftalmoscópicas idénticas en grasa de carnero. Antes de pautar corticoides orales a dosis altas, realice siempre un QuantiFERON o PPD para no detonar una diseminación bacilar tuberculosa mortal.',
    highYieldPearl: 'Sarcoidosis Ocular Board Pearl: Uveítis granulomatosa con PKs en "grasa de carnero", nódulos de Koeppe/Busacca y periflebitis en "gotas de cera de vela". Criterios IWOS 2017. TC de tórax con adenopatías hiliares bilaterales + ECA elevada. Granuloma NO CASEIFICANTE en biopsia.',
    keyDrugs: [
      { name: 'Prednisolona acetato 1% colirio', dose: '1 gota cada 1-2 horas en fase activa', warning: 'Corticosteroide tópico de primera línea para uveítis anterior; vigilar hipertensión ocular.' },
      { name: 'Metotrexato oral / subcutáneo', dose: '15 a 25 mg una vez por semana + 5 mg ácido fólico', warning: 'Ahorrador de primera línea para sarcoidosis ocular; control hepático y hematológico periódico.' },
      { name: 'Adalimumab (Humira)', dose: '80 mg de carga SC, luego 40 mg SC cada 14 días', warning: 'Agente biológico anti-TNF de rescate en sarcoidosis recalcitrante o neurosarcoidosis.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Gotas de Cera de Vela (Candle-Wax Drippings)',
        category: 'Asociación Patognomónica',
        description: 'Exudados perivasculares blanquecinos segmentarios gruesos que gotean a lo largo de las vénulas retinianas = "Candle-wax drippings" (Taches de bougie). Hallazgo oftalmoscópico clásico patognomónico de periflebitis por Sarcoidosis Ocular.',
        trapToAvoid: 'Confundir las velas de cera de sarcoidosis con el envainamiento continuo difuso de la enfermedad de Behçet.'
      },
      {
        title: 'Por Qué la ECA puede ser Falsamente Normal',
        category: 'Trampa de Tribunal',
        description: 'Pregunta trampa de Boards: "¿Por qué un paciente con sarcoidosis ocular activa demostrada puede presentar niveles séricos de Enzima Convertidora de Angiotensina (ECA) completamente normales?". Respuesta: 1) Si está tomando fármacos inhibidores de la ECA (IECAs como enalapril o captopril) para hipertensión, los cuales bloquean la enzima; 2) Si está recibiendo corticoides sistémicos que suprimen los macrófalos; 3) Por polimorfismo genético en el gen de la ECA.',
        trapToAvoid: 'Descartar sarcoidosis únicamente por un valor normal de ECA en sangre.'
      },
      {
        title: 'Células de Langhans vs Granulomas Caseificantes',
        category: 'Pregunta Clásica',
        description: 'Histopatología de Board: El granuloma de la sarcoidosis es un granuloma EPITELIOIDE NO CASEIFICANTE (ausencia total de necrosis caseosa central en tinción de hematoxilina-eosina), compuesto por macrófagos epitelioides y células gigantes de Langhans con cuerpos asteroides y cuerpos de Schaumann.',
        trapToAvoid: 'Describir necrosis caseificante en sarcoidosis (la caseificación es definitoria de tuberculosis).'
      }
    ],
    fellowshipKeyPoints: [
      'Criterios IWOS 2017 (International Workshop on Ocular Sarcoidosis, Br J Ophthalmol 2017): Estandarizó los 7 signos clínicos oculares (PKs en grasa de carnero, nódulos iridianos, tentáculos trabeculares, bolas de nieve/perlas vítreas, periflebitis en velas de cera, granulomas coroideos múltiples y nódulo del nervio óptico) y los 4 signos sistémicos/paraclínicos.',
      'Metabolismo del Calcio en Sarcoidosis: La conversión extrarrenal desregulada de 25-OH-vitamina D a 1,25-(OH)2-vitamina D por la 1-alfa-hidroxilasa macrofágica es inmune a la inhibición por retroalimentación de la PTH, provocando hipercalciuria precoz que suele preceder a la hipercalcemia.',
      'Neurosarcoidosis: Ocurre en el 5-10% de los pacientes con sarcoidosis sistémica; el compromiso del nervio facial (parálisis de Bell unilateral o bilateral, Síndrome de Heerfordt: fiebre, uveítis, parotiditis y parálisis facial) y de la vía óptica son las formas más comunes.'
    ],
    landmarkTrials: [
      {
        name: 'Revised IWOS Criteria for the Diagnosis of Ocular Sarcoidosis',
        year: '2017 (Br J Ophthalmol)',
        conclusion: 'Consenso internacional de expertos que actualizó y validó los criterios de clasificación diagnóstica de la sarcoidosis ocular definitiva, presuntiva, probable y posible mediante algoritmos multimodales.',
        fellowshipRelevance: 'El estándar taxonómico y metodológico obligatorio utilizado en todos los ensayos clínicos y exámenes de subespecialidad.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Granulomas desnudos ("naked granulomas") bien delimitados sin infiltrado linfocitario periférico denso, compuestos por células epitelioides mononucleares y células gigantes multinucleadas de tipo Langhans que albergan en su citoplasma cuerpos asteroides (inclusiones estrelladas ricas en lípidos) y cuerpos de Schaumann (concreciones laminadas concéntricas de carbonato de calcio y proteínas), con ausencia estricta de necrosis de caseificación central.',
    surgicalPearls: [
      'Al realizar iridotomías con láser Nd:YAG en iris bombé sarcoideo: Realizar al menos 2 o 3 iridotomías grandes (>500 µm) en cuadrantes superiores diferentes; los pacientes con uveítis granulomatosa activa tienen una altísima tasa de cierre y cicatrización de las iridotomías por proliferación de tejido cicatrizal y detritos celulares.',
      'Biopsia conjuntival a ciegas (Blind conjunctival biopsy): Si no hay nódulos visibles en la conjuntiva, tomar una elipse de 5x3 mm del fondo de saco conjuntival inferior profundo; procesar con cortes seriados múltiples en patología para no pasar por alto microgranulomas focales.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer de 56 años consulta por visión borrosa, moscas volantes e incomodidad ocular leve en ambos ojos de 3 meses de evolución. En la biomicroscopía se aprecian abundantes precipitados queráticos gigantes en "grasa de carnero" en el tercio inferior del endotelio corneal de ambos ojos, pequeños nódulos carnosos en el borde pupilar (nódulos de Koeppe) y celularidad vítrea 2+ con opacidades redondas blanquecinas en "bolas de nieve" en vítreo inferior. En el fondo de ojo se observan focos de periflebitis blanquecina exudativa discontinua en "gotas de cera de vela" y tres nódulos coroideos blanco-amarillentos planos en media periferia. La radiografía de tórax convencional es informada como normal por el radiólogo general. Su médico residente descarta sarcoidosis basándose en la radiografía de tórax normal y sugiere pautar colirio de dexametasona y dar el alta con control en 3 meses. ¿Cuál es su juicio crítico razonado de la conducta del residente, cuál es el diagnóstico de presunción según los criterios IWOS 2017 y qué batería de pruebas paraclínicas e imagenológicas específicas debe solicitar de inmediato?',
        answer: '1) Crítica Razonada a la Conducta del Residente: La actitud del residente es imprudente e incorrecta. Una radiografía de tórax simple normal NO DESCARTA la sarcoidosis (hasta un 30-40% de los pacientes con sarcoidosis ocular en estadio I-II tienen radiografías simples normales o dudosas). Además, la presencia de panuveítis con periflebitis y granulomas coroideos amenaza la visión y requiere estudio sistémico integral urgente; dar el alta con simples colirios tópicos permitirá que la enfermedad progrese con neovascularización, edema macular cistoide y fibrosis irreversible.\n2) Diagnóstico de Presunción según Criterios IWOS 2017: Sarcoidosis Ocular Probable/Presuntiva (la paciente presenta 4 signos clínicos cardinales indiscutibles: 1) precipitados queráticos en grasa de carnero y nódulos de Koeppe, 2) bolas de nieve vítreas, 3) periflebitis en gotas de cera de vela, y 4) granulomas coroideos múltiples).\n3) Batería Paraclínica e Imagenológica Ineludible de Inmediato:\n   - Tomografía Computarizada Torácica de Alta Resolución (HRCT de Tórax): Es la prueba reina para demostrar linfadenopatías hiliares y mediastínicas bilaterales simétricas y micronódulos perilinfáticos que pasaron desapercibidos en la placa simple.\n   - Bioquímica Sanguínea Específica: Determinación de Enzima Convertidora de Angiotensina (ECA sérica) y Lisozima sérica, además de Calcio sérico y Calciuria de 24 horas.\n   - Descarte Infeccioso Previo Obligatorio: Ensayo IGRA (QuantiFERON-TB Gold) para descartar tuberculosis y serología luética treponémica (FTA-ABS o TPHA) para descartar sífilis.\n   - Biopsia Tisular Confirmatoria si es accesible: Biopsia de conjuntiva en fórnix inferior o biopsia ganglionar mediastínica guiada por EBUS para demostrar granulomas epitelioides no caseificantes.',
        trap: 'Descartar sarcoidosis por una radiografía de tórax convencional normal o no solicitar HRCT de tórax ante un cuadro clínico granulomatoso florido.'
      }
    ]
  }
];

