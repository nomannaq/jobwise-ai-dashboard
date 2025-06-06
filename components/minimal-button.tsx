"use client"

import type React from "react"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface MinimalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const MinimalButton = forwardRef<HTMLButtonElement, MinimalButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "btn-minimal inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
      primary: "btn-primary focus:ring-black",
      secondary: "btn-secondary focus:ring-gray-300",
      gold: "btn-gold focus:ring-yellow-400",
      ghost: "bg-transparent text-gray-600 hover:text-black hover:bg-gray-50",
    }

    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded-lg",
      md: "px-4 py-2 text-base rounded-lg",
      lg: "px-6 py-3 text-base rounded-lg",
    }

    return (
      <button className={cn(baseStyles, variants[variant], sizes[size], className)} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

MinimalButton.displayName = "MinimalButton"

export { MinimalButton }
