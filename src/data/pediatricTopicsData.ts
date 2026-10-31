import { TopicDeepDive } from '../types/ophthalmology';

export const PEDIATRIC_TOPICS: TopicDeepDive[] = [
  // =========================================================================
  // 1. ROP (ICROP-3, ETROP, BEAT-ROP) Y AMBLIOPÍA (PEDIG)
  // =========================================================================
  {
    id: 'deep-pediatria-rop-estrabismo',
    title: 'Retinopatía del Prematuro (ROP - Guías ICROP-3, ETROP, BEAT-ROP) y Ambliopía (PEDIG)',
    subspecialtyId: 'pediatria',
    summary: 'Monografía completa sobre patología visual del desarrollo: Criterios internacionales de tamizaje y estadificación ICROP-3 de Retinopatía del Prematuro (ROP), indicaciones de tratamiento según el ensayo ETROP, terapia con Anti-VEGF (ensayos BEAT-ROP y RAINBOW), reactivación tardía y protocolos de oclusión del consorcio PEDIG para ambliopía.',
    definitionAndEpidemiology: 'La Retinopatía del Prematuro (ROP) es una vasoproliferación retiniana anómala que ocurre en recién nacidos prematuros con bajo peso al nacer expuestos a hiperoxia y fluctuaciones de oxígeno. Es una de las principales causas prevenibles de ceguera infantil en el mundo. La ambliopía es la reducción unilateral o bilateral de la agudeza visual secundaria a una experiencia visual anormal durante el período crítico del desarrollo visual (hasta los 7-8 años).',
    anatomyAndPathophysiology: '1. Vasogénesis Retiniana Humana: Inicia en el nervio óptico a la semana 16 de gestación. La vasculatura alcanza la ora serrata nasal hacia la semana 36 y la ora serrata temporal (más lejana) hacia las 40 semanas (a término).\n2. Fisiopatología bifásica de la ROP:\n   • Fase I (Hiperóxica / Vaso-obliterativa): El ambiente hiperóxico postparto suprime la producción de VEGF (Factor de Crecimiento del Endotelio Vascular) y de IGF-1 (Factor de Crecimiento Similar a la Insulina 1), deteniendo la angiogénesis normal y causando retracción y obliteración vascular capilar.\n   • Fase II (Hipóxica / Vasoproliferativa): A medida que la retina periférica avascular crece y aumenta sus requerimientos metabólicos, se genera una hipoxia tisular extrema que induce una sobreexpresión patológica masiva de VEGF y eritropoyetina. Esto desencadena una neovascularización desorganizada con proliferación fibrovascular intravítrea, tracción retiniana y desprendimiento de retina regmatógeno-traccional (estadios 4 y 5 de ICROP).\n3. Ambliopía y Período Crítico: Plasticidad sináptica en la corteza visual estriada (área 17). La falta de estimulación retiniana nítida (ambliopía refractiva o por deprivación) o la competencia binocular anómala (ambliopía estrábica) conduce a la atrofia de las columnas de dominancia ocular en la corteza occipital.',
    clinicalExamination: {
      biomicroscopy: 'En prematuros: dilatación pupilar con tropicamida 0.5% + fenilefrina 2.5% (evitar concentraciones al 10% por riesgo de crisis hipertensiva letal). En ambliopía: examen completo del segmento anterior descartando cataratas, opacidades corneales o ptosis.',
      fundus: 'Oftalmoscopía binocular indirecta con indentación escleral bajo blefarostato pediátrico de Sauer. Clasificación ICROP-3:\n- Zonas: Zona I (círculo cuyo radio es el doble de la distancia fóvea-disco), Zona II (desde el borde de zona I hasta la ora serrata nasal), Zona III (semiluna temporal residual).\n- Estadios: Estadio 1 (Línea de demarcación), Estadio 2 (Cresta o reborde - ridge), Estadio 3 (Cresta con proliferación fibrovascular extrarretiniana), Estadio 4 (Desprendimiento de retina parcial: 4A extrafoveal, 4B con compromiso foveal), Estadio 5 (Desprendimiento de retina total en embudo abierto o cerrado).\n- Enfermedad Plus (Plus Disease): Tortuosidad arteriolar severa y dilatación venosa en al menos 2 cuadrantes del polo posterior; iris con ingurgitación vascular y rigidez pupilar.',
      specialSigns: '• ROP Agresiva (A-ROP, antes AP-ROP): ROP fulminante caracterizada por neovascularización plana en sábana de rápida progresión en Zona I o Zona II posterior con marcada enfermedad Plus y sin progresión escalonada a través de los estadios 1 a 3.'
    },
    diagnosticWorkup: [
      { test: 'Criterios de Cribado / Tamizaje (Screening) de ROP (Guías AAP / AAO / AAPOS)', findings: 'Todo recién nacido con peso al nacer <= 1500 g o edad gestacional <= 30 semanas (o prematuros seleccionados de 1500-2000 g con curso clínico inestable). Primer examen a las 4 semanas de vida posnatal o a las 31 semanas de edad postmenstrual (PMA), lo que ocurra más tarde.' },
      { test: 'Retinografía Digital Pediátrica de Campo Amplio (RetCam / Phoenix ICON)', findings: 'Documentación fotográfica seriada y objetiva de la vascularización en la zona periférica y monitorización de la tortuosidad vascular en polo posterior.' }
    ],
    differentialDiagnosis: [
      { condition: 'Incontinencia Pigmenti (Síndrome de Bloch-Sulzberger)', distinction: 'Enfermedad ligada al X que afecta niñas con lesiones vesiculobulosas cutáneas y oclusión arteriolar retiniana periférica.' },
      { condition: 'Exudación por Enfermedad de Coats Pediátrica', distinction: 'Varones unilaterales no prematuros con telangiectasias y exudación lipídica masiva subretiniana sin áreas de retina avascular circunferencial.' },
      { condition: 'Vitreorretinopatía Exudativa Familiar (FEVR)', distinction: 'Herencia genética (mutaciones FZD4, LRP5, NDP), historia familiar positiva y presencia en niños nacidos a término.' }
    ],
    steppedManagement: {
      medical: '• Indicación de Tratamiento según Ensayo ETROP (ROP Tipo 1: Requiere tratamiento urgente en <72 horas):\n  1) Zona I, cualquier estadio con Enfermedad Plus.\n  2) Zona I, Estadio 3 sin Plus.\n  3) Zona II, Estadio 2 o 3 con Enfermedad Plus.\n• Opciones Terapéuticas en ROP Tipo 1:\n  - Fotocoagulación Láser Diodo Confluente de toda la retina avascular: Estándar de oro tradicional; destruye las células hipóxicas productoras de VEGF; requiere anestesia general o sedación profunda.\n  - Anti-VEGF Intravítreo (Ranibizumab 0.2 mg / 0.02 mL [Ensayo RAINBOW] o Bevacizumab 0.625 mg / 0.025 mL [Ensayo BEAT-ROP]): Tratamiento de elección en Zona I o A-ROP; permite la continuación del crecimiento vascular periférico normal, induce regresión rápida en 24-48h y menor miopía alta a largo plazo.\n  - CRÍTICO: El uso de anti-VEGF exige vigilancia estricta y prolongada hasta las 65-70 semanas PMA debido al riesgo de REACTIVACIÓN TARDÍA de la ROP.\n• Protocolos PEDIG para Ambliopía (Pediatric Eye Disease Investigator Group):\n  - Corrección óptica completa bajo refracción ciclopléjica con ciclopentolato al 1% durante 12-16 semanas como paso inicial.\n  - Ambliopía Moderada (20/40 a 20/80): El ensayo PEDIG ATS-2 demostró que DOS (2) HORAS DIARIAS DE PARCHE son tan efectivas como 6 horas de oclusión.\n  - Ambliopía Severa (20/100 a 20/400): SEIS (6) HORAS DIARIAS DE PARCHE son tan efectivas como la oclusión a tiempo completo.\n  - Penalización farmacológica con Atropina 1% (1 gota los sábados y domingos en el ojo sano): Tan efectiva como el parche en ambliopías moderadas.',
      surgical: 'Vitrectomía pars plana o lensectomía con vitrectomía en estadios 4A, 4B y 5 de ICROP-3.'
    },
    clinicalApplicationPractical: '1. Regla de Oro en Anti-VEGF para ROP: La inyección de anti-VEGF NO da de alta al paciente; retrasa la ventana de reactivación. El prematuro tratado con anti-VEGF debe seguirse semanal o quincenalmente hasta que la vasculatura alcance la Zona III sin signos de Plus.\n2. Al prescribir parche para ambliopía: Explicar a los padres que 2 horas de parche acompañadas de actividades visuales cercanas (dibujar, leer, videojuegos) son suficientes; evitar el parche durante todo el día (riesgo de ambliopía por deprivación del ojo sano y conflicto familiar severo).',
    highYieldPearl: 'ROP y PEDIG: ROP Tipo 1 según ETROP (Zona I con Plus, Zona I Estadio 3, o Zona II Estadios 2-3 con Plus) exige tratamiento en <72h. Anti-VEGF requiere seguimiento prolongado hasta las 65-70 semanas PMA. PEDIG: 2 horas de parche son suficientes en ambliopía moderada; 6 horas en severa.',
    keyDrugs: [
      { name: 'Ranibizumab Pediátrico', dose: '0.2 mg (0.02 mL) inyección intravítrea a 1.5 mm del limbo', warning: 'Aprobado según ensayo RAINBOW; dosis correspondiente al 40% de la dosis del adulto.' },
      { name: 'Atropina Colirio 1%', dose: '1 gota en el ojo sano sábados y domingos (fin de semana)', warning: 'Penalización óptica según ensayo PEDIG; riesgo de taquicardia y enrojecimiento facial.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Criterios de ROP Tipo 1 del Ensayo ETROP',
        category: 'Cifra Clave de Corte',
        description: 'La ROP Tipo 1 exige tratamiento activo inmediato (<72h). Tipo 1 = 1) Zona I con Plus (cualquier estadio); 2) Zona I Estadio 3; 3) Zona II Estadio 2 o 3 con Plus. La ROP Tipo 2 (Zona I Estadios 1-2 sin Plus; Zona II Estadio 3 sin Plus) sólo requiere observación estrecha.',
        trapToAvoid: 'Tratar una ROP Tipo 2 (ej. Zona II, Estadio 3 sin Plus); la Tipo 2 debe observarse de cerca.'
      },
      {
        title: 'Riesgo de Anti-VEGF en ROP: Reactivación Tardía',
        category: 'Trampa de Tribunal',
        description: 'A diferencia del láser (que destruye permanentemente la retina periférica y previene recaídas), el anti-VEGF se depura en semanas, permitiendo que la retina periférica aún no vascularizada vuelva a hipoxiarse y reactive la ROP hasta las 60-70 semanas PMA.',
        trapToAvoid: 'Dar de alta al prematuro a las 40 semanas tras una inyección de anti-VEGF creyendo que está curado.'
      },
      {
        title: 'Dosis Diaria de Parche según Ensayos PEDIG',
        category: 'Pregunta Clásica',
        description: 'Ensayos ATS del consorcio PEDIG demostraron que no se necesitan parches de 12 o 24 horas. 2 horas al día en ambliopía moderada y 6 horas al día en severa logran la misma ganancia visual con mucho mejor cumplimiento.',
        trapToAvoid: 'Indicar oclusión continua de todo el día (full-time patching) en ambliopías moderadas.'
      }
    ],
    fellowshipKeyPoints: [
      'Clasificación ICROP-3 (Ophthalmology 2021): Introdujo formalmente el concepto de ROP Agresiva (A-ROP) reemplazando a AP-ROP, y definió la ROP con reactivación tardía post-anti-VEGF.',
      'Ensayo BEAT-ROP (NEJM 2011) y Ensayo RAINBOW (Lancet 2019): Validaron el uso de anti-VEGF en ROP Zona I con menor tasa de recurrencia que el láser en esa zona anatómica.'
    ],
    landmarkTrials: [
      {
        name: 'Early Treatment for Retinopathy of Prematurity (ETROP)',
        year: '2003',
        conclusion: 'El tratamiento precoz de la ROP Tipo 1 reduce significativamente los resultados estructurales desfavorables (desprendimiento de retina) del 15.6% al 9.1% a los 9 meses y mejora la agudeza visual.',
        fellowshipRelevance: 'Definió la clasificación terapéutica de ROP Tipo 1 y Tipo 2 utilizada en todo el mundo.'
      }
    ]
  },

  // =========================================================================
  // 2. ESTRABISMOS CONCOMITANTES: ENDOTROPIAS Y CIRUGÍA DE MÚSCULOS
  // =========================================================================
  {
    id: 'deep-pediatria-estrabismo-comitante',
    title: 'Estrabismos Concomitantes: Endotropia Infantil / Congénita vs Acomodativa, DVD, Nistagmo Latente y Cirugía de Músculos Extraoculares',
    subspecialtyId: 'pediatria',
    summary: 'Monografía completa sobre estrabismos de la infancia: Endotropia Infantil Congénita (tríada clásica con DVD y nistagmo latente), Endotropia Acomodativa Refractiva pura y no refractiva (relación CA/A alta), técnica de retroinserción y resección de rectos y prevención de complicaciones quirúrgicas.',
    definitionAndEpidemiology: 'La endotropia es la desviación ocular convergente hacia adentro. Es el tipo de estrabismo más común en la población pediátrica occidental. La Endotropia Congénita o Infantil se manifiesta antes de los 6 meses de vida en niños neurológicamente sanos, con un ángulo de desviación grande y constante (>30-40 dioptrías prismáticas - DP).',
    anatomyAndPathophysiology: '1. Endotropia Infantil (Congénita):\n   • Trastorno sensorio-motor congénito del desarrollo de la visión binocular.\n   • Ausencia congénita de fusión binocular normal y estereopsis fina.\n   • Tríada y signos asociados patognomónicos:\n     1) Ángulo de desviación grande (>30-50 DP) y estable en todas las posiciones.\n     2) Fijación cruzada (el ojo derecho mira hacia el campo izquierdo y viceversa, simulando una falsa paresia del VI par).\n     3) Desviación Vertical Disociada (DVD): Elevación, abducción y extorsión lenta involuntaria del ojo ocluido o desatento que no obedece la ley de Hering de inervación motora simétrica.\n     4) Nistagmo Latente: Nistagmo que aparece o se incrementa al ocluir un ojo, cuya fase rápida bate hacia el ojo fijador.\n     5) Hiperfunción primaria de Músculos Oblicuos Inferiores (V-pattern incipiente).\n2. Endotropia Acomodativa:\n   • Aparece más tarde, típicamente entre los 2 y 4 años de edad.\n   • Mecanismo Refractivo Puro: Hipermetropía moderada a alta no corregida (+3.00 a +6.00 D). El esfuerzo acomodativo continuo para enfocar las imágenes estimula una convergencia refleja exagerada (vía sinquinética acomodación-convergencia-miosis). Al colocar la corrección óptica hipermetrópica completa, la desviación desaparece por completo (ortotropia).\n   • Mecanismo No Refractivo (Relación AC/A alta): La desviación es significativamente mayor de cerca que de lejos (diferencia >10-15 DP) con hipermetropía baja; responde a lentes bifocales con adición ejecutiva.',
    clinicalExamination: {
      biomicroscopy: 'Examen de segmento anterior normal.',
      fundus: 'Fondo de ojo normal. Descartar retinoblastoma o toxoplasmosis macular (toda endotropia monocular constante puede ser secundaria a una lesión orgánica macular sensorial).',
      specialSigns: '• Test de Hirschberg y Krimsky: Estimación corneal del ángulo de desviación (1 mm de descentramiento del reflejo corneal = ~14-15 DP).\n• Cover-Uncover Test y Test de Oclusión Alternante con Prismas: Medición cuantitativa del estrabismo de lejos (6 m) y de cerca (33 cm).\n• Maniobra de Muñeca (Doll\'s head maneuver): En lactantes con aparente parálisis del VI par, girar la cabeza pasivamente demuestra abducción completa normal (descarta parálisis verdadera y confirma fijación cruzada).'
    },
    diagnosticWorkup: [
      { test: 'Refracción Ciclopléjica Estricta con Ciclopentolato al 1%', findings: 'REGLA CARDINAL EN PEDIATRÍA: Instilar 2 gotas separadas por 5-10 minutos y esperar 40-45 minutos. Revela la hipermetropía total latente. En endotropia acomodativa se hallan típicamente entre +3.00 D y +6.00 D.' },
      { test: 'Test de Relación AC/A (Convergencia Acomodativa / Acomodación)', findings: 'Método del gradiente con lentes esféricas de -3.00 D de cerca o método heterofórico. AC/A alta (>5:1) indica indicación de bifocales en niños.' }
    ],
    differentialDiagnosis: [
      { condition: 'Pseudoendotropia por Epicanto o Puente Nasal Ancho', distinction: 'Reflejos corneales centrados simétricamente al test de Hirschberg y Cover-Test estrictamente negativo.' },
      { condition: 'Parálisis del VI Par Craneal Pediátrica', distinction: 'La maniobra de la cabeza de muñeca NO logra la abducción completa; endotropia que aumenta drásticamente hacia el lado parético con tortícolis ipsilateral.' },
      { condition: 'Síndrome de Duane Tipo 1', distinction: 'Marcada retracción del globo ocular y estrechamiento de la hendidura palpebral al intentar aducir.' }
    ],
    steppedManagement: {
      medical: '• En Endotropia Acomodativa Pura:\n  - Prescripción óptica INMEDIATA del 100% de la hipermetropía encontrada bajo cicloplejía total (sin restar margen).\n  - PROHIBIDO OPERAR a un paciente con endotropia acomodativa pura: la cirugía produce exotropia consecutiva iatrogénica irreversible.\n• Si persiste endotropia residual con gafas tras 3-4 meses:\n  - Corregir cualquier ambliopía subyacente con oclusión de parche según protocolos PEDIG.\n  - Si la endotropia es mayor de cerca que de lejos por AC/A alta: Prescribir lentes bifocales con adición ejecutiva bisecando la pupila (+2.50 a +3.00 D).',
      surgical: '• En Endotropia Infantil / Congénita:\n  - Momento quirúrgico ideal: Tras descartar o tratar ambliopía previa, operar entre los 6 meses y 2 años de vida para maximizar el potencial de visión binocular periférica.\n  - Cirugía estándar: Retroinserción bimedial (de ambos rectos medios) de 5.0 a 7.0 mm (según tabla milimétrica basada en el ángulo de desviación en DP), o retroinserción de recto medio + resección de recto lateral del ojo no fijador.\n  - Si coexiste DVD marcada o hiperfunción de oblicuos inferiores: Miotomía o miectomía del oblicuo inferior combinada.'
    },
    clinicalApplicationPractical: '1. Regla de Oro en Endotropia: Todo niño con endotropia DEBE recibir una refracción bajo cicloplejía total con ciclopentolato antes de plantear cualquier cirugía. Si la desviación corrige con gafas, la cirugía está formalmente PROHIBIDA.\n2. Para evaluar a un lactante que "no abduce": Utilizar la maniobra de rotación cefálica o el parche diagnóstico durante 1-2 horas sobre el ojo dominante para evidenciar que el ojo cruzado sí abduce perfectamente.',
    highYieldPearl: 'Endotropia Infantil vs Acomodativa: La Infantil debuta <6 meses, ángulo >30-40 DP, DVD y nistagmo latente, requiriendo cirugía de rectos medios. La Acomodativa debuta a los 2-3 años por hipermetropía y su tratamiento es 100% GAFAS con refracción ciclopléjica (la cirugía está contraindicada).',
    keyDrugs: [
      { name: 'Ciclopentolato 1%', dose: '1 gota cada 5-10 min por 2 dosis en niños >1 año', warning: 'Ciclopléjico de elección; esperar 45 min para refracción; en lactantes <6 meses usar concentración al 0.5%.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Tríada Patognomónica de la Endotropia Congénita / Infantil',
        category: 'Asociación Patognomónica',
        description: 'Endotropia de gran ángulo (>35-40 DP) que debuta antes de los 6 meses de vida, acompañada de Fijación Cruzada, Desviación Vertical Disociada (DVD) y Nistagmo Latente.',
        trapToAvoid: 'Intentar tratar la DVD con prismas convencionales (la DVD es disociada y no sigue la ley de Hering de correspondencia motora).'
      },
      {
        title: 'Conducta en Endotropia Acomodativa Pura',
        category: 'Trampa de Tribunal',
        description: 'Pregunta típica: Niño de 3 años con endotropia de 30 DP que bajo gafas con hipermetropía de +4.50 D queda en 0 DP (ortotropia). ¿Qué cirugía propone? Respuesta: NINGUNA. La cirugía está contraindicada; el tratamiento son las gafas a permanencia.',
        trapToAvoid: 'Indicar retroinserción de rectos medios cuando la desviación se corrige con gafas.'
      }
    ],
    fellowshipKeyPoints: [
      'Ligamento de Check y Vaina de Lockwood: Respetar las conexiones fasciales al operar los músculos rectos para evitar deformidades de la hendidura palpebral.',
      'Torsión en la DVD: El ojo que se eleva sufre exciclotorsión; al desocluir, desciende e intorsiona.'
    ]
  },

  // =========================================================================
  // 3. LEUCOCORIA PEDIÁTRICA: RETINOBLASTOMA VS COATS VS CATARATA Y PHPV
  // =========================================================================
  {
    id: 'deep-pediatria-leucocoria-catarata-coats',
    title: 'Leucocoria en la Infancia: Algoritmo Diagnóstico Diferencial de Retinoblastoma vs Enfermedad de Coats vs Catarata Congénita y PHPV',
    subspecialtyId: 'pediatria',
    summary: 'Monografía completa sobre la pupila blanca en pediatría: Retinoblastoma (genética RB1 en 13q14, calcificaciones ecográficas, contraindicación absoluta de biopsia y clasificación ICRB), Enfermedad de Coats, Catarata Congénita unilateral/bilateral (ventana crítica de 6 semanas) y Persistencia de Vasculatura Fetal (PHPV).',
    definitionAndEpidemiology: 'La leucocoria ("pupila blanca" o pérdida del reflejo rojo de Bruckner) es el signo oftalmológico de alarma más crítico en la infancia. El Retinoblastoma es el tumor maligno intraocular primario más frecuente de la niñez (1 en 15,000-20,000 nacidos vivos, 95% diagnosticados antes de los 5 años; letal si no se trata).',
    anatomyAndPathophysiology: '1. Retinoblastoma y Genética del Gen RB1:\n   • Gen supresor de tumores RB1 en el cromosoma 13q14 (codifica la proteína pRb que regula el ciclo celular en el punto de control G1/S uniendo el factor E2F).\n   • Hipótesis de los Dos Golpes de Knudson (Two-Hit Hypothesis):\n     - Forma Hereditaria / Germinal (40% de casos): La primera mutación está presente en todas las células del organismo (heredada o mutación de novo en gameto); la segunda mutación ocurre en la célula retiniana. Suelen ser bilaterales o multifocales y presentan riesgo de pinealoblastoma (Retinoblastoma Trilateral) y osteosarcoma en la adolescencia.\n     - Forma No Hereditaria / Somática (60% de casos): Ambos eventos mutacionales ocurren en un único retinoblasto somático; siempre es unifocal y unilateral sin riesgo de segundos tumores.\n   • Patrones de Crecimiento: Endofítico (crece hacia la cavidad vítrea con siembras vítreas blancas) o Exofítico (crece hacia el espacio subretiniano produciendo desprendimiento de retina seroso exudativo masivo).\n2. Enfermedad de Coats:\n   • Telangiectasias retinianas congénitas idiopáticas no hereditarias con aneurismas y dilataciones vasculares en "bombilla" (light bulb) que sufren una incompetencia masiva de la barrera hematorretiniana.\n   • Exudación masiva subretiniana rica en lípidos y colesterol que desprende la retina; predomina en varones (>85%) y es casi invariablemente unilateral.\n3. Persistencia de Vasculatura Fetal (PFV / PHPV):\n   • Falla en la regresión de la arteria hialoidea embrionaria y de la túnica vasculosa lentis.\n   • Presenta un cordón retrolental vascularizado que tracciona los procesos ciliares hacia el centro y produce microftalmos ipsilateral.',
    clinicalExamination: {
      biomicroscopy: 'Test de Bruckner con oftalmoscopio directo a 1 metro: asimetría del reflejo rojo pupilar. En PHPV: procesos ciliares alargados traccionados visibles a través de la pupila y ojo con diámetro corneal reducido (microftalmos). En Coats: segmento anterior típicamente normal sin microftalmos.',
      fundus: 'Masa retiniana nodular blanco-rosada con calcificaciones refringentes y vasos nutrientes en Retinoblastoma. En Coats: vasos telangiectásicos tortuosos periféricos con exudados lipídicos amarillentos masivos en polo posterior.',
      specialSigns: '• Maniobra Prohibida: PROHIBIDA LA PUNCIÓN O BIOPSIA INTRAOCULAR DE CUALQUIER TIPO ante sospecha de retinoblastoma (provoca diseminación tumoral extraocular masiva letal a través del trayecto de punción).'
    },
    diagnosticWorkup: [
      { test: 'Ecografía Ocular Modo B (Estandarizada)', findings: 'PRUEBA INICIAL CRUCIAL: Retinoblastoma muestra una masa intraocular con ecos muy brillantes de alta reflectividad que persisten a muy baja ganancia debidos a CALCIFICACIONES INTRATUMORALES con cono de sombra acústica posterior (presentes en >90% de retinoblastomas). En PHPV: Ausencia de calcificaciones, presencia de cordón fibrovascular hialoideo desde la papila hasta el cristalino y microftalmos. En Coats: Ausencia de calcificaciones y desprendimiento exudativo con ecos móviles de colesterol.' },
      { test: 'Resonancia Magnética (RM) Cerebral y Orbitaria con contraste', findings: 'Estudio de estadificación mandatorio: Evalúa invasión del nervio óptico más allá de la lámina cribosa, invasión escleral y descarta pinealoblastoma en la fosa posterior (Retinoblastoma Trilateral). NUNCA realizar TC por la radiación ionizante (induce segundos tumores en mutación germinal RB1).' }
    ],
    differentialDiagnosis: [
      { condition: 'Enfermedad de Coats', distinction: 'Varones unilaterales sin calcificaciones en ecografía B ni en RM; fluoresceína demuestra telangiectasias en bombilla y áreas de no perfusión capilar.' },
      { condition: 'Catarata Congénita', distinction: 'La opacidad es estrictamente cristaliniana; el polo posterior es ecográficamente normal.' },
      { condition: 'Toxocariasis Ocular Pediátrica', distinction: 'Granuloma periférico inflamatorio con bandas de tracción hacia la papila, vitritis y títulos positivos de anticuerpos anti-Toxocara.' }
    ],
    steppedManagement: {
      medical: '• Retinoblastoma según Clasificación Internacional (ICRB Grupos A a E):\n  - Grupos A y B (tumores pequeños <3 mm): Terapias focales con Láser diodo transpupilar (TTT) o crioterapia.\n  - Grupos B, C y D (tumores moderados a avanzados con siembras vítreas): Quimioterapia Intraarterial (QIA) a través de la arteria oftálmica con Melisafalán, Carboplatino o Topotecán; o Quimioterapia Intravenosa Sistémica (Vincristina, Etopósido, Carboplatino - protocolo VEC) con quimioterapia intravítrea concomitante para siembras.\n• Enfermedad de Coats:\n  - Fotocoagulación láser diodo o crioterapia sobre las telangiectasias vasculares periféricas en 360 grados, asociada a anti-VEGF intravítreo o drenaje de fluido subretiniano.\n• Catarata Congénita:\n  - Cirugía de urgencia antes de las 6 semanas de vida en unilaterales y antes de las 8-10 semanas en bilaterales para salvar el período crítico y evitar ambliopía por deprivación irreversible.',
      surgical: 'Enucleación primaria del globo ocular: Mandatoria en Retinoblastoma Grupo E (ojo ciego doloroso, neovascularización del iris, invasión del segmento anterior o sospecha de invasión masiva del nervio óptico) con resección obligatoria de un muñón de nervio óptico de al menos 10 a 15 mm.'
    },
    clinicalApplicationPractical: '1. Ante todo niño con leucocoria, estrabismo de inicio brusco o pupila blanca: CONSIDERAR RETINOBLASTOMA hasta demostrar lo contrario. NUNCA realizar una punción diagnóstica en cámara anterior o vítreo; remitir urgentemente a Oncología Ocular Pediátrica.\n2. La Tomografía Computarizada (TC) está contraindicada en niños con sospecha de retinoblastoma hereditario debido al riesgo biológico de inducir osteosarcomas o sarcomas de tejidos blandos por radiación ionizante; emplear siempre Ecografía B y Resonancia Magnética.',
    highYieldPearl: 'Leucocoria: Retinoblastoma = Calcificaciones en ecografía B que persisten a baja ganancia; la biopsia está terminantemente prohibida. Catarata unilateral exige cirugía antes de las 6 semanas de vida para prevenir ambliopía irreversible.',
    keyDrugs: [
      { name: 'Melfalán Intraarterial', dose: '3-7.5 mg infundidos por microcatéter en arteria oftálmica', warning: 'Terapia de preservación ocular de elección en retinoblastoma avanzado (Grupos C-D).' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Presencia de Calcificaciones en la Ecografía Modo B',
        category: 'Asociación Patognomónica',
        description: 'La presencia de densas calcificaciones intratumorales con sombra acústica en un niño menor de 3 años es prácticamente patognomónica de Retinoblastoma.',
        trapToAvoid: 'Descartar retinoblastoma por ausencia de calcificaciones en un lactante menor de 6 meses (los tumores muy precoces pueden no haber calcificado aún).'
      },
      {
        title: 'Ventana Quirúrgica Óptima de la Catarata Congénita',
        category: 'Cifra Clave de Corte',
        description: 'Catarata unilateral densa: Operar antes de las 6 semanas de vida. Catarata bilateral densa: Operar antes de las 8-10 semanas de vida. Retrasar la cirugía más allá de esta ventana condena al ojo a una ambliopía por deprivación con nistagmo sensorial irreversible.',
        trapToAvoid: 'Diferir la cirugía hasta los 2 o 3 años para que el ojo "crezca más" antes de operar.'
      }
    ],
    fellowshipKeyPoints: [
      'Retinoblastoma Trilateral: Combinación de retinoblastoma bilateral germinal con un tumor neuroblástico en la glándula pineal (pinealoblastoma) o región supraselar.',
      'Histopatología del Retinoblastoma: Presencia de rosetas verdaderas de Flexner-Wintersteiner (con luz central y prolongaciones ciliares, reflejan diferenciación fotorreceptora) y rosetas de Homer-Wright.'
    ]
  },

  // =========================================================================
  // 4. EXOTROPIAS Y PATRONES ALFABÉTICOS EN A Y V
  // =========================================================================
  {
    id: 'deep-pediatria-exotropias-patrones-alfabeticos',
    title: 'Exotropias (Intermitente, Básica, Exceso de Divergencia), Patrones Alfabéticos en A y V y Cirugía de Oblicuos',
    subspecialtyId: 'pediatria',
    summary: 'Monografía completa sobre desviaciones divergentes y anisotropías alfabéticas: Clasificación clínica de la Exotropia Intermitente (X(T)), escala de control de Newcastle, parche diagnóstico para exceso de divergencia verdadero vs simulado, criterios de indicación quirúrgica y abordaje de los patrones en "V" y en "A" con debilitamiento o transposición de rectos y oblicuos.',
    definitionAndEpidemiology: 'La exotropia es la desviación ocular divergente hacia afuera. La Exotropia Intermitente (X(T)) es la forma más prevalente en niños (aparición típica entre los 1 y 4 años), oscilando entre fases de ortoforia con fusión y fases de desviación manifiesta. Los patrones alfabéticos representan variaciones significativas del ángulo de desviación entre la mirada superior y la inferior.',
    anatomyAndPathophysiology: '1. Clasificación de Burian de la Exotropia Intermitente:\n   • Exceso de Divergencia: Desviación de lejos significativamente mayor que de cerca (diferencia >= 10-15 DP).\n     - Verdadero: La desviación de cerca no aumenta tras 1 hora de oclusión monocular diagnóstica (ni con lentes de +3.00 D).\n     - Simulado (Pseudo-exceso de divergencia): La desviación de cerca aumenta significativamente tras 1 hora de oclusión diagnóstica (se suspende la convergencia tónica adaptativa).\n   • Tipo Básica: Desviación de lejos y de cerca prácticamente idéntica (diferencia <10 DP).\n   • Insuficiencia de Convergencia: Desviación de cerca significativamente mayor que de lejos (diferencia >= 10 DP) con punto próximo de convergencia (PPC) alejado (>8-10 cm).\n2. Mecánica de los Patrones Alfabéticos:\n   • Patrón en "V": La desviación es más divergente (o menos convergente) en mirada arriba que en mirada abajo (criterio diagnóstico: diferencia >= 15 DP entre supraversión 25° e infraversión 25°). Causa número uno: Hiperfunción primaria de ambos músculos oblicuos inferiores (que son abductores secundarios en mirada arriba).\n   • Patrón en "A": La desviación es más divergente en mirada abajo que en mirada arriba (criterio diagnóstico: diferencia >= 10 DP). Causa número uno: Hiperfunción primaria de ambos músculos oblicuos superiores (abductores secundarios en mirada abajo).',
    clinicalExamination: {
      biomicroscopy: 'Polo anterior rigurosamente normal.',
      fundus: 'Torsión retiniana en oftalmoscopía indirecta: En hiperfunción de oblicuos inferiores se observa exciclotorsión objetiva (la fóvea cae por debajo del tercio inferior del disco óptico). En hiperfunción de oblicuos superiores hay inciclotorsión objetiva.',
      specialSigns: '• Cierre de un ojo en exteriores bajo luz solar intensa: Signo patognomónico de la Exotropia Intermitente (el niño guiña un ojo para evitar la diplopía o confusión visual al romperse la fusión con la luz brillante).\n• Escala de Control de Newcastle (NCS): Gradación cuantitativa de 0 a 9 del control motor y sensorial en el hogar y en la consulta (puntuaciones >=4-5 indican pérdida de control y criterio quirúrgico).'
    },
    diagnosticWorkup: [
      {
        test: 'Test de Oclusión Monocular Diagnóstica de 1 Hora (Test de Scobee)',
        findings: 'Esencial en sospecha de Exceso de Divergencia. Ocluir un ojo durante 60 minutos y medir inmediatamente de cerca al retirar el parche sin permitir fusión binocular. Si la desviación de cerca se iguala a la de lejos = Exceso de divergencia simulado (indica cirugía bimedial/bilateral en lugar de sólo retroinserción de rectos laterales).'
      },
      {
        test: 'Medición con Prismas en 5 Posiciones de la Mirada',
        findings: 'Posición primaria, 25° arriba y 25° abajo. Confirma el patrón en V (diferencia >=15 DP) o en A (diferencia >=10 DP).'
      }
    ],
    differentialDiagnosis: [
      { condition: 'Exotropia Sensorial', distinction: 'Consecuencia de una pérdida visual unilateral profunda (leucocoria, atrofia óptica); la desviación es constante y no alterna.' },
      { condition: 'Exotropia Consecutiva', distinction: 'Aparece tras una hipercorrección quirúrgica de una endotropia previa.' }
    ],
    steppedManagement: {
      medical: '• Exotropia Intermitente con Buen Control (NCS < 3-4):\n  - Observación seriada cada 3-6 meses monitorizando estereopsis y agudeza visual.\n  - Tratamiento óptico: Corrección total de astigmatismos o miopías (la corrección óptica estimula la acomodación y convergencia).\n  - Sobrecorrección miópica con lentes negativas (-1.50 a -2.50 D) para estimular la convergencia acomodativa temporalmente en niños pequeños.\n  - En Insuficiencia de Convergencia: Ejercicios ortópticos de convergencia domiciliarios (flexión con regla de apertura, tarjetas de puntos o prisma-fusión; ensayo CITT demostró superioridad de la terapia en consultorio).',
      surgical: '• Indicación de Cirugía en X(T):\n  - Pérdida de control espontáneo en más del 50% del tiempo de vigilia, pérdida progresiva de la estereopsis de cerca o astenopia intratable.\n  - Selección de Técnica Quirúrgica:\n    * Exceso de Divergencia Verdadero: Retroinserción Bilateral de Rectos Laterales (BLR).\n    * Tipo Básica o Pseudoexceso: Retroinserción de Recto Lateral + Resección de Recto Medio ipsilateral (R&R).\n• Manejo Quirúrgico de Patrones Alfabéticos:\n  - Patrón en V con hiperfunción de Oblicuos Inferiores (+2 a +4): Miectomía o debilitamiento con retroinserción/transposición anterior de ambos Oblicuos Inferiores.\n  - Patrón en A con hiperfunción de Oblicuos Superiores: Tenotomía o tenectomía posterior parcial de ambos Oblicuos Superiores.\n  - Patrones alfabéticos sin disfunción de oblicuos: Transposición vertical de las inserciones de los músculos rectos horizontales (regla: "Mover el músculo hacia donde se quiere debilitar el efecto" -> en patrón en V, los rectos medios se mueven hacia el vértice [abajo] y los laterales hacia la base [arriba]).'
    },
    clinicalApplicationPractical: '1. Antes de decidir operar una exotropia clasificada como "exceso de divergencia", realizar siempre el test de oclusión de 1 hora. Operar ambos rectos laterales en un exceso de divergencia simulado causa una severa e incapacitante sobrecorrección con endotropia y diplopía de cerca.\n2. Explicar a los padres que el cierre de un ojo al sol es un mecanismo reflejo de protección para no ver doble y no una alergia o fotofobia pura.',
    highYieldPearl: 'Exotropias y Alfabéticos: El test de oclusión de 1 hora diferencia exceso de divergencia verdadero de simulado. Criterio de patrón en V >=15 DP (tratar con debilitamiento de oblicuos inferiores); patrón en A >=10 DP (tratar con tenotomía de oblicuos superiores).',
    keyDrugs: [
      { name: 'Toxina Botulínica Tipo A (Botox)', dose: '2.5 a 5 UI inyectadas en recto lateral bajo electromiografía', warning: 'Opción alternativa en X(T) recidivante o niños pequeños para diferir la cirugía formal.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Regla de Transposición de Músculos Rectos en Patrones Alfabéticos',
        category: 'Mnemotecnia',
        description: 'Mnemotecnia "MAr-MAb": Rectos Medios se desplazan hacia el Vértice del patrón (hacia abajo en patrón en V; hacia arriba en patrón en A). Los Rectos Laterales se desplazan hacia la base (arriba en V; abajo en A). Cada 1 mm de transposición corrige 2-3 DP de anisotropía.',
        trapToAvoid: 'Desplazar los músculos en sentido opuesto invirtiendo y agravando el patrón alfabético.'
      },
      {
        title: 'Cifras de Corte para Patrón en V vs Patrón en A',
        category: 'Cifra Clave de Corte',
        description: 'Patrón en V requiere una diferencia >= 15 DP entre mirada superior e inferior. Patrón en A requiere una diferencia >= 10 DP. Menores diferencias se consideran variantes fisiológicas normales.',
        trapToAvoid: 'Diagnosticar patrón alfabético patológico con diferencias de 8 o 10 DP en patrón en V.'
      }
    ],
    fellowshipKeyPoints: [
      'Ensayo CITT (Convergence Insufficiency Treatment Trial): Demostró que la terapia ortóptica supervisada en consultorio es significativamente más efectiva que los ejercicios domiciliarios o prismas base interna.',
      'Transposición Anterior del Oblicuo Inferior (ATIO): Convierte al oblicuo inferior en un depresor al suturarlo adyacente a la inserción del recto inferior; excelente para corregir DVD concomitante con hiperfunción de oblicuo.'
    ]
  },

  // =========================================================================
  // 5. ESTRABISMOS INCONCOMITANTES: DUANE, BROWN Y FRACTURA TRAPDOOR
  // =========================================================================
  {
    id: 'deep-pediatria-estrabismos-incomitantes-duane-brown',
    title: 'Estrabismos Inconcomitantes Especiales: Síndrome de Duane, Síndrome de Brown y Fractura Pediátrica en Trampilla',
    subspecialtyId: 'pediatria',
    summary: 'Monografía completa sobre estrabismos restrictivos e inervacionales anómalos: Síndrome de Retracción de Stilling-Türk-Duane (clasificación de Huber tipos I, II y III, inervación aberrante por ramas del III par, cocontracción y fenómeno de upshoot/downshoot), Síndrome de Brown (vaina del oblicuo superior) y Fractura Orbitaria en Trampilla (Trapdoor) con Reflejo Oculocardíaco de emergencia vital.',
    definitionAndEpidemiology: 'Estrabismos caracterizados por una limitación mecánica o inervacional del movimiento ocular con variación marcada de la desviación en las distintas posiciones de la mirada. El Síndrome de Duane es una disgenesia de la cresta neural (predomina en niñas, ojo izquierdo, 1-4% de todos los estrabismos). La Fractura en Trampilla (Trapdoor) es una urgencia quirúrgica pediátrica exclusiva.',
    anatomyAndPathophysiology: '1. Síndrome de Duane (Inervación Craneal Aberrante / CCDD):\n   • Ausencia o hipoplasia congénita del núcleo y nervio abducens (VI par) con inervación anómala aberrante del músculo recto lateral por ramas del nervio oculomotor (III par) destinadas al recto medial.\n   • Mecanismo de Retracción: Cuando el ojo intenta aducir, se activan simultáneamente el recto medial y el recto lateral (co-contracción muscular simultánea de antagonistas); ambos tiran del globo ocular hacia el vértice de la órbita, provocando enoftalmos/retracción y estrechamiento mecánico de la hendidura palpebral.\n   • Clasificación de Huber:\n     - Tipo 1 (más común, 80%): Limitación severa o nula de la abducción con aducción normal o casi normal (simula parálisis del VI par).\n     - Tipo 2 (10%): Limitación de la aducción con abducción normal o mínimamente limitada.\n     - Tipo 3 (10%): Limitación marcada tanto de la abducción como de la aducción con severa retracción en aducción.\n2. Síndrome de la Vaina del Oblicuo Superior de Brown:\n   • Incapacidad mecánica para la elevación del ojo en aducción completa con elevación normal en abducción.\n   • Causa: Anormalidad anatómica congénita o inflamatoria en el complejo tendón-tróclea del oblicuo superior que impide el deslizamiento libre del tendón a través del anillo troclear.\n   • Test de Ducción Forzada POSITIVO para la rotación hacia arriba y adentro.\n3. Fractura Orbitaria en Trampilla Pediátrica (Trapdoor):\n   • En niños, los huesos del suelo orbitario son flexibles y ricos en cartílago. Tras un trauma romo, el piso se deprime, el músculo recto inferior prolapsa hacia el seno maxilar y el hueso elástico se cierra bruscamente en "tallo verde" atrapando e infartando el vientre muscular.\n   • Ausencia de equimosis ("White-eyed blowout fracture"). Consecuencia letal: Activación refleja del Reflejo Oculocardíaco (vía trigémino-vagal V1-X) con náuseas intensas, síncope, bradicardia extrema y paro cardíaco.',
    clinicalExamination: {
      biomicroscopy: 'Polo anterior normal.',
      specialSigns: '• En Duane: Estrechamiento de la hendidura palpebral y enoftalmos al mirar hacia la aducción; fenómeno de "Upshoot" o "Downshoot" en aducción (el globo se dispara súbitamente hacia arriba o hacia abajo por deslizamiento de la cuerda del recto lateral co-contraído sobre la convexidad del globo ocular - efecto de rienda o leash effect).\n• En Brown: Depresión en aducción (divergencia vertical en aducción) sin afectación de la mirada en abducción.\n• En Trapdoor: Limitación absoluta de la elevación y depresión con dolor extremo y bradicardia al intentar mover el ojo hacia arriba.'
    },
    diagnosticWorkup: [
      { test: 'Test de Ducción Forzada en Quirófano o Consulta (FDT)', findings: 'Diferencia causa restrictiva de parética: En Síndrome de Brown el ojo no puede elevarse mecánicamente con pinzas en aducción (FDT positivo). En parálisis del oblicuo inferior el ojo se mueve libremente con la pinza (FDT negativo).' },
      { test: 'Tomografía Computarizada (TC) de Órbita con Cortes Finos Coronales (en Trauma)', findings: 'En Trapdoor: Visualización de herniación mínima de partes blandas o fractura lineal no desplazada en el suelo orbitario con atrapamiento muscular directo del recto inferior.' }
    ],
    differentialDiagnosis: [
      { condition: 'Parálisis del VI Par Craneal', distinction: 'En la parálisis del VI par la hendidura palpebral se ENSANCHA en aducción y no hay retracción ocular ni upshoot/downshoot.' },
      { condition: 'Parálisis del Músculo Oblicuo Inferior', distinction: 'Presenta test de ducción forzada negativo y no hay limitación en la posición primaria de la mirada.' }
    ],
    steppedManagement: {
      medical: '• Síndrome de Duane:\n  - La mayoría de los pacientes mantienen ortoforia en posición primaria con un leve tortícolis compensatorio; NO requieren cirugía si el tortícolis es <10-15° y no hay ambliopía.\n• Síndrome de Brown Adquirido Inflamatorio (tenosinovitis troclear):\n  - Inyección local peritroclear de Acetónido de Triamcinolona (10-20 mg) o corticoides orales; resolución en el 80% de los casos idiopáticos.\n• Fractura Trapdoor:\n  - Monitorización cardíaca continua inmediata (riesgo de asistolia vagal inducida por el movimiento ocular).',
      surgical: '• Indicación Quirúrgica en Duane:\n  - Indicada ante tortícolis significativo (>15°), estrabismo en posición primaria o marcado upshoot/downshoot.\n  - CONTRAINDICACIÓN FORMAL: NUNCA RESECAR EL RECTO LATERAL EN SÍNDROME DE DUANE (agrava catastróficamente la retracción ocular y el enoftalmos).\n  - Cirugía de elección: Retroinserción amplia del recto medial ipsilateral, o transposición de rectos verticales (superior e inferior) hacia el recto lateral (técnica de Foster con sutura escleral lateral).\n• Cirugía Urgente en Fractura Trapdoor Pediátrica:\n  - QUIRÓFANO DE EMERGENCIA EN <24 HORAS: Liberación quirúrgica inmediata del recto inferior incarcerado en el piso maxilar con parche de soporte para prevenir necrosis isquémica muscular fibrótica irreversible y revertir el reflejo oculocardíaco.'
    },
    clinicalApplicationPractical: '1. REGLA DE ORO VITAL: Todo niño con antecedente de traumatismo ocular/orbitario que presente vómitos incontrolables, mareo y diplopía con ojo blanco sin hematoma debe ser evaluado de emergencia por Oftalmología con monitor cardíaco; es una Fractura en Trampilla (Trapdoor) con reflejo vagal activo que requiere cirugía en menos de 24 horas.\n2. En Síndrome de Duane: Jamás realizar resección de un recto lateral, ya que incrementará la co-contracción mecánica empeorando la retracción ocular.',
    highYieldPearl: 'Duane vs Trapdoor: En Duane hay co-contracción del recto lateral y medial en aducción (la resección del recto lateral está contraindicada). La fractura Trapdoor pediátrica es un ojo blanco con atrapamiento del recto inferior y reflejo oculocardíaco; requiere cirugía urgente en <24 horas.',
    keyDrugs: [
      { name: 'Atropina Intravenosa', dose: '0.01-0.02 mg/kg IV en bolo', warning: 'Fármaco de rescate inmediato ante bradicardia extrema o asistolia por reflejo oculocardíaco en fracturas trapdoor.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Por Qué está Contraindicada la Resección del Recto Lateral en Duane',
        category: 'Trampa de Tribunal',
        description: 'Debido a que el recto lateral está inervado anómalamente por el III par y se co-contrae en aducción, resecarlo y acortarlo aumentará la fuerza de tracción retrógrada hacia el vértice orbitario, produciendo un enoftalmos grotesco y agravando la hendidura palpebral.',
        trapToAvoid: 'Indicar resección del recto lateral para intentar "mejorar la abducción" en un Duane tipo 1.'
      },
      {
        title: 'Trapdoor Pediátrica: Síntomas Sistémicos Vágales',
        category: 'Pregunta Clásica',
        description: 'La presencia de náuseas y vómitos tras un traumatismo facial en un niño suele atribuirse erróneamente a conmoción cerebral; si coexiste limitación de la motilidad vertical, es un atrapamiento del músculo en trampilla con activación del reflejo trigémino-vagal.',
        trapToAvoid: 'Dar de alta al niño desde urgencias pediátricas con diagnóstico de traumatismo craneoencefálico leve sin examen de motilidad ocular.'
      }
    ],
    fellowshipKeyPoints: [
      'Técnica de Foster (Transposición Vertical con Sutura de Anclaje): La adición de una sutura de suturación lateral a 8 mm de la inserción del recto lateral incrementa la abducción en Duane tipo 1 en más de 15-20 DP sin inducir desviaciones verticales.',
      'División en Y del Recto Lateral (Y-split): Tratamiento de elección para el upshoot y downshoot severo en Duane para eliminar el efecto de rienda.'
    ]
  },

  // =========================================================================
  // 6. ANOMALÍAS DEL DESARROLLO: ANIRIDIA, PETERS Y COLOBOMAS
  // =========================================================================
  {
    id: 'deep-pediatria-anomalias-desarrollo-aniridia-peters',
    title: 'Anomalías del Desarrollo Ocular Pediátrico: Aniridia (PAX6, WAGR), Anomalía de Peters y Colobomas',
    subspecialtyId: 'pediatria',
    summary: 'Monografía completa sobre disgenesias congénitas del desarrollo ocular: Aniridia (mutación en gen maestro PAX6 en 11p13, queratopatía anirídica por deficiencia límbica, glaucoma secundario, hipoplasia foveal y Asociación WAGR con Tumor de Wilms), Disgenesia de Peters (tipo I y II) y Colobomas por defecto de cierre de la fisura embrionaria.',
    definitionAndEpidemiology: 'Trastornos del desarrollo embriológico que comprometen la diferenciación de las estructuras de la cresta neural y del ectodermo superficial. La Aniridia es una pan-oftalmopatía bilateral autosómica dominante (2/3 de los casos) o esporádica (1/3, asociada al síndrome WAGR; prevalencia 1 en 50,000-100,000).',
    anatomyAndPathophysiology: '1. Aniridia y el Gen Maestro PAX6 (11p13):\n   • PAX6 codifica un factor de transcripción homeobox esencial para el desarrollo morfogenético de todo el ojo y del páncreas/SNC.\n   • Ausencia casi total del tejido iridiano (sólo persiste un muñón iridiano rudimentario basal visible en gonioscopía).\n   • Pan-Oftalmopatía Progresiva:\n     1) Hipoplasia Foveal Congénita: Ausencia de diferenciación foveolar con nistagmo sensorial congénito pendular.\n     2) Queratopatía Asociada a Aniridia (AAK): Deficiencia congénita progresiva de células madre del limbo corneal (LSCD) con vascularización conjuntival centrípeta progresiva de 360°, erosiones y opacidad corneal total en la adolescencia/adultez.\n     3) Glaucoma Secundario (50-70% de pacientes): Producido por la aposición y contracción del muñón iridiano rudimentario sobre la malla trabecular.\n     4) Catarata Congénita o Presenil.\n   • Asociación WAGR (Microdeleción 11p13):\n     - Tumor de Wilms (nefroblastoma renal letal en >50% de estos niños por deleción del gen adyacente WT1), Aniridia, Anomalías Genitourinarias (criptorquidia, hipospadias) y Retraso mental (Retardation).\n2. Anomalía de Peters (Disgenesia del Segmento Anterior):\n   • Defecto en la migración de las células de la cresta neural con ausencia congénita focal del endotelio corneal y de la membrana de Descemet en el centro corneal.\n   • Tipo I: Opacidad corneal leucomatosa central con adherencias iridocorneales periféricas (sinequias anteriores desde el collarete del iris).\n   • Tipo II: Opacidad corneal densa asociada a catarata y contacto directo entre el cristalino y el estroma corneal posterior (contacto queratolenticular).\n3. Colobomas del Segmento Anterior y Posterior:\n   • Falta de cierre de la fisura coroidea embrionaria en la 6ª-7ª semana de gestación.\n   • Localización invariable: Cuadrante INFERONASAL (iris en ojo de cerradura, coroides y nervio óptico).\n   • Mutaciones asociadas: CHD7 (Síndrome CHARGE), PAX2 (Síndrome papilorrenal).',
    clinicalExamination: {
      biomicroscopy: 'En aniridia: ausencia macroscópica de iris, catarata anterior o subluxación lenticular superior y pannus corneal periférico por fallo límbico. En Peters: leucoma central blanquecino en diana con córnea periférica transparente.',
      fundus: 'En aniridia: Hipoplasia foveal con ausencia del reflejo foveolar y paso continuo de vasos retinianos sobre la mácula central; hipoplasia del nervio óptico. En coloboma: defecto excavado blanco nacarado inferonasal con vasos anómalos.',
      specialSigns: '• Asociación CHARGE: Coloboma ocular, Cardiopatía congénita (Heart), Atresia de coanas, Retraso del crecimiento (Retarded growth), anomalías Genitales y del Oído/Sordera (Ear).'
    },
    diagnosticWorkup: [
      { test: 'Estudio Genético Molecular (Hibridación Genómica Comparativa - aCGH / MLPA para 11p13)', findings: 'MANDATORIO EN TODA ANIRIDIA ESPORÁDICA: Determina si existe microdeleción del gen WT1 contiguo a PAX6 (confirmación del síndrome WAGR).' },
      { test: 'Ecografía Abdominal Renal Periódica Seriada', findings: 'PROTOCOLO OBLIGATORIO EN ANIRIDIA ESPORÁDICA: Realizar ecografía renal cada 3 meses desde el nacimiento hasta los 8 años de edad para la detección precoz del Tumor de Wilms asintomático antes de que produzca metástasis.' },
      { test: 'OCT Macular de Dominio Espectral (SD-OCT Pediátrico)', findings: 'Demuestra hipoplasia foveal: persistencia de todas las capas retinianas internas sobre la fóvea con ausencia de excavación foveolar (Grados 1 a 4 de Thomas).' }
    ],
    differentialDiagnosis: [
      { condition: 'Iridociclitis Traumática con Aniridia Traumática', distinction: 'Antecedente de contusión o estallido ocular con expulsión del iris a través de una herida escleral o límbica.' },
      { condition: 'Síndrome de Axenfeld-Rieger', distinction: 'Embriotoxon posterior con puentes iridianos al limbo, corectopia y atrofia del estroma del iris con dientes cónicos e hipoplasia maxilar (mutaciones PITX2 y FOXC1).' }
    ],
    steppedManagement: {
      medical: '• En Aniridia:\n  - Corrección óptica precoz con gafas de sol tintadas o lentes de contacto protésicas con pupila artificial para reducir la fotofobia y optimizar agudeza.\n  - Lubricación intensiva sin conservantes para la superficie ocular; suero autólogo o plasma rico en plaquetas para queratopatía anirídica incipiente.\n  - Hipotensores tópicos (análogos de prostaglandinas, beta-bloqueantes, inhibidores de anhidrasa carbónica) para el glaucoma secundario.\n  - Monitoreo oncológico renal estricto en WAGR.',
      surgical: '• Manejo Quirúrgico en Aniridia y Peters:\n  - Glaucoma anirídico refractario: Implante de tubo de drenaje (Válvula de Ahmed) o trabeculectomía con antimetabolitos (evitar cirugía angular goniométrica agresiva).\n  - Queratopatía anirídica terminal: Trasplante alogénico de células madre del limbo (keratolimbal allograft - KLAL) seguido de queratoplastia, o queratoprótesis de Boston tipo 1.\n  - En Anomalía de Peters: Queratoplastia penetrante (PKP) pediátrica precoz con lensectomía en Tipo II.'
    },
    clinicalApplicationPractical: '1. ALERTA PEDIÁTRICA VITAL: Todo lactante que nazca con aniridia esporádica (sin antecedentes familiares directos) debe ser derivado a Genética y a Oncología Pediátrica de inmediato para ecografía abdominal renal cada 3 meses. El Tumor de Wilms es una neoplasia maligna renal de crecimiento explosivo curable en >90% si se detecta a tiempo mediante este cribado.\n2. Evitar cirugías intraoculares innecesarias en ojos anirídicos; cada incisión corneal acelera la descompensación límbica con cicatrización y vascularización conjuntival de la córnea.',
    highYieldPearl: 'Aniridia y WAGR: Mutación en PAX6 (11p13). Cursa con hipoplasia foveal, queratopatía por fallo límbico y glaucoma. Si es esporádica, la deleción de WT1 causa síndrome WAGR (Tumor de Wilms) y exige ecografía renal cada 3 meses hasta los 8 años.',
    keyDrugs: [
      { name: 'Suero Autólogo al 20%', dose: '1 gota 4 a 6 veces al día', warning: 'Soporte epitelial trófico en queratopatía anirídica por deficiencia de células madre límbicas.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Protocolo de Screening Renal en Aniridia Esporádica',
        category: 'Cifra Clave de Corte',
        description: 'La ecografía renal debe repetirse CADA 3 MESES hasta los 8 años de vida. Después de los 8 años, el riesgo de desarrollo primario del tumor de Wilms decae drásticamente.',
        trapToAvoid: 'Dar el alta oncológica a los 2 o 3 años tras una ecografía normal inicial.'
      },
      {
        title: 'Hipoplasia Foveal en Aniridia: Límite Visual',
        category: 'Trampa de Tribunal',
        description: 'Aunque se logre una transparencia corneal perfecta y se controle el glaucoma, la agudeza visual del paciente anirídico rara vez superará 20/100 o 20/80 debido a la hipoplasia foveal congénita estructural.',
        trapToAvoid: 'Prometer a los padres una agudeza visual de 20/20 tras resolver la córnea o el cristalino.'
      }
    ],
    fellowshipKeyPoints: [
      'Asociación WAGR y Gen BDNF: Microdeleciones más grandes que involucran el gen BDNF asocian hiperfagia y obesidad mórbida infantil (Síndrome WAGRO).',
      'Anomalía de Peters-Plus: Asociación sindrómica autosómica recesiva con baja estatura, braquidactilia, labio leporino y retraso del desarrollo ligada a mutaciones en B3GLCT.'
    ]
  },

  // =========================================================================
  // 7. NISTAGMO PEDIÁTRICO, ALBINISMO E HIPOPLASIA FOVEAL
  // =========================================================================
  {
    id: 'deep-pediatria-nistagmo-albinismo-fovea',
    title: 'Nistagmo Pediátrico e Hipoplasia Foveal: Nistagmo Motor Infantil (Kestenbaum-Anderson), Albinismo y Acromatopsia',
    subspecialtyId: 'pediatria',
    summary: 'Monografía completa sobre nistagmo infantil y patología foveolar: Nistagmo de Fijación Infantil (motor vs sensorial), identificación de la zona neutra y procedimiento de Kestenbaum-Anderson para corrección de tortícolis, Albinismo Oculocutáneo y Ocular (hipoplasia foveal y decusación anómala quiasmática en PEV) y Acromatopsia congénita.',
    definitionAndEpidemiology: 'El nistagmo infantil es una oscilación rítmica e involuntaria de los ojos de inicio en los primeros 6 meses de vida. Puede ser idiopático motor (defecto primario en el sistema de fijación de la eferencia motora) o sensorial (secundario a una privación visual aferente precoz: albinismo, acromatopsia, aniridia, atrofia óptica o cataratas congénitas).',
    anatomyAndPathophysiology: '1. Nistagmo Motor Infantil (Nistagmo Congénito):\n   • Es típicamente horizontal y conjugado binocularmente.\n   • REGLA CARDINAL: Se mantiene en el plano HORIZONTAL incluso en la mirada vertical hacia arriba y hacia abajo (a diferencia del nistagmo vestibular central que cambia de dirección según la mirada).\n   • Se amortigua o suprime con la convergencia de cerca (por lo que los niños leen mejor de cerca y con frecuencia convergen para bloquearlo).\n   • Zona Neutra (Null Point): Posición de la mirada donde las oscilaciones nistágmicas alcanzan su mínima amplitud y frecuencia, y donde la agudeza visual es máxima. El niño adopta un tortícolis compensatorio de la cabeza para situar los ojos en su zona neutra.\n   • Aceleración de la velocidad de fase lenta en el registro electronistagmográfico (hallazgo patognomónico de nistagmo motor congénito).\n2. Albinismo Ocular y Oculocutáneo (OCA):\n   • Mutaciones en genes de la biosíntesis de melanina: OCA1 (tirosinasa / TYR en 11q14, albinismo tirosinasa negativo con ausencia total de pigmento), OCA2 (gen P), OCA4 (SLC45A2) y Albinismo Ocular ligado al X (OA1 / GPR143).\n   • Fisiopatología del Albinismo Ocular:\n     1) La melanina es indispensable para la guía axonal embriológica y la diferenciación foveal.\n     2) Decusación Quiasmática Anómala Exuberante: Normalmente cruza el 53% de las fibras nasales; en el albinismo cruza más del 85-90% de los axones retinianos (las fibras de la retina temporal cruzan anómalamente al hemisferio contralateral).\n     3) Hipoplasia Foveal con ausencia de zona avascular foveal (FAZ) y nistagmo pendular o en resorte.\n     4) Transiluminación de iris difusa "en rueda de carro" y fondo de ojo en albino con visualización completa de los vasos coroideos (fondo albinótico).\n3. Acromatopsia Congénita (Monocromatismo de Bastones):\n   • Autosómica recesiva (mutaciones en CNGA3, CNGB3, GNAT2) que inutiliza los tres tipos de conos retinianos (S, M, L).\n   • El niño ve exclusivamente con los bastones: Hemeralopía (ceguera diurna intensa con fotofobia extrema), ceguera cromática total y nistagmo pendular.',
    clinicalExamination: {
      biomicroscopy: 'En albinismo: transiluminación del iris de 360° al colocar el haz de luz sobre la pupila o esclera. En acromatopsia: segmento anterior rigurosamente normal con fotofobia deslumbrante al iluminar.',
      fundus: 'En albinismo: fondo rubio/albinótico con visualización de los grandes vasos de la capa de Haller sobre la esclera desnuda e hipoplasia foveal con vasos cruzando el centro macular. En acromatopsia: fondo de ojo normal o atrofia foveal sutil.',
      specialSigns: '• Maniobra de convergencia: El nistagmo motor infantil disminuye marcadamente al mirar un objeto a 20-30 cm.\n• Fenómeno de inversión del nistagmo optocinético (OKN invertido): Mover la cinta o tambor optocinético desencadena una fase rápida en la misma dirección del estímulo (paradójico y diagnóstico de nistagmo congénito).'
    },
    diagnosticWorkup: [
      { test: 'Potenciales Evocados Visuales (PEV) con Estimulación Monocular', findings: 'HALLAZGO PATOGNOMÓNICO EN ALBINISMO: Asimetría hemisférica contralateral en los registros occipitales (debido a la decusación exuberante de fibras temporales en el quiasma).' },
      { test: 'Electrorretinograma de Campo Completo (ffERG)', findings: 'En Acromatopsia: RESPUESTAS FOTÓPICAS DE CONOS COMPLETAMENTE ABOLIDAS (0 µV) con respuesta escotópica de bastones estrictamente normal.' },
      { test: 'OCT de Mácula Pediátrico', findings: 'Gradación de la hipoplasia foveal según la clasificación de Thomas: Grado 1 (persistencia parcial de capas internas con foveola visible) a Grado 4 (ausencia total de foveola y ausencia de elongación de fotorreceptores).' }
    ],
    differentialDiagnosis: [
      { condition: 'Spasmus Nutans', distinction: 'Tríada adquirida entre los 6 meses y 3 años: nistagmo pendular asimétrico o monocular de alta frecuencia, cabeceo (head nodding) y tortícolis; requiere descartar glioma quiasmático en RM.' },
      { condition: 'Amaurosis Congénita de Leber (LCA)', distinction: 'Ceguera profunda infantil con reflejos pupilares abolidos, signo óculo-digital de Franceschetti y ERG escotópico y fotópico plano/extinguido.' }
    ],
    steppedManagement: {
      medical: '• Nistagmo Motor Infantil:\n  - Corrección óptica refractiva estricta con gafas o lentes de contacto (el lente de contacto se mueve con el ojo, optimizando el eje visual y amortiguando el nistagmo por estímulo táctil trigeminal corneal).\n  - Prismas de base contraria para inducir convergencia mecánica y amortiguar el nistagmo.\n• En Albinismo:\n  - Protección solar cutánea estricta, filtros ópticos oscuros con tinción ámbar/polarizada y ayudas visuales para baja visión.\n• En Acromatopsia:\n  - Gafas tintadas de color rojo oscuro (filtro de corte a 550-600 nm que bloquea la luz diurna protegiendo a los bastones de la saturación).',
      surgical: 'Cirugía de Kestenbaum-Anderson: Indicada cuando existe un tortícolis compensatorio marcado (>15-20°) para colocar los ojos en la posición primaria. Se trasladan los 4 músculos rectos horizontales en la dirección del tortícolis (rotando ambos globos oculares hacia la posición neutra). Enfoque "2 pares de músculos": Retroinserción de RM derecho y RL izquierdo + Resección de RL derecho y RM izquierdo (regla de los 13 mm de Parks: 5 mm + 8 mm en el ojo director, 6 mm + 7 mm en el no fijador).'
    },
    clinicalApplicationPractical: '1. Diagnóstico de Albinismo Ocular (Nettleship-Falls, recesivo ligado a X): En varones con nistagmo e hipoplasia foveal sin signos cutáneos obvios, examinar el fondo de ojo de la MADRE OBLIGADA: mostrará mosaicismo pigmentario retiniano característico (patrón en salpicadura de barro o "mud-splattered") por inactivación aleatoria del cromosoma X (Lyonización).\n2. El nistagmo que se amortigua con la convergencia es una característica clásica del síndrome de nistagmo infantil (INS/CIN). La prescripción de prismas base externa (induciendo convergencia forzada) puede mejorar notablemente la agudeza visual binocular.',
    highYieldPearl: 'Albinismo y Quiasma: Más del 90% de los axones ganglionares retinianos decusan en el quiasma óptico (en lugar del 53% normal) debido a la deficiencia de melanina en el epitelio pigmentario retiniano que guía axonalmente el desarrollo quiasmático. Esto genera una respuesta asimétrica patognomónica en los Potenciales Evocados Visuales (PEV monocular).',
    residencyAndFellowExamTips: [
      {
        title: 'Clasificación de CEMAS para Nistagmo Infantil',
        category: 'Pregunta Clásica',
        description: 'El Síndrome de Nistagmo Infantil (INS) se caracteriza por aceleración exponencial en la fase lenta del registro electro-oculográfico (unlike nistagmo neurológico o vestibular con fase lenta lineal o decelerada).',
        trapToAvoid: 'Confundir el nistagmo infantil con Spasmus Nutans o con nistagmo por glioma quiasmático.'
      },
      {
        title: 'Regla Quirúrgica de Kestenbaum-Anderson',
        category: 'Trampa de Tribunal',
        description: 'Siempre se operan los músculos para rotar los ojos en la DIRECCIÓN DEL TORTÍCOLIS (es decir, para llevar los ojos en la dirección de la cara girada y centrar la zona nula al frente).',
        trapToAvoid: 'Operar músculos en la dirección de la zona nula en vez de la dirección del giro facial.'
      }
    ]
  },

  // =========================================================================
  // 8. VÍA LAGRIMAL PEDIÁTRICA Y FACOMATOSIS (NF1 Y STURGE-WEBER)
  // =========================================================================
  {
    id: 'deep-pediatria-via-lagrimal-facomatosis',
    title: 'Obstrucción Congénita de la Vía Lagrimal (CNLDO) y Facomatosis Oculares Pediátricas (NF1 y Sturge-Weber)',
    subspecialtyId: 'pediatria',
    summary: 'Monografía completa sobre patología lagrimal congénita y síndromes neurocutáneos: Obstrucción congénita del conducto nasolagrimal (CNLDO por imperforación de la válvula de Hasner, dacriocistocele congénito de urgencia y técnica de sondaje lagrimal), Neurofibromatosis Tipo 1 (criterios diagnósticos, Nódulos de Lisch, neurofibroma plexiforme y glioma del nervio óptico) y Síndrome de Sturge-Weber (mancha en vino de Oporto, glaucoma ipsilateral y hemangioma coroideo en salsa de tomate).',
    definitionAndEpidemiology: 'La obstrucción congénita del conducto nasolagrimal (CNLDO) es la anomalía lagrimal más común en la infancia (afecta al 6-10% de recién nacidos). Las facomatosis son síndromes neuro-óculo-cutáneos genéticos con predisposición a hamartomas benignos y malignos: la NF1 afecta a 1 en 3,000 nacidos vivos (herencia autosómica dominante); el Sturge-Weber es esporádico (mutación somática en GNAQ).',
    anatomyAndPathophysiology: '1. Vía Lagrimal Pediátrica y Válvula de Hasner:\n   • El conducto nasolagrimal se canaliza caudalmente durante el desarrollo embrionario.\n   • El sitio más frecuente de obstrucción es el extremo distal en el meato nasal inferior bajo el cornete inferior, donde persiste una membrana mucosa imperforada que sella la Válvula de Hasner.\n   • Historia Natural: El 90% de los casos se resuelven de forma espontánea durante el primer año de vida gracias a la maduración y canalización ósea facial.\n   • Dacriocistocele Congénito (Amniocele / Mucocele): Doble obstrucción simultánea de la válvula de Hasner distal y de la válvula de Rosenmüller proximal en el canalículo común; el saco lagrimal se llena de moco y líquido amniótico estéril formando una masa azulada a tensión.\n2. Neurofibromatosis Tipo 1 (NF1 / von Recklinghausen - 17q11.2):\n   • Gen NF1 codifica la neurofibromina (regulador negativo de la vía oncogénica Ras-MAPK).\n   • Criterios Oftalmológicos Mayores:\n     - Nódulos de Lisch: Hamartomas melanocíticos del estroma iridiano (>2 nódulos presentes en >95% de pacientes >10 años; no alteran la función visual).\n     - Glioma de la Vía Óptica (OPG): Astrocitoma pilocítico de bajo grado presente en el 15-20% de niños con NF1 (puede ser asintomático o causar proptosis, pérdida visual y atrofia óptica).\n     - Neurofibroma Plexiforme Palpebral: Masa blanda en "bolsa de gusanos" que infiltra el párpado superior causando ptosis mecánica en "S" y ambliopía.\n     - Displasia del ala mayor del esfenoides: Defecto óseo que produce enoftalmos/proptosis pulsátil sincrónica con el pulso intracraneal.\n3. Síndrome de Sturge-Weber (Angiomatosis Encefalotrigeminal):\n   • Mutación somática en mosaico del gen GNAQ (9q21).\n   • Malformación vascular capilar-venosa que afecta el territorio de la primera rama del trigémino (V1 / oftálmica): Mancha en Vino de Oporto (Nevus flammeus).\n   • Glaucoma Pediátrico Ipsilateral (50% de pacientes): Mecanismo bimodal: 1) Disgenesia de la cresta neural en el ángulo iridocorneal (infancia temprana); 2) Aumento crónico de la presión venosa epiescleral por malformaciones vasculares epiesclerales con vasos en tirabuzón (infancia tardía).\n   • Hemangioma Coroideo Difuso: Infiltración vascular coroidea ipsilateral con engrosamiento de la coroides que produce el clásico fondo de ojo hiperémico brillante en "salsa de tomate" (tomato ketchup fundus).',
    clinicalExamination: {
      biomicroscopy: 'En CNLDO: menisco lagrimal alto, reflujo de material mucopurulento por los puntos lagrimales a la compresión digital sobre el saco lagrimal. En NF1: examen con lámpara de hendidura buscando nódulos de Lisch cupuliformes translúcidos de color marrón-dorado sobre el iris. En Sturge-Weber: epiesclera con vasos tortuosos dilatados en tirabuzón y mancha facial cutánea violácea que compromete párpado superior.',
      fundus: 'En Sturge-Weber: fondo de ojo en "salsa de tomate" con asimetría de excavación papilar por glaucoma. En NF1: edema de papila o atrofia óptica por compresión por glioma quiasmático.',
      specialSigns: '• Test de Desaparición de Fluoresceína (FDT): Instilar fluoresceína al 2% en fondos de saco; si persiste el lago lagrimal amarillo teñido tras 5 minutos, confirma obstrucción del drenaje lagrimal.\n• Masa azulada bajo el tendón cantal medial en neonato = Dacriocistocele congénito.'
    },
    diagnosticWorkup: [
      { test: 'Resonancia Magnética Cerebral y Orbitaria con contraste en NF1', findings: 'Protocolo de vigilancia en niños con NF1: Detecta glioma del nervio óptico (engrosamiento fusiforme del nervio óptico con señal hiperintensa en T2) y descarta extensión quiasmática.' },
      { test: 'Tonometría Ocular Pediátrica Seriada y Medición de Diámetro Corneal en Sturge-Weber', findings: 'Descarte obligatorio de glaucoma ipsilateral desde el nacimiento; diámetro corneal >11 mm en recién nacido o >12 mm al año con PIO elevada confirma glaucoma buftálmico.' }
    ],
    differentialDiagnosis: [
      { condition: 'Glaucoma Congénito Primario (GCP)', distinction: 'Cursa con epífora, pero se acompaña de fotofobia intensa, blefaroespasmo, megalocórnea y edema corneal lechoso sin secreción mucosa purulenta.' },
      { condition: 'Dacriocistitis Aguda Infecciosa del Lactante', distinction: 'Masa hiperémica caliente muy dolorosa con celulitis preseptal contigua y fiebre que exige antibióticos intravenosos.' }
    ],
    steppedManagement: {
      medical: '• Obstrucción Congénita de Vía Lagrimal (CNLDO) en <9-12 meses:\n  - Tratamiento conservador de primera línea: MASAJE HIDROSTÁTICO DE CRIGLER (compresión digital firme sobre el saco lagrimal desplazando el dedo hacia abajo para vencer hidrostáticamente la resistencia de la válvula de Hasner) realizado 3-4 veces al día con ungüento antibiótico si hay conjuntivitis sobreagregada (90% de resolución antes del año).\n• Glioma de la Vía Óptica en NF1:\n  - La mayoría de los gliomas en NF1 son indolentes y no progresan; observación estrecha con agudeza visual y campo visual.\n  - Si hay progresión visual documentada: Quimioterapia sistémica con Carboplatino y Vincristina (la radioterapia está CONTRAINDICADA en NF1 por riesgo de inducir tumores secundarios malignos y vasculopatía de Moya-Moya).',
      surgical: '• En CNLDO Persistente:\n  - Sondaje de la Vía Lagrimal con sonda de Bowman (típicamente entre los 10 y 14 meses de edad): Se dilata el punto lagrimal superior, se avanza la sonda horizontalmente por el canalículo hasta notar tope óseo firme (pared medial del saco), se rota verticalmente 90° y se desciende por el conducto nasolagrimal hasta perforar la válvula de Hasner (se percibe un "pop" audible y táctil; confirmación con irrigación de fluoresceína y aspiración nasal; éxito >90%).\n  - Si falla el primer sondaje: Re-sondaje con intubación bicanalicular de silicona (tubos de Crawford) mantenida 3 a 6 meses.\n• En Dacriocistocele Congénito:\n  - Sondaje urgente en los primeros días/semanas de vida (el quiste puede infectarse rápidamente formando un absceso o comprimir la vía aérea nasal en recién nacidos que son respiradores nasales obligados).\n• En Glaucoma por Sturge-Weber:\n  - Goniotomía o trabeculotomía precoz; en fases tardías con alta presión venosa epiescleral: Implante de válvula de drenaje (Ahmed) con precaución extrema de no despresurizar bruscamente la cámara para evitar hemorragia expulsiva coroidea o efusión serosa masiva.'
    },
    clinicalApplicationPractical: '1. Ante un lactante con lagrimeo continuo desde el nacimiento: Enseñar a los padres la técnica correcta del masaje de Crigler (no frotar el ojo, sino presionar con fuerza hacia adentro y hacia abajo sobre el canto interno); diferir el sondaje hasta los 10-12 meses dado que la tasa de curación espontánea supera el 90%.\n2. Al operar de glaucoma a un niño con síndrome de Sturge-Weber: Mantener siempre la cámara anterior presurizada con viscoelástico; la hipotensión brusca intraoperatoria desencadena una expansión vascular violenta del hemangioma coroideo subyacente con efusión coroidea masiva o hemorragia supracoroidea expulsiva.',
    highYieldPearl: 'Vía Lagrimal y Facomatosis: La CNLDO (imperforación de Hasner) resuelve en el 90% con masaje de Crigler; el sondaje se realiza al año de edad. En Sturge-Weber (mutación GNAQ) vigilar glaucoma ipsilateral y hemangioma en salsa de tomate. En NF1 vigilar nódulos de Lisch y glioma óptico (la radioterapia está contraindicada).',
    keyDrugs: [
      { name: 'Moxifloxacino Tópico', dose: '1 gota cada 8 horas durante episodios de conjuntivitis bacteriana sobreagregada en CNLDO', warning: 'Uso limitado a 7 días para evitar resistencias bacterianas.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Por Qué la Radioterapia está Contraindicada en Gliomas de NF1',
        category: 'Trampa de Tribunal',
        description: 'La radiación ionizante en pacientes con mutación germinal en NF1 induce la malignización de neurofibromas a sarcomas de la vaina nerviosa periférica (MPNST) y causa oclusión arterial de grandes vasos cerebrales (enfermedad de Moya-Moya). El tratamiento es quimioterapia con carboplatino/vincristina.',
        trapToAvoid: 'Proponer radioterapia estereotáctica para un glioma quiasmático en un niño con NF1.'
      },
      {
        title: 'Dacriocistocele: Riesgo de Asfixia Neonatal',
        category: 'Asociación Patognomónica',
        description: 'El saco lagrimal distendido en un dacriocistocele congénito puede expandirse hacia el interior de la fosa nasal a través del meato inferior, causando obstrucción respiratoria y disnea severa en neonatos (los recién nacidos son respiradores nasales obligados). Requiere sondaje y descompresión endoscópica nasal urgente.',
        trapToAvoid: 'Manejar un dacriocistocele tenso con simple observación ambulatoria.'
      }
    ],
    fellowshipKeyPoints: [
      'Nódulos de Lisch vs Nevus de Iris: Los nódulos de Lisch son proyecciones cupuliformes gelatinosas de superficie lisa en la superficie del estroma iridiano, a diferencia de los nevus que son planos e infiltran el estroma.',
      'Línea de Schwalbe Prominente en Sturge-Weber: Frecuente anomalía angular asociada.'
    ]
  },

  // =========================================================================
  // 9. AMBLIOPÍA: NEUROBIOLOGÍA, PERÍODO CRÍTICO Y PROTOCOLOS PEDIG
  // =========================================================================
  {
    id: 'deep-pediatria-ambliopia-pedig',
    title: 'Ambliopía: Neurobiología Cortical, Período Crítico y Protocolos Basados en la Evidencia PEDIG',
    subspecialtyId: 'pediatria',
    summary: 'Monografía exhaustiva sobre Ambliopía en la infancia: neurobiología de las columnas de dominancia ocular en la corteza estriada V1 y el cuerpo geniculado lateral (descubrimientos de Hubel y Wiesel, período crítico de plasticidad sináptica hasta los 7-8 años de edad); clasificación etiopatogénica: estrábica (competencia neural con supresión foveal activa), anisometrópica (desenfoque retiniano unilateral persistente con umbrales mínimos: anisometropía hipermetrópica >=1.00 D, astigmática >=1.50 D, miópica >=3.00 D), isometrópica / ametrópica bilateral (hipermetropía bilateral >4.50 D o astigmatismo bilateral >2.00 D) y por deprivación de estímulo (catarata congénita, ptosis oclusiva); protocolos de tratamiento basados en la evidencia del Pediatric Eye Disease Investigator Group (Ensayos Landmark PEDIG ATS 1 a ATS 18): corrección óptica refractiva en ciclopejía inicial aislada (Optical Treatment of Amblyopia), regímenes de parche de oclusión (2 horas vs 6 horas al día en ambliopía moderada; 6 horas vs tiempo completo en ambliopía severa), penalización farmacológica con colirio de Atropina al 1% (régimen de fines de semana vs diaria); manejo de la ambliopía en niños mayores (7 a 17 años) y prevención de la recidiva post-parche mediante retirada escalonada.',
    definitionAndEpidemiology: 'La ambliopía es la disminución unilateral o bilateral de la mejor agudeza visual corregida (MAVC) que no puede atribuirse directamente a una anomalía estructural del globo ocular o de las vías ópticas, causada por una experiencia visual anormal durante el período crítico del desarrollo del sistema visual. Es la causa prevenible más común de pérdida visual monocular en niños y adultos jóvenes, con una prevalencia poblacional global del 1.5% al 3.5%.',
    anatomyAndPathophysiology: '1. Neurobiología de la Plasticidad Cortical (Trabajos de Hubel y Wiesel):\n   • Al nacer, las aferencias geniculocorticales de ambos ojos se superponen en la capa IVC de la corteza visual primaria (V1 / área 17 de Brodmann).\n   • Durante el "período crítico" (desde el nacimiento hasta los 7-8 años de edad), la estimulación visual simétrica y nítida impulsa la segregación anatómica de las columnas de dominancia ocular.\n   • Si un ojo sufre una imagen desenfocada (anisometropía), desviada (estrabismo) o bloqueada (catarata congénita), se produce una competencia binocular asimétrica: las sinapsis del ojo dominante desplazan activamente a las del ojo ambliope mediante mecanismos de plasticidad dependientes de NMDAr y GABA.\n   • Consecuencia histológica: Atrofia celular en las capas correspondientes del Cuerpo Geniculado Lateral (CGL) y reducción drástica de la representación cortical de neuronas binoculares en V1 para el ojo afectado.\n2. Umbrales Dióptricos Mínimos Ambliogénicos (Criterios de la AAPOS):\n   • Anisometropía Hipermetrópica: >= 1.00 D a 1.50 D de diferencia interocular (la más ambliogénica debido a que el ojo más hipermétrope nunca acomoda selectivamente).\n   • Anisometropía Astigmática: >= 1.50 D de diferencia.\n   • Anisometropía Miópica: >= 3.00 D de diferencia (el ojo miope puede usarse para la visión cercana, protegiéndose parcialmente de la ambliopía profunda).\n   • Ametropía Bilateral (Isoametropía): Hipermetropía bilateral >= +4.50 D; Astigmatismo bilateral >= 2.00-2.50 D; Miopía bilateral >= -6.00 D.',
    clinicalExamination: {
      biomicroscopy: 'Normal; descartar de forma sistemática opacidades de medios corneales, catarata anterior o posterior sutil, leucomas o ptosis que ocluya el eje pupilar.',
      fundus: 'Examen de retina y nervio óptico minucioso con oftalmoscopia binocular indirecta bajo midriasis para descartar patología orgánica sutil (hipoplasia del nervio óptico, colobomas, fosetas foveales o toxoplasmosis macular congénita) antes de rotular una ambliopía como funcional pura.',
      specialSigns: '• Fenómeno de Apiñamiento (Crowding Phenomenon): La agudeza visual del ojo ambliope es significativamente peor cuando se leen optotipos presentados en línea o con barras de interacción de contorno en comparación con optotipos aislados individuales.\n• Fijación Excéntrica: Mediante visuscopia con mira de estrella proyectada en el fondo de ojo, el ojo ambliope fija con un punto de la retina fuera de la fóvea (parafoveal, macular o yuxtapapilar).\n• Maniobra de Rechazo a la Oclusión en Lactantes: Si al ocluir el ojo sano el niño llora, aparta la mano con fuerza y pierde la fijación, advierte de ambliopía severa del ojo contralateral.'
    },
    diagnosticWorkup: [
      {
        test: 'Refracción Bajo Cicloplejía Completa (Gold Standard Indiscutible)',
        findings: 'Examen obligatorio con Ciclopentolato al 1% (2 gotas separadas por 5-10 minutos, evaluando a los 40-50 minutos) o Atropina al 1% en hipermetropías extremas: Revela la hipermetropía latente completa y la anisometropía real oculta que no se detecta con autorrefractómetros convencionales sin cicloplejía.'
      },
      {
        test: 'Evaluación de la Agudeza Visual Estandarizada por Rango de Edad',
        findings: 'En lactantes y preverbales: Mirada Preferencial con cartones de Teller o Cardiff; en preescolares (2.5 a 4 años): Test de símbolos LEA o HOTV con barra de apiñamiento a 3 metros; en mayores de 5 años: Cartilla ETDRS o Snellen en línea.'
      },
      {
        test: 'Evaluación de la Estereopsis (Titmus, Randot, TNO)',
        findings: 'Pérdida precoz de la estereoagudeza fina (normal: 40 segundos de arco); en ambliopía estrábica moderada a severa la estereopsis suele ser nula o grosera (>400 segundos de arco).'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Hipoplasia Segmentaria del Nervio Óptico (Signo del Doble Anillo)',
        distinction: 'Presenta papila pequeña con un halo amarillento concéntrico peripapilar característico y adelgazamiento de la CFNR en el OCT; la visión no mejora con oclusión.'
      },
      {
        condition: 'Distrofia de Conos Precoz',
        distinction: 'Bilateral y simétrica con fotofobia intensa diurna, nistagmo sensorial precoz, discromatopsia severa y ERG fotópico completamente plano.'
      },
      {
        condition: 'Pérdida Visual Funcional No Orgánica Infantil (Malingering infantil)',
        distinction: 'Típica en niños de 8-12 años en época de exámenes; la agudeza visual binocular paradójicamente es igual a la monocular y mejora espectacularmente con lentes neutras o prismas cruzados.'
      }
    ],
    steppedManagement: {
      medical: '• PROTOCOLO TERAPÉUTICO BASADO EN LOS ENSAYOS LANDMARK PEDIG:\n  1. Paso 1 Ineludible: TRATAMIENTO ÓPTICO AISLADO (Optical Treatment of Amblyopia):\n     - Prescripción de la corrección refractiva completa basada en la cicloplejía total.\n     - Esperar entre 8 y 16 semanas con uso exclusivo de las gafas a tiempo completo.\n     - Evidencia del PEDIG: Hasta un 25-30% de los niños con ambliopía anisometrópica moderada resuelven completamente su ambliopía y alcanzan 20/20 SOLO CON LAS GAFAS, sin necesidad de parches ni penalización.\n  2. Paso 2: TERAPIA DE OCLUSIÓN CON PARCHE (Prescripción Racional Basada en PEDIG):\n     - Ambliopía Moderada (Agudeza Visual de 20/40 a 20/80):\n       * Ensayo PEDIG ATS 2B: Demostró que 2 HORAS DE PARCHE AL DÍA son tan eficaces como 6 horas de parche al día (logrando una mejoría media de 2.4 líneas a los 4 meses en ambos grupos).\n       * Recomendación de elección: 2 horas de parche al día combinado con al menos 1 hora de actividades de visión cercana (dibujar, leer, videojuegos).\n     - Ambliopía Severa (Agudeza Visual de 20/100 a 20/400):\n       * Ensayo PEDIG ATS 2A: Demostró que 6 HORAS DE PARCHE AL DÍA son tan eficaces como la oclusión a tiempo completo durante todo el día (Full-time patching), con menor estrés familiar y menor riesgo de ambliopía por oclusión en el ojo sano.\n  3. Paso 3: PENALIZACIÓN FARMACOLÓGICA CON ATROPINA AL 1% (Alternativa al Parche):\n     - Ensayo PEDIG ATS 1: Comparó parche de oclusión (6h) vs Atropina al 1% (1 gota diaria en el ojo sano); a los 6 meses y a los 2 años, los resultados visuales fueron prácticamente IDÉNTICOS (20/30 o mejor en más del 70% de los niños).\n     - Ensayo PEDIG ATS 4: Demostró que la Atropina al 1% administrada SOLO LOS FINES DE SEMANA (sábado y domingo, 1 gota por la mañana) es tan eficaz como la atropina diaria en ambliopía moderada (20/40 a 20/80).\n     - Ideal en niños con mala adherencia o dermatitis de contacto por el adhesivo del parche.\n  4. Manejo en Niños Mayores (7 a 17 años):\n     - Ensayo PEDIG ATS 3: Niños de 7 a 12 años sin tratamiento previo responden favorablemente al parche (2-6 horas/día) logrando ganar 2 o más líneas en más del 53% de los casos.\n  5. Prevención de la Recidiva Post-Tratamiento:\n     - Ensayo PEDIG ATS 2C: Uno de cada 4 niños (24%) sufre una recaída de la ambliopía tras suspender el parche de forma brusca.\n     - Conducta obligatoria: Retirada escalonada progresiva (reducir de 6h a 2h, y de 2h a 1h/día durante varios meses antes del cese definitivo).',
      surgical: '• Eliminación Quirúrgica Urgente de la Causa de Deprivación:\n  - En Catarata Congénita Monocular Total: Lensectomía con vitrectomía anterior reglada en las primeras 4 a 6 semanas de vida para prevenir la ceguera sensorial cortical irreversible.\n  - En Ptosis Palpebral Severa Congénita que ocluye la pupila: Resección del elevador o suspensión al frontal urgente en los primeros meses de vida.\n• Cirugía de Estrabismo:\n  - La cirugía de alineamiento ocular (recesión/resección de rectos) debe realizarse DESPUÉS de haber mejorado la agudeza visual con parche, no antes; la cirugía alinea los ojos pero no cura la corteza cerebral.'
    },
    clinicalApplicationPractical: '1. Gafas Primero, Parche Después: Nunca ponga un parche en la primera visita a un niño con ambliopía anisometrópica recién diagnosticada. Prescriba la corrección óptica exacta en cicloplejía y cite en 8 a 12 semanas; un tercio de los niños normalizará su visión solo con las gafas, ahorrándoles el trauma psicológico del parche.\n2. Dos Horas de Parche son Suficientes: Eduque a los padres con la evidencia del PEDIG: prescribir parches durante todo el día ("full-time") genera peleas familiares y fracaso terapéutico; 2 horas al día de parche bien cumplidas mientras el niño juega o dibuja tienen el mismo éxito que 6 horas.\n3. Atropina en Fin de Semana es una Maravilla en Casos Rebeldes: Si el niño se arranca el parche en el colegio, ponga una gota de atropina al 1% en el ojo sano los sábados y domingos por la mañana; borra la visión cercana del ojo bueno obligando al niño a utilizar el ojo ambliope de forma invisible y sin estigma escolar.',
    highYieldPearl: 'Ambliopía PEDIG Board Pearl: 1) Tratamiento óptico primero (resuelve hasta el 30%). 2) Ambliopía moderada: 2h de parche = 6h de parche. 3) Ambliopía severa: 6h de parche = tiempo completo. 4) Atropina 1% en fines de semana = Atropina diaria = Parche. 5) Retirada gradual obligatoria para evitar recidivas.',
    keyDrugs: [
      { name: 'Ciclopentolato 1% colirio', dose: '1 gota cada 10 min (2 dosis) previo a refracción', warning: 'Ciclopléjico de elección en niños mayores de 6 meses; evaluar a los 40 minutos.' },
      { name: 'Atropina 1% colirio', dose: '1 gota en el ojo sano sábado y domingo por la mañana', warning: 'Penalización óptica para ambliopía moderada; vigilar signos de absorción sistémica como rubor y taquicardia.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'Horas de Parche según Ensayos PEDIG ATS',
        category: 'Cifra Clave de Corte',
        description: 'Pregunta fija de examen: "¿Cuántas horas de parche al día están indicadas en ambliopía moderada (20/40 a 20/80) según el ensayo PEDIG ATS 2B?". Respuesta: 2 horas al día (combinadas con actividad cercana). Para ambliopía severa (20/100 a 20/400): 6 horas al día según el ensayo ATS 2A.',
        trapToAvoid: 'Prescribir oclusión durante todo el día (12-14 horas) como pauta inicial estándar en ambliopía moderada.'
      },
      {
        title: 'Atropina en Fin de Semana vs Parche',
        category: 'Pregunta Clásica',
        description: 'El ensayo PEDIG ATS 1 y ATS 4 demostró que la penalización con Atropina al 1% administrada únicamente los fines de semana (2 días a la semana) logra la misma ganancia de agudeza visual que el parche diario en ambliopía moderada, con mayor adherencia y menor impacto en la calidad de vida.',
        trapToAvoid: 'Creer que la atropina es un tratamiento inferior o de segunda clase frente al parche.'
      },
      {
        title: 'Tasa de Recidiva de la Ambliopía Post-Parche',
        category: 'Cifra Clave de Corte',
        description: 'Uno de cada cuatro niños (24-25%) que suspenden el parche de forma brusca tras alcanzar 20/20 experimenta una recaída de la ambliopía en el primer año. Por ello, el PEDIG recomienda un destete gradual (tapering).',
        trapToAvoid: 'Suspender el parche de golpe el día en que el niño alcanza la agudeza visual objetivo.'
      }
    ],
    fellowshipKeyPoints: [
      'Neurobiología del Período Crítico (Hubel y Wiesel, Premio Nobel 1981): La oclusión monocular temprana en gatitos y primates demostró que las columnas de dominancia en la corteza V1 se redistribuyen permanentemente si la deprivación ocurre durante la ventana de plasticidad.',
      'Criterios Dióptricos Ambliogénicos de la AAPOS: La hipermetropía asimétrica de solo +1.00 a +1.50 D es significativamente más ambliogénica que una miopía asimétrica de -2.00 D, debido a que el ojo hipermétrope sufre un desenfoque constante tanto en visión lejana como cercana.',
      'Terapia Dicóptica Digital (Videojuegos Binoculares / Dig Rush): Estimulación simultánea con contraste desbalanceado diseñada para romper activamente la supresión cortical en V1.'
    ],
    landmarkTrials: [
      {
        name: 'PEDIG ATS 1 (Patching vs Atropine for Moderate Amblyopia)',
        year: '2002 (Ophthalmology)',
        conclusion: 'Primer ensayo multicéntrico aleatorizado del PEDIG en 419 niños: La penalización farmacológica con colirio de atropina al 1% logró una mejoría visual estadísticamente equivalente a la del parche de oclusión a los 6 meses y a los 2 años.',
        fellowshipRelevance: 'Revolucionó el manejo pediátrico convirtiendo a la atropina en un tratamiento de primera línea de igual eficacia que el parche.'
      },
      {
        name: 'PEDIG ATS 2B (Two Hours vs Six Hours of Patching in Moderate Amblyopia)',
        year: '2003 (Lancet)',
        conclusion: 'Demostró que 2 horas de parche al día son tan eficaces como 6 horas de parche al día para tratar la ambliopía moderada.',
        fellowshipRelevance: 'Cambió la práctica clínica global reduciendo drásticamente las horas de oclusión innecesarias.'
      }
    ],
    histopathologyAndGenetics: 'En estudios histológicos en modelos de ambliopía experimental: Atrofia y encogimiento del área somática de las neuronas en las capas 1, 4 y 6 del Cuerpo Geniculado Lateral conectadas al ojo ambliope; pérdida masiva de espinas dendríticas y reducción en la densidad de receptores AMPA y NMDA funcionales en las columnas de la capa IV de la corteza visual estriada.',
    surgicalPearls: [
      'Momento Quirúrgico en Catarata Congénita Monocular: Operar dentro de las primeras 4 a 6 semanas de vida para prevenir la ambliopía por deprivación sensorial profunda intratable; iniciar parche de oclusión en el ojo contralateral a razón del 50% de las horas de vigilia a los pocos días de la cirugía.',
      'Momento de la Cirugía de Estrabismo en Ambliopía Asociada: Nunca operar el estrabismo mientras persista una ambliopía severa; el ojo ambliope no fijará tras la cirugía y el estrabismo recidivará con alta probabilidad. Recuperar primero la visión hasta 20/30 o mejor y luego realizar la cirugía de alineamiento.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Una niña de 4 años acude a su primer control oftalmológico. En la exploración la agudeza visual monocular con optotipos LEA es de 20/25 en ojo derecho y 20/80 en ojo izquierdo. El alineamiento ocular es ortofórico en todas las posiciones de la mirada. La biomicroscopía del segmento anterior y la oftalmoscopia del fondo de ojo son normales en ambos ojos. La refracción bajo cicloplejía con ciclopentolato al 1% revela: OD +0.75 D esf (AV 20/25); OI +4.25 D esf (AV 20/80). Su médico residente le indica de inmediato un parche de oclusión en el ojo derecho durante 8 horas al día. ¿Cuál es el diagnóstico de certeza, cuál es la crítica razonada a la indicación del residente según los ensayos clínicos del PEDIG y cuál es el protocolo escalonado contemporáneo que debe seguirse?',
        answer: '1) Diagnóstico de Certeza: Ambliopía Anisometrópica Hipermetrópica Moderada en el ojo izquierdo (anisometropía de +3.50 D entre ambos ojos).\n2) Crítica Razonada a la Indicación del Residente:\n   - La propuesta de colocar un parche durante 8 horas al día de entrada es INCORRECTA Y CONTRARIA A LA EVIDENCIA:\n     a) Omite el tratamiento óptico refractivo inicial: Hasta un 25-30% de los niños con ambliopía anisometrópica resuelven su ambliopía EXCLUSIVAMENTE con el uso de gafas bien prescritas sin requerir parche.\n     b) Horas excesivas e innecesarias: El ensayo landmark PEDIG ATS 2B demostró que 2 horas de parche al día son tan eficaces como 6 u 8 horas de parche al día en ambliopía moderada, con mucho mejor cumplimiento y menor estrés psicológico familiar.\n3) Protocolo Escalonado Contemporáneo (Guías PEDIG):\n   - Paso 1 (Tratamiento Óptico Aislado): Prescribir gafas con la corrección óptica completa de la cicloplejía (OD plano o +0.75; OI +4.25 D esf) para uso continuo a tiempo completo durante 8 a 12 semanas.\n   - Paso 2: Reevaluar agudeza visual en 10-12 semanas. Si persiste ambliopía (ej. MAVC OI <20/30):\n     * Iniciar PARCHE DE OCLUSIÓN en el ojo derecho durante SOLO 2 HORAS AL DÍA acompañado de actividades visuales cercanas (dibujar, lectura).\n     * O como alternativa de igual eficacia: PENALIZACIÓN FARMACOLÓGICA con colirio de Atropina al 1% en el ojo derecho administrado únicamente los FINES DE SEMANA (sábado y domingo) según el ensayo PEDIG ATS 4.\n   - Paso 3: Al alcanzar 20/20 o estancamiento de la mejoría, realizar un destete progresivo del parche antes del cese para evitar la recaída (que ocurre en el 24% si se retira de golpe según ATS 2C).',
        trap: 'Poner parche 8-12 horas al día en la primera consulta sin haber pautado gafas previas ni conocer los estudios del PEDIG.'
      }
    ]
  },

  // =========================================================================
  // 10. PARÁLISIS CONGÉNITA DEL IV PAR (TROCLEAR) E HIPERTROPIAS
  // =========================================================================
  {
    id: 'deep-pediatria-paralisis-iv-congenita-hipertropias',
    title: 'Parálisis Congénita del IV Par (Troclear), Hipertropias y Cirugía del Oblicuo Inferior',
    subspecialtyId: 'pediatria',
    summary: 'Monografía exhaustiva sobre Parálisis del IV Par Craneal (Nervio Troclear) congénita vs adquirida: anatomía neuro-oftalmológica singular (único par craneal que emerge dorsalmente del mesencéfalo, cruza al 100% sus fibras en el velo medular anterior y tiene el trayecto subaracnoideo más largo); biomecánica del Músculo Oblicuo Superior (acción primaria de intorsión, acciones secundarias de depresión en aducción y abducción); diagnóstico en Tres Pasos de Parks-Bielschowsky (Three-Step Test): 1) Hipertropia en posición primaria, 2) Aumento de la hipertropia en lateroversión, 3) Aumento de la hipertropia con la inclinación cefálica ipsilateral (signo de Bielschowsky positivo); signos cardinales de cronicidad y naturaleza congénita: tortícolis compensatorio antiguo (cabeza inclinada hacia el hombro opuesto), asimetría facial hipoplásica ipsilateral (hemifacial microsomia) y amplitud de fusión vertical anormalmente aumentada (>8-10 dioptrías prismáticas; normal 2-3 DP); hiperfunción secundaria del Músculo Oblicuo Inferior ipsilateral (IOOA); abordaje quirúrgico según la clasificación de Knapp: Miectomía / Desinserción del Oblicuo Inferior de elección vs Plegamiento del Oblicuo Superior o procedimiento de Harada-Ito para extorsión predominante.',
    definitionAndEpidemiology: 'La parálisis del IV par craneal (nervio troclear) es la causa más común de diplopía vertical y de parálisis monocular cicloconcomitante aislada tanto en niños como en adultos. Puede ser congénita (secundaria a agenesia, hipoplasia o laxitud del tendón del oblicuo superior) o adquirida (frecuentemente tras traumatismo craneoencefálico cerrado con impacto frontal o vértex debido a la compresión del nervio contra el tentorio del cerebelo, o de origen microvascular isquémico). La forma congénita a menudo permanece compensada durante décadas mediante una tortícolis sutil y amplitudes de fusión vertical gigantes, descompensándose típicamente en la edad adulta (30 a 60 años) con diplopía vertical intermitente.',
    anatomyAndPathophysiology: '1. Singularidades Anatómicas del Nervio Troclear (IV Par):\n   • Es el nervio craneal más delgado (contiene apenas unos 3.400 axones).\n   • Es el ÚNICO par craneal que emerge por la superficie dorsal (posterior) del tronco del encéfalo, inmediatamente por debajo de los colículos inferiores.\n   • Cruza completamente (100% de decusación) en el velo medular anterior: por lo tanto, una lesión del núcleo troclear en el mesencéfalo afecta al músculo oblicuo superior CONTRALATERAL, mientras que una lesión periférica fascicular o troncal afecta al OBLICUO SUPERIOR IPSILATERAL.\n   • Posee el trayecto subaracnoideo cisternal más largo de todos los pares craneales (aproximadamente 40 mm), rodeando el pedúnculo cerebral hasta entrar en el seno cavernoso por debajo del III par, penetrando a la órbita a través de la hendidura esfenoidal fuera del anillo de Zinn.\n2. Biomecánica Muscular del Oblicuo Superior (OS):\n   • Se origina en el vértice orbitario, discurre medialmente hasta la tróclea de fibrocartílago en la pared anteromedial del techo de la órbita (su polea anatómica), donde su tendón se refleja en un ángulo agudo de 51° hacia el cuadrante postero-lateral del globo bajo el recto superior.\n   • Acción Primaria: INCICLOTORSIÓN (Intorsión del polo superior de la córnea hacia adentro).\n   • Acción Secundaria: DEPRESIÓN (máxima cuando el ojo se encuentra en ADUCCIÓN de 51°).\n   • Acción Terciaria: ABDUCCIÓN.\n3. Mecanismo de la Hipertropia y Tortícolis:\n   • La debilidad del oblicuo superior parético provoca una hipertropia ipsilateral (el ojo afectado está más alto que el sano).\n   • Hiperfunción Antagonista Directa Inmediata: El músculo antagonista homolateral es el Oblicuo Inferior ipsilateral, el cual hiperactúa sin oposición (hiperfunción del OI).\n   • Para neutralizar la diplopía vertical y la extorsión patológica, el paciente adopta una POSTURA COMPENSATORIA DE LA CABEZA (Tortícolis Ocular): Inclina la cabeza hacia el HOMBRO CONTRALATERAL al ojo parético (para relajar la demanda de intorsión del ojo enfermo), gira la cara hacia el lado opuesto y deprime el mentón.',
    clinicalExamination: {
      biomicroscopy: 'Normal; descartar heterocromía de iris o anomalías craneofaciales asociadas.',
      fundus: 'Examen de Ciclotorsión mediante Oftalmoscopia Binocular Indirecta: Evaluar la relación anatómica fovea-disco óptico. En un ojo normal la fóvea se sitúa a nivel del tercio inferior del disco óptico; en la parálisis del IV par existe EXTORSIÓN objetiva del fondo (la fóvea se encuentra descendida muy por debajo del borde inferior del disco óptico).',
      specialSigns: '• Test de los Tres Pasos de Parks-Bielschowsky (Three-Step Test - Pila Fundamental de Diagnóstico):\n  1. Paso 1: ¿Qué ojo está hipertópico en posición primaria? (Ej. Hipertropia Derecha -> sospecha de 4 músculos: Recto Inferior Derecho, Oblicuo Superior Derecho, Recto Superior Izquierdo, Oblicuo Inferior Izquierdo).\n  2. Paso 2: ¿La hipertropia aumenta en la mirada a la derecha o a la izquierda? (Ej. La Hipertropia Derecha aumenta en mirada hacia la IZQUIERDA -> reduce a dos músculos que actúan en aducción: Oblicuo Superior Derecho o Recto Superior Izquierdo).\n  3. Paso 3 (Test de Inclinación Cefálica de Bielschowsky): ¿La hipertropia aumenta al inclinar la cabeza hacia el hombro derecho o hacia el izquierdo? (Ej. Al inclinar hacia el hombro DERECHO, los intorsores del ojo derecho se contraen por el reflejo vestibular; como el oblicuo superior está paralizado, el recto superior derecho tira hacia arriba sin antagonismo deprimente, provocando un aumento masivo de la hipertropia derecha -> CONFIRMA PARÁLISIS DEL OBLICUO SUPERIOR DERECHO).\n• Signos de Cronicidad / Congénita:\n  - Amplitud de Fusión Vertical Expandida: Puede fusionar entre 8 y 15 dioptrías prismáticas verticales (frente a 2-3 DP normales en parálisis adquiridas agudas).\n  - Asimetría Facial (Hemi-hipoplasia Facial): Hipoplasia del lado de la cara hacia el cual la cabeza está habitualmente inclinada visible en fotos antiguas de la infancia.'
    },
    diagnosticWorkup: [
      {
        test: 'Varilla de Maddox Doble (Double Maddox Rod Test)',
        findings: 'Prueba de referencia para cuantificar la ciclotorsión subjetiva: Se colocan dos varillas de Maddox (una roja y una blanca) en la montura de prueba con estrías verticales; en parálisis unilateral del IV par existe una exciclotorsión de 5° a 10°; si la exciclotorsión es >10-15° o cambia de signo según la mirada, sospechar fuertemente PARÁLISIS BILATERAL DEL IV PAR (típica en trauma craneal severo).'
      },
      {
        test: 'Medición de Amplitudes de Fusión Vertical con Barra de Prismas',
        findings: 'Si el paciente tolera prismas verticales de 8 a 15 dioptrías sin diplopía, confirma una parálisis congénita de larga data descompensada.'
      },
      {
        test: 'Resonancia Magnética Cerebral con Cortes Finos en Mesencéfalo y Órbita (CISS/FIESTA)',
        findings: 'En casos congénitos: Puede demostrar agenesia o hipoplasia del vientre muscular del oblicuo superior en cortes coronales orbitarios. En casos adquiridos agudos: Descarta lesiones en velo medular anterior, tronco o compresión en seno cavernoso.'
      }
    ],
    differentialDiagnosis: [
      {
        condition: 'Desviación Oblicua (Skew Deviation) de Origen Vestibular/Troncoencefálico',
        distinction: 'Presenta hipertropia pero el test de Bielschowsky es NEGATIVO o no encaja en los 3 pasos clásicos; se acompaña de cicloversión ocular conjugada en la misma dirección, nistagmo y tilt subjetivo de la vertical visual (SVV) por disfunción vestibular central.'
      },
      {
        condition: 'Oftalmopatía Tiroidea (Orbitopatía de Graves con Afectación del Recto Inferior)',
        distinction: 'Restricción fibrótica severa del Recto Inferior contralateral (test de ducción forzada intensamente positivo); engrosamiento muscular con respeto tendinoso en TC de órbita.'
      },
      {
        condition: 'Fractura de Suelo de Órbita con Atrapamiento del Recto Inferior',
        distinction: 'Antecedente directo de traumatismo ocular contuso ("blow-out fracture"); atrapamiento mecánico que impide la elevación ocular con enoftalmos e hipoestesia del nervio infraorbitario.'
      }
    ],
    steppedManagement: {
      medical: '• Manejo Conservador y Óptico No Quirúrgico:\n  - En Parálisis Congénita Descompensada con desviación vertical pequeña (<= 4 a 6 Dioptrías Prismáticas):\n    * Prescripción de PRISMAS VERTICALES en las gafas (prismas de Fresnel temporales o tallados en el cristal divididos entre ambos ojos: base inferior en el ojo hipertópico y base superior en el ojo hipótropico).\n    * Permite restaurar la fusión binocular y eliminar la diplopía en posición primaria si no hay componente torsional significativo.\n  - En Parálisis Adquirida Traumática o Microvascular:\n    * Oclusión monocular alterna para evitar la diplopía y observación activa durante un mínimo de 6 meses; la gran mayoría de las parálisis microvasculares recuperan espontáneamente.',
      surgical: '• Planificación Quirúrgica según la Clasificación de Knapp y Magnitud de la Desviación:\n  1. Hiperfunción del Oblicuo Inferior Ipsilateral Predominante (el escenario más frecuente en parálisis congénita):\n     - MIECTOMÍA O DESINSERCIÓN DEL MÚSCULO OBLICUO INFERIOR (IO weakening):\n       * Cirugía de elección indiscutible: A través de incisión conjuntival en fórnix inferotemporal -> se engancha el músculo oblicuo inferior cuidando de no lesionar la inserción vecina del recto lateral ni la vena vorticosa inferotemporal -> se desinserta de la esclera o se realiza una miectomía de 5 a 8 mm con cauterio bipolar.\n       * Corrige entre 10 y 15 dioptrías prismáticas de hipertropia en la posición de máxima acción (aducción) y 4 a 6 DP en posición primaria, mejorando espectacularmente el tortícolis.\n  2. Tendón del Oblicuo Superior Laxo con Hipoacción Severa en Depresión y Aducción:\n     - Plegamiento o Avance del Tendón del Oblicuo Superior (SO tucking):\n       * Plegamiento de 4 a 8 mm del tendón anterior a la inserción escleral bajo el recto superior.\n       * RIESGO OBLIGATORIO DE BOARD: Riesgo de inducir un Síndrome de Brown Iatrogénico (limitación de la elevación en aducción por acortamiento tendinoso excesivo).\n  3. Exciclotorsión Marcada (>8-10°) con Hipertropia Pequeña en Posición Primaria (Parálisis Bilateral):\n     - PROCEDIMIENTO DE HARADA-ITO MODIFICADO:\n       * Desdoblamiento longitudinal de la mitad anterior del tendón del oblicuo superior -> transposición y avance anterolateral de las fibras anteriores (responsables de la torsión) hacia la inserción superior del recto lateral.\n       * Corrige la exciclotorsión pura de forma selectiva sin alterar el alineamiento vertical en posición primaria.'
    },
    clinicalApplicationPractical: '1. El Test de Bielschowsky se aprende con una regla mnemotécnica sencilla: El músculo oblicuo superior es el depresor e intorsor del ojo. Si falla el OS derecho, al inclinar la cabeza a la derecha el ojo necesita intorsión; como el OS no funciona, se activa el Recto Superior derecho para intentar intorcer, pero como el recto superior también es elevador, dispara el ojo derecho hacia arriba, aumentando la hipertropia.\n2. Busque fotos de la infancia: Si un adulto de 45 años consulta por "diplopía súbita vertical" y usted encuentra una parálisis del IV par con una hipertropia de 12 DP que el paciente es capaz de fusionar con prismas, pídale ver fotos de su carnet de conducir o de su infancia; verá que en todas las fotos sale con la cabeza ladeada hacia el hombro izquierdo (parálisis congénita que se descompensó por cansancio o presbicia).\n3. Miectomía del Oblicuo Inferior es la cirugía reina: En el 80% de las parálisis del IV par congénitas, la miectomía o recesión del oblicuo inferior ipsilateral es el procedimiento más noble, seguro y eficaz para eliminar la hipertropia y curar el tortícolis.',
    highYieldPearl: 'Parálisis IV Par Board Rule: Hipertropia que aumenta en aducción y con inclinación cefálica ipsilateral (Three-step test). Cronicidad congénita: Hemi-hipoplasia facial y amplitud de fusión vertical >8-10 DP. Cirugía de elección: Miectomía del Oblicuo Inferior ipsilateral.',
    keyDrugs: [
      { name: 'Prismas de Fresnel temporales', dose: 'Adheridos a la gafa divididos entre ambos ojos', warning: 'Tratamiento óptico conservador para restaurar fusión binocular en posición primaria.' }
    ],
    residencyAndFellowExamTips: [
      {
        title: 'El Test de los Tres Pasos de Parks-Bielschowsky',
        category: 'Asociación Patognomónica',
        description: 'La presencia de una hipertropia derecha que aumenta en la mirada hacia la izquierda y se acentúa ostensiblemente al inclinar la cabeza hacia el hombro derecho es diagnóstica al 100% de Parálisis del IV Par Craneal (Oblicuo Superior) Derecho.',
        trapToAvoid: 'Confundir el hombro hacia el cual empeora la hipertropia (empeora SIEMPRE al inclinar hacia el lado del ojo parético).'
      },
      {
        title: 'Cómo Distinguir una Parálisis Congénita de una Adquirida',
        category: 'Pregunta Clásica',
        description: 'Parálisis Congénita: Amplitud de fusión vertical patológicamente gigante (>8-12 DP, frente a 2-3 DP normal), tortícolis histórico documentado en fotografías antiguas y hemi-hipoplasia facial del lado de la inclinación. Parálisis Adquirida: Diplopía intolerable aguda, amplitudes de fusión vertical normales (2-3 DP) y sin asimetría facial.',
        trapToAvoid: 'Someter a un paciente a resonancia magnética urgente de cráneo por "parálisis aguda del IV par" cuando el paciente tiene amplitudes de fusión de 12 dioptrías demostrando origen congénito.'
      },
      {
        title: 'Complicación del Plegamiento del Oblicuo Superior',
        category: 'Trampa de Tribunal',
        description: 'El plegamiento excesivo (tuck) del tendón del oblicuo superior produce un Síndrome de Brown Iatrogénico (incapacidad mecánica para elevar el ojo en aducción debido a la inelasticidad del tendón acortado que no puede elongarse a través de la tróclea).',
        trapToAvoid: 'Plegar más de 8-10 mm de tendón del oblicuo superior sin comprobar la prueba de ducción forzada intraoperatoria.'
      }
    ],
    fellowshipKeyPoints: [
      'Clasificación de Knapp para Parálisis del IV Par: Clase 1 (hipertropia máxima en campo del oblicuo inferior opuesto), Clase 2 (máxima en campo del oblicuo superior parético), Clase 3 (igual en todo el campo de la mirada contralateral), Clase 4 (en toda la mirada contralateral y posición primaria), Clase 5 (hipertropia en toda la mirada con hipofunción del recto inferior contralateral).',
      'Procedimiento de Harada-Ito Modificado: No toca la inserción posterior del oblicuo superior; avanza exclusivamente la mitad anterior del tendón hacia adelante y lateralmente, corrigiendo hasta 10-12 grados de exciclotorsión en la mirada hacia abajo sin alterar la posición primaria vertical.',
      'Parálisis Bilateral del IV Par: Trauma craneal frontal severo que lesiona ambos nervios en el velo medular anterior; se caracteriza por hipertropia alternante en lateroversiones (hipertropia derecha en levoversión e hipertropia izquierda en dextroversión), patrón en V con esotropia en mirada hacia abajo y exciclotorsión masiva >10-15°.'
    ],
    landmarkTrials: [
      {
        name: 'Knapp Classification and Surgical Management of Fourth Nerve Palsy',
        year: '1974 (Trans Am Ophthalmol Soc)',
        conclusion: 'Estableció el algoritmo anatómico y posicional clásico para seleccionar qué músculo operar en la parálisis del troclear en función de la zona de máxima desviación.',
        fellowshipRelevance: 'La referencia fundacional del tratamiento quirúrgico del estrabismo vertical.'
      }
    ],
    histopathologyAndGenetics: 'En biopsias y estudios de resonancia magnética de alta resolución en parálisis congénita del IV par: Ausencia (aplasia) o atrofia severa del vientre muscular del oblicuo superior en cortes coronales con reemplazo fibrograso del tejido contráctil, y un tendón troclear excesivamente redundante y elástico ("tendón flácido") que no transmite fuerza tensil.',
    surgicalPearls: [
      'Al aislar el Músculo Oblicuo Inferior para miectomía: Introducir el gancho de estrabismo en el fórnix inferotemporal deslizándolo directamente pegado a la esclera de adelante hacia atrás; asegurarse de visualizar las fibras musculares completas de color asalmonado y NO englobar fibras del músculo recto lateral ni el ligamento de Lockwood, lo que causaría retracción del párpado inferior.',
      'Test de Ducción Forzada del Oblicuo Superior (Técnica de Guyton): Tras realizar el plegamiento o cirugía del oblicuo superior, rotar el globo ocular en aducción forzada y elevarlo hacia arriba mientras se palpa la tensión del tendón; si se percibe un tope rígido e inextensible, soltar parcialmente el punto para evitar un síndrome de Brown iatrogénico postoperatorio.'
    ],
    fellowOralBoardQuestions: [
      {
        question: 'Un hombre de 46 años consulta por visión doble vertical intermitente de 3 meses de evolución que empeora hacia el final del día al trabajar frente al ordenador o al leer. Niega traumatismos previos. Al examen físico se aprecia una ligera inclinación de la cabeza hacia el hombro izquierdo que el paciente asegura tener "desde que tiene memoria". En la exploración ortóptica presenta una Hipertropia Derecha de 10 dioptrías prismáticas en posición primaria que aumenta a 18 DP en la mirada hacia la izquierda y disminuye a 3 DP en la mirada a la derecha. Al realizar el test de Bielschowsky inclinando la cabeza hacia el hombro derecho, la hipertropia derecha aumenta bruscamente a 22 DP; al inclinar hacia el hombro izquierdo, disminuye a 2 DP. Con una barra de prismas verticales colocada en ojo derecho base inferior, el paciente logra fusionar y mantener visión simple binocular con un prisma de hasta 12 dioptrías prismáticas. ¿Cuál es el diagnóstico sindrómico exacto, qué músculo específico presenta la paresia, cuál es la justificación inequívoca de que se trata de un proceso congénito y cuál es el procedimiento quirúrgico de elección?',
        answer: '1) Diagnóstico Exacto: Parálisis Congénita del IV Par Craneal (Nervio Troclear) Derecho descompensada en la edad media de la vida.\n2) Músculo Específico con Paresia: Músculo Oblicuo Superior Derecho (confirmado por el Test de los Tres Pasos de Parks-Bielschowsky: 1) Hipertropia derecha en posición primaria, 2) Aumenta en levoversión / aducción derecha, 3) Aumenta ostensiblemente con la inclinación cefálica hacia el hombro derecho ipsilateral).\n3) Justificación Inequívoca de Cronicidad / Naturaleza Congénita:\n   - La demostración de una Amplitud de Fusión Vertical anormalmente expandida y gigante (capaz de fusionar hasta 12 dioptrías prismáticas; una persona normal o con parálisis adquirida aguda solo tolera 2 a 3 DP antes de desdoblar la imagen).\n   - La presencia de un tortícolis postural compensatorio histórico hacia el hombro opuesto (hombro izquierdo) presente desde la infancia.\n   - No requiere neuroimagen cerebral urgente dado el carácter congénito incuestionable.\n4) Procedimiento Quirúrgico de Elección:\n   - MIECTOMÍA O DESINSERCIÓN DEL MÚSCULO OBLICUO INFERIOR DERECHO (debilitamiento del antagonista directo homolateral con hiperfunción secundaria).\n   - Corrige típicamente entre 10 y 15 DP de hipertropia en la mirada hacia la izquierda y 4-6 DP en posición primaria, eliminando la necesidad de tortícolis compensatorio y resolviendo la diplopía de forma definitiva.',
        trap: 'Catalogar la diplopía como un evento neurológico agudo y solicitar RM de urgencia ignorando que una amplitud de fusión de 12 DP es patognomónica de cronicidad congénita.'
      }
    ]
  }
];

