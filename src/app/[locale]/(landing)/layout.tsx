import { Nav } from '@/components/shared'
import { Footer } from '@/components/shared/footer'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default AuthLayout
