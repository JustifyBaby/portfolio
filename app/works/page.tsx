import PageShell from "@/components/layout/PageShell";
import DialogBox from "@/components/rpg/DialogBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { PAGE_DIALOGS, WORKS } from "@/lib/data";

function Stars({ n }: { n: number }) {
  return (
    <span style={{ color: "var(--gold)", fontSize: 10, letterSpacing: 1 }}>
      {"★".repeat(n)}
      {"☆".repeat(5 - n)}
    </span>
  );
}

export default function WorksPage() {
  const d = PAGE_DIALOGS.works;
  return (
    <PageShell>
      <DialogBox speaker={d.speaker} message={d.message} />

      <div className="flex-1 overflow-y-auto animate-fadeIn">
        <SectionTitle>◈ QUEST RECORDS</SectionTitle>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
        >
          {WORKS.map((work) => (
            <a
              key={work.title}
              href={work.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                border: "2px solid var(--border2)",
                padding: "10px",
                background: "rgba(10,10,40,.7)",
                textDecoration: "none",
                transition: "border-color .1s, box-shadow .1s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--gold)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 12px rgba(240,192,64,.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border2)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* stars top-right */}
              <div style={{ position: "absolute", top: 8, right: 8 }}>
                <Stars n={work.stars} />
              </div>

              <p
                style={{
                  fontSize: "5px",
                  color: "var(--blue)",
                  marginBottom: 4,
                  letterSpacing: 1,
                }}
              >
                [{work.tag}]
              </p>
              <p
                style={{
                  fontSize: "8px",
                  color: "var(--rpg-white)",
                  marginBottom: 5,
                }}
              >
                {work.title}
              </p>
              <p
                style={{
                  fontSize: "5px",
                  color: "var(--gray)",
                  lineHeight: 2,
                  marginBottom: 8,
                }}
              >
                {work.description}
              </p>

              {work.stack && (
                <div className="flex flex-wrap gap-1">
                  {work.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: "4px",
                        color: "var(--gray)",
                        border: "1px solid var(--border2)",
                        padding: "1px 4px",
                        background: "rgba(68,68,204,.1)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
