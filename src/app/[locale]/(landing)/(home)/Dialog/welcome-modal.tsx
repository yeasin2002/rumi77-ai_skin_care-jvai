'use client'

import logoImg from '@/assets/icons/logo/logo-mini-dark.svg'
import { AlertDialogContent } from '@/components/ui/alert-dialog'
import { X } from 'lucide-react'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

type WelcomeModalProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}

export const WelcomeModal = ({ setOpen }: WelcomeModalProps) => {
  return (
    <AlertDialogContent className="w-[92vw] max-w-245 gap-0 border-none bg-white p-0 ring-0">
      <div className="relative flex flex-col items-center bg-white px-6 pt-14 pb-12 text-center sm:px-12 sm:pt-16 sm:pb-14">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full transition-colors hover:bg-black/5 sm:top-6 sm:right-6"
          aria-label="Close dialog"
        >
          <X className="size-5 text-black" />
        </button>

        <div className="flex w-full max-w-190 flex-col items-center gap-6">
          <Image
            src={logoImg}
            alt="Glowmi logo"
            width={64}
            height={64}
            className="h-16 w-16"
            priority
          />

          <h2 className="font-caudex text-3xl font-semibold text-black sm:text-4xl">
            Welcome to the inner circle
          </h2>

          <div className="flex flex-col items-center gap-4">
            <p className="font-open-sans text-base leading-relaxed text-black/80 sm:text-lg">
              Your profile has been created and your Welcome Privilege has been automatically
              applied to your bag.
            </p>
            <p className="font-open-sans text-sm text-black/70 sm:text-base">
              We look forward to building your {`skin's`} resilience.
            </p>
          </div>

          <div className="mt-2 flex items-center gap-4">
            <span className="h-px w-28 bg-black/30 sm:w-36" />
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            <span className="h-px w-28 bg-black/30 sm:w-36" />
          </div>

          <p className="font-caudex text-base text-black sm:text-lg">
            The Essence of Timeless Glow
          </p>
          <p className="font-caudex text-sm text-black/70 sm:text-base">Thank You</p>
        </div>
      </div>
    </AlertDialogContent>
  )
}
