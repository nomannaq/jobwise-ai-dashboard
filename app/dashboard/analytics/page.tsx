"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MinimalButton } from "@/components/minimal-button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, BarChart, Bar } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("3m")

  // Sample data for charts
  const applicationData = [
    { month: "Jan", applications: 8, interviews: 2, offers: 0 },
    { month: "Feb", applications: 12, interviews: 3, offers: 1 },
    { month: "Mar", applications: 15, interviews: 4, offers: 0 },
    { month: "Apr", applications: 10, interviews: 3, offers: 1 },
    { month: "May", applications: 18, interviews: 5, offers: 2 },
    { month: "Jun", applications: 14, interviews: 4, offers: 1 },
  ]

  const fitScoreData = [
    { month: "Jan", score: 68 },
    { month: "Feb", score: 72 },
    { month: "Mar", score: 75 },
    { month: "Apr", score: 78 },
    { month: "May", score: 82 },
    { month: "Jun", score: 85 },
  ]

  const responseRateData = [
    { month: "Jan", rate: 15 },
    { month: "Feb", rate: 18 },
    { month: "Mar", rate: 20 },
    { month: "Apr", rate: 22 },
    { month: "May", rate: 25 },
    { month: "Jun", rate: 28 },
  ]

  const skillGapData = [
    { name: "React", value: 90 },
    { name: "TypeScript", value: 85 },
    { name: "Node.js", value: 70 },
    { name: "AWS", value: 60 },
    { name: "GraphQL", value: 75 },
    { name: "Docker", value: 50 },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Analytics 📊</h2>
            <p className="text-gray-600 mt-1">Track your job search performance and insights.</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <select
              className="px-3 py-1.5 border border-gray-300 rounded-md text-sm"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="1m">Last Month</option>
              <option value="3m">Last 3 Months</option>
              <option value="6m">Last 6 Months</option>
              <option value="1y">Last Year</option>
            </select>
            <MinimalButton variant="secondary" size="sm">
              Export
            </MinimalButton>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Total Applications",
              value: "77",
              change: "+12%",
              isPositive: true,
              description: "vs. previous period",
            },
            {
              title: "Interview Rate",
              value: "28%",
              change: "+5%",
              isPositive: true,
              description: "vs. previous period",
            },
            {
              title: "Average Fit Score",
              value: "82",
              change: "+8",
              isPositive: true,
              description: "points increase",
            },
            {
              title: "Offers Received",
              value: "4",
              change: "+2",
              isPositive: true,
              description: "vs. previous period",
            },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <div
                    className={`flex items-center text-xs font-medium ${
                      stat.isPositive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Trends Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Application Trends</CardTitle>
            <CardDescription>Track your applications, interviews, and offers over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                applications: {
                  label: "Applications",
                  color: "hsl(var(--chart-1))",
                },
                interviews: {
                  label: "Interviews",
                  color: "hsl(var(--chart-2))",
                },
                offers: {
                  label: "Offers",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={applicationData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="applications"
                    stroke="var(--color-applications)"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="interviews"
                    stroke="var(--color-interviews)"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="offers"
                    stroke="var(--color-offers)"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Two Column Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Fit Score Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Fit Score Trend</CardTitle>
              <CardDescription>Your average fit score is improving over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  score: {
                    label: "Fit Score",
                    color: "hsl(45, 93%, 47%)",
                  },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={fitScoreData}>
                    <XAxis dataKey="month" />
                    <YAxis domain={[50, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="var(--color-score)"
                      strokeWidth={2}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Response Rate */}
          <Card>
            <CardHeader>
              <CardTitle>Response Rate</CardTitle>
              <CardDescription>Percentage of applications that received a response</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  rate: {
                    label: "Response Rate",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={responseRateData}>
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 50]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="var(--color-rate)"
                      strokeWidth={2}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Skill Gap Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Gap Analysis</CardTitle>
            <CardDescription>Your skill proficiency compared to job requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Proficiency",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skillGapData} layout="vertical">
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--color-value)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Recommended Skills to Improve</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Docker</Badge>
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">AWS</Badge>
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Kubernetes</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insights */}
        <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-0">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">AI Insights 🧠</h3>
                <p className="text-black/80 mb-4">
                  Based on your application data, here are some insights to improve your job search:
                </p>
                <ul className="space-y-2 text-black/80">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Your response rate has increased by 10% since you started optimizing your resume with our AI
                      suggestions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Applications with a fit score above 80 are 3x more likely to result in an interview. Focus on
                      these opportunities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Consider improving your Docker and AWS skills to qualify for more senior positions in your field.
                    </span>
                  </li>
                </ul>
                <div className="mt-4">
                  <MinimalButton variant="primary" size="sm">
                    View Detailed Report
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </MinimalButton>
                </div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">🔍</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
