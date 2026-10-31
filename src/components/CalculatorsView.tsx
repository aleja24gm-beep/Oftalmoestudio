import React, { useState } from 'react';
import { 
  Calculator, 
  Gauge, 
  AlertTriangle, 
  ShieldAlert, 
  Eye, 
  Info, 
  RotateCcw,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const CalculatorsView: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState<'iop' | 'ots' | 'chemical' | 'visualAcuity' | 'tfsom'>('iop');

  // TFSOM State for Ocular Oncology
  const [tfsomThickness, setTfsomThickness] = useState<boolean>(false);
  const [tfsomFluid, setTfsomFluid] = useState<boolean>(false);
  const [tfsomSymptoms, setTfsomSymptoms] = useState<boolean>(false);
  const [tfsomOrange, setTfsomOrange] = useState<boolean>(false);
  const [tfsomMargin, setTfsomMargin] = useState<boolean>(false);
  const [tfsomUltrasound, setTfsomUltrasound] = useState<boolean>(false);
  const [tfsomNoHalo, setTfsomNoHalo] = useState<boolean>(false);
  const [tfsomNoDrusen, setTfsomNoDrusen] = useState<boolean>(false);

  const tfsomScore = (tfsomThickness ? 1 : 0) +
    (tfsomFluid ? 1 : 0) +
    (tfsomSymptoms ? 1 : 0) +
    (tfsomOrange ? 1 : 0) +
    (tfsomMargin ? 1 : 0) +
    (tfsomUltrasound ? 1 : 0) +
    (tfsomNoHalo ? 1 : 0) +
    (tfsomNoDrusen ? 1 : 0);

  // 1. IOP State
  const [measuredIOP, setMeasuredIOP] = useState<number>(24);
  const [cct, setCct] = useState<number>(510);

  // Correction calculation (formula derived from Dresdner/Ehlers approximation)
  // Standard normal CCT: 545 um. Every 50 um roughly corresponds to ~2.5 - 3 mmHg adjustment
  const cctDiff = 545 - cct;
  const iopCorrectionFactor = Number((cctDiff * 0.05).toFixed(1));
  const correctedIOP = Number((measuredIOP + iopCorrectionFactor).toFixed(1));

  // 2. OTS State
  const [initialVA, setInitialVA] = useState<number>(60); // raw points
  const [hasGlobeRupture, setHasGlobeRupture] = useState<boolean>(false);
  const [hasEndophthalmitis, setHasEndophthalmitis] = useState<boolean>(false);
  const [hasPerforatingInjury, setHasPerforatingInjury] = useState<boolean>(false);
  const [hasRetinalDetachment, setHasRetinalDetachment] = useState<boolean>(false);
  const [hasAPD, setHasAPD] = useState<boolean>(false);

  // Calculate OTS Raw Score
  const otsRawScore = Math.max(
    0,
    initialVA -
      (hasGlobeRupture ? 23 : 0) -
      (hasEndophthalmitis ? 17 : 0) -
      (hasPerforatingInjury ? 14 : 0) -
      (hasRetinalDetachment ? 11 : 0) -
      (hasAPD ? 10 : 0)
  );

  let otsCategory = 1;
  let otsPrognosis = { npl: 74, lp: 15, cd: 7, low: 3, good: 1 };

  if (otsRawScore >= 92) {
    otsCategory = 5;
    otsPrognosis = { npl: 0, lp: 1, cd: 2, low: 5, good: 92 };
  } else if (otsRawScore >= 81) {
    otsCategory = 4;
    otsPrognosis = { npl: 1, lp: 2, cd: 7, low: 22, good: 68 };
  } else if (otsRawScore >= 66) {
    otsCategory = 3;
    otsPrognosis = { npl: 5, lp: 11, cd: 15, low: 28, good: 41 };
  } else if (otsRawScore >= 45) {
    otsCategory = 2;
    otsPrognosis = { npl: 27, lp: 26, cd: 18, low: 15, good: 14 };
  } else {
    otsCategory = 1;
    otsPrognosis = { npl: 74, lp: 15, cd: 7, low: 3, good: 1 };
  }

  // 3. Chemical Burn State
  const [limbalIschemiaClockHours, setLimbalIschemiaClockHours] = useState<number>(4);
  const [conjunctivalIschemiaPercent, setConjunctivalIschemiaPercent] = useState<number>(30);

  // Roper-Hall grading:
  // Grade I: No limbal ischemia, corneal erosion only -> Good
  // Grade II: Limbal ischemia < 3 clock hours (or <30%), hazy cornea -> Good
  // Grade III: Limbal ischemia 3-6 clock hours (30-50%), total epithelial loss -> Guarded
  // Grade IV: Limbal ischemia > 6 clock hours (>50%), opaque cornea -> Poor
  let roperHallGrade = 'Grado I';
  let roperHallPrognosis = 'Excelente pronóstico. Recuperación rápida.';
  let roperHallColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';

  if (limbalIschemiaClockHours === 0) {
    roperHallGrade = 'Grado I (Roper-Hall)';
    roperHallPrognosis = 'Sin isquemia límbica. Solo defecto epitelial corneal. Pronóstico excelente con reepitelización rápida.';
    roperHallColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
  } else if (limbalIschemiaClockHours <= 3) {
    roperHallGrade = 'Grado II (Roper-Hall)';
    roperHallPrognosis = 'Isquemia límbica <3 horas de reloj (<25%). Córnea turbia pero detalles del iris visibles. Buen pronóstico.';
    roperHallColor = 'text-blue-700 bg-blue-50 border-blue-200';
  } else if (limbalIschemiaClockHours <= 6) {
    roperHallGrade = 'Grado III (Roper-Hall)';
    roperHallPrognosis = 'Isquemia límbica de 3 a 6 horas (30-50%). Detalles del iris borrosos. Pronóstico reservado con riesgo de deficiencia de células madre límbicas.';
    roperHallColor = 'text-amber-800 bg-amber-50 border-amber-200';
  } else {
    roperHallGrade = 'Grado IV (Roper-Hall)';
    roperHallPrognosis = 'Isquemia límbica >6 horas (>50%). Córnea completamente opaca ("en porcelana"). Pronóstico muy malo con necrosis y alto riesgo de perforación estromal.';
    roperHallColor = 'text-rose-800 bg-rose-50 border-rose-300';
  }

  // 4. Visual Acuity Converter
  const [vaInputDecimal, setVaInputDecimal] = useState<number>(0.5);
  const calculatedLogMAR = vaInputDecimal > 0 ? Number((-Math.log10(vaInputDecimal)).toFixed(2)) : 2.0;
  const calculatedSnellenFeet = vaInputDecimal > 0 ? Math.round(20 / vaInputDecimal) : 2000;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center space-x-2 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Calculator className="w-4 h-4" />
          <span>HERRAMIENTAS CLÍNICAS Y DE GUARDIA</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          Calculadoras y Escalas Oftalmológicas de Residencia
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Herramientas numéricas validadas para la práctica diaria: ajuste de PIO por paquimetría, pronóstico de trauma ocular abierto (OTS), clasificación pronóstica de quemaduras químicas y conversor de agudezas visuales.
        </p>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-100">
          <button
            onClick={() => setActiveCalculator('iop')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
              activeCalculator === 'iop'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            PIO y Paquimetría (CCT)
          </button>
          <button
            onClick={() => setActiveCalculator('ots')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
              activeCalculator === 'ots'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Ocular Trauma Score (OTS)
          </button>
          <button
            onClick={() => setActiveCalculator('chemical')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
              activeCalculator === 'chemical'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Quemaduras Químicas (Roper-Hall)
          </button>
          <button
            onClick={() => setActiveCalculator('visualAcuity')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
              activeCalculator === 'visualAcuity'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Conversor Agudeza Visual
          </button>
          <button
            onClick={() => setActiveCalculator('tfsom')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
              activeCalculator === 'tfsom'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'bg-purple-50 text-purple-900 hover:bg-purple-100 border border-purple-200'
            }`}
          >
            🛡️ TFSOM-UHHD (Oncología: Nevus vs Melanoma)
          </button>
        </div>
      </div>

      {/* CALCULATOR 1: IOP & CCT */}
      {activeCalculator === 'iop' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <Gauge className="w-5 h-5 text-teal-600" />
              <span>Ajuste de Presión Intraocular por Paquimetría</span>
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                PIO Medida en Tonometría Goldmann (mmHg): {measuredIOP} mmHg
              </label>
              <input
                type="range"
                min="5"
                max="60"
                value={measuredIOP}
                onChange={(e) => setMeasuredIOP(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>5 mmHg</span>
                <span>21 mmHg (Límite)</span>
                <span>60 mmHg</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Paquimetría Corneal Central - CCT (micras / µm): {cct} µm
              </label>
              <input
                type="range"
                min="420"
                max="680"
                value={cct}
                onChange={(e) => setCct(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>420 µm (Muy delgada)</span>
                <span>545 µm (Estándar)</span>
                <span>680 µm (Edematosa/Gruesa)</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600">
              <span>Fórmula referencial: Aproximación Dresdner corregida (~0.05 mmHg por cada µm de desviación de 545 µm).</span>
            </div>
          </div>

          {/* Highlighted Result */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl border-2 border-teal-500 p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                Resultado Destacado de Guardias
              </span>
              <div className="mt-2 mb-4">
                <span className="text-4xl font-extrabold text-teal-950 font-mono">
                  {correctedIOP} mmHg
                </span>
                <span className="ml-2 text-xs font-bold text-teal-700">
                  (Corrección estimada: {iopCorrectionFactor > 0 ? `+${iopCorrectionFactor}` : iopCorrectionFactor} mmHg)
                </span>
              </div>

              <div className="p-4 bg-white/90 rounded-xl border border-teal-200 text-xs space-y-2">
                <strong className="block text-slate-900 font-bold">
                  Interpretación Clínica para el Residente:
                </strong>
                <p className="text-slate-700 leading-relaxed">
                  {cct < 520 ? (
                    <span className="text-rose-800 font-medium">
                      ⚠️ CÓRNEA DELGADA ({cct} µm): La tonometría de Goldmann subestima la PIO real. Además, según el estudio OHTS, una paquimetría &lt;555 µm es un factor de riesgo independiente mayor para conversión a glaucoma.
                    </span>
                  ) : cct > 580 ? (
                    <span className="text-blue-800 font-medium">
                      ℹ️ CÓRNEA GRUESA ({cct} µm): La rigidez corneal sobreestima la PIO real. El riesgo intrínseco de progresión suele ser menor que el aparente en Goldmann.
                    </span>
                  ) : (
                    <span>
                      Córnea dentro del rango promedio normal (530-560 µm). La lectura de Goldmann es bastante fidedigna.
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900">
              <strong>Perla de Examen:</strong> Nunca se debe tratar un número corregido de forma matemática pura. La meta es evaluar el reborde neurorretiniano, el OCT de CFNR y el campo visual de forma integral.
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 2: OTS */}
      {activeCalculator === 'ots' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <span>Ocular Trauma Score (Kuhn et al.)</span>
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                1. Agudeza Visual Inicial en el Momento del Trauma
              </label>
              <select
                value={initialVA}
                onChange={(e) => setInitialVA(Number(e.target.value))}
                className="w-full text-xs sm:text-sm rounded-lg border border-slate-200 py-2 px-3 bg-white text-slate-800 focus:ring-2 focus:ring-teal-500"
              >
                <option value={60}>No Percepción de Luz (NPL) [Puntos: 60]</option>
                <option value={70}>Percepción de Luz o Movimiento de Manos (PL / MM) [Puntos: 70]</option>
                <option value={80}>1/200 a 19/200 (Cuenta dedos) [Puntos: 80]</option>
                <option value={90}>20/200 a 20/50 [Puntos: 90]</option>
                <option value={100}>Mayor o igual a 20/40 [Puntos: 100]</option>
              </select>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                2. Hallazgos Lesionales Agudos (Factores Negativos):
              </span>

              <label className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasGlobeRupture}
                  onChange={(e) => setHasGlobeRupture(e.target.checked)}
                  className="rounded-sm text-teal-600"
                />
                <span>Ruptura de globo ocular (-23 puntos)</span>
              </label>

              <label className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasEndophthalmitis}
                  onChange={(e) => setHasEndophthalmitis(e.target.checked)}
                  className="rounded-sm text-teal-600"
                />
                <span>Endoftalmitis traumática (-17 puntos)</span>
              </label>

              <label className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPerforatingInjury}
                  onChange={(e) => setHasPerforatingInjury(e.target.checked)}
                  className="rounded-sm text-teal-600"
                />
                <span>Lesión perforante (con orificio de entrada y salida) (-14 puntos)</span>
              </label>

              <label className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasRetinalDetachment}
                  onChange={(e) => setHasRetinalDetachment(e.target.checked)}
                  className="rounded-sm text-teal-600"
                />
                <span>Desprendimiento de retina concomitante (-11 puntos)</span>
              </label>

              <label className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasAPD}
                  onChange={(e) => setHasAPD(e.target.checked)}
                  className="rounded-sm text-teal-600"
                />
                <span>Defecto Pupilar Aferente Relativo - DPAR / Marcus Gunn (-10 puntos)</span>
              </label>
            </div>
          </div>

          {/* OTS Highlighted Output */}
          <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-xl p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Puntaje Pronóstico OTS
                </span>
                <span className="text-xs font-mono bg-white/10 px-2 py-0.5 rounded-sm">
                  Puntos crudos: {otsRawScore}
                </span>
              </div>

              <div className="mt-2 mb-4">
                <span className="text-3xl font-extrabold text-white">
                  Categoría OTS {otsCategory}
                </span>
                <span className="block text-xs text-slate-300 mt-1">
                  (Escala de 1 a 5: 1 es el peor pronóstico visual, 5 es el mejor)
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <span className="block font-bold text-teal-300 uppercase tracking-wider">
                  Probabilidad de Agudeza Visual Final a 6 Meses:
                </span>
                <div className="space-y-1.5 font-mono text-slate-200">
                  <div className="flex justify-between bg-white/10 px-3 py-1.5 rounded-sm">
                    <span>No Percepción de Luz (NPL):</span>
                    <strong className="text-rose-400">{otsPrognosis.npl}%</strong>
                  </div>
                  <div className="flex justify-between bg-white/10 px-3 py-1.5 rounded-sm">
                    <span>Percepción de Luz o Movimiento Manos:</span>
                    <strong>{otsPrognosis.lp}%</strong>
                  </div>
                  <div className="flex justify-between bg-white/10 px-3 py-1.5 rounded-sm">
                    <span>Cuenta Dedos (1/200 a 19/200):</span>
                    <strong>{otsPrognosis.cd}%</strong>
                  </div>
                  <div className="flex justify-between bg-white/10 px-3 py-1.5 rounded-sm">
                    <span>20/200 a 20/50:</span>
                    <strong>{otsPrognosis.low}%</strong>
                  </div>
                  <div className="flex justify-between bg-white/10 px-3 py-1.5 rounded-sm">
                    <span>Mayor o igual a 20/40:</span>
                    <strong className="text-emerald-400">{otsPrognosis.good}%</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-teal-900/50 rounded-lg border border-teal-700/50 text-[11px] text-teal-200">
              <strong>Conducta en Guardia:</strong> Todo trauma ocular abierto requiere protector rígido ocular sin presión, profilaxis antitetánica, antibióticos sistémicos profilácticos (Ceftriaxona o Moxifloxacino) y cierre quirúrgico de urgencia en quirófano.
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 3: CHEMICAL BURNS */}
      {activeCalculator === 'chemical' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>Clasificación de Quemaduras Químicas (Roper-Hall)</span>
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Isquemia Límbica (Horas de Reloj de Blanqueamiento Escleral): {limbalIschemiaClockHours} horas
              </label>
              <input
                type="range"
                min="0"
                max="12"
                value={limbalIschemiaClockHours}
                onChange={(e) => setLimbalIschemiaClockHours(Number(e.target.value))}
                className="w-full accent-amber-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>0 horas (Sin isquemia)</span>
                <span>3 h (&lt;30%)</span>
                <span>6 h (50%)</span>
                <span>12 horas (360º)</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
              <strong className="block text-slate-900 font-bold">Fundamento Fisiopatológico:</strong>
              <p className="text-slate-600 leading-relaxed">
                El limbo esclerocorneal alberga las células madre del epitelio corneal (limbal stem cells) en las empalizadas de Vogt. Su isquemia ocasiona conjuntivalización corneal, neovascularización, opacidad y melting.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="bg-white rounded-xl border-2 border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Estadificación Clínica y Pronóstico
              </span>
              <div className="mt-2 mb-3">
                <span className={`inline-block px-3 py-1 rounded-md text-base font-extrabold border ${roperHallColor}`}>
                  {roperHallGrade}
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-3">
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Pronóstico Visual:</strong>
                  <p className="text-slate-700 leading-relaxed">{roperHallPrognosis}</p>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <strong className="block text-teal-800 font-bold mb-1">Terapia Médica Coadyuvante de Urgencia:</strong>
                  <ul className="text-slate-700 space-y-1">
                    <li>• <strong>Lavado copioso continuo</strong> hasta pH 7.0-7.4 (Prioridad absoluta).</li>
                    <li>• <strong>Doxiciclina oral 100 mg c/12h</strong> (potente inhibidor de metaloproteinasas/colagenasas).</li>
                    <li>• <strong>Vitamina C oral 1-2 g/día y tópica</strong> (promueve la síntesis de colágeno).</li>
                    <li>• <strong>Corticoides tópicos</strong> los primeros 7-10 días (luego suspender para evitar melting).</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900">
              <strong>Regla de Oro:</strong> En quemaduras químicas, la apariencia blanquecina pálida es un signo de peor pronóstico (necrosis isquémica), a diferencia de la conjuntiva hiperémica roja que indica perfusión vascular intacta.
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 4: VISUAL ACUITY CONVERTER */}
      {activeCalculator === 'visualAcuity' && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-5">
          <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <Eye className="w-5 h-5 text-teal-600" />
            <span>Conversor Interactivo de Agudeza Visual (Snellen / Decimal / LogMAR)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Snellen Decimal (0.05 a 1.2):
              </label>
              <input
                type="number"
                step="0.05"
                min="0.01"
                max="1.5"
                value={vaInputDecimal}
                onChange={(e) => setVaInputDecimal(Number(e.target.value))}
                className="w-full text-base font-bold font-mono py-2 px-3 rounded-lg border border-slate-200 bg-white"
              />
            </div>

            <div className="p-4 bg-teal-50 rounded-xl border border-teal-200 space-y-2">
              <span className="block text-xs font-bold text-teal-800 uppercase tracking-wider">
                Snellen Imperial Pies (20/XX):
              </span>
              <div className="text-2xl font-black text-teal-950 font-mono py-1">
                20 / {calculatedSnellenFeet}
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 space-y-2">
              <span className="block text-xs font-bold text-blue-800 uppercase tracking-wider">
                LogMAR (log of MAR):
              </span>
              <div className="text-2xl font-black text-blue-950 font-mono py-1">
                {calculatedLogMAR}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-1">
            <p>• <strong>20/20 (1.0 decimal)</strong> = 0.0 LogMAR (visión normal estándar).</p>
            <p>• <strong>20/40 (0.5 decimal)</strong> = 0.3 LogMAR (requisito común para conducir).</p>
            <p>• <strong>20/200 (0.1 decimal)</strong> = 1.0 LogMAR (definición habitual de ceguera legal en EEUU/internacional).</p>
          </div>
        </div>
      )}

      {/* CALCULATOR 5: TFSOM-UHHD OCULAR ONCOLOGY */}
      {activeCalculator === 'tfsom' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-purple-700 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-5 h-5 text-purple-600" />
              <span>Estratificación de Riesgo TFSOM-UHHD (Shields)</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Factores de Transformación Maligna de Nevus Coroideo a Melanoma
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seleccione los hallazgos presentes en la exploración de fondo de ojo, OCT y ecografía:
            </p>

            <div className="space-y-2.5 pt-2">
              <label className="flex items-start space-x-3 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tfsomThickness}
                  onChange={(e) => setTfsomThickness(e.target.checked)}
                  className="mt-0.5 rounded text-purple-600 focus:ring-purple-500"
                />
                <div className="text-xs">
                  <strong className="block text-slate-900 font-bold">T - Thickness (Grosor ecográfico &gt; 2.0 mm)</strong>
                  <span className="text-slate-500">Elevación ecográfica confirmada en modo A/B</span>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tfsomFluid}
                  onChange={(e) => setTfsomFluid(e.target.checked)}
                  className="mt-0.5 rounded text-purple-600 focus:ring-purple-500"
                />
                <div className="text-xs">
                  <strong className="block text-slate-900 font-bold">F - Fluid (Fluido subretiniano foveal o perilesional)</strong>
                  <span className="text-slate-500">Visualizado en SD-OCT como desprendimiento seroso</span>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tfsomSymptoms}
                  onChange={(e) => setTfsomSymptoms(e.target.checked)}
                  className="mt-0.5 rounded text-purple-600 focus:ring-purple-500"
                />
                <div className="text-xs">
                  <strong className="block text-slate-900 font-bold">S - Symptoms (Síntomas visuales)</strong>
                  <span className="text-slate-500">Caída de agudeza visual, fotopsias recurrentes o escotoma</span>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tfsomOrange}
                  onChange={(e) => setTfsomOrange(e.target.checked)}
                  className="mt-0.5 rounded text-purple-600 focus:ring-purple-500"
                />
                <div className="text-xs">
                  <strong className="block text-slate-900 font-bold">O - Orange pigment (Pigmento naranja superficial)</strong>
                  <span className="text-slate-500">Cúmulos de lipofuscina brillante sobre la superficie tumoral</span>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tfsomMargin}
                  onChange={(e) => setTfsomMargin(e.target.checked)}
                  className="mt-0.5 rounded text-purple-600 focus:ring-purple-500"
                />
                <div className="text-xs">
                  <strong className="block text-slate-900 font-bold">M - Margin (Margen a &le; 3.0 mm de la papila óptica)</strong>
                  <span className="text-slate-500">Lesión yuxtapapilar o cercana a la cabeza del nervio óptico</span>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tfsomUltrasound}
                  onChange={(e) => setTfsomUltrasound(e.target.checked)}
                  className="mt-0.5 rounded text-purple-600 focus:ring-purple-500"
                />
                <div className="text-xs">
                  <strong className="block text-slate-900 font-bold">UH - Ultrasound Hollowness (Vaciamiento acústico en ecografía)</strong>
                  <span className="text-slate-500">Reflectividad interna baja-media (&lt;60%) con ángulo kappa regular</span>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tfsomNoHalo}
                  onChange={(e) => setTfsomNoHalo(e.target.checked)}
                  className="mt-0.5 rounded text-purple-600 focus:ring-purple-500"
                />
                <div className="text-xs">
                  <strong className="block text-slate-900 font-bold">H - Halo absent (Ausencia de halo amelanótico periférico)</strong>
                  <span className="text-slate-500">El halo circular traduce estabilidad benigna; su ausencia es de riesgo</span>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tfsomNoDrusen}
                  onChange={(e) => setTfsomNoDrusen(e.target.checked)}
                  className="mt-0.5 rounded text-purple-600 focus:ring-purple-500"
                />
                <div className="text-xs">
                  <strong className="block text-slate-900 font-bold">D - Drusen absent (Ausencia de drusas crónicas)</strong>
                  <span className="text-slate-500">Las drusas indican cronicidad benigna; su ausencia sugiere lesión de crecimiento reciente</span>
                </div>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Cálculo de Factores de Riesgo
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-900 border border-purple-200">
                  {tfsomScore} de 8 Factores
                </span>
              </div>

              {/* Prognosis display */}
              <div className={`p-4 rounded-xl border-2 text-center space-y-1 my-3 ${
                tfsomScore >= 3
                  ? 'bg-rose-50 border-rose-500 text-rose-950'
                  : tfsomScore >= 1
                  ? 'bg-amber-50 border-amber-400 text-amber-950'
                  : 'bg-emerald-50 border-emerald-400 text-emerald-950'
              }`}>
                <span className="text-xs font-extrabold uppercase tracking-wider block">
                  {tfsomScore >= 3 ? '🚨 ALTO RIESGO (Sospecha de Melanoma)' : tfsomScore >= 1 ? '⚠️ RIESGO INTERMEDIO (Nevus Sospechoso)' : '✓ BAJO RIESGO (Nevus Coroideo Típico)'}
                </span>
                <div className="text-2xl font-black">
                  {tfsomScore === 0 ? '1 - 3%' : tfsomScore === 1 ? '11%' : tfsomScore === 2 ? '22%' : tfsomScore === 3 ? '34%' : '> 50%'}
                </div>
                <span className="text-[11px] font-medium opacity-90 block">
                  Probabilidad estimada de transformación / crecimiento a 5 años
                </span>
              </div>

              {/* Conducta recomendada */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                  <strong className="block text-slate-900 font-bold">Conducta Clínica Protocolizada:</strong>
                  <p className="text-slate-700 leading-relaxed">
                    {tfsomScore >= 3
                      ? 'Derivación urgente a centro terciario de Oncología Ocular. Evaluar ecografía estandarizada y considerar tratamiento activo (Braquiterapia con placa I-125 o termoterapia transpupilar TTT).'
                      : tfsomScore >= 1
                      ? 'Nevus indeterminado con riesgo de crecimiento. Control estricto cada 3 a 4 meses con retinografía digital comparativa, SD-OCT macular y ecografía ocular.'
                      : 'Nevus coroideo benigno estable. Control rutinario anual con fotografía de fondo de ojo. Instruir al paciente en uso de rejilla de Amsler ante síntomas de alarma.'}
                  </p>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 text-purple-950 space-y-1">
                  <strong className="block font-bold">Perla de Examen de Residencia & Fellow:</strong>
                  <p className="leading-relaxed">
                    La regla TFSOM fue actualizada a TFSOM-UHHD por Carol y Jerry Shields (Wills Eye Hospital). Las drusas son un factor de protección relativo (indican cronicidad); el pigmento naranja (lipofuscina) es el biomarcador biomicroscópico más correlacionado con crecimiento maligno activo.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setTfsomThickness(false);
                setTfsomFluid(false);
                setTfsomSymptoms(false);
                setTfsomOrange(false);
                setTfsomMargin(false);
                setTfsomUltrasound(false);
                setTfsomNoHalo(false);
                setTfsomNoDrusen(false);
              }}
              className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center space-x-1 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer Factores</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
