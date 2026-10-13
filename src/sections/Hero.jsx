import React, { useState, useEffect } from 'react'
import FoldText from './../components/Intro'
import profile from './../assets/profile.png'
import { Download, ArrowRight } from 'lucide-react'
import resume from './../CV/LORENCE_RODRIGUEZ_CV.pdf'

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  )

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return isMobile
}

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col py-20 md:flex-row justify-center items-center gap-10 md:gap-20 border-b border-background/10 md:py-0 text-center md:text-left"
    >

      <div className="order-2 md:order-1">
        <div className="w-full max-w-4xl flex flex-col items-center md:items-start">

          <div
            className="animate-fade-up inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-background/10 text-background/80 text-xs font-mono"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to work
          </div>

          <p
            className="animate-fade-up text-lg sm:text-xl md:text-2xl font-medium text-background/90 mb-2"
            style={{ animationDelay: '0.15s' }}
          >
            Hi, I'm Lorence
          </p>

          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <FoldText
              text="Web Developer."
              splitBy="char"
              hinge="top"
              trigger="mount"
              duration={0.65}
              stagger={0.045}
              ease="power3.out"
              perspective={700}
              creaseShading={0.55}
              fontSize={isMobile ? 34 : 56}
              fontWeight={800}
              color="var(--color-background)"
            />
          </div>

          <p
            className="animate-fade-up mt-4 text-base sm:text-lg md:text-2xl text-background/60 max-w-sm md:max-w-lg leading-relaxed"
            style={{ animationDelay: '0.5s' }}
          >
            I design and build complete web applications from the ground up — functional, fast, and built to solve real problems.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4"
            style={{ animationDelay: '0.65s' }}
          >
            <a
              href={resume}
              download
              className="inline-flex items-center gap-2 bg-background text-foreground font-semibold py-3 px-6 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm"
            >
              <Download size={18} />
              Download CV
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 text-background/80 font-semibold py-3 px-2 hover:text-background transition-colors cursor-pointer"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>

      <div
        className="animate-fade-scale order-1 md:order-2 self-center md:self-end"
        style={{ animationDelay: '0.2s' }}
      >
        <img src={profile} alt="Lorence Rodriguez" className="w-200" />
      </div>

    </section>
  )
}
