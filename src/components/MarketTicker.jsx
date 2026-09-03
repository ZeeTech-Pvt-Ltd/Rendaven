import { useEffect, useState } from 'react'

// Live prices with a provider fallback chain (all CORS-open, no keys):
// CoinGecko first, then Binance public market data. Refreshed every 90s;
// the strip renders only once a successful response arrives.
const COINGECKO_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,solana,ripple,cardano,dogecoin&vs_currencies=usd&include_24hr_change=true'

const BINANCE_URL =
  'https://api.binance.com/api/v3/ticker/24hr?symbols=%5B%22BTCUSDT%22,%22ETHUSDT%22,%22SOLUSDT%22,%22XRPUSDT%22,%22ADAUSDT%22,%22DOGEUSDT%22,%22BNBUSDT%22%5D'

const COINS = [
  { id: 'bitcoin', symbol: 'BTC', icon: '/images/coins/btc.svg', binance: 'BTCUSDT' },
  { id: 'ethereum', symbol: 'ETH', icon: '/images/coins/eth.svg', binance: 'ETHUSDT' },
  { id: 'tether', symbol: 'USDT', icon: '/images/coins/usdt.svg', binance: null },
  { id: 'binancecoin', symbol: 'BNB', icon: '/images/coins/bnb.svg', binance: 'BNBUSDT' },
  { id: 'solana', symbol: 'SOL', icon: '/images/coins/sol.svg', binance: 'SOLUSDT' },
  { id: 'ripple', symbol: 'XRP', icon: '/images/coins/xrp.svg', binance: 'XRPUSDT' },
  { id: 'cardano', symbol: 'ADA', icon: '/images/coins/ada.svg', binance: 'ADAUSDT' },
  { id: 'dogecoin', symbol: 'DOGE', icon: '/images/coins/doge.svg', binance: 'DOGEUSDT' },
]

function formatPrice(value) {
  if (value >= 1000) return value.toLocaleString('en-US', { maximumFractionDigits: 2 })
  return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })
}

// CoinGecko response → { id: { usd, usd_24h_change } }
function fromCoinGecko(data) {
  if (!data?.bitcoin) throw new Error('no data')
  return data
}

// Binance response → { id: { usd, usd_24h_change } }
function fromBinance(data) {
  const prices = {}
  for (const coin of COINS) {
    if (!coin.binance) {
      prices[coin.id] = { usd: 1, usd_24h_change: 0 } // USDT stablecoin
      continue
    }
    const row = data?.find((r) => r.symbol === coin.binance)
    if (!row) continue
    prices[coin.id] = { usd: parseFloat(row.lastPrice), usd_24h_change: parseFloat(row.priceChangePercent) }
  }
  if (!prices.bitcoin) throw new Error('no data')
  return prices
}

async function loadPrices() {
  try {
    const res = await fetch(COINGECKO_URL)
    if (!res.ok) throw new Error(`gecko ${res.status}`)
    return fromCoinGecko(await res.json())
  } catch {
    // CoinGecko rate-limits aggressively in dev — fall back to Binance
    const res = await fetch(BINANCE_URL)
    if (!res.ok) throw new Error(`binance ${res.status}`)
    return fromBinance(await res.json())
  }
}

export default function MarketTicker() {
  const [prices, setPrices] = useState(null)

  useEffect(() => {
    let cancelled = false
    const load = () =>
      loadPrices()
        .then((data) => {
          if (!cancelled) setPrices(data)
        })
        .catch(() => {
          // both providers unavailable — keep showing the last good prices
        })
    load()
    const interval = setInterval(load, 90000)
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
                  <img src={coin.icon} alt={`${coin.symbol} logo`} loading="lazy" />
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
