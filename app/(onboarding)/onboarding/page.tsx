"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { OnboardingSteps } from "@/components/onboarding/onboarding-steps"
import { RoleSelection } from "@/components/onboarding/role-selection"
import { CompanyCreation } from "@/components/onboarding/company-creation"
import { FacilityCreation } from "@/components/onboarding/facility-creation"

export default function OnboardingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return null
  }

  const steps = [
    {
      title: "Select Your Role",
      description: "Choose your role in the supply chain",
      component: <RoleSelection onComplete={() => setCurrentStep(1)} />
    },
    {
      title: "Create Company",
      description: "Set up your company information",
      component: <CompanyCreation onComplete={() => setCurrentStep(2)} />
    },
    {
      title: "Add Facility",
      description: "Add your first facility",
      component: <FacilityCreation onComplete={() => router.push("/dashboard")} />
    }
  ]

  return (
    <Card className="p-6">
      <OnboardingSteps steps={steps} currentStep={currentStep} />
      <div className="mt-8">
        {steps[currentStep].component}
      </div>
    </Card>
  )
}