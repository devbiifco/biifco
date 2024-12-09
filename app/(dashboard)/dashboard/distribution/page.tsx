"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Truck, MapPin, Box, BarChart } from "lucide-react"

const deliveryStats = [
  {
    title: "Active Deliveries",
    value: "8",
    change: "+2 today",
    icon: Truck,
  },
  {
    title: "Delivery Routes",
    value: "12",
    change: "Optimized",
    icon: MapPin,
  },
  {
    title: "Inventory",
    value: "2,450",
    change: "Units",
    icon: Box,
  },
  {
    title: "Efficiency",
    value: "94%",
    change: "+5%",
    icon: BarChart,
  },
]

const deliveries = [
  {
    id: "DEL-001",
    destination: "Western Market",
    status: "In Transit",
    eta: "2h 30m",
    type: "warning",
  },
  {
    id: "DEL-002",
    destination: "Central Storage",
    status: "Loading",
    eta: "10m",
    type: "info",
  },
  {
    id: "DEL-003",
    destination: "Eastern Facility",
    status: "Delivered",
    eta: "Completed",
    type: "success",
  },
]

export default function DistributionDashboard() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Distribution Dashboard</h2>
          <p className="text-muted-foreground">
            Track and manage your delivery operations
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button>New Delivery</Button>
          <Button variant="outline">Route Optimization</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {deliveryStats.map((stat, index) => (
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
          <h3 className="text-lg font-semibold mb-4">Active Deliveries</h3>
          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <div key={delivery.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{delivery.id}</p>
                    <Badge variant={
  delivery.type === "warning" ? "default" :
  delivery.type === "success" ? "secondary" : "secondary" // Cambiar "success" por "secondary"
}>
  {delivery.status}
</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {delivery.destination}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">ETA</p>
                  <p className="text-sm text-muted-foreground">
                    {delivery.eta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Route Overview</h3>
          <div className="relative h-[300px] bg-muted rounded-lg">
            {/* Map placeholder - Would integrate with a mapping service */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground">Map View</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}