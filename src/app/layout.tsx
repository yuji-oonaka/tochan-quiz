import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "父ちゃんクイズ",
  description: "ゆっくり、たのしく学ぶ歴史と教養の百問",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "父ちゃんクイズ",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    // ★ apple-touch-icon.png を優先的に指定
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // 勝手にズームされるのを防ぐ
  userScalable: false,
  viewportFit: "cover", // 画面の端（ノッチ周り）まで使う設定
  themeColor: "#1e3a8a", // ブラウザのテーマカラー
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
