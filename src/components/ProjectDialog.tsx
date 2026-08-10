import { useEffect, useRef } from 'react'
import type { Project } from '../data/portfolio'

type ProjectDialogProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !project) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (!dialog.open) dialog.showModal()
    dialog.querySelector<HTMLElement>('.modal-visuals')?.scrollTo(0, 0)
    dialog.querySelector<HTMLElement>('.modal-copy')?.scrollTo(0, 0)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      if (dialog.open) dialog.close()
    }
  }, [project])

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-summary"
      onClick={handleBackdropClick}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
    >
      {project && (
        <div className="modal-layout">
          <div className="modal-visuals">
            {project.images.map((image) => (
              <img
                key={image.src}
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
            ))}
          </div>
          <div className="modal-copy">
            <button ref={closeButtonRef} className="modal-close" type="button" aria-label="닫기" onClick={onClose}>
              ×
            </button>
            <p className="modal-kicker">{project.number}</p>
            <h2 id="project-dialog-title">{project.name}</h2>
            <dl className="modal-meta">
              <div className="technology-row"><dt>사용 기술</dt><dd>{project.technology}</dd></div>
              {project.subject && <div><dt>주제</dt><dd>{project.subject}</dd></div>}
              <div><dt>진행 기간</dt><dd>{project.period}</dd></div>
              {project.team && <div><dt>팀 구성</dt><dd>{project.team}</dd></div>}
              {project.result && <div><dt>성과</dt><dd>{project.result}</dd></div>}
            </dl>
            <p id="project-dialog-summary" className="modal-summary">{project.dialogSummary}</p>
            <h3 className="modal-heading">작업 내용</h3>
            <ul className="modal-list">
              {project.workItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a className="modal-link" href={project.link} target="_blank" rel="noreferrer">관련 링크 ↗</a>
          </div>
        </div>
      )}
    </dialog>
  )
}
