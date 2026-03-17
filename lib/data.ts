import type {
  NavItem,
  Skill,
  Work,
  LearningEntry,
  CharacterStats,
} from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "ABOUT", num: "1" },
  { id: "skills", label: "SKILLS", num: "2" },
  { id: "works", label: "WORKS", num: "3" },
  { id: "contact", label: "CONTACT", num: "4" },
  { id: "learning", label: "LEARNING", num: "5" },
  { id: "demo", label: "DEMO", num: "6", beta: true },
];

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
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "Docker / K8s", level: 65, category: "infra" },
  { name: "AWS / GCP", level: 70, category: "infra" },
  { name: "Rust", level: 40, category: "other" },
  { name: "GraphQL", level: 68, category: "backend" },
];

// ─── Works ────────────────────────────────────────────────────────────────────
export const WORKS: Work[] = [
  {
    tag: "WEB APP",
    title: "DungeonCMS",
    description:
      "高速な管理画面CMSシステム。Next.js + Prisma + PostgreSQL構成。",
    stars: 4,
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    url: "https://github.com",
  },
  {
    tag: "OSS",
    title: "PixelUtils",
    description: "画像変換CLIライブラリ。npm累計2万DL達成。",
    stars: 3,
    stack: ["Node.js", "TypeScript"],
    url: "https://github.com",
  },
  {
    tag: "API",
    title: "DragonAPI",
    description: "TypeScript製REST/GraphQL双対応API。高スループット設計。",
    stars: 4,
    stack: ["TypeScript", "GraphQL", "Fastify"],
    url: "https://github.com",
  },
  {
    tag: "MOBILE",
    title: "QuestLog",
    description: "React Native製習慣記録アプリ。RPG風UIで習慣をクエスト化。",
    stars: 3,
    stack: ["React Native", "Expo"],
    url: "https://github.com",
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
  {
    id: "003",
    date: "2025-02-28",
    category: "Backend",
    title: "Bun 1.x の本番利用を試した",
    summary:
      "Node.js比で平均3〜4倍の処理速度。特にファイルI/OとHTTPサーバーが高速。package.jsonとの互換性もほぼ問題なし。",
    tags: ["Bun", "Runtime", "Performance"],
    url: "https://bun.sh",
  },
  {
    id: "004",
    date: "2025-02-20",
    category: "Infra",
    title: "Cloudflare Workers + D1 でサーバーレスDB",
    summary:
      "SQLiteベースのD1がGA。Workers環境から直接SQLが叩けてコールドスタートもゼロに近い。コスト的にも魅力的な選択肢。",
    tags: ["Cloudflare", "D1", "Edge"],
    url: "https://cloudflare.com",
  },
  {
    id: "005",
    date: "2025-02-10",
    category: "AI/ML",
    title: "RAGアーキテクチャのベストプラクティス2025",
    summary:
      "Hybrid Search（BM25+ベクトル検索）、Re-ranking、Contextual Compressionを組み合わせた高精度RAGの実装パターン。",
    tags: ["RAG", "LLM", "Vector DB"],
  },
];
