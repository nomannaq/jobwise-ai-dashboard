"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface TextRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function TextReveal({ children, delay = 0, className = "" }: TextRevealProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  )
}
