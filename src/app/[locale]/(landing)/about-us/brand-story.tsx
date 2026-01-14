import { getTranslations } from 'next-intl/server'

export const BrandStory = async () => {
  const t = await getTranslations('aboutUs.brandStory')

  return (
    <section className="bg-[#e8e6e3] px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-caudex text-main-button mb-6 text-5xl leading-none font-normal tracking-normal">
          {t('title')}
        </h2>

        <p className="font-open-sans text-main-button text-justify text-xl leading-[137%]">
          {t('description')}
        </p>
      </div>
    </section>
  )
}
