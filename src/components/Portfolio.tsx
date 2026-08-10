import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { projects } from '../data/portfolio'
import type { Project } from '../data/portfolio'
import { ProjectDialog } from './ProjectDialog'
import './portfolio-preview.css'

type PreviewState = {
  project: Project
  left: number
  top: number
  width: number
}

const PREVIEW_GAP = 24
const PREVIEW_MARGIN = 20
const PREVIEW_MAX_WIDTH = 220
const PREVIEW_MIN_WIDTH = 112

function getPreviewPosition(target: HTMLButtonElement): Omit<PreviewState, 'project'> | null {
  const rect = target.getBoundingClientRect()
  const viewportWidth = document.documentElement.clientWidth
  const viewportHeight = document.documentElement.clientHeight
  const leftRoom = rect.left - PREVIEW_MARGIN - PREVIEW_GAP
  const rightRoom = viewportWidth - rect.right - PREVIEW_MARGIN - PREVIEW_GAP
  const placeOnRight = rightRoom >= leftRoom
  const availableWidth = Math.max(leftRoom, rightRoom)

  if (availableWidth < PREVIEW_MIN_WIDTH) return null

  const width = Math.min(PREVIEW_MAX_WIDTH, Math.floor(availableWidth))
  const height = Math.round(width * 0.68)
  const left = placeOnRight ? rect.right + PREVIEW_GAP : rect.left - PREVIEW_GAP - width
  const top = Math.min(
    Math.max(PREVIEW_MARGIN, rect.top + (rect.height - height) / 2),
    viewportHeight - height - PREVIEW_MARGIN,
  )

  return { left, top, width }
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [preview, setPreview] = useState<PreviewState | null>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const hidePreview = () => setPreview(null)

    window.addEventListener('scroll', hidePreview, true)
    window.addEventListener('resize', hidePreview)

    return () => {
      window.removeEventListener('scroll', hidePreview, true)
      window.removeEventListener('resize', hidePreview)
    }
  }, [])

  const showPreview = (project: Project, target: HTMLButtonElement) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const position = getPreviewPosition(target)
    setPreview(position ? { project, ...position } : null)
  }

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
              onPointerEnter={(event) => showPreview(project, event.currentTarget)}
              onFocus={(event) => showPreview(project, event.currentTarget)}
              onPointerLeave={() => setPreview(null)}
              onBlur={() => setPreview(null)}
              onClick={(event) => {
                openerRef.current = event.currentTarget
                setPreview(null)
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
      {preview && (
        <div
          className="project-preview"
          aria-hidden="true"
          style={{
            '--project-preview-left': `${preview.left}px`,
            '--project-preview-top': `${preview.top}px`,
            '--project-preview-width': `${preview.width}px`,
          } as CSSProperties}
        >
          <img src={preview.project.images[0].src} alt="" />
          <span>{preview.project.name}</span>
        </div>
      )}
      <ProjectDialog project={selectedProject} onClose={closeProject} />
    </>
  )
}
