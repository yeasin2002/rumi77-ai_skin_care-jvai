# Code Standards & AI Integration

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
enum UserRole {
  Customer,
  Admin,
} // Use union types
const users: any = [] // Use proper types
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
- No `eval()` or dynamic code execution

## Testing

- Descriptive test names
- Test happy path + error scenarios
- No focused tests (`fit`, `fdescribe`) in commits
- Mock external dependencies

---

## AI Integration

### Features

**Skin Analyzer**

- Quick Check: text-based basic assessment
- Deep Profile: comprehensive with optional photo
- Store inputs in `ai_inputs` table

**Chat Assistant ("Ask Glowmi")**

- Conversational skincare advice
- Product recommendations (Glowmi SKUs only)
- Ingredient explanations

### AI Outputs

- AM/PM routines, ingredient reasoning
- Safe/Avoid ingredient lists
- Product recommendations
- Store in `ai_outputs` table

### RAG Architecture

- Knowledge base: Glowmi products + INCI data
- Recommendations only from available products
- Consistent responses for same issues

### Safety Rules Engine

| Rule           | Flagged Items                                     |
| -------------- | ------------------------------------------------- |
| Pregnancy      | Retinoids, strong acids, hydroquinone             |
| Conflicts      | Retinol + AHA/BHA, Vitamin C + Niacinamide timing |
| Sensitive Skin | Reduce actives, prioritize gentle/fragrance-free  |
| Strong Actives | High-concentration retinoids, chemical peels      |

### Required Consent

- PDPL-compliant modal before AI analysis
- Bilingual (EN + AR)
- Log in `consent_audit` table

### API Endpoints

```
POST /api/ai/analyze  # Skin analysis (requires consent)
POST /api/ai/chat     # Chat (requires session)
GET  /api/ai/history  # Past analyses (requires auth)
```

### Data Schema

**ai_inputs:** id, user_id, session_id, input_type, content, image_url, locale, created_at

**ai_outputs:** id, input_id, routine_am, routine_pm, safe_ingredients, avoid_ingredients, product_recommendations, reasoning, warnings, created_at

**formulation_ideas:** id, concept_name, key_ingredients, suggested_inci, target_concerns, demand_score, generated_at

### R&D Intelligence

- Formulation Radar: trending concerns, ingredient demand
- Lab Brief: concept name, key ingredients, INCI list, target profiles
- Analytics: geographic trends, demand clusters, product-gap matrix

### Disclaimers (Required)

**EN:** "Glowmi AI provides educational skincare guidance only and does not diagnose, treat, or prescribe. Consult a dermatologist for medical concerns."

**AR:** "يقدم Glowmi AI إرشادات تعليمية للعناية بالبشرة فقط ولا يقوم بالتشخيص أو العلاج أو الوصف الطبي. استشر طبيب الأمراض الجلدية للمخاوف الطبية."
