"use client"

import { useSession } from "next-auth/react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small farms and individual ranchers",
    features: [
      "Up to 100 cattle records",
      "Basic tracking & monitoring",
      "Mobile app access",
      "Email support",
      "Basic reporting",
    ],
  },
  {
    name: "Professional",
    price: "149",
    description: "Ideal for medium-sized operations",
    features: [
      "Up to 1,000 cattle records",
      "Advanced tracking & monitoring",
      "Priority support",
      "Advanced reporting",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "349",
    description: "For large-scale farming operations",
    features: [
      "Up to 5,000 cattle records",
      "Enterprise-grade security",
      "24/7 priority support",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
]

export default function SubscriptionPage() {
  const { data: session } = useSession()
  const [currentPlan, setCurrentPlan] = useState("starter")
  const [isLoading, setIsLoading] = useState(false)

  const handleUpgrade = async (planName: string) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planName.toLowerCase() }),
      })

      if (!response.ok) throw new Error("Failed to upgrade subscription")

      setCurrentPlan(planName.toLowerCase())
      toast.success(`Successfully upgraded to ${planName} plan`)
    } catch (error) {
      toast.error("Failed to upgrade subscription")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Subscription</h2>
        <p className="text-muted-foreground">
          Manage your subscription and billing
        </p>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Current Plan</h3>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="capitalize">
              {currentPlan}
            </Badge>
            {currentPlan === "starter" && (
              <div className="flex items-center text-sm text-yellow-600">
                <AlertCircle className="h-4 w-4 mr-1" />
                Trial ends in 25 days
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "p-6",
                plan.popular && "border-primary"
              )}
            >
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                disabled={isLoading || currentPlan === plan.name.toLowerCase()}
                onClick={() => handleUpgrade(plan.name)}
              >
                {currentPlan === plan.name.toLowerCase()
                  ? "Current Plan"
                  : "Upgrade"}
              </Button>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  )
}