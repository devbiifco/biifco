"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Truck, Package, Clock, CheckCircle } from "lucide-react"

const processingStats = [
  {
    title: "Active Batches",
    value: "12",
    icon: Package,
    progress: 75,
  },
  {
    title: "Pending Shipments",
    value: "5",
    icon: Truck,
    progress: 40,
  },
  {
    title: "Processing Time",
    value: "2.5h",
    icon: Clock,
    progress: 60,
  },
  {
    title: "Quality Score",
    value: "98%",
    icon: CheckCircle,
    progress: 98,
  },
]

export default function ProcessingDashboard() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Processing Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor and manage meat processing operations
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button>New Batch</Button>
          <Button variant="outline">View Reports</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processingStats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-semibold">{stat.value}</h3>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
            </div>
            <Progress value={stat.progress} className="h-2" />
            <p className="mt-2 text-sm text-muted-foreground">
              {stat.progress}% complete
            </p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Active Processing Lines</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((line) => (
              <div key={line} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <p className="font-medium">Processing Line {line}</p>
                  <p className="text-sm text-muted-foreground">Batch #12345</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">2.5h remaining</p>
                  <p className="text-sm text-muted-foreground">On schedule</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quality Control</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((check) => (
              <div key={check} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium">Quality Check #{check}</p>
                    <p className="text-sm text-muted-foreground">Passed all criteria</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}