import { certificates } from '../data/portfolio'

export function Credentials() {
  return (
    <section aria-labelledby="certificates-heading">
      <h2 id="certificates-heading">Certificates</h2>
      <ul>
        {certificates.map((certificate) => (
          <li key={certificate.name} title={certificate.tooltip}>
            {certificate.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
