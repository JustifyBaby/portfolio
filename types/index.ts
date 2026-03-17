// ─── Navigation ───────────────────────────────────────────────────────────────
export type PageId =
  | "about"
  | "skills"
  | "works"
  | "contact"
  | "demo"
  | "learning";

export interface NavItem {
  id: PageId;
  label: string;
  num: string;
  beta?: boolean;
}

// ─── Skills ───────────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "infra" | "other";
}

// ─── Works ────────────────────────────────────────────────────────────────────
export interface Work {
  tag: string;
  title: string;
  description: string;
  stars: number;
  url?: string;
  stack?: string[];
}

// ─── Learning ─────────────────────────────────────────────────────────────────
export interface LearningEntry {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  url?: string;
}

// ─── Character ────────────────────────────────────────────────────────────────
export interface CharacterStats {
  name: string;
  jobClass: string;
  guild: string;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  exp: number;
  level: number;
  str: number;
  int: number;
  agi: number;
  luck: number;
}
