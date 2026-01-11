import { Heart, LayoutGrid, Package, Settings, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

const tabsLists = [
  { id: 1, icon: LayoutGrid, label: 'Overview', href: '/profile' },
  { id: 2, icon: Heart, label: 'Save Routine', href: '/profile/saved-routines' },
  { id: 3, icon: ShoppingBag, label: 'My Cart', href: '/profile/cart' },
  { id: 4, icon: Package, label: 'Order History', href: '/profile/orders' },
  { id: 5, icon: Settings, label: 'Settings', href: '/profile/settings' },
]

export const ProfileTabList = () => {
  return (
    <>
      <div aria-label="tab-list" className="mt-8 border-b border-gray-300">
        <nav className="flex gap-8">
          {tabsLists.map((tab) => (
            <Link
              key={tab.id}
              href={{ pathname: tab.href }}
              className="text-main-button hover:text-main-button/80 first:border-main-button flex items-center gap-2 border-b-2 border-transparent pb-3 text-sm transition-colors"
            >
              <tab.icon className="size-4" />
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
