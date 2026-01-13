import { Card, CardContent } from '@/components/ui/card'
import { CalendarDays, Package, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

const userStats = [
  {
    id: 1,
    icon: Search,
    value: '2',
    label: 'Analysis',
  },
  {
    id: 2,
    icon: ShoppingBag,
    value: '1',
    label: 'Cart Product',
  },
  {
    id: 3,
    icon: Package,
    value: '1',
    label: 'Order Product',
  },
  {
    id: 4,
    icon: CalendarDays,
    value: '19',
    label: 'Days Active',
  },
]

export const UserProfileAndStates = () => {
  return (
    <div className="space-y-6">
      {/* User Profile Card */}
      <Card className="border-none bg-[#d9d9d0] shadow-none">
        <CardContent className="flex items-center gap-6">
          <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
              alt="Hafsa Binte Kalam"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-open-sans text-main-button text-2xl font-normal">
              Hafsa Binte Kalam
            </h2>
            <p className="text-main-button/70 text-sm">hello.hafsabinte@gmail.com</p>
            <span className="bg-main-button mt-2 inline-block rounded-full px-4 py-1 text-xs text-white">
              Acne & Breakouts
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {userStats.map((stat) => (
          <Card key={stat.id} className="border-none bg-[#d9d9d0] shadow-none">
            <CardContent className="pt-4">
              <stat.icon className="text-main-button size-6" />
              <p className="font-caudex text-main-button mt-4 text-4xl font-normal">{stat.value}</p>
              <p className="text-main-button/70 mt-1 text-sm">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
