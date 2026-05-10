import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Media = { src: string; caption?: string }

type HobbyCard = {
  title: string
  blurb: ReactNode
  images: Media[]
}

type TechLink = { label: string; href: string }

type TechCard = {
  title: string
  blurb: string
  image: Media
  primary: TechLink
  secondary?: TechLink
}

const AWARDS_LINK = 'https://cpac.com.my/awards/'

const HOBBY_CARDS: HobbyCard[] = [
  {
    title: 'Hosted communities, not just events',
    blurb: (
      <>
        Refused to peak in high school. Used the platform to throw events that
        pulled people in and gave back.
      </>
    ),
    images: [
      { src: '/images/ouaps.png', caption: 'Asia-Pacific Charity Ball' },
      { src: '/images/beans.png', caption: 'DJ/Coffee charity event' },
    ],
  },
  {
    title: 'First-gen Oxonian',
    blurb: (
      <>
        First in my family at Oxford. First in my nuclear family at university,
        period. Wore the brand name without leaning on it.
      </>
    ),
    images: [
      { src: '/images/oxford.png', caption: 'Official Oxonian' },
      { src: '/images/choir.png', caption: 'A Westminster Chorister' },
      { src: '/images/unilife.png', caption: 'Uni life' },
    ],
  },
  {
    title: 'Anthems & ballroom floors',
    blurb: (
      <>
        Sang the US National Anthem for an official visit. Repped my culture on
        every stage available. Took dancesport from zero to competitive.
      </>
    ),
    images: [
      { src: '/images/american.png', caption: 'US anthem' },
      { src: '/images/culture.png', caption: 'Cultural showcase' },
      { src: '/images/dancesport.png', caption: 'Competitive Latin' },
    ],
  },
  {
    title: 'Took the stage at 13',
    blurb: (
      <>
        Picked up musical theatre with zero experience. By 14, headlined the
        first school musical entered into{' '}
        <a
          className="cos-inline-link"
          href={AWARDS_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Malaysia’s Book of Records
        </a>
        . Lead the next year — Happy Days.
      </>
    ),
    images: [{ src: '/images/lead.png', caption: 'Female lead, “Happy Days”' }],
  },
]

const TECH_CARDS: TechCard[] = [
  {
    title: 'Auracle Labs',
    blurb:
      'Won a 4-hour hackathon. Built a wearable air-quality device with olfactory sensors. Name = aura (air) + oracle (prediction).',
    image: {
      src: '/images/auracle.png',
      caption: 'Auracle infographic',
    },
    primary: {
      label: 'Live demo',
      href: 'https://hildieleyser.github.io/auracle/',
    },
    secondary: {
      label: 'GitHub',
      href: 'https://github.com/saniya2912/auracle-matchathon.git',
    },
  },
  {
    title: 'Structured AI',
    blurb: 'Built and shipped the main landing page for Structured AI.',
    image: {
      src: '/images/structured.png',
      caption: 'Structured AI landing page',
    },
    primary: { label: 'getstructured.ai', href: 'https://getstructured.ai/' },
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

      <main className="cos-page proj-page">
        <header className="proj-header">
          <p className="cos-kicker">A Patra Original Series</p>
          <h1 className="proj-title">Projects</h1>
          <p className="proj-intro">
            A two-track overview — what I’ve built off-stage and on-screen.
          </p>
        </header>

        <section className="proj-grid" aria-label="Project columns">
          <div className="proj-column">
            <div className="proj-column-header">
              <h2 className="proj-column-title">Hobby Projects</h2>
              <span className="proj-count">{HOBBY_CARDS.length}</span>
            </div>
            <ul className="proj-list">
              {HOBBY_CARDS.map((card) => (
                <li key={card.title}>
                  <button type="button" className="proj-card proj-card-hobby">
                    <h3 className="proj-card-title">{card.title}</h3>
                    <p className="proj-card-blurb">{card.blurb}</p>
                    {card.images.length > 0 && (
                      <div
                        className={`proj-card-media${
                          card.images.length > 1 ? ' proj-card-media-grid' : ''
                        }`}
                      >
                        {card.images.map((m) => (
                          <figure key={m.src} className="proj-card-figure">
                            <img src={m.src} alt={m.caption || ''} loading="lazy" />
                            {m.caption && (
                              <figcaption className="proj-card-caption">
                                {m.caption}
                              </figcaption>
                            )}
                          </figure>
                        ))}
                      </div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="proj-column">
            <div className="proj-column-header">
              <h2 className="proj-column-title">Technical Projects</h2>
              <span className="proj-count">{TECH_CARDS.length}</span>
            </div>
            <ul className="proj-list">
              {TECH_CARDS.map((card) => (
                <li key={card.title}>
                  <article className="proj-card proj-card-tech">
                    <figure className="proj-card-figure proj-card-hero">
                      <img
                        src={card.image.src}
                        alt={card.image.caption || card.title}
                        loading="lazy"
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
                    <p className="proj-card-blurb">{card.blurb}</p>
                    <div className="proj-card-links">
                      <a
                        href={card.primary.href}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-card-pill proj-card-pill-primary"
                      >
                        {card.primary.label}
                      </a>
                      {card.secondary && (
                        <a
                          href={card.secondary.href}
                          target="_blank"
                          rel="noreferrer"
                          className="proj-card-pill"
                        >
                          {card.secondary.label}
                        </a>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
