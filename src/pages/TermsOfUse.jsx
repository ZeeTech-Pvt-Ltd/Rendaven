import LegalPage from '../components/LegalPage'
import useMeta from '../hooks/useMeta'
import { SITE_URL, SITE_NAME, SUPPORT_EMAIL } from '../data/content'

// Template text — review with legal counsel before launch.

export default function TermsOfUse() {
  useMeta({
    title: 'Terms of Use — Rendaven',
    description: 'The terms that govern your use of the Rendaven website and trading platform.',
    canonical: `${SITE_URL}terms`,
  })

  return (
    <LegalPage title="Terms of Use" updated="September 3, 2026">
      <p>
        These Terms of Use (“Terms”) govern your access to and use of the {SITE_NAME} website and
        platform. By creating an account or using our services you agree to these Terms. If you do
        not agree, please do not use the platform.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old (or the age of majority in your jurisdiction) and legally
        able to enter into binding agreements. You may only use the platform where doing so is
        lawful in your country of residence.
      </p>

      <h2>2. Your Account</h2>
      <p>
        You are responsible for keeping your login credentials confidential and for all activity
        that occurs under your account. You agree to provide accurate, current and complete
        information during registration and to update it as necessary.
      </p>

      <h2>3. Use of the Platform</h2>
      <p>
        You agree not to use the platform for any unlawful purpose, to attempt to gain unauthorised
        access to any part of the platform, or to interfere with its operation. Automated scraping,
        probing or load-testing of the platform is prohibited.
      </p>

      <h2>4. No Investment Advice</h2>
      <p>
        Nothing on the {SITE_NAME} platform — including AI-generated signals, educational content,
        statistics or projections — constitutes investment advice, a recommendation, or an offer to
        buy or sell any financial instrument. All trading decisions are yours alone.
      </p>

      <h2>5. Fees and Transactions</h2>
      <p>
        Applicable fees are displayed before you confirm a transaction. Deposits and withdrawals
        are processed in accordance with our funding procedures and may be subject to verification
        and processing times.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos and software, is the property
        of {SITE_NAME} or its licensors and is protected by intellectual property laws. You may not
        reproduce or redistribute it without our prior written consent.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {SITE_NAME} shall not be liable for indirect,
        incidental, special or consequential damages, or for losses arising from market movements,
        trading activity or interruption of service.
      </p>

      <h2>8. Termination</h2>
      <p>
        We may suspend or terminate your account for breach of these Terms, violation of law, or
        suspected fraudulent activity. You may close your account at any time by contacting{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2>9. Changes to These Terms</h2>
      <p>
        We may revise these Terms from time to time. Continued use of the platform after changes
        take effect constitutes acceptance of the revised Terms.
      </p>
    </LegalPage>
  )
}
