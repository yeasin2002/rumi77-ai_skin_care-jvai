import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'ar', 'fr'],
  defaultLocale: 'en',
})

export const localeNames: Record<string, string> = {
  en: 'English',
  ar: 'العربية',
  // fr: 'Français',
}
