import { useState, useEffect } from 'react'

const links = ['about','skills','projects','education','contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach(s => { if (s.offsetTop <= window.scrollY + 120) cur = s.id })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-base/80 backdrop-blur-xl border-border' : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-14">
        <div />
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l} href={`#${l}`}
              className={`font-mono text-xs font-medium transition-colors relative ${
                active === l ? 'text-accent' : 'text-text-muted hover:text-text-secondary'
              }`}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
              {active === l && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />}
            </a>
          ))}
          <a href="/De Lara Resume.pdf" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-accent/40 text-accent text-xs font-mono font-semibold rounded-md hover:bg-accent hover:text-white transition-all duration-200">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" /></svg>
            Resume
          </a>
        </div>
        <button className="md:hidden flex flex-col gap-1 p-1" onClick={() => setOpen(!open)}
          aria-label="Toggle menu">
          <span className={`w-5 h-0.5 bg-text transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-5 h-0.5 bg-text transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-text transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-surface border-t border-border px-5 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}
              className="font-mono text-xs text-text-secondary hover:text-accent transition-colors">
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
          <a href="/De Lara Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
            className="font-mono text-xs text-accent font-semibold hover:underline transition-colors">
            ↓ Resume
          </a>
        </div>
      )}
    </nav>
  )
}
