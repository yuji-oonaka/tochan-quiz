"use client";

import { useCallback, useRef } from "react"; // useRefを追加 [cite: 95]

// --- 読み上げ訂正辞書 --- [cite: 96]
const PRONUNCIATION_MAP: Record<string, string> = {
  // --- 戦国・歴史 ---
  "豊臣秀吉": "とよとみひでよし",
  "今川義元": "いまがわよしもと",
  "武田信玄": "たけだしんげん",
  "上杉謙信": "うえすぎけんしん",
  "足利義昭": "あしかがよしあき",
  "徳川家康": "とくがわいえやす",
  "徳川家光": "とくがわいえみつ",
  "徳川慶喜": "とくがわよしのぶ",
  "明智光秀": "あけちみつひで",
  "真田幸村": "さなだゆきむら",
  "真田信繁": "さなだのぶしげ", // 幸村の別名
  "毛利元就": "もうりもとなり",
  "伊達政宗": "だてまさむね",
  "柴田勝家": "しばたかついえ",
  "石田三成": "いしだみつなり",
  "小早川秀秋": "こばやかわひであき",
  "本多忠勝": "ほんだただかつ",
  "黒田官兵衛": "くろだかんべえ",
  "竹中半兵衛": "たけなかはんべえ",
  "前田利家": "まえだとしいえ",
  "葛飾北斎": "かつしかほくさい",
  "天草四郎": "あまくさしろう",
  "桶狭間": "おけはざま",
  "関ヶ原": "せきがはら",
  "川中島": "かわなかじま",
  "墨俣": "すのまた",
  "三献茶": "さんこんちゃ",
  "征夷大将軍": "せいいたいしょうぐん",
  "大政奉還": "たいせいほうかん",
  "楽市・楽座": "らくいち・らくざ",
  "三日天下": "みっかてんか",
  "真田丸": "さなだまる",
  "出島": "でじま",
  "独眼竜": "どぐがんりゅう",
  "日本一の兵": "ひのもといちのつわもの",
  "赤備": "あかぞなえ",
  "孫子の兵法": "そんしのへいほう",
  "風林火山": "ふうりんかざん",
  "秀吉": "ひでよし",
  "豊臣家": "とよとみけ",
  "大坂の陣": "おおさかのじん",


  // --- 地名・名産 ---
  "焼津": "やいづ",
  "鯖江": "さばえ",
  "今治": "いまばり",
  "与那国島": "よなぐにじま",
  "瀬田の唐橋": "せたのからはし",
  "蒼社川": "そうじゃがわ",
  "夕張": "ゆうばり",
  "稚内": "わっかない",
  "信濃川": "しなのがわ",
  "利根川": "とねがわ",
  "駿河湾": "するがわん",

  // --- スポーツ・その他 ---
  "王貞治": "おうさだはる",
  "長嶋茂雄": "ながしましげお",
  "金田正一": "かねだまさいち",
  "野村克也": "のむらかつや",
  "張本勲": "はりもといさお",
  "一本足打法": "いっぽんあしだほう",
  "坂東太郎": "ばんどうたろう",
};

export const useSpeech = () => {
  // ★重要：読み上げオブジェクトをメモリ上に保持し続けるための参照
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const lastText = useRef<string>("");
  const lastTime = useRef<number>(0);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      lastText.current = ""; // リセット
    }
  }, []);

  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      onEnd?.();
      return;
    }

    const now = Date.now();
    // 重複ガード：0.5秒以内の全く同じテキストは無視する [cite: 95]
    if (text === lastText.current && now - lastTime.current < 500) {
      return;
    }
    lastText.current = text;
    lastTime.current = now;

    window.speechSynthesis.cancel();

    let spokenText = text;
    Object.entries(PRONUNCIATION_MAP).forEach(([kanji, kana]) => {
      spokenText = spokenText.split(kanji).join(kana);
    });
    const uttr = new SpeechSynthesisUtterance(spokenText);
    // ★重要：オブジェクトが破棄されないようにRefに入れる
    utteranceRef.current = uttr;
    
    const voices = window.speechSynthesis.getVoices();
    const japaneseVoice = voices.find(v => 
      (v.name.includes("Kyoko") || v.name.includes("Siri")) && v.lang === "ja-JP"
    ) || voices.find(v => v.lang === "ja-JP");

    if (japaneseVoice) {
      uttr.voice = japaneseVoice;
    }

    uttr.lang = "ja-JP";
    uttr.rate = 0.9; 
    uttr.pitch = 1.0;

    uttr.onend = () => {
      utteranceRef.current = null; // 終わったら解放 
      if (onEnd) onEnd();
    };
    // フリーズ防止用タイマー
    const timeoutId = setTimeout(() => {
      if (onEnd) onEnd();
    }, 15000);

    const originalOnEnd = uttr.onend;
    uttr.onend = (e) => {
      clearTimeout(timeoutId);
      originalOnEnd?.call(uttr, e);
    };
    window.speechSynthesis.speak(uttr);
  }, []);

  return { speak, stop };
};