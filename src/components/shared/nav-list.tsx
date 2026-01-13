import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

interface Props {
  className?: string
  wrapperClassName?: string
}

export const NavList = async ({ wrapperClassName, className, ...props }: Props) => {
  const t = await getTranslations('shared.nav.navItems')

  const navItems = [
    { name: t('home'), url: '/' },
    { name: t('ingredients'), url: '/ingredients' },
    { name: t('analyzeSkin'), url: '/skin-analyzer/analysis' },
    { name: t('aboutUs'), url: '/about-us' },
    { name: t('contactUs'), url: '/contact-us' },
  ]
  return (
    <>
      <nav className={cn(`hidden justify-between md:flex`, wrapperClassName)} {...props}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={{ pathname: item.url }}
            className={cn(`font-caudex text-2xl font-bold text-white`, className)}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger className={cn(`md:hidden`, wrapperClassName)}>
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
                className={cn(
                  `font-caudex text-main-button text-lg font-medium transition-colors hover:opacity-80`,
                  className
                )}
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
