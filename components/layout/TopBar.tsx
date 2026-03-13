import StatBar from '@/components/rpg/StatBar'
import { CHARACTER } from '@/lib/data'

export default function TopBar() {
  return (
    <header className="rpg-panel px-4 py-2 flex items-center justify-between flex-wrap gap-3">
      <h1
        className="animate-glow"
        style={{ fontSize: 14, color: 'var(--gold)', letterSpacing: 3, textShadow: '2px 2px 0 #000' }}
      >
        ✦ HERO.DEV ✦
      </h1>

      <div className="flex gap-4 items-center flex-wrap">
        <StatBar label="HP" value={CHARACTER.hp}  max={CHARACTER.maxHp} color="var(--red)" />
        <StatBar label="MP" value={CHARACTER.mp}  max={CHARACTER.maxMp} color="var(--blue)" />
        <StatBar label="EXP" value={CHARACTER.exp} max={100} color="var(--gold)" />
        <span style={{ fontSize: '6px', color: 'var(--gray)' }}>
          LV.<span style={{ color: 'var(--gold)' }}>{CHARACTER.level}</span>
        </span>
      </div>
    </header>
  )
}
