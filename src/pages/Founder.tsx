import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type FounderLink = { label: string; href: string }

type FounderCard = {
  title: string
  role: string
  image: { src: string; alt: string; position?: string }
  bullets: ReactNode[]
  primary: FounderLink
}

const CARDS: FounderCard[] = [
  {
    title: 'Five Stones Consultancy',
    role: 'Co-Founder, 08/2026 to present',
    image: { src: '/images/fivestones.png', alt: 'Five Stones website' },
    bullets: [
      'Founded an AI-solutions consultancy specialising in SMEs across Malaysia and Singapore, delivering growth strategy and implementation across a five-client portfolio. Lead sourcing, client diagnosis and solution design.',
      'Contracted an engineering team to build a proprietary agentic AI harness to automate operational workflows and content production.',
      'Closed a MYR15,000 revenue-max engagement with landscaping company Ground Control: built a patient-recapture chatbot and website, with an ongoing performance-linked retainer.',
      'Drove Jorb AI’s (a career copilot) LinkedIn strategy from 0 to 600K+ total impressions across 40 posts, with the top-performing post alone reaching 224.1K.',
      'Building a patient Customer Relationship Manager for Sungai Long Hospital Group, to recapture 20,000+ patients lost to fragmented operations (in progress).',
    ],
    primary: { label: 'fivestones.sg', href: 'https://fivestones.sg/' },
  },
  {
    title: 'Aftercare Records',
    role: 'Founder, backed by Believe Music Singapore',
    image: {
      src: '/images/aftercare.jpg',
      alt: 'Patra recording in the studio',
      position: 'center 35%',
    },
    bullets: [
      'Built and executed a launch strategy for a debut release single, driving 30k streams in 3 weeks post-release.',
      'Owned content strategy across social channels (top content reaching over 133k views).',
    ],
    primary: {
      label: 'Listen on Spotify',
      href: 'https://open.spotify.com/track/79DiVsERsCMjpM5hjwF1as?si=7ba1af98d33a4196',
    },
  },
]

export default function Founder() {
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

      <main className="cos-page proj-page">
        <header className="proj-header">
          <p className="cos-kicker">A Patra Original Series</p>
          <h1 className="proj-title">Founder</h1>
        </header>

        <section className="proj-grid" aria-label="Ventures">
          {CARDS.map((card) => (
            <article key={card.title} className="proj-card proj-card-tech">
              <figure className="proj-card-figure proj-card-hero">
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  loading="lazy"
                  style={
                    card.image.position
                      ? { objectPosition: card.image.position }
                      : undefined
                  }
                />
              </figure>
              <h3 className="proj-card-title">
                <a
                  className="proj-card-link"
                  href={card.primary.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {card.title}
                </a>
              </h3>
              <p className="cos-ep-label founder-role">{card.role}</p>
              <ul className="founder-bullets">
                {card.bullets.map((b, i) => (
                  <li key={i} className="proj-card-blurb">{b}</li>
                ))}
              </ul>
              <div className="proj-card-links">
                <a
                  href={card.primary.href}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-card-pill proj-card-pill-primary"
                >
                  {card.primary.label}
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
