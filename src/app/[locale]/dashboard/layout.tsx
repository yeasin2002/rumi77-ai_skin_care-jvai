import { Nav } from '@/components/shared'
import { NavLinkList } from '@/components/shared/navlink-list'

import icon1 from '@/assets/icons/blocks.svg'
import icon7 from '@/assets/icons/carbon_analytics.svg'
import icon3 from '@/assets/icons/notes.svg'
import icon6 from '@/assets/icons/ri_search-ai-line.svg'
import icon8 from '@/assets/icons/settings-light.svg'
import icon4 from '@/assets/icons/shop-bags.svg'
import icon2 from '@/assets/icons/tags.svg'
import icon5 from '@/assets/icons/users.svg'

const tabsLists = [
  { id: 1, icon: icon1, label: 'Dashboard', href: '/dashboard' },
  { id: 2, icon: icon2, label: 'Category', href: '/dashboard/category' },
  { id: 3, icon: icon3, label: 'Products', href: '/dashboard/products' },
  { id: 4, icon: icon4, label: 'Orders', href: '/dashboard/orders' },
  { id: 5, icon: icon5, label: 'Customer', href: '/dashboard/customer' },
  { id: 6, icon: icon6, label: 'Analyzers', href: '/dashboard/analyzers' },
  { id: 7, icon: icon7, label: 'Ai Analytics', href: '/dashboard/ai-analytics' },
  { id: 8, icon: icon8, label: 'Settings', href: '/dashboard/settings' },
]

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-main-button min-h-screen">
        <Nav />
        <div className="px-6 py-6 lg:px-20">
          <NavLinkList items={tabsLists} linkClassName="text-[#E6DFC2BF]" />
          {children}
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
