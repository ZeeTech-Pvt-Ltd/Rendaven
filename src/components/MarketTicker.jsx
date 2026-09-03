import { useEffect, useState } from 'react'

// Live prices from the CoinGecko free API (CORS-open, no key). Refreshed
// every 60s; the strip renders only once a successful response arrives.
const API_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,solana,ripple,cardano,dogecoin&vs_currencies=usd&include_24hr_change=true'

const COINS = [
  { id: 'bitcoin', symbol: 'BTC', icon: '/images/coins/btc.svg' },
  { id: 'ethereum', symbol: 'ETH', icon: '/images/coins/eth.svg' },
  { id: 'tether', symbol: 'USDT', icon: '/images/coins/usdt.svg' },
  { id: 'binancecoin', symbol: 'BNB', icon: '/images/coins/bnb.svg' },
  { id: 'solana', symbol: 'SOL', icon: '/images/coins/sol.svg' },
  { id: 'ripple', symbol: 'XRP', icon: '/images/coins/xrp.svg' },
  { id: 'cardano', symbol: 'ADA', icon: '/images/coins/ada.svg' },
  { id: 'dogecoin', symbol: 'DOGE', icon: '/images/coins/doge.svg' },
]

function formatPrice(value) {
  if (value >= 1000) return value.toLocaleString('en-US', { maximumFractionDigits: 2 })
  return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })
}

export default function MarketTicker() {
  const [prices, setPrices] = useState(null)

  useEffect(() => {
    let cancelled = false
    const load = () =>
      fetch(API_URL)
        .then((r) => r.json())
        .then((data) => {
          if (!cancelled && data?.bitcoin) setPrices(data)
        })
        .catch(() => {
          // API rate-limited or offline — keep showing the last good prices
        })
    load()
    const interval = setInterval(load, 60000)
    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  if (!prices) return null

  const groups = [0, 1] // duplicated for the seamless scroll loop

  return (
    <div className="ticker" aria-label="Live cryptocurrency prices">
      <div className="ticker__track">
        {groups.map((group) => (
          <div className="ticker__group" key={group} aria-hidden={group === 1}>
            {COINS.map((coin) => {
              const price = prices[coin.id]
              if (!price) return null
              const up = price.usd_24h_change >= 0
              return (
                <span className="ticker__item" key={coin.id}>
                  <img src={coin.icon} alt="" loading="lazy" />
                  <span className="ticker__symbol">{coin.symbol}</span>
                  <span className="ticker__price">${formatPrice(price.usd)}</span>
                  <span className={`ticker__change ${up ? 'is-up' : 'is-down'}`}>
                    {up ? '▲' : '▼'} {Math.abs(price.usd_24h_change).toFixed(2)}%
                  </span>
                </span>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
