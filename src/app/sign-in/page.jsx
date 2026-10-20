import SignInForm from '@/components/SignInForm'
import { pageMeta } from '@/lib/page-meta'

export const metadata = pageMeta({
  title: 'Sign In - Rendaven Client Area',
  description: 'Sign in to your Rendaven account to access your trading dashboard.',
  slug: 'sign-in',
  robots: { index: false, follow: false },
})

export default function SignIn() {
  return (
    <section className="auth-wrap">
      <div className="container">
        <SignInForm />
      </div>
    </section>
  )
}
