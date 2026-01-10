import ingredientsBg from '@/assets/image/AboutUs-bg.jpg'
import { NavList } from '@/components/shared'
import Image from 'next/image'

export const AboutHero = () => {
  return (
    <div className="relative">
      <Image
        src={ingredientsBg}
        alt="Background"
        className="z-50 h-screen w-full object-cover"
        priority
        quality={100}
      />
      <h1 className="font-caudex text-main-button absolute bottom-10 left-20 text-5xl leading-none font-normal tracking-normal">
        Glow That Lives Forever
      </h1>

      <NavList
        wrapperClassName="absolute top-5 right-2 z-20 justify-around md:w-full"
        className="text-main-button"
      />
    </div>
  )
}
