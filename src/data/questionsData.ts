import { Question } from '../types/ophthalmology';

export const INITIAL_QUESTIONS: Question[] = [
  // CÓRNEA
  {
    id: 'cornea-01',
    subspecialtyId: 'cornea',
    topic: 'Queratitis Infecciosa por Acanthamoeba',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Usuario de lentes de contacto blandas de 24 años consulta por dolor ocular desproporcionado a la biomicroscopía en el ojo derecho de 10 días de evolución. Refiere haber nadado en un lago con sus lentes puestos. En lámpara de hendidura se aprecian infiltrados perineurales radiales (perineuritis radial) y un defecto epitelial punteado sin adelgazamiento estromal.',
    questionText: '¿Cuál es el diagnóstico más probable y cuál es la terapia médica tópica específica de primera línea?',
    options: [
      'Queratitis por Pseudomonas aeruginosa; iniciar Tobramicina fortificada + Ciprofloxacino.',
      'Queratitis por Acanthamoeba; iniciar Polihexametileno biguanida (PHMB 0.02%) o Clorhexidina (0.02%) combinada con BRL (Propamidina).',
      'Queratitis herpética estromal necrotizante; iniciar Aciclovir tópico 3% + Prednisolona 1%.',
      'Queratitis fúngica por Fusarium; iniciar Natamicina tópica al 5% cada hora.'
    ],
    correctIndex: 1,
    explanation: 'El antecedente de uso de lentes de contacto en agua dulce, el dolor ocular severo y desproporcionado a los signos biomicroscópicos, y el hallazgo patognomónico de perineuritis radial (infiltrados siguiendo los nervios corneales) son típicos de Queratitis por Acanthamoeba. El tratamiento requiere agentes amebicidas activos tanto contra trofozoítos como contra formas quísticas, siendo de elección las biguanidas (PHMB 0.02% o clorhexidina 0.02%) solas o combinadas con diamidinas aromáticas (propamidina o hexamidina).',
    clinicalApplication: 'CONDUCTA EN GUARDIA: 1) Suspender inmediatamente el uso de lentes de contacto y guardar estuche/líquido para cultivo. 2) Realizar raspado corneal profundo para tinción con Blanco de Calcoflúor (microscopía de fluorescencia) y cultivo en agar no nutritivo con siembra de E. coli inactivada. 3) Iniciar PHMB o clorhexidina horaria día y noche las primeras 48h. 4) EVITAR CORTICOIDES tópicos en fases iniciales ya que promueven el enquistamiento y empeoran el pronóstico.',
    pearl: 'Dolor desproporcionado + Perineuritis radial en portador de lentes de contacto que expuso los ojos a agua dulce = Acanthamoeba. El cultivo de elección es agar no nutritivo con Escherichia coli.',
    tags: ['Acanthamoeba', 'Lentes de contacto', 'Perineuritis', 'PHMB']
  },
  {
    id: 'cornea-02',
    subspecialtyId: 'cornea',
    topic: 'Distrofia Endotelial de Fuchs y Cirugía de Catarata',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Paciente femenina de 68 años con disminución de visión bilateral peor por las mañanas al despertar, que mejora progresivamente hacia la tarde. A la biomicroscopía se aprecian abundantes guttas centrales con aspecto en "metal batido" y paquimetría central de 640 um con edema estromal matutino incipiente. Presenta además catarata nuclear NO3 NC3.',
    questionText: '¿Cuál es la técnica quirúrgica más adecuada si se decide tratamiento conjunto del cristalino y el endotelio corneal?',
    options: [
      'Queratoplastia penetrante (PKP) clásica combinada con facoemulsificación.',
      'Queratoplastia lamelar anterior profunda (DALK) con implante de LIO en saco.',
      'Procedimiento triple endotelial: Facoemulsificación + Implante de LIO + DMEK (o DSAEK).',
      'Crosslinking corneal de CXL transepitelial para reducir el edema previo a facoemulsificación.'
    ],
    correctIndex: 2,
    explanation: 'En la distrofia de Fuchs con catarata concomitante y descompensación endotelial (paquimetría >620-640 um o edema matutino), el estándar moderno es el procedimiento triple endotelial con DMEK (o DSAEK) y facoemulsificación. La queratoplastia endotelial lamelar reemplaza selectivamente el endotelio disfuncional y la membrana de Descemet, ofreciendo rápida recuperación visual y un riesgo de rechazo significativamente menor (<1-2% en DMEK) en comparación con la queratoplastia penetrante (PKP). DALK reemplaza el estroma y preserva el endotelio, por lo que no sirve en Fuchs.',
    clinicalApplication: 'CONDUCTA EN CONSULTA: 1) Evaluar microscopía especular (densidad endotelial <1000 cél/mm2 y pleomorfismo/polimegatismo marcan alto riesgo). 2) Si la córnea está compensada y se opera solo la catarata, usar viscoelástico dispersivo abundante (Chondroitin sulfato + HPMC - "soft shell technique"), mínima energía de ultrasonido y flujo bajo. 3) Si hay edema matutino franco, programar DMEK combinada.',
    pearl: 'La fluctuación diurna con visión más borrosa en la mañana que mejora con la evaporación durante el día es el síntoma sello del edema estromal endotelial.',
    tags: ['Fuchs', 'DMEK', 'Microscopía especular', 'Guttas']
  },
  {
    id: 'cornea-03',
    subspecialtyId: 'cornea',
    topic: 'Quemadura Ocular Química Aguda',
    difficulty: 'R1 - Inicial',
    clinicalVignette: 'Obrero de 35 años acude a urgencias 20 minutos después de salpicadura accidental con cal viva (hidróxido de calcio, base fuerte) en ojo izquierdo. Refiere dolor ocular intenso y blefaroespasmo. A la exploración rápida se evidencia conjuntiva intensamente pálida con 180 grados de isquemia límbica (blanqueamiento escleral).',
    questionText: '¿Cuál es la primera acción médica obligatoria que debe ejecutarse inmediatamente antes de cualquier otro procedimiento diagnóstico?',
    options: [
      'Instilar corticoides tópicos y medir agudeza visual con optotipo de Snellen.',
      'Irrigación profusa inmediata con solución salina balanceada o suero fisiológico hasta neutralizar pH a 7.0-7.4.',
      'Realizar raspado conjuntival y enviar muestra a microbiología.',
      'Aplicar lente de contacto terapéutico con colirio de autólogo.'
    ],
    correctIndex: 1,
    explanation: 'La quemadura química es una de las pocas emergencias médicas verdaderas en oftalmología en las que el tratamiento precede a la historia clínica y a la agudeza visual. Se debe iniciar irrigación copiosa inmediata (mínimo 2-3 litros de solución salina o Ringer lactato) con eversión del párpado y limpieza de fondos de saco para retirar partículas sólidas de cal. Se monitoriza el pH lagrimal con tiras reactivas hasta alcanzar la neutralidad (7.0 - 7.4), reevaluando 15-30 minutos tras cesar la irrigación.',
    clinicalApplication: 'PROTOCOLO EN GUARDIA: 1) Anestésico tópico + blefarostato + lavado con mínimo 2-3 L. 2) Doble eversión palpebral con torunda húmeda para remover partículas ocultas de álcali (la cal continúa saponificando tejidos si no se retira físicamente). 3) Medir pH con tira reactiva de orina en fondo de saco. 4) Tratamiento médico post-irrigación: Doxiciclina oral (inhibe colagenasas), Vitamina C oral/tópica, antibiótico tópico sin conservantes, esteroides tópicos los primeros 7-10 días (luego suspender para evitar melting corneal), ciclopléjico y citrato sódico.',
    pearl: 'Los álcalis generan necrosis por licuefacción y saponificación lipídica, penetrando profundamente en cámara anterior. La isquemia límbica es el factor pronóstico más crítico.',
    tags: ['Quemadura química', 'Álcali', 'Lavado ocular', 'Isquemia límbica']
  },

  // GLAUCOMA
  {
    id: 'glaucoma-01',
    subspecialtyId: 'glaucoma',
    topic: 'Ataque Agudo de Cierre Angular Primario',
    difficulty: 'R1 - Inicial',
    clinicalVignette: 'Mujer de 62 años hipermétrope acude a la guardia de noche con dolor ocular y periocular derecho severo, cefalea hemicraneal, náuseas, vómitos y halos de colores alrededor de las luces. En el ojo derecho presenta agudeza visual de cuenta dedos, inyección periquerática violácea ("ciliar"), edema corneal epitelial microquístico, pupila en midriasis media arrefléctica y cámara anterior muy estrecha. PIO OD = 54 mmHg.',
    questionText: '¿Cuál es la secuencia terapéutica farmacológica inicial y el tratamiento curativo definitivo una vez aclarada la córnea?',
    options: [
      'Dilatar con ciclopentolato para romper sinequias posteriores y programar trabeculectomía.',
      'Acetazolamida oral/IV + Manitol 20% IV + Hipotensores tópicos (Beta-bloqueante, alfa-2 agonista) + Pilocarpina 2% cuando PIO <30 mmHg; luego Iridotomía Láser Nd:YAG bilateral.',
      'Latanoprost tópico cada 2 horas + Ciprofloxacino colirio + Paracentesis corneal inmediata en lámpara.',
      'Implante inmediato de válvula de Ahmed bajo anestesia general en menos de 2 horas.'
    ],
    correctIndex: 1,
    explanation: 'El cuadro corresponde a un Cierre Angular Primario Agudo. El manejo urgente consiste en frenar la producción de humor acuoso (acetazolamida 500 mg VO/IV, timolol 0.5%, brimonidina 0.15%) y deshidratar el vítreo con agente hiperosmótico (Manitol 20% 1-2 g/kg IV a pasar en 30-45 min). La pilocarpina 2% (miotico) no actúa mientras la PIO sea >30-35 mmHg debido a isquemia del esfínter pupilar; se añade una vez reducida la PIO. El tratamiento definitivo y profiláctico es la Iridotomía Láser periférica (LPI) Nd:YAG en el ojo afecto y profiláctica en el ojo contralateral (por su anatomía predisponente).',
    clinicalApplication: 'CONDUCTA EN GUARDIA: 1) Canalizar vía venosa: Manitol 20% 250-300 ml en infusión rápida + Acetazolamida 500 mg. 2) Instilar gota de Timolol + Brimonidina + Brinzolamida. 3) NUNCA USAR MIDRIÁTICOS (atropina, tropicamida). 4) Proteger riñón/electrolitos: Si el paciente tiene insuficiencia renal severa o insuficiencia cardíaca congestiva, precaución extrema con manitol. 5) Realizar Iridotomía periférica con YAG en ambos ojos en cuanto aclare la córnea.',
    pearl: 'El ojo contralateral en un ataque agudo tiene un riesgo del 50-80% de sufrir un episodio similar en 5 años; la iridotomía profiláctica bilateral es obligatoria.',
    tags: ['Cierre angular', 'Manitol', 'Iridotomía YAG', 'Bloqueo pupilar']
  },
  {
    id: 'glaucoma-02',
    subspecialtyId: 'glaucoma',
    topic: 'Glaucoma Pseudoexfoliativo y Cirugía de Catarata',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Paciente de 74 años remitido para facoemulsificación de catarata en ojo izquierdo. En la lámpara de hendidura se observa material blanquecino fibrilar en el margen pupilar y un patrón en tres zonas sobre la cápsula anterior del cristalino. Tras dilatación se observa facodonesis leve y el ángulo gonioscópico revela pigmentación densa y parcheada con línea de Sampaolesi prominente. PIO OI = 28 mmHg.',
    questionText: '¿Qué complicación intraoperatoria presenta mayor riesgo en este paciente y qué instrumento o insumo quirúrgico debe tenerse disponible en quirófano?',
    options: [
      'Rotura endotelial masiva; disponer de solución hiperosmolar.',
      'Debilidad zonular con diálisis y luxación del saco/cristalino; disponer de anillo de tensión capsular (CTR) y ganchos retractores de iris/cápsula.',
      'Hemorragia expulsiva coroidea por hipertensión venosa epiescleral; disponer de trépanos corneales.',
      'Desprendimiento seroso del epitelio pigmentario; disponer de gas expansible C3F8.'
    ],
    correctIndex: 1,
    explanation: 'El síndrome de pseudoexfoliación (PEX) se caracteriza por el depósito de material fibrilar amiloide-like en tejidos intraoculares, particularmente zónula de Zinn y cápsula anterior. Esto ocasiona debilidad zonular progresiva, facodonesis, mala dilatación pupilar e hipertensión ocular severa. En la cirugía de catarata, existe un riesgo muy elevado de diálisis zonular, rotura capsular posterior y luxación del complejo saco-lente. Por ello, es imperativo contar con anillos de tensión capsular (CTR), retractores capsulares y plan B para fijación escleral de LIO.',
    clinicalApplication: 'CONDUCTA QUIRÚRGICA: 1) Dilatación pupilar con dilatadores mecánicos (ganchos de iris o anillo de Malyugin) si hay midriasis pobre. 2) Capsulorrexis amplia y suave (si es muy pequeña aumenta el estrés zonular durante la faco y favorece fimosis capsular tardía). 3) Hidrodisección delicada. 4) Insertar Anillo de Tensión Capsular (CTR) tan pronto se sospeche diálisis zonular. 5) Seguimiento postoperatorio: vigilar picos de PIO precoces y subluxación tardía del saco años después.',
    pearl: 'La línea de Sampaolesi es una banda de pigmento localizada anterior a la línea de Schwalbe en la gonioscopia; patognomónica de pseudoexfoliación o dispersión pigmentaria.',
    tags: ['Pseudoexfoliación', 'Zónula', 'CTR', 'Línea de Sampaolesi']
  },
  {
    id: 'glaucoma-03',
    subspecialtyId: 'glaucoma',
    topic: 'Interpretación de Campimetría Humphrey 24-2',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Se analiza un campo visual Humphrey 24-2 SITA-Fast de un paciente de 58 años en seguimiento por glaucoma primario de ángulo abierto en ojo derecho. El informe muestra: Pérdidas de fijación 4/15, Falsos positivos 28%, Falsos negativos 4%, Desviación Media (MD) -6.5 dB, PSD 5.2 dB. El mapa de escala de grises muestra un escotoma nasal amplio.',
    questionText: '¿Cuál es la interpretación de la fiabilidad de esta prueba campimétrica y qué conducta debe adoptarse?',
    options: [
      'El estudio es plenamente fiable y confirma progresión glaucomatosa acelerada.',
      'El estudio no es fiable debido a falsos positivos elevados (>15-20%), produciendo un patrón de "gatillo fácil" (white scotoma); debe repetirse la prueba tras re-instruir al paciente.',
      'El estudio no es fiable por las pérdidas de fijación; realizar campimetría de Goldmann manual obligatoria.',
      'El campo visual es normal para la edad; suspender el tratamiento hipotensor.'
    ],
    correctIndex: 1,
    explanation: 'En la campimetría Humphrey computarizada, los Falsos Positivos reflejan pacientes con comportamiento de "gatillo fácil" (presionan el botón cuando no se ha presentado estímulo luminoso). Un porcentaje de falsos positivos superior al 15% (o >20% en versiones clásicas) invalida el examen, artefactando los índices globales (puede simular sensibilidad supranormal o generar patrones espurios). La conducta correcta es no tomar decisiones terapéuticas basadas en un campo no fiable, re-instruir al paciente sobre la técnica y repetirlo.',
    clinicalApplication: 'CRITERIOS DE FIABILIDAD EN CONSULTA: 1) Pérdidas de fijación: <20% (monitoreadas por técnica Heijl-Krakau o gaze tracker). 2) Falsos positivos: <15% (el error más destructivo para el análisis de progresión GPA). 3) Falsos negativos: <25-33% (en defectos glaucomatosos avanzados pueden elevarse fisiológicamente sin restar validez total). 4) Si hay duda de progresión, se requieren 2 o 3 campos consistentes antes de modificar el tratamiento o indicar cirugía.',
    pearl: 'Un exceso de falsos positivos es el error de fiabilidad más crítico porque enmascara la pérdida real de sensibilidad o genera artefactos impredecibles en el mapa de desviación del modelo.',
    tags: ['Campimetría', 'Humphrey', 'Falsos positivos', 'Fiabilidad']
  },

  // RETINA
  {
    id: 'retina-01',
    subspecialtyId: 'retina',
    topic: 'Desprendimiento de Retina Regmatógeno y Reglas de Lincoff',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón miope de 54 años consulta por visión de fotopsias y miodesopsias ("moscas volantes") de 5 días de evolución, seguidas de una "cortina negra" que progresa desde el campo visual temporal inferior en su ojo derecho. En fondo de ojo se evidencia desprendimiento de retina superior temporal bulloso que cruza el meridiano vertical de las 12 horas pero no alcanza la fóvea. Hay presencia de pigmento en vítreo anterior (Signo de Shafer positivo).',
    questionText: 'Según las reglas de Lincoff para desprendimientos de retina regmatógenos, ¿dónde es más probable encontrar la rotura retiniana causal primaria?',
    options: [
      'En el cuadrante nasal inferior a las 5 horas.',
      'En el meridiano de las 12 horas o dentro de 1 hora y media a cada lado a lo largo del borde superior.',
      'En el cuadrante temporal inferior a las 7 horas.',
      'Exclusivamente en el ecuador macular sin relación con la extensión del líquido.'
    ],
    correctIndex: 1,
    explanation: 'Las Reglas de Lincoff son principios topográficos fundamentales para localizar la rotura causal en desprendimientos de retina regmatógenos: 1) DR superior que cruza la línea vertical de las 12:00: la rotura suele estar en las 12:00 o dentro de 1.5 horas de reloj a cada lado del borde superior del desprendimiento. 2) DR temporal o nasal superior: la rotura está en el borde superior dentro de 1.5 horas. 3) DR inferior: el lado más alto del líquido indica el lado donde se ubica la rotura. El signo de Shafer ("polvo de tabaco" = células de EPR en vítreo) confirma origen regmatógeno en >90%.',
    clinicalApplication: 'CONDUCTA EN GUARDIA: 1) Examen meticuloso de retina periférica con oftalmoscopio binocular indirecto (OBI) y depresión escleral de 360 grados con lente de 20D o 28D. 2) Estado macular: Evaluar si la mácula está adherida ("Macula ON") o desprendida ("Macula OFF"). Si es Macula ON, es una URGENCIA quirúrgica para operar en <24 horas antes de que el líquido comprometa la fóvea y preserve la agudeza visual. 3) Reposo relativo y posición de la cabeza para evitar progresión del fluido subretiniano hacia el polo posterior.',
    pearl: 'Mácula ON = Cirugía urgente en menos de 24 horas para preservar la visión central. Mácula OFF = Cirugía semi-urgente (dentro de los primeros 7-10 días tiene resultados visuales similares).',
    tags: ['Desprendimiento de retina', 'Lincoff', 'Shafer', 'Macula ON']
  },
  {
    id: 'retina-02',
    subspecialtyId: 'retina',
    topic: 'Edema Macular Diabético y Anti-VEGF (Protocolo T de DRCR.net)',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Paciente diabético tipo 2 de 59 años (HbA1c 8.2%) consulta por metamorfopsia y pérdida de agudeza visual progresiva en ojo izquierdo. Su mejor agudeza visual corregida (MAVC) es de 20/50 (0.4 decimal). En OCT macular se observa edema macular con compromiso del centro foveal (líquido intrarretiniano y quistes intrarretinianos abundantes, espesor foveal central de 460 um).',
    questionText: 'Según los hallazgos del Protocolo T del DRCR.net, ¿cuál fue la principal conclusión sobre el tratamiento con Anti-VEGF para pacientes con MAVC de 20/50 o peor?',
    options: [
      'El láser focal/en rejilla macular es superior a todos los anti-VEGF en visión y grosor.',
      'Aflibercept demostró mayor ganancia de agudeza visual al año que Bevacizumab y Ranibizumab en ojos con agudeza inicial de 20/50 o peor.',
      'No hubo diferencias estadísticas entre ninguno de los fármacos independientemente de la agudeza inicial.',
      'Los implantes de dexametasona deben ser siempre la primera opción terapéutica sobre cualquier anti-VEGF.'
    ],
    correctIndex: 1,
    explanation: 'El histórico Protocolo T del DRCR Retina Network comparó Aflibercept 2.0 mg, Ranibizumab 0.3 mg y Bevacizumab 1.25 mg en Edema Macular Diabético central. La conclusión capital fue que en pacientes con agudeza visual inicial moderada o baja (20/50 o peor), Aflibercept produjo ganancias de agudeza visual significativamente mayores al año frente a Bevacizumab y Ranibizumab. En pacientes con buena visión inicial (20/40 o mejor), los tres agentes tuvieron resultados similares al año.',
    clinicalApplication: 'CONDUCTA EN CONSULTA: 1) Terapia de primera línea: Inyecciones intravítreas de anti-VEGF (Aflibercept, Ranibizumab, Faricimab o Bevacizumab). 2) Fase de carga: Dosis mensuales hasta alcanzar estabilidad o resolución anatómica en OCT (típicamente 5-6 inyecciones el primer año). 3) Control sistémico: Optimizar HbA1c (<7%), presión arterial y perfil lipídico (los exudados duros aumentan con dislipidemia). 4) Implantes de esteroides (Dexametasona intravítrea Ozurdex): Indicados en pseudofáquicos con contraindicación o falta de respuesta a anti-VEGF.',
    pearl: 'En EMD con agudeza visual basal < 20/50, Aflibercept demostró superioridad funcional al año frente a Bevacizumab y Ranibizumab en el Protocolo T.',
    tags: ['Edema macular', 'Protocolo T', 'Aflibercept', 'Anti-VEGF']
  },
  {
    id: 'retina-03',
    subspecialtyId: 'retina',
    topic: 'Oclusión de la Arteria Central de la Retina (OACR)',
    difficulty: 'R1 - Inicial',
    clinicalVignette: 'Varón hipertenso de 67 años acude a urgencias por pérdida visual súbita, no dolorosa y catastrófica en ojo derecho ocurrida hace 90 minutos (MAVC OD: Cuenta dedos a 30 cm). En el fondo de ojo se observa palidez y edema retiniano blanquecino difuso en el polo posterior con una "mancha rojo cereza" brillante en la fóvea. Hay un defecto pupilar aferente relativo (DPAR) marcado.',
    questionText: '¿Cuál es el mecanismo de la "mancha rojo cereza" y qué sospecha etiológica en pacientes >50 años requiere descartarse de inmediato para salvar el ojo contralateral?',
    options: [
      'Hemorragia foveal por rotura de neovasos; sospechar melanoma coroideo.',
      'La foveola carece de capas internas retinianas edematizadas, permitiendo visualizar la coroides subyacente intacta; en >50 años descartar Arteritis de Células Gigantes (ACG / Horton).',
      'Desprendimiento exudativo seroso del epitelio pigmentario foveal; descartar toxoplasmosis.',
      'Depósito de material lipídico tipo drusa foveal gigante; descartar Stargardt.'
    ],
    correctIndex: 1,
    explanation: 'En la OACR, las capas internas de la retina (células ganglionares y fibras nerviosas) sufren isquemia aguda con edema citotóxico intracelular que se torna blanco lechoso opaco. Dado que la fóvea y foveola carecen de estas capas internas (reciben nutrición directamente de la coriocapilar), la vascularización y pigmento coroideos subyacentes se transparentan, dando el aspecto de "mancha rojo cereza". En pacientes mayores de 50 años, el 5-10% de las OACR son arteríticas secundarias a Arteritis de Células Gigantes (ACG). Descartar ACG es una urgencia vital y visual para evitar ceguera bilateral inmediata.',
    clinicalApplication: 'CONDUCTA INMEDIATA: 1) Si tiempo < 4 horas: maniobras de descompresión (masaje ocular digital intermitente, paracentesis de cámara anterior, acetazolamida IV/oral para intentar movilizar el émbolo). 2) Preguntar síntomas de ACG: Cefalea temporal, claudicación mandibular, dolor en cuero cabelludo, polimialgia reumática. 3) Solicitar ANALÍTICA URGENTE: VSG y Proteína C Reactiva (PCR). Si están elevadas o hay sospecha clínica, iniciar METILPREDNISOLONA 1g IV/día antes de la biopsia de arteria temporal.',
    pearl: 'Una OACR es el equivalente ocular a un ictus isquémico isquémico agudo. Requiere interconsulta con Neurología/Stroke Unit para estudio de arterias carótidas (ecodoppler carotídeo) y ecocardiograma.',
    tags: ['OACR', 'Mancha rojo cereza', 'Arteritis de células gigantes', 'Émbolo']
  },
  {
    id: 'retina-04',
    subspecialtyId: 'retina',
    topic: 'Coriorretinopatía Serosa Central, Paquicoroides y Ensayo PLACE',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 36 años acude por visión borrosa central, micropsia y metamorfopsia en ojo derecho de 4 meses de evolución. En el SD-OCT se observa desprendimiento seroso neurosensorial foveal con grosor coroideo subfoveal aumentado de 510 µm y paquivasos dilatados. Refiere haber recibido betametasona intramuscular hace 1 mes para lumbalgia.',
    questionText: '¿Cuál es la conducta médica respecto a los corticoides y cuál es el tratamiento de elección respaldado por el ensayo clínico PLACE para inducir resolución anatómica completa en este paciente?',
    options: [
      'Aumentar la dosis de corticoides orales a 1 mg/kg/día por sospecha de VKH; el ensayo PLACE recomienda láser micropulso subumbral.',
      'Suspender de inmediato todo corticoide; el ensayo PLACE demostró la superioridad indiscutible de la Terapia Fotodinámica (TFD) a media dosis sobre el láser micropulso subumbral en resolución de fluido y ganancia visual.',
      'Indicar panfotocoagulación con láser térmico directo sobre la foveola; el ensayo PLACE recomienda acetazolamida sistémica.',
      'Realizar vitrectomía pars plana 23G con pelado de ILM de urgencia sin suspender esteroides.'
    ],
    correctIndex: 1,
    explanation: 'En la Coriorretinopatía Serosa Central (CSC), los corticoides (en cualquier vía: tópica, nasal, articular o sistémica) están FORMALMENTE CONTRAINDICADOS porque aumentan la reactividad del lecho vascular coroideo y desestabilizan la barrera del EPR, agravando el cuadro. El ensayo clínico aleatorizado multicéntrico PLACE (Ophthalmology 2018) comparó TFD a media dosis con verteporfina frente a láser micropulso subumbral en CSC crónica, demostrando una superioridad rotunda y estadísticamente significativa de la TFD a media dosis en reabsorción completa de líquido subretiniano (67.2% vs 28.8%, p<0.001).',
    clinicalApplication: 'CONDUCTA CLÍNICA: 1) Anamnesis farmacológica dirigida a descartar corticoides ocultos (inhaladores, pomadas para eccema, gotas óticas). 2) Pacientes crónicos (>3 meses) o con compromiso visual foveal severo: Indicar Terapia Fotodinámica con Verteporfina a MEDIA DOSIS (3 mg/m², fluencia 50 J/cm², 83 s). 3) Protección estricta contra la luz solar durante 48 horas post-infusión.',
    pearl: 'Los corticoides son el enemigo número uno de la Coriorretinopatía Serosa Central: suspenderlos de inmediato. En formas crónicas, la TFD a media dosis es el estándar de oro según el ensayo PLACE.',
    tags: ['CSC', 'Paquicoroides', 'TFD media dosis', 'PLACE Trial', 'Corticoides contraindicados']
  },
  {
    id: 'retina-05',
    subspecialtyId: 'retina',
    topic: 'Agujero Macular de Espesor Total y Técnica de Flap Invertido de ILM',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Mujer de 66 años consulta por escotoma central y metamorfopsia en ojo izquierdo de 3 meses. El test de Watzke-Allen es positivo con agudeza de 20/125. El SD-OCT macular muestra un agujero macular de espesor total con diámetro mínimo foveal de 530 µm (Grande según la clasificación IVTS) con quistes intrarretinianos en los bordes.',
    questionText: 'Para agujeros maculares grandes (>400 µm), ¿qué técnica quirúrgica demostró aumentar significativamente la tasa de cierre anatómico de ~70-80% a >95% en comparación con el pelado simple de ILM?',
    options: [
      'Inyección intravítreas de anti-VEGF mensual sin vitrectomía.',
      'Técnica de Flap Invertido de la Membrana Limitante Interna (Inverted ILM Flap de Michalewska).',
      'Fotocoagulación con láser de argón confluente en el borde del agujero foveolar.',
      'Implantación de válvula de Ahmed macular con suturas esclerales.'
    ],
    correctIndex: 1,
    explanation: 'Para agujeros maculares de espesor total grandes (>400 µm según el International Vitreomacular Traction Study - IVTS), el pelado simple convencional de la membrana limitante interna (ILM) tiene una tasa de falla de cierre primario o reapertura del 20-30%. Zofia Michalewska y colaboradores (Ophthalmology 2010) diseñaron la técnica del "Flap Invertido de ILM" (Inverted ILM Flap): se despega un colgajo de ILM teñido con azul brillante dejando un puente o charnela adherido al borde foveal, que luego se voltea y se introduce doblado dentro del defecto foveolar. Este colgajo actúa como un andamio biológico sobre el cual proliferan las células gliales de Müller, logrando tasas de cierre superiores al 95-98%.',
    clinicalApplication: 'CONDUCTA QUIRÚRGICA: 1) Vitrectomía Pars Plana 25G con tinción con Azul Brillante G (Brilliant Blue G). 2) Confección meticulosa del flap invertido sin aspirar cerca de la foveola durante el intercambio gas-aire. 3) Tamponamiento con gas expansible SF6 20% o C3F8 14%. 4) Postura prona estricta ("face-down") durante 3-5 días. 5) Advertencia obligatoria: Prohibido viajar en avión o someterse a anestesia con óxido nitroso mientras exista burbuja de gas intraocular.',
    pearl: 'En agujeros maculares grandes (>400 µm), el flap invertido de ILM (Michalewska) es la técnica de elección para garantizar el cierre primario.',
    tags: ['Agujero Macular', 'IVTS', 'Flap Invertido', 'Michalewska', 'Gas C3F8']
  },
  {
    id: 'retina-06',
    subspecialtyId: 'retina',
    topic: 'DMAE Seca, Atrofia Geográfica y Vía del Complemento',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Paciente de 74 años con DMAE no exudativa presenta en FAF una lesión atrófica hipoautofluorescente confluente de 2.1 mm² en ojo derecho que cumple criterios de cRORA (Complete RPE and Outer Retinal Atrophy) respetando el centro de la fóvea por 150 µm (foveal sparing). El paciente es fumador activo de 1 paquete al día.',
    questionText: '¿Cuál es la recomendación nutricional correcta según el estudio AREDS-2 y qué mecanismo poseen los nuevos tratamientos aprobados por FDA para atrofia geográfica?',
    options: [
      'Prescribir la fórmula AREDS original con altas dosis de Betacaroteno; no existen fármacos aprobados.',
      'Prescribir la fórmula AREDS-2 reemplazando el betacaroteno por Luteína (10 mg) y Zeaxantina (2 mg) para evitar el riesgo de cáncer de pulmón; los nuevos fármacos (Pegcetacoplán y Avacincaptad) son inhibidores de la cascada del complemento (C3 y C5).',
      'Indicar inyecciones mensuales de bevacizumab preventivo para evitar que la atrofia se expanda.',
      'Indicar suplementación masiva con Vitamina A 50,000 UI diarias.'
    ],
    correctIndex: 1,
    explanation: 'El ensayo landmark AREDS-2 (JAMA 2013) demostró que en fumadores o exfumadores el Betacaroteno aumenta significativamente el riesgo de cáncer de pulmón. Sustituir el betacaroteno por carotenoides maculares (Luteína 10 mg + Zeaxantina 2 mg) mantiene la protección contra la progresión a formas avanzadas de DMAE eliminando el riesgo oncogénico. Por su parte, la Atrofia Geográfica está mediada por la hiperactivación de la cascada del complemento: Pegcetacoplán (Syfovre, inhibidor de C3) y Avacincaptad pegol (Izervay, inhibidor de C5) demostraron en ensayos Fase 3 enlentecer la tasa de expansión de la atrofia en un 18-30% anual.',
    clinicalApplication: 'CONSEJERÍA AL PACIENTE: 1) Los inhibidores del complemento no mejoran la agudeza visual ni regeneran fotorreceptores ya perdidos; su meta es frenar el avance para postergar el compromiso de la foveola. 2) Advertir en el consentimiento el riesgo de inducir Neovascularización Macular Exudativa secundaria (7-12%), que requerirá terapia combinada con anti-VEGF.',
    pearl: 'En DMAE intermedia o avanzada en fumadores: NUNCA usar betacaroteno (usar AREDS-2 con Luteína/Zeaxantina). Pegcetacoplán inhibe C3 y Avacincaptad inhibe C5.',
    tags: ['Atrofia Geográfica', 'AREDS-2', 'Pegcetacoplán', 'Avacincaptad', 'Complemento']
  },
  {
    id: 'retina-07',
    subspecialtyId: 'retina',
    topic: 'Desprendimiento de Retina Traccional Diabético y Fenómeno «Crunch»',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Paciente de 50 años con diabetes mellitus mal controlada presenta un desprendimiento de retina traccional (DRT) con bandas fibrovasculares gruesas en ambas arcadas y tracción foveal inminente. El médico tratante programa vitrectomía pars plana e indica una inyección de Bevacizumab como coadyuvante prequirúrgico para disminuir el sangrado intraoperatorio.',
    questionText: '¿Cuál es la ventana temporal óptima para realizar la vitrectomía pars plana tras la inyección del anti-VEGF y qué complicación devastadora ocurre si se retrasa la cirugía más de 7 a 10 días?',
    options: [
      'Operar a las 4 a 6 semanas; el retraso induce endoftalmitis micótica espontánea.',
      'Operar estrictamente entre 3 y 5 días post-inyección; si se retrasa, ocurre el fenómeno de "crunch macular diabético" con fibrosis acelerada, contracción violenta de membranas y desgarros retinianos masivos.',
      'Operar en las primeras 2 horas post-inyección; el retraso genera glaucoma facolítico.',
      'No se debe operar jamás; el anti-VEGF es el tratamiento definitivo curativo del DRT.'
    ],
    correctIndex: 1,
    explanation: 'El pretratamiento con anti-VEGF (Bevacizumab 1.25 mg intravítreo) previo a vitrectomía en Retinopatía Diabética Proliferativa avanzada induce regresión y cierre de los vasos inmaduros de los penachos neovasculares, transformando membranas hemorrágicas sangrantes en tejido fibrótico avascular, facilitando enormemente la delaminación con escaso sangrado. Sin embargo, la supresión brusca de VEGF gatilla una rápida transdiferenciación miofibroblástica con fibrosis y contracción cicatrizal acelerada. Si la cirugía se demora más allá de 7 a 10 días, esta contracción violenta tracciona la retina foveal, provocando el llamado "síndrome de crunch macular" con desprendimiento traccional masivo, agujeros maculares traccionales o desgarros retinianos iatrogénicos irreversibles. La ventana óptima es de 3 a 5 días.',
    clinicalApplication: 'REGLA QUIRÚRGICA EN RETINA DIABÉTICA: 1) Nunca inyectar anti-VEGF antes de una vitrectomía por DRT si no se tiene una fecha quirúrgica garantizada en los siguientes 3 a 5 días. 2) Durante la vitrectomía: Delaminación paralela a los vasos retinianos para evitar desgarros iatrogénicos.',
    pearl: 'En DRT diabético, la ventana quirúrgica tras anti-VEGF preoperatorio es estrictamente de 3 a 5 días. Retrasar la cirugía precipita el catastrófico fenómeno de "crunch macular".',
    tags: ['DRT Diabético', 'Fenómeno Crunch', 'Vitrectomía', 'Bevacizumab', 'Delaminación']
  },
  {
    id: 'retina-08',
    subspecialtyId: 'retina',
    topic: 'Retinopatía del Prematuro (ROP): Criterios ETROP Tipo 1 y Anti-VEGF',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Recién nacido de 26 semanas de gestación con peso al nacer de 820 gramos es examinado en UCI Neonatal a las 33 semanas PMA. La oftalmoscopía indirecta con depresión escleral revela en ojo derecho neovascularización retiniana moderada sobre una cresta en Zona I con dilatación y tortuosidad vascular severa de las arcadas en el polo posterior (Plus disease).',
    questionText: 'Según las guías del ensayo ETROP, ¿qué clasificación de gravedad tiene este cuadro y cuál es la terapia de primera línea preferida según los ensayos BEAT-ROP y RAINBOW?',
    options: [
      'ROP Tipo 2; requiere observación semanal sin tratamiento.',
      'ROP Tipo 1 (indicación mandatoria de tratamiento en <72h); la inyección intravítrea de anti-VEGF (Ranibizumab o Bevacizumab) es de elección en Zona I por menor recurrencia y preservación del campo visual frente al láser.',
      'Estadio 5 de ROP; requiere enucleación primaria del globo ocular.',
      'Cicatrización espontánea completa; dar de alta al paciente sin controles.'
    ],
    correctIndex: 1,
    explanation: 'El ensayo multicéntrico ETROP (Early Treatment for ROP) definió como ROP Tipo 1 (que exige tratamiento obligatorio en menos de 48-72 horas para prevenir desprendimiento de retina) a: 1) Zona I con cualquier estadio y Plus disease; 2) Zona I, Estadio 3 sin Plus; 3) Zona II, Estadio 2 o 3 con Plus disease. En Zona I, el ensayo BEAT-ROP (NEJM 2011) demostró una superioridad contundente del anti-VEGF (Bevacizumab 0.625 mg) sobre la fotocoagulación con láser diodo convencional (recurrencia 6% vs 42%, p=0.002). El ensayo RAINBOW (Lancet 2019) validó el uso de Ranibizumab 0.2 mg con excelente perfil de seguridad sistémica.',
    clinicalApplication: 'ALERTA DE SEGUIMIENTO EN ROP: Los neonatos tratados con anti-VEGF requieren un seguimiento ambulatorio muy prolongado (hasta las 55-65 semanas PMA), ya que la retina periférica inmadura puede presentar reactivación tardía semanas después de que el fármaco se elimina del vítreo.',
    pearl: 'Criterio ETROP ROP Tipo 1 en Zona I: El anti-VEGF es de primera elección sobre el láser (BEAT-ROP y RAINBOW), pero exige vigilancia prolongada hasta >60 semanas PMA.',
    tags: ['ROP', 'ETROP Tipo 1', 'BEAT-ROP', 'RAINBOW', 'Anti-VEGF neonatal']
  },
  {
    id: 'retina-09',
    subspecialtyId: 'retina',
    topic: 'Distrofias Hereditarias de Retina: Stargardt (ABCA4) y Terapia Génica (Luxturna)',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Un paciente de 15 años presenta disminución bilateral de agudeza visual central, discromatopsia y en el fondo de ojo se aprecian flecks pisciformes blanco-amarillentos parafoveales con lesión atrófica en bronce bruñido. La angiografía con fluoresceína revela el patognomónico "silencio coroideo" (Dark Choroid). La secuenciación NGS confirma mutaciones bialélicas en el gen ABCA4.',
    questionText: '¿Qué suplemento nutricional común está TERMINANTEMENTE CONTRAINDICADO en este paciente con enfermedad de Stargardt y por qué mecanismo fisiopatológico?',
    options: [
      'Suplementación con Luteína; porque induce depósitos cristalinos foveales.',
      'Suplementación con Vitamina A (retinol/betacarotenos); porque alimenta el ciclo visual hiperactivo acelerando la formación del dímero citotóxico A2E y lipofuscina que destruye el EPR.',
      'Suplementación con Vitamina C; porque reduce la fagocitosis de conos foveales.',
      'Suplementación con Zinc; porque inhibe la isomerasa RPE65.'
    ],
    correctIndex: 1,
    explanation: 'En la Enfermedad de Stargardt (STGD1), la deficiencia de la proteína transportadora ABCA4 impide evacuar el N-retinilideno-PE de los discos de los fotorreceptores tras el blanqueamiento visual. Este sustrato se condensa espontáneamente formando el fluoróforo citotóxico A2E (componente principal de la lipofuscina). La suplementación con Vitamina A o sus precursores (betacaroteno) está FORMALMENTE PROHIBIDA porque suministra sustrato adicional que acelera la cascada de producción de A2E y la muerte celular apoptótica del EPR. El "silencio coroideo" (Dark Choroid) en la FAG se debe a que la densa lipofuscina acumulada en el EPR bloquea la longitud de onda de excitación azul, impidiendo la visualización de la coriocapilar.',
    clinicalApplication: 'DISTROFIAS Y TERAPIA GÉNICA: 1) Prohibir multivitamínicos con Vitamina A en Stargardt; prescribir gafas con filtro UV y ámbar. 2) Si las pruebas genéticas identifican mutaciones bialélicas en RPE65 (en Amaurosis Congénita de Leber o RP20) con células retinianas viables residuales, el paciente es candidato a Voretigene Neparvovec (Luxturna), la primera terapia génica viral (AAV2) aprobada in vivo que restaura el ciclo visual.',
    pearl: 'Enfermedad de Stargardt (ABCA4): Prohibición absoluta de Vitamina A (acelera la acumulación letal de lipofuscina A2E). En mutaciones bialélicas de RPE65: Terapia génica curativa con Luxturna.',
    tags: ['Stargardt', 'ABCA4', 'Vitamina A contraindicada', 'Silencio Coroideo', 'Luxturna', 'RPE65']
  },

  // CRISTALINO Y CATARATA
  {
    id: 'catarata-01',
    subspecialtyId: 'catarata',
    topic: 'Rotura Capsular Posterior en Facoemulsificación',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Durante la facoemulsificación de una catarata nuclear densa en un paciente de 72 años, el residente nota una repentina profundización de la cámara anterior, pérdida momentánea del seguimiento nuclear y el fragmento nuclear remanente se inclina hacia el vítreo.',
    questionText: '¿Cuál es la primera maniobra obligatoria que debe realizar el cirujano en ese instante exacto para evitar la caída total del núcleo y tracción vitreorretiniana?',
    options: [
      'Retirar rápidamente la pieza de ultrasonido de la cámara anterior para inspeccionar la herida.',
      'Mantener la punta del facoemulsificador en posición estática sin aspirar, e inyectar viscoelástico dispersivo a través de la paracentesis antes de retirar la pieza de mano.',
      'Aumentar la aspiración y el vacío al máximo para rescatar el fragmento nuclear del fondo vítreo.',
      'Cerrar la incisión principal con nylon 10-0 y abortar la cirugía sin vitrectomía.'
    ],
    correctIndex: 1,
    explanation: 'La regla de oro ante la rotura de la cápsula posterior (RCP) es NUNCA retirar la pieza de mano bruscamente. Si se retira la pieza de mano con la cámara anterior sin soporte, la presión intraocular cae bruscamente a cero, el humor vítreo se prolapsa masivamente hacia la cámara anterior, arrastrando los fragmentos cristalinianos hacia la cavidad vítrea y generando tracción vitreorretiniana que puede causar roturas o desprendimiento de retina. Se debe mantener la punta estática e inyectar viscoelástico dispersivo para presurizar la cámara antes de salir.',
    clinicalApplication: 'MANEJO QUIRÚRGICO DE RCP: 1) Inyectar OVD dispersivo antes de retirar la pieza. 2) Evaluar fragmentos: si el núcleo ya cayó en vítreo profundo, NO intentar "pescarlo" a ciegas con el faco; dejarlo para vitrectomía pars plana por retinólogo. 3) Vitrectomía anterior bimanual con corte alto (evitar tracción) a través de paracentesis dedicadas. 4) Limpiar incisión de vítreo (verificar con triamcinolona intracameral). 5) Evaluar soporte para LIO: Si hay soporte anterior adecuado -> LIO de 3 piezas en sulcus (con reducción de dioptría según regla empírica) o captura óptica.',
    pearl: 'La tinción con triamcinolona acetónido intracameral diluida es la herramienta diagnóstica definitiva para visualizar bandas vítreas invisibles en cámara anterior y asegurar que las heridas queden libres.',
    tags: ['Rotura capsular', 'Facoemulsificación', 'Vitrectomía anterior', 'Triamcinolona']
  },
  {
    id: 'catarata-02',
    subspecialtyId: 'catarata',
    topic: 'Endoftalmitis Aguda Postquirúrgica (Estudio EVS)',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Paciente de 70 años acude al 4º día postoperatorio de facoemulsificación con implante de LIO por dolor ocular intenso, ojo rojo y pérdida marcada de visión en el ojo intervenido. A la exploración: MAVC es Percepción de Luz (PL), edema corneal marcado, hipopion de 2 mm en cámara anterior y opacidad vítrea densa que no permite visualizar el fondo de ojo.',
    questionText: 'Según las conclusiones del Endophthalmitis Vitrectomy Study (EVS), ¿cuál es la conducta terapéutica indicada dada la agudeza visual de este paciente?',
    options: [
      'Únicamente colirios de vancomicina y ceftazidima cada hora sin procedimientos invasivos.',
      'Vitrectomía pars plana inmediata combinada con inyección de antibióticos intravítreos (Vancomicina + Ceftazidima).',
      'Punción vítrea diagnóstica simple e inyección de antibióticos sin vitrectomía.',
      'Extracción del lente intraocular y lavado de cámara anterior exclusivamente.'
    ],
    correctIndex: 1,
    explanation: 'El Endophthalmitis Vitrectomy Study (EVS) estableció una pauta clara y de alto rendimiento en exámenes: En endoftalmitis postquirúrgica aguda con agudeza visual de Percepción de Luz (PL) o peor, la Vitrectomía Pars Plana inmediata produce una probabilidad tres veces mayor de lograr una agudeza visual final de 20/40 o mejor en comparación con la punción vítrea con inyección ("tap and inject"). Si la visión inicial es Movimiento de Manos (MM) o mejor, la punción vítrea con inyección intravítrea tiene resultados equivalentes a la vitrectomía.',
    clinicalApplication: 'PROTOCOLO DE ENDOFTALMITIS AGUDA: 1) Visión PL o peor -> Quirófano para Vitrectomía Pars Plana inmediata. 2) Dosis antibióticas intravítreas empíricas: Vancomicina 1.0 mg / 0.1 mL (cubre Gram positivos, incluido MRSA) + Ceftazidima 2.25 mg / 0.1 mL (o Amikacina 0.4 mg/0.1 mL en alérgicos a betalactámicos para Gram negativos como Pseudomonas). 3) Toma de muestra para Gram y cultivo con antibiograma. 4) Dexametasona intravítrea 0.4 mg/0.1 mL coadyuvante.',
    pearl: 'EVS: Visión PL o peor = Vitrectomía Pars Plana de urgencia. Visión MM o mejor = Punción e inyección intravítreas de antibióticos.',
    tags: ['Endoftalmitis', 'EVS', 'Vancomicina', 'Ceftazidima', 'Vitrectomía']
  },
  {
    id: 'catarata-03',
    subspecialtyId: 'catarata',
    topic: 'Biometría y Cálculo de LIO en Ojos Post-LASIK Miópico',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 59 años acude para facoemulsificación en ojo derecho. Presenta antecedente de LASIK miópico bilateral realizado hace 18 años (-6.00 D). La biometría óptica estándar reporta una queratometría media de K = 38.25 D y longitud axial de 26.10 mm. Si el cirujano utiliza una fórmula de vergencia de 3ª generación estándar (SRK/T) ingresando directamente este valor K del queratómetro:',
    questionText: '¿Cuál es el error refractivo postoperatorio esperado y cuál es la razón biométrica subyacente?',
    options: [
      'Sorpresa miópica severa, porque la ablación corneal aumenta el índice de refracción estromal.',
      'Sorpresa hipermetrópica imprevista, porque el queratómetro estándar asume un índice refractivo corneal ficticio de 1.3375 sobreestimando el poder corneal neto y subestimando la posición efectiva de la lente (ELP).',
      'Emetropía perfecta, ya que la longitud axial de 26.10 mm compensa el aplanamiento corneal anterior.',
      'Astigmatismo irregular agudo con pérdida de más de 4 líneas de visión corregida.'
    ],
    correctIndex: 1,
    explanation: 'El cálculo de LIO post-LASIK miópico con fórmulas tradicionales de 3ª generación (SRK/T, Holladay 1) produce invariablemente una SORPRESA HIPERMETRÓPICA (el paciente queda hipermétrope con lente de potencia insuficiente). Esto obedece a dos factores: 1) El queratómetro estándar mide sólo el radio anterior y asume una relación fija cara anterior/posterior (índice 1.3375). Al aplanar la cara anterior con el láser, la relación se rompe y el queratómetro sobreestima el poder dióptrico de la córnea; 2) Las fórmulas de 3ª generación usan la K plana para predecir la posición efectiva de la lente (ELP), asumiendo erróneamente una cámara anterior muy plana y prediciendo que el LIO quedará más anterior de lo real. Para evitarlo, deben usarse fórmulas dedicadas como Barrett True-K o Kane Post-Refractive.',
    clinicalApplication: 'PERLA CLÍNICA: En todo paciente con antecedente de LASIK/PRK miópico, emplear la fórmula Barrett True-K (disponible en el calculador online ASCRS) o Kane post-refractive y tecnologías que midan directamente la cara corneal posterior (Total Keratometry con Swept-Source OCT).',
    pearl: 'Fórmulas clásicas post-LASIK miópico = SORPRESA HIPERMETRÓPICA. El estándar de oro es la fórmula Barrett True-K.',
    tags: ['Biometría', 'Post-LASIK', 'Barrett True-K', 'Sorpresa hipermetrópica']
  },
  {
    id: 'catarata-04',
    subspecialtyId: 'catarata',
    topic: 'Síndrome de Iris Flácido Intraoperatorio (IFIS) por Tamsulosina',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 73 años programado para facoemulsificación en ojo izquierdo. En la anamnesis refiere tomar tamsulosina 0.4 mg/día desde hace 5 años por hipertrofia prostática benigna. El urólogo suspendió la tamsulosina 5 días antes de la intervención a petición del paciente.',
    questionText: '¿Cuál es la conducta y consideración perioperatoria más acertada según las guías ASCRS/AAO?',
    options: [
      'La suspensión de la tamsulosina por 5 días previene completamente el IFIS, permitiendo operar con técnica habitual sin dispositivos mecánicos.',
      'Suspender la tamsulosina es ineficaz debido a la atrofia permanente del músculo dilatador del iris; se debe advertir el riesgo, inyectar fenilefrina intracameral libre de conservantes y tener disponible un anillo de soporte pupilar de Malyugin.',
      'Cancelar la cirugía definitivamente e indicar únicamente tratamiento médico hipotensor.',
      'Realizar esfinterotomías radiales múltiples de 360 grados antes de iniciar la capsulorrexis.'
    ],
    correctIndex: 1,
    explanation: 'Los antagonistas alfa-1A adrenérgicos como la tamsulosina y silodosina provocan no sólo relajación farmacológica sino atrofia fibrilar progresiva e irreversible del músculo dilatador del iris. Por ello, suspender el fármaco días o semanas antes NO previene el síndrome de iris flácido intraoperatorio (IFIS: estroma ondeante, tendencia al prolapso por incisiones y miosis progresiva) y puede precipitar una retención urinaria aguda. El protocolo exige preparar fenilefrina/lidocaína intracameral libre de conservantes (Epi-Shugarcaine), viscoelástico cohesivo pesado (Healon5/GV) y dispositivos de soporte pupilar mecánico como el Anillo de Malyugin.',
    clinicalApplication: 'TRÍADA DE IFIS DE CHANG-CAMPBELL: 1) Estroma iridiano ondulante y flácido; 2) Prolapso iridiano espontáneo hacia incisiones corneales; 3) Miosis pupilar progresiva intraoperatoria. MANEJO: Fenilefrina intracameral 1.5% sin conservantes + incisiones corneales más largas y anteriores + Anillo de Malyugin de 6.25 o 7.0 mm.',
    pearl: 'La tamsulosina causa atrofia muscular iridiana permanente: suspenderla no evita el IFIS. La profilaxis se realiza en quirófano con fenilefrina intracameral y Anillo de Malyugin.',
    tags: ['IFIS', 'Tamsulosina', 'Malyugin', 'Midriasis mecánica']
  },
  {
    id: 'catarata-05',
    subspecialtyId: 'catarata',
    topic: 'Catarata Polar Posterior: Prevención de Rotura Capsular',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Paciente de 42 años acude para valoración de catarata congénita polar posterior densa en ojo derecho con agudeza visual de 20/70. En la lámpara de hendidura se aprecia una opacidad circular blanco-nacarada en polo posterior con aspecto en diana y adherencia íntima a la cápsula posterior.',
    questionText: '¿Cuál de las siguientes maniobras quirúrgicas está TERMINANTEMENTE CONTRAINDICADA durante la cirugía de esta catarata?',
    options: [
      'Capsulorrexis circular continua curvilínea de 5.0 mm.',
      'Hidrodelineación cuidadosa para separar el endonúcleo del epinúcleo formando el "anillo dorado".',
      'Hidrodissección cortical vigorosa con cánula plana para movilizar el núcleo.',
      'Vitrectomía anterior bimanual pars plana si ocurre rotura capsular posterior.'
    ],
    correctIndex: 2,
    explanation: 'En la catarata polar posterior, la cápsula posterior subyacente está ausente congénitamente o extremadamente adelgazada en más del 25-35% de los casos, estando la placa unida directamente a la hialoides anterior. La HIDRODISSECCIÓN está ABSOLUTAMENTE CONTRAINDICADA porque la onda de fluido a presión ("fluid wave") se acumula contra la placa inmóvil y rompe catastróficamente la cápsula posterior ("blowout"), luxando el núcleo hacia la cavidad vítrea. La maniobra mandatoria es la HIDRODELINEACIÓN pura (formación del "anillo dorado" o golden ring) para independizar el núcleo central dejando una copa epinuclear protectora.',
    clinicalApplication: 'TÉCNICA EN CATARATA POLAR POSTERIOR: 1) NO HIDRODISSECCIÓN. 2) Hidrodelineación pura (golden ring). 3) Emulsificación a bajo vacío y flujo dentro del epinúcleo. 4) Limpieza cortical periférica cuidadosa; la placa central densa se deja para el final. 5) Si queda placa adherida con cápsula íntegra, no forzar su aspiración: dejarla in situ para posterior capsulotomía con Nd:YAG.',
    pearl: 'Catarata Polar Posterior = NUNCA hidrodissección. Siempre realizar HIDRODELINEACIÓN pura con formación del anillo dorado.',
    tags: ['Catarata polar posterior', 'Hidrodelineación', 'Rotura capsular', 'Golden ring']
  },
  {
    id: 'catarata-06',
    subspecialtyId: 'catarata',
    topic: 'Síndrome Tóxico del Segmento Anterior (TASS) vs Endoftalmitis',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'A las 14 horas de una facoemulsificación sin complicaciones aparentes, una paciente de 67 años acude a primera revisión postoperatoria. Refiere molestia leve sin dolor severo. A la exploración presenta agudeza visual de cuenta dedos a 2 metros, edema corneal estromal difuso de limbo a limbo, cámara anterior con Tyndall celular 4+ y un hipopion estéril de 1.5 mm. El vítreo se observa totalmente transparente en el fondo de ojo y en ecografía B.',
    questionText: '¿Cuál es el diagnóstico más probable, su etiología típica y la pauta de tratamiento inmediata?',
    options: [
      'Endoftalmitis aguda por Pseudomonas; requiere vitrectomía pars plana de urgencia y colirios de ceftazidima.',
      'Síndrome Tóxico del Segmento Anterior (TASS) por endotoxinas o residuos químicos del instrumental/autoclave; tratamiento con colirio de Acetato de Prednisolona 1% cada hora y seguimiento estricto a las 12-24 horas.',
      'Rechazo endotelial de injerto; requiere bolos de metilprednisolona intravenosa 1 g/día.',
      'Descompensación corneal por queratopatía bullosa; programar queratoplastia DMEK diferida.'
    ],
    correctIndex: 1,
    explanation: 'El debut hiperagudo (<12-24 horas postoperatorias), el edema corneal característico "de limbo a limbo" (por toxicidad endotelial química generalizada), el hipopion estéril, la escasez de dolor terebrante y la ausencia de vitrítis posterior definen un Síndrome Tóxico del Segmento Anterior (TASS). Se debe a contaminación química inadvertida durante la cirugía (endotoxinas bacterianas termoestables del agua del autoclave, detergentes enzimáticos no aclarados o conservantes en fármacos). Responde rápida y favorablemente a corticoides tópicos intensivos (Prednisolona 1% cada hora). Si el cuadro empeora o aparece vitrítis a las 24 horas, debe tratarse como endoftalmitis infecciosa.',
    clinicalApplication: 'DIAGNÓSTICO DIFERENCIAL TASS VS ENDOFTALMITIS: 1) Inicio: TASS <12-24 horas vs Endoftalmitis día 3-7. 2) Córnea: TASS edema difuso de limbo a limbo vs Endoftalmitis edema perincisional. 3) Dolor: TASS leve/moderado vs Endoftalmitis severo/pulsátil. 4) Vítreo: TASS libre de vitritis vs Endoftalmitis con opacidad vítrea densa. 5) Respuesta: TASS responde drásticamente a corticoides.',
    pearl: 'TASS: Aparición en <24h con edema de limbo a limbo y vítreo claro. Causa: endotoxinas o detergentes en autoclave. Tratamiento: Prednisolona horaria.',
    tags: ['TASS', 'Endoftalmitis', 'Edema corneal', 'Esterilización']
  },
  {
    id: 'catarata-07',
    subspecialtyId: 'catarata',
    topic: 'Edema Macular Pseudofáquico (Síndrome de Irvine-Gass) y Ensayo PREMED',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Paciente diabético de 66 años sin retinopatía diabética previa acude a la 5ª semana post-facoemulsificación por disminución indolora de visión a 20/50. En el SD-OCT macular se observa engrosamiento foveal con quistes intrarretinianos hiporreflectivos en la capa plexiforme externa (capa de Henle). En la angiografía fluoresceínica se evidencia el clásico patrón en pétalos de flor con hiperfluorescencia del nervio óptico.',
    questionText: '¿Cuál es el mecanismo fisiopatológico del síndrome de Irvine-Gass y qué demostró el ensayo multicéntrico PREMED respecto a su profilaxis y manejo?',
    options: [
      'Isquemia coroidea foveal; el ensayo PREMED demostró que la monoterapia con anti-VEGF mensual es obligatoria.',
      'Liberación de prostaglandinas inducida por la cirugía que difunden a través del vítreo y rompen la barrera hematorretiniana interna en la capa de Henle; el ensayo PREMED demostró la superioridad sinérgica de combinar AINE tópico + Corticoide tópico frente a cualquiera de ellos en monoterapia.',
      'Oclusión de la arteria ciliorretiniana; el ensayo PREMED contraindica formalmente el uso de corticoides perioculares.',
      'Tracción vitreomacular mecánica pura que siempre exige vitrectomía pars plana en la primera semana.'
    ],
    correctIndex: 1,
    explanation: 'El síndrome de Irvine-Gass es la causa más frecuente de pérdida visual inesperada tras facoemulsificación (pico entre la 4ª y 6ª semana). La manipulación del polo anterior estimula la síntesis de prostaglandinas mediante las enzimas COX-1 y COX-2, las cuales difunden posteriormente hacia la retina, alterando las uniones estrechas de los capilares perifoveales y acumulando exudado seroso en la capa de Henle (aspecto en pétalos de flor). El ensayo europeo PREMED (ESCRS) demostró de manera concluyente que la combinación de AINE tópico (nepafenaco/bromfenaco) más Corticoide tópico (dexametasona/prednisolona) es significativamente superior a la monoterapia para prevenir el edema macular cistoide pseudofáquico.',
    clinicalApplication: 'MANEJO DE IRVINE-GASS: 1) Primera línea: AINE tópico (Bromfenaco 0.09% c/12h o Nepafenaco 0.1-0.3%) + Corticoide tópico potente (Prednisolona 1% c/6h) durante 8-12 semanas. 2) Suspender formalmente cualquier análogo de prostaglandina (Latanoprost). 3) Casos resistentes: Triamcinolona subtenoniana posterior o implante intravítreo de Dexametasona (Ozurdex).',
    pearl: 'Ensayo PREMED: La combinación de AINE tópico + Corticoide tópico ofrece una sinergia protectora superior frente al edema macular pseudofáquico de Irvine-Gass.',
    tags: ['Irvine-Gass', 'PREMED', 'CME', 'AINEs', 'Capa de Henle']
  },
  {
    id: 'catarata-08',
    subspecialtyId: 'catarata',
    topic: 'Fijación Escleral sin Sutura con Doble Aguja de Yamane',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Paciente de 77 años con pseudoexfoliación capsular (PEX) y marcada facodonesis sufre una diálisis zonular espontánea de 160 grados durante la hidrodelineación con imposibilidad de sostener el saco capsular. Tras realizar vitrectomía anterior completa, el cirujano decide realizar fijación escleral de una LIO de 3 piezas.',
    questionText: '¿Cuáles son los principios técnicos clave de la técnica de fijación escleral sin sutura de doble aguja descrita por Shin Yamane?',
    options: [
      'Uso de suturas de Prolene 10-0 ancladas a colgajos esclerales triangulares a 4 mm del limbo.',
      'Punciones esclerales con agujas de pared delgada 30G a 2.0 mm del limbo anatómico con túneles esclerales angulados de 1.5-2.0 mm a 180°, enhebrado de hápticos de PVDF, exteriorización y confección de bridas esféricas térmicas ("flanges") de 0.3 mm enterradas en el túnel escleral.',
      'Implante de lente intraocular de una sola pieza (monopieza acrílica) directamente en el surco ciliar sin sutura.',
      'Trepanación corneal y fijación transiridiana con suturas de seda 4-0.'
    ],
    correctIndex: 1,
    explanation: 'La técnica de Yamane (fijación escleral sin sutura con doble aguja) revolucionó el manejo de la afaquia sin soporte capsular. Sus pasos fundamentales son: 1) Uso de LIO de 3 piezas con hápticos flexibles de polivinilideno difluoruro (PVDF); 2) Dos túneles esclerales oblicuos de 1.5 a 2.0 mm de longitud en el plano escleral a 2.0 mm del limbo, exactamente a 180° de separación, realizados con agujas 30G TSK de pared delgada; 3) Canulación y exteriorización secuencial de los hápticos distal y proximal; 4) Fusión de la punta del háptico con termocauterio oftálmico para modelar una brida o botón esférico de 0.3 mm; 5) Inserción del reborde dentro del túnel escleral bajo la conjuntiva, fijando la lente perfectamente centrada y plana.',
    clinicalApplication: 'PERLA QUIRÚRGICA DE YAMANE: NUNCA usar lentes monopieza acrílicas de una sola pieza para surco o técnica de Yamane debido al roce de sus hápticos gruesos y bordes cuadrados contra el iris posterior, lo que desencadena el Síndrome UGH (Uveítis-Glaucoma-Hifema). Usar siempre LIOs de 3 piezas con hápticos de PVDF.',
    pearl: 'Técnica de Yamane: Túneles a 2 mm del limbo con agujas 30G TSK a 180°, hápticos de PVDF y bridas térmicas de 0.3 mm. Evita las suturas de Prolene degradables.',
    tags: ['Yamane', 'Fijación escleral', 'Flanged haptic', 'Afaquia', 'PEX']
  },

  // NEUROFTALMOLOGÍA
  {
    id: 'neuro-01',
    subspecialtyId: 'neuroftalmologia',
    topic: 'Neuropatía Óptica Isquémica Anterior Arterítica vs No Arterítica',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 76 años consulta por pérdida visual indolora súbita en ojo derecho al despertar. Refiere astenia, pérdida de peso, dolor al masticar alimentos duros en las últimas semanas y sensibilidad dolorosa al peinarse. Al examen: MAVC OD: Cuenta dedos a 1 metro. Pupila con DPAR marcado. Fondo de ojo OD muestra edema de papila pálido, "gisáceo/blanquecino" con hemorragias peripapilares en llama.',
    questionText: '¿Cuál es el diagnóstico más probable, las pruebas analíticas iniciales y la pauta de tratamiento urgente?',
    options: [
      'Neuropatía óptica isquémica anterior no arterítica (NOIA-NA); indicar observación y control cardiovascular.',
      'Neuropatía Óptica Isquémica Anterior Arterítica (NOIA-A) por Arteritis de Células Gigantes; solicitar VSG y PCR urgente e iniciar Metilprednisolona IV 1 g/día de inmediato antes de la biopsia de arteria temporal.',
      'Neuritis óptica desmielinizante; solicitar resonancia magnética cerebral y punción lumbar para bandas oligoclonales.',
      'Papiledema por hipertensión intracraneal idiopática; iniciar acetazolamida oral a dosis altas.'
    ],
    correctIndex: 1,
    explanation: 'El cuadro de pérdida visual súbita con edema de papila pálido ("chalky-white") asociado a síntomas sistémicos típicos de arteritis de células gigantes (claudicación mandibular [el síntoma más específico], hipersensibilidad del cuero cabelludo, astenia, polimialgia reumática) en una mujer mayor de 50 años es patognomónico de NOIA-A. La VSG suele superar los 50-100 mm/h y la PCR está marcadamente elevada. El tratamiento con corticoides IV a dosis altas no debe demorarse bajo ningún concepto para evitar la pérdida visual bilateral irreversible.',
    clinicalApplication: 'CONDUCTA EN GUARDIA: 1) NO ESPERAR A LA BIOPSIA PARA TRATAR: Administrar Metilprednisolona 1 g IV al día por 3 días, seguido de Prednisona oral 1 mg/kg/día. 2) La biopsia de arteria temporal unilateral o bilateral (mínimo 2-3 cm de longitud para evitar "skip lesions") puede realizarse dentro de las 1-2 semanas posteriores sin alterar significativamente la histología. 3) Proteger el estómago y metabolismo: Cobertura con IBP, calcio + vitamina D y control de glucemias.',
    pearl: 'La claudicación mandibular es el síntoma de mayor especificidad para Arteritis de Células Gigantes (ACG). El edema de papila en NOIA-A suele ser pálido tiza, a diferencia de la hiperemia en NOIA-NA.',
    tags: ['NOIA-A', 'Arteritis de células gigantes', 'Metilprednisolona', 'Claudicación mandibular']
  },
  {
    id: 'neuro-02',
    subspecialtyId: 'neuroftalmologia',
    topic: 'Parálisis del III Par Craneal y Compromiso Pupilar',
    difficulty: 'R1 - Inicial',
    clinicalVignette: 'Paciente masculino de 48 años sin antecedentes relevantes acude a la guardia por diplopía binocular y ptosis palpebral derecha de inicio agudo acompañada de cefalea retroocular severa. A la exploración se observa ptosis completa del párpado derecho, ojo derecho desviado en abducción e hipotorsión ("hacia abajo y afuera"). La pupila derecha se encuentra en midriasis marcada de 6 mm y no responde al estímulo luminoso directo ni consensual.',
    questionText: '¿Cuál es la causa etiológica más urgente que debe descartarse y qué estudio de imagen debe solicitarse sin demora?',
    options: [
      'Microangiopatía isquémica diabética del III par; solicitar glucemia y hemoglobina glicosilada.',
      'Aneurisma de la arteria comunicante posterior que comprime el III par craneal; solicitar Angio-TAC cerebral o Angio-Resonancia de urgencia.',
      'Miastenia gravis ocular; solicitar prueba de anticuerpos contra receptor de acetilcolina (AChR) y prueba de hielo.',
      'Parálisis del IV par craneal descompensada; indicar prismas en gafa de Fresnel.'
    ],
    correctIndex: 1,
    explanation: 'Una parálisis del III par craneal completa o incompleta con afectación pupilar (midriasis y alteración de reflejos) en un adulto es una emergencia neuroquirúrgica vital: representa un aneurisma de la arteria comunicante posterior (AComP) en la unión con la carótida interna hasta que se demuestre lo contrario. Las fibras parasimpáticas pupiloconstrictoras discurren en la periferia dorsomedial del nervio, por lo que son muy vulnerables a la compresión extrínseca (aneurisma o tumor), mientras que la isquemia microvascular suele afectar el centro del nervio respetando la pupila ("pupil-sparing").',
    clinicalApplication: 'CONDUCTA EN GUARDIA: 1) Angio-TAC o Angio-RM cerebral urgente. Si la sospecha es alta y la angiotomografía es negativa o dudosa, realizar angiografía cerebral convencional con sustracción digital (DSA). 2) Interconsulta urgente a Neurocirugía para clipaje o embolización endovascular preventiva antes de que el aneurisma se rompa con hemorragia subaracnoidea letal. 3) Regla de la pupila: La parálisis del III par "con respeto pupilar" en >50 años con factores de riesgo vascular puede vigilarse estrechamente, pero si la pupila se dilata, la sospecha compresiva es absoluta.',
    pearl: 'Parálisis del III par + Midriasis pupilar = Aneurisma de arteria comunicante posterior. Considerar riesgo inminente de rotura aneurismática.',
    tags: ['III Par', 'Midriasis', 'Aneurisma comunicante posterior', 'AngioTAC']
  },

  // UVEÍTIS
  {
    id: 'uveitis-01',
    subspecialtyId: 'uveitis',
    topic: 'Toxoplasmosis Ocular y Retinocoroiditis Activa',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 28 años consulta por miodesopsias y disminución de agudeza visual en ojo izquierdo. En la lámpara de hendidura presenta células vítreas 2+. En la oftalmoscopia se evidencia un foco blanco-amarillento algodonoso y sobreelevado de retinocoroiditis activa localizado en arcada vascular temporal superior adyacente a una cicatriz coriorretiniana atrófica hiperpigmentada antigua. La vitritis sobre el foco produce el aspecto clásico de "faro en la niebla".',
    questionText: '¿Cuál es el tratamiento antimicrobiano clásico de elección (terapia cuádruple o estándar) para la toxoplasmosis ocular activa?',
    options: [
      'Aciclovir oral 800 mg 5 veces al día + Ganciclovir intravítreo.',
      'Pirimetamina + Sulfadiazina + Ácido folínico (leucovorina) + Prednisona oral (terapia clásica) o Trimetoprim/Sulfametoxazol + Prednisona.',
      'Ceftriaxona IV 2 g/día + Doxiciclina 100 mg cada 12 horas.',
      'Ganciclovir tópico al 0.15% en gel 5 veces al día.'
    ],
    correctIndex: 1,
    explanation: 'El cuadro describe una retinocoroiditis por Toxoplasma gondii, la causa más común de uveítis posterior infecciosa en individuos inmunocompetentes. La terapia médica clásica consiste en Pirimetamina (con dosis de carga) + Sulfadiazina + Ácido folínico (para prevenir toxicidad medular por déficit de folatos) + Prednisona oral iniciada 24-48 horas después del antimicrobiano. Una alternativa ampliamente utilizada y de similar eficacia con menor toxicidad es Trimetoprim/Sulfametoxazol (Bactrim) + Prednisona.',
    clinicalApplication: 'CONDUCTA CLÍNICA: 1) Criterios para tratar un foco: Compromiso o cercanía a mácula (<2-3 diámetros papilares), compromiso del nervio óptico, vitritis severa o paciente inmunodeprimido. 2) NUNCA dar corticoides sistémicos o locales sin cobertura antiparasitaria simultánea. 3) Hemograma semanal si se usa pirimetamina para vigilar leucopenia y trombocitopenia. 4) Contraindicados corticoides perioculares/subtenonianos en toxoplasmosis por riesgo de reactivación fulminante.',
    pearl: 'Signo del "faro en la niebla" = Foco de retinitis activo por Toxoplasma visto a través del vítreo turbio por vitritis.',
    tags: ['Toxoplasmosis', 'Faro en la niebla', 'Pirimetamina', 'Sulfadiazina']
  },
  {
    id: 'uveitis-02',
    subspecialtyId: 'uveitis',
    topic: 'Uveítis Anterior Aguda HLA-B27',
    difficulty: 'R1 - Inicial',
    clinicalVignette: 'Hombre de 31 años consulta por ojo derecho doloroso, fotofobia intensa, lagrimeo y visión borrosa. Refiere dolor lumbar matutino y rigidez de columna de meses de evolución. En la lámpara de hendidura del ojo derecho se aprecia inyección ciliar profunda, células en cámara anterior 3+ (Tyndall), flare 2+ y precipitados queráticos endoteliales no granulomatosos finos en tercio inferior de la córnea.',
    questionText: '¿Cuál es la complicación anatómica iridocristaliniana más frecuente si no se instilan midriáticos/ciclopléjicos tempranamente en este paciente?',
    options: [
      'Sinequias anteriores periféricas con cierre angular secundario.',
      'Sinequias posteriores (adherencias del iris a la cápsula anterior del cristalino) que pueden provocar iris en bombe y seclusión pupilar.',
      'Desprendimiento de coroides hemorrágico espontáneo.',
      'Ectopia lentis con subluxación nasal del cristalino.'
    ],
    correctIndex: 1,
    explanation: 'En las uveítis anteriores agudas (especialmente asociadas al antígeno HLA-B27, espondilitis anquilosante), la fibrina y exudación inflamatoria en la cámara anterior facilitan la formación rápida de sinequias posteriores entre el margen pupilar del iris y la cara anterior del cristalino. Si se unen en 360 grados (seclusión pupilar), se bloquea el paso de humor acuoso de cámara posterior a anterior, empujando el iris hacia adelante ("iris en bombe") y desencadenando un glaucoma agudo por cierre angular secundario. Los ciclopléjicos (ciclopentolato o atropina) son vitales para movilizar la pupila y prevenir estas adherencias.',
    clinicalApplication: 'CONDUCTA EN GUARDIA: 1) Ciclopléjico potente (Ciclopentolato 1% cada 8h o Atropina 1%) para romper sinequias tempranas, relajar el cuerpo ciliar y aliviar el dolor por espasmo ciliar. 2) Corticoide tópico de alta potencia (Prednisolona acetato 1% o Dexametasona 0.1%) cada 1-2 horas en fase inicial. 3) Despistaje sistémico: Solicitar HLA-B27 y radiografía de articulaciones sacroilíacas si presenta lumbalgia inflamatoria.',
    pearl: 'En uveítis anterior, el ciclopléjico cumple un triple rol terapéutico: previene/rompe sinequias posteriores, alivia el dolor al paralizar el esfínter del iris y cuerpo ciliar, y reestabiliza la barrera hematoacuosa.',
    tags: ['HLA-B27', 'Sinequias posteriores', 'Ciclopentolato', 'Espondilitis']
  },

  // PEDIATRÍA Y ESTRABISMO
  {
    id: 'pedia-01',
    subspecialtyId: 'pediatria',
    topic: 'Leucocoria en el Paciente Pediátrico: Retinoblastoma',
    difficulty: 'R1 - Inicial',
    clinicalVignette: 'Madre acude con su hijo de 18 meses tras notar un "reflejo blanco extraño en la pupila izquierda" al tomarle fotografías con flash. El niño se encuentra asintomático. En la exploración con oftalmoscopio indirecto bajo dilatación se observa leucocoria en ojo izquierdo con una masa blanquecina nodular intrarretiniana con vasos tumorales y siembras vítreas finas.',
    questionText: '¿Cuál es el primer diagnóstico a descartar, la prueba de neuroimagen de elección y qué procedimiento diagnóstico invasivo está absolutamente contraindicado?',
    options: [
      'Catarata congénita; realizar resonancia con contraste; contraindicada la ecografía ocular.',
      'Retinoblastoma; estudio mediante Resonancia Magnética o TAC orbitaria (para buscar calcificaciones y extensión extraocular); contraindicada la punción / biopsia intraocular.',
      'Enfermedad de Coats; punción aspirativa con aguja fina (PAAF) diagnóstica inmediata.',
      'Persistencia de vasculatura fetal; vitrectomía anterior exploratoria sin imagen previa.'
    ],
    correctIndex: 1,
    explanation: 'Toda leucocoria en un lactante o niño pequeño es un RETINOBLASTOMA hasta que se demuestre lo contrario (el tumor intraocular primario maligno más frecuente de la infancia, mutación del gen RB1 en 13q14). La punción intraocular (PAAF) o biopsia está ESTRICTAMENTE CONTRAINDICADA debido al riesgo de siembra tumoral en la órbita y metástasis sistémica extraocular. La ecografía ocular modo B y la TAC muestran calcificaciones intratumorales características (en >90% de los casos); la RM cerebral y de órbitas es el estándar para evaluar invasión del nervio óptico y descartar retinoblastoma trilateral (asociación con pinealoblastoma).',
    clinicalApplication: 'CONDUCTA CLÍNICA: 1) NUNCA biopsiar ni realizar punciones intraoculares. 2) Examen bajo anestesia (EBA) con dilatación pupilar completa, dibujo retiniano de ambos ojos (30% son bilaterales y hereditarios). 3) Solicitar RM de cerebro y órbitas. 4) Tratamiento multidisciplinario en centro de oncología ocular pediátrica (quimioterapia intraarterial por arteria oftálmica, quimioterapia sistémica, termoterapia láser, crioterapia o enucleación según estadío IIRC).',
    pearl: 'En leucocoria pediátrica: La biopsia intraocular está absolutamente prohibida por riesgo de diseminación tumoral extraocular letal.',
    tags: ['Leucocoria', 'Retinoblastoma', 'Calcificaciones', 'PAAF contraindicada']
  },
  {
    id: 'pedia-02',
    subspecialtyId: 'pediatria',
    topic: 'Endotropia Acomodativa Pura',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Niño de 3 años y medio es traído por sus padres por desviación de ambos ojos hacia adentro de 6 meses de evolución, más notoria cuando mira libros o cuando está cansado. Al cover test con fijación lejana y cercana presenta endotropia de 30 dioptrías prismáticas (DP). La refracción ciclopléjica con ciclopentolato al 1% revela OD +5.50 Dp y OI +5.25 Dp.',
    questionText: '¿Cuál es el tratamiento inicial de elección y qué resultado se espera si se trata de una endotropia acomodativa refractiva pura?',
    options: [
      'Cirugía inmediata de recesión bilateral de músculos rectos medios.',
      'Prescripción de la corrección óptica hipermetrópica total bajo cicloplejía; los ojos deben alinearse completamente (ortotropia) al usar las gafas.',
      'Inyección de toxina botulínica en rectos medios antes de intentar gafas.',
      'Oclusión con parche del ojo dominante durante 12 horas al día sin corrección óptica.'
    ],
    correctIndex: 1,
    explanation: 'La endotropia acomodativa refractiva se produce por un esfuerzo acomodativo excesivo necesario para enfocar en pacientes con hipermetropía moderada o alta sin corregir, lo que desencadena una convergencia acomodativa sincinética excesiva (relación CA/A normal). El tratamiento inicial es la corrección óptica TOTAL de la hipermetropía encontrada bajo cicloplejía. En la forma puramente refractiva, el uso constante de las gafas elimina la necesidad de sobreacomodación y alinea los ojos completamente tanto de lejos como de cerca.',
    clinicalApplication: 'CONDUCTA EN CONSULTA: 1) SIEMPRE realizar refracción ciclopléjica completa (ciclopentolato 1% al menos 3 instilaciones cada 10 min y esperar 40-50 min). 2) Prescribir el 100% de la hipermetropía ciclopléjica (no descontar dioptrías en endotropias). 3) Control a las 6-8 semanas con gafas puestas: Si persiste desviación residual solo de cerca, evaluar adición de bifocales (relación CA/A alta); si persiste desviación igual de lejos y cerca, se considera endotropia parcialmente acomodativa y puede requerir cirugía del ángulo residual.',
    pearl: 'En endotropias infantiles nunca se debe operar sin haber prescrito antes la corrección ciclopléjica hipermetrópica completa durante varios meses.',
    tags: ['Endotropia acomodativa', 'Hipermetropía', 'Cicloplejía', 'Gafas']
  },

  // OCULOPLÁSTICA Y ÓRBITA
  {
    id: 'oculo-01',
    subspecialtyId: 'oculoplastica',
    topic: 'Celulitis Preseptal vs Celulitis Orbitaria',
    difficulty: 'R1 - Inicial',
    clinicalVignette: 'Niño de 7 años acude a urgencias por edema, eritema y calor en párpados del ojo derecho de 48 horas de evolución tras cuadro catarral y sinusitis etmoidal. A la exploración se observa edema palpebral tenso. El ojo derecho presenta agudeza visual 20/20, motilidad ocular extrínseca normal e indolora, sin proptosis y pupilas isocóricas reactivas sin DPAR.',
    questionText: '¿Qué signos clínicos son los que diferencian con certeza una celulitis orbitaria (postseptal) de una celulitis preseptal?',
    options: [
      'Presencia de fiebre y leucocitosis periférica exclusivamente.',
      'Proptosis, oftalmoplejía / dolor con los movimientos oculares, disminución de agudeza visual y defecto pupilar aferente relativo (DPAR).',
      'Costras palpebrales matutinas e inyección conjuntival leve.',
      'Localización del edema en el párpado superior versus párpado inferior.'
    ],
    correctIndex: 1,
    explanation: 'El septo orbitario es una barrera anatómica fibrosa crucial que se extiende desde el periostio orbitario hasta los tarsos. La celulitis preseptal afecta solo los tejidos anteriores al septo y cursa con agudeza visual normal, motilidad ocular completa e indolora, sin proptosis ni DPAR. Por el contrario, la celulitis orbitaria (postseptal) involucra el contenido orbitario y presenta proptosis, dolor y restricción en los movimientos oculares (oftalmoplejía), quemosis, y en casos con compresión del nervio óptico, disminución visual y DPAR.',
    clinicalApplication: 'CONDUCTA EN GUARDIA: 1) Si hay proptosis o motilidad alterada -> TAC urgente de órbitas y senos paranasales con contraste para descartar absceso subperióstico o absceso orbitario. 2) Ingreso hospitalario con antibióticos intravenosos de amplio espectro (Ceftriaxona o Ampicilina/Sulbactam + Vancomicina). 3) Criterios de drenaje quirúrgico urgente por Oculoplástica/ORL: Absceso subperióstico grande, empeoramiento visual, DPAR o falta de mejoría tras 24-48 horas de antibióticos IV.',
    pearl: 'La presencia de oftalmoplejía dolorosa, proptosis o DPAR ubica la infección irremediablemente por detrás del septo orbitario (Celulitis Orbitaria).',
    tags: ['Celulitis orbitaria', 'Preseptal', 'Septo orbitario', 'TAC órbitas']
  },
  {
    id: 'oculo-02',
    subspecialtyId: 'oculoplastica',
    topic: 'Orbitopatía Tiroidea de Graves y Neuropatía Óptica Compresiva',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 52 años con antecedentes de enfermedad de Graves consulta por proptosis progresiva y visión borrosa en ambos ojos. A la exploración presenta retracción palpebral bilateral (signo de Dalrymple), lagoftalmos, proptosis de 24 mm en ambos ojos, limitación severa de la elevación y abducción. En la prueba de visión cromática falla en 10 de 12 láminas de Ishihara y se objetiva un DPAR en ojo izquierdo con edema papilar incipiente.',
    questionText: '¿Cuál es la causa de la pérdida visual y cuál es la conducta terapéutica inmediata?',
    options: [
      'Queratopatía por exposición simple; lubricantes y parches nocturnos únicamente.',
      'Neuropatía óptica distiroidea por compresión en el vértice orbitario por los vientres musculares hipertróficos; requiere bolos urgentes de metilprednisolona IV y considerar descompresión orbitaria quirúrgica si no hay respuesta rápida.',
      'Trombosis del seno cavernoso bilateral; iniciar anticoagulación con heparina sódica.',
      'Glaucoma neovascular secundario; aplicar inyección intravítrea de bevacizumab.'
    ],
    correctIndex: 1,
    explanation: 'La neuropatía óptica distiroidea (DON - Dysthyroid Optic Neuropathy) es la complicación más temida de la orbitopatía de Graves (ocurre en 3-5% de los pacientes). Se produce por el agrandamiento masivo de los vientres musculares extraoculares (respetando los tendones, característico de Graves) que comprimen mecánicamente el nervio óptico en el vértice orbitario estrecho. Los signos cardinales son disminución de agudeza visual, discromatopsia (Ishihara alterado), DPAR y defectos en el campo visual. Requiere corticoterapia IV inmediata a altas dosis (metilprednisolona 500 mg - 1 g) y descompresión quirúrgica urgente si hay refractariedad.',
    clinicalApplication: 'CONDUCTA EN GUARDIA: 1) TAC de órbitas sin contraste (cortes coronales para evaluar crowding del vértice orbitario). 2) Iniciar bolos de Metilprednisolona 500 mg - 1 g IV diario durante 3 días consecutivos con monitorización hepática y cardíaca. 3) Si no hay mejoría en agudeza visual o discromatopsia en 48-72 horas, realizar descompresión orbitaria quirúrgica urgente (pared medial y suelo de la órbita) para liberar el canal óptico.',
    pearl: 'En la TAC de orbitopatía de Graves, los músculos extraoculares presentan hipertrofia de los VIENTRES musculares con RESPETO de las inserciones tendinosas (orden de afectación: Recto Inferior > Recto Medial > Recto Superior > Recto Lateral: Mnemotecnia "I\'M SLOw").',
    tags: ['Graves', 'Neuropatía distiroidea', 'Vértice orbitario', 'Descompresión']
  },

  // REFRACCIÓN Y CIRUGÍA REFRACTIVA
  {
    id: 'refra-01',
    subspecialtyId: 'refraccion',
    topic: 'Criterios de Seguridad en Cirugía Refractiva Corneal (LASIK)',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 26 años solicita cirugía refractiva láser en ambos ojos. Refracción: OD -7.00 Dp Esféril con -1.50 Dp Cil a 180º. Paquimetría central ultrasónica: 505 um. Se planea crear un flap con microquerátomo mecánico de 130 um de espesor. El cálculo de ablación del láser excímer predice un consumo de 110 um de tejido estromal.',
    questionText: '¿Cuál es el lecho estromal residual (RSB) estimado y cuál es la recomendación clínica sobre la idoneidad del procedimiento LASIK?',
    options: [
      'RSB de 395 um; el paciente es un candidato ideal para LASIK.',
      'RSB de 265 um; está por debajo de los márgenes óptimos de seguridad (>300 um) y con alto riesgo de ectasia corneal iatrogénica post-LASIK; se debe contraindicar LASIK y evaluar lente fáquico (ICL) o PRK.',
      'RSB de 150 um; debe realizarse queratotomía radial en su lugar.',
      'El espesor no importa siempre que la curvatura K media sea inferior a 48 D.'
    ],
    correctIndex: 1,
    explanation: 'El Lecho Estromal Residual (RSB - Residual Stromal Bed) se calcula como: Paquimetría total - Espesor del flap - Profundidad de ablación. En este caso: 505 um - 130 um - 110 um = 265 um. Aunque el límite clásico histórico era 250 um, los estándares modernos de seguridad exigen un RSB de al menos 300 um (o porcentaje de tejido alterado PTA < 40%) para prevenir la ectasia corneal post-LASIK. Un RSB de 265 um en una córnea relativamente delgada (505 um) con alta miopía constituye una contraindicación formal para LASIK. Las alternativas son un lente intraocular fáquico de cámara posterior (ICL) o evaluar técnica de superficie (PRK) si los parámetros topográficos son normales.',
    clinicalApplication: 'EVALUACIÓN PREQUIRÚRGICA: 1) Pentacam / Tomografía corneal: Analizar elevación posterior, índice BAD-D (Belin-Ambrósio Display) para descartar queratocono frustro. 2) Calcular PTA: PTA = (Espesor del flap + Ablación) / Paquimetría total. En este caso: (130 + 110) / 505 = 47.5%. Un PTA > 40% es el factor de riesgo independiente más potente para ectasia. 3) Ofrecer implante de ICL con MIOPIAS altas y córneas límite.',
    pearl: 'La fórmula del PTA (Percentage of Tissue Altered) = (Flap + Ablación) / Paquimetría. Un PTA mayor o igual al 40% es el predictor individual más potente de ectasia corneal post-LASIK.',
    tags: ['LASIK', 'Ectasia', 'Lecho residual', 'PTA', 'ICL']
  },

  // CÓRNEA: Úlcera Dendrítica Herpética
  {
    id: 'cornea-04',
    subspecialtyId: 'cornea',
    topic: 'Queratitis Epitelial por Virus Herpes Simple (VHS)',
    difficulty: 'R1 - Inicial',
    clinicalVignette: 'Paciente de 38 años consulta por ojo derecho rojo, sensación de cuerpo extraño y fotofobia leve de 4 días. En lámpara de hendidura con fluoresceína se observa una lesión epitelial ramificada arborescente con bulbos terminales que tiñen intensamente con Rosa de Bengala. La sensibilidad corneal en OD está notablemente reducida respecto al OI.',
    questionText: '¿Cuál es el tratamiento antiviral tópico de elección y qué fármaco está ABSOLUTAMENTE CONTRAINDICADO en esta fase?',
    options: [
      'Ganciclovir gel 0.15% (o Aciclovir pomada 3%); contraindicados de forma absoluta los corticoides tópicos por riesgo de transformación en úlcera geográfica.',
      'Natamicina colirio 5%; contraindicados los antivirales orales.',
      'Dexametasona 0.1% tópica cada 2 horas para desinflamar rápidamente; contraindicado el ganciclovir.',
      'Tobramicina tópica exclusiva; contraindicada la cicloplejía.'
    ],
    correctIndex: 0,
    explanation: 'En la queratitis epitelial activa por VHS con úlcera dendrítica típica, el tratamiento de elección es antiviral tópico (Ganciclovir oftálmico en gel 0.15% 5 veces al día o Aciclovir pomada 3% 5 veces al día) durante 7-10 días. Los CORTICOIDES TÓPICOS ESTÁN ESTRICTAMENTE CONTRAINDICADOS en esta fase epitelial de replicación vírica lítica activa, ya que inducen replicación masiva del virus transformando la dendrita en una úlcera geográfica gigante con necrosis estromal rápida y adelgazamiento corneal.',
    clinicalApplication: 'CONDUCTA EN GUARDIA: 1) Confirmar tinción con fluoresceína y Rosa de Bengala (los bulbos terminales son patognomónicos de VHS frente a las pseudodendritas de Herpes Zóster). 2) Instilar Ganciclovir gel 0.15% 5 veces/día. 3) NUNCA prescribir colirios combinados con esteroides (como Tobradex) ante cualquier sospecha de úlcera epitelial. 4) Citar a revisión a las 48-72 horas.',
    pearl: 'Los corticoides tópicos están terminantemente prohibidos en úlcera dendrítica activa: convierten la dendrita en úlcera geográfica y favorecen la perforación estromal.',
    tags: ['Herpes', 'VHS', 'Dendrita', 'Ganciclovir', 'Corticoides contraindicados']
  },

  // CÓRNEA: Ojo Seco y Superficie Ocular (TFOS DEWS II)
  {
    id: 'cornea-05',
    subspecialtyId: 'cornea',
    topic: 'Enfermedad de Ojo Seco (TFOS DEWS II), DGM y Toxicidad por Conservantes',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 54 años con antecedentes de artritis reumatoide en tratamiento con metotrexato consulta por sensación de arenilla ocular bilateral intensa, ardor y visión fluctuante que empeora al final del día. Refiere usar lágrimas artificiales con cloruro de benzalconio (BAK) cada hora sin mejoría. A la exploración biomicroscópica presenta menisco lagrimal inferior adelgazado (<0.1 mm), tiempo de rotura lagrimal (TBUT) de 3 segundos, queratopatía punteada superficial difusa de predominio interpalpebral e inferior con tinción de Oxford grado 4 con verde de lisamina, expresión de meibum espeso en "pasta de dientes" y Test de Schirmer I sin anestesia de 3 mm en 5 minutos en ambos ojos. La osmolaridad lagrimal es de 324 mOsm/L en OD y 310 mOsm/L en OI.',
    questionText: '¿Cuál es el diagnóstico sindrómico exacto según el consenso TFOS DEWS II, qué mecanismo iatrogénico agrava el cuadro y cuál es el algoritmo terapéutico escalonado prioritario?',
    options: [
      'Ojo seco mixto (acuodeficiente por sospecha de Síndrome de Sjögren secundario a artritis reumatoide + evaporativo por DGM), agravado por toxicidad epitelial por conservante BAK; retirar lágrimas conservadas y cambiar a sustitutos sin conservantes + higiene palpebral con calor y Doxiciclina oral + pulsos de corticoide tópico de baja penetración (Loteprednol) seguido de Ciclosporina A 0.05-0.1% tópica.',
      'Conjuntivitis bacteriana crónica por Staphylococcus aureus; indicar colirio de tobramicina con dexametasona durante 3 meses y tapones de silicona de inmediato.',
      'Queratoconjuntivitis límbica superior de Theodore; realizar queratoplastia penetrante de urgencia.',
      'Deficiencia primaria de vitamina A con manchas de Bitot; prescribir megadosis de vitamina A oral y colirios con benzalconio.'
    ],
    correctIndex: 0,
    explanation: 'La paciente presenta una Enfermedad de Ojo Seco Mixta según la clasificación internacional TFOS DEWS II: 1) Componente acuodeficiente severo (Schirmer I <= 5 mm) en el contexto de su artritis reumatoide (orienta a Síndrome de Sjögren secundario); 2) Componente evaporativo por Disfunción de Glándulas de Meibomio (DGM con meibum turbio espeso y TBUT < 10 s); 3) Hiperosmolaridad patológica (>308 mOsm/L y asimetría interocular >8 mOsm/L confirmatoria de pérdida de homeostasis); y 4) Toxicidad iatrogénica por Cloruro de Benzalconio (BAK), un detergente catiónico que lisa el epitelio corneal cuando se instila con alta frecuencia. El manejo escalonado exige retirar inmediatamente colirios con BAK, usar lágrimas sin conservantes, Doxiciclina oral para la DGM, corticoide suave en ciclo corto (Loteprednol) e inmunomoduladores crónicos (Ciclosporina A). NUNCA colocar tapones lagrimales mientras persista inflamación activa de la superficie.',
    clinicalApplication: 'CONDUCTA CLÍNICA: 1) Retirar todo colirio con conservantes (BAK). 2) Prescribir sustituto lagrimal monodosis libre de conservantes (Ácido Hialurónico + Trehalosa). 3) Doxiciclina oral 50-100 mg/día por 8 semanas por su acción anti-MMP9 y fluidificante de meibum. 4) Ciclosporina A tópica 0.05-0.1% cada 12-24h. 5) Solicitar anticuerpos Anti-Ro/SSA y Anti-La/SSB y Factor Reumatoide para confirmar Sjögren secundario.',
    pearl: 'TFOS DEWS II Pearl: Osmolaridad lagrimal >=308 mOsm/L o asimetría interocular >8 mOsm/L es el biomarcador objetivo individual más sensible de ojo seco. NUNCA colocar tapones de punto lagrimal (punctum plugs) si hay inflamación activa de superficie (se retienen mediadores inflamatorios concentrados).',
    tags: ['Ojo Seco', 'TFOS DEWS II', 'DGM', 'Sjögren', 'BAK', 'Ciclosporina']
  },

  // CÓRNEA: Queratopatía Bullosa Pseudofáquica
  {
    id: 'cornea-06',
    subspecialtyId: 'cornea',
    topic: 'Queratopatía Bullosa Pseudofáquica y Densidad Endotelial Crítica',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 75 años con antecedente de facoemulsificación complicada con rotura capsular y soporte de LIO en cámara anterior hace 4 años acude con pérdida progresiva de agudeza visual (cuenta dedos a 1 metro) y dolor ocular agudo intermitente en las mañanas al despertar con fotofobia intensa. A la biomicroscopía se aprecian múltiples bulas epiteliales transparentes en el tercio central corneal, varias rotas con defectos epiteliales que tiñen con fluoresceína, edema estromal con paquimetría central de 780 µm y estrías en la membrana de Descemet. En la microscopía especular no se obtiene reflejo central y en periferia la densidad celular endotelial es de 420 células/mm2.',
    questionText: '¿Cuál es la causa del dolor agudo matutino, qué valor define la densidad endotelial crítica y cuál es el procedimiento quirúrgico reconstructivo de elección?',
    options: [
      'Dolor por hipertensión pupilar; densidad crítica 1500 cél/mm2; realizar trabeculectomía con mitomicina C.',
      'Dolor por rotura de bulas epiteliales con exposición de terminaciones nerviosas libres ciliares del trigémino; densidad crítica <500-700 cél/mm2; la cirugía de elección es explantación del LIO de cámara anterior + vitrectomía anterior reglada + fijación escleral de nuevo LIO (Yamane) + Queratoplastia Endotelial (DMEK o DSAEK).',
      'Dolor por queratitis fúngica; densidad crítica 200 cél/mm2; queratoplastia penetrante "en caliente".',
      'Dolor por desprendimiento de retina; densidad crítica 3000 cél/mm2; vitrectomía posterior pars plana con gas C3F8.'
    ],
    correctIndex: 1,
    explanation: 'La Queratopatía Bullosa Pseudofáquica (PBK) ocurre cuando la densidad celular endotelial desciende por debajo de la densidad crítica de 500 a 700 células/mm2, momento en el cual la bomba Na+/K+ ATPasa endotelial no puede compensar el influjo acuoso pasivo, formándose edema estromal y bulas subepiteliales. La rotura de estas bulas expone terminaciones nerviosas sensoriales libres del nervio oftálmico (V1), generando dolor lancinante agudo, fotofobia y riesgo de sobreinfección. El manejo definitivo requiere retirar el LIO de cámara anterior que traumatiza el endotelio, limpiar el vítreo anterior, fijar un LIO en cámara posterior y restaurar la bomba endotelial mediante queratoplastia endotelial lamelar (DMEK o DSAEK). En ojos ciegos sin pronóstico visual, el recubrimiento conjuntival de Gundersen alivia el dolor.',
    clinicalApplication: 'CONDUCTA INMEDIATA: 1) Colocar lente de contacto terapéutico blando de vendaje para sellar las terminaciones nerviosas y aliviar el dolor inmediatamente. 2) Colirio de NaCl al 5% hipertónico para deshidratar el epitelio. 3) Hipotensores tópicos (evitar análogos de PG). 4) Programar recambio de LIO por fijación escleral + queratoplastia endotelial (DMEK/DSAEK).',
    pearl: 'Densidad endotelial crítica: <500-700 cél/mm2 (la córnea se descompensa inexorablemente en edema crónico). La tonometría de Goldmann en córneas edematosas arroja cifras falsamente bajas debido a la compresibilidad del estroma esponjoso.',
    tags: ['Queratopatía Bullosa', 'Endotelio', 'DMEK', 'DSAEK', 'Densidad Crítica']
  },

  // CÓRNEA: Queratocono y Tomografía Belin-Ambrósio
  {
    id: 'cornea-07',
    subspecialtyId: 'cornea',
    topic: 'Queratocono, Tomografía Belin-Ambrósio (Pentacam) y Crosslinking (CXL)',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Joven de 17 años con antecedente de asma y dermatitis atópica con frotamiento ocular crónico acude por disminución visual en ojo derecho. Su MAVC con gafas es 20/40 en OD y 20/20 en OI. En la tomografía Scheimpflug Pentacam de OD se evidencia una queratometría máxima (Kmax) de 54.8 D, paquimetría en el punto más fino de 430 µm con desplazamiento inferior del ápex, elevación posterior de +28 µm respecto a la BFS y un índice global BAD-D de 3.8. Hace 6 meses su Kmax era de 53.0 D.',
    questionText: '¿Cuál es el diagnóstico topográfico, qué criterio de progresión presenta y qué intervención urgente está indicada?',
    options: [
      'Queratocono ectásico activo en progresión documentada (aumento de Kmax >=1.0 D en 1 año); está indicado de urgencia Crosslinking corneal de colágeno (CXL) con protocolo de Dresden para detener la progresión.',
      'Degeneración marginal pelúcida estable; prescribir gafas monofocales y dar el alta.',
      'Queratopatía en banda; realizar quelación con EDTA.',
      'Ectasia post-traumática; indicar trasplante penetrante inmediato.'
    ],
    correctIndex: 0,
    explanation: 'El paciente presenta queratocono corneal progresivo activo confirmado por tomografía Pentacam: índice BAD-D > 2.6 (patológico), elevación posterior patológica (>16 µm) y progresión rápida documentada (aumento de Kmax de +1.8 D en 6 meses, cuando el criterio clásico es >=1.0 D en 12 meses). En pacientes jóvenes en edad pediátrica o adolescencia, la progresión ectásica es sumamente agresiva y conduce a pérdida visual irreversible. La intervención prioritaria urgente es el Crosslinking Corneal (CXL de Dresden Epi-Off: Riboflavina 0.1% + radiación UVA 370 nm durante 30 min), el único tratamiento con evidencia científica capaz de formar enlaces covalentes interlamelares y detener la progresión de la ectasia. Requisito de seguridad: grosor corneal desepitelizado mínimo >=400 µm.',
    clinicalApplication: 'CONDUCTA PRÁCTICA: 1) Prohibición absoluta de frotarse los ojos ("No Eye Rubbing") y control de alergia con colirios duales (Olopatadina). 2) Programar Crosslinking corneal con protocolo de Dresden. 3) Si el lecho desepitelizado mide <400 µm intraoperatorio, instilar riboflavina hipoosmolar sin dextrano para inducir hinchamiento estromal antes de irradiar con UVA.',
    pearl: 'Pentacam BAD-D Map: Índice >1.6 = sospecha; >2.6 = ectasia confirmada. La elevación de la cara posterior corneal precede a todos los cambios de curvatura anterior. El grosor mínimo para CXL estándar es de 400 micras desepitelizadas.',
    tags: ['Queratocono', 'Belin-Ambrósio', 'Pentacam', 'Crosslinking', 'CXL', 'Dresden']
  },

  // CÓRNEA: Alergia Ocular y Queratoconjuntivitis Vernal
  {
    id: 'cornea-08',
    subspecialtyId: 'cornea',
    topic: 'Queratoconjuntivitis Vernal (VKC), Puntos de Horner-Trantas y Úlcera en Escudo',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Niño de 8 años es traído a urgencias por blefaroespasmo severo, fotofobia que le impide abrir los ojos, lagrimeo y prurito ocular bilateral intenso durante los meses de primavera. Al evertir el párpado superior de ambos ojos se observan múltiples papilas gigantes poligonales aplanadas (>1.5 mm) en empedrado (cobblestone) y secreción mucosa filamentosa elástica. En el limbo superior de ambos ojos hay nódulos gelatinosos con pequeños puntos blanquecinos discretos. En el tercio superior de la córnea del ojo derecho se aprecia una úlcera ovalada de 3x2 mm con base opaca blancuzca y bordes elevados que tiñe con fluoresceína.',
    questionText: '¿Cuál es el diagnóstico sindrómico, qué representan los puntos límbicos y cuál es la causa bioquímica de la úlcera corneal?',
    options: [
      'Queratoconjuntivitis Vernal (VKC) mixta complicada con Úlcera en Escudo (Shield Ulcer); los puntos límbicos son Puntos de Horner-Trantas (acúmulos focales de eosinófilos); la úlcera se produce por toxicidad directa de la Proteína Básica Mayor (MBP) liberada por eosinófilos activados.',
      'Conjuntivitis por Adenovirus; los puntos son folículos; la úlcera es un leucoma cicatrizal.',
      'Tracoma estadio IV; los puntos son fosetas de Herbert; la úlcera es tracomatosa bacteriana.',
      'Penfigoide ocular cicatrizal; los puntos son ampollas; la úlcera es autoinmune por IgG.'
    ],
    correctIndex: 0,
    explanation: 'El cuadro corresponde a una Queratoconjuntivitis Vernal (VKC) mixta severa: 1) Forma palpebral con papilas gigantes tarsales superiores en empedrado (>1 mm); 2) Forma límbica con Puntos de Horner-Trantas (patognomónicos, constituidos por acúmulos de eosinófilos y células epiteliales necróticas); y 3) Complicación con Úlcera en Escudo (Shield Ulcer) de Tobgy Grado 2. La úlcera en escudo NO es una infección bacteriana primaria; es una lesión neurotóxica inducida por la desgranulación de eosinófilos que liberan Proteína Básica Mayor (MBP) y Proteína Catiónica (ECP), sustancias tóxicas que impiden la reepitelización y degradan la membrana de Bowman. El tratamiento requiere desbridamiento mecánico de la placa de moco/MBP, lente terapéutico, e inmunomoduladores tópicos de base como Ciclosporina A catiónica 0.1% (Verkazia) o Tacrolimus ungüento.',
    clinicalApplication: 'CONDUCTA PRÁCTICA: 1) Eversión palpebral superior obligatoria en todo niño con fotofobia y atopia. 2) Desbridamiento mecánico con espátula/bisturí de la placa opaca en el lecho de la úlcera en escudo para permitir que reepitelice. 3) Colocar lente de contacto blando terapéutico + antibiótico profiláctico. 4) Iniciar Ciclosporina A tópica 0.1% (Verkazia) o Tacrolimus 0.03% + pulsos cortos de fluorometolona. 5) Control quincenal de la PIO (alto riesgo de glaucoma cortisónico pediátrico).',
    pearl: 'Puntos de Horner-Trantas = Patognomónicos de Queratoconjuntivitis Vernal (acúmulos de eosinófilos en el limbo). La úlcera en escudo no cicatriza hasta que se desbrida mecánicamente la placa de Proteína Básica Mayor (MBP) de su base.',
    tags: ['VKC', 'Vernal', 'Horner-Trantas', 'Shield Ulcer', 'MBP', 'Ciclosporina']
  },

  // CÓRNEA: Degeneraciones y Depósitos Corneales
  {
    id: 'cornea-09',
    subspecialtyId: 'cornea',
    topic: 'Pterigión con Autoinjerto Limbar (CAG) y Quelación con EDTA en Queratopatía en Banda',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Agricultor de 52 años acude por una lesión fibrovascular carnosa triangular en el sector nasal de su ojo derecho que sobrepasa el limbo e invade 3.5 mm hacia el centro corneal, induciendo un astigmatismo corneal con regla de 3.25 D que no tolera con gafas. Por delante de la cabeza de la lesión se observa una línea vertical marrón-amarillenta en el epitelio. En el ojo contralateral presenta una pingüécula nasal no inflamada.',
    questionText: '¿Cómo se denomina la línea de depósito de hierro observada, qué criterio quirúrgico cumple y cuál es la técnica reconstructiva con menor tasa de recurrencia demostrada?',
    options: [
      'Línea de Stocker; cumple indicación quirúrgica por compromiso del eje visual (>2.5-3 mm) y astigmatismo significativo; la técnica de elección es escisión quirúrgica con Autoinjerto Conjuntival Autólogo Limbar (CAG) fijado con adhesivo de fibrina tisular.',
      'Línea de Ferry; cumple indicación estética; realizar técnica de esclera desnuda pura.',
      'Línea de Hudson-Stähli; no cumple criterios quirúrgicos; indicar colirio de mitomicina C en monoterapia.',
      'Anillo de Fleischer; realizar queratectomía fototerapéutica con láser de femtosegundo.'
    ],
    correctIndex: 0,
    explanation: 'La lesión corresponde a un Pterigión primario avanzado. La línea pigmentada por delante del ápice de avance es la Línea de Stocker (depósito epitelial de hierro por estancamiento de la lágrima). Cumple criterios quirúrgicos formales: invasión corneal >2.5-3 mm amenazando el eje pupilar e inducción de astigmatismo corneal con regla significativo (>3 D por tracción mecánica horizontal). El estándar de oro quirúrgico mundial es la escisión cuidadosa con resección de la cápsula de Tenon subyacente y reconstrucción con Autoinjerto Conjuntival Autólogo Limbar (CAG) fijado con adhesivo tisular de fibrina (Tisseel), lo que reduce la tasa de recidiva a menos del 2-5% (en contraste con la técnica de esclera desnuda pura, cuya recidiva alcanza el 30-80%).',
    clinicalApplication: 'CONDUCTA QUIRÚRGICA: 1) Disecar el pterigión desde la cabeza corneal hacia la carúncula. 2) Resecar minuciosamente la cápsula de Tenon engrosada subyacente. 3) Tomar un injerto conjuntival bulbar superior fino libre de Tenon incluyendo células madre del limbo superior. 4) Fijar el injerto con adhesivo de fibrina orientando el borde limbar del injerto hacia el limbo receptor.',
    pearl: 'Atlas de Líneas de Hierro Corneales: Stocker = Pterigión; Fleischer = Queratocono; Ferry = Ampolla de filtración glaucomatosa; Hudson-Stähli = Senil fisiológica en unión de 2/3 superiores y 1/3 inferior.',
    tags: ['Pterigión', 'Línea de Stocker', 'Autoinjerto Conjuntival', 'CAG', 'Adhesivo de Fibrina']
  },

  // CÓRNEA: Trasplante de Córnea y Manejo del Rechazo
  {
    id: 'cornea-10',
    subspecialtyId: 'cornea',
    topic: 'Queratoplastia (PK, DALK, DMEK) y Urgencia del Rechazo Endotelial (Línea de Khodadoust)',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 42 años sometida a Queratoplastia Penetrante (PKP) en ojo derecho hace 10 meses por leucoma cicatrizal post-traumático con evolución impecable y agudeza visual de 20/25, consulta de urgencia por ojo rojo, visión borrosa (20/100) y leve fotofobia en OD de 36 horas de evolución. A la exploración biomicroscópica se observa injerto con edema estromal y epitelial en la mitad inferior, celularidad 2+ en cámara anterior y, sobre la cara endotelial posterior del disco donante, una línea blanquecina festoneada ondulada con precipitados queráticos adheridos que avanza desde hora 6 hacia el centro del botón corneal. La córnea receptora periférica permanece completamente clara.',
    questionText: '¿Cuál es el diagnóstico patognomónico indiscutible, qué células efectoras median la lesión y cuál es el protocolo de rescate inmediato?',
    options: [
      'Rechazo Inmunológico Endotelial Agudo del Aloinjerto con Línea de Khodadoust activa; mediado por linfocitos T citotóxicos CD8+ alorreactivos; instaurar de urgencia Metilprednisolona intravenosa en pulsos (500-1000 mg/día por 1-3 días) + Acetato de Prednisolona al 1% tópico cada hora día y noche.',
      'Falla primaria del injerto; mediado por bacterias gramnegativas; prescribir vancomicina tópica.',
      'Endoftalmitis postoperatoria tardía; vitrectomía anterior urgente con inyección de ceftazidima intravítrea.',
      'Desprendimiento de membrana de Descemet; realizar punción estromal anterior en la lámpara.'
    ],
    correctIndex: 0,
    explanation: 'El hallazgo de una línea blanquecina endotelial migratoria con precipitados queráticos retrocorneales que avanza dejando estroma edematoso detrás en un botón donante previamente claro es la LÍNEA DE KHODADOUST, el signo patognomónico indiscutible de Rechazo Endotelial Agudo del aloinjerto corneal. Se trata de una reacción de hipersensibilidad tipo IV mediada por linfocitos T citotóxicos CD8+ del receptor dirigidos contra antígenos HLA clase I y II de las células endoteliales donantes. Es una urgencia médica absoluta en oftalmología: si se trata en las primeras 24-48 horas con corticoides intravenosos en pulsos y corticoterapia tópica horaria intensiva, el rechazo se revierte en >85-90% de los casos. Si se demora, la pérdida endotelial será total e irreversible (falla tardía del injerto). En DALK, el riesgo de rechazo endotelial es CERO porque se conserva el endotelio propio.',
    clinicalApplication: 'PROTOCOLO DE URGENCIA DEL RECHAZO ENDOTELIAL: 1) Metilprednisolona 500-1000 mg IV en infusión diaria por 1-3 días (o Prednisona oral 1 mg/kg/día). 2) Acetato de prednisolona 1% o Dexametasona 0.1% tópica sin conservantes CADA HORA las 24 horas. 3) Inyección subconjuntival de rescate con Dexametasona 4-8 mg. 4) Ciclopléjico y control estricto de PIO (evitar análogos de PG). 5) Una vez revertida la línea, desescalar lentamente durante meses.',
    pearl: 'Línea de Khodadoust = Rechazo Endotelial Agudo (signo patognomónico). Tasa de rechazo endotelial: PKP: 15-25%; DSAEK: 8-10%; DMEK: <1-2%; DALK: 0% (endotelio propio preservado).',
    tags: ['Queratoplastia', 'PKP', 'DALK', 'DMEK', 'Rechazo Endotelial', 'Línea de Khodadoust']
  },
  {
    id: 'cornea-11',
    subspecialtyId: 'cornea',
    topic: 'Queratitis Ulcerativa Periférica (PUK), Vasculitis Sistémica y Peligro de AINEs Tópicos',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 53 años con antecedente de Artritis Reumatoide deformante acude a urgencias por dolor ocular terebrante severo, ojo rojo y fotofobia en su ojo izquierdo. A la biomicroscopía se evidencia un adelgazamiento estromal en canaleta yuxtalimbar superior en semiluna de 4 mm con pérdida de epitelio que deja ver un descemetocele inminente con riesgo de perforación ocular. La esclera contigua superior muestra hiperemia violácea profunda que no aclara con fenilefrina tópica (escleritis necrotizante asociada). Su médico de cabecera le indicó colirio de ketorolaco cada 8 horas hace 4 días para el dolor.',
    questionText: '¿Cuál es la gravedad sistémica pronóstica de este cuadro, por qué el ketorolaco tópico está FORMALMENTE PROHIBIDO y cuál es el esquema inmunosupresor sistémico obligado de rescate?',
    options: [
      'Es un adelgazamiento senil sin trascendencia; el ketorolaco es analgésico de elección; indicar lágrimas artificiales y alta.',
      'La PUK asociada a artritis reumatoide o vasculitis sistémica confiere una mortalidad sistémica a 5 años de hasta el 30-40% por infarto mesentérico o coronario si no se inmunosuprime; los AINEs tópicos (ketorolaco, diclofenaco) están FORMALMENTE PROHIBIDOS porque activan desproporcionadamente las metaloproteinasas de matriz estromales (MMP-1, MMP-9) e inhiben la síntesis de queratocitos, provocando necrosis licuefactiva fulminante ("corneal melt") y perforación en horas; el tratamiento requiere bolos intravenosos de Metilprednisolona (1 g/día por 3 días) seguidos de inmunosupresión biológica (Rituximab o Ciclofosfamida) en coordinación con Reumatología.',
      'Es una úlcera herpética sobreinfectada; requiere aciclovir oral y raspado con tinción de Gram.',
      'Es una degeneración marginal de Terrien; el ketorolaco no influye; requiere queratoplastia lamelar electiva en 6 meses.'
    ],
    correctIndex: 1,
    explanation: 'La Queratitis Ulcerativa Periférica (PUK) es una emergencia oftalmológica y médica mayor. Más del 50% de los pacientes tienen una enfermedad autoinmune sistémica oculta o activa (Artritis Reumatoide o Granulomatosis con Poliangitis GPA c-ANCA positiva). En pacientes con AR, la presencia de PUK refleja vasculitis necrotizante sistémica diseminada con una mortalidad no tratada del 30-40% a 5 años (ensayo landmark de Foster et al.). REGLA DE ORO CRÍTICA: Los AINEs tópicos (ketorolaco, diclofenaco, nepafenaco) están TERMINANTEMENTE CONTRAINDICADOS; al bloquear la ciclooxigenasa sin inhibir la lipooxigenasa ni las metaloproteinasas, provocan una sobreactivación destructiva de las colagenasas estromales con apoptosis de queratocitos, causando la temida lisis corneal licuefactiva hiperaguda ("corneal melt") y perforación en cuestión de horas.',
    clinicalApplication: 'CONDUCTA DE RESCATE EN GUARDIA: 1) Suspender inmediatamente cualquier AINE tópico. 2) Solicitar c-ANCA (anti-PR3), p-ANCA, Factor Reumatoide, anti-CCP y TC de tórax. 3) Ingreso para bolos IV de Metilprednisolona (1000 mg/día por 3 días) seguidos de Rituximab o Ciclofosfamida. 4) Doxiciclina oral 100 mg cada 12 horas (inhibe MMPs). 5) Si hay descemetocele: adhesivo tisular de cianoacrilato + lente de contacto terapéutica para prevenir perforación.',
    pearl: 'PUK Board Pearl: Adelgazamiento en semiluna yuxtalimbar + escleritis = Vasculitis sistémica con 40% de mortalidad a 5 años si no se trata con ciclofosfamida/rituximab. ¡AINEs tópicos formalmente CONTRAINDICADOS por inducir corneal melt y perforación!',
    tags: ['PUK', 'Artritis Reumatoide', 'GPA c-ANCA', 'Corneal melt', 'AINEs contraindicados', 'Cianoacrilato', 'Rituximab']
  },
  {
    id: 'cornea-12',
    subspecialtyId: 'cornea',
    topic: 'Deficiencia de Células Madre Límbicas (LSCD) y Reconstrucción Ocular con SLET Autólogo',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 26 años con antecedente de quemadura ocular química grave por cal viva en su ojo derecho hace 1 año presenta visión de movimiento de manos. A la exploración se observa ausencia total de las empalizadas de Vogt en los 360 grados del limbo, con invasión de un pannus fibrovascular opaco superficial que cubre la totalidad de la córnea y queratinización epitelial. La citología de impresión corneal con tinción de PAS demuestra abundantes células caliciformes en el centro de la córnea. El ojo izquierdo está completamente indemne con agudeza visual de 20/20 y limbo sano.',
    questionText: '¿Cuál es el significado de la citología de impresión, qué intervención quirúrgica está FORMALMENTE CONTRAINDICADA de forma primaria y cuál es el procedimiento reconstructivo estándar contemporáneo?',
    options: [
      'Las células caliciformes indican sobreinfección fúngica; la cirugía contraindicada es la vitrectomía; realizar crosslinking corneal de inmediato.',
      'La presencia de células caliciformes (goblet cells ricas en mucina) sobre la córnea es el Gold Standard diagnóstico de Deficiencia de Células Madre Límbicas (LSCD) con conjuntivalización patológica; está FORMALMENTE CONTRAINDICADO realizar un trasplante de córnea penetrante (PKP) primario (el injerto carece de células madre y fallará por conjuntivalización completa en el 100% de los casos); el procedimiento quirúrgico de elección es el SLET Autólogo (Simple Limbal Epithelial Transplantation), que utiliza una pequeña biopsia limbar de 2x1 mm del ojo sano contralateral dividida en microinjertos sembrados sobre membrana amniótica con cola de fibrina.',
      'Es un penfigoide ocular en estadio terminal; requiere queratoprótesis de Boston tipo II inmediata.',
      'Es una úlcera de Mooren bilateral; resecar la conjuntiva superior y aplicar mitomicina C al 0.04% tópica.'
    ],
    correctIndex: 1,
    explanation: 'En condiciones fisiológicas, la córnea posee un epitelio escamoso estratificado no queratinizado que carece de células caliciformes (las células caliciformes son exclusivas de la conjuntiva). La detección de células caliciformes en la superficie corneal mediante Citología de Impresión con PAS confirma de forma inequívoca el diagnóstico de Deficiencia de Células Madre Límbicas (LSCD) con conjuntivalización corneal completa. REGLA QUIRÚRGICA CAPITAL: Un trasplante de córnea convencional (PKP o DALK) está FORMALMENTE CONTRAINDICADO como cirugía primaria; la córnea donante carece de células madre limbares, por lo que el epitelio conjuntival del receptor colonizará el injerto en pocas semanas produciendo neovascularización y fallo irreversible. El estándar contemporáneo en LSCD unilateral es el SLET Autólogo (Sangwan et al., 2012): se extirpa el pannus, se fija una membrana amniótica humana con adhesivo de fibrina y se siembran de 8 a 12 microinjertos limbares obtenidos de una diminuta biopsia de 2x1 mm del ojo contralateral sano, restaurando un epitelio corneal transparente en >80-85% de los casos.',
    clinicalApplication: 'ALGORITMO EN DEFICIENCIA LÍMBICA: 1) Si es unilateral con ojo contralateral sano: SLET autólogo (técnica de elección mundial por su baja morbilidad donante). 2) Si es bilateral: aloinjerto limbar (KLAL o SLET alogénico) bajo inmunosupresión sistémica o trasplante de mucosa oral cultivada (COMET). 3) Queratoplastia óptica: Solo puede considerarse 6 a 12 meses DESPUÉS de haber restaurado con éxito un epitelio corneal estable mediante SLET.',
    pearl: 'LSCD Board Pearl: Células caliciformes (PAS+) en córnea = Diagnóstico definitivo de LSCD. Cirugía de elección en unilaterales: SLET autólogo sobre membrana amniótica. ¡NUNCA realizar queratoplastia penetrante primaria sin reconstruir previamente el limbo!',
    tags: ['LSCD', 'Células caliciformes', 'Citología de impresión', 'SLET autólogo', 'Membrana amniótica', 'Empalizadas de Vogt']
  },
  {
    id: 'cornea-13',
    subspecialtyId: 'cornea',
    topic: 'Penfigoide de Membranas Mucosas (MMP) vs Stevens-Johnson: Diagnóstico y Prevención de Ceguera Cicatrizal',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Caso A: Varón de 69 años con ojo rojo crónico bilateral de 18 meses tratado inútilmente como conjuntivitis alérgica; a la eversión palpebral se evidencia fibrosis subepitelial blanquecina con acortamiento del fondo de saco inferior a 4 mm y bridas de simbléfaron laterales fijas (Estadio II-III de Foster). La biopsia conjuntival con inmunofluorescencia directa revela una banda lineal continua de depósito de IgG y C3 en la zona de la membrana basal.\nCaso B: Joven de 22 años ingresada en la Unidad de Quemados con Necrólisis Epidérmica Tóxica (NET) inducida por carbamazepina hace 5 días, con desprendimiento epidérmico del 45% y desnudamiento epitelial masivo con pseudomembranas purulentas en ambos ojos.',
    questionText: '¿Cuál es la prueba diagnóstica obligada antes de iniciar la primera línea farmacológica en el Caso A y cuál es la intervención oftalmológica urgente determinante para salvar la visión en el Caso B?',
    options: [
      'En el Caso A solicitar cultivo bacteriano para Chlamydia; en el Caso B realizar queratoplastia penetrante bilateral inmediata.',
      'En el Caso A es OBLIGATORIO solicitar la dosificación de la enzima Glucosa-6-Fosfato Deshidrogenasa (G6PD) antes de iniciar Dapsona oral (para prevenir hemólisis intravascular mortal y metahemoglobinemia); en el Caso B la intervención determinante y costo-efectiva demostrada para prevenir la ceguera cicatrizal es la colocación URGENTE de Membrana Amniótica en fórnices y bordes palpebrales (ProKera o parche quirúrgico con bolsters) en los primeros 7 a 10 días de la enfermedad.',
      'En el Caso A solicitar serología para sífilis; en el Caso B aplicar colirios de gentamicina y dexametasona con conservantes.',
      'En el Caso A indicar lágrimas artificiales y operar catarata; en el Caso B no intervenir hasta que la piel cure a las 6 semanas.'
    ],
    correctIndex: 1,
    explanation: 'El caso confronta las dos grandes entidades cicatrizales de la superficie ocular: 1) PENFIGOIDE DE MEMBRANAS MUCOSAS (MMP): Enfermedad autoinmune progresiva con autoanticuerpos dirigidos contra la membrana basal (anti-BP180, laminina-332) demostrados por banda lineal continua de IgG/C3 en inmunofluorescencia directa (DIF). La Dapsona oral es el fármaco de elección en estadios leves a moderados; sin embargo, antes de prescribir dapsona es MANDATORIO determinar los niveles de G6PD en sangre: los pacientes con déficit enzimático sufren una hemólisis masiva fulminante y metahemoglobinemia letal. En estadios graves se recurre a Ciclofosfamida o Rituximab. 2) SÍNDROME DE STEVENS-JOHNSON / NET: Reacción aguda de hipersensibilidad tipo IV inducida por fármacos. En la fase hiperaguda (primeros 7-10 días), la colocación temprana de Membrana Amniótica Criopreservada en los fondos de saco y márgenes palpebrales es la única intervención con evidencia sólida que suprime la inflamación citotóxica mediada por granulisina y previene el simbléfaron, la destrucción de las células madre limbares y la queratinización terminal.',
    clinicalApplication: 'CONDUCTAS CRÍTICAS: 1) En Penfigoide: medir milimétricamente el fórnix inferior con regla; si hay simbléfaron, nunca realizar cirugías oculares electivas (catarata) sin inmunosupresión sistémica previa durante al menos 6 meses. 2) En SSJ/NET en UCI: acudir en las primeras 48 horas de ingreso hospitalario; colocar membrana amniótica en fórnices antes de que las pseudomembranas se organicen en fibrosis cicatrizal irreversible.',
    pearl: 'Penfigoide vs SSJ Board Pearl: Penfigoide = Autoanticuerpos en BMZ (DIF lineal IgG/C3); solicitar G6PD obligada antes de iniciar Dapsona. SSJ = Reacción aguda a fármacos; colocación urgente de Membrana Amniótica en fórnices en los primeros 7 días previene la ceguera cicatrizal.',
    tags: ['Penfigoide ocular', 'MMP', 'Stevens-Johnson', 'NET', 'Dapsona', 'G6PD', 'Membrana amniótica']
  },
  {
    id: 'cornea-14',
    subspecialtyId: 'cornea',
    topic: 'Queratopatía Neurotrófica (NK): Denervación Trigeminal V1 (Mackie) y Terapia Biológica con Cenegermina (rhNGF)',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Paciente de 59 años con antecedente de resección de neurinoma del acústico (schwannoma vestibular) por fosa posterior derecha hace 4 meses consulta por ojo rojo y visión borrosa en su ojo derecho. A la biomicroscopía se evidencia un defecto epitelial persistente (PED) central ovalado de 4x3 mm con bordes enrollados, lisos y engrosados que tiñe con fluoresceína, con edema estromal y paquimetría de 620 µm. A pesar del gran tamaño del defecto, el paciente asegura NO SENTIR NINGÚN DOLOR, sensación de cuerpo extraño ni fotofobia. El test de Cochet-Bonnet demuestra anestesia corneal completa (0 cm de filamento en los 4 cuadrantes).',
    questionText: '¿Cuál es la clasificación del estadio clínico según Mackie, qué colirios están formalmente contraindicados y cuál es el tratamiento biológico de vanguardia aprobado capaz de regenerar los nervios corneales?',
    options: [
      'Estadio 1 de Mackie; contraindicadas las lágrimas artificiales; indicar raspado de bordes con hoja de bisturí.',
      'Queratopatía Neurotrófica (NK) Estadio 2 de Mackie (Defecto Epitelial Persistente ovalado de bordes enrollados indoloro); están FORMALMENTE CONTRAINDICADOS los colirios con conservantes (especialmente Cloruro de Benzalconio BAK) y los AINEs tópicos por inducir lisis estromal rápida y perforación; el tratamiento biológico de vanguardia de elección es la CENEGERMINA al 0.002% (factor de crecimiento nervioso humano recombinante rhNGF - Oxervate), administrada 1 gota 6 veces al día durante 8 semanas continuas, que estimula la proliferación epitelial y la regeneración axonal del plexo nervioso subbasal.',
      'Queratitis por exposición pura por lagoftalmos; indicar inyección de toxina botulínica en el músculo orbicular.',
      'Queratitis bacteriana agresiva por Pseudomonas; pautar ciprofloxacino colirio cada 15 minutos.'
    ],
    correctIndex: 1,
    explanation: 'La Queratopatía Neurotrófica (NK) se debe al daño de la división oftálmica del nervio trigémino (V1), frecuente tras cirugía de fosa posterior (neurinoma del acústico) o infecciones herpéticas. Al perderse la inervación sensorial, la córnea pierde el arco reflejo lagrimal y se priva de neuropéptidos tróficos esenciales (Sustancia P, CGRP, NGF), produciendo defectos epiteliales que no cicatrizan. La Clasificación de Mackie define: Estadio 1 (queratopatía punteada e hiperplasia turbia), Estadio 2 (Defecto Epitelial Persistente [PED] ovalado de bordes lisos enrollados y engrosados sin dolor) y Estadio 3 (úlcera estromal y perforación). REGLA TERAPÉUTICA MODERNA: Cenegermina tópica al 0.002% (rhNGF - Oxervate) es el primer fármaco biológico neurotrófico aprobado (ensayos REPARO y DEFENDO); se pauta 6 veces al día durante 8 semanas y logra la curación epitelial completa en más del 70-80% de los casos regenerando el plexo nervioso subbasal. Los colirios con BAK y AINEs tópicos están contraindicados absolutamente por su citotoxicidad celular.',
    clinicalApplication: 'CONDUCTA PRÁCTICA EN QUERATOPATÍA NEUROTROFICA: 1) Evaluar siempre la sensibilidad corneal ante cualquier defecto epitelial indoloro con filamento de algodón o Cochet-Bonnet. 2) Cero conservantes: todo colirio debe ser unidosis sin BAK. 3) Cenegermina 0.002% tópica como primera línea biológica curativa; si no se dispone: suero autólogo al 20-50% y tarsorrafia temporal lateral (o ptosis con toxina botulínica en el elevador). 4) Si hay adelgazamiento grave (Mackie 3): membrana amniótica o cianoacrilato.',
    pearl: 'Queratopatía Neurotrófica Board Pearl: Denervación de V1 trigeminal. Defecto epitelial persistente ovalado de bordes enrollados indoloro (Mackie 2). Tratamiento biológico de vanguardia: Cenegermina al 0.002% (rhNGF tópica 6 veces/día por 8 semanas) que regenera axones subbasales. ¡Prohibidos colirios con BAK y AINEs!',
    tags: ['Queratopatía neurotrófica', 'NK', 'Mackie 2', 'Cenegermina', 'Oxervate', 'rhNGF', 'Neurinoma del acústico', 'Anestesia corneal']
  },

  // GLAUCOMA: Glaucoma Neovascular
  {
    id: 'glaucoma-04',
    subspecialtyId: 'glaucoma',
    topic: 'Glaucoma Neovascular y Rubeosis de Iris',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Paciente diabético de 63 años con antecedente de oclusión de vena central de retina isquémica hace 3 meses acude con dolor ocular severo y PIO OD = 52 mmHg. En la lámpara de hendidura se observan neovasos finos en el borde pupilar (rubeosis iridis) y en la gonioscopia se aprecian sinequias anteriores periféricas que cierran el ángulo iridocorneal en 360 grados como una "cremallera".',
    questionText: '¿Cuál es el mecanismo fisiopatológico del cierre angular y cuál es la terapia combinada urgente indicada?',
    options: [
      'Bloqueo pupilar relativo por catarata hipermadura; realizar iridotomía periférica con láser YAG.',
      'Contracción de una membrana fibrovascular sobre la malla trabecular que cierra el ángulo por sinequias; requiere Anti-VEGF intravítreo inmediato + Panfotocoagulación retiniana (PFC) + Cirugía con implante de drenaje (Válvula de Ahmed).',
      'Dispersión masiva de pigmento; indicar trabeculoplastia láser selectiva (SLT).',
      'Desprendimiento ciliocoroideo con rotación anterior del cuerpo ciliar; indicar atropina y corticoides sistémicos.'
    ],
    correctIndex: 1,
    explanation: 'El glaucoma neovascular (GNV) es consecuencia de una isquemia retiniana extensa (OVCR isquémica [glaucoma de los 100 días], retinopatía diabética proliferativa, OACR). La hipoxia retiniana estimula la liberación masiva de VEGF hacia el vítreo y cámara anterior, formando una membrana fibrovascular en el ángulo. Con el tiempo, los miofibroblastos de la membrana se contraen, "cerrando el ángulo como una cremallera" mediante sinequias anteriores periféricas (PAS). El tratamiento requiere frenar el estímulo angiogénico con Anti-VEGF intravítreo/intracameral y Panfotocoagulación Retiniana (PFC) de la retina isquémica periférica, seguido de cirugía con implante de válvula de Ahmed (la trabeculectomía clásica fracasa por la inflamación y neovasos).',
    clinicalApplication: 'CONDUCTA EN GUARDIA: 1) Inyección intravítrea o intracameral urgente de Anti-VEGF (Bevacizumab, Ranibizumab o Aflibercept) para inducir regresión de los neovasos en 24-48 horas. 2) Hipotensores tópicos (Beta-bloqueante + Alfa-2 agonista + IAC tópico/oral) y Corticoide tópico (Prednisolona 1% para reducir inflamación). Evitar análogos de PG por inflamación. 3) Panfotocoagulación retiniana (PFC) completa. 4) Implante de válvula de Ahmed si el ángulo está sinequiado.',
    pearl: 'El glaucoma neovascular post-OVCR se conoce clásicamente como el "Glaucoma de los 100 días". La trabeculectomía convencional suele fallar; el implante valvular (Ahmed/Baerveldt) es el procedimiento de elección.',
    tags: ['Glaucoma neovascular', 'Rubeosis', 'Anti-VEGF', 'Válvula de Ahmed', 'PFC']
  },
  {
    id: 'glaucoma-05',
    subspecialtyId: 'glaucoma',
    topic: 'Glaucoma Congénito Primario: Buftalmos, Megalocórnea y Cirugía de Ángulo',
    difficulty: 'R1 - Inicial',
    clinicalVignette: 'Lactante de 4 meses es llevado a consulta por epífora continua sin secreción conjuntival purulenta, fotofobia tan intensa que entierra la cara contra el pecho de la madre y blefaroespasmo en ambos ojos. A la exploración presenta córneas con edema lechoso difuso, diámetro corneal horizontal de 12.9 mm bilateral y líneas curvilíneas dobles refringentes en membrana de Descemet (Estrías de Haab). La PIO medida bajo anestesia es de 32 mmHg en OD y 34 mmHg en OI.',
    questionText: '¿Cuál es el tratamiento definitivo de elección según la transparencia corneal y qué fármaco hipotensor está FORMALMENTE CONTRAINDICADO con riesgo de muerte por depresión respiratoria central?',
    options: [
      'Tratamiento médico exclusivo con colirio de Brimonidina 0.2% cada 8 horas sin requerir cirugía; el timolol está contraindicado.',
      'El tratamiento definitivo es EMINENTEMENTE QUIRÚRGICO (Goniotomía si la córnea permite visualización del ángulo, o Trabeculotomía ab externo / circunferencial de 360º si la córnea está opaca); la BRIMONIDINA está FORMALMENTE CONTRAINDICADA en menores de 2 años por cruzar la barrera hematoencefálica causando somnolencia, coma y apnea potencialmente letal.',
      'Fotocoagulación con láser argón de la retina periférica; contraindicada la pilocarpina.',
      'Observación hasta los 3 años para que maduren las vías lagrimales; contraindicada la dorzolamida.'
    ],
    correctIndex: 1,
    explanation: 'El Glaucoma Congénito Primario (GCP) se debe a una disgenesia aislada del ángulo iridocorneal (mutaciones en CYP1B1). Como la esclera y córnea del lactante son elásticas, la PIO elevada produce distensión de todo el globo (buftalmos), córneas patológicamente grandes (megalocórnea >12.0 mm en <1 año) y roturas de la membrana de Descemet (Estrías de Haab). El tratamiento es EMINENTEMENTE QUIRÚRGICO DE URGENCIA: Goniotomía ab interno de Barkan si la córnea es transparente, o Trabeculotomía ab externo / circunferencial si la córnea está opaca. PERLA CRÍTICA DE SEGURIDAD: La Brimonidina (alfa-2 agonista lipofílico) cruza con facilidad la barrera hematoencefálica inmadura en neonatos y lactantes <2 años, provocando hipotermia, bradicardia, depresión profunda del SNC y parada respiratoria/apnea.',
    clinicalApplication: 'CONDUCTA DE GUARDIA Y QUIRÓFANO: 1) Todo lactante con epífora y fotofobia exige medir el diámetro corneal con compás o regla; si es >12 mm, programar Examen Bajo Anestesia (EUA) urgente. 2) Medir PIO con tonómetro de Perkins en los primeros 5 minutos de la inducción antes de que el sevoflurano baje la PIO. 3) NUNCA recetar Brimonidina en <2 años. 4) Realizar cirugía de ángulo (Goniotomía o Trabeculotomía). 5) Tras el control tensional, corrección óptica temprana y oclusión para tratar ambliopía.',
    pearl: 'Glaucoma Congénito Board Pearl: Cirugía urgente de elección (Goniotomía si córnea clara, Trabeculotomía si opaca). Brimonidina PROHIBIDA en <2 años por riesgo de apnea y coma. Excavación elásticamente reversible.',
    tags: ['Glaucoma congénito', 'Buftalmos', 'Estrías de Haab', 'Goniotomía', 'Trabeculotomía', 'Brimonidina contraindicada']
  },
  {
    id: 'glaucoma-06',
    subspecialtyId: 'glaucoma',
    topic: 'Ensayo OHTS, Paquimetría Corneal Central y Hemorragia de Drance',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 58 años sin antecedentes acude a revisión general. La tonometría de Goldmann repetida muestra una PIO de 25 mmHg en OD y 24 mmHg en OI. En la biomicroscopía la cámara anterior es profunda y el ángulo está abierto (Shaffer 4 en 360º). La oftalmoscopia revela papilas con relación copa/disco vertical de 0.5 simétrica, pero en el reborde temporal-inferior de OD se visualiza una microhemorragia lineal en astilla (hemorragia de Drance). La paquimetría corneal central ultrasónica (CCT) informa 505 micras en ambos ojos.',
    questionText: 'Conforme a la evidencia de los ensayos OHTS y EMGT, ¿cuál es el significado pronóstico de la paquimetría fina (<555 µm) y la presencia de la hemorragia de Drance, y cuál es la conducta clínica apropiada?',
    options: [
      'La paquimetría fina subestima la PIO real pero no tiene valor pronóstico; la hemorragia es un vaso frágil sin repercusión; mantener en observación anual.',
      'Según el ensayo OHTS, una córnea delgada (<555 µm) es el factor pronóstico independiente más potente para el desarrollo de glaucoma (triplica el riesgo de progresión); la hemorragia de Drance es un signo inequívoco de daño mecánico/isquémico activo que predice una muesca y defecto campimétrico en 12-18 meses; la conducta obligada es iniciar tratamiento hipotensor inmediato reduciendo la PIO basal en >=30% y solicitar campo visual y OCT.',
      'Indicar anticoagulación oral inmediata con warfarina para disolver el microtrombo de la hemorragia papilar.',
      'Realizar iridotomía periférica con láser YAG bilateral de urgencia por riesgo de cierre angular agudo.'
    ],
    correctIndex: 1,
    explanation: 'El ensayo multicéntrico OHTS (Ocular Hypertension Treatment Study) demostró que el grosor corneal central fino (<555 µm) es el factor de riesgo independiente más potente para predecir la conversión de hipertensión ocular a glaucoma primario de ángulo abierto (riesgo 3 veces superior al de córneas >588 µm). Además, una córnea fina de 505 µm subestima la PIO real en tonometría de aplanación de Goldmann. La Hemorragia de Drance (en astilla en el reborde del disco) es un biomarcador clínico cardinal de daño axonal activo y progresión rápida en curso (cizallamiento en la lámina cribosa); su presencia predice la aparición de una muesca en el reborde y un defecto campimétrico en el mismo cuadrante en los siguientes 12-18 meses. Por ello, la paciente no puede considerarse una hipertensa ocular sana: tiene daño activo y requiere tratamiento hipotensor precoz con reducción de la PIO meta en >=30% (ensayo EMGT).',
    clinicalApplication: 'CONDUCTA PRÁCTICA: 1) Paquimetría <555 µm + hemorragia de disco = ALTO RIESGO de progresión rápida. 2) Iniciar análogo de prostaglandina (Latanoprost 0.005% nocturno) o SLT de 360º según ensayo LiGHT. 3) Solicitar campo visual Humphrey 24-2 basal y OCT de CFNR/GCC. Si el defecto se acerca a 5º del centro, solicitar campo 10-2.',
    pearl: 'OHTS Landmark Rule: Paquimetría <555 µm triplica el riesgo de glaucoma. Hemorragia de Drance = Daño axonal activo en curso; obliga a intensificar el tratamiento y reducir la PIO meta un 20-30% adicional de inmediato.',
    tags: ['OHTS', 'EMGT', 'Paquimetría fina', 'Hemorragia de Drance', 'CCT <555', 'GPAA']
  },
  {
    id: 'glaucoma-07',
    subspecialtyId: 'glaucoma',
    topic: 'Cirugía Filtrante: Manejo de Ampolla de Trabeculectomía con MMC, Seidel y Blebitis',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Paciente de 66 años intervenido de trabeculectomía con Mitomicina C (0.2 mg/mL por 2 min) en ojo derecho hace 2 años acude por dolor ocular sordo, enrojecimiento y secreción matutina. A la lámpara de hendidura se observa una ampolla de filtración avascular quística en "papel de fumar" en el sector superior, con acúmulo de material lechoso blanco-purulento en su interior (infiltrado intra-ampollar). A la tinción con fluoresceína y luz de cobalto se evidencia dilución en corriente del colorante (Test de Seidel positivo sobre la cúpula de la ampolla). La cámara anterior tiene flare 1+ con 4-5 células/campo, pero no hay hipopión ni vitrítis posterior.',
    questionText: '¿Cuál es el diagnóstico diferencial exacto, qué patógenos bacterianos son los más frecuentes y cuál es el protocolo terapéutico intensivo?',
    options: [
      'Endoftalmitis difusa hiperaguda por Pseudomonas; requiere enucleación primaria inmediata.',
      'Blebitis (infección localizada de la ampolla filtrante con Seidel positivo sin compromiso del humor vítreo); gérmenes más frecuentes: Streptococcus pneumoniae, Haemophilus influenzae y Moraxella; requiere hospitalización o manejo ambulatorio estricto con colirios antibióticos fortificados tópicos (Vancomicina 50 mg/mL + Ceftazidima 50 mg/mL o fluoroquinolona de 4ª generación cada 30-60 minutos) y reparación quirúrgica de la ampolla si persiste la fuga tras resolver la infección.',
      'Rechazo de trasplante escleral; requiere bolos de metilprednisolona intravenosa 1 g/día.',
      'Queratoconjuntivitis alérgica estacional; colirio de olopatadina 0.1% cada 12 horas.'
    ],
    correctIndex: 1,
    explanation: 'Las ampollas filtrantes tras trabeculectomía con antimetabolitos (Mitomicina C) pueden volverse extremadamente delgadas, avasculares y quísticas, con riesgo permanente de por vida de microfugas (Seidel positivo) e infecciones asociadas a la ampolla. Es vital diferenciar dos entidades: 1) BLEBITIS (infección confinada a la ampolla): La ampolla pierde su transparencia y se llena de material mucopurulento blanco-lechoso ("white on red"), pero la cámara anterior tiene celularidad leve sin hipopión y el vítreo está limpio y transparente con visión conservada. Patógenos típicos: Streptococcus pneumoniae, Streptococcus viridans, Haemophilus influenzae y Staphylococcus aureus. Tratamiento: Antibióticos fortificados tópicos intensivos cada 30-60 minutos (Vancomicina + Ceftazidima/Gentamicina) para evitar su extensión a endoftalmitis. 2) ENDOFTALMITIS ASOCIADA A AMPOLLA (Bleb-related endophthalmitis): Invasión bacteriana de cámara anterior y vítreo con hipopión denso, vitrítis con pérdida del fulgor pupilar y dolor intenso; requiere inyecciones intravítreas inmediatas de Vancomicina + Ceftazidima o vitrectomía de urgencia.',
    clinicalApplication: 'CONDUCTA CRÍTICA EN AMPOLLAS DE FILTRACIÓN: 1) Todo paciente operado de trabeculectomía con ojo rojo debe someterse a lámpara de hendidura con luz de cobalto y fluoresceína al 2% para descartar Seidel y blebitis. 2) Si hay material purulento en la ampolla pero el vítreo está limpio (Blebitis): cultivo conjuntival e inicio inmediato de colirios fortificados. 3) Si hay vitrítis o hipopión (Endoftalmitis): punción vítrea inmediata con antibióticos intravítreas. 4) Una vez resuelta la infección, si persiste Seidel activo con ampolla avascular delgada: realizar avance conjuntival o parche de esclera/membrana amniótica.',
    pearl: 'Manejo de Ampolla Filtrante: Diferenciar Blebitis (ampolla lechosa + vítreo limpio = colirios fortificados cada 30 min) de Endoftalmitis (hipopión + vitrítis = inyección intravítrea inmediata de vancomicina + ceftazidima). Las ampollas tratadas con MMC tienen riesgo infeccioso de por vida.',
    tags: ['Trabeculectomía', 'Mitomicina C', 'Blebitis', 'Seidel positivo', 'Endoftalmitis asociada a ampolla', 'Ampolla avascular']
  },
  {
    id: 'glaucoma-08',
    subspecialtyId: 'glaucoma',
    topic: 'Glaucoma de Presión Normal (GPN): Ensayo CNTGS y Red Flags para Neuroimagen',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 48 años remitido para valoración por "Glaucoma de Presión Normal avanzado" en ojo izquierdo. Refiere pérdida visual indolora rápidamente progresiva en los últimos 6 meses. La PIO por aplanación es de 15 mmHg en OD y 16 mmHg en OI con paquimetría de 545 µm. En la oftalmoscopia de OI se observa una copa/disco de 0.75, pero con un anillo neuroretiniano temporal intensamente pálido y lechoso ("palidez > excavación"). El campo visual Humphrey revela un defecto temporal que respeta de forma estricta la línea media vertical y el test de Ishihara evidencia 3/15 aciertos en OI frente a 15/15 en OD.',
    questionText: '¿Cuál es la interpretación diagnóstica de estos hallazgos según las guías clínicas de neuropatías ópticas y cuál es la conducta de elección obligatoria?',
    options: [
      'Se trata de un GPN típico muy agresivo; indicar trabeculectomía con Mitomicina C inmediata sin requerir estudios complementarios.',
      'El paciente presenta múltiples "Banderas Rojas" (Red Flags) que DESCARTAN el glaucoma: la disociación "palidez del anillo > excavación", la pérdida rápida de agudeza visual, la desaturación precoz del color y el respeto del meridiano vertical son signos de lesión compresiva de vía óptica (quiasma o nervio óptico retrobulbar); la conducta obligada es solicitar de urgencia una Resonancia Magnética cerebral y orbitaria con contraste para descartar adenoma hipofisario o meningioma.',
      'Es una neuropatía óptica isquémica anterior arterítica; iniciar bolos intravenosos de metilprednisolona 1 g/día y biopsia de la arteria temporal.',
      'Es un pseudoglaucoma genético por mutación de WDR36; indicar suplementación oral con citicolina y seguimiento anual.'
    ],
    correctIndex: 1,
    explanation: 'En el Glaucoma primario (incluido el GPN), la excavación se amplía y se profundiza, pero el tejido neuroretiniano remanente conserva su coloración rosada y vascularizada normal; además, los defectos campimétricos glaucomatosos respetan el rafe HORIZONTAL (escalón nasal de Rønne). La presencia de "palidez desproporcionada del anillo respecto a la excavación" (anillo pálido sin copa total), respeto del meridiano VERTICAL (sugestivo de afección quiasmática con hemianopsia bitemporal), alteración temprana y severa de la visión de colores (desaturación del rojo) y progresión rápida en un paciente menor de 50 años son "RED FLAGS" (banderas rojas) patognomónicas de una NEUROPATÍA ÓPTICA COMPRESIVA O RETROBULBAR (adenoma hipofisario, meningioma selar/esfenoidal, craneofaringioma). Es un error médico grave pautar colirios y demorar una Resonancia Magnética cerebral y orbitaria.',
    clinicalApplication: 'ALGORITMO CLÍNICO DE RED FLAGS EN GPN: 1) Si detecta palidez > excavación o respeto del meridiano vertical: RM cráneo-órbita urgente con cortes finos selar-paraselares. 2) Interconsulta con Endocrinología (descartar panhipopituitarismo o hiperprolactinemia). 3) Recordar la evidencia del ensayo landmark CNTGS en el GPN verdadero: una reducción de al menos 30% en la PIO basal frena la progresión campimétrica del 35% al 12% a los 5 años.',
    pearl: 'GPN Board Pearl: Excavación = Glaucoma. Palidez mayor que excavación = Tumor compresivo de vía óptica hasta demostrar lo contrario en RM. Los defectos que respetan la línea media vertical apuntan al quiasma óptico.',
    tags: ['GPN', 'Red Flags', 'Resonancia Magnética', 'Adenoma hipofisario', 'Palidez vs Excavación', 'CNTGS']
  },
  {
    id: 'glaucoma-09',
    subspecialtyId: 'glaucoma',
    topic: 'Farmacología Ocular en Embarazo y Lactancia: Toxicidad y Apnea Neonatal por Brimonidina',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 33 años con glaucoma pigmentario moderado que utilizaba una combinación fija de Latanoprost y Brimonidina acude a consulta tras confirmar un embarazo de 6 semanas. Posteriormente, tras un parto a término sin incidentes, la paciente consulta durante el puerperio inmediato (día 5 de vida del recién nacido) porque desea reanudar su terapia tópica mientras alimenta a su hijo exclusivamente con leche materna.',
    questionText: '¿Cuál es la categorización de seguridad fetal y neonatal de estos fármacos y qué contraindicación absoluta debe comunicarse de forma imperativa durante la lactancia?',
    options: [
      'Las prostaglandinas son Categoría A y pueden usarse en el parto; la brimonidina es completamente inocua durante la lactancia y estimula la producción de leche.',
      'Los análogos de prostaglandinas (Categoría C) pueden inducir contracciones uterinas prematuras y aborto por estimulación de receptores prostanoides miometriales; la Brimonidina (Categoría B en gestación) está FORMALMENTE CONTRAINDICADA DE FORMA ABSOLUTA EN LACTANCIA Y RECIÉN NACIDOS, ya que se concentra intensamente en la leche materna y cruza la barrera hematoencefálica inmadura del neonato produciendo hipotermia, sedación profunda, coma y APNEA CENTRAL NEONATAL POTENCIALMENTE LETAL.',
      'Todos los colirios para glaucoma son seguros durante la lactancia materna siempre que se administren después de las tomas.',
      'Debe realizarse de inmediato una trabeculectomía con Mitomicina C a dosis plenas durante el puerperio para evitar cualquier uso de colirios.'
    ],
    correctIndex: 1,
    explanation: 'El manejo del glaucoma periparto y perinatal tiene reglas farmacológicas estrictas: 1) Los análogos de prostaglandinas (Latanoprost, Bimatoprost, Travoprost) son Categoría C; tienen actividad oxitocicomimética sobre el miometrio uterino y conllevan riesgo de inducir contracciones prematuras y parto pretérmino. 2) La Brimonidina es paradójica: durante el embarazo es de Categoría B (la más segura de los hipotensores en el 1er y 2º trimestre), pero en la LACTANCIA MATERNA Y EN MENORES DE 2 AÑOS ESTÁ TERMINANTEMENTE PROHIBIDA Y CONTRAINDICADA. La brimonidina se excreta y concentra de forma notable en la leche materna; al ser ingerida por el lactante, atraviesa fácilmente su inmadura barrera hematoencefálica, estimulando receptores alfa-2 centrales e induciendo depresión respiratoria grave, paro respiratorio por apnea central, bradicardia, hipotensión y coma.',
    clinicalApplication: 'CONDUCTA EN LACTANCIA: 1) NUNCA prescribir Brimonidina a madres en periodo de lactancia activa ni a niños menores de 2 años. 2) En el embarazo, si se requiere tratamiento no invasivo, la Trabeculoplastia Láser Selectiva (SLT) es el procedimiento ideal por carecer de toxicidad fetal. 3) Si la madre lactante requiere fármacos: optar por betabloqueantes a dosis baja (Betaxolol o Timolol) con Oclusión Lagrimonasal (NLO) estricta durante 3-5 minutos inmediatamente después de amamantar.',
    pearl: 'Embarazo y Lactancia Board Pearl: Brimonidina = Categoría B en embarazo (segura en 1er trimestre), pero ¡CONTRAINDICACIÓN ABSOLUTA EN LACTANCIA Y RECIÉN NACIDOS! Provoca apnea neonatal fatal y coma por cruce de barrera hematoencefálica.',
    tags: ['Embarazo', 'Lactancia', 'Brimonidina', 'Apnea neonatal', 'Latanoprost', 'SLT']
  },
  {
    id: 'glaucoma-10',
    subspecialtyId: 'glaucoma',
    topic: 'Síndromes Hipertensivos Inflamatorios: Síndrome de Posner-Schlossman vs Ciclitis Heterocrómica de Fuchs',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Caso A: Varón de 32 años presenta episodios recurrentes unilaterales de visión borrosa leve y halos de colores alrededor de las luces. En el episodio actual la PIO es de 48 mmHg en OD con cámara anterior profunda, flare leve (1+), 3 precipitados queráticos redondos blanquecinos no pigmentados en área central y gonioscopia con ángulo abierto sin sinequias.\nCaso B: Mujer de 38 años consulta por miodesopsias en OI. A la biomicroscopia presenta un iris atrófico más claro con pérdida del patrón de criptas (heterocromía), precipitados queráticos estrellados finos distribuidos de forma difusa en 360 grados por todo el endotelio corneal unidos por fibrina, catarata subcapsular posterior precoz y ausencia total de sinequias posteriores. Al realizar una paracentesis diagnóstica se produce un microhifema filiforme espontáneo en el ángulo camerular opuesto.',
    questionText: '¿Cuál es el diagnóstico diferencial exacto, la etiología infecciosa subyacente y la directriz terapéutica fundamental en cada caso?',
    options: [
      'Ambos casos son ataques de cierre angular primario subagudo; requieren iridotomía bilateral con láser Nd:YAG inmediata.',
      'El Caso A corresponde a una Crisis Glaucomatociclítica (Síndrome de Posner-Schlossman), asociada etiológicamente a Citomegalovirus (CMV) o Herpes (HSV), tratada con corticoides tópicos, supresores de acuoso y antivirales específicos (Ganciclovir/Valganciclovir) evitando análogos de prostaglandinas; el Caso B es un Síndrome Uveítico de Fuchs (Ciclitis de Fuchs), asociado a Rubéola/CMV, con el Signo de Amsler positivo (sangrado por fragilidad de neovasos angulares sin membrana) y la regla de oro de AUSENCIA de sinequias posteriores, donde los corticoides tópicos crónicos están DESACONSEJADOS porque no resuelven la inflamación y aceleran la catarata y el glaucoma corticoideo.',
      'El Caso A es un glaucoma facolítico por catarata hipermadura; el Caso B es un síndrome endotelial iridocorneal (variante de Chandler).',
      'Ambos casos corresponden a toxoplasmosis ocular activa con hipertensión; requieren sulfadiacina y pirimetamina oral.'
    ],
    correctIndex: 1,
    explanation: 'El caso ilustra los dos grandes síndromes hipertensivos inflamatorios: 1) SÍNDROME DE POSNER-SCHLOSSMAN (Crisis Glaucomatociclítica): Marcada discordancia clínico-tensional (PIO 40-50 mmHg con síntomas mínimos y escasa celularidad 1+). Se asocia a trabeculitis activa por Citomegalovirus (CMV en >50-70% de casos por PCR) o HSV. Tratamiento: corticoide tópico breve, supresores de producción de humor acuoso (Timolol, Dorzolamida) y ganciclovir tópico u oral. ¡CONTRAINDICADOS análogos de PG por exacerbar la inflamación y causar edema macular quistoide! 2) SÍNDROME UVEÍTICO DE FUCHS: Asociación con infección persistente por virus de la Rubéola. Signos cardinales: Heterocromía de iris (iris más claro o hipocrómico con aspecto apolillado), precipitados queráticos estrellados difusos de 360º (panendoteliales), nódulos de Koeppe/Busacca y el patognomónico SIGNO DE AMSLER (microhifema filiforme en cámara anterior tras punción o descompresión rápida por sangrado de vasos anómalos frágiles en el ángulo). REGLAS DE ORO DE FUCHS: ¡NUNCA presenta sinequias posteriores! y ¡NO responde a corticoides tópicos! (los esteroides sólo precipitan catarata y glaucoma cortisónico severo sin modificar la celularidad vítrea ni anterior).',
    clinicalApplication: 'CONDUCTA PRÁCTICA EN CONSULTA: 1) Si sospecha Posner-Schlossman recurrente: Solicitar PCR de humor acuoso para CMV y HSV. Iniciar Valganciclovir o Ganciclovir gel si es positivo. 2) En sospecha de Fuchs: Verificar que no haya sinequias posteriores (si hay sinequias, buscar sarcoidosis o VKH, no es Fuchs). Informar a la paciente que no debe utilizar colirios de corticoides para la inflamación leve crónica.',
    pearl: 'Uveítis Hipertensivas Board Pearl: Posner-Schlossman = PIO 40-50 mmHg con inflamación mínima + CMV; evitar prostaglandinas. Fuchs = Precipitados estrellados difusos 360º + heterocromía + NUNCA sinequias posteriores + Signo de Amsler; ¡prohibido tratar celularidad con corticoides crónicos!',
    tags: ['Posner-Schlossman', 'Ciclitis de Fuchs', 'Signo de Amsler', 'CMV', 'Rubéola', 'Sin sinequias posteriores', 'Trabeculitis']
  },
  {
    id: 'glaucoma-11',
    subspecialtyId: 'glaucoma',
    topic: 'Síndrome de Dispersión Pigmentaria (SDP) y Glaucoma Pigmentario: Mecánica del Iris Cóncavo y SLT',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 29 años con miopía de -4.50 D acude a urgencias por cefalea periorbitaria, visión borrosa transitoria y visión de halos coloreados en ambos ojos tras completar una sesión de levantamiento de pesas en el gimnasio. En la lámpara de hendidura se observa un huso de Krukenberg vertical en el endotelio corneal central bilateral, cámara anterior anormalmente profunda e iris periférico con marcada concavidad posterior. La gonioscopia de 4 espejos muestra un ángulo muy abierto (Shaffer 4) con hiperpigmentación homogénea densa de 360º (grado 4+) en la malla trabecular y una línea de Sampaolesi muy visible. La PIO actual es de 38 mmHg en OD y 36 mmHg en OI.',
    questionText: '¿Cuál es el mecanismo biofísico de la dispersión de pigmento, qué precaución técnica crítica debe aplicarse al realizar una Trabeculoplastia Láser Selectiva (SLT) y qué riesgo adicional tiene la pilocarpina en estos ojos?',
    options: [
      'El pigmento se desprende por fricción pupilar en el cristalino; la SLT debe aplicarse con la máxima energía disponible (1.5 mJ) en 360 grados; la pilocarpina es totalmente inocua.',
      'Existe un Bloqueo Pupilar Invertido (Reverse Pupillary Block) con gradiente de presión anteroposterior que vuelve al iris cóncavo, provocando fricción iridozonular abrasiva durante la acomodación y movimientos pupilares que se exacerba con el ejercicio extenuante; en la SLT se DEBE REDUCIR LA ENERGÍA a 0.3-0.5 mJ y tratar sólo 90-180º por sesión debido a que la intensa carga de pigmento trabecular absorbe masivamente la radiación, con riesgo de desencadenar un pico hipertensivo reactivo post-láser devastador (>40-50 mmHg); los mióticos como la pilocarpina contraen el músculo ciliar aumentando el riesgo de desgarro y desprendimiento de retina regmatógeno en estos pacientes con miopía axial y degeneración en empalizada.',
      'Es un síndrome de pseudoexfoliación juvenil por mutación en LOXL1; requiere facoemulsificación inmediata con anillo de tensión capsular.',
      'Es una melanocitosis ocular congénita con obstrucción trabecular por nevus de Ota; requiere enucleación diagnóstica.'
    ],
    correctIndex: 1,
    explanation: 'El Glaucoma Pigmentario se origina por un Bloqueo Pupilar Invertido: el iris actúa como una válvula unidireccional permitiendo que el humor acuoso pase a la cámara anterior pero impidiendo su retorno libre, lo que empuja el iris periférico hacia atrás (iris cóncavo). Las fibras zonulares rozan continuamente contra el epitelio pigmentario del iris (fricción iridozonular), desprendiendo millones de gránulos de melanina que ocluyen la malla trabecular. El ejercicio físico extenuante o la midriasis inducen lluvias agudas masivas de pigmento con picos de PIO muy elevados. PRECAUCIONES OBLIGADAS: 1) En la SLT, como la malla tiene pigmentación grado 4+, la absorción lumínica es altísima; si se usa energía estándar (0.8-1.0 mJ), se induce una necrosis trabecular hiperaguda con pico hipertensivo severo; debe reducirse la energía (0.3-0.5 mJ) y tratar sólo 180º. 2) La Pilocarpina aplana el iris cóncavo pero contrae el músculo ciliar traccionando la base del vítreo; en estos pacientes jóvenes con miopía moderada/alta y degeneraciones lattice, la pilocarpina puede provocar desgarros y desprendimiento de retina regmatógeno.',
    clinicalApplication: 'CONDUCTA PRÁCTICA EN DISPERSIÓN PIGMENTARIA: 1) Examen de fondo de ojo con depresión escleral obligatorio en todo paciente con SDP (alta prevalencia de roturas y degeneraciones retinianas periféricas). 2) La Iridotomía Periférica con Láser (LPI) puede estar indicada en fases tempranas con concavidad activa para equilibrar las presiones entre cámaras y aplanar el iris. 3) En pacientes mayores de 60 años, la esclerosis nuclear del cristalino aplana fisiológicamente el iris y la dispersión cesa espontáneamente (fenómeno de "burn-out").',
    pearl: 'Glaucoma Pigmentario Board Pearl: Varón joven miope con iris cóncavo (Reverse Pupillary Block) + huso de Krukenberg + transiluminación medioperiférica en rueda de carro + picos post-ejercicio. En SLT: reducir energía a la mitad para evitar picos hipertensivos agudos post-láser.',
    tags: ['Glaucoma pigmentario', 'Huso de Krukenberg', 'Iris cóncavo', 'Reverse pupillary block', 'SLT baja energía', 'Línea de Sampaolesi']
  },

  // RETINA: Coriorretinopatía Serosa Central
  {
    id: 'retina-04',
    subspecialtyId: 'retina',
    topic: 'Coriorretinopatía Serosa Central (CSC)',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 34 años con personalidad tipo A (bajo estrés laboral) consulta por metamorfopsia, micropsia (los objetos se ven más pequeños) y escotoma relativo central en su ojo derecho. En OCT macular se observa desprendimiento seroso de la retina neurosensorial foveal bien delimitado sin desprendimiento fibrovascular del EPR. La angiografía muestra un punto de fuga en "chimenea de humo" ("smokestack"). Refiere haber tomado corticoides orales por una lumbalgia.',
    questionText: '¿Cuál es el factor etiopatogénico exógeno más fuertemente asociado y qué fármaco está FORMALMENTE CONTRAINDICADO?',
    options: [
      'Infección bacteriana por Clostridium; contraindicados los betabloqueantes.',
      'Uso de corticoides (orales, inhalados, tópicos o articulares); los CORTICOIDES están formalmente contraindicados porque agravan o precipitan la coriorretinopatía serosa central.',
      'Exposición a luz solar UV; contraindicados los antiinflamatorios no esteroideos.',
      'Déficit de vitamina A; contraindicada la terapia fotodinámica con verteporfina.'
    ],
    correctIndex: 1,
    explanation: 'La Coriorretinopatía Serosa Central (CSC) pertenece al espectro de enfermedades paquicoroideas, caracterizada por hiperpermeabilidad de la coriocapilar y disfunción focal del epitelio pigmentario de la retina (EPR), lo que conduce a acumulación de líquido subretiniano bajo la mácula. El factor de riesgo modificable más potente es la exposición a glucocorticoides por cualquier vía (incluso cremas o inhaladores). Los esteroides alteran la barrera del EPR y aumentan la congestión coroidea. La mayoría de los casos agudos se resuelven espontáneamente en 3-4 meses tras suspender corticoides.',
    clinicalApplication: 'CONDUCTA EN CONSULTA: 1) Interrogar exhaustivamente sobre uso de corticoides (pomadas dermatológicas, infiltraciones articulares, inhaladores para asma, suplementos ilegales de gimnasio) y suspenderlos de inmediato si es seguro médicamente. 2) Tranquilizar al paciente: el 80-90% resuelve espontáneamente en 3-4 meses sin secuelas graves. 3) Si persiste líquido subretiniano >3-4 meses (forma crónica) o hay compromiso laboral severo: Terapia Fotodinámica (TFD) con verteporfina a media dosis / media fluencia (estudio PLACE) o láser micropulsado.',
    pearl: 'Los corticoides son el factor detonante número uno de la Coriorretinopatía Serosa Central; prescribir esteroides a un paciente con CSC es un error grave que empeora dramáticamente el desprendimiento seroso.',
    tags: ['CSC', 'Coriorretinopatía serosa central', 'Corticoides contraindicados', 'Chimenea de humo', 'Paquicoroides']
  },

  // NEUROFTALMOLOGÍA: Neuritis Óptica y Ensayo ONTT
  {
    id: 'neuro-03',
    subspecialtyId: 'neuroftalmologia',
    topic: 'Neuritis Óptica Desmielinizante y Estudio ONTT',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 26 años acude por dolor periocular retroocular agravado por los movimientos oculares de 3 días de evolución, seguido de pérdida de agudeza visual monocular OD (20/100) y desaturación del color rojo (ve el rojo "marrón o apagado"). En la pupila se evidencia un DPAR relativo en OD. El fondo de ojo es completamente normal en ambos ojos (neuritis óptica retrobulbar).',
    questionText: 'Según las conclusiones del Optic Neuritis Treatment Trial (ONTT), ¿cuál de los siguientes tratamientos está FORMALMENTE CONTRAINDICADO debido a que duplica la tasa de recurrencia de la enfermedad?',
    options: [
      'Metilprednisolona intravenosa a dosis altas (1 g/día) durante 3 días.',
      'Prednisona oral a dosis estándar (1 mg/kg/día) como monoterapia inicial sin bolos intravenosos previos.',
      'Resonancia Magnética con contraste de gadolinio.',
      'Suplementación con vitamina D3.'
    ],
    correctIndex: 1,
    explanation: 'El Optic Neuritis Treatment Trial (ONTT) es uno de los estudios más preguntados en exámenes de oftalmología y neurología. Su hallazgo más crítico fue que la PREDNISONA ORAL EN MONOTERAPIA a dosis convencionales (1 mg/kg/día) DUPLICÓ la tasa de recurrencia de neuritis óptica a los 2 años en comparación con el placebo o la metilprednisolona IV. Por tanto, la prednisona oral sola está CONTRAINDICADA en neuritis óptica típica. El régimen aprobado del ONTT es: Metilprednisolona 1 g/día IV durante 3 días, seguido de Prednisona oral 1 mg/kg/día durante 11 días con reducción rápida.',
    clinicalApplication: 'CONDUCTA EN GUARDIA: 1) NUNCA prescribir prednisona oral ambulatoria sola de entrada ante sospecha de neuritis óptica. 2) Solicitar Resonancia Magnética cerebral y orbitaria con contraste (gadolinio) y secuencias FLAIR: la presencia de >=1 lesión desmielinizante periventricular indica un riesgo >70% de desarrollar Esclerosis Múltiple a 15 años (frente a 25% si la RM es normal). 3) Descartar NMO (Anti-Aquaporina 4) y MOGAD (Anti-MOG) si hay compromiso bilateral o edema severo.',
    pearl: 'ONTT Board Pearl: La prednisona oral sola a dosis estándar está estrictamente contraindicada en neuritis óptica típica porque duplica la tasa de recurrencias.',
    tags: ['ONTT', 'Neuritis óptica', 'Prednisona contraindicada', 'Esclerosis múltiple', 'DPAR']
  },

  // UVEÍTIS: Necrosis Retiniana Aguda (ARN)
  {
    id: 'uveitis-03',
    subspecialtyId: 'uveitis',
    topic: 'Necrosis Retiniana Aguda (ARN) por Herpesviridae',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Paciente de 45 años inmunocompetente consulta por dolor ocular moderado, ojo rojo y disminución visual rápida en ojo izquierdo. En el fondo de ojo se observan áreas confluentes bien delimitadas de retinitis necrosante blanquecina periférica profunda con arteritis retiniana oclusiva y vitritis moderada. No afecta la mácula inicialmente.',
    questionText: '¿Cuál es la causa etiológica más frecuente, el tratamiento antiviral urgente y la complicación tardía más devastadora que requiere profilaxis?',
    options: [
      'Toxoplasma gondii; Pirimetamina + Sulfadiazina; complicación: catarata subcapsular.',
      'Virus Varicela Zóster (VVZ) o Virus Herpes Simple (VHS); requiere Valaciclovir oral a dosis altas (o Aciclovir IV 10 mg/kg c/8h) + inyecciones intravítreas de Ganciclovir/Foscarnet; complicación tardía: desprendimiento de retina regmatógeno en >50-70% de los ojos.',
      'Citomegalovirus (CMV); únicamente colirio de ganciclovir.',
      'Mycobacterium tuberculosis; esquema cuádruple RIPE.'
    ],
    correctIndex: 1,
    explanation: 'La Necrosis Retiniana Aguda (ARN - Acute Retinal Necrosis) es una infección necrotizante fulminante de la retina periférica causada principalmente por el Virus Varicela Zóster (VVZ, más común en mayores de 50 años) o Virus Herpes Simple (VHS-1 o VHS-2 en jóvenes) en pacientes inmunocompetentes. Se caracteriza por: 1) Áreas confluentes de necrosis retiniana periférica, 2) Progresión circunferencial rápida, 3) Vasculitis oclusiva arterial y 4) Vitritis. La complicación tardía más temida es el DESPRENDIMIENTO DE RETINA REGMATÓGENO COMPLEJO (con múltiples agujeros atróficos en la unión de retina sana y necrótica) que ocurre en hasta el 70% de los casos.',
    clinicalApplication: 'CONDUCTA URGENTE: 1) Iniciar antivirales sistémicos de inmediato: Valaciclovir 2 g cada 8 horas VO (o Aciclovir 10-15 mg/kg cada 8h IV) durante 10-14 días, seguido de mantenimiento oral durante al menos 3 a 6 meses para prevenir la afectación del ojo contralateral (ocurre en un tercio de los casos no tratados). 2) Inyecciones intravítreas urgentes de Ganciclovir (2 mg/0.05 mL) o Foscarnet (2.4 mg/0.1 mL). 3) Láser profiláctico de barrera (fotocoagulación con láser argón) posterior a las áreas necróticas para prevenir desprendimiento de retina.',
    pearl: 'La complicación tardía más destructiva de la Necrosis Retiniana Aguda (ARN) es el desprendimiento de retina regmatógeno con agujeros múltiples en la retina necrótica (hasta en 70% de los casos). El tratamiento sistémico debe mantenerse meses para salvar el ojo contralateral.',
    tags: ['ARN', 'Necrosis retiniana aguda', 'VVZ', 'VHS', 'Valaciclovir', 'Desprendimiento de retina']
  },
  {
    id: 'uveitis-04',
    subspecialtyId: 'uveitis',
    topic: 'Uveítis en Artritis Idiopática Juvenil (AIJ) y Ensayo SYCAMORE',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Niña de 4 años con artritis oligoarticular de rodilla derecha y títulos de ANA positivos 1:640 es derivada a screening oftalmológico. No presenta quejas visuales y ambos ojos están totalmente blancos sin inyección ciliar. Al examen biomicroscópico con lámpara de hendidura se observa Tyndall de 2+ en cámara anterior con flare 1+ y 2 sinequias posteriores precoces en ojo izquierdo.',
    questionText: '¿Cuál es la característica clínica distintiva de la uveítis en AIJ, qué complicación corneal es clásica y cuál es la terapia biológica de primera línea respaldada por el ensayo fase 3 SYCAMORE?',
    options: [
      'Cursa con ojo rojo hiperémico doloroso; complicación: queratocono agudo; biológico: Rituximab.',
      'Cursa como "ojo blanco y silencioso" asintomático sin dolor; complicación: queratopatía en banda cálcica; terapia biológica de primera línea: Adalimumab (anti-TNF-α) asociado a Metotrexato.',
      'Cursa con hipopión hemorrágico masivo; complicación: distrofia endotelial de Fuchs; biológico: Tocilizumab en monoterapia.',
      'Cursa con necrosis de esclera; complicación: adelgazamiento de Mooren; biológico: Etanercept.'
    ],
    correctIndex: 1,
    explanation: 'La uveítis asociada a AIJ es típicamente una uveítis anterior crónica en "ojo blanco y silencioso" sin dolor ni hiperemia ciliar, por lo que pasa desapercibida si no se realiza el screening protocolizado según AAP/ACR. Su complicación distintiva más temida es la tríada de Queratopatía en banda (depósitos de calcio en Bowman) + Catarata complicada + Glaucoma secundario. El ensayo landmark SYCAMORE (NEJM 2017) demostró que Adalimumab subcutáneo asociado a metotrexato redujo la tasa de fracaso terapéutico en un 75% (HR 0.25, p<0.0001) en niños con uveítis por AIJ activa refractaria.',
    clinicalApplication: 'CONDUCTA PEDIÁTRICA: 1) Respetar el calendario de screening cada 3 meses en niñas <6 años con oligoartritis ANA positivo. 2) Criterio de ahorro: Si requiere >2 gotas/día de corticoide tópico tras 3 meses, iniciar Metotrexato subcutáneo (10-15 mg/m²/semana). 3) Si hay refractariedad o intolerancia, añadir Adalimumab según ensayo SYCAMORE.',
    pearl: 'Niña pequeña con oligoartritis y ANA positivo = Uveítis en ojo blanco asintomático. La tríada tardía es queratopatía en banda + catarata + glaucoma. Adalimumab es el biológico de elección.',
    tags: ['AIJ', 'Ojo Blanco', 'Queratopatía en banda', 'SYCAMORE', 'Adalimumab', 'Metotrexato']
  },
  {
    id: 'uveitis-05',
    subspecialtyId: 'uveitis',
    topic: 'Sífilis Ocular y Neurosífilis: Régimen de Penicilina G Sódica IV',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Varón de 43 años consulta por visión borrosa bilateral de 3 semanas. La biomicroscopía muestra Tyndall 1+ y vitritis difusa moderada. El fondo de ojo revela placas blanco-amarillentas placoides subretinianas en polo posterior (ASPPC). La serología confirma FTA-ABS positivo y VDRL reactivo a título de 1:64. El médico generalista propone administrar 3 inyecciones intramusculares semanales de Penicilina Benzatínica 2.4 millones UI.',
    questionText: '¿Por qué la pauta propuesta con Penicilina Benzatínica intramuscular es un error médico inaceptable y cuál es el régimen de tratamiento correcto?',
    options: [
      'Porque la penicilina está contraindicada en sífilis ocular; se debe dar Doxiciclina 100 mg cada 12 horas por 7 días.',
      'Porque la penicilina benzatínica IM no alcanza niveles treponemicidas en humor acuoso ni en LCR. Toda sífilis ocular se trata como NEUROSÍFILIS con Penicilina G Sódica Cristalina Acuosa: 18 a 24 millones de UI al día por vía INTRAVENOSA durante 10 a 14 días bajo ingreso hospitalario.',
      'Porque requiere exclusivamente fotocoagulación con láser argón confluente en las placas placoides sin antibióticos.',
      'Porque se debe esperar a que los títulos de VDRL desciendan espontáneamente antes de tratar.'
    ],
    correctIndex: 1,
    explanation: 'El ojo y el nervio óptico son embriológica y anatómicamente una extensión directa del sistema nervioso central. Según las guías de los CDC y la OMS, TODA sífilis ocular (uveítis anterior, posterior, coriorretinitis placoide o neuropatía óptica) se clasifica y trata como NEUROSÍFILIS. La Penicilina Benzatínica intramuscular no atraviesa eficazmente la barrera hematoencefálica ni hematorretiniana y su uso en sífilis ocular constituye mala praxis. El único tratamiento curativo validado es Penicilina G Sódica Cristalina Acuosa 18-24 millones UI/día IV (3-4 millones UI cada 4 horas) durante 10 a 14 días.',
    clinicalApplication: 'CONDUCTA HOSPITALARIA: 1) Hospitalizar al paciente para vía intravenosa continua o cada 4h con Penicilina G Sódica acuosa durante 10-14 días. 2) Realizar punción lumbar para documentar compromiso de LCR. 3) Administrar Prednisona oral (40-60 mg/día) 24h antes o en paralelo para prevenir la reacción inflamatoria febril de Jarisch-Herxheimer.',
    pearl: 'Toda sífilis ocular se trata como NEUROSÍFILIS con Penicilina G Sódica acuosa IV (18-24 millones UI/día x 10-14 días). La penicilina benzatínica intramuscular es insuficiente.',
    tags: ['Sífilis Ocular', 'Neurosífilis', 'Penicilina Sódica IV', 'ASPPC', 'Jarisch-Herxheimer']
  },
  {
    id: 'uveitis-06',
    subspecialtyId: 'uveitis',
    topic: 'Tuberculosis Intraocular y Toxicidad por Etambutol',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Paciente de 36 años con periflebitis retiniana oclusiva granulomatosa y tuberculomas coroideos con QuantiFERON-TB Gold positivo y PPD de 16 mm inicia tratamiento antituberculoso con esquema cuádruple RIPE (Rifampicina, Isoniazida, Pirazinamida, Etambutol) + corticoides orales. Al mes de tratamiento, el paciente refiere dificultad para distinguir las luces del semáforo.',
    questionText: '¿Cuál es la causa más probable de la alteración visual del paciente y cuál es la conducta clínica inaplazable?',
    options: [
      'Neuritis óptica por Isoniazida; aumentar la dosis de pirazinamida.',
      'Neuropatía Óptica Tóxica Retrobulbar por Etambutol con discromatopsia precoz rojo-verde; la conducta mandatoria es la SUSPENSIÓN INMEDIATA del Etambutol y control estrecho con test de Ishihara y campimetría.',
      'Progresión de la tuberculosis ocular; triplicar la dosis de rifampicina.',
      'Efecto adverso común de la piridoxina sin relevancia clínica; continuar el tratamiento sin cambios.'
    ],
    correctIndex: 1,
    explanation: 'El Etambutol es un fármaco bacteriostático esencial del régimen RIPE, pero posee una toxicidad dosis-dependiente y tiempo-dependiente sobre las células ganglionares de la retina y el quiasma/nervio óptico. La manifestación clínica más temprana y sensible es la pérdida de la visión de los colores (discromatopsia de predominio rojo-verde), que precede con frecuencia a la caída de agudeza visual de Snellen y a los cambios papilares. La conducta obligatoria es la SUSPENSIÓN INMEDIATA del etambutol; si se continúa administrando, la neuropatía puede tornarse permanente e irreversible con atrofia óptica bilateral.',
    clinicalApplication: 'PROTOCOLOS DE SEGURIDAD EN TBC: 1) Monitoreo mensual de agudeza visual, láminas de Ishihara y campimetría en todo paciente bajo etambutol. 2) Coadministrar siempre Piridoxina (Vitamina B6 50 mg/día) con la Isoniazida para prevenir neuropatía periférica. 3) Mantener el tratamiento antifímico de 9 a 12 meses en total.',
    pearl: 'Primer signo de toxicidad por Etambutol = Discromatopsia rojo-verde. El fondo de ojo puede ser normal inicialmente. Suspender el fármaco inmediatamente.',
    tags: ['Tuberculosis', 'RIPE', 'Etambutol', 'Neuropatía óptica tóxica', 'Ishihara']
  },
  {
    id: 'uveitis-07',
    subspecialtyId: 'uveitis',
    topic: 'Síndrome de VKH y Oftalmía Simpática: Manejo Agudo y Ventana Quirúrgica',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Varón de 30 años sufrió una herida penetrante corneoescleral por estallido metálico en el ojo izquierdo hace 3 semanas que fue suturada en la guardia, quedando con No Percepción Luminosa (No PL). Hoy acude por visión borrosa profunda, dolor, fotofobia y miodesopsias en su ojo derecho sano. Al examen del ojo derecho: Tyndall 3+, precipitados en grasa de carnero, vitritis y múltiples desprendimientos de retina serosos multifocales en el polo posterior.',
    questionText: '¿Cuál es el diagnóstico en el ojo derecho, cuál es la conducta respecto a la enucleación del ojo izquierdo traumatizado en este momento y cuál es el tratamiento médico inmediato?',
    options: [
      'Endoftalmitis micótica; enucleación inmediata del ojo derecho; anfotericina B IV.',
      'Oftalmía Simpática activa en ojo derecho simpatizante. La enucleación urgente del ojo izquierdo en este momento YA NO cura ni altera el curso en el ojo derecho (la ventana preventiva es <14 días post-trauma). La prioridad absoluta es iniciar Megadosis de Metilprednisolona IV (1 g/día x 3 días) seguidas de prednisona oral e inmunosupresores precoces.',
      'Desprendimiento regmatógeno; vitrectomía bilateral urgente con gas C3F8 sin esteroides.',
      'Queratitis estromal; antibióticos tópicos y alta domiciliaria.'
    ],
    correctIndex: 1,
    explanation: 'La Oftalmía Simpática es una panuveítis granulomatosa autoinmune bilateral desencadenada por exposición antigénica uveal tras un trauma penetrante o cirugía en el ojo excitador (ojo izquierdo). La sensibilización de linfocitos T requiere al menos 10-14 días. La enucleación preventiva del ojo ciego traumatizado es eficaz para evitar la enfermedad si se realiza DENTRO DE LOS PRIMEROS 14 DÍAS. Si la oftalmía simpática YA se inició en el ojo simpatizante (ojo derecho), enuclear el ojo traumatizado ya no cura al ojo sano; la prioridad inaplazable es salvar la visión del ojo simpatizador mediante megadosis de Metilprednisolona intravenosa (1 g/día x 3 días) seguida de prednisona oral e inmunosupresores precoces.',
    clinicalApplication: 'CONDUCTA CRÍTICA EN TRAUMA: 1) Enucleación profiláctica temprana (<14 días) en ojos traumatizados desorganizados sin potencial visual (No PL). 2) Si la oftalmía simpática ya estalló, NO demorar los pulsos de corticoides IV para programar una enucleación innecesaria. 3) Descenso de esteroides en no menos de 6 a 12 meses.',
    pearl: 'Enucleación preventiva en Oftalmía Simpática: solo previene antes de 14 días. Si ya hay inflamación en el ojo contralateral, la conducta mandatoria es megadosis de esteroides IV e inmunosupresión.',
    tags: ['Oftalmía Simpática', 'VKH', 'Ventana 14 días', 'Metilprednisolona', 'Dalen-Fuchs']
  },
  {
    id: 'uveitis-08',
    subspecialtyId: 'uveitis',
    topic: 'Vasculitis Retiniana en Enfermedad de Behçet y Terapia Biológica Anti-TNF',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Varón de 28 años consulta por dolor ocular y pérdida súbita de visión en ojo derecho a 20/200. Al examen se observa un nivel de hipopión móvil estéril de 1 mm que se desplaza libremente al inclinar la cabeza, sin sinequias fijas. El fondo de ojo muestra arteritis retiniana oclusiva severa con infartos algodonosos y envainamiento vascular. Presenta aftas orales recurrentes dolorosas y es portador del alelo HLA-B51.',
    questionText: '¿Cuál es el diagnóstico de sospecha y cuál es la terapia de primera línea que debe iniciarse de emergencia para evitar la ceguera por isquemia macular irreversible?',
    options: [
      'Uveítis de Fuchs; colirio hipotensor y observación.',
      'Enfermedad de Behçet con panuveítis y vasculitis retiniana oclusiva; iniciar de inmediato Terapia Biológica Anti-TNF-α (Infliximab IV o Adalimumab SC) asociada a corticoides e inmunosupresores sistémicos (Azatioprina).',
      'Endoftalmitis bacteriana; inyección intravítrea de vancomicina y ceftazidima.',
      'Toxocariasis; mebendazol oral sin corticoides.'
    ],
    correctIndex: 1,
    explanation: 'La afectación del segmento posterior en la Enfermedad de Behçet (panuveítis no granulomatosa con arteritis retiniana oclusiva necrotizante, hipopión móvil estéril y fuerte asociación a HLA-B51) es una EMERGENCIA OFTALMOLÓGICA VISUAL. La vasculitis oclusiva causa infartos retinianos irreversibles con pérdida visual permanente en cada brote. Los consensos internacionales (EULAR / IUSG) establecen que la Terapia Biológica Anti-TNF-alfa (Infliximab intravenoso o Adalimumab subcutáneo) es el tratamiento de primera línea de elección para abortar de forma ultrarrápida el ataque y preservar el parénquima retiniano, combinada con pulsos de esteroides y azatioprina.',
    clinicalApplication: 'CONDUCTA INMEDIATA EN BEHÇET: 1) Descartar TB latente con IGRA rápido y solicitar screening de hepatitis B/C. 2) Iniciar Infliximab IV (5 mg/kg) o Adalimumab SC de urgencia. 3) Fotocoagulación con láser periférico guiada por FAG sobre áreas isquémicas para prevenir neovascularización.',
    pearl: 'Behçet: Hipopión móvil estéril + arteritis retiniana oclusiva + HLA-B51. Es una emergencia visual que requiere Terapia Biológica Anti-TNF (Infliximab / Adalimumab) precoz.',
    tags: ['Behçet', 'HLA-B51', 'Hipopión móvil', 'Arteritis oclusiva', 'Infliximab', 'Adalimumab']
  },
  {
    id: 'uveitis-09',
    subspecialtyId: 'uveitis',
    topic: 'Síndromes de Mascarada: Linfoma Intraocular Primario del SNC (PCNSL)',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Mujer de 68 años consulta por "uveítis intermedia bilateral crónica" que no responde de forma duradera a ciclos repetidos de prednisona oral (mejora transitoriamente y recae violentamente al bajar la dosis). A la exploración presenta vitritis densa con células agrupadas en filamentos y sábanas flotantes, y en el fondo de ojo se aprecian múltiples infiltrados blanco-cremosos cupuliformes profundos bajo el EPR en patrón de piel de leopardo.',
    questionText: '¿Cuál es el síndrome de mascarada neoplásico de primera sospecha, qué paso farmacológico debe tomarse antes de la biopsia diagnóstica y qué biomarcadores en humor vítreo confirman el diagnóstico?',
    options: [
      'Melanoma coroideo difuso; aumentar la prednisona a 100 mg/día; biopsia con aguja fina transescleral.',
      'Linfoma Intraocular Primario del SNC (PCNSL / Linfoma difuso de células B grandes); SUSPENDER CORTICOIDES al menos 2 a 3 semanas antes de la vitrectomía diagnóstica en fresco; confirmación con ratio IL-10/IL-6 > 1.0, clonalidad de células B (CD20+) y mutación MYD88 L265P.',
      'Retinoblastoma trilateral del adulto; enucleación inmediata sin biopsia.',
      'Meningioma de la vaina del nervio óptico; radioterapia holocraneal empírica inmediata.'
    ],
    correctIndex: 1,
    explanation: 'El Linfoma Intraocular Primario (subtipo del Linfoma Primario del SNC - PCNSL) es el síndrome de mascarada neoplásico más frecuente y peligroso en adultos >50-60 años, caracterizado típicamente por vitritis bilateral refractaria a esteroides e infiltrados sub-EPR en leopardo. REGLA FUNDAMENTAL: Los corticosteroides son citolíticos para los linfocitos tumorales y provocan lisis celular masiva; DEBEN suspenderse al menos 2 a 3 semanas antes de la vitrectomía diagnóstica para evitar biopsias falsamente negativas. La confirmación exige: 1) Citopatología vítrea en fresco, 2) Ratio Interleucina-10 / Interleucina-6 > 1.0 (IL-10 es producida por linfocitos B neoplásicos), 3) Citometría de flujo (CD19+, CD20+) y 4) Mutación somática MYD88 L265P.',
    clinicalApplication: 'PROTOCOLO DE BIOPSIA EN MASCARADA: 1) Suspender corticoides 2-3 semanas previas. 2) Vitrectomía diagnóstica 25G tomando 1.5-2 mL de vítreo puro "en seco" antes de abrir la infusión de BSS. 3) Remitir la muestra en fresco inmediatamente en mano al patólogo (procesar en <1 hora). 4) Solicitar RM cerebral con gadolinio y punción lumbar.',
    pearl: 'Adulto >50-60 años con vitritis refractaria a esteroides = Linfoma Intraocular Primario. Suspender corticoides 2-3 semanas antes de biopsia. Ratio IL-10/IL-6 > 1 y mutación MYD88 L265P.',
    tags: ['Linfoma Intraocular', 'Mascarada', 'PCNSL', 'MYD88', 'IL-10', 'Vitrectomía en fresco']
  },

  // ==========================================
  // ONCOLOGÍA OCULAR
  // ==========================================
  {
    id: 'onco-01',
    subspecialtyId: 'oncologia',
    topic: 'Melanoma Coroideo Mediano y Ensayo COMS',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 59 años acude a revisión rutinaria. En el fondo de ojo derecho se descubre una lesión coroidea sobreelevada hiperpigmentada en cuadrante temporal de 3.8 mm de grosor ecográfico apical y 11 mm de base mayor con pequeños focos de pigmento naranja y presencia de líquido subretiniano foveal en SD-OCT. La ecografía en modo A muestra reflectividad acústica interna baja (35%) con ángulo kappa pronunciado y vaciamiento acústico.',
    questionText: 'Conforme a los resultados del Collaborative Ocular Melanoma Study (COMS), ¿cuál es el tratamiento estándar de elección y qué demostró este ensayo multicéntrico respecto a la supervivencia global?',
    options: [
      'Enucleación primaria de urgencia, ya que demostró duplicar la supervivencia a 10 años frente a cualquier forma de radioterapia conservadora.',
      'Braquiterapia epiescleral con placa de Yodo-125 (I-125), la cual demostró tasas de supervivencia global y mortalidad por metástasis idénticas a la enucleación a los 5, 10 y 12 años, preservando el globo ocular.',
      'Termoterapia transpupilar (TTT) como monoterapia sin radiación.',
      'Observación cada 6 meses, dado que la reflectividad ecográfica baja indica benignidad.'
    ],
    correctIndex: 1,
    explanation: 'El ensayo multicéntrico COMS (Collaborative Ocular Melanoma Study) es el pilar de la evidencia en oncología ocular. En tumores medianos (grosor apical 2.5 a 10 mm y diámetro <=16 mm), el COMS comparó la enucleación frente a la braquiterapia con placa de Yodo-125 (I-125 con 85 Gy al ápex tumoral). El resultado capital a 5, 10 y 12 años demostró que NO hubo diferencias estadísticamente significativas en la supervivencia global ni en la mortalidad por melanoma (mortalidad a 10 años del 27% en ambos grupos). Por ello, la braquiterapia con I-125 es el estándar de oro para preservar el ojo con la misma expectativa de vida.',
    clinicalApplication: 'CONDUCTA EN CONSULTA/GUARDIA: 1) Clasificar el tumor según criterios COMS (mediano: 2.5-10 mm). 2) Explicar al paciente con base en el ensayo COMS que extirpar el ojo no aumenta la esperanza de vida. 3) Estadificación sistémica inicial: el 90% de las metástasis se alojan en el hígado (solicitar RM hepática con contraste y enzimas hepáticas: GGT, FA, transaminasas). 4) Vigilancia de retinopatía por radiación post-braquiterapia mediante inyecciones de Anti-VEGF.',
    pearl: 'COMS Trial: La braquiterapia con placa de Yodo-125 ofrece una supervivencia global idéntica a la enucleación en melanomas coroideos medianos (~27% mortalidad a 10 años en ambos grupos), preservando el ojo en más del 85% de los pacientes.',
    tags: ['COMS', 'Melanoma coroideo', 'Braquiterapia I-125', 'Ecografía modo A', 'Pigmento naranja', 'Tebentafusp']
  },
  {
    id: 'onco-02',
    subspecialtyId: 'oncologia',
    topic: 'Retinoblastoma Infantil y Procedimientos Contraindicados',
    difficulty: 'R1 - Inicial',
    clinicalVignette: 'Lactante de 14 meses es traído por sus padres por reflejo blanquecino en la pupila del ojo izquierdo (leucocoria) y estrabismo convergente de 3 semanas de evolución. Al examen bajo anestesia se evidencia una masa nodular blanquecina con vasos de neoformación superficiales que protruye hacia el vítreo. La ecografía en modo B revela masa sólida con calcificaciones focales de alta reflectividad que proyectan sombra acústica posterior.',
    questionText: '¿Cuál de los siguientes procedimientos diagnósticos o terapéuticos está FORMALMENTE CONTRAINDICADO por el riesgo inminente de diseminación extraocular y metástasis letal?',
    options: [
      'Resonancia Magnética (RM) cerebral y orbitaria con contraste de gadolinio.',
      'Punción-aspiración con aguja fina (PAAF) o biopsia intraocular transescleral/transvitreana.',
      'Examen bajo anestesia general (EUA) con oftalmoscopia binocular indirecta e indentación escleral.',
      'Estudio genético del gen RB1 en sangre periférica.'
    ],
    correctIndex: 1,
    explanation: 'En Retinoblastoma, cualquier maniobra invasiva que perfore la cápsula o pared ocular con fines de biopsia (PAAF, vitrectomía o paracentesis de cámara anterior) está FORMALMENTE Y ABSOLUTAMENTE CONTRAINDICADA. La punción viola la contención ocular y provoca la siembra de células tumorales viables en el trayecto de la aguja hacia la órbita, multiplicando exponencialmente el riesgo de metástasis sistémica y muerte. El diagnóstico de retinoblastoma es CLÍNICO y por IMAGEN (ecografía que demuestra calcificaciones patognomónicas y RM para invasión del nervio óptico y tumor trilateral).',
    clinicalApplication: 'CONDUCTA INMEDIATA: 1) NUNCA biopsiar ni puncionar una masa sospechosa de retinoblastoma. 2) Solicitar Resonancia Magnética cerebral y orbitaria con gadolinio para descartar invasión del nervio óptico retro-laminar y descartar pinealoblastoma trilateral en el SNC. 3) Si el ojo está en Grupo E (ojo ciego doloroso, rubeosis iridis, glaucoma neovascular): ENUCLEACIÓN primaria urgente con muñón largo de nervio óptico (10-15 mm).',
    pearl: 'Retinoblastoma Board Pearl: La biopsia con aguja fina o vitrectomía diagnóstica está prohibida por el riesgo letal de diseminación orbitaria. Calcificaciones intraoculares en ecografía en <3 años = Retinoblastoma hasta demostrar lo contrario.',
    tags: ['Retinoblastoma', 'Leucocoria', 'Contraindicación PAAF', 'Calcificaciones ecográficas', 'RB1 13q14']
  },
  {
    id: 'onco-03',
    subspecialtyId: 'oncologia',
    topic: 'Linfoma Intraocular Primario Vitreorretiniano (VRL) y Biomarcadores',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Paciente de 67 años es remitido por "uveítis intermedia / posterior bilateral crónica rebelde" tratada durante un año con corticoides tópicos y orales con mejoría transitoria y recaídas continuas. A la exploración presenta celularidad vítrea densa con infiltrados celulares agrupados en "ristras" o "cordón de perlas" y lesiones subretinianas blanco-amarillentas multifocales sobreelevadas ("leopard spotting" o moteado de leopardo).',
    questionText: '¿Cuál es el subtipo histológico más frecuente de este tumor, el biomarcador en humor vítreo más sensible y el riesgo neurológico asociado?',
    options: [
      'Linfoma T cutáneo; interleucina IL-2 elevada; sin riesgo de SNC.',
      'Linfoma Difuso de Células B Grandes (DLBCL); relación IL-10 / IL-6 > 1.0 en humor vítreo y mutación MYD88 L265P; entre el 65% y 80% desarrollará Linfoma Primario del Sistema Nervioso Central (PCNSL).',
      'Enfermedad de Hodgkin; factor de necrosis tumoral alfa; metástasis hepáticas.',
      'Linfoma folicular MALT; inmunoglobulina IgA aumentada; neuropatía periférica.'
    ],
    correctIndex: 1,
    explanation: 'El Linfoma Vitreorretiniano Primario (VRL) es una variante maligna del Linfoma Primario del Sistema Nervioso Central (PCNSL), y en más del 95% de los casos corresponde a un Linfoma Difuso de Células B Grandes (DLBCL). Es conocido como el "gran enmascarador" o gran simulador de uveítis crónica en el adulto mayor. Los biomarcadores cardinales en vítreo son: 1) Relación de interleucinas IL-10 (producida por linfocitos B neoplásicos) / IL-6 (producida por células inflamatorias) > 1.0; 2) Mutación somática MYD88 L265P (presente en >70-80% de los casos); 3) Rearreglo clonal de genes de inmunoglobulinas (IgH). El 65-80% de los pacientes desarrollará afectación cerebral del SNC.',
    clinicalApplication: 'CONDUCTA ANTE UVEÍTIS CRÓNICA DEL ADULTO MAYOR: 1) Suspender corticoides al menos 2 semanas antes de la vitrectomía (los esteroides inducen apoptosis de las células linfomatosas y generan falsos negativos en citología). 2) Vitrectomía diagnóstica con muestra en fresco sin fijar enviada de inmediato a Citología, Citometría de Flujo, PCR para MYD88 y cuantificación de IL-10 / IL-6. 3) Solicitar RM cerebral con gadolinio y punción lumbar.',
    pearl: 'Linfoma Vitreorretiniano (VRL): Ratio IL-10/IL-6 > 1.0 en vítreo + mutación MYD88 L265P. Suspender corticoides 2 semanas antes de la vitrectomía diagnóstica para no negativizar la citología.',
    tags: ['Linfoma vitreorretiniano', 'VRL', 'DLBCL', 'IL-10 / IL-6', 'MYD88', 'Gran enmascarador']
  },
  {
    id: 'onco-04',
    subspecialtyId: 'oncologia',
    topic: 'Carcinoma de Glándulas Sebáceas y Diseminación Pagetoide',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 72 años presenta una masa nodular amarillenta indurada en el tercio medio del tarso del párpado superior izquierdo de 8 meses de evolución, diagnosticada inicialmente como chalazión y cureteada en dos ocasiones previas con recidiva inmediata. Se evidencia pérdida focal de pestañas (madarosis), engrosamiento del borde palpebral y leve eritema conjuntival tarsal.',
    questionText: '¿Cuál es el diagnóstico más probable, su patrón de invasión microscópico característico y la conducta quirúrgica previa a la reconstrucción definitiva?',
    options: [
      'Carcinoma Basocelular; invasión perineural; reconstrucción con colgajo de Tenzel inmediato sin biopsias.',
      'Carcinoma de Glándulas Sebáceas (Meibomio); diseminación pagetoide intraepitelial conjuntival; exige biopsias en mapa conjuntivales (map biopsies) para delimitar los márgenes antes de la resección amplia y reconstrucción.',
      'Granuloma piogénico recidivante; curetaje simple con cauterio.',
      'Queratocantoide; inyección intralesional de triamcinolona.'
    ],
    correctIndex: 1,
    explanation: 'El Carcinoma de Glándulas Sebáceas (Meibomio o Zeiss) es una neoplasia maligna muy agresiva que afecta con predilección el párpado superior. Su sello de examen es su capacidad de simular chalaziones recidivantes o blefaritis crónica unilateral refractaria ("masquerade syndrome"). Posee un patrón biológico temido de "diseminación pagetoide" (células tumorales aisladas que migran horizontalmente en el espesor del epitelio conjuntival y corneal lejos de la masa macroscópica). Por ello, es imperativo realizar BIOPSIAS EN MAPA CONJUNTIVALES (map biopsies) en múltiples cuadrantes para asegurar márgenes histológicos libres antes de planear la reconstrucción palpebral.',
    clinicalApplication: 'REGLA DE GUARDIA Y QUIRÓFANO: 1) Todo chalazión recurrente en adulto mayor debe enviarse a estudio histopatológico (nunca desechar el contenido del curetaje). 2) Confirmar presencia de lípidos citoplasmáticos mediante tinción con Oil Red O o Sudán en tejido fresco no fijado en alcohol, o inmunohistoquímica para Adipofilina. 3) Palpar ganglios linfáticos preauriculares y submandibulares (tasa de metástasis ganglionar del 20-30%).',
    pearl: 'Carcinoma Sebáceo: Chalazión recurrente o blefaritis crónica unilateral en ancianos. Diseminación pagetoide conjuntival confirmada con biopsias en mapa y tinción Oil Red O / Adipofilina.',
    tags: ['Carcinoma sebáceo', 'Meibomio', 'Chalazión recurrente', 'Diseminación pagetoide', 'Biopsias en mapa', 'Adipofilina']
  },
  {
    id: 'onco-05',
    subspecialtyId: 'oncologia',
    topic: 'Citogenética Pronóstica del Melanoma Uveal: BAP1 y Monosomía 3',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Un paciente de 52 años es tratado con braquiterapia con placa de Yodo-125 por un melanoma coroideo de 4.5 mm de grosor. Durante el procedimiento se realizó una biopsia por aspiración con aguja fina (FNAB) transescleral para análisis citogenético molecular mediante MLPA y perfil de expresión génica (GEP).',
    questionText: '¿Cuál de los siguientes perfiles moleculares confiere el peor pronóstico vital con un riesgo de metástasis hepática >70% a 5 años?',
    options: [
      'Disomía del cromosoma 3, expresión génica Clase 1A y mutación del gen EIF1AX.',
      'Monosomía del cromosoma 3 (pérdida de un alelo completo del cromosoma 3), pérdida de expresión del gen BAP1 (en 3p21) y perfil de expresión génica Clase 2.',
      'Mutación exclusiva de GNAQ en el codón Q209 con Disomía 3.',
      'Ganancia del brazo corto del cromosoma 6 (6p) aislada.'
    ],
    correctIndex: 1,
    explanation: 'En el melanoma uveal, la citogenética es el factor pronóstico individual más potente para predecir la muerte por metástasis hepática: 1) Perfil de MUY ALTO RIESGO (Clase 2): Pérdida de una copia completa del cromosoma 3 (MONOSOMÍA 3) combinada con inactivación del gen supresor tumoral BAP1 (BRCA1-associated protein 1, localizado en 3p21) y ganancia de 8q. Este perfil confiere una tasa de metástasis superior al 70% a 5 años. 2) Perfil de BAJO RIESGO (Clase 1A): Disomía 3 con mutación de EIF1AX (tasa de metástasis <2-5%). 3) Perfil de RIESGO INTERMEDIO (Clase 1B): Disomía 3 con mutación SF3B1 (metástasis tardías a los 8-10 años). Las mutaciones de GNAQ o GNA11 son eventos iniciadores tempranos presentes en ambos grupos sin valor pronóstico independiente.',
    clinicalApplication: 'APLICACIÓN CLÍNICA: Los pacientes con biopsia confirmatoria de Monosomía 3 / Clase 2 / BAP1 negativo deben ser estratificados como pacientes oncológicos de alto riesgo: protocolo de vigilancia hepática intensiva semestral con Resonancia Magnética abdominal con contraste específico hepatobiliar (gadoxetato disódico) y consideración temprana de ensayos adyuvantes sistémicos.',
    pearl: 'Melanoma Uveal Citogenética: Monosomía 3 + pérdida de BAP1 = Perfil Clase 2 con >70% de metástasis a 5 años. Ganancia de 6p confiere protección relativa; mutación EIF1AX define excelente pronóstico (Clase 1).',
    tags: ['Citogenética melanoma', 'Monosomía 3', 'BAP1', 'DecisionDx Clase 2', 'EIF1AX', 'Pronóstico hepático']
  },
  {
    id: 'onco-06',
    subspecialtyId: 'oncologia',
    topic: 'Hemangioma Coroideo Circunscrito vs Melanoma Amelanótico y Terapia Fotodinámica',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 42 años acude por metamorfopsia y disminución visual progresiva en ojo derecho (20/50). En el fondo de ojo se aprecia una masa coroidea redondeada amelanótica de coloración rojo-anaranjada en el polo posterior temporal a la fóvea con desprendimiento de retina seroso foveal secundario en OCT. En la ecografía modo A la lesión presenta una reflectividad acústica interna uniformemente alta del 95-100% sin vaciamiento acústico ni ángulo kappa.',
    questionText: '¿Cuál es el diagnóstico diferencial prioritario, qué hallazgo angiográfico con verde de indocianina (ICG) es patognomónico y cuál es el tratamiento de elección para reabsorber el líquido subretiniano?',
    options: [
      'Melanoma coroideo amelanótico; hipofluorescencia precoz en ICG; enucleación urgente.',
      'Hemangioma Coroideo Circunscrito (CCH); hiperfluorescencia ultra-precoz intrínseca seguida de fenómeno de lavado ("washout") tardío en ICG; tratamiento de elección con Terapia Fotodinámica (PDT) con Verteporfina.',
      'Osteoma coroideo; calcificación escleral difusa en TAC; observación.',
      'Metástasis coroidea de carcinoma microcítico; fotocoagulación con láser focal.'
    ],
    correctIndex: 1,
    explanation: 'El Hemangioma Coroideo Circunscrito (CCH) es un tumor vascular benigno de la coroides que suele manifestarse entre la 3ª y 5ª década de la vida por desprendimiento seroso foveal. Claves absolutas de examen: 1) Ecografía modo A: Reflectividad interna ALTÍSIMA (95-100%), a diferencia del melanoma que tiene reflectividad baja (<60%) con ángulo kappa. 2) Angiografía con Verde de Indocianina (ICG): Hiperfluorescencia tumoral intensa muy rápida (<1 minuto) debida a la vascularización intrínseca de lagos vasculares, seguida de un fenómeno característico de "lavado" o "washout" en fases tardías (>20-30 min) donde el tumor se vuelve hipofluorescente relativo al fondo. 3) Tratamiento estándar: Terapia Fotodinámica (PDT) con Verteporfina (6 mg/m2 a 689 nm), que ocluye selectivamente los neovasos tumorales, induce regresión y resuelve el líquido subretiniano en >90% de los casos preservando la retina neurosensorial.',
    clinicalApplication: 'CONDUCTA PRÁCTICA: 1) Realizar ecografía ocular modo A: si la reflectividad es >90%, orienta contundentemente a hemangioma vs melanoma. 2) ICG para confirmar el signo de "washout". 3) Indicar Terapia Fotodinámica (PDT) con verteporfina estándar (83 segundos, 50 J/cm2). 4) Vigilar con SD-OCT la reabsorción del líquido foveal.',
    pearl: 'Hemangioma Coroideo Circunscrito: Reflectividad acústica interna del 100% en modo A (el melanoma es <60%) + Hiperfluorescencia precoz con "washout" tardío en ICG. El tratamiento de elección es la Terapia Fotodinámica (PDT) con Verteporfina.',
    tags: ['Hemangioma coroideo', 'PDT Verteporfina', 'Modo A 100%', 'Washout ICG', 'Melanoma amelanótico']
  },
  {
    id: 'onco-07',
    subspecialtyId: 'oncologia',
    topic: 'Neoplasia Escamosa de la Superficie Ocular (OSSN): Técnica Quirúrgica de Shields',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Varón de 64 años acude con una lesión gelatinosa en limbo temporal de ojo izquierdo de 5 mm de base que invade 1.5 mm de la córnea periférica, con presencia de vasos en horquilla y leucoplaquia superficial queratinizada. Se programa para biopsia escisional quirúrgica.',
    questionText: 'Según la técnica quirúrgica estándar de oro descrita por Carol y Jerry Shields para evitar recidivas y siembra celular en OSSN, ¿cuáles son los pasos quirúrgicos obligatorios?',
    options: [
      'Resección intralesional con bisturí de diamante y sutura de conjuntiva al limbo con seda 8-0.',
      'Técnica "no-touch" con margen macroscópico libre de 4 mm de conjuntiva sana, alcoholización corneal absoluta (alcohol al 100% durante 30 segundos) sobre el lecho límbico, crioterapia en doble ciclo de congelación-descongelación en los bordes conjuntivales y cierre con membrana amniótica.',
      'Curetaje simple y aplicación de colirio de anestésico tópico cada 4 horas.',
      'Cauterización térmica directa de la masa sin biopsia ni anatomía patológica.'
    ],
    correctIndex: 1,
    explanation: 'La técnica estándar de oro de Shields para la Neoplasia Escamosa de la Superficie Ocular (OSSN) incluye: 1) Principio "No-Touch": Nunca tocar directamente el tumor con las pinzas para evitar desprender y sembrar células epiteliales malignas en lechos sanos. 2) Margen de seguridad amplio: Resección en bloque que incluya al menos 4.0 mm de margen libre de conjuntiva macroscópicamente sana. 3) Quimioablación corneal límbica: Aplicación de etanol al 100% en el lecho corneal durante 30-40 segundos para desvitalizar cualquier célula tumoral residual, seguido de lavado copioso. 4) Crioterapia: Doble ciclo rápido de congelación y descongelación lenta sobre los bordes conjuntivales y epiesclera circundante. 5) Cierre reconstructivo del defecto con membrana amniótica o autoinjerto conjuntival.',
    clinicalApplication: 'CONDUCTA EN QUIRÓFANO: 1) NUNCA manipular la masa tumoral con instrumental cortante dentro de sus límites. 2) Resecar la lámina escleral superficial si se sospecha invasión estromal profunda. 3) Enviar la pieza histológica orientada sobre papel de filtro con mapa espacial para el patólogo.',
    pearl: 'OSSN Cirugía de Shields: Margen conjuntival libre de 4 mm + alcoholización corneal al 100% por 30s + crioterapia en doble ciclo en los bordes conjuntivales con técnica estricta "no-touch".',
    tags: ['OSSN', 'Técnica de Shields', 'Margen 4 mm', 'Alcoholización corneal', 'Crioterapia', 'No-touch']
  },
  {
    id: 'onco-08',
    subspecialtyId: 'oncologia',
    topic: 'Tumores Metastásicos Oculares (Mama y Pulmón): Ecografía Modo A y Manejo',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 54 años con antecedente de carcinoma ductal infiltrante de mama tratado hace 3 años acude por visión borrosa indolora y fotopsias en ojo derecho (20/80). A la oftalmoscopia se observan dos masas coroideas amelanóticas amarillo-cremosas sobreelevadas multifocales en polo posterior con desprendimiento de retina seroso exudativo suprayacente. La ecografía estandarizada en modo A revela una reflectividad acústica interna ALTA (75-85%) con ángulo kappa ancho y ausencia de vaciamiento acústico.',
    questionText: '¿Por qué las metástasis constituyen el tumor intraocular maligno más frecuente en adultos, cómo se diferencian ecográficamente del melanoma coroideo amelanótico y cuál es la terapia paliativa ocular de primera línea?',
    options: [
      'Son las más frecuentes por el profuso flujo vascular de las arterias ciliares posteriores cortas a la coroides; en modo A tienen reflectividad ALTA (>60-90%) por su arquitectura glandular compacta heterogénea (a diferencia del melanoma con reflectividad baja <60%); el tratamiento de primera línea para preservar la visión es la radioterapia externa fraccionada (EBRT 30-40 Gy) o terapia sistémica dirigida.',
      'Son menos frecuentes que el melanoma primario; en modo A tienen reflectividad nula del 0%; exigen enucleación primaria inmediata bilateral.',
      'Se originan por diseminación linfática orbitaria retrógrada; en modo A muestran calcificaciones masivas densas; tratamiento con fotocoagulación focal con láser argón.',
      'Solo se observan en varones mayores de 80 años; se resuelven espontáneamente sin requerir radioterapia ni oncología médica.'
    ],
    correctIndex: 0,
    explanation: 'Las metástasis coroideas son el tumor intraocular maligno MÁS COMÚN en adultos (superan en incidencia al melanoma coroideo en una proporción aproximada de 3:1 a 5:1). El lecho vascular coroideo recibe el 85% de todo el flujo sanguíneo ocular a través de las arterias ciliares posteriores cortas, convirtiéndolo en un lecho emborrágico ideal para células tumorales hematógenas (primario más común: mama en mujeres [40-53%], pulmón en varones [20-29%]). Características ecográficas diferenciales en modo A: Presentan reflectividad acústica interna ALTA (60-90%) y ángulo kappa ancho debido a la heterogeneidad celular e histológica del adenocarcinoma metastásico, a diferencia del melanoma que muestra reflectividad baja (<60%) con ángulo kappa pronunciado y vaciamiento acústico. Suelen ser multifocales (30%) y bilaterales (25%), con desprendimiento de retina seroso desproporcionadamente plano y extenso. El tratamiento estándar ocular es la Radioterapia Externa Fraccionada (EBRT, dosis total 30-40 Gy en 10-15 fracciones) o terapia médica sistémica (quimioterapia, terapia anti-HER2, inhibidores de CDK4/6 o inmunoterapia).',
    clinicalApplication: 'CONDUCTA DE GUARDIA Y REVISIÓN: 1) Preguntar siempre antecedentes oncológicos (mama, pulmón, próstata, colon, riñón). Si no hay tumor primario conocido (frecuente en cáncer de pulmón), solicitar TC tóraco-abdomino-pélvica urgente. 2) Realizar ecografía ocular estandarizada modos A y B: buscar reflectividad >70% y masa plana en meseta. 3) Derivar urgentemente a Oncología Radioterápica y Oncología Médica: la radioterapia preserva la agudeza visual y la calidad de vida en >85% de los pacientes.',
    pearl: 'Metástasis Coroideas: Tumor intraocular maligno MÁS FRECUENTE en adultos (Mama #1 en mujeres, Pulmón #1 en varones). En ecografía modo A: reflectividad ALTA (60-90%) con ángulo kappa ancho (Melanoma = reflectividad BAJA <60%). Multifocales y bilaterales.',
    tags: ['Metástasis coroideas', 'Cáncer de mama', 'Cáncer de pulmón', 'Ecografía modo A', 'Reflectividad alta', 'Radioterapia fraccionada']
  },
  {
    id: 'onco-09',
    subspecialtyId: 'oncologia',
    topic: 'Tumores Orbitarios: Adenoma Pleomorfo vs Carcinoma Adenoide Quístico de Glándula Lagrimal',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Varón de 46 años acude por sensación de pesadez y desplazamiento inferior del ojo derecho de 14 meses de evolución sin dolor. A la exploración presenta proptosis no axial ínfero-nasal con una masa firme palpable e indolora en la fosa lagrimal súpero-temporal derecha. La TC orbitaria con contraste revela una masa lobulada bien delimitada en la fosa lagrimal con moldeamiento y remodelación lisa de la fosa ósea orbitaria adyacente, sin signos de destrucción ósea ni osteólisis apolillada.',
    questionText: '¿Cuál es el diagnóstico más probable, por qué está TERMINANTEMENTE PROHIBIDA la biopsia incisional o punción previa a la cirugía y qué hallazgo clínico-radiológico alertaría sobre un Carcinoma Adenoide Quístico maligno?',
    options: [
      'Carcinoma epidermoide de órbita; prohibida la biopsia por riesgo de glaucoma agudo; dolor nocturno.',
      'Adenoma Pleomorfo (tumor mixto benigno de glándula lagrimal); la biopsia incisional está FORMALMENTE PROHIBIDA porque rompe la pseudocápsula y provoca siembra de células tumorales en la órbita con recidivas múltiples inoperables o transformación maligna secundaria a carcinoma ex-adenoma pleomorfo; la presencia de DOLOR persistente y OSTEÓLISIS DESTRUCTIVA apolillada en TC alertaría fuertemente sobre un Carcinoma Adenoide Quístico.',
      'Pseudotumor inflamatorio orbitario; biopsia obligatoria antes de 24 horas; hiperostosis escleral en TAC.',
      'Quiste dermoide roto; punción con aguja gruesa para drenar queratina; dolor a la masticación.'
    ],
    correctIndex: 1,
    explanation: 'El Adenoma Pleomorfo (o tumor mixto benigno) es el tumor epitelial más frecuente de la glándula lagrimal (50% de las neoplasias epiteliales de la fosa lagrimal). Se presenta típicamente entre los 30 y 50 años como una masa de crecimiento lento, INDOLORA, que desplaza el globo ocular hacia abajo y adentro (proptosis no axial ínfero-medial). En TC produce remodelación y adelgazamiento liso no invasivo de la fosa lagrimal ósea. PERLA CRÍTICA DE EXAMEN Y DE LA PRÁCTICA QUIRÚRGICA: Está TERMINANTEMENTE CONTRAINDICADA la biopsia incisional o punción (PAAF). La apertura de su pseudocápsula fibrosa derrama elementos celulares mixoides y epiteliales en los tejidos orbitarios, provocando recidivas difusas de muy difícil erradicación y un riesgo elevado de transformación maligna a "Carcinoma ex-adenoma pleomorfo" (altamente letal). El tratamiento obligado es la orbitotomía lateral con extirpación en bloque de la masa y el lóbulo lagrimal envueltos en periostio óseo intacto. Por el contrario, el Carcinoma Adenoide Quístico (tumor epitelial maligno más frecuente de la glándula lagrimal) se caracteriza por DOLOR INTENSO (por neurotropismo e invasión de ramas sensitivas del nervio lagrimal/V1) y destrucción ósea destructiva con bordes apolillados en la TC.',
    clinicalApplication: 'REGLAS CLÍNICAS CAPITALES EN TUMORES DE FOSA LAGRIMAL:\n1) Masa indolora de larga evolución (>12 meses) con remodelación ósea lisa en TC = Adenoma Pleomorfo -> Orbitotomía lateral con resección EN BLOQUE completa de la masa con periostio. NUNCA BIOPSIAR ANTES.\n2) Masa dolorosa de corta evolución (<6-12 meses) con osteólisis destructiva en TC = Carcinoma Adenoide Quístico -> Sí requiere biopsia incisional diagnóstica previa a protocolo de resección radical o exenteración y radioterapia con protones.',
    pearl: 'Fosa Lagrimal Board Pearl: Adenoma Pleomorfo = INDOLORO + remodelación ósea lisa en TC. ¡PROHIBIDO BIOPSIAR! (Resección en bloque). Carcinoma Adenoide Quístico = DOLOR (invasión perineural) + OSTEÓLISIS apolillada en TC.',
    tags: ['Adenoma pleomorfo', 'Glándula lagrimal', 'Carcinoma adenoide quístico', 'Prohibido biopsiar', 'Osteólisis apolillada', 'Invasión perineural']
  },
  {
    id: 'neuro-03',
    subspecialtyId: 'neuroftalmologia',
    topic: 'Síndrome de Horner Agudo Doloroso y Disección Carotídea',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Varón de 41 años sin antecedentes consulta por dolor cervical izquierdo y cefalea retroocular súbita intensa tras levantar objetos pesados. A la exploración en penumbra se observa anisocoria con pupila izquierda más pequeña (miosis) y ptosis leve del párpado superior izquierdo de 1.5 mm con elevación del párpado inferior (ptosis inversa). No se observa anhidrosis facial.',
    questionText: '¿Cuál es el mecanismo fisiopatológico del test de Apraclonidina al 0.5% en este caso y qué estudio de imagen es mandatorio de emergencia?',
    options: [
      'La apraclonidina contrae la pupila sana y no modifica la enferma; solicitar punción lumbar urgente para descartar meningitis.',
      'La pérdida del tono simpático induce supersensibilidad por denervación de receptores alfa-1 en el músculo dilatador del iris del ojo afecto; la apraclonidina produce "reversión de la anisocoria" (la pupila de Horner se dilata y la ptosis se corrige); se debe solicitar Angio-TC o Angio-RM de cuello y cerebro para descartar Disección de la Arteria Carótida Interna.',
      'La apraclonidina es un betabloqueante que disminuye la presión ocular; solicitar ecografía Doppler ocular.',
      'La denervación parasimpática produce hipersensibilidad a la pilocarpina al 0.125%; solicitar campimetría computarizada urgente.'
    ],
    correctIndex: 1,
    explanation: 'El Síndrome de Horner agudo y doloroso es una EMERGENCIA VASCULAR ABSOLUTA causada por Disección de la Arteria Carótida Interna extracraneal hasta que se demuestre lo contrario. El hematoma intramural en la carótida comprime las fibras oculosimpáticas posganglionares de 3ª neurona. Como las fibras vasomotoras y sudomotoras faciales divergen con la carótida externa, la anhidrosis facial suele estar ausente en lesiones carotídeas internas distales. El test confirmatorio de elección es la Apraclonidina al 0.5%: es un agonista alfa-2 con débil acción alfa-1; en el ojo denervado, la supersensibilidad alfa-1 produce dilatación pupilar paradójica y elevación del párpado caído ("reversión de la anisocoria"), mientras que la pupila sana no se modifica. El estudio de elección es la Angio-TC o Angio-RM de cuello y encéfalo para instaurar anticoagulación o antiagregación y prevenir un ictus cerebral isquémico.',
    clinicalApplication: 'CONDUCTA DE GUARDIA: 1) Evaluar anisocoria en luz y oscuridad (en Horner la anisocoria aumenta en oscuridad). 2) Test de Apraclonidina 0.5%: positivo si dilata la pupila pequeña. 3) Si hay dolor cervical o facial: Remisión urgente a Código Ictus / Angio-TC de cuello y cerebro sin demora.',
    pearl: 'Horner agudo doloroso = Disección de la arteria carótida interna. Apraclonidina al 0.5% produce "reversión de la anisocoria". Requiere Angio-TC urgente para prevenir ictus embólico.',
    tags: ['Síndrome de Horner', 'Disección carotídea', 'Apraclonidina', 'Reversión de anisocoria', 'Angio-TC']
  },
  {
    id: 'neuro-04',
    subspecialtyId: 'neuroftalmologia',
    topic: 'Miastenia Gravis Ocular, Test del Hielo y Contraindicaciones Farmacológicas',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Mujer de 29 años refiere ptosis del párpado superior derecho fluctuante que empeora notablemente al anochecer o tras leer de forma prolongada, asociando diplopía intermitente. A la exploración física las pupilas son de 3 mm, isocóricas y reactivas a la luz y acomodación de forma normal. La prueba de la mirada sostenida hacia arriba durante 60 segundos provoca caída marcada del párpado.',
    questionText: '¿Cómo se interpreta el Test del Paquete de Hielo (Ice Pack Test) y qué grupo de fármacos comunes está formalmente CONTRAINDICADO por riesgo de precipitar una crisis miasténica respiratoria?',
    options: [
      'El test es positivo si la ptosis empeora tras el frío; están contraindicados los corticoides sistémicos.',
      'El test es positivo si la hendidura palpebral o MRD1 aumenta en >=2 mm tras aplicar hielo durante 2 minutos (por inhibición de la acetilcolinesterasa tisular); están formalmente contraindicados los antibióticos Aminoglucósidos (Gentamicina, Tobramicina), Fluoroquinolonas, Macrólidos y Betabloqueantes (incluido colirio de Timolol).',
      'El test es positivo si aparece midriasis pupilar; están contraindicados los AINEs tópicos.',
      'El test es positivo si la pupila se contrae con luz infrarroja; está contraindicada la piridostigmina.'
    ],
    correctIndex: 1,
    explanation: 'La Miastenia Gravis Ocular (OMG) es una enfermedad autoinmune contra los receptores nicotínicos de acetilcolina postsinápticos (AChR). REGLA FUNDAMENTAL DE ORO: Las pupilas son RIGUROSAMENTE NORMALES (no afecta la musculatura lisa intraocular). El Test del Hielo (Ice Pack Test) consiste en colocar una compresa con hielo sobre el párpado caído durante 2 minutos; el enfriamiento local inhibe la degradación enzimática de la acetilcolina por la acetilcolinesterasa aumentando el tiempo de unión en la hendidura neuromuscular; una mejoría de >=2 mm de la hendidura palpebral o MRD1 tiene una sensibilidad del 89-92% y especificidad del 96-98% para OMG. CONTRAINDICACIONES FARMACOLÓGICAS VITALES: Los aminoglucósidos, fluoroquinolonas, macrólidos y betabloqueantes (incluso gotas de Timolol oftálmico) bloquean la transmisión neuromuscular y pueden transformar una miastenia ocular en una crisis miasténica respiratoria potencialmente mortal.',
    clinicalApplication: 'CONDUCTA DE GUARDIA: 1) Test del hielo en la lámpara de hendidura (rápido, inocuo y de alta precisión). 2) Solicitar anticuerpos anti-AChR (y anti-MuSK si es seronegativa). 3) TAC de tórax con contraste para descartar Timoma. 4) Advertir expresamente al paciente y en su historia clínica sobre la lista de fármacos contraindicados (antibióticos aminoglucósidos y betabloqueantes).',
    pearl: 'Miastenia Gravis: NUNCA afecta la motilidad pupilar. Test del hielo positivo = elevación >=2 mm en 2 min. Aminoglucósidos y betabloqueantes (incluido Timolol en colirio) están formalmente contraindicados.',
    tags: ['Miastenia gravis', 'Test del hielo', 'Pupila respetada', 'Aminoglucósidos contraindicados', 'AChR']
  },
  {
    id: 'pedia-03',
    subspecialtyId: 'pediatria',
    topic: 'Síndrome de Retracción de Duane Tipo 1 y Cocontracción Anómala',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Niño de 5 años es traído a consulta por presentar desviación ocular y posición compensatoria de la cabeza con la cara girada hacia la izquierda. Al explorar la motilidad ocular se evidencia una limitación casi completa de la abducción del ojo izquierdo (-4), con aducción conservada. Al intentar mirar en aducción hacia la derecha, el ojo izquierdo presenta un marcado enoftalmos visible con estrechamiento evidente de la hendidura palpebral.',
    questionText: '¿Cuál es la anomalía de inervación subyacente y qué procedimiento quirúrgico de estrabismo está ESTRICTAMENTE CONTRAINDICADO en este cuadro?',
    options: [
      'Parálisis periférica del VI par craneal; contraindicada la toxina botulínica.',
      'Agenesia del núcleo del VI par con inervación anómala del músculo recto lateral por ramas del III par craneal (cocontracción simultánea de RM y RL en aducción); está ESTRICTAMENTE CONTRAINDICADA la RESECCIÓN DEL MÚSCULO RECTO LATERAL.',
      'Atrapamiento traumático del músculo recto medial en la lámina papirácea; contraindicada la descompresión orbitaria.',
      'Disfunción primaria del músculo oblicuo superior congénita; contraindicada la miectomía del oblicuo inferior.'
    ],
    correctIndex: 1,
    explanation: 'El Síndrome de Duane Tipo 1 (la forma más común, 80-85% de casos) es un trastorno congénito de inervación craneal (CCDD) caracterizado por la ausencia o hipoplasia del núcleo y nervio abducens (VI par), con reinervación anómala del músculo recto lateral (RL) por fibras procedentes de la división inferior del nervio oculomotor (III par). Al intentar la aducción, el III par envía señales simultáneas tanto al Recto Medial (RM) como al Recto Lateral aberrante; la contracción simultánea (cocontracción) de ambos antagonistas horizontales tracciona mecánicamente del globo ocular hacia el vértice orbitario, produciendo ENOFTALMOS patognomónico y estrechamiento mecánico de la hendidura palpebral. REGLA QUIRÚRGICA CAPITAL: Está FORMALMENTE PROHIBIDA LA RESECCIÓN DEL RECTO LATERAL, ya que acortar un músculo fibrosado inervado anómalamente empeora dramáticamente el enoftalmos y la retracción del globo ocular.',
    clinicalApplication: 'CONDUCTA QUIRÚRGICA: 1) Si no hay tortícolis significativo ni desviación en posición primaria: No operar (observación). 2) Si hay tortícolis o endotropia en posición primaria: Retroinserción (debilitamiento) amplia del Recto Medial ipsilateral. 3) En casos con upshoot o downshoot severo por efecto cuerda de arco: División en Y (Y-splitting) del recto lateral.',
    pearl: 'Síndrome de Duane: Agenesia del VI par con inervación anómala del RL por el III par. Enoftalmos y cierre palpebral en aducción por cocontracción. ¡PROHIBIDA LA RESECCIÓN DEL RECTO LATERAL!',
    tags: ['Síndrome de Duane', 'Cocontracción', 'Enoftalmos en aducción', 'Resección RL contraindicada', 'CCDD']
  },
  {
    id: 'pedia-04',
    subspecialtyId: 'pediatria',
    topic: 'Aniridia Congénita Esporádica, Mutación PAX6 y Síndrome WAGR',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Recién nacido de 2 semanas de vida es evaluado por pediatría donde se detecta fotofobia y ausencia bilateral de iris a la inspección con linterna. El examen oftalmológico bajo dilatación confirma aniridia bilateral casi completa, hipoplasia foveal con ausencia del brillo foveolar y muñón iridiano rudimentario periférico. No existen antecedentes familiares de patología ocular (caso esporádico).',
    questionText: '¿Qué microdeleción cromosómica contigua se debe descartar y cuál es el protocolo de tamizaje sistémico de vital importancia que debe iniciarse de inmediato?',
    options: [
      'Mutación en FBN1 en cromosoma 15; ecocardiografía semestral para aneurisma de aorta.',
      'Deleción en el cromosoma 11p13 que engloba a los genes PAX6 y WT1 (Síndrome WAGR); es OBLIGATORIO realizar ecografía renal trimestral hasta los 8 años de vida para detección precoz de Tumor de Wilms (nefroblastoma).',
      'Deleción en el gen RB1 en cromosoma 13q14; punción de médula ósea mensual.',
      'Mutación en COL2A1; valoración de desprendimiento de retina por síndrome de Stickler.'
    ],
    correctIndex: 1,
    explanation: 'La Aniridia Congénita es una pan-oftalmopatía severa causada por haploinsuficiencia del gen PAX6 (cromosoma 11p13), gen maestro del desarrollo ocular. Se asocia a hipoplasia foveal (causa del nistagmo y mala agudeza visual), glaucoma secundario (50-70% por cierre angular por el muñón iridiano), catarata y queratopatía anirídica por deficiencia de células madre límbicas. En casos ESPORÁDICOS (sin antecedentes familiares), aproximadamente un tercio presentan una microdeleción génica contigua en 11p13 que afecta tanto a PAX6 como al gen supresor de tumores WT1 (Wilms Tumor 1), configurando el SÍNDROME WAGR (Wilms tumor, Aniridia, Genitourinary anomalies, Mental Retardation). Estos niños tienen un riesgo del 45-50% de desarrollar Tumor de Wilms en los primeros años. Por tanto, es un estándar de oro protocolizado e innegociable realizar ecografía abdominal/renal cada 3 meses desde el nacimiento hasta los 8 años de edad para detectar el tumor antes de su diseminación metastásica.',
    clinicalApplication: 'CONDUCTA INMEDIATA ANTE ANIRIDIA ESPORÁDICA:\n1) Estudio citogenético con microarrays o FISH para deleción 11p13 (PAX6-WT1).\n2) Remisión prioritaria a Oncología Pediátrica: Ecografía renal TRIMESTRAL estricta hasta los 8 años.\n3) Manejo ocular: Lentes filtrantes tintados protectores, monitorización de la presión intraocular y lágrimas artificiales sin conservantes.',
    pearl: 'Aniridia esporádica = Regla de vida: Descartar Síndrome WAGR (deleción 11p13 que incluye gen WT1) y realizar ecografía renal cada 3 meses hasta los 8 años de vida para detectar Tumor de Wilms.',
    tags: ['Aniridia', 'PAX6', 'Síndrome WAGR', 'Tumor de Wilms', 'Ecografía renal trimestral']
  },
  {
    id: 'oculo-03',
    subspecialtyId: 'oculoplastica',
    topic: 'Entropión Involutivo Senil, Factores Anatómicos y Tira Tarsal Lateral',
    difficulty: 'R2/R3 - Intermedio',
    clinicalVignette: 'Paciente de 82 años acude por dolor ocular intenso, sensación de cuerpo extraño e inyección conjuntival en ojo derecho. A la biomicroscopía se observa el margen palpebral inferior totalmente invertido hacia adentro con las pestañas rozando directamente la superficie corneal inferior, produciendo una queratopatía punteada confluente y una úlcera epitelial superficial. La prueba de distracción palpebral es de 9 mm y el snap-back test muestra retorno muy lento sin parpadeo.',
    questionText: '¿Cuáles son los tres factores etiopatogénicos capitales del entropión involutivo y cuál es la técnica quirúrgica estándar de elección para corregir la laxitud horizontal?',
    options: [
      'Infección bacteriana por clamidia, metaplasia de pestañas y fibrosis subconjuntival; tarsorrafia temporal.',
      'Laxitud horizontal palpebral (tendón cantal lateral/medial), desinserción o atenuación de los retractores del párpado inferior y cabalgamiento del músculo orbicular pretarsal; la técnica estándar de elección es la Tira Tarsal Lateral (Lateral Tarsal Strip - LTS) anclada al periostio del reborde orbitario combinada con reinserción de retractores.',
      'Parálisis del nervio facial VII par, hiperlaxitud tarsal y proptosis distiroidea; injerto libre de piel retroauricular.',
      'Retracción de la lámina posterior por penfigoide ocular; alargamiento con injerto de mucosa labial oral.'
    ],
    correctIndex: 1,
    explanation: 'El Entropión Involutivo del párpado inferior se produce por la confluencia de tres factores anatómicos degenerativos del envejecimiento: 1) Laxitud horizontal palpebral por estiramiento de los tendones cantales lateral y medial; 2) Desinserción o atenuación de los retractores del párpado inferior (fascia capsulopalpebral y músculo tarsal inferior, homólogos al elevador superior), lo que permite que el borde inferior del tarso bascule hacia afuera y el margen hacia adentro; 3) Cabalgamiento ascendente de las fibras preseptales del músculo orbicular de los párpados sobre las fibras pretarsales durante el parpadeo. La técnica reconstructiva de elección es la Tira Tarsal Lateral (LTS de Anderson) que acorta y tensa la lámina posterior anclando una lengüeta de tarso desepitelizado al periostio del tubérculo orbitario de Whitnall, asociada a la reinserción de los retractores al borde inferior del tarso (técnica de Jones).',
    clinicalApplication: 'CONDUCTA DE GUARDIA Y QUIRÚRGICA: 1) Guardia: Alivio inmediato con eversión palpebral con esparadrapo hacia la mejilla + lubricante denso o lente de contacto terapéutico para curar la úlcera corneal. 2) Descartar entropión cicatrizal (inspeccionar conjuntiva tarsal inferior buscando fibrosis o simbléfaron). 3) Quirúrgica: Realizar Lateral Tarsal Strip (LTS) + reinserción de retractores para evitar recidivas.',
    pearl: 'Entropión Involutivo: Tríada de laxitud horizontal, desinserción de retractores y cabalgamiento del orbicular pretarsal. La Tira Tarsal Lateral (LTS) anclada a periostio en el tubérculo de Whitnall es el tratamiento de elección.',
    tags: ['Entropión involutivo', 'LTS', 'Tira tarsal lateral', 'Retractores de párpado', 'Tubérculo de Whitnall']
  },
  {
    id: 'oculo-04',
    subspecialtyId: 'oculoplastica',
    topic: 'Carcinoma de Glándulas Sebáceas de Meibomio (SGC) y Diseminación Pagetoide',
    difficulty: 'R4/Fellow - Avanzado',
    clinicalVignette: 'Mujer de 73 años consulta por un nódulo indurado amarillento en el tarso del párpado superior derecho que ha sido cureteado en dos ocasiones en los últimos 18 meses bajo el diagnóstico presuntivo de "chalazión recidivante". A la exploración presenta madarosis (pérdida de pestañas) focal en la zona de la lesión, engrosamiento difuso del margen palpebral y engrosamiento papilar aterciopelado de la conjuntiva tarsal superior. Se palpa una adenopatía preauricular ipsilateral indolora.',
    questionText: '¿Por qué el carcinoma de glándulas sebáceas es la neoplasia maligna que con mayor frecuencia induce retraso diagnóstico, qué recaudo técnico debe tomarse al procesar la biopsia y por qué son obligatorias las biopsias en mapa conjuntivales?',
    options: [
      'Porque simula una celulitis orbitaria aguda; la biopsia debe teñirse con PAS; las biopsias en mapa descartan melanoma.',
      'Porque es el clásico "gran simulador" palpebral que asemeja un chalazión recurrente o blefaroconjuntivitis crónica unilateral (más común en párpado superior por mayor número de glándulas de Meibomio); se debe procesar tejido EN FRESCO sin fijar en parafina para tinción de lípidos con OIL RED O o Sudan; y se requieren biopsias conjuntivales en mapa (map biopsies) para detectar la diseminación intraepitelial pagetoide.',
      'Porque se confunde con quistes de inclusión epidérmica; no requiere tinción lipídica; tratamiento con crioterapia superficial ambulatoria.',
      'Porque siempre debuta en pacientes menores de 15 años; se procesa con tinción de Ziehl-Neelsen para micobacterias.'
    ],
    correctIndex: 1,
    explanation: 'El Carcinoma de Glándulas Sebáceas (SGC) es una neoplasia maligna altamente agresiva originada en las glándulas de Meibomio (75-80% en párpado superior) o glándulas de Zeis. Es famoso por ser el "gran simulador" en oculoplástica: suele diagnosticarse erróneamente como chalazión recurrente o blefaroconjuntivitis crónica refractaria unilateral en adultos mayores, lo que produce retrasos diagnósticos promedio de 1 a 2 años con mortalidad metastásica del 15-25%. DOS PERLAS CAPITALES DE EXAMEN Y PRÁCTICA: 1) Procesamiento histopatológico: Los solventes utilizados para incluir tejido en parafina disuelven los lípidos intracitoplasmáticos, haciendo que el tumor se confunda con un carcinoma escamoso indiferenciado; se DEBE enviar tejido fresco o en congelación para tinciones específicas de lípidos (OIL RED O o SUDAN IV). 2) Diseminación Pagetoide: Las células neoplásicas migran intraepitelialmente por la conjuntiva y córnea sin formar una masa continua palpable; se requieren múltiples biopsias conjuntivales en mapa (Map Biopsies) para trazar márgenes quirúrgicos verdaderos antes o durante la resección oncológica.',
    clinicalApplication: 'CONDUCTA MÉDICO-QUIRÚRGICA: 1) Todo "chalazión" recidivante en anciano o con madarosis/asimetría palpebral DEBE biopsiarse en espesor total. 2) Palpar siempre ganglios preauriculares y submandibulares (vías de drenaje linfático). 3) Tratamiento: Resección quirúrgica con control de márgenes (cirugía de Mohs o cortes congelados) + biopsias en mapa conjuntivales.',
    pearl: 'Carcinoma Sebáceo: Gran simulador de chalazión recurrente en párpado superior con madarosis. Requiere muestra EN FRESCO para tinción lipídica Oil Red O y biopsias conjuntivales en mapa por diseminación pagetoide.',
    tags: ['Carcinoma sebáceo', 'Glándulas de Meibomio', 'Oil Red O', 'Diseminación pagetoide', 'Biopsias en mapa']
  }
];


