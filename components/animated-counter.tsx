"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(percentage)

      setCount(Math.floor(easedProgress * end))

      if (progress < duration) {
        animationFrame = requestAnimationFrame(countUp)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(countUp)

    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
