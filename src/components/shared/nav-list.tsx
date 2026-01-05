import { caudex } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const navItems = [
  { name: 'Home', url: '' },
  { name: 'Ingredients', url: '' },
  { name: 'Analyze Skin', url: '' },
  { name: 'About Us', url: '' },
  { name: 'Contact US', url: '' },
]
interface Props extends React.ComponentPropsWithRef<'nav'> {}

export const NavList = ({ className, ...props }: Props) => {
  return (
    <nav className={cn(`flex justify-between`, className)} {...props}>
      {navItems.map((item) => (
        <Link
          href={{ pathname: item.url }}
          className={`${caudex.className} text-2xl font-bold text-white`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
