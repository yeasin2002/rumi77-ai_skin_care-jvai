import bgImage from '@/assets/image/bottom-cta-bg-image.jpg'
import { Button } from '@/components/ui'
import { caudex, openSans } from '@/lib/fonts'
import Image from 'next/image'

export const HomeBottomCta = () => {
  return (
    <section className="relative h-[350px] w-full overflow-hidden sm:h-[400px] md:h-[450px]">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Woman with glowing skin holding orange slice"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h2 className={`${caudex.className} text-3xl text-white italic sm:text-4xl md:text-5xl`}>
          Your Glow Is Personal
        </h2>
        <p className="mt-4 max-w-md text-sm text-white/90 sm:text-base">
          Begin your personalized skincare journey with Glowmi.
        </p>
        <Button
          className={`${openSans.className} mt-4 rounded-full px-6 py-5 text-base font-semibold lg:px-10`}
        >
          STAY CONNECTED
        </Button>
      </div>
    </section>
  )
}
