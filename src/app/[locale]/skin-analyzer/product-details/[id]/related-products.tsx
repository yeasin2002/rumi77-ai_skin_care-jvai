import { SiteHeading } from '@/components/shared'
import { ProductCard } from '@/components/shared/product-cards'
import { products } from '@/data/products.data'

export const RelatedProductsFromProductDetails = () => {
  return (
    <div className="mx-auto mt-8 max-w-5xl px-6">
      <SiteHeading heading="Related Product" />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
