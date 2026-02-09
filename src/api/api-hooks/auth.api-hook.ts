import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { authApi, type LoginQueryParams, type LoginRequestData } from '../query-list/auth.query'

// ============================================
// 1. Query Keys (Centralized)
// ============================================

const AUTH_KEYS = {
  all: () => ['auth'] as const,
  login: () => ['auth', 'login'] as const,
}

// ============================================
// 2. Mutation Hooks (POST)
// ============================================

export interface LoginMutationVariables extends LoginRequestData, LoginQueryParams {}

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ lean, ...data }: LoginMutationVariables) =>
      authApi.login(data, lean ? { lean } : undefined),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: AUTH_KEYS.all() })
    },

    onError: (error: AxiosError<{ message?: string; detail?: string }>) => {
      const message =
        error.response?.data?.message || error.response?.data?.detail || 'Failed to login'
      console.log('🚀 ~ useLogin ~ message:', message)
      // toast.error(message)
    },
  })
}
