"use client"

import { Beef, BarChart3, Truck, Store, Users2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const supplyChainSteps = [
  {
    icon: Beef,
    title: "Production",
    description: "Track and monitor cattle from birth through raising, ensuring quality and sustainability",
  },
  {
    icon: BarChart3,
    title: "Processing",
    description: "Maintain transparency and traceability throughout the processing stage",
  },
  {
    icon: Truck,
    title: "Distribution",
    description: "Monitor transportation and storage conditions in real-time",
  },
  {
    icon: Store,
    title: "Retail",
    description: "Connect retailers with verified suppliers and track inventory",
  },
  {
    icon: Users2,
    title: "Consumer",
    description: "Provide end-to-end traceability and product information to consumers",
  },
]

export function ProcessSteps() {
  return (
    <section className="py-24  w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Revolutionizing the Bovine Supply Chain
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-[800px]">
            Our platform provides end-to-end visibility and traceability across the entire beef supply chain,
            from farm to table.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {supplyChainSteps.map((step, index) => (
            <Card 
              key={index} 
              className="relative group p-6 hover:shadow-lg transition-all border-primary/10 hover:border-primary/20"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full group hover:bg-primary hover:text-primary-foreground"
          >
            Learn More
          </Button>
          <Button 
            size="lg" 
            className="rounded-full group"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}