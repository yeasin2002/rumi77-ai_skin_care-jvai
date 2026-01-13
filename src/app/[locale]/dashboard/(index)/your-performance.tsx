'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import { Package, Store, Truck } from 'lucide-react'
import { Cell, Pie, PieChart } from 'recharts'

const performanceData = [
  {
    id: 'processing',
    icon: Store,
    count: '54 new orders',
    status: 'Processing',
    bgColor: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
  {
    id: 'shipped',
    icon: Package,
    count: '4 orders',
    status: 'Shipped',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-500',
  },
  {
    id: 'delivered',
    icon: Truck,
    count: '16 orders',
    status: 'Delivered',
    bgColor: 'bg-cyan-100',
    iconColor: 'text-cyan-500',
  },
]

const gaugeData = [
  { name: 'orange', value: 15, color: '#f97316' },
  { name: 'green', value: 35, color: '#4a5c4a' },
  { name: 'teal', value: 25, color: '#5eead4' },
  { name: 'empty', value: 25, color: '#e5e5e5' },
]

const chartConfig = {
  value: { label: 'Value' },
} satisfies ChartConfig

export const YourPerformance = () => {
  return (
    <Card className="border-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium">Your Performance</CardTitle>
        <p className="text-muted-foreground text-sm">Last 7 days</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6">
          {/* Left side - Order stats */}
          <div className="flex-1 space-y-4">
            {performanceData.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className={`rounded-lg p-2.5 ${item.bgColor}`}>
                  <item.icon className={`size-5 ${item.iconColor}`} />
                </div>
                <div>
                  <p className="font-medium">{item.count}</p>
                  <p className="text-muted-foreground text-sm">{item.status}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Gauge chart */}
          <div className="flex flex-1 flex-col items-center justify-center">
            <ChartContainer config={chartConfig} className="h-[140px] w-[140px]">
              <PieChart>
                <Pie
                  data={gaugeData}
                  cx="50%"
                  cy="70%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={50}
                  outerRadius={65}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {gaugeData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
            <div className="-mt-4 text-center">
              <p className="text-3xl font-semibold">545</p>
              <p className="text-muted-foreground mt-1 text-sm">
                Learn insights how to
                <br />
                manage all aspects of
                <br />
                your startup
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
