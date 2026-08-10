import { awards } from '../data/portfolio'

export function Awards() {
  return (
    <section aria-labelledby="awards-heading">
      <h2 className="section-title" id="awards-heading">Awards &amp; Competitions</h2>
      <div className="awards">
        {awards.map((award) => (
          <article className="award" key={`${award.title}-${award.date}`}>
            <strong>{award.title}</strong>
            <span>{award.context}</span>
            <time>{award.date}</time>
          </article>
        ))}
      </div>
    </section>
  )
}
