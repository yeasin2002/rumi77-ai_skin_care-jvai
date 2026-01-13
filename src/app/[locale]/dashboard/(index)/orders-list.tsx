import Image from 'next/image'

import productImg from '@/assets/image/serum-drop-product.jpg'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const orders = [
  {
    id: '#PD895',
    product: 'Serum',
    sku: '#12121',
    qty: 5,
    date: '02.01.2025',
    status: 'Available',
    amount: '$124.97',
  },
  {
    id: '#PD895',
    product: 'Serum',
    sku: '#12121',
    qty: 5,
    date: '02.01.2025',
    status: 'Available',
    amount: '$124.97',
  },
  {
    id: '#PD895',
    product: 'Serum',
    sku: '#12121',
    qty: 5,
    date: '02.01.2025',
    status: 'Available',
    amount: '$124.97',
  },
  {
    id: '#PD895',
    product: 'Serum',
    sku: '#12121',
    qty: 5,
    date: '02.01.2025',
    status: 'Available',
    amount: '$124.97',
  },
  {
    id: '#PD895',
    product: 'Serum',
    sku: '#12121',
    qty: 5,
    date: '02.01.2025',
    status: 'Available',
    amount: '$124.97',
  },
  {
    id: '#PD895',
    product: 'Serum',
    sku: '#12121',
    qty: 5,
    date: '02.01.2025',
    status: 'Available',
    amount: '$124.97',
  },
]

export const OrdersList = () => {
  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Orders</CardTitle>
        <p className="text-muted-foreground text-sm">Last 1 Month Report</p>
      </CardHeader>
      <CardContent>
        <table className="w-full">
          <thead>
            <tr className="text-muted-foreground border-b border-gray-200 text-left text-sm">
              <th className="pb-4 font-normal">Id</th>
              <th className="pb-4 font-normal">Product</th>
              <th className="pb-4 font-normal">Qty</th>
              <th className="pb-4 font-normal">Delivery Date</th>
              <th className="pb-4 font-normal">Satatus</th>
              <th className="pb-4 font-normal">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={`${order.id}-${index}`} className="border-t border-gray-100">
                <td className="py-4 font-medium">{order.id}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={productImg}
                      alt={order.product}
                      width={32}
                      height={32}
                      className="rounded object-contain"
                    />
                    <div>
                      <p className="font-medium">{order.product}</p>
                      <p className="text-muted-foreground text-xs">{order.sku}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">{order.qty}</td>
                <td className="py-4">{order.date}</td>
                <td className="py-4">
                  <span className="rounded bg-emerald-100 px-3 py-1 text-sm text-emerald-600">
                    {order.status}
                  </span>
                </td>
                <td className="py-4">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
