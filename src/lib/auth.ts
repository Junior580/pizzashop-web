import { redirect } from '@tanstack/react-router'
import { isAxiosError } from 'axios'

import { api } from '@/lib/axios'

export const isAuthenticated = async () => {
  return true
  // try {
  //   await api.get('/me')
  // } catch (error) {
  //   if (isAxiosError(error)) {
  //     const status = error.response?.status
  //     const code = error.response?.data.code
  //
  //     if (status === 401 && code === 'UNAUTHORIZED') {
  //       throw redirect({ to: '/sign-in' })
  //     }
  //   }
  //   throw error
  // }
}
