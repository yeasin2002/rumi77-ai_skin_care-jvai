import { SiteHeading } from '@/components/shared'

import lockImage from '@/assets/image/lock.png'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import product1 from '@/assets/products/Label/Cleanser-Label.jpg'
import product2 from '@/assets/products/Label/Radiant-Satin-Lip Oil-Label.jpg'
import product3 from '@/assets/products/Label/Serum-Dropper-Label.jpg'

export const CollectionProduct = async () => {
  const t = await getTranslations('home.collection')

  const collectionList = [
    {
      key: 'serum',
      title: t('collectionList.serum.title'),
      description: t('collectionList.serum.description'),
      image: product1,
    },
    {
      key: 'sleepingMask',
      title: t('collectionList.sleepingMask.title'),
      description: t('collectionList.sleepingMask.description'),
      image: product2,
    },
    {
      key: 'lipOil',
      title: t('collectionList.lipOil.title'),
      description: t('collectionList.lipOil.description'),
      image: product3,
    },
  ]

  return (
    <section className="px-4 py-16 sm:px-8">
      <p
        className={`font-open-sans text-main-primary-base_medium text-center text-sm tracking-widest uppercase`}
      >
        {t('subtitle')}
      </p>
      <SiteHeading heading={t('title')} subHeading={t('desc')} />

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collectionList.map((item) => (
          <div
            key={item.key}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            {/* Image with Coming Soon overlay */}
            <div className="relative aspect-square w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-30 blur-[3px]"
              />
              {/* Coming Soon overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="rounded-full bg-[#D1DCCC] p-2">
                  <Image src={lockImage} alt="Lock" />
                </div>
                <span className="text-main-primary-base_medium mt-2 text-xs tracking-widest uppercase">
                  {t('comingSoon')}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="text-main-button flex flex-col items-center p-6 text-center">
              <h3 className={`font-caudex text-xl font-semibold`}>{item.title}</h3>
              <p className={`font-open-sans mt-2 text-sm`}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
