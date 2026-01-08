# GLOWMI - AI-Powered Skincare E-Commerce (Frontend)

## Overview

Premium bilingual (EN + AR with RTL) frontend for AI-powered skincare e-commerce platform targeting KSA market. Connects to backend via REST API.

## Architecture

- **This repo:** Frontend only (Next.js)
- **Backend:** Separate repo/service (REST API)
- **Communication:** REST API with JWT authentication

## Implementation Status

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

## Core Features

### E-Commerce UI

- Product listing and detail pages
- Cart management interface
- Checkout flow (address forms, payment selection)
- Order confirmation and history views

### AI Features UI

- **Skin Analyzer:** Quick Check + Deep Profile forms
- **Chat Assistant:** "Ask Glowmi" chat interface
- Results display with routine recommendations
- Consent modal and disclaimer display

### Admin Dashboard UI

- Orders, products, customers list views
- Analytics dashboards
- R&D Intelligence views

## Website Pages

### Public

- Homepage ✅, About, Contact, Privacy Policy, Terms, FAQ

### Shop

- Collection/Shop pages (PLP), Product Detail (PDP)
- Cart, Checkout, Order confirmation

### User Account

- Dashboard, Order history, Addresses, Profile settings

### AI

- Skin Analyzer (Quick/Deep), Chat Assistant, Results & Saved Routines

### Admin (Protected)

- Orders, Products, Customers, Analytics, R&D

## E-Commerce Flow (Frontend)

```
Browse → Add to Cart → Checkout → Address Form → Payment Selection → Confirmation → Order History
```

## API Integration Points

| Feature  | API Calls                              |
| -------- | -------------------------------------- |
| Auth     | Login, Register, Logout, Refresh token |
| Products | List, Detail, Search, Filter           |
| Cart     | Get, Add, Update, Remove items         |
| Checkout | Create order, Payment intent           |
| Orders   | List, Detail, Track                    |
| AI       | Analyze skin, Chat, Get history        |
| User     | Profile, Addresses, Preferences        |
| Admin    | Orders, Products, Customers, Analytics |

## Brand Guidelines

- Luxury aesthetic: minimal, high-end typography, generous spacing
- Mobile-first responsive, smooth transitions
- Colors: Dark green (#1a2e1a), cream/beige backgrounds (#f5f4f3, #e8e6e3)
- Fonts: Serif for headings (italic emphasis), sans-serif for body

## Required UI Elements

### Consent & Compliance

- PDPL consent modal before AI features
- Cookie consent banner
- Data deletion request UI in profile

### Disclaimers

**EN:** "Glowmi AI provides educational skincare guidance only and does not diagnose, treat, or prescribe."

**AR:** "يقدم Glowmi AI إرشادات تعليمية للعناية بالبشرة فقط ولا يقوم بالتشخيص أو العلاج أو الوصف الطبي."

## Performance Targets

- Mobile Lighthouse ≥ 85
- Page load < 3s

## Bilingual Requirements

- All UI text in translation files (no hardcoded strings)
- English (en) default, Arabic (ar) with full RTL
- All pages, forms, and messages bilingual
