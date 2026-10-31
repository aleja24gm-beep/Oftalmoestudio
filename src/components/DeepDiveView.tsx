import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Stethoscope, 
  Eye, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle,
  Pill,
  HelpCircle,
  Activity,
  Layers,
  Award,
  GraduationCap,
  FlaskConical,
  Scissors,
  FileCheck2,
  AlertOctagon,
  Scale,
  Zap,
  Bookmark,
  Share2
} from 'lucide-react';
import { TopicDeepDive, SubspecialtyId } from '../types/ophthalmology';
import { TOPICS_DATA } from '../data/topicsData';
import { SUBSPECIALTY_MODULES } from '../data/modulesData';
import { getDeepDiveAPI } from '../services/geminiService';

interface DeepDiveViewProps {
  initialSubspecialty?: SubspecialtyId | 'all';
  onOpenQuestionInBank?: (topic: string) => void;
}

export const DeepDiveView: React.FC<DeepDiveViewProps> = ({
  initialSubspecialty = 'cornea',
  onOpenQuestionInBank
}) => {
  const [selectedSubspecialty, setSelectedSubspecialty] = useState<SubspecialtyId | 'all'>(initialSubspecialty);
  const [selectedTopic, setSelectedTopic] = useState<TopicDeepDive>(() => {
    if (initialSubspecialty && initialSubspecialty !== 'all') {
      const match = TOPICS_DATA.find((t) => t.subspecialtyId === initialSubspecialty);
      if (match) return match;
    }
    return TOPICS_DATA[0];
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [customTopicInput, setCustomTopicInput] = useState<string>('');
  const [isLoadingDeepDive, setIsLoadingDeepDive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<
    'all' | 'overview' | 'exam_tips' | 'semiology' | 'workup_diff' | 'treatment' | 'landmark_ebm'
  >('overview');

  // Sync when initialSubspecialty prop changes (e.g., navigation from ModulesView)
  React.useEffect(() => {
    if (initialSubspecialty) {
      setSelectedSubspecialty(initialSubspecialty);
      if (initialSubspecialty !== 'all') {
        const match = TOPICS_DATA.find((t) => t.subspecialtyId === initialSubspecialty);
        if (match) setSelectedTopic(match);
      }
    }
  }, [initialSubspecialty]);

  // When selectedSubspecialty changes, select the first topic of that subspecialty
  React.useEffect(() => {
    if (selectedSubspecialty !== 'all') {
      if (selectedTopic.subspecialtyId !== selectedSubspecialty) {
        const firstInSub = TOPICS_DATA.find((t) => t.subspecialtyId === selectedSubspecialty);
        if (firstInSub) {
          setSelectedTopic(firstInSub);
        }
      }
    }
  }, [selectedSubspecialty, selectedTopic.subspecialtyId]);

  // Filter topics
  const filteredTopics = TOPICS_DATA.filter((t) => {
    if (selectedSubspecialty !== 'all' && t.subspecialtyId !== selectedSubspecialty) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.definitionAndEpidemiology.toLowerCase().includes(q) ||
        t.anatomyAndPathophysiology.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleExploreCustomTopic = async () => {
    if (!customTopicInput.trim()) return;
    setIsLoadingDeepDive(true);
    try {
      const res = await getDeepDiveAPI(
        customTopicInput,
        selectedSubspecialty === 'all' ? 'Oftalmología' : selectedSubspecialty
      );
      if (res.data) {
        setSelectedTopic(res.data);
        setActiveTab('overview');
      }
    } catch (err) {
      console.error('Error fetching deep dive:', err);
    } finally {
      setIsLoadingDeepDive(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header bar with search and subspecialties */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2 text-teal-800 text-xs font-extrabold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-amber-500" />
            <span>PROFUNDIZACIÓN CLÍNICA Y TIPS PARA EXÁMENES DE RESIDENCIA Y FELLOWSHIP</span>
          </div>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 font-semibold border border-teal-200">
            Guías AAO BCSC & Evidencia Clase I
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar enfermedad, signo patognomónico o ensayo (ej. SCUT, OHTS, CATT, Belin-Ambrósio, ICROP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Custom topic prompt */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Profundizar cualquier enfermedad..."
              value={customTopicInput}
              onChange={(e) => setCustomTopicInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleExploreCustomTopic()}
              className="w-52 sm:w-64 text-xs sm:text-sm py-2 px-3 rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
            />
            <button
              onClick={handleExploreCustomTopic}
              disabled={isLoadingDeepDive || !customTopicInput.trim()}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isLoadingDeepDive ? 'Analizando...' : 'Profundizar'}</span>
            </button>
          </div>
        </div>

        {/* Subspecialties filter pills (all 10 modules visible) */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setSelectedSubspecialty('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedSubspecialty === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos los Módulos ({TOPICS_DATA.length})
          </button>
          {SUBSPECIALTY_MODULES.map((m) => {
            const count = TOPICS_DATA.filter((t) => t.subspecialtyId === m.id).length;
            const isSelected = selectedSubspecialty === m.id;
            const isOcularOnco = m.id === 'oncologia';
            return (
              <button
                key={m.id}
                onClick={() => setSelectedSubspecialty(m.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? isOcularOnco
                      ? 'bg-rose-700 text-white shadow-xs ring-2 ring-rose-400'
                      : 'bg-teal-600 text-white shadow-xs'
                    : isOcularOnco
                      ? 'bg-rose-50 text-rose-800 border border-rose-300 hover:bg-rose-100 font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {isOcularOnco && <Sparkles className="w-3 h-3 text-rose-500" />}
                <span>{m.shortName}</span>
                {count > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected
                        ? isOcularOnco ? 'bg-rose-900 text-rose-100' : 'bg-teal-800 text-teal-100'
                        : isOcularOnco ? 'bg-rose-200 text-rose-900' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Left selector, Right viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Topic Selector List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Enfermedades Oftalmológicas ({filteredTopics.length})
            </h3>
            <span className="text-[11px] text-teal-700 font-semibold">Residencia & Fellow</span>
          </div>

          <div className="space-y-2 max-h-[820px] overflow-y-auto pr-1">
            {filteredTopics.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              const moduleInfo = SUBSPECIALTY_MODULES.find(m => m.id === topic.subspecialtyId);
              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-teal-500 bg-teal-50/50 shadow-xs ring-1 ring-teal-500'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-100/70 px-2 py-0.5 rounded-sm">
                      {moduleInfo?.shortName || topic.subspecialtyId}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-teal-600 translate-x-1' : 'text-slate-400'}`} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                    {topic.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {topic.summary}
                  </p>
                  {topic.residencyAndFellowExamTips && topic.residencyAndFellowExamTips.length > 0 && (
                    <div className="mt-2.5 flex items-center space-x-1 text-[11px] text-amber-700 font-semibold">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                      <span>{topic.residencyAndFellowExamTips.length} Tips clave de examen</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Topic Deep-Dive Viewer */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            {/* Top Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 p-6 text-white">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30 uppercase tracking-wide">
                  Área: {SUBSPECIALTY_MODULES.find(m => m.id === selectedTopic.subspecialtyId)?.name || selectedTopic.subspecialtyId}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 flex items-center space-x-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Nivel Residencia & Fellow BCSC</span>
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                {selectedTopic.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {selectedTopic.summary}
              </p>

              {onOpenQuestionInBank && (
                <div className="mt-4 pt-3 border-t border-teal-900/60 flex items-center justify-between">
                  <span className="text-xs text-teal-300 font-medium">¿Listo para evaluarte?</span>
                  <button
                    onClick={() => onOpenQuestionInBank(selectedTopic.title)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 text-xs font-semibold border border-teal-400/30 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-teal-300" />
                    <span>Practicar preguntas de este tema</span>
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Tabs Bar inside topic */}
            <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-200 flex space-x-1.5 overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap flex items-center space-x-1.5 ${
                  activeTab === 'overview'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 bg-white border border-slate-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>📋 Patología Completa</span>
              </button>

              <button
                onClick={() => setActiveTab('exam_tips')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap flex items-center space-x-1.5 ${
                  activeTab === 'exam_tips'
                    ? 'bg-amber-600 text-white shadow-xs ring-1 ring-amber-600'
                    : 'text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                <span>🎯 Tips de Examen de Fellow</span>
              </button>

              <button
                onClick={() => setActiveTab('semiology')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center space-x-1.5 ${
                  activeTab === 'semiology'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>🔬 Fisiopatología & Semiología</span>
              </button>

              <button
                onClick={() => setActiveTab('workup_diff')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center space-x-1.5 ${
                  activeTab === 'workup_diff'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>📊 Diagnóstico & Diferencial</span>
              </button>

              <button
                onClick={() => setActiveTab('treatment')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center space-x-1.5 ${
                  activeTab === 'treatment'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                }`}
              >
                <Pill className="w-3.5 h-3.5" />
                <span>💊 Tratamiento & Fármacos</span>
              </button>

              <button
                onClick={() => setActiveTab('landmark_ebm')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center space-x-1.5 ${
                  activeTab === 'landmark_ebm'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>⚖️ Ensayos Landmark (EBM)</span>
              </button>

              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                }`}
              >
                Ver Todo Integrado
              </button>
            </div>

            {/* TAB CONTENTS */}
            <div className="p-6 space-y-7">
              {/* ========================================================================= */}
              {/* SECCIÓN ESTELAR: TIPS INDISPENSABLES PARA EXÁMENES DE RESIDENCIA Y FELLOW */}
              {/* ========================================================================= */}
              {(activeTab === 'exam_tips' || activeTab === 'all') && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="bg-gradient-to-br from-amber-50 via-orange-50/40 to-amber-50 p-5 rounded-xl border-2 border-amber-400 shadow-xs space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/80 pb-3">
                      <div className="flex items-center space-x-2 text-amber-900">
                        <GraduationCap className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wide">
                            TIPS CLAVE PARA EXÁMENES DE RESIDENCIA Y FELLOWSHIP
                          </h4>
                          <p className="text-xs text-amber-800">
                            Puntos fijos de examen, asociaciones patognomónicas, trampas de tribunal y cifras de corte
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-950 font-bold text-xs">
                        ICO / EBOD / Boards
                      </span>
                    </div>

                    {/* High Yield Pearl Card */}
                    <div className="p-4 bg-white/95 rounded-xl border border-amber-300 shadow-2xs space-y-1.5">
                      <div className="flex items-center space-x-1.5 text-amber-800 font-extrabold text-xs uppercase tracking-wide">
                        <Zap className="w-4 h-4 text-amber-500" />
                        <span>Perla de Máximo Rendimiento (Board Pearl)</span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                        {selectedTopic.highYieldPearl}
                      </p>
                    </div>

                    {/* Categorized Exam Tips Grid */}
                    {selectedTopic.residencyAndFellowExamTips && selectedTopic.residencyAndFellowExamTips.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center space-x-1.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-600" />
                          <span>Tips Canónicos de Evaluación Oral y Escrita</span>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          {selectedTopic.residencyAndFellowExamTips.map((tip, idx) => {
                            // Badge styles by category
                            const isTrap = tip.category === 'Trampa de Tribunal';
                            const isPathognomonic = tip.category === 'Asociación Patognomónica';
                            const isNumber = tip.category === 'Cifra Clave de Corte';
                            const isMnemo = tip.category === 'Mnemotecnia';

                            return (
                              <div
                                key={idx}
                                className="bg-white rounded-xl border border-amber-200/90 p-4 shadow-2xs space-y-2 hover:border-amber-400 transition-colors"
                              >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center space-x-1.5">
                                    <span className="text-amber-500 font-extrabold">★</span>
                                    <span>{tip.title}</span>
                                  </h5>
                                  <span
                                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                                      isTrap
                                        ? 'bg-rose-100 text-rose-800 border border-rose-200'
                                        : isPathognomonic
                                        ? 'bg-purple-100 text-purple-800 border border-purple-200'
                                        : isNumber
                                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                        : isMnemo
                                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                                    }`}
                                  >
                                    {tip.category}
                                  </span>
                                </div>

                                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-medium">
                                  {tip.description}
                                </p>

                                {tip.trapToAvoid && (
                                  <div className="p-2.5 bg-rose-50/80 rounded-lg border border-rose-200 text-xs text-rose-950 flex items-start space-x-2">
                                    <AlertOctagon className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                      <strong className="font-bold text-rose-900">Trampa a evitar en el examen: </strong>
                                      <span className="font-medium">{tip.trapToAvoid}</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Fellowship Key Points bullet list */}
                    {selectedTopic.fellowshipKeyPoints && selectedTopic.fellowshipKeyPoints.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-amber-200/80">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                          Puntos de Nivel Avanzado para Exámenes Orales de Fellow:
                        </div>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                          {selectedTopic.fellowshipKeyPoints.map((pt, i) => (
                            <li key={i} className="flex items-start space-x-2 bg-white/80 p-2.5 rounded-lg border border-amber-100">
                              <span className="text-amber-600 font-bold">›</span>
                              <span className="leading-relaxed font-medium">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Oral Board Simulation Case */}
                  {selectedTopic.fellowOralBoardQuestions && selectedTopic.fellowOralBoardQuestions.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                        <FileCheck2 className="w-4 h-4 text-teal-600" />
                        <span>Simulacro de Caso Clínico Oral de Tribunal (Oral Boards)</span>
                      </div>

                      {selectedTopic.fellowOralBoardQuestions.map((ob, idx) => (
                        <div key={idx} className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs space-y-3">
                          <div className="p-3 bg-slate-900 text-white rounded-lg text-xs sm:text-sm font-bold flex items-start space-x-2">
                            <span className="text-teal-400 font-mono text-sm">P:</span>
                            <span className="leading-relaxed">{ob.question}</span>
                          </div>

                          <div className="p-3.5 bg-emerald-50/80 rounded-lg border border-emerald-200 text-xs sm:text-sm">
                            <strong className="block text-emerald-950 font-bold mb-1 flex items-center space-x-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>Respuesta Modelo Fundamentada del Aspirante:</span>
                            </strong>
                            <p className="text-slate-900 leading-relaxed font-medium whitespace-pre-line">{ob.answer}</p>
                          </div>

                          <div className="p-3.5 bg-rose-50/80 rounded-lg border border-rose-200 text-xs sm:text-sm">
                            <strong className="block text-rose-950 font-bold mb-1 flex items-center space-x-1.5">
                              <AlertOctagon className="w-4 h-4 text-rose-600" />
                              <span>Trampa Frecuente del Tribunal (Error Fatal a Evitar):</span>
                            </strong>
                            <p className="text-rose-950 font-semibold leading-relaxed">{ob.trap}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ========================================================================= */}
              {/* INFORMACIÓN COMPLETA DE LA ENFERMEDAD: DEFINICIÓN, ANATOMÍA & FISIOPATOLOGÍA */}
              {/* ========================================================================= */}
              {(activeTab === 'overview' || activeTab === 'semiology' || activeTab === 'all') && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  {/* Definición y Epidemiología */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                      <BookOpen className="w-4 h-4 text-teal-600" />
                      <span>Definición Formal y Epidemiología</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {selectedTopic.definitionAndEpidemiology}
                    </p>
                  </div>

                  {/* Anatomía y Fisiopatología profunda */}
                  <div className="bg-gradient-to-br from-teal-50/60 to-slate-50 p-5 rounded-xl border border-teal-200 space-y-2.5">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-teal-900">
                      <Activity className="w-4 h-4 text-teal-700" />
                      <span>Bases Anatómicas, Fisiopatología y Mecanismos Moleculares</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium whitespace-pre-line bg-white/80 p-4 rounded-lg border border-teal-100">
                      {selectedTopic.anatomyAndPathophysiology}
                    </div>
                  </div>

                  {/* Exploración Semiológica detallada */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                      <Eye className="w-4 h-4 text-teal-600" />
                      <span>Semiología y Exploración Oftalmológica Protocolizada</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                        <strong className="block text-slate-900 font-bold flex items-center space-x-1">
                          <span>🔬 Biomicroscopía en Lámpara de Hendidura:</span>
                        </strong>
                        <p className="text-slate-700 leading-relaxed font-medium">{selectedTopic.clinicalExamination.biomicroscopy}</p>
                      </div>

                      {selectedTopic.clinicalExamination.fundus && (
                        <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                          <strong className="block text-slate-900 font-bold flex items-center space-x-1">
                            <span>👁️ Fondoscopia y Polo Posterior:</span>
                          </strong>
                          <p className="text-slate-700 leading-relaxed font-medium">{selectedTopic.clinicalExamination.fundus}</p>
                        </div>
                      )}
                    </div>

                    {selectedTopic.clinicalExamination.specialSigns && (
                      <div className="p-3.5 bg-amber-50/60 rounded-lg border border-amber-200 text-xs sm:text-sm">
                        <strong className="block text-amber-950 font-bold mb-1 flex items-center space-x-1">
                          <Zap className="w-3.5 h-3.5 text-amber-600 mr-1" />
                          <span>Signos Epónimos y Semiológicos Especiales:</span>
                        </strong>
                        <p className="text-amber-950 leading-relaxed font-medium whitespace-pre-line">
                          {selectedTopic.clinicalExamination.specialSigns}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* PRUEBAS DIAGNÓSTICAS Y DIAGNÓSTICO DIFERENCIAL */}
              {/* ========================================================================= */}
              {(activeTab === 'overview' || activeTab === 'workup_diff' || activeTab === 'all') && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  {/* Pruebas Diagnósticas */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                      <Layers className="w-4 h-4 text-teal-600" />
                      <span>Protocolo de Pruebas Diagnósticas e Interpretación</span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedTopic.diagnosticWorkup.map((dw, idx) => (
                        <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <strong className="text-teal-950 font-bold min-w-[200px] flex items-center space-x-1.5">
                            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                            <span>{dw.test}</span>
                          </strong>
                          <span className="text-slate-700 font-medium leading-relaxed flex-1">
                            {dw.findings}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Diagnóstico Diferencial Estructurado */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                      <HelpCircle className="w-4 h-4 text-teal-600" />
                      <span>Diagnóstico Diferencial Sistemático (Condición vs Clave de Distinción)</span>
                    </div>

                    <div className="space-y-2">
                      {selectedTopic.differentialDiagnosis.map((dd, idx) => (
                        <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
                          <div className="flex items-center justify-between">
                            <strong className="text-slate-900 font-bold">vs. {dd.condition}</strong>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-slate-100 text-slate-600">
                              Diferencial
                            </span>
                          </div>
                          <p className="text-slate-700 leading-relaxed font-medium">
                            <strong className="text-teal-800">Clave de distinción: </strong>
                            {dd.distinction}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* TRATAMIENTO ESCALONADO, FÁRMACOS Y APLICACIÓN PRÁCTICA */}
              {/* ========================================================================= */}
              {(activeTab === 'overview' || activeTab === 'treatment' || activeTab === 'all') && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  {/* Manejo Médico y Quirúrgico */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                      <Pill className="w-4 h-4 text-teal-600" />
                      <span>Manejo Clínico y Quirúrgico Escalonado</span>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-200 space-y-2">
                        <strong className="block text-teal-950 font-bold uppercase tracking-wide">
                          💊 1. Tratamiento Médico y Farmacológico Protocolizado:
                        </strong>
                        <p className="text-slate-800 leading-relaxed font-medium whitespace-pre-line">
                          {selectedTopic.steppedManagement.medical}
                        </p>
                      </div>

                      <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200 space-y-2">
                        <strong className="block text-blue-950 font-bold uppercase tracking-wide">
                          🔪 2. Manejo Quirúrgico, Técnicas y Criterios de Intervención:
                        </strong>
                        <p className="text-slate-800 leading-relaxed font-medium whitespace-pre-line">
                          {selectedTopic.steppedManagement.surgical}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fármacos de elección y alertas */}
                  {selectedTopic.keyDrugs && selectedTopic.keyDrugs.length > 0 && (
                    <div className="space-y-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center space-x-1.5">
                        <Pill className="w-4 h-4 text-teal-600" />
                        <span>Fármacos de Elección, Posología Exacta y Alertas Toxicológicas:</span>
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                        {selectedTopic.keyDrugs.map((kd, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                            <strong className="block text-slate-900 font-bold">{kd.name}</strong>
                            <span className="block text-slate-600 font-mono text-[11px]">{kd.dose}</span>
                            <span className="block text-rose-700 text-[11px] leading-tight font-semibold pt-1">
                              ⚠️ {kd.warning}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Aplicación Clínica Práctica */}
                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-5 border-2 border-teal-500 shadow-xs space-y-2.5">
                    <div className="flex items-center space-x-2 font-extrabold text-teal-950 text-sm">
                      <Stethoscope className="w-5 h-5 text-teal-700" />
                      <span className="uppercase tracking-wide">
                        APLICACIÓN CLÍNICA PRÁCTICA (¿Qué hacer en consulta o guardia?)
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-teal-950 leading-relaxed whitespace-pre-line font-medium">
                      {selectedTopic.clinicalApplicationPractical}
                    </p>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* ENSAYOS LANDMARK (EBM), HISTOPATOLOGÍA Y PERLAS QUIRÚRGICAS */}
              {/* ========================================================================= */}
              {(activeTab === 'overview' || activeTab === 'landmark_ebm' || activeTab === 'all') && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  {/* Landmark Trials */}
                  {selectedTopic.landmarkTrials && selectedTopic.landmarkTrials.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                        <Scale className="w-4 h-4 text-teal-600" />
                        <span>Ensayos Clínicos Multicéntricos Landmark (Medicina Basada en Evidencia)</span>
                      </div>

                      <div className="space-y-3">
                        {selectedTopic.landmarkTrials.map((trial, idx) => (
                          <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <strong className="text-teal-950 font-extrabold text-sm">{trial.name}</strong>
                              <span className="px-2 py-0.5 rounded-sm bg-teal-100 text-teal-800 text-[11px] font-mono font-bold">
                                {trial.year}
                              </span>
                            </div>
                            <p className="text-slate-800 leading-relaxed font-medium">
                              <strong className="text-slate-900">Conclusión Capital:</strong> {trial.conclusion}
                            </p>
                            <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-950">
                              <strong className="text-amber-900">Por qué lo preguntan en los exámenes de Fellow:</strong> {trial.fellowshipRelevance}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Histopatología y Genética */}
                  {selectedTopic.histopathologyAndGenetics && (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                        <FlaskConical className="w-4 h-4 text-purple-600" />
                        <span>Histopatología, Tinciones Especiales y Genética Molecular</span>
                      </div>

                      <div className="bg-purple-50/60 p-4 rounded-xl border border-purple-200 text-xs sm:text-sm space-y-1.5">
                        <strong className="block text-purple-950 font-bold">
                          Hallazgos Inmunohistoquímicos y Mutaciones Clave:
                        </strong>
                        <p className="text-slate-800 leading-relaxed font-medium whitespace-pre-line">
                          {selectedTopic.histopathologyAndGenetics}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Perlas Quirúrgicas */}
                  {selectedTopic.surgicalPearls && selectedTopic.surgicalPearls.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                        <Scissors className="w-4 h-4 text-blue-600" />
                        <span>Perlas Quirúrgicas Técnicas de Subespecialidad</span>
                      </div>

                      <div className="space-y-2">
                        {selectedTopic.surgicalPearls.map((pearl, idx) => (
                          <div key={idx} className="p-3 bg-blue-50/60 rounded-xl border border-blue-200 text-xs sm:text-sm flex items-start space-x-2.5">
                            <span className="text-blue-600 font-bold">›</span>
                            <span className="text-slate-800 leading-relaxed font-medium">{pearl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
