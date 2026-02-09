import axios from 'axios'
import { useAuthStore } from '@/store/auth.store'

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

axiosClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken

  if (token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
