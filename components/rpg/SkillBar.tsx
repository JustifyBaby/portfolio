'use client'
import { useEffect, useRef } from 'react'
import type { Skill } from '@/types'

const CATEGORY_COLOR: Record<Skill['category'], string> = {
  frontend: 'linear-gradient(90deg, #4080e0, #80c0ff)',
  backend:  'linear-gradient(90deg, #40c080, #80ffc0)',
  infra:    'linear-gradient(90deg, #c08040, #ffc080)',
  other:    'linear-gradient(90deg, #8040c0, #c080ff)',
}

const CATEGORY_LABEL: Record<Skill['category'], string> = {
  frontend: 'FRONT',
  backend:  'BACK',
  infra:    'INFRA',
  other:    'OTHER',
}

export default function SkillBar({ skill }: { skill: Skill }) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const raf = requestAnimationFrame(() => {
      bar.style.width = `${skill.level}%`
    })
    return () => cancelAnimationFrame(raf)
  }, [skill.level])

  return (
    <div
      style={{
        background: 'rgba(20,20,60,.6)',
        border: '1px solid var(--border2)',
        padding: '8px 10px',
      }}
    >
      <div className="flex items-center justify-between" style={{ marginBottom: 5 }}>
        <span style={{ fontSize: '6px', color: 'var(--gold)' }}>{skill.name}</span>
        <span
          style={{
            fontSize: '5px',
            color: 'var(--gray)',
            border: '1px solid var(--border2)',
            padding: '1px 4px',
          }}
        >
          {CATEGORY_LABEL[skill.category]}
        </span>
      </div>

      <div
        style={{
          height: 6,
          background: '#111',
          border: '1px solid var(--border2)',
          overflow: 'hidden',
          marginBottom: 3,
        }}
      >
        <div
          ref={barRef}
          style={{
            height: '100%',
            background: CATEGORY_COLOR[skill.category],
            width: 0,
            transition: 'width 1.2s cubic-bezier(.4,0,.2,1)',
          }}
        />
      </div>

      <div className="flex justify-between">
        <span style={{ fontSize: '5px', color: 'var(--gray)' }}>
          {'█'.repeat(Math.floor(skill.level / 10))}{'░'.repeat(10 - Math.floor(skill.level / 10))}
        </span>
        <span style={{ fontSize: '5px', color: 'var(--gray)' }}>LV.{skill.level}</span>
      </div>
    </div>
  )
}
