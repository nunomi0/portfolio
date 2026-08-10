import { techStack } from '../data/portfolio'

export function TechStack() {
  return (
    <section className="tech-section" aria-labelledby="tech-stack-heading">
      <h2 className="section-title" id="tech-stack-heading">Tech Stack</h2>
      <div className="skills">
        {techStack.map((item) => (
          <div key={item.category} className="skill">
            <b>{item.category}</b>
            <span>{item.technologies}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
