import { Nav } from '@/components/shared/nav'
import { getTranslations } from 'next-intl/server'

export default async function HomePage() {
  const t = await getTranslations('hero')
  console.log('page: title', t('title'))

  return (
    <div>
      <Nav />
      <div className="bg-background min-h-screen">Hello</div>
    </div>
  )
}
