import { Nav } from '@/components/shared'
import { ProfileTabList } from './profile-tab-list'
import { UserProfileAndStates } from './user-profile-and-states'

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background min-h-screen">
      <Nav />

      <div className="px-6 py-6 lg:px-20">
        <UserProfileAndStates />
        <ProfileTabList />
        {children}
      </div>
    </div>
  )
}

export default ProfileLayout
