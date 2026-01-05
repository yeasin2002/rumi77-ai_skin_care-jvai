import Logo from '@/assets/logo.svg'
import { Button } from '@/components/ui'
import { openSans } from '@/lib/fonts'
import { LanguageToggle } from './language-toggle'

export const Nav = () => {
  return (
    <header className="flex items-center justify-between px-2 py-4">
      <Logo />

      <div className="flex items-center justify-center gap-x-4">
        <LanguageToggle />
        <Button className={openSans.className}>Sign in</Button>
      </div>
    </header>
  )
}
