import { useRef, useState } from 'react'
import { projects } from '../data/portfolio'
import type { Project } from '../data/portfolio'
import { ProjectDialog } from './ProjectDialog'

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)

  const closeProject = () => {
    setSelectedProject(null)
    requestAnimationFrame(() => openerRef.current?.focus())
  }

  return (
    <>
      <section id="portfolio" aria-labelledby="portfolio-heading">
        <h2 className="section-title" id="portfolio-heading">Portfolio</h2>
        <div className="projects">
          {projects.map((project) => (
            <button
              className="project"
              type="button"
              key={project.number}
              aria-label={`${project.name} 프로젝트 상세 보기`}
              onClick={(event) => {
                openerRef.current = event.currentTarget
                setSelectedProject(project)
              }}
            >
              <span className="project-copy">
                <strong>{project.name}</strong>
                <span>{project.summary}</span>
                <span className="stack">{project.technology}</span>
              </span>
              <time>{project.date}</time>
              <span className="arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </section>
      <ProjectDialog project={selectedProject} onClose={closeProject} />
    </>
  )
}
