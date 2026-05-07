import PageShell from "@/components/layout/PageShell";
import DialogBox from "@/components/rpg/DialogBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { PAGE_DIALOGS } from "@/lib/data";
import Link from "next/link";

const DEV_URLS = [
  {
    icon: "📧",
    label: "EMAIL",
    value: "justifybaby@hero.dev",
    href: "mailto:justifybaby@hero.dev",
  },
  {
    icon: "🐙",
    label: "GITHUB",
    value: "github.com/JustifyBaby",
    href: "https://github.com/JustifyBaby",
  },
  {
    icon: "🐦",
    label: "TWITTER / X",
    value: "@KATL_RNAV",
    href: "https://twitter.com/KATL_RNAV",
  },
  {
    icon: "💼",
    label: "LINKEDIN",
    value: "linkedin.com/in/JustifyBaby",
    href: "https://linkedin.com",
  },
];

export default function DevUrlPage() {
  const d = PAGE_DIALOGS.devUrl;
  return (
    <PageShell>
      <DialogBox speaker={d.speaker} message={d.message} />

      <div className="flex-1 overflow-y-auto animate-fadeIn">
        <SectionTitle>◈ SEND MESSAGE</SectionTitle>

        <div className="flex flex-col gap-2" style={{ marginBottom: 16 }}>
          {DEV_URLS.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rpg-btn"
              style={{
                padding: "10px 12px",
                border: "1px solid var(--border2)",
                background: "rgba(20,20,60,.5)",
                textDecoration: "none",
                transition: "border-color .1s, background .1s",
              }}
            >
              <span style={{ fontSize: 18 }}>{c.icon}</span>
              <div>
                <p
                  style={{
                    fontSize: "5px",
                    color: "var(--gray)",
                    marginBottom: 2,
                  }}
                >
                  {c.label}
                </p>
                <p style={{ fontSize: "7px", color: "var(--rpg-white)" }}>
                  {c.value}
                </p>
              </div>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "8px",
                  color: "var(--border)",
                }}
              >
                ▶
              </span>
            </Link>
          ))}
        </div>

        {/* Availability badge */}
        <div
          style={{
            border: "1px solid var(--green)",
            padding: "10px 14px",
            background: "rgba(10,40,10,.5)",
          }}
        >
          <p
            style={{ fontSize: "6px", color: "var(--green)", marginBottom: 4 }}
          >
            <span className="animate-pulse-slow inline-block mr-2">●</span>
            AVAILABLE FOR QUEST
          </p>
          <p style={{ fontSize: "5px", color: "var(--gray)", lineHeight: 2 }}>
            現在新規のお仕事・コラボレーションを受付中です。
            <br />
            お気軽にメッセージをどうぞ。返信は1〜2営業日以内。
          </p>
        </div>
      </div>
    </PageShell>
  );
}
