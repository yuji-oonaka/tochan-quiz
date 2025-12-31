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
      <button
        onClick={onClick}
        disabled={disabled}
        className="
          w-full min-h-22 p-3
          bg-[#1e3a8a] text-[#fdfbf7]
          /* ★ 文字サイズを1.25rem(xl)に固定。長文でも2行で収まりやすいサイズです */
          text-xl font-black
          rounded-3xl shadow-[0_6px_0_rgb(12,28,68)] border-t border-white/10
          active:translate-y-1 active:shadow-[0_3px_0_rgb(12,28,68)]
          transition-all duration-75 flex items-center justify-center text-center
          disabled:opacity-50
        "
      >
        <span className="leading-tight">{text}</span>
      </button>
    </div>
  );
};
