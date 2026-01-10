import { Button } from '@/components/ui'
import Image from 'next/image'

const products = [
  {
    id: 1,
    category: 'Lip Oil',
    name: 'Nourishing Lip Oil',
    price: '$ 98.00 ( USD )',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=400&fit=crop',
  },
  {
    id: 2,
    category: 'Serum',
    name: 'Deep nourishing day serum',
    price: '$ 98.00 ( USD )',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=400&fit=crop',
  },
  {
    id: 3,
    category: 'Sleeping Mask',
    name: 'Overnight Repair & Rejuvenating Mask',
    price: '$ 98.00 ( USD )',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=300&h=400&fit=crop',
  },
]

export const AllProductsContent = () => {
  return (
    <div className="mx-auto mt-8 max-w-5xl px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            {/* Image Container */}
            <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-[#e8e6e3]">
              {/* Category Badge */}
              <span className="absolute top-3 left-3 z-10 rounded-full bg-black px-3 py-1 text-xs text-white">
                {product.category}
              </span>

              {/* Product Image */}
              <Image src={product.image} alt={product.name} fill className="object-cover" />

              {/* Buttons Overlay */}
              <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-1 p-3">
                <Button
                  variant="outline"
                  className={`bg-background/20 border-black`}
                  // className="w-full rounded-md border-black bg-white py-2 text-sm text-black hover:bg-gray-100"
                >
                  Add to Cart
                </Button>

                <Button className="w-full rounded-md bg-black py-2 text-sm text-white hover:bg-black/90">
                  View Details
                </Button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-3">
              <p className="text-sm font-medium text-black">{product.price}</p>
              <p className="text-main-button text-sm">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
