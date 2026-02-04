import logoCompact from '@/assets/icons/logo/logo-mini-dark.svg'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function ComingSoonPage() {
  const t = await getTranslations('comingSoon')

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f4f3] px-4 py-16">
      <div className="flex max-w-2xl flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src={logoCompact}
            alt="Glowmi Logo"
            width={80}
            height={80}
            className="h-20 w-20"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="font-caudex mb-8 text-4xl font-normal text-black md:text-5xl lg:text-6xl">
          {t('title')}
        </h1>

        {/* Subtitle */}
        <h2 className="font-caudex mb-6 text-xl font-normal text-black md:text-2xl lg:text-3xl">
          {t('subtitle')}
        </h2>

        {/* Description */}
        <p className="font-open-sans mb-12 max-w-xl text-base leading-relaxed text-black/80 md:text-lg">
          {t('description')}
        </p>

        {/* Decorative Divider */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-24 bg-black/20" />
          <div className="h-2 w-2 rounded-full bg-black" />
          <div className="h-px w-24 bg-black/20" />
        </div>

        {/* Bottom Tagline */}
        <p className="font-caudex text-sm text-black/70 md:text-base">
          The Essence of Timeless Glow
        </p>
      </div>
    </div>
  )
}
