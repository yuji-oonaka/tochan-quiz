"use client";

import Image from "next/image";
import { useQuizStore } from "@/store/useQuizStore";

export const RewardOverlay = ({ onNext }: { onNext: () => void }) => {
  const { solvedCount } = useQuizStore();

  // 安全なインデックス計算（10問ごとに0, 1, 2...と進む）
  const imageIndex = Math.min(Math.floor((solvedCount - 1) / 10), 9);
  const imagePath = `/images/rewards/set1/L${imageIndex}.png`;

  return (
    <div className="fixed inset-0 z-100 bg-black flex justify-center">
      {/* PCでも中央に収まるように max-w-2xl コンテナを配置 */}
      <div className="relative w-full max-w-2xl h-full overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src={imagePath}
            alt="ご褒美背景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* UI部分 */}
        <div className="absolute inset-0 flex flex-col items-center justify-between px-6 py-12">
          <div className="text-center mt-4">
            <h2 className="text-5xl font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              {solvedCount}問正解！
            </h2>
            <p className="text-xl font-bold text-white mt-2 drop-shadow-md tracking-widest">
              おめでとうございます！
            </p>
          </div>

          <div className="w-full max-w-xs mb-6">
            <button
              onClick={onNext}
              className="w-full py-7 bg-blue-600 text-white text-3xl font-black rounded-full shadow-[0_8px_0_rgb(30,58,138)] border-t border-white/20 active:translate-y-1 transition-all"
            >
              つぎへ ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
