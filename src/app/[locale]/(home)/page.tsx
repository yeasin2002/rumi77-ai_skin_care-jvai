import { Nav } from '@/components/shared/nav'
import { AboutGlowmi } from './about-glowmi'
import { BestProductsList } from './best-products'
import { GlowmiProductShowcase } from './glowmi-product-showcase'
import { GlowmiStates } from './glowmi-states'
import { Hero } from './hero'

export default async function HomePage() {
  return (
    <div>
      <Nav />
      <Hero />
      <AboutGlowmi />
      <BestProductsList />
      <GlowmiStates />
      <GlowmiProductShowcase />
    </div>
  )
}
