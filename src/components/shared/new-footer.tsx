import logoCompact from '@/assets/icons/logo-mini.svg'
import logo from '@/assets/icons/logo.svg'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'

// social icons
import facebook from '@/assets/icons/social/logos_facebook.svg'
import tiktok from '@/assets/icons/social/logos_tiktok-icon.svg'
import instagram from '@/assets/icons/social/skill-icons_instagram.svg'
import snapchat from '@/assets/icons/social/snapchat-logo.svg'

const contactEmail = 'hello.hafsabinte@gmail.com'
type Props = {} & React.ComponentPropsWithRef<'footer'>

export const NewFooter = async ({ className, ...props }: Props) => {
  const t = await getTranslations('home.footer')

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.aboutUs'), href: '/about-us' },
  ]

  const legalItems = [
    { label: t('legal.privacyPolicy'), href: '/privacy-policy' },
    { label: t('legal.termsConditions'), href: '/terms-conditions' },
  ]

  return (
    <footer className={cn('w-full bg-white py-12 lg:py-16', className)} {...props}>
      <div className="px-20">
        {/* Top Section - Newsletter */}
        <div className="mb-12 lg:mb-16">
          <h3 className="font-caudex mb-4 text-2xl font-bold text-black lg:text-3xl">
            Get in Touch!
          </h3>
          <form className="flex max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-sm border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="rounded-sm bg-black px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              Send
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Navigation */}
          <div className="flex flex-col gap-6">
            <Image src={logoCompact} alt="Glowmi" width={40} height={40} className="h-10 w-10" />
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-caudex text-lg font-normal text-black transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-6">
            <h4 className="font-caudex text-2xl font-bold text-black">Legal</h4>
            <nav className="flex flex-col gap-4">
              {legalItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-caudex text-lg font-normal text-black transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-6">
            <h4 className="font-caudex text-2xl font-bold text-black">Help</h4>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact-us"
                className="font-caudex text-lg font-normal text-black transition-opacity hover:opacity-70"
              >
                Contact Us
              </Link>
              <a
                href={`mailto:${contactEmail}`}
                className="font-caudex text-lg font-normal text-black transition-opacity hover:opacity-70"
              >
                Email: {contactEmail}
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-6">
            <h4 className="font-caudex text-2xl font-bold text-black">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="Facebook"
              >
                <Image src={facebook} alt="Facebook" width={24} height={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="Instagram"
              >
                <Image src={instagram} alt="Instagram" width={24} height={24} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="TikTok"
              >
                <Image src={tiktok} alt="TikTok" width={24} height={24} />
              </a>
              <a
                href="https://snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="Snapchat"
              >
                <Image src={snapchat} alt="Snapchat" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="mt-12 flex justify-center pt-8">
          <Image src={logo} alt="GLOWMI" width={120} height={20} className="h-auto w-28" />
        </div>
      </div>
    </footer>
  )
}
