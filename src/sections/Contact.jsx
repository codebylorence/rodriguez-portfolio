import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import { useInView } from './../hooks/useInView'

const contactLinks = [
  {
    label: 'Email',
    value: 'lorencerodriguez.dev@gmail.com',
    href: 'mailto:lorencerodriguez.dev@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/codebylorence',
    href: 'https://github.com/codebylorence',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/lorence-rodriguez',
    href: 'https://www.linkedin.com/in/lorence-rodriguez-31042b421/',
    icon: Linkedin,
  },
]

export default function Contact() {
  const [sectionRef, isVisible] = useInView(0.15)

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="border-b border-background/10 pb-10"
    >
      <p
        className={`text-sm font-mono text-background/50 mb-2 pt-10 ${
          isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        TC-04 / CONTACT
      </p>
      <h2
        className={`text-4xl font-bold text-background mb-16 font-mono ${
          isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.1s' }}
      >
        Contact
      </h2>

      <p
        className={`text-background/60 max-w-lg mb-12 leading-relaxed ${
          isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.2s' }}
      >
        I'm currently open to new opportunities and would love to hear from
        you. Whether it's a job, a project, or just a question — my inbox is
        open.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
        {contactLinks.map(({ label, value, href, icon: Icon }, index) => (
          <a
            key={label}
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel={label !== 'Email' ? 'noreferrer' : undefined}
            className={`flex flex-col gap-4 bg-background/5 border border-background/10 rounded-2xl p-6 hover:border-background/25 hover:bg-background/10 hover:-translate-y-1 transition-all ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10">
              <Icon size={18} className="text-background/80" />
            </div>
            <div>
              <p className="text-xs font-mono text-background/50 uppercase tracking-wide mb-1">
                {label}
              </p>
              <p className="text-sm font-medium text-background/90 break-all">
                {value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <a
        href="mailto:lorencerodriguez.dev@gmail.com"
        className={`inline-flex items-center gap-2 bg-background text-foreground font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity ${
          isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.6s' }}
      >
        <Mail size={16} />
        Say Hello
      </a>
    </section>
  )
}