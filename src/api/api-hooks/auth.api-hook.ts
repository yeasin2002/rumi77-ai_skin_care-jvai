import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import {
  authApi,
  type LoginQueryParams,
  type LoginRequestData,
  type RefreshTokenQueryParams,
  type RefreshTokenRequestData,
  type RegisterQueryParams,
  type RegisterRequestData,
} from '../query-list/auth.query'

// ============================================
// 1. Query Keys (Centralized)
// ============================================

const AUTH_KEYS = {
  all: () => ['auth'] as const,
  login: () => ['auth', 'login'] as const,
  register: () => ['auth', 'register'] as const,
  refresh: () => ['auth', 'refresh'] as const,
}

// ============================================
// 2. Mutation Hooks (POST)
// ============================================

export interface LoginMutationVariables extends LoginRequestData, LoginQueryParams {}
export interface RegisterMutationVariables extends RegisterRequestData, RegisterQueryParams {}
export interface RefreshTokenMutationVariables
  extends RefreshTokenRequestData, RefreshTokenQueryParams {}

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

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ lean, ...data }: RegisterMutationVariables) =>
      authApi.register(data, lean ? { lean } : undefined),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: AUTH_KEYS.all() })
    },

    onError: (error: AxiosError<{ message?: string; detail?: string }>) => {
      const message =
        error.response?.data?.message || error.response?.data?.detail || 'Failed to register'
      console.log('🚀 ~ useRegister ~ message:', message)
      // toast.error(message)
    },
  })
}

export const useRefreshToken = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ lean, ...data }: RefreshTokenMutationVariables) =>
      authApi.refresh(data, lean ? { lean } : undefined),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: AUTH_KEYS.all() })
    },

    onError: (error: AxiosError<{ message?: string; detail?: string }>) => {
      const message =
        error.response?.data?.message || error.response?.data?.detail || 'Failed to refresh token'
      console.log('🚀 ~ useRefreshToken ~ message:', message)
      // toast.error(message)
    },
  })
}
