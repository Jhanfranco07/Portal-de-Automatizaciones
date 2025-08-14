"use client"
import * as React from "react"
import { APPS, type AppLink } from "@/apps.config"
import { Button } from "@/components/ui/button"


const CATEGORIES: AppLink["category"][] = Array.from(
  new Set(APPS.map((a) => a.category))
).sort()

type Props = { value?: string; onChange: (c?: string) => void }

export function FilterChips({ value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={value ? "outline" : "default"}
        size="sm"
        onClick={() => onChange(undefined)}
        aria-pressed={!value}
      >
        Todas
      </Button>

      {CATEGORIES.map((cat) => (
        <Button
          key={cat}
          variant={value === cat ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(cat)}
          aria-pressed={value === cat}
        >
          {cat}
        </Button>
      ))}
    </div>
  )
}
