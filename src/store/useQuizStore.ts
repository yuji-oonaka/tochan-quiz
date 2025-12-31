import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Question, QuizStatus, Choice } from '../types/quiz';

interface QuizState {
  questions: Question[];
  currentIndex: number;
  solvedCount: number;
  shuffledChoices: Choice[];
  status: QuizStatus;
  isSoundOn: boolean;
  
  startQuiz: (data: Question[]) => void;
  initQuiz: () => void;
  selectChoice: (choiceId: string) => void;
  proceed: () => void;
  goBack: () => void;
  resetQuiz: () => void; // 全問シャッフルして再開
  resetAllData: () => void; // 進捗を消してトップへ
  toggleSound: () => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      questions: [],
      currentIndex: 0,
      solvedCount: 0,
      shuffledChoices: [],
      status: 'top',
      isSoundOn: true,

      startQuiz: (data: Question[]) => {
        if (get().questions.length > 0) return;
        set({ questions: data });
      },

      initQuiz: () => {
        const { questions, currentIndex } = get();
        set({
          status: 'answering',
          shuffledChoices: [...questions[currentIndex].choices].sort(() => Math.random() - 0.5)
        });
      },

      selectChoice: (choiceId: string) => {
        const { questions, currentIndex, solvedCount } = get();
        const currentQuestion = questions[currentIndex];
        const selectedChoice = currentQuestion.choices.find(c => c.id === choiceId);

        if (selectedChoice?.isCorrect) {
          set({ status: 'correct', solvedCount: solvedCount + 1 });
        } else {
          set({ status: 'incorrect' });
        }
      },

      proceed: () => {
        const { questions, currentIndex, solvedCount, status } = get();
        if (status === 'correct' && solvedCount > 0 && solvedCount % 10 === 0) {
          set({ status: 'reward' });
          return;
        }
        const nextIndex = currentIndex + 1;
        if (nextIndex >= questions.length) {
          set({ status: 'ending' });
          return;
        }
        set({
          currentIndex: nextIndex,
          status: 'answering',
          shuffledChoices: [...questions[nextIndex].choices].sort(() => Math.random() - 0.5)
        });
      },

      goBack: () => {
        const { currentIndex, questions } = get();
        if (currentIndex <= 0) return;
        const prevIndex = currentIndex - 1;
        set({
          currentIndex: prevIndex,
          status: 'answering',
          shuffledChoices: [...questions[prevIndex].choices].sort(() => Math.random() - 0.5)
        });
      },

      // --- 【修正】最初からやり直す（全問シャッフル） ---
      resetQuiz: () => {
        const { questions } = get();
        // 100問のリストそのものをランダムに並べ替える
        const shuffledList = [...questions].sort(() => Math.random() - 0.5);
        
        set({
          questions: shuffledList,
          currentIndex: 0,
          solvedCount: 0,
          status: 'answering',
          shuffledChoices: [...shuffledList[0].choices].sort(() => Math.random() - 0.5)
        });
      },

      // --- 【新設】データを完全に消してトップへ戻る ---
      resetAllData: () => {
        set({
          currentIndex: 0,
          solvedCount: 0,
          status: 'top'
        });
      },

      toggleSound: () => set((state) => ({ isSoundOn: !state.isSoundOn })),
    }),
    {
      name: 'father-quiz-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);