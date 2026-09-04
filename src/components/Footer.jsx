import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { NAV_LINKS, FOOTER, SUPPORT_EMAIL } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo light />
            <p className="site-footer__blurb">{FOOTER.blurb}</p>
          </div>

          <div className="footer-col">
            <h3>{FOOTER.navTitle}</h3>
            <ul>
              {NAV_LINKS.filter((item) => item.to !== '/').map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>{FOOTER.legalTitle}</h3>
            <ul>
              {FOOTER.legalLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h3>{FOOTER.contactTitle}</h3>
            <ul>
              <li>
                <Icon name="mail" size={17} />
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </li>
              <li>
                <Icon name="clock" size={17} />
                <span>Support available 24/7</span>
              </li>
              <li>
                <Icon name="globe" size={17} />
                <span>Now available in Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-risk">
          {FOOTER.risk.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="footer-bottom">
          <span>{FOOTER.copyright}</span>
          <div className="footer-bottom__links">
            {FOOTER.legalLinks.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
