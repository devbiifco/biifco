"use client"

import { ThemeToggle } from "./theme/theme-toggle"
import { LanguageToggle } from "./language/language-toggle"
import { AuthButtons } from "./auth/auth-buttons"
import { MainNav } from "./navigation/main-nav"
import { MobileNav } from "./mobile-nav"
import { Logo } from "./ui/logo"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <MobileNav />
            <Link href="/home" className="ml-4 md:ml-0">
              <Logo />
            </Link> 
          </div>
          
          <MainNav />

          <div className="flex items-center space-x-1 sm:space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <div className="hidden sm:block">
              <AuthButtons />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}