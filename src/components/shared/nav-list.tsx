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
import Link from 'next/link'

const navItems = [
  { name: 'Home', url: '' },
  { name: 'Ingredients', url: '' },
  { name: 'Analyze Skin', url: '' },
  { name: 'About Us', url: '' },
  { name: 'Contact US', url: '' },
]
interface Props {
  className?: string
}

export const NavList = ({ className, ...props }: Props) => {
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
