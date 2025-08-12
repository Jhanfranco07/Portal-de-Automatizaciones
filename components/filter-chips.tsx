"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import type { AppLink } from "@/apps.config"

const CATEGORIES: AppLink["category"][] = ["Conformidad","Ferias","Ambulantes","Reportes","Otros"]

type Props = { value?: string; onChange: (c?: string) => void }

export function FilterChips({ value, onChange }: Props) {
  return (
    <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
      <Button
        variant={value ? "outline" : "default"}
        size="sm"
        onClick={() => onChange(undefined)}
        aria-pressed={!value}
      >
        Todas
      </Button>
      {CATEGORIES.map((c) => (
        <Button
          key={c}
          variant={value === c ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(c)}
          aria-pressed={value === c}
        >
          {c}
        </Button>
      ))}
    </div>
  )
}
