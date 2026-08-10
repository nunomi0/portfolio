import { profile } from '../data/portfolio'

export function Header() {
  return (
    <header className="identity">
      <div className="portrait">
        <img
          src={profile.image}
          alt={profile.imageAlt}
          width={profile.imageWidth}
          height={profile.imageHeight}
        />
      </div>
      <h1>{profile.name}</h1>
    </header>
  )
}
