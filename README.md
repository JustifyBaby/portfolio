# Not implemented!! In addition, Readme is not written in English so I translate this.

# HERO.DEV — RPG Portfolio 🎮

レトロRPG風
Next.js 14 App Router + TypeScript + Tailwind CSS.

## ✦ セットアップ

```bash
# 依存関係をインストール
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで http://localhost:3000 を開く。

## ✦ ページ構成

| ページ   | パス        | 内容                                   |
| -------- | ----------- | -------------------------------------- |
| About    | `/about`    | 自己紹介・クエスト歴                   |
| Skills   | `/skills`   | スキルツリー（アニメーションバー）     |
| Works    | `/works`    | 制作物カード                           |
| Contact  | `/contact`  | 連絡先リスト                           |
| Learning | `/learning` | キャッチアップ備忘録（タグ・検索付き） |
| Demo β   | `/demo`     | 実験的プロジェクト一覧                 |

## ✦ カスタマイズ方法

### 個人情報・スキル・制作物を変更する

`lib/data.ts` を編集するだけ。

```ts
// キャラクター情報
export const CHARACTER: CharacterStats = {
  name: 'Your Name',
  ...
}

// スキル
export const SKILLS: Skill[] = [
  { name: 'TypeScript', level: 90, category: 'frontend' },
  ...
]

// 制作物
export const WORKS: Work[] = [...]

// Learning 備忘録 ← ここに追記していく
export const LEARNING_ENTRIES: LearningEntry[] = [
  {
    id: '001',
    date: '2025-03-10',
    category: 'AI/ML',
    title: '記事タイトル',
    summary: '学んだ内容のまとめ',
    tags: ['tag1', 'tag2'],
    url: 'https://...',
  },
  ...
]
```

### スプライト（ドット絵キャラ）を変更する

`components/rpg/PixelSprite.tsx` の `SPRITE_MAP` を編集。
8×8 の配列でパレットキー（H:肌, B:青, G:金, W:白, g:グレー, null:透明）を指定。

### ダイアログ文言を変更する

`lib/data.ts` の `PAGE_DIALOGS` を編集。

## ✦ 技術スタック

- **Framework**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS + CSS Variables
- **フォント**: Press Start 2P (Google Fonts)
- **スプライト**: Canvas API (PixelSprite.tsx)

## ✦ ディレクトリ構成

```
rpg-portfolio/
├── app/
│   ├── globals.css          # RPGスタイル・アニメーション定義
│   ├── layout.tsx
│   ├── page.tsx             # → /about にリダイレクト
│   ├── about/page.tsx
│   ├── skills/page.tsx
│   ├── works/page.tsx
│   ├── contact/page.tsx
│   ├── learning/page.tsx    # 備忘録ページ（タグフィルタ・検索）
│   └── demo/page.tsx
├── components/
│   ├── rpg/
│   │   ├── DialogBox.tsx    # タイプライター内蔵ダイアログ
│   │   ├── PixelSprite.tsx  # Canvas ドット絵
│   │   ├── SkillBar.tsx     # アニメーションスキルバー
│   │   ├── StatBar.tsx      # HP/MP/EXPバー
│   │   └── useTypewriter.ts # タイプライターフック
│   ├── layout/
│   │   ├── TopBar.tsx
│   │   ├── NavBar.tsx       # usePathname でアクティブ判定
│   │   ├── CharacterPanel.tsx
│   │   ├── PageShell.tsx    # 全ページ共通レイアウト
│   │   └── BottomBar.tsx
│   └── ui/
│       └── SectionTitle.tsx
├── lib/
│   └── data.ts              # 全データ定義（ここを編集）
└── types/
    └── index.ts
```
