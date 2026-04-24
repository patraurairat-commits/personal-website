import { Route, Routes } from 'react-router-dom'
import Intro from './pages/Intro'
import ProfileSelection from './pages/ProfileSelection'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ChiefOfStaffTimeline from './pages/ChiefOfStaffTimeline'
import MusicianSpotify from './pages/MusicianSpotify'
import PressPage from './pages/PressPage'
import SideQuesterTimeline from './pages/SideQuesterTimeline'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/profiles" element={<ProfileSelection />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/chief-of-staff" element={<ChiefOfStaffTimeline />} />
      <Route path="/musician" element={<MusicianSpotify />} />
      <Route path="/press" element={<PressPage />} />
      <Route path="/side-quester" element={<SideQuesterTimeline />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
