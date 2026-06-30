import DialogBox from "@/components/rpg/DialogBox";
import SkillBar from "@/components/rpg/SkillBar";
import SectionTitle from "@/components/ui/SectionTitle";
import { PAGE_DIALOGS, SKILLS } from "@/lib/data";

const CATEGORIES = ["frontend", "backend", "infra", "other"] as const;
const CATEGORY_NAMES: Record<string, string> = {
  frontend: "⚔ FRONTEND",
  backend: "🔮 BACKEND",
  infra: "🏰 INFRA",
  other: "✦ OTHER",
};

export default function SkillsPage() {
  const d = PAGE_DIALOGS.skills;
  return (
    <div>
      <DialogBox speaker={d.speaker} message={d.message} />

      <div className="flex-1 overflow-y-auto animate-fadeIn">
        <SectionTitle>◈ SKILL TREE</SectionTitle>

        {CATEGORIES.map((cat) => {
          const items = SKILLS.filter((s) => s.category === cat);
          if (!items.length) return null;
          return (
            <div key={cat} style={{ marginBottom: 14 }}>
              <p
                style={{
                  fontSize: "6px",
                  color: "var(--gray)",
                  marginBottom: 6,
                  letterSpacing: 1,
                }}
              >
                {CATEGORY_NAMES[cat]}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 6,
                }}
              >
                {items.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
