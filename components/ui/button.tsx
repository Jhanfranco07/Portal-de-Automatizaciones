import * as React from "react"
import { cn } from "@/lib/utils"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function Button({ className, variant="default", size="md", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
  const variants = {
    default: "bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:border-gray-700 focus-visible:ring-brand",
    ghost: "text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800 focus-visible:ring-brand",
  }
  const sizes = { sm: "h-9 px-3 text-sm", md: "h-10 px-4", lg: "h-12 px-6 text-lg" }
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
}
