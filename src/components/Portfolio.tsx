import { projects } from '../data/portfolio'

export function Portfolio() {
  return (
    <section aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading">Portfolio</h2>
      <ol>
        {projects.map((project) => (
          <li key={project.number}>
            <article aria-label={project.name}>
              <p>{project.number}</p>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <time>{project.date}</time>
              <p>{project.technology}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
