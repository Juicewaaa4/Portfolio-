import { FadeIn } from './shared'
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

function AnimatedNum({ value, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const isNum = !isNaN(value)
  const [count, setCount] = useState(isNum ? 0 : value)
  useEffect(() => {
    if (!inView || !isNum) return
    let start = 0
    const end = parseInt(value)
    const dur = 1200
    const step = dur / end
    const timer = setInterval(() => {
      start++; setCount(start)
      if (start >= end) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [inView, value, isNum])
  return (
    <div ref={ref} className="flex-1 text-center py-6">
      <div className="text-2xl font-bold text-accent mb-1 font-mono">{count}</div>
      <div className="text-[11px] text-text-muted uppercase tracking-widest font-mono">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn>
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">About</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">Building from system to screen</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-2xl space-y-3 text-text-secondary text-sm leading-relaxed mb-10">
            <p>My capstone project taught me to wire together a React SPA, a FastAPI service, and a Flutter mobile app into one coherent system — then bolt on ML predictions accurate enough for operations teams to trust. That full-stack-plus-data pipeline is the kind of problem I want to keep solving.</p>
            <p>I come from an Information Systems background, so I think about software from the user and process side first, then work backward to the architecture. I've managed Git workflows across parallel UI tracks, worked with role-based access patterns, and integrated third-party AI services into Django backends.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 bg-surface border border-border rounded-lg divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="border-r border-border md:border-r-0"><AnimatedNum value="6" label="Shipped Projects" /></div>
            <div><AnimatedNum value="2026" label="Graduating" /></div>
            <div className="flex-1 text-center py-6 border-r border-border md:border-r-0">
              <div className="text-xl md:text-xl font-bold text-accent mb-1 font-mono leading-tight flex items-center justify-center h-[32px] px-2 text-center text-[15px] sm:text-base">B.S. in Info Systems</div>
              <div className="text-[10px] md:text-[11px] text-text-muted uppercase tracking-widest font-mono">Degree</div>
            </div>
            <div><AnimatedNum value="Full-Stack" label="Focus Area" /></div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
