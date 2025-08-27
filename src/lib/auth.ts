import { isAxiosError } from 'axios'

import { api } from '@/lib/axios'

export const isAuthenticated = async () => {
  try {
    await api.get('/me')
    return true
  } catch (error) {
    if (isAxiosError(error)) {
      const status = error.response?.status
      const code = error.response?.data.code

      if (status === 401 && code === 'UNAUTHORIZED') {
        return false
      }
    }
    return false
  }
}
