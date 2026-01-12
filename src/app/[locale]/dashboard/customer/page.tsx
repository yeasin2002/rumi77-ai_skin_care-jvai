'use client'

import { Button, buttonVariants } from '@/components/ui'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
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
import { Eye, Filter, Search, Trash2 } from 'lucide-react'
import { AddCustomer } from './add-customer'
import { customers } from './customers.data'

const Customer = () => {
  return (
    <div className="space-y-6">
      {/* Header with buttons */}
      <div className="flex items-center justify-end gap-3">
        <Button variant="outline" className="border-white/30 bg-transparent text-white">
          EXPORT
        </Button>
        <Dialog>
          <DialogTrigger className={buttonVariants({ variant: 'outline' })}>
            ADD CUSTOMER
          </DialogTrigger>
          <DialogContent className={`bg-main-button! min-w-xl border-2 border-black/30`}>
            <AddCustomer />
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
            <SelectItem value="high-orders">High Orders</SelectItem>
            <SelectItem value="low-orders">Low Orders</SelectItem>
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
              <TableHead className="text-main-button font-medium">Customer Name</TableHead>
              <TableHead className="text-main-button font-medium">ID</TableHead>
              <TableHead className="text-main-button font-medium">Location</TableHead>
              <TableHead className="text-main-button font-medium">Orders</TableHead>
              <TableHead className="text-main-button font-medium">Total Spent</TableHead>
              <TableHead className="text-main-button font-medium">Phone Number</TableHead>
              <TableHead className="text-main-button text-right font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id} className="border-b border-gray-100">
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="text-main-button font-medium">{customer.name}</TableCell>
                <TableCell className="text-main-button">{customer.customerId}</TableCell>
                <TableCell className="text-main-button max-w-[250px]">
                  {customer.location}
                </TableCell>
                <TableCell className="text-main-button">{customer.orders}</TableCell>
                <TableCell className="text-main-button">
                  ${customer.totalSpent.toFixed(2)}
                </TableCell>
                <TableCell className="text-main-button">{customer.phoneNumber}</TableCell>
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

export default Customer
