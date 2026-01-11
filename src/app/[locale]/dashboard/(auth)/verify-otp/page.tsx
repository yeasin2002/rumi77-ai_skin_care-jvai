'use client'

import logo from '@/assets/image/logo-compact.png'
import { SiteHeading } from '@/components/shared/site-heading'
import { Button } from '@/components/ui'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { zodResolver } from '@hookform/resolvers/zod'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const verifyOtpSchema = z.object({
  otp: z.string().min(6, 'Please enter all 6 digits').max(6),
})

type VerifyOtpFormData = z.infer<typeof verifyOtpSchema>

const VerifyOTP = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VerifyOtpFormData>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      otp: '',
    },
  })

  const onSubmit = async (data: VerifyOtpFormData) => {
    // TODO: API integration
    console.log(data)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center px-8 lg:w-1/2">
      <div className="w-full max-w-md">
        <Image src={logo} alt="Logo" className="mx-auto mb-10" />

        {/* Heading */}
        <SiteHeading
          heading="Verify OTP"
          subHeading="We've sent 6-digit code to your email"
          wrapperClassname="mb-8"
        />

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="text-foreground mb-2 block text-sm font-medium">Enter pin</label>
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
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="bg-muted/50 size-12 rounded-lg border text-lg first:rounded-lg last:rounded-lg"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              )}
            />
            {errors.otp && <p className="text-destructive mt-1 text-sm">{errors.otp.message}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'VERIFYING...' : 'VERIFY OTP'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default VerifyOTP
