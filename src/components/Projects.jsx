import { FadeIn } from './shared'

/* ─── icons ─── */
const GithubIcon = () => <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const LinkIcon = () => <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/></svg>

/* ─── featured projects ─── */
const featured = [
  {
    name: 'TaskRoute Tracker', badge: 'Capstone Project', featured: true,
    desc: 'Full-stack task duration forecasting system built as a capstone. A hybrid ML pipeline — Prophet for seasonal trends combined with XGBoost for location-specific variance — is pre-computed and served via FastAPI lookup tables, delivering sub-second predictions without live model inference at request time.',
    details: [
      'Dual-client architecture: React dashboard for managers and Flutter mobile app for field workers',
      'Model trained on 3 feature dimensions — temporal patterns, KPI metrics, and geographic data',
      'Lookup-table serving strategy eliminates inference latency at the API layer',
    ],
    stack: ['React', 'FastAPI', 'Flutter', 'Prophet', 'XGBoost'],
    src: 'https://github.com/leizydog/taskroute-tracker',
    demo: 'https://www.youtube.com/watch?v=pgnEPNRVDD0',
  },
  {
    name: "Zoey's Billiard Management System", badge: 'Client Project',
    desc: 'Standalone desktop operations system managing 4 table categories — Regular, VIP, KTV, and Kubo rentals — for a live billiard business. Tracks concurrent sessions in real-time, enforces audit-trailed void management, and generates daily transaction and dead-time analysis reports in Excel.',
    details: [
      '4 concurrent table types with independent session timers and global timeout alarms',
      'Reservation scheduling with conflict detection and cashier assignment per session',
      'Void management with full audit trail — every override is logged with reason and timestamp',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'XAMPP'],
    src: 'https://github.com/Juicewaaa4/Billiard-Management-System',
  },
  {
    name: "Zoey's Eatery POS", badge: 'Client Project',
    desc: 'Offline-first desktop POS for a live eatery, built around a 2-shift daily cycle. Day and Night shifts each run independent sessions with separate cashier logins and transaction logs, then reconcile into a unified closing report — eliminating end-of-day manual tallying.',
    details: [
      '2 independent shift sessions (Day/Night) with per-shift cashier login and isolated transaction logs',
      'Multi-PC LAN sync enabling concurrent Admin and Cashier operations across stations',
      'Automated stock deductions on every sale with real-time low-stock alerts',
      'Closing reports auto-exported to Excel and PDF per shift and per day',
    ],
    stack: ['C#', '.NET 8', 'WinForms', 'SQLite'],
    src: 'https://github.com/Juicewaaa4/Zoey-s-Eatery-POS',
  },
  {
    name: "Zoey's StreetFoods", badge: 'OJT Project',
    desc: 'Cloud-synced mobile POS for a street food business, built with 2 role-based access levels (Admin and Cashier) backed by Firebase Authentication. Includes a per-item profit tracking engine that automatically computes net profit from cost basis, giving the owner real-time revenue clarity.',
    details: [
      '2-role access model (Admin/Cashier) with Firebase Auth and role-scoped UI screens',
      'Real-time Firestore sync — inventory and transaction state consistent across sessions',
      'Profit engine computes net margin per item from inputted cost/puhunan at point of sale',
      'Built with Jetpack Compose Material 3 for a clean, touch-optimized interface',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
    src: 'https://github.com/Juicewaaa4/Mobile-StreetFoods-POS',
  },
]

function ProjectCard({ p, index = 0 }) {
  return (
    <FadeIn delay={index * 0.08}>
      <div className={`glass-card rounded-xl overflow-hidden ${p.featured ? 'ring-1 ring-accent/20' : ''}`}>
        {p.featured && <div className="featured-ribbon">Featured</div>}
        <div className="h-24 md:h-32 bg-gradient-to-br from-accent/20 via-elevated to-base flex items-center justify-center border-b border-border px-6">
          <span className="font-mono text-white text-base font-semibold tracking-wide select-none text-center" style={{ textShadow: '0 0 20px rgba(99,102,241,0.6), 0 1px 3px rgba(0,0,0,0.8)' }}>{p.name}</span>
        </div>
        <div className="p-5">
          <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">{p.badge}</p>
          <p className="text-text-secondary text-sm leading-relaxed mb-3">{p.desc}</p>
          {p.details && (
            <ul className="space-y-1 mb-3">
              {p.details.map((d, j) => (
                <li key={j} className="text-text-secondary text-xs pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-accent/60">{d}</li>
              ))}
            </ul>
          )}
          <div className="flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-border">
            <div className="flex flex-wrap gap-1">
              {p.stack.map(t => (
                <span key={t} className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent-light border border-accent/10">{t}</span>
              ))}
            </div>
            <div className="flex gap-3">
              {p.src && <a href={p.src} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent hover:text-accent-light transition-colors inline-flex items-center gap-1"><GithubIcon />Source</a>}
              {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent hover:text-accent-light transition-colors inline-flex items-center gap-1"><LinkIcon />Demo</a>}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default function Projects({ onViewMore }) {
  return (
    <section id="projects" className="py-16 border-b border-border">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn>
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">Work</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">Selected projects</h2>
          <p className="text-text-secondary text-sm max-w-lg mb-8">
            Four applications I'm most proud of — a capstone ML system, two client projects, and an OJT mobile app.
          </p>
        </FadeIn>

        <div className="grid gap-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-8">
            <button
              onClick={onViewMore}
              className="inline-flex items-center gap-2 font-mono text-sm text-text-muted hover:text-accent border border-border hover:border-accent/30 rounded-lg px-5 py-2.5 transition-all group"
            >
              View more projects
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
