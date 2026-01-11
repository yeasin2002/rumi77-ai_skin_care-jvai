import productImage from '@/assets/image/serum-drop-product.jpg'
import { Button } from '@/components/ui'
import { Plus, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

const SingleProductDetails = () => {
  return (
    <div className="bg-background min-h-screen px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left - Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={productImage}
            alt="Deep nourishing day serum"
            fill
            className="object-contain p-8"
          />
        </div>

        {/* Right - Product Details */}
        <div>
          {/* Title */}
          <h1 className="font-caudex text-main-button text-4xl font-normal">
            Deep nourishing day serum
          </h1>
          <p className="text-main-button/70 mt-1 text-sm">
            Daily Brightening & Barrier Repair Serum
          </p>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-main-button text-2xl font-medium">$ 98.00 ( USD )</span>
            <span className="text-sm text-gray-400 line-through">$112.00</span>
            <span className="text-main-button/60 text-sm">30ml</span>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="mt-6 flex items-center gap-3">
            <div className="bg-main-button flex items-center gap-4 rounded-md px-4 py-2 text-white">
              <span>1</span>
              <Plus className="size-4" />
            </div>
            <Button
              variant="outline"
              className="border-main-button text-main-button flex items-center gap-2 rounded-md px-6 py-2"
            >
              Add to Cart
              <ShoppingBag className="size-4" />
            </Button>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="font-open-sans text-main-button text-lg font-semibold">Description</h3>
            <p className="text-main-button/80 mt-2 text-sm leading-relaxed">
              Deep Nourishing Day Serum is a lightweight yet powerful daily serum designed to deeply
              hydrate, restore, and protect your skin throughout the day. Formulated with
              skin-loving botanical and nourishing actives, it absorbs quickly to deliver
              long-lasting moisture without feeling greasy or heavy.
            </p>
            <p className="text-main-button/80 mt-4 text-sm leading-relaxed">
              This serum helps strengthen the skin&apos;s moisture barrier, improve texture, and
              leave your skin feeling soft, smooth, and refreshed from morning to night. Perfect for
              daily use and suitable for all skin types.
            </p>
          </div>

          {/* Skin Type */}
          <div className="mt-8">
            <h3 className="font-open-sans text-main-button text-lg font-semibold italic">
              Skin Type
            </h3>
            <p className="text-main-button/80 mt-2 text-sm">All skin types, including sensitive</p>
          </div>

          {/* Key Ingredients */}
          <div className="mt-8">
            <h3 className="font-open-sans text-main-button text-lg font-semibold italic">
              Key Ingredients
            </h3>
            <p className="text-main-button/80 mt-2 text-sm">
              Niacinamide, Tranexamic Acid, Alpha Arbutin, Prickly Pear Extract, Licorice Root
              Extract, Beta-Glucan, Hyaluronic Acid
            </p>
          </div>

          {/* Key Benefits */}
          <div className="mt-8">
            <h3 className="font-open-sans text-main-button text-lg font-semibold italic">
              Key Benefits
            </h3>
            <p className="text-main-button/80 mt-2 text-sm">
              Brightening, barrier strengthening, hydration, texture improvement
            </p>
          </div>

          {/* How to Use */}
          <div className="mt-8">
            <h3 className="font-open-sans text-main-button text-lg font-semibold italic">
              How to Use
            </h3>
            <p className="text-main-button/80 mt-2 text-sm">
              Apply 1-2 pumps to clean, dry skin every morning. Gently massage until fully absorbed.
              Follow with moisturizer and sunscreen for best results.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductDetails
