type TrendItem = {
  id: number
  product: string
  topFor: string
  category: string
  aiRecommendations: number
  trend: number
}

export const trendData: TrendItem[] = [
  {
    id: 1,
    product: 'Hydrating Serum Pro',
    topFor: 'Dryness, Aging',
    category: 'Serums',
    aiRecommendations: 389,
    trend: 18.5,
  },
  {
    id: 2,
    product: 'Acne Clear Treatment',
    topFor: 'Acne, Oiliness',
    category: 'Face Mask',
    aiRecommendations: 412,
    trend: 24.2,
  },
  {
    id: 3,
    product: 'Gentle Daily Cleanser',
    topFor: 'Sensitivity, Dryness',
    category: 'Face Mask',
    aiRecommendations: 367,
    trend: 12.3,
  },
  {
    id: 4,
    product: 'Brightening Vitamin C',
    topFor: 'Hyperpigmentation, Aging',
    category: 'Serums',
    aiRecommendations: 334,
    trend: 3.1,
  },
  {
    id: 5,
    product: 'Anti-Aging Retinol Cream',
    topFor: 'Aging, Fine Lines',
    category: 'Lip Oil',
    aiRecommendations: 298,
    trend: 8.7,
  },
  {
    id: 6,
    product: 'Soothing Moisturizer',
    topFor: 'Sensitivity, Redness',
    category: 'Lip Oil',
    aiRecommendations: 289,
    trend: -2.4,
  },
]
