import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import { trendData } from './ai-analytics.data'

export const TrendAndFrequency = () => {
  return (
    <div className="rounded-xl bg-white p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-main-button text-xl font-semibold">Trend & Frequency</h2>
        <div className="w-48">
          <InputGroup className="border-gray-200 bg-gray-50">
            <InputGroupAddon>
              <Search className="size-4 text-gray-400" />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Search products..."
              className="bg-transparent text-sm placeholder:text-gray-400"
            />
          </InputGroup>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 border-b border-gray-100 pb-3">
        <div className="text-main-button/70 text-sm font-medium">Product</div>
        <div className="text-main-button/70 text-sm font-medium">Category</div>
        <div className="text-main-button/70 text-sm font-medium">AI Recommendations</div>
        <div className="text-main-button/70 text-right text-sm font-medium">Trend</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-100">
        {trendData.map((item) => (
          <div key={item.id} className="grid grid-cols-4 py-4">
            <div>
              <p className="text-main-button text-sm font-medium">{item.product}</p>
              <p className="text-main-button/50 text-xs">Top for: {item.topFor}</p>
            </div>
            <div className="flex items-center">
              <span className="text-main-button/70 text-sm">{item.category}</span>
            </div>
            <div className="flex items-center">
              <span className="text-main-button text-sm">{item.aiRecommendations}</span>
            </div>
            <div className="flex items-center justify-end">
              <span
                className={cn(
                  'text-sm font-medium',
                  item.trend >= 0 ? 'text-green-600' : 'text-red-500'
                )}
              >
                {item.trend >= 0 ? '+' : ''}
                {item.trend.toFixed(1)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
