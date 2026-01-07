'use client'

import Logo from '@/assets/logo.svg'
import { Button } from '@/components/ui'
import { openSans } from '@/lib/fonts'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { LanguageToggle } from './language-toggle'

export const Nav = () => {
  const t = useTranslations('shared.nav')

  return (
    <header className="flex items-center justify-between px-2 py-4">
      <Link href={{ pathname: '/' }}>
        <Image src={Logo} alt="Logo" className="max-w-32 md:max-w-60" />
      </Link>

      <div className="flex items-center justify-center gap-x-4">
        <LanguageToggle />
        <Button className={openSans.className}>{t('button_text')}</Button>
      </div>
    </header>
  )
}
