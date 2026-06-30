import TopBar from "@/components/layout/TopBar";
import NavBar from "@/components/layout/NavBar";
import CharacterPanel from "@/components/layout/CharacterPanel";
import BottomBar from "@/components/layout/BottomBar";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div
      className="relative z-10 max-w-6xl mx-auto px-3 py-4 flex flex-col gap-2"
      style={{ minHeight: "100vh" }}
    >
      <TopBar />
      <NavBar />

      <div className="flex gap-2 flex-1" style={{ minHeight: 460 }}>
        {/* Left: character */}
        <div style={{ width: 200, flexShrink: 0 }}>
          <CharacterPanel />
        </div>

        {/* Right: page content */}
        <div className="rpg-panel flex-1 p-4 flex flex-col gap-3 overflow-hidden">
          {children}
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
