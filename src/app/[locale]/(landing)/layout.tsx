import { Nav } from '@/components/shared'
import { FooterSingle } from '@/components/shared/footer-single'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      {children}
      <FooterSingle />
    </>
  )
}

export default AuthLayout
