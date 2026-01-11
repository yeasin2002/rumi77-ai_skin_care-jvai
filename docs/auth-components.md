# Authentication Components Documentation

## Overview

This document covers the authentication UI components and pages built for the Glowmi skincare e-commerce platform. The auth system includes both customer-facing auth pages and admin dashboard auth pages.

---

## Reusable Components

### IconInput (`src/components/shared/auth-input.tsx`)

A flexible input component using `class-variance-authority` (CVA) for variant-based styling.

#### Variants

| Variant   | Description                                      | Use Case                    |
| --------- | ------------------------------------------------ | --------------------------- |
| `auth`    | Underline style with icon on left (default)      | Customer auth pages         |
| `default` | Boxed/filled style with label above, no icon     | Dashboard, profile settings |

#### Props

```typescript
type IconInputProps = {
  icon?: LucideIcon        // Icon component (optional for default variant)
  label?: string           // Label text above input
  placeholder: string      // Placeholder text
  type?: string            // Input type (text, email, password)
  className?: string       // Additional classes
  labelClassName?: string  // Label styling
  error?: string           // Error message to display
  variant?: 'auth' | 'default'
}
```

#### Usage Examples

```tsx
// Auth variant (customer login/signup)
<IconInput 
  icon={Mail} 
  placeholder="Email" 
  type="email"
  error={errors.email?.message}
  {...register('email')}
/>

// Default variant (dashboard/profile)
<IconInput 
  variant="default"
  label="Email"
  placeholder="Kenzi.Lawson@Example.Com"
  type="email"
  error={errors.email?.message}
  {...register('email')}
/>
```

---

## CSS Component Classes (`src/styles/globals.css`)

Reusable auth classes (only for styles with 5+ utility classes):

```css
.auth-container {
  @apply bg-card w-full max-w-md rounded-2xl border p-8 shadow-sm;
}

.auth-back-btn {
  @apply bg-muted mb-8 inline-flex size-10 items-center justify-center rounded-full;
}
```

---

## Customer Auth Pages

Located in `src/app/[locale]/(auth)/`

### Layout (`layout.tsx`)

Provides centered container for all auth pages:

```tsx
<div className="bg-background flex min-h-screen items-center justify-center p-4">
  {children}
</div>
```

### Pages

| Page              | Path               | Features                                    |
| ----------------- | ------------------ | ------------------------------------------- |
| Login             | `/login`           | Email, password, forgot password link       |
| Sign Up           | `/sign-up`         | Email, password, link to login              |
| Forget Password   | `/forget-password` | Email input, send OTP button                |
| Reset Password    | `/reset-password`  | New password, confirm password with match validation |
| Verify OTP        | `/verify-otp`      | 6-digit OTP input using shadcn InputOTP     |

### Common Structure

All customer auth pages follow this pattern:

```tsx
<div className="auth-container">
  <Link href="/" className="auth-back-btn">
    <ArrowLeft className="size-5" />
  </Link>

  <div className="mb-8 text-center">
    <h1 className="font-serif text-4xl italic">Page Title</h1>
    <p className="text-muted-foreground mt-2">Subtitle text</p>
  </div>

  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    {/* Form fields */}
  </form>
</div>
```

---

## Dashboard Auth Pages

Located in `src/app/[locale]/dashboard/(auth)/`

### Layout (`src/app/[locale]/dashboard/layout.tsx`)

Split-screen layout with form on left, image on right:

```tsx
<div className="flex min-h-screen w-full justify-between">
  {children}
  <div className="relative hidden lg:block">
    <Image src={sideImage} alt="Skincare model" className="object-cover" priority />
  </div>
</div>
```

### Pages

| Page            | Path                        | Features                              |
| --------------- | --------------------------- | ------------------------------------- |
| Login           | `/dashboard/login`          | Email, password, remember me checkbox |
| Forget Password | `/dashboard/forget-password`| Email input, send OTP button          |

### Common Structure

Dashboard auth pages use `SiteHeading` component and `IconInput` with `variant="default"`:

```tsx
<div className="flex w-full flex-col items-center justify-center px-8 lg:w-1/2">
  <div className="w-full max-w-md">
    <Image src={logo} alt="Logo" className="mx-auto mb-10" />
    
    <SiteHeading
      heading="Page Title"
      subHeading="Description text"
      wrapperClassname="mb-8"
    />

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Form fields with variant="default" */}
    </form>
  </div>
</div>
```

---

## Form Validation

All forms use `react-hook-form` with `zod` validation:

```tsx
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  password: z.string().min(1, 'Password is required').min(8, 'Min 8 characters'),
})

const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
  resolver: zodResolver(schema),
})
```

### Validation Schemas

| Form           | Fields                          | Special Validation                |
| -------------- | ------------------------------- | --------------------------------- |
| Login          | email, password                 | -                                 |
| Sign Up        | email, password                 | -                                 |
| Forget Password| email                           | -                                 |
| Reset Password | password, confirmPassword       | `.refine()` for password match    |
| Verify OTP     | otp                             | 6 digits required                 |

---

## OTP Input Component

Uses shadcn's `InputOTP` component with custom styling:

```tsx
<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
  <InputOTPGroup className="gap-2">
    <InputOTPSlot index={0} className="size-12 rounded-lg text-lg" />
    {/* ... slots 1-5 */}
  </InputOTPGroup>
</InputOTP>
```

---

## i18n Navigation

All internal links use locale-aware `Link` from `@/i18n/navigation`:

```tsx
import { Link } from '@/i18n/navigation'

<Link href="/login">Login</Link>
<Link href={{ pathname: '/dashboard/forgot-password' }}>Forgot Password?</Link>
```

---

## Design Tokens

| Element          | Style                                           |
| ---------------- | ----------------------------------------------- |
| Heading          | `font-serif text-4xl italic`                    |
| Subheading       | `text-muted-foreground mt-2`                    |
| Primary Button   | Uses `main-button` color (dark green #1a2e1a)   |
| Link             | `text-main-button text-sm hover:underline`      |
| Error Text       | `text-destructive text-sm`                      |
| Input (auth)     | Underline border, h-12, icon left               |
| Input (default)  | Rounded, bg-muted/50, h-12, label above         |
