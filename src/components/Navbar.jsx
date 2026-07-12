import { useState, useEffect } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-top-row">
          <a href="#" className="logo">
            <span className="logo-dot"></span>
            ပစ္စည်းပျောက်ဆုံးခြင်း
          </a>

          <div className="nav-actions">
            {/* Theme Toggle Button */}
            <button 
              className="theme-toggle" 
              onClick={toggleTheme} 
              aria-label="Toggle visual theme"
            >
              {theme === 'light' ? (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#process" className="nav-link">ဖြစ်စဉ်</a>
          <a href="#items" className="nav-link">ပျောက်ဆုံးသည့်ပစ္စည်းများ</a>
          <a href="#location" className="nav-link">နောက်ဆုံးသိရှိသည့်နေရာ</a>
          <a href="#previous-locations" className="nav-link">အရင်နေရာများ</a>
        </nav>
      </div>
    </header>
  )
}
