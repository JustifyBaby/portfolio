"use client";
import { useTypewriter } from "./useTypewriter";

interface DialogBoxProps {
  speaker: string;
  message: string;
  speed?: number;
}

export default function DialogBox({
  speaker,
  message,
  speed = 30,
}: DialogBoxProps) {
  const { displayed, isDone, skip } = useTypewriter(message, { speed });

  return (
    <div
      className="rpg-panel p-3 cursor-pointer select-none"
      onClick={skip}
      title="クリックでスキップ"
    >
      <p className="text-[6px] mb-2" style={{ color: "var(--gold)" }}>
        {speaker}
      </p>
      <div
        className="min-h-[44px]"
        style={{ fontSize: "7px", color: "var(--rpg-white)", lineHeight: 2 }}
      >
        {displayed.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < displayed.split("\n").length - 1 && <br />}
          </span>
        ))}
        {!isDone && <span className="rpg-cursor" />}
        {isDone && (
          <span
            className="inline-block ml-2 animate-bounce"
            style={{ color: "var(--gold)", fontSize: "8px" }}
          >
            ▼
          </span>
        )}
      </div>
    </div>
  );
}
