import DialogBox from "@/components/rpg/DialogBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { PAGE_DIALOGS } from "@/lib/data";

type Experiment = {
  id: string;
  title: string;
  description: string;
  status: string;
  stack: string[];
};

const EXPERIMENTS: Experiment[] = [
  {
    id: "001",
    title: "AI Text Dungeon",
    description:
      "GPT-4o を用いたリアルタイムRPGナレーターの試作品。プレイヤーの選択肢に応じてストーリーが動的生成される。現在デバッグ中。近日公開予定。",
    status: "WIP",
    stack: ["Next.js", "OpenAI API", "Vercel AI SDK"],
  },
  {
    id: "002",
    title: "Pixel Map Generator",
    description:
      "WebGLベースのリアルタイムドット絵マップ生成ツール。パーリンノイズで地形を自動生成。まだα版。",
    status: "ALPHA",
    stack: ["WebGL", "TypeScript", "Canvas API"],
  },
  {
    id: "003",
    title: "Code Quest CI",
    description:
      "GitHub ActionsをRPG風に可視化するCIダッシュボード。ジョブをクエストとして表示。POC段階。",
    status: "POC",
    stack: ["GitHub API", "React", "WebSocket"],
  },
];

const STATUS_COLOR: Record<string, string> = {
  WIP: "#e04040",
  ALPHA: "#c08040",
  POC: "#8040c0",
};

export default function DemoPage() {
  const d = PAGE_DIALOGS.demo;
  return (
    <div>
      <DialogBox speaker={d.speaker} message={d.message} />

      <div className="flex-1 overflow-y-auto animate-fadeIn">
        <SectionTitle>
          ◈ EXPERIMENTS
          <span
            className="animate-blink"
            style={{
              fontSize: "5px",
              background: "var(--red)",
              color: "#fff",
              padding: "2px 6px",
              marginLeft: 8,
            }}
          >
            BETA
          </span>
        </SectionTitle>

        <div className="flex flex-col gap-3">
          {EXPERIMENTS.map((exp) => {
            const sc = STATUS_COLOR[exp.status] ?? "var(--gray)";
            return (
              <div
                key={exp.id}
                style={{
                  border: `2px dashed ${sc}`,
                  padding: "14px",
                  background: "rgba(30,10,10,.6)",
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span
                      style={{
                        fontSize: "5px",
                        color: "var(--gray)",
                        marginRight: 8,
                      }}
                    >
                      #{exp.id}
                    </span>
                    <span
                      style={{
                        fontSize: "7px",
                        color: "var(--rpg-white)",
                      }}
                    >
                      {exp.title}
                    </span>
                  </div>
                  <span
                    className="animate-pulse-slow"
                    style={{
                      fontSize: "5px",
                      color: sc,
                      border: `1px solid ${sc}`,
                      padding: "1px 6px",
                      flexShrink: 0,
                    }}
                  >
                    {exp.status}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "5px",
                    color: "var(--gray)",
                    lineHeight: 2.3,
                    marginBottom: 10,
                  }}
                >
                  {exp.description}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1">
                    {exp.stack.map((s) => (
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
                  <button
                    style={{
                      fontFamily: '"Press Start 2P", monospace',
                      fontSize: "5px",
                      color: "#fff",
                      background: sc,
                      border: "none",
                      padding: "5px 12px",
                      cursor: "pointer",
                      boxShadow: "3px 3px 0 rgba(0,0,0,.4)",
                    }}
                    className="rpg-btn"
                  >
                    ▶ TRY DEMO
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
