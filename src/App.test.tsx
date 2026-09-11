import { render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'
import { projects } from './data/portfolio'

const projectNames = [
  'Hi Selectors',
  'Smart Messaging System',
  'HR System',
  'Koala',
  'Mongkids',
  'ThorVG',
  'CookAssistant',
  'SmartGlasses',
  'STEP',
  'ONDUE',
]

test('renders the current portfolio projects in order', () => {
  render(<App />)

  expect(screen.getByRole('heading', { level: 1, name: 'YUKYUNG LEE' })).toBeInTheDocument()
  expect(screen.getAllByText('Spring Batch', { exact: false })).not.toHaveLength(0)

  const portfolio = screen.getByRole('region', { name: 'Portfolio' })
  expect(within(portfolio).getAllByRole('button').map((button) => button.getAttribute('aria-label'))).toEqual(
    projectNames.map((name) => `${name} 프로젝트 상세 보기`),
  )
})

test('uses system or project wording for every project introduction', () => {
  projects.forEach((project) => expect(project.summary).toMatch(/(시스템|프로젝트)$/))
})
