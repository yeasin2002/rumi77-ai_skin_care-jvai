# GLOWMI - AI-Powered Skincare E-Commerce Platform

## Product Overview

GLOWMI is a premium, bilingual (English + Arabic with RTL support) AI-powered skincare e-commerce platform. The platform combines luxury skincare shopping with intelligent AI features for personalized skin analysis and product recommendations.

## Core Value Proposition

- Premium luxury skincare UI/UX with high-end typography and smooth interactions
- AI-powered skin analysis and personalized routine recommendations
- Full e-commerce purchase workflow with KSA-compliant payment integration
- Bilingual support (English + Arabic) with native RTL for Arabic

## Target Market

- Kingdom of Saudi Arabia (KSA)
- Premium skincare consumers seeking personalized recommendations
- Users wanting AI-assisted skincare routines

## Key Features

### E-Commerce System
- Product catalog with SKU, pricing, images, ingredients/INCI data
- Shopping cart with quantity management, taxes, and shipping
- Checkout with billing/shipping address capture
- Payment gateway integration (KSA-compliant) + Cash on Delivery (COD)
- Order lifecycle management (Pending → Paid → Processing → Shipped → Delivered)
- Order confirmation emails

### AI Features (Phase 1)
- AI Skin Analyzer (Quick Check + Deep Profile)
- AI Chat Assistant ("Ask Glowmi")
- RAG architecture using Glowmi product/INCI knowledge base
- AM/PM routine generation with ingredient reasoning
- Safe/Avoid ingredient lists
- Product recommendations mapped to Glowmi SKUs

### AI Safety & Governance
- Pregnancy warning logic
- Sensitive skin handling
- Ingredient conflict detection
- Strong active ingredient warnings
- Non-medical disclaimer (EN + AR)
- Consent acknowledgment for data processing

### Admin Dashboard & R&D Intelligence
- Orders management with status lifecycle
- Product catalog management
- Customer management
- AI analytics (usage, skin concerns, geographic trends)
- Product gap analysis
- Formulation Radar (AI concepts)
- Draft Lab Brief generation
- Exportable reports (CSV/PDF)

### Delivery & Logistics
- Courier assignment and tracking number storage
- Customer-visible order status and tracking
- Manual dispatch exports (CSV/PDF)
- API-ready structure for logistics partner integration

## Brand Guidelines

- Luxury skincare aesthetic: minimal, high-end typography, generous spacing
- Smooth transitions and interactions
- Mobile-first responsive design
- Primary brand color: Dark green (#1a2e1a / main-button)
- Background colors: Cream/beige tones (#f5f4f3, #e8e6e3)
- Serif fonts for headings (italic style for emphasis)
- Clean sans-serif for body text

## Compliance Requirements

- PDPL (Saudi Personal Data Protection Law) aligned
- Consent logging and audit trails
- Data deletion request workflow
- Data retention automation
- Secure authentication (JWT)
- TLS encryption in transit
- Role-based admin access
- Audit logging for admin actions

## Performance Targets

- Mobile Lighthouse score ≥ 85
- Page load < 3 seconds
- API response < 5 seconds average
