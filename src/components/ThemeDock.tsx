import { useTheme, type ThemeChoice } from '../hooks/useTheme'

const themeButtons: { choice: ThemeChoice; label: string; icon: React.ReactNode }[] = [
  {
    choice: 'system',
    label: '시스템 테마',
    icon: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  },
  {
    choice: 'light',
    label: '라이트 모드',
    icon: <><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></>,
  },
  {
    choice: 'dark',
    label: '다크 모드',
    icon: <path d="M20.6 14.5A8.5 8.5 0 0 1 9.5 3.4 8.5 8.5 0 1 0 20.6 14.5Z" />,
  },
]

export function ThemeDock() {
  const { themeChoice, chooseTheme } = useTheme()

  return (
    <>
      <div className="bottom-blur" aria-hidden="true" />
      <nav className="dock" aria-label="링크 및 테마">
        <a href="https://github.com/nunomi0" target="_blank" rel="noreferrer">
          GitHub
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m21 3-7.4 18-3.3-7.3L3 10.4 21 3Z" />
            <path d="m10.3 13.7 4.5-4.5" />
          </svg>
        </a>
        <span className="dock-divider" aria-hidden="true" />
        {themeButtons.map(({ choice, label, icon }) => (
          <button
            key={choice}
            type="button"
            aria-label={label}
            aria-pressed={themeChoice === choice}
            onClick={() => chooseTheme(choice)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg>
          </button>
        ))}
      </nav>
    </>
  )
}
