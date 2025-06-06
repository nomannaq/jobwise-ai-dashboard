"use client"

import { useEffect, useState } from "react"
import { BarChart3, BriefcaseBusiness, Calendar, Target } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCard } from "@/components/stats-card"
import { JobApplicationCard } from "@/components/job-application-card"
import { FitScoreChart } from "@/components/fit-score-chart"
import { RecentActivity } from "@/components/recent-activity"
import { QuickActions } from "@/components/quick-actions"
import { MinimalButton } from "@/components/minimal-button"
import { WelcomeBanner } from "@/components/welcome-banner"

export default function Dashboard() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Sample data
  const stats = [
    {
      title: "Active Applications",
      value: 12,
      icon: <BriefcaseBusiness className="w-5 h-5 text-blue-600" />,
      trend: { value: 8, isPositive: true },
    },
    {
      title: "Average Fit Score",
      value: "76%",
      icon: <Target className="w-5 h-5 text-yellow-600" />,
      trend: { value: 5, isPositive: true },
    },
    {
      title: "Interviews Scheduled",
      value: 3,
      icon: <Calendar className="w-5 h-5 text-green-600" />,
      trend: { value: 2, isPositive: true },
    },
    {
      title: "Response Rate",
      value: "28%",
      icon: <BarChart3 className="w-5 h-5 text-purple-600" />,
      trend: { value: 4, isPositive: true },
    },
  ]

  const applications = [
    {
      company: "TechCorp",
      position: "Senior Frontend Developer",
      logo: "/placeholder.svg?height=48&width=48",
      location: "San Francisco, CA (Remote)",
      date: "Applied 2 days ago",
      status: "interview" as const,
      fitScore: 89,
    },
    {
      company: "InnovateSoft",
      position: "Full Stack Engineer",
      logo: "/placeholder.svg?height=48&width=48",
      location: "New York, NY (Hybrid)",
      date: "Applied 5 days ago",
      status: "applied" as const,
      fitScore: 76,
    },
    {
      company: "DataViz Inc",
      position: "React Developer",
      logo: "/placeholder.svg?height=48&width=48",
      location: "Austin, TX (Remote)",
      date: "Applied 1 week ago",
      status: "rejected" as const,
      fitScore: 62,
    },
  ]

  const fitScores = [
    { company: "TechCorp", position: "Senior Frontend Developer", score: 89 },
    { company: "InnovateSoft", position: "Full Stack Engineer", score: 76 },
    { company: "DataViz Inc", position: "React Developer", score: 62 },
    { company: "CloudTech", position: "Software Engineer", score: 81 },
    { company: "FinTech Solutions", position: "Frontend Developer", score: 72 },
  ]

  const activities = [
    {
      id: "1",
      type: "interview" as const,
      title: "Interview scheduled with TechCorp",
      description: "Virtual interview for Senior Frontend Developer position",
      time: "Tomorrow at 2:00 PM",
    },
    {
      id: "2",
      type: "feedback" as const,
      title: "Resume feedback received",
      description: "AI analysis suggests improvements to your skills section",
      time: "Yesterday",
    },
    {
      id: "3",
      type: "application" as const,
      title: "Applied to InnovateSoft",
      description: "Full Stack Engineer position with 76% match score",
      time: "5 days ago",
    },
    {
      id: "4",
      type: "offer" as const,
      title: "Cover letter generated",
      description: "Tailored for CloudTech Software Engineer position",
      time: "1 week ago",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <WelcomeBanner />

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome back, Alex! 👋</h2>
            <p className="text-gray-600 mt-1">Here's what's happening with your job applications.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <MinimalButton variant="primary">Add New Application</MinimalButton>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} title={stat.title} value={stat.value} icon={stat.icon} trend={stat.trend} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Applications Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
              <MinimalButton variant="ghost" size="sm">
                View All
              </MinimalButton>
            </div>
            <div className="space-y-4">
              {applications.map((app, index) => (
                <JobApplicationCard key={index} {...app} />
              ))}
            </div>

            {/* Upcoming Interviews */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 text-black">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Upcoming Interview 🗓️</h3>
                  <p className="mt-1 font-medium">TechCorp - Senior Frontend Developer</p>
                  <p className="mt-2 text-sm opacity-80">Tomorrow at 2:00 PM • Virtual (Zoom)</p>
                  <div className="mt-4 flex space-x-3">
                    <MinimalButton variant="primary" size="sm">
                      Prepare with AI
                    </MinimalButton>
                    <MinimalButton variant="secondary" size="sm">
                      View Details
                    </MinimalButton>
                  </div>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">🎯</div>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            <FitScoreChart scores={fitScores} />
            <QuickActions />
            <RecentActivity activities={activities} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
