'use client'

import logo from '@/assets/image/logo-compact.png'
import { IconInput } from '@/components/shared/auth-input'
import { SiteHeading } from '@/components/shared/site-heading'
import { Button } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
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
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
    <div className="flex w-full flex-col items-center justify-center px-8 lg:w-1/2">
      <div className="w-full max-w-md">
        <Image src={logo} alt="Logo" className="mx-auto mb-10" />

        {/* Heading */}
        <SiteHeading
          heading="Reset Password"
          subHeading="Enter a new password"
          wrapperClassname="mb-8"
        />

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative">
            <IconInput
              variant="default"
              label="New Password"
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

          <div className="relative">
            <IconInput
              variant="default"
              label="Confirm Password"
              placeholder="********"
              type={showConfirmPassword ? 'text' : 'password'}
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-muted-foreground hover:text-foreground absolute top-9 right-3"
            >
              {showConfirmPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </button>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'UPDATING...' : 'UPDATE PASSWORD'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
