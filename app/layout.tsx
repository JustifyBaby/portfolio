import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HERO.DEV — RPG Portfolio',
  description: 'エンジニアポートフォリオ — RPG風インタラクティブ設計',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
