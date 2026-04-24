import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Side = 'left' | 'right'
type Media = { src: string; caption?: string }

type Episode = {
  side: Side
  title: string
  body: ReactNode
  images: Media[]
  gallery?: boolean
}

const AWARDS_LINK = 'https://cpac.com.my/awards/'

const EPISODES: Episode[] = [
  {
    side: 'left',
    title: 'Early teen years',
    body: (
      <>
        Discovered musical theatre aged 13. No prior experience. Age 14,
        starred in “First school to stage an original musical at a professional
        level” in{' '}
        <a
          className="cos-inline-link"
          href={AWARDS_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Malaysia’s Book of Records
        </a>
        . Lead the show the following year.
      </>
    ),
    images: [{ src: '/images/lead.png', caption: 'Female lead, “Happy Days”' }],
  },
  {
    side: 'right',
    title: 'Keeping the ball rolling',
    body:
      'Once the ball was rolling, I couldn’t stop. Performed countless shows, highlights include being selected to sing the US National Anthem for a US official’s visit & any performance where I could represent my culture. Went from 0 dance experience to competitive level.',
    images: [
      { src: '/images/american.png', caption: 'US anthem' },
      { src: '/images/culture.png', caption: 'Cultural showcase' },
      { src: '/images/dancesport.png', caption: 'Competitive Latin' },
    ],
    gallery: true,
  },
  {
    side: 'left',
    title: 'Young adult life',
    body:
      'First in my family to attend Oxford. First gen in nuclear family to attend university at all. Often felt uneasy in ‘elite’ circles. Learned to milk a brand name, but not rely on it.',
    images: [
      { src: '/images/oxford.png', caption: 'Official Oxonian' },
      { src: '/images/choir.png', caption: 'A Westminster Chorister' },
    ],
    gallery: true,
  },
  {
    side: 'right',
    title: 'Uni life',
    body:
      'Trying to not have peaked in high-school. Rediscovering autonomy mid-pipeline, hosting events to use my passion to enrich communities.',
    images: [
      { src: '/images/ouaps.png', caption: 'Asia-Pacific Charity Ball' },
      { src: '/images/beans.png', caption: 'DJ/Coffee charity event' },
    ],
    gallery: true,
  },
]

export default function SideQuesterTimeline() {
  return (
    <div className="netflix-home sq-bg-page">
      <video
        className="sq-bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/assets/sideq.mp4" type="video/mp4" />
      </video>
      <div className="sq-bg-overlay" aria-hidden="true" />

      <nav className="nf-nav" aria-label="Primary">
        <div className="nf-nav-left">
          <Link to="/home" className="nf-brand">PORTFOLIO</Link>
          <div className="nf-nav-links">
            <Link to="/profiles" className="nf-nav-link">Home</Link>
            <Link to="/contact" className="nf-nav-link">Contact Me</Link>
            <Link to="/press" className="nf-nav-link">Existing Press</Link>
          </div>
        </div>
        <Link to="/profiles" className="nf-profile-icon" aria-label="Switch profile">
          <span />
        </Link>
      </nav>

      <main className="cos-page">
        <header className="cos-header">
          <p className="cos-kicker">A Patra Original Series</p>
          <h1 className="cos-title">Side Quester</h1>
          <p className="cos-intro">
            I’m one of those self-proclaimed ‘lucky people’. Somewhere along the
            way, I put my energy into making it self-perpetuating.
          </p>
        </header>

        <ol className="cos-timeline">
          {EPISODES.map((ep, i) => (
            <li key={i} className={`cos-item cos-item-${ep.side}`}>
              <span className="cos-node" aria-hidden="true" />
              <article className="cos-card">
                <h2 className="cos-ep-title">{ep.title}</h2>
                <p className="cos-ep-body">{ep.body}</p>
                <div
                  className={`cos-media cos-media-labeled${
                    ep.gallery ? ' cos-media-gallery' : ''
                  }`}
                >
                  {ep.images.map((m) => (
                    <figure key={m.src} className="cos-media-figure">
                      <img src={m.src} alt={m.caption || ''} loading="lazy" />
                      {m.caption && (
                        <figcaption className="cos-media-label">
                          {m.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </main>
    </div>
  )
}
