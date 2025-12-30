export type Choice = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  questionText: string;
  choices: Choice[];
  explanation?: string; // 正解した後に軽く読める補足（任意）
};

export type QuizStatus = 'answering' | 'correct' | 'incorrect' | 'reward' | 'ending';