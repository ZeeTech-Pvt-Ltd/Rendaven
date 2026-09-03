import { useState } from 'react'
import Icon from './Icon'
import { CALCULATOR } from '../data/content'

const MIN = 250
const MAX = 50000
const STEP = 250
const MONTHLY_RATE = 0.085 // illustrative — matches the "85%" platform claim
const MONTHS = 12

const money = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  maximumFractionDigits: 0,
})

export default function Calculator() {
  const [amount, setAmount] = useState(10000)

  const balance = amount * Math.pow(1 + MONTHLY_RATE, MONTHS)
  const monthly = amount * MONTHLY_RATE

  return (
    <div className="calc" data-reveal>
      <div className="calc__head">
        <span className="calc__icon">
          <Icon name="sparkle" size={20} />
        </span>
        <div>
          <h3>{CALCULATOR.title}</h3>
          <p>{CALCULATOR.subtitle}</p>
        </div>
      </div>

      <div className="calc__amount">
        <label htmlFor="calc-deposit">{CALCULATOR.depositLabel}</label>
        <strong>{money.format(amount)}</strong>
      </div>
      <input
        id="calc-deposit"
        type="range"
        min={MIN}
        max={MAX}
        step={STEP}
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        aria-label="Deposit amount"
      />

      <div className="calc__outputs">
        <div className="calc__out calc__out--main">
          <span className="calc__out-label">{CALCULATOR.balanceLabel}</span>
          <span className="calc__out-value">{money.format(balance)}</span>
        </div>
        <div className="calc__out calc__out--sub">
          <span className="calc__out-label">{CALCULATOR.monthlyLabel}</span>
          <span className="calc__out-value">{money.format(monthly)}</span>
        </div>
      </div>

      <p className="calc__disclaimer">{CALCULATOR.disclaimer}</p>
    </div>
  )
}
