import { Nav } from '@/components/shared/nav'
import { AboutGlowmi } from './about-glowmi'
import { CollectionProduct } from './collection-product'
import { FooterSingle } from './footer-single'
import { GlowmiProductShowcase } from './glowmi-product-showcase'
import { GlowmiStates } from './glowmi-states'
import { Hero } from './hero'
import { HomeBottomCta } from './home-bottom-cta'
import { SkincareShowcase } from './skincare-showcase'
import { TransformationWrapper } from './transformation-wrapper'
import { VisualsResults } from './visuals-results'

export default async function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutGlowmi />
      <CollectionProduct />
      <GlowmiStates />
      <GlowmiProductShowcase />
      <VisualsResults />
      <TransformationWrapper />
      <SkincareShowcase />
      <HomeBottomCta />
      <FooterSingle />
    </>
  )
}
