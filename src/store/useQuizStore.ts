import { create } from 'zustand';
import { Question, QuizStatus, Choice } from '@/types/quiz';

interface QuizState {
  questions: Question[];
  currentIndex: number;
  solvedCount: number;
  shuffledChoices: Choice[]; // 型をanyからChoice[]に変更
  status: QuizStatus;
  
  startQuiz: (data: Question[]) => void;
  selectChoice: (choiceId: string) => void;
  proceed: () => void;
  goBack: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  questions: [],
  currentIndex: 0,
  solvedCount: 0,
  shuffledChoices: [],
  status: 'answering',

  startQuiz: (data: Question[]) => { // 型を明示
    set({ 
      questions: data, 
      currentIndex: 0, 
      solvedCount: 0,
      status: 'answering',
      shuffledChoices: [...data[0].choices].sort(() => Math.random() - 0.5)
    });
  },

  selectChoice: (choiceId: string) => { // 型を明示
    const { questions, currentIndex } = get();
    const currentQuestion = questions[currentIndex];
    const selected = currentQuestion.choices.find((c: Choice) => c.id === choiceId);

    if (selected?.isCorrect) {
      set((state: QuizState) => ({ // stateの型を明示
        status: 'correct', 
        solvedCount: state.solvedCount + 1 
      }));
    } else {
      set({ status: 'incorrect' });
    }
  },

  proceed: () => {
    const { status, currentIndex, questions, solvedCount } = get();
    
    if (status === 'correct') {
      if (solvedCount > 0 && solvedCount % 10 === 0) {
        set({ status: 'reward' });
        return;
      }
      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        set({
          currentIndex: nextIndex,
          status: 'answering',
          shuffledChoices: [...questions[nextIndex].choices].sort(() => Math.random() - 0.5)
        });
      } else {
        set({ status: 'ending' });
      }
    } else if (status === 'incorrect') {
      set({
        status: 'answering',
        shuffledChoices: [...questions[currentIndex].choices].sort(() => Math.random() - 0.5)
      });
    }
  },

  goBack: () => {
    const { currentIndex, questions } = get();
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      set({
        currentIndex: prevIndex,
        status: 'answering',
        shuffledChoices: [...questions[prevIndex].choices].sort(() => Math.random() - 0.5)
      });
    }
  }
}));