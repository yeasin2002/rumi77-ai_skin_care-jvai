import { axiosClient } from '@/lib/axios'

// ============================================
// 1. TypeScript Interfaces
// ============================================

export interface TempInfo {
  id?: number
  full_name: string
  email: string
  contact_number: string
  skin_type: string
  birthday?: string
  lean?: string
}

export interface CreateTempInfoData {
  full_name: string
  email: string
  contact_number: string
  skin_type: string
  birthday?: string
  lean?: string
}

export interface TempInfoResponse {
  id: number
  full_name: string
  email: string
  contact_number: string
  skin_type: string
  birthday?: string
  lean?: string
  created_at?: string
  updated_at?: string
}

// ============================================
// 2. API Object
// ============================================

export const memberApi = {
  // POST - Create temp info
  createTempInfo: (data: CreateTempInfoData) => {
    const formData = new FormData()
    formData.append('full_name', data.full_name)
    formData.append('email', data.email)
    formData.append('contact_number', data.contact_number)
    formData.append('skin_type', data.skin_type)
    if (data.birthday) formData.append('birthday', data.birthday)
    if (data.lean) formData.append('lean', data.lean)

    return axiosClient.post<TempInfoResponse>('/temp-info/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
