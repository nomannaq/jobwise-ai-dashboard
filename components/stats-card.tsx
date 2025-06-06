import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  description?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatsCard({ title, value, icon, description, trend, className }: StatsCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold mt-1 text-gray-900">{value}</p>
            {trend && (
              <div className="flex items-center mt-1">
                <span className={cn("text-xs font-medium", trend.isPositive ? "text-green-600" : "text-red-600")}>
                  {trend.isPositive ? "+" : "-"}
                  {trend.value}%
                </span>
                <span className="text-xs text-gray-500 ml-1">vs last month</span>
              </div>
            )}
            {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
          </div>
          <div className="rounded-lg p-2 bg-gray-50">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}
