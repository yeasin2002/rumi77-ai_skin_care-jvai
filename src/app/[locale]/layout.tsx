import { Toaster } from 'react-hot-toast'

import type { Metadata } from 'next'
import type React from 'react'
import '../../styles/globals.css'

import { rootMetadata } from '#/config/root-metadata'
import { routing } from '@/i18n/routing'
import { fonts } from '@/lib/fonts'
import { hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { RootWrapper } from './root-wrapper'

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    return notFound()
  }

  const messages = await getMessages()
  const timeZone = 'Asia/Riyadh'
  const isRTL = locale === 'ar'

  return (
    <html
      lang={locale}
      data-locale={locale}
      className={isRTL ? 'locale-rtl' : ''}
      suppressHydrationWarning
    >
      <body className={`${fonts}`}>
        <RootWrapper locale={locale} messages={messages} timeZone={timeZone}>
          {children}
        </RootWrapper>
        <Toaster />
      </body>
    </html>
  )
}

export const metadata: Metadata = { ...rootMetadata }

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
