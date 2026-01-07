import { SiteHeading } from '@/components/shared'
import { caudex, openSans } from '@/lib/fonts'

import CollectionProductImage from '@/assets/image/CollectionProduct-image.jpg'
import lockImage from '@/assets/image/lock.png'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

const collectionList = [
  {
    title: 'Serum',
    description: 'Brightening, barrier strengthening, hydration, texture improvement',
  },
  {
    title: 'Sleeping Mask',
    description: 'Deep hydration, overnight repair, Rejuvenating, glow restoration',
  },
  {
    title: 'Lip Oil',
    description: 'Brightening, barrier strengthening, hydration, texture improvement',
  },
]

export const CollectionProduct = async () => {
  const t = await getTranslations('home.collection')

  return (
    <section className="px-4 py-16 sm:px-8">
      <p
        className={`text-center text-sm tracking-widest uppercase ${openSans.className} text-main-primary-base_medium`}
      >
        {t('subtitle')}
      </p>
      <SiteHeading heading={t('title')} subHeading={t('desc')} />

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collectionList.map((item) => (
          <div
            key={item.title}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            {/* Image with Coming Soon overlay */}
            <div className="relative aspect-square w-full">
              <Image
                src={CollectionProductImage}
                alt={item.title}
                fill
                className="object-cover opacity-30 backdrop-blur-[184px]"
              />
              {/* Coming Soon overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="rounded-full bg-[#D1DCCC] p-2">
                  <Image src={lockImage} alt="Lock" />
                </div>
                <span className="text-main-primary-base_medium mt-2 text-xs tracking-widest uppercase">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="text-main-button flex flex-col items-center p-6 text-center">
              <h3 className={`text-xl font-semibold ${caudex.className}`}>{item.title}</h3>
              <p className={`${openSans.className} mt-2 text-sm`}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
