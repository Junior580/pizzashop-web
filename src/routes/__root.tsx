import { createRootRoute, Outlet } from '@tanstack/react-router'

import { NotFound } from '@/_404'

export const Route = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: NotFound,
})
