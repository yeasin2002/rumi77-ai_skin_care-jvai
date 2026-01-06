import { SiteHeading } from '@/components/shared'
import { caudex, openSans } from '@/lib/fonts'

import image1 from '@/assets/image/skincare-showcase-icons/ai-brain.png'
import image3 from '@/assets/image/skincare-showcase-icons/awards.png'
import image2 from '@/assets/image/skincare-showcase-icons/dermatologically.png'
import image4 from '@/assets/image/visuals-results/bx_leaf.png'
import Image, { StaticImageData } from 'next/image'

interface SkincareItem {
  icon: StaticImageData
  title: string
  description: string
}

const skincareDetails: SkincareItem[] = [
  {
    icon: image1,
    title: 'AI-Powered Personalization',
    description: 'Advanced algorithms analyze your unique skin profile',
  },
  {
    icon: image2,
    title: 'Dermatologically Guided',
    description: 'Formulations developed with expert dermatologists',
  },
  {
    icon: image3,
    title: 'Premium Ingredients',
    description: 'Only the highest quality, ethically sourced actives',
  },
  {
    icon: image4,
    title: 'Modern Skin Science',
    description: "Designed for the unique needs of today's skin",
  },
]

export const SkincareShowcase = () => {
  return (
    <section className="bg-[#FFFFFF] px-4 py-20 sm:px-8 lg:py-32">
      <SiteHeading
        heading="Where Science Meets Skincare"
        subHeading="Every Glowmi product is backed by research and designed for results"
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skincareDetails.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#2447311A]">
              <Image src={item.icon} alt={item.title} className="size-8" />
            </div>
            <h3 className={`text-main-button mt-4 text-xl font-bold ${caudex.className}`}>
              {item.title}
            </h3>
            <p className={`text-main-primary-base_medium mt-2 text-sm ${openSans.className}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
