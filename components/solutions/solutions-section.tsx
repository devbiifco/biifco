"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, LineChart, Workflow, Users, Cloud } from "lucide-react"

const solutions = [
  {
    icon: Shield,
    title: "Traceability & Compliance",
    description: "End-to-end tracking and regulatory compliance management for your entire supply chain."
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description: "Live tracking of cattle health, location, and environmental conditions."
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    description: "Advanced analytics and predictive modeling for better decision-making."
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline operations with automated workflows and smart alerts."
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description: "Unified platform for farmers, processors, distributors, and retailers."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with existing systems and third-party applications."
  }
]

export function SolutionsSection() {
  return (
    <section className="py-24 bg-background w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Comprehensive Solutions
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-[800px]">
            Discover how our platform can transform your livestock management and supply chain operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all group">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <solution.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-muted-foreground mb-4">{solution.description}</p>
              <Button variant="ghost" className="group/btn">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}