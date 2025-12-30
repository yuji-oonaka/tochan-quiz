"use client";

import { useEffect } from "react";
import { useQuizStore } from "@/store/useQuizStore";
import { AnswerButton } from "@/components/quiz/AnswerButton";
import { RewardOverlay } from "@/components/quiz/RewardOverlay"; // 1. 追加
import { useSound } from "@/hooks/useSound"; // 2. 追加

// 動作確認用の仮データ（ジャンルを混ぜています）
const mockQuestions = [
  {
    id: "1",
    questionText: "日本の首都はどこでしょうか？",
    choices: [
      { id: "a", text: "東京", isCorrect: true },
      { id: "b", text: "大阪", isCorrect: false },
      { id: "c", text: "京都", isCorrect: false },
      { id: "d", text: "名古屋", isCorrect: false },
    ],
  },
  {
    id: "2",
    questionText: "一石二鳥。もう一羽は何？",
    choices: [
      { id: "e", text: "スズメ", isCorrect: false },
      { id: "f", text: "カラス", isCorrect: false },
      { id: "g", text: "鳥", isCorrect: true },
      { id: "h", text: "ハト", isCorrect: false },
    ],
  },
];

export default function QuizPage() {
  const {
    currentIndex,
    shuffledChoices,
    status,
    questions,
    startQuiz,
    selectChoice,
    proceed,
    goBack,
  } = useQuizStore();

  const { playSound } = useSound(); // 3. Hookの初期化

  // 初回起動
  useEffect(() => {
    startQuiz(mockQuestions);
  }, [startQuiz]);

  // 4. 音と自動進行の制御
  useEffect(() => {
    if (status === "correct") {
      playSound("correct"); // 正解音
      const timer = setTimeout(() => proceed(), 1500);
      return () => clearTimeout(timer);
    }

    if (status === "incorrect") {
      playSound("incorrect"); // 不正解音
      const timer = setTimeout(() => proceed(), 1500);
      return () => clearTimeout(timer);
    }
  }, [status, proceed, playSound]);

  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col p-4 relative overflow-hidden">
      {/* ヘッダー：戻るボタン */}
      <header className="h-12 flex items-center">
        {currentIndex > 0 && status === "answering" && (
          <button
            onClick={goBack}
            className="text-lg font-bold text-slate-400 flex items-center gap-1 active:opacity-50"
          >
            <span className="text-2xl">←</span> ひとつ前へ
          </button>
        )}
      </header>

      {/* 問題表示エリア */}
      <div className="flex-1 flex items-center justify-center p-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-800 text-center leading-snug">
          {currentQuestion.questionText}
        </h1>
      </div>

      {/* 回答エリア */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {shuffledChoices.map((choice) => (
          <AnswerButton
            key={choice.id}
            text={choice.text}
            onClick={() => {
              playSound("click"); // 5. ボタン押し音
              selectChoice(choice.id);
            }}
            disabled={status !== "answering"}
          />
        ))}
      </div>

      {/* 6. 各種演出レイヤー（最前面に表示） */}

      {/* 正解時 */}
      {status === "correct" && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/90 z-50">
          <div className="text-center">
            <div className="text-9xl mb-4">⭕️</div>
            <div className="text-5xl font-bold text-blue-600">あたり！</div>
          </div>
        </div>
      )}

      {/* 不正解時 */}
      {status === "incorrect" && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-800/90 z-50">
          <div className="text-center">
            <div className="text-9xl mb-4">❌</div>
            <div className="text-4xl font-bold text-white leading-relaxed">
              違いました
              <br />
              もう一度です
            </div>
          </div>
        </div>
      )}

      {/* 報酬画面（10問正解時） */}
      {status === "reward" && <RewardOverlay onNext={proceed} />}
    </div>
  );
}
