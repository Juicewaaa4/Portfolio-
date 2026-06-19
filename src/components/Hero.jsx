import { useState, useEffect } from 'react'
import { FadeIn } from './shared'

const code = `{
  "name": "Lloyd Joshua A. De Lara",
  "role": "Full-Stack Developer",
  "location": "Pulilan, Bulacan, PH",
  "available": true,
  "stack": ["React", "Django", "FastAPI", "Flutter"]
}`

function TypingText({ text }) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++ }
      else clearInterval(timer)
    }, 40)
    return () => clearInterval(timer)
  }, [text])
  return <>{displayed}<span className="typing-cursor" /></>
}

function SyntaxHighlight({ code }) {
  const highlighted = code
    .replace(/"(\w+)":/g, '<span class="text-blue-300">"$1"</span>:')
    .replace(/: "(.*?)"/g, ': <span class="text-green-300">"$1"</span>')
    .replace(/true/g, '<span class="text-purple-400">true</span>')
    .replace(/\[/g, '<span class="text-gray-400">[</span>')
    .replace(/\]/g, '<span class="text-gray-400">]</span>')
    .replace(/[{}]/g, '<span class="text-gray-500">$&</span>')
  return <pre className="text-gray-300 text-xs leading-7" dangerouslySetInnerHTML={{ __html: highlighted }} />
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-14">
      <div className="hero-bg" />
      <div className="max-w-6xl mx-auto px-5 w-full grid lg:grid-cols-[3fr_2fr] gap-10 items-center relative z-10">
        <div>
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="avatar-ring">
                <div className="w-12 h-12 rounded-full bg-elevated flex items-center justify-center">
                  <span className="font-mono text-accent text-sm font-bold">LJD</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green/20 bg-green/5">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="font-mono text-xs text-green">Available for work</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
              Lloyd Joshua<br />De Lara
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-secondary mb-4 font-mono text-sm">
              <TypingText text="BSIS Graduate · Full-Stack Developer · Bulacan, PH" />
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-text-secondary max-w-md mb-6 text-sm leading-relaxed">
              I built a task tracking platform with ML-based duration forecasting as
              my capstone, and I've shipped production frontends for a student
              information system. Looking for a junior role where I can keep building
              full-stack tools that solve real operational problems.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex gap-3 flex-wrap">
              <a href="https://github.com/Juicewaaa4" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-xs font-mono font-semibold rounded-md hover:bg-accent-light transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-strong text-text text-xs font-mono font-semibold rounded-md hover:border-accent hover:text-accent transition-colors">
                Get in touch
              </a>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.3} className="hidden lg:block">
          <div className="terminal-glow rounded-lg overflow-hidden bg-surface transition-all duration-300">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-elevated border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="ml-2 text-text-muted font-mono text-[11px]">profile.json</span>
            </div>
            <div className="p-5">
              <SyntaxHighlight code={code} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
