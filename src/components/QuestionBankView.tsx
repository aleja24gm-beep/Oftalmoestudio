import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  BookmarkCheck, 
  ArrowRight, 
  RotateCcw, 
  Plus, 
  Search, 
  Sparkles, 
  Stethoscope, 
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Filter
} from 'lucide-react';
import { Question, SubspecialtyId, DifficultyLevel } from '../types/ophthalmology';
import { SUBSPECIALTY_MODULES } from '../data/modulesData';

interface QuestionBankViewProps {
  questions: Question[];
  selectedSubspecialty: SubspecialtyId | 'all';
  setSelectedSubspecialty: (id: SubspecialtyId | 'all') => void;
  bookmarkedIds: string[];
  onToggleBookmark: (questionId: string) => void;
  onRecordAnswer: (questionId: string, selectedIndex: number, isCorrect: boolean) => void;
  history: Array<{ questionId: string; selectedIndex: number; isCorrect: boolean }>;
  onOpenAddQuestionModal: () => void;
  onOpenAskConsultationWithTopic: (topic: string, subspecialty: string) => void;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({
  questions,
  selectedSubspecialty,
  setSelectedSubspecialty,
  bookmarkedIds,
  onToggleBookmark,
  onRecordAnswer,
  history,
  onOpenAddQuestionModal,
  onOpenAskConsultationWithTopic
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unanswered' | 'correct' | 'incorrect' | 'bookmarked'>('all');

  // History lookup map
  const historyMap = useMemo(() => {
    const map = new Map<string, { selectedIndex: number; isCorrect: boolean }>();
    history.forEach((h) => map.set(h.questionId, h));
    return map;
  }, [history]);

  // Filtered list of questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      // Subspecialty match
      if (selectedSubspecialty !== 'all' && q.subspecialtyId !== selectedSubspecialty) {
        return false;
      }
      // Difficulty match
      if (difficultyFilter !== 'all' && q.difficulty !== difficultyFilter) {
        return false;
      }
      // Status match
      const h = historyMap.get(q.id);
      if (statusFilter === 'unanswered' && h) return false;
      if (statusFilter === 'correct' && (!h || !h.isCorrect)) return false;
      if (statusFilter === 'incorrect' && (!h || h.isCorrect)) return false;
      if (statusFilter === 'bookmarked' && !bookmarkedIds.includes(q.id)) return false;

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inTopic = q.topic.toLowerCase().includes(query);
        const inVignette = q.clinicalVignette.toLowerCase().includes(query);
        const inText = q.questionText.toLowerCase().includes(query);
        const inTags = q.tags.some((t) => t.toLowerCase().includes(query));
        if (!inTopic && !inVignette && !inText && !inTags) return false;
      }

      return true;
    });
  }, [questions, selectedSubspecialty, difficultyFilter, statusFilter, searchQuery, historyMap, bookmarkedIds]);

  // Safety clamp index
  const safeIndex = Math.min(currentQuestionIndex, Math.max(0, filteredQuestions.length - 1));
  const activeQuestion = filteredQuestions[safeIndex] || null;

  // Restore answer state if question was already answered previously
  React.useEffect(() => {
    if (activeQuestion) {
      const prev = historyMap.get(activeQuestion.id);
      if (prev) {
        setSelectedOption(prev.selectedIndex);
        setHasAnswered(true);
      } else {
        setSelectedOption(null);
        setHasAnswered(false);
      }
    }
  }, [activeQuestion, historyMap]);

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);
    const isCorrect = index === activeQuestion?.correctIndex;
    if (activeQuestion) {
      onRecordAnswer(activeQuestion.id, index, isCorrect);
    }
  };

  const handleNextQuestion = () => {
    if (safeIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(safeIndex + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    }
  };

  const handlePrevQuestion = () => {
    if (safeIndex > 0) {
      setCurrentQuestionIndex(safeIndex - 1);
      setSelectedOption(null);
      setHasAnswered(false);
    }
  };

  const handleResetCurrent = () => {
    setSelectedOption(null);
    setHasAnswered(false);
  };

  const isBookmarked = activeQuestion ? bookmarkedIds.includes(activeQuestion.id) : false;
  const currentSubspecialty = activeQuestion
    ? SUBSPECIALTY_MODULES.find((m) => m.id === activeQuestion.subspecialtyId)
    : null;

  return (
    <div className="space-y-6">
      {/* Header controls & Filters Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-4">
        {/* Top search & Add question row */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por patología, fármaco, síntoma (ej. Acanthamoeba, EVS, OACR, pupilas)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentQuestionIndex(0);
              }}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenAddQuestionModal}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Crear Pregunta</span>
            </button>
          </div>
        </div>

        {/* Subspecialties filter tags (all 10 modules fully visible) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
              <Filter className="w-3.5 h-3.5 text-teal-600" />
              <span>Filtrar por Módulo Oftalmológico ({SUBSPECIALTY_MODULES.length} Especialidades):</span>
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {filteredQuestions.length} {filteredQuestions.length === 1 ? 'caso' : 'casos'} disponibles
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => {
                setSelectedSubspecialty('all');
                setCurrentQuestionIndex(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center space-x-1.5 ${
                selectedSubspecialty === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <span>Todos los Módulos</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                selectedSubspecialty === 'all' ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                {questions.length}
              </span>
            </button>
            {SUBSPECIALTY_MODULES.map((mod) => {
              const qCount = questions.filter((q) => q.subspecialtyId === mod.id).length;
              const isSelected = selectedSubspecialty === mod.id;
              const isOcularOnco = mod.id === 'oncologia';
              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    setSelectedSubspecialty(mod.id);
                    setCurrentQuestionIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                    isSelected
                      ? isOcularOnco
                        ? 'bg-rose-700 text-white shadow-xs ring-2 ring-rose-400'
                        : 'bg-teal-600 text-white shadow-xs'
                      : isOcularOnco
                        ? 'bg-rose-50 text-rose-800 border border-rose-300 hover:bg-rose-100'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {isOcularOnco && <Sparkles className="w-3 h-3 text-rose-400" />}
                  <span>{mod.shortName}</span>
                  {qCount > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected
                          ? isOcularOnco ? 'bg-rose-900 text-rose-100' : 'bg-teal-800 text-teal-100'
                          : isOcularOnco ? 'bg-rose-200 text-rose-900' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {qCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filters: Difficulty and Status */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center space-x-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500 font-medium">Dificultad:</span>
            <select
              value={difficultyFilter}
              onChange={(e) => {
                setDifficultyFilter(e.target.value);
                setCurrentQuestionIndex(0);
              }}
              className="py-1 px-2 rounded-md border border-slate-200 text-xs text-slate-700 bg-white focus:outline-hidden focus:ring-1 focus:ring-teal-500"
            >
              <option value="all">Todas las dificultades</option>
              <option value="R1 - Inicial">R1 - Inicial</option>
              <option value="R2/R3 - Intermedio">R2/R3 - Intermedio</option>
              <option value="R4/Fellow - Avanzado">R4/Fellow - Avanzado</option>
            </select>
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="text-slate-500 font-medium">Estado:</span>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as any);
                setCurrentQuestionIndex(0);
              }}
              className="py-1 px-2 rounded-md border border-slate-200 text-xs text-slate-700 bg-white focus:outline-hidden focus:ring-1 focus:ring-teal-500"
            >
              <option value="all">Todos los estados</option>
              <option value="unanswered">Pendientes</option>
              <option value="correct">Acertadas</option>
              <option value="incorrect">Falladas para repasar</option>
              <option value="bookmarked">Favoritas marcadas</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Question Display or Empty State */}
      {!activeQuestion ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-xs">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1">
            No se encontraron preguntas con los filtros seleccionados
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
            Prueba a seleccionar otro módulo oftalmológico, borrar el término de búsqueda o restablecer los filtros de estado.
          </p>
          <button
            onClick={() => {
              setSelectedSubspecialty('all');
              setDifficultyFilter('all');
              setStatusFilter('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg text-xs font-semibold hover:bg-teal-700 transition-colors"
          >
            Restablecer todos los filtros
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Card Top Sub-Header */}
          <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-teal-100 text-teal-800 border border-teal-200">
                {currentSubspecialty?.shortName || activeQuestion.subspecialtyId}
              </span>
              <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-200/80 text-slate-700">
                {activeQuestion.difficulty}
              </span>
              {activeQuestion.isCustom && (
                <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
                  Caso Propio del Residente
                </span>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs text-slate-500 font-medium">
                Caso {safeIndex + 1} de {filteredQuestions.length}
              </span>
              <button
                onClick={() => onToggleBookmark(activeQuestion.id)}
                className={`p-1.5 rounded-lg border transition-colors ${
                  isBookmarked
                    ? 'bg-amber-50 text-amber-600 border-amber-300'
                    : 'bg-white text-slate-400 border-slate-200 hover:text-slate-600'
                }`}
                title={isBookmarked ? 'Quitar de guardadas' : 'Guardar en favoritas'}
              >
                {isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Topic & Clinical Vignette Box */}
            <div>
              <div className="flex items-center space-x-2 text-xs text-teal-700 font-bold mb-2">
                <Stethoscope className="w-4 h-4" />
                <span>VIÑETA CLÍNICA DE GUARDIA / CONSULTA</span>
              </div>
              <h2 className="text-lg font-extrabold text-slate-900 mb-3">
                {activeQuestion.topic}
              </h2>
              <div className="bg-slate-50 border-l-4 border-teal-600 p-4 rounded-r-lg text-slate-800 text-sm leading-relaxed font-normal">
                {activeQuestion.clinicalVignette}
              </div>
            </div>

            {/* Question Text Prompt */}
            <div className="pt-2">
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {activeQuestion.questionText}
              </p>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-2.5">
              {activeQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === activeQuestion.correctIndex;
                let optionStyle = 'border-slate-200 bg-white text-slate-800 hover:border-teal-400 hover:bg-slate-50/50';

                if (hasAnswered) {
                  if (isCorrect) {
                    optionStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold shadow-xs ring-1 ring-emerald-500';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'border-rose-400 bg-rose-50/80 text-rose-950 ring-1 ring-rose-400';
                  } else {
                    optionStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-70';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start space-x-3 ${optionStyle}`}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {hasAnswered ? (
                        isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-rose-600" />
                        ) : (
                          <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-xs text-slate-400 font-bold">
                            {String.fromCharCode(65 + idx)}
                          </span>
                        )
                      ) : (
                        <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-xs text-slate-600 font-bold group-hover:border-teal-500">
                          {String.fromCharCode(65 + idx)}
                        </span>
                      )}
                    </div>
                    <span className="flex-1 leading-relaxed">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* RESULTS AND CLINICAL APPLICATION HIGHLIGHTED SECTION */}
            {hasAnswered && (
              <div className="space-y-4 pt-4 border-t border-slate-200 animate-in fade-in duration-300">
                {/* 1. Status banner */}
                <div
                  className={`p-3.5 rounded-xl border flex items-center space-x-3 ${
                    selectedOption === activeQuestion.correctIndex
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                      : 'bg-rose-50 text-rose-900 border-rose-200'
                  }`}
                >
                  {selectedOption === activeQuestion.correctIndex ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  )}
                  <div className="text-xs sm:text-sm">
                    <strong>
                      {selectedOption === activeQuestion.correctIndex
                        ? '¡Respuesta Correcta!'
                        : 'Respuesta Incorrecta.'}
                    </strong>{' '}
                    <span>
                      La opción correcta es la{' '}
                      <strong>{String.fromCharCode(65 + activeQuestion.correctIndex)}</strong>.
                    </span>
                  </div>
                </div>

                {/* 2. Fisiopatología y Justificación */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs sm:text-sm">
                  <div className="flex items-center space-x-1.5 font-bold text-slate-900 mb-2">
                    <BookOpen className="w-4 h-4 text-teal-600" />
                    <span>FUNDAMENTACIÓN FISIOPATOLÓGICA Y ANÁLISIS</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-normal">
                    {activeQuestion.explanation}
                  </p>
                </div>

                {/* 3. APLICACIÓN CLÍNICA PRÁCTICA DESTACADA (HIGHLIGHTED RESULT) */}
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-5 border-2 border-teal-500/80 shadow-xs">
                  <div className="flex items-center space-x-2 font-extrabold text-teal-900 text-sm mb-2.5">
                    <Stethoscope className="w-5 h-5 text-teal-700" />
                    <span className="uppercase tracking-wide">
                      APLICACIÓN CLÍNICA PRÁCTICA (Conducta en el Hospital)
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-teal-950 leading-relaxed whitespace-pre-line font-medium">
                    {activeQuestion.clinicalApplication}
                  </p>
                </div>

                {/* 4. PERLA DE EXAMEN / HIGH YIELD */}
                <div className="bg-amber-50/90 rounded-xl p-4 border border-amber-300 text-xs sm:text-sm">
                  <div className="flex items-center space-x-1.5 font-bold text-amber-900 mb-1">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <span className="uppercase tracking-wider">Perla de Residencia (Board Pearl)</span>
                  </div>
                  <p className="text-amber-950 font-semibold leading-relaxed">
                    {activeQuestion.pearl}
                  </p>
                </div>

                {/* Extra action: ask tutor about this specific topic */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() =>
                      onOpenAskConsultationWithTopic(
                        activeQuestion.topic,
                        currentSubspecialty?.name || 'General'
                      )
                    }
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>¿Dudas sobre este caso? Profundizar o consultar con el asistente</span>
                  </button>
                </div>
              </div>
            )}

            {/* Navigation and Reset Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevQuestion}
                  disabled={safeIndex === 0}
                  className="px-3.5 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Anterior
                </button>
                {hasAnswered && (
                  <button
                    onClick={handleResetCurrent}
                    className="inline-flex items-center space-x-1 px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                    title="Reiniciar intento"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reiniciar</span>
                  </button>
                )}
              </div>

              <button
                onClick={handleNextQuestion}
                disabled={safeIndex >= filteredQuestions.length - 1}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                <span>Siguiente Caso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
