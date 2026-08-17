import { useState } from 'react'
import { ScrollProgress } from './components/shared'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import MoreProjects from './components/MoreProjects'
import Education from './components/Education'
import { Contact, Footer } from './components/Contact'

export default function App() {
  const [showMore, setShowMore] = useState(false)

  const handleViewMore = () => {
    setShowMore(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setShowMore(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (showMore) {
    return (
      <>
        <ScrollProgress />
        <Navbar />
        <MoreProjects onBack={handleBack} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects onViewMore={handleViewMore} />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
