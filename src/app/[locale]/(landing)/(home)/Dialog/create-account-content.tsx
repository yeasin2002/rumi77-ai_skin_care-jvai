'use client'

import { useCreateTempInfo } from '@/api/api-hooks/member.api-hook'
import createProfileBg from '@/assets/image/modals/complete-profile-image.png'
import { lato } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDown, Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ModalStep } from '../show-modals'

const createAccountSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
  contactNumber: z.string().min(10, 'Contact number must be at least 10 digits'),
  skinType: z.string().min(1, 'Please select a skin type'),
  day: z
    .string()
    .min(1, 'Required')
    .max(2)
    .refine((val) => {
      const num = parseInt(val)
      return num >= 1 && num <= 31
    }, 'Invalid day'),
  month: z
    .string()
    .min(1, 'Required')
    .max(2)
    .refine((val) => {
      const num = parseInt(val)
      return num >= 1 && num <= 12
    }, 'Invalid month'),
  year: z
    .string()
    .min(4, 'Required')
    .max(4)
    .refine((val) => {
      const num = parseInt(val)
      const currentYear = new Date().getFullYear()
      return num >= 1900 && num <= currentYear
    }, 'Invalid year'),
})

type CreateAccountFormData = z.infer<typeof createAccountSchema>

type CreateAccountContentProps = {
  setCurrentStep: Dispatch<SetStateAction<ModalStep>>
}

export const CreateAccountContent = ({ setCurrentStep }: CreateAccountContentProps) => {
  const t = useTranslations('home.createAccountDialog')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),
    mode: 'onBlur',
  })

  const { mutate: createTempInfo, isPending } = useCreateTempInfo()

  const onFormSubmit = (data: CreateAccountFormData) => {
    // Format birthday as YYYY-MM-DD
    const birthday = `${data.year}-${data.month.padStart(2, '0')}-${data.day.padStart(2, '0')}`

    // Map form data to API format
    createTempInfo(
      {
        full_name: data.fullName,
        email: data.email,
        contact_number: data.contactNumber,
        skin_type: data.skinType,
        birthday: birthday,
        lean: 'EN', // Default language, you can make this dynamic based on locale
      },
      {
        onSuccess: () => {
          setCurrentStep('welcome')
        },
      }
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="relative grid grid-cols-1 lg:grid-cols-12"
      style={{
        backgroundImage: `url(${createProfileBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="col-span-5 hidden lg:block"></div>
      {/* Form Content */}
      <div className="flex flex-col gap-6 bg-white/20 p-6 backdrop-blur-[1px] md:p-12 lg:col-span-7">
        {/* Header */}
        <div className="flex flex-col gap-8 text-center text-black">
          <div className="text-xl">
            <p className="mb-0">{t('title')}</p>
            <p>{t('subtitle')}</p>
          </div>
          <p className={cn('text-lg', lato.className)}>{t('offer')}</p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-2">
          {/* Full Name */}
          <div className="grid grid-cols-3 gap-2">
            <label htmlFor="fullName" className="min-w-24 text-base font-normal text-black">
              {t('fields.fullName')}
            </label>
            <div className="col-span-2 flex flex-col">
              <input
                type="text"
                id="fullName"
                placeholder={t('fields.fullNamePlaceholder')}
                className="coming-create-modal-input"
                {...register('fullName')}
                aria-invalid={errors.fullName ? 'true' : 'false'}
              />
              {errors.fullName && (
                <span className="mt-1 text-xs text-red-600" role="alert">
                  {errors.fullName.message}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="grid grid-cols-3 gap-2">
            <label htmlFor="email" className="min-w-24 text-base text-black">
              {t('fields.email')}
            </label>
            <div className="col-span-2 flex flex-col">
              <input
                type="email"
                id="email"
                placeholder={t('fields.emailPlaceholder')}
                className="coming-create-modal-input"
                {...register('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <span className="mt-1 text-xs text-red-600" role="alert">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          {/* Contact Number */}
          <div className="grid grid-cols-3 gap-2">
            <label htmlFor="contactNumber" className="min-w-32 text-base text-black">
              {t('fields.contactNumber')}
            </label>
            <div className="col-span-2 flex flex-col">
              <input
                type="tel"
                id="contactNumber"
                placeholder={t('fields.contactNumberPlaceholder')}
                className="coming-create-modal-input"
                {...register('contactNumber')}
                aria-invalid={errors.contactNumber ? 'true' : 'false'}
              />
              {errors.contactNumber && (
                <span className="mt-1 text-xs text-red-600" role="alert">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
          </div>

          {/* Skin Type */}
          <div className="grid grid-cols-3 gap-2">
            <label htmlFor="skinType" className="min-w-24 text-base text-black">
              {t('fields.skinType')}
            </label>
            <div className="col-span-2 flex flex-col">
              <div className="relative w-full">
                <select
                  id="skinType"
                  className="h-9.5 w-full appearance-none rounded-full bg-white px-5 py-2 pr-10 text-sm text-black focus:ring-2 focus:ring-black/20 focus:outline-none"
                  {...register('skinType')}
                  aria-invalid={errors.skinType ? 'true' : 'false'}
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
              {errors.skinType && (
                <span className="mt-1 text-xs text-red-600" role="alert">
                  {errors.skinType.message}
                </span>
              )}
            </div>
          </div>

          {/* Birthday */}
          <div className="grid grid-cols-3 gap-2">
            <label className="min-w-24 text-base text-black">{t('fields.birthday')}</label>
            <div className="col-span-2 flex flex-col">
              <div className="flex w-full items-center justify-between gap-1">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder={t('fields.day')}
                    maxLength={2}
                    className="coming-create-modal-input w-16.75"
                    {...register('day')}
                    aria-invalid={errors.day ? 'true' : 'false'}
                    aria-label="Day"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder={t('fields.month')}
                    maxLength={2}
                    className="coming-create-modal-input w-19.5"
                    {...register('month')}
                    aria-invalid={errors.month ? 'true' : 'false'}
                    aria-label="Month"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder={t('fields.year')}
                    maxLength={4}
                    className="coming-create-modal-input w-17.75"
                    {...register('year')}
                    aria-invalid={errors.year ? 'true' : 'false'}
                    aria-label="Year"
                  />
                </div>
              </div>
              {(errors.day || errors.month || errors.year) && (
                <span className="mt-1 text-xs text-red-600" role="alert">
                  {errors.day?.message || errors.month?.message || errors.year?.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          disabled={isPending}
          className="mx-auto mt-4 flex h-9.5 w-64 cursor-pointer items-center justify-center rounded-full bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : t('cta')}
        </button>
      </div>
    </form>
  )
}
