import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { memberApi, type CreateTempInfoData } from '../query-list/member.query'

// ============================================
// 1. Query Keys (Centralized)
// ============================================

const MEMBER_KEYS = {
  tempInfo: () => ['temp-info'] as const,
}

// ============================================
// 2. Mutation Hooks (POST)
// ============================================

export const useCreateTempInfo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateTempInfoData) => memberApi.createTempInfo(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MEMBER_KEYS.tempInfo() })
    },

    onError: (error: AxiosError<{ message?: string; detail?: string }>) => {
      const message =
        error.response?.data?.message ||
        error.response?.data?.detail ||
        'Failed to submit information'
      console.log('🚀 ~ useCreateTempInfo ~ message:', message)
      //   toast.error(message)
    },
  })
}
