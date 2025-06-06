"use client"

import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  distance?: number
}

export function FloatingElement({
  children,
  className = "",
  duration = 3,
  delay = 0,
  distance = 10,
}: FloatingElementProps) {
  return (
    <div
      className={`animate-float ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
