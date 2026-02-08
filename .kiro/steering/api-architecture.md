# API Architecture Pattern

## Overview

This project uses a **two-layer architecture** for type-safe API integration. The pattern separates pure API definitions from React-specific hooks, making the codebase maintainable, testable, and reusable.

**Tech Stack:** TanStack Query (React Query) + TypeScript + Axios

**Key Principle:** Separation of concerns - API logic is independent of React, while hooks provide React-specific functionality.

---

## Folder Structure

```
src/
├── api/
│   ├── query-list/          # Layer 1: Pure API definitions
│   │   ├── products.ts      # Product API endpoints
│   │   ├── auth.ts          # Authentication endpoints
│   │   ├── cart.ts          # Cart endpoints
│   │   └── orders.ts        # Order endpoints
│   │
│   └── api-hooks/           # Layer 2: React Query hooks
│       ├── useProducts.ts   # Product hooks (useProducts, useCreateProduct, etc.)
│       ├── useAuth.ts       # Auth hooks (useLogin, useRegister, etc.)
│       ├── useCart.ts       # Cart hooks (useCart, useAddToCart, etc.)
│       └── useOrders.ts     # Order hooks (useOrders, useCreateOrder, etc.)
│
└── lib/
    └── axios.ts             # Axios client configuration
```

---

## Layer 1: Query List (Pure API)

**Location:** `src/api/query-list/`

**Purpose:** Define API endpoints and TypeScript types without any React dependencies. These are pure functions that can be used anywhere (components, server actions, tests).

**Structure:**
1. TypeScript interfaces for data types
2. API object with endpoint methods
3. No React imports, no hooks, no side effects

**Example:**

```typescript
// src/api/query-list/products.ts
import { axiosClient } from '@/lib/axios'

// 1. Define TypeScript interfaces
export interface Product {
  id: number
  name: string
  price: number
}

export interface ProductFilters {
  search?: string
  category?: string
}

// 2. Create API object
export const productsApi = {
  getAll: (filters?: ProductFilters) => 
    axiosClient.get<Product[]>('/products/', { params: filters }),
  
  getById: (id: number) => 
    axiosClient.get<Product>(`/products/${id}/`),
  
  create: (data: Omit<Product, 'id'>) => 
    axiosClient.post<Product>('/products/', data),
}
```

---

## Layer 2: API Hooks (React Query)

**Location:** `src/api/api-hooks/`

**Purpose:** Provide React hooks with caching, loading states, error handling, and automatic refetching. These hooks use the API functions from Layer 1.

**Structure:**
1. Query keys constant (for cache management)
2. Query hooks for GET requests (useQuery)
3. Mutation hooks for POST/PATCH/DELETE (useMutation)
4. Error handling with toast notifications
5. Cache invalidation after mutations

**Example:**

```typescript
// src/api/api-hooks/useProducts.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { productsApi } from '../query-list/products'

// 1. Query keys for cache management
const PRODUCT_KEYS = {
  all: (filters?) => ['products', filters] as const,
  detail: (id: number) => ['products', id] as const,
}

// 2. Query hook (GET)
export const useProducts = (filters?) => {
  return useQuery({
    queryKey: PRODUCT_KEYS.all(filters),
    queryFn: () => productsApi.getAll(filters),
    select: (response) => response.data,
  })
}

// 3. Mutation hook (POST)
export const useCreateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: productsApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      toast.success('Product created!')
    },
    onError: () => toast.error('Failed to create product'),
  })
}
```

---

## Usage in Components

### Fetching Data (Query)

```typescript
import { useProducts } from '@/api/api-hooks/useProducts'

function ProductList() {
  const { data, isLoading, error } = useProducts({ category: 'skincare' })

  if (isLoading) return <Spinner />
  if (error) return <ErrorMessage />

  return (
    <div>
      {data?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
```

### Mutating Data (Create/Update/Delete)

```typescript
import { useCreateProduct } from '@/api/api-hooks/useProducts'

function CreateProductForm() {
  const { mutate, isPending } = useCreateProduct()

  const handleSubmit = (formData) => {
    mutate(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Product'}
      </button>
    </form>
  )
}
```

---

## Common Patterns

### File Uploads (FormData)

```typescript
// Query List
export const uploadApi = {
  uploadImage: (file: File) => {
    const formData = new FormData()
    formData.append('image', file)
    return axiosClient.post('/upload/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }
}

// Hook
export const useUploadImage = () => {
  return useMutation({
    mutationFn: uploadApi.uploadImage,
    onSuccess: () => toast.success('Image uploaded!'),
  })
}
```

### Conditional Queries (Only fetch when needed)

```typescript
export const useProduct = (id?: number) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => productsApi.getById(id!),
    enabled: !!id, // Only fetch when ID exists
  })
}
```

### Pagination

```typescript
export const useProducts = (page: number) => {
  return useQuery({
    queryKey: ['products', { page }],
    queryFn: () => productsApi.getAll({ page }),
    placeholderData: (prev) => prev, // Keep old data while fetching new
  })
}
```

---

## Rules & Best Practices

### Layer 1: Query List ✅ DO / ❌ DON'T

✅ **DO:**
- Export all TypeScript interfaces
- Use descriptive, consistent naming
- Type all API responses
- Keep functions pure (no side effects)
- Use `URLSearchParams` for query strings

❌ **DON'T:**
- Import React or React Query
- Add business logic or state management
- Handle errors (let hooks handle them)
- Use hooks or React-specific code

### Layer 2: API Hooks ✅ DO / ❌ DON'T

✅ **DO:**
- Define query keys at the top as constants
- Include filters/params in query keys
- Use `select` to transform response data
- Invalidate queries after mutations
- Show toast notifications for user feedback
- Type error responses properly

❌ **DON'T:**
- Hardcode query keys inline
- Forget to invalidate cache after mutations
- Skip error handling
- Mix API logic with component logic

---

## Implementation Workflow

When adding a new API feature (e.g., "Orders"):

1. **Create Query List** (`src/api/query-list/orders.ts`)
   - Define TypeScript interfaces (Order, OrderFilters, CreateOrderData)
   - Create API object with methods (getAll, getById, create, update, delete)

2. **Create API Hooks** (`src/api/api-hooks/useOrders.ts`)
   - Define query keys constant
   - Create query hooks for GET requests
   - Create mutation hooks for POST/PATCH/DELETE
   - Add error handling with toast
   - Implement cache invalidation

3. **Use in Components**
   - Import hooks from `@/api/api-hooks/useOrders`
   - Use query hooks for fetching data
   - Use mutation hooks for creating/updating/deleting

---

## Benefits

- **Type Safety:** Full TypeScript support with autocomplete
- **Caching:** Automatic caching and deduplication with React Query
- **Reusability:** API functions work in any context (components, server, tests)
- **Testability:** Easy to mock each layer independently
- **Maintainability:** Clear separation of concerns
- **Developer Experience:** Predictable patterns, less boilerplate
- **Performance:** Automatic request deduplication and background refetching
