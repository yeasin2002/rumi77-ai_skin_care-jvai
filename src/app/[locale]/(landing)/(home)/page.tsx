import { AboutGlowmi } from './about-glowmi'
import { BestProductsList } from './best-products'
import { ContactUs } from './contact-us'
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
      <Hero />
      <AboutGlowmi />
      <BestProductsList />
      {/* <CollectionProduct /> */}
      <GlowmiStates />
      <GlowmiProductShowcase />
      <VisualsResults />
      <TransformationWrapper />
      <SkincareShowcase />
      <ContactUs />
      <HomeBottomCta />
    </>
  )
}
