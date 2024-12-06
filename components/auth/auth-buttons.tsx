"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AuthButtons() {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Button variant="ghost" size="sm" className="text-sm" asChild>
        <Link href="/login">
          Sign In
        </Link>
      </Button>
      <Button size="sm" className="text-sm" asChild>
        <Link href="/signup">
          Sign Up
        </Link>
      </Button>
    </div>
  )
}