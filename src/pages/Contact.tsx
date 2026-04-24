import { Link } from 'react-router-dom'

const EMAIL = 'patraurairat@gmail.com'

export default function Contact() {
  return (
    <div className="netflix-home">
      <nav className="nf-nav" aria-label="Primary">
        <div className="nf-nav-left">
          <Link to="/home" className="nf-brand">PORTFOLIO</Link>
          <div className="nf-nav-links">
            <Link to="/profiles" className="nf-nav-link">Home</Link>
            <Link to="/contact" className="nf-nav-link is-active">Contact Me</Link>
            <Link to="/press" className="nf-nav-link">Existing Press</Link>
          </div>
        </div>
        <Link to="/profiles" className="nf-profile-icon" aria-label="Switch profile">
          <span />
        </Link>
      </nav>

      <main className="contact-stage">
        <section className="contact-card">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-copy">
            For work, query, and some buffoonery, reach me at{' '}
            <a className="contact-email-link" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}
