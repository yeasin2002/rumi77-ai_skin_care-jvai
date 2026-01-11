import { RelatedProductsFromProductDetails } from './related-products'
import SingleProductDetails from './single-product-details'

const ProductDetailsPage = () => {
  return (
    <>
      <SingleProductDetails />
      <RelatedProductsFromProductDetails />
    </>
  )
}

export default ProductDetailsPage
