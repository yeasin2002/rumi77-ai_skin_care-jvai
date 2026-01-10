import sideImage from '@/assets/image/AboutMission-side-image.jpg'
import Image from 'next/image'

export const AboutMissionAndVision = () => {
  return (
    <section className="bg-[#e8e6e3]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 lg:px-8">
        {/* Left - Image */}
        <div className="relative aspect-square w-lg overflow-hidden">
          <Image
            src={sideImage}
            alt="Woman with skincare products on face, smiling"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col justify-center">
          <h2 className="font-caudex text-main-button mb-10 text-5xl font-normal md:text-5xl">
            Mission & Vision
          </h2>

          <div className="space-y-8">
            {/* Mission */}
            <div>
              <h3 className="font-caudex text-main-button mb-3 text-lg font-bold">Mission</h3>
              <p className="font-open-sans text-main-button text-sm leading-relaxed">
                At GLOWMI, we are committed to delivering premium skincare solutions that combine
                cutting-edge formulations, clinically proven ingredients, and sustainable
                innovation. We create world-class products that are safe, effective, and beautifully
                designed. Our mission is to inspire self-care, elevate everyday rituals into luxury
                experiences, and establish GLOWMI as a trusted global name in skincare.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="font-caudex text-main-button mb-3 text-lg font-bold">Vision</h3>
              <p className="font-open-sans text-main-button text-sm leading-relaxed">
                To redefine skincare luxury by blending advanced science, global expertise, and
                timeless elegance empowering confidence and radiant beauty in every individual,
                starting from Saudi Arabia to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
