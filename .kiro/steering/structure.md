# Project Structure & Organization

## Root Directory Structure

```
├── .kiro/              # Kiro AI assistant configuration
├── .storybook/         # Storybook configuration
├── config/             # Application configuration files
├── public/             # Static assets (images, icons, videos)
├── src/                # Source code (main application)
├── tests/              # Test files (E2E and integration)
├── scripts/            # Build and deployment scripts
└── drizzle/            # Database migrations
```

## Source Directory (`src/`)

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/           # Internationalized routes (en/ar)
│   │   ├── (home)/         # Homepage and landing sections
│   │   ├── (shop)/         # Shop, collections, product pages
│   │   ├── (checkout)/     # Cart, checkout, order confirmation
│   │   ├── (account)/      # User account, orders, addresses
│   │   ├── (ai)/           # AI Analyzer, Chat, Results pages
│   │   ├── (pages)/        # Static pages (about, contact, FAQ, privacy, terms)
│   │   └── (admin)/        # Admin dashboard (protected)
│   └── api/                # API routes
│       ├── auth/           # Authentication endpoints
│       ├── products/       # Product catalog API
│       ├── orders/         # Order management API
│       ├── cart/           # Cart operations API
│       ├── ai/             # AI analysis & chat API
│       └── admin/          # Admin-only endpoints
├── components/
│   ├── ui/                 # shadcn/ui base components
│   ├── shared/             # Shared components (nav, footer, headings)
│   ├── shop/               # Shop-specific components
│   ├── checkout/           # Checkout flow components
│   ├── ai/                 # AI feature components
│   └── admin/              # Admin dashboard components
├── db/
│   └── schema/             # Drizzle ORM schemas
│       ├── users.ts        # Users & authentication
│       ├── products.ts     # Product catalog
│       ├── orders.ts       # Orders & order items
│       ├── cart.ts         # Shopping cart
│       ├── addresses.ts    # User addresses
│       ├── ai-sessions.ts  # AI analysis sessions
│       ├── ai-inputs.ts    # AI input logging
│       ├── ai-outputs.ts   # AI output logging
│       └── consent-audit.ts # PDPL consent tracking
├── hooks/                  # Custom React hooks
├── i18n/
│   ├── locales/
│   │   ├── en/             # English translations
│   │   └── ar/             # Arabic translations
│   └── routing.ts          # Locale routing config
├── lib/
│   ├── ai/                 # AI utilities (RAG, safety rules)
│   ├── payment/            # Payment gateway integration
│   └── logistics/          # Delivery/logistics helpers
├── styles/                 # Global CSS and Tailwind config
├── types/                  # TypeScript type definitions
├── utils/                  # Helper functions
├── validations/            # Zod validation schemas
├── env.ts                  # Environment variable validation
└── middleware.ts           # Auth & locale middleware
```

## Key Conventions

### File Naming
- Use kebab-case for files and directories
- React components use PascalCase for component name
- Use `.tsx` for React components, `.ts` for utilities
- Test files use `.test.ts` or `.test.tsx` suffix

### Import Aliases
- `@/*` maps to `src/*` for internal imports
- `#/*` maps to project root for config files
- Use absolute imports with aliases

### Component Organization
- UI components in `src/components/ui/` (shadcn/ui)
- Shared components in `src/components/shared/`
- Feature-specific components in dedicated folders
- Export components as named exports

### Database Schema
- Schema files in `src/db/schema/`
- Use Drizzle ORM conventions
- Migrations in `./drizzle/` directory
- Required tables: users, products, orders, order_items, cart, addresses, ai_sessions, consent_audit

### API Routes
- API routes in `src/app/api/`
- Follow RESTful conventions
- Use route handlers for HTTP methods
- Validate request data with Zod schemas

### Internationalization
- Locale files in `src/i18n/locales/{en,ar}/`
- Full RTL support for Arabic
- All UI text must be translatable (no hardcoded strings)
- Use `[locale]` dynamic route segment

### Styling
- Global styles in `src/styles/globals.css`
- Use Tailwind CSS classes
- CSS variables for theming (HSL format)
- Brand colors: main-button (dark green), main-primary-base_medium

### Security
- JWT authentication via better-auth
- Role-based access control for admin
- Consent logging for PDPL compliance
- No secrets in code (use environment variables)
