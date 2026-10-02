import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Projects', 'About', 'Skills', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [isDark, setIsDark] = useState(true)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })
  const [mobileOpen, setMobileOpen] = useState(false)

  const listRef = useRef(null)
  const linkRefs = useRef({})

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setIsDark(savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev
      const themeName = next ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', themeName)
      localStorage.setItem('theme', themeName)
      return next
    })
  }

  const handleClick = (e, link) => {
    e.preventDefault()
    const section = document.getElementById(link.toLowerCase())
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setActive(link)
    setMobileOpen(false)
  }

  useLayoutEffect(() => {
    const activeEl = linkRefs.current[active]
    const list = listRef.current
    if (activeEl && list) {
      const listRect = list.getBoundingClientRect()
      const itemRect = activeEl.getBoundingClientRect()
      setPillStyle({
        left: itemRect.left - listRect.left,
        width: itemRect.width,
      })
    }
  }, [active])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = navLinks.find(
              (link) => link.toLowerCase() === entry.target.id
            )
            if (matched) setActive(matched)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center">

      {/* Desktop pill nav */}
      <nav className="hidden md:flex items-center gap-1 bg-background/10 backdrop-blur-md rounded-full p-1.5">
        <div ref={listRef} className="relative flex items-center gap-1">
          <span
            className="absolute top-0 bottom-0 rounded-full bg-background transition-all duration-300 ease-out"
            style={{ left: pillStyle.left, width: pillStyle.width }}
          />
          {navLinks.map((link) => (
            <a
              key={link}
              ref={(el) => (linkRefs.current[link] = el)}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleClick(e, link)}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-bold transition-colors duration-300 ${
                active === link
                  ? 'text-foreground'
                  : 'text-background/70 hover:text-background'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="ml-1 w-9 h-9 flex items-center justify-center rounded-full bg-background/10 text-background/80 hover:bg-background/20 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </nav>

      {/* Mobile bar: logo/active label + hamburger + theme toggle */}
      <div className="md:hidden flex items-center justify-between w-full max-w-sm bg-background/10 backdrop-blur-md rounded-full px-4 py-2">
        <span className="text-sm font-bold text-background">
          {active}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-background/10 text-background/80 hover:bg-background/20 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Moon size={14} /> : <Sun size={14} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-background/10 text-background/80 hover:bg-background/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-background/95 backdrop-blur-md rounded-2xl p-2 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleClick(e, link)}
              className={`px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                active === link
                  ? 'bg-foreground/10 text-foreground'
                  : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      )}

    </div>
  )
}