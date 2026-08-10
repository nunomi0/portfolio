import { certificates } from '../data/portfolio'
import { TooltipGroup, TooltipItem } from './TooltipItem'

export function Credentials() {
  return (
    <section aria-labelledby="certificates-heading">
      <h2 className="section-title" id="certificates-heading">Certificates</h2>
      <TooltipGroup className="certificates">
        {certificates.map((certificate) => (
          <TooltipItem key={certificate.name} id={`certificate-${certificate.name.replaceAll(' ', '-').toLowerCase()}`} tooltip={certificate.tooltip}>
            {certificate.name}
          </TooltipItem>
        ))}
      </TooltipGroup>
    </section>
  )
}
