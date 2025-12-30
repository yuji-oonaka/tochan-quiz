"use client";

export const useSound = () => {
  const playSound = (type: 'correct' | 'incorrect' | 'click') => {
    // 実際のファイルパス（public/sounds/フォルダに配置想定）
    const audio = new Audio(`/sounds/${type}.mp3`);
    audio.play().catch(() => {
      /* ユーザー操作前の再生エラー防止 */
    });
  };

  return { playSound };
};