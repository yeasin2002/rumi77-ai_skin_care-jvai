import productImage from '@/assets/image/serum-drop-product.jpg'

import { Button } from '@/components/ui'
import { ArrowLeft, Minus, Plus, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

export const ProductView = () => {
  return (
    <div className="bg-main-button space-y-6">
      {/* Back Button */}
      <button type="button" className="flex items-center gap-2 text-white hover:text-white/80">
        <ArrowLeft className="size-5" />
      </button>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left - Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f5f4f3]">
          <Image
            src={productImage}
            alt="Deep nourishing day serum"
            fill
            className="object-contain p-8"
          />
        </div>

        {/* Right - Product Details */}
        <div className="space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-normal text-white lg:text-4xl">
              Deep nourishing day serum
            </h1>
            <p className="mt-1 text-sm text-white/70">Daily Brightening & Barrier Repair Serum</p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-medium text-white">$ 98.00 ( USD )</span>
            <span className="text-sm text-white/40 line-through">$112.00</span>
            <span className="text-sm text-white/60">30ml</span>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-md border border-white/30 bg-white/10 px-4 py-2">
              <button type="button" className="text-white hover:text-white/80">
                <Minus className="size-4" />
              </button>
              <span className="w-8 text-center text-white">1</span>
              <button type="button" className="text-white hover:text-white/80">
                <Plus className="size-4" />
              </button>
            </div>
            <Button className="text-main-button flex items-center gap-2 bg-white hover:bg-white/90">
              Add to Cart
              <ShoppingBag className="size-4" />
            </Button>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white">Description</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Deep Nourishing Day Serum is a lightweight yet powerful daily serum designed to deeply
              hydrate, restore, and protect your skin throughout the day. Formulated with
              skin-loving botanical and nourishing actives, it absorbs quickly to deliver
              long-lasting moisture without feeling greasy or heavy.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              This serum helps strengthen the skin&apos;s moisture barrier, improve texture, and
              leave your skin feeling soft, smooth, and refreshed from morning to night. Perfect for
              daily use and suitable for all skin types.
            </p>
          </div>

          {/* Skin Type */}
          <div>
            <h3 className="text-lg font-semibold text-white">Skin Type</h3>
            <p className="mt-2 text-sm text-white/80">All skin types, including sensitive</p>
          </div>

          {/* Key Ingredients */}
          <div>
            <h3 className="text-lg font-semibold text-white">Key Ingredients</h3>
            <p className="mt-2 text-sm text-white/80">
              Niacinamide, Tranexamic Acid, Alpha Arbutin, Prickly Pear Extract, Licorice Root
              Extract, Beta-Glucan, Hyaluronic Acid
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-lg font-semibold text-white">Key Benefits</h3>
            <p className="mt-2 text-sm text-white/80">
              Brightening, barrier strengthening, hydration, texture improvement
            </p>
          </div>

          {/* How to Use */}
          <div>
            <h3 className="text-lg font-semibold text-white">How to Use</h3>
            <p className="mt-2 text-sm text-white/80">
              Apply 1-2 pumps to clean, dry skin every morning. Gently massage until fully absorbed.
              Follow with moisturizer and sunscreen for best results.
            </p>
          </div>

          {/* Edit Button */}
          <div className="pt-4">
            <Button className="text-main-button w-full bg-white hover:bg-white/90 lg:w-auto lg:px-12">
              EDIT
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
