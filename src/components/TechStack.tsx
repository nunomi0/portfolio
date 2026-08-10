import { techStack } from '../data/portfolio'
import { TooltipGroup, TooltipItem } from './TooltipItem'

export function TechStack() {
  return (
    <section className="tech-section" aria-labelledby="tech-stack-heading">
      <h2 className="section-title" id="tech-stack-heading">Tech Stack</h2>
      <TooltipGroup className="skills">
        {techStack.map((item) => (
          <TooltipItem key={item.category} id={`tech-${item.category.toLowerCase()}`} tooltip={item.tooltip} className="skill">
            <b>{item.category}</b>
            <span>{item.technologies}</span>
          </TooltipItem>
        ))}
      </TooltipGroup>
    </section>
  )
}
