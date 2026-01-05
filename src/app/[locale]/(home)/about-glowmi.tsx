import aboutImage from '@/assets/image/about-img.png'
import { caudex, openSans } from '@/lib/fonts'
import Image from 'next/image'

export const AboutGlowmi = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="flex justify-center bg-[#FEF9F6] lg:col-span-2">
          <Image src={aboutImage} alt="Glowmi Product" className="w-full max-w-md" />
        </div>
        <div className="flex flex-col justify-center space-y-6 bg-[#FFFFFF] px-24 lg:col-span-3">
          <h2 className={`${caudex.className} text-foreground text-4xl lg:text-5xl`}>
            About Glowmi
          </h2>
          <p
            className={`text-muted-foreground text-base leading-relaxed lg:text-lg ${openSans.className}`}
          >
            GLOWMI is a premium skincare brand committed to delivering world-class products that
            combine advanced science with nature. Crafted for every skin tone, our formulations
            harness clinically proven ingredients to inspire confidence and promote radiant,
            timeless beauty. From the heart of Saudi Arabia to the world, GLOWMI empowers you to
            glow with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}
