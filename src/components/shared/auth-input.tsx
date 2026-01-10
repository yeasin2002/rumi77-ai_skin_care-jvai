import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'
import { forwardRef } from 'react'

type AuthInputProps = {
  icon: LucideIcon
  placeholder: string
  type?: string
  className?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ icon: Icon, placeholder, type = 'text', className, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <InputGroup
          className={cn(
            'border-input h-12 rounded-none border-0 border-b shadow-none',
            error && 'border-destructive',
            className
          )}
        >
          <InputGroupAddon className={cn('text-muted-foreground', error && 'text-destructive')}>
            <Icon className="size-5" />
          </InputGroupAddon>
          <InputGroupInput
            ref={ref}
            type={type}
            placeholder={placeholder}
            className="placeholder:text-muted-foreground h-full text-base"
            aria-invalid={!!error}
            {...props}
          />
        </InputGroup>
        {error && <p className="text-destructive text-sm">{error}</p>}
      </div>
    )
  }
)

AuthInput.displayName = 'AuthInput'
