"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ShoppingCart, DollarSign, TrendingUp, Users, Package } from "lucide-react"

const salesData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 6890 },
  { name: 'Sat', value: 8390 },
  { name: 'Sun', value: 4490 },
]

const retailStats = [
  {
    title: "Daily Sales",
    value: "$12,450",
    change: "+8.1%",
    icon: DollarSign,
  },
  {
    title: "Customer Traffic",
    value: "1,234",
    change: "+12.3%",
    icon: Users,
  },
  {
    title: "Stock Level",
    value: "85%",
    change: "Optimal",
    icon: Package,
  },
  {
    title: "Growth",
    value: "+23%",
    change: "vs last month",
    icon: TrendingUp,
  },
]

const topProducts = [
  {
    name: "Premium Ribeye",
    sales: 234,
    revenue: "$5,680",
    stock: 75,
  },
  {
    name: "Ground Beef",
    sales: 189,
    revenue: "$2,340",
    stock: 60,
  },
  {
    name: "Tenderloin",
    sales: 156,
    revenue: "$4,890",
    stock: 45,
  },
]

export default function RetailDashboard() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Retail Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor sales and inventory performance
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4" />
            New Order
          </Button>
          <Button variant="outline">View Reports</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {retailStats.map((stat, index) => (
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
            <h3 className="text-lg font-semibold">Sales Overview</h3>
            <p className="text-sm text-muted-foreground">
              Daily revenue for the past week
            </p>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
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
          <h3 className="text-lg font-semibold mb-4">Top Products</h3>
          <div className="space-y-6">
            {topProducts.map((product, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{product.sales} sales</span>
                      <span>•</span>
                      <span>{product.revenue}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <Progress value={product.stock} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Stock level: {product.stock}%
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}