export const RewardOverlay = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="fixed inset-0 bg-white z-60 flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-bold text-orange-500 mb-8">
        10問正解！
        <br />
        お見事です！
      </h2>
      <div className="w-full max-w-sm aspect-square bg-slate-200 rounded-2xl flex items-center justify-center mb-8">
        {/* ここに報酬画像が表示される */}
        <span className="text-slate-400">【ここに綺麗な風景写真など】</span>
      </div>
      <button
        onClick={onNext}
        className="px-12 py-6 bg-orange-500 text-white text-3xl font-bold rounded-full shadow-xl active:scale-95 transition-transform"
      >
        次へ進む
      </button>
    </div>
  );
};
