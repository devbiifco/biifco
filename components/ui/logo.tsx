"use client"

import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-6 h-6 bg-foreground" />
      <span className="text-lg font-bold">biifco</span>
    </div>
  )
}