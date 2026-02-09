'use client'

import { useAuthStore } from '@/store/auth.store'
import { useRouter } from 'next/navigation'

export const DashboardGuards = ({ children }: { children: React.ReactNode }) => {
  const token = useAuthStore((state) => state.token)
  console.log('🚀 ~ DashboardGuards ~ token:', token)
  const router = useRouter()
  if (!token.accessToken) {
    router.push('/login')
  }
  return children
}
