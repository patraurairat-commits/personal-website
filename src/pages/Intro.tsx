import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const introSfx = typeof window !== 'undefined' ? new Audio('/netflix-sound.mp3') : null
if (introSfx) {
  introSfx.preload = 'auto'
}

export default function Intro() {
  const [animate, setAnimate] = useState(false)
  const navigate = useNavigate()
  const triggered = useRef(false)

  const go = () => {
    if (triggered.current) return
    triggered.current = true
    if (introSfx) {
      introSfx.currentTime = 0
      introSfx.play().catch(() => {})
    }
    setAnimate(true)
    window.setTimeout(() => navigate('/profiles'), 1600)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        go()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div
      className="intro-stage"
      onClick={go}
      role="button"
      tabIndex={0}
      aria-label="Enter site"
    >
      <video
        className="stage-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/intro-bg.mp4" type="video/mp4" />
      </video>
      <div className="stage-video-overlay" aria-hidden="true" />

      <svg
        className={`intro-logo${animate ? ' is-playing' : ''}`}
        viewBox="0 0 800 240"
        role="img"
        aria-label="PATRA"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <path
            id="intro-logo-arc"
            d="M 60 200 Q 400 20 740 200"
            fill="none"
          />
        </defs>
        <text className="intro-logo-text">
          <textPath
            href="#intro-logo-arc"
            startOffset="50%"
            textAnchor="middle"
          >
            PATRA
          </textPath>
        </text>
      </svg>

      {!animate && <span className="intro-hint">click anywhere</span>}
    </div>
  )
}
