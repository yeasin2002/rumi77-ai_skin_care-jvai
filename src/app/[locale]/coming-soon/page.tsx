'use client'

import { ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import logoCompact from '@/assets/image/logo-compact.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { caudex, openSans } from '@/lib/fonts'
import { Nav } from '../../../components/shared'

export default function ComingSoonContent() {
  const t = useTranslations('comingSoon')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <div className="mx-auto max-w-7xl">
      <Nav />
      <div className="relative flex min-h-screen flex-col items-center justify-center py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a2e1a_1px,transparent_1px)] bg-size-[24px_24px]" />
        </div>
        {/* Content Container */}
        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
          {/* Logo */}
          <div className="animate-fade-in mb-8">
            <Image src={logoCompact} alt="Glowmi Logo" className="h-auto w-32" priority />
          </div>
          {/* Main Content */}
          <div className="animate-fade-in-up space-y-6">
            {/* Title */}
            <h1
              className={`font-caudex text-main-button text-5xl font-normal italic sm:text-6xl md:text-7xl`}
            >
              {t('title')}
            </h1>
            {/* Subtitle */}
            <h2 className={`font-open-sans text-main-primary-base_medium text-xl sm:text-2xl`}>
              {t('subtitle')}
            </h2>
            {/* Description */}
            <p
              className={`font-open-sans text-main-primary-base_medium mx-auto max-w-lg text-base leading-relaxed sm:text-lg`}
            >
              {t('description')}
            </p>
            {/* Email Form */}
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                  className={`font-open-sans border-main-button/20 focus:border-main-button focus:ring-main-button h-12 flex-1 rounded-full bg-white px-6 text-base`}
                />
                <Button
                  type="submit"
                  className={`font-open-sans h-12 rounded-full px-8 text-base font-semibold`}
                >
                  {t('notifyButton')}
                </Button>
              </form>
            ) : (
              <div
                className={`font-open-sans text-main-button mx-auto mt-8 rounded-full bg-white px-6 py-4 text-base font-medium shadow-sm`}
              >
                {t('successMessage')}
              </div>
            )}
            {/* Back to Home Link */}
            <div className="mt-12">
              <Link
                href={{ pathname: '/' }}
                className={`font-open-sans text-main-button inline-flex items-center gap-2 text-base font-medium transition-opacity hover:opacity-70`}
              >
                <ArrowLeft className="h-4 w-4" />
                {t('backHome')}
              </Link>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="mt-16 flex gap-2">
            <div className="bg-main-button h-1 w-12 rounded-full opacity-30" />
            <div className="bg-main-button h-1 w-8 rounded-full opacity-50" />
            <div className="bg-main-button h-1 w-12 rounded-full opacity-30" />
          </div>
        </div>
        {/* Footer Tagline */}
        <div className="absolute right-0 bottom-8 left-0">
          <p className={`font-open-sans text-main-primary-base_medium text-center text-sm`}>
            The Essence of Timeless Glow
          </p>
        </div>
      </div>
    </div>
  )
}
