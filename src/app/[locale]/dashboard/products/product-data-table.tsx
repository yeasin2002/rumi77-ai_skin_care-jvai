'use client'

import { Checkbox } from '@/components/ui/checkbox'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { Eye, Trash2 } from 'lucide-react'
import Image from 'next/image'

type Product = {
  id: number
  name: string
  image: string
  productId: string
  price: number
  stock: number
  stockStatus: 'in-stock' | 'out-of-stock'
  category: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Celestial Glow Brightening Serum',
    image: '/placeholder.jpg',
    productId: '#256542',
    price: 50.75,
    stock: 56,
    stockStatus: 'in-stock',
    category: 'Serum',
  },
  {
    id: 2,
    name: 'Lunar Restore Sleeping Mask',
    image: '/placeholder.jpg',
    productId: '#256542',
    price: 50.75,
    stock: 56,
    stockStatus: 'in-stock',
    category: 'Sleeping Mask',
  },
  {
    id: 3,
    name: 'Radiant Satin Lip Oil',
    image: '/placeholder.jpg',
    productId: '#256542',
    price: 50.75,
    stock: 56,
    stockStatus: 'in-stock',
    category: 'Lip care',
  },
  {
    id: 4,
    name: 'Celestial Glow Brightening Serum',
    image: '/placeholder.jpg',
    productId: '#256542',
    price: 50.75,
    stock: 0,
    stockStatus: 'out-of-stock',
    category: 'Serum',
  },
  {
    id: 5,
    name: 'Lunar Restore Sleeping Mask',
    image: '/placeholder.jpg',
    productId: '#256542',
    price: 50.75,
    stock: 56,
    stockStatus: 'in-stock',
    category: 'Sleeping Mask',
  },
]

export const ProductDataTable = () => {
  return (
    <div className="overflow-hidden rounded-xl bg-white">
      <Table>
        <TableHeader className="bg-[#f5f4f3]">
          <TableRow className="border-b-0">
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead className="text-main-button font-medium">Products</TableHead>
            <TableHead className="text-main-button font-medium">Product ID</TableHead>
            <TableHead className="text-main-button font-medium">Price</TableHead>
            <TableHead className="text-main-button font-medium">Stock</TableHead>
            <TableHead className="text-main-button font-medium">Category</TableHead>
            <TableHead className="text-main-button text-right font-medium">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} className="border-b border-gray-100">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="relative size-10 overflow-hidden rounded bg-gray-100">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <span className="text-main-button max-w-[180px] font-medium">{product.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-main-button">{product.productId}</TableCell>
              <TableCell className="text-main-button">${product.price.toFixed(2)}</TableCell>
              <TableCell>
                <span
                  className={cn(
                    'rounded-full border px-3 py-1 text-xs',
                    product.stockStatus === 'in-stock'
                      ? 'border-green-200 bg-green-50 text-green-600'
                      : 'border-red-200 bg-red-50 text-red-600'
                  )}
                >
                  {product.stockStatus === 'in-stock'
                    ? `${product.stock} in Stock`
                    : 'Out of Stock'}
                </span>
              </TableCell>
              <TableCell className="text-main-button">{product.category}</TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <button type="button" className="text-main-button/60 hover:text-main-button p-1">
                    <Eye className="size-4" />
                  </button>
                  <button type="button" className="p-1 text-red-500 hover:text-red-600">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
