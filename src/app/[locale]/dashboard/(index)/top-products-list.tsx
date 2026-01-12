import Image from 'next/image'

import productImg from '@/assets/image/serum-drop-product.jpg'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const topProducts = [
  { id: 1, name: 'Serum', price: '$49.90', unitsSold: 204 },
  { id: 2, name: 'Serum', price: '$49.90', unitsSold: 204 },
  { id: 3, name: 'Serum', price: '$49.90', unitsSold: 204 },
  { id: 4, name: 'Serum', price: '$49.90', unitsSold: 204 },
]

export const TopProductsList = () => {
  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Top Products by Units Sold</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full">
          <thead>
            <tr className="text-muted-foreground text-left text-sm">
              <th className="pb-4 font-normal">Name</th>
              <th className="pb-4 font-normal">Price</th>
              <th className="pb-4 font-normal">Units Sold</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product) => (
              <tr key={product.id} className="border-t border-gray-200">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={productImg}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="rounded object-contain"
                    />
                    <span className="font-medium">{product.name}</span>
                  </div>
                </td>
                <td className="py-4">{product.price}</td>
                <td className="py-4">{product.unitsSold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
