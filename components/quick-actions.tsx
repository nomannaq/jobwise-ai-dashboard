import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, MessageSquare, Target, Upload } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      icon: <Upload className="w-5 h-5" />,
      title: "Upload Resume",
      description: "Add a new resume to your profile",
      emoji: "📄",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Find Matches",
      description: "Discover jobs that match your skills",
      emoji: "🎯",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Create Cover Letter",
      description: "Generate a tailored cover letter",
      emoji: "✉️",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "LinkedIn Message",
      description: "Draft a message to recruiters",
      emoji: "💬",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Quick Actions ⚡</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <button
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-center"
            >
              <span className="text-2xl mb-2">{action.emoji}</span>
              <span className="text-sm font-medium text-gray-900">{action.title}</span>
              <span className="text-xs text-gray-500 mt-1">{action.description}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
