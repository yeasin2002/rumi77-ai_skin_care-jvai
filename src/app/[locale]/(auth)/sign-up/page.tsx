'use client'

import { AuthInput } from '@/components/shared'
import { Button } from '@/components/ui'
import { Link } from '@/i18n/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Lock, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signUpSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
})

type SignUpFormData = z.infer<typeof signUpSchema>

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = async (data: SignUpFormData) => {
    // TODO: API integration
    console.log(data)
  }

  return (
    <div className="auth-container">
      <Link href="/" className="auth-back-btn">
        <ArrowLeft className="size-5" />
      </Link>

      <div className="mb-8 text-center">
        <h1 className="auth-heading">Create Account</h1>
        <p className="auth-subheading">
          Join Glowmi to discover your personalized skincare routine and expert recommendations.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AuthInput
          icon={Mail}
          placeholder="Email"
          type="email"
          error={errors.email?.message}
          {...register('email')}
        />
        <AuthInput
          icon={Lock}
          placeholder="Password"
          type="password"
          error={errors.password?.message}
          {...register('password')}
        />

        <Button type="submit" className="auth-action-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Creating account...' : 'Sign Up'}
        </Button>

        <p className="text-muted-foreground text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-foreground font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp
