"use client"

import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

const recentActivities = [
  {
    id: "1",
    type: "Cattle Added",
    details: "Added 5 new cattle to tracking system",
    date: "2024-03-20",
    status: "completed",
  },
  {
    id: "2",
    type: "Transport",
    details: "Shipment #12345 started",
    date: "2024-03-19",
    status: "in-progress",
  },
  {
    id: "3",
    type: "Health Check",
    details: "Routine health inspection completed",
    date: "2024-03-18",
    status: "completed",
  },
  {
    id: "4",
    type: "Transaction",
    details: "Payment received for order #67890",
    date: "2024-03-17",
    status: "completed",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-xl font-semibold">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">
          Your latest supply chain activities
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentActivities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell className="font-medium">{activity.type}</TableCell>
              <TableCell>{activity.details}</TableCell>
              <TableCell>{activity.date}</TableCell>
              <TableCell>
                <span className={cn(
                  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                  activity.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                )}>
                  {activity.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}