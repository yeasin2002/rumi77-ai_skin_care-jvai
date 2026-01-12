const categoryData = [
  { category: 'Serums', value1: 1200, value2: 1000 },
  { category: 'Mask', value1: 1100, value2: 850 },
  { category: 'Lip Oil', value1: 1000, value2: 750 },
]

const maxValue = 1400

export const PerformanceByCategory = () => {
  return (
    <div className="rounded-xl bg-[#f5f4f3] p-6">
      <h2 className="text-main-button mb-8 text-xl font-semibold">Performance by Category</h2>

      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute top-0 left-0 flex h-full flex-col justify-between text-right">
          <span className="text-main-button/50 text-xs">1400</span>
          <span className="text-main-button/50 text-xs">1050</span>
          <span className="text-main-button/50 text-xs">700</span>
          <span className="text-main-button/50 text-xs">350</span>
          <span className="text-main-button/50 text-xs">0</span>
        </div>

        {/* Chart area */}
        <div className="border-main-button/20 ml-10 border-b border-l border-dashed">
          {/* Grid lines */}
          <div className="relative h-64">
            <div className="absolute inset-0 flex flex-col justify-between">
              <div className="border-main-button/20 border-t border-dashed" />
              <div className="border-main-button/20 border-t border-dashed" />
              <div className="border-main-button/20 border-t border-dashed" />
              <div className="border-main-button/20 border-t border-dashed" />
            </div>

            {/* Bars */}
            <div className="absolute inset-0 flex items-end justify-around px-8">
              {categoryData.map((item) => (
                <div key={item.category} className="flex items-end gap-2">
                  {/* Dark green bar */}
                  <div
                    className="bg-main-button w-12 rounded-t"
                    style={{ height: `${(item.value1 / maxValue) * 100}%` }}
                  />
                  {/* Brown bar */}
                  <div
                    className="w-12 rounded-t bg-[#4a3f35]"
                    style={{ height: `${(item.value2 / maxValue) * 100}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* X-axis labels */}
          <div className="mt-4 flex justify-around px-8">
            {categoryData.map((item) => (
              <span key={item.category} className="text-main-button/70 text-sm">
                {item.category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
