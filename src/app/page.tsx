"use client";

import { useEffect } from "react";
import { useQuizStore } from "@/store/useQuizStore";
import { AnswerButton } from "@/components/quiz/AnswerButton";

// 動作確認用の仮データ
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
  } = useQuizStore();

  // 初回起動
  useEffect(() => {
    startQuiz(mockQuestions);
  }, [startQuiz]);

  // 正誤判定後の自動進行
  useEffect(() => {
    if (status === "correct" || status === "incorrect") {
      const timer = setTimeout(() => {
        proceed();
      }, 1500); // 1.5秒の「間」
      return () => clearTimeout(timer);
    }
  }, [status, proceed]);

  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col p-4">
      {/* 問題表示エリア */}
      <div className="flex-1 flex items-center justify-center p-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-800 text-center leading-snug">
          {currentQuestion.questionText}
        </h1>
      </div>

      {/* 回答エリア（2x2グリッド） */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {shuffledChoices.map((choice) => (
          <AnswerButton
            key={choice.id}
            text={choice.text}
            onClick={() => selectChoice(choice.id)}
            disabled={status !== "answering"}
          />
        ))}
      </div>

      {/* 正解演出レイヤー */}
      {status === "correct" && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/90 z-50">
          <div className="text-center">
            <div className="text-9xl mb-4">⭕️</div>
            <div className="text-5xl font-bold text-blue-600">あたり！</div>
          </div>
        </div>
      )}

      {/* 不正解演出レイヤー */}
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
    </div>
  );
}
