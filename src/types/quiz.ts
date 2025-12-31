export type Choice = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  questionText: string;
  choices: Choice[];
  explanation: string; // 【追加】正解した時に表示する納得の一言
};

export type QuizStatus = 'top' | 'answering' | 'correct' | 'incorrect' | 'reward' | 'ending';