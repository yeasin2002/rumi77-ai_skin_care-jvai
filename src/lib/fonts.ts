import { Caudex, Open_Sans } from 'next/font/google'

export const caudex = Caudex({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-caudex',
})
export const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-openSans',
})

const fontList = [caudex, openSans]
export const fonts = fontList.map((f) => f.variable)
