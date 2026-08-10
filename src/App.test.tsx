import { render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

const educationTitles = [
  '현대퓨처넷 11기 MSA 기반 Full Stack 개발자 양성과정',
  '2025 오픈소스 컨트리뷰션 아카데미',
  '네이버 부스트캠프 챌린지 웹 풀스택',
  'UMC 5th Web',
  '삼성전자 DX 부문 동계 S/W 역량강화 특강',
  '한국항공대학교',
]

const projects = [
  ['Koala', 'React, JavaScript, styled-components'],
  ['Mongkids', 'JavaScript(Next.js), Supabase, Vercel, Claude, Codex'],
  ['ThorVG', 'React, Next.js, TypeScript, TailwindCSS, C++'],
  ['CookAssistant', 'Flutter, RAG, VectorDB(Pinecone), python'],
  ['SmartGlasses', 'Java, SmartGlassManager(Mentra)'],
  ['STEP', 'Kotlin, Firebase, Arduino'],
  ['ONDUE', 'React, JavaScript, styled-components'],
]

test('renders the complete source-backed portfolio content in the approved order', () => {
  render(<App />)

  expect(screen.getByRole('heading', { level: 1, name: 'YUKYUN LEE' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: '이유경 프로필 사진' })).toHaveAttribute('width', '1254')
  expect(screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent)).toEqual([
    'Tech Stack',
    'Experience',
    'Education & Training',
    'Certificates',
    'Awards & Competitions',
    'Portfolio',
  ])

  const education = screen.getByRole('region', { name: 'Education & Training' })
  expect(within(education).getAllByRole('listitem')).toHaveLength(6)
  educationTitles.forEach((title) => expect(within(education).getByText(title)).toBeInTheDocument())

  const certificates = screen.getByRole('region', { name: 'Certificates' })
  expect(within(certificates).getAllByRole('listitem').map((item) => item.textContent)).toEqual([
    'SQLD',
    'OPIc IH',
    'TOPCIT',
  ])
  expect(within(screen.getByRole('region', { name: 'Awards & Competitions' })).getAllByRole('listitem')).toHaveLength(9)

  const portfolio = screen.getByRole('region', { name: 'Portfolio' })
  expect(within(portfolio).getAllByRole('listitem')).toHaveLength(7)
  expect(within(portfolio).getAllByRole('article').map((article) => article.getAttribute('aria-label'))).toEqual(
    projects.map(([name]) => name),
  )
  projects.forEach(([name, stack]) => {
    const project = within(portfolio).getByRole('article', { name })
    expect(within(project).getByText(stack)).toBeInTheDocument()
  })

  ;['SEOUL', '취업 준비 중', '정보처리기사', 'AWS SAA', '준비중'].forEach((text) => {
    expect(screen.queryByText(text, { exact: false })).not.toBeInTheDocument()
  })
})
