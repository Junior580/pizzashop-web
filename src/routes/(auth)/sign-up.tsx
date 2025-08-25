import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/sign-up')({
  component: SignUp,
})

function SignUp() {
  return (
    <>
      <h1>SignIn</h1>
    </>
  )
}
