'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import { Line, LineChart } from 'recharts'

const chartData = [
  { day: 1, thisWeek: 2000, lastWeek: 3000 },
  { day: 2, thisWeek: 5500, lastWeek: 4500 },
  { day: 3, thisWeek: 5000, lastWeek: 5000 },
  { day: 4, thisWeek: 6000, lastWeek: 4800 },
  { day: 5, thisWeek: 7500, lastWeek: 6000 },
  { day: 6, thisWeek: 7000, lastWeek: 6500 },
  { day: 7, thisWeek: 8500, lastWeek: 6200 },
]

const chartConfig = {
  thisWeek: {
    label: 'This Week',
    color: '#14b8a6',
  },
  lastWeek: {
    label: 'Last Week',
    color: '#4a5c4a',
  },
} satisfies ChartConfig

export const AdminCustomersCharts = () => {
  return (
    <Card className="border-0">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-medium">Customers</CardTitle>
            <p className="text-muted-foreground text-sm">Last 7 days</p>
          </div>
          <span className="text-lg font-medium text-teal-500">+32.6%</span>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <LineChart data={chartData} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
            <Line type="monotone" dataKey="thisWeek" stroke="#14b8a6" strokeWidth={2} dot={false} />
            <Line
              type="monotone"
              dataKey="lastWeek"
              stroke="#4a5c4a"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ChartContainer>

        {/* Legend */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-teal-500" />
              <span className="text-sm">Jan 01 - Jan 07</span>
            </div>
            <span className="font-medium">8,620</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-main-button size-3 rounded-full" />
              <span className="text-sm">Last Week</span>
            </div>
            <span className="font-medium">6,620</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
