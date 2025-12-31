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
  isShuffled: boolean; // ★追加：シャッフルモード中かどうかの判定
  
  startQuiz: (data: Question[]) => void;
  initQuiz: () => void;
  selectChoice: (choiceId: string) => void;
  proceed: () => void;
  retryQuestion: () => void;
  goBack: () => void;
  resetQuiz: () => void; // 全問クリア後のシャッフル再開
  resetAllData: () => void; // 完全リセット（1周目に戻る）
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
      isShuffled: false, // ★初期値は「順番通り」

      startQuiz: (data: Question[]) => {
        const { isShuffled, questions } = get();
        
        // 【重要】シャッフルモードでない（1周目）なら、常に最新のコード順（Set01〜10）で上書きする
        // これにより、father-set-01 から 02 へ順番に進むことが保証されます
        if (!isShuffled) {
          set({ questions: data });
        } else if (questions.length === 0) {
          set({ questions: data });
        }
      },

      initQuiz: () => {
        const { questions, currentIndex } = get();
        if (!questions[currentIndex]) return;
        set({
          status: 'answering',
          shuffledChoices: [...questions[currentIndex].choices].sort(() => Math.random() - 0.5)
        });
      },

      selectChoice: (choiceId: string) => {
        const { questions, currentIndex, solvedCount, status } = get();
        if (status !== 'answering') return; // 二重クリック防止

        const currentQuestion = questions[currentIndex];
        const selectedChoice = currentQuestion.choices.find(c => c.id === choiceId);

        if (selectedChoice?.isCorrect) {
          // ★ 修正：戻って解き直した時に solvedCount が増えすぎないようにする
          // solvedCount は「これまでに進んだ最大の問題数」として扱います
          const newSolvedCount = Math.max(solvedCount, currentIndex + 1);
          set({ status: 'correct', solvedCount: newSolvedCount });
        } else {
          set({ status: 'incorrect' });
        }
      },

      proceed: () => {
        const { questions, currentIndex, solvedCount, status } = get();
        
        // 1. 正解直後のご褒美画面判定
        if (status === 'correct' && solvedCount > 0 && solvedCount % 10 === 0) {
          set({ status: 'reward' });
          return;
        }

        // 2. 正解後またはご褒美画面から「次へ」
        if (status === 'correct' || status === 'reward') {
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
        }
      },

      retryQuestion: () => {
        set({ status: 'answering' });
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

      // --- 【重要】全問クリア後のみ、シャッフルを有効にする ---
      resetQuiz: () => {
        const { questions } = get();
        const shuffledList = [...questions].sort(() => Math.random() - 0.5);
        
        set({
          questions: shuffledList,
          currentIndex: 0,
          solvedCount: 0,
          status: 'answering',
          isShuffled: true, // ★ここでシャッフルモードをONにする
          shuffledChoices: [...shuffledList[0].choices].sort(() => Math.random() - 0.5)
        });
      },

      // --- 【重要】完全リセット：1周目の順番（Set01〜）に戻す ---
      resetAllData: () => {
        set({
          currentIndex: 0,
          solvedCount: 0,
          status: 'top',
          isShuffled: false, // ★シャッフルを解除して1周目モードにする
        });
      },

      toggleSound: () => set((state) => ({ isSoundOn: !state.isSoundOn })),
    }),
    {
      name: 'father-quiz-storage',
      storage: createJSONStorage(() => localStorage),
      
      // --- 【重要】ここを追加：LocalStorageに保存する項目を指定する ---
      partialize: (state) => ({
        questions: state.questions,
        currentIndex: state.currentIndex,
        solvedCount: state.solvedCount,
        isSoundOn: state.isSoundOn,
        isShuffled: state.isShuffled,
        // ★ status と shuffledChoices は保存対象から外します
      }),
    }
  )
);