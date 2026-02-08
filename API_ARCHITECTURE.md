# API Architecture Pattern

A scalable, type-safe API layer architecture for React applications using TanStack Query, TypeScript, and Axios.

## Overview

This architecture separates API concerns into two distinct layers:

1. **Query List Layer** - Pure API definitions and TypeScript interfaces
2. **API Hooks Layer** - React Query hooks for data fetching and mutations

### Why This Pattern?

- **Type Safety** - Full TypeScript support across the entire API layer
- **Separation of Concerns** - API logic separated from React logic
- **Reusability** - API functions can be used outside React components
- **Testability** - Easy to mock and test each layer independently
- **Caching** - Automatic caching and invalidation via TanStack Query
- **Maintainability** - Clear, predictable structure

---

## Architecture Diagram

```
┌─────────────────────────────────────┐
│       React Components              │
│   (UI Logic & Interactions)         │
└──────────────┬──────────────────────┘
               │ uses
               ▼
┌─────────────────────────────────────┐
│       API Hooks Layer               │
│   (React Query hooks, caching)      │
└──────────────┬──────────────────────┘
               │ calls
               ▼
┌─────────────────────────────────────┐
│      Query List Layer               │
│   (API functions, interfaces)       │
└──────────────┬──────────────────────┘
               │ uses
               ▼
┌─────────────────────────────────────┐
│       Axios Instance                │
│   (HTTP client, interceptors)       │
└─────────────────────────────────────┘
```

---

## Folder Structure

```
src/
├── api/
│   ├── query-list/              # Layer 1: API Definitions
│   │   ├── users.ts
│   │   ├── products.ts
│   │   ├── orders.ts
│   │   └── ...
│   │
│   └── api-hooks/               # Layer 2: React Query Hooks
│       ├── useUsers.ts
│       ├── useProducts.ts
│       ├── useOrders.ts
│       └── ...
│
└── lib/
    └── axiosInstance.ts         # HTTP Client Configuration
```

---

## Layer 1: Query List (API Definitions)

### Purpose

Define TypeScript interfaces and pure API functions without React dependencies.

### File Structure

Each query-list file should contain:

1. **TypeScript Interfaces** - Response types, request parameters, filters
2. **API Object** - Exported object with all endpoint functions

### Template

```typescript
// api/query-list/[resource].ts
import { axiosClient } from "@/lib/axiosInstance";

// ============================================
// 1. TypeScript Interfaces
// ============================================

export interface Resource {
  id: number;
  name: string;
  // ... other fields
}

export interface ResourcesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Resource[];
}

export interface ResourceFilters {
  search?: string;
  page?: number;
  page_size?: number;
}

export interface CreateResourceData {
  name: string;
  // ... other fields
}

// ============================================
// 2. API Object
// ============================================

export const resourceApi = {
  // GET with filters
  getAll: (filters?: ResourceFilters) => {
    const params = new URLSearchParams();

    if (filters?.search) params.append("search", filters.search);
    if (filters?.page) params.append("page", filters.page.toString());
    if (filters?.page_size) params.append("page_size", filters.page_size.toString());

    const url = `/resources/?${params.toString()}`;
    return axiosClient.get<ResourcesResponse>(url);
  },

  // GET by ID
  getById: (id: number) => axiosClient.get<Resource>(`/resources/${id}/`),

  // POST
  create: (data: CreateResourceData) => axiosClient.post<Resource>("/resources/", data),

  // PATCH
  update: (id: number, data: Partial<Resource>) => axiosClient.patch<Resource>(`/resources/${id}/`, data),

  // DELETE
  delete: (id: number) => axiosClient.delete(`/resources/${id}/`),
};
```

### Rules

✅ **DO:**

- Export all TypeScript interfaces
- Use descriptive names (`ResourcesResponse`, `ResourceFilters`)
- Type all API responses with generics
- Use `URLSearchParams` for query strings
- Keep functions pure (no side effects)

❌ **DON'T:**

- Import React or React Query
- Add business logic
- Handle errors (that's for Layer 2)

---

## Layer 2: API Hooks (React Query)

### Purpose

Create React Query hooks that wrap API functions with caching, loading states, and error handling.

### File Structure

Each api-hooks file should contain:

1. **Query Keys** - Centralized cache key definitions
2. **Query Hooks** - `useQuery` for GET requests
3. **Mutation Hooks** - `useMutation` for POST/PUT/PATCH/DELETE

### Template

```typescript
// api/api-hooks/use[Resource].ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { resourceApi, type ResourceFilters, type CreateResourceData } from "@/api/query-list/[resource]";

// ============================================
// 1. Query Keys (Centralized)
// ============================================

const RESOURCE_KEYS = {
  all: (filters?: ResourceFilters) => ["resources", filters] as const,
  detail: (id: number) => ["resources", id] as const,
};

// ============================================
// 2. Query Hooks (GET)
// ============================================

export const useResources = (filters?: ResourceFilters) => {
  return useQuery({
    queryKey: RESOURCE_KEYS.all(filters),
    queryFn: () => resourceApi.getAll(filters),
    select: (response) => response.data,
  });
};

export const useResource = (id: number) => {
  return useQuery({
    queryKey: RESOURCE_KEYS.detail(id),
    queryFn: () => resourceApi.getById(id),
    select: (response) => response.data,
    enabled: !!id,
  });
};

// ============================================
// 3. Mutation Hooks (POST/PATCH/DELETE)
// ============================================

export const useCreateResource = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateResourceData) => resourceApi.create(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      toast.success("Resource created successfully");
    },

    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || "Failed to create resource";
      toast.error(message);
    },
  });
};

export const useUpdateResource = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Resource> }) => resourceApi.update(id, data),

    onSuccess: (_response, variables) => {
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      queryClient.invalidateQueries({ queryKey: RESOURCE_KEYS.detail(variables.id) });
      toast.success("Resource updated successfully");
    },

    onError: (error: AxiosError<{ message?: string }>) => {
      toast.error(error.response?.data?.message || "Failed to update resource");
    },
  });
};

export const useDeleteResource = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => resourceApi.delete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      toast.success("Resource deleted successfully");
    },

    onError: (error: AxiosError<{ message?: string }>) => {
      toast.error(error.response?.data?.message || "Failed to delete resource");
    },
  });
};
```

### Rules

✅ **DO:**

- Define query keys at the top
- Include filters in query keys
- Use `select` to extract response data
- Invalidate queries after mutations
- Show toast notifications
- Type error responses

❌ **DON'T:**

- Hardcode query keys
- Forget to invalidate after mutations
- Skip error handling

---

## Usage in Components

### Query Hook (GET)

```typescript
import { useResources } from "@/api/api-hooks/useResources";

function ResourceList() {
  const { data, isLoading, error } = useResources({ page: 1 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading resources</div>;

  return (
    <div>
      {data?.results.map(resource => (
        <div key={resource.id}>{resource.name}</div>
      ))}
    </div>
  );
}
```

### Mutation Hook (POST/PATCH/DELETE)

```typescript
import { useCreateResource } from "@/api/api-hooks/useResources";

function CreateResourceForm() {
  const { mutate, isPending } = useCreateResource();

  const handleSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
```

---

## Common Patterns

### 1. Pagination

```typescript
// Query List
export interface PaginationFilters {
  page?: number;
  page_size?: number;
}

export const api = {
  getAll: (filters?: PaginationFilters) => {
    const params = new URLSearchParams();
    if (filters?.page) params.append("page", filters.page.toString());
    if (filters?.page_size) params.append("page_size", filters.page_size.toString());

    return axiosClient.get<PaginatedResponse>(`/endpoint/?${params.toString()}`);
  },
};

// Hook
export const useResources = (filters?: PaginationFilters) => {
  return useQuery({
    queryKey: ["resources", filters],
    queryFn: () => api.getAll(filters),
    select: (response) => response.data,
    keepPreviousData: true, // Keep old data while fetching new page
  });
};
```

### 2. Search & Filters

```typescript
// Query List
export interface SearchFilters {
  search?: string;
  status?: string;
  category?: string;
}

export const api = {
  getAll: (filters?: SearchFilters) => {
    const params = new URLSearchParams();
    if (filters?.search) params.append("search", filters.search);
    if (filters?.status) params.append("status", filters.status);
    if (filters?.category) params.append("category", filters.category);

    return axiosClient.get<Response>(`/endpoint/?${params.toString()}`);
  },
};
```

### 3. Date Range Filters

```typescript
// Query List
export interface DateRangeFilters {
  start_date?: string; // YYYY-MM-DD
  end_date?: string; // YYYY-MM-DD
}

export const api = {
  getAnalytics: (filters?: DateRangeFilters) => {
    const params = new URLSearchParams();
    if (filters?.start_date) params.append("start_date", filters.start_date);
    if (filters?.end_date) params.append("end_date", filters.end_date);

    const queryString = params.toString();
    const url = queryString ? `/analytics/?${queryString}` : "/analytics/";

    return axiosClient.get<AnalyticsData>(url);
  },
};
```

### 4. FormData (File Uploads)

```typescript
// Query List
export const api = {
  uploadWithImage: (data: FormData) => axiosClient.post<Response>("/upload/", data),
};

// Hook
export const useUpload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UploadFormData) => {
      const formData = new FormData();
      formData.append("name", data.name);
      if (data.image) formData.append("image", data.image);

      return api.uploadWithImage(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["uploads"] });
      toast.success("Upload successful");
    },
  });
};
```

### 5. Conditional Queries

```typescript
// Only fetch when ID exists
export const useResource = (id?: number) => {
  return useQuery({
    queryKey: ["resources", id],
    queryFn: () => api.getById(id!),
    enabled: !!id, // Disable if no ID
  });
};
```

---

## Query Key Patterns

### Hierarchical Structure

```typescript
const RESOURCE_KEYS = {
  all: () => ["resources"] as const,
  lists: () => ["resources", "list"] as const,
  list: (filters: Filters) => ["resources", "list", filters] as const,
  details: () => ["resources", "detail"] as const,
  detail: (id: number) => ["resources", "detail", id] as const,
};

// Invalidate all resource queries
queryClient.invalidateQueries({ queryKey: RESOURCE_KEYS.all() });

// Invalidate only lists
queryClient.invalidateQueries({ queryKey: RESOURCE_KEYS.lists() });

// Invalidate specific detail
queryClient.invalidateQueries({ queryKey: RESOURCE_KEYS.detail(123) });
```

---

## Setup Requirements

### 1. Axios Instance

```typescript
// lib/axiosInstance.ts
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth token
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login
    }
    return Promise.reject(error);
  },
);
```

### 2. TanStack Query Provider

```typescript
// main.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  );
}
```

---

## Implementation Checklist

When adding a new API feature:

- [ ] Create query-list file in `api/query-list/[resource].ts`
- [ ] Define TypeScript interfaces (response, request, filters)
- [ ] Create API object with endpoint functions
- [ ] Create api-hooks file in `api/api-hooks/use[Resource].ts`
- [ ] Define query keys constant
- [ ] Create query hooks for GET requests
- [ ] Create mutation hooks for POST/PATCH/DELETE
- [ ] Add error handling with toast notifications
- [ ] Implement query invalidation after mutations
- [ ] Test in component

---

## Benefits Summary

| Benefit                  | Description                                   |
| ------------------------ | --------------------------------------------- |
| **Type Safety**          | Full TypeScript support from API to component |
| **Caching**              | Automatic caching with TanStack Query         |
| **Reusability**          | API functions can be used anywhere            |
| **Testability**          | Easy to mock and test each layer              |
| **Maintainability**      | Clear, predictable structure                  |
| **Developer Experience** | Autocomplete, type checking, clear patterns   |
| **Error Handling**       | Centralized error handling with user feedback |
| **Performance**          | Reduced API calls through intelligent caching |

---

## Quick Reference

### Query List File

```typescript
// api/query-list/[resource].ts
export interface Resource {
  /* ... */
}
export interface ResourceFilters {
  /* ... */
}

export const resourceApi = {
  getAll: (filters?) => axiosClient.get<Response>(url),
  getById: (id) => axiosClient.get<Resource>(`/path/${id}/`),
  create: (data) => axiosClient.post<Resource>("/path/", data),
  update: (id, data) => axiosClient.patch<Resource>(`/path/${id}/`, data),
  delete: (id) => axiosClient.delete(`/path/${id}/`),
};
```

### API Hooks File

```typescript
// api/api-hooks/use[Resource].ts
const KEYS = {
  all: (filters?) => ["resource", filters] as const,
  detail: (id) => ["resource", id] as const,
};

export const useResources = (filters?) =>
  useQuery({
    /* ... */
  });
export const useResource = (id) =>
  useQuery({
    /* ... */
  });
export const useCreateResource = () =>
  useMutation({
    /* ... */
  });
export const useUpdateResource = () =>
  useMutation({
    /* ... */
  });
export const useDeleteResource = () =>
  useMutation({
    /* ... */
  });
```

---

**Version:** 1.0.0  
**Last Updated:** February 2026
