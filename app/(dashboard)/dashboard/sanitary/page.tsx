"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ShieldCheck, 
  AlertTriangle, 
  ClipboardCheck, 
  Activity,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react"

const sanitaryStats = [
  {
    title: "Inspections Today",
    value: "12",
    change: "4 remaining",
    icon: ClipboardCheck,
  },
  {
    title: "Compliance Rate",
    value: "98%",
    change: "+2.5%",
    icon: ShieldCheck,
  },
  {
    title: "Active Alerts",
    value: "2",
    change: "Critical",
    icon: AlertTriangle,
  },
  {
    title: "Health Score",
    value: "A+",
    change: "Excellent",
    icon: Activity,
  },
]

const inspections = [
  {
    id: "INS-001",
    facility: "Western Processing Plant",
    status: "Passed",
    date: "2024-03-20",
    score: 98,
    type: "success",
  },
  {
    id: "INS-002",
    facility: "Central Storage Unit",
    status: "In Progress",
    date: "2024-03-20",
    score: null,
    type: "warning",
  },
  {
    id: "INS-003",
    facility: "Eastern Distribution Center",
    status: "Failed",
    date: "2024-03-19",
    score: 65,
    type: "error",
  },
]

const alerts = [
  {
    title: "Temperature Alert",
    description: "Cold storage unit #3 above threshold",
    severity: "high",
    time: "10 minutes ago",
  },
  {
    title: "Hygiene Check Required",
    description: "Processing area B due for inspection",
    severity: "medium",
    time: "1 hour ago",
  },
  {
    title: "Documentation Update",
    description: "New compliance forms available",
    severity: "low",
    time: "2 hours ago",
  },
]

export default function SanitaryDashboard() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sanitary Control Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor health and safety compliance
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button>New Inspection</Button>
          <Button variant="outline">Generate Report</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {sanitaryStats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-2xl font-semibold">{stat.value}</h3>
                  <span className="text-sm text-muted-foreground">
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Inspections</h3>
          <div className="space-y-4">
            {inspections.map((inspection) => (
              <div key={inspection.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{inspection.id}</p>
                    <Badge variant={
  inspection.type === "success" ? "secondary" : // Cambiar "success" a un valor permitido
  inspection.type === "error" ? "destructive" : "default"
}>
                      {inspection.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {inspection.facility}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">
                    {inspection.score ? `Score: ${inspection.score}` : 'Pending'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {inspection.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Active Alerts</h3>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-4 border-b pb-4 last:border-0">
                <div className="mt-1">
                  {alert.severity === "high" ? (
                    <XCircle className="h-5 w-5 text-destructive" />
                  ) : alert.severity === "medium" ? (
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{alert.title}</p>
                    <span className="text-xs text-muted-foreground">
                      {alert.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {alert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}