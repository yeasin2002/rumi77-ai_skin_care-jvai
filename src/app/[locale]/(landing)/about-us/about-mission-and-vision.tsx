import sideImage from '@/assets/image/AboutMission-side-image.jpg'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export const AboutMissionAndVision = async () => {
  const t = await getTranslations('aboutUs.missionVision')

  return (
    <section className="bg-[#e8e6e3]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 lg:px-8">
        {/* Left - Image */}
        <div className="relative aspect-square w-lg overflow-hidden">
          <Image src={sideImage} alt={t('imageAlt')} fill className="object-cover" />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-main-button mb-10 text-5xl font-normal md:text-5xl">{t('title')}</h2>

          <div className="space-y-8">
            {/* Mission */}
            <div>
              <h3 className="text-main-button mb-3 text-lg font-bold">{t('mission.title')}</h3>
              <p className="font-open-sans text-main-button text-sm leading-relaxed">
                {t('mission.description')}
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-main-button mb-3 text-lg font-bold">{t('vision.title')}</h3>
              <p className="font-open-sans text-main-button text-sm leading-relaxed">
                {t('vision.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
