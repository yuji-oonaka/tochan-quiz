"use client";

import { useCallback, useRef } from "react";
import { PRONUNCIATION_MAP } from "@/data/pronunciationDictionary";

export const useSpeech = () => {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const lastText = useRef<string>("");
  const lastTime = useRef<number>(0);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      // ★重要：読み上げを止める前に、終了後の予約イベントを完全に消去する
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

    const now = Date.now();
    if (text === lastText.current && now - lastTime.current < 500) return;
    lastText.current = text;
    lastTime.current = now;

    // 前の読み上げを止める（ここでもonendを無効化しておく）
    if (utteranceRef.current) {
      utteranceRef.current.onend = null;
    }
    window.speechSynthesis.cancel();

    let spokenText = text;
    Object.entries(PRONUNCIATION_MAP).forEach(([kanji, kana]) => {
      spokenText = spokenText.split(kanji).join(kana);
    });

    const uttr = new SpeechSynthesisUtterance(spokenText);
    utteranceRef.current = uttr; 

    const voices = window.speechSynthesis.getVoices();
    const japaneseVoice = voices.find(v => 
      (v.name.includes("Kyoko") || v.name.includes("Siri")) && v.lang === "ja-JP"
    ) || voices.find(v => v.lang === "ja-JP");

    if (japaneseVoice) uttr.voice = japaneseVoice;
    uttr.lang = "ja-JP";
    uttr.rate = 0.9;
    uttr.pitch = 1.0;

    uttr.onend = () => {
      utteranceRef.current = null;
      if (onEnd) onEnd();
    };

    // タイムアウト監視（念のためのセーフティ）
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