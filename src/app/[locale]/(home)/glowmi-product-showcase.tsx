import { SiteHeading } from '../../../components/shared'

import showcase1 from '@/assets/image/product-showcase/showcase-1.png'
import showcase2 from '@/assets/image/product-showcase/showcase-2.png'
import showcase3 from '@/assets/image/product-showcase/showcase-3.png'
import showcase4 from '@/assets/image/product-showcase/showcase-4.png'
import Image from 'next/image'

const imageList = [showcase1, showcase2, showcase3, showcase4]

export const GlowmiProductShowcase = () => {
  return (
    <div>
      <SiteHeading heading="Glowmi" wrapperClassname="py-10" />

      <div className="flex items-center gap-1">
        {imageList.map((im, index) => (
          <Image key={index} src={im} alt="Product showcase" className="w-full" />
        ))}
      </div>

      {/* Video Section with Text Overlay */}
      <div className="relative mt-8 h-[300px] w-full overflow-hidden sm:h-[400px] md:h-[500px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/showcase-video.mp4" type="video/mp4" />
        </video>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center bg-black/20">
          <div className="px-6 py-8 sm:px-12 md:px-16 lg:px-24">
            <h2 className="max-w-md font-serif text-2xl leading-tight text-white italic sm:text-3xl md:text-4xl lg:text-5xl">
              Glow brighter every day with cosmetics that best in you
            </h2>
            <p className="mt-4 max-w-sm text-sm text-white/80 sm:text-base">
              Elevate your beauty with luxurious cosmetics crafted to celebrate your natural charm.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
