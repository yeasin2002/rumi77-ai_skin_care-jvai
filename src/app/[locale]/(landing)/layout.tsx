import { Nav } from '@/components/shared'
import React from 'react'
import { Footer } from '../../../components/shared/footer'

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
