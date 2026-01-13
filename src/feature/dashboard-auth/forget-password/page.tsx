'use client'

import logo from '@/assets/image/logo-compact.svg'
import { IconInput } from '@/components/shared/auth-input'
import { SiteHeading } from '@/components/shared/site-heading'
import { Button } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const forgetPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
})

type ForgetPasswordFormData = z.infer<typeof forgetPasswordSchema>

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgetPasswordFormData>({
    resolver: zodResolver(forgetPasswordSchema),
  })

  const onSubmit = async (data: ForgetPasswordFormData) => {
    // TODO: API integration
    console.log(data)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center px-8 lg:w-1/2">
      <div className="w-full max-w-md">
        <Image src={logo} alt="Logo" className="mx-auto mb-10" />

        {/* Heading */}
        <SiteHeading
          heading="Forget Password"
          subHeading="Enter your email to reset password"
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

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'SENDING...' : 'SEND OTP'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
