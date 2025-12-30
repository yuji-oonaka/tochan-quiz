type Props = {
  text: string;
  onClick: () => void;
};

export const AnswerButton = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full h-24 text-2xl font-bold rounded-2xl
        bg-blue-600 text-white
        shadow-[0_8px_0_0_rgba(29,78,216,1)] /* 濃い青の立体感 */
        active:shadow-none active:translate-y-2 /* 押した時に沈む */
        transition-all duration-75
        flex items-center justify-center px-4 text-center
      "
    >
      {text}
    </button>
  );
};
