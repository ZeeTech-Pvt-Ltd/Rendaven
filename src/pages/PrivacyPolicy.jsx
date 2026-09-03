import LegalPage from '../components/LegalPage'
import useMeta from '../hooks/useMeta'
import { SITE_URL, SITE_NAME, SUPPORT_EMAIL } from '../data/content'

// Template text — review with legal counsel before launch.

export default function PrivacyPolicy() {
  useMeta({
    title: 'Privacy Policy — Rendaven',
    description: 'How Rendaven collects, uses and protects your personal data.',
    canonical: `${SITE_URL}privacy`,
  })

  return (
    <LegalPage title="Privacy Policy" updated="September 3, 2026">
      <p>
        {SITE_NAME} (“we”, “us”, “our”) respects your privacy and is committed to protecting the
        personal data you share with us. This Privacy Policy explains what information we collect
        when you use our website and services, why we collect it, and how it is used and protected.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect the information you provide directly to us, including:</p>
      <ul>
        <li>Identity data: first and last name, date of birth where required for verification.</li>
        <li>Contact data: email address and telephone number.</li>
        <li>Financial data: payment method details, transaction and deposit records.</li>
        <li>Technical data: IP address, browser type, device information and usage patterns.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Create, verify and manage your account.</li>
        <li>Process deposits, withdrawals and trades.</li>
        <li>Comply with legal and regulatory obligations, including KYC and AML requirements.</li>
        <li>Communicate with you about your account and, with your consent, our services.</li>
        <li>Improve and secure our platform.</li>
      </ul>

      <h2>3. Legal Basis and Consent</h2>
      <p>
        By creating an account you consent to the processing of your personal data as described in
        this policy. Where required by law, we rely on other legal bases such as performance of a
        contract, legitimate interests and legal obligations.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We protect your data with 256-bit SSL encryption in transit and industry-standard measures
        at rest. Access to personal data is restricted to authorised personnel who require it to
        perform their duties.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        We do not sell your personal data. We may share it with service providers who help us
        operate the platform (payment processors, verification providers, hosting), and with
        regulators or law enforcement where required by law.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your personal data only as long as necessary for the purposes set out in this
        policy, including to satisfy legal, accounting and regulatory record-keeping requirements.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have the right to access, correct, delete or
        restrict the processing of your personal data, and to data portability. To exercise these
        rights, contact us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Our website uses essential cookies and similar technologies to keep the platform secure and
        functioning. We do not use advertising trackers without your consent.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be posted on this page
        with a revised “Last updated” date.
      </p>
    </LegalPage>
  )
}
