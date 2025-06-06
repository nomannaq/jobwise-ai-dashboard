"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MinimalButton } from "@/components/minimal-button"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function HomePage() {
  redirect("/dashboard")

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">🚀</span>
              </div>
              <span className="text-xl font-semibold text-black tracking-tight">JobWise AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
                How it Works
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
                Pricing
              </a>
              <Link href="/dashboard">
                <MinimalButton variant="primary" size="sm">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </MinimalButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/30 to-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Badge className="mb-8 bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-50 px-4 py-2 text-sm font-medium">
                🎯 Your Smart Job Application Companion
              </Badge>
            </div>

            <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-5xl sm:text-7xl font-bold text-black mb-8 leading-tight tracking-tight">
                Stop Sending
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {" "}
                  Blind{" "}
                </span>
                Applications
              </h1>
            </div>

            <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Get AI-powered insights, tailored resumes, and smart tracking to land your dream job faster. No more
                guessing if you're a fit. 🎯
              </p>
            </div>

            <div className="opacity-0 animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link href="/dashboard">
                  <MinimalButton variant="primary" size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </MinimalButton>
                </Link>
                <MinimalButton variant="secondary" size="lg">
                  Watch Demo 📹
                </MinimalButton>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              {[
                { icon: "✅", text: "No credit card required" },
                { icon: "🆓", text: "Free 7-day trial" },
                { icon: "❌", text: "Cancel anytime" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">The Job Application Problem 😤</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Most job seekers are playing a numbers game without strategy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                emoji: "📊",
                title: "100s of Applications",
                description: "Candidates send hundreds of resumes without knowing if they're actually a fit",
              },
              {
                emoji: "⏰",
                title: "Tedious Tailoring",
                description: "Customizing each resume and cover letter takes hours of manual work",
              },
              {
                emoji: "🔇",
                title: "No Feedback",
                description: "Applications disappear into the void with no real insights on why",
              },
              {
                emoji: "📝",
                title: "Poor Tracking",
                description: "Hard to manage applications and remember to follow up effectively",
              },
            ].map((problem, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 text-center hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="text-5xl mb-6 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {problem.emoji}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">{problem.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-yellow-50 text-yellow-700 border-yellow-200 px-4 py-2 text-sm font-medium">
              🤖 AI-Powered Solution
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight">
              Your Smart Job Application Coach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Stop guessing and start applying strategically with AI-powered insights and automation ✨
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                emoji: "📤",
                title: "Smart Upload & Analysis",
                description: "Upload your resume and paste any job description. Our AI instantly analyzes the fit.",
                features: ["PDF/DOCX support", "Auto job scraping", "Instant processing"],
              },
              {
                emoji: "🎯",
                title: "AI Fit Score (0-100)",
                description: "Get a precise compatibility score based on skills, experience, and requirements.",
                features: ["Keyword matching", "Experience analysis", "Skill gap identification"],
              },
              {
                emoji: "✨",
                title: "Tailored Optimization",
                description: "AI rewrites your resume sections for maximum impact and relevance.",
                features: ["Before/after comparison", "Keyword optimization", "ATS-friendly formatting"],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="text-5xl mb-6 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                    {feature.emoji}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "💬",
                title: "AI Content Generation",
                description: "Generate personalized cover letters and LinkedIn outreach messages instantly.",
                features: ["Custom cover letters", "LinkedIn DM templates", "Recruiter outreach"],
              },
              {
                emoji: "📊",
                title: "Application Tracker",
                description: "Manage all applications in one place with smart reminders and status tracking.",
                features: ["Status management", "Follow-up reminders", "Company insights"],
              },
              {
                emoji: "📈",
                title: "Success Analytics",
                description: "Track your success rate and optimize your job search strategy with data.",
                features: ["Success rate tracking", "Score trend analysis", "Performance insights"],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="text-5xl mb-6 animate-float" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                    {feature.emoji}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">How JobWise AI Works 🔄</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              From upload to offer - streamline your entire job application process
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                emoji: "📤",
                title: "Upload & Analyze",
                description: "Upload your resume and paste the job description. Get instant AI analysis.",
              },
              {
                step: "02",
                emoji: "🎯",
                title: "Get AI Insights",
                description: "Receive your fit score (0-100) with detailed feedback on missing keywords and skills.",
              },
              {
                step: "03",
                emoji: "✨",
                title: "Optimize & Generate",
                description: "Apply AI suggestions to improve your resume and generate tailored cover letters.",
              },
              {
                step: "04",
                emoji: "📊",
                title: "Apply & Track",
                description: "Send applications with confidence and track everything in your dashboard.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div
                    className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto text-black text-2xl animate-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {step.emoji}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Workflow */}
      <section className="py-24 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight">See It In Action 👀</h2>
            <p className="text-xl text-gray-600 font-light">
              Real example of how JobWise AI transforms your job application
            </p>
          </div>

          <Card className="border-0 shadow-lg overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 text-black">
                <h3 className="text-2xl font-bold mb-2">Software Engineer at TechCorp 💻</h3>
                <p className="opacity-80 text-lg">Full-stack developer position requiring React, Node.js, AWS</p>
              </div>

              <div className="p-8 space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">68</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-black mb-3 text-lg">Initial Fit Score: 68/100 📉</h4>
                    <p className="text-gray-600 mb-4">Your resume shows good potential but needs optimization</p>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="text-red-800">
                        <strong>Missing:</strong> AWS Lambda experience, React hooks proficiency 🚫
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-black mb-3 text-lg">AI Suggestions Applied ✨</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <p className="text-xs text-red-600 font-medium mb-2">BEFORE 👎</p>
                        <p className="text-sm text-gray-700">"Worked with cloud technologies"</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <p className="text-xs text-green-600 font-medium mb-2">AFTER 👍</p>
                        <p className="text-sm text-gray-700">"Deployed services using AWS Lambda and EC2"</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-lg">89</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-black mb-3 text-lg">Improved Fit Score: 89/100 📈</h4>
                    <p className="text-gray-600 mb-4">Ready to apply with confidence! 🚀</p>
                    <div className="flex space-x-3">
                      <MinimalButton variant="primary" size="sm">
                        Generate Cover Letter 📝
                      </MinimalButton>
                      <MinimalButton variant="secondary" size="sm">
                        LinkedIn Message 💼
                      </MinimalButton>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Ready to Land Your Dream Job? 🎯</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            Join thousands of job seekers who've improved their application success rate with JobWise AI ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/dashboard">
              <MinimalButton variant="gold" size="lg">
                Start Free Trial 🚀
                <ArrowRight className="ml-2 w-5 h-5" />
              </MinimalButton>
            </Link>
            <MinimalButton variant="ghost" size="lg" className="text-white hover:text-black">
              Schedule Demo 📅
            </MinimalButton>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { value: "3x", label: "Higher response rate", emoji: "📈" },
              { value: "75%", label: "Time saved per application", emoji: "⏰" },
              { value: "10k+", label: "Successful applications", emoji: "🎉" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl mb-2 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.emoji}
                </div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">🚀</span>
                </div>
                <span className="text-xl font-semibold">JobWise AI</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your smart job application companion powered by AI 🤖
              </p>
            </div>
            {[
              {
                title: "Product 📦",
                links: ["Features", "Pricing", "API"],
              },
              {
                title: "Company 🏢",
                links: ["About", "Blog", "Careers"],
              },
              {
                title: "Support 🆘",
                links: ["Help Center", "Contact", "Privacy"],
              },
            ].map((column, colIndex) => (
              <div key={colIndex}>
                <h4 className="font-semibold mb-6">{column.title}</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 JobWise AI. All rights reserved. Made with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
