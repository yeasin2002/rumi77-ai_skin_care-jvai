'use client'

import Logo from '@/assets/logo.svg'
import { buttonVariants } from '@/components/ui'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../../lib/utils'
import { LanguageToggle } from './language-toggle'

type Props = {
  className?: string
}

export const Nav = ({ className }: Props) => {
  const t = useTranslations('shared.nav')

  return (
    <header className={cn('flex items-center justify-between px-2 py-4 lg:px-20', className)}>
      <Link href={{ pathname: '/' }}>
        <Image src={Logo} alt="Logo" className="max-w-32 md:max-w-60" />
      </Link>

      <div className="flex items-center justify-center gap-x-4">
        <LanguageToggle />
        <Link
          href={{ pathname: '/coming-soon' }}
          className={buttonVariants({ className: 'font-open-sans' })}
        >
          {t('button_text')}
        </Link>
      </div>
    </header>
  )
}
