import { Caudex, Open_Sans } from 'next/font/google'

export const caudex = Caudex({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--next-font-caudex',
  fallback: ['Georgia', 'serif'],
})

export const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--next-font-open-sans',
  fallback: ['system-ui', 'sans-serif'],
})

const fontList = [caudex, openSans]
export const fonts = fontList.map((f) => f.variable).join(' ')
