import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

interface Props {
  className?: string
  wrapperClassName?: string
}

export const NavList = async ({ wrapperClassName, className, ...props }: Props) => {
  const t = await getTranslations('shared.nav.navItems')

  const navItemsOne = [
    { name: t('home'), url: '/' },
    { name: t('ingredients'), url: '/ingredients' },
    { name: t('analyzeSkin'), url: '/skin-analyzer/analysis' },
  ]

  const navItemsTwo = [
    { name: t('aboutUs'), url: '/about-us' },
    { name: t('contactUs'), url: '/contact-us' },
    { name: t('needHelp'), url: '/need-help' },
  ]

  const allNav = navItemsOne.concat(navItemsTwo)

  return (
    <>
      <nav
        className={cn(`hidden items-center justify-between md:flex`, wrapperClassName)}
        {...props}
      >
        <div className="flex items-center gap-8 lg:gap-12">
          {navItemsOne.map((item) => (
            <Link
              key={item.name}
              href={{ pathname: item.url }}
              className={cn(
                `font-caudex text-lg font-medium text-white transition-opacity hover:opacity-80 lg:text-2xl`,
                className
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 lg:gap-8">
          {navItemsTwo.map((item) => (
            <Link
              key={item.name}
              href={{ pathname: item.url }}
              className={cn(
                `font-caudex text-base font-medium text-white transition-opacity hover:opacity-80 lg:text-lg`,
                className
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
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
            {allNav.map((item) => (
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
