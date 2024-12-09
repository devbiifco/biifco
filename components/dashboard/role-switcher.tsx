"use client"

import * as React from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { toast } from "sonner"

const roles = [
  { id: "PRODUCTION", label: "Production" },
  { id: "PROCESSING", label: "Processing" },
  { id: "DISTRIBUTION", label: "Distribution" },
  { id: "RETAIL", label: "Retail" },
  { id: "SANITARY", label: "Sanitary" },
  { id: "OTHER", label: "Other" },
]

export function RoleSwitcher() {
  const { data: session, update } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  const handleRoleSwitch = async (roleId: string) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/user/switch-role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: roleId }),
      })

      if (!response.ok) throw new Error("Failed to switch role")

      const data = await response.json()

      await update({
        ...session,
        user: {
          ...session?.user,
          role: data.role,
        }
      })
      
      router.push(`/dashboard/${roleId.toLowerCase()}`)
      toast.success("Role switched successfully")
    } catch (error) {
      toast.error("Failed to switch role")
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddRole = () => {
    router.push("/onboarding/role")
  }

  const userRoles = session?.user?.roles || []
  const currentRole = session?.user?.role || ""

  return (
    <div className="flex items-center gap-2">
      {userRoles.length > 0 ? (
        <Select
          value={currentRole}
          onValueChange={handleRoleSwitch}
          disabled={isLoading}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Switch role">
              {roles.find(r => r.id === currentRole)?.label || "Switch role"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {userRoles.map((roleId) => {
              const role = roles.find(r => r.id === roleId)
              return (
                <SelectItem key={roleId} value={roleId}>
                  {role?.label || roleId}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      ) : (
        <p className="text-sm text-muted-foreground">No roles assigned</p>
      )}
      
      {userRoles.length < roles.length && (
        <Button
          variant="outline"
          size="icon"
          onClick={handleAddRole}
          disabled={isLoading}
          title="Add new role"
        >
          <PlusCircle className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}