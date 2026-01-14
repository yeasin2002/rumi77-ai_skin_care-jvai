'use client'

import { Button } from '@/components/ui'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Link } from '@/i18n/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const VerifyOTP = () => {
  const t = useTranslations('auth.verifyOtp')

  const otpSchema = z.object({
    otp: z.string().min(6, t('validation.otpRequired')),
  })

  type OtpFormData = z.infer<typeof otpSchema>

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
          <h1 className="auth-heading">{t('title')}</h1>
          <p className="auth-subheading">
            {t('subtitle')}
            <br />
            {t('subtitleContinue')}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col items-center">
            <p className="mb-3 w-full text-sm font-medium">{t('enterPin')}</p>
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
                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={0}
                      className="size-12 rounded-lg border-none bg-[#F7F8F9] text-lg"
                    />
                    <InputOTPSlot
                      index={1}
                      className="size-12 rounded-lg border-none bg-[#F7F8F9] text-lg"
                    />
                    <InputOTPSlot
                      index={2}
                      className="size-12 rounded-lg border-none bg-[#F7F8F9] text-lg"
                    />
                    <InputOTPSlot
                      index={3}
                      className="size-12 rounded-lg border-none bg-[#F7F8F9] text-lg"
                    />
                    <InputOTPSlot
                      index={4}
                      className="size-12 rounded-lg border-none bg-[#F7F8F9] text-lg"
                    />
                    <InputOTPSlot
                      index={5}
                      className="size-12 rounded-lg border-none bg-[#F7F8F9] text-lg"
                    />
                  </InputOTPGroup>
                </InputOTP>
              )}
            />
            {errors.otp && <p className="text-destructive mt-2 text-sm">{errors.otp.message}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t('submitting') : t('submitButton')}
          </Button>

          <p className="text-muted-foreground text-center text-sm">
            {t('noCode')}{' '}
            <button
              type="button"
              onClick={handleResend}
              className="text-foreground font-semibold hover:underline"
            >
              {t('resendLink')}
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default VerifyOTP
