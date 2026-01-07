import Logo from '@/assets/logo.svg'
import { Button } from '@/components/ui'
import { openSans } from '@/lib/fonts'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { LanguageToggle } from './language-toggle'

export const Nav = async () => {
  const t = await getTranslations('shared.nav')

  return (
    <header className="flex items-center justify-between px-2 py-4">
      <Image src={Logo} alt="Logo" className="max-w-32 md:max-w-60" />

      <div className="flex items-center justify-center gap-x-4">
        <LanguageToggle />
        <Button className={openSans.className}>{t('button_text')}</Button>
      </div>
    </header>
  )
}
