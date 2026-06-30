import DialogBox from "@/components/rpg/DialogBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { PAGE_DIALOGS } from "@/lib/data";

const badges = [
  { icon: "⚔", label: "経験", value: "5年の実戦" },
  { icon: "🏰", label: "拠点", value: "東京王国" },
  { icon: "📜", label: "専門", value: "Web全般" },
  { icon: "✦", label: "趣味", value: "OSS開発" },
];

export default function AboutPage() {
  const d = PAGE_DIALOGS.about;
  return (
    <div>
      <DialogBox speaker={d.speaker} message={d.message} />

      <div className="flex-1 overflow-y-auto animate-fadeIn">
        <SectionTitle>◈ ABOUT THE HERO</SectionTitle>

        <p
          style={{
            fontSize: "6px",
            color: "var(--rpg-white)",
            lineHeight: 2.4,
            marginBottom: 16,
          }}
        >
          はじめまして！フルスタックエンジニアの
          <span style={{ color: "var(--gold)" }}> Taro Dev </span>
          です。
          <br />
          Web の魔法を操り、日々プロダクトを世に送り出しています。
          <br />
          バックエンドの迷宮からフロントの戦場まで、
          <br />
          どんな依頼も受けて立ちます。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            marginBottom: 16,
          }}
        >
          {badges.map((b) => (
            <div
              key={b.label}
              style={{
                border: "1px solid var(--border2)",
                padding: "8px",
                background: "rgba(20,20,60,.5)",
              }}
            >
              <div
                style={{
                  fontSize: "5px",
                  color: "var(--gray)",
                  marginBottom: 3,
                }}
              >
                {b.icon} {b.label}
              </div>
              <div style={{ fontSize: "6px", color: "var(--rpg-white)" }}>
                {b.value}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ borderTop: "1px solid var(--border2)", paddingTop: 12 }}>
          <p
            style={{
              fontSize: "7px",
              color: "var(--gold)",
              marginBottom: 10,
              letterSpacing: 1,
            }}
          >
            ◈ QUEST HISTORY
          </p>
          {[
            {
              year: "2024",
              event: "現在 — Web Order Guild にてシニアエンジニア",
            },
            { year: "2022", event: "OSS「PixelUtils」公開 → npm 2万DL達成" },
            { year: "2021", event: "フルスタック転向、React / Node.js 習得" },
            {
              year: "2019",
              event: "冒険開始 — Web エンジニアとして初クエスト",
            },
          ].map((item) => (
            <div
              key={item.year}
              className="flex gap-3 items-start"
              style={{ marginBottom: 8 }}
            >
              <span
                style={{
                  fontSize: "6px",
                  color: "var(--gold2)",
                  minWidth: 32,
                  marginTop: 1,
                }}
              >
                {item.year}
              </span>
              <div
                style={{ display: "flex", alignItems: "flex-start", gap: 6 }}
              >
                <span
                  style={{ color: "var(--border)", fontSize: 8, marginTop: 1 }}
                >
                  ▸
                </span>
                <span
                  style={{
                    fontSize: "6px",
                    color: "var(--rpg-white)",
                    lineHeight: 2,
                  }}
                >
                  {item.event}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
