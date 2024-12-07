"use client"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Beef, TrendingUp, Users, Truck } from "lucide-react"

const stats = [
  {
    title: "Total Cattle",
    value: "1,234",
    icon: Beef,
    change: "+12.3%",
    trend: "up",
  },
  {
    title: "Active Tracking",
    value: "856",
    icon: TrendingUp,
    change: "+8.2%",
    trend: "up",
  },
  {
    title: "Partners",
    value: "45",
    icon: Users,
    change: "+2.4%",
    trend: "up",
  },
  {
    title: "Deliveries",
    value: "289",
    icon: Truck,
    change: "+18.7%",
    trend: "up",
  },
]

export function DashboardStats() {
  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <div className="flex items-baseline space-x-2">
                <h3 className="text-2xl font-semibold">{stat.value}</h3>
                <span className={cn(
                  "text-sm",
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                )}>
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
    </>
  )
}