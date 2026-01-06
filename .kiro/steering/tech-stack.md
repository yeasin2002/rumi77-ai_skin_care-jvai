# Tech Stack & Project Structure

## Core Stack

| Category        | Technology                                                       |
| --------------- | ---------------------------------------------------------------- |
| Framework       | Next.js 15 (App Router), React 19 (RSC), TypeScript 5.8 (strict) |
| Styling         | Tailwind CSS, shadcn/ui + Radix UI, Lucide icons, Framer Motion  |
| Database        | Drizzle ORM + PostgreSQL (Neon/PlanetScale/Turso support)        |
| Auth            | better-auth (JWT, role-based: customer/admin)                    |
| i18n            | next-intl (en/ar with RTL), locale routing                       |
| Payment         | KSA-compliant gateway + COD                                      |
| AI              | OpenAI API (GPT-4), RAG architecture                             |
| Testing         | Vitest, Playwright, Testing Library, Storybook                   |
| Quality         | ESLint, Prettier, Knip, Codehawk                                 |
| Package Manager | Bun                                                              |

## Project Structure

```
├── .kiro/steering/     # AI steering docs
├── config/             # App configuration
├── public/             # Static assets
├── drizzle/            # DB migrations
├── scripts/            # Build scripts
├── src/
│   ├── app/
│   │   ├── [locale]/           # i18n routes
│   │   │   ├── (home)/         # Homepage ✅
│   │   │   ├── (shop)/         # Shop, PLP, PDP
│   │   │   ├── (checkout)/     # Cart, checkout
│   │   │   ├── (account)/      # User account
│   │   │   ├── (ai)/           # AI features
│   │   │   ├── (pages)/        # Static pages
│   │   │   └── (admin)/        # Admin dashboard
│   │   └── api/                # API routes
│   │       ├── auth/, products/, orders/, cart/
│   │       ├── ai/ (analyze, chat, history)
│   │       ├── admin/ (orders, products, customers, analytics, rd)
│   │       └── webhooks/
│   ├── components/
│   │   ├── ui/         # shadcn/ui ✅
│   │   ├── shared/     # Nav, footer, headings ✅
│   │   ├── shop/, checkout/, ai/, admin/
│   ├── db/schema/      # Drizzle schemas
│   ├── hooks/          # Custom hooks
│   ├── i18n/locales/   # en/, ar/
│   ├── lib/            # Utilities, AI helpers
│   ├── styles/         # Global CSS
│   ├── types/          # TypeScript types
│   ├── utils/          # Helpers
│   ├── validations/    # Zod schemas
│   ├── env.ts          # Env validation
│   └── middleware.ts   # Auth & locale
```

## Conventions

### Files & Imports

- kebab-case files, PascalCase components
- `.tsx` for components, `.ts` for utilities
- `@/*` → `src/*`, `#/*` → project root

### Components

- UI: `src/components/ui/` (shadcn)
- Shared: `src/components/shared/`
- Feature-specific in dedicated folders

### Database

- Schemas in `src/db/schema/`
- Migrations in `./drizzle/`
- Drizzle ORM conventions

### API

- Routes in `src/app/api/`
- RESTful conventions
- Zod validation

### i18n

- Locales in `src/i18n/locales/{en,ar}/`
- Full RTL for Arabic
- No hardcoded strings

### Styling

- Tailwind CSS classes
- CSS variables (HSL) for theming
- Brand: main-button (dark green)

## Commands

### Development

```bash
npm run dev           # Dev server
npm run build         # Production build
npm run start         # Production server
npm run type-check    # TypeScript check
```

### Database

```bash
npm run db:generate   # Generate migrations
npm run db:migrate    # Apply migrations
npm run db:studio     # Drizzle Studio
npm run db:seed       # Seed data
```

### Testing

```bash
npm run test          # Unit tests
npm run test:coverage # With coverage
npm run test:e2e      # E2E tests
npm run test:e2e:ui   # E2E with UI
```

### Quality

```bash
npm run lint          # ESLint
npm run lint:fix      # Fix lint issues
npm run format        # Prettier format
npm run knip          # Unused code check
```

### Storybook

```bash
npm run storybook       # Dev server
npm run build-storybook # Build
```

## Security

- No secrets in code (use env vars)
- TLS encryption, PDPL consent logging
- Role-based access, audit logging
