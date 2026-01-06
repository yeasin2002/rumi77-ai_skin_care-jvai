import type { Metadata } from 'next'

export const rootMetadata: Metadata = {
  title: {
    default: 'GLOWMI - AI-Powered Skincare',
    template: '%s | GLOWMI',
  },
  description:
    'Discover personalized skincare with GLOWMI. AI-powered skin analysis, premium ingredients, and customized routines for your unique skin needs.',
  keywords: [
    'skincare',
    'AI skin analysis',
    'personalized skincare',
    'luxury skincare',
    'skin routine',
    'GLOWMI',
    'beauty',
    'cosmetics',
    'Saudi Arabia',
    'KSA',
  ],
  authors: [{ name: 'GLOWMI' }],
  creator: 'GLOWMI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://glowmi.com',
    title: 'GLOWMI - AI-Powered Skincare',
    description:
      'Discover personalized skincare with GLOWMI. AI-powered skin analysis, premium ingredients, and customized routines for your unique skin needs.',
    siteName: 'GLOWMI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GLOWMI - AI-Powered Skincare',
    description:
      'Discover personalized skincare with GLOWMI. AI-powered skin analysis, premium ingredients, and customized routines.',
    creator: '@glowmi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
