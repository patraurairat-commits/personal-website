import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RESUME = '/Patra_Urairat_CV_2026.pdf'
const LINKEDIN = 'https://www.linkedin.com/in/patraurairat/'

type Pick = {
  id: 'chief' | 'musician' | 'side'
  title: string
  body: string
  image: string
  to?: string
}

const PICKS: Pick[] = [
  {
    id: 'chief',
    title: 'Chief of staff',
    body: '[New season]: Rise of the cracked generalist',
    image: '/images/chiefofstaff.png',
    to: '/chief-of-staff',
  },
  {
    id: 'musician',
    title: 'Musician',
    body: 'S2, EP9: How hard could it be?',
    image: '/images/spotifymusician.png',
  },
  {
    id: 'side',
    title: 'Side quester',
    body: 'S3, EP8: Fuck it, we ball',
    image: '/images/sidequester.png',
    to: '/side-quester',
  },
]

function getProfile(): string {
  if (typeof window === 'undefined') return 'recruiter'
  try {
    return sessionStorage.getItem('selectedProfile') || 'recruiter'
  } catch {
    return 'recruiter'
  }
}

export default function Home() {
  const profile = getProfile().toLowerCase()
  const [showSpotifyModal, setShowSpotifyModal] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="netflix-home">
      <nav className="nf-nav" aria-label="Primary">
        <div className="nf-nav-left">
          <Link to="/home" className="nf-brand">PORTFOLIO</Link>
          <div className="nf-nav-links">
            <Link to="/profiles" className="nf-nav-link">Home</Link>
            <Link to="/contact" className="nf-nav-link">Contact Me</Link>
            <Link to="/press" className="nf-nav-link">Existing press</Link>
          </div>
        </div>
        <Link to="/profiles" className="nf-profile-icon" aria-label="Switch profile">
          <span />
        </Link>
      </nav>

      <section className="nf-hero">
        <video
          className="nf-hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero-preview.mp4" type="video/mp4" />
        </video>
        <div className="nf-hero-overlay" aria-hidden="true" />

        <div className="nf-hero-content">
          <h1 className="nf-hero-title">Patra Urairat</h1>
          <p className="nf-hero-subtitle">
            Energised by chaos. Can never do anything half-way.
          </p>
          <div className="nf-hero-actions">
            <a
              className="nf-btn nf-btn-play"
              href={RESUME}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="nf-btn-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Resume
            </a>
            <a
              className="nf-btn nf-btn-info"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="nf-btn-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="11" x2="12" y2="17" />
                <circle cx="12" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
              LinkedIn
            </a>
            <a
              className="nf-btn nf-btn-info"
              href="https://open.spotify.com/album/1d1DXjCUjgGyeKS8jMumva?si=2hZg8kr1QTqfIh4dAU5iNg"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="nf-btn-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M9 17a3 3 0 1 1-2-2.83V5h11v3h-9v9z" />
              </svg>
              Spotify
            </a>
          </div>
        </div>
      </section>

      <section className="nf-row-section">
        <h2 className="nf-row-title">Today's Top Picks for {profile}</h2>
        <div className="nf-row" role="list">
          {PICKS.map((p) => {
            const cardInner = (
              <>
                <div className="nf-card-title">{p.title}</div>
                <div className="nf-card-hover">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </>
            )
            const style = { backgroundImage: `url(${p.image})` }
            if (p.id === 'musician') {
              return (
                <article
                  className="nf-card"
                  key={p.title}
                  style={style}
                  role="button"
                  tabIndex={0}
                  onClick={() => setShowSpotifyModal(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setShowSpotifyModal(true)
                    }
                  }}
                >
                  {cardInner}
                </article>
              )
            }
            return p.to ? (
              <Link
                to={p.to}
                className="nf-card"
                role="listitem"
                key={p.title}
                style={style}
              >
                {cardInner}
              </Link>
            ) : (
              <article
                className="nf-card"
                role="listitem"
                key={p.title}
                style={style}
              >
                {cardInner}
              </article>
            )
          })}
        </div>
      </section>

      {showSpotifyModal && (
        <div
          className="nf-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="spotify-modal-title"
          onClick={() => setShowSpotifyModal(false)}
        >
          <div
            className="nf-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <p id="spotify-modal-title" className="nf-modal-text">
              You are now leaving to Patra's Spotify. Allow?
            </p>
            <div className="nf-modal-actions">
              <button
                type="button"
                className="nf-btn nf-btn-info"
                onClick={() => setShowSpotifyModal(false)}
              >
                Disallow
              </button>
              <button
                type="button"
                className="nf-btn nf-btn-play"
                onClick={() => {
                  setShowSpotifyModal(false)
                  navigate('/musician')
                }}
              >
                Allow
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
