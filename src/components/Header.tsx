import React from 'react';
import { 
  Eye, 
  BookOpen, 
  HelpCircle, 
  Search, 
  Calculator, 
  Layers, 
  Award,
  Sparkles
} from 'lucide-react';
import { SubspecialtyId } from '../types/ophthalmology';

export type ActiveTab = 'modules' | 'questions' | 'ask' | 'deepdive' | 'calculators' | 'flashcards';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedSubspecialty: SubspecialtyId | 'all';
  setSelectedSubspecialty: (id: SubspecialtyId | 'all') => void;
  answeredCount: number;
  correctCount: number;
  totalQuestions: number;
  onOpenApiKeyModal: () => void;
  isKeyConfigured?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  answeredCount,
  correctCount,
  totalQuestions,
  onOpenApiKeyModal,
  isKeyConfigured = false
}) => {
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top bar with branding, resident stats, and API Key button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('modules')}>
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-sm">
              <Eye className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-extrabold tracking-tight text-slate-900">OftalmoResident</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-sm bg-teal-50 text-teal-700 border border-teal-200">
                  BCSC & Guardia
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Estudio clínico avanzado para residentes de oftalmología
              </p>
            </div>
          </div>

          {/* Right section: stats & Gemini API Key Button (🔑) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Quick stats indicators (desktop) */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-slate-600">
                <Award className="w-4 h-4 text-teal-600" />
                <span>
                  Resueltas: <strong className="text-slate-900">{answeredCount}/{totalQuestions}</strong>
                </span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>
                  Aciertos: <strong className="text-emerald-700">{accuracy}%</strong>
                </span>
              </div>
              <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                <span>Nivel:</span>
                <span className="text-teal-700 font-bold">R1 - R4 / Fellow</span>
              </div>
            </div>

            {/* Gemini API Key Button with Key icon (🔑) */}
            <button
              onClick={onOpenApiKeyModal}
              type="button"
              className={`inline-flex items-center space-x-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all border shadow-xs hover:shadow-sm active:scale-95 cursor-pointer ${
                isKeyConfigured
                  ? 'bg-emerald-50/90 text-emerald-900 border-emerald-300 hover:bg-emerald-100'
                  : 'bg-amber-50/90 text-amber-900 border-amber-300 hover:bg-amber-100'
              }`}
              title="Configurar Gemini API Key"
              aria-label="Configurar clave de Gemini API"
            >
              <span className="text-base select-none leading-none" role="img" aria-label="llave">🔑</span>
              <span className="hidden sm:inline font-semibold">
                {isKeyConfigured ? 'Gemini Conectado' : 'Configurar API Key'}
              </span>
              <span className="sm:hidden font-semibold">
                API Key
              </span>
              <span
                className={`w-2 h-2 rounded-full ${
                  isKeyConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation segmented tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-1 overflow-x-auto py-2 scrollbar-none border-t border-slate-100">
          <button
            onClick={() => setActiveTab('modules')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'modules'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Módulos por Área</span>
          </button>

          <button
            onClick={() => setActiveTab('questions')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'questions'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Banco de Preguntas & Casos</span>
          </button>

          <button
            onClick={() => setActiveTab('ask')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'ask'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Consulta Clínica & Preguntar</span>
          </button>

          <button
            onClick={() => setActiveTab('deepdive')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'deepdive'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Profundización Temática</span>
          </button>

          <button
            onClick={() => setActiveTab('calculators')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'calculators'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Calculadoras de Guardia</span>
          </button>

          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'flashcards'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Perlas Rápidas</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
