# cls-extended

Zero-runtime Tailwind CSS responsive class transformer. Write cleaner responsive syntax that compiles to standard Tailwind classes at build time.

## Features

- ⚡ **Zero Runtime Overhead** - Build-time transformations for Vite/Webpack (0KB runtime). Next.js 16+ with Turbopack uses tiny runtime fallback (~0.5KB)
- 🎨 **Better DX** - Reduces code verbosity by ~40% for responsive designs
- 🔧 **Universal** - Works with Vite, Webpack, Rollup, esbuild, Rspack, Rolldown, and Farm
- 📦 **Tiny Bundle** - ~8KB package
- 🔒 **Type Safe** - Full TypeScript support with intelligent autocomplete

## Usage

### Basic Usage

```tsx
import { cls } from 'cls-extended'

function Component() {
  return (
    <div
      className={cls('text-xl font-bold', {
        md: 'text-2xl',
        lg: 'text-3xl',
      })}
    >
      Responsive Text
    </div>
  )
}
```

**Compiles to:**

```tsx
<div className="text-xl font-bold md:text-2xl lg:text-3xl">Responsive Text</div>
```

### Multiple Responsive Classes

```tsx
cls('p-4 bg-white', {
  md: 'p-6 bg-gray-50',
  lg: 'p-8 shadow-lg',
  xl: 'max-w-7xl',
})

// Compiles to:
// "p-4 bg-white md:p-6 md:bg-gray-50 lg:p-8 lg:shadow-lg xl:max-w-7xl"
```

### Complex Layouts

```tsx
function Card() {
  return (
    <div
      className={cls('container mx-auto px-4', {
        sm: 'px-6',
        md: 'max-w-4xl px-8',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl px-12',
      })}
    >
      <h1
        className={cls('text-2xl font-bold text-gray-900', {
          md: 'text-3xl',
          lg: 'text-4xl',
          xl: 'text-5xl',
        })}
      >
        Heading
      </h1>
      <p
        className={cls('text-base text-gray-600', {
          md: 'text-lg',
          lg: 'text-xl',
        })}
      >
        Description
      </p>
    </div>
  )
}
```

### Conditional Classes

```tsx
function Button({ variant, size }) {
  return (
    <button
      className={cls(
        'rounded font-medium',
        variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200',
        {
          md: size === 'large' ? 'px-6 py-3 text-lg' : 'px-4 py-2',
          lg: 'px-8 py-4 text-xl',
        }
      )}
    >
      Click me
    </button>
  )
}
```

### Grid Layouts

```tsx
function Grid() {
  return (
    <div
      className={cls('grid grid-cols-1 gap-4', {
        sm: 'grid-cols-2 gap-6',
        md: 'grid-cols-3',
        lg: 'grid-cols-4 gap-8',
        xl: 'grid-cols-6',
      })}
    >
      {/* Grid items */}
    </div>
  )
}
```

## API Reference

### `cls(baseClasses, responsiveClasses?)`

Transform responsive Tailwind classes at build time.

**Parameters:**

- `baseClasses` (string) - Base Tailwind classes applied at all breakpoints
- `responsiveClasses` (object, optional) - Responsive breakpoint classes

**Supported Breakpoints:**

| Breakpoint | Min Width | Description         |
| ---------- | --------- | ------------------- |
| `sm`       | 640px     | Small devices       |
| `md`       | 768px     | Medium devices      |
| `lg`       | 1024px    | Large devices       |
| `xl`       | 1280px    | Extra large devices |
| `2xl`      | 1536px    | 2X extra large      |

**Returns:**

- At build time: Static string with all classes
- At runtime (fallback): Same string generated dynamically

**Examples:**

```ts
// Single breakpoint
cls('p-4', { md: 'p-6' })
// → "p-4 md:p-6"

// Multiple breakpoints
cls('text-base', { md: 'text-lg', lg: 'text-xl' })
// → "text-base md:text-lg lg:text-xl"

// Multiple classes per breakpoint
cls('p-4 bg-white', { md: 'p-6 shadow-lg' })
// → "p-4 bg-white md:p-6 md:shadow-lg"

// Only base classes
cls('container mx-auto')
// → "container mx-auto"

// Only responsive classes
cls('', { md: 'hidden', lg: 'block' })
// → "md:hidden lg:block"
```

### Build-Time Transformation

**Input (what you write):**

```tsx
cls('text-xl font-bold', { md: 'text-2xl', lg: 'text-3xl' })
```

**Output (what gets compiled):**

```tsx
'text-xl font-bold md:text-2xl lg:text-3xl'
```

## TypeScript Support

Full TypeScript support with intelligent autocomplete:

```ts
import { cls } from 'cls-extended'

// Type-safe breakpoints
const classes = cls('p-4', {
  md: 'p-6', // ✅ Valid breakpoint
  lg: 'p-8', // ✅ Valid breakpoint
  // @ts-expect-error - Invalid breakpoint
  invalid: 'p-10',
})
```
