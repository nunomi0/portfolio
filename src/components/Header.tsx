import { useState } from 'react'
import { profile } from '../data/portfolio'

export function Header() {
  const [showHoverPhoto, setShowHoverPhoto] = useState(false)

  return (
    <header className="identity">
      <button
        type="button"
        className="portrait"
        aria-label="프로필 사진 전환"
        aria-pressed={showHoverPhoto}
        onClick={() => setShowHoverPhoto((isVisible) => !isVisible)}
      >
        <img
          className="portrait-photo"
          src={profile.image}
          alt={profile.imageAlt}
          width={profile.imageWidth}
          height={profile.imageHeight}
        />
        <span className="portrait-hover-card" aria-hidden="true">
          <img
            src={profile.hoverImage}
            alt={profile.hoverImageAlt}
            width={profile.hoverImageWidth}
            height={profile.hoverImageHeight}
          />
        </span>
      </button>
      <h1>{profile.name}</h1>
    </header>
  )
}
