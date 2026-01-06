# GLOWMI - AI-Powered Skincare E-Commerce Platform

## Overview

Premium bilingual (EN + AR with RTL) AI-powered skincare e-commerce platform for KSA market. Combines luxury skincare shopping with AI-driven skin analysis and personalized recommendations.

## Implementation Status

**✅ Implemented:**

- Homepage (hero, about, products showcase, contact, footer)
- i18n routing (en/ar), navigation with language toggle
- UI components: button, card, carousel, dropdown-menu, sheet
- Database connection (Drizzle + PostgreSQL), basic user schema

**🔲 To Implement:**

- Shop pages (PLP, PDP), cart, checkout flow
- User authentication and account pages
- AI Skin Analyzer and Chat
- Admin dashboard, API routes, full database schema

## Core Features

### E-Commerce System

- Product catalog (SKU, pricing, images, INCI ingredients)
- Cart with quantity management, taxes, shipping
- Checkout: billing/shipping address, payment method selection
- Payment: KSA-compliant gateway + Cash on Delivery (COD)
- Order lifecycle: Pending → Paid → Processing → Shipped → Delivered
- Order confirmation emails

### AI Features (Phase 1)

- **Skin Analyzer:** Quick Check (basic) + Deep Profile (comprehensive)
- **Chat Assistant:** "Ask Glowmi" conversational advice
- RAG architecture using product/INCI knowledge base
- AM/PM routine generation with ingredient reasoning
- Safe/Avoid ingredient lists, product recommendations (Glowmi SKUs only)

### AI Safety Rules

- Pregnancy warnings (retinoids, strong acids, hydroquinone)
- Ingredient conflict detection (Retinol + AHA/BHA, Vitamin C + Niacinamide timing)
- Sensitive skin handling, strong actives warnings
- Non-medical disclaimer (EN + AR), consent acknowledgment

### Admin Dashboard

- Orders, products, customers management
- AI analytics: usage, skin concerns, geographic trends
- R&D Intelligence: Formulation Radar, Lab Brief generation
- Exportable reports (CSV/PDF)

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

## E-Commerce Flow

```
Browse → Add to Cart → Checkout → Address → Payment → Confirmation → Admin → Fulfillment → Delivery → Tracking → Delivered
```

### Order Statuses

Pending → Payment Pending → Paid → Processing → Shipped → Delivered → Cancelled/Refunded

## Database Tables

### Core

users, sessions, products, categories, orders, order_items, cart, addresses

### AI & Analytics

skin_profiles, ai_inputs, ai_outputs, ai_sessions, formulation_ideas, events

### Compliance

consent_audit, feedback

## Brand Guidelines

- Luxury aesthetic: minimal, high-end typography, generous spacing
- Mobile-first responsive, smooth transitions
- Colors: Dark green (#1a2e1a), cream/beige backgrounds (#f5f4f3, #e8e6e3)
- Fonts: Serif for headings (italic emphasis), sans-serif for body

## Compliance (PDPL)

- Consent logging and audit trails
- Data deletion request workflow
- Data retention: delete after 12-18 months inactivity
- TLS encryption, role-based admin access, audit logging

## Required Disclaimers

**EN:** "Glowmi AI provides educational skincare guidance only and does not diagnose, treat, or prescribe."

**AR:** "يقدم Glowmi AI إرشادات تعليمية للعناية بالبشرة فقط ولا يقوم بالتشخيص أو العلاج أو الوصف الطبي."

## Performance Targets

- Mobile Lighthouse ≥ 85
- Page load < 3s, API response < 5s

## Bilingual Requirements

- All UI text in translation files (no hardcoded strings)
- English (en) default, Arabic (ar) with full RTL
- System messages, email templates, admin dashboard bilingual
