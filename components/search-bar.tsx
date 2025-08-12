"use client"
import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = { onChange: (q: string) => void }

export function SearchBar({ onChange }: Props) {
  return (
    <div className="w-full">
      <Label htmlFor="search">Buscar aplicaciones</Label>
      <Input
        id="search"
        type="search"
        placeholder="Buscar por nombre o descripción..."
        aria-label="Buscar por nombre o descripción"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
