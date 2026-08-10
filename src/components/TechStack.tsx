import { techStack } from '../data/portfolio'

export function TechStack() {
  return (
    <section aria-labelledby="tech-stack-heading">
      <h2 id="tech-stack-heading">Tech Stack</h2>
      <ul>
        {techStack.map((item) => (
          <li key={item.category} title={item.tooltip}>
            <h3>{item.category}</h3>
            <p>{item.technologies}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
