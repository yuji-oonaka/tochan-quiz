export interface Choice {
  id: string;
  text: string;
  speech?: string; // ★追加：選択肢の読み
  isCorrect: boolean;
}

export interface Question {
  id: string;
  questionText: string;
  questionSpeech?: string; // ★追加：問題文の読み
  choices: Choice[];
  explanation: string;
  explanationSpeech?: string; // ★追加：解説の読み
}

export type QuizStatus = 'top' | 'answering' | 'correct' | 'incorrect' | 'reward' | 'ending';