"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const roles = [
  { id: "PRODUCTION", label: "Production", description: "Farmers and ranchers" },
  { id: "PROCESSING", label: "Processing", description: "Meat processing facilities" },
  { id: "DISTRIBUTION", label: "Distribution", description: "Logistics and transportation" },
  { id: "RETAIL", label: "Retail", description: "Stores and markets" },
  { id: "SANITARY", label: "Sanitary", description: "Health and safety inspection" },
  { id: "OTHER", label: "Other", description: "Other supply chain roles" },
]

interface RoleSelectionProps {
  onComplete: () => void
}

export function RoleSelection({ onComplete }: RoleSelectionProps) {
  const { data: session, update } = useSession()
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const userRoles = session?.user?.roles || []
  const availableRoles = roles.filter(role => !userRoles.includes(role.id))

  const handleSubmit = async () => {
    if (!selectedRole) {
      toast.error("Please select a role")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/onboarding/role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: selectedRole }),
      })

      if (!response.ok) {
        throw new Error("Failed to update role")
      }

      const data = await response.json()

      await update({
        ...session,
        user: {
          ...session?.user,
          role: data.role,
          roles: data.roles,
        }
      })

      toast.success("Role added successfully")
      onComplete()
    } catch (error) {
      toast.error("Failed to update role")
    } finally {
      setIsLoading(false)
    }
  }

  if (availableRoles.length === 0) {
    return (
      <div className="text-center">
        <h3 className="text-lg font-medium">All Roles Assigned</h3>
        <p className="text-muted-foreground mt-2">
          You already have all available roles assigned to your account.
        </p>
        <Button
          className="mt-4"
          onClick={() => router.push("/dashboard")}
        >
          Return to Dashboard
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {availableRoles.map((role) => (
          <Card
            key={role.id}
            className={`p-4 cursor-pointer transition-colors hover:bg-muted ${
              selectedRole === role.id ? "border-primary" : ""
            }`}
            onClick={() => setSelectedRole(role.id)}
          >
            <h3 className="font-medium">{role.label}</h3>
            <p className="text-sm text-muted-foreground">{role.description}</p>
          </Card>
        ))}
      </div>

      <Button
        className="w-full"
        onClick={handleSubmit}
        disabled={!selectedRole || isLoading}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Continue
      </Button>
    </div>
  )
}