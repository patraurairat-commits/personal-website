import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SPOTIFY_TRACK =
  'https://open.spotify.com/track/79DiVsERsCMjpM5hjwF1as?si=7ba1af98d33a4196'
const EPK = '/assets/epk.pdf'

type Track = {
  num: number
  title: string
  artist?: string
  plays: string
  duration: string
  href: string
  external?: boolean
}

const TRACKS: Track[] = [
  {
    num: 1,
    title: 'Aftercare',
    artist: 'Patra',
    plays: '1,204',
    duration: '3:42',
    href: SPOTIFY_TRACK,
    external: true,
  },
  {
    num: 2,
    title: 'Electronic Press Kit',
    plays: '—',
    duration: '—',
    href: EPK,
    external: true,
  },
]

function Icon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  switch (name) {
    case 'home':
      return (
        <svg {...common}>
          <path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
        </svg>
      )
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <line x1="20" y1="20" x2="16.65" y2="16.65" />
        </svg>
      )
    case 'library':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="4" height="16" rx="1" />
          <rect x="10" y="4" width="4" height="16" rx="1" />
          <path d="M20 4l-3 15" />
        </svg>
      )
    case 'plus':
      return (
        <svg {...common}>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...common}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    case 'shuffle':
      return (
        <svg {...common}>
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
          <line x1="4" y1="4" x2="9" y2="9" />
        </svg>
      )
    case 'prev':
      return (
        <svg {...common}>
          <polygon points="19 20 9 12 19 4 19 20" fill="currentColor" />
          <line x1="5" y1="19" x2="5" y2="5" />
        </svg>
      )
    case 'next':
      return (
        <svg {...common}>
          <polygon points="5 4 15 12 5 20 5 4" fill="currentColor" />
          <line x1="19" y1="5" x2="19" y2="19" />
        </svg>
      )
    case 'repeat':
      return (
        <svg {...common}>
          <polyline points="17 1 21 5 17 9" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <polyline points="7 23 3 19 7 15" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15 14" />
        </svg>
      )
    case 'play-fill':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      )
    case 'pause-fill':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <rect x="6" y="5" width="4" height="14" />
          <rect x="14" y="5" width="4" height="14" />
        </svg>
      )
    default:
      return null
  }
}

export default function MusicianSpotify() {
  const [playing, setPlaying] = useState(false)
  const navigate = useNavigate()

  const openTrack = (t: Track) => {
    window.open(t.href, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="sp-app">
      <aside className="sp-sidebar" aria-label="Primary">
        <div className="sp-logo">
          <svg width="110" height="28" viewBox="0 0 110 28" aria-hidden="true">
            <circle cx="14" cy="14" r="12" fill="#1db954" />
            <text
              x="32"
              y="19"
              fontFamily="Arial, sans-serif"
              fontWeight="700"
              fontSize="18"
              fill="#fff"
            >
              Spotify
            </text>
          </svg>
        </div>

        <nav className="sp-side-nav">
          <button
            className="sp-side-link is-active"
            type="button"
            onClick={() => navigate('/home')}
          >
            <Icon name="home" /> <span>Home</span>
          </button>
          <button className="sp-side-link" type="button">
            <Icon name="search" /> <span>Search</span>
          </button>
        </nav>

        <div className="sp-library">
          <div className="sp-library-head">
            <span className="sp-library-title">
              <Icon name="library" /> Your Library
            </span>
            <button className="sp-icon-btn" type="button" aria-label="Create">
              <Icon name="plus" />
            </button>
          </div>
          <ul className="sp-library-list">
            <li>Liked Songs</li>
            <li>Aftercare — Patra</li>
          </ul>
        </div>
      </aside>

      <main className="sp-main">
        <header className="sp-header">
          <div className="sp-header-bg" aria-hidden="true" />
          <div className="sp-header-inner">
            <div className="sp-cover">
              <img src="/aftercare-cover.png" alt="Aftercare album cover" />
            </div>
            <div className="sp-meta">
              <p className="sp-type">Single</p>
              <h1 className="sp-album-title">Aftercare</h1>
              <div className="sp-credits">
                <span className="sp-credits-avatar" aria-hidden="true" />
                <span className="sp-credits-text">
                  <strong>Patra</strong> <span className="sp-dot">•</span> 2025
                </span>
              </div>
            </div>
          </div>
        </header>

        <section className="sp-body">
          <div className="sp-controls">
            <button
              type="button"
              className="sp-play-big"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'Pause' : 'Play'}
            >
              <Icon name={playing ? 'pause-fill' : 'play-fill'} />
            </button>
            <button className="sp-ghost" type="button" aria-label="Save">
              <Icon name="heart" />
            </button>
          </div>

          <table className="sp-tracklist">
            <thead>
              <tr>
                <th className="sp-col-num">#</th>
                <th className="sp-col-title">Title</th>
                <th className="sp-col-plays">Plays</th>
                <th className="sp-col-duration" aria-label="Duration">
                  <Icon name="clock" />
                </th>
              </tr>
            </thead>
            <tbody>
              {TRACKS.map((t) => (
                <tr
                  key={t.num}
                  className="sp-track-row"
                  onClick={() => openTrack(t)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openTrack(t)
                    }
                  }}
                >
                  <td className="sp-col-num">{t.num}</td>
                  <td className="sp-col-title">
                    <div className="sp-track-title">
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t.title}
                      </a>
                      {t.artist && (
                        <div className="sp-track-artist">{t.artist}</div>
                      )}
                    </div>
                  </td>
                  <td className="sp-col-plays">{t.plays}</td>
                  <td className="sp-col-duration">{t.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer className="sp-playbar" aria-label="Now playing">
        <div className="sp-nowplaying">
          <div className="sp-nowplaying-cover">
            <img src="/aftercare-cover.png" alt="" />
          </div>
          <div className="sp-nowplaying-text">
            <div className="sp-nowplaying-title">Aftercare</div>
            <div className="sp-nowplaying-artist">Patra</div>
          </div>
          <button className="sp-ghost" type="button" aria-label="Save">
            <Icon name="heart" />
          </button>
        </div>

        <div className="sp-player">
          <div className="sp-player-controls">
            <button className="sp-ghost" type="button" aria-label="Shuffle">
              <Icon name="shuffle" />
            </button>
            <button className="sp-ghost" type="button" aria-label="Previous">
              <Icon name="prev" />
            </button>
            <button
              className="sp-play-small"
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'Pause' : 'Play'}
            >
              <Icon name={playing ? 'pause-fill' : 'play-fill'} />
            </button>
            <button className="sp-ghost" type="button" aria-label="Next">
              <Icon name="next" />
            </button>
            <button className="sp-ghost" type="button" aria-label="Repeat">
              <Icon name="repeat" />
            </button>
          </div>
          <div className="sp-progress">
            <span className="sp-time">0:42</span>
            <div className="sp-progress-bar">
              <div className="sp-progress-fill" style={{ width: '18%' }} />
            </div>
            <span className="sp-time">3:42</span>
          </div>
        </div>

        <div className="sp-right-placeholder" aria-hidden="true" />
      </footer>
    </div>
  )
}
