"use client";
import { useState } from "react";
import PageShell from "@/components/layout/PageShell";
import DialogBox from "@/components/rpg/DialogBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { PAGE_DIALOGS, LEARNING_ENTRIES } from "@/lib/data";
import type { LearningEntry } from "@/types";

const CATEGORY_COLOR: Record<string, string> = {
  "AI/ML": "#c080ff",
  Frontend: "#4080e0",
  Backend: "#40c080",
  Infra: "#c08040",
};

function EntryCard({ entry }: { entry: LearningEntry }) {
  const [open, setOpen] = useState(false);
  const color = CATEGORY_COLOR[entry.category] ?? "var(--gray)";

  return (
    <div
      style={{
        border: `1px solid ${open ? color : "var(--border2)"}`,
        background: "rgba(10,10,40,.7)",
        marginBottom: 8,
        transition: "border-color .15s",
      }}
    >
      {/* Header row */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-start gap-3 p-3"
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        {/* toggle arrow */}
        <span
          style={{
            fontSize: "8px",
            color,
            marginTop: 1,
            transition: "transform .2s",
            display: "inline-block",
            transform: open ? "rotate(90deg)" : "none",
            flexShrink: 0,
          }}
        >
          ▶
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span
              style={{
                fontSize: "5px",
                color,
                border: `1px solid ${color}`,
                padding: "1px 5px",
                flexShrink: 0,
              }}
            >
              {entry.category}
            </span>
            <span style={{ fontSize: "5px", color: "var(--gray)" }}>
              {entry.date}
            </span>
          </div>
          <p
            style={{
              fontSize: "7px",
              color: "var(--rpg-white)",
              lineHeight: 1.8,
            }}
          >
            {entry.title}
          </p>
        </div>
      </button>

      {/* Expanded body */}
      {open && (
        <div
          style={{
            padding: "0 12px 12px 12px",
            borderTop: `1px solid ${color}33`,
          }}
          className="animate-fadeIn"
        >
          <p
            style={{
              fontSize: "6px",
              color: "var(--gray)",
              lineHeight: 2.3,
              marginBottom: 10,
              marginTop: 8,
            }}
          >
            {entry.summary}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-2">
            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "4px",
                    color: "var(--gray)",
                    border: "1px solid var(--border2)",
                    padding: "1px 5px",
                    background: "rgba(68,68,204,.1)",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Link */}
            {entry.url && (
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "5px",
                  color,
                  textDecoration: "none",
                  border: `1px solid ${color}`,
                  padding: "2px 8px",
                }}
              >
                ▶ 参照リンク
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function LearningPage() {
  const d = PAGE_DIALOGS.learning;
  const allCategories = [...new Set(LEARNING_ENTRIES.map((e) => e.category))];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = LEARNING_ENTRIES.filter((e) => {
    const matchCat = !activeCategory || e.category === activeCategory;
    const matchSearch =
      !search ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
      e.summary.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <PageShell>
      <DialogBox speaker={d.speaker} message={d.message} />

      <div className="flex-1 overflow-y-auto animate-fadeIn flex flex-col gap-3">
        <SectionTitle>
          ◈ LEARNING LOG
          <span
            style={{ fontSize: "6px", color: "var(--gray)", marginLeft: 8 }}
          >
            {filtered.length} / {LEARNING_ENTRIES.length} entries
          </span>
        </SectionTitle>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 items-center">
          {/* Category filter */}
          <div className="flex gap-1 flex-wrap">
            <button
              onClick={() => setActiveCategory(null)}
              style={{
                fontSize: "5px",
                padding: "2px 8px",
                border: `1px solid ${!activeCategory ? "var(--gold)" : "var(--border2)"}`,
                color: !activeCategory ? "var(--gold)" : "var(--gray)",
                background: !activeCategory
                  ? "rgba(240,192,64,.1)"
                  : "transparent",
                cursor: "pointer",
                fontFamily: '"Press Start 2P", monospace',
              }}
            >
              ALL
            </button>
            {allCategories.map((cat) => {
              const color = CATEGORY_COLOR[cat] ?? "var(--gray)";
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(isActive ? null : cat)}
                  style={{
                    fontSize: "5px",
                    padding: "2px 8px",
                    border: `1px solid ${isActive ? color : "var(--border2)"}`,
                    color: isActive ? color : "var(--gray)",
                    background: isActive ? `${color}1a` : "transparent",
                    cursor: "pointer",
                    fontFamily: '"Press Start 2P", monospace',
                    transition: "all .1s",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="SEARCH..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              marginLeft: "auto",
              background: "rgba(10,10,40,.8)",
              border: "1px solid var(--border2)",
              color: "var(--rpg-white)",
              fontFamily: '"Press Start 2P", monospace',
              fontSize: "5px",
              padding: "4px 8px",
              outline: "none",
              width: 140,
            }}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "var(--gold)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor =
                "var(--border2)";
            }}
          />
        </div>

        {/* Entries */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div
              style={{
                fontSize: "6px",
                color: "var(--gray)",
                textAlign: "center",
                padding: 24,
              }}
            >
              <span className="animate-blink">▮</span>
              &nbsp; エントリが見つかりません
            </div>
          ) : (
            filtered.map((entry) => <EntryCard key={entry.id} entry={entry} />)
          )}
        </div>

        {/* Add new hint */}
        <div
          style={{
            border: "1px dashed var(--border2)",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "5px", color: "var(--gray)", lineHeight: 2.2 }}>
            新しいキャッチアップ内容は{" "}
            <span style={{ color: "var(--gold)" }}>lib/data.ts</span> の
            <span style={{ color: "var(--gold)" }}> LEARNING_ENTRIES </span>
            に追記してください
          </p>
        </div>
      </div>
    </PageShell>
  );
}
