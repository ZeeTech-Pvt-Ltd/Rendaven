import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { NAV_LINKS } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />

        <nav className="site-header__nav" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link className="btn btn--gold" to="/sign-up" onClick={() => setOpen(false)}>
            Sign Up
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <nav className={`mobile-menu container${open ? ' is-open' : ''}`} aria-label="Mobile navigation">
        {NAV_LINKS.map((item) => (
          <Link key={item.label} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <div className="mobile-menu__actions">
          <Link className="btn btn--gold btn--block" to="/sign-up" onClick={() => setOpen(false)}>
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  )
}
