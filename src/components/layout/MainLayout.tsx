export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col p-4 font-sans select-none">
      {/* 画面上部：戻るボタンや進捗 */}
      <header className="h-16 flex items-center justify-between">
        {/* ここに「戻る」ボタンを配置予定 */}
      </header>

      {/* メインコンテンツ：問題と回答 */}
      <main className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};
