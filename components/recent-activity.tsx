import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ActivityItem {
  id: string
  type: "application" | "interview" | "feedback" | "offer"
  title: string
  description: string
  time: string
}

interface RecentActivityProps {
  activities: ActivityItem[]
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const getActivityIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "application":
        return "📝"
      case "interview":
        return "🗣️"
      case "feedback":
        return "📊"
      case "offer":
        return "🎉"
      default:
        return "📌"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Recent Activity 📅</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span>{getActivityIcon(activity.type)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
