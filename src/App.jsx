import React, { useState } from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Projects from './sections/Projects'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'


function App() {
  const [loading, setLoading] = useState(true)
  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      <div className="bg-foreground text-background min-h-screen font-sans px-[var(--spacing-page-x)]">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App