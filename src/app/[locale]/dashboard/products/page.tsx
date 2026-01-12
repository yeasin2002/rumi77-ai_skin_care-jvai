'use client'

import { Button } from '@/components/ui'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { Eye, Filter, Search, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { AddProduct } from './add-product'

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

const Products = () => {
  return (
    <div className="space-y-6">
      {/* Header with buttons */}
      <div className="flex items-center justify-end gap-3">
        <Button variant="outline" className="border-white/30 bg-transparent text-white">
          EXPORT
        </Button>

        <Dialog>
          <DialogTrigger>
            <Button variant="outline" className="text-main-button border-white/30 bg-white">
              ADD PRODUCT
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-main-button max-h-[90vh] max-w-4xl! overflow-y-auto">
            <AddProduct />
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="w-72">
          <InputGroup className="border-white/30 bg-white/10">
            <InputGroupAddon>
              <Search className="size-4 text-white/60" />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Search here"
              className="bg-transparent text-white placeholder:text-white/60"
            />
          </InputGroup>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-40 border-white/30 bg-white/10 text-white">
            <Filter className="mr-2 size-4" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="in-stock">In Stock</SelectItem>
            <SelectItem value="out-of-stock">Out of Stock</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
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
                    <span className="text-main-button max-w-[180px] font-medium">
                      {product.name}
                    </span>
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
                    <button
                      type="button"
                      className="text-main-button/60 hover:text-main-button p-1"
                    >
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

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" className="size-8 border-white/30 text-white">
            ←
          </Button>
          <Button variant="outline" size="icon" className="size-8 border-white/30 text-white">
            1
          </Button>
          <Button size="icon" className="bg-main-button size-8 text-white">
            2
          </Button>
          <Button variant="outline" size="icon" className="size-8 border-white/30 text-white">
            3
          </Button>
          <Button variant="outline" size="icon" className="size-8 border-white/30 text-white">
            4
          </Button>
          <Button variant="outline" size="icon" className="size-8 border-white/30 text-white">
            5
          </Button>
          <Button variant="outline" size="icon" className="size-8 border-white/30 text-white">
            6
          </Button>
          <span className="px-2 text-white/60">...</span>
          <Button variant="outline" size="icon" className="size-8 border-white/30 text-white">
            24
          </Button>
          <Button variant="outline" size="icon" className="size-8 border-white/30 text-white">
            →
          </Button>
        </div>
        <span className="text-sm text-white/60">550 items</span>
      </div>
    </div>
  )
}

export default Products
