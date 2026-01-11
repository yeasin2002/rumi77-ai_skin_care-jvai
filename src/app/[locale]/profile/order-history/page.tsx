import Image from 'next/image'

import productImg from '@/assets/image/serum-drop-product.jpg'

const OrderHistory = () => {
  return (
    <div className="bg-main-button rounded-xl p-6">
      <div className="flex gap-8">
        {/* Timeline */}
        <div className="flex flex-col">
          <div className="flex items-start gap-3">
            <div className="relative flex flex-col items-center">
              <div className="size-3 rounded-full bg-white" />
              <div className="h-16 w-px bg-white/30" />
            </div>
            <div>
              <p className="font-caudex text-white italic">Order Placed</p>
              <p className="text-sm text-white">25.12.2025</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="relative flex flex-col items-center">
              <div className="size-3 rounded-full bg-white/70" />
              <div className="h-16 w-px bg-white/30" />
            </div>
            <div>
              <p className="font-caudex text-white italic">Shipped</p>
              <p className="text-sm text-white/70">28.12.2025</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="relative flex flex-col items-center">
              <div className="size-3 rounded-full bg-white/70" />
            </div>
            <div>
              <p className="font-caudex text-white italic">Delivered</p>
              <p className="text-sm text-white/70">29.12.2025</p>
            </div>
          </div>
        </div>

        {/* Product Card */}
        <div className="flex-1 rounded-lg border border-dashed border-white/30 p-4">
          <div className="flex gap-4">
            <div className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-[#e8e6e3]">
              <Image
                src={productImg}
                alt="Deep nourishing day serum"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-white">#12134</p>
              <h3 className="font-caudex text-lg text-white">Deep nourishing day serum</h3>
              <p className="text-sm text-white">$ 98.00 ( USD )</p>
              <p className="text-sm text-white">
                Order Location: 1901 Thornridge Cir.
                <br />
                Shiloh, Hawaii 81063
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory
