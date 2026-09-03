import LegalPage from '../components/LegalPage'
import useMeta from '../hooks/useMeta'
import { SITE_URL, SITE_NAME } from '../data/content'

// Template text — review with legal counsel before launch.

export default function RiskDisclosure() {
  useMeta({
    title: 'Risk Disclosure — Rendaven',
    description: 'Important information about the risks of trading cryptocurrencies and leveraged instruments.',
    canonical: `${SITE_URL}risk-disclosure`,
  })

  return (
    <LegalPage title="Risk Disclosure" updated="September 3, 2026">
      <p>
        Trading in cryptocurrencies, forex, CFDs, commodities and other financial instruments
        involves substantial risk of loss and is not suitable for every investor. Before using the{' '}
        {SITE_NAME} platform, you should carefully read and understand the risks described below.
      </p>

      <h2>Market Volatility</h2>
      <p>
        The value of digital assets and other traded instruments can be highly volatile. Prices can
        move dramatically within short periods, and you may sustain a total loss of your invested
        funds. Leveraged products can amplify both gains and losses — losses can exceed your
        initial deposit.
      </p>

      <h2>No Guarantee of Profit</h2>
      <p>
        No trading strategy, AI model, signal or projection — including the accuracy statistics and
        earnings projections displayed on our website — can guarantee profit. Past performance and
        historical accuracy rates are not indicative of future results.
      </p>

      <h2>Technology and Platform Risks</h2>
      <p>
        Trading platforms may experience outages, latency or cyber incidents. While {SITE_NAME}{' '}
        employs 256-bit encryption and holds 98% of assets in cold storage, no system can be made
        completely immune to technical failure or malicious activity.
      </p>

      <h2>Regulatory Risk</h2>
      <p>
        The regulatory treatment of digital assets varies by jurisdiction and continues to evolve.
        Changes in regulation or law may affect the value, use or transferability of digital
        assets.
      </p>

      <h2>Your Responsibility</h2>
      <p>
        You should only trade with funds you can afford to lose. You are solely responsible for
        your trading decisions and for ensuring that your use of the platform is lawful in your
        country of residence. If you are in doubt about the suitability of trading for your
        circumstances, consult an independent financial advisor.
      </p>
    </LegalPage>
  )
}
