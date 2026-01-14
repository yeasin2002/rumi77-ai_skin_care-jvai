import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  const [shared, home, comingSoon, ingredients, aboutUs, auth] = await Promise.all([
    import(`./locales/${locale}/shared.json`),
    import(`./locales/${locale}/home.json`),
    import(`./locales/${locale}/comingSoon.json`),
    import(`./locales/${locale}/ingredients.json`),
    import(`./locales/${locale}/about-us.json`),
    import(`./locales/${locale}/auth.json`),
  ])

  return {
    locale,
    messages: {
      shared: shared.default,
      home: home.default,
      comingSoon: comingSoon.default,
      ingredients: ingredients.default,
      aboutUs: aboutUs.default,
      auth: auth.default,
    },
    timeZone: 'Asia/Riyadh',
  }
})
