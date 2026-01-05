import { Caudex, Open_Sans } from 'next/font/google'

const caudex = Caudex({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-caudex',
})
const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-openSans',
})

const fontList = [caudex, openSans]
export const fonts = fontList.map((f) => f.variable)
