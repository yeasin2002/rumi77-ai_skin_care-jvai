import { Nav } from '@/components/shared/nav'
import { AboutGlowmi } from './about-glowmi'
import { Hero } from './hero'

export default async function HomePage() {
  // const t = await getTranslations('hero')

  return (
    <div>
      <Nav />
      <Hero />
      <AboutGlowmi />
    </div>
  )
}
