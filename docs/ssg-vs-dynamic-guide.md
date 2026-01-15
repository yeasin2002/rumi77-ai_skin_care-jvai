# SSG vs Dynamic Rendering Guide for GLOWMI

## Understanding `force-static` with Dynamic Components

### What Works with `force-static`

✅ **Client-side data fetching:**

- React Query (TanStack Query)
- Redux with API calls
- SWR
- `useEffect` with fetch
- Client Components with state

✅ **Static content:**

- Pre-rendered HTML/CSS
- Images, videos
- Static text from translation files

❌ **What BREAKS with `force-static`:**

- Server-side cookies access
- Server-side headers access
- `searchParams` in Server Components
- Dynamic route segments without `generateStaticParams`

---

## Recommended Approaches for GLOWMI

### Option 1: Dynamic Rendering (Current - Recommended)

**Best for:** E-commerce with user-specific features

```tsx
// src/app/[locale]/(landing)/(home)/page.tsx
export default async function HomePage() {
  // Page renders on-demand
  // All features work: auth, cart, personalization
  return (
    <>
      <Hero />
      <BestProductsList /> {/* Can fetch from API */}
      <GlowmiProductShowcase /> {/* Can show user-specific data */}
    </>
  )
}
```

**Pros:**

- ✅ User authentication works seamlessly
- ✅ Cart state syncs properly
- ✅ Personalized content (AI recommendations)
- ✅ Fresh data on every visit
- ✅ No cache invalidation complexity

**Cons:**

- ❌ Slightly slower initial load (minimal with good caching)

---

### Option 2: Static Shell + Client Hydration

**Best for:** Marketing pages with some dynamic features

```tsx
// src/app/[locale]/(landing)/(home)/page.tsx
export const dynamic = 'force-static'
export const revalidate = 3600 // 1 hour

export default async function HomePage() {
  return (
    <>
      <Hero /> {/* Static */}
      <AboutGlowmi /> {/* Static */}
      <BestProductsClient /> {/* Client component fetches data */}
    </>
  )
}
```

```tsx
// best-products-client.tsx
'use client'
import { useQuery } from '@tanstack/react-query'

export function BestProductsClient() {
  const { data, isLoading } = useQuery({
    queryKey: ['best-products'],
    queryFn: () => fetch('/api/products/best').then((r) => r.json()),
  })

  if (isLoading) return <ProductsSkeleton />
  return <ProductsList products={data} />
}
```

**Pros:**

- ✅ Fast initial HTML load
- ✅ SEO-friendly static content
- ✅ Dynamic features via client-side

**Cons:**

- ❌ Loading states visible to users
- ❌ No SSR for dynamic content (worse SEO for products)
- ❌ More complex code structure

---

### Option 3: ISR (Incremental Static Regeneration)

**Best for:** Product pages that update occasionally

```tsx
// src/app/[locale]/products/[id]/page.tsx
export const revalidate = 3600 // Revalidate every hour

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Fetch at build time, revalidate periodically
  const product = await fetch(`${API_URL}/products/${params.id}`, {
    next: { revalidate: 3600 },
  }).then((r) => r.json())

  return <ProductDetail product={product} />
}

export async function generateStaticParams() {
  // Pre-render top 100 products at build time
  const products = await fetch(`${API_URL}/products?limit=100`).then((r) => r.json())
  return products.map((p) => ({ id: p.id }))
}
```

**Pros:**

- ✅ Fast page loads
- ✅ SEO-friendly
- ✅ Automatic cache updates

**Cons:**

- ❌ Stale data between revalidations
- ❌ Complex cache invalidation

---

## Data Fetching Methods Compatibility

### With `force-static` ✅

```tsx
// Client Component with React Query
'use client'
export function ProductList() {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => api.products.getAll(),
  })
  return <div>{/* render */}</div>
}
```

```tsx
// Client Component with useEffect
'use client'
export function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then(setProducts)
  }, [])

  return <div>{/* render */}</div>
}
```

### Without `force-static` (Dynamic) ✅

```tsx
// Server Component with fetch
export default async function ProductList() {
  const products = await fetch(`${API_URL}/products`).then((r) => r.json())
  return <div>{/* render */}</div>
}
```

```tsx
// Server Component with cookies/headers
import { cookies } from 'next/headers'

export default async function UserDashboard() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth-token')
  // Fetch user-specific data
}
```

---

## Recommendation for GLOWMI

### Homepage Strategy

**Remove `force-static`** and use dynamic rendering because:

1. **User-specific features:**
   - Cart item count in navigation
   - Personalized product recommendations
   - "Welcome back" messages

2. **Fresh content:**
   - Latest products
   - Current promotions
   - Real-time inventory

3. **Simpler architecture:**
   - No loading states
   - Better SEO (SSR for all content)
   - Easier to maintain

### When to Use Static

Use `force-static` or ISR for:

- ✅ About Us page
- ✅ Privacy Policy
- ✅ Terms & Conditions
- ✅ FAQ page
- ✅ Blog posts

---

## Example: Hybrid Homepage

```tsx
// src/app/[locale]/(landing)/(home)/page.tsx
// Dynamic rendering (no force-static)
export default async function HomePage() {
  return (
    <>
      <Hero /> {/* Static content */}
      <AboutGlowmi /> {/* Static content */}
      <BestProductsList /> {/* Server-side fetch, fresh data */}
      <GlowmiProductShowcase /> {/* Server-side fetch */}
    </>
  )
}
```

```tsx
// src/app/[locale]/(landing)/(home)/best-products.tsx
// Server Component - fetches fresh data on each request
export async function BestProductsList() {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/best`, {
    next: { revalidate: 300 }, // Cache for 5 minutes
  }).then((r) => r.json())

  return (
    <section>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
```

---

## Performance Tips

1. **Use `next: { revalidate }` in fetch calls:**

   ```tsx
   fetch(url, { next: { revalidate: 300 } }) // Cache 5 min
   ```

2. **Implement loading states:**

   ```tsx
   // loading.tsx in route folder
   export default function Loading() {
     return <Skeleton />
   }
   ```

3. **Use Suspense boundaries:**

   ```tsx
   <Suspense fallback={<ProductsSkeleton />}>
     <BestProductsList />
   </Suspense>
   ```

4. **Optimize images:**
   ```tsx
   <Image src={url} priority /> // For above-fold images
   ```

---

## Summary

**For GLOWMI homepage:**

- ❌ Don't use `force-static` (too restrictive)
- ✅ Use dynamic rendering with fetch caching
- ✅ Use React Query for client-side features
- ✅ Reserve static generation for truly static pages

This gives you the best balance of performance, flexibility, and user experience.
