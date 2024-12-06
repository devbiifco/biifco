"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { pricingPlans } from "@/lib/constants"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function PricingSection() {
  const [expandedPlan, setExpandedPlan] = React.useState<number | null>(null)

  return (
    <section className="py-24 bg-background w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-[800px]">
            Select the perfect plan for your business needs. All plans include our core features with varying levels of functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={cn(
              "relative p-8 transition-all hover:shadow-lg",
              plan.popular && "border-primary shadow-md"
            )}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold">$</span>
                  <span className="text-6xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button 
                  className="w-full rounded-full" 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/signup">
                    Get Started
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="ml-3 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                className="w-full mt-6"
                onClick={() => setExpandedPlan(expandedPlan === index ? null : index)}
              >
                {expandedPlan === index ? (
                  <>
                    Show Less
                    <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show More
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {expandedPlan === index && (
                <div className="mt-6 space-y-4 border-t pt-6">
                  {plan.expandedFeatures.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="ml-3 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6">
            We offer tailored enterprise plans for large-scale operations with custom requirements.
            Get in touch with our team to discuss your specific needs.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full"
            asChild
          >
            <Link href="/contact">
              Contact Enterprise Sales
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}