import { Link } from 'react-router-dom'

type EpisodeSide = 'left' | 'right'

type Media = { src: string; caption?: string }

type Episode = {
  side: EpisodeSide
  season?: string
  episode: string
  title: string
  body: string
  images: Media[]
  gallery?: boolean
}

const EPISODES: Episode[] = [
  {
    side: 'left',
    season: 'Season 2025',
    episode: 'Episode 1',
    title: 'Goodbye em dashes, Hello startups!',
    body: "Family trauma. Unenthused about future. Left oxford, disillusioned by risk-aversity of 'elite' Oxford peers. Needed to escape the matrix. Determined to find out 'what was really out there' and started cold calling. Had a terrible outreach style. Pivoted. Somehow managed to get 4 job offers in 3 weeks, landed a job at a YC-backed start-up.",
    images: [{ src: '/images/hugo.png' }],
  },
  {
    side: 'right',
    episode: 'Episode 2',
    title: 'How you gonna hate from outside the club?',
    body: "Sent to America, for industry conferences and company events. Developed on-the-ground experience, landing and converting clients. Sent to represent the company at events in Ivies. Found myself fraternising with ex-Stanfords, Googles, Harvards. Was the only woman on an MIT panel. Oxford-trained bullshitting mastery really came in clutch. Knew this was the life for me.",
    images: [
      { src: '/images/MIT.png', caption: 'MIT panel' },
      { src: '/images/hiring.png', caption: 'Harvard career fair' },
      { src: '/images/businesscards.png', caption: 'Industry business cards' },
    ],
    gallery: true,
  },
  {
    side: 'left',
    episode: 'Episode 3',
    title: 'Eye of the Tiger',
    body: 'maxxing vibe-coding, networking, and hackathons in London whilst preparing for the company move to New York.',
    images: [{ src: '/images/networking.png' }],
  },
]

export default function ChiefOfStaffTimeline() {
  return (
    <div className="netflix-home">
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
          <h1 className="cos-title">Chief of Staff: The Series</h1>
        </header>

        <ol className="cos-timeline">
          {EPISODES.map((ep, i) => (
            <li key={i} className={`cos-item cos-item-${ep.side}`}>
              <span className="cos-node" aria-hidden="true" />
              <article className="cos-card">
                <p className="cos-ep-label">
                  {ep.season ? `${ep.season}, ` : ''}
                  {ep.episode}
                </p>
                <h2 className="cos-ep-title">{ep.title}</h2>
                <p className="cos-ep-body">{ep.body}</p>
                <div className={`cos-media${ep.gallery ? ' cos-media-gallery' : ''}`}>
                  {ep.images.map((m) => (
                    <figure key={m.src} className="cos-media-figure">
                      <img src={m.src} alt={m.caption || ''} loading="lazy" />
                      {m.caption && (
                        <figcaption className="cos-media-caption">
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
