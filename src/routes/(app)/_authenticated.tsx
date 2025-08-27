import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { Header } from '@/components/header'
import { isAuthenticated } from '@/lib/auth'

export const Route = createFileRoute('/(app)/_authenticated')({
  beforeLoad: async () => {
    if (!(await isAuthenticated())) {
      throw redirect({
        to: '/sign-in',
      })
    }
  },
  component: AppLayout,
})

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6 ">
        <Outlet />
      </div>
    </div>
  )
}
