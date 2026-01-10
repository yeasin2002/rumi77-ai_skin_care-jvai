import ingredientsBg from '@/assets/image/ingredients-bg.jpg'
import { NavList } from '@/components/shared'
import { Footer } from '@/components/shared/footer'
import Image from 'next/image'

const Ingredients = () => {
  return (
    <div>
      <main className="relative">
        <div>
          <Image
            src={ingredientsBg}
            alt="Background"
            className="z-50 h-screen w-full object-cover"
          />

          <h1 className="font-caudex text-main-button absolute bottom-10 left-20 text-5xl leading-none font-normal tracking-normal">
            Timeless Glow, Science- <br /> Backed Skincare
          </h1>
        </div>

        <NavList
          wrapperClassName="absolute top-5 right-2 z-20 justify-around md:w-full"
          className="text-black"
        />
      </main>
      <Footer className="px-20!" />
    </div>
  )
}

export default Ingredients
