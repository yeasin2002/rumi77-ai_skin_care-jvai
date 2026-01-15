'use client'

import productImage from '@/assets/image/serum-drop-product.jpg'
import { Minus, Plus } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const CheckoutItems = () => {
  const t = useTranslations('shared.checkoutItem')

  return (
    <div className="flex items-start gap-4 border-b border-gray-200 py-6">
      {/* Product Image */}
      <div className="relative size-32! shrink-0 overflow-hidden rounded-lg">
        <Image src={productImage} alt={t('productName')} fill className="object-contain p-2" />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="font-caudex text-xl font-bold text-[#58351B]">{t('productName')}</h3>
        <p className="mt-1 text-xl font-semibold text-[#6D5534]">{t('price')}</p>
        <button type="button" className="underline-[#6D5534] mt-2 text-sm text-[#6D5534] underline">
          {t('remove')}
        </button>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2 rounded-md border border-gray-300">
        <button type="button" className="p-2 hover:bg-gray-100">
          <Minus className="text-main-button size-4" />
        </button>
        <span className="text-main-button w-6 text-center text-sm">1</span>
        <button type="button" className="p-2 hover:bg-gray-100">
          <Plus className="text-main-button size-4" />
        </button>
      </div>
    </div>
  )
}
