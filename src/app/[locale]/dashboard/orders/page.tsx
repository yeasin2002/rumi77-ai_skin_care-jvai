'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
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
import { Filter, Pencil, Search, Trash2 } from 'lucide-react'

type Order = {
  id: number
  orderId: string
  dateTime: string
  customer: string
  paymentStatus: 'paid' | 'pending'
  total: number
  orderStatus: 'order-placed' | 'delivered' | 'shipped'
}

const orders: Order[] = [
  {
    id: 1,
    orderId: '#1234',
    dateTime: '25 Mar, 5:17 PM',
    customer: 'Marvin McKinney',
    paymentStatus: 'paid',
    total: 50.75,
    orderStatus: 'order-placed',
  },
  {
    id: 2,
    orderId: '#1234',
    dateTime: '25 Mar, 5:17 PM',
    customer: 'Marvin McKinney',
    paymentStatus: 'paid',
    total: 50.75,
    orderStatus: 'order-placed',
  },
  {
    id: 3,
    orderId: '#1234',
    dateTime: '25 Mar, 5:17 PM',
    customer: 'Marvin McKinney',
    paymentStatus: 'paid',
    total: 50.75,
    orderStatus: 'delivered',
  },
  {
    id: 4,
    orderId: '#1234',
    dateTime: '25 Mar, 5:17 PM',
    customer: 'Marvin McKinney',
    paymentStatus: 'paid',
    total: 50.75,
    orderStatus: 'shipped',
  },
  {
    id: 5,
    orderId: '#1234',
    dateTime: '25 Mar, 5:17 PM',
    customer: 'Marvin McKinney',
    paymentStatus: 'paid',
    total: 50.75,
    orderStatus: 'order-placed',
  },
  {
    id: 6,
    orderId: '#1234',
    dateTime: '25 Mar, 5:17 PM',
    customer: 'Marvin McKinney',
    paymentStatus: 'paid',
    total: 50.75,
    orderStatus: 'shipped',
  },
  {
    id: 7,
    orderId: '#1234',
    dateTime: '25 Mar, 5:17 PM',
    customer: 'Marvin McKinney',
    paymentStatus: 'paid',
    total: 50.75,
    orderStatus: 'delivered',
  },
  {
    id: 8,
    orderId: '#1234',
    dateTime: '25 Mar, 5:17 PM',
    customer: 'Marvin McKinney',
    paymentStatus: 'paid',
    total: 50.75,
    orderStatus: 'shipped',
  },
  {
    id: 9,
    orderId: '#1234',
    dateTime: '25 Mar, 5:17 PM',
    customer: 'Marvin McKinney',
    paymentStatus: 'paid',
    total: 50.75,
    orderStatus: 'delivered',
  },
  {
    id: 10,
    orderId: '#1234',
    dateTime: '25 Mar, 5:17 PM',
    customer: 'Marvin McKinney',
    paymentStatus: 'paid',
    total: 50.75,
    orderStatus: 'order-placed',
  },
]

const getOrderStatusStyles = (status: Order['orderStatus']) => {
  switch (status) {
    case 'order-placed':
      return 'bg-gray-500 text-white'
    case 'delivered':
      return 'bg-blue-500 text-white'
    case 'shipped':
      return 'bg-orange-500 text-white'
    default:
      return 'bg-gray-500 text-white'
  }
}

const getOrderStatusLabel = (status: Order['orderStatus']) => {
  switch (status) {
    case 'order-placed':
      return 'Order Placed'
    case 'delivered':
      return 'Delivered'
    case 'shipped':
      return 'Shipped'
    default:
      return status
  }
}

const Orders = () => {
  return (
    <div className="space-y-6">
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
            <SelectItem value="order-placed">Order Placed</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-sm bg-white">
        <Table>
          <TableHeader className="bg-[#f5f4f3]">
            <TableRow className="border-b-0">
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead className="text-main-button font-medium">Order</TableHead>
              <TableHead className="text-main-button font-medium">Date & Time</TableHead>
              <TableHead className="text-main-button font-medium">Customer</TableHead>
              <TableHead className="text-main-button font-medium">Payment Status</TableHead>
              <TableHead className="text-main-button font-medium">Total</TableHead>
              <TableHead className="text-main-button font-medium">Order Status</TableHead>
              <TableHead className="text-main-button text-right font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="border-b border-gray-100">
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="text-main-button font-medium">{order.orderId}</TableCell>
                <TableCell className="text-main-button">{order.dateTime}</TableCell>
                <TableCell className="text-main-button">{order.customer}</TableCell>
                <TableCell>
                  <span className="border border-green-200 bg-green-50 px-3 py-1 text-xs text-green-600">
                    Paid
                  </span>
                </TableCell>
                <TableCell className="text-main-button">${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      'rounded px-3 py-1 text-xs font-medium',
                      getOrderStatusStyles(order.orderStatus)
                    )}
                  >
                    {getOrderStatusLabel(order.orderStatus)}
                  </span>
                </TableCell>
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

      {/* Pagination */}
      <div className="flex w-full items-center justify-between">
        <Pagination className="mx-0 w-auto justify-start">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="border-white/30 text-white" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="bg-main-button text-white">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                6
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="text-white/60" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border-white/30 text-white">
                24
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="border-white/30 text-white" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <span className="text-sm text-white/60">550 items</span>
      </div>
    </div>
  )
}

export default Orders
