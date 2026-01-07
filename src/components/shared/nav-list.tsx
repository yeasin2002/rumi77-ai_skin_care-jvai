import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { caudex } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

interface Props {
  className?: string
}

export const NavList = async ({ className, ...props }: Props) => {
  const t = await getTranslations('shared.nav.navItems')

  const navItems = [
    { name: t('home'), url: '' },
    { name: t('ingredients'), url: '' },
    { name: t('analyzeSkin'), url: '' },
    { name: t('aboutUs'), url: '' },
    { name: t('contactUs'), url: '' },
  ]
  return (
    <>
      <nav className={cn(`hidden justify-between md:flex`, className)} {...props}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={{ pathname: item.url }}
            className={`${caudex.className} text-2xl font-bold text-white`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger className={cn(`md:hidden`, className)}>
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="sr-only">Navigation menu</SheetDescription>
          </SheetHeader>
          <nav className="mt-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={{ pathname: item.url }}
                className={`${caudex.className} text-main-button text-lg font-medium transition-colors hover:opacity-80`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}
