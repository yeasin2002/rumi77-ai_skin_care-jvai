'use client'

import { Button } from '@/components/ui'
import { Checkbox } from '@/components/ui/checkbox'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pencil, Search, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { AddCategory } from './add-category'

const categories = [
  {
    id: 1,
    name: 'Serum',
    image: '/placeholder.jpg',
    quantity: 542,
    sale: 20,
    startDate: '23 Feb 2025',
  },
  {
    id: 2,
    name: 'Sleeping Mask',
    image: '/placeholder.jpg',
    quantity: 42,
    sale: 15,
    startDate: '23 Feb 2025',
  },
  {
    id: 3,
    name: 'Lip Care',
    image: '/placeholder.jpg',
    quantity: 65,
    sale: 28,
    startDate: '23 Feb 2025',
  },
]

const CategoryPage = () => {
  return (
    <div className="space-y-6">
      {/* Header with buttons */}
      <div className="flex items-center justify-end gap-3">
        <Button variant="outline" className="0 border-white/30 bg-transparent text-white">
          EXPORT
        </Button>
        <AddCategory />
      </div>

      {/* Search bar */}
      <div className="max-w-xs">
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

      {/* Table */}
      <div className="overflow-hidden rounded-xl bg-white">
        <Table>
          <TableHeader className="bg-[#f5f4f3]">
            <TableRow className="border-b-0">
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead className="text-main-button font-medium">Category</TableHead>
              <TableHead className="text-main-button font-medium">Quantity</TableHead>
              <TableHead className="text-main-button font-medium">Sale</TableHead>
              <TableHead className="text-main-button font-medium">Start Date</TableHead>
              <TableHead className="text-main-button text-right font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id} className="border-b border-gray-100">
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative size-10 overflow-hidden rounded bg-gray-100">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-main-button font-medium">{category.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-main-button">{category.quantity}</TableCell>
                <TableCell className="text-main-button">{category.sale}</TableCell>
                <TableCell className="text-main-button">{category.startDate}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className="text-main-button/60 hover:text-main-button p-1"
                    >
                      <Pencil className="size-4" />
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
    </div>
  )
}

export default CategoryPage
