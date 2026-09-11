import profileImage from '../assets/profile.jpg'
import cookAssistantImage from '../assets/projects/project-cookassistant-01.webp'
import hiSelectorsImage1 from '../assets/projects/project-hi-selectors-01.png'
import hiSelectorsImage2 from '../assets/projects/project-hi-selectors-02.png'
import hrSystemImage from '../assets/projects/project-hr-system-01.png'
import koalaImage1 from '../assets/projects/project-koala-01.webp'
import koalaImage2 from '../assets/projects/project-koala-02.webp'
import koalaImage3 from '../assets/projects/project-koala-03.webp'
import mongkidsImage from '../assets/projects/project-mongkids-01.webp'
import ondueImage1 from '../assets/projects/project-ondue-01.webp'
import ondueImage2 from '../assets/projects/project-ondue-02.webp'
import smartGlassesImage from '../assets/projects/project-smartglasses-01.webp'
import smartMessagingImage from '../assets/projects/project-smart-messaging-01.png'
import stepImage from '../assets/projects/project-step-01.webp'
import thorvgImage1 from '../assets/projects/project-thorvg-01.webp'
import thorvgImage2 from '../assets/projects/project-thorvg-02.webp'
import thorvgImage3 from '../assets/projects/project-thorvg-03.webp'
import thorvgImage4 from '../assets/projects/project-thorvg-04.webp'

export type TechStackRecord = {
  category: string
  technologies: string
}

export type InfoRecord = {
  title: string
  description: string
  date: string
  tooltip?: string
}

export type Certificate = {
  name: string
  tooltip: string
}

export type Award = {
  title: string
  date: string
  context: string
}

export type ProjectImage = {
  src: string
  width: number
  height: number
  alt: string
}

export type Project = {
  number: string
  name: string
  summary: string
  dialogSummary: string
  date: string
  technology: string
  period: string
  subject?: string
  team?: string
  result?: string
  workItems: string[]
  link: string
  images?: ProjectImage[]
}

export const profile = {
  name: 'YUKYUNG LEE',
  image: profileImage,
  imageWidth: 1024,
  imageHeight: 1497,
  imageAlt: '이유경 프로필 사진',
} as const

export const techStack: TechStackRecord[] = [
  {
    category: 'Frontend',
    technologies: 'JavaScript, TypeScript, React, Next.js, Thymeleaf, Flutter',
  },
  {
    category: 'Backend',
    technologies: 'Java, Spring Boot, Spring Security, Spring Batch, MyBatis, REST API',
  },
  {
    category: 'DevOps',
    technologies: 'Git, Docker, AWS ECS·Lambda·SQS, Nginx, CI/CD',
  },
  {
    category: 'Etc',
    technologies: 'MySQL, Oracle, Redis, RabbitMQ, SSE, Python, C++, Kotlin, RAG, VectorDB',
  },
]

export const experience: InfoRecord[] = [
  {
    title: 'QA Engineer Intern',
    date: '2025.12—2026.03',
    description: '라포랩스',
    tooltip:
      '라포랩스에서 웹·앱 Release QA, 상시 배포 팔로업, 앱 전수 조사 및 QA 문서 관리를 담당했습니다.',
  },
]

export const education: InfoRecord[] = [
  {
    title: '현대퓨처넷 11기 MSA 기반 Full Stack 개발자 양성과정',
    description: 'Java · Oracle · Spring Boot · React 기반 Full Stack 웹 개발',
    date: '2026.04—2026.09',
  },
  {
    title: '2025 오픈소스 컨트리뷰션 아카데미',
    description: '벡터 그래픽 렌더링 엔진 ThorVG 오픈소스 기여',
    date: '2025.07—2025.11',
  },
  {
    title: '네이버 부스트캠프 챌린지 웹 풀스택',
    description: 'JavaScript를 이용한 프로그램 설계 및 CS 학습',
    date: '2025.07—2025.08',
  },
  {
    title: 'UMC 5th Web',
    description: 'React 학습 및 프로젝트 진행',
    date: '2023.09—2024.02',
  },
  {
    title: '삼성전자 DX 부문 동계 S/W 역량강화 특강',
    description: 'C++을 이용한 알고리즘 문제 풀이 학습',
    date: '2023.01—2023.02',
  },
  {
    title: '한국항공대학교',
    description: '항공전자정보공학부 정보통신공학전공',
    date: '2020.03—2025.02',
  },
]

export const certificates: Certificate[] = [
  { name: 'SQLD', tooltip: '취득일 · 2026.06.19' },
  { name: 'OPIc IH', tooltip: '취득일 · 2025.03.07' },
  { name: 'TOPCIT', tooltip: '평가일 · 2024.10.12' },
]

export const awards: Award[] = [
  {
    title: '8개 대학 연합 SW 코딩 경진대회 · 우수상',
    date: '2024.12.26',
    context: 'C++을 이용한 알고리즘 문제 풀이',
  },
  {
    title: '한국항공대학교 창업 아이디어 경진대회 · 최우수상',
    date: '2024.12.12',
    context: 'AI 레시피북 기획',
  },
  {
    title: '차세대통신 컨소시엄 경진대회 · 차세대통신사업단장상',
    date: '2024.11.22',
    context: '사회적 약자를 위한 스마트글라스 전용 앱 기획',
  },
  {
    title: '2024 ICT 융합 프로젝트 경진대회 · 최우수상',
    date: '2024.10.31',
    context: '사회적 약자를 위한 스마트글라스 전용 앱 기획',
  },
  {
    title: '제4회 항공대학교 프로그래밍 경연대회 · KAUPC',
    date: '2024.08.07',
    context: 'C++을 이용한 알고리즘 문제 풀이',
  },
  {
    title: '2024년도 종합설계 작품발표회 · 우수상',
    date: '2024.07.01',
    context: 'RAG를 이용한 레시피 생성 앱 개발',
  },
  {
    title: '2024 ICT 창업 메이커톤 · 대상',
    date: '2024.06.28',
    context: 'NFC를 활용한 계단 장려 앱 기획 및 개발',
  },
  {
    title: '미래대학 투모로우 솔루션 · 본선 입선',
    date: '2024.05.27',
    context: 'AI 기반 미래 대학 교육 ‘SliCE’ 기획',
  },
  {
    title: '미래대학 투모로우 솔루션 교내 예선 · 대상',
    date: '2024.04.12',
    context: 'AI 기반 미래 대학 교육 ‘SliCE’ 기획',
  },
]

export const projects: Project[] = [
  {
    number: 'Project 01',
    name: 'Hi Selectors',
    summary: '크리에이터 발굴부터 콘텐츠 검수와 성과 관리를 지원하는 관리자 시스템',
    dialogSummary:
      '더현대 Hi 셀렉터스의 크리에이터 발굴, 지원자 승인, 콘텐츠 검수, 성과 관리를 한곳에서 지원하는 관리자 시스템입니다. 콘텐츠 수집 배치와 운영 상태 추적 기능, 프론트엔드 화면을 구현했습니다.',
    date: '2026.07—2026.09',
    technology: 'Java, Spring Boot, Spring Security, MySQL, AWS, React, TypeScript',
    subject: '셀렉터스 운영 자동화 시스템',
    period: '2026.07.10 - 2026.09.04',
    team: '4명',
    workItems: [
      'Meta Graph API, YouTube Data API 연동과 콘텐츠 수집 배치 구현',
      '제목, 본문, 미디어 정보의 SHA-256 해시 비교로 콘텐츠 수정 감지',
      '8종 배치에 runId를 부여하고 SSE 기반 진행 상태·알림 센터 구현',
      '멱등 처리와 DB 유니크 제약 기반 실행 잠금으로 중복 실행 방지',
      'UI·UX 설계 및 React 기반 관리자 화면 구현',
    ],
    link: 'https://github.com/HD-Fuma',
    images: [
      { src: hiSelectorsImage1, width: 1764, height: 914, alt: 'Hi Selectors 서비스 구조도' },
      { src: hiSelectorsImage2, width: 1494, height: 762, alt: 'Hi Selectors 셀렉터스 목록 화면' },
    ],
  },
  {
    number: 'Project 02',
    name: 'Smart Messaging System',
    summary: '고객별 메시지 발송과 채널 최적화, 결과 분석을 지원하는 다채널 메시징 시스템',
    dialogSummary:
      '고객별 발송 대상 선정부터 채널 최적화, 메시지 발송, 결과 분석까지 지원하는 다채널 메시징 시스템입니다. Spring Batch 기반 통계 집계와 대시보드 조회 성능 개선, 화면 구현을 담당했습니다.',
    date: '2026.06—2026.07',
    technology: 'Java, Spring Boot, Spring Batch, Oracle, MyBatis, RabbitMQ, Redis, Thymeleaf',
    subject: '마케팅 메시징 시스템',
    period: '2026.06.29 - 2026.07.10',
    team: '4명',
    result: '고객 통계 API 62.5%, 대시보드 API 29.8% 평균 응답 시간 단축',
    workItems: [
      '통계 테이블 설계와 매일 03시 Spring Batch 기반 전일 데이터 집계 구현',
      '날짜 조건을 인덱스 범위 탐색 형태로 개선하고 CTE·조건부 집계로 조회 통합',
      '차트 공통 합계를 한 번 계산해 재사용하고 대시보드 전용 요약 조회 구성',
      '고객 통계 API 평균 응답 시간 36.20ms에서 13.57ms로 62.5% 단축',
      '대시보드 API 평균 응답 시간 42.29ms에서 29.70ms로 29.8% 단축',
    ],
    link: 'https://github.com/kosa-second-project/smart-messaging-system',
    images: [
      { src: smartMessagingImage, width: 1804, height: 820, alt: 'Smart Messaging System 아키텍처' },
    ],
  },
  {
    number: 'Project 03',
    name: 'HR System',
    summary: '직원 정보, 인사 발령, 급여 및 평가 업무를 관리하는 인사 관리 시스템',
    dialogSummary:
      '월별 급여 생성과 급여 상태 관리, 관리자·직원 화면을 구현했습니다. JDBC 트랜잭션과 Oracle 트리거를 활용해 급여 데이터의 정합성을 확보했습니다.',
    date: '2026.05',
    technology: 'Java, Oracle, Swing',
    subject: '인사 관리 시스템',
    period: '2026.05.08 - 2026.05.18',
    team: '4명',
    workItems: [
      '기본급, 수당, 공제액을 반영한 월별 급여 생성 구현',
      '급여 목록·상세 조회와 지급·공제 항목 수정, 확정·지급 상태 관리',
      'JDBC 트랜잭션으로 지급과 공제 수정을 하나의 업무 단위로 처리',
      'Oracle 트리거로 상세 항목 변경 시 합계와 실수령액 자동 갱신',
      'Swing 기반 관리자 및 직원 화면 구현',
    ],
    link: 'https://github.com/HDF-3/Hyundai-HR',
    images: [
      { src: hrSystemImage, width: 2446, height: 1312, alt: 'HR System 급여 관리 화면' },
    ],
  },
  {
    number: 'Project 04',
    name: 'Koala',
    summary: '한국항공대학교 알고리즘 학회 Koala의 스터디 자동화 웹 프로젝트',
    dialogSummary: '한국항공대학교 알고리즘 학회 Koala의 스터디 자동화를 위한 서비스입니다.',
    date: '2024.07—2025.10',
    technology: 'React, JavaScript, styled-components',
    subject: '알고리즘 학회 KOALA 자체 웹사이트 개발',
    period: '2024.07 - 2025.10',
    team: 'FE 3 | BE 2 | Design 1',
    result: '가입자 178명, 14개월간 실제 운영, 10개 스터디 진행 · 2026년 1월 운영 종료',
    workItems: [
      '자율 스터디, 커뮤니티, 데일리 챌린지 기능 기획 및 UI 개발 (React)',
      'CodeMirror, Marked를 활용한 커스텀 마크다운 에디터 래퍼 개발',
      '입력 유형별 공통 컴포넌트 분리로 6개 추가 에디터를 일관된 구조로 구현',
      'onlyS3·deleted 파일 상태를 도입해 저장·임시저장 시점의 파일 변경 처리 개선',
      '미디어 쿼리, rem 단위를 통한 디자인 시스템 개선 및 반응형 도입',
    ],
    link: 'https://github.com/ProjectX-Algoitzy/Algoitzy-FE',
    images: [
      { src: koalaImage1, width: 732, height: 394, alt: 'Koala 메인 화면' },
      { src: koalaImage2, width: 1092, height: 322, alt: 'Koala 에디터 컴포넌트 분리 구조' },
      { src: koalaImage3, width: 1020, height: 510, alt: 'Koala 파일 상태 처리 흐름도' },
    ],
  },
  {
    number: 'Project 05',
    name: 'Mongkids',
    summary: '클라이밍 학원 운영 효율화를 위한 CRM 프로젝트',
    dialogSummary:
      '클라이밍 학원 운영 효율화를 위한 CRM을 개발했습니다. 저사양 환경에서 파일을 관리하고, 데이터를 개별적으로 관리하는 구조가 비효율적이라고 판단하여 이를 웹으로 풀어내고자 했습니다. 비즈니스 로직 정리 및 기획, UI 구현, DB 연동을 진행했습니다.',
    date: '2025.09—2026.03',
    technology: 'JavaScript(Next.js), Supabase, Vercel, Claude, Codex',
    period: '2025.09~2026.03',
    workItems: [
      '학생, 수업 관리 기능 개발',
      '수강생, 수업 일정, 출결 상태 관리 기능 구현',
      'Supabase 기반 백엔드 구성',
      '인증, 데이터베이스 설계 및 CRUD 처리',
      '수업 일정 기준 출석 데이터 자동 생성 및 갱신 기능 구현',
    ],
    link: 'https://github.com/nunomi0/mongkids',
    images: [
      { src: mongkidsImage, width: 1123, height: 592, alt: 'Mongkids 수업 및 학생 관리 화면' },
    ],
  },
  {
    number: 'Project 06',
    name: 'ThorVG',
    summary: '벡터 그래픽 렌더링 엔진 ThorVG 프론트엔드 기여 프로젝트',
    dialogSummary:
      '2025 오픈소스 컨트리뷰션 아카데미(OSSCA) ThorVG 멘티로 활동하며, 벡터 그래픽 렌더링 엔진 ThorVG의 프론트엔드 부분에 기여하였습니다.',
    date: '2025.06—11',
    technology: 'React, Next.js, TypeScript, TailwindCSS, C++',
    period: '2025.06 - 2025.11',
    workItems: [
      'ThorVG의 웹 성능 테스트 모듈(perf-test)에서 Lottie 애니메이션 크기를 조절할 수 있는 슬라이더 추가',
      'ThorVG의 웹 성능 테스트 모듈(perf-test)에서 FPS 측정값 안정화를 위해 profiler에 누적 평균 로직 적용',
      'PR #122 크기 조절 슬라이더 배포와 PR #169 FPS 누적 평균 로직 기여',
      'ThorVG 웹 뷰어의 progress-slider 프레임 인덱스 계산에 대한 고민',
    ],
    link: 'https://www.thorvg.org/',
    images: [
      { src: thorvgImage1, width: 1128, height: 562, alt: 'ThorVG 성능 테스트 화면' },
      { src: thorvgImage2, width: 565, height: 715, alt: 'ThorVG 크기 슬라이더 적용 전후' },
      { src: thorvgImage3, width: 661, height: 443, alt: 'ThorVG FPS 누적 평균 적용 전후' },
      { src: thorvgImage4, width: 1063, height: 538, alt: 'ThorVG Viewer progress slider 화면' },
    ],
  },
  {
    number: 'Project 07',
    name: 'CookAssistant',
    summary: 'RAG 기반 레시피 생성 애플리케이션 프로젝트',
    dialogSummary:
      '‘채식 레시피 정보 부족’이라는 문제의식에서 출발하여, AI를 활용한 맞춤형 레시피 생성 애플리케이션을 3인 팀으로 개발했습니다. 보다 정밀하고 개인화된 레시피 결과를 위해 RAG(Retrieval-Augmented Generation) 구조를 설계했고, Flutter를 처음 학습해 앱 UI 구현 및 GPT API 연동까지 직접 진행했습니다.',
    date: '2023.08—2024.06',
    technology: 'Flutter, RAG, VectorDB(Pinecone), python',
    period: '2023.08~2024.06',
    workItems: [
      'RAG를 이용한 AI 레시피 생성 파이프라인 설계',
      'Crawling → Vector Embedding → Query 구조로 테스트를 반복하며 결과 품질을 개선',
      'Flutter를 이용한 앱 UI 설계 및 구현',
      'GPT 및 Google Cloud Speech API 연동을 통해 음성 기반 레시피 생성 기능 구현',
    ],
    link: 'https://github.com/CookAssistant/CookAssistant-fe',
    images: [
      { src: cookAssistantImage, width: 1092, height: 592, alt: 'CookAssistant 앱 화면과 기능 구조도' },
    ],
  },
  {
    number: 'Project 08',
    name: 'SmartGlasses',
    summary: '사회적 약자를 위한 스마트글래스 애플리케이션 프로젝트',
    dialogSummary:
      '시각, 청각 보조가 필요한 사회적 약자를 지원하기 위해 스마트글라스를 활용한 AI-음성 기반 보조 애플리케이션을 개발했습니다. 기술이 빠르게 발전하고 있음에도 사회적 약자층이 AI 기술을 활용하기 어려운 현실에 주목하여, 음성 인식과 음성 안내 기능을 통해 실시간 상황 정보를 전달하는 앱 프로토타입을 목표로 했습니다.',
    date: '2024.03—11',
    technology: 'Java, SmartGlassManager(Mentra)',
    period: '2024.03~2024.11',
    workItems: [
      '전체 기획 및 설계 주도, 사용자 시나리오 기반 기능 정의',
      '오픈소스 스마트글라스 프레임워크 SmartGlassesManager 분석 및 적용',
      'Android TTS 및 GPT-4o API 연동을 통해 음성 안내와 대화형 인터페이스 구현',
      '스마트폰–스마트글라스 간 실시간 데이터 전송 구조 설계 및 테스트',
      '앱 UI 제작 및 사용자 접근성을 고려한 UX 개선',
    ],
    link: 'https://github.com/nunomi0/chatgptapp',
    images: [
      { src: smartGlassesImage, width: 1120, height: 586, alt: 'SmartGlasses 연결 화면과 실행 장면' },
    ],
  },
  {
    number: 'Project 09',
    name: 'STEP',
    summary: 'NFC 디바이스를 활용한 계단 이용 장려 애플리케이션 프로젝트',
    dialogSummary:
      '‘건강’이라는 키워드가 주목받고 있다는 점에 착안해, 일상 속에서 자연스럽게 건강을 관리할 수 있는 서비스를 기획하고, 계단 이용을 습관화하기 위해 NFC 디바이스를 활용한 포인트 적립형 앱을 개발했습니다.',
    date: '2024.04.22—06.05',
    technology: 'Kotlin, Firebase, Arduino',
    period: '2024.04.22 - 2024.06.05',
    workItems: [
      '프로젝트 기획 및 설계 전반을 주도',
      '앱 전체 UI 및 사용자 흐름 설계를 담당, NFC 태깅 후 포인트 획득이 직관적으로 이어지도록 인터랙션 구성',
      'NFC 모듈과 앱 간 연동 로직 구현, 아두이노에서 읽은 데이터를 Kotlin 앱에서 실시간 수신 및 시각화',
      '사용자 행동 유도를 위한 피드백 UI(모달 창, 타이머, 랭킹 시각화) 기획 및 개발',
    ],
    link: 'https://github.com/nunomi0/STEP',
    images: [{ src: stepImage, width: 1120, height: 294, alt: 'STEP 앱 기능 화면' }],
  },
  {
    number: 'Project 10',
    name: 'ONDUE',
    summary: '어르신-요양보호사 매칭 서비스 프로젝트',
    dialogSummary:
      '2주간 2025 블레이버스 MVP 개발 해커톤에 참여하여, 7명의 팀원들과 어르신-요양보호사 매칭 서비스를 만들었습니다. 해커톤 파이널데이에 참여하여 서비스 데모를 진행했고, 완성도 측면에서 긍정적인 평가를 받았습니다.',
    date: '2025.02.10—19',
    technology: 'React, JavaScript, styled-components',
    period: '2025.02.10 - 2025.02.19',
    workItems: [
      '요양보호사 구인 등록, 매칭, 메인 페이지 개발',
      '공통 컴포넌트 및 디자인 시스템 제작',
    ],
    link: 'https://github.com/nunomi0/ondue',
    images: [
      { src: ondueImage1, width: 634, height: 360, alt: 'ONDUE 서비스 소개 화면' },
      { src: ondueImage2, width: 634, height: 358, alt: 'ONDUE 매칭 과정 화면' },
    ],
  },
]
