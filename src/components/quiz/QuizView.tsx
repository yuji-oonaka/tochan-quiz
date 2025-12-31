"use client";

import { useEffect, useRef, useState } from "react"; // useStateを追加
import { useQuizStore } from "@/store/useQuizStore";
import { AnswerButton } from "@/components/quiz/AnswerButton";
import { useSound } from "@/hooks/useSound";
import { useSpeech } from "@/hooks/useSpeech";

export const QuizView = () => {
  const {
    currentIndex,
    shuffledChoices,
    status,
    questions,
    isSoundOn,
    toggleSound,
    selectChoice,
    proceed,
    goBack,
  } = useQuizStore();

  const { playSound } = useSound();
  const { speak, stop } = useSpeech();
  const currentQuestion = questions[currentIndex];
  const isTransitioning = useRef(false);

  // --- 【新設】誤操作防止：マウント直後の操作をロック ---
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 300); // 0.3秒のガード
    return () => clearTimeout(timer);
  }, [currentIndex]); // 問題が変わるたびにも一瞬ロックして安全性を高める

  useEffect(() => {
    return () => stop();
  }, [stop]);

  useEffect(() => {
    stop();
    isTransitioning.current = false;

    if (status === "answering" && currentQuestion && isSoundOn) {
      speak(currentQuestion.questionText);
    }

    if (status === "correct" && currentQuestion) {
      if (isSoundOn) {
        playSound("correct");
        const speakTimer = setTimeout(() => {
          speak(currentQuestion.explanation, () => {
            if (!isTransitioning.current) {
              isTransitioning.current = true;
              setTimeout(() => proceed(), 1500);
            }
          });
        }, 800);
        return () => clearTimeout(speakTimer);
      } else {
        const autoTimer = setTimeout(() => {
          if (!isTransitioning.current) {
            isTransitioning.current = true;
            proceed();
          }
        }, 5000);
        return () => clearTimeout(autoTimer);
      }
    }

    if (status === "incorrect") {
      if (isSoundOn) playSound("incorrect");
      const timer = setTimeout(() => proceed(), 2000);
      return () => clearTimeout(timer);
    }
  }, [status, currentQuestion?.id, isSoundOn, speak, stop, playSound, proceed]);

  const handleBackToTop = () => {
    stop();
    useQuizStore.setState({ status: "top" });
  };

  const handleManualNext = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    stop();
    if (isSoundOn) playSound("click");
    proceed();
  };

  if (!currentQuestion) return null;

  return (
    <div className="min-h-svh bg-[#f8f1e7] flex flex-col overflow-hidden">
      <header className="flex items-center justify-between px-4 pt-4 z-10">
        <button
          onClick={handleBackToTop}
          className="text-lg font-black text-[#1e3a8a]/70 bg-white/40 px-4 py-1.5 rounded-full"
        >
          🏠 もどる
        </button>
        <button
          onClick={() => speak(currentQuestion.questionText)}
          className="px-4 py-1.5 bg-white border border-[#1e3a8a]/20 rounded-full flex items-center gap-2 shadow-sm active:scale-95"
        >
          <span className="text-base">🔊</span>
          <span className="text-sm font-bold text-[#1e3a8a]">よむ</span>
        </button>
        <button onClick={toggleSound} className="text-3xl p-1 opacity-70">
          {isSoundOn ? "🔊" : "🔇"}
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6">
        {status === "answering" && (
          <h1 className="text-[1.8rem] sm:text-4xl font-serif font-black text-[#1f2937] text-center leading-normal tracking-tight text-balance">
            {currentQuestion.questionText}
          </h1>
        )}
      </main>

      <footer className="px-4 pb-10 z-10 w-full max-w-3xl mx-auto">
        {status === "answering" && (
          <>
            <div className="grid grid-cols-2 gap-4">
              {shuffledChoices.map((choice) => (
                <AnswerButton
                  key={choice.id}
                  text={choice.text}
                  onClick={() => {
                    if (isSoundOn) playSound("click");
                    selectChoice(choice.id);
                  }}
                  /* 💡 マウント直後はクリックを無効化して貫通を防ぐ */
                  disabled={status !== "answering" || !isReady}
                />
              ))}
            </div>

            {/* 💡 復活：前の問題に戻るボタン */}
            {currentIndex > 0 && (
              <button
                onClick={() => {
                  stop();
                  goBack();
                }}
                className="w-full text-center mt-6 text-[#1e3a8a]/40 font-bold text-sm py-2 active:opacity-60"
              >
                ← ひとつ前のもんだいに戻る
              </button>
            )}
          </>
        )}
      </footer>

      {/* 正解・不正解オーバーレイ ...（省略） */}
      {status === "correct" && (
        <div className="fixed inset-0 flex flex-col bg-[#f8f1e7]/98 z-50 animate-in fade-in duration-300">
          <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
            <div className="text-[8rem] leading-none mb-2 text-[#e63946] drop-shadow-sm">
              ⭕️
            </div>
            <div className="text-5xl font-black text-[#1e3a8a] mb-6">
              あたり！
            </div>
            <div className="bg-white/80 p-8 rounded-5xl border-2 border-[#1e3a8a]/10 w-full shadow-sm">
              <p className="text-2xl font-bold text-[#1f2937] leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          </div>
          <div className="p-10 w-full max-w-md mx-auto">
            <button
              onClick={handleManualNext}
              className="w-full py-8 bg-[#1e3a8a] text-white text-4xl font-black rounded-5xl shadow-2xl active:scale-95 transition-transform"
            >
              つぎへ ➔
            </button>
          </div>
        </div>
      )}

      {status === "incorrect" && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1e3a8a] z-50 text-white p-8 animate-in zoom-in duration-200">
          <div className="text-center">
            <div className="text-[10rem] mb-6">❌</div>
            <div className="text-5xl font-black leading-tight">
              ちがいました
              <br />
              <span className="text-3xl opacity-80 font-bold">もう一度！</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
