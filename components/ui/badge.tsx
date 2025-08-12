import * as React from "react"
import { cn } from "@/lib/utils"

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs",
        "border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-200",
        className
      )}
    >
      {children}
    </span>
  )
}
