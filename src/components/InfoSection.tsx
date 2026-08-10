import type { InfoRecord } from '../data/portfolio'

type InfoSectionProps = {
  title: string
  records: InfoRecord[]
}

export function InfoSection({ title, records }: InfoSectionProps) {
  const headingId = `${title.toLowerCase().replaceAll(/[^a-z]+/g, '-')}-heading`

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      <ul>
        {records.map((record) => (
          <li key={`${record.title}-${record.date}`} title={record.tooltip}>
            <article>
              <h3>{record.title}</h3>
              <time>{record.date}</time>
              <p>{record.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
