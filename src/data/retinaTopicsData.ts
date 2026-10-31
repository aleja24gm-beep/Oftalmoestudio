import { TopicDeepDive } from '../types/ophthalmology';

export const RETINA_TOPICS: TopicDeepDive[] = [
  // =========================================================================
  // 1. DMAE NEOVASCULAR Y ANTI-VEGF
  // =========================================================================
  {
    id: 'deep-retina-dmre-neovascular',
    title: 'DMAE Neovascular, Biomarcadores en SD-OCT y Ensayos Pivolales Anti-VEGF',
    subspecialtyId: 'retina',
    summary: 'Monografía exhaustiva sobre neovascularización macular (MNV Tipos 1, 2 y 3), biomarcadores pronósticos en Spectral-Domain OCT, pautas Treat-and-Extend y análisis crítico de los ensayos CATT, HAWK/HARRIER, TENAYA y PULSAR.',
    definitionAndEpidemiology: 'Principal causa de ceguera legal irreversible en personas mayores de 65 años en países desarrollados. La forma neovascular (húmeda o exudativa) constituye el 10-15% del total de pacientes con DMAE, pero genera más del 85-90% de los casos de pérdida visual severa (agudeza visual <20/200).',
    anatomyAndPathophysiology: '1. Acúmulo crónico de restos lipoproteicos no degradados por el EPR (lipofuscina) que forman drusas blandas confluentes y pseudodrusas reticulares entre la lámina basal del EPR y la capa colágena interna de la membrana de Bruch.\n2. Isquemia relativa de la coriocapilar y estrés oxidativo del complejo fotorreceptores-EPR.\n3. Sobreexpresión masiva del Factor de Crecimiento Endotelial Vascular A (VEGF-A) y Angiopoyetina-2 (Ang-2).\n4. Ruptura de la membrana de Bruch y proliferación de capilares anormales inmaduros y fenestrados:\n   • MNV Tipo 1 (Oculta): Localizada por debajo del EPR (en el espacio sub-EPR). Incluye la Vasculopatía Polipoidea Coroidea (PCV).\n   • MNV Tipo 2 (Clásica): Prolifera atravesando el EPR hacia el espacio subretiniano (entre EPR y fotorreceptores).\n   • MNV Tipo 3 (Proliferación Angiomatosa Retiniana - RAP): Se origina en el plexo capilar intrarretiniano profundo y anastomosa secundariamente con la coroides.',
    clinicalExamination: {
      biomicroscopy: 'Polo posterior: hemorragias intrarretinianas o subretinianas en área foveal/yuxtafoveal, exudación lipídica dura circinada, fluido subretiniano que genera elevación cupuliforme de la retina foveal, desprendimientos serosos o fibrovasculares del EPR (DEP fibrovascular).',
      fundus: 'Lesión grisácea o anaranjada subretiniana profunda con edema circundante; en fases avanzadas, tejido cicatrizal fibroso disciforme foveal blanco nacarado.',
      specialSigns: '• Rejilla de Amsler: Metamorfopsia objetivable (síntoma precoz cardinal).\n• Desgarro del EPR (RPE Tear): Se manifiesta como una semiluna de retracción del EPR hiperpigmentada adyacente a un área desnuda hiperreflectiva donde se ve la coroides desnuda.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT de Dominio Espectral (SD-OCT macular)',
        findings: 'Identificación de los 4 biomarcadores de actividad exudativa:\n1) Líquido Intrarretiniano (IRF, quistes foveales): el más tóxico para los fotorreceptores.\n2) Líquido Subretiniano (SRF, espacio bajo fotorreceptores).\n3) Material Hiperreflectivo Subretiniano (SHRM): fibrina, sangre y vasos neovasculares.\n4) Desprendimiento del EPR (DEP fibrovascular o seroso).'
      },
      {
        test: 'Angio-OCT (OCTA)',
        findings: 'Delineación tridimensional de la red neovascular de alta resolución en la coriocapilar y espacio sub-EPR (patrón en medusa, en ovillo o en abanico) sin necesidad de inyección de contraste intravenoso.'
      },
      {
        test: 'Angiografía con Verde de Indocianina (ICG)',
        findings: 'Estudio de referencia de nivel fellow para Vasculopatía Polipoidea Coroidea (PCV): visualización de dilataciones aneurismáticas polipoideas hiperfluorescentes precoces asociadas a una red vascular anómala ramificada (BVN).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Vasculopatía Polipoidea Coroidea (PCV)', distinction: 'Variante común en poblaciones asiáticas y de raza negra; pólipos anaranjados subretinianos en ICG, DEPs hemorrágicos masivos y menor respuesta a anti-VEGF estándar sin terapia fotodinámica (PDT) coadyuvante con verteporfina (ensayo EVEREST II).' },
      { condition: 'Coriorretinopatía Serosa Central Paquicoroidea', distinction: 'Pacientes jóvenes o de mediana edad con engrosamiento coroideo extremo (>400 µm de grosor subfoveal, paquicoroides) y ausencia de drusas blandas seniles.' },
      { condition: 'Neovascularización Miópica', distinction: 'Miopía patológica (>6 dioptrías, longitud axial >26.5 mm), estafiloma posterior y manchas de Foster-Fuchs sin drusas blandas seniles.' }
    ],
    steppedManagement: {
      medical: '• Inyecciones intravítreas de Anti-VEGF de primera línea:\n  - Aflibercept (Eylea 2 mg u 8 mg, proteína de fusión trampa que inhibe VEGF-A, VEGF-B y PlGF).\n  - Faricimab (Vabysmo 6 mg, anticuerpo biespecífico que inhibe VEGF-A y Angiopoyetina-2, estabilizando la vasculatura y reduciendo la inflamación vascular).\n  - Ranibizumab (Lucentis 0.5 mg, fragmento Fab anti-VEGF-A).\n  - Bevacizumab (Avastin 1.25 mg, anticuerpo monoclonal completo, uso off-label avalado por el ensayo CATT).\n• Régimen Treat-and-Extend (T&E) protocolizado:\n  1) Fase de carga obligatoria: 3 inyecciones mensuales consecutivas (cada 4 semanas).\n  2) Fase de extensión: Si la mácula está completamente seca sin IRF, se extiende el intervalo de inyección en 2 semanas por visita (hasta 12 o 16 semanas).\n  3) Si recurre el fluido: Se acorta el intervalo en 2 semanas al intervalo previo que mantuvo el ojo seco.',
      surgical: '• En hematoma macular subretiniano masivo agudo (<7-14 días de evolución):\n  - Desplazamiento neumático con gas expansible intravítreo (SF6 0.3-0.5 mL o C3F8 0.3 mL) + r-tPA intravítreo o subretiniano (25-50 µg) + decúbito prono estricto para desplazar la sangre tóxica lejos de la fóvea.\n  - Vitrectomía posterior pars plana con inyección subretiniana de r-tPA con microcánula de 38-41G en casos refractarios.'
    },
    clinicalApplicationPractical: '1. Líquido intrarretiniano (IRF): Exige NUNCA extender el intervalo de inyección; es el predictor más destructivo de atrofia macular permanente.\n2. Líquido subretiniano (SRF) leve residual: El estudio FLUID demostró que pequeñas cantidades de SRF subfoveal pueden tolerarse sin pérdida visual final a 2 años, evitando sobretratamiento innecesario.\n3. Protocolo de inyección intravítrea seguro: Aplicar Povidona Yodada al 5% en el saco conjuntival durante al menos 3 minutos antes de la punción; medir 3.5 mm del limbo en ojos pseudofáquicos y 4.0 mm en ojos fáquicos con compás de Castroviejo; guardar silencio estricto durante el procedimiento (prevenir endoftalmitis por Streptococcus viridans de la saliva).',
    highYieldPearl: 'CATT Trial (Comparison of AMD Treatments Trials, NEJM 2011): Demostró que Bevacizumab es no inferior a Ranibizumab en ganancia visual al año (+8.0 vs +8.5 letras) cuando se usan en régimen mensual. Sin embargo, el régimen mensual constante logró mayor secado anatómico que el régimen PRN a demanda.',
    keyDrugs: [
      {
        name: 'Faricimab intravítreo', dose: '6 mg / 0.05 mL intravítreo', warning: 'Inhibe Ang-2 y VEGF-A; demostró durabilidad de hasta 16 semanas en ensayos TENAYA y LUCERNE.' },
      { name: 'Aflibercept 8 mg intravítreo', dose: '8 mg / 0.07 mL intravítreo', warning: 'Ensayo PULSAR: mayor concentración molar y vida media intraocular extendida hasta 16-20 semanas.' },
      { name: 'Brolucizumab intravítreo', dose: '6 mg intravítreo', warning: 'Riesgo de vasculitis retiniana oclusiva y endoftalmitis inflamatoria no infecciosa mediada por inmunocomplejos (4%).' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Desgarro del EPR (RPE Tear)',
        category: 'Trampa de Tribunal',
        description: 'Suele ocurrir tras iniciar anti-VEGF en DEPs serosos/fibrovasculares grandes (>400 µm de altura). La contracción rápida de la neovascularización tracciona el EPR senil y lo rasga. El tribunal preguntará si se debe suspender el anti-VEGF.',
        trapToAvoid: 'Suspender el anti-VEGF tras el desgarro. Debe continuarse el tratamiento para proteger la retina foveal residual de la neovascularización descontrolada.'
      },
      {
        title: 'Diferenciación de Neovascularización Tipo 1 vs Tipo 2',
        category: 'Asociación Patognomónica',
        description: 'Tipo 1 está oculta por debajo del EPR (DEP fibrovascular en doble línea o signo del doble contorno en OCT). Tipo 2 rompe el EPR y se ubica por encima de él en el espacio subretiniano (material hiperreflectivo suprayacente al EPR con bordes netos).',
        trapToAvoid: 'Confundir Tipo 2 con Tipo 3 (Tipo 3 nace de la retina interna profunda y no de la coroides).'
      }
    ],
    fellowshipKeyPoints: [
      'Criterios de reactivación en SD-OCT: Nuevo fluido intrarretiniano (IRF), aumento de fluido subretiniano (SRF >50 µm), nueva hemorragia foveal o aumento del espesor del subcampo central (CST) >50 µm.',
      'Ensayo HAWK y HARRIER: Brolucizumab logró excelente secado anatómico pero generó una alerta de seguridad por vasculitis oclusiva retiniana mediada por células T e hipersensibilidad tipo III.',
      'Ensayo EVEREST II: En PCV, la combinación de Terapia Fotodinámica (PDT) con Ranibizumab logró una tasa de oclusión de pólipos del 69.3% vs solo 34.7% con monoterapia de Ranibizumab.',
      'Tratamiento de hematoma macular masivo: La toxicidad del hierro hemo y la retracción de la fibrina destruyen los fotorreceptores irreversibles en 7-14 días si no se desplaza neumáticamente.'
    ],
    landmarkTrials: [
      {
        name: 'CATT (Comparison of AMD Treatments Trials)',
        year: '2011',
        conclusion: 'Bevacizumab y Ranibizumab demostraron eficacia visual equivalente (+8 letras). El régimen mensual fue superior al PRN en secado anatómico.',
        fellowshipRelevance: 'Pregunta obligada de tribunal sobre coste-efectividad y uso compasivo/off-label de bevacizumab.'
      },
      {
        name: 'EVEREST II Trial',
        year: '2017',
        conclusion: 'En Vasculopatía Polipoidea Coroidea (PCV), Ranibizumab + PDT fue superior a Ranibizumab solo en agudeza visual (+8.3 vs +5.1 letras) y regresión de pólipos (69% vs 35%).',
        fellowshipRelevance: 'Fundamenta la indicación obligada de terapia fotodinámica combinada en PCV.'
      }
    ],
    histopathologyAndGenetics: 'Polimorfismos genéticos de alto riesgo: Factor H del Complemento (CFH Y402H en cromosoma 1q32) y ARMS2/HTRA1 (10q26). Histopatología: disrupción de la lámina elástica de la membrana de Bruch, acumulación de lipofuscina (A2E) en el EPR, desgranulación de mastocitos e infiltración de macrófagos CD68+ peri-neovasculares.',
    surgicalPearls: [
      'Inyección intravítrea: comprobar siempre la agudeza visual de percepción y cuenta dedos post-inyección; si no percibe luz o se observa blanqueamiento arterial retiniano sostenido por pico tensional (>40 mmHg), realizar paracentesis corneal inmediata de descompresión.',
      'En desplazamiento neumático con gas: mantener posición prona estricta (mirando al suelo en 45-90 grados) durante un mínimo de 5 a 7 días consecutivos para permitir que la burbuja de gas empuje la sangre hacia inferior fuera de la fóvea.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 75 años con DMAE neovascular activa presenta en OCT líquido intrarretiniano severo persistente tras 6 inyecciones mensuales de Aflibercept 2 mg. ¿Cuál es su algoritmo de abordaje de refractariedad?',
        answer: '1) Reevaluar el diagnóstico: descartar Vasculopatía Polipoidea Coroidea (PCV) mediante angiografía con Verde de Indocianina (ICG), ya que la PCV requiere terapia fotodinámica combinada.\n2) Switch terapéutico: cambiar a un fármaco con mecanismo dual como Faricimab (anti-VEGF/anti-Ang-2) o Aflibercept 8 mg de alta dosis.\n3) Si se confirma PCV: asociar Terapia Fotodinámica (PDT) con verteporfina según el ensayo EVEREST II.',
        trap: 'Continuar indefinidamente con el mismo fármaco y la misma dosis mensual sin plantear switch terapéutico ni ICG.'
      }
    ]
  },

  // =========================================================================
  // 2. RETINOPATÍA DIABÉTICA Y DME
  // =========================================================================
  {
    id: 'deep-retina-retinopatia-diabetica-dme',
    title: 'Retinopatía Diabética Proliferativa y Edema Macular Diabético (DME): Protocolos DRCR.net y Farmacoterapia Anti-VEGF',
    subspecialtyId: 'retina',
    summary: 'Monografía exhaustiva sobre las complicaciones microvasculares de la diabetes en la retina: fisiopatología de la hipoxia tisular mediada por VEGF y Angiopoyetina-2, clasificación clínica internacional ETDRS, Edema Macular Diabético con afectación foveal (CI-DME), análisis crítico de los protocolos del DRCR.net (Protocolo T, Protocolo V, Protocolo S) y pautas de tratamiento con Anti-VEGF (Aflibercept, Faricimab), implantes de dexametasona (Ozurdex) y Panfotocoagulación (PRP).',
    definitionAndEpidemiology: 'La Retinopatía Diabética (RD) es la principal causa de ceguera legal irreversible en adultos en edad laboral (20-65 años) en los países desarrollados. El Edema Macular Diabético (DME) es la causa más frecuente de pérdida visual moderada en pacientes con diabetes mellitus tipo 1 y tipo 2, con una prevalencia del 7-10% de todos los pacientes diabéticos.',
    anatomyAndPathophysiology: '1. Cascada Bioquímica de la Hiperglucemia Crónica:\n   • Activación de la vía de los polioles (acumulación de sorbitol intracelular y estrés osmótico).\n   • Formación de Productos Finales de Glicación Avanzada (AGEs).\n   • Activación de la Proteína Quinasa C (PKC-beta) y vía de las hexosaminas -> aumento de especies reactivas de oxígeno (ROS).\n2. Daño Microvascular Temprano:\n   • Pérdida selectiva de pericitos retinianos (relación normal pericito:célula endotelial 1:1 que cae a 1:4) -> microaneurismas saculares.\n   • Rotura de las uniones estrechas (zonula occludens / claudina-5 / ocludina) de la barrera hematorretiniana interna (BRB).\n   • Oclusión capilar no perfundida e isquemia retiniana difusa.\n3. Síntesis y Expresión de Factores Angiogénicos:\n   • La hipoxia retiniana activa el factor inducible por hipoxia (HIF-1alfa) que estimula la sobreexpresión masiva de VEGF-A y Angiopoyetina-2 (Ang-2).\n   • Ang-2 desestabiliza el endotelio promoviendo fuga vascular e inflamación mediada por integrinas; VEGF induce neovascularización prerretiniana frágil que cruza la membrana limitante interna hacia el vítreo formando membranas fibrovasculares contráctiles (RDP).',
    clinicalExamination: {
      biomicroscopy: 'Segmento anterior habitualmente normal en fases precoces; en fases proliferativas avanzadas con isquemia extensa, buscar rubeosis iridis precoz en el esfínter pupilar y en el ángulo mediante gonioscopia de 4 espejos.',
      fundus: '• RDNPS (Regla 4-2-1): Microaneurismas y hemorragias intrarretinianas en 4 cuadrantes, arrosariamiento venoso ("venous beading") en >=2 cuadrantes, AMIR (Anomalías Microvasculares Intrarretinianas) en >=1 cuadrante.\n• RDP: Neovasos en el disco óptico (NVD) o neovasos en cualquier otra localización retiniana (NVE) con o sin hemorragia prerretiniana / hemovítreo.\n• DME con compromiso del centro foveal (CI-DME): Engrosamiento foveal con pérdida del brillo macular, quistes intrarretinianos, exudados duros (anillos de circinada lipídica pericapilar) y edema difuso.',
      specialSigns: '• Características de Alto Riesgo en RDP (Ensayo DRS):\n  1) NVD >= 1/4 - 1/3 del área del disco papilar;\n  2) NVD de cualquier tamaño si asocia hemorragia prerretiniana o vítrea;\n  3) NVE >= 1/2 del área papilar si asocia hemorragia vítrea.\n• Exudados algodonosos ("cotton-wool spots"): Microinfartos de la capa de fibras nerviosas de la retina por oclusión de arteriolas precapilares con bloqueo axoplásmico.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT Spectral-Domain Macular de Alta Definición',
        findings: 'Parámetro cuantitativo capital: Espesor del Subcampo Central (CST). Presencia de quistes hiporreflectivos intrarretinianos en capas nucleares interna y externa, desprendimiento seroso subretiniano (líquido subfoveal en 15-30% de los DMEs) y estado de la zona elipsoide (EZ) y membrana limitante externa (ELM) como biomarcadores fotorreceptores predictivos.'
      },
      {
        test: 'Angiografía con Fluoresceína (AFG) de Campo Amplio (Ultra-Widefield)',
        findings: 'Detección precisa de áreas de no perfusión capilar en la extrema periferia, fuga activa en "árbol de navidad" o "algodón en flor" de los neovasos (NVD/NVE) y diferenciación entre AMIR (vasos dilatados de trayecto tortuoso intra-retinianos que no fugan profusamente) y neovasos reales (fuga masiva de fluoresceína en fases tardías).'
      },
      {
        test: 'Angio-OCT (OCTA) Macular y Peripapilar',
        findings: 'Ampliación de la Zona Avascular Foveal (FAZ >0.4-0.5 mm2), pérdida de la densidad vascular en el plexo capilar profundo y plexo capilar superficial (isquemia macular diabética - DMI).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Oclusión de Rama Venosa de la Retina (OBVR)', distinction: 'Hemorragias y exudados estrictamente sectoriales que respetan el rafe medio horizontal y drenan en una bifurcación arteriovenosa específica.' },
      { condition: 'Síndrome Isquémico Ocular (OIS)', distinction: 'Unilateral en >80%, hemorragias redondeadas en media periferia que respetan el polo posterior, presión de perfusión retiniana baja a la oftalmodinamometría y rubeosis iridis paradójica con PIO normal o baja.' },
      { condition: 'Retinopatía por Radiación', distinction: 'Antecedente de radioterapia en cabeza/cuello u órbita; microangiopatía isquémica acelerada con oclusión vascular severa y telangiectasias marcadas.' }
    ],
    steppedManagement: {
      medical: '• DME con compromiso del centro foveal (CI-DME) y visión 20/50 o peor:\n  - DRCR.net Protocolo T: Aflibercept demostró superioridad estadísticamente significativa en ganancia de letras a 1 año (+18.9 letras) frente a Ranibizumab (+14.2) y Bevacizumab (+11.8 letras).\n• DME con agudeza visual conservada (20/25 o mejor):\n  - DRCR.net Protocolo V: La observación inicial con seguimiento estrecho no mostró diferencias visuales a 2 años frente a inyecciones inmediatas de Aflibercept o láser foveal; el 66% de los ojos observados nunca requirió tratamiento.\n• Ojos pseudofáquicos o intolerantes a anti-VEGF:\n  - Implante intravítreo de Dexametasona 0.7 mg (Ozurdex, liberación sostenida durante 4-6 meses); monitorizar PIO y progresión de catarata en fáquicos.',
      surgical: '• Panfotocoagulación con Láser Argón (PRP):\n  - Indicada en RDP de alto riesgo o RDNPS muy severa en pacientes con baja adherencia al seguimiento (DRCR.net Protocolo S demostró que los anti-VEGF son no inferiores a la PRP a 2 años, pero requieren visitas mensuales continuas).\n  - Parámetros de PRP: 1200 a 1600 disparos de 200-500 µm, tiempo de 0.1 s, dejando un espacio de 1 diámetro de spot entre impactos, en 2 a 3 sesiones para evitar desprendimiento exudativo coroideo o edema macular post-láser.\n• Vitrectomía Pars Plana (PPV):\n  - Indicaciones: Hemorragia vítrea densa que no aclara tras 1-3 meses (o 2-4 semanas en diabetes tipo 1), desprendimiento traccional macular reciente o que amenaza la fóvea, desprendimiento mixto regmatógeno-traccional o síndrome de tracción hialoidea-macular.'
    },
    clinicalApplicationPractical: '1. Control Sistémico Estricto: El ensayo DCCT y UKPDS demostraron que cada reducción del 1% en la HbA1c reduce el riesgo de progresión de retinopatía en un 35-40%. La presión arterial sistólica <130 mmHg y el control lipídico estricto reducen la exudación dura foveal.\n2. Fenómeno de Empeoramiento Precoz ("Early Worsening"): La corrección excesivamente rápida de la glucemia (descenso >2-3% de HbA1c en pocos meses con bomba de insulina o agonistas GLP-1) puede disparar transitoriamente la progresión de la retinopatía por hipoxia relativa tisular inducida por el cierre capilar.',
    highYieldPearl: 'DRCR.net Protocol T (NEJM 2015): En pacientes con DME y agudeza visual basal de 20/50 o peor, Aflibercept fue significativamente superior a Ranibizumab y Bevacizumab en ganancia visual al año (+18.9 vs +14.2 vs +11.8 letras). En ojos con agudeza 20/40 o mejor, no hubo diferencia clínica relevante entre los tres fármacos.',
    keyDrugs: [
      { name: 'Aflibercept 2 mg intravítreo', dose: '2 mg / 0.05 mL intravítreo mensual (fase de carga) luego bimensual', warning: 'Fármaco de elección en DME con AV <= 20/50 según Protocolo T.' },
      { name: 'Faricimab 6 mg intravítreo', dose: '6 mg / 0.05 mL intravítreo en régimen treat-and-extend hasta c/16 semanas', warning: 'Ensayos YOSEMITE y RHINE: inhibición dual VEGF-A y Ang-2 con excelente durabilidad.' },
      { name: 'Implante de Dexametasona (Ozurdex)', dose: '0.7 mg intravítreo c/4-6 meses', warning: 'Hipertensión ocular en 25-30% de pacientes; catarata nuclear en 60% de ojos fáquicos a 2 años.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Regla 4-2-1 de RDNPS Severa',
        category: 'Clasificación ETDRS',
        description: 'La presencia de CUALQUIERA de los siguientes define RDNPS severa y predice un riesgo del 50% de progresar a RDP en 1 año:\n1) Hemorragias/microaneurismas intrarretinianos severos en los 4 cuadrantes;\n2) Arrosariamiento venoso en >= 2 cuadrantes;\n3) AMIR moderado a severo en >= 1 cuadrante.',
        trapToAvoid: 'Exigir que se cumplan las 3 condiciones simultáneamente. Si se cumplen 2 de las 3, se clasifica como RDNPS "Muy Severa" con riesgo de RDP del 75% a 1 año.'
      },
      {
        title: 'Anti-VEGF vs PRP en RDP (Protocolo S)',
        category: 'Evidencia Landmark',
        description: 'El Protocolo S demostró que Ranibizumab es no inferior a la PRP a 2 y 5 años con menor pérdida de campo visual periférico. Sin embargo, si el paciente abandona el seguimiento ("loss to follow-up"), el ojo tratado solo con anti-VEGF sufre catástrofes proliferativas fulminantes.',
        trapToAvoid: 'Elegir monoterapia con anti-VEGF en pacientes no cumplidores o de difícil seguimiento; la PRP confiere una estabilidad destructiva permanente pero segura.'
      }
    ],
    fellowshipKeyPoints: [
      'DRCR.net Protocolo V: Demostró que en ojos con DME central pero visión 20/25 o mejor, la observación inicial no genera pérdida visual irreversible frente a tratamiento invasivo inmediato.',
      'Fenómeno de Crunch Fibrovascular: La inyección de anti-VEGF en ojos con RDP avanzada y proliferación fibrovascular severa puede causar contracción violenta del tejido fibroso y desprendimiento traccional macular fulminante si no se opera en los 3-7 días posteriores.',
      'Isquemia Macular Diabética (DMI): Pérdida de capilares foveales en OCTA con FAZ irregular; causa pérdida visual irreversible no respondedora a anti-VEGF ni corticoides.',
      'Edema Macular Traccional: Producido por hialoides posterior engrosada y tensa adherida a la mácula; refractario a inyecciones médicas y requiere vitrectomía con pelado de membrana limitante interna (ILM).'
    ],
    landmarkTrials: [
      {
        name: 'DRCR.net Protocol T',
        year: '2015',
        conclusion: 'Aflibercept fue superior a Ranibizumab y Bevacizumab en ojos con DME y visión <= 20/50 a 1 y 2 años.',
        fellowshipRelevance: 'Pregunta reina de exámenes internacionales de retina y farmacoterapia ocular.'
      },
      {
        name: 'DRS (Diabetic Retinopathy Study)',
        year: '1976',
        conclusion: 'La Panfotocoagulación con Láser (PRP) reduce el riesgo de pérdida visual severa en más del 50% en ojos con RDP de alto riesgo.',
        fellowshipRelevance: 'Definió las características de alto riesgo de neovascularización en retina.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología de la microangiopatía diabética: engrosamiento masivo de la membrana basal capilar (hasta 5 veces su grosor normal), apoptosis selectiva de pericitos retinianos (relación pericito:célula endotelial 1:1 que cae a 1:4), microtrombos intraluminales ricos en fibrina y formación de microaneurismas en la capa nuclear interna.',
    surgicalPearls: [
      'En vitrectomía por RDP proliferativa: Administrar anti-VEGF intravítreo (Aflibercept o Bevacizumab) exactamente 3 a 5 días ANTES de la cirugía para desvascularizar los neovasos y evitar sangrado intraoperatorio incoercible. ¡Nunca administrarlo >7-10 días antes por riesgo de fenómeno de crunch!',
      'Al realizar PRP: Dejar al menos 2 diámetros de disco libres de impactos alrededor de la papila y respetar el área macular dentro de las arcadas vasculares para preservar el haz papilomacular y la visión central.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente diabético de 58 años acude a revisión con agudeza visual de 20/60 en ojo izquierdo. En el fondo de ojo se observan microaneurismas y hemorragias en 4 cuadrantes, exudados duros foveales y engrosamiento foveal. El SD-OCT muestra un espesor central de 485 µm con quistes intrarretinianos difusos. No hay neovasos ni hemorragia vítrea. Según el DRCR.net Protocolo T, ¿cuál es el tratamiento de primera línea de elección y qué evidencia justifica su superioridad?',
        answer: '1) Diagnóstico: Retinopatía Diabética No Proliferativa Severa con Edema Macular Diabético con afectación del centro foveal (CI-DME) y visión subóptima (20/60).\n2) Tratamiento de primera línea: Inyecciones intravítreas de Aflibercept 2 mg.\n3) Evidencia del DRCR.net Protocolo T: En el estrato de pacientes con agudeza visual de 20/50 o peor, Aflibercept demostró superioridad estadísticamente significativa en ganancia de agudeza visual a 1 año (+18.9 letras) en comparación con Ranibizumab (+14.2 letras, p=0.03) y Bevacizumab (+11.8 letras, p<0.001).\n4) Pauta: Inyecciones mensuales durante 5-6 meses seguidas de protocolo Treat-and-Extend según estabilidad del líquido en SD-OCT.',
        trap: 'Indicar láser macular focal/grid como primera línea en un edema macular foveal severo, o utilizar Bevacizumab en visión 20/60 esperando la misma ganancia visual que con Aflibercept.'
      }
    ]
  },

  // =========================================================================
  // 3. OCLUSIONES VASCULARES (OACR Y OVCR)
  // =========================================================================
  {
    id: 'deep-retina-oclusiones-vasculares',
    title: 'Oclusiones Vasculares Retinianas: OACR y OVCR (Isquémica vs No Isquémica, Glaucoma de los 100 Días y Protocolo de Urgencia)',
    subspecialtyId: 'retina',
    summary: 'Monografía crítica sobre urgencias vasculares retinianas agudas: Oclusión de la Arteria Central de la Retina (OACR) como equivalente a un ictus cerebral agudo (AIT/ACV), ventana terapéutica estricta de 90-100 minutos, maniobras de descompresión de urgencia (paracentesis de cámara anterior, masaje ocular, vasodilatadores) y trombolisis intraarterial; y Oclusión de la Vena Central de la Retina (OVCR) con diferenciación precisa entre formas isquémicas y no isquémicas, riesgo de Glaucoma Neovascular de los 100 días y ensayos landmark de anti-VEGF (COPERNICUS, GALILEO, CRUISE).',
    definitionAndEpidemiology: '• OACR: Urgencia neurológica y oftalmológica aguda producida por la interrupción brusca de la perfusión sanguínea de la arteria central de la retina. Representa el equivalente retiniano de un ictus isquémico cerebral agudo; incidencia de 1 a 2 por 100,000 habitantes; edad media de 65 años; fuerte asociación con aterosclerosis carotídea, embolia cardíaca (fibrilación auricular, vegetaciones valvulares) y arteritis de células gigantes (GCA).\n• OVCR: Segunda causa más común de ceguera por patología vascular retiniana tras la retinopatía diabética; asociada a edad avanzada, hipertensión arterial, glaucoma primario de ángulo abierto y trombofilias.',
    anatomyAndPathophysiology: '1. Oclusión de Arteria Central de la Retina (OACR):\n   • La arteria central de la retina (rama de la arteria oftálmica) penetra en el nervio óptico a unos 10-15 mm por detrás del globo ocular.\n   • Mecanismo obstructivo dominante (>75%): Embolia impactada en la porción más estrecha de la arteria a nivel de la lámina cribosa papilar. Tipos de émbolos:\n     1) Émbolos de colesterol (Placas de Hollenhorst): Refringentes, anaranjados, originados en la bifurcación carotídea.\n     2) Émbolos de fibrina y plaquetas: Alargados, blanco-grisáceos, móviles, originados en carótidas o válvulas cardíacas.\n     3) Émbolos de calcio: Blanco mate, grandes, fijos, de calcificación valvular aórtica o mitral (mayor riesgo de oclusión total irreversible).\n   • Ventana de Supervivencia Retiniana: Modelos de Hayreh demostraron que la retina de primates sufre daño celular isquémico irreversible y muerte masiva de células ganglionares tras 90 a 100 minutos de isquemia arterial completa.\n   • Fisiopatología de la Mancha Rojo Cereza (Cherry-Red Spot): La capa de células ganglionares y fibras nerviosas edematizadas e isquémicas se vuelve densamente blanca y opaca en todo el polo posterior. En la foveola central la retina es extremadamente delgada y carece de capas internas, permitiendo que la vascularización coroidea y coriocapilar normal subyacente (nutrida independientemente por las arterias ciliares cortas posteriores) trasluzca como una mancha circular rojo intenso brillante.\n   • Variante Protectora: Presencia de Arteria Ciliorretiniana (presente en el 15-30% de la población normal, originada del círculo de Zinn-Haller de las ciliares cortas posteriores); si irriga el haz papilomacular, preserva una isla de agudeza visual de 20/20 a pesar de la pérdida total del campo visual periférico.\n2. Oclusión de Vena Central de la Retina (OVCR):\n   • Trombosis luminal de la vena central de la retina a nivel o inmediatamente posterior a la lámina cribosa compartida con la arteria central rígida en un compartimento fibroso inextensible.\n   • Clasificación Fundamental de Central Vein Occlusion Study (CVOS):\n     1) No Isquémica (Perfundida): Menos de 10 discos papilares de no perfusión capilar en AFG; pronóstico visual favorable.\n     2) Isquémica (No Perfundida): >= 10 discos papilares de no perfusión en AFG; defecto pupilar aferente relativo (RAPD) marcado; tasa de Glaucoma Neovascular de los 100 días >30-40% si no se trata.',
    clinicalExamination: {
      biomicroscopy: '• En OACR aguda: Segmento anterior habitualmente normal; Defecto Pupilar Aferente Relativo (DPA / pupila de Marcus Gunn) severo en el ojo afectado.\n• En OVCR aguda: Dilatación y tortuosidad venosa generalizada de 360 grados; en formas isquémicas congestión epiescleral y búsqueda obligatoria de rubeosis iridis precoz en lámpara de hendidura con alto aumento.',
      fundus: '• En OACR: Blanqueamiento retiniano edematoso isquémico difuso de todo el polo posterior con mancha rojo cereza foveolar visible; arterias filiformes adelgazadas en "hilo de plata" con segmentación del flujo sanguíneo ("signo del tren de vagones" o boxcarring); papila pálida con bordes borrosos.\n• En OVCR: Hemorragias intrarretinianas masivas en "llamarada" y profundas distribuidas en los 4 cuadrantes ("fondo de ojo en salsa de tomate" o "salpicadura de sangre"), exudados algodonosos múltiples, edema de papila marcado y edema macular severo.',
      specialSigns: '• Mancha Rojo Cereza (Cherry-Red Spot): Patognomónica de OACR aguda.\n• Boxcarring o signo del tren de vagones: Segmentación intravascular de columnas de hematíes en las arteriolas retinianas.\n• Regla de los 100 Días: El Glaucoma Neovascular en OVCR isquémica suele eclosionar alrededor del día 90 a 100 tras la trombosis venosa aguda.'
    },
    diagnosticWorkup: [
      {
        test: 'Estudio Sistémico Urgente de Ictus y Despistaje de ACV (Protocolo Stroke)',
        findings: 'En OACR: Derivación inmediata a Unidad de Ictus / Urgencias de Neurología: Ecodoppler de troncos supraaórticos (TSA) carotídeos (estenosis carotídea ipsilateral en >70%), Ecocardiograma transtorácico/transesofágico (descarte de émbolos cardíacos o foramen oval permeable), Holter ECG de 24h para fibrilación auricular paroxística y analítica urgente (VSG, PCR y hemograma para descartar Arteritis de Células Gigantes en pacientes >50 años).'
      },
      {
        test: 'OCT Spectral-Domain Macular de Urgencia',
        findings: 'En OACR: Hiperreflectividad masiva de las capas retinianas internas (capa de fibras nerviosas, células ganglionares y plexiforme interna) con desorganización de la estratificación y sombra acústica sobre las capas externas en fase aguda; en fase crónica evolución a atrofia retiniana interna severa permanente. En OVCR: Cuantificación del edema macular cistoide y grosor del subcampo central (CST).'
      },
      {
        test: 'Angiografía Fluoresceínica Retiniana (AFG)',
        findings: 'En OACR: Retraso masivo en el tiempo de llenado arterial retiniano (>20-30 segundos). En OVCR: Retraso en el tiempo de tránsito arteriovenoso y cuantificación milimétrica de las áreas de no perfusión capilar para clasificar en forma isquémica (>=10 áreas de disco) vs no isquémica.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Neuropatía Óptica Isquémica Anterior Arterítica (NOIAA / GCA)', distinction: 'Edema de papila pálido en cresta de tiza (chalky-white) sin mancha rojo cereza (a menos que haya oclusión combinada de la arteria oftálmica); VSG y PCR masivamente elevadas; dolor en la sien y claudicación mandibular.' },
      { condition: 'Oclusión de Rama Arterial de la Retina (OBAR)', distinction: 'Infarto retiniano localizado y sectorial restringido al territorio de la rama arteriolar bifurcada, frecuentemente con émbolo de Hollenhorst visible en la bifurcación.' },
      { condition: 'Oclusión de la Arteria Oftálmica', distinction: 'Ausencia de mancha rojo cereza (porque la coroides también está isquémica y desvitalizada); blanqueamiento retiniano difuso global con fondo de ojo de color amarillo grisáceo y no perfusión coroidea en AFG.' }
    ],
    steppedManagement: {
      medical: '• Protocolo de Emergencia en OACR Aguda (<4.5 horas):\n  1) Paracentesis de cámara anterior inmediata: punción en el limbo temporal con aguja de 30G para drenar 0.1-0.2 mL de humor acuoso y generar descompresión brusca de la PIO.\n  2) Masaje ocular digital vigoroso con tres dedos (ciclos de 10-15 s de compresión firme seguidos de relajación súbita) para provocar oscilaciones mecánicas de flujo que movilicen el émbolo distalmente.\n  3) Hipotensores oculares sistémicos: Acetazolamida 500 mg IV + colirios de Timolol 0.5% + Brimonidina 0.2%.\n  4) Inhalación en bolsa de papel (inducir hipercapnia para vasodilatación arterial) o Isosorbide sublingual.\n  5) Fibrinolisis intraarterial superselectiva en arteria oftálmica con r-tPA (en centros de ictus avanzados si se realiza dentro de las primeras 4-4.5 horas de inicio).\n• Tratamiento de OVCR:\n  - Edema Macular en OVCR: Anti-VEGF de primera línea (Aflibercept según ensayo COPERNICUS/GALILEO o Ranibizumab según ensayo CRUISE). Inyecciones mensuales hasta secado macular completo.\n  - Alternativa: Implante intravítreo de Dexametasona 0.7 mg (Ozurdex, estudio GENEVA) especialmente en ojos pseudofáquicos o pacientes con eventos cardiovasculares recientes.',
      surgical: '• En OVCR Isquémica con Neovascularización de Segmento Anterior (NVI/NVA):\n  - Panfotocoagulación con Láser (PRP) urgente en 360 grados para ablacionar la retina isquémica y revertir el estímulo angiogénico antes de que se produzca el cierre sinequial irreversible del ángulo iridocorneal.\n  - Inyección intravítrea coadyuvante de anti-VEGF para lograr regresión rápida de los neovasos en 24-48 horas mientras el láser hace efecto.'
    },
    clinicalApplicationPractical: '1. OACR como Emergencia Vascular Sistémica: Todo paciente con OACR debe ingresar en código ictus o acudir directamente a urgencias de neurología para neuroimagen cerebral (RMI con secuencias de difusión DWI: >20-25% presentan infartos cerebrales asintomáticos silentes concurrentes).\n2. OVCR y Glaucoma de los 100 Días: Realizar gonioscopia de 4 espejos y biomicroscopía del iris sin dilatación pupilar cada mes durante los primeros 6 meses en todas las OVCR isquémicas; si aparece un solo vaso neovascular en el margen pupilar (rubeosis iridis), aplicar PRP inmediata sin demoras.',
    highYieldPearl: 'CVOS Group (Central Vein Occlusion Study): Definió OVCR Isquémica como >=10 áreas de disco de no perfusión capilar en la AFG. Demostró que la PRP profiláctica NO previene la rubeosis iridis con mayor eficacia que la PRP aplicada inmediatamente ante el primer signo de neovascularización en iris o ángulo.',
    keyDrugs: [
      { name: 'Aflibercept 2 mg intravítreo', dose: '2 mg / 0.05 mL intravítreo mensual', warning: 'Ensayos COPERNICUS y GALILEO: ganancia media de +18 letras a 1 año en edema macular por OVCR.' },
      { name: 'Ranibizumab 0.5 mg intravítreo', dose: '0.5 mg / 0.05 mL intravítreo mensual', warning: 'Ensayo CRUISE: estándar de tratamiento para edema macular secundario a OVCR.' },
      { name: 'Acetazolamida intravenosa', dose: '500 mg IV bolo urgente', warning: 'Descompresión de urgencia en OACR; contraindicada en anemia falciforme y alergia a sulfamidas.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Preservación de Arteria Ciliorretiniana',
        category: 'Signo Clínico Clave',
        description: 'En el 15-30% de la población normal, una arteria ciliorretiniana (procedente de las ciliares cortas posteriores y no de la arteria central) irriga la fóvea. En una OACR completa, la presencia de esta arteria preserva una agudeza visual de 20/20 foveal con una pequeña isla de campo central, contrastando con el resto de la retina totalmente infartada.',
        trapToAvoid: 'Creer que una agudeza visual de 20/20 descarta una OACR; siempre examinar el fondo de ojo periférico y el campo visual.'
      },
      {
        title: 'Descarte de Arteritis de Células Gigantes en OACR',
        category: 'Seguridad del Paciente',
        description: 'Aproximadamente el 5-10% de las OACRs en pacientes mayores de 50 años están causadas por Arteritis de la Temporal (GCA). Exige solicitar inmediatamente VSG y PCR y pautar corticoides sistémicos a dosis altas si hay sospecha.',
        trapToAvoid: 'Asumir que toda OACR es siempre aterotrombótica embólica y no solicitar marcadores inflamatorios agudos en mayores de 50 años.'
      }
    ],
    fellowshipKeyPoints: [
      'Glaucoma Neovascular en OVCR: Ocurre típicamente a los 90-100 días ("glaucoma de los 100 días"), causado por difusión anterior masiva de VEGF desde la retina isquémica.',
      'Signo de Hollenhorst: Placa ateromatosa de colesterol refringente y brillante alojada en las bifurcaciones arteriolares; marcador directo de ateromatosis carotídea ipsilateral ulcerada.',
      'Diferencia entre OACR y Oclusión de Arteria Oftálmica: En la oclusión de la arteria oftálmica NO hay mancha rojo cereza porque la coroides tampoco tiene flujo (fondo blanco sucio difuso).',
      'Factores de riesgo de OVCR en jóvenes (<50 años): Descartar síndrome antifosfolípido, mutación del factor V Leiden, hiperhomocisteinemia, déficit de proteína C/S y uso de anticonceptivos orales.'
    ],
    landmarkTrials: [
      {
        name: 'COPERNICUS and GALILEO Trials',
        year: '2012',
        conclusion: 'Aflibercept mensual demostró ganancias visuales masivas (+17.3 letras) y secado anatómico rápido en edema macular por OVCR.',
        fellowshipRelevance: 'Aprobación regulatoria de Aflibercept como estándar en OVCR.'
      },
      {
        name: 'CVOS (Central Vein Occlusion Study)',
        year: '1995',
        conclusion: 'Definió la isquemia en OVCR (>=10 áreas de disco) y recomendó PRP precoz ante la aparición de neovascularización en segmento anterior.',
        fellowshipRelevance: 'Base de la clasificación clásica de oclusiones venosas retinianas.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: En OACR necrosis coagulativa con edema masivo citoplásmico de las capas retinianas internas (células ganglionares, plexiforme interna y fibras nerviosas) con preservación relativa de fotorreceptores y EPR (nutridos por la coriocapilar). En OVCR trombosis en la lámina cribosa con extravasación eritrocitaria masiva en todas las capas retinianas.',
    surgicalPearls: [
      'Al realizar paracentesis de cámara anterior en OACR: Utilizar aguja de 30G montada en jeringa de tuberculina a la que se le ha retirado el émbolo; penetrar a través del limbo transparente en bisel paralelo al iris sobre la cámara anterior temporal profunda para evitar rozar el cristalino.',
      'Masaje ocular post-paracentesis: Realizar ciclos de 10 segundos de compresión firme transpalpebral con tres dedos seguidos de 5 segundos de relajación súbita durante un total de 15 minutos.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 67 años acude a urgencias por pérdida visual indolora, catastrófica y súbita en ojo derecho producida hace 60 minutos mientras desayunaba. Su agudeza visual es de percepción luminosa débil. Al fondo de ojo se aprecia un blanqueamiento lechoso difuso del polo posterior con mancha rojo cereza foveolar evidente y arterias filiformes. Describa detalladamente su algoritmo de conducta médica de emergencia en los primeros 30 minutos y qué estudios etiológicos sistémicos solicitará con carácter urgente.',
        answer: '1) Diagnóstico: Oclusión de la Arteria Central de la Retina (OACR) aguda de 1 hora de evolución (dentro de la ventana de viabilidad celular retiniana de 90-100 minutos).\n2) Maniobras de rescate oftalmológico de emergencia inmediatas:\n   a) Paracentesis de cámara anterior de urgencia con aguja de 30G para aspirar 0.1 a 0.2 mL de humor acuoso y descompresión tensional súbita;\n   b) Masaje ocular digital vigoroso repetido para generar fluctuaciones bruscas de flujo y dislodar el émbolo a una rama distal;\n   c) Tratamiento hipotensor simultáneo con Acetazolamida 500 mg IV y colirios de Timolol 0.5% + Brimonidina 0.2%;\n   d) Respiración en bolsa de papel (inducir hipercapnia vasodilatadora).\n3) Protocolo de Código Ictus Sistémico:\n   - Derivación inmediata a Unidad de Ictus / Neurología de guardia para valorar fibrinolisis intraarterial con rtPA si cumple criterios antes de las 4.5 horas;\n   - Analítica urgente de VSG, PCR y hemograma para descartar Arteritis de Células Gigantes (iniciar corticoides IV si hay sospecha);\n   - Ecodoppler carotídeo y ecocardiograma urgente para localizar la fuente embolígena (ateroma carotídeo vs FA/valvulopatía).',
        trap: 'Diferir las maniobras de rescate para el día siguiente o no activar el protocolo de ictus carotídeo sistémico.'
      }
    ]
  },

  // =========================================================================
  // 4. DESPRENDIMIENTO DE RETINA REGMATÓGENO Y REGLAS DE LINCOFF
  // =========================================================================
  {
    id: 'deep-retina-desprendimiento-regmatogeno-lincoff',
    title: 'Desprendimiento de Retina Regmatógeno (DRR), Reglas de Lincoff, Desgarros en Herradura y Cirugía Vitreorretiniana (PPV vs Cerclaje vs Neumopexia)',
    subspecialtyId: 'retina',
    summary: 'Monografía quirúrgica y fisiopatológica completa sobre el Desprendimiento de Retina Regmatógeno (DRR): desprendimiento vítreo posterior (DVP) patológico, desgarros en herradura por tracción en base de vítreo, signo de Shafer ("polvo de tabaco"), las 4 Reglas Topográficas de Lincoff para localización exacta de la rotura, clasificación de Proliferación Vitreorretiniana (PVR), criterios de urgencia (Mácula ON <24h vs Mácula OFF), comparación de técnicas quirúrgicas (Vitrectomía Pars Plana MIVS 23G/25G/27G, Cerclaje Escleral/Scleral Buckle y Retinopexia Neumática según ensayo PIVOT) y propiedades de tamponadores intraoculares (SF6, C3F8, Aceite de Silicona 1000/5000 cSt).',
    definitionAndEpidemiology: 'Separación física de la retina neurosensorial del epitelio pigmentario de la retina (EPR) producida por el paso de humor vítreo licuado hacia el espacio subretiniano a través de una rotura retiniana de espesor total (desgarro o agujero). Incidencia de 10 a 15 casos por 100,000 personas/año; picos en varones de 50-70 años, miopes axiales (>3 D tienen un riesgo 10 veces mayor), pacientes pseudofáquicos (incidencia acumulada a 10 años del 1-2% tras facoemulsificación) y tras trauma ocular.',
    anatomyAndPathophysiology: '1. Cascada Patogénica del DRR:\n   • Sinéresis vítrea progresiva (licuefacción del gel colágeno tipo II y ácido hialurónico) con sínquisis.\n   • Ruptura de la corteza vítrea posterior con colapso hacia adelante (DVP agudo).\n   • En áreas de adhesión vitreorretiniana anómala focal (base del vítreo anterior, bordes de degeneración en empalizada/lattice, cicatrices coriorretinianas previas o bifurcaciones vasculares), la tracción dinámica anteroposterior y tangencial desgarra la retina neurosensorial produciendo un Desgarro en Herradura (Flap Tear).\n   • Las corrientes de convección del vítreo licuado penetran a través del defecto hacia el espacio virtual subretiniano, venciendo la fuerza adhesiva normal de las bombas metabólicas del EPR y los mucopolisacáridos intercelulares.\n2. Las 4 Reglas de Oro Topográficas de Lincoff:\n   • Regla 1 (DR temporal o nasal superior): La rotura primaria se ubica dentro de un radio de 1.5 horas de reloj del borde más elevado del desprendimiento.\n   • Regla 2 (DR superior total que cruza la línea media vertical de las 12): La rotura causal se sitúa en el meridiano de las 12 o a menos de 1 hora de reloj de las 12 (el fluido cae a ambos lados de la papila como un telón).\n   • Regla 3 (DR inferior asimétrico): El fluido subretiniano asciende más alto en el lado donde se encuentra la rotura causal primaria (la rotura está en el cuadrante inferior con el nivel de fluido más alto).\n   • Regla 4 (DR inferior simétrico en "burbuja" bilateral inferior): La rotura se encuentra en las 6 horas en el meridiano inferior medio.\n3. Proliferación Vitreorretiniana (PVR):\n   • Principal causa de fracaso quirúrgico tardío (>75%). Las células del EPR expuestas migran a través de la rotura hacia las superficies retiniana interna y externa, sufriendo metaplasia epitelio-mesenquimatosa hacia miofibroblastos contráctiles que expresan alfa-SMA y depositan colágeno, formando membranas epirretinianas y bandas subretinianas en "tendedero".\n   • Grados: A (turbidez vítrea y polvo de tabaco difuso), B (arrugamiento de la superficie retiniana y bordes enrollados de la rotura), C (pliegues estrellados de espesor total fijos en retina anterior o posterior a través de 1 a 12 horas de reloj).',
    clinicalExamination: {
      biomicroscopy: 'Lámpara de hendidura: Biomicroscopía del vítreo anterior con haz estrecho buscando obligatoriamente el Signo de Shafer ("polvo de tabaco": gránulos microscópicos marrón-dorados de células pigmentarias del EPR libres en el vítreo anterior retrocristaliniano tras DVP, con un valor predictivo positivo de rotura retiniana >90%). Hipotonía ocular leve (descenso de 4-5 mmHg respecto al ojo contralateral por desvío del fluido subretiniano a través del EPR hacia la coroides).',
      fundus: 'Oftalmoscopia indirecta binocular con lente de 20D o 28D y depresión escleral sistemática en 360 grados: Retina desprendida ondulante, translúcida, blanco-grisácea, móvil con los movimientos sacádicos, con pérdida del patrón coroideo de fondo; visualización del desgarro retiniano causal con su opérculo o solapa traccionada orientada hacia la base del vítreo; descarte de roturas secundarias periféricas (hasta en el 50% de los casos coexisten roturas múltiples).',
      specialSigns: '• Signo de Shafer (Polvo de tabaco en vítreo anterior): Presencia de células del EPR liberadas tras desgarro.\n• Líneas de Demarcación ("High-water marks"): Líneas pigmentadas concéntricas que indican desprendimiento de retina crónico (>2-3 meses) donde el EPR hiperplásico intentó contener el avance del fluido.\n• Quistes intrarretinianos secundarios: Señal inequívoca de cronicidad (>6 meses a 1 año).'
    },
    diagnosticWorkup: [
      {
        test: 'Oftalmoscopia Binocular Indirecta con Depresión Escleral Dinámica',
        findings: 'Estudio de referencia insustituible para mapear la retina periférica hasta la ora serrata en 360 grados, localizando todos los desgarros, roturas atróficas y áreas de degeneración en lattice asociadas.'
      },
      {
        test: 'Ecografía Ocular Modo B (Ultrasonografía 10-20 MHz)',
        findings: 'Esencial si los medios están opacos por hemorragia vítrea densa o catarata madura: membrana reflectiva móvil de alta reflectividad acústica anclada firmemente en la papila óptica y en la ora serrata (forma en V en desprendimiento total), diferenciable del DVP (membrana tenue de baja reflectividad que cruza por delante de la papila sin anclaje).'
      },
      {
        test: 'SD-OCT Macular de Urgencia',
        findings: 'Evaluación micrométrica del estado de la fóvea: Mácula-ON (fóvea completamente aplicada, urgencia quirúrgica de emergencia en <24 horas) vs Mácula-OFF (líquido subfoveal, fotorreceptores desprendidos, cirugía preferente en 48-72h).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Retinosquisis Degenerativa Senil', distinction: 'Bilateral en >70%, cuadrante temporal inferior, superficie lisa y cupuliforme fija sin ondulación móvil, escotoma absoluto en campimetría (el DRR genera escotoma relativo), ausencia de células en vítreo (signo de Shafer negativo) y separación entre capas nucleares en OCT sin fluido sub-EPR.' },
      { condition: 'Desprendimiento de Retina Exudativo / Seroso (ej. Síndrome de Vogt-Koyanagi-Harada o Tumor Coroideo)', distinction: 'Fluido móvil gravitacional que cambia rápidamente con la posición de la cabeza (shifting fluid), superficie lisa convexa sin desgarros ni roturas visibles.' },
      { condition: 'Desprendimiento de Retina Traccional (DRT en Retinopatía Diabética)', distinction: 'Superficie cóncava inmóvil centrada en bandas proliferativas fibrovasculares que no alcanza la ora serrata y carece de roturas primarias de espesor total.' }
    ],
    steppedManagement: {
      medical: '• Reposo absoluto en cama con cabeza posicionada de modo que la gravedad mantenga la rotura en el punto más bajo posible para frenar la progresión del fluido hacia la mácula.\n• Midriasis farmacológica completa (Atropina 1% + Fenilefrina 2.5%) para exploración y cirugía.\n• Cirugía de Mácula-ON: Exige quirófano urgente en menos de 24 horas (idealmente en las primeras 12-24 horas de evolución antes de que el líquido despegue la foveola y condene la agudeza visual final a <20/50 por apoptosis de conos).',
      surgical: '• Selección de la Técnica Quirúrgica según Anatomía:\n  1) Retinopexia Neumática (Ensayo PIVOT):\n     - Indicaciones ideales: Rotura única o grupo de roturas confinadas en menos de 1 hora de reloj en los 2/3 superiores de la retina (entre las 8 y las 4 horas del meridiano superior), en paciente colaborador capaz de mantener postura estricta durante 5-7 días.\n     - Técnica: Crioterapia transconjuntival o láser posterior + inyección intravítrea de 0.3 mL de gas puro C3F8 o 0.5 mL de SF6 + maniobra de "steamroller" o posicionamiento cefálico prono/lateral directo.\n  2) Cerclaje Escleral (Scleral Buckling con esponja o banda de silicona 240/276):\n     - Indicaciones ideales: Pacientes jóvenes, fáquicos, miopes axiales, con diálisis retiniana o desgarros inferiores entre las 4 y las 8 horas, sin PVR avanzado.\n     - Ventajas: Preserva el cristalino (no acelera catarata en jóvenes) y no requiere posturas difíciles.\n  3) Vitrectomía Pars Plana Microincisional (MIVS 23G, 25G o 27G):\n     - Indicaciones: Ojos pseudofáquicos, roturas posteriores, roturas múltiples en varios cuadrantes, hemorragia vítrea densa coexistente o PVR Grado B/C.\n     - Pasos quirúrgicos: Core vitrectomy -> inducción de DVP si no está completado -> shaving minucioso de la base de vítreo bajo depresión escleral -> drenaje de fluido subretiniano a través de la rotura preexistente o retinotomía posterior -> intercambio fluido-aire -> endoláser confluente (3 filas concéntricas alrededor de cada desgarro) -> tamponamiento interno con gas expansible (SF6 20% duración 2 semanas, C3F8 14% duración 6-8 semanas) o Aceite de Silicona 1000/5000 cSt (si el paciente volará en avión o presenta PVR C).'
    },
    clinicalApplicationPractical: '1. Paciente que acude con fotopsias ("luces parpadeantes") y miodesopsias agudas ("moscas volantes"): Examen obligatorio de retina periférica con dilatación máxima; si se visualiza un desgarro en herradura agudo SIN desprendimiento asociado, aplicar LÁSER BARRERA INMEDIATO con lámpara de hendidura en 3 filas continuas rodeando la rotura (reduce el riesgo de progresar a DRR de un 50% a menos del 3-5%).\n2. Regla de Macula-ON vs Macula-OFF: Si la fóvea aún está adherida, es una urgencia de guardia quirúrgica antes de que el líquido la desprenda; una vez la mácula se desprende (Macula-OFF), la recuperación visual final dependerá de la duración del desprendimiento (cirugía preferente en los siguientes 2-7 días, sin diferencia entre operar a las 24 vs 72 horas).',
    highYieldPearl: 'Estudio PIVOT (Pneumatic Retinopexy versus Vitrectomy for Retinal Detachment, Ophthalmology 2019): En roturas superiores que cumplen criterios, la Neumopexia logró una agudeza visual final significativamente superior (+5 letras a 1 año) y menor metamorfopsia cuantitativa que la Vitrectomía, con menor tasa de inducción de catarata nuclear.',
    keyDrugs: [
      { name: 'Hexafluoruro de Azufre (SF6)', dose: 'Concentración isoexpansible 20% (expansión 2x, duración 10-14 días)', warning: 'Prohibido viajar en avión o subir altitudes >1000 m con gas intraocular; prohibida la anestesia general con óxido nitroso (N2O).' },
      { name: 'Perfluoropropano (C3F8)', dose: 'Concentración isoexpansible 14% (expansión 4x, duración 6-8 semanas)', warning: 'Gas de larga duración para roturas inferiores o PVR; mismo bloqueo estricto para viajes aéreos y N2O.' },
      { name: 'Aceite de Silicona 1000 / 5000 cSt', dose: 'Tamponamiento intraocular permanente', warning: 'Induce cambio miópico hipermetrópico, queratopatía en banda y glaucoma por emulsificación a los 3-6 meses; requiere cirugía de extracción programada.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Regla 1 de Lincoff (Desprendimiento Superior Asimétrico)',
        category: 'Perla de Examen Oral / Quirúrgica',
        description: 'Si el líquido subretiniano está en el cuadrante temporal superior pero cruza el meridiano de las 12 horas hasta el cuadrante nasal superior, la rotura NO está en las 12; está en el cuadrante temporal superior a menos de 1.5 horas del borde superior más alto.',
        trapToAvoid: 'Buscar la rotura en el meridiano de las 12 horas en un DRR asimétrico; Lincoff demostró que el líquido siempre cruza las 12 desbordando hacia el lado contralateral.'
      },
      {
        title: 'Anestesia General y Gases Expansibles (N2O Trap)',
        category: 'Seguridad del Paciente / Trampa Clásica',
        description: 'El óxido nitroso (gas hilarante) se difunde 117 veces más rápido hacia la burbuja intraocular que el nitrógeno saliendo de ella. Si un anestesiólogo administra N2O a un paciente con SF6 o C3F8 en el ojo, la burbuja se expande masivamente en minutos disparando la PIO a >60-80 mmHg y provocando oclusión irreversible de la arteria central de la retina y ceguera permanente.',
        trapToAvoid: 'Permitir anestesia general con N2O durante o después de la inyección de gas expansible; debe suspenderse el N2O al menos 20 minutos antes de inyectar gas.'
      }
    ],
    fellowshipKeyPoints: [
      'Líquido subretiniano de Lincoff: Las 4 reglas topográficas aciertan la localización de la rotura primaria en más del 98% de los casos vírgenes de DRR.',
      'Shaving de la base de vítreo: Al realizar PPV por DRR, la tracción residual sobre la base del vítreo anterior es la causa #1 de desgarros iatrogénicos o recidiva; requiere indentación escleral meticulosa mientras se rasura con el vitreotomo a alta frecuencia (>5000-10000 cpm).',
      'Desprendimiento de vítreo posterior (DVP) patológico: La tracción en los bordes de la degeneración en empalizada (lattice) causa desgarros en herradura en el margen posterior del lattice en >30% de los miopes.',
      'Emulsificación del aceite de silicona: Presencia de microgotas de aceite ("espuma de silicona") en el ángulo iridocorneal (gonioscopia) y cámara anterior; principal causa de hipertensión refractaria en ojos con silicona.'
    ],
    landmarkTrials: [
      {
        name: 'PIVOT Trial (Pneumatic Retinopexy vs Vitrectomy)',
        year: '2019',
        conclusion: 'La Retinopexia Neumática ofreció mejor agudeza visual (+8.2 letras vs +3.5) y menor distorsión visual a 1 año frente a Vitrectomía en roturas que cumplían criterios.',
        fellowshipRelevance: 'Pregunta obligada de tribunales de retina sobre la vigencia de la neumopexia en la era de la vitrectomía microincisional.'
      },
      {
        name: 'SPR Study (Scleral Buckling vs Primary Vitrectomy in Rhegmatogenous Retinal Detachment)',
        year: '2007',
        conclusion: 'En pacientes fáquicos, el Cerclaje Escleral logró mejor agudeza visual con menor progresión de catarata que la vitrectomía; en pseudofáquicos la vitrectomía fue superior.',
        fellowshipRelevance: 'Guía la indicación clásica de cerclaje en jóvenes vs PPV en pseudofáquicos.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Tras el despegamiento de la retina neurosensorial, los fotorreceptores sufren fragmentación de sus segmentos externos en 24-72 horas, seguida de retracción de los axones de los conos y apoptosis masiva mediada por caspasa-3 y caspasa-9. Proliferación glial de células de Müller (gliosis reactiva) que forma una cicatriz subretiniana si el desprendimiento no se reduce precozmente.',
    surgicalPearls: [
      'Al realizar intercambio fluido-aire: Secar meticulosamente el borde posterior de la rotura retiniana aspirando sobre el lecho pigmentario con cánula de punta blanda de silicona (soft-tip); si queda líquido residual, el endoláser no coagulará adecuadamente y el gas no tamponará la rotura.',
      'Drenaje de fluido subretiniano en Cerclaje Escleral: Escoger un punto donde el fluido sea más alto, lejos de las venas vorticosas y de la rotura; punción con aguja de 30G en bisel paralelo a las fibras esclerales bajo magnificación y visualización indirecta con oftalmoscopio.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un varón de 52 años miope de -5.00 D consulta por pérdida del campo visual inferior en ojo derecho que comenzó hace 18 horas. A la exploración, su agudeza visual es de 20/20. En la lámpara de hendidura se observa polvo de tabaco en vítreo anterior. En el fondo de ojo dilatado se aprecia un desprendimiento de retina móvil con fluido subretiniano que compromete todo el cuadrante temporal superior y cruza el meridiano de las 12 horas hasta las 11 horas nasal superior, pero la fóvea está respetada (Mácula-ON). ¿Dónde buscará la rotura causal según Lincoff, cuál es el plazo máximo para llevarlo a quirófano y qué opciones quirúrgicas planteará?',
        answer: '1) Localización de la rotura causal (Regla 1 de Lincoff): El fluido está en el cuadrante temporal superior y cruza las 12 desbordando hacia nasal superior. Según la Regla 1 de Lincoff, la rotura primaria se ubica dentro de un radio de 1.5 horas de reloj del borde más elevado temporal (típicamente entre las 10:00 y las 11:30 horas temporales superiores).\n2) Plazo quirúrgico de emergencia: Es un Desprendimiento de Retina con Mácula-ON y agudeza 20/20. Debe ser intervenido de URGENCIA en las próximas 12 a 24 horas para evitar que el fluido alcance y despegue la foveola, lo que causaría daño irreversible de los conos.\n3) Opciones quirúrgicas:\n   a) Retinopexia Neumática (si la rotura está en las horas superiores y el paciente es colaborador para postura estricta postoperatoria);\n   b) Vitrectomía Pars Plana 25G con afeitado de base, endoláser y tamponamiento con gas expansible (SF6 20% o C3F8 14%);\n   c) Cerclaje Escleral segmentario o circunferencial si se prefiere evitar la inducción de catarata precoz en paciente fáquico de 52 años.',
        trap: 'Programar la cirugía electivamente para la semana siguiente diciendo que "como ve 20/20 no es una urgencia", permitiendo que la mácula se desprenda en el intervalo.'
      }
    ]
  },

  // =========================================================================
  // 5. PATOLOGÍA DE LA INTERFASE MACULAR: MER Y VMT
  // =========================================================================
  {
    id: 'deep-retina-interfase-macular-mer-vmt',
    title: 'Patología de la Interfase Macular: Membrana Epirretiniana (MER - Clasificación de Govetto) y Síndrome de Tracción Vitreomacular (VMT) con Pelado de ILM',
    subspecialtyId: 'retina',
    summary: 'Monografía exhaustiva sobre las enfermedades de la interfase vitreomacular: fisiopatología de la migración de células gliales (astrocitos y células de Müller) y del EPR a través de dehiscencias de la Membrana Limitante Interna (ILM), clasificación anatómica moderna de Govetto en SD-OCT (Grados 1 a 4 con Capas Foveales Internas Ectópicas - EIFL), Tracción Vitreomacular focal (<400 µm) vs amplia (>400 µm) según el IVTS, sintomatología de metamorfopsia (cuantificación con Rejilla de Amsler y test M-CHARTS), técnicas de Vitrectomía Pars Plana microincisional con pelado de MER e ILM asistido por colorantes vitales (Brilliant Blue G, MembraneBlue-Dual, Triamcinolona) y complicaciones postquirúrgicas.',
    definitionAndEpidemiology: 'La Membrana Epirretiniana Macular (MER, maculopatía en celofán o arrugamiento macular / pucker) es una proliferación fibrocelular avascular patológica sobre la superficie interna de la membrana limitante interna de la retina en la región macular. Prevalencia global del 7% al 12% en adultos mayores de 50 años (hasta 20% en >75 años). La mayoría son idiopáticas (>80%), asociadas a DVP anómalo con roturas microscópicas de la ILM; formas secundarias tras desgarros retinianos, fotocoagulación con láser, crioterapia, cirugía de desprendimiento de retina o uveítis intermedia.',
    anatomyAndPathophysiology: '1. Mecanismo Celular de la Formación de la MER:\n   • El desprendimiento del vítreo posterior incompleto o anómalo ejerce tracción tangencial sobre la membrana limitante interna (formada por la lámina basal de las células de Müller).\n   • Se generan microdehiscencias o roturas en la ILM.\n   • Células gliales retinianas (astrocitos y células de Müller) migran hacia la superficie epirretiniana.\n   • En casos con roturas periféricas previas o inflamación, células del EPR metaplásicas se suman al lecho fibroso.\n   • Estas células sufren diferenciación hacia miofibroblastos que expresan filamentos intracelulares contráctiles de alfa-actina de músculo liso (alfa-SMA).\n   • La contracción progresiva de la membrana distorsiona la microarquitectura foveal, engruesa la retina central, rectifica los vasos perifoveales y tracciona los fotorreceptores causando metamorfopsia severa.\n2. Clasificación Internacional de Govetto en SD-OCT (Ophthalmology 2017):\n   • Grado 1 (Leve): MER bien visible con depresión foveal preservada; capas retinianas normales.\n   • Grado 2 (Moderado): Pérdida de la depresión foveal normal, pero todas las capas retinianas conservan su estratificación anatómica horizontal clara.\n   • Grado 3 (Avanzado): Presencia de Capas Foveales Internas Ectópicas continuas (EIFL - Ectopic Inner Foveal Layers): banda hiperreflectiva continua que cruza horizontalmente desde la capa nuclear interna y plexiforme interna a través de todo el centro foveal; capas foveales aún individualizables.\n   • Grado 4 (Severo): Desorganización completa y engrosamiento masivo de todas las capas foveales con EIFL prominente y distorsión anatómica caótica; peor pronóstico visual postquirúrgico.\n3. Síndrome de Tracción Vitreomacular (VMT, Clasificación IVTS):\n   • Adhesión vitreomacular persistente en la foveola asociada a distorsión de la arquitectura foveal (edema intrarretiniano o desprendimiento foveolar traccional) en presencia de DVP periférico.\n   • Focal: Diámetro de adhesión vítrea <= 400 µm (mayor riesgo de evolucionar a agujero macular).\n   • Amplia: Diámetro de adhesión vítrea > 400 µm (suele causar edema macular traccional difuso y pliegues retinianos).',
    clinicalExamination: {
      biomicroscopy: 'Lámpara de hendidura con lente de 90D/78D: Brillo o reflejo iridiscente blanquecino sobre la mácula ("maculopatía en celofán"); en estadios avanzados, membrana gruesa opaca grisácea con pliegues retinianos radiados hacia el centro ("pucker macular"), tortuosidad vascular perimacular por tracción centrípeta y ectopia foveal (desplazamiento del centro foveolar).',
      fundus: 'Pseudoagujero macular: Contracción concéntrica de la MER alrededor de la foveola que simula un agujero macular rojizo al oftalmoscopio, pero con agudeza visual conservada y base tisular foveal íntegra en OCT.',
      specialSigns: '• Test M-CHARTS: Cuantificación milimétrica de la metamorfopsia horizontal y vertical mediante líneas punteadas de espaciado variable.\n• Rejilla de Amsler: Ondulación y distorsión de las líneas rectas cuadrículas (metamorfopsia central).'
    },
    diagnosticWorkup: [
      {
        test: 'OCT Spectral-Domain Macular de Alta Definición',
        findings: 'Estudio gold standard diagnóstico: Hiperreflectividad lineal prerrretiniana sobre la ILM con puntos focales de adhesión; cuantificación del Espesor Central Foveal (CFT); estadiaje según Govetto (Grados 1 a 4 con búsqueda de EIFL); presencia de quistes de tracción y análisis de la integridad de la zona elipsoide (EZ) de los fotorreceptores.'
      },
      {
        test: 'Angio-OCT (OCTA)',
        findings: 'Distorsión del plexo capilar superficial y profundo con estiramiento centrípeto de las asas capilares hacia el epicentro de la membrana epirretiniana y reducción del área de la FAZ.'
      },
      {
        test: 'Microperimetría Macular',
        findings: 'Mapeo de la sensibilidad foveolar retiniana en decibelios (dB) y evaluación de la estabilidad de la fijación foveal antes y después de la cirugía.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Agujero Macular de Espesor Total (FTMH)', distinction: 'Defecto foveal completo que atraviesa desde la ILM hasta el EPR con bordes quísticos y pérdida de tejido foveal (Watzke-Allen positivo); en el pseudoagujero la base foveal está preservada.' },
      { condition: 'Edema Macular Diabético o Post-trombótico', distinction: 'Presencia de microaneurismas, hemorragias y exudados lipídicos con fuga masiva en AFG; la MER idiopática no presenta exudados duros.' },
      { condition: 'Retinosquisis Macular Ligada al X', distinction: 'Varones jóvenes, patrón estrellado en rueda de carro foveal con esquisis en capa de fibras nerviosas y defecto genético en RS1.' }
    ],
    steppedManagement: {
      medical: '• Observación estrecha en MER Grado 1 asintomáticas o con metamorfopsia mínima y agudeza visual >=20/25 a 20/30.\n• VMT focal sin MER: En el pasado se empleaba Ocriplasmina intravítrea (Jetrea), hoy en desuso por baja tasa de liberación y efectos adversos fotorreceptores.',
      surgical: '• Vitrectomía Pars Plana Microincisional (PPV 25G o 27G):\n  - Indicaciones: Pérdida visual progresiva (típicamente <= 20/40), metamorfopsia incapacitante que interfiere con la lectura o conducción bilateral, o MER Govetto Grado 3-4 con EIFL prominente.\n  - Pasos quirúrgicos:\n    1) Core vitrectomy e inducción de DVP completo si aún hay vítreo adherido (asistido con Triamcinolona para visualizar la cortical vítrea).\n    2) Tinción dual de la superficie macular con Azul Brillante G (Brilliant Blue G / MembraneBlue-Dual) durante 30-45 segundos.\n    3) Disección y pelado de la MER (Membrane Peeling) con microfórceps de retina o micropúa ("pick"), iniciando el borde en una arcada vascular fuera de la fóvea y traccionando en plano tangencial.\n    4) Pelado de la Membrana Limitante Interna (ILM Peeling): Se realiza sistemáticamente en un área de 2-3 diámetros de disco alrededor de la fóvea para garantizar la eliminación de todos los miofibroblastos residuales y reducir la tasa de recidiva de la MER de un 12-15% a menos del 1-2%.'
    },
    clinicalApplicationPractical: '1. Asesoramiento Pronóstico Preoperatorio: Informar al paciente que la recuperación visual tras cirugía de MER es lenta y progresiva (continúa mejorando hasta 12 a 18 meses postquirúrgicos a medida que la estratificación de los fotorreceptores se reorganiza).\n2. Biomarcador Pronóstico EIFL (Govetto): Los ojos con EIFL (Grados 3 y 4) tienen menor agudeza visual final postquirúrgica que los Grados 1 y 2, pero son los que experimentan el mayor aplanamiento anatómico foveal tras el pelado.',
    highYieldPearl: 'Clasificación de Govetto (Ophthalmology 2017): La presencia de Capas Foveales Internas Ectópicas (EIFL - una banda hiperreflectiva continua que reemplaza la depresión foveal) define los estadios avanzados (Grados 3 y 4) y es el biomarcador negativo más potente de recuperación visual final tras vitrectomía.',
    keyDrugs: [
      { name: 'Azul Brillante G (Brilliant Blue G 0.025%)', dose: '0.1-0.2 mL intraocular para tinción de ILM', warning: 'Perfil de seguridad retiniana superior al Verde de Indocianina (ICG); no genera toxicidad en el EPR ni atrofia foveal.' },
      { name: 'Triamcinolona libre de conservantes', dose: '0.1 mL de suspensión diluida intraocular', warning: 'Permite visualizar las fibras vítreas transparentes durante la inducción del DVP.' },
      { name: 'Azul de Tripano (MembraneBlue 0.15%)', dose: '0.1 mL intraocular', warning: 'Tinción selectiva de la MER sobre la ILM.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Pseudoagujero Macular vs Agujero Macular Lamelar',
        category: 'Asociación Patognomónica',
        description: '• Pseudoagujero: Perfil foveal en "U" o verticalizado por contracción concéntrica de la MER, pero el grosor del lecho foveolar está conservado o aumentado y NO hay pérdida de tejido retiniano.\n• Agujero Lamelar: Bordes festoneados en sombrero de copa ("top-hat") con pérdida real de tejido en capas medias retinianas, separación entre capas y a menudo proliferación epirretiniana atípica hiporreflectiva (LHEP).',
        trapToAvoid: 'Clasificar un pseudoagujero como agujero de espesor total y prometer al paciente que se cerrará un agujero que en realidad nunca estuvo abierto.'
      },
      {
        title: 'Progresión Acelerada de Catarata Nuclear Post-Vitrectomía',
        category: 'Trampa de Tribunal',
        description: 'La vitrectomía pars plana incrementa la tensión de oxígeno en la cavidad vítrea acelerando el estrés oxidativo del cristalino. Prácticamente el 80-90% de los pacientes fáquicos mayores de 50 años desarrollan catarata nuclear significativa que requiere cirugía en los 12-24 meses posteriores a una vitrectomía.',
        trapToAvoid: 'No advertir al paciente fáquico sobre la necesidad casi segura de cirugía de catarata en el primer o segundo año tras vitrectomía por MER.'
      }
    ],
    fellowshipKeyPoints: [
      'Pelado de ILM (ILM Peeling): Elimina el andamio anatómico sobre el que proliferan los miofibroblastos; reduce la tasa de recurrencia de la MER a <2%.',
      'Signo de SANSON (Scattered Asymmetric Neurosensory Spots on OCT): Microroturas en la capa de fibras nerviosas foveales secundarias al pelado agresivo de la ILM.',
      'Test de Watzke-Allen: Negativo en MER y pseudoagujero macular (el haz de luz vertical se ve adelgazado o curvado pero no roto); positivo (haz roto) en agujero macular de espesor total.',
      'Células de Müller y EIFL: Las EIFL se forman por hipertrofia reactiva y deslizamiento centrípeto de las células gliales de Müller y axones de neuronas bipolares hacia el centro foveolar desprovisto de depresión.'
    ],
    landmarkTrials: [
      {
        name: 'Govetto et al. OCT Staging of ERM',
        year: '2017',
        conclusion: 'Estableció la presencia de EIFL como marcador anatómico y funcional capital en la clasificación de las membranas epirretinianas.',
        fellowshipRelevance: 'Pregunta estándar en todos los congresos y exámenes de retina médica y quirúrgica modernos.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología de la MER: Matriz colágena extracelular acelular embebida de células gliales (astrocitos GFAP+ y células de Müller vimentina+), macrófagos CD68+ y miofibroblastos con microfilamentos de alfa-actina de músculo liso (alfa-SMA). La tinción de Von Kossa puede mostrar microcalcificaciones en membranas de muy larga evolución.',
    surgicalPearls: [
      'Al iniciar el pelado de la MER: Crear el flap inicial en el borde temporal superior o inferior fuera de la arcada vascular, NUNCA directamente en el haz papilomacular ni sobre la foveola para evitar escotomas iatrogénicos o rotura foveolar.',
      'Fuerza de tracción con fórceps de microcirugía: Traccionar siempre paralelo a la superficie retiniana en un movimiento tangencial continuo ("pinch and peel"); levantar el fórceps perpendicularmente a la retina puede desgarrar la retina neurosensorial subyacente.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer de 68 años consulta por distorsión visual y dificultad para leer con su ojo derecho de 8 meses de evolución. Su agudeza visual mejor corregida es de 20/50. En el SD-OCT macular se observa una membrana hiperreflectiva gruesa con tracción centrípeta, ausencia completa de depresión foveal y una banda continua hiperreflectiva que cruza horizontalmente todo el centro foveal desde las capas nucleares internas (EIFL). ¿Cuál es el diagnóstico según Govetto, cuál es la conducta quirúrgica indicada y qué pronóstico visual debe comunicarse a la paciente?',
        answer: '1) Diagnóstico: Membrana Epirretiniana Macular Idiopática Estadio 3 de Govetto (por la presencia inequívoca de Capas Foveales Internas Ectópicas - EIFL continuas).\n2) Conducta quirúrgica indicada: Vitrectomía Pars Plana 25G o 27G microincisional con pelado de la membrana epirretiniana + pelado sistemático de la membrana limitante interna (ILM peeling) asistido con tinción de Azul Brillante G en un radio de 2-3 diámetros de papila.\n3) Pronóstico visual: Los ojos con Estadio 3 de Govetto tienen menor agudeza visual final que los Estadios 1 y 2 debido a la desorganización de las capas foveales, pero experimentan una ganancia visual media de 2 a 3 líneas Snellen y una reducción muy significativa de la metamorfopsia a los 6-12 meses. Se debe advertir a la paciente que la recuperación visual es lenta y gradual, y que si es fáquica desarrollará progresión de catarata en 1-2 años.',
        trap: 'Prometer una agudeza visual de 20/20 ignorando el biomarcador negativo EIFL, o no realizar el pelado de ILM permitiendo una tasa de recurrencia del 15%.'
      }
    ]
  },

  // =========================================================================
  // 6. AGUJERO MACULAR IDIOPÁTICO Y MIÓPICO (GASS, IVTS Y FLAP INVERTIDO)
  // =========================================================================
  {
    id: 'deep-retina-agujero-macular-gass-ivts',
    title: 'Agujero Macular Idiopático y Miópico: Clasificación de Gass e IVTS, Índices Pronósticos y Técnica de Flap Invertido de ILM',
    subspecialtyId: 'retina',
    summary: 'Monografía quirúrgica de referencia sobre Agujero Macular de Espesor Total (FTMH): tracción vitreofoveolar tangencial y anteroposterior, comparación histórica entre la clasificación biomicroscópica de Gass y el consenso moderno del International Vitreomacular Traction Study (IVTS) basado en SD-OCT (pequeño <=250 µm, mediano 250-400 µm, grande >400 µm con/sin VMT), índices biométricos predictivos (Índice de Agujero Macular MHI, Diámetro de la Base y Diámetro Mínimo), técnica quirúrgica estándar (PPV + pelado de ILM + intercambio fluido-gas con C3F8 o SF6 + posicionamiento prono) vs Técnicas para Agujeros Gigantes (>500-600 µm), crónicos o miópicos (Técnica de Flap Invertido de ILM de Michalewska, autotrasplante de retina y tapón de membrana amniótica).',
    definitionAndEpidemiology: 'Pérdida anatómica completa de todas las capas de la retina neurosensorial en el centro exacto de la foveola foveal, desde la membrana limitante interna hasta los fotorreceptores, dejando expuesto el epitelio pigmentario subyacente. Incidencia de 3 a 8 casos por 1,000 personas mayores de 55 años; fuerte predominio en mujeres (relación 3:1); bilateral en el 10-15% a lo largo de la vida si el ojo contralateral no presenta DVP completo.',
    anatomyAndPathophysiology: '1. Fisiopatología de la Formación del Agujero Macular:\n   • Estadio inicial: Sinéresis vítrea perifoveal con persistencia de adhesión firme de la corteza vítrea en la foveola (zona avascular donde los conos están estrechamente empaquetados).\n   • Fuerzas de tracción dinámicas anteroposteriores combinadas con tracción tangencial de la corteza vítrea premacular prefoveal.\n   • Elevación foveolar con formación de un quiste intrarretiniano foveal interno (quiste foveolar o Estadio 1A de Gass).\n   • Desprendimiento de los fotorreceptores foveales del EPR (Estadio 1B de Gass).\n   • Ruptura del techo o dehiscencia de la pared del quiste con retracción elástica de los bordes retinianos centrífugamente, formando un defecto de espesor total (FTMH).\n2. Clasificación de Gass (Biomicroscópica Clásica):\n   • Estadio 1: Agujero macular inminente (1A: mancha amarilla foveal por quiste interno; 1B: anillo amarillo foveolar por separación de fotorreceptores).\n   • Estadio 2: Agujero de espesor total temprano (<400 µm) excéntrico o en herradura con opérculo adherido.\n   • Estadio 3: Agujero de espesor total completamente desarrollado (>400 µm) con anillo de fluido subretiniano pero con hialoides posterior aún adherida a la papila óptica.\n   • Estadio 4: Agujero macular de espesor total con DVP completo (desprendimiento hialoideo de la papila con anillo de Weiss visible).\n3. Clasificación del Consenso IVTS (SD-OCT Moderno):\n   • Tamaño del defecto en su diámetro mínimo estrecho horizontal:\n     1) Pequeño: Diámetro mínimo <= 250 µm.\n     2) Mediano: Diámetro mínimo > 250 µm y <= 400 µm.\n     3) Grande: Diámetro mínimo > 400 µm.\n   • Subclasificación etiológica: Con VMT persistente vs Sin VMT; Primario (idiopático) vs Secundario (trauma contuso por rotura foveal por onda de choque, miopía magna o telangiectasias maculares).',
    clinicalExamination: {
      biomicroscopy: 'Defecto circular bien delimitado en el centro foveal con base rojiza donde traslucen puntos amarillentos que corresponden a macrófagos y lipofuscina sobre el EPR; reborde retiniano edematoso sobreelevado circundante con quistes intrarretinianos ("manguito de fluido subretiniano").',
      fundus: 'En estadios 2-3 puede apreciarse un pequeño opérculo flotando suspendido en la hialoides anterior a la foveola.',
      specialSigns: '• Test de Watzke-Allen Patognomónico: Se proyecta una hendidura fina y brillante de luz blanca sobre el centro foveal en lámpara de hendidura con lente de contacto o 90D; el paciente con FTMH refiere que la línea de luz se "rompe", se "interrumpe" en el centro o desaparece por completo (positivo en >95% de los agujeros de espesor total).\n• Test del Punto Láser: Se enfoca una mira de 50 µm de luz de helio-neón o láser rojo en el centro del defecto; el paciente no percibe el punto luminoso.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT Spectral-Domain de Alta Resolución (Scans Radiales de 6 mm)',
        findings: 'Diagnóstico de certeza absoluta: Pérdida completa de todas las capas neurosensoriales foveales con visualización del EPR denudado en la base; medición micrométrica del Diámetro Mínimo (apical) y Diámetro Basal; cálculo del Índice de Agujero Macular (MHI = Altura apical / Diámetro basal; si MHI >0.5, tasa de cierre visual >90%).'
      },
      {
        test: 'Autofluorescencia de Fondo (FAF)',
        findings: 'Hiperautofluorescencia foveal circular brillante marcada debida a la pérdida del pigmento macular protector (luteína y zeaxantina) que normalmente absorbe la luz azul, permitiendo visualizar la autofluorescencia desnuda del EPR subyacente.'
      },
      {
        test: 'Microperimetría Macular',
        findings: 'Escotoma absoluto central denso circunscrito exactamente a la dimensión del defecto foveal.'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Pseudoagujero Macular (Asociado a MER)', distinction: 'Watzke-Allen negativo; presencia de MER gruesa circundante; en SD-OCT el espesor retiniano foveolar está conservado y no hay interrupción de los fotorreceptores ni EPR denudado.' },
      { condition: 'Agujero Macular Lamelar', distinction: 'Pérdida parcial de las capas internas foveales con capas externas de fotorreceptores y EPR continuas en la base; bordes en sombrero de copa ("top-hat").' },
      { condition: 'Microagujero Foveolar', distinction: 'Defecto diminuto (<50 µm) secundario a maculopatía solar o fototraumática (eclipse/láser pointer) con anillo elipsoide roto focal.' }
    ],
    steppedManagement: {
      medical: '• Estadio 1A/1B de Gass: Observación estricta; hasta el 50% de los estadios 1 resuelven espontáneamente tras el desprendimiento espontáneo completo de la corteza vítrea sin abrir un agujero.\n• Agujero de espesor total constituido (Estadios 2, 3 y 4): El tratamiento médico no tiene ningún rol; la resolución espontánea ocurre en <3-5% (solo en agujeros muy pequeños <150 µm).',
      surgical: '• Vitrectomía Pars Plana para Agujero Macular Idiopático Convencional (<400 µm):\n  1) PPV MIVS 25G o 27G con inducción de DVP completo con triamcinolona.\n  2) Tinción de la Membrana Limitante Interna con Azul Brillante G (BBG 0.025%).\n  3) Pelado circunferencial completo de la ILM (ILM peeling) en un radio de 2 diámetros de disco alrededor del agujero (relaja las fuerzas elásticas tangenciales intrínsecas de la retina).\n  4) Intercambio completo fluido-aire con aspiración meticulosa del fluido subretiniano de los bordes del agujero.\n  5) Tamponamiento intraocular con gas expansible:\n     - C3F8 al 14% (gas de larga duración, ideal en agujeros grandes o pacientes con dificultad para postura).\n     - SF6 al 20% (gas de media duración, adecuado en agujeros pequeños <250-300 µm).\n  6) Posicionamiento cefálico prono ("face-down"): Mantener la cabeza mirando hacia el suelo durante 3 a 5 días para que la flotabilidad de la burbuja de gas aísle el lecho foveal del contacto acuoso y afronte los bordes retinianos.\n• Técnicas Avanzadas para Agujeros Gigantes (>400-600 µm), Crónicos o Miópicos:\n  - Técnica de Flap Invertido de ILM (Inverted ILM Flap Technique de Zofia Michalewska): En lugar de extirpar completamente la ILM, se diseca un colgajo de ILM dejando su pedículo adherido en el margen del agujero; al final del intercambio gaseoso, el flap se invierte y se introduce doblado dentro del agujero macular como un tapón biológico. Sirve de andamio para la proliferación glial de células de Müller y migración de conos, elevando la tasa de cierre del 70% al >95-98% en agujeros grandes.'
    },
    clinicalApplicationPractical: '1. Test de Watzke-Allen en la Consulta: Prueba clínica rápida obligada en todo residente; si el paciente refiere que la línea de luz se "adelgaza" pero no se rompe, sospechar pseudoagujero o agujero lamelar y solicitar OCT antes de indicar quirófano.\n2. Protocolo Postoperatorio de Postura: El ensayo TAPAS demostró que en agujeros pequeños (<250-300 µm), la posición prona estricta de 3 días es suficiente para lograr tasas de cierre >95%; en agujeros grandes (>400 µm), el flap invertido de ILM reduce la dependencia de posturas pronas prolongadas.',
    highYieldPearl: 'Técnica de Flap Invertido de Michalewska (Ophthalmology 2010): Revolucionó la cirugía del agujero macular grande (>400 µm), miópico y recidivado; al voltear una solapa de ILM sobre el defecto foveal, se crea un andamio neurotrófico que multiplica la tasa de cierre anatómico y previene la reapertura foveal tardía.',
    keyDrugs: [
      { name: 'Azul Brillante G (BBG)', dose: '0.1-0.2 mL intraocular para teñir ILM', warning: 'Fármaco de elección por ausencia de toxicidad fotorreceptora comparado con el ICG.' },
      { name: 'Perfluoropropano (C3F8) 14%', dose: 'Tamponamiento intraocular gas expansible', warning: 'Duración 6-8 semanas; proscrito el uso de N2O o viajes aéreos mientras exista burbuja.' },
      { name: 'Hexafluoruro de Azufre (SF6) 20%', dose: 'Tamponamiento intraocular gas expansible', warning: 'Duración 10-14 días; menor tiempo de reabsorción en agujeros pequeños.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Morfología de Cierre en SD-OCT: Tipo 1 vs Tipo 2',
        category: 'Cifra Clave de Corte',
        description: '• Cierre Tipo 1 (Cierre Anatómico Ideal): Los bordes de la retina neurosensorial se unen directamente y se reaplican sobre el EPR, restaurando la depresión foveal o reconstituyendo la zona elipsoide (ganancia visual de 3-5 líneas).\n• Cierre Tipo 2 (Cierre Plano Abierto): El manguito edematoso de fluido se aplana sobre el EPR pero el defecto de espesor total foveal persiste sin unión de los fotorreceptores (escotoma central permanente sin mejoría visual).',
        trapToAvoid: 'Considerar exitoso un cierre Tipo 2 en el que el agujero sigue morfológicamente abierto aunque no tenga líquido sobreelevado.'
      },
      {
        title: 'Riesgo del Ojo Contralateral',
        category: 'Pregunta Clásica',
        description: 'Si el ojo contralateral YA presenta un Desprendimiento Vítreo Posterior (DVP) completo evidenciado por anillo de Weiss y OCT, el riesgo de desarrollar agujero macular en ese ojo es prácticamente nulo (<1-2%). Si la hialoides posterior aún está adherida en el otro ojo, el riesgo acumulado a 5 años es del 10 al 15%.',
        trapToAvoid: 'Alarmar innecesariamente al paciente sobre riesgo bilateral si el ojo contralateral ya completó el DVP.'
      }
    ],
    fellowshipKeyPoints: [
      'Índices de Agujero Macular en OCT: MHI (Macular Hole Index = Altura / Base) y THI (Tractional Hole Index = Altura / Diámetro mínimo); valores de MHI >0.5 y THI >1.0 predicen cierre anatómico y agudeza visual postoperatoria >=20/40.',
      'Agujero Macular Miópico con Desprendimiento de Retina (MHRD): Ocurre en miopía magna con estafiloma posterior profundo; la esclera elongada supera la elasticidad de la retina. Requiere vitrectomía + pelado de ILM con flap invertido + tamponamiento con aceite de silicona o cerclaje macular posterior (macular buckle).',
      'Regeneración de fotorreceptores: La reconstitución de la banda elipsoide (EZ) y la membrana limitante externa (ELM) en el SD-OCT a los 6-12 meses postoperatorios es el predictor más exacto de recuperación funcional de la agudeza visual final.',
      'Manejo de agujeros persistentes o no cerrados tras una primera cirugía: Opciones: reaplicación de flap invertido residual, trasplante autólogo de retina libre neurosensorial periférica (técnica de Grewal y Mahmoud) o tapón de membrana amniótica.'
    ],
    landmarkTrials: [
      {
        name: 'Kelly and Wendel Landmark Paper',
        year: '1991',
        conclusion: 'Primera descripción de vitrectomía pars plana exitosa con pelado de membranas y tamponamiento gaseoso para agujero macular, cerrando el 58% de los casos y refutando el dogma de que era una entidad intratable.',
        fellowshipRelevance: 'Hito histórico fundacional de la cirugía macular moderna.'
      },
      {
        name: 'Michalewska Inverted Internal Limiting Membrane Flap Technique',
        year: '2010',
        conclusion: 'Elevó la tasa de cierre en agujeros maculares grandes (>400 µm) del 88% al 98% con agudezas visuales finales significativamente superiores.',
        fellowshipRelevance: 'Técnica quirúrgica estándar requerida en todo fellowship de retina.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Borde del defecto foveal compuesto por células gliales de Müller hipertróficas reactivas, fotorreceptores con degeneración hidrópica de sus segmentos externos y acúmulo de lipofuscina foveal. El opérculo flotante aspirado contiene conos foveolares degenerados y astrocitos gliales proliferativos.',
    surgicalPearls: [
      'Al realizar la técnica de Flap Invertido de ILM: No aspirar con la cánula de fluidos cerca de la fóvea durante el intercambio gas-aire; manipular la infusión y la aspiración sobre la papila óptica o periferia para evitar succionar inadvertidamente el colgajo de ILM hacia el aspirador.',
      'Comprobación de pelado de ILM: Realizar un movimiento circular concéntrico suave ("rhexis de ILM") manteniendo el fórceps cerrado en el plano de la retina; evitar pinzamientos repetidos en el mismo punto para prevenir atrofia del EPR foveolar.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 62 años consulta por un escotoma central en su ojo izquierdo y metamorfopsia severa de 3 meses de evolución. Su agudeza visual es de 20/100 y el test de Watzke-Allen es positivo. El SD-OCT macular muestra un agujero macular de espesor total con diámetro mínimo de 520 µm, diámetro basal de 950 µm y quistes intrarretinianos en los bordes. ¿Qué clasificación tiene según el IVTS y Gass, qué técnica quirúrgica ofrece la mayor probabilidad de cierre y qué instrucciones postquirúrgicas indicará?',
        answer: '1) Diagnóstico y Clasificación:\n   • Clasificación de Gass: Agujero Macular Estadio 3 (o 4 si el vítreo está totalmente desprendido de la papila).\n   • Clasificación IVTS: Agujero Macular de Espesor Total Grande (>400 µm, mide 520 µm) sin tracción vitreomacular persistente.\n2) Técnica quirúrgica de elección:\n   - Dado que el agujero es Grande (>400 µm), el pelado estándar de ILM tiene menor tasa de éxito anatómico (70-80%).\n   - Técnica de elección: Vitrectomía Pars Plana 25G con Técnica de Flap Invertido de ILM (Inverted ILM Flap de Michalewska): se diseca un colgajo de ILM teñido con Azul Brillante G dejando una charnela en el borde foveal, que luego se invierte y se introduce doblado dentro del defecto foveal como andamio biológico.\n   - Tamponamiento con gas expansible C3F8 al 14% o SF6 al 20%.\n3) Instrucciones postoperatorias:\n   - Posición prona estricta ("face-down") durante 3 a 5 días.\n   - Prohibición absoluta de viajar en avión, ascender a altitudes elevadas o recibir anestesia general con óxido nitroso (N2O) mientras exista gas intraocular.',
        trap: 'Realizar un pelado simple convencional extirpando toda la ILM en un agujero de 520 µm, arriesgando una tasa de reapertura o falla de cierre primaria >20-30%.'
      }
    ]
  },
  // =========================================================================
  // 7. CORIORRETINOPATÍA SEROSA CENTRAL Y ESPECTRO PAQUICOROIDES
  // =========================================================================
  {
    id: 'deep-retina-coriorretinopatia-serosa-central-paquicoroides',
    title: 'Espectro Paquicoroides y Coriorretinopatía Serosa Central (CSC): De la Fisiopatología al Ensayo PLACE',
    subspecialtyId: 'retina',
    summary: 'Monografía integral sobre la coriorretinopatía serosa central (CSC) y el espectro paquicoroides (Epiteliopatía Pigmentaria Paquicoroidea, Neovasculopatía Paquicoroidea), mecanismos de hiperpermeabilidad coroidea, desprendimiento seroso macular, contraindicación categórica de corticoides y protocolos terapéuticos (TFD a media dosis vs micropulso subumbral vs antagonistas mineralocorticoides).',
    definitionAndEpidemiology: 'La CSC es una retinopatía macular caracterizada por el desprendimiento seroso neurosensorial foveal secundario a una hiperpermeabilidad coroidea localizada y disfunción focal de la barrera hematorretiniana externa del EPR. Predomina marcadamente en varones (proporción 6:1), típicamente entre 25 y 55 años, con personalidad tipo A (competitivos, hiperalerta), privación de sueño y niveles elevados de cortisol sérico o simpaticomimetismo. Es la cuarta enfermedad médica macular más frecuente tras la DMAE, la retinopatía diabética y las oclusiones venosas.',
    anatomyAndPathophysiology: '1. Fenotipo Paquicoroides: Engrosamiento difuso de la coroides (grosor macular >350-400 µm) a expensas de la dilatación asimétrica masiva de vasos de la capa de Haller ("paquivasos") que comprimen y provocan atrofia focal de la coriocapilar y capa de Sattler supraadyacente.\n2. Hiperpresión e Hiperpermeabilidad Coroidea: La congestión venosa vorticosa intrínseca y la estasis vascular generan fuga masiva de albúmina y transudado al estroma coroideo.\n3. Falla de la Barrera del Epitelio Pigmentario de la Retina: La presión hidrostática sub-EPR excede la resistencia mecánica de las zonulae occludens del EPR, provocando micromicrorrupturas o desprendimientos serosos del EPR (DEP seroso) que actúan como chimeneas ("blowouts") permitiendo la inundación del espacio subretiniano con líquido rico en proteínas.\n4. Rol de los Corticoides: Los glucocorticoides aumentan la expresión de receptores mineralocorticoides endoteliales coroideos, alteran la bomba Na/K-ATPasa del EPR y promueven trombosis o hiperpermeabilidad capilar, siendo el factor desencadenante o agravante iatrogénico más potente.',
    clinicalExamination: {
      biomicroscopy: 'Polo posterior: Elevación en cúpula, lúcida y transparente, de la retina neurosensorial macular. Pérdida del brillo o reflejo foveolar normal. En fases crónicas se observan múltiples depósitos subretinianos de fibrina amarillenta densa y precipitados fotorreceptoriales subfoveales.',
      fundus: 'Ampolla serosa bien delimitada que abarca la fóvea. En casos crónicos o recidivantes: tractos de atrofia gravitacional o "huellas de goteo" (gutte tracks) hiperpigmentadas e hipopigmentadas que descienden verticalmente desde el polo posterior hacia la periferia inferior.',
      specialSigns: '• Micropsia y metamorfopsia en rejilla de Amsler (por separación y divergencia de los fotorreceptores).\n• Fenómeno de desaturación de colores (discromatopsia azul-amarillo) y escotoma relativo central.\n• Hipermetropización transitoria adquirida (+1.00 a +2.50 Dpt) por desplazamiento anterior de los fotorreceptores foveales respecto al plano focal del ojo.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT de Dominio Espectral con EDI (Enhanced Depth Imaging SD-OCT)',
        findings: 'Grosor coroideo subfoveal marcadamente aumentado (>400-500 µm) con paquivasos en la capa de Haller; desprendimiento seroso neurosensorial con elongación hiperreflectiva de los segmentos externos de fotorreceptores (cilindros de bacilos no fagocitados por el EPR desprendido); visualización de micromicrorruptura o micro-DEP en la base.'
      },
      {
        test: 'Angiografía Fluoresceínica (FAG)',
        findings: 'Patrón clásico en el 10-15% de casos: fuga en "humo de chimenea" (smokestack leak), donde el colorante asciende verticalmente y se expande en hongo; patrón más común (80-85%): fuga puntual focal expansiva en "punto de tinta" (inkblot leak). En formas crónicas: hiperfluorescencia difusa parcheada en "sal y pimienta" por atrofia del EPR.'
      },
      {
        test: 'Angiografía con Verde de Indocianina (ICGA) - Gold Standard Fisiopatológico',
        findings: 'Fase precoz y media: zonas hiperfluorescentes focales o difusas por hiperpermeabilidad coroidea en estroma y paquivasos dilatados que sobrepasan con creces el área de fuga en la FAG; fase tardía: lavado central (washout) con halo hiperfluorescente persistente.'
      },
      {
        test: 'Angio-OCT (OCTA)',
        findings: 'Esencial para descartar Neovasculopatía Paquicoroidea (MNV Tipo 1 oculta bajo el EPR), visible como una red vascular en el espacio corio-capilar/sub-EPR sin necesidad de inyección de contraste intravenoso.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Neovasculopatía Paquicoroidea / Vasculopatía Polipoidea Coroidea (PCV)',
        distinction: 'Mayor edad (>50-60 años), fluido persistente sin remisión, hemorragia subretiniana franca o nódulos anaranjados; OCTA muestra red vascular y ICGA muestra pólipos.'
      },
      {
        condition: 'Síndrome de Vogt-Koyanagi-Harada (VKH) en fase aguda',
        distinction: 'Bilateral, dolor ocular, hiperemia ciliar, múltiples desprendimientos serosos bulosos multilobulados, panuveítis con vitritis anterior/posterior y engrosamiento coroideo difuso inflamatorio con pleocitosis en LCR.'
      },
      {
        condition: 'Metástasis coroidea o Hemangioma coroideo circunscrito',
        distinction: 'Masa coroidea amelanótica cupuliforme o meseta visible ecográficamente (alta reflectividad acústica interna en hemangioma, media-baja en metástasis) con líquido subretiniano secundario.'
      }
    ],
    steppedManagement: {
      medical: 'Fase Inicial: CSC Aguda (<3-4 meses de evolución): Conducta expectante y observación activa, suspensión estricta de TODO corticoide (tópico, inhalado, nasal, articular, sistémico). El 80-90% resuelve espontáneamente con preservación visual.\n\nFase Intermedia: CSC Persistente (>3 meses con fluido foveal), Recurrente o Demanda Visual Profesional: Tratamiento activo para evitar la atrofia irreversible de fotorreceptores y pérdida permanente de agudeza visual.',
      surgical: 'Manejo Quirúrgico y Avanzado: Gold Standard Definitivo (según Ensayo PLACE): Terapia Fotodinámica con Verteporfina a MEDIA DOSIS (Half-Dose PDT: 3 mg/m² de verteporfina, 50 J/cm², 689 nm durante 83 segundos). Alternativa no destructiva: Láser Micropulso Subumbral amarillo (577 nm) o antagonistas del receptor mineralocorticoide (Eplerenona/Espironolactona) como puente.'
    },
    clinicalApplicationPractical: 'Interrogatorio exhaustivo sobre corticoides: Preguntar activamente por cremas dérmicas para eccema, aerosoles nasales para rinitis, inhaladores bronquiales, gotas óticas o inyecciones articulares/tendinosas recientes; el paciente a menudo no los considera "medicamentos".\n\nSi el paciente no puede suspender un corticoide sistémico indispensable (ej. trasplante de órgano o vasculitis reumatológica), coordinar de inmediato con su médico tratante para reducir a la mínima dosis posible o rotar a inmunomoduladores no esteroideos.\n\nSi la FAG muestra un punto de fuga extrafoveal a más de 500-1000 µm del centro de la fóvea: Se puede considerar fotocoagulación con láser focal térmico de baja intensidad directo al punto de fuga, aunque la TFD a media dosis sigue siendo más fisiológica.',
    highYieldPearl: 'NUNCA administrar corticoides a un paciente con Coriorretinopatía Serosa Central bajo la falsa sospecha de "uveítis posterior" o "papilitis". El corticoide exacerba catastróficamente la CSC, podendo generar desprendimientos serosos ampollosos gigantes o neovascularización foveal devastadora.',
    keyDrugs: [
      {
        name: 'Verteporfina (Visudyne) - Protocolo Half-Dose',
        dose: '3 mg/m² IV (la mitad de la dosis convencional de 6 mg/m²) infundida en 10 minutos; activación con láser a 689 nm a los 15 minutos (fluencia 50 J/cm², irradiancia 600 mW/cm², 83 s).',
        warning: 'Generación de radicales de oxígeno que ocluyen y remodelan selectivamente la coriocapilar hiperpermeable y los paquivasos sin dañar la neuroretina suprayacente ni inducir atrofia coriorretiniana.. Fotosensibilidad estricta durante 48 horas postinfusión (evitar exposición solar directa, usar ropa protectora y gafas oscuras certificadas).'
      },
      {
        name: 'Eplerenona',
        dose: '25 mg/día VO la primera semana, escalando a 50 mg/día VO durante 2 a 3 meses.',
        warning: 'Antagonista selectivo del receptor de mineralocorticoides; bloquea el efecto del cortisol sobre los vasos coroideos dilatados reduciendo el grosor y la hiperpermeabilidad.. Monitorizar función renal y potasio sérico basal y al mes (riesgo de hiperpotasemia; contraindicado con TFG <30 ml/min).'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Perla de Examen #1',
        category: 'Asociación Patognomónica',
        description: 'Recordar el aspecto de la fuga en FAG: la más frecuente en exámenes teóricos es el "humo de chimenea" (smokestack leak), pero en la vida real el 80% es en "punto de tinta" (inkblot).',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #2',
        category: 'Trampa de Tribunal',
        description: 'Asociación sistémica típica: Varón joven ejecutivo, estrés crónico, uso de sildenafilo o esteroides exógenos, síndrome de Cushing o feocromocitoma.',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #3',
        category: 'Cifra Clave de Corte',
        description: 'Complicación más temida de la CSC crónica: Conversión a Neovasculopatía Paquicoroidea (MNV Tipo 1) que requerirá inyecciones intravítreas de anti-VEGF combinadas con TFD.',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo PLACE (Ophthalmology 2018): Ensayo clínico aleatorizado multicéntrico que comparó TFD a media dosis vs Láser Micropulso Subumbral (SMPL) en CSC crónica. La TFD a media dosis demostró superioridad estadísticamente significativa en resolución anatómica completa de líquido subretiniano (67.2% vs 28.8%, p<0.001) y ganancia visual.',
      'Ensayo VICI (Lancet 2020): Evaluó eplerenona vs placebo en CSC activa persistente; concluyó que eplerenona NO fue superior a placebo en agudeza visual a los 12 meses, consolidando a la TFD a media dosis como la terapia de referencia.'
    ],
    landmarkTrials: [
      {
        name: 'PLACE Trial (Half-dose PDT vs High-density Subthreshold Micropulse Laser)',
        year: '2018',
        conclusion: 'La Terapia Fotodinámica a media dosis es significativamente superior al láser micropulso subumbral en inducir resolución anatómica completa del fluido subretiniano en CSC crónica.',
        fellowshipRelevance: 'Guía clínica de Nivel I que define la TFD como el estándar de oro en CSC crónica.'
      },
      {
        name: 'VICI Trial',
        year: '2020',
        conclusion: 'Los antagonistas de mineralocorticoides (eplerenona) no mostraron beneficio estadísticamente significativo frente a placebo en la agudeza visual corregida en CSC crónica.',
        fellowshipRelevance: 'Cuestionó el uso rutinario generalizado de eplerenona/espironolactona, reservándolos sólo cuando la TFD no está disponible.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Atrofia focal y denudación de células del EPR en la zona de fuga, con engrosamiento y vasodilatación masiva de la capa de Haller coroidea. Genética: Variantes alélicas de susceptibilidad en el gen del Factor H del Complemento (CFH) y el gen ARMS2/HTRA1 se solapan parcialmente con la DMAE, mientras que polimorfismos en el gen del receptor de mineralocorticoides (NR3C2) predisponen a la desregulación vascular coroidea.',
    surgicalPearls: [
      'Cálculo del spot en TFD para CSC: Abarcar toda el área de hiperfluorescencia coroidea visualizada en la ICGA temprana-media, no únicamente el punto de fuga visible en la FAG.',
      'Uso del láser micropulso subumbral: Modo con ciclo de trabajo (duty cycle) del 5%, longitud de onda 577 nm, disparos confluentes de alta densidad sobre el área de engrosamiento del EPR sin producir ninguna quemadura visible biomicroscópicamente.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 38 años, piloto de aerolínea comercial, acude con visión borrosa de 4 meses de evolución en ojo derecho (AV 20/40), metamorfopsia y visión atenuada. El SD-OCT muestra fluido subretiniano foveal de 280 µm y grosor coroideo de 510 µm. La FAG demuestra un punto de fuga en tinta a 250 µm de la foveola y la ICGA muestra una placa de hiperpermeabilidad de 1.8 mm. El paciente refiere usar betametasona tópica para dermatitis. ¿Cuál es el plan de abordaje médico integral, qué ensayos sustentan su decisión y qué advertencia pronóstica le otorgará?',
        answer: '1) Manejo Médico Inmediato:\n   - Retiro inmediato y absoluto de la betametasona tópica (y cualquier otra fuente esteroidea) en consulta con su dermatólogo.\n   - Evitar simpaticomiméticos y optimizar manejo del estrés/sueño.\n2) Tratamiento de la Maculopatía:\n   - Como han transcurrido 4 meses (fase crónica persistente) y existe un requerimiento visual profesional crítico (piloto con pérdida visual foveal), no se debe prolongar la observación pasiva por riesgo de atrofia permanente de fotorreceptores.\n   - Tratamiento de elección: Terapia Fotodinámica con Verteporfina a MEDIA DOSIS (3 mg/m², 50 J/cm², 83 s, spot guiado por ICGA).\n   - Justificación basada en evidencia: El ensayo clínico aleatorizado PLACE (2018) demostró una superioridad rotunda de la TFD a media dosis sobre el láser micropulso (67% vs 29% de reabsorción completa de fluido a los 8 meses).\n   - Como la fuga está a 250 µm del centro de la foveola, el láser térmico convencional está CONTRAINDICADO por riesgo de escotoma central iatrogénico permanente y neovascularización secundaria.\n3) Advertencia y seguimiento:\n   - Protección solar estricta 48 horas post-TFD.\n   - Reevaluación con OCT a las 4-6 semanas. En caso de persistencia o sospecha de MNV, realizar OCTA para descartar neovasculopatía paquicoroidea.',
        trap: 'Indicar prednisona oral o inyección de triamcinolona subtenoniana pensando erróneamente en un edema macular uveítico, o aplicar láser térmico directo en una lesión yuxtafoveal.'
      }
    ]
  },
  // =========================================================================
  // 8. DMAE SECA, ATROFIA GEOGRÁFICA Y VÍA DEL COMPLEMENTO
  // =========================================================================
  {
    id: 'deep-retina-dmae-seca-atrofia-geografica-complemento',
    title: 'DMAE Seca, Atrofia Geográfica Avanzada y Modulación de la Vía del Complemento',
    subspecialtyId: 'retina',
    summary: 'Monografía avanzada sobre las fases no exudativas de la degeneración macular: drusas intermedias, drusas blandas, pseudodrusas reticulares (subretinal drusenoid deposits), evolución a Atrofia Geográfica (AG), la cascada del complemento en la patogénesis y los inhibidores biológicos de C3 y C5 aprobados por la FDA (Pegcetacoplán y Avacincaptad Pegol).',
    definitionAndEpidemiology: 'La Atrofia Geográfica representa la etapa tardía o avanzada no exudativa de la degeneración macular asociada a la edad (DMAE). Se define por la pérdida confluente, bien delimitada y progresiva de los fotorreceptores, el epitelio pigmentario de la retina (EPR) y la coriocapilar subyacente. Afecta a más de 5 millones de personas a nivel mundial, con una prevalencia que se duplica cada 5 años después de los 70 años, provocando escotomas densos irreversibles y pérdida de la lectura y visión central.',
    anatomyAndPathophysiology: '1. Biogénesis de las Drusas: Depósito de restos lipídicos oxidados, apolipoproteínas (ApoE) y subproductos del ciclo visual entre la lámina basal del EPR y la membrana de Bruch.\n2. Pseudodrusas Reticulares (Depósitos Drusenoides Subretinianos - SDD): Acúmulos ubicados POR ENCIMA del EPR, en el espacio subretiniano (entre los segmentos externos de fotorreceptores y el EPR). Son un biomarcador de alto riesgo de progresión rápida tanto a atrofia geográfica como a MNV Tipo 3.\n3. Desregulación de la Cascada del Complemento: La activación constitutiva o desregulada de la vía alternativa del complemento (polimorfismos de pérdida de función en CFH o ganancia en C3/CFB) genera:\n   • Clivaje de C3 a C3a y C3b.\n   • Activación de la convertasa de C5 con liberación del potente factor anafilatoxina proinflamatorio C5a.\n   • Ensamblaje del Complejo de Ataque a la Membrana (MAC / C5b-9) en la superficie basal de las células del EPR, provocando lisis celular osmótica, estrés oxidativo mitocondrial y apoptosis en cadena de fotorreceptores adyacentes.\n4. Fenómeno de Junctional Zone: La pérdida celular avanza centrípetamente desde los bordes de la atrofia hacia la fóvea (foveal sparing inicial seguido de compromiso foveal inexorable).',
    clinicalExamination: {
      biomicroscopy: 'Polo posterior: Zonas bien demarcadas de hipopigmentación foveal o parafoveal donde se visualizan con extrema nitidez los grandes vasos coroideos subyacentes debido a la transparencia absoluta generada por la ausencia de EPR y coriocapilar.',
      fundus: 'Área geográfica o multilobulada "en sacabocado" de palidez coroidea con borde neto festoneado e islotes de hiperpigmentación perilesional.',
      specialSigns: '• Escotoma paracentral denso con conservación transitoria de agudeza visual central (foveal sparing), que dificulta severamente la lectura de oraciones continuas a pesar de leer letras aisladas 20/25 en la cartilla de Snellen.\n• Autofluorescencia de Fondo (FAF): Borde perilesional hiperautofluorescente difuso o focal (biomarcador de lipofuscina tóxica acumulada en células del EPR en sufrimiento que predice rápida expansión lesional).'
    },
    diagnosticWorkup: [
      {
        test: 'Autofluorescencia de Fondo (FAF - BluePeak o Green)',
        findings: 'Área atrófica central de HIPOautofluorescencia absoluta (ausencia completa de lipofuscina por muerte celular del EPR). El borde de unión (junctional zone) puede exhibir patrones de HIPERautofluorescencia: focal, parcheado, lineal o difuso (el patrón difuso en goteo "diffuse trickling" tiene la mayor tasa anual de progresión).'
      },
      {
        test: 'OCT de Dominio Espectral (SD-OCT) - Criterios CAM (Classification of Atrophy Meetings)',
        findings: 'Diagnóstico formal de cRORA (Complete RPE and Outer Retinal Atrophy):\n1) Zona de atrofia del EPR ≥250 µm de diámetro.\n2) Pérdida de fotorreceptores suprayacentes (interrupción de la línea elipsoide y membrana limitante externa).\n3) Hipertransmisión coroidea (choroidal hypertransmission) posterior al defecto del EPR ≥250 µm de diámetro.\n4) Ausencia de signos de desgarro del EPR.'
      },
      {
        test: 'Microperimetría Macular',
        findings: 'Mapeo cuantitativo de sensibilidad retiniana en decibelios (dB) correlacionado punto a punto con la lesión en la FAF; identifica escotomas densos absolutos (0 dB) y bordes de escotoma relativo.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Distrofia Macular de Stargardt de inicio tardío',
        distinction: 'Flecks pisciformes amarillentos característicos perifoveales y silencio coroideo (dark choroid) patognomónico en la angiografía con fluoresceína.'
      },
      {
        condition: 'Atrofia Girata de Coroides y Retina',
        distinction: 'Lesiones atróficas redondeadas confluentes que inician en la periferia media y avanzan centralmente; niveles plasmáticos marcadamente elevados de ornitina por mutación en OAT.'
      },
      {
        condition: 'Toxicidad retiniana por Hidroxicloroquina (fase tardía)',
        distinction: 'Patrón de maculopatía en ojo de buey bilateral simétrico; antecedentes de consumo prolongado (>5 mg/kg/día durante >5 años) y alteración perimacular en campo visual 10-2.'
      }
    ],
    steppedManagement: {
      medical: 'Fase Inicial: DMAE Intermedia (Drusas grandes >125 µm o drusas intermedias confluentes con alteraciones pigmentarias): Suplementación antioxidante con fórmula AREDS-2 estricta (Vitamina C 500 mg, Vitamina E 400 UI, Luteína 10 mg, Zeaxantina 2 mg, Zinc 80 mg ó 25 mg, Cobre 2 mg). Cese total del tabaquismo y dieta mediterránea.\n\nFase Intermedia: Atrofia Geográfica Extrafoveal o Subfoveal Incipiente: Evaluación mediante FAF cada 4-6 meses para cuantificar tasa de progresión anual en mm²/año. Educación sobre rejilla de Amsler para detección precoz de conversión neovascular.',
      surgical: 'Manejo Quirúrgico y Avanzado: Terapia con Inhibidores de la Cascada del Complemento Aprobados por FDA:\n1) Pegcetacoplán (Syfovre): 15 mg / 0.1 mL en inyección intravítrea cada 25 a 60 días (ensayos DERBY y OAKS).\n2) Avacincaptad pegol (Izervay): 2 mg / 0.1 mL en inyección intravítrea mensual (ensayos GATHER1 y GATHER2).\nAmbos fármacos reducen la tasa de crecimiento de la atrofia entre un 18% y un 36%, aunque no regeneran el tejido ya perdido.'
    },
    clinicalApplicationPractical: 'Comunicación clara y empática con el paciente: Explicar minuciosamente que los inhibidores del complemento NO restauran la visión perdida ni mejoran la agudeza visual actual; su beneficio es enlentecer la expansión de la atrofia para postergar o evitar el compromiso del centro foveolar.\n\nVigilancia estricta de exudación secundaria: El bloqueo del complemento se asocia a una tasa incrementada de desarrollo de Neovascularización Macular Exudativa (DMAE húmeda secundaria) en un 7-12% de los pacientes inyectados, requiriendo terapia combinada con anti-VEGF si aparece fluido.\n\nAdvertencia sobre Vasculitis Oclusiva Retiniana: Tras la comercialización de pegcetacoplán se reportaron casos raros de vasculitis oclusiva inflamatoria no infecciosa severa; suspender de inmediato ante cualquier vitritis o dolor ocular postinyección.',
    highYieldPearl: 'La fórmula AREDS original utilizaba Betacaroteno (15 mg). En fumadores o exfumadores el betacaroteno incrementa el riesgo de cáncer de pulmón. El estudio AREDS-2 demostró que reemplazar el betacaroteno por Luteína (10 mg) y Zeaxantina (2 mg) mantiene e incluso mejora la eficacia protectora eliminando por completo el riesgo carcinogénico pulmonar.',
    keyDrugs: [
      {
        name: 'Pegcetacoplán (Syfovre)',
        dose: '15 mg / 0.1 mL intravítreo cada 25 a 60 días (mensual o bimensual).',
        warning: 'Péptido pegilado sintético que se une a C3 y a su fragmento activo C3b, bloqueando simultáneamente el clivaje de C3 mediado por las tres vías del complemento (clásica, lectinas y alternativa).. Riesgo de neovascularización macular exudativa secundaria (7-12%), inflamación intraocular (2-4%) y riesgo excepcional de vasculitis oclusiva retiniana.'
      },
      {
        name: 'Avacincaptad Pegol (Izervay)',
        dose: '2 mg / 0.1 mL intravítreo mensual durante hasta 12 a 24 meses.',
        warning: 'Aptámero de ARN pegilado que se une e inhibe específicamente a la proteína del complemento C5, previniendo su escisión a C5a y C5b y evitando la formación del complejo de ataque a la membrana (MAC C5b-9).. Menor incidencia reportada de vasculitis inflamatoria; monitorización continua de elevación transitoria de la PIO postinyección.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Perla de Examen #1',
        category: 'Asociación Patognomónica',
        description: 'Categorías AREDS: Categoría 1 (sin DMAE), Categoría 2 (drusas pequeñas <63 µm), Categoría 3 (al menos una drusa grande >125 µm o atrofia geográfica no central), Categoría 4 (DMAE avanzada: atrofia foveal o DMAE neovascular en un ojo). AREDS-2 sólo beneficia a Categorías 3 y 4.',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #2',
        category: 'Trampa de Tribunal',
        description: 'Criterios cRORA (CAM consensus): Pérdida de EPR ≥250 µm + atrofia de fotorreceptores suprayacentes + hipertransmisión coroidea ≥250 µm sin desgarro de EPR.',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #3',
        category: 'Cifra Clave de Corte',
        description: 'Pseudodrusas reticulares se ven mejor en imágenes infrarrojas (enlightened infrared) y FAF que en la retinografía a color convencional.',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayos OAKS y DERBY: Ensayos clínicos fase 3 a 24 meses con pegcetacoplán. Mostraron una reducción del crecimiento del área de atrofia del 22% y 18% (dosis mensual) y 18% y 17% (dosis cada dos meses) respectivamente, con mayor efecto protector observado en lesiones no foveales.',
      'Ensayos GATHER1 y GATHER2: Evaluaron avacincaptad pegol 2 mg mensual vs sham a 12 y 24 meses. GATHER2 alcanzó su objetivo primario con una reducción estadísticamente significativa del 14% al 18% en la tasa media de crecimiento de la atrofia geográfica.'
    ],
    landmarkTrials: [
      {
        name: 'AREDS-2 Study Group',
        year: '2013',
        conclusion: 'Reemplazar el betacaroteno por luteína (10 mg) y zeaxantina (2 mg) en la fórmula AREDS original redujo el riesgo de progresión a DMAE avanzada en un 18% adicional en el grupo sin betacaroteno y abolió el riesgo de cáncer de pulmón.',
        fellowshipRelevance: 'Estableció el estándar nutricional universal para pacientes con DMAE intermedia o avanzada unilateral.'
      },
      {
        name: 'OAKS & DERBY Phase III Trials',
        year: '2023',
        conclusion: 'Pegcetacoplán demostró por primera vez en la historia médica una reducción estadísticamente significativa y sostenida en la expansión de la atrofia geográfica a 24 meses.',
        fellowshipRelevance: 'Aprobación pionera por FDA del primer tratamiento farmacológico para atrofia geográfica secundaria a DMAE.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Ausencia focal de monocapa del EPR con lisis de la lámina de colágeno elástica de la membrana de Bruch; los fotorreceptores suprayacentes muestran despolarización, retracción de sus segmentos y desaparición de la capa nuclear externa. Genética: El 50-70% de la susceptibilidad heredable está explicada por dos loci principales: Locus 1q32 (gen del Factor H del Complemento - CFH, variante patogénica p.Tyr402His) y Locus 10q26 (genes ARMS2/HTRA1).',
    surgicalPearls: [
      'Al realizar inyección intravítrea de pegcetacoplán (volumen de 0.1 mL, viscoso): La jeringa tiene mayor resistencia hidrodinámica; utilizar aguja de 29G o 30G con fijación Luer-Lock y comprobar la perfusión de la arteria central de la retina mediante oftalmoscopía indirecta postinyección inmediata debido al incremento transitorio de PIO inducido por 0.1 mL.',
      'Paracentesis de cámara anterior profiláctica: Considerar en pacientes con glaucoma avanzado o excavación papilar >0.8 antes de inyectar volúmenes intravítreos de 0.1 mL.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una mujer de 74 años con DMAE no exudativa presenta una lesión parafoveal hipoautofluorescente de 1.9 mm² en FAF con borde hiperautofluorescente difuso en ojo derecho. Su agudeza visual es 20/32. El SD-OCT confirma cRORA respetando el centro de la foveola por 180 µm. No hay evidencia de líquido intra o subretiniano. La paciente pregunta si existen tratamientos que "frenen el avance de la mancha ciega". ¿Qué opciones terapéuticas existen, cómo les explicará las expectativas y qué riesgos debe advertirle en el consentimiento informado?',
        answer: '1) Explicación del Diagnóstico y Pronóstico Natural:\n   - Presenta Atrofia Geográfica (cRORA) parafoveal en ojo derecho. Actualmente cuenta con "foveal sparing" que preserva su visión central de 20/32, pero el borde hiperautofluorescente indica una alta tasa de expansión que amenaza comprometer la fóvea en los próximos 1-2 años.\n2) Opciones Terapéuticas Específicas:\n   - Suplementación AREDS-2 con Luteína/Zeaxantina para reducir riesgo de conversión en ambos ojos.\n   - Inhibidores de la Cascada del Complemento aprobados (Pegcetacoplán mensual/bimensual o Avacincaptad pegol mensual):\n     • Mecanismo y Expectativa Realista: Se debe enfatizar con absoluta honestidad que estas terapias NO restauran los fotorreceptores muertos ni recuperan visión ni mejoran la cartilla de agudeza visual. Su único beneficio comprobado es enlentecer la tasa de expansión de la atrofia entre un 18% y 25% anual, comprando tiempo biológico foveal.\n3) Consentimiento de Riesgos Críticos:\n   - Riesgo de conversión a DMAE Exudativa Neovascular (DMAE húmeda) en un 7-12%, lo que requeriría inyecciones adicionales de anti-VEGF.\n   - Riesgos inherentes al procedimiento intravítreo repetido: endoftalmitis (1/2000 inyecciones), hemorragia vítrea, desprendimiento de retina.\n   - Riesgo de inflamación intraocular y vasculitis retiniana.',
        trap: 'Prometer mejoría de agudeza visual o no advertir el riesgo incrementado de conversión a DMAE neovascular tras la inhibición del complemento.'
      }
    ]
  },
  // =========================================================================
  // 9. DESPRENDIMIENTO TRACCIONAL EN RETINOPATÍA DIABÉTICA PROLIFERATIVA
  // =========================================================================
  {
    id: 'deep-retina-desprendimiento-traccional-proliferativa',
    title: 'Desprendimiento de Retina Traccional y Mixto en Retinopatía Diabética Proliferativa Avanzada',
    subspecialtyId: 'retina',
    summary: 'Tratado quirúrgico y fisiopatológico sobre las complicaciones proliferativas fibrovasculares de la diabetes: patogénesis de la contracción hialoidea, delimitación entre desprendimiento traccional (DRT) y traccional-regmatógeno (mixto), el peligroso fenómeno de "crunch macular" post-anti-VEGF y técnicas de vitrectomía (segmentación, delaminación, disección bimanual y tamponamientos).',
    definitionAndEpidemiology: 'El Desprendimiento de Retina Traccional (DRT) es una de las manifestaciones más graves e invalidantes de la Retinopatía Diabética Proliferativa (RDP). Se produce por la contracción mecánica progresiva de membranas fibrovasculares epirretinianas originadas a partir de la neovascularización retiniana y vítrea que traccionan mecánicamente de la retina neurosensorial, desprendiéndola del epitelio pigmentario sin que exista inicialmente una rotura retiniana de espesor total. Representa hasta el 40-50% de las indicaciones de vitrectomía en adultos jóvenes en edad productiva.',
    anatomyAndPathophysiology: '1. Isquemia Capilar Retiniana Crónica: La oclusión microvascular mediada por pericitopenia y engrosamiento de la membrana basal genera áreas extensas de no perfusión retiniana.\n2. Angiogénesis Descontrolada: La hipoxia estimula la producción masiva de VEGF, PDGF y CTGF (Connective Tissue Growth Factor). Brotan nuevos vasos (NVD en papila, NVE en arcadas) que rompen la limitante interna y crecen a lo largo de la cara posterior de la hialoides cortical.\n3. Fibrogénesis y Andamio Hialoideo: El estroma fibroso madura y los fibroblastos/miofibroblastos proliferan utilizando la corteza vítrea posterior como andamio.\n4. Contracción y Vector Traccional: La condensación y retracción de la hialoides genera vectores anteroposteriores y tangenciales. Si la tracción se concentra en las arcadas vasculares o fovea, eleva la retina en configuración cóncava.\n5. Ruptura Secundaria (Desprendimiento Mixto Traccional-Regmatógeno): La tracción excesiva o el adelgazamiento isquémico retiniano produce un desgarro en hendidura adyacente a la base del tejido fibrovascular, permitiendo el paso de líquido vítreo al espacio subretiniano, transformando la superficie de cóncava a convexa bullosa con avance vertiginoso.',
    clinicalExamination: {
      biomicroscopy: 'Polo posterior: Elevación de la retina neurosensorial con superficie cóncava e inmóvil, con aspecto blanquecino y plegamiento rígido subyacente a bandas o placas fibrovasculares gruesas blanquecinas a lo largo de las arcadas temporales o sobre el disco óptico.',
      fundus: 'Límites del desprendimiento que raramente alcanzan la ora serrata (salvo que exista componente regmatógeno asociado). Hemorragias prerretinianas en bote o hemorragia vítrea densa acompañante en más del 60% de los casos.',
      specialSigns: '• Configuración Cóncava vs Convexa: Un DRT puro tiene contornos cóncavos con la elevación máxima confinada a los puntos de anclaje de las bandas fibrovasculares; si la retina se vuelve convexa y móvil hacia la periferia, se debe sospechar inmediatamente una rotura retiniana asociada (DR Mixto).\n• Signo de la tracción foveal: Ectopia o tracción macular nasalizada u oblicua con arrastre del lecho capilar foveolar.'
    },
    diagnosticWorkup: [
      {
        test: 'Ecografía Ocular Modo B (Sonda de 10-20 MHz)',
        findings: 'Esencial en presencia de hemorragia vítrea densa no transparente: Diferencia hemorragia vítrea pura (ecos móviles de baja reflectividad con retina adherida) de DRT (membrana lineal de alta reflectividad continua con inserción en la papila óptica, configuración cóncava inmóvil).'
      },
      {
        test: 'OCT de Dominio Espectral (si los medios lo permiten)',
        findings: 'Identifica la interfase vitreorretiniana patológica, grosor retiniano, tracción foveal anterior o tangencial, quistes intrarretinianos y presencia de líquido subretiniano.'
      },
      {
        test: 'Angiografía Fluoresceínica de Campo Amplio (Ultra-widefield FA)',
        findings: 'Permite delimitar la extensión de áreas de no perfusión isquémica en 360 grados y detectar hiperfluorescencia por fuga profusa de neovasos en penachos activos que requieren fotocoagulación.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Desprendimiento de Retina Regmatógeno Primario',
        distinction: 'Móvil, configuración convexa bulbosa, se extiende hasta la ora serrata, desgarros periféricos identificables, pigmento vítreo (signo de Shafer).'
      },
      {
        condition: 'Retinopatía Proliferativa por Drepanocitosis (Sickle Cell Retinopathy)',
        distinction: 'Neovasos periféricos característicos en "abanico de mar" (sea-fan), sol negro periférico, historia de electroforesis de hemoglobina positiva (HbSS o HbSC).'
      },
      {
        condition: 'Enfermedad de Eales',
        distinction: 'Vasculitis oclusiva inflamatoria idiopática que afecta preferentemente a varones jóvenes sin hiperglucemia ni estigmas de diabetes mellitus.'
      }
    ],
    steppedManagement: {
      medical: 'Fase Inicial: DRT Extramacular Estable: Observación periódica estrecha (cada 4-8 semanas). Panfotocoagulación retiniana (PPR) cuidadosa con láser de argón en la retina sana isquémica respetando la zona traccional para no precipitar contracción cicatrizal.\n\nFase Intermedia: DRT con Amenaza Inminente de la Fóvea (tracción a <1 diámetros de papila de la foveola): Programación quirúrgica electiva pronta para Vitrectomía Pars Plana.',
      surgical: 'Manejo Quirúrgico y Avanzado: DRT con Compromiso Foveal Reciente o DR Mixto Traccional-Regmatógeno: Cirugía urgente de Vitrectomía Pars Plana (VPP) microincisional (23G, 25G o 27G):\n1) Pretratamiento con Anti-VEGF (Bevacizumab/Aflibercept) 3 a 5 días antes de la vitrectomía (¡NUNCA más de 7-10 días por riesgo de crunch!).\n2) Remoción del vítreo central (core vitrectomy).\n3) Disección de membranas fibrovasculares mediante segmentación (corte con vitreótomo o tijeras) y delaminación (separación horizontal del plano de anclaje retiniano).\n4) Retinopexia endoláser en 360 grados y tamponamiento con aire, gas (SF6/C3F8) o aceite de silicona (1000/5000 cSt).'
    },
    clinicalApplicationPractical: 'Alerta Crítica: El fenómeno de "Crunch Macular Diabético": La inyección prequirúrgica de anti-VEGF induce una involución vascular rápida en 48-72 horas, pero gatilla una rápida fibrosis y contracción cicatrizal de las membranas; si se administra en presencia de tracción severa y se demora la cirugía más allá de 7 a 10 días, puede contraer violentamente la mácula causando desprendimiento o agujero macular secundario catastrófico.\n\nUso del vitreótomo como herramienta de disección: Con velocidades de corte ultra-altas (5,000 a 10,000 cpm) y puertos biselados cercanos a la punta, el cortador moderno permite aspirar y segmentar los puentes fibrovasculares directamente en el plano retiniano con mínima tracción retrógrada.\n\nControl metabólico perioperatorio estricto: Coordinar con endocrinología para evitar hipoglucemias o picos hiperglucémicos severos (>250-300 mg/dL) que aumentan el riesgo de hemorragia vítrea postoperatoria o dehiscencia de incisiones esclerales.',
    highYieldPearl: 'En un paciente con DRT diabético, NUNCA indicar una inyección de anti-VEGF y citarlo "a control en un mes". La ventana quirúrgica óptima tras un anti-VEGF preoperatorio es estrictamente de 3 a 5 días (máximo 7 días). Retrasar la cirugía conlleva un riesgo letal de retracción fibrótica masiva de la mácula ("crunch syndrome").',
    keyDrugs: [
      {
        name: 'Bevacizumab (Avastin) / Aflibercept Intravítreo Prequirúrgico',
        dose: '1.25 mg / 0.05 mL intravítreo administrado exactamente 3 a 5 días antes de la vitrectomía programada.',
        warning: 'Bloqueo masivo del VEGF intraocular que produce vasoconstricción inmediata y oclusión de los vasos inmaduros del penacho proliferativo, transformando membranas hemorrágicas turgentes en placas fibrosas avasculares y facilitando una cirugía prácticamente sin sangrado intraoperatorio.. Efecto crunch diabético si se dilata el tiempo hasta la intervención quirúrgica.'
      },
      {
        name: 'Triamcinolona Acetonida (Preservative-Free)',
        dose: '1 a 2 mg en suspensión intravítrea intraoperatoria para tinción vítrea.',
        warning: 'Los cristales de triamcinolona se adhieren selectivamente a las fibrillas de colágeno vítreo permitiendo la visualización precisa de la corteza vítrea posterior residual y la verificación del desprendimiento completo de la hialoides.. Pico hipertensivo ocular postoperatorio esteroideo.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Perla de Examen #1',
        category: 'Asociación Patognomónica',
        description: 'Diferencia clave en ecografía modo B: El DRT muestra membrana reflectiva inmóvil y cóncava; el DR regmatógeno muestra membrana móvil hiperreflectiva de configuración convexa con ángulo de inserción en papila y ora serrata.',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #2',
        category: 'Trampa de Tribunal',
        description: 'Si durante la disección de una membrana fibrovascular adherente se produce un sangrado petequial: Elevar de inmediato la presión de perfusión de la infusión intraocular (IOP transitoria de 50-60 mmHg en el vitrectomizador) para hemostasia por taponamiento hidrostático antes de utilizar diatermia endoocular.',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #3',
        category: 'Cifra Clave de Corte',
        description: 'Las dos maniobras cardinales en disección macular: Segmentación (cortar las conexiones entre dos placas) y Delaminación (disecar el plano de adherencia horizontal entre la membrana y la retina interna).',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      }
    ],
    fellowshipKeyPoints: [
      'Indicaciones formales de Vitrectomía en Retinopatía Diabética según el DRS y DRVS: 1) Hemorragia vítrea densa que no aclara tras 1-3 meses (en diabetes tipo 1 considerar cirugía más precoz a las 4-6 semanas); 2) Desprendimiento de retina traccional que involucra o amenaza la fóvea; 3) Desprendimiento mixto traccional-regmatógeno; 4) Hemorragia premacular retrohialoidea densa; 5) Neovascularización activa severa resistente a panfotocoagulación completa.',
      'Uso de Aceite de Silicona vs Gas en DR Mixto Diabético: Se prefiere aceite de silicona en pacientes monóculos, con múltiples roturas posteriores iatrogénicas o incapacitados de realizar postura prona estricta.'
    ],
    landmarkTrials: [
      {
        name: 'Diabetic Retinopathy Vitrectomy Study (DRVS Report 5)',
        year: '1985',
        conclusion: 'En pacientes con diabetes tipo 1 y hemorragia vítrea severa reciente, la vitrectomía pars plana temprana (dentro de los primeros 6 meses) otorgó una probabilidad significativamente mayor de recuperar visión útil (20/40 o mejor) comparada con la conducta expectante tradicional diferida.',
        fellowshipRelevance: 'Estableció el concepto de intervención quirúrgica temprana y no diferida en patología vitreorretiniana proliferativa diabética severa.'
      },
      {
        name: 'DRCR.net Protocol S',
        year: '2015',
        conclusion: 'Ranibizumab mensual no fue inferior a la panfotocoagulación con láser (PPR) para la retinopatía diabética proliferativa a los 2 años, con menor pérdida de campo visual periférico; sin embargo, en la vida real la PPR sigue siendo el pilar por riesgo de pérdida de seguimiento catastrófica con anti-VEGF.',
        fellowshipRelevance: 'Demostró la no inferioridad biológica de los anti-VEGF en RDP pero reafirmó la panfotocoagulación como terapia de seguridad a largo plazo.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Las membranas fibrovasculares están constituidas por células endoteliales CD31+, pericitos desdiferenciados, miofibroblastos alfa-SMA positivos y células gliales de Müller hipertróficas que expresan vimentina y GFAP. La contracción es impulsada por la interacción de miofibroblastos con la matriz extracelular enriquecida en fibronectina y colágeno tipo I, III y IV.',
    surgicalPearls: [
      'Al realizar delaminación de una membrana densamente pegada a una arcada vascular: Avanzar la cuchilla o espátula de microdisección siempre en paralelo al trayecto del vaso sanguíneo, NUNCA en dirección perpendicular, para evitar seccionar o avulsionar la arteriola retiniana.',
      'Si se identifica una rotura retiniana iatrogénica posterior durante el pelado de membranas: Suspender la disección local, marcar la rotura, aplicar intercambio fluido-aire completo, aspirar el líquido subretiniano a través del defecto con cánula extrusora de flauta con punta de silicona suave, y aplicar endoláser confluente en 3 filas alrededor del borde antes de decidir el agente tamponante.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un paciente de 52 años con diabetes mellitus tipo 2 mal controlada (HbA1c 11.2%) acude con pérdida visual severa de 10 días de evolución en ojo izquierdo (AV cuenta dedos a 1 metro). El fondo de ojo revela un desprendimiento de retina traccional que engloba toda la mácula con bandas fibrovasculares densas a lo largo de ambas arcadas temporales. En la arcada temporal superior se aprecia un desgarro en hendidura en el borde de una placa fibrótica con líquido subretiniano que se extiende hacia la periferia inferior volviéndose convexo y bulloso. ¿Cuál es el diagnóstico exacto, qué errores graves de manejo deben evitarse y cuál es el plan quirúrgico paso a paso?',
        answer: '1) Diagnóstico Exacto:\n   - Desprendimiento de Retina Mixto (Traccional-Regmatógeno) por Retinopatía Diabética Proliferativa avanzada con compromiso foveal en ojo izquierdo.\n2) Errores Críticos que Deben Evitarse:\n   - Error 1: Clasificarlo como DRT simple y diferir la cirugía; la presencia del desgarro y la convexidad indican componente regmatógeno, lo cual convierte el cuadro en una URGENCIA quirúrgica para evitar fibrosis subretiniana irreversible y PVR.\n   - Error 2: Indicar una inyección de anti-VEGF y esperar semanas; si se decide usar anti-VEGF preoperatorio para disminuir sangrado, la cirugía debe efectuarse estrictamente a los 3-5 días para no causar contracción acelerada y desgarro masivo de la retina (crunch).\n3) Plan Quirúrgico Paso a Paso (Vitrectomía Pars Plana 23G/25G):\n   - Opción: Inyección intravítrea de Bevacizumab 1.25 mg 3-4 días antes de la cirugía.\n   - VPP de calibre fino: Inducción de desprendimiento de la corteza vítrea posterior con triamcinolona acetonida.\n   - Disección de membranas: Segmentación y delaminación meticulosa de todas las bandas fibrovasculares en las arcadas para liberar absolutamente todos los vectores de tracción anteroposteriores y tangenciales.\n   - Drenaje de líquido subretiniano a través de la rotura existente mediante intercambio fluido-aire.\n   - Retinopexia: Endofotocoagulación con láser de argón alrededor de la rotura y panfotocoagulación retiniana completa en 360 grados en todas las áreas isquémicas.\n   - Tamponamiento intraocular: Gas C3F8 al 14% o Aceite de Silicona (1000/5000 cSt) si hay PVR o sospecha de mala adherencia a postura prona postoperatoria.',
        trap: 'Confundir el desprendimiento mixto con un DRT aislado e indicar observación o sólo anti-VEGF diferido, lo que lleva a pérdida visual permanente por PVR y atrofia fotoreceptora.'
      }
    ]
  },
  // =========================================================================
  // 10. ENDOFTALMITIS INFECCIOSA AGUDA Y ENSAYO EVS
  // =========================================================================
  {
    id: 'deep-retina-endoftalmitis-infecciosa-evs',
    title: 'Endoftalmitis Infecciosa Aguda Posquirúrgica y Traumática: Protocolo EVS y Abordaje Moderno',
    subspecialtyId: 'retina',
    summary: 'Monografía crítica de emergencia sobre endoftalmitis infecciosa aguda tras cirugía de catarata, inyecciones intravítreas o trauma penetrante. Criterios actualizados del Endophthalmitis Vitrectomy Study (EVS: Agudeza visual de Percepción de Luz vs superior), pauta de antibióticos intravítreos (Vancomicina + Ceftazidima / Amikacina), diagnóstico microbiológico y rol de la vitrectomía de urgencia.',
    definitionAndEpidemiology: 'La endoftalmitis es una emergencia oftalmológica devastadora caracterizada por la inflamación purulenta de los fluidos y tejidos intraoculares (vítreo y cámara anterior), habitualmente de etiología bacteriana o fúngica. Su incidencia tras cirugía de catarata moderna no complicada es de aproximadamente 0.04% a 0.08% (1 de cada 1,500-2,500 cirugías), y tras inyecciones intravítreas de anti-VEGF es de 0.02% a 0.05% por inyección. En trauma ocular abierto penetrante la incidencia se eleva dramáticamente al 3% - 17% (hasta >30% si existe cuerpo extraño intraocular retenido en ambiente rural).',
    anatomyAndPathophysiology: '1. Inóculo Bacteriano: Ingreso directo de microorganismos de la microbiota conjuntival o palpebral del paciente a la cavidad vítrea a través de la incisión quirúrgica o herida traumática.\n2. Microorganismos Causales Más Frecuentes:\n   • Posquirúrgica aguda (<6 semanas): Staphylococcus coagulasa-negativo (Staphylococcus epidermidis, 70%), Staphylococcus aureus (10%), Streptococcus spp. (9%), bacilos Gram negativos (Pseudomonas aeruginosa, Enterobacteriaceae, 6%).\n   • Postinyección intravítrea: Alta proporción de Streptococcus viridans por contaminación oral/salivar en el momento del procedimiento sin uso de mascarilla.\n   • Traumática: Bacillus cereus (altamente destructivo en <24 horas, asociado a suelo/ambiente rural) y hongos filamentosos.\n3. Cascada Destructiva: Proliferación bacteriana desinhibida en el vítreo acelular avascular, liberación de exotoxinas, proteasas bacterianas y migración masiva de polimorfonucleares. La respuesta inflamatoria del huésped y las enzimas lisosomales destruyen irreversiblemente la membrana limitante interna y los segmentos externos de fotorreceptores en 24 a 48 horas.',
    clinicalExamination: {
      biomicroscopy: 'Cámara anterior: Inyección ciliar violácea severa, edema corneal microquístico, flare intenso, celularidad 4+ con formación de nivel de HIPOPION blanquecino o amarillento (presente en >85% de los casos), fibrina en pupila.',
      fundus: 'Vitritis difusa densa con pérdida rápida del reflejo rojo de fondo (opacidad de medios severa con imposibilidad de visualizar detalles de la papila y vasos retinianos); en casos fulminantes, infiltrados retinianos blanquecinos y vasculitis oclusiva necrótica.',
      specialSigns: '• Pérdida súbita y marcada de la agudeza visual con dolor ocular moderado a intenso (aunque hasta un 25% de los pacientes en el estudio EVS no refirieron dolor ocular significativo).\n• Pérdida del reflejo rojo pupilar a la oftalmoscopía indirecta (Red Reflex Loss).\n• Signo de Seidel positivo en la herida quirúrgica si existe dehiscencia o fuga activa de humor acuoso.'
    },
    diagnosticWorkup: [
      {
        test: 'Punción Diagnóstica Inmediata de Vítreo y Acuoso (Tap diagnóstico)',
        findings: 'Obtención de 0.1 a 0.2 mL de humor acuoso mediante paracentesis limbar y 0.2 a 0.3 mL de vítreo mediante punción con aguja 23G/25G a través de pars plana (o aspiración directa con vitreótomo mecánico). Procesamiento urgente para:\n1) Tinción de Gram y Giemsa inmediata.\n2) Cultivo en agar sangre, agar chocolate, agar Sabouraud y caldo tioglicolato.\n3) Reacción en Cadena de la Polimerasa (PCR eubacteriana/fúngica 16S/18S rDNA).'
      },
      {
        test: 'Ecografía Ocular Modo B',
        findings: 'Obligatoria cuando la opacidad de medios impide ver el fondo: Evalúa la densidad de ecos en cavidad vítrea (vitritis leve, moderada o confluente membranoide), engrosamiento del complejo coriorretiniano, y descarta desprendimiento de retina traccional/exudativo o engrosamiento coroideo.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Síndrome Tóxico del Segmento Anterior (TASS)',
        distinction: 'Inicio hiperagudo (<12-24 horas tras la cirugía), edema corneal difuso de limbo a limbo por daño endotelial químico, pupila fija/dilatada, NO hay vitritis posterior densa, responde espectacularmente a corticoides tópicos intensivos.'
      },
      {
        condition: 'Endoftalmitis Estéril por Inyección Intravítrea (ej. Brolucizumab)',
        distinction: 'Generalmente indolora o molestia leve, vitritis moderada sin hipopion denso masivo, cultivos vítreos negativos; puede asociar vasculitis oclusiva.'
      },
      {
        condition: 'Uveítis HLA-B27 aguda con hipopion',
        distinction: 'Sin antecedente quirúrgico o traumático reciente; hipopion gelatinoso blanquecino muy móvil en cámara anterior con fondo de ojo nítido sin vitritis posterior densa.'
      }
    ],
    steppedManagement: {
      medical: 'Fase Inicial: Sospecha Inmediata: Toda inflamación anormal postoperatoria con hipopion o vitritis debe tratarse como endoftalmitis bacteriana hasta demostrar lo contrario. NUNCA diferir la intervención esperando resultados de cultivos.\n\nFase Intermedia: Criterio Clínico Cardinal del Ensayo EVS (Endophthalmitis Vitrectomy Study):\n• Si la Agudeza Visual es de MOVIMIENTOS DE MANOS (HM), Cuenta Dedos (CF) o mejor: Realizar TAP diagnósico (punción vítrea/cámara anterior) + Inyección Intravítrea de Antibióticos Empíricos de Amplio Espectro (Vancomicina 1.0 mg/0.1 mL + Ceftazidima 2.25 mg/0.1 mL).\n• Si alérgico severo a betalactámicos/cefalosporinas: Sustituir ceftazidima por Amikacina 0.4 mg/0.1 mL (máxima precaución con toxicidad macular/infarto retiniano).',
      surgical: 'Manejo Quirúrgico y Avanzado: Si la Agudeza Visual es de PERCEPCIÓN DE LUZ (PL) O PEOR, o Falla a las 48h tras Tap/Antibióticos:\n• Realizar VITRECTOMÍA PARS PLANA (VPP) DE URGENCIA INMEDIATA + Inyección intravítrea de antibióticos.\n• Justificación EVS: En pacientes con visión de PL, la vitrectomía inmediata triplicó la probabilidad de lograr visión 20/40 o mejor (33% vs 11%) y redujo al 50% el riesgo de ceguera legal severa (<5/200).'
    },
    clinicalApplicationPractical: 'Preparación meticulosa de los antibióticos intravítreos: Error de dilución puede causar infarto macular irreversible por aminoglucósidos o toxicidad retiniana; utilizar siempre protocolos de dilución estandarizados de farmacia estéril con dos jeringas separadas (una para Vancomicina y otra para Ceftazidima). NUNCA mezclarlas en la misma jeringa porque precipitan.\n\nDexametasona intravítrea coadyuvante: El uso de dexametasona 0.4 mg / 0.1 mL intravítrea reduce el daño tisular mediado por la inflamación del huésped; contraindicada si existe sospecha clínica de infección fúngica micótica.\n\nProfilaxis probada según la ESCRS: La inyección intracamerular de Cefuroxima (1 mg en 0.1 mL) al finalizar la cirugía de catarata reduce el riesgo de endoftalmitis postoperatoria en casi 5 veces (estudio multicéntrico ESCRS).',
    highYieldPearl: 'Criterio sagrado del estudio EVS: Todo paciente con agudeza visual reducida a PERCEPCIÓN DE LUZ (PL) tras cirugía de catarata con endoftalmitis debe someterse a Vitrectomía Pars Plana formal urgente, NO a punción y antibióticos intravítreos aislados. La vitrectomía triplica su posibilidad de recuperar agudeza visual 20/40.',
    keyDrugs: [
      {
        name: 'Vancomicina Intravítrea',
        dose: '1.0 mg en 0.1 mL intravítreo en inyección única urgente; puede repetirse a las 48 horas si no hay mejoría clínica.',
        warning: 'Inhibe la síntesis de la pared celular bacteriana; cubre el 99-100% de los cocos Gram positivos, incluyendo Staphylococcus aureus meticilino-resistente (MRSA) y Staphylococcus epidermidis.. Excelente tolerancia retiniana; riesgo excepcional de vasculitis hemorrágica si se utiliza intracamerular profiláctica (HORV).'
      },
      {
        name: 'Ceftazidima Intravítrea',
        dose: '2.25 mg en 0.1 mL intravítreo en inyección única urgente.',
        warning: 'Cefalosporina de 3ª generación con potente actividad bactericida contra bacterias Gram negativas, incluyendo Pseudomonas aeruginosa.. De elección frente a amikacina para evitar el infarto retiniano macular tóxico.'
      },
      {
        name: 'Amikacina Intravítrea (Alternativa)',
        dose: '0.4 mg (400 µg) en 0.1 mL intravítreo estricto.',
        warning: 'Aminoglucósido con cobertura Gram negativa.. Riesgo grave de infarto macular y necrosis retiniana irreversible si se sobrepasa la dosis recomendada.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Perla de Examen #1',
        category: 'Asociación Patognomónica',
        description: 'Microorganismo más frecuente en endoftalmitis postquirúrgica aguda: Staphylococcus epidermidis (70%).',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #2',
        category: 'Trampa de Tribunal',
        description: 'Microorganismo más virulento en trauma ocular con cuerpo extraño en ambiente agrícola: Bacillus cereus (puede destruir el globo ocular en menos de 12-24 horas con panoftalmitis y necrosis en anillo).',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #3',
        category: 'Cifra Clave de Corte',
        description: 'Uso de antibióticos sistémicos en el EVS: El estudio EVS demostró concluyentemente que los antibióticos intravenosos convencionales (ceftazidima y amikacina sistémicas) NO aportaron ningún beneficio visual ni anatómico adicional a los antibióticos intravítreos.',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayos y Directrices Modernas: Aunque el EVS limitó la vitrectomía a pacientes con visión de PL en 1995 utilizando instrumental 20G sin visualización de campo amplio, hoy en día con vitrectomía microincisional 25G/27G de alta velocidad y fuentes LED/xenón, muchos especialistas en retina indican vitrectomía más precoz en pacientes con movimientos de manos si hay opacidad vítrea densa o bacterias agresivas.',
      'Manejo de endoftalmitis asociada a ampolla de trabeculectomía (Blebitis / Bleb-associated endophthalmitis): Mayor incidencia de Streptococcus spp. y Haemophilus influenzae; curso clínico mucho más fulminante que requiere intervención agresiva inmediata.'
    ],
    landmarkTrials: [
      {
        name: 'Endophthalmitis Vitrectomy Study (EVS)',
        year: '1995',
        conclusion: 'En endoftalmitis postoperatoria aguda tras catarata o lente secundario: 1) La vitrectomía inmediata ofrece un beneficio masivo en pacientes con visión de Percepción de Luz (33% vs 11% lograron 20/40); 2) En pacientes con Cuenta Dedos o mejor, los resultados entre tap+antibióticos y vitrectomía fueron equivalentes; 3) Los antibióticos sistémicos IV no mostraron eficacia adicional.',
        fellowshipRelevance: 'El ensayo clínico aleatorizado más influyente que guía el algoritmo de decisión terapéutica en endoftalmitis.'
      },
      {
        name: 'ESCRS Endophthalmitis Study Group',
        year: '2007',
        conclusion: 'La inyección intracameral de 1 mg de cefuroxima al término de la cirugía de facoemulsificación redujo la tasa de endoftalmitis postoperatoria de 0.35% a 0.05% (reducción de casi 5 veces).',
        fellowshipRelevance: 'Estableció la profilaxis intracameral universalmente adoptada en las guías europeas y latinoamericanas.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Infiltración piógena masiva de neutrófilos polimorfonucleares en el gel vítreo, membranas de fibrina subhialoideas, necrosis focal de la retina neurosensorial con rotura de la membrana limitante interna y desprendimiento secundario de conos y bastones por acúmulo de toxinas bacterianas y radicales libres derivados de la mieloperoxidasa.',
    surgicalPearls: [
      'Al realizar vitrectomía en endoftalmitis aguda: La retina está sumamente friable e isquémica; NUNCA intentar inducir un desprendimiento de la corteza vítrea posterior con tracción mecánica agresiva sobre la papila o retina, pues generará roturas retinianas iatrogénicas gigantes de muy difícil manejo.',
      'Limitar la vitrectomía a un "core vitrectomy" central seguro: Eliminar el inóculo purulento denso central y despejar el eje óptico sin acercarse a la retina periférica friable; inyectar los antibióticos intravítreos al finalizar a través del puerto de infusión o mediante aguja separada con infusión cerrada.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Tres días después de una facoemulsificación no complicada en ojo derecho, un paciente de 68 años acude a la guardia con dolor ocular severo, cefalea y disminución de la agudeza visual a Percepción de Luz (PL). A la biomicroscopía se observa edema corneal moderado, inyección ciliar difusa 4+, fibrina pupilar y un hipopion de 2.5 mm en cámara anterior. No hay reflejo de fondo rojo y la ecografía B revela ecos vítreos móviles densos sin desprendimiento de retina. ¿Cuál es el diagnóstico más probable, cuál es el tratamiento de elección inmediato respaldado por evidencia de Nivel I y cuáles son los fármacos y dosis exactas a utilizar?',
        answer: '1) Diagnóstico Más Probable:\n   - Endoftalmitis infecciosa aguda posquirúrgica bacteriana en ojo derecho.\n2) Tratamiento de Elección Inmediato (Criterios EVS):\n   - Como la agudeza visual es de PERCEPCIÓN DE LUZ (PL), el paciente cumple el criterio categórico de Nivel I del Endophthalmitis Vitrectomy Study (EVS) para VITRECTOMÍA PARS PLANA (VPP) DE URGENCIA.\n   - La punción vítrea aislada (tap and inject) es INSUFICIENTE para este nivel de pérdida visual (la VPP triplica la tasa de recuperación de visión útil ≥20/40 según el EVS).\n3) Protocolo Quirúrgico y Farmacológico:\n   - VPP de calibre 23G o 25G: se realiza vitrectomía central ("core") para remover el material purulento, citoquinas y bacterias sin forzar el desprendimiento de la hialoides posterior.\n   - Obtención de muestra de vítreo sin diluir para tinción de Gram, cultivo y antibiograma.\n   - Inyección intravítrea empírica de:\n     • Vancomicina: 1.0 mg en 0.1 mL (cobertura Gram positiva, incluyendo MRSA y epidermidis).\n     • Ceftazidima: 2.25 mg en 0.1 mL (cobertura Gram negativa, incluyendo Pseudomonas).\n     • Dexametasona: 0.4 mg en 0.1 mL (opcional coadyuvante antiinflamatorio).\n   - Terapia tópica postoperatoria: colirios fortificados (Vancomicina 50 mg/mL + Ceftazidima 50 mg/mL o Tobramicina) cada 1 hora y atropina 1% c/8h.\n   - No se requieren antibióticos intravenosos empíricos de rutina (sin beneficio demostrado en EVS).',
        trap: 'Realizar una simple punción vítrea en consultorio ("tap and inject") en un paciente con visión de Percepción de Luz ignorando las conclusiones formales del estudio EVS.'
      }
    ]
  },
  // =========================================================================
  // 11. RETINOPATÍA DEL PREMATURO (ROP) Y CLASIFICACIÓN ICROP-3
  // =========================================================================
  {
    id: 'deep-retina-retinopatia-prematuro-icrop',
    title: 'Retinopatía del Prematuro (ROP): Clasificación ICROP-3, Tamizaje y Manejo (Láser vs Anti-VEGF)',
    subspecialtyId: 'retina',
    summary: 'Monografía de excelencia neonatal sobre la Retinopatía del Prematuro: embriología vascular, fisiopatología en dos fases (hiperoxia e hipoxia relativa), actualización completa de la Clasificación Internacional ICROP-3 (Zonas I, II y III, muesca o notch, Estadio 1 a 5, Plus, Pre-Plus y ROP Aguda Agresiva - A-ROP), criterios del ensayo ETROP para ROP Tipo 1 y debate terapéutico entre fotocoagulación con láser diodo vs anti-VEGF (ensayos BEAT-ROP y RAINBOW).',
    definitionAndEpidemiology: 'La Retinopatía del Prematuro (ROP) es una vasoproliferación retiniana anormal que ocurre en neonatos nacidos prematuramente con inmadurez vascular de la retina. Constituye una de las principales causas prevenibles de ceguera infantil a nivel mundial. El riesgo es inversamente proporcional a la edad gestacional y al peso al nacer: afecta a más del 65-80% de los recién nacidos con peso inferior a 1,000 gramos o edad gestacional ≤28 semanas.',
    anatomyAndPathophysiology: '1. Embriología de la Vasculogénesis y Angiogénesis: Los vasos retinianos se originan del disco óptico hacia las 16 semanas de gestación. Crecen centrífugamente alcanzando la ora serrata nasal hacia las 36 semanas y la ora serrata temporal hacia las 40-42 semanas (término).\n2. Fisiopatología Bifásica:\n   • Fase 1 (Hiperoxia / Vaso-obliteración): Tras el parto pretérmino, el neonato pasa de la hipoxia fisiológica intrauterina (PaO2 30-35 mmHg) a un ambiente con alta concentración de oxígeno suplementario (PaO2 >60-100 mmHg). Esto suprime la producción del factor inducible por hipoxia (HIF-1α) y colapsa los niveles de VEGF e IGF-1 (Insulin-like Growth Factor 1), provocando detención del crecimiento capilar y vaso-obliteración de los capilares inmaduros.\n3. Fase 2 (Hipoxia Relativa / Vasoproliferación): Hacia las 32-34 semanas de edad postmenstrual (PMA), a medida que la retina periférica no vascularizada madura y aumenta su demanda metabólica de oxígeno, se genera una isquemia retiniana severa. Esto dispara una sobreexpresión descontrolada de HIF-1α y VEGF que induce la formación de neovasos anormales en la unión entre la retina vascularizada y no vascularizada.\n4. Tracción Fibrovascular: La proliferación fibrovascular penetra al vítreo y genera bandas de tracción contráctiles que culminan en desprendimiento de retina traccional/exudativo total o subtotal.',
    clinicalExamination: {
      biomicroscopy: 'Cámara anterior: Rubeosis del iris o ingurgitación vascular en el iris (signo indirecto de enfermedad Plus severa), estrechamiento de la cámara anterior si hay tracción retrolental.',
      fundus: 'Línea de demarcación o cresta fibrosa entre la retina posterior vascularizada y la periferia avascular; neovascularización extraretiniana con penachos ("popcorn") en la cresta; tortuosidad arteriolar y dilatación venular en el polo posterior.',
      specialSigns: '• Enfermedad Plus (Plus Disease): Dilatación venosa y tortuosidad arteriolar pronunciada en al menos dos cuadrantes del polo posterior. Es el indicador cardinal de actividad angiogénica masiva y requerimiento terapéutico.\n• Pre-Plus Disease: Tortuosidad y dilatación anormales pero que no alcanzan el umbral estricto de enfermedad Plus.\n• ROP Aguda Agresiva (A-ROP, antes llamada AP-ROP): ROP de progresión fulminante que ocurre predominantemente en Zona I o posterior a la Zona II, caracterizada por neovascularización plana ill-defined, shunts arteriovenosos intrarretinianos severos y enfermedad Plus masiva sin pasar ordenadamente por los estadios 1 a 3.'
    },
    diagnosticWorkup: [
      {
        test: 'Oftalmoscopía Binocular Indirecta (OIB) con Depresión Escleral',
        findings: 'Exploración obligatoria con blefarostato neonatal (Sauer) e indentador tras dilatación pupilar combinada (Ciclopentolato 0.5% + Fenilefrina 2.5%): Permite clasificar la Zona (I, II o III), el Estadio (1 a 5) y la presencia o ausencia de enfermedad Plus en los 360 grados.'
      },
      {
        test: 'Retinografía Digital de Campo Amplio (RetCam / Phoenix ICON)',
        findings: 'Documentación fotográfica de ultra-campo amplio de 130 grados para registro objetivo de los límites de la vasculatura, presencia de muescas ("notch") en la retina avascular y respuesta longitudinal al tratamiento.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Incontinencia Pigmentaria (Síndrome de Bloch-Sulzberger)',
        distinction: 'Recién nacidas de sexo femenino con lesiones cutáneas vesículo-ampollosas o verrugosas en líneas de Blaschko; vasoproliferación periférica similar a ROP pero a término.'
      },
      {
        condition: 'Vitreorretinopatía Exudativa Familiar (FEVR)',
        distinction: 'Enfermedad genética hereditaria (mutaciones en FZD4, LRP5, NDP); retina temporal avascular y tracción macular en niños nacidos a término sin antecedentes de prematuridad ni oxígeno.'
      },
      {
        condition: 'Persistencia de Vasculatura Fetal (PVF / PHPV)',
        distinction: 'Generalmente unilateral, microftalmos asociado, proceso ciliar alargado arrastrado centralmente por una masa fibrovascular retrolental.'
      }
    ],
    steppedManagement: {
      medical: 'Fase Inicial: Criterios de Tamizaje (Screening Nacional/Internacional AAP/AAO):\n• Todo recién nacido con peso al nacer ≤1,500 gramos O edad gestacional ≤30 semanas (o neonatos seleccionados entre 1,500-2,000 g con curso clínico inestable: sepsis, transfusiones múltiples, soporte inotrópico prolongado).\n• Primer examen: a las 4 semanas de vida posnatal O a las 31 semanas de edad postmenstrual (PMA), lo que ocurra más tarde.\n\nFase Intermedia: Criterios de ROP Tipo 1 según el ensayo ETROP (Indicación Quirúrgica Obligatoria en <48-72 horas):\n1) Zona I, cualquier estadio con Enfermedad Plus.\n2) Zona I, Estadio 3 sin Enfermedad Plus.\n3) Zona II, Estadio 2 ó 3 con Enfermedad Plus.\n(ROP Tipo 2: observar estrechamente cada 3-7 días sin tratar de inmediato).',
      surgical: 'Manejo Quirúrgico y Avanzado: Tratamiento Quirúrgico / Farmacológico Activo:\n• Modalidad 1: Fotocoagulación con Láser Diodo Confluente de toda la retina avascular periférica (Gold standard probado por ETROP; destruye el tejido isquémico productor de VEGF).\n• Modalidad 2: Terapia Anti-VEGF Intravítrea (Ranibizumab 0.2 mg / 0.02 mL ó Bevacizumab 0.625 mg / 0.025 mL):\n  - De elección en A-ROP (Agresiva) y ROP en Zona I posterior donde el láser causaría una pérdida masiva de campo visual.\n  - Requiere seguimiento prolongado hasta >55-65 semanas PMA por riesgo de recurrencia tardía.\n• Si progresa a Estadio 4 (desprendimiento de retina traccional parcial: 4A que respeta fóvea, 4B que incluye fóvea) o Estadio 5 (desprendimiento total en embudo): Vitrectomía Pars Plana o lensectomía-vitrectomía pediátrica especializada.'
    },
    clinicalApplicationPractical: 'Alarma de Recurrencia Post-Anti-VEGF: Mientras que el láser destruye permanentemente las células productoras de VEGF curando la ROP de manera definitiva, los anti-VEGF sólo bloquean la molécula temporalmente; la retina inmadura periférica continúa avascular durante semanas o meses, pudiendo presentar reactivación tardía a las 45-60 semanas PMA cuando el neonato ya está de alta en su hogar. El seguimiento ambulatorio debe ser implacable.\n\nDosis de anti-VEGF pediátrica: Es la MITAD de la dosis de un adulto. Usar jeringas de precisión de 0.1 mL o Hamilton para medir con exactitud 0.02 mL (evitar sobredosis y supresión sistémica prolongada de VEGF en órganos neonatales en desarrollo: cerebro, riñón y pulmón).\n\nMinimizar el estrés del examen neonatal: Utilizar anestésico tópico (proparacaína) y sacarosa oral al 24% o leche materna para analgesia no farmacológica; monitorizar saturación y frecuencia cardíaca para prevenir reflejo oculocardíaco vagal severo durante la depresión escleral.',
    highYieldPearl: 'La Clasificación ICROP-3 (2021) reemplazó el término "AP-ROP" por "A-ROP" (Retinopatía del Prematuro Aguda Agresiva) y enfatizó que no requiere una evolución escalonada típica a través de estadios 1, 2 y 3; se reconoce por shunts arteriovenosos intrarretinianos prominentes y enfermedad Plus feroz en Zona I o II posterior.',
    keyDrugs: [
      {
        name: 'Ranibizumab Pediátrico (Lucentis) / Ensayo RAINBOW',
        dose: '0.2 mg en 0.02 mL intravítreo en inyección única; retratamiento si hay reactivación de ROP activa.',
        warning: 'Fragmento Fab monoclonal humanizado anti-VEGF-A; depuración sistémica mucho más rápida que bevacizumab, disminuyendo la supresión de VEGF sérico circulante en el neonato.. Recurrencia más temprana que bevacizumab pero con perfil de bioseguridad sistémica superior comprobado en el ensayo RAINBOW.'
      },
      {
        name: 'Bevacizumab Pediátrico (Avastin) / Ensayo BEAT-ROP',
        dose: '0.625 mg en 0.025 mL intravítreo (la mitad de la dosis estándar de adulto).',
        warning: 'Anticuerpo monoclonal completo anti-VEGF.. Persiste en suero hasta 8-12 semanas; monitorización estricta del desarrollo neurocognitivo y función renal.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Perla de Examen #1',
        category: 'Asociación Patognomónica',
        description: 'Límites de las Zonas según ICROP: Zona I es un círculo cuyo centro es el disco óptico y su radio es el doble de la distancia del disco al centro de la mácula. Zona II se extiende desde el borde de Zona I hasta la ora serrata nasal. Zona III es el remanente en forma de semiluna temporal.',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #2',
        category: 'Trampa de Tribunal',
        description: 'Estadios de ROP: Estadio 1 (Línea de demarcación plana), Estadio 2 (Cresta o reborde elevado), Estadio 3 (Proliferación fibrovascular extraretiniana sobre la cresta), Estadio 4 (Desprendimiento de retina parcial: 4A subtotal extrafoveal, 4B subtotal que involucra fóvea), Estadio 5 (Desprendimiento total: embudo abierto o cerrado).',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #3',
        category: 'Cifra Clave de Corte',
        description: 'Definición de ROP Tipo 1 (que obliga a tratamiento): "Plus en Zona I (cualquier estadio)", "Estadio 3 en Zona I (incluso sin Plus)", "Plus en Zona II (con Estadio 2 o 3)".',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo BEAT-ROP (NEJM 2011): Comparó Bevacizumab intravítreo (0.625 mg) vs Láser de Diodo convencional para ROP en Estadio 3+ en Zona I o Zona II posterior. Demostró una superioridad rotunda de bevacizumab en Zona I (recurrencia de 6% vs 42%, p=0.002), permitiendo la continuación del crecimiento vascular periférico hacia la ora serrata.',
      'Ensayo RAINBOW (Lancet 2019): Ensayo aleatorizado internacional que comparó Ranibizumab (0.2 mg y 0.1 mg) vs Láser. Ranibizumab 0.2 mg mostró alta eficacia en el control de la ROP con menor tasa de alta miopía estructural severa a largo plazo que la ablación con láser.'
    ],
    landmarkTrials: [
      {
        name: 'Early Treatment for Retinopathy of Prematurity (ETROP)',
        year: '2003',
        conclusion: 'El tratamiento temprano de la ROP "Tipo 1" con ablación láser de la retina avascular antes de alcanzar el antiguo umbral del CRYO-ROP redujo significativamente los resultados visuales y estructurales desfavorables (del 15.6% al 9.1%).',
        fellowshipRelevance: 'Definió la clasificación universal de ROP Tipo 1 y el momento óptimo de intervención con láser.'
      },
      {
        name: 'BEAT-ROP Trial',
        year: '2011',
        conclusion: 'Bevacizumab intravítreo demostró un beneficio estadísticamente significativo comparado con el láser en la reducción de recurrencias en ROP en Zona I, preservando la anatomía vascular periférica.',
        fellowshipRelevance: 'Introdujo la era del tratamiento farmacológico anti-VEGF en retina pediátrica.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: Proliferación de células precursoras endoteliales inmaduras (células en huso) en la interfase vitreorretiniana que rompen la lámina limitante interna y forman glomeruloides vasculares extraretinianos sostenidos por una matriz de fibronectina y células gliales de soporte. Genética: Polimorfismos en los genes VEGF-A, EPAS1 (HIF-2α), BDNF y genes de la vía Wnt/Norrin (FZD4, LRP5, NDP) modulan la susceptibilidad fenotípica a la vaso-obliteración hiperóxica.',
    surgicalPearls: [
      'Al realizar fotocoagulación con láser diodo en ROP: Aplicar impactos confluentes casi continuos (separación de menos de medio diámetro de spot) cubriendo el 100% de la retina avascular desde la cresta hasta la ora serrata; si quedan islotes avasculares sin tratar ("skip areas"), la enfermedad Plus persistirá o recurrirá.',
      'Inyección intravítrea en el prematuro: La pars plana no está desarrollada; la inyección debe realizarse a 1.0 a 1.5 mm del limbo esclerocorneal con aguja de 30G o 32G orientada perpendicularmente hacia el centro de la cavidad vítrea para evitar tocar el cristalino anterior o desprender la retina periférica.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un prematuro nacido a las 25 semanas de gestación con peso al nacer de 720 gramos, que requirió ventilación mecánica prolongada con FiO2 del 60%, es evaluado a las 33 semanas de edad postmenstrual (PMA). El examen de fondo de ojo bajo dilatación revela neovascularización extraretiniana prominente sobre una cresta sobreelevada en los 4 cuadrantes localizada a 1.5 diámetros papilares de la papila óptica (Zona I), acompañada de dilatación y tortuosidad vascular severa de las arcadas (Plus disease). ¿Cuál es la clasificación completa según ICROP-3, requiere tratamiento inmediato y cuál es el abordaje terapéutico de primera línea respaldado por ensayos clínicos?',
        answer: '1) Clasificación Completa según ICROP-3:\n   - Retinopatía del Prematuro: Zona I, Estadio 3 con Enfermedad Plus (Plus Disease).\n2) Decisión Terapéutica:\n   - Cumple con criterios absolutos de ROP Tipo 1 según el ensayo ETROP (Zona I, cualquier estadio con enfermedad Plus).\n   - Requiere TRATAMIENTO OBLIGATORIO INMEDIATO dentro de las próximas 48 a 72 horas para prevenir el avance rápido a Estadio 4/5 (desprendimiento de retina traccional total).\n3) Abordaje Terapéutico de Primera Línea:\n   - Terapia de Elección: Inyección Intravítrea de Anti-VEGF (Ranibizumab 0.2 mg en 0.02 mL ó Bevacizumab 0.625 mg en 0.025 mL).\n   - Justificación: En Zona I, el ensayo BEAT-ROP demostró que el anti-VEGF tiene una tasa de recurrencia dramáticamente menor que la fotocoagulación con láser (6% vs 42%). Además, aplicar láser en Zona I implicaría destruir casi el 80% de la superficie retiniana del infante, dejando un campo visual severamente tubularizado y alta miopía inducida.\n4) Monitoreo Crítico Post-Tratamiento:\n   - Vigilancia periódica semanal o quincenal hasta al menos las 55 a 65 semanas PMA debido al riesgo documentado de reactivación tardía tras la depuración biológica del anti-VEGF.',
        trap: 'Elegir fotocoagulación con láser diodo confluente masiva en Zona I cuando el anti-VEGF está disponible, o clasificarlo erróneamente como ROP Tipo 2 y postergar el tratamiento.'
      }
    ]
  },
  // =========================================================================
  // 12. DISTROFIAS HEREDITARIAS: RETINOSIS PIGMENTARIA, STARGARDT Y LUXTURNA
  // =========================================================================
  {
    id: 'deep-retina-distrofias-hereditarias-stargardt-luxturna',
    title: 'Distrofias Hereditarias de la Retina: Retinosis Pigmentaria, Enfermedad de Stargardt y Terapia Génica',
    subspecialtyId: 'retina',
    summary: 'Monografía exhaustiva sobre las distrofias de fotorreceptores y EPR: Retinosis Pigmentaria (patrones de herencia AD, AR y XL), Enfermedad de Stargardt (gen ABCA4 y acumulación de lipofuscina/A2E), pruebas electrofisiológicas protocolizadas según la ISCEV (ERG campo lleno y multifocal), y la revolución histórica de la Terapia Génica con Voretigene Neparvovec (Luxturna) mediada por virus adenoasociados (AAV2) para mutaciones bialélicas en RPE65.',
    definitionAndEpidemiology: 'Las Distrofias Hereditarias de la Retina (IRD) comprenden un grupo heterogéneo de trastornos monogénicos que causan la degeneración progresiva e incurable de conos, bastones y/o epitelio pigmentario. La Retinosis Pigmentaria (RP) es la distrofia retiniana más común, con una prevalencia de aproximadamente 1 en 3,500 a 4,000 nacidos vivos (más de 2 millones de personas afectadas en el mundo). La Enfermedad de Stargardt (STGD1) es la distrofia macular hereditaria juvenil más frecuente, afectando a 1 de cada 8,000 a 10,000 individuos.',
    anatomyAndPathophysiology: '1. Retinosis Pigmentaria (Distrofia de Bastones y Conos):\n   • Pérdida primaria de los bastones (rod-first degeneration): Mutaciones en genes estructurales o funcionales (RHO, USH2A, RPGR, PRPF31, PDE6A/B) desencadenan la apoptosis de bastones en la retina periférica media, manifestándose como ceguera nocturna (nictalopía) y pérdida progresiva del campo visual periférico concéntrico en "visión en túnel".\n   • Pérdida secundaria de los conos: La desaparición de los bastones provoca privación del factor de supervivencia RdCVF (Rod-derived Cone Viability Factor), estrés oxidativo tóxico por hiperoxia retiniana e inflamación glial, llevando a la degeneración tardía de los conos foveales y ceguera central.\n2. Enfermedad de Stargardt (Gen ABCA4 / STGD1):\n   • Mutaciones bialélicas en el gen ABCA4 que codifica una proteína transportadora transmembrana dependiente de ATP en los discos de los segmentos externos de fotorreceptores.\n   • Falla en la translocación del N-retiniliden-fosfatidiletanolamina hacia el citosol tras el fotoblanqueamiento, condensándose en dímeros tóxicos de N-retinilideno-PE (A2E).\n   • La fagocitosis de estos segmentos por el EPR colapsa sus lisosomas con lipofuscina hiperfluorescente no degradable, induciendo la muerte por apoptosis del EPR foveolar y pérdida foveal secundaria de fotorreceptores.\n3. Deficiencia de RPE65 y Ciclo Visual:\n   • La enzima RPE65 (Isomerohidrolasa retinoide del EPR) es indispensable para reconvertir el todo-trans-retinil éster en 11-cis-retinol en el ciclo visual.\n   • Las mutaciones bialélicas en RPE65 (Amaurosis Congénita de Leber tipo 2 o RP20) impiden la regeneración del cromóforo 11-cis-retinal, dejando a los fotorreceptores metabólicamente ciegos a pesar de permanecer anatómicamente viables durante las primeras décadas de vida.',
    clinicalExamination: {
      biomicroscopy: 'Cámara anterior normal o células pigmentadas discretas en vítreo anterior. Cristalino: catarata subcapsular posterior estrellada precoz en el 40-50% de pacientes con RP.',
      fundus: '• Retinosis Pigmentaria: Tríada clásica patognomónica:\n  1) Depósitos de pigmento perivascular periférico en "espículas óseas" (bone spicules).\n  2) Atenuación arteriolar retiniana difusa severa (arteriolas filiformes enceradas).\n  3) Palidez cérea papilar del nervio óptico (waxy disc pallor).\n  • Asociación foveal: Edema Macular Quístico (EMQ) en el 15-20% de los pacientes.\n• Enfermedad de Stargardt:\n  - Lesión macular foveal en "baba de caracol" o atrofia en "bronce bruñido" con islotes de atrofia del EPR.\n  - Manchas o flecks pisciformes (amarillo-blanquecinos) en el polo posterior y media periferia a nivel del EPR.',
      specialSigns: '• Nictalopía (ceguera nocturna) como síntoma inicial universal en RP.\n• Silencio Coroideo (Dark Choroid / Choque en sombra): En la angiografía con fluoresceína (FAG) en Stargardt, la hiperacumulación difusa de lipofuscina/A2E en el EPR bloquea por completo la fluorescencia normal de la coriocapilar de fondo, haciendo que los vasos retinianos destaquen intensamente sobre una coroides totalmente oscura y apagada (presente en >80% de casos).'
    },
    diagnosticWorkup: [
      {
        test: 'Electrorretinograma de Campo Lleno (Full-field ERG - Protocolo ISCEV)',
        findings: 'Prueba de función fisiológica definitiva:\n1) Respuesta escotópica de bastones (0.01 cd·s/m²): Amplitud de onda b extinguida o severamente disminuida (refleja la disfunción precoz de bastones en RP).\n2) Respuesta combinada escotópica máxima (3.0 cd·s/m²): Amplitudes de onda a y b muy reducidas.\n3) Respuesta fotópica de conos y Flicker 30 Hz: Conservada en etapas iniciales de RP; en estadios avanzados, ERG no registrable ("flatline"). En Stargardt: ERG de conos anormal con bastones normales (Grupo 1) o afectación mixta (Grupos 2 y 3).'
      },
      {
        test: 'Autofluorescencia de Fondo (FAF)',
        findings: '• Retinosis Pigmentaria: Anillo hiperautofluorescente de Robson-Holder centrado en la fóvea (el radio interior representa la retina foveal funcional preservada; por fuera del anillo hay atrofia del EPR y pérdida de la elipsoide).\n• Stargardt: Manchas pisciformes hiperautofluorescentes activas con áreas de hipoautofluorescencia central atrófica correspondiente a la lesión en bronce bruñido.'
      },
      {
        test: 'OCT de Dominio Espectral (SD-OCT)',
        findings: 'Preservación de la banda elipsoide y la capa nuclear externa confinada a la zona foveolar con pérdida abrupta perifoveal; detección sensible de edema macular quístico (EMQ) intrarretiniano.'
      },
      {
        test: 'Secuenciación Genética Masiva (Next-Generation Sequencing - NGS)',
        findings: 'Paneles de más de 300 genes de distrofias retinianas (análisis de variantes patogénicas en ABCA4, RHO, USH2A, RPGR y detección mandatoria de mutaciones bialélicas en RPE65 para elegibilidad a terapia génica).'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Síndrome de Usher (Tipos 1, 2 y 3)',
        distinction: 'Retinosis Pigmentaria asociada a hipoacusia neurosensorial congénita o progresiva y disfunción vestibular (gen USH2A el más frecuente).'
      },
      {
        condition: 'Síndrome de Bardet-Biedl',
        distinction: 'Distrofia de conos-bastones asociada a polidactilia postaxial, obesidad troncal, hipogonadismo, retraso cognitivo y anomalías renales estructurales.'
      },
      {
        condition: 'Toxicidad retiniana por Fenotiazinas (Tioridazina)',
        distinction: 'Retinopatía pigmentaria con atrofia difusa en "sal y pimienta" secundaria a ingesta crónica de dosis elevadas de neurolépticos.'
      }
    ],
    steppedManagement: {
      medical: 'Fase Inicial: Diagnóstico Genético Molecular y Asesoramiento Genético Formal: Identificación precisa del patrón de herencia (Autosómico Dominante, Autosómico Recesivo, Ligado al X o Mitocondrial). Consejería reproductiva para la familia.\n\nFase Intermedia: Manejo de Complicaciones y Soporte Funcional:\n• Para Edema Macular Quístico asociado a RP: Inhibidores de la anhidrasa carbónica tópicos (Dorzolamida 2% cada 8-12 horas) o sistémicos (Acetazolamida oral), que mejoran el transporte de fluidos del EPR sin los riesgos de los corticoides.\n• Para catarata subcapsular posterior: Cirugía de facoemulsificación con implante de LIO intraocular (gran mejoría en la calidad de vida).\n• En Stargardt: PROHIBICIÓN ABSOLUTA de suplementos con Vitamina A (la vitamina A incrementa la síntesis de retinaldehído y acelera la producción catastrófica del dímero citotóxico A2E). Prescribir gafas con filtro solar ámbar/UV.',
      surgical: 'Manejo Quirúrgico y Avanzado: Terapia Génica Aprobada por FDA y EMA (Voretigene Neparvovec - Luxturna):\n• Indicación Estricta: Pacientes con pérdida visual confirmada por mutaciones bialélicas patogénicas en el gen RPE65 que conserven células retinianas viables (grosor retiniano en OCT >100 µm o células foveales detectables).\n• Procedimiento: Vitrectomía pars plana completa con inyección subretiniana meticulosa de 1.5 x 10^11 genomas vectoriales en 0.3 mL de suspensión viral AAV2.\n• Resultados clínicos: Restauración espectacular de la función escotópica, navegación en el test de movilidad con múltiples niveles de luz (MLMT) y expansión del campo visual.'
    },
    clinicalApplicationPractical: 'Indicación precisa en Stargardt: A diferencia de la DMAE donde el AREDS-2 aporta antioxidantes, en la enfermedad de Stargardt la suplementación con Vitamina A o betacarotenos está formalmente CONTRAINDICADA porque nutre el ciclo visual tóxico de A2E acelerando la degeneración macular.\n\nManejo del paciente con baja visión: Derivación temprana a centros de rehabilitación visual: telescopios para visión lejana, lupas electrónicas de contraste invertido, programas de lectura con voz y bastón blanco o de apoyo de orientación y movilidad.\n\nProtocolo de inyección de Luxturna: Requiere anestesia general o retrobulbar profunda con profilaxis inmunosupresora sistémica con prednisona oral (iniciando 3 días antes y reduciendo durante 1 mes) para evitar respuesta inmune neutralizante contra la cápside viral del AAV2.',
    highYieldPearl: 'Voretigene neparvovec (Luxturna) es la primera terapia génica in vivo aprobada en la historia de la medicina moderna (FDA 2017). Utiliza un vector de Adenovirus Asociado serotipo 2 (AAV2) que entrega una copia funcional del gen cADN de RPE65 directamente en el espacio subretiniano de pacientes con mutaciones bialélicas en RPE65.',
    keyDrugs: [
      {
        name: 'Voretigene Neparvovec-rzyl (Luxturna)',
        dose: '1.5 × 10^11 genomas vectoriales (vg) en un volumen de 0.3 mL administrados mediante inyección subretiniana única por ojo (con intervalo mínimo de 6 días entre ambos ojos).',
        warning: 'Vector viral adenoasociado recombinante (AAV2) no replicativo que transfecta las células del EPR suministrando una copia normal de RPE65, restaurando la producción de la enzima isomerasa y reactivando el ciclo visual.. Riesgo de desgarro retiniano iatrogénico, aumento transitorio de PIO, catarata, atrofia foveal subretiniana postinyección e inflamación intraocular controlada con esteroides orales.'
      },
      {
        name: 'Dorzolamida Tópica 2% (Trusopt)',
        dose: '1 gota cada 8 a 12 horas en ambos ojos de forma crónica.',
        warning: 'Inhibe la anhidrasa carbónica en las células del EPR, acidificando el espacio subretiniano y estimulando la bomba de flujo de líquido hacia la coroides, reabsorbiendo el edema macular quístico en RP.. Mucho más seguro que los corticoides intraoculares para el manejo del edema crónico en distrofias retinianas.'
      }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Perla de Examen #1',
        category: 'Asociación Patognomónica',
        description: 'Patrones de herencia en Retinosis Pigmentaria: Autosómica Recesiva (AR, 50-60%, más común globalmente), Autosómica Dominante (AD, 30-40%, mejor pronóstico visual, gen RHO), Ligada al X (XL, 10-15%, curso más severo y precoz con ceguera legal antes de los 30 años, gen RPGR).',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #2',
        category: 'Trampa de Tribunal',
        description: 'El signo de "silencio coroideo" en la FAG de Stargardt se debe a que la lipofuscina densamente acumulada en el EPR absorbe la longitud de onda de excitación azul del haz de luz (490 nm), impidiendo que excite la fluoresceína en la circulación coroidea.',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      },
      {
        title: 'Perla de Examen #3',
        category: 'Cifra Clave de Corte',
        description: 'El ERG es la prueba más sensible para el diagnóstico temprano de RP: las alteraciones electrofisiológicas escotópicas preceden por años a los hallazgos visibles en el fondo de ojo.',
        trapToAvoid: 'Desconocer este concepto en el examen oral.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo Clínico Fase 3 de Luxturna (Russell et al., Lancet 2017): Demostró que el 65% de los pacientes inyectados con voretigene neparvovec aprobaron el test de movilidad con múltiples niveles de luz (MLMT) a niveles de luminancia extremadamente bajos (1 lux, equivalente a una noche sin luna), comparado con el 0% en el grupo control.',
      'Nuevos Ensayos para Stargardt: Se encuentran en evaluación avanzada moduladores orales del ciclo visual (Tinlarebant/LBS-008, inhibidor de RBP4) y fármacos que reducen la dimerización de vitamina A (Alkeus/ALKU-001) para desacelerar la formación de A2E.'
    ],
    landmarkTrials: [
      {
        name: 'Phase 3 Trial of Voretigene Neparvovec (Luxturna) for Biallelic RPE65 Mutation-Associated Retinal Dystrophy',
        year: '2017',
        conclusion: 'La transferencia génica subretiniana de RPE65 mediante vector viral AAV2 mejoró significativamente la función visual nocturna, la sensibilidad retiniana en campo completo y el campo visual sin efectos adversos graves en pacientes con amaurosis congénita de Leber y RP.',
        fellowshipRelevance: 'Hito histórico que inauguró la era de la medicina genómica y terapia génica aprobada en oftalmología.'
      },
      {
        name: 'Natural History of the Progression of Atrophy in Stargardt Disease (ProgStar Study)',
        year: '2016',
        conclusion: 'Caracterizó con precisión la tasa anual de crecimiento de las lesiones atróficas en la FAF (0.51 mm²/año) y la microperimetría en pacientes con mutaciones en ABCA4.',
        fellowshipRelevance: 'Estableció los criterios de valoración y biomarcadores utilizados en los ensayos clínicos actuales para Stargardt.'
      }
    ],
    histopathologyAndGenetics: 'Histopatología: En RP hay desorganización masiva y desprendimiento de los segmentos externos de fotorreceptores, migración de células del EPR cargadas de melanina hacia los espacios perivasculares de la retina interna (generando las espículas óseas) y gliosis reactiva con engrosamiento vascular adventicial. En Stargardt: Células del EPR enormemente distendidas por gránulos densos de lipofuscina que contienen el fluoróforo citotóxico A2E, culminando en fragmentación y desprendimiento foveolar.',
    surgicalPearls: [
      'Al realizar la inyección subretiniana de terapia génica (Luxturna): Utilizar una microcánula subretiniana de 38G/41G (MedOne o DORC) con sistema de control de inyección a pedal; crear primero una pequeña ampolla con solución BSS antes de inyectar el vector viral para confirmar la ubicación subretiniana exacta sin romper la membrana limitante interna ni inducir desgarros.',
      'Localización de la ampolla de Luxturna: Seleccionar un área a lo largo de la arcada vascular temporal superior que conserve grosor retiniano adecuado; masajear hidrostáticamente el fluido con sumo cuidado para que alcance la región foveolar sin causar agujero macular iatrogénico.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un niño de 8 años es traído a consulta por sus padres debido a que tropieza con frecuencia en la oscuridad y no puede salir a jugar de noche. Su agudeza visual es de 20/40 en ambos ojos. El fondo de ojo muestra atenuación arteriolar leve y discreta palidez temporal del disco, sin espículas óseas claras. El ERG de campo completo muestra una onda b escotópica abolida (<5 µV) con respuesta fotópica reducida en un 30%. El panel de secuenciación NGS identifica dos variantes patogénicas en heterocigosis compuesta en el gen RPE65 (c.430G>A y c.11 + 5G>A). Los padres preguntan si el niño quedará ciego y si existe algún tratamiento disponible. ¿Cuál es el diagnóstico de certeza, qué terapia específica está indicada, cuáles son los requisitos de elegibilidad y cómo se administra?',
        answer: '1) Diagnóstico de Certeza:\n   - Distrofia Hereditaria de la Retina (Amaurosis Congénita de Leber / Retinosis Pigmentaria) asociada a mutación bialélica confirmada en el gen RPE65.\n2) Terapia Específica Aprobada:\n   - Voretigene Neparvovec (Luxturna), terapia génica viral subretiniana aprobada por la FDA y EMA.\n3) Requisitos de Elegibilidad Clínica:\n   - 1) Mutación patogénica bialélica en RPE65 confirmada por laboratorio genético certificado (cumplida).\n   - 2) Conservación de células retinianas viables suficientes: determinada por SD-OCT que demuestre grosor retiniano en el polo posterior >100 µm y/o presencia de fotorreceptores foveales detectables.\n   - 3) Edad ≥1 año con pérdida visual funcional documentada.\n4) Modalidad de Administración Quirúrgica:\n   - Requiere Vitrectomía Pars Plana 23G/25G bajo anestesia general e inmunosupresión sistémica periquirúrgica con corticosteroides orales (para prevenir rechazo inflamatorio al vector AAV2).\n   - Inyección subretiniana directa mediante microcánula de 41G de 1.5 x 10^11 genomas vectoriales en 0.3 mL de suspensión debajo de la retina neurosensorial temporal a la fóvea, levantando una ampolla serosa controlada que abarque la mácula.\n   - Tratamiento secuencial del segundo ojo tras al menos 6 días de intervalo.',
        trap: 'Catalogar la enfermedad como "incurable" sin realizar secuenciación genética molecular, perdiendo la ventana de viabilidad celular para salvar la visión del paciente con Luxturna antes de que la atrofia sea total.'
      }
    ]
  },

  // =========================================================================
  // 13. TELANGIECTASIAS MACULARES TIPO 2 (MacTel 2)
  // =========================================================================
  {
    id: 'deep-retina-telangiectasias-maculares-mactel-2',
    title: 'Telangiectasias Maculares Tipo 2 (MacTel 2): Disfunción de Células de Müller, Atrofia Foveolar y Terapia Celular CNTF',
    subspecialtyId: 'retina',
    summary: 'Monografía exhaustiva sobre Telangiectasias Maculares Tipo 2 (MacTel 2 / Síndrome de Gass-Blodi): neurodegeneración primaria bilateral caracterizada por pérdida selectiva de células gliales de Müller foveales y depleción del pigmento macular (luteína y zeaxantina); progresión bifásica (fase no proliferativa con ectasias capilares yuxtafoveales temporales, cavidades hiporreflectivas sin edema foveal ni exudación lipídica, cristales refractiles y placas pigmentarias retinianas migratorias vs fase proliferativa con neovascularización subretiniana secundaria); diagnóstico multimodal (Angiografía OCT con plexos capilares profundos dilatados y anastomosis retino-retinianas, FAG con hiperfluorescencia ectásica temporal tardía sin fuga quística, autofluorescencia FAF con pérdida de hipoautofluorescencia foveal por depleción de pigmento); diferenciación crítica con DMRE y edema macular; abordaje terapéutico contemporáneo: implante intravítreo de células encapsuladas productoras de Factor Neurotrófico Ciliar (CNTF / Revakinagene Taroretcel - Ensayos SHIELD 1 y 2 de Fase 3) y agentes Anti-VEGF exclusivos para la fase neovascular.',
    definitionAndEpidemiology: 'Las Telangiectasias Maculares Tipo 2 (MacTel 2) constituyen una enfermedad neurodegenerativa macular primaria, bilateral, simétrica y lentamente progresiva, antes considerada puramente vascular (clasificación original de Gass-Blodi). Se manifiesta típicamente en la quinta a sexta década de la vida (edad media de inicio 55-65 años), con igual prevalencia entre hombres y mujeres. Frecuentemente asociada a diabetes mellitus tipo 2 e hipertensión arterial sistémica, pero sin retinopatía diabética subyacente. La prevalencia poblacional oscila entre el 0.1% y el 0.2% en personas mayores de 40 años.',
    anatomyAndPathophysiology: '1. Fisiopatología Neuroglial Centrada en las Células de Müller:\n   • Descubrimientos histopatológicos e inmunohistoquímicos demuestran que el defecto primario no es endotelial vascular, sino la pérdida y apoptosis selectiva de las Células Gliales de Müller en la zona del clivus foveolar.\n   • Las células de Müller son responsables del almacenamiento y transporte del pigmento macular (luteína y zeaxantina), de la homeostasis del potasio y del soporte metabólico y trófico a los fotorreceptores.\n   • Depleción del pigmento macular foveal -> pérdida del filtro natural contra la toxicidad por luz azul de onda corta.\n   • Atrofia y colapso de fotorreceptores con pérdida de la línea elipsoide (EZ) y de la membrana limitante externa (ELM).\n2. Consecuencias Vasculares Secundarias:\n   • Al perderse el soporte pericitario y glial de Müller, el plexo capilar telangiectásico profundo y superficial de la región parafoveal temporal se dilata y adquiere una conformación ectásica tortuosa con capilares orientados verticalmente ("diving vessels").\n   • Formación de cavidades hiporreflectivas en retina interna y externa en el OCT que NO representan edema macular exudativo (no hay extravasación proteica masiva, no hay exudados duros lipídicos y los diuréticos o Anti-VEGF NO resuelven estas cavidades en fase no proliferativa).\n3. Fase Neovascular Proliferativa:\n   • Proliferación de vasos capilares anormales que perforan la retina externa hacia el espacio subretiniano (anastomosis retino-retinianas y retino-coroideas), simulando una neovascularización tipo 2 o proliferación angiomatosa retiniana (RAP/tipo 3), provocando hemorragias subretinianas y cicatriz disciforme tardía.',
    clinicalExamination: {
      biomicroscopy: 'Normal en segmento anterior; en el fondo de ojo bilateral simétrico se requiere un examen minucioso con lente de contacto o aérea de alta resolución (SuperField o 60D):\n• Pérdida de la transparencia retiniana foveolar temporal con aspecto "grisáceo" o blanquecino translúcido en parafóvea temporal.\n• Cristales refractiles brillantes diminutos en la superficie retiniana interna foveal (depósito superficial en un 40-50% de los casos).\n• Ectasias capilares parafoveales temporales discretas y vénulas dilatadas orientadas en ángulo recto ("right-angled venules") que bucean hacia capas profundas.\n• Placas pigmentarias focales hipertróficas o espículas en la fóvea (migración de células del EPR a través de las cavidades atróficas).\n• AUSENCIA CATEGÓRICA DE EXUDADOS DUROS LIPÍDICOS (si hay exudados duros, sospechar MacTel Tipo 1 unilateral o retinopatía diabética).',
      fundus: 'Grisáceo parafoveal temporal característico, vénulas en ángulo recto y pigmentación foveal ectópica; en estadios neovasculares: hemorragia subretiniana pequeña o desprendimiento seroso adyacente a la neovascularización.',
      specialSigns: '• Vénulas en Ángulo Recto (Right-Angled Venules): Vánulas retinianas que se doblan abruptamente en 90 grados hacia el centro foveal buceando en la retina externa.\n• Cristales Refractiles Foveales: Puntos microscópicos iridiscentes en la interfase vitreorretiniana que no interfieren con la agudeza visual pero son clave para el diagnóstico.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT de Dominio Espectral (SD-OCT)',
        findings: 'Patrón imagenológico patognomónico: Pérdida precoz de la banda elipsoide (EZ) en la región temporal a la fóvea con adelgazamiento foveolar central; cavidades hiporreflectivas intrarretinianas o submilitares (cavidades quísticas no exudativas con ausencia de engrosamiento retiniano difuso); en estadios avanzados, atrofia foveolar completa con colapso de las capas internas sobre el EPR ("foveal cavitation").'
      },
      {
        test: 'Autofluorescencia de Fondo (FAF)',
        findings: 'Signo ultrasensible temprano: Pérdida de la hipoautofluorescencia fisiológica foveal normal (debido a la depleción del pigmento macular protector luteína/zeaxantina que normalmente absorbe la luz azul incidente), revelando una hiperautofluorescencia anómala brillante foveal central que contrasta con el fondo.'
      },
      {
        test: 'Angiografía por OCT (OCT-A)',
        findings: 'Revela ectasias capilares profundas dilatadas primariamente en el plexo capilar profundo (DCP) temporal, con vasos que penetran hacia la zona avascular foveal (FAZ) y capilares que se extienden verticalmente hacia la capa de fotorreceptores; identifica precozmente la invasión neovascular subretiniana antes de que cause hemorragia macroscópica.'
      },
      {
        test: 'Angiografía Fluoresceínica (FAG)',
        findings: 'Fase temprana: Telangiectasias y dilataciones capilares localizadas en el cuadrante temporal de la fóvea; fase tardía: Hiperfluorescencia difusa por fuga ("staining") en parafóvea temporal que no adopta el patrón en pétalos de rosa del edema macular quístico típico.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'MacTel Tipo 1 (Aneurismas Maculares Congénitos de Leber)',
        distinction: 'UNILATERAL, predominantemente en varones jóvenes (edad media 40 años), ectasias capilares múltiples y microaneurismas con ABUNDANTE EXUDACIÓN LIPÍDICA LIPOPROTEICA (exudados duros marcados) y edema macular verdadero; responde a fotocoagulación con láser focal o Anti-VEGF.'
      },
      {
        condition: 'Degeneración Macular Asociada a la Edad (DMRE) Seca Atópica',
        distinction: 'Presencia de drusas duras y blandas difusas, pseudodrusas reticulares y atrofia geográfica que suele no respetar un eje exclusivamente temporal ni mostrar vénulas en ángulo recto.'
      },
      {
        condition: 'Edema Macular Diabético (DME)',
        distinction: 'Presencia de microaneurismas en los cuatro cuadrantes, exudados duros en anillo circinado, hemorragias en mancha y engrosamiento retiniano demostrado en OCT.'
      }
    ],
    steppedManagement: {
      medical: '• Abordaje en Fase No Proliferativa (Sin Neovascularización Subretiniana):\n  - IMPORTANTE: LOS FÁRMACOS ANTI-VEGF (Ranibizumab, Aflibercept, Bevacizumab) NO TIENEN BENEFICIO en la fase no proliferativa; no reducen las cavidades hiporreflectivas ni frenan la atrofia foveolar.\n  - CONTRAINDICADA LA FOTOCOAGULACIÓN LÁSER DIRECTA EN EL CENTRO: Provoca agrandamiento progresivo de escotomas yatrogénicos y no detiene la degeneración glial.\n  - Terapia Neuroprotectora Aprobada / Innovación Contemporánea:\n    * FACTOR NEUROTROFICO CILIAR (CNTF) MEDIANTE TECNOLOGÍA DE CÉLULAS ENCAPSULADAS (Revakinagene Taroretcel / NT-501):\n      • Implante intravítreo semipermeable de células epiteliales pigmentarias humanas genéticamente modificadas para secretar continuamente factor neurotrófico ciliar (CNTF) durante varios años.\n      • Ensayos Clínicos Fase 3 SHIELD 1 y SHIELD 2: Demostraron una reducción estadísticamente significativa del 56% en la tasa de progresión del área de atrofia de la línea elipsoide (fotorreceptores) a los 24 meses frente al grupo simulado.\n• Abordaje en Fase Proliferativa (Con Neovascularización Subretiniana Activa):\n  - Fármacos Anti-VEGF Intravítreos (Aflibercept 2 mg, Ranibizumab 0.5 mg o Faricimab 6 mg):\n    * Indicación precisa y exclusiva: Presencia demostrada de neovascularización activa con hemorragia subretiniana, líquido intrarretiniano/subretiniano nuevo o disminución visual aguda.\n    * Pauta Pro Re Nata (PRN) o Treat-and-Extend con dosis de carga mensual hasta la inactivación de la red vascular anómala.',
      surgical: '• Cirugía de Implante de CNTF (NT-501):\n  - Inserción quirúrgica reglada a través de esclerotomía pars plana a 3.5-4 mm del limbo con anclaje escleral transfixiante con Prolene 8-0; libera factor de crecimiento continuo sin necesidad de inyecciones mensuales repetidas.\n• Vitrectomía Pars Plana:\n  - Reservada exclusivamente para casos infrecuentes de agujero macular de espesor total secundario a colapso de fovea con membrana limitante interna (técnica de colgajo invertido de MLI con gas expansible).'
    },
    clinicalApplicationPractical: '1. No Confundir las Cavidades de MacTel 2 con Edema Macular: Al ver cavidades hiporreflectivas en un OCT de un paciente de 60 años, el impulso del oftalmólogo general es inyectar Anti-VEGF o pautar acetazolamida/corticoides. En MacTel 2 no proliferativo, estas cavidades son un defecto de arquitectura citoesquelética por falta de células de Müller ("cavidades degenerativas"), no líquido osmótico; inyectar Anti-VEGF en este estadio es fútil y costoso.\n2. La Autofluorescencia (FAF) da el diagnóstico en 3 segundos: Si sospecha MacTel 2 pero la lámpara de hendidura es dudosa, realice una autofluorescencia. La presencia de hiperautofluorescencia intensa brillante justo en el centro foveolar (por pérdida de luteína) confirma el diagnóstico.\n3. Buscar siempre la Vénula en Ángulo Recto: En la angiografía o retinografía con filtro verde (red-free), una vénula temporal que vira en 90º hacia la fóvea sella la sospecha clínica.',
    highYieldPearl: 'MacTel 2 Fellowship Pearl: Patología de las CÉLULAS DE MÜLLER con depleción de pigmento macular. Bilateral, temporal a fóvea, vénulas en ángulo recto y cristales foveales, SIN EXUDADOS DUROS. Anti-VEGF solo si hay neovascularización secundaria; CNTF intravítreo frena la atrofia foveolar.',
    keyDrugs: [
      { name: 'Revakinagene Taroretcel (NT-501 / Implante CNTF)', dose: 'Implante intravítreo pars plana liberador continuo', warning: 'Fármaco neurotrófico celular de liberación prolongada que preserva la línea elipsoide en fase 3.' },
      { name: 'Aflibercept intravítreo (Eylea 2 mg)', dose: 'Inyección intravítrea mensual según régimen PRN', warning: 'Indicado EXCLUSIVAMENTE si existe neovascularización coroidea/retiniana proliferativa activa.' },
      { name: 'Ranibizumab intravítreo (Lucentis 0.5 mg)', dose: 'Inyección intravítrea mensual PRN', warning: 'Manejo selectivo de la neovascularización macular secundaria en MacTel 2.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'MacTel 1 vs MacTel 2: Diferencias de Oro',
        category: 'Asociación Patognomónica',
        description: 'MacTel 1: Varones jóvenes, UNILATERAL, telangiectasias marcadas CON exudados duros masivos y edema verdadero (responde a láser/Anti-VEGF). MacTel 2: Mayores de 55 años, BILATERAL simétrica, temporal a fóvea, cristales refractiles, vénulas en ángulo recto, SIN exudados duros (las cavidades son atróficas, no responden a Anti-VEGF salvo neovascularización).',
        trapToAvoid: 'Tratar cavidades no proliferativas de MacTel 2 con inyecciones seriadas de anti-VEGF pensando que es edema quístico.'
      },
      {
        title: 'La Célula Primaria Dañada en MacTel 2',
        category: 'Pregunta Clásica',
        description: 'Pregunta clásica de subespecialidad: "¿Cuál es el tipo celular cuya disfunción y pérdida constituye el evento fisiopatológico primario en las Telangiectasias Maculares Tipo 2?". Respuesta: Las Células Gliales de Müller de la retina foveolar (no las células endoteliales ni el EPR).',
        trapToAvoid: 'Responder que es un defecto endotelial vascular congénito o una alteración aislada del EPR.'
      },
      {
        title: 'Signo de la Autofluorescencia Foveal Hiperautofluorescente',
        category: 'Trampa de Tribunal',
        description: 'Normalmente la fóvea es hipoautofluorescente porque el pigmento macular (luteína/zeaxantina) absorbe la luz azul excitadora. En MacTel 2 la pérdida de células de Müller causa depleción del pigmento, volviendo la fóvea paradójicamente HIPERautofluorescente en etapas precoces.',
        trapToAvoid: 'Interpretar la hiperautofluorescencia foveal como acúmulo patológico de lipofuscina druseniforme.'
      }
    ],
    fellowshipKeyPoints: [
      'Clasificación de Gass-Blodi para MacTel 2: Estadio 1 (hiperfluorescencia capilar temporal mínima sin cambios en oftalmoscopia), Estadio 2 (pérdida de transparencia retiniana grisácea temporal y pérdida de pigmento macular), Estadio 3 (vénulas en ángulo recto buceando en capas profundas), Estadio 4 (placas pigmentarias intra y subretinianas por hiperplasia y migración del EPR), Estadio 5 (neovascularización subretiniana con hemorragia y cicatriz disciforme).',
      'Metabolismo de Serina y Deoxiesfingolípidos: Estudios genéticos recientes vinculan MacTel 2 con mutaciones en el gen SPTLC1/SPTLC2 de la serina palmitoiltransferasa, que provoca acumulación sistémica de deoxiesfingolípidos atípicos neurotóxicos para las células de Müller.',
      'OCT-A en MacTel 2: Demuestra que la red capilar patológica comienza en el plexo capilar profundo (DCP) antes de involucrar al superficial, extendiéndose hacia el espacio avascular foveal.'
    ],
    landmarkTrials: [
      {
        name: 'SHIELD 1 & SHIELD 2 Phase 3 Trials (Revakinagene Taroretcel / CNTF in MacTel 2)',
        year: '2023 (Ophthalmology)',
        conclusion: 'El implante celular liberador de CNTF (NT-501) demostró una reducción estadísticamente significativa del 56.4% en el ritmo de pérdida de la zona de integridad de la línea elipsoide foveal a 24 meses frente a placebo, constituyendo la primera terapia neuroprotectora eficaz comprobada en MacTel 2.',
        fellowshipRelevance: 'Hito histórico que transformó a MacTel 2 de una enfermedad sin tratamiento a una tratable mediante bioterapia celular.'
      }
    ],
    histopathologyAndGenetics: 'En microscopía electrónica de retina en MacTel 2: Desaparición focal de las células de Müller con membrana celular residual vacía ("gliopenia"), pérdida de microvellosidades que abrazan a los fotorreceptores con consecuente apoptosis foveolar de conos, adelgazamiento de la membrana limitante externa e invasión migratoria de células del EPR cargadas de melanina que trepan a lo largo de los vasos en ángulo recto hacia la retina interna.',
    surgicalPearls: [
      'Al implantar el dispositivo NT-501 (Revakinagene Taroretcel): Realizar una incisión escleral radial de 2.0 mm a 3.75 mm del limbo en el cuadrante temporal inferior; insertar la varilla del implante en dirección al centro de la cavidad vítrea verificando con microscopio e iluminación indirecta que la punta no toque el cristalino; anclar la pestaña de fijación a la esclera con sutura irreabsorbible de Prolene 8-0.',
      'En caso de vitrectomía por agujero macular atípico en MacTel 2: No pelar la membrana limitante interna con tinción agresiva de azul brillante cerca de la fóvea temporal, pues el tejido circundante carece de soporte de Müller y se desgarra con extrema facilidad creando un agujero macular gigante yatrogénico.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una paciente de 59 años con diabetes tipo 2 bien controlada (HbA1c 6.4%) acude por metamorfopsia y dificultad para la lectura con ambos ojos de 1 año de evolución. Su agudeza visual es de 20/30 en OD y 20/40 en OI. En el fondo de ojo de ambos ojos no se observan microaneurismas ni hemorragias ni exudados duros; sin embargo, en la región parafoveal temporal se aprecia una zona grisácea mate con algunos cristales refringentes diminutos y una vénula que se dobla en 90º hacia la fóvea. El SD-OCT muestra cavidades hiporreflectivas en capas medias y externas de la retina temporal con interrupción focal de la banda elipsoide, sin engrosamiento retiniano. Su colega oftalmólogo propone iniciar inyecciones mensuales de Ranibizumab en ambos ojos por "edema macular diabético atípico". ¿Cuál es su diagnóstico de precisión, cuál es la justificación para rechazar la propuesta del colega y cuál es el enfoque contemporáneo para preservar los fotorreceptores?',
        answer: '1) Diagnóstico de Precisión: Telangiectasias Maculares Tipo 2 (MacTel 2 / Síndrome de Gass-Blodi) en estadio 3 no proliferativo (bilateral, afectación temporal, vénulas en ángulo recto, cristales refringentes y ausencia total de exudados duros).\n2) Crítica a la Propuesta de Inyectar Anti-VEGF: La propuesta es errónea e injustificada. Las cavidades en MacTel 2 son atróficas/degenerativas por apoptosis de células gliales de Müller ("gliopenia foveolar"), no representan edema macular exudativo osmótico. Los ensayos clínicos han demostrado categóricamente que los agentes Anti-VEGF no tienen beneficio en MacTel 2 no proliferativo, no cierran las cavidades y no detienen la pérdida de fotorreceptores. El Anti-VEGF solo está indicado si se demuestra neovascularización subretiniana activa con exudación serohemorrágica.\n3) Enfoque Contemporáneo: Monitorización estrecha con OCT-A para detectar precozmente cualquier brote de neovascularización activa; realización de Autofluorescencia (que mostrará hiperautofluorescencia foveal patognomónica por pérdida de pigmento macular); y considerar la terapia con factor neurotrófico ciliar (CNTF / implante intravítreo NT-501) demostrado en fase 3 para desacelerar en más del 50% la progresión de la atrofia foveal.',
        trap: 'Confundir las cavidades de MacTel 2 con edema macular y pautar pautas de Anti-VEGF o corticoides que no aportarán ningún beneficio al paciente.'
      }
    ]
  },

  // =========================================================================
  // 14. ESPECTRO PAQUICOROIDES AVANZADO Y TERAPIA FOTODINÁMICA (Ensayo PLACE)
  // =========================================================================
  {
    id: 'deep-retina-paquicoroides-epitelopatia-tfd',
    title: 'Espectro Paquicoroides Avanzado: Epiteliopatía Pigmentaria Paquicoroidea (PPE), Neovasculopatía y TFD de Fluencia Media (Ensayo PLACE)',
    subspecialtyId: 'retina',
    summary: 'Monografía exhaustiva sobre el Espectro de Enfermedades Paquicoroides: clasificación fenotípica evolutiva secuencial (Epiteliopatía Pigmentaria Paquicoroidea / PPE, Coriorretinopatía Serosa Central / CSC aguda y crónica, Neovasculopatía Paquicoroidea / PNV y Vasculopatía Polipoidea Coroidea / PCV paquicoroidal); fisiopatología coroidal (hiperpermeabilidad vascular de la coriocapilar, atrofia isquémica de la coriocapilar interna y dilatación masiva de vénulas de la capa de Haller / paquivénulas); biomarcadores en EDI-OCT y Swept-Source OCT (grosor coroideo subfoveal SFCT >395-400 µm, compresión de la coriocapilar por paquivénulas subyacentes, desprendimiento del neuroepitelio y defectos focales del EPR); Angiografía con Verde de Indocianina (ICGA) como patrón oro para hiperpermeabilidad coroidea en parches y pólipos vasculares; evidencia de primer nivel: Ensayo PLACE que demostró la superioridad indiscutible de la Terapia Fotodinámica (PDT) con Verteporfina a media fluencia frente al Láser Micropulso Subumbral; manejo de la neovasculopatía paquicoroides combinando TFD y Anti-VEGF.',
    definitionAndEpidemiology: 'El espectro de enfermedades paquicoroides engloba un conjunto de entidades clínico-patológicas caracterizadas por un engrosamiento anómalo de la coroides (paquicoroides, habitualmente SFCT >395-400 µm) secundario a la presencia de grandes vénulas coroideas hipertróficas en la capa de Haller (paquivénulas), que comprimen la coriocapilar suprayacente causando isquemia focal, daño del epitelio pigmentario retiniano (EPR) y desprendimiento seroso o neovascularización. Afecta con mayor frecuencia a varones de mediana edad (30-55 años), individuos con patrón de personalidad tipo A, usuarios de esteroides exógenos (por cualquier vía), pacientes con apnea obstructiva del sueño (SAOS) o con factores genéticos predisponentes (variantes en CFH y ARMS2).',
    anatomyAndPathophysiology: '1. Secuencia Fisiopatológica Unificada del Espectro Paquicoroides:\n   • Disfunción del Tono Autonómico e Hiperpermeabilidad Coroidea:\n     - La sobreactivación del sistema simpático o la estimulación por glucocorticoides modula los receptores de mineralocorticoides en los vasos coroideos -> congestión venosa activa y éxtasis vascular en el sistema de las venas vorticosas.\n   • Hipertrofia de Paquivénulas en Capa de Haller:\n     - Dilatación focal o difusa masiva de los vasos coroideos de gran calibre (paquivénulas) que empujan hacia arriba la arquitectura coroidea interna.\n   • Compresión Isquémica y Atrofia de la Coriocapilar:\n     - Las paquivénulas comprimen mecánicamente la red capilar interna (coriocapilar), provocando atenuación, hipoperfusión isquémica y pérdida fenotípica de fenestraciones vasculares.\n   • Disfunción y Ruptura de Uniones Herméticas del EPR:\n     - El EPR suprayacente a la coriocapilar isquémica sufre degeneración, metaplasia, microrrupturas y pérdida de zonula occludens (formando la Epiteliopatía Pigmentaria Paquicoroidea / PPE).\n   • Extravasación de Fluido Subretiniano (CSC):\n     - El gradiente hidrostático coroideo anormal vence la barrera hematorretiniana externa -> desprendimiento seroso de la retina neurosensorial (SRD) o desprendimiento del epitelio pigmentario (PED).\n   • Cascada Neovascular (Neovasculopatía Paquicoroidea - PNV):\n     - La isquemia sostenida de la coriocapilar y la rotura del EPR estimulan la secreción de VEGF, induciendo el crecimiento de una red neovascular plana tipo 1 entre la membrana de Bruch y el EPR ("Double-Layer Sign" en OCT).\n   • Vasculopatía Polipoidea Coroidea (PCV / Paquicoroidea):\n     - Las ramificaciones vasculares periféricas de la red tipo 1 terminan en dilataciones aneurismáticas ectásicas bulbosas (pólipos coroideos) propensos a hemorragias subretinianas masivas y hematomas vítreos.',
    clinicalExamination: {
      biomicroscopy: '• En Epiteliopatía Pigmentaria Paquicoroidea (PPE): Cambios sutiles en polo posterior con moteado o dispersión granular de pigmento en el EPR foveal o parafoveal, ausencia de desprendimiento de retina activo y sin engrosamiento detectable al biomicroscopio convencional.\n• En Coriorretinopatía Serosa Central Crónica: Desprendimiento seroso macular en cúpula translúcido, precipitados subretinianos amarillentos lipofuscínicos (células de fotorreceptores descamadas acumuladas en el espacio subretiniano), tractos atróficos en lágrima o "gotera" (gravitational tracks) que descienden desde la arcada hacia la periferia inferior.\n• En Neovasculopatía Paquicoroidea (PNV): Desprendimiento plano irregular del EPR (Flat Irregular PED), líquido subretiniano persistente de baja reflectividad y ausencia de exudados duros.\n• En Vasculopatía Polipoidea (PCV): Nódulos de color anaranjado-rojizo subretinianos sobreelevados en el polo posterior, a menudo rodeados de desprendimientos serohemorrágicos extensos o anillos lipídicos.',
      fundus: 'Coroides gruesa que confiere un aspecto atigrado rojizo brillante al fondo; presencia de desprendimiento macular en cúpula serosa o nódulos anaranjados polipoideos.',
      specialSigns: '• Signo de la Doble Capa (Double-Layer Sign - DLS): En OCT B-scan, separación plana y ondulada entre la membrana basal del EPR hiperreflectiva y la membrana de Bruch subyacente, patognomónica de neovascularización plana paquicoroidea tipo 1.\n• Pistas Gravitatorias en Gotera (Gravitational Tracks): Bandas atróficas verticales del EPR dirigidas hacia abajo causadas por el drenaje crónico de fluido subretiniano bajo la fuerza de la gravedad.'
    },
    diagnosticWorkup: [
      {
        test: 'OCT de Dominio Swept-Source o EDI-OCT (Enhanced Depth Imaging)',
        findings: 'Parámetro cardinal definitorio: Grosor coroideo subfoveal (SFCT) marcadamente incrementado (>395-400 µm; media >450 µm), atenuación severa de la coriocapilar y visualización directa de paquivénulas hiporreflectivas gigantes que ocupan casi todo el espesor de la capa de Haller.'
      },
      {
        test: 'Angiografía con Verde de Indocianina (ICGA - Gold Standard)',
        findings: 'Examen imprescindible para la caracterización fenotípica: Revela áreas de hiperpermeabilidad coroidea en parches en fase media ("choroidal hyperpermeability plaques"), dilatación de paquivénulas y es la ÚNICA prueba diagnóstica capaz de confirmar con certeza absoluta los pólipos coroideos redondeados hiperfluorescentes en PCV con su red vascular de ramificación (BVN).'
      },
      {
        test: 'Angiografía Fluoresceínica (FAG)',
        findings: 'En CSC activa: Fuga focal en "punto de tinta" (ink blot) o en "columna de humo" / chimenea (smokestack); en CSC crónica: Zonas de hiperfluorescencia en salpicadura por atrofia en ventana del EPR (mottled pattern) con fuga indeterminada mal delimitada.'
      },
      {
        test: 'Angiografía por OCT (OCT-A)',
        findings: 'Detección no invasiva de la red neovascular paquicoroidea plana tipo 1 dentro del espacio del "Double-Layer Sign" en el corte segmentado choriocapillaris/avascular, mostrando una maraña de vasos capilares entrelazados de baja velocidad de flujo.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Degeneración Macular Asociada a la Edad (DMRE) Típica',
        distinction: 'Presenta coroides DELGADA o atrófica (SFCT <200-250 µm), múltiples drusas blandas confluentes y pseudodrusas reticulares en polo posterior; no muestra paquivénulas en la capa de Haller.'
      },
      {
        condition: 'Síndrome de Vogt-Koyanagi-Harada (VKH) en Fase Aguda',
        distinction: 'Panuveítis bilateral severa con celularidad vítrea, precipitados queráticos gruesos, pliegues coroideos y desprendimientos exudativos serosos multitobulares que responden de inmediato a corticoides en altas dosis (los corticoides EMPEORAN catastroficamente el espectro paquicoroides).'
      },
      {
        condition: 'Desprendimiento Regmatógeno de Retina Subclínico',
        distinction: 'Presencia de desgarro retiniano causal periférico a la oftalmoscopia binocular indirecta con depresión escleral y ausencia de engrosamiento coroideo.'
      }
    ],
    steppedManagement: {
      medical: '• REGLA CARDINAL DE ORO: SUSPENSIÓN ABSOLUTA DE TODO TIPO DE GLUCOCORTICOIDES:\n  - Retirar de inmediato esteroides sistémicos, inhalados, tópicos, articulares o cremas dermatológicas (el esteroide es el principal inductor y perpetuador de la enfermedad paquicoroidea).\n• Fármacos Antagonistas de Receptores de Mineralocorticoides (Eplerenona / Espironolactona):\n  - Eplerenona oral (25 mg/día la primera semana, escalando a 50 mg/día durante 8-12 semanas monitorizando potasio y función renal).\n  - Nota de evidencia: El ensayo VICI (Lancet 2020) cuestionó su beneficio frente a placebo a 12 meses en CSC crónica, por lo que su indicación actual es de segunda línea si no hay acceso a TFD.\n• Manejo Médico de la Neovasculopatía Paquicoroidea (PNV) y PCV:\n  - Inyecciones intravítreas de Anti-VEGF (Aflibercept 2 mg o Faricimab 6 mg):\n    * Especialmente eficaces en PCV y PNV debido a su capacidad para inhibir VEGF-A y Angiopoyetina-2.\n    * En PCV pura, el ensayo PLANET demostró que la monoterapia con Aflibercept logra el secado macular en más del 85% de los ojos, aunque la combinación con TFD logra una mayor tasa de oclusión completa de los pólipos (oclusión polipoidea >80%).',
      surgical: '• TERAPIA FOTODINÁMICA (PDT) CON VERTEPORFINA A MEDIA FLUENCIA (HALF-FLUENCE PDT):\n  - Estándar de Oro Terapéutico Indiscutible (Confirmado por el Ensayo PLACE):\n    * Infusión de Verteporfina (Visudyne 6 mg/m2 de superficie corporal durante 10 minutos) -> activación láser a 689 nm a los 15 minutos.\n    * Parámetros de Seguridad Reducidos: Media Fluencia (25 J/cm2 a 300 mW/cm2 durante 83 segundos) o Media Dosis de Verteporfina (3 mg/m2 con fluencia estándar de 50 J/cm2).\n    * Mecanismo Biológico: Induce trombosis endotelial selectiva transitoria en la coriocapilar hiperpermeable y remodela las paquivénulas de la capa de Haller, reduciendo el grosor coroideo (SFCT), disminuyendo la presión hidrostática y permitiendo la reabsorción completa y permanente del fluido subretiniano en >85-90% de los pacientes.\n• Láser Micropulso Subumbral (Subthreshold Micropulse Laser - 577 nm o 810 nm):\n  - Emisión de pulsos ultracortos en microciclos con enfriamiento celular tisular que estimula el epitelio pigmentario sin producir cicatriz térmica visible.\n  - Indicado en ojos con contraindicación de TFD o puntos focales extrafoveales; el ensayo PLACE demostró que es SIGNIFICATIVAMENTE INFERIOR a la TFD a media fluencia.'
    },
    clinicalApplicationPractical: '1. El Ensayo PLACE zanjó la controversia: El ensayo multicéntrico aleatorizado PLACE (Ophthalmology 2018) comparó directamente TFD a media fluencia vs Láser Micropulso Subumbral en CSC crónica; la TFD fue abrumadoramente superior en resolución anatómica del fluido (67% vs 29% a los 8 meses) y en mejoría funcional de agudeza visual.\n2. Preguntar siempre por Esteroides Ocultos: Indagar por pomadas dérmicas con betametasona, infiltraciones articulares para lumbalgia o dolor de rodilla, spray nasal para rinitis alérgica o suplementos de gimnasio con esteroides anabolizantes. Suspenderlos es la primera medida curativa.\n3. Si ve un "Double-Layer Sign" en OCT, pida un OCT-A: Si una CSC crónica no resuelve o el desprendimiento del EPR es aplanado y festoneado, existe una neovasculopatía paquicoroides (PNV); el OCT-A revelará la red neovascular sub-EPR oculta que exige tratamiento con Anti-VEGF asociado a TFD.',
    highYieldPearl: 'Paquicoroides Board Pearl: Coroides gruesa (>395 µm) con paquivénulas gigantes en capa de Haller comprimiendo la coriocapilar. Los esteroides son veneno (empeoran el cuadro). El Ensayo PLACE coronó a la Terapia Fotodinámica (PDT) a media fluencia como el tratamiento de elección superior al láser micropulso.',
    keyDrugs: [
      { name: 'Verteporfina (Visudyne 6 mg/m2)', dose: 'Infusión IV en 10 min seguido de láser a 689 nm (media fluencia 25 J/cm2)', warning: 'Fotosensibilidad cutánea severa por 48 horas; proteger estrictamente de la luz solar directa.' },
      { name: 'Aflibercept 2 mg intravítreo', dose: 'Inyecciones mensuales en fase de carga seguidas de Treat-and-Extend', warning: 'Terapia antiangiogénica de elección para Neovasculopatía Paquicoroidea y PCV.' },
      { name: 'Eplerenona oral (Inspra)', dose: '25-50 mg vía oral al día con control de K+ sérico', warning: 'Antagonista de receptores de mineralocorticoides; uso de segunda línea en CSC.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Los Resultados Clave del Ensayo PLACE',
        category: 'Pregunta Clásica',
        description: 'Pregunta clásica de examen de Fellowship: "¿Cuál fue el resultado principal del ensayo landmark PLACE (van Dijk et al., Ophthalmology 2018)?". Respuesta: La Terapia Fotodinámica (PDT) a media fluencia demostró una superioridad estadística y clínica abrumadora frente al láser micropulso subumbral de alta densidad para inducir la resolución completa del líquido subretiniano y la recuperación de la agudeza visual en Coriorretinopatía Serosa Central crónica.',
        trapToAvoid: 'Responder que el láser micropulso es equivalente o superior a la TFD.'
      },
      {
        title: 'Efecto Devastador de los Glucocorticoides en Paquicoroides',
        category: 'Trampa de Tribunal',
        description: 'Pregunta trampa: Paciente con desprendimiento macular seroso en cúpula y coroides engrosada es diagnosticado erróneamente de VKH y se le prescriben bolos de metilprednisolona intravenosa. ¿Qué ocurre? Respuesta: Empeoramiento catastrófico con desprendimientos bulosos masivos de retina, rupturas del EPR y fibrina subretiniana masiva. Los corticoides estimulan directamente el tono vascular coroideo y descompensan la barrera del EPR.',
        trapToAvoid: 'Prescribir corticoides a un paciente con desprendimiento macular sin haber medido antes el grosor coroideo con EDI-OCT.'
      },
      {
        title: 'El Signo de la Doble Capa (Double-Layer Sign)',
        category: 'Asociación Patognomónica',
        description: 'Separación plana irregular y ondulada entre el EPR y la membrana de Bruch en un ojo con coroides engrosada = Signo de la Doble Capa, altamente predictivo de Neovasculopatía Paquicoroidea (PNV) tipo 1 en OCT-A.',
        trapToAvoid: 'Catalogarlo como simple desprendimiento drusenoide del EPR de DMRE.'
      }
    ],
    fellowshipKeyPoints: [
      'Grosor Coroideo Subfoveal (SFCT): El punto de corte estandarizado para definir paquicoroides en EDI-OCT se establece típicamente en >395-400 µm (en comparación con el grosor coroideo fisiológico medio normal de 250-287 µm en adultos).',
      'Protocolos de TFD Modificada de Seguridad: Media Fluencia (Half-fluence: 25 J/cm2 reduciendo la energía lumínica a la mitad con dosis completa de verteporfina) o Media Dosis (Half-dose: 3 mg/m2 de verteporfina con fluencia completa de 50 J/cm2). Ambas previenen la atrofia del EPR y la isquemia coriocapilar irreversible que provocaba la TFD estándar clásica.',
      'Ensayo PLANET (Lancet Diabetes Endocrinol 2018): Evaluó la monoterapia con Aflibercept frente a Aflibercept + TFD en Vasculopatía Polipoidea Coroidea (PCV); concluyó que Aflibercept en monoterapia logra excelentes ganancias de agudeza visual (más del 85% libres de fluido), pero la combinación con TFD rescata más pólipos persistentes.'
    ],
    landmarkTrials: [
      {
        name: 'PLACE Trial (Half-dose PDT vs Subthreshold Micropulse Laser in CSC)',
        year: '2018 (Ophthalmology)',
        conclusion: 'Primer ensayo multicéntrico aleatorizado controlado que comparó directamente TFD a media dosis vs Láser Micropulso: La TFD logró la resolución completa del líquido subretiniano en el 67.2% de los pacientes a los 7-8 meses frente a solo el 28.8% con láser micropulso (p < 0.001).',
        fellowshipRelevance: 'Consolidó a la Terapia Fotodinámica como el tratamiento de referencia mundial incuestionable para la CSC persistente/crónica.'
      },
      {
        name: 'PLANET Study (Aflibercept with or without PDT in Polypoidal Choroidal Vasculopathy)',
        year: '2018 (Lancet Diabetes Endocrinol)',
        conclusion: 'Aflibercept intravítreo en monoterapia logró una ganancia visual similar a la combinación con TFD a 12 meses en PCV, requiriendo TFD de rescate solo una minoría de casos.',
        fellowshipRelevance: 'Demostró la potente eficacia de Aflibercept en el espectro paquicoroideo neovascular avanzado.'
      }
    ],
    histopathologyAndGenetics: 'En especímenes enucleados y biopsias de ojos paquicoroides: Marcada hipertrofia de las células de músculo liso en las paredes de las vénulas de la capa de Haller, oclusión y pérdida de fenestraciones endoteliales en la coriocapilar con microtrombos de fibrina, y adelgazamiento con atrofia celular del EPR que muestra pérdida de melanosomas y desorganización de uniones intercelulares apicales.',
    surgicalPearls: [
      'Al aplicar Terapia Fotodinámica (PDT) a media fluencia en CSC crónica: Centrar el haz láser spot cubriendo el área hiperfluorescente de la ICGA con un margen de seguridad de 1000 µm; verificar meticulosamente que la energía total administrada no supere los 25 J/cm2 (300 mW/cm2 x 83 s) para evitar la temida complicación de atrofia del EPR foveolar inducida por el láser.',
      'Cuidados Postoperatorios Obligatorios de la TFD: El paciente debe salir del quirófano con gafas de protección solar oscuras con filtro UV total, mangas largas, sombrero de ala ancha y guantes, evitando estrictamente la exposición a la luz solar directa o lámparas halógenas potentes durante 48 horas continuas.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un ejecutivo de 44 años acude derivado por escotoma central y visión ondulada en su ojo derecho de 4 meses de evolución que no ha mejorado espontáneamente. El paciente refiere mucho estrés laboral y que hace 6 meses recibió infiltraciones de triamcinolona en hombro por tendinitis. Su agudeza visual es de 20/40 en OD. El fondo de ojo revela un desprendimiento seroso macular en cúpula con precipitados subretinianos amarillentos. En el EDI-OCT el grosor coroideo subfoveal es de 510 µm en OD y 480 µm en OI, con dilatación masiva de vénulas de la capa de Haller y compresión extrema de la coriocapilar. La ICGA muestra hiperpermeabilidad coroidea en parches en fase media correspondiente a la zona macular. Su médico residente sugiere iniciar bolos de prednisona oral y tratar la mácula con láser micropulso subumbral. ¿Cuál es su juicio crítico razonado de las propuestas del residente, cuál es el diagnóstico unificado dentro del nuevo paradigma y cuál es el tratamiento de elección basado en el ensayo clínico PLACE?',
        answer: '1) Diagnóstico Unificado: Espectro Paquicoroides: Coriorretinopatía Serosa Central (CSC) Crónica/Persistente asociada al uso exógeno de corticoides y personalidad tipo A (con paquicoroides comprobada por SFCT >500 µm e hiperpermeabilidad coroidea en ICGA).\n2) Crítica a la Propuesta del Residente:\n   - La sugerencia de pautar prednisona oral es IATROGÉNICA Y DEVASTADORA: Los corticoides son el factor detonante principal de la patología paquicoroidea; agravarán masivamente la hiperpermeabilidad coroidea provocando desprendimientos bullosos con necrosis del EPR.\n   - La sugerencia del láser micropulso subumbral es SUBÓPTIMA: El ensayo pivotal PLACE demostró de forma concluyente que el láser micropulso es significativamente inferior a la TFD a media fluencia en tasa de resolución anatómica del líquido (29% vs 67%).\n3) Tratamiento de Elección Basado en la Evidencia (PLACE Trial):\n   - Cese inmediato y absoluto de cualquier exposición a corticoides.\n   - TERAPIA FOTODINÁMICA (PDT) CON VERTEPORFINA A MEDIA FLUENCIA (25 J/cm2 guiada por ICGA): Es el único tratamiento que actúa directamente remodelando las paquivénulas enfermas de la capa de Haller, disminuyendo el grosor coroideo y logrando la resolución completa y duradera del líquido subretiniano con restauración visual.',
        trap: 'Administrar corticoides sistémicos a una paquicoroides confundiéndola con VKH o uveítis posterior, o insistir en láser micropulso desconociendo el ensayo PLACE.'
      }
    ]
  }
];


