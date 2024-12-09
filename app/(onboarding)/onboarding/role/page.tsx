"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { RoleSelection } from "@/components/onboarding/role-selection"

export default function RoleOnboardingPage() {
  const { data: session } = useSession()
  const router = useRouter()

  const handleComplete = () => {
    router.push("/onboarding/company")
  }

  return (
    <Card className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Select Your Role</h2>
        <p className="text-muted-foreground">
          Choose your role in the supply chain
        </p>
      </div>
      <RoleSelection onComplete={handleComplete} />
    </Card>
  )
}