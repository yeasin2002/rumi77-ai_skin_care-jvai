import ingredientsBg from '@/assets/image/ingredients-bg.jpg'
import { NavList } from '@/components/shared'
import Image from 'next/image'

const Ingredients = () => {
  return (
    <main>
      <div className="relative">
        <Image
          src={ingredientsBg}
          alt="Background"
          className="z-50 h-screen w-full object-cover"
          priority
          quality={100}
        />
        <h1 className="font-caudex text-main-button absolute bottom-10 left-20 text-5xl leading-none font-normal tracking-normal">
          Timeless Glow, Science- <br /> Backed Skincare
        </h1>

        <NavList
          wrapperClassName="absolute top-5 right-2 z-20 justify-around md:w-full"
          className="text-main-button"
        />
      </div>

      <div className="bg-main-primary-base_medium mt-32 h-0.5"></div>
    </main>
  )
}

export default Ingredients
