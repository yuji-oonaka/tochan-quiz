"use client";

export const AnswerButton = ({
  text,
  onClick,
  disabled,
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <div className="relative w-full">
      {/* ボタン本体 */}
      <button
        onClick={onClick}
        disabled={disabled}
        className="
          w-full min-h-28 p-4
          /* 藍色の背景 */
          bg-[#1e3a8a]
          /* 落ち着いた文字色 */
          text-[#fdfbf7]
          text-2xl font-black
          rounded-4xl
          
          /* --- 立体感の演出 --- */
          /* 1. 通常時の厚み（濃い藍色の影） */
          shadow-[0_8px_0_rgb(12,28,68)]
          border-t border-white/10
          
          /* 2. 押した瞬間の挙動 */
          /* 4px下に沈み込み、厚みを半分にする */
          active:translate-y-1
          active:shadow-[0_4px_0_rgb(12,28,68)]
          
          /* 3. 反応の速さ */
          transition-all duration-75
          
          flex items-center justify-center text-center
          disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none
        "
      >
        <span className="leading-tight">{text}</span>
      </button>
    </div>
  );
};
