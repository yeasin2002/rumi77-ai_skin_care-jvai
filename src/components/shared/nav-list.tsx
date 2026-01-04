import Link from 'next/link'
import { cn } from '../../lib/utils'

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
    <nav className={cn(className)} {...props}>
      {navItems.map((item) => (
        <Link href={{ pathname: item.url }}>{item.name}</Link>
      ))}
    </nav>
  )
}
