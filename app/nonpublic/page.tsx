import PageShell from "@/components/layout/PageShell";
import DialogBox from "@/components/rpg/DialogBox";
import Link from "next/link";

export default function NonPublicPage() {
  return (
    <PageShell>
      <DialogBox
        speaker="▸ GUARD"
        message={"このクエストは現在非公開じゃ。\n冒険者よ、引き返すがよい。"}
      />

      <div className="flex-1 flex flex-col items-center justify-center gap-6 animate-fadeIn">
        <div style={{ fontSize: 48 }}>🔒</div>

        <p
          style={{
            fontSize: "8px",
            color: "var(--gold)",
            textAlign: "center",
            lineHeight: 2,
          }}
        >
          ACCESS DENIED
        </p>

        <p
          style={{
            fontSize: "6px",
            color: "var(--gray)",
            textAlign: "center",
            lineHeight: 2.4,
          }}
        >
          このページは現在非公開です。
          <br />
          公開までしばらくお待ちください。
        </p>

        <Link
          href="/works"
          className="rpg-btn"
          style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: "6px",
            color: "#fff",
            background: "var(--border)",
            padding: "8px 16px",
            textDecoration: "none",
          }}
        >
          ▶ WORKS に戻る
        </Link>
      </div>
    </PageShell>
  );
}
