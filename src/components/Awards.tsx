import { awards } from '../data/portfolio'

export function Awards() {
  return (
    <section aria-labelledby="awards-heading">
      <h2 id="awards-heading">Awards &amp; Competitions</h2>
      <ul>
        {awards.map((award) => (
          <li key={`${award.title}-${award.date}`}>
            <article>
              <h3>{award.title}</h3>
              <time>{award.date}</time>
              <p>{award.context}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
