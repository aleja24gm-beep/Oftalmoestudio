export type SubspecialtyId =
  | 'cornea'
  | 'glaucoma'
  | 'retina'
  | 'catarata'
  | 'neuroftalmologia'
  | 'uveitis'
  | 'pediatria'
  | 'oculoplastica'
  | 'refraccion'
  | 'oncologia';

export interface SubspecialtyModule {
  id: SubspecialtyId;
  name: string;
  shortName: string;
  iconName: string;
  color: string; // Tailwind color token
  badgeColor: string;
  description: string;
  keyTopics: string[];
  anatomicalStructures: string[];
  referenceGuidelines: string;
  highYieldTips: string[];
}

export type DifficultyLevel = 'R1 - Inicial' | 'R2/R3 - Intermedio' | 'R4/Fellow - Avanzado';

export interface QuestionOption {
  letter: string;
  text: string;
}

export interface Question {
  id: string;
  subspecialtyId: SubspecialtyId;
  topic: string;
  difficulty: DifficultyLevel;
  clinicalVignette: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  clinicalApplication: string; // Qué hacer en guardia, consulta o quirófano
  pearl: string; // Perla de examen / High Yield
  tags: string[];
  source?: string;
  isCustom?: boolean;
}

export interface TopicDeepDive {
  id: string;
  title: string;
  subspecialtyId: SubspecialtyId;
  summary: string;
  definitionAndEpidemiology: string;
  anatomyAndPathophysiology: string;
  clinicalExamination: {
    biomicroscopy: string;
    fundus?: string;
    specialSigns: string;
  };
  diagnosticWorkup: Array<{
    test: string;
    findings: string;
  }>;
  differentialDiagnosis: Array<{
    condition: string;
    distinction: string;
  }>;
  steppedManagement: {
    medical: string;
    surgical?: string;
  };
  clinicalApplicationPractical: string;
  highYieldPearl: string;
  keyDrugs?: Array<{
    name: string;
    dose: string;
    warning: string;
  }>;
  // Tips indispensables para exámenes de Residencia y Fellowship
  residencyAndFellowExamTips?: Array<{
    title: string;
    category: 'Asociación Patognomónica' | 'Trampa de Tribunal' | 'Cifra Clave de Corte' | 'Mnemotecnia' | 'Pregunta Clásica' | string;
    description: string;
    trapToAvoid?: string;
  }>;
  // Puntos avanzados de examen de Fellowship (ICO Advanced / EBOD / Subspecialty Boards)
  fellowshipKeyPoints?: string[];
  landmarkTrials?: Array<{
    name: string;
    year: string;
    conclusion: string;
    fellowshipRelevance: string;
  }>;
  histopathologyAndGenetics?: string;
  surgicalPearls?: string[];
  fellowOralBoardQuestions?: Array<{
    question: string;
    answer: string;
    trap: string;
  }>;
}

export interface ResidentResponseResult {
  diagnosticSummary: string;
  pathophysiology: string;
  clinicalApplication: {
    guardia: string;
    tratamiento: string;
    criteriosDerivacionOQuirurgicos: string;
    contraindicaciones: string;
  };
  pearlHighYield: string;
  keyReferences: string;
}

export interface ResidentStats {
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  streakDays: number;
  bySubspecialty: Record<string, { total: number; correct: number }>;
  bookmarkedQuestionIds: string[];
  history: Array<{
    questionId: string;
    selectedIndex: number;
    isCorrect: boolean;
    date: string;
  }>;
}
