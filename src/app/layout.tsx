// src/app/layout.tsx

import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // お父様が誤操作でズームしないように固定
};

export const metadata: Metadata = {
  title: "父ちゃんクイズ",
  description: "ゆっくり、たのしく学ぶ歴史と教養の百問",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "父ちゃんクイズ",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" }, // 標準
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }, // ★追加
    ],
    apple: "/apple-icon.png",
  },
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
