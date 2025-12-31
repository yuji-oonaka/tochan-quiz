"use client";

export const useSound = () => {
  const playSound = (type: 'correct' | 'incorrect' | 'click') => {
    const audio = new Audio(`/sounds/${type}.mp3`);

    // --- 音量の個別設定（0.0 〜 1.0） ---
    // 1.0だと大きすぎるため、0.3〜0.5程度に抑えるのが「読み上げ」とのバランスが良いです
    switch (type) {
      case 'correct':
        audio.volume = 0.4; // ピンポーンを優しく
        break;
      case 'incorrect':
        audio.volume = 0.3; // ブブーは音がきつい傾向にあるため、さらに控えめに
        break;
      case 'click':
        audio.volume = 0.3; // カチッという音も控えめに
        break;
      default:
        audio.volume = 0.5;
    }

    audio.play().catch(() => {
      /* ユーザー操作前の再生エラー防止 */
    });
  };

  return { playSound };
};