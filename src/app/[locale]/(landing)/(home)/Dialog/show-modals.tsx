'use client'

import { useEffect, useState } from 'react'
import { BeMemberModal } from './be-member'
import { CreateAccountModal } from './create-account'
import { WelcomeModal } from './welcome-modal'

export const ShowModals = () => {
  const [beMemberOpen, setBeMemberOpen] = useState(false)
  const [createAccountOpen, setCreateAccountOpen] = useState(false)
  const [welcomeOpen, setWelcomeOpen] = useState(false)

  // Show "Be Member" modal 3-4 seconds after landing
  useEffect(() => {
    const timer = setTimeout(() => {
      setBeMemberOpen(true)
    }, 3500) // 3.5 seconds

    return () => clearTimeout(timer)
  }, [])

  // Handle "Join the Circle" click - show create account modal
  const handleJoinClick = () => {
    setCreateAccountOpen(true)
  }

  // Handle form submission - show welcome modal
  const handleFormSubmit = () => {
    setWelcomeOpen(true)
  }

  return (
    <>
      <BeMemberModal open={beMemberOpen} setOpen={setBeMemberOpen} onJoinClick={handleJoinClick} />
      <CreateAccountModal
        open={createAccountOpen}
        setOpen={setCreateAccountOpen}
        onSubmit={handleFormSubmit}
      />
      <WelcomeModal open={welcomeOpen} setOpen={setWelcomeOpen} />
    </>
  )
}
