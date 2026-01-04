import { getTranslations } from 'next-intl/server'

import { Nav } from '@/components/shared/nav'
import { Hero } from './hero'

export default async function HomePage() {
  const t = await getTranslations('hero')
  console.log('page: title', t('title'))

  return (
    <div>
      <Nav />
      <Hero />
    </div>
  )
}
