import type { Metadata } from "next";
import "./globals.css";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "HERO.DEV — RPG Portfolio",
  description: "エンジニアポートフォリオ — RPG風インタラクティブ設計",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="max-w-full flex justify-center items-center">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
