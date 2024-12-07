"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Testimonial Section */}
      <div className="hidden lg:block relative bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1533470192478-9897d90d5461?q=80&w=2069&auto=format&fit=crop"
          alt="Testimonial background"
          className="object-cover"
          priority
          quality={100}
          fill
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
        <div className="relative z-20 flex flex-col justify-between h-full p-12">
          <Button
            variant="ghost"
            size="sm"
            className="w-fit text-white hover:text-white hover:bg-white/10"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </Button>
          <blockquote className="space-y-6">
            <p className="text-lg text-white max-w-lg">
              "Biifco has revolutionized how we manage our cattle supply chain. The platforms transparency and efficiency have transformed our operations, saving us time and resources while ensuring top-quality standards."
            </p>
            <footer className="text-sm text-white/80">
              <p className="font-semibold">Sarah Johnson</p>
              <p>CEO, Western Ranches Ltd.</p>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Auth Form Section */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-6">
          <div className="lg:invisible">
            <Logo />
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>
        <main className="flex-1 flex items-center justify-center p-6">
          {children}
        </main>
      </div>
    </div>
  )
}