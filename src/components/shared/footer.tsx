import logoCompact from '@/assets/image/logo-compact.svg'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'

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
    <footer
      className={cn(
        'bg-background border-main-primary-base_light border-t px-4 py-10 pt-20 sm:px-8',
        className
      )}
      {...props}
    >
      <div className="mx-auto grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex w-full flex-col items-center sm:items-start">
          <Image src={logoCompact} alt="Glowmi Logo" className="ml-6 min-h-32 w-auto" />
          <p className="text-main-button text-sm">{t('tagline')}</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="global-nav-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          {legalItems.map((item) => (
            <a key={item.label} href={item.href} className="global-nav-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <span className="global-nav-link">{t('contact.title')}</span>
          <a href={`mailto:${contactEmail}`} className="global-nav-link">
            {t('contact.email')}: {contactEmail}
          </a>
        </div>
      </div>
    </footer>
  )
}
