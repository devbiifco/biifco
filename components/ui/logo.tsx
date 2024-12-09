"use client"

import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-5 h-5 bg-foreground" />
      <span className="text-xl font-black">biifco</span>
    </div>
  )
}