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
        {imageList.map((im) => {
          return <Image src={im} alt="Showcase" className="w-full" />
        })}
      </div>
    </div>
  )
}
