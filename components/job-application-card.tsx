import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MinimalButton } from "@/components/minimal-button"
import { ArrowRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

interface JobApplicationCardProps {
  company: string
  position: string
  logo: string
  location: string
  date: string
  status: "applied" | "interview" | "offer" | "rejected"
  fitScore: number
  className?: string
}

export function JobApplicationCard({
  company,
  position,
  logo,
  location,
  date,
  status,
  fitScore,
  className,
}: JobApplicationCardProps) {
  const statusConfig = {
    applied: { label: "Applied", color: "bg-blue-100 text-blue-800 border-blue-200" },
    interview: { label: "Interview", color: "bg-purple-100 text-purple-800 border-purple-200" },
    offer: { label: "Offer", color: "bg-green-100 text-green-800 border-green-200" },
    rejected: { label: "Rejected", color: "bg-red-100 text-red-800 border-red-200" },
  }

  const { label, color } = statusConfig[status]

  return (
    <Card className={cn("overflow-hidden hover:shadow-md transition-shadow", className)}>
      <CardContent className="p-0">
        <div className="p-4 sm:p-6">
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
              {logo ? (
                <img src={logo || "/placeholder.svg"} alt={`${company} logo`} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xl">{company.charAt(0)}</span>
              )}
            </div>
            <div className="ml-4 flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{position}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">{company}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <span>{location}</span>
                <span className="mx-2">•</span>
                <span>{date}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Badge className={color}>{label}</Badge>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium">
                  {fitScore}
                </div>
                <span className="ml-1 text-xs text-gray-500">Fit Score</span>
              </div>
            </div>
            <MinimalButton variant="secondary" size="sm">
              View
              <ArrowRight className="ml-1 w-3 h-3" />
            </MinimalButton>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
