import PixelSprite from "@/components/rpg/PixelSprite";
import { CHARACTER } from "@/lib/data";

const ROW = ({ k, v }: { k: string; v: string | number }) => (
  <div
    className="flex justify-between items-center px-1 py-[3px]"
    style={{ fontSize: "6px", borderBottom: "1px dotted rgba(68,68,204,.3)" }}
  >
    <span style={{ color: "var(--gray)" }}>{k}</span>
    <span style={{ color: "var(--rpg-white)" }}>{v}</span>
  </div>
);

export default function CharacterPanel() {
  return (
    <aside className="rpg-panel p-3 flex flex-col gap-3 items-center">
      <div
        className="w-full text-center pb-2"
        style={{
          fontSize: "8px",
          color: "var(--gold)",
          borderBottom: "1px solid var(--border2)",
          textShadow: "1px 1px 0 #000",
        }}
      >
        ▸ {CHARACTER.name.toUpperCase()} ◂
      </div>

      <PixelSprite size={72} />

      <div className="w-full flex flex-col gap-0">
        <ROW k="CLASS" v={CHARACTER.jobClass} />
        <ROW k="GUILD" v={CHARACTER.guild} />
        <ROW k="STR" v={CHARACTER.str} />
        <ROW k="INT" v={CHARACTER.int} />
        <ROW k="AGI" v={CHARACTER.agi} />
        <ROW k="LUCK" v={CHARACTER.luck} />
      </div>
    </aside>
  );
}
