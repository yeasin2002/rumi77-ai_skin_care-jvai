import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <NavList
        wrapperClassName="absolute top-0 w-full justify-between"
        className="text-main-button"
      /> */}
      <div className="bg-background flex min-h-screen items-center justify-center p-4">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
