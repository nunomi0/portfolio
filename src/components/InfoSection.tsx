import type { InfoRecord } from '../data/portfolio'
import { TooltipGroup, TooltipItem } from './TooltipItem'

type InfoSectionProps = {
  title: string
  records: InfoRecord[]
}

export function InfoSection({ title, records }: InfoSectionProps) {
  const headingId = `${title.toLowerCase().replaceAll(/[^a-z]+/g, '-')}-heading`
  const hasTooltips = records.some((record) => record.tooltip)

  const entries = records.map((record) => {
    const content = (
      <>
        <div>
          <strong>{record.title}</strong>
          <span>{record.description}</span>
        </div>
        <time>{record.date}</time>
      </>
    )

    return record.tooltip ? (
      <TooltipItem key={`${record.title}-${record.date}`} id={`info-${headingId}-${record.date}`} tooltip={record.tooltip} className="entry">
        {content}
      </TooltipItem>
    ) : (
      <div className="entry" key={`${record.title}-${record.date}`}>{content}</div>
    )
  })

  return (
    <section aria-labelledby={headingId}>
      <h2 className="section-title" id={headingId}>{title}</h2>
      {hasTooltips ? <TooltipGroup className="entries">{entries}</TooltipGroup> : <div className="entries">{entries}</div>}
    </section>
  )
}
