"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Beef, TrendingUp, AlertTriangle, Activity } from "lucide-react"

const mockData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
]

const stats = [
  {
    title: "Total Cattle",
    value: "1,234",
    change: "+12.3%",
    icon: Beef,
  },
  {
    title: "Growth Rate",
    value: "98.2%",
    change: "+2.1%",
    icon: TrendingUp,
  },
  {
    title: "Health Alerts",
    value: "2",
    change: "-50%",
    icon: AlertTriangle,
  },
  {
    title: "Daily Activity",
    value: "Normal",
    change: "Stable",
    icon: Activity,
  },
]

export default function ProductionDashboard() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Production Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor and manage your cattle production
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button>Add Cattle</Button>
          <Button variant="outline">Generate Report</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-2xl font-semibold">{stat.value}</h3>
                  <span className="text-sm text-green-600">{stat.change}</span>
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
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Growth Trends</h3>
            <p className="text-sm text-muted-foreground">
              Average cattle weight over time
            </p>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <p className="text-sm text-muted-foreground">
              Latest updates and events
            </p>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 border-b pb-4 last:border-0">
                <div className="rounded-full bg-primary/10 p-2">
                  <Activity className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Health check completed</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}