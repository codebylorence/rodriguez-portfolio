import React from 'react'
import { useInView } from './../hooks/useInView'


const skillGroups = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML', className: 'devicon-html5-plain colored' },
      { name: 'CSS', className: 'devicon-css3-plain colored' },
      { name: 'JavaScript', className: 'devicon-javascript-plain colored' },
      { name: 'React', className: 'devicon-react-original colored' },
      { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/typescript/default.svg'},
      { name: 'Axios', className: 'devicon-axios-plain colored' },
      { name: 'Tailwind CSS', className: 'devicon-tailwindcss-plain colored' },
      { name: 'Bootstrap', className: 'devicon-bootstrap-plain colored' },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nodedotjs/default.svg' },
      { name: 'Express.js', className: 'devicon-express-original' },
      { name: 'PHP', className: 'devicon-php-plain colored' },
      { name: 'RESTful API', img: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/gcp-api/default.svg' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', className: 'devicon-mysql-plain colored' },
      { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/postgresql/default.svg' },
      { name: 'Sequelize', className: 'devicon-sequelize-plain colored' },
    ],
  },
  {
    category: 'Tools & Version Control',
    skills: [
      { name: 'Visual Studio Code', className: 'devicon-vscode-plain colored' },
      { name: 'Git', className: 'devicon-git-plain colored' },
      { name: 'GitHub', className: 'devicon-github-original' },
      { name: 'XAMPP',  img: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/xampp/default.svg' },
      { name: 'Postman', className: 'devicon-postman-plain colored' },
      { name: 'Vercel', className: 'devicon-vercel-original' },
      { name: 'Render', img: 'https://cdn.simpleicons.org/render' },
      { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/figma/default.svg' },
    ],
  },
]

function SkillGroup({ category, skills, groupIndex }) {
  const [ref, isVisible] = useInView(0.15)

  return (
    <div ref={ref}>
      <h3
        className={`text-sm font-bold uppercase tracking-wide text-background/60 mb-5 ${
          isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
        style={{ animationDelay: `${groupIndex * 0.1}s` }}
      >
        {category}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map(({ name, className, img }, index) => (
          <div
            key={name}
            className={`flex flex-col items-center justify-center gap-3 bg-background/5 border border-background/10 rounded-xl py-6 px-4 hover:border-background/25 hover:bg-background/10 hover:-translate-y-1 transition-all ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${groupIndex * 0.1 + index * 0.05}s` }}
          >
            {img ? (
              <img src={img} alt={name} className="w-9 h-9" />
            ) : (
              <i className={`${className} text-4xl`} />
            )}
            <span className="text-sm font-medium text-background/70">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [headerRef, headerVisible] = useInView(0.3)

  return (
    <section id="skills" className="min-h-screen border-b border-background/10 pb-10">
      <div ref={headerRef}>
        <p
          className={`text-sm font-mono text-background/50 mb-2 pt-10 ${
            headerVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          TC-03 / SKILLS
        </p>
        <h2
          className={`text-4xl font-bold text-background mb-16 font-mono ${
            headerVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          Skills
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {skillGroups.map((group, index) => (
          <SkillGroup key={group.category} {...group} groupIndex={index} />
        ))}
      </div>
    </section>
  )
}