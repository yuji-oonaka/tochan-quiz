"use client";

type Props = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

export const AnswerButton = ({ text, onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        w-full h-24 sm:h-32 text-2xl sm:text-3xl font-bold rounded-3xl
        bg-blue-600 text-white
        shadow-[0_8px_0_0_rgba(29,78,216,1)] /* 立体感のある影 */
        active:shadow-none active:translate-y-2 /* 押した時に沈む演出 */
        transition-all duration-75
        flex items-center justify-center px-4 text-center
        wrap-break-words leading-tight
      "
    >
      {text}
    </button>
  );
};
