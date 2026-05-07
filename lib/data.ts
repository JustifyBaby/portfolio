import type {
  NavItem,
  Skill,
  Work,
  LearningEntry,
  CharacterStats,
} from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "works", label: "WORKS" },
  { id: "dev-url", label: "DEV URLS" },
  { id: "contact", label: "CONTACT" },
  { id: "learning", label: "LEARNING" },
  { id: "blog", label: "BLOG" },
  { id: "demo", label: "DEMO", beta: true },
] as const satisfies readonly NavItem[];

// ─── Dialog messages ──────────────────────────────────────────────────────────
export const PAGE_DIALOGS: Record<
  string,
  { speaker: string; message: string }
> = {
  about: {
    speaker: "▸ GUIDE",
    message:
      "ここは【About】のページ。\n勇者の素性と歩んできた冒険の歴史が刻まれている。",
  },
  skills: {
    speaker: "▸ STATUS",
    message:
      "【Skills】のページへようこそ。\n習得した魔法と技術の一覧を確認できる。",
  },
  works: {
    speaker: "▸ BARD",
    message:
      "【Works】のページじゃ。\n数々の冒険で築いた制作物の記録が眠っている。",
  },
  contact: {
    speaker: "▸ INN KEEPER",
    message: "【Contact】のページへ。\n旅人よ、伝令を送りたくば遠慮なく。",
  },
  devUrl: {
    speaker: "▸ DEVELOPER",
    message: "【Dev URLs】のページへ。\n開発関連のリソースにアクセスできる。",
  },
  learning: {
    speaker: "▸ SAGE",
    message:
      "【Learning】の書庫へようこそ。\n旅の中でキャッチアップした知識の備忘録じゃ。\n新しい呪文を覚えたら、ここに記せ。",
  },
  demo: {
    speaker: "▸ RESEARCHER",
    message:
      "【DEMO β】ページへ踏み込んだか…\n未完成の実験場だ。足元に気をつけろ！",
  },
};

// ─── Character ────────────────────────────────────────────────────────────────
export const CHARACTER: CharacterStats = {
  name: "Taro Dev",
  jobClass: "ENGINEER",
  guild: "Web Order",
  hp: 92,
  maxHp: 100,
  mp: 75,
  maxMp: 100,
  exp: 63,
  level: 12,
  str: 88,
  int: 95,
  agi: 82,
  luck: 77,
};

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS: Skill[] = [
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "React / Next.js", level: 85, category: "frontend" },
  { name: "CSS / Tailwind", level: 82, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Python", level: 72, category: "backend" },
  { name: "PostgreSQL", level: 35, category: "backend" },
  { name: "Docker / K8s", level: 12, category: "infra" },
  { name: "AWS / GCP", level: 5, category: "infra" },
  { name: "Rust", level: 30, category: "other" },
];

// ─── Works ────────────────────────────────────────────────────────────────────
export const WORKS: Work[] = [
  {
    tag: "WEB APP",
    title: "future-clock",
    description:
      "〇時間後の時間を登録して表示する、名前付き世界時計というべきか",
    stars: 4,
    stack: ["Next.js", "Firebase"],
    url: "https://future-clock-black.vercel.app",
  },
  {
    tag: "WEB APP",
    title: "Kanji Reads",
    description: "3つのランダムな漢字の列に読み方をつける遊び。",
    stars: 0,
    stack: ["Next.js", "Prisma", "PostgreSQL", "Clerk"],
    url: "nonpublic",
  },
  {
    tag: "BASEMENT SYSTEM",
    title: "Shft App Service",
    description:
      "シフトをフォームで取り、スプレッドシートに保存し、それを編集してPDFでシフト表配布。文化祭向け",
    stars: 0,
    stack: ["GAS", "clasp"],
    url: "nonpublic",
  },
];

// ─── Learning entries ─────────────────────────────────────────────────────────
export const LEARNING_ENTRIES: LearningEntry[] = [
  {
    id: "001",
    date: "2025-03-10",
    category: "AI/ML",
    title: "Claude 3.5 Sonnet の新機能まとめ",
    summary:
      "Computer Use API が正式リリース。ブラウザ操作・ファイル操作を自律的に行えるエージェント機能。Vision精度も大幅向上。",
    tags: ["Claude", "LLM", "Agent"],
    url: "https://anthropic.com",
  },
  {
    id: "002",
    date: "2025-03-05",
    category: "Frontend",
    title: "Next.js 15 App Router パフォーマンス改善",
    summary:
      "Partial Prerendering (PPR) が安定版に。静的+動的コンテンツをシームレスに混在させつつ初期表示を高速化できる。",
    tags: ["Next.js", "PPR", "Performance"],
    url: "https://nextjs.org",
  },
];
