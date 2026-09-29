export type PlantCategory = 
  | 'saponin'
  | 'alkaloid'
  | 'flavonoid'
  | 'essential_oil'
  | 'anthranoid'
  | 'coumarin_tanin'
  | 'all';

export interface Plant {
  id: number;
  name: string;
  scientificName: string;
  family: string;
  vietnameseFamily: string;
  category: PlantCategory;
  categoryName: string;
  partUsed: string;
  chemicalConstituents: string[];
  qualitativeReaction: string; // Phản ứng định tính / Vi thăng hoa
  microscopicFeatures: string; // Đặc điểm vi học soi bột
  uses: string[];
  traditionalUses: string;
  contraindications: string;
  image: string;
  summary: string;
}

export interface Flashcard {
  id: number;
  plantId: number;
  question: string;
  hint: string;
  answer: {
    scientificName: string;
    family: string;
    partUsed: string;
    mainActiveCompound: string;
    keyUses: string;
  };
}

export interface FillQuestion {
  id: number;
  plantName: string;
  textBefore: string;
  answer: string;
  acceptableAnswers: string[];
  textAfter: string;
  hint: string;
  explanation: string;
  category: string;
}

export interface QuizOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  topic: string;
  plantId?: number;
}

export interface UserStats {
  score: number;
  streakDays: number;
  learnedPlantIds: number[];
  quizCompletedCount: number;
  highestQuizScore: number;
}
