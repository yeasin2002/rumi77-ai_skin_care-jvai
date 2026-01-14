import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  const [shared, home, comingSoon, ingredients] = await Promise.all([
    import(`./locales/${locale}/shared.json`),
    import(`./locales/${locale}/home.json`),
    import(`./locales/${locale}/comingSoon.json`),
    import(`./locales/${locale}/ingredients.json`),
  ])

  return {
    locale,
    messages: {
      shared: shared.default,
      home: home.default,
      comingSoon: comingSoon.default,
      ingredients: ingredients.default,
    },
    timeZone: 'Asia/Riyadh',
  }
})
