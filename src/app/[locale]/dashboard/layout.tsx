import Image from 'next/image'

import sideImage from '@/assets/image/dashboard-auth-image.png'
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex min-h-screen w-full justify-between">
        {children}
        <div className="relative hidden lg:block">
          <Image src={sideImage} alt="Skincare model" className="object-cover" priority />
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
