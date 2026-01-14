'use client'

import { AuthInput } from '@/components/shared'
import { Button } from '@/components/ui'
import { Link } from '@/i18n/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const ForgetPassword = () => {
  const t = useTranslations('auth.forgetPassword')

  const forgetPasswordSchema = z.object({
    email: z.string().min(1, t('validation.emailRequired')).email(t('validation.emailInvalid')),
  })

  type ForgetPasswordFormData = z.infer<typeof forgetPasswordSchema>

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
    <div className="auth-container">
      <Link href="/login" className="auth-back-btn">
        <ArrowLeft className="size-5" />
      </Link>

      <div className="mb-8 text-center">
        <h1 className="auth-heading">{t('title')}</h1>
        <p className="auth-subheading">{t('subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AuthInput
          icon={Mail}
          placeholder={t('emailPlaceholder')}
          type="email"
          error={errors.email?.message}
          {...register('email')}
        />

        <Button type="submit" className="auth-action-btn" disabled={isSubmitting}>
          {isSubmitting ? t('submitting') : t('submitButton')}
        </Button>
      </form>
    </div>
  )
}

export default ForgetPassword
