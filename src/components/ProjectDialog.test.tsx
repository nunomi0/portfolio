import { render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import { ProjectDialog } from './ProjectDialog'
import type { Project } from '../data/portfolio'

const project: Project = {
  number: 'Project 01',
  name: 'Test project',
  summary: 'Summary',
  dialogSummary: 'Details',
  date: '2026.09',
  technology: 'React',
  period: '2026.09',
  workItems: [],
  link: 'https://example.com',
}

test('renders the custom cursor in an open project dialog', async () => {
  render(<ProjectDialog project={project} onClose={() => {}} />)

  expect(await within(screen.getByRole('dialog')).findByTestId('custom-cursor')).toBeInTheDocument()
})
