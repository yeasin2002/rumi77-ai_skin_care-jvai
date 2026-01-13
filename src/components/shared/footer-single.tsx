import logoCompact from '@/assets/image/logo-compact.svg'
import { openSans } from '@/lib/fonts'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export const FooterSingle = async () => {
  const t = await getTranslations('home.footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#f5f4f3] px-4 py-16 sm:px-8">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <Image src={logoCompact} alt="Glowmi Logo" className="w-auto" />

        {/* Tagline */}
        <p className={`text-main-primary-base_medium font-open-sans mt-4 text-lg`}>
          {t('tagline')}
        </p>

        {/* Divider */}
        <div className="bg-main-button mt-8 h-px w-24" />

        {/* Copyright */}
        <p className={`font-open-sans mt-6 text-sm text-[#2447314D]`}>
          © {currentYear} {t('copyright')}
        </p>
      </div>
    </footer>
  )
}
