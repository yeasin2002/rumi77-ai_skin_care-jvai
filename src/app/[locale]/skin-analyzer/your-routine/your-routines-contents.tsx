import { Heart, Moon, Sun } from 'lucide-react'
import Image from 'next/image'

const morningProducts = [
  {
    step: 1,
    name: 'Gentle Cleansing Gel',
    brand: 'PureGlow',
    type: 'Cleanser',
    instruction: 'Massage gently onto damp skin for 30 seconds, then rinse with lukewarm water.',
    price: '$24.00',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop',
  },
  {
    step: 2,
    name: 'Hydrating Essence Serum',
    brand: 'GlowLab',
    type: 'Serum',
    instruction: 'Apply 2-3 drops to clean, damp skin. Pat gently until absorbed.',
    price: '$42.00',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop',
  },
]

const eveningProducts = [
  {
    step: 1,
    name: 'Gentle Cleansing Gel',
    brand: 'PureGlow',
    type: 'Cleanser',
    instruction: 'Massage gently onto damp skin for 30 seconds, then rinse with lukewarm water.',
    price: '$24.00',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop',
  },
  {
    step: 2,
    name: 'Hydrating Essence Serum',
    brand: 'GlowLab',
    type: 'Serum',
    instruction: 'Apply 2-3 drops to clean, damp skin. Pat gently until absorbed.',
    price: '$42.00',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop',
  },
]

export const YourRoutinesContents = () => {
  return (
    <div className="mx-auto mt-8 max-w-4xl space-y-6 px-6">
      {/* Morning Routine */}
      <div className="bg-main-foreground rounded-2xl p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Sun className="size-8 text-yellow-500" />
            <div>
              <h2 className="font-caudex text-main-button text-2xl italic">Morning Routine</h2>
              <p className="text-main-button/60 text-sm">Start your day with these steps</p>
            </div>
          </div>
          <button type="button" className="text-main-button/50 hover:text-main-button">
            <Heart className="size-6" />
          </button>
        </div>

        <div className="space-y-6">
          {morningProducts.map((product) => (
            <div
              key={`morning-${product.step}`}
              className="border-main-button/20 flex items-start gap-4 border-l-2 pl-4"
            >
              <div className="bg-main-button flex size-6 shrink-0 items-center justify-center rounded-full text-xs text-white">
                {product.step}
              </div>
              <div className="flex-1">
                <h3 className="font-open-sans text-main-button text-lg font-medium">
                  {product.name}
                </h3>
                <p className="text-main-button/60 text-sm">
                  {product.brand} • {product.type}
                </p>
                <p className="text-main-button/80 mt-1 text-sm">{product.instruction}</p>
              </div>
              <div className="relative shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <span className="bg-main-button absolute -bottom-2 left-1/2 -translate-x-1/2 rounded px-2 py-0.5 text-xs text-white">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Evening Routine */}
      <div className="bg-main-foreground rounded-2xl p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Moon className="text-main-button size-8" />
            <div>
              <h2 className="font-caudex text-main-button text-2xl italic">Evening Routine</h2>
              <p className="text-main-button/60 text-sm">Wind down with night time care</p>
            </div>
          </div>
          <button type="button" className="text-main-button/50 hover:text-main-button">
            <Heart className="size-6" />
          </button>
        </div>

        <div className="space-y-6">
          {eveningProducts.map((product) => (
            <div
              key={`evening-${product.step}`}
              className="border-main-button/20 flex items-start gap-4 border-l-2 pl-4"
            >
              <div className="bg-main-button flex size-6 shrink-0 items-center justify-center rounded-full text-xs text-white">
                {product.step}
              </div>
              <div className="flex-1">
                <h3 className="font-open-sans text-main-button text-lg font-medium">
                  {product.name}
                </h3>
                <p className="text-main-button/60 text-sm">
                  {product.brand} • {product.type}
                </p>
                <p className="text-main-button/80 mt-1 text-sm">{product.instruction}</p>
              </div>
              <div className="relative shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <span className="bg-main-button absolute -bottom-2 left-1/2 -translate-x-1/2 rounded px-2 py-0.5 text-xs text-white">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
