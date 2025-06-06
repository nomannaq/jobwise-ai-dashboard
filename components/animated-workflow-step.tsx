"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedWorkflowStepProps {
  step: string
  title: string
  description: string
  icon: ReactNode
  delay?: number
}

export function AnimatedWorkflowStep({ step, title, description, icon, delay = 0 }: AnimatedWorkflowStepProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto text-black transform transition-all duration-500 hover:scale-110">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold animate-pulse">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
