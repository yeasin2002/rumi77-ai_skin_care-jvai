'use client'

import { AuthInput } from '@/components/shared'
import { Button } from '@/components/ui'
import { Link } from '@/i18n/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Lock, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

const Login = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    // TODO: API integration
    console.log(data)
    router.push('/skin-analyzer/analysis')
  }

  return (
    <div className="auth-container">
      <Link href="/" className="auth-back-btn">
        <ArrowLeft className="size-5" />
      </Link>

      <div className="mb-8 text-center">
        <h1 className="auth-heading">Welcome Back</h1>
        <p className="auth-subheading">
          Log in to access your personalized skincare routine, expert recommendations, and more.
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
        <div>
          <AuthInput
            icon={Lock}
            placeholder="Password"
            type="password"
            error={errors.password?.message}
            {...register('password')}
          />
          <div className="mt-2 text-end">
            <Link href="/forget-password" className="text-main-button text-sm hover:underline">
              Forget Password?
            </Link>
          </div>
        </div>

        <Button type="submit" className="auth-action-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>

        <p className="text-muted-foreground text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-foreground font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
