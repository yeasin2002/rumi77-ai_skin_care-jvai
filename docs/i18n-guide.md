# Internationalization (i18n) Guide with next-intl

A comprehensive guide for implementing multilingual support in Next.js 15 App Router projects using next-intl.

---

## Overview

This project uses **next-intl** for internationalization with:
- Modular translation files (split by feature/page)
- Support for English (en), Arabic (ar) with RTL, and French (fr)
- Server-first approach with client component support
- Dynamic locale routing via `[locale]` segment

---

## Folder Structure

```
src/i18n/
├── locales/
│   ├── en/
│   │   ├── shared.json      # Nav, footer, common UI
│   │   ├── home.json        # Homepage sections
│   │   └── comingSoon.json  # Coming soon page
│   ├── ar/
│   │   ├── shared.json
│   │   ├── home.json
│   │   └── comingSoon.json
│   └── fr/
│       ├── shared.json
│       ├── home.json
│       └── comingSoon.json
├── navigation.ts            # Locale-aware navigation helpers
├── request.ts               # Merges all JSON files
└── routing.ts               # Locale configuration
```

---

## Core Configuration

### 1. routing.ts

Defines available locales and default:

```typescript
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'ar', 'fr'],
  defaultLocale: 'en',
})
```

### 2. request.ts

Loads and merges translation files:

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

### 3. navigation.ts

Locale-aware navigation utilities:

```typescript
import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
```

---

## Translation File Structure

### shared.json (Common UI)

```json
{
  "nav": {
    "button_text": "COMING",
    "navItems": {
      "home": "Home",
      "ingredients": "Ingredients",
      "analyzeSkin": "Analyze Skin",
      "aboutUs": "About Us",
      "contactUs": "Contact Us"
    }
  }
}
```

### home.json (Page-specific)

```json
{
  "hero": {
    "title": "A Glow that feels like you",
    "cta": "STAY CONNECTED"
  },
  "about": {
    "title": "About Glowmi",
    "desc": "Premium skincare brand..."
  },
  "footer": {
    "tagline": "The Essence of Timeless Glow",
    "copyright": "Glowmi. All rights reserved."
  }
}
```

---

## Usage in Components

### Server Components (Recommended)

```typescript
import { getTranslations } from 'next-intl/server'

export default async function Hero() {
  const t = await getTranslations('home.hero')
  
  return (
    <section>
      <h1>{t('title')}</h1>
      <button>{t('cta')}</button>
    </section>
  )
}
```

### Client Components

```typescript
'use client'
import { useTranslations } from 'next-intl'

export default function NavList() {
  const t = useTranslations('shared.nav')
  
  return (
    <nav>
      <span>{t('navItems.home')}</span>
      <span>{t('navItems.aboutUs')}</span>
    </nav>
  )
}
```

### Client Components with Server Data (Wrapper Pattern)

When client components need translations but `useTranslations` doesn't work properly:

```typescript
// transformation-wrapper.tsx (Server)
import { getTranslations } from 'next-intl/server'
import { Transformation } from './transformation'

export async function TransformationWrapper() {
  const t = await getTranslations('home.transformation')
  
  return (
    <Transformation
      title={t('title')}
      description={t('desc')}
      features={{
        before: {
          skinRoughness: {
            title: t('features.before.skinRoughness.title'),
            description: t('features.before.skinRoughness.description'),
          },
        },
      }}
    />
  )
}
```

```typescript
// transformation.tsx (Client)
'use client'

type Props = {
  title: string
  description: string
  features: { /* ... */ }
}

export function Transformation({ title, description, features }: Props) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  )
}
```

---

## Adding New Languages

### 1. Create Translation Files

Create folder `src/i18n/locales/{locale}/` with all required JSON files:

```
src/i18n/locales/fr/
├── shared.json
├── home.json
└── comingSoon.json
```

### 2. Update routing.ts

```typescript
export const routing = defineRouting({
  locales: ['en', 'ar', 'fr'],  // Add new locale
  defaultLocale: 'en',
})
```

### 3. Update Language Toggle

```typescript
const localeNames: Record<string, string> = {
  en: 'English',
  ar: 'العربية',
  fr: 'Français',  // Add display name
}
```

---

## Adding New Translation Modules

### 1. Create JSON Files

Create in all locale folders:

```json
// src/i18n/locales/en/shop.json
{
  "title": "Shop",
  "filters": {
    "category": "Category",
    "price": "Price"
  },
  "product": {
    "addToCart": "Add to Cart",
    "viewDetails": "View Details"
  }
}
```

### 2. Update request.ts

```typescript
const [shared, home, comingSoon, shop] = await Promise.all([
  import(`./locales/${locale}/shared.json`),
  import(`./locales/${locale}/home.json`),
  import(`./locales/${locale}/comingSoon.json`),
  import(`./locales/${locale}/shop.json`),  // Add import
])

return {
  locale,
  messages: {
    shared: shared.default,
    home: home.default,
    comingSoon: comingSoon.default,
    shop: shop.default,  // Add to messages
  },
  timeZone: 'Asia/Riyadh',
}
```

### 3. Use in Components

```typescript
const t = await getTranslations('shop.product')
return <button>{t('addToCart')}</button>
```

---

## Language Toggle Component

```typescript
'use client'

import { Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { useLocale } from 'next-intl'

const localeNames: Record<string, string> = {
  en: 'English',
  ar: 'العربية',
  fr: 'Français',
}

export function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Globe className="size-10 p-2" />
        <span className="sr-only">Toggle language</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={locale === loc ? 'bg-accent' : ''}
          >
            {localeNames[loc]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

---

## RTL Support (Arabic)

RTL is handled automatically by next-intl. Ensure your layout applies the `dir` attribute:

```typescript
// src/app/[locale]/layout.tsx
import { getLocale } from 'next-intl/server'

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir}>
      <body>{children}</body>
    </html>
  )
}
```

---

## Module Naming Conventions

| Module           | Contains                            |
| ---------------- | ----------------------------------- |
| `shared.json`    | Nav, footer, buttons, common labels |
| `home.json`      | Homepage sections                   |
| `auth.json`      | Login, register, forgot password    |
| `account.json`   | User account pages                  |
| `shop.json`      | PLP, PDP, filters                   |
| `checkout.json`  | Cart, checkout flow                 |
| `ai.json`        | AI features (analyzer, chat)        |
| `admin.json`     | Admin dashboard                     |
| `errors.json`    | Error messages, 404, 500            |

---

## Best Practices

1. **No hardcoded strings** - All UI text must use translation keys
2. **Server-first** - Prefer `getTranslations` for server components
3. **Consistent keys** - Keep same key structure across all locale files
4. **Nested objects** - Group related translations: `hero.title`, `hero.cta`
5. **Wrapper pattern** - Use for client components with complex translations
6. **Type safety** - TypeScript will catch missing translation keys

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
- `home.collection.collectionList.{product}.title`
- `home.understands.title`, `home.understands.cards.{card}.title`
- `home.products_showcase.title`, `home.products_showcase.heading`
- `home.glowmiStates.title`, `home.glowmiStates.states.{ingredient}.title`
- `home.transformation.title`, `home.transformation.features.{state}.title`
- `home.skincareShowcase.title`, `home.skincareShowcase.skincareDetails.{item}.title`
- `home.homeBottomCta.title`, `home.homeBottomCta.cta_button_text`
- `home.footer.tagline`, `home.footer.copyright`

### Coming Soon
- `comingSoon.title`
- `comingSoon.subtitle`
- `comingSoon.description`
- `comingSoon.emailPlaceholder`
- `comingSoon.notifyButton`
- `comingSoon.successMessage`
- `comingSoon.backHome`

---

## Troubleshooting

### Translation shows key instead of value
- Check if the key exists in all locale JSON files
- Verify the namespace path is correct
- For client components, try the wrapper pattern

### RTL not applying
- Ensure `dir` attribute is set on `<html>` element
- Check locale detection in layout

### New locale not working
- Add to `routing.ts` locales array
- Create all required JSON files in new locale folder
- Restart dev server after changes

---

## Quick Setup Checklist

- [ ] Install: `bun add next-intl`
- [ ] Create `src/i18n/routing.ts`
- [ ] Create `src/i18n/request.ts`
- [ ] Create `src/i18n/navigation.ts`
- [ ] Create locale folders with JSON files
- [ ] Add `[locale]` dynamic segment to app routes
- [ ] Configure layout with `lang` and `dir` attributes
- [ ] Add language toggle component
