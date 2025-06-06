"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, FileText, Home, LogOut, Menu, MessageSquare, Settings, Target, Upload, User, X } from "lucide-react"
import { MinimalButton } from "@/components/minimal-button"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Target, label: "Job Matches", href: "/dashboard/matches" },
    { icon: FileText, label: "My Resumes", href: "/dashboard/resumes" },
    { icon: MessageSquare, label: "Cover Letters", href: "/dashboard/cover-letters" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-100 p-4">
        <Link href="/dashboard" className="flex items-center space-x-3 mb-8 px-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">🚀</span>
          </div>
          <span className="text-xl font-semibold text-black tracking-tight">JobWise AI</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                item.href === "/dashboard" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100 hover:text-black",
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="border-t border-gray-100 pt-4 mt-4">
          <div className="flex items-center px-3 py-2 space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Alex Johnson</p>
              <p className="text-xs text-gray-500 truncate">alex@example.com</p>
            </div>
          </div>
          <button className="mt-2 flex items-center space-x-2 text-sm text-gray-600 hover:text-black transition-colors w-full px-3 py-2 rounded-lg hover:bg-gray-100">
            <LogOut className="w-4 h-4" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-200",
          mobileNavOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setMobileNavOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-white z-50 md:hidden transform transition-transform duration-200 ease-in-out",
          mobileNavOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link href="/dashboard" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">🚀</span>
            </div>
            <span className="text-xl font-semibold text-black tracking-tight">JobWise AI</span>
          </Link>
          <button
            onClick={() => setMobileNavOpen(false)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                item.href === "/dashboard" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100 hover:text-black",
              )}
              onClick={() => setMobileNavOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="border-t border-gray-100 p-4 mt-auto">
          <div className="flex items-center px-3 py-2 space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Alex Johnson</p>
              <p className="text-xs text-gray-500 truncate">alex@example.com</p>
            </div>
          </div>
          <button className="mt-2 flex items-center space-x-2 text-sm text-gray-600 hover:text-black transition-colors w-full px-3 py-2 rounded-lg hover:bg-gray-100">
            <LogOut className="w-4 h-4" />
            <span>Sign out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-100 py-4 px-4 sm:px-6 flex items-center justify-between">
          <button
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-semibold text-gray-900 truncate">Dashboard</h1>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
              <MinimalButton variant="secondary" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload Resume
              </MinimalButton>
              <MinimalButton variant="primary" size="sm">
                Add Application
              </MinimalButton>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
