"use client"

import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedFeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  delay?: number
}

export function AnimatedFeatureCard({ icon, title, description, features, delay = 0 }: AnimatedFeatureCardProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <CardContent className="p-8">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 text-black transform transition-transform duration-300 hover:rotate-6">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <ul className="space-y-2">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center text-sm text-gray-500 opacity-0 animate-fade-in"
                style={{ animationDelay: `${idx * 150 + 300}ms`, animationFillMode: "forwards" }}
              >
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
