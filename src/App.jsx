import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProcessTimeline from './components/ProcessTimeline'
import ItemsPage from './components/ItemsPage'
import LocationPage from './components/LocationPage'
import PreviousLocationsPage from './components/PreviousLocationsPage'
import './App.css'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Listen to window scroll events to toggle back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          {/* Render all sections stacked vertically */}
          <ProcessTimeline />
          <ItemsPage />
          <LocationPage />
          <PreviousLocationsPage />
        </div>
      </main>

      {/* Floating Scroll to Top Arrow */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </>
  )
}

export default App
