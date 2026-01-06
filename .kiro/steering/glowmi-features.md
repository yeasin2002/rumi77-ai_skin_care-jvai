# GLOWMI Feature Requirements

## Website Pages (Frontend)

### Public Pages

- Homepage (hero, products carousel, features, CTA sections)
- About Glowmi
- Contact page (with email/phone)
- Privacy Policy page
- Terms & Conditions page
- FAQ page

### Shop Pages

- Shop / Collection pages (PLP - Product Listing Page)
- Product Detail Pages (PDP) with ingredients, images, pricing
- Cart page with quantity management
- Checkout page (address, payment method)
- Order confirmation page

### User Account Pages

- User account dashboard
- Order history page
- Saved addresses management
- Profile settings

### AI Pages

- AI Skin Analyzer (Quick Check)
- AI Skin Analyzer (Deep Profile)
- AI Chat Assistant ("Ask Glowmi")
- AI Results & Saved Routines page

## E-Commerce Purchase Flow

1. Browse products → 2. Add to cart → 3. Checkout → 4. Address capture → 5. Payment method → 6. Payment/COD → 7. Order confirmation → 8. Admin sees order → 9. Fulfillment → 10. Delivery handoff → 11. Tracking → 12. Delivered

### Cart Features

- Add/remove products
- Update quantities
- Display totals, taxes, shipping
- Persist cart across sessions

### Checkout Features

- Billing address capture
- Shipping address capture
- Payment method selection (Online/COD)
- Order summary review
- Order placement
- Confirmation screen + email notification

### Payment Handling

- Online payment gateway (KSA-compliant)
- Cash on Delivery (COD) toggle
- Payment verification (Paid/Failed/Unpaid)
- Failed payment handling
- Abandoned checkout handling

## Order Management (Admin)

### Order Lifecycle Statuses

1. Pending
2. Payment Pending
3. Paid
4. Processing
5. Shipped / Handed to Courier
6. Delivered
7. Cancelled
8. Refunded (if applicable)

### Admin Order Features

- Orders list with filters
- Order detail view
- Customer details per order
- Payment status visibility
- Manual status updates
- Order notes (internal)
- Export orders (CSV/PDF)

## Delivery & Logistics

### Admin Features

- Assign courier/delivery method
- Add tracking number
- Update order status
- Record delivery date/time

### Customer Features

- See order status in account
- See tracking number and courier name/link

### Export Options

- CSV export for courier dispatch
- PDF export for order details
- Webhook/email to operations inbox

## AI Features (Phase 1)

### AI Skin Analyzer

- Quick Check: Basic skin assessment
- Deep Profile: Comprehensive analysis
- Text-based input
- Optional photo upload (if approved)

### AI Chat Assistant ("Ask Glowmi")

- Conversational skincare advice
- Product recommendations
- Ingredient explanations

### AI Outputs

- AM/PM skincare routine
- Ingredient reasoning
- Safe/Avoid ingredient lists
- Product recommendations (Glowmi SKUs only)

### AI Safety Rules

- Pregnancy warnings
- Ingredient conflict detection
- Sensitive skin handling
- Strong actives warnings
- Non-medical disclaimer (EN + AR)
- Consent modal for data processing

## Admin Dashboard

### Core Management

- Orders management
- Product catalog management
- Customer management

### AI Analytics

- User analytics
- Top skin concerns analytics
- Geographic trends
- AI usage analytics
- Product gap analysis

### R&D Intelligence

- Formulation Radar (AI concepts)
- Draft Lab Brief generation
- Exportable reports (CSV/PDF)

## Database Tables Required

- users (authentication, profile)
- sessions (session tracking)
- products (catalog with SKU, price, INCI)
- categories (product categories)
- orders (order records)
- order_items (line items)
- cart (shopping cart)
- addresses (billing/shipping)
- skin_profiles (user skin data)
- ai_inputs (AI analysis inputs)
- ai_outputs (AI analysis outputs)
- consent_audit (PDPL compliance)
- feedback (user feedback)

## Bilingual Requirements

- All UI text in translation files
- English (en) as default
- Arabic (ar) with full RTL support
- System messages bilingual
- Email templates bilingual
- Admin dashboard bilingual
