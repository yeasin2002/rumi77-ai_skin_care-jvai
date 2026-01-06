import Image from 'next/image'

import showcase1 from '@/assets/image/product-showcase-comming.png'
import { SiteHeading } from '@/components/shared'
import { caudex, openSans } from '@/lib/fonts'

const imageList = [showcase1, showcase1, showcase1, showcase1]

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
      <div className="relative mt-8 h-[300px] w-full overflow-hidden sm:h-[400px] md:h-[500px] lg:mt-28">
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
            <h2
              className={
                'max-w-md text-2xl leading-tight text-white italic sm:text-3xl md:text-4xl lg:text-5xl ' +
                caudex.className
              }
            >
              Glow brighter every day with cosmetics that best in you
            </h2>
            <p className={`mt-4 max-w-sm text-sm text-white/80 sm:text-base ${openSans.className}`}>
              Elevate your beauty with luxurious cosmetics crafted to celebrate your natural charm.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
