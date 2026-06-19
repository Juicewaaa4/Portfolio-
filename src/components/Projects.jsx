import { FadeIn } from './shared'

const projects = [
  {
    name: 'TaskRoute Tracker', badge: 'Capstone Project', featured: true,
    desc: 'Operations teams tracking field tasks needed duration estimates they could plan around, not just historical averages. I built a forecasting pipeline that combines Prophet (for day-of-week and seasonal patterns) with XGBoost (for encoding KPIs and location-specific variance), deployed behind a FastAPI service that serves predictions from pre-computed lookup tables for sub-second response times.',
    details: [
      'React dashboard and Flutter mobile app give managers and field workers the same data in context-appropriate interfaces',
      'Hybrid ML model trained on temporal patterns, KPI metrics, and geographic data to predict task durations',
      'Real-time predictions served from optimized lookup tables — no model inference at request time',
    ],
    stack: ['React','FastAPI','Flutter','Prophet','XGBoost'],
    src: '#', demo: '#',
  },
  {
    name: 'Billiard Management System', badge: 'OJT Project',
    desc: 'A comprehensive billiard hall operations system handling multiple table types (regular, VIP, KTV, Kubo rentals), real-time game session tracking with global timeout alarms, reservation scheduling, void management with audit trails, and Excel report generation for transactions and dead time analysis.',
    stack: ['PHP','MySQL','JavaScript','XAMPP'],
    src: 'https://github.com/Juicewaaa4/Billiard-Management-System',
  },
  {
    name: "Zoey's Eatery POS", badge: 'OJT Project',
    desc: 'Offline-first desktop POS and inventory management app built with C# WinForms on .NET 8. Supports multi-PC LAN synchronization for concurrent admin and cashier operations, role-based access control, automated stock deductions with low-stock alerts, and Excel/PDF report exports.',
    stack: ['C#','.NET 8','WinForms','SQLite'],
    src: 'https://github.com/Juicewaaa4/Zoey-s-Eatery-POS',
  },
  {
    name: 'RCI Attendance Monitoring', badge: 'OJT Project',
    desc: 'RFID-based attendance tracking system built on Laravel with Blade templates. Supports real-time check-in/out logging, role-based dashboards for admins and teachers, and auto-generated attendance reports. Deployed with Docker and Nixpacks.',
    stack: ['Laravel','Blade','MySQL','Vite','Docker'],
    src: 'https://github.com/Juicewaaa4/rci-attendance-monitorting',
  },
  {
    name: 'BeReady', badge: 'Web Application',
    desc: 'A disaster readiness app built during a university course on emergency preparedness. Uses Django with AI integration to generate context-specific safety guidelines — the focus was making complex safety protocols accessible to non-technical users under stress.',
    stack: ['Django','AI Integration'], src: '#',
  },
  {
    name: 'Richwell Portal', badge: 'Web Application',
    desc: 'Student information system where registrars, cashiers, deans, and students each see role-specific dashboards. Led the frontend in React 19 with Vite, designed four distinct dashboard layouts in Tailwind, and managed the codebase through feature branches.',
    stack: ['React 19','Vite','Tailwind'], src: '#',
  },
]

const GithubIcon = () => <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const LinkIcon = () => <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/></svg>

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-b border-border">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn>
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">Work</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">Selected projects</h2>
          <p className="text-text-secondary text-sm max-w-lg mb-8">
            Six applications I designed and built — from a capstone with ML forecasting to OJT production systems and student portals.
          </p>
        </FadeIn>
        <div className="grid gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className={`glass-card rounded-xl overflow-hidden relative ${p.featured ? 'ring-1 ring-accent/20' : ''}`}>
                {p.featured && <div className="featured-ribbon">Featured</div>}
                <div className="h-28 md:h-36 bg-gradient-to-br from-accent/10 via-elevated to-surface flex items-center justify-center border-b border-border">
                  <span className="font-mono text-accent/40 text-lg tracking-wider">{p.name}</span>
                </div>
                <div className="p-6">
                  <p className="font-mono text-[11px] text-accent uppercase tracking-widest mb-2">{p.badge}</p>
                  <h3 className="text-lg font-semibold mb-3 tracking-tight">{p.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{p.desc}</p>
                  {p.details && (
                    <ul className="space-y-1.5 mb-4">
                      {p.details.map((d,j) => (
                        <li key={j} className="text-text-secondary text-sm pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-accent">{d}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map(t => (
                        <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded bg-accent/10 text-accent-light border border-accent/15">{t}</span>
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
          ))}
        </div>
      </div>
    </section>
  )
}
