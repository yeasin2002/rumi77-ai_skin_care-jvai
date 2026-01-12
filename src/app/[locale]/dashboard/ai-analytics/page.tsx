import { PerformanceByCategory } from './performance-by-category'
import { TrendAndFrequency } from './trend-and-frequency'

const AiAnalytics = () => {
  return (
    <main className="space-y-5">
      <TrendAndFrequency />
      <PerformanceByCategory />
    </main>
  )
}

export default AiAnalytics
