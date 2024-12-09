"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RegisterCTA() {
  return (
    <section className="relative py-24 w-full" style={{ backgroundColor: "#00b4ff" }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center space-y-8 text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Join the Future of Livestock Management Today
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto text-white/80">
            Transform your supply chain operations with our innovative platform. Get started for free and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white bg-transparent text-white hover:bg-black hover:text-white hover:border-transparent transition-colors"
              asChild
            >
              <Link href="/contact">
                Schedule a Demo
              </Link>
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-white text-[#00b4ff] hover:bg-black hover:text-white transition-colors ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-0 group"
              asChild
            >
              <Link href="/signup">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}