"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const EndingSequence = ({ onRestart }: { onRestart: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        if (prev < 9) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // 最後の画像を表示してから3秒後に、終了ボタンを表示する
          setTimeout(() => setIsFinished(true), 3000);
          return prev;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-100 flex items-center justify-center">
      {/* --- 背景：思い出のスライドショー --- */}
      <div className="relative w-full h-full max-w-4xl">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={`/images/rewards/set1/L${index}.png`}
              alt="思い出の画像"
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* --- 終了メッセージとボタンのオーバーレイ --- */}
      {isFinished && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-8 animate-in fade-in duration-1000">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-serif font-black text-white mb-6 tracking-widest">
              全百問 終了
            </h2>
            <p className="text-2xl font-bold text-white/80 leading-relaxed">
              お疲れ様でした！
              <br />
              ゆっくり休んでくださいね。
            </p>
          </div>

          <div className="w-full max-w-sm space-y-6">
            <button
              onClick={onRestart}
              className="w-full py-8 bg-[#1e3a8a] text-white text-3xl font-black rounded-full shadow-[0_8px_0_rgb(12,28,68)] active:translate-y-1 active:shadow-[0_4px_0_rgb(12,28,68)] transition-all"
            >
              もう一度、最初から ➔
              <span className="block text-sm font-normal mt-1 opacity-70">
                （問題の順番がバラバラに出ます）
              </span>
            </button>

            <button
              onClick={() => window.location.reload()}
              className="w-full text-white/40 font-bold text-lg py-4 active:opacity-60"
            >
              トップ画面にもどる
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
