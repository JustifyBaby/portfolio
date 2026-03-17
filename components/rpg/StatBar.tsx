"use client";

interface StatBarProps {
  label: string;
  value: number;
  max: number;
  color: string;
}

export default function StatBar({ label, value, max, color }: StatBarProps) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex flex-col gap-[3px]">
      <span style={{ fontSize: "6px", color: "var(--gray)" }}>{label}</span>
      <div className="flex items-center gap-[6px]">
        <div
          style={{
            width: 80,
            height: 8,
            background: "#111",
            border: "1px solid var(--border2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: color,
              width: `${pct}%`,
              transition: "width .5s",
            }}
          />
        </div>
        <span
          style={{ fontSize: "6px", color: "var(--rpg-white)", minWidth: 36 }}
        >
          {value}/{max}
        </span>
      </div>
    </div>
  );
}
