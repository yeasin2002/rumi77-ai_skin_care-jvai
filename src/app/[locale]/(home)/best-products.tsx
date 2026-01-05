import productImage1 from '@/assets/image/product-image-1.png'
import { SiteHeading } from '@/components/shared'
import { ProductsCarousel, type ProductItem } from './products-list'

const products: ProductItem[] = [
  {
    src: productImage1,
    alt: 'Radiant Satin Lip Oil',
    category: 'Lip Oil',
    benefits: 'Smoothing, natural shine',
    skinType: 'All skin types',
  },
  {
    src: productImage1,
    alt: 'Celestial Glow Brightening Serum',
    category: 'Serum',
    benefits: 'Brightening, barrier strengthening, hydration, texture improvement',
    skinType: 'All skin types, including sensitive',
  },
  {
    src: productImage1,
    alt: 'Lunar Restore Sleeping Mask',
    category: 'Sleeping Mask',
    benefits: 'Deep hydration, overnight repair, Rejuvenating, glow restoration',
    skinType: 'All skin types, including sensitive',
  },
  {
    src: productImage1,
    alt: 'Hydra Boost Moisturizer',
    category: 'Moisturizer',
    benefits: 'Intense hydration, skin barrier repair, long-lasting moisture',
    skinType: 'Dry and combination skin',
  },
  {
    src: productImage1,
    alt: 'Gentle Cleansing Foam',
    category: 'Cleanser',
    benefits: 'Deep cleansing, pore minimizing, gentle exfoliation',
    skinType: 'All skin types',
  },
  {
    src: productImage1,
    alt: 'Vitamin C Eye Cream',
    category: 'Eye Cream',
    benefits: 'Dark circle reduction, firming, brightening',
    skinType: 'All skin types',
  },
]

export const BestProductsList = () => {
  return (
    <section className="overflow-x-hidden py-10">
      <SiteHeading heading="Best Products" />

      <div className="relative w-full bg-[#f5f4f3] py-8">
        <ProductsCarousel products={products} loop={true} />
      </div>
    </section>
  )
}
