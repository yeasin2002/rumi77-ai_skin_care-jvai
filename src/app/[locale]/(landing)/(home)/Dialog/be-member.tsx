'use client'

import { AlertDialogContent } from '@/components/ui/alert-dialog'
import { X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'

type BeMemberProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}

export const BeMemberModal = ({ setOpen }: BeMemberProps) => {
  const t = useTranslations('home.beMemberDialog')

  return (
    <AlertDialogContent className="max-w-[850px] gap-0 overflow-hidden border-none p-0">
      <div className="relative flex min-h-[484px] flex-col items-stretch bg-white md:flex-row">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 flex size-6 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          aria-label="Close dialog"
        >
          <X className="size-5 text-gray-700" />
        </button>

        {/* Left Side - Video */}
        <div className="relative h-[250px] w-full overflow-hidden rounded-full md:h-auto md:w-[377px] md:rounded-none">
          <video
            src="/dialog/be-member-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-1 flex-col items-center justify-center gap-12 px-6 py-8 md:px-12 md:py-16">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-4xl font-normal text-black">{t('title')}</h2>
            <p className="max-w-[348px] text-base text-[#3e4259]">{t('subtitle')}</p>
          </div>

          {/* Benefits Section */}
          <div className="flex w-full flex-col gap-16">
            <div className="flex flex-col gap-4">
              {/* First Offer with Icon */}
              <div className="flex items-start gap-2">
                <div className="relative size-8 shrink-0">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="16" cy="16" r="16" fill="#1a2e1a" />
                    <path
                      d="M16 8L18.5 13L24 14L20 18L21 24L16 21L11 24L12 18L8 14L13.5 13L16 8Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-base text-[#3e4259]">{t('firstOffer')}</p>
              </div>

              {/* Additional Benefits */}
              <p className="text-base text-[#3e4259]">{t('benefits')}</p>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => {
                // Handle join action
                setOpen(false)
              }}
              className="text-main-primary-base_default mx-auto flex h-12 w-fit items-center justify-center rounded bg-black px-12 py-5 text-xl transition-colors hover:bg-gray-900"
            >
              {t('cta')}
            </button>
          </div>
        </div>
      </div>
    </AlertDialogContent>
  )
}
