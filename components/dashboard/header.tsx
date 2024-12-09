"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"
import { UserNav } from "@/components/dashboard/user-nav"
import { MobileNav } from "@/components/dashboard/mobile-nav"
import { RoleSwitcher } from "@/components/dashboard/role-switcher"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { LanguageToggle } from "@/components/language/language-toggle"
import { Button } from "@/components/ui/button"
import { Bell, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

const notifications = [
  {
    title: "New cattle added",
    description: "5 new cattle were added to your inventory",
    time: "5m ago",
  },
  {
    title: "Temperature alert",
    description: "Unusual temperature detected in transport #1234",
    time: "1h ago",
  },
  {
    title: "Payment received",
    description: "Payment for order #5678 has been processed",
    time: "2h ago",
  },
]

export function DashboardHeader() {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-8 lg:px-12 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <MobileNav />
          <Link href="/dashboard" className="hidden md:block">
            <Logo />
          </Link>
          <div className="hidden md:block">
            <RoleSwitcher />
          </div>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center max-w-2xl mx-12">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cattle, transactions, partners..."
              className="pl-9 pr-4"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                {notifications.map((notification, index) => (
                  <DropdownMenuItem key={index} className="flex flex-col items-start p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{notification.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  )
}