export type Choice = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  questionText: string;
  choices: Choice[];
};

export type QuizStatus = 'answering' | 'correct' | 'incorrect' | 'reward' | 'ending';