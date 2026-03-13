'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

interface UseTypewriterOptions {
  speed?: number
}

export function useTypewriter(text: string, options: UseTypewriterOptions = {}) {
  const { speed = 30 } = options
  const [displayed, setDisplayed] = useState('')
  const [isDone, setIsDone] = useState(false)
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null)
  const skipRef   = useRef(false)
  const indexRef  = useRef(0)

  const skip = useCallback(() => {
    skipRef.current = true
  }, [])

  useEffect(() => {
    if (!text) return
    setDisplayed('')
    setIsDone(false)
    indexRef.current = 0
    skipRef.current  = false

    const tick = () => {
      if (skipRef.current || indexRef.current >= text.length) {
        setDisplayed(text)
        setIsDone(true)
        return
      }
      indexRef.current++
      setDisplayed(text.slice(0, indexRef.current))
      timerRef.current = setTimeout(tick, speed)
    }

    timerRef.current = setTimeout(tick, 60)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [text, speed])

  return { displayed, isDone, skip }
}
