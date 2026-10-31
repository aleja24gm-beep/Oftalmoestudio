import React, { useState } from 'react';
import { 
  Eye, 
  Gauge, 
  ScanEye, 
  CircleDot, 
  Brain, 
  Flame, 
  Baby, 
  Sparkles, 
  Glasses,
  ChevronRight,
  ChevronDown,
  BookOpen,
  HelpCircle,
  AlertCircle,
  ShieldAlert,
  FileText
} from 'lucide-react';
import { SUBSPECIALTY_MODULES } from '../data/modulesData';
import { TOPICS_DATA } from '../data/topicsData';
import { SubspecialtyId } from '../types/ophthalmology';

interface ModulesViewProps {
  onSelectSubspecialtyForQuestions: (id: SubspecialtyId) => void;
  onSelectSubspecialtyForDeepDive: (id: SubspecialtyId) => void;
}

export const ModulesView: React.FC<ModulesViewProps> = ({
  onSelectSubspecialtyForQuestions,
  onSelectSubspecialtyForDeepDive
}) => {
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});

  const toggleExpand = (moduleId: string) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Eye': return <Eye className="w-6 h-6" />;
      case 'Gauge': return <Gauge className="w-6 h-6" />;
      case 'ScanEye': return <ScanEye className="w-6 h-6" />;
      case 'CircleDot': return <CircleDot className="w-6 h-6" />;
      case 'Brain': return <Brain className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'Baby': return <Baby className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Glasses': return <Glasses className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      default: return <ShieldAlert className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-md border border-slate-800">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-4 border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Módulos Oficiales de Residencia Oftalmológica</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
            Plan de Estudio Dividido por Subespecialidades
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Estructurado conforme al currículo de la <strong>American Academy of Ophthalmology (AAO BCSC)</strong> y el Consejo Internacional de Oftalmología (ICO). Selecciona un módulo para resolver casos clínicos con aplicación práctica o profundizar en temas de alta rentabilidad.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <span className="block text-slate-400">Total Áreas</span>
              <strong className="text-lg font-bold text-white">{SUBSPECIALTY_MODULES.length} Módulos</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <span className="block text-slate-400">Monografías</span>
              <strong className="text-lg font-bold text-amber-400">{TOPICS_DATA.length} Temas BCSC</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <span className="block text-slate-400">Enfoque</span>
              <strong className="text-lg font-bold text-emerald-400">Guardia & Examen</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <span className="block text-slate-400">Guías Base</span>
              <strong className="text-lg font-bold text-teal-300">BCSC / EGS / ESCRS</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of the Modules */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Áreas de Especialización Oftalmológica
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            {SUBSPECIALTY_MODULES.length} subespecialidades clínicas y quirúrgicas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBSPECIALTY_MODULES.map((module) => {
            const deepDiveCount = TOPICS_DATA.filter(t => t.subspecialtyId === module.id).length;
            const isExpanded = !!expandedTopics[module.id];
            const visibleTopics = isExpanded ? module.keyTopics : module.keyTopics.slice(0, 4);
            const remainingCount = module.keyTopics.length - 4;

            return (
              <div
                key={module.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Header */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white shadow-sm`}>
                      {getIcon(module.iconName)}
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${module.badgeColor}`}>
                        {module.shortName}
                      </span>
                      {deepDiveCount > 0 && (
                        <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                          <FileText className="w-3 h-3 text-teal-600" />
                          <span>{deepDiveCount} {deepDiveCount === 1 ? 'Monografía' : 'Monografías'}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                    {module.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {module.description}
                  </p>

                  {/* Key Topics List */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Temas y Enfermedades ({module.keyTopics.length}):
                      </span>
                      {remainingCount > 0 && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(module.id)}
                          className="text-[11px] font-bold text-teal-600 hover:text-teal-800 flex items-center space-x-0.5 cursor-pointer"
                        >
                          <span>{isExpanded ? 'Ver menos' : `Ver todos (+${remainingCount})`}</span>
                          {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                        </button>
                      )}
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                      {visibleTopics.map((topic, i) => (
                        <li key={i} className="flex items-start space-x-1.5 leading-snug">
                          <span className="text-teal-600 font-bold mt-0.5">›</span>
                          <span className="text-[11.5px] text-slate-800">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* High Yield Pearl Box */}
                  <div className="p-3 bg-amber-50/80 rounded-lg border border-amber-200/70 text-xs text-amber-900">
                    <div className="flex items-center space-x-1 font-bold text-amber-800 mb-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Perla de Guardia / Examen</span>
                    </div>
                    <p className="line-clamp-2 leading-relaxed text-[11px]">
                      {module.highYieldTips[0]}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action Buttons */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectSubspecialtyForQuestions(module.id)}
                    className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Casos Clínicos</span>
                  </button>

                  <button
                    onClick={() => onSelectSubspecialtyForDeepDive(module.id)}
                    className="inline-flex items-center justify-center space-x-1 py-2 px-3 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                    title="Profundizar temas de esta área"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                    <span>Profundizar ({deepDiveCount})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
