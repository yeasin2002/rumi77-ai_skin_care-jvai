'use client'

import { AuthInput } from '@/components/shared'
import { Button } from '@/components/ui'
import { Link } from '@/i18n/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Lock } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const onSubmit = async (data: ResetPasswordFormData) => {
    // TODO: API integration
    console.log(data)
  }

  return (
    <div className="auth-container">
      <Link href="/login" className="auth-back-btn">
        <ArrowLeft className="size-5" />
      </Link>

      <div className="mb-8 text-center">
        <h1 className="font-serif text-4xl italic">Reset Password</h1>
        <p className="text-muted-foreground mt-2">Create a new one</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AuthInput
          icon={Lock}
          placeholder="Create a password"
          type="password"
          error={errors.password?.message}
          {...register('password')}
        />
        <AuthInput
          icon={Lock}
          placeholder="Confirm password"
          type="password"
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Updating...' : 'Update Password'}
        </Button>
      </form>
    </div>
  )
}

export default ResetPassword
