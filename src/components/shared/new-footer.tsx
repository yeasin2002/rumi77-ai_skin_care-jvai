import logoCompact from '@/assets/icons/logo/logo-mini-white.svg'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'

// social icons
import snapchat from '@/assets/icons/social/basil_snapchat-outline.svg'
import twitter from '@/assets/icons/social/devicon_twitter.svg'
import tiktok from '@/assets/icons/social/ic_sharp-tiktok.svg'
import facebook from '@/assets/icons/social/lucide_facebook.svg'
import instagram from '@/assets/icons/social/mynaui_instagram.svg'
import linkedin from '@/assets/icons/social/ri_linkedin-fill.svg'

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100075629982720',
    icon: facebook,
  },
  { name: 'Instagram', url: 'https://www.instagram.com/glowmiarabia', icon: instagram },
  { name: 'linkedin', url: 'https://sa.linkedin.com/company/glowmi-arabial', icon: linkedin },
  { name: 'TikTok', url: 'https://www.tiktok.com/@glowmiarabia', icon: tiktok },
  { name: 'twitter', url: 'https://x.com/glowmiarabial', icon: twitter },
  { name: 'Snapchat', url: 'https://snapchat.com/t/7eLns0fy', icon: snapchat },
] as const

const contactEmail = 'info@glowmi.net'
type Props = {} & React.ComponentPropsWithRef<'footer'>

export const NewFooter = async ({ className, ...props }: Props) => {
  const t = await getTranslations('home.footer')

  return (
    <footer
      className={cn(
        'font-caudex relative w-full bg-black py-12 text-white md:py-16 lg:py-20',
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* Top Navigation Links - Centered */}
        <nav className="mb-12 flex flex-wrap items-center justify-center gap-6 text-center md:mb-16 md:gap-12 lg:mb-20 lg:gap-37.5">
          <Link
            href="/"
            className="text-lg font-normal transition-opacity hover:opacity-70 md:text-xl lg:text-2xl"
          >
            {t('nav.home')}
          </Link>
          <Link
            href="/about-us"
            className="text-lg font-normal transition-opacity hover:opacity-70 md:text-xl lg:text-2xl"
          >
            {t('nav.aboutUs')}
          </Link>
          <Link
            href="/privacy-policy"
            className="text-lg font-normal transition-opacity hover:opacity-70 md:text-xl lg:text-2xl"
          >
            {t('legal.privacyPolicy')}
          </Link>
          <Link
            href="/terms-conditions"
            className="text-lg font-normal transition-opacity hover:opacity-70 md:text-xl lg:text-2xl"
          >
            {t('legal.termsConditions')}
          </Link>
        </nav>

        {/* Middle Section - Contact, Logo, Contact */}
        <div className="mb-12 grid grid-cols-1 items-end gap-8 md:mb-16 md:grid-cols-3 md:gap-12 lg:mb-20 lg:gap-47">
          {/* Left Contact */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <p className="text-lg font-normal md:text-xl lg:text-xl">{t('contact.title')}</p>
            <a
              href={`mailto:${contactEmail}`}
              className="text-lg font-normal transition-opacity hover:opacity-70 md:text-xl lg:text-xl"
            >
              {t('contact.email')}: {contactEmail}
            </a>
          </div>

          {/* Center Logo & Tagline */}
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <Image
              src={logoCompact}
              alt="Glowmi"
              width={80}
              height={80}
              className="h-16 w-16 md:h-20 md:w-20"
            />
            <p className="text-xl font-normal md:text-2xl lg:text-[28px]">Science with Soul</p>
          </div>

          {/* Right Contact */}
          <div className="flex flex-col gap-4 text-center md:text-right">
            <p className="text-lg font-normal md:text-xl lg:text-xl">{t('contact.title')}</p>
            <a
              href={`mailto:${contactEmail}`}
              className="text-lg font-normal transition-opacity hover:opacity-70 md:text-xl lg:text-xl"
            >
              {t('contact.email')}: {contactEmail}
            </a>
          </div>
        </div>

        {/* Bottom Section - Follow Us */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg font-bold md:text-xl lg:text-xl">Follow Us</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
