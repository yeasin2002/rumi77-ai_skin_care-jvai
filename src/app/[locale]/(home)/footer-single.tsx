import logoCompact from '@/assets/image/logo-compact.png'
import Image from 'next/image'
import { openSans } from '../../../lib/fonts'

export const FooterSingle = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#f5f4f3] px-4 py-16 sm:px-8">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <Image src={logoCompact} alt="Glowmi Logo" className="w-auto" />

        {/* Tagline */}
        <p className={`text-main-primary-base_medium mt-4 text-lg ${openSans.className}`}>
          The Essence of Timeless Glow
        </p>

        {/* Divider */}
        <div className="bg-main-button mt-8 h-px w-24" />

        {/* Copyright */}
        <p className={`mt-6 text-sm text-[#2447314D] ${openSans.className}`}>
          © {currentYear} Glowmi. All rights reserved. Coming Soon.
        </p>
      </div>
    </footer>
  )
}
