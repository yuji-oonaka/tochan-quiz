"use client";

import Image from "next/image";
import { useQuizStore } from "@/store/useQuizStore";

export const RewardOverlay = ({ onNext }: { onNext: () => void }) => {
  const { solvedCount } = useQuizStore();

  // 安全なインデックス計算（10問ごとに0, 1, 2...と進む）
  const imageIndex = Math.min(Math.floor((solvedCount - 1) / 10), 9);
  const imagePath = `/images/rewards/set1/L${imageIndex}.png`;

  return (
    // fixed inset-0 で画面の端から端まで（全画面）を確保します
    <div className="fixed inset-0 z-100 bg-black overflow-hidden">
      {/* --- レイヤー1：背景画像（余白なし） --- */}
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt="ご褒美背景"
          fill
          // object-cover で隙間なく画面を埋めます
          className="object-cover"
          priority
        />
        {/* 画像の上に薄い影を落として、文字を見やすくします */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* --- レイヤー2：操作UI（文字とボタン） --- */}
      {/* flex-col と justify-between を使い、上下に要素を配置します */}
      <div className="absolute inset-0 flex flex-col items-center justify-between px-6 py-12">
        {/* 上部：お祝いテキスト */}
        <div className="text-center mt-4">
          <h2 className="text-5xl font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            {solvedCount}問正解！
          </h2>
          <p className="text-xl font-bold text-white mt-2 drop-shadow-md tracking-widest">
            おめでとうございます！
          </p>
        </div>

        {/* 下部：つぎへボタン */}
        {/* iPhone SE3を考慮し、画面下部から少し浮かせて配置します */}
        <div className="w-full max-w-xs mb-6">
          <button
            onClick={onNext}
            className="
              w-full py-7
              bg-blue-600 text-white 
              text-3xl font-black 
              rounded-full 
              shadow-[0_8px_0_rgb(30,58,138)]
              border-t border-white/20
              active:translate-y-1 active:shadow-[0_4px_0_rgb(30,58,138)]
              transition-all duration-75
            "
          >
            つぎへ ➔
          </button>
        </div>
      </div>
    </div>
  );
};
