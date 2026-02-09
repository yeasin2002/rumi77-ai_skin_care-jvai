import { axiosClient } from '@/lib/axios'

// ============================================
// 1. TypeScript Interfaces
// ============================================

export interface LoginRequestData {
  email: string
  password: string
}

export interface LoginQueryParams {
  lean?: string
}

export interface LoginUser {
  id?: number
  email?: string
  role?: string
  full_name?: string
  gender?: string
  date_of_birth?: string
  image?: string
  [key: string]: unknown
}

export interface LoginSuccessData {
  access_token: string
  refresh_token: string
  user: LoginUser
}

export interface LoginResponse {
  success: boolean
  message: string
  data: LoginSuccessData
}

// ============================================
// 2. API Object
// ============================================

export const authApi = {
  // POST - Login (email & password via form-data)
  login: (data: LoginRequestData, params?: LoginQueryParams) => {
    const formData = new FormData()
    formData.append('email', data.email)
    formData.append('password', data.password)

    const queryParams = new URLSearchParams()
    if (params?.lean) queryParams.append('lean', params.lean)

    const queryString = queryParams.toString()
    const url = queryString ? `/login/?${queryString}` : '/login/'

    return axiosClient.post<LoginResponse>(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
