import { FadeIn } from './shared'

const MailIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
const GithubIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const PhoneIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/></svg>
const MapIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0Z" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3"/></svg>

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <FadeIn>
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">Get in touch</h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto mb-10">
            Open to junior developer roles, freelance work, and collaboration.
            Based in Bulacan, Philippines — available for remote or onsite work in Metro Manila.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex justify-center gap-5 mb-8">
            {[
              { icon: <MailIcon />, href: 'mailto:delarralloydjoshua4@gmail.com', label: 'Email' },
              { icon: <GithubIcon />, href: 'https://github.com/Juicewaaa4', label: 'GitHub' },
              { icon: <PhoneIcon />, href: 'tel:09478173485', label: 'Phone' },
              { icon: <MapIcon />, href: '#', label: 'Location' },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" title={c.label}
                className="w-12 h-12 rounded-lg border border-border bg-surface flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-colors">
                {c.icon}
              </a>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <a href="mailto:delarralloydjoshua4@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-mono font-semibold rounded-lg hover:bg-accent-light transition-colors">
            Send an email
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer className="py-6 border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <p className="font-mono text-xs text-text-muted">
          © 2026 Lloyd Joshua De Lara · Built with React + Vite
        </p>
        <button onClick={scrollTop}
          className="w-8 h-8 rounded border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-colors" aria-label="Back to top">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </footer>
  )
}
