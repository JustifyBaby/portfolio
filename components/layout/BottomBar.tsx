export default function BottomBar() {
  return (
    <footer className="rpg-panel px-4 py-2 flex justify-between items-center flex-wrap gap-2">
      <span style={{ fontSize: "5px", color: "var(--gray)", letterSpacing: 1 }}>
        ▶ ナビをクリックでページ切替 &nbsp;|&nbsp;
        ダイアログをクリックでスキップ
      </span>
      <span style={{ fontSize: "5px", color: "var(--border)" }}>
        v0.1.0-beta
      </span>
    </footer>
  );
}
