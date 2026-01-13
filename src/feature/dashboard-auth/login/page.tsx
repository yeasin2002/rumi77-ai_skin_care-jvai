'use client'

import logo from '@/assets/image/logo-compact.svg'
import { IconInput } from '@/components/shared/auth-input'
import { SiteHeading } from '@/components/shared/site-heading'
import { Button } from '@/components/ui'
import { Checkbox } from '@/components/ui/checkbox'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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

const DashboardLogin = () => {
  const [showPassword, setShowPassword] = useState(false)

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
  }

  return (
    <div className="flex w-full flex-col items-center justify-center px-8 lg:w-1/2">
      <div className="w-full max-w-md">
        <Image src={logo} alt="Logo" className="mx-auto mb-10" />

        {/* Heading */}
        <SiteHeading
          heading="Welcome Back!"
          subHeading="Log in to manage AI skin analysis, product recommendations, users, and system settings securely."
          wrapperClassname="mb-8"
        />

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <IconInput
            variant="default"
            label="Email"
            placeholder="Kenzi.Lawson@Example.Com"
            type="email"
            error={errors.email?.message}
            {...register('email')}
          />

          <div className="relative">
            <IconInput
              variant="default"
              label="Password"
              placeholder="********"
              type={showPassword ? 'text' : 'password'}
              error={errors.password?.message}
              {...register('password')}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-muted-foreground hover:text-foreground absolute top-9 right-3"
            >
              {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </button>
          </div>

          {/* Remember me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <Link
              href={{ pathname: '/dashboard/forget-password' }}
              className="text-main-button text-sm hover:underline"
            >
              Forget Password?
            </Link>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'LOGGING IN...' : 'LOG IN'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default DashboardLogin
