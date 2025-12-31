# 父ちゃんクイズ (Father Quiz)

お父様が歴史や教養を「ゆっくり、たのしく」学べるように設計された、Next.jsベースのクイズアプリケーションです。

## 🌟 特徴

### 1. 段階的な学習体験（インテリジェント・シャッフル）

* **1周目**: 基礎からしっかり学べるよう、問題セットの順番（Set 01〜10）通りに出題されます。
* **2周目以降**: 全100問を完全にシャッフル。一問一問がランダムに出題されるため、飽きずに長く楽しめます。

### 2. 徹底したアクセシビリティ

* **音声読み上げ**: 問題文と解説を合成音声で読み上げ。視認性だけでなく聴覚的にもサポートします。
* **確実な音声再生**: ブラウザの制限を考慮し、必ずトップ画面の「つづきから」ボタンを介して再開することで、読み上げ機能を確実に有効化します。

### 3. モチベーション維持の仕組み

* **10問区切りのプログレスバー**: 「あと何問でひと区切りか」を視覚的に表示。現在の問題番号と完全に連動します。
* **ご褒美画面**: 10問正解するごとに特別な画像とお祝いメッセージを表示し、達成感を演出します。

### 4. ユニバーサル・レスポンシブデザイン

* **iPhone SE3 最適化**: 画面の高さが低い端末でも、ボタンが押し出されないよう垂直方向の余白を緻密に計算。
* **PC対応**: 大きな画面でもコンテンツが中央に集まり、視線の移動を最小限に抑える設計を採用。

---

## 🛠 技術スタック

* **Framework**: Next.js (App Router)
* **State Management**: Zustand + Persist Middleware (進捗の自動保存)
* **Styling**: Tailwind CSS
* **Icons/Images**: Next Image
* **Speech**: Web Speech API (Custom Hook)
* **Sound**: HTML5 Audio (Custom Hook)

---

## 🚀 はじめかた

### 1. 依存関係のインストール

```bash
npm install
# または
yarn install

```

### 2. 開発サーバーの起動

```bash
npm run dev
# または
yarn dev

```

### 3. デプロイ

Vercelなどのプラットフォームにそのままデプロイ可能です。

---

## 📝 開発者向けノート

### 進捗管理ロジック

`useQuizStore.ts` にて、`isShuffled` フラグを管理しています。

* `resetAllData()`: 1周目の順番通りの状態（Set 01の1問目）に戻します。
* `resetQuiz()`: 全問をシャッフルし、2周目のランダムモードへ移行します。

### 音声読み上げの辞書

`src/constants/pronunciationDictionary.ts` を編集することで、戦国武将や難読地名の読み方を微調整できます。

---

## ❤️ Credits

Designed with love for my father.

Would you like me to **modify any specific section of this README**, or shall we **add a section about how to add new quiz questions**?
