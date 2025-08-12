import * as React from "react"
import { cn } from "@/lib/utils"

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none placeholder:text-gray-400 " +
          "focus-visible:ring-2 focus-visible:ring-brand dark:bg-gray-900 dark:border-gray-700 transition-all",
        className
      )}
      {...props}
    />
  )
)
Input.displayName = "Input"

