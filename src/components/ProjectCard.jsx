import React from 'react'
import { Github, Video } from 'lucide-react'

export default function ProjectCard({
    image,
    title = 'SecureAttend: Attendance Management System',
    description = 'A responsive web application built during Full Stack PHP training, including authentication, database integration, CRUD operations, Bootstrap UI, and a PHP/MySQL backend.',
    techstack = [],
    githubUrl,
    videoUrl,
}) {
    return (
        <div className="bg-background/5 rounded-2xl overflow-hidden border border-background/10 hover:border-background/20 transition-colors">

            {/* Image with badge */}
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover object-top" />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-background mb-3">
                    {title}
                </h3>

                <p className="text-sm text-background/60 leading-relaxed mb-5">
                    {description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {techstack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-background text-foreground border border-background/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-3">

                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-background/15 text-background/80 text-sm font-medium hover:bg-background/10 hover:text-background transition-colors"
                    >
                        <Github size={16} />
                        GitHub
                    </a>

                    <a
                        href={videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-background/15 text-background/80 text-sm font-medium hover:bg-background/10 hover:text-background transition-colors"
                    >
                        <Video size={16} />
                        Video
                    </a>

                </div>
            </div>
        </div>
    )
}