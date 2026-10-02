import React from 'react'
import about from './../assets/about-picture.jpg'
import { GraduationCap, MapPin, Code2, Briefcase } from 'lucide-react'
import { useInView } from './../hooks/useInView'

const highlights = [
  { label: 'Role', value: 'Web Developer', icon: Code2 },
  { label: 'Education', value: 'IT Graduate', icon: GraduationCap },
  { label: 'Location', value: 'Philippines', icon: MapPin },
  { label: 'Status', value: 'Open to Work', icon: Briefcase },
]

export default function About() {
  const [sectionRef, isVisible] = useInView(0.1)

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen border-b border-background/10 pb-10"
    >
      <p
        className={`text-sm font-mono text-background/50 mb-2 pt-10 ${
          isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        TC-02 / ABOUT
      </p>
      <h2
        className={`text-4xl font-bold text-background mb-16 font-mono ${
          isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.1s' }}
      >
        About Me
      </h2>

      <div className="flex flex-col gap-10 md:gap-16 max-w-5xl mx-auto md:flex-row md:items-start">

        {/* Image with badge */}
        <div
          className={`relative w-full max-w-xs md:max-w-none md:w-2/5 mx-auto md:mx-0 ${
            isVisible ? 'animate-fade-left' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          <img
            src={about}
            alt="Lorence Rodriguez"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 bg-background text-foreground text-xs font-mono font-semibold px-4 py-2 rounded-xl shadow-md">
            2+ Years Learning
          </div>
        </div>

        {/* Text + highlight cards */}
        <div className="w-full md:w-3/5">
          <p
            className={`text-base sm:text-lg font-sans text-background/80 leading-relaxed ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            I'm Lorence Rodriguez, an IT graduate with a passion for
            web development, UI/UX design, and building practical
            software solutions.
          </p>

          <p
            className={`text-base sm:text-lg font-sans text-background/80 leading-relaxed mt-6 ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            I have hands-on experience developing systems such as
            biometric attendance and e-library platforms, as well as
            providing technical support, computer troubleshooting,
            and basic networking.
          </p>

          <p
            className={`text-base sm:text-lg font-sans text-background/80 leading-relaxed mt-6 ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            I enjoy turning ideas into functional and user-friendly
            applications while continuously learning and improving
            my skills as a developer.
          </p>

          {/* Highlight stats grid */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {highlights.map(({ label, value, icon: Icon }, index) => (
              <div
                key={label}
                className={`flex items-start gap-3 bg-background/5 border border-background/10 rounded-xl p-4 hover:border-background/20 transition-colors ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-background/10 shrink-0">
                  <Icon size={16} className="text-background/80" />
                </div>
                <div>
                  <p className="text-xs font-mono text-background/50 uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-background/90 mt-0.5">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}