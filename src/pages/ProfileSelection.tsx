import { useNavigate } from 'react-router-dom'

type Profile = {
  id: string
  label: string
  avatar: string
}

const PROFILES: Profile[] = [
  { id: 'recruiter', label: 'Recruiter', avatar: '/assets/avatars/image_7.png' },
  { id: 'stalker', label: 'Stalker', avatar: '/assets/avatars/image_9.png' },
  { id: 'yc-partner', label: 'YC Partner', avatar: '/assets/avatars/image_8.png' },
]

export default function ProfileSelection() {
  const navigate = useNavigate()

  const select = (p: Profile) => {
    try {
      sessionStorage.setItem('selectedProfile', p.label)
    } catch {}
    navigate('/home')
  }

  return (
    <div className="profiles-stage">
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

      <div className="profiles-content">
        <h1 className="profiles-title">Who's watching?</h1>
        <ul className="profiles-grid">
          {PROFILES.map((p) => (
            <li key={p.id} className="profile-cell">
              <button
                type="button"
                className="profile-card"
                onClick={() => select(p)}
                aria-label={`Continue as ${p.label}`}
              >
                <span className="profile-avatar">
                  <img src={p.avatar} alt="" />
                </span>
                <span className="profile-label">{p.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
