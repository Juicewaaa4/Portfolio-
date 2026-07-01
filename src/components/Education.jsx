import { FadeIn } from './shared'

export default function Education() {
  return (
    <section id="education" className="py-16 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn>
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">Education</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">Background</h2>
        </FadeIn>
        <div className="pl-5 border-l border-border-strong space-y-8">
          <FadeIn delay={0.1}>
            <div className="relative">
              <span className="absolute -left-[23px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
              <h3 className="text-lg font-semibold text-text mb-1">
                Bachelor of Science in Information Systems
              </h3>
              <p className="text-text-secondary text-sm">Richwell Colleges</p>
              <p className="font-mono text-xs text-text-muted mt-1">Class of 2026</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative">
              <span className="absolute -left-[23px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
              <h3 className="text-lg font-semibold text-text mb-1">
                Senior High School
              </h3>
              <p className="text-text-secondary text-sm">Dampol 2nd National Highschool</p>
              <p className="font-mono text-xs text-text-muted mt-1">2021 – 2022</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
