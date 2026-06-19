import { FadeIn } from './shared'

const skills = [
  { cat: 'Languages', icon: '⟨/⟩', items: ['Python','C#','Java','PHP','HTML','CSS','JavaScript'] },
  { cat: 'Frameworks', icon: '◈', items: ['Django','React','FastAPI','Laravel','Vite','.NET','Flutter'] },
  { cat: 'Databases', icon: '⊞', items: ['PostgreSQL','MySQL','SQLite'] },
  { cat: 'Tools', icon: '⚙', items: ['Git / GitHub','Tailwind CSS','Node.js','Firebase','XAMPP','Google Colab'] },
  { cat: 'Methods', icon: '◉', items: ['Systems Analysis','UI Design','REST API Design'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-surface border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn>
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">Stack</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">Technical skills</h2>
        </FadeIn>
        <div className="space-y-6">
          {skills.map((g, i) => (
            <FadeIn key={g.cat} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <span className="text-accent text-lg w-6 text-center shrink-0 mt-0.5">{g.icon}</span>
                <div>
                  <h3 className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-2">{g.cat}</h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map(s => (
                      <span key={s} className="skill-pill font-mono text-xs px-3 py-1.5 rounded-full cursor-default">{s}</span>
                    ))}
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
