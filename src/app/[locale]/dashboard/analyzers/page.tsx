'use client'

import { buttonVariants } from '@/components/ui'
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
import { Eye, Filter, Search, Trash2 } from 'lucide-react'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { analyzerUsers } from './analyze.data'
import { ViewAnalyzer } from './view-analyzer'

const Analyzer = () => {
  return (
    <div className="space-y-6">
      {/* Header with button */}
      <div className="flex items-center justify-end">
        <Dialog>
          <DialogTrigger className={buttonVariants({ variant: 'outline' })}>EXPORT</DialogTrigger>
          <DialogContent>
            <ViewAnalyzer />
          </DialogContent>
        </Dialog>

        {/* <Button variant="outline" className="text-main-button border-white/30 bg-white">
          EXPORT
        </Button> */}
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
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
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
              <TableHead className="text-main-button font-medium">Email</TableHead>
              <TableHead className="text-main-button font-medium">Join Date</TableHead>
              <TableHead className="text-main-button font-medium">Status</TableHead>
              <TableHead className="text-main-button text-right font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {analyzerUsers.map((user) => (
              <TableRow key={user.id} className="border-b border-gray-100">
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="text-main-button font-medium">{user.name}</TableCell>
                <TableCell className="text-main-button">{user.email}</TableCell>
                <TableCell className="text-main-button">{user.joinDate}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      'rounded-full px-4 py-1 text-xs font-medium',
                      user.status === 'active'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-500'
                    )}
                  >
                    {user.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </TableCell>
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

export default Analyzer
