import { cn } from "@/lib/utils"

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-xs", "border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-200", className)}>{children}</span>
}
