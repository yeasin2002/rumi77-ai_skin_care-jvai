import { Card, CardContent } from '@/components/ui/card'
import { BarChart3, DollarSign, MessageSquare, ShoppingCart, Users } from 'lucide-react'

const statsData = [
  {
    id: 'revenue',
    icon: DollarSign,
    label: 'Total Revenue',
    value: '$10.540',
    change: '22.45%',
  },
  {
    id: 'orders',
    icon: ShoppingCart,
    label: 'Orders',
    value: '1,056',
    change: '15.34%',
  },
  {
    id: 'customers',
    icon: Users,
    label: 'Total Customer',
    value: '2,847',
    change: '15.34%',
  },
  {
    id: 'views',
    icon: BarChart3,
    label: 'Product Views',
    value: '5.420',
    change: '10.24%',
  },
  {
    id: 'conversion',
    icon: MessageSquare,
    label: 'Conversation rate',
    value: '9.653',
    change: '22.45%',
  },
]

export const AdminStates = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {statsData.map((stat) => (
        <Card key={stat.id} className="border-0 bg-white">
          <CardContent className="space-y-2">
            <div className="flex items-start justify-between">
              <div className="bg-main-button/10 rounded-lg p-2">
                <stat.icon className="text-main-button size-5" />
              </div>
              <span className="text-muted-foreground text-xs">{stat.change}</span>
            </div>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
