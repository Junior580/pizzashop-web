import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(app)/_authenticated/dashboard/_layout/',
)({
  component: DashboardPage,
})

function DashboardPage() {
  return <h1>Dashboard</h1>
}
