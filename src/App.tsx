import { Awards } from './components/Awards'
import { Credentials } from './components/Credentials'
import { Header } from './components/Header'
import { InfoSection } from './components/InfoSection'
import { Portfolio } from './components/Portfolio'
import { TechStack } from './components/TechStack'
import { ThemeDock } from './components/ThemeDock'
import { education, experience } from './data/portfolio'

export default function App() {
  return (
    <>
      <main className="page">
        <Header />
        <TechStack />
        <InfoSection title="Experience" records={experience} />
        <InfoSection title="Education & Training" records={education} />
        <Credentials />
        <Awards />
        <Portfolio />
      </main>
      <ThemeDock />
    </>
  )
}
