# GLOWMI - AI-Powered Skincare E-Commerce (Frontend)

Premium bilingual (EN + AR with RTL) frontend for AI-powered skincare e-commerce platform targeting KSA market.

## ✨ Features

### 🏗️ Core Framework

- ⚡ **Next.js 15** with App Router & Server Components
- 🔷 **TypeScript 5.8** with strict configuration
- ⚛️ **React 19** with latest features

### 🎨 UI & Styling

- 🎯 **Tailwind CSS** with custom design system
- 🧩 **shadcn/ui** components with Radix UI primitives
- 🌙 **Dark mode** support with next-themes
- 🎭 **Lucide React** icons
- 🎬 **Framer Motion** for animations

### 🌍 Internationalization

- 🗣️ **next-intl** for i18n support
- 🌐 **Bilingual:** English (en) + Arabic (ar) with full RTL
- 🔄 **Locale routing** and translations

### 🔗 API Integration

- 🔌 **REST API** integration with backend service
- � **JWiT authentication** via httpOnly cookies
- 📦 **React Query** for server state management
- ✅ **Zod** for API response validation

### 🧪 Testing Suite

- ⚡ **Vitest** for unit testing
- 🎭 **Playwright** for E2E testing
- 🧪 **Testing Library** for React components
- � **Storybook** for component development

### 🔧 Development Tools

- 🎯 **ESLint** with Next.js & TypeScript configs
- 💅 **Prettier** with Tailwind plugin
- 🔍 **Knip** for unused code detection
- 🦅 **Codehawk** for code analysis

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Backend API service running

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd glowmi-frontend

# Install dependencies
bun install
# or
npm install

# Copy environment variables
cp .env.example .env

# Configure API URL in .env
# NEXT_PUBLIC_API_URL=http://localhost:8000

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # TypeScript type checking
npm run clean        # Clean build artifacts
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

### Storybook

```bash
npm run storybook       # Start Storybook dev server
npm run build-storybook # Build Storybook
```

## 📁 Project Structure

```
├── .kiro/steering/     # AI steering docs
├── config/             # App configuration
├── public/             # Static assets
├── src/
│   ├── app/
│   │   └── [locale]/       # i18n routes
│   │       ├── (home)/     # Homepage ✅
│   │       ├── (shop)/     # Shop, PLP, PDP
│   │       ├── (checkout)/ # Cart, checkout
│   │       ├── (account)/  # User account
│   │       ├── (ai)/       # AI features
│   │       ├── (pages)/    # Static pages
│   │       └── (admin)/    # Admin dashboard
│   ├── components/
│   │   ├── ui/         # shadcn/ui components
│   │   └── shared/     # Nav, footer, headings
│   ├── hooks/          # Custom React hooks
│   ├── i18n/locales/   # en/, ar/ translations
│   ├── lib/            # Utilities, API client
│   ├── styles/         # Global CSS
│   ├── types/          # TypeScript definitions
│   ├── utils/          # Helper functions
│   └── validations/    # Zod schemas
└── tests/              # E2E tests
```

## 🔧 Environment Variables

```env
NEXT_PUBLIC_API_URL=    # Backend API base URL
NEXT_PUBLIC_APP_URL=    # Frontend app URL
```

## 🎨 Brand Guidelines

- Luxury aesthetic: minimal, high-end typography, generous spacing
- Mobile-first responsive design
- Colors: Dark green (#1a2e1a), cream/beige backgrounds (#f5f4f3, #e8e6e3)
- Fonts: Serif for headings, sans-serif for body

## 📱 Implementation Status

**✅ Implemented:**

- Homepage (hero, about, products showcase, contact, footer)
- i18n routing (en/ar), navigation with language toggle
- UI components: button, card, carousel, dropdown-menu, sheet

**🔲 To Implement:**

- Shop pages (PLP, PDP), cart, checkout flow
- User authentication UI and account pages
- AI Skin Analyzer and Chat UI
- Admin dashboard UI
- API integration layer

## 🚀 Deployment

### Vercel Deployment

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 📄 License

This project is licensed under the MIT License.
