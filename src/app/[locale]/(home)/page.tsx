import { Nav } from '@/components/shared/nav'
import { AboutGlowmi } from './about-glowmi'
import { BestProductsList } from './best-products'
import { CollectionProduct } from './collection-product'
import { ContactUs } from './contact-us'
import { Footer } from './footer'
import { FooterSingle } from './footer-single'
import { GlowmiProductShowcase } from './glowmi-product-showcase'
import { GlowmiStates } from './glowmi-states'
import { Hero } from './hero'
import { HomeBottomCta } from './home-bottom-cta'
import { SkincareShowcase } from './skincare-showcase'
import { Transformation } from './transformation'
import { VisualsResults } from './visuals-results'

export default async function HomePage() {
  return (
    <div>
      <Nav />
      <Hero />
      <AboutGlowmi />

      {/* <BestProductsList /> */}
      <CollectionProduct />

      <GlowmiStates />
      <GlowmiProductShowcase />
      <VisualsResults />
      {/* <Transformation /> */}
      <SkincareShowcase />
      {/* <ContactUs /> */}
      <HomeBottomCta />

      {/* <Footer /> */}
      <FooterSingle />
    </div>
  )
}
