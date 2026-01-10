import logoCompact from '@/assets/image/logo-compact.png'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'
import { cn } from '../../../lib/utils'

const contactEmail = 'hello.hafsabinte@gmail.com'
type Props = {} & React.ComponentPropsWithRef<'footer'>

export const Footer = async ({ className, ...props }: Props) => {
  const t = await getTranslations('home.footer')

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.aboutUs'), href: '/about' },
  ]

  const legalItems = [
    { label: t('legal.privacyPolicy'), href: '/privacy-policy' },
    { label: t('legal.termsConditions'), href: '/terms-conditions' },
  ]

  return (
    <footer className={cn('bg-[#f5f4f3] px-4 py-10 pt-20 sm:px-8', className)} {...props}>
      <div className="mx-auto grid grid-cols-1 items-end gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center sm:items-start">
          <Image src={logoCompact} alt="Glowmi Logo" className="w-auto" />
          <p className="mt-2 text-sm text-gray-500">{t('tagline')}</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-main-button text-sm text-gray-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          {legalItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-main-button text-sm text-gray-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="text-sm font-medium text-gray-700">{t('contact.title')}</span>
          <a
            href={`mailto:${contactEmail}`}
            className="hover:text-main-button text-sm text-gray-700 transition-colors"
          >
            {t('contact.email')}: {contactEmail}
          </a>
        </div>
      </div>
    </footer>
  )
}
