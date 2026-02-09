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

export interface RegisterRequestData {
  email: string
  password: string
  full_name?: string
  gender?: string
  date_of_birth?: string
  image?: File
}

export interface RegisterQueryParams {
  lean?: string
}

export interface RefreshTokenRequestData {
  refresh: string
}

export interface RefreshTokenQueryParams {
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
  access: string
  refresh: string
  user: LoginUser
}

export interface LoginResponse {
  success: boolean
  message: string
  data: LoginSuccessData
}

export interface RegisterResponse {
  success: boolean
  message: string
  data: LoginSuccessData
}

export interface RefreshTokenResponse {
  success: boolean
  message: string
  data: {
    access: string
  }
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

  // POST - Register (email, password, optional profile fields)
  register: (data: RegisterRequestData, params?: RegisterQueryParams) => {
    const formData = new FormData()
    formData.append('email', data.email)
    formData.append('password', data.password)
    if (data.full_name) formData.append('full_name', data.full_name)
    if (data.gender) formData.append('gender', data.gender)
    if (data.date_of_birth) formData.append('date_of_birth', data.date_of_birth)
    if (data.image) formData.append('image', data.image)

    const queryParams = new URLSearchParams()
    if (params?.lean) queryParams.append('lean', params.lean)

    const queryString = queryParams.toString()
    const url = queryString ? `/register/?${queryString}` : '/register/'

    return axiosClient.post<RegisterResponse>(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },

  // POST - Refresh Token
  refresh: (data: RefreshTokenRequestData, params?: RefreshTokenQueryParams) => {
    const formData = new FormData()
    formData.append('refresh', data.refresh)

    const queryParams = new URLSearchParams()
    if (params?.lean) queryParams.append('lean', params.lean)

    const queryString = queryParams.toString()
    const url = queryString ? `/refresh/?${queryString}` : '/refresh/'

    return axiosClient.post<RefreshTokenResponse>(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
