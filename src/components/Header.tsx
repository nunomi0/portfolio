import { profile } from '../data/portfolio'

export function Header() {
  return (
    <header>
      <img
        src={profile.image}
        alt={profile.imageAlt}
        width={profile.imageWidth}
        height={profile.imageHeight}
      />
      <h1>{profile.name}</h1>
    </header>
  )
}
