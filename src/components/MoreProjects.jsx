import { FadeIn } from './shared'

/* ─── icons ─── */
const GithubIcon = () => <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const LinkIcon = () => <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ArrowLeft = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>

/* ─── project data ─── */
const moreProjects = [
  {
    name: 'RCI Attendance Monitoring', badge: 'Contributor',
    desc: 'RFID-based attendance tracking system built on Laravel with Blade templates. Contributed to real-time check-in/out logging, role-based dashboards for admins and teachers, and auto-generated attendance reports. Deployed with Docker and Nixpacks.',
    stack: ['Laravel', 'Blade', 'MySQL', 'Vite', 'Docker'],
    src: 'https://github.com/Juicewaaa4/rci-attendance-monitorting',
  },
  {
    name: 'BeReady', badge: 'Web Application',
    desc: 'Django-based disaster awareness and preparedness web app for the Philippines. Provides localized safety articles by hazard type, emergency hotlines, and an AI chatbot that generates context-specific guidelines — making complex safety protocols accessible under stress.',
    stack: ['Django', 'Python', 'SQLite', 'AI Integration'],
    src: 'https://github.com/Juicewaaa4/BeReady',
    demo: 'https://beready-ecln.onrender.com',
  },
  {
    name: 'Richwell Portal', badge: 'Contributor',
    desc: 'Student information system where registrars, cashiers, deans, and students each see role-specific dashboards. Led the frontend in React 19 with Vite, designed four distinct dashboard layouts in Tailwind, and managed the codebase through feature branches.',
    stack: ['React 19', 'Vite', 'Tailwind'],
    src: 'https://github.com/property360-2/richwell-potal',
  },
  {
    name: "Arceo's Lugaw House", badge: 'Client Project',
    desc: "A mobile Point of Sale (POS) application built for Arceo's Sarap Lugaw House. Features real-time cloud synchronization, role-based access for Admins and Cashiers, raw ingredient tracking decoupled from sales, and daily/monthly expense analytics.",
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
    src: 'https://github.com/Juicewaaa4/arceolugawhousemobile',
  },
  {
    name: 'Automatic Smart Roof', badge: 'Client Project',
    desc: 'Arduino-based retractable roof system that reacts autonomously to weather. Uses a rain sensor and LDR (light-dependent resistor) to close the roof during rainfall or at night and open it during sunny conditions — with LED status indicators for real-time feedback.',
    details: [
      'Rain sensor triggers close at configurable sensitivity threshold',
      'LDR detects darkness to automatically retract for nighttime protection',
      'Servo motor variant and DC motor + L298N variant included',
    ],
    stack: ['Arduino', 'C++', 'Servo Motor', 'LDR', 'Rain Sensor'],
    src: 'https://github.com/Juicewaaa4/Automatic-Smart-Roof',
    demo: 'https://drive.google.com/drive/folders/18tSN8ixDsEdsS9b5ZMsXXCmm7cOqxrrG',
  },
]


function ProjectCard({ p, index }) {
  return (
    <FadeIn delay={index * 0.08}>
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="h-20 bg-gradient-to-br from-accent/20 via-elevated to-base flex items-center justify-center border-b border-border px-6">
          <span className="font-mono text-white text-sm font-semibold tracking-wide select-none text-center" style={{ textShadow: '0 0 20px rgba(99,102,241,0.6), 0 1px 3px rgba(0,0,0,0.8)' }}>{p.name}</span>
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

export default function MoreProjects({ onBack }) {
  return (
    <main className="min-h-screen">
      <section className="py-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-5">
          {/* Back button */}
          <FadeIn>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors mb-10 group"
            >
              <ArrowLeft />
              Back to portfolio
            </button>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">More work</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">Other projects</h2>
            <p className="text-text-secondary text-sm max-w-lg mb-10">
              Additional work from university coursework and internship — systems, portals, web apps, and an IoT build.
            </p>
          </FadeIn>

          <div className="grid gap-5">
            {moreProjects.map((p, i) => (
              <ProjectCard key={p.name} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
