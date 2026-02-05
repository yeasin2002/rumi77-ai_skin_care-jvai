'use client'

import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { useState } from 'react'
import { BeMemberModal } from './Dialog/be-member'
import { CreateAccountModal } from './Dialog/create-account'
import { WelcomeModal } from './Dialog/welcome-modal'

export const ShowModals = () => {
  const [beMemberOpen, setBeMemberOpen] = useState(false)
  const [createAccountOpen, setCreateAccountOpen] = useState(false)
  const [welcomeOpen, setWelcomeOpen] = useState(false)

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      {/* Be Member Dialog */}
      <AlertDialog open={beMemberOpen} onOpenChange={setBeMemberOpen}>
        <AlertDialogTrigger>
          <button
            type="button"
            className="rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-900"
          >
            Join Glowmi Circle
          </button>
        </AlertDialogTrigger>
        <BeMemberModal setOpen={setBeMemberOpen} open={beMemberOpen} />
      </AlertDialog>

      {/* Create Account Dialog */}
      <AlertDialog open={createAccountOpen} onOpenChange={setCreateAccountOpen}>
        <AlertDialogTrigger>
          <button
            type="button"
            className="rounded-lg bg-[#1a2e1a] px-6 py-3 text-white transition-colors hover:bg-[#2a3e2a]"
          >
            Complete Your Profile
          </button>
        </AlertDialogTrigger>
        <CreateAccountModal setOpen={setCreateAccountOpen} open={createAccountOpen} />
      </AlertDialog>

      {/* Welcome Dialog */}
      <AlertDialog open={welcomeOpen} onOpenChange={setWelcomeOpen}>
        <AlertDialogTrigger>
          <button
            type="button"
            className="rounded-lg bg-[#3e4259] px-6 py-3 text-white transition-colors hover:bg-[#4e5269]"
          >
            Welcome Message
          </button>
        </AlertDialogTrigger>
        <WelcomeModal setOpen={setWelcomeOpen} open={welcomeOpen} />
      </AlertDialog>
    </div>
  )
}
