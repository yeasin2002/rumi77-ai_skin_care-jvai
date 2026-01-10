# Modular i18n Structure with next-intl

A guide to splitting translation files into a scalable, maintainable folder structure.

## Why Split Translation Files?

As your app grows, a single `en.json` / `ar.json` file becomes:

- Hard to navigate (1000+ lines)
- Prone to merge conflicts
- Difficult to maintain by feature teams

## Folder Structure

```
src/i18n/
├── locales/
│   ├── en/
│   │   ├── shared.json      # Nav, footer, common UI
│   │   ├── home.json        # Homepage sections
│   │   ├── comingSoon.json  # Coming soon page
│   │   ├── auth.json        # Login, register, etc.
│   │   └── dashboard.json   # User dashboard
│   └── ar/
│       ├── shared.json
│       ├── home.json
│       ├── comingSoon.json
│       ├── auth.json
│       └── dashboard.json
├── request.ts               # Merges all JSON files
└── routing.ts               # Locale configuration
```

## Implementation

### 1. Create Module Files

Each JSON file contains translations for one feature/page:

```json
// src/i18n/locales/en/shared.json
{
  "nav": {
    "button_text": "COMING",
    "navItems": {
      "home": "Home",
      "aboutUs": "About Us"
    }
  }
}
```

```json
// src/i18n/locales/en/home.json
{
  "hero": {
    "title": "A Glow that feels like you",
    "cta": "STAY CONNECTED"
  },
  "about": {
    "title": "About Glowmi",
    "desc": "Premium skincare brand..."
  }
}
```

### 2. Update request.ts

```typescript
// src/i18n/request.ts
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  // Import all module files in parallel
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

### 3. Usage in Components

Server components:

```tsx
import { getTranslations } from 'next-intl/server'

export default async function Hero() {
  const t = await getTranslations('home.hero')
  return <h1>{t('title')}</h1>
}
```

Client components:

```tsx
'use client'
import { useTranslations } from 'next-intl'

export default function NavList() {
  const t = useTranslations('shared.nav')
  return <span>{t('navItems.home')}</span>
}
```

## Adding New Modules

1. Create `en/newFeature.json` and `ar/newFeature.json`
2. Add import to `request.ts`:

```typescript
const [shared, home, comingSoon, newFeature] = await Promise.all([
  import(`./locales/${locale}/shared.json`),
  import(`./locales/${locale}/home.json`),
  import(`./locales/${locale}/comingSoon.json`),
  import(`./locales/${locale}/newFeature.json`), // Add here
])

return {
  locale,
  messages: {
    shared: shared.default,
    home: home.default,
    comingSoon: comingSoon.default,
    newFeature: newFeature.default, // And here
  },
  timeZone: 'Asia/Riyadh',
}
```

3. Use in components: `getTranslations('newFeature.sectionName')`

## Naming Conventions

| Module           | Contains                            |
| ---------------- | ----------------------------------- |
| `shared.json`    | Nav, footer, buttons, common labels |
| `home.json`      | Homepage sections                   |
| `auth.json`      | Login, register, forgot password    |
| `dashboard.json` | User account pages                  |
| `shop.json`      | PLP, PDP, filters                   |
| `checkout.json`  | Cart, checkout flow                 |
| `errors.json`    | Error messages, 404, 500            |

## Tips

- Keep keys consistent between `en/` and `ar/` files
- Use nested objects for related content
- Prefix with section name: `hero.title`, `hero.cta`
- Run TypeScript check after changes to catch missing keys
