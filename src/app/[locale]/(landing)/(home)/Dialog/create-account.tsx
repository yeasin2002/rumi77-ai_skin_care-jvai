'use client'

import { AlertDialogContent } from '@/components/ui/alert-dialog'
import { ChevronDown, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { Dispatch, SetStateAction } from 'react'

type CreateAccountModalProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}

export const CreateAccountModal = ({ setOpen }: CreateAccountModalProps) => {
  const t = useTranslations('home.createAccountDialog')

  return (
    <AlertDialogContent className="max-w-[850px] gap-0 overflow-hidden border-none p-0">
      <div className="relative flex min-h-[508px] flex-col items-stretch bg-cover bg-center md:flex-row">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.figma.com/api/mcp/asset/d5f5c74a-e1c0-4fb1-b7d2-5f9420fb98f8')",
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex w-full flex-col md:ml-auto md:w-[450px]">
          {/* Semi-transparent background */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 z-20 flex size-6 items-center justify-center rounded-full transition-colors hover:bg-white/30"
            aria-label="Close dialog"
          >
            <X className="size-5 text-black" />
          </button>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-6 p-6">
            {/* Header */}
            <div className="flex flex-col gap-8 text-center text-black">
              <div className="text-xl">
                <p className="mb-0">{t('title')}</p>
                <p>{t('subtitle')}</p>
              </div>
              <p className="text-lg">{t('offer')}</p>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-2">
              {/* Full Name */}
              <div className="flex items-center justify-between">
                <label htmlFor="fullName" className="w-24 text-base text-black">
                  {t('fields.fullName')}
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder={t('fields.fullNamePlaceholder')}
                  className="h-[38px] w-64 rounded-full bg-white px-5 py-2 text-sm text-black placeholder:text-black focus:ring-2 focus:ring-black/20 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="w-24 text-base text-black">
                  {t('fields.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t('fields.emailPlaceholder')}
                  className="h-[38px] w-64 rounded-full bg-white px-5 py-2 text-sm text-black placeholder:text-black focus:ring-2 focus:ring-black/20 focus:outline-none"
                />
              </div>

              {/* Contact Number */}
              <div className="flex items-center justify-between">
                <label htmlFor="contactNumber" className="w-32 text-base text-black">
                  {t('fields.contactNumber')}
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  placeholder={t('fields.contactNumberPlaceholder')}
                  className="h-[38px] w-64 rounded-full bg-white px-5 py-2 text-sm text-black placeholder:text-black focus:ring-2 focus:ring-black/20 focus:outline-none"
                />
              </div>

              {/* Skin Type */}
              <div className="flex items-center justify-between">
                <label htmlFor="skinType" className="w-24 text-base text-black">
                  {t('fields.skinType')}
                </label>
                <div className="relative w-64">
                  <select
                    id="skinType"
                    className="h-[38px] w-full appearance-none rounded-full bg-white px-5 py-2 pr-10 text-sm text-black focus:ring-2 focus:ring-black/20 focus:outline-none"
                  >
                    <option value="">{t('fields.skinTypePlaceholder')}</option>
                    <option value="normal">Normal</option>
                    <option value="dry">Dry</option>
                    <option value="oily">Oily</option>
                    <option value="combination">Combination</option>
                    <option value="sensitive">Sensitive</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-black" />
                </div>
              </div>

              {/* Birthday */}
              <div className="flex items-center justify-between">
                <label className="w-24 text-base text-black">{t('fields.birthday')}</label>
                <div className="flex w-64 items-center justify-between gap-2">
                  <input
                    type="text"
                    placeholder={t('fields.day')}
                    maxLength={2}
                    className="h-[38px] w-[67px] rounded-full bg-white px-5 py-2 text-center text-sm text-black placeholder:text-black focus:ring-2 focus:ring-black/20 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder={t('fields.month')}
                    maxLength={2}
                    className="h-[38px] w-[78px] rounded-full bg-white px-5 py-2 text-center text-sm text-black placeholder:text-black focus:ring-2 focus:ring-black/20 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder={t('fields.year')}
                    maxLength={4}
                    className="h-[38px] w-[71px] rounded-full bg-white px-5 py-2 text-center text-sm text-black placeholder:text-black focus:ring-2 focus:ring-black/20 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => {
                // Handle form submission
                setOpen(false)
              }}
              className="mx-auto mt-4 flex h-[38px] w-64 items-center justify-center rounded-full bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-gray-900"
            >
              {t('cta')}
            </button>
          </div>
        </div>
      </div>
    </AlertDialogContent>
  )
}
