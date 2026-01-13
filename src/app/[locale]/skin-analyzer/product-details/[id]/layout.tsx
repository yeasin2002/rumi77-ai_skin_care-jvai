import { Nav } from '@/components/shared'
import React from 'react'
import { Footer } from '../../../../../components/shared/footer'

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer className="mt-20! px-20!" />
    </>
  )
}

export default ProductDetailsLayout
