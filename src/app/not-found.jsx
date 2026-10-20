import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found | Rendaven',
  description: 'The page you are looking for does not exist or has moved. Head back to the Rendaven homepage.',
}

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="nf-code" data-reveal>
            404
          </div>
          <h1 data-reveal>Page not found</h1>
          <p data-reveal>
            The page you are looking for does not exist or has moved. Check the address, or head
            back to safety.
          </p>
          <div className="final-cta__actions" data-reveal>
            <Link className="btn btn--gold btn--lg" href="/">
              Back to home
            </Link>
            <Link className="btn btn--ghost-dark btn--lg" href="/sign-up">
              Create an account
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--mint section--tight">
        <div className="container">
          <p data-reveal style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: 18 }}>
            You might be looking for one of these:
          </p>
          <div className="nf-links" data-reveal>
            <Link href="/product">Product</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
