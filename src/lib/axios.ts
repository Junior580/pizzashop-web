import axios from 'axios'

// import { env } from '@/env'

export const api = axios.create({
  // baseURL: env.VITE_API_URL,
  baseURL: 'https://localhost:3000',
  withCredentials: true,
})

// if (env.VITE_ENABLE_API_DELAY) {
const t1 = true
if (t1) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 4000)),
    )

    return config
  })
}
