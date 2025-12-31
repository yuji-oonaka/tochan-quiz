import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "父ちゃんクイズ",
  appleWebApp: {
    capable: true, // ホーム画面に追加した時にアプリとして動く
    statusBarStyle: "black-translucent",
    title: "父ちゃんクイズ",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // 勝手にズームされるのを防ぐ
  userScalable: false,
  viewportFit: "cover", // 画面の端（ノッチ周り）まで使う設定
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
