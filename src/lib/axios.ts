import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

// Request interceptor to add auth token
axiosClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage (where Zustand persist stores it)
    const authStorage = localStorage.getItem('auth-storage')

    if (authStorage) {
      try {
        const { state } = JSON.parse(authStorage)
        const token = state?.token?.accessToken

        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      } catch (error) {
        console.error('Error parsing auth storage:', error)
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for handling token refresh
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If error is 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const authStorage = localStorage.getItem('auth-storage')

        if (authStorage) {
          const { state } = JSON.parse(authStorage)
          const refreshToken = state?.token?.refreshToken

          if (refreshToken) {
            // Try to refresh the token
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh/`, {
              refresh: refreshToken,
            })

            const newAccessToken = response.data.access

            // Update the token in localStorage
            const updatedAuth = {
              ...JSON.parse(authStorage),
              state: {
                ...state,
                token: {
                  ...state?.token,
                  accessToken: newAccessToken,
                },
              },
            }
            localStorage.setItem('auth-storage', JSON.stringify(updatedAuth))

            // Retry the original request with new token
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
            return axiosClient(originalRequest)
          }
        }
      } catch (refreshError) {
        // If refresh fails, clear auth and redirect to login
        localStorage.removeItem('auth-storage')
        if (typeof window !== 'undefined') {
          window.location.href = '/login'
        }
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)
