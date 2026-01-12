import { SiteHeading } from '@/components/shared'
import { caudex, openSans } from '@/lib/fonts'
import { getTranslations } from 'next-intl/server'

export const GlowmiStates = async () => {
  const t = await getTranslations('home.understands')

  const cardsStates = [
    { key: 'scan', title: t('cards.scan.title'), subtitle: t('cards.scan.subtitle') },
    {
      key: 'personalized',
      title: t('cards.personalized.title'),
      subtitle: t('cards.personalized.subtitle'),
    },
    { key: 'results', title: t('cards.results.title'), subtitle: t('cards.results.subtitle') },
  ]

  return (
    <section className="px-8 py-24">
      <SiteHeading heading={t('title')} subHeading={t('desc')} wrapperClassname="py-10" />
      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
        {cardsStates.map((data, index) => (
          <div
            key={data.key}
            className={`font-caudex flex flex-col items-center rounded-2xl bg-white px-6 py-10 text-center shadow-sm lg:py-16`}
          >
            <span className="text-main-button text-5xl font-light">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3 className="text-main-button mt-4 text-3xl font-bold">{data.title}</h3>
            <p className={`text-main-primary-base_medium font-open-sans mt-2 text-base`}>
              {data.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
