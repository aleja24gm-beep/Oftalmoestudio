import React, { useState } from 'react';
import { X, Plus, Save, Stethoscope, Sparkles, Wand2 } from 'lucide-react';
import { Question, SubspecialtyId, DifficultyLevel } from '../types/ophthalmology';
import { SUBSPECIALTY_MODULES } from '../data/modulesData';
import { generateQuestionAPI } from '../services/geminiService';

interface CustomQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveQuestion: (question: Question) => void;
  defaultSubspecialty?: SubspecialtyId;
}

export const CustomQuestionModal: React.FC<CustomQuestionModalProps> = ({
  isOpen,
  onClose,
  onSaveQuestion,
  defaultSubspecialty = 'cornea'
}) => {
  const [subspecialtyId, setSubspecialtyId] = useState<SubspecialtyId>(defaultSubspecialty);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('R2/R3 - Intermedio');
  const [topic, setTopic] = useState<string>('');
  const [clinicalVignette, setClinicalVignette] = useState<string>('');
  const [questionText, setQuestionText] = useState<string>('');
  const [optionA, setOptionA] = useState<string>('');
  const [optionB, setOptionB] = useState<string>('');
  const [optionC, setOptionC] = useState<string>('');
  const [optionD, setOptionD] = useState<string>('');
  const [correctIndex, setCorrectIndex] = useState<number>(0);
  const [explanation, setExplanation] = useState<string>('');
  const [clinicalApplication, setClinicalApplication] = useState<string>('');
  const [pearl, setPearl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleGenerateWithAI = async () => {
    setIsGenerating(true);
    try {
      const res = await generateQuestionAPI(subspecialtyId, difficulty, topic || undefined);
      if (res && res.data) {
        const q = res.data;
        if (q.topic) setTopic(q.topic);
        if (q.clinicalVignette) setClinicalVignette(q.clinicalVignette);
        if (q.questionText) setQuestionText(q.questionText);
        if (q.options && q.options.length >= 2) {
          setOptionA(q.options[0]);
          setOptionB(q.options[1]);
          setOptionC(q.options[2] || '');
          setOptionD(q.options[3] || '');
        }
        if (typeof q.correctIndex === 'number') setCorrectIndex(q.correctIndex);
        if (q.explanation) setExplanation(q.explanation);
        if (q.clinicalApplication) setClinicalApplication(q.clinicalApplication);
        if (q.pearl) setPearl(q.pearl);
      }
    } catch (err) {
      console.error('Error generating question with Gemini:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !questionText || !optionA || !optionB) return;

    const newQuestion: Question = {
      id: `custom-${Date.now()}`,
      subspecialtyId,
      difficulty,
      topic,
      clinicalVignette: clinicalVignette || 'Caso clínico documentado por el residente.',
      questionText,
      options: [
        `A) ${optionA.replace(/^[A-D]\)\s*/, '')}`,
        `B) ${optionB.replace(/^[A-D]\)\s*/, '')}`,
        `C) ${optionC.replace(/^[A-D]\)\s*/, '') || 'Opción no especificada'}`,
        `D) ${optionD.replace(/^[A-D]\)\s*/, '') || 'Opción no especificada'}`
      ],
      correctIndex,
      explanation: explanation || 'Fundamentación clínica guardada por el residente.',
      clinicalApplication: clinicalApplication || 'Conducta clínica práctica en el servicio hospitalario.',
      pearl: pearl || 'Perla clave de aprendizaje del caso.',
      tags: [subspecialtyId, 'Mi Caso'],
      isCustom: true
    };

    onSaveQuestion(newQuestion);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Añadir Pregunta / Caso Clínico Propio
              </h3>
              <p className="text-xs text-slate-400">
                Guarda tus propios casos vistos en rotaciones o preparaciones de examen
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto text-xs sm:text-sm">
          {/* Subspecialty & Difficulty */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Área Oftalmológica
              </label>
              <select
                value={subspecialtyId}
                onChange={(e) => setSubspecialtyId(e.target.value as SubspecialtyId)}
                className="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs sm:text-sm bg-white"
              >
                {SUBSPECIALTY_MODULES.map((m) => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Dificultad
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as DifficultyLevel)}
                className="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs sm:text-sm bg-white"
              >
                <option value="R1 - Inicial">R1 - Inicial</option>
                <option value="R2/R3 - Intermedio">R2/R3 - Intermedio</option>
                <option value="R4/Fellow - Avanzado">R4/Fellow - Avanzado</option>
              </select>
            </div>
          </div>

          {/* Topic Title with Gemini Auto-generator */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Tema o Título del Caso
              </label>
              <button
                type="button"
                onClick={handleGenerateWithAI}
                disabled={isGenerating}
                className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-800 text-[11px] font-bold transition-colors disabled:opacity-50 cursor-pointer"
                title="Generar caso de examen automáticamente con Gemini AI"
              >
                <span className="text-xs" role="img" aria-label="llave">🔑</span>
                <span>{isGenerating ? 'Generando con Gemini...' : 'Generar Caso con Gemini AI'}</span>
              </button>
            </div>
            <input
              type="text"
              required
              placeholder="Ej. Queratitis punteada superficial por toxicidad a conservantes"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs sm:text-sm"
            />
          </div>

          {/* Clinical Vignette */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Viñeta Clínica (Historia, biomicroscopía, PIO, fondo)
            </label>
            <textarea
              rows={3}
              placeholder="Paciente de 54 años con ojo rojo crónico tras uso de 3 colirios hipotensores con BAK..."
              value={clinicalVignette}
              onChange={(e) => setClinicalVignette(e.target.value)}
              className="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs sm:text-sm"
            />
          </div>

          {/* Question Text */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Enunciado de la Pregunta
            </label>
            <input
              type="text"
              required
              placeholder="¿Cuál es la conducta terapéutica indicada para la superficie ocular?"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              className="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs sm:text-sm"
            />
          </div>

          {/* Options */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Opciones de Respuesta:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                required
                placeholder="Opción A"
                value={optionA}
                onChange={(e) => setOptionA(e.target.value)}
                className="py-1.5 px-3 rounded-lg border border-slate-200 text-xs"
              />
              <input
                type="text"
                required
                placeholder="Opción B"
                value={optionB}
                onChange={(e) => setOptionB(e.target.value)}
                className="py-1.5 px-3 rounded-lg border border-slate-200 text-xs"
              />
              <input
                type="text"
                placeholder="Opción C"
                value={optionC}
                onChange={(e) => setOptionC(e.target.value)}
                className="py-1.5 px-3 rounded-lg border border-slate-200 text-xs"
              />
              <input
                type="text"
                placeholder="Opción D"
                value={optionD}
                onChange={(e) => setOptionD(e.target.value)}
                className="py-1.5 px-3 rounded-lg border border-slate-200 text-xs"
              />
            </div>

            <div className="flex items-center space-x-2 pt-1">
              <span className="text-xs text-slate-600 font-bold">Opción Correcta:</span>
              <select
                value={correctIndex}
                onChange={(e) => setCorrectIndex(Number(e.target.value))}
                className="py-1 px-2.5 rounded-md border border-slate-200 text-xs bg-white font-bold text-teal-800"
              >
                <option value={0}>Opción A es la Correcta</option>
                <option value={1}>Opción B es la Correcta</option>
                <option value={2}>Opción C es la Correcta</option>
                <option value={3}>Opción D es la Correcta</option>
              </select>
            </div>
          </div>

          {/* Explanation & Clinical Application */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Fundamento Fisiopatológico de la Respuesta
              </label>
              <textarea
                rows={2}
                placeholder="Por qué es correcta y por qué se descartan las otras..."
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                className="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">
                ★ Aplicación Clínica Práctica (Conducta en el Hospital)
              </label>
              <textarea
                rows={2}
                placeholder="Paso 1 en consulta/guardia, fármacos con dosis y qué evitar..."
                value={clinicalApplication}
                onChange={(e) => setClinicalApplication(e.target.value)}
                className="w-full py-2 px-3 rounded-lg border border-teal-300 bg-teal-50/30 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
                Perla de Residencia (High-Yield Pearl)
              </label>
              <input
                type="text"
                placeholder="Concepto clave para recordar siempre..."
                value={pearl}
                onChange={(e) => setPearl(e.target.value)}
                className="w-full py-2 px-3 rounded-lg border border-amber-300 bg-amber-50/30 text-xs"
              />
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Guardar en Mi Banco</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
