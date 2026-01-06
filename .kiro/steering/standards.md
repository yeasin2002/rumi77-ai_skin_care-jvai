# Code Standards & API Integration

## Code Quality Principles

- **Type Safety:** Strict TypeScript, prefer `unknown` over `any`
- **Accessibility:** Semantic HTML, ARIA attributes, keyboard handlers
- **Performance:** Efficient code, proper error handling
- **Consistency:** Follow existing patterns

## TypeScript

```typescript
// ✅ Do
export type UserRole = 'customer' | 'admin'
const users: User[] = []
import type { User } from '@/types'

// ❌ Don't
enum UserRole { Customer, Admin }  // Use union types
const users: any = []              // Use proper types
```

- Use `as const` for literals, `T[]` for arrays
- No enums, namespaces, or non-null assertions unless necessary

## React & Next.js

- Don't define components inside components
- Use default exports for components
- Call hooks at top level only
- Include all hook dependencies
- Use `next/image`, not `<img>`
- Use `<>...</>` not `<Fragment>`
- Don't use array index as keys

## Accessibility

- Button: always include `type` attribute
- `onClick` → add keyboard handler (`onKeyUp`/`onKeyDown`)
- `onMouseOver` → add `onFocus`/`onBlur`
- Meaningful alt text (not "image", "photo")
- `lang` attribute on html element

## Error Handling

```typescript
// ✅ Good
const fetchData = async (id: string) => {
  try {
    const response = await api.get(id)
    return { success: true, data: response }
  } catch (error) {
    console.error('Failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown' }
  }
}
```

## Modern JS

- `const`/`let` only (no `var`)
- Template literals, destructuring
- `for...of` over `forEach`
- `Promise.all()` for parallel async
- Optional chaining (`?.`)

## Security

- No hardcoded secrets
- Validate/sanitize inputs
- `target="_blank"` → add `rel="noopener"`
- Store JWT in httpOnly cookies (not localStorage)

## Testing

- Descriptive test names
- Test happy path + error scenarios
- No focused tests (`fit`, `fdescribe`) in commits
- Mock API calls in tests

---

## API Integration

### API Client Setup

```typescript
// src/lib/api/client.ts
const apiClient = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // Include credentials for httpOnly cookies
  credentials: 'include',
}
```

### Type-Safe API Responses

```typescript
// src/types/api.ts
export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
}

// Validate with Zod
const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  role: z.enum(['customer', 'admin']),
})
```

### React Query Usage

```typescript
// Use React Query for server state
const { data, isLoading, error } = useQuery({
  queryKey: ['products'],
  queryFn: () => api.products.getAll(),
})
```

### API Endpoints (Frontend calls)

| Feature   | Endpoints                                      |
| --------- | ---------------------------------------------- |
| Auth      | POST /auth/login, /auth/register, /auth/logout |
| Products  | GET /products, /products/:id                   |
| Cart      | GET/POST/PUT/DELETE /cart                      |
| Orders    | GET/POST /orders                               |
| AI        | POST /ai/analyze, /ai/chat                     |
| User      | GET/PUT /user/profile, /user/addresses         |

### Error Handling

- Handle 401 → redirect to login
- Handle 403 → show forbidden message
- Handle 500 → show generic error
- Handle network errors gracefully

---

## AI Features (Frontend)

### Skin Analyzer UI

- Quick Check: text input form
- Deep Profile: multi-step form with optional photo upload
- Display loading states during API calls

### Chat Assistant UI

- Real-time chat interface
- Message history display
- Product recommendation cards

### Required UI Elements

- Consent modal before AI analysis (PDPL)
- Non-medical disclaimer display
- Loading/streaming states for AI responses

### Disclaimers (Required)

**EN:** "Glowmi AI provides educational skincare guidance only and does not diagnose, treat, or prescribe. Consult a dermatologist for medical concerns."

**AR:** "يقدم Glowmi AI إرشادات تعليمية للعناية بالبشرة فقط ولا يقوم بالتشخيص أو العلاج أو الوصف الطبي. استشر طبيب الأمراض الجلدية للمخاوف الطبية."
