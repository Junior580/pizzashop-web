import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { isAuthenticated } from '@/lib/auth'

export const Route = createFileRoute('/(app)/_authenticated')({
  beforeLoad: async () => {
    if (!(await isAuthenticated())) {
      throw redirect({
        to: '/sign-in',
      })
    }
  },
  component: () => <Outlet />,
})
