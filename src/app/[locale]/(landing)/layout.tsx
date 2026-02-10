import React from 'react'
import { NewFooter } from '../../../components/shared/new-footer'
import { NewNav } from '../../../components/shared/new-nav'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NewNav />
      {children}
      <NewFooter />
    </>
  )
}

export default AuthLayout
