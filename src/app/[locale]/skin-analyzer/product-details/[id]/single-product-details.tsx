import productImage from '@/assets/image/serum-drop-product.jpg'
import { Button } from '@/components/ui'
import { Plus, ShoppingBag } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

const SingleProductDetails = async () => {
  const t = await getTranslations('productDetails')

  return (
    <div className="bg-background min-h-screen px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left - Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image src={productImage} alt={t('productName')} fill className="object-contain p-8" />
        </div>

        {/* Right - Product Details */}
        <div>
          {/* Title */}
          <h1 className="text-main-button text-4xl font-normal">{t('productName')}</h1>
          <p className="text-main-button/70 mt-1 text-sm">{t('subtitle')}</p>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-main-button text-2xl font-medium">{t('price')}</span>
            <span className="text-sm text-gray-400 line-through">{t('oldPrice')}</span>
            <span className="text-main-button/60 text-sm">{t('volume')}</span>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="mt-6 flex items-center gap-3">
            <div className="bg-main-button flex items-center gap-4 rounded-md px-4 py-2 text-white">
              <span>1</span>
              <Plus className="size-4" />
            </div>
            <Button
              variant="outline"
              className="border-main-button text-main-button flex items-center gap-2 rounded-md px-6 py-2"
            >
              {t('addToCart')}
              <ShoppingBag className="size-4" />
            </Button>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="font-open-sans text-main-button text-lg font-semibold">
              {t('description.title')}
            </h3>
            <p className="text-main-button/80 mt-2 text-sm leading-relaxed">
              {t('description.paragraph1')}
            </p>
            <p className="text-main-button/80 mt-4 text-sm leading-relaxed">
              {t('description.paragraph2')}
            </p>
          </div>

          {/* Skin Type */}
          <div className="mt-8">
            <h3 className="font-open-sans text-main-button text-lg font-semibold italic">
              {t('skinType.title')}
            </h3>
            <p className="text-main-button/80 mt-2 text-sm">{t('skinType.value')}</p>
          </div>

          {/* Key Ingredients */}
          <div className="mt-8">
            <h3 className="font-open-sans text-main-button text-lg font-semibold italic">
              {t('keyIngredients.title')}
            </h3>
            <p className="text-main-button/80 mt-2 text-sm">{t('keyIngredients.value')}</p>
          </div>

          {/* Key Benefits */}
          <div className="mt-8">
            <h3 className="font-open-sans text-main-button text-lg font-semibold italic">
              {t('keyBenefits.title')}
            </h3>
            <p className="text-main-button/80 mt-2 text-sm">{t('keyBenefits.value')}</p>
          </div>

          {/* How to Use */}
          <div className="mt-8">
            <h3 className="font-open-sans text-main-button text-lg font-semibold italic">
              {t('howToUse.title')}
            </h3>
            <p className="text-main-button/80 mt-2 text-sm">{t('howToUse.value')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductDetails
