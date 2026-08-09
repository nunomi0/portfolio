# YUKYUN LEE Portfolio Site Design

## Status

Approved through the interactive visual mockup iterations completed on 2026-08-10.

The frozen visual reference is `docs/superpowers/specs/reference/portfolio-approved-mockup.html`. The implementation is compared at 1470 × 860 desktop and 390 × 844 mobile viewports in both dark and light themes. The reference HTML captures layout, type hierarchy, spacing, tooltip motion, modal proportions, bottom fade, and dock structure; content and asset rules in this document take precedence where later user feedback changed the reference.

## Goal

Build a concise React portfolio for 이유경 and publish it at `https://nunomi0.github.io/portfolio/`. The site must preserve the restrained visual language of the Paul Wong reference while presenting the supplied resume content without invented marketing copy.

## Source of Truth

- Profile photo source: `/Users/leeyukyung/Downloads/4B8C2D25-E9D9-44E6-8873-B5AA0BB25FDC.JPG`, SHA-256 `3d8576051dc4e0b7a7f3796be4fe0596179ce4b1f02705711784cf87de371c6f`.
- Approved profile crop: `docs/superpowers/specs/reference/assets/profile-photo-crop.png`, 1254 × 1254, SHA-256 `db5eb31e190c95b205b15b5bb34dd0728c54d61f0d1740748777cff4cc4bc193`.
- Career, training, awards, and project content source: `/Users/leeyukyung/Downloads/현대퓨처넷 자기소개 이유경 (4).pdf`, SHA-256 `f930b7de4197fc4de4907e1762ca81d888609e2cb8c7319729eded5437e735cb`.
- KOSA activity source: `/Users/leeyukyung/Documents/자기평가지/tmp/docx-review-2/6개월_과정_수료생_자기평가_설문지 (2).pdf`, SHA-256 `602537e7025888d53de0bee61611bba36836489850439b61063ed8a6f62979bf`.
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
- Desktop content width is 650 px, page side padding is at least 20 px, the profile image is 40 × 40 px on desktop and mobile, and the bottom blur is approximately 205 px high.
- Dark tokens: background `#080808`, primary text `#eeeeef`, secondary text `#8d8d92`, muted text `#626267`, surface `#111112`.
- Light tokens: background `#f5f5f3`, primary text `#171719`, secondary text `#656568`, muted text `#929296`, surface `#ffffff`.
- All text and interactive controls must meet WCAG 2.2 AA contrast.

## Main-Page Content

### Tech Stack

Tech Stack is the first content section and has stronger contrast than supporting metadata.

- Frontend: JavaScript, TypeScript, React, Next.js, Flutter
- Backend: Java, Spring Boot, REST API, SQL, Supabase
- DevOps: Git, Docker, AWS, Nginx, CI/CD
- Etc: Python, C++, Kotlin, RAG, VectorDB

### Experience

Show `QA Engineer Intern · 라포랩스`, `2025.12—2026.03`, and `웹·앱 Release QA · 상시 배포 팔로업 · 앱 전수 조사 · QA 문서 관리`. Its tooltip text is `매주 웹·앱 Release QA 전체 담당 · TanStack Query P0–P3 시나리오 검증 · React Native 라이브러리 업데이트 영향 범위 파악 및 테스트`.

### Education & Training

Show all six records exactly:

| Title | Visible description | Date |
|---|---|---|
| 현대퓨처넷 11기 MSA 기반 Full Stack 개발자 양성과정 | 인사 관리 · 메시지 발송 · 현대백화점 셀렉터스 | 2026.04.06—09.04 |
| 2025 오픈소스 컨트리뷰션 아카데미 | 벡터 그래픽 렌더링 엔진 ThorVG 오픈소스 기여 | 2025.07—11 |
| 네이버 부스트캠프 챌린지 웹 풀스택 | JavaScript를 이용한 프로그램 설계 및 CS 학습 | 2025.07—08 |
| UMC 5th Web | React 학습 및 프로젝트 진행 | 2023.09—2024.02 |
| 삼성전자 DX 부문 동계 S/W 역량강화 특강 | C++을 이용한 알고리즘 문제 풀이 학습 | 2023.01—02 |
| 한국항공대학교 | 항공전자정보공학부 정보통신공학전공 | 2020.03—2025.02 |

Education rows do not have tooltips because their supporting descriptions are already visible.

### Certificates

Show SQLD, OPIc, and TOPCIT only.

### Awards

Show these nine records exactly. The `Context` line is visible; `Tooltip` supplies the organizer plus context.

| Award | Date | Context | Tooltip |
|---|---|---|---|
| 8개 대학 연합 SW 코딩 경진대회 · 우수상 | 2024.12.26 | C++을 이용한 알고리즘 문제 풀이 | SW중심대학사업단 · C++을 이용한 알고리즘 문제 풀이 |
| 한국항공대학교 창업 아이디어 경진대회 · 최우수상 | 2024.12.12 | AI 레시피북 기획 | 한국항공대학교 대학일자리센터 · AI 레시피북 기획 |
| 차세대통신 컨소시엄 경진대회 · 차세대통신사업단장상 | 2024.11.22 | 사회적 약자를 위한 스마트글라스 전용 앱 기획 | 한국연구재단 · 사회적 약자를 위한 스마트글라스 전용 앱 기획 |
| 2024 ICT 융합 프로젝트 경진대회 · 최우수상 | 2024.10.31 | 사회적 약자를 위한 스마트글라스 전용 앱 기획 | 한국항공대학교 첨단분야 혁신융합대학사업단 · 사회적 약자를 위한 스마트글라스 전용 앱 기획 |
| 제4회 항공대학교 프로그래밍 경연대회 · KAUPC | 2024.08.07 | C++을 이용한 알고리즘 문제 풀이 | SW중심대학사업단 · C++을 이용한 알고리즘 문제 풀이 |
| 2024년도 종합설계 작품발표회 · 우수상 | 2024.07.01 | RAG를 이용한 레시피 생성 앱 개발 | 한국항공대학교 항공전자정보공학부 · RAG를 이용한 레시피 생성 앱 개발 |
| 2024 ICT 창업 메이커톤 · 대상 | 2024.06.28 | NFC를 활용한 계단 장려 앱 기획 및 개발 | 한국항공대학교 대학일자리센터 · NFC를 활용한 계단 장려 앱 기획 및 개발 |
| 미래대학 투모로우 솔루션 · 본선 입선 | 2024.05.27 | AI 기반 미래 대학 교육 ‘SliCE’ 기획 | 대학혁신지원사업 수도권협의회 · AI 기반 미래 대학 교육 ‘SliCE’ 기획 |
| 미래대학 투모로우 솔루션 교내 예선 · 대상 | 2024.04.12 | AI 기반 미래 대학 교육 ‘SliCE’ 기획 | 한국항공대학교 · AI 기반 미래 대학 교육 ‘SliCE’ 기획 |

### Portfolio

Portfolio is the final section. The visible order is Koala, Mongkids, ThorVG, CookAssistant, SmartGlasses, STEP, ONDUE. Each row shows the project name, the exact summary from the content records below, date, and technology stack before the user opens the detail view. Original project numbers remain 01 Koala, 02 ThorVG, 03 Mongkids, 04 CookAssistant, 05 SmartGlasses, 06 STEP, and 07 ONDUE even though the visible list puts Mongkids before ThorVG.

## Interaction Design

### Informational Tooltips

- Tooltips are required for Tech Stack, Experience, Certificates, and Awards. Education alone has no tooltip because its supporting text is already visible. `TooltipItem` owns one controlled `openTooltipId`; visibility is not derived directly from CSS focus selectors.
- Tech Stack tooltip strings are exact: Frontend `프로젝트에 적용해 봤어요`; Backend `KOSA MSA 기반 Full Stack 개발자 양성과정`; DevOps `KOSA 실습 및 프로젝트`; Etc `알고리즘 문제 풀이 · 프로젝트 적용`.
- Certificate tooltip strings are exact: SQLD `SQL 개발자 자격`; OPIc `영어 말하기 평가`; TOPCIT `소프트웨어 역량 평가`.
- Experience and Award tooltip strings are defined in their content sections above.
- Hovered or keyboard-focused items become more prominent while sibling items in the same group fade and blur slightly.
- The tooltip fades in, moves upward about 6 px, and resolves from a small blur using a short ease-out transition.
- Each trigger uses `aria-describedby` to reference one `role="tooltip"` element. Fine-pointer `mouseenter` and keyboard `focus` set its ID active. Fine-pointer `mouseleave`, `blur`, Escape, or an outside pointer press clear the active ID. Escape clears the state while leaving keyboard focus on the trigger; the tooltip does not reopen until a new `focus` or `mouseenter` event occurs.
- On coarse-pointer devices, the first tap focuses the trigger and sets its ID active; tapping the same trigger or outside clears the active ID. Tooltip state never traps navigation.
- Dimming is scoped to siblings inside the same Tech Stack or Awards group. The single Experience row has no sibling-dimming effect.

### Project Detail Dialog

- Clicking a project opens an accessible modal dialog.
- The left pane contains only cropped project screenshots, diagrams, or product visuals from the supplied PDF. It must not show full PDF pages or repeat the right-side prose.
- The right pane is the single source of textual detail.
- Right-pane order: project number, title, technology stack, then each record's defined metadata in listed order, description, work items, and related link. Koala includes Subject, Period, Team, and Result; every other project includes Period.
- Technology stack is the first metadata row and uses high contrast.
- Koala shows three mapped visuals, ThorVG shows four, ONDUE shows two, and each other project shows one, as defined in the asset manifest.
- The dialog closes with the close button, Escape, or a backdrop click.
- Use `<dialog aria-labelledby="project-dialog-title" aria-describedby="project-dialog-summary">`. Opening calls `showModal()`, which makes the rest of the document inert and contains focus. The close button receives initial focus. Closing unlocks body scroll and restores focus to the project button that opened it.
- While open, the page body cannot scroll; the image and text panes scroll independently. The dialog itself has a maximum height of 88 dynamic viewport height on desktop and 90 on mobile.

### Theme Dock

- A first visit with no valid stored value starts in dark mode. Invalid or inaccessible storage also falls back to dark.
- System mode is entered only when the user explicitly chooses the system control; it follows `prefers-color-scheme` and reacts to changes.
- Light and dark selections override system mode.
- The selection persists in `localStorage`.
- The GitHub control opens `https://github.com/nunomi0` in a new tab.
- The three theme controls are buttons labeled `시스템 테마`, `라이트 모드`, and `다크 모드`. Each exposes `aria-pressed`; exactly one button has `aria-pressed="true"`, representing the stored choice rather than the system-resolved color.

## Exact Project Content Records

### Koala

- Project number: `Project 01`
- Main-list summary and dialog summary: `한국항공대학교 알고리즘 학회 Koala의 스터디 자동화를 위한 서비스입니다.`
- Main-list date: `2024.07—2025.10`
- Technology: `React, JavaScript, styled-components`
- Subject: `알고리즘 학회 KOALA 자체 웹사이트 개발`
- Period: `2024.07 - 2025.10`
- Team: `FE 3 | BE 2 | Design 1`
- Result: `가입자 178명, 14개월 간 실제 운영, 10개 스터디 진행`
- Work items:
  - `자율 스터디, 커뮤니티, 데일리 챌린지 기능 기획 및 UI 개발 (React)`
  - `CodeMirror, Marked를 활용한 커스텀 마크다운 에디터 래퍼 개발`
  - `미디어 쿼리, rem 단위를 통한 디자인 시스템 개선 및 반응형 도입`
- Link: `https://github.com/ProjectX-Algoitzy/Algoitzy-FE`
- Images: `project-koala-01.webp`, `project-koala-02.webp`, `project-koala-03.webp`

### Mongkids

- Project number: `Project 03`
- Main-list summary: `클라이밍 학원 운영 효율화를 위한 CRM을 개발했습니다.`
- Dialog summary: `클라이밍 학원 운영 효율화를 위한 CRM을 개발했습니다. 저사양 환경에서 파일을 관리하고, 데이터를 개별적으로 관리하는 구조가 비효율적이라고 판단하여 이를 웹으로 풀어내고자 했습니다. 비즈니스 로직 정리 및 기획, UI 구현, DB 연동을 진행했습니다.`
- Main-list date: `2025.09—2026.03`
- Technology: `JavaScript(Next.js), Supabase, Vercel, Claude, Codex`
- Period: `2025.09~2026.03`
- Work items:
  - `학생, 수업 관리 기능 개발`
  - `수강생, 수업 일정, 출결 상태 관리 기능 구현`
  - `Supabase 기반 백엔드 구성`
  - `인증, 데이터베이스 설계 및 CRUD 처리`
  - `수업 일정 기준 출석 데이터 자동 생성 및 갱신 기능 구현`
- Link: `https://github.com/nunomi0/mongkids`
- Image: `project-mongkids-01.webp`

### ThorVG

- Project number: `Project 02`
- Main-list summary: `벡터 그래픽 렌더링 엔진 ThorVG의 프론트엔드 부분에 기여하였습니다.`
- Dialog summary: `2025 오픈소스 컨트리뷰션 아카데미(OSSCA) ThorVG 멘티로 활동하며, 벡터 그래픽 렌더링 엔진 ThorVG의 프론트엔드 부분에 기여하였습니다.`
- Main-list date: `2025.06—11`
- Technology: `React, Next.js, TypeScript, TailwindCSS, C++`
- Period: `2025.06 - 2025.11`
- Work items:
  - `ThorVG의 웹 성능 테스트 모듈(perf-test)에서 Lottie 애니메이션 크기를 조절할 수 있는 슬라이더 추가`
  - `ThorVG의 웹 성능 테스트 모듈(perf-test)에서 FPS 측정 값의 안정화를 위해 profiler에 축적 평균 로직 적용`
  - `ThorVG 웹 뷰어의 progress-slider 프레임 인덱스 계산에 대한 고민`
- Link: `https://www.thorvg.org/`
- Images: `project-thorvg-01.webp`, `project-thorvg-02.webp`, `project-thorvg-03.webp`, `project-thorvg-04.webp`

### CookAssistant

- Project number: `Project 04`
- Main-list summary: `RAG 기반 레시피 생성 애플리케이션 개발`
- Dialog summary: `‘채식 레시피 정보 부족’이라는 문제의식에서 출발하여, AI를 활용한 맞춤형 레시피 생성 애플리케이션을 3인 팀으로 개발했습니다. 보다 정밀하고 개인화된 레시피 결과를 위해 RAG(Retrieval-Augmented Generation) 구조를 설계했고, Flutter를 처음 학습해 앱 UI 구현 및 GPT API 연동까지 직접 진행했습니다.`
- Main-list date: `2023.08—2024.06`
- Technology: `Flutter, RAG, VectorDB(Pinecone), python`
- Period: `2023.08~2024.06`
- Work items:
  - `RAG를 이용한 AI 레시피 생성 파이프라인 설계`
  - `Crawling → Vector Embedding → Query 구조로 테스트를 반복하며 결과 품질을 개선`
  - `Flutter를 이용한 앱 UI 설계 및 구현`
  - `GPT 및 Google Cloud Speech API 연동을 통해 음성 기반 레시피 생성 기능 구현`
- Link: `https://github.com/CookAssistant/CookAssistant-fe`
- Image: `project-cookassistant-01.webp`

### SmartGlasses

- Project number: `Project 05`
- Main-list summary: `사회적 약자를 위한 스마트글래스 애플리케이션 개발`
- Dialog summary: `시각, 청각 보조가 필요한 사회적 약자를 지원하기 위해 스마트글라스를 활용한 AI-음성 기반 보조 애플리케이션을 개발했습니다. 기술이 빠르게 발전하고 있음에도 사회적 약자층이 AI 기술을 활용하기 어려운 현실에 주목하여, 음성 인식과 음성 안내 기능을 통해 실시간 상황 정보를 전달하는 앱 프로토타입을 목표로 했습니다.`
- Main-list date: `2024.03—11`
- Technology: `Java, SmartGlassManager(Mentra)`
- Period: `2024.03~2024.11`
- Work items:
  - `전체 기획 및 설계 주도, 사용자 시나리오 기반 기능 정의`
  - `오픈소스 스마트글라스 프레임워크 SmartGlassesManager 분석 및 적용`
  - `Android TTS 및 GPT-4o API 연동을 통해 음성 안내와 대화형 인터페이스 구현`
  - `스마트폰–스마트글라스 간 실시간 데이터 전송 구조 설계 및 테스트`
  - `앱 UI 제작 및 사용자 접근성을 고려한 UX 개선`
- Link: `https://github.com/nunomi0/chatgptapp`
- Image: `project-smartglasses-01.webp`

### STEP

- Project number: `Project 06`
- Main-list summary: `NFC 디바이스를 활용한 계단 이용 장려 애플리케이션 개발`
- Dialog summary: `‘건강’이라는 키워드가 주목받고 있다는 점에 착안해, 일상 속에서 자연스럽게 건강을 관리할 수 있는 서비스를 기획하고, 계단 이용을 습관화하기 위해 NFC 디바이스를 활용한 포인트 적립형 앱을 개발했습니다.`
- Main-list date: `2024.04.22—06.05`
- Technology: `Kotlin, Firebase, Arduino`
- Period: `2024.04.22 - 2024.06.05`
- Work items:
  - `프로젝트 기획 및 설계 전반을 주도`
  - `앱 전체 UI 및 사용자 흐름 설계를 담당, NFC 태깅 후 포인트 획득이 직관적으로 이어지도록 인터랙션 구성`
  - `NFC 모듈과 앱 간 연동 로직 구현, 아두이노에서 읽은 데이터를 Kotlin 앱에서 실시간 수신 및 시각화`
  - `사용자 행동 유도를 위한 피드백 UI(모달 창, 타이머, 랭킹 시각화) 기획 및 개발`
- Link: `https://github.com/nunomi0/STEP`
- Image: `project-step-01.webp`

### ONDUE

- Project number: `Project 07`
- Main-list summary: `어르신-요양보호사 매칭 서비스 개발`
- Dialog summary: `2주간 2025 블레이버스 MVP 개발 해커톤에 참여하여, 7명의 팀원들과 어르신-요양보호사 매칭 서비스를 만들었습니다. 해커톤 파이널데이에 참여하여 서비스 데모를 진행했고, 완성도 측면에서 긍정적인 평가를 받았습니다.`
- Main-list date: `2025.02.10—19`
- Technology: `React, JavaScript, styled-components`
- Period: `2025.02.10 - 2025.02.19`
- Work items:
  - `요양보호사 구인 등록, 매칭, 메인 페이지 개발`
  - `공통 컴포넌트 및 디자인 시스템 제작`
- Link: `https://github.com/nunomi0/ondue`
- Images: `project-ondue-01.webp`, `project-ondue-02.webp`

## React Architecture

Use Vite, React, and TypeScript with focused units:

- `src/data/portfolio.ts`: typed source-backed content and asset paths.
- `src/components/Header.tsx`: profile photo and name.
- `src/components/TechStack.tsx`: first-page technology section.
- `src/components/InfoSection.tsx`: reusable factual rows for experience and education.
- `src/components/TooltipItem.tsx`: accessible hover/focus help behavior.
- `src/components/Credentials.tsx`: the three visible certificate entries composed with `TooltipItem`.
- `src/components/Awards.tsx`: compact award grid.
- `src/components/Portfolio.tsx`: project list and selected-project state.
- `src/components/ProjectDialog.tsx`: image gallery and project details.
- `src/components/ThemeDock.tsx`: GitHub link and three theme choices.
- `src/hooks/useTheme.ts`: system preference, persistence, and theme application.
- `src/styles.css`: tokens, responsive layout, animation, dialog, blur, and dock.
- `src/App.tsx`: section composition only.

Static data remains local. The application does not need a server, API, form, analytics, router, or CMS.

## Assets

- Store the profile image under `src/assets/profile.png` and project visuals under `src/assets/projects/`. Import every asset from TypeScript so Vite emits base-aware hashed URLs; do not use root-relative `/assets/...` strings.
- The committed, checksummed visual inputs live under `docs/superpowers/specs/reference/assets/`. Copy them byte-for-byte to their output paths during implementation. They are already approved and compressed; no further re-encoding or image optimization is allowed.
- Use descriptive `alt` text that names the project and screen or diagram.
- Include explicit `width` and `height` attributes from this manifest to avoid layout shift.

| Output asset | Current approved file or crop source | Source PDF page and crop box | Dimensions | Alt text |
|---|---|---|---:|---|
| `src/assets/profile.png` | `docs/superpowers/specs/reference/assets/profile-photo-crop.png` | profile source, approved square crop | 1254 × 1254 | 이유경 프로필 사진 |
| `src/assets/projects/project-koala-01.webp` | same filename in approved asset directory | p.3 `(234,210,966,604)` | 732 × 394 | Koala 메인 화면 |
| `src/assets/projects/project-koala-02.webp` | same filename | p.4 `(50,257,1142,579)` | 1092 × 322 | Koala 에디터 컴포넌트 분리 구조 |
| `src/assets/projects/project-koala-03.webp` | same filename | p.5 `(90,815,1110,1325)` | 1020 × 510 | Koala 파일 상태 처리 흐름도 |
| `src/assets/projects/project-mongkids-01.webp` | same filename | p.6 `(39,128,1162,720)` | 1123 × 592 | Mongkids 수업 및 학생 관리 화면 |
| `src/assets/projects/project-thorvg-01.webp` | same filename | p.7 `(39,181,1167,743)` | 1128 × 562 | ThorVG 성능 테스트 화면 |
| `src/assets/projects/project-thorvg-02.webp` | same filename | p.8 `(317,161,882,876)` | 565 × 715 | ThorVG 크기 슬라이더 적용 전후 |
| `src/assets/projects/project-thorvg-03.webp` | same filename | p.9 `(267,165,928,608)` | 661 × 443 | ThorVG FPS 누적 평균 적용 전후 |
| `src/assets/projects/project-thorvg-04.webp` | same filename | p.10 `(74,140,1137,678)` | 1063 × 538 | ThorVG Viewer progress slider 화면 |
| `src/assets/projects/project-cookassistant-01.webp` | same filename | p.11 `(40,192,1132,784)` | 1092 × 592 | CookAssistant 앱 화면과 기능 구조도 |
| `src/assets/projects/project-smartglasses-01.webp` | same filename | p.12 `(40,151,1160,737)` | 1120 × 586 | SmartGlasses 연결 화면과 실행 장면 |
| `src/assets/projects/project-step-01.webp` | same filename | p.13 `(40,249,1160,543)` | 1120 × 294 | STEP 앱 기능 화면 |
| `src/assets/projects/project-ondue-01.webp` | same filename | p.14 `(282,157,916,517)` | 634 × 360 | ONDUE 서비스 소개 화면 |
| `src/assets/projects/project-ondue-02.webp` | same filename | p.14 `(282,525,916,883)` | 634 × 358 | ONDUE 매칭 과정 화면 |

## Responsive Behavior

- Desktop: project dialog uses a scrollable image pane on the left and detail pane on the right.
- Mobile: dialog stacks the image pane above the detail pane.
- At viewport widths of 680 px or below, hide dates in project rows; project name, description, and technology stack remain visible.
- The dock remains centered and clear of safe-area insets.
- Main content has at least 210 px of bottom padding so the fixed dock and fade never cover the final project row or its focus ring.
- No horizontal scrolling at 320 px viewport width.

## Accessibility

- The document language is Korean (`lang="ko"`). Use semantic headings, lists, buttons, dates, and a native dialog.
- All interactive elements must be keyboard reachable with visible focus styles.
- Tooltips use `role="tooltip"` and `aria-describedby` as defined in Interaction Design.
- Modal labeling, focus, inert background, scroll locking, and focus restoration follow the Project Detail Dialog contract above.
- Respect `prefers-reduced-motion` by removing nonessential movement and blur transitions.
- Maintain WCAG 2.2 AA contrast in both themes.

## Error Handling

- If a stored theme value is invalid, absent, or unavailable, fall back to dark mode.
- If a project image fails to load, retain the descriptive alternative text and do not block the textual detail.
- External links use safe new-tab attributes.
- The UI has no runtime API dependency. Offline reload is not promised because no service worker is in scope.

## Testing

Use Vitest and React Testing Library for behavior:

- Tech Stack renders before Experience.
- Only SQLD, OPIc, and TOPCIT appear as certificates.
- All seven projects show their technology stacks in the main list.
- Clicking a project opens the correct detail and cropped project images.
- Closing restores focus to the triggering project.
- Escape, close-button, and backdrop closure each close the dialog and unlock document scrolling.
- Dialog labeling, initial close-button focus, and background inert behavior are present.
- Tooltip hover/focus opens the right source-backed text, sibling dimming stays group-scoped, and Escape/blur closes it.
- Coarse-pointer tap toggles a tooltip and outside press dismisses it.
- Theme choices update the document theme and persistence state; system mode reacts to media-query changes.
- Theme buttons expose their Korean accessible names and exactly one `aria-pressed="true"` state matching the stored choice.
- Missing, inaccessible, and invalid theme storage all produce dark mode.
- Education rows do not render tooltips.
- A failed project image retains its alt text while textual project details stay visible.
- Reduced-motion mode removes tooltip movement/blur and other nonessential transitions.

Run a production build and inspect desktop and mobile layouts in a real browser. Confirm that every project image loads, there are no console errors, dialogs do not duplicate PDF prose, and the GitHub Pages asset paths resolve. Inspect generated `dist/index.html` and CSS to confirm URLs include `/portfolio/` or Vite-emitted relative hashed references and that no root-relative `/assets/...` reference remains.

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
