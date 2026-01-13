import { Nav } from '@/components/shared'
import { NavLinkList } from '../../../components/shared/navlink-list'
import { UserProfileAndStates } from './user-profile-and-states'

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

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background min-h-screen">
      <Nav />

      <div className="px-6 py-6 lg:px-20">
        <UserProfileAndStates />
        <NavLinkList
          items={tabsLists}
          inactiveClassName="text-[#58351B]"
          activeClassName="text-main-button font-semibold"
          className=""
        />
        {children}
      </div>
    </div>
  )
}

export default ProfileLayout
