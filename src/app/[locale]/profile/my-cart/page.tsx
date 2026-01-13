import { CheckoutItems } from '@/components/shared/checkout-items'
import { Button } from '@/components/ui/button'

const MyCart = () => {
  return (
    <div className="space-y-6">
      <CheckoutItems />

      <div className="space-y-4">
        <div className="flex items-center justify-between text-xl text-[#6D5534]">
          <span>Subtotal</span>
          <span className="font-medium">$98.99 USD</span>
        </div>
        <Button className="font-open-sans! w-full py-7 text-xl">Continue to Checkout</Button>
      </div>
    </div>
  )
}

export default MyCart
