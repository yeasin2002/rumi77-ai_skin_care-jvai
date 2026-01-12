'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const chartData = [
  { month: 'Jan', thisMonth: 3000, lastMonth: 1000 },
  { month: 'Feb', thisMonth: 14000, lastMonth: 8000 },
  { month: 'Mar', thisMonth: 17000, lastMonth: 12000 },
  { month: 'Apr', thisMonth: 9000, lastMonth: 17000 },
  { month: 'May', thisMonth: 21000, lastMonth: 11000 },
  { month: 'Jun', thisMonth: 14000, lastMonth: 18000 },
  { month: 'Jul', thisMonth: 19000, lastMonth: 14000 },
  { month: 'Aug', thisMonth: 15000, lastMonth: 19000 },
  { month: 'Sep', thisMonth: 18000, lastMonth: 7000 },
  { month: 'Oct', thisMonth: 18000, lastMonth: 12000 },
]

const chartConfig = {
  thisMonth: {
    label: 'This Month',
    color: '#22c55e',
  },
  lastMonth: {
    label: 'Last Month',
    color: '#f97316',
  },
} satisfies ChartConfig

export const SaleCards = () => {
  return (
    <Card className="border-0">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Sale</CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button type="button" className="text-muted-foreground hover:text-foreground">
              <ChevronLeft className="size-5" />
            </button>
            <span className="font-medium">2025</span>
            <button type="button" className="text-muted-foreground hover:text-foreground">
              <ChevronRight className="size-5" />
            </button>
          </div>
          <select className="text-muted-foreground border-none bg-transparent text-sm outline-none">
            <option>7 days</option>
            <option>30 days</option>
            <option>90 days</option>
          </select>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="fillThisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
              formatter={(value) => `$${Number(value).toLocaleString()}`}
            />
            <Area
              type="monotone"
              dataKey="thisMonth"
              stroke="#22c55e"
              strokeWidth={3}
              fill="url(#fillThisMonth)"
            />
            <Area
              type="monotone"
              dataKey="lastMonth"
              stroke="#f97316"
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="transparent"
            />
          </AreaChart>
        </ChartContainer>

        {/* Legend */}
        <div className="mt-4 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-green-500" />
            <span className="text-sm">This Month</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-orange-500" />
            <span className="text-sm">Last Month</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
