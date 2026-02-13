'use client'

import { IconInput } from '@/components/shared/auth-input'
import { Button } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const customerSchema = z.object({
  name: z.string().min(1, 'Customer name is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  idNumber: z.string().min(1, 'ID number is required'),
  location: z.string().min(1, 'Location is required'),
  totalSpent: z.string().min(1, 'Total spent is required'),
  totalOrder: z.string().min(1, 'Total order is required'),
})

type CustomerFormData = z.infer<typeof customerSchema>

export const AddCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
  })

  const onSubmit = async (data: CustomerFormData) => {
    // TODO: API integration
    console.log(data)
  }

  const labelClassName = 'text-white'
  const inputClassName = 'bg-transparent border-white/30 text-white placeholder:text-white/50'

  return (
    <div className="space-y-8">
      {/* <div>
        <button type="button" className="flex items-center gap-2 text-white hover:text-white/80">
          <div className="rounded-full bg-white p-2">
            <ArrowLeft className="text-main-button size-5" />
          </div>
        </button>
      </div> */}

      <h1 className="text-3xl font-medium text-white">Add Customer</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
          <label className={labelClassName}>Customer Name</label>
          <IconInput
            placeholder="Name"
            variant="default"
            className={inputClassName}
            error={errors.name?.message}
            {...register('name')}
          />
        </div>

        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
          <label className={labelClassName}>Phone Number</label>
          <IconInput
            placeholder="018922082526"
            variant="default"
            className={inputClassName}
            error={errors.phoneNumber?.message}
            {...register('phoneNumber')}
          />
        </div>

        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
          <label className={labelClassName}>ID Number</label>
          <IconInput
            placeholder="#216753"
            variant="default"
            className={inputClassName}
            error={errors.idNumber?.message}
            {...register('idNumber')}
          />
        </div>

        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
          <label className={labelClassName}>Location</label>
          <IconInput
            placeholder="6391 Elgin St. Celina, Delaware 10299"
            variant="default"
            className={inputClassName}
            error={errors.location?.message}
            {...register('location')}
          />
        </div>

        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
          <label className={labelClassName}>Total Spent</label>
          <IconInput
            placeholder="$50.75"
            variant="default"
            className={inputClassName}
            error={errors.totalSpent?.message}
            {...register('totalSpent')}
          />
        </div>

        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
          <label className={labelClassName}>Total Order</label>
          <IconInput
            placeholder="2"
            variant="default"
            className={inputClassName}
            error={errors.totalOrder?.message}
            {...register('totalOrder')}
          />
        </div>

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            className="text-main-button bg-white px-12 hover:bg-white/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'SAVING...' : 'SAVE'}
          </Button>
        </div>
      </form>
    </div>
  )
}
