import { Nav } from '@/components/shared'
import { NavLinkList } from '@/components/shared/navlink-list'

import icon1 from '@/assets/icons/cloud-projects.svg'
import icon2 from '@/assets/icons/heart.svg'
import icon4 from '@/assets/icons/packages.svg'
import icon3 from '@/assets/icons/solar_bag-broken.svg'
import icon5 from '@/assets/icons/solar_settings-linear.svg'

const tabsLists = [
  { id: 1, icon: icon1, label: 'Overview', href: '/profile' },
  { id: 2, icon: icon2, label: 'Save Routine', href: '/profile/save-routine' },
  { id: 3, icon: icon3, label: 'My Cart', href: '/profile/my-cart' },
  { id: 4, icon: icon4, label: 'Order History', href: '/profile/order-history' },
  { id: 5, icon: icon5, label: 'Settings', href: '/profile/settings' },
]

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <NavLinkList items={tabsLists} />
      {children}
    </>
  )
}

export default DashboardLayout
