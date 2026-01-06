# GLOWMI - AI-POWERED E-COMMERCE WEBSITE DEVELOPMENT AGREEMENT

## (Full Website + E-Commerce + AI + Admin & R&D Intelligence)

**This Agreement is made on [30 DEC 2025] ("Effective Date")**

---

## 1) Parties

**Client:** Glowmi ("Client", "Glowmi")  
**Developer:** Ariful Islam / Solution_SQDL ("Developer")

Collectively, the "Parties".

---

## 2) Purpose

Developer shall design, develop, test, deploy, and hand over a complete production-ready, bilingual (English + Arabic, RTL) GLOWMI website including full e-commerce purchase workflow and AI features integrated into the buyer journey, plus an admin + R&D intelligence dashboard, per this Agreement.

**This is not an "AI page only" project. AI is an integrated feature within a complete e-commerce system.**

---

## 3) Definitions

- **E-Commerce System:** Storefront, product catalog, cart, checkout, payment, orders, admin order management, and delivery workflow.
- **Order Lifecycle:** Statuses from order creation to delivery completion.
- **AI System:** AI Skin Analyzer + AI Chat Assistant + RAG + safety rules + evaluation framework.
- **Acceptance:** Written confirmation by Glowmi that milestone deliverables meet criteria in Section 11.

---

## 4) Scope of Work (Binding)

Developer must deliver all items below.

### 4.1 Website & Brand Experience (Front-End)

- Premium luxury skincare UI/UX aligned to Glowmi's identity (minimal, high-end typography, spacing, smooth interactions).
- Responsive design: mobile/tablet/desktop.
- Bilingual English/Arabic across UI, system messages, forms, dashboards; full RTL for Arabic pages/components.
- **Core pages (minimum):**
  - Home, About, Contact, Privacy, Terms, FAQ
  - Shop (collections/categories), Product pages (PDP), Cart, Checkout
  - User Account: profile, addresses, order history
  - AI pages/flows (Analyzer + Chat), plus results & saved routine pages

### 4.2 Full E-Commerce Purchase Workflow (End-to-End)

Developer shall implement the complete buyer flow:

1. Browse products → 2) Add to cart → 3) Checkout → 4) Address → 5) Payment method → 6) Payment/COD → 7) Order confirmation → 8) Admin sees order → 9) Fulfillment → 10) Delivery partner handoff → 11) Tracking → 12) Delivered.

**Must include:**

- Product catalog management (SKU, price, descriptions, images, availability/stock if enabled).
- Cart with quantity, totals, taxes/shipping rules (as provided by Glowmi).
- **Checkout with:**
  - Address capture (billing/shipping)
  - Payment method selection
  - Order confirmation screen + email notification (templates editable).
- Payment status management (Paid / Unpaid / Failed / Refunded where applicable).
- **Support for at least:**
  - Online payment gateway integration (KSA-compliant; gateway choice/credentials provided by Glowmi)
  - Cash on Delivery (COD) toggle (if Glowmi enables)
- **Fraud/edge handling:**
  - Failed payments, abandoned checkout, duplicate orders, payment timeouts.
- **Order lifecycle statuses in Admin:**
  - Pending, Payment Pending, Paid, Processing, Shipped/Handed to Courier, Delivered, Cancelled, Refunded (as applicable)

### 4.3 Logistics / Delivery Workflow (Operationally Ready)

Developer shall deliver a delivery management workflow that ensures Glowmi can operate day 1.

**Minimum (must-have):**

- **Admin can:**
  - Assign courier/delivery method
  - Add tracking number
  - Update order status
  - Record delivery date/time
- **Customer can:**
  - See order status in account
  - See tracking number and courier name/link (if provided)

**Integration options (choose per Glowmi operations):**

- **Option A - API Integration:** Connect to Glowmi's logistics partner API (credentials provided by Glowmi).
- **Option B - Manual Dispatch Ready:** Export orders (CSV/PDF) in courier-ready format + webhook/email to operations inbox.

Developer must implement at least **Option B** and keep the platform API-ready for Option A without redesign.

### 4.4 AI System (Phase 1 Core)

Developer shall deliver:

- **AI Skin Analyzer:** Quick check + deep profile; text input; optional photo upload only if Glowmi approves.
- **AI Chat Assistant** ("Ask Glowmi")
- **RAG architecture** using Glowmi product/INCI knowledge base.
- **Rule-based Safety Engine (minimum):**
  - Pregnancy warnings
  - Ingredient conflicts
  - Sensitivity scenarios
  - Strong actives warnings (per Glowmi rule list)
- **AI outputs must include:**
  - AM/PM routine
  - Ingredient reasoning
  - Safe/avoid list
  - Product recommendations mapped to Glowmi SKUs
- **Disclaimers:**
  - Non-medical disclaimer displayed in both languages
  - Consent modal if collecting/processing personal data

### 4.5 Admin Dashboard + R&D Intelligence

Developer must deliver a secure admin portal with:

- Orders management (from Section 4.2)
- Product management (catalog)
- Customer management (accounts)
- **AI analytics:**
  - User analytics
  - Top skin concerns analytics
  - Geographic trends (if data available)
  - AI usage analytics
  - Product gap analysis
  - Formulation Radar (AI concepts)
  - Draft Lab Brief generation
  - Exportable analytics reports (CSV / PDF)

---

## 5) Deliverables Summary

### 5.1 Functional Deliverables

All features outlined in Section 4 must be delivered in working, tested, production-ready state.

### 5.2 Code & Handover

- Full source code in a Git repository owned by Glowmi (Section 9).
- Full DB schema documentation.
- Deployment documentation (dev/stage/prod).
- Admin user guide.
- API documentation (internal endpoints, webhook docs).
- Test report and performance report.

---

## 6) Timeline & Working Method

- Total timeline target: **60 days**, subject to Glowmi approvals and timely provision of required inputs.
- Weekly progress meeting + written weekly status update.
- Developer must maintain a shared task board (Trello/Jira/Notion) visible to Glowmi.

---

## 7) Inputs Required From Glowmi

Glowmi will provide:

- Brand references and preferences (colors/typography direction)
- Product catalog data: SKU list, descriptions, images, prices, ingredients/INCI, rules (safe/avoid)
- Payment gateway selection and credentials (when ready)
- Logistics partner selection and requirements (when ready)
- Domain/hosting access under Glowmi ownership (Developer gets revocable access)

---

## 8) Security, PDPL & Compliance

Developer must implement:

- JWT/authentication, secure session handling
- Encryption in transit (TLS) and at rest where applicable
- PDPL-aligned consent logging (consent_audit), data deletion request workflow, retention automation (e.g., delete after 12-18 months inactivity if Glowmi chooses).
- Role-based admin access
- Audit logging for admin actions
- Secure file upload handling (if image upload enabled)

---

## 9) Ownership, IP, Exclusivity (Glowmi-Favor)

**Upon payment of each milestone:**

- All deliverables created in that milestone become Glowmi's exclusive property.

**Upon final payment:**

- Glowmi owns 100% of:
  - Source code, UI/UX, schemas, documentation
  - AI prompts, workflows, RAG pipelines, safety rules, evaluation frameworks
  - Analytics logic and dashboards

**Developer may not reuse any Glowmi-specific logic, data structures, prompts, or AI workflow for any third-party skincare/cosmetics project.**

---

## 10) Hosting, Accounts, Keys (Glowmi Control)

- All accounts (Git, hosting, DB, analytics, gateways, APIs) must be created under Glowmi-owned emails.
- Developer receives time-bound, revocable access only.
- OpenAI/API keys are provided and controlled by Glowmi; Developer must never store secrets in code.

---

## 11) Acceptance Criteria (Mandatory Gates)

Glowmi acceptance is required for each milestone.

**General:**

- No hardcoded text (everything editable via admin or config)
- Bilingual correctness + RTL functioning
- No critical bugs, no broken checkout

**If a feature is required to meet the scope in Section 4, it is not a change request.**

---

## 12) Change Requests

Any work outside Section 4 scope requires written approval and may adjust timeline/cost.

---

## 13) Payments & Milestones (Glowmi-First Structure)

Payments occur only after acceptance (Section 11).

**Recommended milestone structure:**

1. **Milestone 1** - Full Figma Pack (E-commerce + AI + Admin)
2. **Milestone 2** - Frontend Implementation (Storefront + AI UI)
3. **Milestone 3** - Backend + DB + Payments + Orders + Admin + AI Integration
4. **Milestone 4** - QA, Security Checks, Deployment, Handover Docs

_(Amounts: [insert as per your deal])_

---

## 14) Support & Maintenance

- **120 days** free post-launch support for bug fixing only (no new features).
- **Response expectations:**
  - Critical issues: acknowledged within 24 hours, workaround/patch ASAP
  - Non-critical: scheduled within reasonable cycles
- Ongoing maintenance beyond 120 days requires a separate agreement.

---

## 15) Warranty

Developer warrants that:

- Deliverables are original or properly licensed
- No malicious code, backdoors, or hidden access
- Project will match approved Figma and scope
- Security best practices are applied

---

## 16) Confidentiality

All Glowmi information, data, designs, pricing, formulas/INCI mapping, prompts, and analytics are confidential. Developer shall not disclose or reuse.

---

## 17) Termination & Handover (Glowmi Protection)

**Glowmi may terminate for:**

- Material breach
- Unreasonable delay
- Repeated failure to meet acceptance criteria
- Confidentiality/IP breach

**Upon termination:**

- Developer must hand over all work-in-progress within 3 business days:
  - Repo, code, designs, docs, credentials handover notes
- Glowmi retains rights to all completed/paid deliverables.

---

## 18) Non-Solicitation (Optional but recommended)

Developer shall not solicit Glowmi customers/leads/data for competing purposes.

---

## 19) Limitation of Liability (Glowmi-Favor)

Developer is responsible for defects in development and security negligence.

AI output disclaimers remain mandatory; Glowmi controls content and disclaimers.

---

## 20) Governing Law & Dispute Resolution

This Agreement is governed by the laws of the **Kingdom of Saudi Arabia (KSA)**.

Disputes first attempt amicable resolution for 15 days, then competent courts in **[Riyadh]** unless Glowmi chooses otherwise.

---

## 21) Entire Agreement

This document supersedes prior proposals/quotes and is the complete agreement.

---

---

# SCHEDULE A - DETAILED DELIVERABLES CHECKLIST

---

## A. BRAND & USER EXPERIENCE (BUYER-FIRST)

- ☐ Luxury skincare UI/UX aligned with Glowmi brand
- ☐ Clean, premium typography and spacing
- ☐ Smooth transitions and interactions
- ☐ Mobile-first responsive design
- ☐ Desktop, tablet, and mobile optimization
- ☐ Native Arabic RTL (not mirrored)
- ☐ English + Arabic across entire platform
- ☐ Editable UI text (no hardcoded strings)

---

## B. WEBSITE PAGES (FRONTEND)

- ☐ Homepage
- ☐ About Glowmi
- ☐ Contact page
- ☐ Privacy Policy page
- ☐ Terms & Conditions page
- ☐ FAQ page
- ☐ Shop / Collection pages (PLP)
- ☐ Product Detail Pages (PDP)
- ☐ Cart page
- ☐ Checkout page
- ☐ Order confirmation page
- ☐ User account dashboard
- ☐ Order history page

---

## C. PRODUCT & CATALOG MANAGEMENT

- ☐ Product creation & editing (Admin)
- ☐ SKU management
- ☐ Pricing management
- ☐ Product images gallery
- ☐ Ingredient/INCI data storage
- ☐ Product availability enable/disable
- ☐ Category / collection assignment
- ☐ AI-linked product mapping

---

## D. FULL E-COMMERCE PURCHASE FLOW (END-TO-END)

### Customer Side

- ☐ Browse products
- ☐ Add to cart
- ☐ Update quantities
- ☐ Checkout flow
- ☐ Address capture (billing & shipping)
- ☐ Payment method selection
- ☐ Order placement
- ☐ Order confirmation (screen + email)

### Payment Handling

- ☐ Online payment gateway integration (KSA-compliant)
- ☐ Payment verification (Paid / Failed / Unpaid)
- ☐ Cash on Delivery (COD) option (toggleable)
- ☐ Failed payment handling
- ☐ Abandoned checkout handling

---

## E. ORDER MANAGEMENT (ADMIN SIDE)

- ☐ Orders list with filters
- ☐ Order detail view
- ☐ Customer details per order
- ☐ Payment status visibility
- ☐ Order status lifecycle:
  - ☐ Pending
  - ☐ Payment Pending
  - ☐ Paid
  - ☐ Processing
  - ☐ Shipped / Handed to Courier
  - ☐ Delivered
  - ☐ Cancelled / Refunded (if enabled)
- ☐ Manual status updates
- ☐ Order notes (internal)
- ☐ Export orders (CSV / PDF)

---

## F. DELIVERY & LOGISTICS WORKFLOW

- ☐ Delivery method assignment (Admin)
- ☐ Courier name recording
- ☐ Tracking number storage
- ☐ Customer-visible order status
- ☐ Customer-visible tracking reference
- ☐ Manual dispatch-ready exports (CSV / PDF)
- ☐ API-ready structure for logistics partner integration
- ☐ Ability to change logistics partner without redesign

_Note: At minimum, manual dispatch-ready workflow is mandatory. API integration is supported when credentials are provided._

---

## G. AI FEATURES (PHASE 1 - CORE)

- ☐ AI Skin Analyzer (Quick Check)
- ☐ AI Skin Analyzer (Deep Profile)
- ☐ AI Chat Assistant ("Ask Glowmi")
- ☐ Text-based AI analysis
- ☐ AI routine generation (AM / PM)
- ☐ Ingredient reasoning explanation
- ☐ Safe / Avoid ingredient lists
- ☐ AI product recommendations (Glowmi SKUs only)

---

## H. AI SAFETY & GOVERNANCE

- ☐ Pregnancy warning logic
- ☐ Sensitive skin handling
- ☐ Ingredient conflict detection
- ☐ Strong active ingredient warnings
- ☐ Rule-based safety engine
- ☐ Consistent output for same inputs (within tolerance)
- ☐ Non-medical disclaimer (EN + AR)
- ☐ Consent acknowledgment where required

---

## I. ADMIN DASHBOARD & R&D INTELLIGENCE

- ☐ Secure admin login
- ☐ Role-based access
- ☐ User analytics
- ☐ Top skin concerns analytics
- ☐ Geographic trends (if data available)
- ☐ AI usage analytics
- ☐ Product gap analysis
- ☐ Formulation Radar (AI concepts)
- ☐ Draft Lab Brief generation
- ☐ Exportable analytics reports (CSV / PDF)

---

## J. DATA, DATABASE & COMPLIANCE

- ☐ Users table
- ☐ Sessions tracking
- ☐ Skin profiles
- ☐ AI inputs logging
- ☐ AI outputs logging
- ☐ Consent audit logs
- ☐ Feedback collection
- ☐ Data deletion on request
- ☐ Data retention automation
- ☐ PDPL-aligned consent handling

---

## K. SECURITY & PERFORMANCE

- ☐ Secure authentication (JWT or equivalent)
- ☐ Encrypted communication (TLS)
- ☐ Secure file uploads (if enabled)
- ☐ No exposed secrets or API keys
- ☐ Performance optimized frontend
- ☐ Mobile Lighthouse ≥ 85
- ☐ Page load < 3 seconds (typical)
- ☐ API response < 5 seconds average

---

## L. DEVOPS, HANDOVER & CONTROL

- ☐ Git repository owned by Glowmi
- ☐ Source code handover
- ☐ Database schema documentation
- ☐ Deployment documentation
- ☐ Admin user guide
- ☐ API documentation
- ☐ Backup & restore strategy
- ☐ Environment separation (dev / staging / prod)

---

## M. SUPPORT & WARRANTY

- ☐ 120 days post-launch bug-fix support
- ☐ No hidden access or backdoors
- ☐ No reuse of Glowmi AI logic or data
- ☐ Confidentiality enforced

---

---

# SIGNATURES

**For Glowmi (Client):**

Name: **************\_\_\_\_**************

Title: CEO

Signature: **************\_\_\_\_**************

Date: **************\_\_\_\_**************

---

**For Developer:**

Name: Ariful Islam / Solution_SQDL

Title: **************\_\_\_\_**************

Signature: **************\_\_\_\_**************

Date: **01.01.26**

---

**END OF AGREEMENT**
