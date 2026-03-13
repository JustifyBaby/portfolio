'use client'
import { useEffect, useRef } from 'react'

const PALETTE: Record<string, string> = {
  H: '#f8c87c', // skin
  B: '#3030c0', // blue armor
  b: '#2020a0', // dark blue
  G: '#f0c040', // gold
  W: '#ffffff', // white
  K: '#000000', // black
  R: '#c04040', // red
  g: '#808080', // gray
}

// 8×8 hero sprite map (null = transparent)
const SPRITE_MAP: (string | null)[][] = [
  [null,null,'H', 'H', 'H', 'H', null,null],
  [null,'H', 'H', 'H', 'H', 'H', 'H', null],
  [null,'G', 'H', 'W', 'W', 'H', 'G', null],
  [null,'B', 'B', 'B', 'B', 'B', 'B', null],
  ['B', 'B', 'G', 'B', 'B', 'G', 'B', 'B'],
  [null,'B', 'B', 'B', 'B', 'B', 'B', null],
  [null,'g', 'B', null,null,'B', 'g', null],
  [null,'g', 'g', null,null,'g', 'g', null],
]

export default function PixelSprite({ size = 64 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, size, size)
    const px = size / 8

    SPRITE_MAP.forEach((row, y) => {
      row.forEach((key, x) => {
        if (!key) return
        ctx.fillStyle = PALETTE[key]
        ctx.fillRect(x * px, y * px, px, px)
      })
    })
  }, [size])

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* glow under sprite */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 50% 80%, rgba(68,68,204,.5) 0%, transparent 70%)',
        }}
      />
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="animate-bob"
        style={{ imageRendering: 'pixelated', position: 'relative' }}
      />
    </div>
  )
}
