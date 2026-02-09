'use client'

import { useCallback } from 'react'

const DEFAULT_NAMESPACE = 'season'

type MaybeStorage = Storage | null

const getStorage = (storage?: Storage): MaybeStorage => {
  if (storage) return storage
  if (typeof window === 'undefined') return null
  return window.sessionStorage
}

const withNamespace = (namespace: string, key: string) => `${namespace}:${key}`

export interface UseSeasonStorageReturn {
  set: <T>(key: string, value: T) => boolean
  get: <T>(key: string, defaultValue?: T | null) => T | null
  remove: (key: string) => boolean
  has: (key: string) => boolean
  clear: () => boolean
}

export const useSeasonStorage = (
  namespace = DEFAULT_NAMESPACE,
  storage?: Storage
): UseSeasonStorageReturn => {
  const set = useCallback(
    <T,>(key: string, value: T) => {
      const target = getStorage(storage)
      if (!target) return false

      try {
        target.setItem(withNamespace(namespace, key), JSON.stringify(value))
        return true
      } catch {
        return false
      }
    },
    [namespace, storage]
  )

  const get = useCallback(
    <T,>(key: string, defaultValue: T | null = null) => {
      const target = getStorage(storage)
      if (!target) return defaultValue

      try {
        const rawValue = target.getItem(withNamespace(namespace, key))
        if (!rawValue) return defaultValue
        return JSON.parse(rawValue) as T
      } catch {
        return defaultValue
      }
    },
    [namespace, storage]
  )

  const remove = useCallback(
    (key: string) => {
      const target = getStorage(storage)
      if (!target) return false

      try {
        target.removeItem(withNamespace(namespace, key))
        return true
      } catch {
        return false
      }
    },
    [namespace, storage]
  )

  const has = useCallback(
    (key: string) => {
      const target = getStorage(storage)
      if (!target) return false

      return target.getItem(withNamespace(namespace, key)) !== null
    },
    [namespace, storage]
  )

  const clear = useCallback(() => {
    const target = getStorage(storage)
    if (!target) return false

    try {
      // Only remove entries for this hook namespace.
      for (let index = target.length - 1; index >= 0; index -= 1) {
        const key = target.key(index)
        if (key?.startsWith(`${namespace}:`)) {
          target.removeItem(key)
        }
      }
      return true
    } catch {
      return false
    }
  }, [namespace, storage])

  return {
    set,
    get,
    remove,
    has,
    clear,
  }
}
