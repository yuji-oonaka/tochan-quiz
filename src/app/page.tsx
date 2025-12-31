"use client";

import { useEffect, useState } from "react";
import { useQuizStore } from "@/store/useQuizStore";
import { TopView } from "@/components/quiz/TopView";
import { QuizView } from "@/components/quiz/QuizView";
import { RewardOverlay } from "@/components/quiz/RewardOverlay";
import { EndingSequence } from "@/components/quiz/EndingSequence";
import { allQuestions } from "@/data/questions/allQuestions";

export default function QuizPage() {
  const { status, startQuiz, proceed, resetQuiz } = useQuizStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    startQuiz(allQuestions);
  }, [startQuiz]);

  // 【重要】マウント完了までサーバーと同じ「TopView」を出し続け、
  // クライアント側で準備ができたら初めて実際のステータス（続きから等）に切り替える
  if (!mounted) {
    return <TopView isServerRendering={true} />;
  }

  if (status === "top") return <TopView />;
  if (status === "reward") return <RewardOverlay onNext={proceed} />;
  if (status === "ending") return <EndingSequence onRestart={resetQuiz} />;

  return <QuizView />;
}
