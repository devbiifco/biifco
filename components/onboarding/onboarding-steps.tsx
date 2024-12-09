"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step {
  title: string
  description: string
}

interface OnboardingStepsProps {
  steps: Step[]
  currentStep: number
}

export function OnboardingSteps({ steps, currentStep }: OnboardingStepsProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute left-0 top-[15px] w-full h-0.5 bg-muted" />
        <div className="relative z-10 flex justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  index < currentStep
                    ? "bg-primary text-primary-foreground"
                    : index === currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {index < currentStep ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="mt-2 text-center">
                <p className="font-medium text-sm">{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}