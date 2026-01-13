'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Pencil } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { IconInput } from '@/components/shared/auth-input'
import { Button } from '@/components/ui'

const settingsSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  gender: z.string().min(1, 'Gender is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  skinType: z.string().min(1, 'Skin type is required'),
})

type SettingsFormData = z.infer<typeof settingsSchema>

const Settings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      name: 'Hafsa Binte Kalam',
      gender: 'Female',
      email: 'hello.hafsabinte@gmail.com',
      skinType: 'Combination',
    },
  })

  const onSubmit = async (data: SettingsFormData) => {
    // TODO: API integration
    console.log(data)
  }

  return (
    <div className="bg-main-button rounded-xl p-6">
      <h2 className="font-open-sans mb-6 text-4xl leading-none font-normal text-[#F7F5ED]!">
        Account Settings
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <IconInput
          label="Name"
          placeholder="Enter your name"
          variant="default"
          labelClassName="text-white/70"
          className="placeholder:text-main-button text-main-button font-open-sans text-sm"
          error={errors.name?.message}
          {...register('name')}
        />
        <IconInput
          label="Gender"
          placeholder="Enter your gender"
          variant="default"
          labelClassName="text-white/70"
          className="placeholder:text-main-button text-main-button font-open-sans text-sm"
          error={errors.gender?.message}
          {...register('gender')}
        />
        <IconInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          variant="default"
          labelClassName="text-white/70"
          className="placeholder:text-main-button text-main-button font-open-sans text-sm"
          error={errors.email?.message}
          {...register('email')}
        />
        <IconInput
          label="Skin Type"
          placeholder="Enter your skin type"
          variant="default"
          labelClassName="text-white/70"
          className="placeholder:text-main-button text-main-button font-open-sans text-sm"
          error={errors.skinType?.message}
          {...register('skinType')}
        />

        <Button
          type="submit"
          variant="outline"
          className="bg-background text-foreground mt-2 px-12 py-5"
          disabled={isSubmitting}
        >
          <Pencil className="size-4" />
          {isSubmitting ? 'Saving...' : 'Edit Profile'}
        </Button>
      </form>
    </div>
  )
}

export default Settings
