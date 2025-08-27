import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme-provider'
import { queryClient } from './lib/react-query'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <ThemeProvider defaultTheme="light" storageKey="ifood-theme">
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <Toaster richColors />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </StrictMode>,
  )
}
