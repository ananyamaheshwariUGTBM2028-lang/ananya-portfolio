import { useEffect, useState } from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import WorkExperienceSection from './sections/WorkExperienceSection'
import ContactSection from './sections/ContactSection'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import CursorGlow from './components/CursorGlow'
import ScrollProgressBar from './components/ScrollProgressBar'
import SmoothScrollProvider from './components/SmoothScrollProvider'
import Navbar from './components/Navbar'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden'
  }, [loaded])

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {loaded && (
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgressBar />
          <Navbar />
          <div className="relative bg-[#0C0C0C] min-h-screen" style={{ overflowX: 'clip' }}>
            <CursorGlow />
            <div className="relative z-[1]">
              <HeroSection />
              <AboutSection />
              <WorkExperienceSection />
              <ContactSection />
            </div>
          </div>
        </SmoothScrollProvider>
      )}
    </>
  )
}

export default App
