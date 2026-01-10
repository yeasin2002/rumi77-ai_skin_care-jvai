import { SiteHeading } from '@/components/shared'
import { caudex, openSans } from '@/lib/fonts'

import image1 from '@/assets/image/skincare-showcase-icons/ai-brain.png'
import image3 from '@/assets/image/skincare-showcase-icons/awards.png'
import image2 from '@/assets/image/skincare-showcase-icons/dermatologically.png'
import image4 from '@/assets/image/visuals-results/bx_leaf.png'
import { getTranslations } from 'next-intl/server'
import Image, { StaticImageData } from 'next/image'

const iconMap: Record<string, StaticImageData> = {
  aiPowered: image1,
  dermatologically: image2,
  premium: image3,
  modernScience: image4,
}

export const SkincareShowcase = async () => {
  const t = await getTranslations('home.skincareShowcase')

  const detailKeys = ['aiPowered', 'dermatologically', 'premium', 'modernScience'] as const

  return (
    <section className="bg-[#FFFFFF] px-4 py-20 sm:px-8 lg:py-32">
      <SiteHeading heading={t('title')} subHeading={t('desc')} />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {detailKeys.map((key) => (
          <div key={key} className="flex flex-col items-center text-center">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#2447311A]">
              <Image
                src={iconMap[key]}
                alt={t(`skincareDetails.${key}.title`)}
                className="size-8"
              />
            </div>
            <h3 className={`text-main-button mt-4 text-xl font-bold ${caudex.className}`}>
              {t(`skincareDetails.${key}.title`)}
            </h3>
            <p className={`text-main-primary-base_medium mt-2 text-sm ${openSans.className}`}>
              {t(`skincareDetails.${key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
