"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface FitScoreChartProps {
  scores: Array<{
    company: string
    position: string
    score: number
  }>
}

export function FitScoreChart({ scores }: FitScoreChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Recent Fit Scores 📊</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {scores.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium text-gray-700">{item.position}</p>
                  <p className="text-xs text-gray-500">{item.company}</p>
                </div>
                <span
                  className={`text-sm font-medium ${
                    item.score >= 80 ? "text-green-600" : item.score >= 60 ? "text-yellow-600" : "text-red-600"
                  }`}
                >
                  {item.score}%
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    item.score >= 80 ? "bg-green-500" : item.score >= 60 ? "bg-yellow-500" : "bg-red-500"
                  }`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
