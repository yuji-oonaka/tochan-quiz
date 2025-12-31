"use client";

import { useCallback, useRef } from "react";

/**
 * 【修正のポイント】
 * 1. 外部辞書（PRONUNCIATION_MAP）への依存を削除
 * 2. 渡されたテキスト（読み上げ用テキスト）をそのまま読み上げる
 * 3. iPhoneでの安定性のためのRef管理とCancelロジックは維持
 */
export const useSpeech = () => {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const lastText = useRef<string>("");
  const lastTime = useRef<number>(0);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      if (utteranceRef.current) {
        utteranceRef.current.onend = null;
        utteranceRef.current.onerror = null;
      }
      window.speechSynthesis.cancel();
      lastText.current = "";
    }
  }, []);

  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      onEnd?.();
      return;
    }

    // 短時間の重複リクエストをガード
    const now = Date.now();
    if (text === lastText.current && now - lastTime.current < 500) return;
    lastText.current = text;
    lastTime.current = now;

    // 前の読み上げを強制終了
    if (utteranceRef.current) {
      utteranceRef.current.onend = null;
    }
    window.speechSynthesis.cancel();

    // ★修正：辞書置換を行わず、渡されたテキスト（読み上げ専用データ）をそのまま使う
    const uttr = new SpeechSynthesisUtterance(text);
    utteranceRef.current = uttr; 

    const voices = window.speechSynthesis.getVoices();
    const japaneseVoice = voices.find(v => 
      (v.name.includes("Kyoko") || v.name.includes("Siri")) && v.lang === "ja-JP"
    ) || voices.find(v => v.lang === "ja-JP");

    if (japaneseVoice) uttr.voice = japaneseVoice;
    uttr.lang = "ja-JP";
    uttr.rate = 0.9; // お父様に合わせて少しゆっくり
    uttr.pitch = 1.0;

    // 終了時の処理
    uttr.onend = () => {
      utteranceRef.current = null;
      if (onEnd) onEnd();
    };

    // セーフティタイマー（iPhone等で稀にonendが発火しない現象への対策）
    const timeoutId = setTimeout(() => {
      if (utteranceRef.current === uttr) {
        uttr.onend?.(new SpeechSynthesisEvent("end", { utterance: uttr }));
      }
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