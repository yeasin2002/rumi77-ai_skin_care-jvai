import newLogo from '@/assets/icons/logo.svg'
import { Link } from '@/i18n/navigation'
import { Info, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import { LanguageToggle } from '../language-toggle'

type Props = {
  navItems: {
    name: string
    url: string
  }[]
}

export const NewNavLarge = ({ navItems }: Props) => {
  return (
    <header className="w-full bg-white py-4">
      <div className="container mx-auto px-4">
        {/* Logo - Top Center */}
        <div className="flex justify-center pb-6">
          <Link href="/">
            <Image
              src={newLogo}
              alt="GLOWMI"
              width={140}
              height={40}
              className="h-auto w-32 lg:w-36"
            />
          </Link>
        </div>

        {/* Navigation Bar - Nav Items Center + Icons Right */}
        <div className="relative flex items-center justify-center">
          {/* Navigation Links - Center */}
          <nav className="flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={{ pathname: item.url }}
                className="font-caudex text-[1.75rem] leading-normal font-bold text-black transition-opacity hover:opacity-70"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icon Actions - Absolute Right */}
          <div className="absolute right-0 flex items-center gap-3">
            <LanguageToggle />
            <button
              type="button"
              className="rounded-full p-2 transition-colors hover:bg-gray-100"
              aria-label="Information"
            >
              <Info className="size-7 text-black" />
            </button>
            <button
              type="button"
              className="rounded-full p-2 transition-colors hover:bg-gray-100"
              aria-label="Contact"
            >
              <Phone className="size-7 text-black" />
            </button>
            <button
              type="button"
              className="rounded-full p-2 transition-colors hover:bg-gray-100"
              aria-label="Location"
            >
              <MapPin className="size-7 text-black" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
