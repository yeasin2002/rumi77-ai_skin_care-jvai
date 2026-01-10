'use client'

import { Button } from '@/components/ui'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Link } from '@/i18n/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { ArrowLeft } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const otpSchema = z.object({
  otp: z.string().min(6, 'Please enter all 6 digits'),
})

type OtpFormData = z.infer<typeof otpSchema>

const VerifyOTP = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: '' },
  })

  const onSubmit = async (data: OtpFormData) => {
    // TODO: API integration
    console.log(data)
  }

  const handleResend = () => {
    // TODO: Resend OTP API call
    console.log('Resend OTP')
  }

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="auth-container">
        <Link href="/forget-password" className="auth-back-btn">
          <ArrowLeft className="size-5" />
        </Link>

        <div className="mb-8 text-center">
          <h1 className="font-serif text-4xl italic">Verify OTP</h1>
          <p className="text-muted-foreground mt-2">
            We&apos;ve sent a 6-digit code to your email.
            <br />
            Enter the code below to continue
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <p className="mb-3 text-sm font-medium">Enter pin</p>
            <Controller
              name="otp"
              control={control}
              render={({ field }) => (
                <InputOTP
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS}
                  value={field.value}
                  onChange={field.onChange}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              )}
            />
            {errors.otp && <p className="text-destructive mt-2 text-sm">{errors.otp.message}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </Button>

          <p className="text-muted-foreground text-center text-sm">
            Don&apos;t get code?{' '}
            <button
              type="button"
              onClick={handleResend}
              className="text-foreground font-semibold hover:underline"
            >
              Resend
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default VerifyOTP
