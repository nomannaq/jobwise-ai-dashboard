"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { MinimalButton } from "@/components/minimal-button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Copy, Download, Edit, MoreHorizontal, Plus, Search } from "lucide-react"

export default function CoverLettersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  // Sample cover letter data
  const coverLetters = [
    {
      id: "cl-1",
      company: "TechCorp",
      position: "Senior Frontend Developer",
      date: "June 2, 2024",
      status: "Sent",
      template: "Modern Professional",
    },
    {
      id: "cl-2",
      company: "InnovateSoft",
      position: "Full Stack Engineer",
      date: "May 28, 2024",
      status: "Draft",
      template: "Creative Tech",
    },
    {
      id: "cl-3",
      company: "DataViz Inc",
      position: "React Developer",
      date: "May 15, 2024",
      status: "Sent",
      template: "Minimal Clean",
    },
    {
      id: "cl-4",
      company: "CloudTech",
      position: "Software Engineer",
      date: "May 10, 2024",
      status: "Sent",
      template: "Modern Professional",
    },
  ]

  // Templates
  const templates = [
    {
      id: "template-1",
      name: "Modern Professional",
      description: "Clean and professional template suitable for corporate roles",
      preview: "/placeholder.svg?height=120&width=200",
    },
    {
      id: "template-2",
      name: "Creative Tech",
      description: "Stand out with a creative yet professional design",
      preview: "/placeholder.svg?height=120&width=200",
    },
    {
      id: "template-3",
      name: "Minimal Clean",
      description: "Simple and elegant design that focuses on content",
      preview: "/placeholder.svg?height=120&width=200",
    },
    {
      id: "template-4",
      name: "Executive",
      description: "Sophisticated design for senior and executive positions",
      preview: "/placeholder.svg?height=120&width=200",
    },
  ]

  const filteredCoverLetters = coverLetters.filter(
    (letter) =>
      letter.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      letter.position.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Cover Letters ✉️</h2>
            <p className="text-gray-600 mt-1">Create and manage your AI-generated cover letters.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <MinimalButton variant="primary">
              <Plus className="w-4 h-4 mr-2" />
              New Cover Letter
            </MinimalButton>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search cover letters..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Cover Letters List */}
        <div className="grid grid-cols-1 gap-4">
          {filteredCoverLetters.length > 0 ? (
            filteredCoverLetters.map((letter) => (
              <Card key={letter.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-semibold text-gray-900">{letter.position}</h3>
                          <Badge
                            className={
                              letter.status === "Sent"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-yellow-100 text-yellow-800 border-yellow-200"
                            }
                          >
                            {letter.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mt-1">{letter.company}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <span>Created on {letter.date}</span>
                          <span className="mx-2">•</span>
                          <span>Template: {letter.template}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-1.5 rounded-md hover:bg-gray-100">
                          <Edit className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100">
                          <Copy className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100">
                          <Download className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100">
                          <MoreHorizontal className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <MinimalButton variant="secondary" size="sm">
                        Preview
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </MinimalButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No cover letters found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery
                  ? `No results for "${searchQuery}"`
                  : "You haven't created any cover letters yet. Create your first one!"}
              </p>
              <MinimalButton variant="primary">
                <Plus className="w-4 h-4 mr-2" />
                Create Cover Letter
              </MinimalButton>
            </div>
          )}
        </div>

        {/* Templates Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Cover Letter Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`cursor-pointer hover:shadow-md transition-all ${
                  selectedTemplate === template.id ? "ring-2 ring-yellow-400" : ""
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <CardContent className="p-4">
                  <div className="aspect-[4/3] bg-gray-100 rounded-md mb-3 overflow-hidden">
                    <img
                      src={template.preview || "/placeholder.svg"}
                      alt={`${template.name} template preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-gray-900">{template.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{template.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <MinimalButton variant="primary" disabled={!selectedTemplate}>
              Use Template
            </MinimalButton>
          </div>
        </div>

        {/* AI Tips */}
        <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-0">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Cover Letter Tips 💡</h3>
                <p className="text-black/80 mb-4">Make your cover letters stand out with these AI-powered tips:</p>
                <ul className="space-y-2 text-black/80">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Customize each letter with specific company research and job requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Highlight achievements with quantifiable results rather than just listing responsibilities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Keep your cover letter concise - aim for 250-400 words on a single page.</span>
                  </li>
                </ul>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">✨</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
