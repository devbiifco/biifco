"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { 
  Beef, 
  Factory, 
  Truck, 
  Store, 
  ShieldCheck, 
  Settings,
  ArrowRight,
  PlusCircle
} from "lucide-react"

const roleIcons = {
  PRODUCTION: Beef,
  PROCESSING: Factory,
  DISTRIBUTION: Truck,
  RETAIL: Store,
  SANITARY: ShieldCheck,
  OTHER: Settings,
}

const roleDescriptions = {
  PRODUCTION: "Manage cattle production and monitoring",
  PROCESSING: "Control meat processing operations",
  DISTRIBUTION: "Track delivery and logistics",
  RETAIL: "Monitor sales and inventory",
  SANITARY: "Ensure health and safety compliance",
  OTHER: "Additional operations and settings",
}

export default function DashboardPage() {
  const { data: session, update } = useSession()
  const router = useRouter()

  const userRoles = session?.user?.roles || []
  const currentRole = session?.user?.role

  const handleRoleSelect = async (role: string) => {
    try {
      const response = await fetch("/api/user/switch-role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
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

      router.push(`/dashboard/${role.toLowerCase()}`)
      toast.success("Role switched successfully")
    } catch (error) {
      toast.error("Failed to switch role")
    }
  }

  const handleAddRole = () => {
    router.push("/onboarding/role")
  }

  return (
    <div className="flex-1 space-y-6 p-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Role Overview</h2>
        <p className="text-muted-foreground">
          Manage and switch between your different roles
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {userRoles.map((role) => {
          const Icon = roleIcons[role as keyof typeof roleIcons]
          return (
            <Card 
              key={role}
              className={`p-6 hover:shadow-lg transition-all cursor-pointer ${
                currentRole === role ? "border-primary" : ""
              }`}
              onClick={() => handleRoleSelect(role)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{role.charAt(0) + role.slice(1).toLowerCase()}</h3>
                    <p className="text-sm text-muted-foreground">
                      {roleDescriptions[role as keyof typeof roleDescriptions]}
                    </p>
                  </div>
                </div>
                {currentRole === role && (
                  <Badge>Active</Badge>
                )}
              </div>
              <Button 
                className="w-full group" 
                variant={currentRole === role ? "default" : "outline"}
              >
                {currentRole === role ? "Current Role" : "Switch Role"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          )
        })}

        {userRoles.length < Object.keys(roleIcons).length && (
          <Card 
            className="p-6 hover:shadow-lg transition-all cursor-pointer border-dashed"
            onClick={handleAddRole}
          >
            <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground">
              <div className="rounded-full bg-muted p-3">
                <PlusCircle className="h-6 w-6" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Add New Role</h3>
                <p className="text-sm">Register for additional roles</p>
              </div>
              <Button variant="outline" className="mt-2">
                Register Role
              </Button>
            </div>
          </Card>
        )}
      </div>

      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Settings className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Role Management</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Configure your roles and permissions
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">Role Settings</Button>
              <Button variant="outline">View Permissions</Button>
              <Button variant="outline">Access Control</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
