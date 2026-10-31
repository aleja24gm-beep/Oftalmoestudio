import React, { useState, useEffect } from 'react';
import { Header, ActiveTab } from './components/Header';
import { ModulesView } from './components/ModulesView';
import { QuestionBankView } from './components/QuestionBankView';
import { AskResidentCaseView } from './components/AskResidentCaseView';
import { DeepDiveView } from './components/DeepDiveView';
import { CalculatorsView } from './components/CalculatorsView';
import { FlashcardsView } from './components/FlashcardsView';
import { CustomQuestionModal } from './components/CustomQuestionModal';
import { ApiKeyModal } from './components/ApiKeyModal';
import { getStoredApiKey } from './services/geminiService';
import { INITIAL_QUESTIONS } from './data/questionsData';
import { Question, SubspecialtyId } from './types/ophthalmology';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('modules');
  const [selectedSubspecialty, setSelectedSubspecialty] = useState<SubspecialtyId | 'all'>('all');
  const [questions, setQuestions] = useState<Question[]>(() => {
    try {
      const saved = localStorage.getItem('oftalmo_resident_questions');
      if (saved) {
        const parsed: Question[] = JSON.parse(saved);
        const customOnly = parsed.filter((q) => q.isCustom || q.id.startsWith('custom-'));
        const initialMap = new Map(INITIAL_QUESTIONS.map((q) => [q.id, q]));
        // Keep updated initial questions and user custom questions
        const mergedCustom = customOnly.filter((q) => !initialMap.has(q.id));
        return [...INITIAL_QUESTIONS, ...mergedCustom];
      }
    } catch (e) {
      console.warn('Failed loading local questions', e);
    }
    return INITIAL_QUESTIONS;
  });

  // Re-synchronize INITIAL_QUESTIONS if new questions (e.g. oncology) were added
  useEffect(() => {
    setQuestions((prev) => {
      const existingIds = new Set(prev.map((q) => q.id));
      const hasMissing = INITIAL_QUESTIONS.some((q) => !existingIds.has(q.id));
      if (hasMissing) {
        const customOnly = prev.filter((q) => q.isCustom || q.id.startsWith('custom-'));
        return [...INITIAL_QUESTIONS, ...customOnly];
      }
      return prev;
    });
  }, []);

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('oftalmo_resident_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [history, setHistory] = useState<Array<{ questionId: string; selectedIndex: number; isCorrect: boolean }>>(() => {
    try {
      const saved = localStorage.getItem('oftalmo_resident_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Cross-navigation states
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState<boolean>(false);
  const [isKeyConfigured, setIsKeyConfigured] = useState<boolean>(() => Boolean(getStoredApiKey()));
  const [askInitialTopic, setAskInitialTopic] = useState<string>('');
  const [askInitialSubspecialty, setAskInitialSubspecialty] = useState<string>('cornea');

  useEffect(() => {
    const handleKeySync = () => {
      setIsKeyConfigured(Boolean(getStoredApiKey()));
    };
    window.addEventListener('storage', handleKeySync);
    return () => window.removeEventListener('storage', handleKeySync);
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('oftalmo_resident_questions', JSON.stringify(questions));
    } catch (e) {
      console.error(e);
    }
  }, [questions]);

  useEffect(() => {
    try {
      localStorage.setItem('oftalmo_resident_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('oftalmo_resident_history', JSON.stringify(history));
    } catch (e) {
      console.error(e);
    }
  }, [history]);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRecordAnswer = (questionId: string, selectedIndex: number, isCorrect: boolean) => {
    setHistory((prev) => {
      const filtered = prev.filter((h) => h.questionId !== questionId);
      return [...filtered, { questionId, selectedIndex, isCorrect }];
    });
  };

  const handleSaveCustomQuestion = (newQ: Question) => {
    setQuestions((prev) => [newQ, ...prev]);
  };

  const handleSelectSubspecialtyForQuestions = (id: SubspecialtyId) => {
    setSelectedSubspecialty(id);
    setActiveTab('questions');
  };

  const handleSelectSubspecialtyForDeepDive = (id: SubspecialtyId) => {
    setSelectedSubspecialty(id);
    setActiveTab('deepdive');
  };

  const handleOpenAskConsultationWithTopic = (topic: string, subspecialty: string) => {
    setAskInitialTopic(`Sobre el tema "${topic}": ¿Cuáles son los puntos críticos de manejo, diagnóstico diferencial y aplicación clínica en la guardia hospitalaria?`);
    setAskInitialSubspecialty(subspecialty.toLowerCase());
    setActiveTab('ask');
  };

  const answeredCount = history.length;
  const correctCount = history.filter((h) => h.isCorrect).length;

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 font-sans flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Top Header with Key button */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedSubspecialty={selectedSubspecialty}
        setSelectedSubspecialty={setSelectedSubspecialty}
        answeredCount={answeredCount}
        correctCount={correctCount}
        totalQuestions={questions.length}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        isKeyConfigured={isKeyConfigured}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'modules' && (
          <ModulesView
            onSelectSubspecialtyForQuestions={handleSelectSubspecialtyForQuestions}
            onSelectSubspecialtyForDeepDive={handleSelectSubspecialtyForDeepDive}
          />
        )}

        {activeTab === 'questions' && (
          <QuestionBankView
            questions={questions}
            selectedSubspecialty={selectedSubspecialty}
            setSelectedSubspecialty={setSelectedSubspecialty}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onRecordAnswer={handleRecordAnswer}
            history={history}
            onOpenAddQuestionModal={() => setIsModalOpen(true)}
            onOpenAskConsultationWithTopic={handleOpenAskConsultationWithTopic}
          />
        )}

        {activeTab === 'ask' && (
          <AskResidentCaseView
            initialTopic={askInitialTopic}
            initialSubspecialty={askInitialSubspecialty}
            onSaveAsCustomQuestion={handleSaveCustomQuestion}
            onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
          />
        )}

        {activeTab === 'deepdive' && (
          <DeepDiveView
            initialSubspecialty={selectedSubspecialty === 'all' ? 'cornea' : selectedSubspecialty}
            onOpenQuestionInBank={(topic) => {
              setActiveTab('questions');
            }}
          />
        )}

        {activeTab === 'calculators' && <CalculatorsView />}

        {activeTab === 'flashcards' && <FlashcardsView />}
      </main>

      {/* Custom Question Modal */}
      <CustomQuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSaveQuestion={handleSaveCustomQuestion}
        defaultSubspecialty={selectedSubspecialty === 'all' ? 'cornea' : selectedSubspecialty}
      />

      {/* Gemini API Key Configuration Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onKeySaved={() => setIsKeyConfigured(Boolean(getStoredApiKey()))}
      />

      {/* Footer */}
      <footer className="mt-auto bg-white border-t border-slate-200 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-800">OftalmoResident</span>
            <span>·</span>
            <span>Plataforma de Estudio y Simulación Clínica para Médicos Residentes</span>
          </div>
          <div className="text-slate-400 text-center sm:text-right">
            <span>Basado en BCSC (AAO), EGS, ESCRS y protocolos de guardia oftalmológica.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
