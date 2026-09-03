import { Link } from 'react-router-dom'

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
            <Link className="btn btn--gold btn--lg" to="/">
              Back to home
            </Link>
            <Link className="btn btn--ghost-dark btn--lg" to="/sign-up">
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
            <Link to="/product">Product</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
