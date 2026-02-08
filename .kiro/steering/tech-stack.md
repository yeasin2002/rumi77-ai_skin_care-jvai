# Tech Stack & Project Structure

## Core Stack

| Category        | Technology                                                       |
| --------------- | ---------------------------------------------------------------- |
| Framework       | Next.js 15 (App Router), React 19 (RSC), TypeScript 5.8 (strict) |
| Styling         | Tailwind CSS, shadcn/ui + Radix UI, Lucide icons, Framer Motion  |
| State/Data      | React Query (TanStack Query) for API state management            |
| Auth            | JWT tokens via REST API (stored in httpOnly cookies)             |
| i18n            | next-intl (en/ar with RTL), locale routing                       |
| Testing         | Vitest, Playwright, Testing Library, Storybook                   |
| Quality         | ESLint, Prettier, Knip, Codehawk                                 |
| Package Manager | Bun                                                              |

## API Integration

- REST API for all backend operations
- API client with interceptors for auth tokens
- Environment-based API URL configuration
- Type-safe API response handling with Zod

## Project Structure

```
├── .kiro/steering/     # AI steering docs
├── config/             # App configuration
├── public/             # Static assets
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
│   ├── components/
│   │   ├── ui/         # shadcn/ui ✅
│   │   ├── shared/     # Nav, footer, headings ✅
│   │   ├── shop/, checkout/, ai/, admin/
│   ├── hooks/          # Custom hooks
│   ├── i18n/locales/   # en/, ar/
│   ├── lib/
│   │   ├── api/        # API client, endpoints
│   │   └── utils.ts    # Utilities
│   ├── styles/         # Global CSS
│   ├── types/          # TypeScript types (API responses, models)
│   ├── utils/          # Helpers
│   ├── validations/    # Zod schemas for API responses
│   ├── env.ts          # Env validation
│   └── middleware.ts   # Auth & locale middleware
```

## Conventions

### Files & Imports

- kebab-case files, PascalCase components
- `.tsx` for components, `.ts` for utilities
- `@/*` → `src/*`

### Components

- UI: `src/components/ui/` (shadcn)
- Shared: `src/components/shared/`
- Feature-specific in dedicated folders

### API Integration

- API client in `src/lib/api/`
- Type definitions in `src/types/`
- Zod validation for API responses
- React Query for server state

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


### Quality

```bash
npm run lint          # ESLint
npm run lint:fix      # Fix lint issues
npm run format        # Prettier format
npm run knip          # Unused code check
```



## API Integration Patterns

### Query List Files (`src/api/query-list/`)

- Define TypeScript interfaces for API responses
- Create API functions using axiosClient
- Export interfaces and API object

### API Hooks (`src/api/api-hooks/`)

- Use TanStack Query's `useQuery` for GET requests
- Use TanStack Query's `useMutation` for POST/PUT/PATCH/DELETE
- Implement query keys for caching
- Handle success/error with react-hot-toast notifications
- Invalidate related queries on mutations

### Form Handling

- Use React Hook Form with Zod resolver
- Define validation schemas in `src/validations/`
- Use FormInput component for consistent form fields
- Handle loading states during form submission