import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-up')({
  component: SignUp,
})

function SignUp() {
  return (
    <>
      <h1>SignIn</h1>
    </>
  )
}
