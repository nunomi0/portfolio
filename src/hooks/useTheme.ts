import { useEffect, useState } from 'react'

export type ThemeChoice = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

function readStoredTheme(): ThemeChoice {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'system' || stored === 'light' || stored === 'dark' ? stored : 'dark'
  } catch {
    return 'dark'
  }
}

export function useTheme() {
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>(readStoredTheme)

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const applyTheme = () => {
      document.documentElement.dataset.theme =
        themeChoice === 'system' ? (query.matches ? 'dark' : 'light') : themeChoice
    }

    applyTheme()
    query.addEventListener('change', applyTheme)
    return () => query.removeEventListener('change', applyTheme)
  }, [themeChoice])

  const chooseTheme = (choice: ThemeChoice) => {
    setThemeChoice(choice)
    try {
      window.localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // The visual selection still works when storage is unavailable.
    }
  }

  return { themeChoice, chooseTheme }
}
