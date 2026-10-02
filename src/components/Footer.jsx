import React from 'react'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="pt-10 pb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

        <div>
          <p className="text-sm font-mono text-background/50">
            TC-05 / END
          </p>
          <p className="text-sm text-background/60 mt-1">
            © {new Date().getFullYear()} Lorence Rodriguez. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/codebylorence"
            target="_blank"
            rel="noreferrer"
            className="text-background/60 hover:text-background transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="hhttps://www.linkedin.com/in/lorence-rodriguez-31042b421/"
            target="_blank"
            rel="noreferrer"
            className="text-background/60 hover:text-background transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:lorencerodriguez.dev@gmail.com"
            className="text-background/60 hover:text-background transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            className="ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-background/10 text-background/70 hover:bg-background/20 hover:text-background transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  )
}