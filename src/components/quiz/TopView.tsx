"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useQuizStore } from "@/store/useQuizStore";
import { useSound } from "@/hooks/useSound";

interface TopViewProps {
  isServerRendering?: boolean;
}

export const TopView = ({ isServerRendering = false }: TopViewProps) => {
  // resetAllData を追加で取り出します
  const { currentIndex, isSoundOn, toggleSound, initQuiz, resetAllData } =
    useQuizStore();
  const { playSound } = useSound();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStart = () => {
    if (isSoundOn) playSound("click");
    initQuiz();
  };

  // 進捗をリセットする処理
  const handleReset = () => {
    // お父様が誤って触れてしまった時のための確認
    if (confirm("これまでの進捗を消して、最初からやり直しますか？")) {
      resetAllData();
      // 念のため画面をリロードして状態を確実に初期化します
      window.location.reload();
    }
  };

  const isActualMounted = mounted && !isServerRendering;
  const buttonText =
    isActualMounted && currentIndex > 0 ? "つづきから" : "はじめる";
  const soundText = isActualMounted && !isSoundOn ? "なし" : "あり";

  return (
    <div className="fixed inset-0 bg-[#f8f1e7] flex flex-col items-center justify-between p-8 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <Image
          src="/images/rewards/set1/L0.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="z-10 mt-16 text-center">
        <h1 className="text-7xl font-serif font-black text-[#1e3a8a] tracking-tight mb-4 drop-shadow-sm">
          父ちゃんクイズ
        </h1>
        <div className="inline-block px-5 py-1.5 border-t-2 border-b-2 border-[#1e3a8a]/20">
          <p className="text-xl font-bold text-[#374151] tracking-[0.25em]">
            〜ゆっくり、たのしく〜
          </p>
        </div>
      </div>

      <div className="z-10 w-full max-w-xs flex flex-col gap-8">
        <div className="relative w-full">
          <button
            onClick={handleStart}
            className="w-full py-10 bg-[#1e3a8a] text-[#fdfbf7] text-5xl font-black rounded-4xl shadow-[0_10px_0_rgb(12,28,68)] border-t border-white/10 active:translate-y-1.5 active:shadow-[0_4px_0_rgb(12,28,68)] transition-all duration-75 flex items-center justify-center"
          >
            {buttonText}
          </button>
        </div>
        <p className="text-center text-[#374151]/60 font-black tracking-widest text-sm italic">
          歴史と教養の百問
        </p>
      </div>

      <div className="z-10 mb-4 w-full max-w-xs flex flex-col gap-6">
        {/* 音量切り替えボタン */}
        <button
          onClick={toggleSound}
          className="w-full py-4 bg-white/60 text-[#1e3a8a] text-lg font-black rounded-full border-2 border-[#1e3a8a]/10 shadow-[0_4px_0_rgba(30,58,138,0.1)] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-4 transition-all duration-75"
        >
          <span className="text-3xl">
            {isActualMounted && !isSoundOn ? "🔇" : "🔊"}
          </span>
          <span>音は {soundText}</span>
        </button>

        {/* --- 【追加】データリセットボタン --- */}
        {/* 進捗がある時（currentIndex > 0）だけ表示します */}
        {isActualMounted && currentIndex > 0 && (
          <button
            onClick={handleReset}
            className="w-full text-center text-[#1e3a8a]/30 font-bold text-sm py-2 active:opacity-60"
          >
            最初からやり直す（進捗を消す）
          </button>
        )}
      </div>

      <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-[#1e3a8a]/5 rounded-tl-2xl" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-[#1e3a8a]/5 rounded-br-2xl" />
    </div>
  );
};
