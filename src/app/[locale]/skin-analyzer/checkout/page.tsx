import { Button } from '@/components/ui'
import { X } from 'lucide-react'
import { CheckoutItems } from '../../../../components/shared/checkout-items'

const Checkout = () => {
  return (
    <div className="bg-background min-h-screen px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-caudex text-main-button text-3xl font-normal">Your Cart</h1>
          <button type="button" className="text-main-button hover:text-main-button/70">
            <X className="size-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div>
          <CheckoutItems />
        </div>

        {/* Subtotal */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-main-button font-open-sans text-base">Subtotal</span>
          <span className="text-main-button font-open-sans text-lg font-semibold">$98.00 USD</span>
        </div>

        {/* Checkout Button */}
        <Button className="mt-6 w-full rounded-lg bg-black py-6 text-base text-white hover:bg-black/90">
          Continue to Checkout
        </Button>
      </div>
    </div>
  )
}

export default Checkout
