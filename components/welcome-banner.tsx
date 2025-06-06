"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MinimalButton } from "@/components/minimal-button"
import { X, Upload, Target, FileText } from "lucide-react"

export function WelcomeBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-0 text-black mb-6">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl">🎉</span>
              <h3 className="text-lg font-semibold">Welcome to JobWise AI!</h3>
            </div>
            <p className="mb-4 opacity-90">
              Get started by uploading your resume and finding your first job match. Our AI will help you optimize your
              applications for better results.
            </p>
            <div className="flex flex-wrap gap-3">
              <MinimalButton variant="primary" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload Resume
              </MinimalButton>
              <MinimalButton variant="secondary" size="sm">
                <Target className="w-4 h-4 mr-2" />
                Find Jobs
              </MinimalButton>
              <MinimalButton variant="secondary" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Take Tour
              </MinimalButton>
            </div>
          </div>
          <button onClick={() => setIsVisible(false)} className="text-black/60 hover:text-black transition-colors ml-4">
            <X className="w-5 h-5" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
