import { Link } from 'react-router-dom'

type PressItem = {
  title: string
  href: string
}

const PRESS: PressItem[] = [
  {
    title: 'Oriel student releases first spotify single',
    href: 'https://www.oriel.ox.ac.uk/news/oriel-student-releases-first-spotify-single/',
  },
  {
    title: 'Named ISIS Magazine’s Icon of the week',
    href: 'https://isismagazine.org.uk/2025/02/icon-of-the-week-patra/',
  },
  {
    title: 'Oxford university reel',
    href: 'https://www.instagram.com/reel/DGlkFezMB7q/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==',
  },
  {
    title:
      'Won “Best supporting actress” in musical recognised “First school to stage an original musical at a professional level” in Malaysia’s Book of Records',
    href: 'https://cpac.com.my/awards/',
  },
]

export default function PressPage() {
  return (
    <div className="netflix-home">
      <nav className="nf-nav" aria-label="Primary">
        <div className="nf-nav-left">
          <Link to="/home" className="nf-brand">PORTFOLIO</Link>
          <div className="nf-nav-links">
            <Link to="/profiles" className="nf-nav-link">Home</Link>
            <Link to="/contact" className="nf-nav-link">Contact Me</Link>
            <Link to="/press" className="nf-nav-link is-active">Existing Press</Link>
          </div>
        </div>
        <Link to="/profiles" className="nf-profile-icon" aria-label="Switch profile">
          <span />
        </Link>
      </nav>

      <main className="press-stage">
        <video
          className="press-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/press.mp4" type="video/mp4" />
        </video>
        <div className="press-overlay" aria-hidden="true" />

        <section className="press-card">
          <h1 className="press-title">Existing Press</h1>
          <ul className="press-list">
            {PRESS.map((p) => (
              <li key={p.href}>
                <a
                  className="press-link"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="press-link-text">{p.title}</span>
                  <span className="press-link-arrow" aria-hidden="true">&#8599;</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
