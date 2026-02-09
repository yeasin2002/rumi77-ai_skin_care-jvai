'use client'

import { useAuthStore } from '@/store/auth.store'
import { useRouter } from 'next/navigation'

export const DashboardGuards = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const token = useAuthStore((state) => state.token)

  if (typeof window === 'undefined') return null
  if (!token.accessToken) {
    router.push('/login')
  }
  return children
}
