import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo${light ? ' logo--light' : ''}`} aria-label="Rendaven — home">
      <span className="logo__mark" aria-hidden="true">
        R
      </span>
      <span className="logo__word">Rendaven</span>
    </Link>
  )
}
