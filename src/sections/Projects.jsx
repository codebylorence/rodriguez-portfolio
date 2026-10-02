import React from 'react'
import ProjectCard from '../components/ProjectCard'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    image: project1,
    title: 'SecureAttend: Attendance Management System',
    description: 'Built as a capstone project for real client Toplis Solution Inc., SecureAttend replaces manual attendance logs with a real-time tracking dashboard, giving managers instant visibility into employee check-ins and attendance patterns.',
    techstack: ['JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'MySQL', 'C#', 'Socket.IO', 'Express.js'],
    githubUrl: 'https://github.com/codebylorence/secureattend-2.0',
    videoUrl: 'https://youtube.com/your-demo-link',
  },
  {
    image: project2,
    title: 'E-Library Management System for CVSU',
    description: "Developed during my internship at CvSU Carmona, this system digitizes the campus library's book catalog and borrowing process, featuring QR-code scanning for quick checkouts",
    techstack: ['JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'MySQL', 'Express.js', 'QR-code'],
    githubUrl: 'https://github.com/codebylorence/E-Library-Management-System',
    videoUrl: 'https://youtube.com/your-demo-link',
  },
  {
    image: project3,
    title: 'Dormitory Management System',
    description: 'A system that helps dormitory administrators manage room assignments, tenant records, and occupancy status in real time — replacing manual tracking with a centralized dashboard for a clearer view of unit availability.',
    techstack: ['JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'MySQL', 'Express.js'],
    githubUrl: 'https://github.com/codebylorence/dorm-management-system',
    videoUrl: 'https://youtube.com/your-demo-link',
  },
  {
    image: project4,
    title: 'Appointment System for GlitterTails',
    description: 'Lets clients book pet grooming appointments online instead of calling or walking in, with a simple interface for scheduling and managing bookings.',
    techstack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
    githubUrl: 'https://github.com/codebylorence/GlitterTailes-Pet-Grooming-Appointment-System',
    videoUrl: 'https://youtube.com/your-demo-link',
  },
]

function AnimatedCard({ project, index }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      className={isVisible ? 'animate-fade-up' : 'opacity-0'}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <ProjectCard {...project} />
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen border-b border-background/10 pb-10">
      <p className="text-sm font-mono text-background/50 mb-2 pt-10">
        TC-01 / PROJECTS
      </p>
      <h2 className="text-4xl font-bold text-background mb-16 font-mono">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimatedCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}