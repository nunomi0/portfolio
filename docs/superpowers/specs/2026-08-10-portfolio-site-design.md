# YUKYUN LEE Portfolio Site Design

## Status

Approved through the interactive visual mockup iterations completed on 2026-08-10.

## Goal

Build a concise React portfolio for 이유경 and publish it at `https://nunomi0.github.io/portfolio/`. The site must preserve the restrained visual language of the Paul Wong reference while presenting the supplied resume content without invented marketing copy.

## Source of Truth

- Profile photo: the user-supplied JPG, shown as the approved square crop.
- Career, training, awards, and project content: the user-supplied Hyundai FutureNet portfolio PDF.
- KOSA activity content: the supplied KOSA self-evaluation document.
- Project descriptions in detail views must use the wording and facts from the supplied documents. Do not add generic claims, summaries, or AI-style filler.

## Information Architecture

The single page uses this order:

1. Profile photo and `YUKYUN LEE`
2. Tech Stack
3. Experience
4. Education & Training
5. Certificates
6. Awards & Competitions
7. Portfolio

The page must not show an introductory paragraph, `SEOUL`, an employment status line, a footer slogan, or explanatory UI copy. `정보처리기사` and `AWS SAA` are excluded because they are still in preparation.

## Visual Direction

- Narrow, centered, single-column layout.
- Dark mode is the initial appearance; light and system modes are available.
- Small square profile image with the whole approved crop visible.
- No decorative yellow backing layers.
- Minimal separators. Sections rely on spacing, type scale, and contrast.
- Compact sans-serif body type with small monospaced labels and dates.
- A strong fixed fade and backdrop blur soften the bottom of the page.
- A fixed pill dock mirrors the reference structure: GitHub link, divider, system theme, light theme, dark theme.
- Use local/system fonts only. No external font request is required.

## Main-Page Content

### Tech Stack

Tech Stack is the first content section and has stronger contrast than supporting metadata.

- Frontend: JavaScript, TypeScript, React, Next.js, Flutter
- Backend: Java, Spring Boot, REST API, SQL, Supabase
- DevOps: Git, Docker, AWS, Nginx, CI/CD
- Etc: Python, C++, Kotlin, RAG, VectorDB

### Experience

Show the 라포랩스 QA Engineer internship, dates, and a compact factual summary. Its hover/focus tooltip may reveal additional source-backed tasks.

### Education & Training

Show all six entries and their dates:

- 현대퓨처넷 11기 MSA 기반 Full Stack 개발자 양성과정
- 2025 오픈소스 컨트리뷰션 아카데미
- 네이버 부스트캠프 챌린지 웹 풀스택
- UMC 5th Web
- 삼성전자 DX 부문 동계 S/W 역량강화 특강
- 한국항공대학교 정보통신공학전공

Education rows do not have tooltips because their supporting descriptions are already visible.

### Certificates

Show SQLD, OPIc, and TOPCIT only.

### Awards

Show all nine supplied award and competition entries with their dates and project context. A hover/focus tooltip may add the organizing institution when that information is not already visible.

### Portfolio

Portfolio is the final section. Each of the seven project rows shows the project name, one source-backed line, date, and technology stack before the user opens the detail view.

## Interaction Design

### Informational Tooltips

- Tooltips apply to non-modal items only where they add information: Tech Stack, Experience, Certificates, and Awards.
- Education has no tooltip.
- Hovered or keyboard-focused items become more prominent while sibling items in the same group fade and blur slightly.
- The tooltip fades in, moves upward about 6 px, and resolves from a small blur using a short ease-out transition.
- On touch devices, keyboard focus/tap access must still expose the tooltip without trapping navigation.

### Project Detail Dialog

- Clicking a project opens an accessible modal dialog.
- The left pane contains only cropped project screenshots, diagrams, or product visuals from the supplied PDF. It must not show full PDF pages or repeat the right-side prose.
- The right pane is the single source of textual detail.
- Right-pane order: project number, title, technology stack, remaining metadata, source-backed description, work items, related link.
- Technology stack is the first metadata row and uses high contrast.
- Koala and ThorVG can show multiple relevant visuals; other projects show one or two.
- The dialog closes with the close button, Escape, or a backdrop click.

### Theme Dock

- System mode follows `prefers-color-scheme` and reacts to changes.
- Light and dark selections override system mode.
- The selection persists in `localStorage`.
- The GitHub control opens `https://github.com/nunomi0` in a new tab.

## React Architecture

Use Vite, React, and TypeScript with focused units:

- `src/data/portfolio.ts`: typed source-backed content and asset paths.
- `src/components/Header.tsx`: profile photo and name.
- `src/components/TechStack.tsx`: first-page technology section.
- `src/components/InfoSection.tsx`: reusable factual rows for experience and education.
- `src/components/TooltipItem.tsx`: accessible hover/focus help behavior.
- `src/components/Awards.tsx`: compact award grid.
- `src/components/Portfolio.tsx`: project list and selected-project state.
- `src/components/ProjectDialog.tsx`: image gallery and project details.
- `src/components/ThemeDock.tsx`: GitHub link and three theme choices.
- `src/hooks/useTheme.ts`: system preference, persistence, and theme application.
- `src/styles.css`: tokens, responsive layout, animation, dialog, blur, and dock.
- `src/App.tsx`: section composition only.

Static data remains local. The application does not need a server, API, form, analytics, router, or CMS.

## Assets

- Store the profile image and extracted project visuals under `public/assets/`.
- Use WebP for the project visuals.
- Use descriptive `alt` text that names the project and screen or diagram.
- Optimize images for the page without changing or generating project content.
- Asset references must work under the GitHub Pages `/portfolio/` base path.

## Responsive Behavior

- Desktop: project dialog uses a scrollable image pane on the left and detail pane on the right.
- Mobile: dialog stacks the image pane above the detail pane.
- Dates may be hidden in project rows on narrow screens when space is limited; project name, description, and technology stack remain visible.
- The dock remains centered and clear of safe-area insets.
- No horizontal scrolling at 320 px viewport width.

## Accessibility

- Use semantic headings, lists, buttons, dates, and a native dialog where practical.
- All interactive elements must be keyboard reachable with visible focus styles.
- Tooltips use `role="tooltip"` and are connected to their trigger.
- Modal focus moves into the dialog and returns to the triggering project when closed.
- Respect `prefers-reduced-motion` by removing nonessential movement and blur transitions.
- Maintain readable contrast in both themes.

## Error Handling

- If a stored theme value is invalid or unavailable, fall back to system mode.
- If a project image fails to load, retain the descriptive alternative text and do not block the textual detail.
- External links use safe new-tab attributes.
- The UI contains no network-dependent runtime behavior, so a static render remains usable offline after assets load.

## Testing

Use Vitest and React Testing Library for behavior:

- Tech Stack renders before Experience.
- Only SQLD, OPIc, and TOPCIT appear as certificates.
- All seven projects show their technology stacks in the main list.
- Clicking a project opens the correct detail and cropped project images.
- Closing restores focus to the triggering project.
- Theme choices update the document theme and persistence state.
- Education rows do not render tooltips.

Run a production build and inspect desktop and mobile layouts in a real browser. Confirm that every project image loads, there are no console errors, dialogs do not duplicate PDF prose, and the GitHub Pages asset paths resolve.

## Deployment

- Configure Vite with base path `/portfolio/`.
- Add a GitHub Actions Pages workflow triggered by pushes to `main` and manual dispatch.
- Workflow permissions: `contents: read`, `pages: write`, and `id-token: write`.
- Build with Node and npm, upload `dist`, and deploy with the official GitHub Pages actions.
- Push the verified implementation to `origin/main`, then verify the Pages workflow and the public URL.

## Acceptance Criteria

- The public GitHub Pages URL loads without broken assets.
- The design matches the approved local mockup in dark and light modes.
- Tech Stack is the first content section and is immediately readable.
- No preparation-only certificates or unwanted introductory copy appear.
- Education has no redundant tooltip.
- Project rows show technology stacks before opening.
- Project dialogs show only related visuals on the left and source-backed, nonduplicated detail on the right.
- All theme, tooltip, modal, keyboard, and responsive behaviors work without browser console errors.
