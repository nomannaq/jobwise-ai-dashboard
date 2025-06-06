"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MinimalButton } from "@/components/minimal-button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Copy, Download, Edit, FileText, MoreHorizontal, Plus, Search, Upload } from "lucide-react"

export default function ResumesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample resume data
  const resumes = [
    {
      id: "resume-1",
      name: "Software Engineer - Main",
      lastUpdated: "June 3, 2024",
      type: "Tech",
      status: "Active",
      score: 85,
    },
    {
      id: "resume-2",
      name: "Frontend Developer",
      lastUpdated: "May 25, 2024",
      type: "Tech",
      status: "Active",
      score: 78,
    },
    {
      id: "resume-3",
      name: "Project Manager",
      lastUpdated: "April 15, 2024",
      type: "Management",
      status: "Inactive",
      score: 72,
    },
  ]

  // Sample suggestions
  const suggestions = [
    {
      id: "sug-1",
      section: "Skills",
      original: "Proficient in React",
      improved: "Expert in React.js with 5+ years building production applications",
      impact: "high",
    },
    {
      id: "sug-2",
      section: "Experience",
      original: "Developed websites",
      improved: "Architected and developed responsive web applications that increased user engagement by 35%",
      impact: "high",
    },
    {
      id: "sug-3",
      section: "Education",
      original: "Bachelor's in Computer Science",
      improved: "Bachelor of Science in Computer Science, University of California, GPA: 3.8/4.0",
      impact: "medium",
    },
  ]

  const filteredResumes = resumes.filter((resume) => resume.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">My Resumes 📄</h2>
            <p className="text-gray-600 mt-1">Upload, manage, and optimize your resumes.</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <MinimalButton variant="secondary">
              <Upload className="w-4 h-4 mr-2" />
              Upload Resume
            </MinimalButton>
            <MinimalButton variant="primary">
              <Plus className="w-4 h-4 mr-2" />
              Create New
            </MinimalButton>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search resumes..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Resumes List */}
        <div className="grid grid-cols-1 gap-4">
          {filteredResumes.length > 0 ? (
            filteredResumes.map((resume) => (
              <Card key={resume.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-gray-500" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-semibold text-gray-900">{resume.name}</h3>
                            <Badge
                              className={
                                resume.status === "Active"
                                  ? "bg-green-100 text-green-800 border-green-200"
                                  : "bg-gray-100 text-gray-800 border-gray-200"
                              }
                            >
                              {resume.status}
                            </Badge>
                          </div>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <span>Last updated: {resume.lastUpdated}</span>
                            <span className="mx-2">•</span>
                            <span>Type: {resume.type}</span>
                          </div>
                          <div className="mt-3 flex items-center">
                            <div className="flex items-center space-x-1">
                              <span className="text-sm font-medium">AI Score:</span>
                              <div
                                className={`px-2 py-0.5 rounded text-sm font-medium ${
                                  resume.score >= 80
                                    ? "bg-green-100 text-green-800"
                                    : resume.score >= 70
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                }`}
                              >
                                {resume.score}/100
                              </div>
                            </div>
                          </div>
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

                    <div className="mt-4 flex justify-end space-x-3">
                      <MinimalButton variant="secondary" size="sm">
                        Optimize
                      </MinimalButton>
                      <MinimalButton variant="primary" size="sm">
                        View
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </MinimalButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resumes found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery
                  ? `No results for "${searchQuery}"`
                  : "You haven't uploaded any resumes yet. Upload your first one!"}
              </p>
              <MinimalButton variant="primary">
                <Upload className="w-4 h-4 mr-2" />
                Upload Resume
              </MinimalButton>
            </div>
          )}
        </div>

        {/* AI Optimization Section */}
        <Card>
          <CardHeader>
            <CardTitle>AI Resume Optimization</CardTitle>
            <CardDescription>Suggested improvements for your "Software Engineer - Main" resume</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-gray-100 text-gray-800 border-gray-200">{suggestion.section}</Badge>
                      <Badge
                        className={
                          suggestion.impact === "high"
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-yellow-100 text-yellow-800 border-yellow-200"
                        }
                      >
                        {suggestion.impact === "high" ? "High Impact" : "Medium Impact"}
                      </Badge>
                    </div>
                    <MinimalButton variant="secondary" size="sm">
                      Apply
                    </MinimalButton>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-xs text-red-600 font-medium mb-1">ORIGINAL</p>
                      <p className="text-sm text-gray-700">{suggestion.original}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-xs text-green-600 font-medium mb-1">IMPROVED</p>
                      <p className="text-sm text-gray-700">{suggestion.improved}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <MinimalButton variant="primary">Apply All Suggestions</MinimalButton>
            </div>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-0">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Resume Tips 💡</h3>
                <p className="text-black/80 mb-4">Improve your resume with these AI-powered tips:</p>
                <ul className="space-y-2 text-black/80">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Use action verbs and quantify achievements with specific metrics and results.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Tailor your resume for each job application by matching keywords from the job description.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Keep your resume concise and focused - most recruiters spend less than 10 seconds scanning it.
                    </span>
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
