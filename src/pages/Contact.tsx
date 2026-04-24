import { useState } from 'react'
import { Link } from 'react-router-dom'

const EMAIL = 'patraurairat@gmail.com'

export default function Contact() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="netflix-home">
      <nav className="nf-nav" aria-label="Primary">
        <div className="nf-nav-left">
          <Link to="/home" className="nf-brand">PORTFOLIO</Link>
          <div className="nf-nav-links">
            <Link to="/profiles" className="nf-nav-link">Home</Link>
            <Link to="/contact" className="nf-nav-link is-active">Contact Me</Link>
            <Link to="/press" className="nf-nav-link">Existing press</Link>
          </div>
        </div>
        <Link to="/profiles" className="nf-profile-icon" aria-label="Switch profile">
          <span />
        </Link>
      </nav>

      <main className="contact-stage">
        {revealed ? (
          <a className="nf-btn nf-btn-play" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        ) : (
          <button
            type="button"
            className="nf-btn nf-btn-play"
            onClick={() => setRevealed(true)}
          >
            Contact me
          </button>
        )}
      </main>
    </div>
  )
}
