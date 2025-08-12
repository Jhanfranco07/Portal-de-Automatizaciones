import * as React from "react"
import { cn } from "@/lib/utils"

export function Label({ htmlFor, children, className }: { htmlFor?: string, children: React.ReactNode, className?: string }) {
  return <label htmlFor={htmlFor} className={cn("mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200", className)}>{children}</label>
}
