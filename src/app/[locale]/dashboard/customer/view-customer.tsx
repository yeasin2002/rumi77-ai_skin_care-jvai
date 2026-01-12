import { Button } from '@/components/ui'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ArrowLeft, X } from 'lucide-react'
import Image from 'next/image'

const customerOrders = [
  { id: 1, orderId: '#125128', date: 'May 10, 2:00 PM', status: 'Paid', price: 23.06 },
  { id: 2, orderId: '#125128', date: 'May 10, 2:00 PM', status: 'Paid', price: 23.06 },
  { id: 3, orderId: '#125128', date: 'May 10, 2:00 PM', status: 'Paid', price: 23.06 },
  { id: 4, orderId: '#125128', date: 'May 10, 2:00 PM', status: 'Paid', price: 23.06 },
  { id: 5, orderId: '#125128', date: 'May 10, 2:00 PM', status: 'Paid', price: 23.06 },
]

export const ViewCustomer = () => {
  return (
    <div className="space-y-6">
      {/* Header with back and close buttons */}
      <div className="flex items-center justify-between">
        <button type="button" className="flex items-center gap-2 text-white hover:text-white/80">
          <div className="rounded-full bg-white p-2">
            <ArrowLeft className="text-main-button size-5" />
          </div>
        </button>
        <button type="button" className="text-white hover:text-white/80">
          <div className="rounded-md border border-white/30 p-2">
            <X className="size-5" />
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Customer Profile Card */}
          <div className="rounded-xl bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="relative size-20 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Darlene Robertson"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-main-button text-xl font-semibold">Darlene Robertson</h2>
                <p className="text-main-button/70 text-sm">New Mexico</p>
                <p className="text-main-button/70 text-sm">5 Orders</p>
                <p className="text-main-button/70 text-sm">Customer for 2 years</p>
              </div>
            </div>
          </div>

          {/* Customer Orders Table */}
          <div className="rounded-xl bg-white p-6">
            <h3 className="text-main-button mb-4 text-lg font-semibold">Customer Orders</h3>
            <Table>
              <TableHeader>
                <TableRow className="border-b-0">
                  <TableHead className="text-main-button/70 text-xs font-medium">Order</TableHead>
                  <TableHead className="text-main-button/70 text-xs font-medium">Date</TableHead>
                  <TableHead className="text-main-button/70 text-xs font-medium">
                    Order Status
                  </TableHead>
                  <TableHead className="text-main-button/70 text-xs font-medium">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customerOrders.map((order) => (
                  <TableRow key={order.id} className="border-b-0">
                    <TableCell className="text-main-button text-sm">{order.orderId}</TableCell>
                    <TableCell className="text-main-button text-sm">{order.date}</TableCell>
                    <TableCell>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-600">
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-main-button text-sm">
                      ${order.price.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Right Column - Overview Card */}
        <div className="rounded-xl bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-main-button text-lg font-semibold">Overview</h3>
            <button type="button" className="text-sm text-blue-500 hover:underline">
              Edit
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-main-button/50 text-xs">Address</p>
              <p className="text-main-button text-sm">
                6391 Elgin St. Celina, Delaware
                <br />
                10299
              </p>
            </div>

            <div>
              <p className="text-main-button/50 text-xs">Email Address</p>
              <p className="text-main-button text-sm">randhirppl@gmail.com</p>
            </div>

            <div>
              <p className="text-main-button/50 text-xs">Phone</p>
              <p className="text-main-button text-sm">(480) 555-0103</p>
            </div>
          </div>

          <div className="mt-8">
            <Button
              variant="outline"
              className="w-full border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              Delete Customer
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
