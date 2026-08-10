import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import faviconUrl from './assets/favicon.svg'
import './styles.css'

const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]') ?? document.createElement('link')
favicon.rel = 'icon'
favicon.type = 'image/svg+xml'
favicon.href = faviconUrl
if (!favicon.parentNode) document.head.append(favicon)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
