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

  // --- 【ラグ対策】ご褒美画像のプリロード ---
  useEffect(() => {
    const progressInSet = currentIndex % 10;

    // 7問目以降になったら、そのセットの報酬画像を先読みしておく
    if (progressInSet >= 7) {
      const setNumber = Math.floor(currentIndex / 10) + 1;
      // 画像は 0〜9 のいずれか（ロジックに合わせて調整してください）
      // ここでは現在のセットに対応する画像を念のためすべて、あるいは特定のものをロード
      const imageUrls = [
        `/images/rewards/set${setNumber}/L${setNumber - 1}.png`,
        // セット数とファイル名が連動している場合
      ];

      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    isTransitioning.current = false;

    // --- 【修正】問題文の読み上げロジック ---
    if (status === "answering" && currentQuestion && isSoundOn) {
      // よみがな用プロパティがあればそれを優先する
      const textToSpeak =
        currentQuestion.questionSpeech ?? currentQuestion.questionText;
      const timer = setTimeout(() => speak(textToSpeak), 100);
      return () => clearTimeout(timer);
    }

    if (status === "correct" && currentQuestion) {
      if (isSoundOn) {
        playSound("correct");

        // --- 【修正】解説の読み上げロジック ---
        const explanationToSpeak =
          currentQuestion.explanationSpeech ?? currentQuestion.explanation;
        const speakTimer = setTimeout(() => {
          speak(explanationToSpeak, () => {
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
      <div className="w-full max-w-2xl flex flex-col flex-1 h-full shadow-sm bg-[#f8f1e7]">
        <header className="px-4 pt-4 z-10 space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToTop}
              className="text-base font-black text-[#1e3a8a]/70 bg-white/40 px-4 py-1.5 rounded-full"
            >
              🏠 もどる
            </button>
            <button
              onClick={() =>
                speak(
                  currentQuestion.questionSpeech ?? currentQuestion.questionText
                )
              }
              className="px-4 py-1.5 bg-white border border-[#1e3a8a]/20 rounded-full flex items-center gap-2 shadow-sm active:scale-95"
            >
              <span className="text-base">🔊</span>
              <span className="text-sm font-bold text-[#1e3a8a]">よむ</span>
            </button>
            <button onClick={toggleSound} className="text-3xl p-1 opacity-70">
              {isSoundOn ? "🔊" : "🔇"}
            </button>
          </div>

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
                      // 1. クリック音は鳴らす
                      if (isSoundOn) playSound("click");

                      // 2. 【削除】選択肢の読み上げ(speak)は行わない

                      // 3. 選択処理へ進む
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

      {status === "correct" && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-[#f8f1e7]/98 px-6">
          <div className="w-full max-w-md h-full flex flex-col justify-between py-10">
            <div className="flex-1 flex flex-col items-center justify-center">
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
              onClick={handleManualNext}
              className="w-full py-7 bg-[#1e3a8a] text-white text-3xl font-black rounded-full shadow-xl"
            >
              つぎへ ➔
            </button>
          </div>
        </div>
      )}

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