import { Toaster } from 'react-hot-toast'

import type { Metadata } from 'next'
import type React from 'react'
import '../../styles/globals.css'

import { rootMetadata } from '#/config/root-metadata'
import { routing } from '@/i18n/routing'
import { fonts } from '@/lib/fonts'
import { getMessages } from 'next-intl/server'
import { RootWrapper } from './root-wrapper'

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // if (!hasLocale(routing.locales, locale)) {
  //   notFound()
  // }

  const messages = await getMessages()
  const timeZone = 'Asia/Riyadh'
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
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
