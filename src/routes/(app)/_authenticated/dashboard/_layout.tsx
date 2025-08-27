import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_authenticated/dashboard/_layout')(
  {
    component: AppLayout,
  },
)

function AppLayout() {
  return (
    <div className="container relative hidden min-h-screen flex-col items-center justify-center antialiased md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <h1>Layout test</h1>
      <Outlet />
    </div>
  )
}
