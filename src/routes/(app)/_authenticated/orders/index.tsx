import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_authenticated/orders/')({
  component: OrdersPage,
})

function OrdersPage() {
  return <div>Hello "/(app)/_authenticated/orders/"!</div>
}
