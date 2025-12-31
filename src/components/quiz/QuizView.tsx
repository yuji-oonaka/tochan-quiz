"use client";

import { useEffect, useRef, useState } from "react";
import { useQuizStore } from "@/store/useQuizStore";
import { AnswerButton } from "@/components/quiz/AnswerButton";
import { useSound } from "@/hooks/useSound";
import { useSpeech } from "@/hooks/useSpeech";

export const QuizView = () => {
  const {
    currentIndex,
    solvedCount,
    shuffledChoices,
    status,
    questions,
    isSoundOn,
    toggleSound,
    selectChoice,
    proceed,
    retryQuestion,
    goBack,
  } = useQuizStore();

  const { playSound } = useSound();
  const { speak, stop } = useSpeech();
  const currentQuestion = questions[currentIndex];
  const isTransitioning = useRef(false);

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    return () => stop();
  }, [stop]);

  useEffect(() => {
    isTransitioning.current = false;
    if (status === "answering" && currentQuestion && isSoundOn) {
      const timer = setTimeout(() => speak(currentQuestion.questionText), 100);
      return () => clearTimeout(timer);
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
      const timer = setTimeout(() => retryQuestion(), 2000);
      return () => clearTimeout(timer);
    }
  }, [
    status,
    currentQuestion?.id,
    isSoundOn,
    speak,
    playSound,
    proceed,
    retryQuestion,
  ]);

  // --- 【重要】進捗計算の修正：現在の問題番号(currentIndex)に完全にリンクさせる ---
  // これにより「戻る」を押しても、その問題に応じたバーの状態に正しく戻ります
  const progressInSet = currentIndex % 10;
  const remaining = 10 - progressInSet;

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
    <div className="min-h-svh bg-[#f8f1e7] flex flex-col items-center overflow-x-hidden">
      {/* PC・タブレットでの広がりすぎを防ぐコンテナ */}
      <div className="w-full max-w-2xl flex flex-col flex-1 h-full shadow-sm bg-[#f8f1e7]">
        {/* ヘッダー：2段構成 */}
        <header className="px-4 pt-4 z-10 space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToTop}
              className="text-base font-black text-[#1e3a8a]/70 bg-white/40 px-4 py-1.5 rounded-full"
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
          </div>

          {/* 進捗バー：問題番号に連動 */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 sm:gap-1.5">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`w-5 h-2.5 sm:w-6 sm:h-3 rounded-full border-2 transition-all duration-500 ${
                    i < progressInSet
                      ? "bg-[#e63946] border-[#e63946] shadow-[0_0_8px_rgba(230,57,70,0.3)]"
                      : "bg-white/50 border-[#1e3a8a]/10"
                  }`}
                />
              ))}
            </div>
            <p className="text-[10px] font-black text-[#1e3a8a]/40 tracking-widest uppercase">
              あと {remaining} 問で ひと区切り
            </p>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-6 py-8">
          {status === "answering" && (
            <h1 className="text-[1.8rem] sm:text-4xl font-serif font-black text-[#1f2937] text-center leading-normal tracking-tight text-balance">
              {currentQuestion.questionText}
            </h1>
          )}
        </main>

        <footer className="px-4 pb-10 z-10 w-full">
          {status === "answering" && (
            <div className="max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                {shuffledChoices.map((choice) => (
                  <AnswerButton
                    key={choice.id}
                    text={choice.text}
                    onClick={() => {
                      if (isSoundOn) playSound("click");
                      selectChoice(choice.id);
                    }}
                    disabled={status !== "answering" || !isReady}
                  />
                ))}
              </div>
              {currentIndex > 0 && (
                <button
                  onClick={() => {
                    stop();
                    goBack();
                  }}
                  className="w-full text-center mt-8 text-[#1e3a8a]/40 font-bold text-sm py-2 active:opacity-60"
                >
                  ← ひとつ前のもんだいに戻る
                </button>
              )}
            </div>
          )}
        </footer>
      </div>

      {/* --- 正解オーバーレイ：⭕️を小さくして「文字」を主役にする --- */}
      {status === "correct" && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-[#f8f1e7]/98 px-6">
          <div className="w-full max-w-md h-full flex flex-col justify-between py-10">
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* ★ アイコンを小さくして、下の解説文のスペースを空ける */}
              <div className="text-[5rem] leading-none mb-1 text-[#e63946]">
                ⭕️
              </div>
              <div className="text-3xl font-black text-[#1e3a8a] mb-6">
                あたり！
              </div>
              <div className="bg-white p-6 rounded-3xl border border-[#1e3a8a]/10 w-full shadow-sm overflow-y-auto max-h-[50%]">
                <p className="text-xl font-bold text-[#1f2937] leading-relaxed text-center">
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                playSound("click");
                proceed();
              }}
              className="w-full py-7 bg-[#1e3a8a] text-white text-3xl font-black rounded-full shadow-xl"
            >
              つぎへ ➔
            </button>
          </div>
        </div>
      )}

      {/* 不正解オーバーレイ：こちらもシンプルに */}
      {status === "incorrect" && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1e3a8a] z-50 text-white p-8 animate-in zoom-in duration-200">
          <div className="text-center">
            <div className="text-[7rem] sm:text-[9rem] mb-4">❌</div>
            <div className="text-3xl sm:text-4xl font-black leading-tight">
              ちがいました
              <br />
              <span className="text-xl sm:text-2xl opacity-80 font-bold">
                もう一度！
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
