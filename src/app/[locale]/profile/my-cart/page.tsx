import { CheckoutItems } from '@/components/shared/checkout-items'
import { Button } from '@/components/ui/button'

const MyCart = () => {
  return (
    <div className="space-y-6">
      <CheckoutItems />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-main-button font-medium">$98.99 USD</span>
        </div>
        <Button className="w-full" size="lg">
          Continue to Checkout
        </Button>
      </div>
    </div>
  )
}

export default MyCart
