# Internationalization (i18n) Implementation Summary

## Overview

This document summarizes the i18n implementation work completed for the Glowmi skincare e-commerce platform, including bilingual support for English (en) and Arabic (ar) with full RTL support.

---

## What Was Implemented

### 1. Translation Files Created

Two main translation files were created in `src/i18n/locales/`:

- **`en.json`** - English translations (default)
- **`ar.json`** - Arabic translations (Saudi Arabian style)

### 2. Translation Structure

```json
{
  "shared": {
    "nav": {
      /* Navigation items */
    }
  },
  "home": {
    "hero": {
      /* Hero section */
    },
    "about": {
      /* About section */
    },
    "collection": {
      /* Collection products */
    },
    "understands": {
      /* How Glowmi understands skin */
    },
    "products_showcase": {
      /* Product showcase */
    },
    "glowmiStates": {
      /* Ingredients/states */
    },
    "transformation": {
      /* Before/after transformation */
    },
    "skincareShowcase": {
      /* Science meets skincare */
    },
    "homeBottomCta": {
      /* Bottom CTA */
    },
    "footer": {
      /* Footer content */
    }
  },
  "comingSoon": {
    /* Coming soon page */
  }
}
```

### 3. Components Updated with i18n Support

| Component                     | Translation Namespace    | Type                 |
| ----------------------------- | ------------------------ | -------------------- |
| `hero.tsx`                    | `home.hero`              | Server               |
| `about-glowmi.tsx`            | `home.about`             | Server               |
| `collection-product.tsx`      | `home.collection`        | Server               |
| `glowmi-states.tsx`           | `home.understands`       | Server               |
| `glowmi-product-showcase.tsx` | `home.products_showcase` | Server               |
| `visuals-results.tsx`         | `home.glowmiStates`      | Server               |
| `transformation.tsx`          | `home.transformation`    | Client (via wrapper) |
| `skincare-showcase.tsx`       | `home.skincareShowcase`  | Server               |
| `home-bottom-cta.tsx`         | `home.homeBottomCta`     | Server               |
| `footer.tsx`                  | `home.footer`            | Server               |
| `footer-single.tsx`           | `home.footer`            | Server               |
| `nav-list.tsx`                | `shared.nav.navItems`    | Server               |
| `coming-soon-content.tsx`     | `comingSoon`             | Client               |

### 4. Client Component Pattern

For client components (like `transformation.tsx`), a wrapper pattern was used:

```
transformation-wrapper.tsx (Server) → transformation.tsx (Client)
```

The server component fetches translations and passes them as props to the client component.

---

## Key Files Modified

### Translation Files

- `src/i18n/locales/en/shared.json` - English shared translations
- `src/i18n/locales/en/home.json` - English homepage translations
- `src/i18n/locales/en/comingSoon.json` - English coming soon translations
- `src/i18n/locales/ar/shared.json` - Arabic shared translations
- `src/i18n/locales/ar/home.json` - Arabic homepage translations
- `src/i18n/locales/ar/comingSoon.json` - Arabic coming soon translations

### Homepage Components

- `src/app/[locale]/(home)/hero.tsx`
- `src/app/[locale]/(home)/about-glowmi.tsx`
- `src/app/[locale]/(home)/collection-product.tsx`
- `src/app/[locale]/(home)/glowmi-states.tsx`
- `src/app/[locale]/(home)/glowmi-product-showcase.tsx`
- `src/app/[locale]/(home)/visuals-results.tsx`
- `src/app/[locale]/(home)/transformation.tsx`
- `src/app/[locale]/(home)/transformation-wrapper.tsx` (new)
- `src/app/[locale]/(home)/skincare-showcase.tsx`
- `src/app/[locale]/(home)/home-bottom-cta.tsx`
- `src/app/[locale]/(home)/footer.tsx`
- `src/app/[locale]/(home)/footer-single.tsx`
- `src/app/[locale]/(home)/page.tsx`

### Shared Components

- `src/components/shared/nav-list.tsx`

### New Pages

- `src/app/[locale]/coming-soon/page.tsx`
- `src/app/[locale]/coming-soon/coming-soon-content.tsx`

### New UI Components

- `src/components/ui/input.tsx`

### Styles

- `src/styles/globals.css` - Added animations for coming soon page

---

## How to Use Translations

### Server Components

```typescript
import { getTranslations } from 'next-intl/server'

export const MyComponent = async () => {
  const t = await getTranslations('home.hero')
  return <h1>{t('title')}</h1>
}
```

### Client Components

```typescript
'use client'
import { useTranslations } from 'next-intl'

export function MyComponent() {
  const t = useTranslations('home.hero')
  return <h1>{t('title')}</h1>
}
```

---

## Modular Translation Structure ✅ IMPLEMENTED

The translations have been split into a modular structure for better maintainability:

### Current Structure

```
src/i18n/locales/
├── en/
│   ├── shared.json      # Navigation items
│   ├── home.json        # All homepage sections
│   └── comingSoon.json  # Coming soon page
├── ar/
│   ├── shared.json      # Navigation items (Arabic)
│   ├── home.json        # All homepage sections (Arabic)
│   └── comingSoon.json  # Coming soon page (Arabic)
```

### Future Expansion

Add new translation files as features are built:

```
src/i18n/locales/{locale}/
├── auth.json      # Authentication pages
├── shop.json      # Shop/PLP/PDP pages
├── checkout.json  # Cart & checkout flow
├── account.json   # User account pages
├── ai.json        # AI features (analyzer, chat)
└── admin.json     # Admin dashboard
```

### request.ts Configuration

```typescript
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  const [shared, home, comingSoon] = await Promise.all([
    import(`./locales/${locale}/shared.json`),
    import(`./locales/${locale}/home.json`),
    import(`./locales/${locale}/comingSoon.json`),
  ])

  return {
    locale,
    messages: {
      shared: shared.default,
      home: home.default,
      comingSoon: comingSoon.default,
    },
    timeZone: 'Asia/Riyadh',
  }
})
```

### Adding New Translation Files

1. Create the JSON file in both `en/` and `ar/` folders
2. Add the import to `request.ts` in the `Promise.all()` array
3. Add the namespace to the `messages` object

---

## Translation Keys Reference

### Shared

- `shared.nav.button_text`
- `shared.nav.navItems.home`
- `shared.nav.navItems.ingredients`
- `shared.nav.navItems.analyzeSkin`
- `shared.nav.navItems.aboutUs`
- `shared.nav.navItems.contactUs`

### Home Page

- `home.hero.title`, `home.hero.cta`
- `home.about.title`, `home.about.desc`
- `home.collection.subtitle`, `home.collection.title`, `home.collection.desc`
- `home.collection.collectionList.serum.title`, etc.
- `home.understands.title`, `home.understands.desc`, `home.understands.cards.*`
- `home.products_showcase.title`, `home.products_showcase.heading`, `home.products_showcase.subheading`
- `home.glowmiStates.title`, `home.glowmiStates.desc`, `home.glowmiStates.states.*`
- `home.transformation.title`, `home.transformation.desc`, `home.transformation.features.*`
- `home.skincareShowcase.title`, `home.skincareShowcase.desc`, `home.skincareShowcase.skincareDetails.*`
- `home.homeBottomCta.title`, `home.homeBottomCta.desc`, `home.homeBottomCta.cta_button_text`
- `home.footer.tagline`, `home.footer.copyright`, `home.footer.nav.*`, `home.footer.legal.*`, `home.footer.contact.*`

### Coming Soon Page

- `comingSoon.title`
- `comingSoon.subtitle`
- `comingSoon.description`
- `comingSoon.emailPlaceholder`
- `comingSoon.notifyButton`
- `comingSoon.successMessage`
- `comingSoon.backHome`

---

## Notes

1. **No hardcoded strings** - All UI text uses translation keys
2. **RTL Support** - Arabic locale automatically applies RTL styling
3. **Server-first approach** - Prefer `getTranslations` for server components
4. **Client component pattern** - Use wrapper components to pass translations as props
5. **Timezone** - Set to `Asia/Riyadh` for KSA market

---

## Next Steps

1. ~~Implement modular translation file structure~~ ✅ Done
2. Add translations for remaining pages (shop, checkout, account, AI, admin)
3. Add error message translations
4. Add form validation message translations
5. Add email template translations
