export type CategoryType = {
  id: number;
  name: string;
  intlName: string;
  createData?: string;
  childCategories?: any[];
};

export type CardType = {
  id: number;
  catId: number;
  name: string;
  intlName: string;
  description: string;
  intlDescription: string;
  inBasket: boolean;
  isUserCard: boolean;
};

// type of card
export type typeViewCards = "card" | "table";

// Quiz types
export type QuizSettingsType = {
  language: "ru" | "en";
  time: boolean;
  type: "swipe" | "write" | "speech" | "connect";
  random: boolean;
};

// ui modal
export type typeUiModals = {
  value:
    | "save-cards"
    | "create-another-card"
    | "current-card"
    | "change-card-successfully"
    | "delete-category";
  state: boolean;
};

// sidebar
export type typeSidebars = {
  value: "main-sidebar";
  state: boolean;
};

export interface typeItem {
  id: number;
  text: string;
  side: "left" | "right";
}

export interface typeLine {
  id: number;
  fromId: number;
  toId: number;
}

// Sidebar Elems
export type typeSidebarLink = {
  id: number;
  name_ru: string;
  name_en: string
  link: string;
  childItems: typeSidebarLink[];
  icon?: () => React.ReactNode
};






// types/practice.ts
export interface DialogueLine {
  speaker: string;
  text: string;
  translation: string;
  expectedWords?: string[];
  difficulty?: number;
}

export interface Dialogue {
  id: number;
  title: string;
  level: "Начальный" | "Средний" | "Продвинутый";
  description: string;
  lines: DialogueLine[];
}

export interface UserRecording {
  lineIndex: number;
  audioUrl: string;
  text: string;
  timestamp: string;
  transcribedText?: string;
  confidence?: number;
}

export interface PronunciationFeedback {
  lineIndex: number;
  text: string;
  transcribedText: string;
  mistakes: string[];
  tips: string[];
  score: number;
  confidence: number;
  wordAnalysis?: WordAnalysis[];
}

export interface WordAnalysis {
  word: string;
  expected: string;
  confidence: number;
  isCorrect: boolean;
  phonetics?: string;
}

export interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
  words: Array<{
    word: string;
    confidence: number;
    startTime: number;
    endTime: number;
  }>;
}