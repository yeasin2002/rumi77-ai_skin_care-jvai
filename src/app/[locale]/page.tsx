import { getTranslations } from 'next-intl/server'

export default async function HomePage() {
  const t = await getTranslations('hero')
  console.log('page: title', t('title'))

  return <div className="bg-background h-screen w-screen">Hello</div>
}
