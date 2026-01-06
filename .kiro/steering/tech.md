# Tech Stack & Build System

## Core Framework

- **Next.js 15** with App Router and TypeScript
- **React 19** with Server Components (RSC)
- **TypeScript 5.8** with strict mode enabled

## UI & Styling

- **Tailwind CSS** with custom design system
- **shadcn/ui** components with Radix UI primitives
- **Lucide React** for icons
- **next-themes** for dark mode support
- **Framer Motion** for animations
- CSS variables for theming with HSL color system
- Custom fonts: Caudex (serif headings), Open Sans (body)

## Database & ORM

- **Drizzle ORM** with PostgreSQL dialect
- Multiple database provider support (Neon, PlanetScale, Turso, Xata, etc.)
- Database migrations via `drizzle-kit`

## Authentication

- **better-auth** for user authentication and management
- JWT-based session handling
- Role-based access control (customer, admin)

## Internationalization

- **next-intl** for i18n support with locale routing
- Bilingual: English (en) + Arabic (ar)
- Full RTL support for Arabic pages/components
- All UI text externalized to translation files

## Payment Integration

- KSA-compliant payment gateway (credentials provided by client)
- Cash on Delivery (COD) support (toggleable)
- Payment status handling (Paid/Unpaid/Failed/Refunded)

## AI Integration

- OpenAI API for skin analysis and chat
- RAG architecture for product/INCI knowledge base
- Rule-based safety engine for ingredient warnings
- AI input/output logging for analytics

## Testing

- **Vitest** for unit testing with jsdom environment
- **Playwright** for E2E testing
- **Testing Library** for React component testing
- **Storybook** for component development and testing

## Code Quality

- **ESLint** with Next.js, TypeScript, and Prettier configs
- **Prettier** with Tailwind plugin for code formatting
- **TypeScript** strict mode with path aliases (`@/*` for src)

## Development Tools

- **Bun** as package manager (bun.lock present)
- **Docker** with multi-stage builds for development and production
- **Bundle Analyzer** for build analysis
- **Knip** for unused code detection
- **Codehawk** for code analysis

## Security Requirements

- TLS encryption in transit
- Secure file upload handling
- No exposed secrets or API keys in code
- PDPL-aligned consent logging
- Audit logging for admin actions

## Performance Targets

- Mobile Lighthouse ≥ 85
- Page load < 3 seconds
- API response < 5 seconds average

## Common Commands

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # TypeScript type checking
```

### Database

```bash
npm run db:generate  # Generate database migrations
npm run db:migrate   # Apply database migrations
npm run db:studio    # Open Drizzle Studio
npm run db:seed      # Seed database
```

### Testing

```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
npm run test:e2e     # Run E2E tests
npm run test:e2e:ui  # Run E2E tests with UI
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run knip         # Check for unused code
```

### Docker

```bash
npm run docker:build # Build Docker image
npm run docker:dev   # Run development container
npm run docker:prod  # Run production container
npm run docker:test  # Run test container
```

### Storybook

```bash
npm run storybook       # Start Storybook dev server
npm run build-storybook # Build Storybook
```
