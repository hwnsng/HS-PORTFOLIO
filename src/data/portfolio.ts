import type {
  Achievement,
  Activity,
  ContactLink,
  FeaturedProject,
  NavItem,
  OtherProject,
  Skill,
} from "@/types/portfolio";

// 사이드 네비게이션에 표시되는 섹션 이동 메뉴 데이터
export const navItems: NavItem[] = [
  { label: "Main", href: "#main" },
  { label: "Achievements", href: "#achievements" },
  { label: "Main Project", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Activity & Career", href: "#activity" },
  { label: "Contact", href: "#contact" },
];

// 메인 히어로에서 사용할 수 있는 핵심 지표 요약 데이터
export const heroHighlights = [
  { label: "Performance", value: "66 → 100" },
  { label: "LCP", value: "13.8s → 0.6s" },
  { label: "Service", value: "3,045+ PV" },
];

// 성과 섹션에 노출되는 측정 가능한 결과 데이터
export const achievements: Achievement[] = [
  {
    value: "23x",
    title: "LCP 속도 향상",
    text: "집착 서비스의 LCP를 13.8초에서 0.6초까지 줄이며 초기 화면 렌더링 속도를 약 23배 개선했습니다.",
    project: "zipchak",
    detailTitle: "이미지가 늦게 뜨는 문제를 먼저 잡았습니다.",
    detailSummary:
      "집착 프로젝트에서 첫 화면 진입 시 가장 큰 이미지가 늦게 로드되면서 LCP가 13.8초까지 밀리는 문제가 있었습니다. 단순히 점수만 올리는 작업이 아니라 사용자가 처음 화면을 볼 때 느끼는 기다림을 줄이는 쪽에 초점을 맞췄습니다.",
    detailBullets: [
      "Lighthouse 결과를 기준으로 LCP 병목이 발생하는 리소스를 먼저 확인했습니다.",
      "background-image로 처리하던 주요 이미지를 실제 이미지 요소로 바꾸고, WebP 포맷을 적용해 브라우저가 더 빠르게 가져갈 수 있게 했습니다.",
      "초기 화면에 필요한 이미지는 preload와 fetch priority를 적용해 다른 리소스보다 먼저 로드되도록 우선순위를 조정했습니다.",
      "렌더링 중 불필요하게 레이아웃을 다시 계산하던 부분은 requestAnimationFrame 기준으로 나누어 Forced Reflow를 줄였습니다.",
    ],
    detailResult: "결과적으로 LCP는 13.8초에서 0.6초로 줄었고, 사용자가 첫 화면을 기다리는 시간이 체감될 정도로 짧아졌습니다.",
    images: [
      {
        src: "/assets/achievements/zipchak-lighthouse-speed-before.png",
        alt: "zipchak LCP 개선 전 Lighthouse 결과",
        caption: "개선 전",
      },
      {
        src: "/assets/achievements/zipchak-lighthouse-speed-after.png",
        alt: "zipchak LCP 개선 후 Lighthouse 결과",
        caption: "개선 후",
      },
    ],
  },
  {
    value: "100",
    title: "Lighthouse avg 100",
    text: "gbsw.gg에서 성능, 접근성, 권장사항, SEO를 모두 100점으로 맞추며 서비스 품질을 정리했습니다.",
    project: "gbsw.gg",
    detailTitle: "운영 서비스에서 Lighthouse 전체 100점을 맞췄습니다.",
    detailSummary:
      "gbsw.gg는 경소마고 귀가/귀교 버스 탑승을 관리하는 실제 서비스입니다. 로그인 후 학생, 차장, 관리자 역할로 나뉘는 구조라 화면 흐름이 단순하지 않았고, 모바일에서 빠르게 확인해야 하는 서비스라 초기 진입과 화면 안정성이 중요했습니다.",
    detailBullets: [
      "Next.js App Router 기반으로 페이지를 역할별로 분리하고, 로그인 이후 student, leader, admin 화면으로 이동하는 흐름을 정리했습니다.",
      "로고처럼 첫 화면에서 바로 필요한 이미지는 next/image의 priority를 사용해 레이아웃 흔들림 없이 먼저 로드되도록 처리했습니다.",
      "next/font로 Inter 폰트를 적용해 폰트 로딩 흐름을 안정화하고, 모바일 기준 max-width 레이아웃으로 불필요한 렌더링 영역을 줄였습니다.",
      "학생 탑승 상태, 관리자 대시보드, 회차/호차 관리처럼 반복되는 UI는 명확한 상태값 중심으로 구성해 렌더링 흐름을 단순하게 유지했습니다.",
      "Vercel Analytics를 연결해 배포 이후에도 실제 사용 흐름을 확인할 수 있게 했습니다.",
    ],
    detailResult: "최종적으로 Lighthouse 기준 Performance, Accessibility, Best Practices, SEO 전부 100점을 기록했습니다.",
    images: [
      {
        src: "/assets/achievements/gbsw-gg-lighthouse.png",
        alt: "gbsw.gg Lighthouse 전체 100점 결과",
        caption: "Lighthouse All 100",
      },
    ],
  },
  {
    value: "3,045+",
    title: "운영 서비스 PV",
    text: "gbsw.gg를 기획, 개발, 배포, 운영하며 실제 학교 서비스로 도입했고 817명 방문자 데이터를 확보했습니다.",
    project: "gbsw.gg",
    detailTitle: "배포에서 끝나지 않고 실제 사용 데이터까지 확인했습니다.",
    detailSummary:
      "gbsw.gg는 포트폴리오용 데모가 아니라 실제 학생들이 귀가/귀교 버스 탑승 확인에 사용하는 서비스입니다. 기능 구현 이후에도 배포, 도메인 연결, 운영 데이터 확인까지 이어가며 서비스가 실제로 쓰이는 과정을 경험했습니다.",
    detailBullets: [
      "학생은 본인의 버스 배정과 탑승 상태를 확인하고, 필요한 경우 미탑승 신청이나 호차 변경 신청을 할 수 있게 구성했습니다.",
      "차장과 관리자는 탑승 완료, 사전 미탑승, 미확인 인원을 빠르게 확인할 수 있도록 상태 중심의 화면을 만들었습니다.",
      "Axios 인터셉터와 토큰 갱신 흐름을 정리해 로그인 이후 API 요청이 끊기지 않도록 처리했습니다.",
      "배포 이후 Vercel Analytics로 방문자 수, 페이지뷰, 이탈률을 확인하며 실제 사용자가 들어오는 흐름을 추적했습니다.",
    ],
    detailResult: "2026년 7월 2일 기준 방문자 817명, 페이지뷰 3,045회, 이탈률 15%를 기록했습니다.",
    images: [
      {
        src: "/assets/achievements/gbsw-gg-users-2026-07-02.png",
        alt: "gbsw.gg Vercel Analytics 실사용자 및 페이지뷰 결과",
        caption: "Vercel Analytics",
      },
    ],
  },
];

// 주요 프로젝트 섹션에 크게 보여줄 대표 프로젝트 데이터
export const featuredProjects: FeaturedProject[] = [
  {
    name: "gbsw.gg",
    label: "LIVE SERVICE",
    summary: "경소마고 귀가/귀교 버스 탑승을 실시간으로 관리하는 웹앱 서비스",
    period: "2026.03 - 2026.05",
    team: "Web Frontend 2명, Backend 1명",
    stack: ["Next.js", "TypeScript", "Axios", "Tailwind CSS"],
    github: "https://github.com/gbsw-gg/gbsw.gg-Client",
    website: "https://gbsw-gg.gbsw.hs.kr",
    logo: "/assets/portfolio/gbsw_gg_logo.webp",
    points: [
      "학생, 도우미, 관리자 역할별 화면을 분리하고 useRequireRole 훅으로 페이지 접근을 제어했습니다.",
      "Axios 인터셉터와 요청 대기열로 refresh API 중복 호출을 제거했습니다.",
      "명단 탭에서 5초 폴링을 적용하고 탭 이탈 시 interval을 정리해 실시간 탑승 현황을 안정화했습니다.",
      "Vercel URL 접속을 커스텀 도메인으로 301 redirect해 공유 링크를 일원화했습니다.",
    ],
    metrics: ["817 Visitors", "3,045 PV", "Bounce Rate 15%", "Lighthouse All 100"],
    modalSubtitle: "경소마고 귀가/귀교 버스 탑승 실시간 관리 웹앱",
    modalOverview:
      "학생 전원이 실제로 사용하는 학교 서비스로, 학생/도우미/관리자 역할을 나누고 탑승 현황을 실시간에 가깝게 확인할 수 있도록 만든 프로젝트입니다. 저는 학생과 도우미 화면을 중심으로 UI 설계, 인증 흐름, 실시간 데이터 처리, 배포 환경 구성까지 프론트엔드 개발의 큰 비중을 담당했습니다.",
    modalSections: [
      {
        title: "담당 역할",
        items: [
          "학생, 도우미, 관리자 역할별 화면을 분리하고 useRequireRole 훅으로 잘못된 페이지 접근을 제어했습니다.",
          "Axios 인터셉터로 액세스 토큰 자동 갱신을 구현하고, refresh 요청이 동시에 여러 번 발생하지 않도록 대기열 구조를 설계했습니다.",
          "도우미 명단 탭에서 5초 폴링을 적용하고 탭 이탈 시 interval을 정리해 탑승 현황이 새로고침 없이 반영되도록 했습니다.",
          "Vercel 배포 URL과 커스텀 도메인이 동시에 접근되는 문제를 middleware 301 redirect로 정규화했습니다.",
        ],
      },
      {
        title: "트러블 슈팅",
        items: [
          "만료된 토큰 상태에서 여러 API가 동시에 호출되면 refresh 요청이 중복 발생했습니다. isRefreshing 플래그와 failedQueue를 사용해 첫 요청만 갱신하고 나머지는 갱신 완료 후 순차 재시도하도록 처리했습니다.",
          "도우미 유형과 활성 스케줄 타입이 맞지 않아도 도우미 UI가 노출되는 문제가 있어 leaderTypes.includes(schedule.type) 기준으로 조건부 렌더링을 정리했습니다.",
          "명단 화면은 인원 수와 전화번호 길이에 따라 흔들릴 수 있어 상태/전화번호 영역에 고정 너비와 whitespace-nowrap을 적용해 가독성을 유지했습니다.",
        ],
      },
    ],
    modalResults: [
      "2026년 7월 2일 기준 Visitors 817명, Page Views 3,045회, Bounce Rate 15% 기록",
      "Lighthouse 4개 지표 100점 달성",
      "refresh API 중복 호출 제거 및 세션 연장 흐름 안정화",
      "공유 링크가 항상 gbsw-gg.gbsw.hs.kr로 통일되도록 배포 도메인 정리",
    ],
  },
  {
    name: "zipchak",
    label: "PERFORMANCE",
    summary: "자취방을 비교하고 선택하는 과정을 돕는 캡스톤 웹 서비스",
    period: "2025.09 - 2025.12",
    team: "Web Frontend 1명, Backend 2명, AI 1명, iOS 1명",
    stack: ["React", "TypeScript", "Axios", "Tailwind CSS", "Lighthouse"],
    github: "https://github.com/hwnsng/zipchak-web-frontend",
    logo: "/assets/portfolio/zipchak_logo.webp",
    points: [
      "Tailwind CSS 기반 컴포넌트 단위 스타일 구조와 디자인 시스템을 구축했습니다.",
      "액세스 토큰 만료 시 자동 갱신 로직과 전역 에러 처리 흐름을 설계했습니다.",
      "background-image를 img와 WebP로 전환하고 preload, fetchpriority를 적용했습니다.",
      "Forced Reflow를 제거하고 requestAnimationFrame으로 DOM 업데이트 타이밍을 분리했습니다.",
    ],
    metrics: ["FCP 6.4s → 0.4s", "LCP 13.8s → 0.6s", "Speed Index 6.7s → 0.6s", "Performance 66 → 100"],
    modalSubtitle: "자취방 선택 과정을 돕는 캡스톤 웹 서비스",
    modalOverview:
      "집착은 자취방을 비교하고 분석하는 과정을 돕는 2학년 2학기 캡스톤 프로젝트입니다. 저는 웹 프론트엔드 단독 담당으로 UI 퍼블리싱, 디자인 시스템 구축, API 연동, 인증 흐름, 성능 최적화까지 맡았습니다.",
    modalSections: [
      {
        title: "담당 역할",
        items: [
          "Tailwind CSS 기반으로 컴포넌트 단위 스타일 구조를 설계하고 재사용 가능한 UI 개발 환경을 만들었습니다.",
          "Axios 인터셉터를 통해 액세스 토큰 만료 시 자동 갱신 로직을 구현하고, 전역 에러 처리 흐름을 정리했습니다.",
          "Lighthouse 분석을 기준으로 LCP, FCP, CLS 등 Core Web Vitals 병목을 직접 파악했습니다.",
        ],
      },
      {
        title: "성능 개선",
        items: [
          "LCP 이미지가 background-image로 처리되어 우선 로딩이 어렵던 구조를 img와 WebP 기반으로 바꿨습니다.",
          "fetchpriority='high'와 preload를 적용해 초기 화면에 필요한 핵심 리소스를 먼저 다운로드하도록 조정했습니다.",
          "object-fit과 aspect-ratio를 적용해 이미지 로딩 중 레이아웃 흔들림을 줄이고 CLS 0을 달성했습니다.",
          "Forced Reflow를 제거하고 requestAnimationFrame으로 DOM 업데이트 타이밍을 분리해 렌더링 비용을 줄였습니다.",
        ],
      },
    ],
    modalResults: [
      "FCP 6.4s → 0.4s, 약 93% 개선",
      "Speed Index 6.7s → 0.6s, 약 91% 개선",
      "LCP 13.8s → 0.6s, 약 95% 개선",
      "Lighthouse Performance 66 → 100 달성",
    ],
  },
  {
    name: "gesture",
    label: "REALTIME AI",
    summary: "청각장애인과 비장애인 간 실시간 수어 번역으로 소통 장벽을 낮추는 영상통화 플랫폼",
    period: "2026.03 - 진행 중",
    team: "Web Frontend 1명, Backend 3명, AI 1명",
    stack: ["Next.js", "TypeScript", "MediaPipe", "WebRTC", "Zustand"],
    github: "https://github.com/hwnsng/gesture_client",
    logo: "/assets/portfolio/gesture_logo.webp",
    points: [
      "인증, 영상통화, 친구, 학습 도메인별 App Router 구조와 Zustand 스토어를 설계했습니다.",
      "react-webcam과 MediaPipe Holistic을 연결해 손/포즈 랜드마크 추출 파이프라인을 구현했습니다.",
      "좌표 데이터를 WebSocket으로 전송하고 번역 결과를 통화 화면 자막으로 렌더링했습니다.",
      "낯선 ML 라이브러리의 콜백 구조와 프레임 처리 누락 문제를 분석해 MVP 기능을 완성했습니다.",
    ],
    metrics: ["Realtime Sign Caption", "WebRTC Video Call", "MediaPipe Holistic", "WebSocket Pipeline"],
    modalSubtitle: "실시간 수어 번역 영상통화 플랫폼",
    modalOverview:
      "gesture는 청각장애인과 비장애인 간 소통 장벽을 낮추기 위해 영상통화 화면에서 수어를 실시간 자막으로 보여주는 플랫폼입니다. 저는 Next.js 구조 설계와 영상통화, MediaPipe 기반 수어 인식 파이프라인 구현을 담당했습니다.",
    modalSections: [
      {
        title: "담당 역할",
        items: [
          "Next.js App Router 기반으로 인증, 영상통화, 친구, 학습 도메인별 라우트를 설계했습니다.",
          "Zustand 스토어와 컴포넌트 단위 파일 분리 전략을 기획 단계에서 정의했습니다.",
          "react-webcam으로 실시간 웹캠 스트림을 받고 MediaPipe Holistic 모델과 연동해 손/포즈 랜드마크를 추출했습니다.",
          "추출한 좌표 데이터를 WebSocket으로 백엔드에 전송하고, 번역 결과를 통화 화면 자막으로 렌더링했습니다.",
        ],
      },
      {
        title: "문제 해결 방식",
        items: [
          "처음 사용하는 ML 라이브러리였기 때문에 Claude Code를 코드베이스 분석, API 명세 검토, 디버깅 보조 도구로 활용했습니다.",
          "AI 제안을 그대로 적용하지 않고 네트워크 로그, 콘솔 에러, 브라우저 동작을 기준으로 직접 검증했습니다.",
          "프레임 처리 누락 이슈는 requestAnimationFrame 타이밍 조정으로 해결했습니다.",
        ],
      },
    ],
    modalResults: [
      "영상통화 화면 내 실시간 수어 인식 자막 MVP 구현",
      "MediaPipe Holistic과 WebSocket을 연결한 실시간 좌표 전송 파이프라인 완성",
      "낯선 ML 라이브러리를 단기간에 실서비스 기능 수준으로 적용한 경험 확보",
    ],
  },
];

// 주요 프로젝트 아래에 간략히 보여줄 기타 프로젝트 데이터
export const otherProjects: OtherProject[] = [
  {
    name: "Weesh",
    summary: "교내 위클래스 온라인 상담 예약 시스템",
    stack: "Next.js, TypeScript, Axios, CSS Modules",
    period: "2025 ~ 진행 중",
    team: "Frontend 2명, Backend 1명, Designer 1명",
    github: "https://github.com/hwnsng",
    modalSubtitle: "교내 위클래스 온라인 상담 예약 시스템",
    modalOverview:
      "Weesh는 학생이 온라인으로 상담을 예약하고, 관리자가 상담 신청을 확인/승인/거부할 수 있도록 만든 교내 위클래스 상담 예약 시스템입니다. 현재 React에서 Next.js로, Vanilla Extract에서 CSS Modules로 마이그레이션을 진행 중입니다.",
    modalSections: [
      {
        title: "담당 역할",
        items: [
          "로그인/회원가입 인증 흐름을 설계하고 입력값 검증과 에러 처리 로직을 구현했습니다.",
          "캘린더 UI 기반으로 날짜별 예약 가능 시간 조회와 예약자 목록 관리 기능을 개발했습니다.",
          "예약 승인/거부 처리와 지난 날짜 예약 제한 로직을 넣어 관리자 사용성을 높였습니다.",
          "기능 단위 파일 분리와 폴더 구조 재정리로 협업과 유지보수를 고려한 구조로 개선했습니다.",
        ],
      },
      {
        title: "학습 및 개선",
        items: [
          "React CSR 구조를 Next.js App Router 기반 SSR 구조로 옮기며 페이지별 렌더링 전략을 구분했습니다.",
          "Vanilla Extract에서 CSS Modules로 전환해 스타일 충돌을 줄이고 유지보수성을 높였습니다.",
          "기능 단위 브랜치와 Pull Request 기반 코드 리뷰를 통해 협업 개발 프로세스를 경험했습니다.",
        ],
      },
    ],
    modalResults: [
      "기능 단위 컴포넌트 리팩토링으로 코드 가독성 개선",
      "폴더 구조 재정리로 코드 탐색과 기능 확장이 쉬운 구조 구현",
      "사용자 흐름과 관리자 기능을 모두 고려한 UI 로직 설계 경험 확보",
    ],
  },
  {
    name: "의성 귀촌 포털",
    summary: "의성 귀촌을 돕는 정보 공유 포털",
    stack: "React, TypeScript, Axios, styled-components",
    period: "2025.03 - 2025.07",
    team: "Frontend 1명, Backend 3명, AI 1명",
    modalSubtitle: "의성 귀촌을 돕는 정보 공유 포털",
    modalOverview:
      "의성 귀촌 포털은 귀촌 희망자가 정책, 주거, 커뮤니티, 멘토링, 실시간 채팅을 통해 필요한 정보를 찾을 수 있도록 만든 서비스입니다. 저는 웹 프론트엔드를 단독으로 담당해 전체 페이지 UI, API 연동, 정책 필터링, Socket.IO 채팅 연결까지 구현했습니다.",
    modalSections: [
      {
        title: "담당 역할",
        items: [
          "로그인, 회원가입, 커뮤니티, 주거 임대, 멘토링, 채팅, 정책 조회 화면을 모두 퍼블리싱했습니다.",
          "styled-components 기반으로 재사용 가능한 UI 컴포넌트 구조를 설계했습니다.",
          "Axios로 회원, 게시글, 주거공고, 정책 조회 API를 연동했습니다.",
          "진행 상태, 나이, 기관 조건으로 원하는 정책만 빠르게 찾을 수 있도록 필터링 UX를 개선했습니다.",
          "멘토-멘티 및 주거 판매자-구매자 간 1:1 실시간 채팅을 Socket.IO 기반으로 구현했습니다.",
        ],
      },
      {
        title: "트러블 슈팅",
        items: [
          "정책 필터링과 페이지네이션을 함께 적용할 때 데이터가 조회되지 않는 문제를 요청 흐름 로그로 추적했습니다.",
          "백엔드와 페이지 인덱스 기준을 재확인해 page=1 요청을 서버 규격에 맞는 page=0으로 수정했습니다.",
          "Cloudtype 배포 환경에서 WebSocket 연결 실패와 404가 반복되어 Gateway namespace, 포트, JWT 전달 방식을 분리 점검했습니다.",
          "브라우저 WebSocket 특성을 고려해 JWT 전달 방식을 query와 polling 방식으로 조정해 배포 환경 연결을 안정화했습니다.",
        ],
      },
    ],
    modalResults: [
      "웹 프론트엔드 단독 담당으로 전체 페이지 개발 완료",
      "지원 정책 필터링 + 페이지네이션 정상 동작",
      "Socket.IO 기반 1:1 채팅 배포 환경 연결 성공",
      "최종적으로 소셜 로그인 제외 모든 기능 프론트 연동 완료",
    ],
  },
  {
    name: "DevClass",
    summary: "개발자 강의를 지원하는 풀스택 온라인 강의 플랫폼",
    stack: "Next.js, Spring Boot, MySQL",
    period: "2026.04 - 2026.06",
    team: "Full Stack Develop",
    github: "https://github.com/hwnsng",
    modalSubtitle: "개발자 강의를 지원하는 풀스택 온라인 강의 플랫폼",
    modalOverview:
      "DevClass는 강의 목록, 수강, 결제, 관리자/강사 기능을 포함한 풀스택 온라인 강의 플랫폼입니다. Next.js와 Spring Boot를 함께 사용해 프론트엔드 화면부터 결제, 영상 업로드, DB 제약 조건 수정까지 전반을 구현했습니다.",
    modalSections: [
      {
        title: "담당 역할",
        items: [
          "Next.js 14 App Router 기반으로 강의 목록, 상세, 수강, 결제, 관리자, 강사 페이지를 설계했습니다.",
          "STUDENT, INSTRUCTOR, ADMIN 역할별 접근 제어를 프론트엔드 레벨에서 적용했습니다.",
          "Toss Payments Sandbox를 연동해 장바구니 → 결제 준비 → 승인 → 수강 등록 흐름을 구현했습니다.",
          "강사 팔로우 기능과 신규 강의 등록 시 구독자 이메일 알림 발송 흐름을 연동했습니다.",
          "aria-label, aria-current, aria-pressed, skip-nav 등 접근성 속성을 추가하고 이미지 lazy loading과 AVIF/WebP 설정으로 Lighthouse 90+를 달성했습니다.",
        ],
      },
      {
        title: "트러블 슈팅",
        items: [
          "YouTube iframe 방식은 임베딩 비허용 영상에서 재생이 차단되어, 강사가 직접 영상 파일을 업로드하고 서버가 제공하는 구조로 전환했습니다.",
          "Spring Boot MultipartFile 기반 영상 업로드 API를 구현하고 uploads/videos 경로로 파일을 관리했습니다.",
          "프론트엔드는 iframe 대신 video 태그와 서버 스트리밍 URL 방식으로 플레이어를 교체했습니다.",
          "강의 삭제 시 FK 제약 위반이 발생해 information_schema로 DELETE_RULE을 확인하고 Flyway 마이그레이션으로 7개 테이블 FK를 CASCADE/SET NULL로 재설정했습니다.",
        ],
      },
    ],
    modalResults: [
      "외부 서비스 정책과 무관하게 모든 강의 영상이 안정적으로 재생되는 구조 확보",
      "강의 삭제 시 연관 데이터 자동 정리로 SQL 오류 해결",
      "결제 승인부터 수강 등록, 유료 수강생 환불까지 이어지는 서비스 흐름 구현",
      "풀스택 관점에서 프론트엔드, 백엔드, DB 제약 조건을 함께 다룬 경험 확보",
    ],
  },
];

// 기술 역량 섹션에 표시되는 스킬 설명 데이터
export const skills: Skill[] = [
  {
    title: "Next.js",
    text: "App Router 기반 라우팅, 역할별 화면 분리, 이미지/폰트/메타데이터 최적화를 적용했습니다.",
    projects: ["gbsw.gg", "gesture", "Weesh", "DevClass"],
    detailTitle: "페이지 구조와 서비스 흐름을 먼저 설계했습니다.",
    detailSummary:
      "Next.js는 gbsw.gg, gesture, Weesh 마이그레이션, DevClass에서 사용했습니다. 단순 페이지 작성이 아니라 역할별 접근 제어, App Router 기반 도메인 분리, 초기 로딩 성능 개선까지 함께 고려했습니다.",
    detailBullets: [
      "gbsw.gg에서 학생/도우미/관리자 화면을 분리하고 로그인 이후 역할에 맞는 화면으로 이동하는 흐름을 구현했습니다.",
      "next/image priority와 next/font를 사용해 첫 화면 로딩과 레이아웃 안정성을 개선했습니다.",
      "Weesh에서는 React CSR 구조를 Next.js App Router 기반 SSR 구조로 마이그레이션하는 방향을 잡았습니다.",
      "DevClass에서는 강의 목록, 상세, 수강, 결제, 관리자, 강사 페이지를 App Router 기반으로 설계했습니다.",
    ],
    highlight: "App Router / Role Routing / Optimization",
  },
  {
    title: "React",
    text: "컴포넌트 기반 UI, Hook 상태 관리, API 연동 흐름을 실제 프로젝트에서 반복적으로 다뤘습니다.",
    projects: ["zipchak", "의성 귀촌 포털", "gesture"],
    detailTitle: "사용자 흐름을 컴포넌트 단위로 쪼개고 연결했습니다.",
    detailSummary:
      "React는 단순 화면 구현보다 상태가 바뀌는 흐름을 안정적으로 나누는 데 집중했습니다. 집착에서는 체크리스트와 매물 분석 화면을, 의성 귀촌 포털에서는 커뮤니티/정책/채팅 페이지를, gesture에서는 영상통화 화면의 상태 흐름을 다뤘습니다.",
    detailBullets: [
      "useState, useEffect 기반으로 폼 입력, API 응답, 탭 전환, 모달 상태를 관리했습니다.",
      "반복되는 UI를 컴포넌트 단위로 분리해 프로젝트 규모가 커져도 수정 범위를 좁힐 수 있게 구성했습니다.",
      "Socket.IO, WebSocket, MediaPipe처럼 외부 이벤트가 계속 들어오는 화면에서도 렌더링 흐름이 무너지지 않도록 상태 경계를 나눴습니다.",
    ],
    highlight: "Component UI / Hooks / Realtime State",
  },
  {
    title: "TS",
    text: "Props, API 응답, UI 상태의 경계를 타입으로 정의하고 변경에 안전하게 작성했습니다.",
    projects: ["gbsw.gg", "zipchak", "gesture", "DevClass"],
    detailTitle: "타입으로 데이터 경계를 명확하게 잡았습니다.",
    detailSummary:
      "TypeScript는 API 응답, Props, 상태값, 결제 흐름처럼 데이터 구조가 바뀌면 바로 문제가 생기는 지점에서 사용했습니다. 화면에서 필요한 데이터와 서버에서 오는 데이터를 분리해 변경에 강한 구조를 만들었습니다.",
    detailBullets: [
      "API 응답과 UI 상태를 타입으로 분리해 화면에서 사용하는 데이터 구조를 명확히 했습니다.",
      "gesture에서 WebSocket으로 전송하는 좌표 데이터와 번역 결과 흐름을 타입 기준으로 정리했습니다.",
      "DevClass에서 결제 준비, 승인, 수강 등록 흐름을 타입이 있는 비동기 함수로 연결했습니다.",
    ],
    highlight: "Type Safety / API Response / UI State",
  },
  {
    title: "JS",
    text: "비동기 처리, 이벤트 흐름, 브라우저 동작을 분석해 기능 문제를 해결했습니다.",
    projects: ["gbsw.gg", "zipchak", "의성 귀촌 포털"],
    detailTitle: "브라우저에서 일어나는 흐름을 직접 추적했습니다.",
    detailSummary:
      "JavaScript는 인증 요청, 이벤트 처리, 페이지네이션, 렌더링 타이밍처럼 브라우저에서 직접 확인해야 하는 문제를 해결할 때 많이 사용했습니다.",
    detailBullets: [
      "Axios 인터셉터로 액세스 토큰 만료 시 자동 갱신하고, refresh 중복 호출을 큐 기반으로 막았습니다.",
      "zipchak에서 requestAnimationFrame으로 DOM 업데이트 타이밍을 분리해 Forced Reflow를 줄였습니다.",
      "의성 귀촌 포털에서 필터 상태와 페이지네이션 요청 파라미터를 추적하며 명세 불일치 문제를 해결했습니다.",
    ],
    highlight: "Async Flow / Browser Event / Debugging",
  },
  {
    title: "TailwindCSS",
    text: "유틸리티 기반 스타일링으로 빠르게 UI를 만들고, 반복되는 패턴을 일관되게 유지했습니다.",
    projects: ["gbsw.gg", "zipchak", "gesture"],
    detailTitle: "빠른 구현과 일관성을 동시에 잡았습니다.",
    detailSummary:
      "TailwindCSS는 gbsw.gg, zipchak, gesture에서 사용했습니다. 빠르게 화면을 만들면서도 컴포넌트 단위로 반복되는 간격, 폰트, 색상, 상태 스타일을 통일하는 데 활용했습니다.",
    detailBullets: [
      "zipchak에서 Tailwind 기반 컴포넌트 스타일 구조를 설계하고 디자인 시스템에 가까운 UI 개발 환경을 만들었습니다.",
      "gbsw.gg에서 모바일 기준의 좁은 화면과 관리자 화면을 빠르게 구현했습니다.",
      "gesture에서 영상통화, 친구, 학습 등 도메인별 화면을 Tailwind 기반으로 일관되게 구성했습니다.",
    ],
    highlight: "Utility Styling / Consistent UI / Fast Iteration",
  },
  {
    title: "MySQL",
    text: "ERD 기반 데이터 구조와 FK 제약 조건을 이해하고 서비스 삭제 흐름까지 다뤘습니다.",
    projects: ["DevClass"],
    detailTitle: "데이터 관계가 기능 동작에 미치는 영향을 다뤘습니다.",
    detailSummary:
      "MySQL은 DevClass에서 강의, 수강 내역, 진도, 리뷰, 장바구니, 결제 항목처럼 서로 연결된 데이터를 다루며 사용했습니다. 특히 삭제 흐름에서 FK 제약 조건을 직접 분석하고 수정했습니다.",
    detailBullets: [
      "information_schema.REFERENTIAL_CONSTRAINTS로 전체 FK와 DELETE_RULE을 조회했습니다.",
      "Flyway 마이그레이션으로 7개 테이블의 FK를 CASCADE 또는 SET NULL로 재설정했습니다.",
      "강의 삭제 시 연관 데이터가 자동 정리되도록 만들어 SQL 오류를 해결했습니다.",
    ],
    highlight: "ERD / FK Constraint / Migration",
  },
  {
    title: "Lighthouse",
    text: "Core Web Vitals 병목을 분석하고 개선 전후를 수치로 검증했습니다.",
    projects: ["zipchak", "gbsw.gg", "DevClass"],
    detailTitle: "성능 개선을 감이 아니라 수치로 확인했습니다.",
    detailSummary:
      "Lighthouse는 zipchak과 gbsw.gg에서 성능 개선 기준으로 사용했습니다. LCP, FCP, Speed Index, Accessibility, Best Practices를 확인하고 개선 전후를 비교했습니다.",
    detailBullets: [
      "zipchak에서 LCP 13.8s → 0.6s, Performance 66 → 100을 달성했습니다.",
      "gbsw.gg에서 Performance, Accessibility, Best Practices, SEO 전체 100점을 달성했습니다.",
      "DevClass에서 접근성 속성과 이미지 로딩 전략을 정리해 Lighthouse 90+ 목표를 맞췄습니다.",
    ],
    highlight: "Core Web Vitals / Performance / Validation",
  },
  {
    title: "Figma",
    text: "와이어프레임과 화면 흐름을 이해하고 실제 서비스 UI로 옮기는 협업 경험이 있습니다.",
    projects: ["Weesh", "zipchak", "gbsw.gg"],
    detailTitle: "디자인 의도를 화면 흐름으로 해석했습니다.",
    detailSummary:
      "Figma는 디자이너와 협업하거나 화면 흐름을 정리할 때 사용했습니다. 디자인을 그대로 옮기는 것에 그치지 않고, 실제 데이터가 들어왔을 때 깨지지 않는 UI와 사용자가 이동하는 순서를 함께 고려했습니다.",
    detailBullets: [
      "Weesh에서 디자이너와 협업하며 상담 예약 관리자 화면의 흐름을 구현했습니다.",
      "zipchak에서 체크리스트, 매물 분석, 결과 화면처럼 페이지 수가 많은 흐름을 주요 기능 중심으로 정리했습니다.",
      "gbsw.gg에서는 학생/도우미 역할에 따라 필요한 정보가 먼저 보이도록 화면 우선순위를 조정했습니다.",
    ],
    highlight: "Design Handoff / User Flow / UI Translation",
  },
  {
    title: "AWS",
    text: "EC2와 S3 기반 배포 및 정적 파일 관리 흐름을 이해하고 있습니다.",
    projects: ["포트폴리오 학습", "서비스 배포 경험"],
    detailTitle: "서비스가 배포되는 흐름까지 함께 이해합니다.",
    detailSummary:
      "AWS는 EC2 기반 서버 배포와 S3를 활용한 정적 파일 관리 흐름을 학습하고 적용한 경험이 있습니다. 프론트엔드가 서버, 정적 리소스, 도메인과 어떻게 연결되는지 이해하는 데 초점을 맞췄습니다.",
    detailBullets: [
      "EC2 기반 서버 배포 흐름과 운영 구조를 이해하고 있습니다.",
      "S3를 활용한 정적 파일 관리와 서비스 리소스 관리 방식을 학습했습니다.",
      "프론트엔드 배포 환경에서 도메인, 정적 파일, 서버 API가 연결되는 흐름을 함께 고려합니다.",
    ],
    highlight: "EC2 / S3 / Deployment Flow",
  },
  {
    title: "HTML/CSS",
    text: "접근성, 레이아웃 안정성, 반응형 UI를 고려해 화면 구조와 스타일을 구현했습니다.",
    projects: ["zipchak", "gbsw.gg", "DevClass", "의성 귀촌 포털"],
    detailTitle: "화면이 흔들리지 않고 읽히도록 구성했습니다.",
    detailSummary:
      "HTML/CSS는 단순히 보기 좋게 만드는 것보다 실제 사용자가 읽고 누르는 흐름을 안정적으로 만드는 데 집중했습니다. 모바일 중심 서비스, 관리자 화면, 카드/리스트 UI에서 레이아웃 안정성과 접근성을 함께 챙겼습니다.",
    detailBullets: [
      "zipchak에서 object-fit과 aspect-ratio를 적용해 이미지 로딩 중 레이아웃 흔들림을 줄이고 CLS 0을 달성했습니다.",
      "gbsw.gg 명단 화면에서 전화번호, 상태값, 사유 표시가 인원 수에 따라 흔들리지 않도록 고정 너비와 nowrap을 적용했습니다.",
      "DevClass에서 aria-label, aria-current, aria-pressed, skip-nav 등 접근성 속성을 추가했습니다.",
      "styled-components, CSS Modules, Tailwind CSS 등 프로젝트 성격에 맞는 스타일 방식을 사용했습니다.",
    ],
    highlight: "Responsive UI / Accessibility / Layout Stability",
  },
];

// 활동 및 수상 이력 섹션에 표시되는 타임라인 데이터
export const activities: Activity[] = [
  {
    years: ["2026"],
    date: "2026.07",
    title: "경북소프트웨어고등학교 교내 캡스톤 금상",
    description: "프로젝트 결과물과 구현 완성도를 인정받아 교내 캡스톤에서 금상 수상",
    highlight: "대회/금상",
  },
  {
    years: ["2026"],
    date: "2026.03",
    title: "정보처리산업기사 취득",
    description: "개발 기초, 데이터베이스, 소프트웨어 공학 등 전공 역량 증빙",
    highlight: "자격증",
  },
  {
    years: ["2026"],
    date: "2026.01",
    title: "실리콘밸리 글로벌 체험학습",
    description: "실리콘밸리 IT 기업 5회 이상 방문을 통해 글로벌 서비스와 개발 문화 체험",
    highlight: "Global",
  },
  {
    years: ["2026"],
    date: "2026.01",
    title: "단기 인턴십 회사 체험 - 코즈모",
    description: "실무 중심 기획서 작성과 기업 요청사항을 이해하는 업무 경험",
    highlight: "Internship",
  },
  {
    years: ["2025", "2026"],
    date: "2025.08 - 2026.07",
    title: "학생 자치회 남자 기숙사 회장",
    description: "학생 의견을 조율하고 생활 환경 개선 활동을 주도",
    highlight: "Leadership",
  },
  {
    years: ["2025"],
    date: "2025.08 - 2025.12",
    title: "경북소프트웨어고등학교 교내 캡스톤 동상",
    description: "교내 캡스톤 프로젝트에서 팀 협업과 서비스 구현 결과로 동상 수상",
    highlight: "대회/동상",
  },
  {
    years: ["2025"],
    date: "2025.08 - 2025.12",
    title: "교내 해킹 동아리 RCE 부원",
    description: "보안 관점과 문제 해결력을 기르기 위한 교내 해킹 동아리 활동",
    highlight: "동아리",
  },
  {
    years: ["2025"],
    date: "2025.02",
    title: "블레이버스 MVP 해커톤 참여",
    description: "실제 기업 요청 사항 구현과 모르는 팀원과의 실무 중심 협업 경험",
    highlight: "대회/참여",
  },
  {
    years: ["2025"],
    date: "2025.01",
    title: "경북소프트웨어고등학교 교내 해커톤 최우수상",
    description: "탈모 진단 웹앱을 개발해 교내 해커톤 최우수상 수상",
    highlight: "대회/최우수상",
  },
  {
    years: ["2025"],
    date: "2025.03 - 2025.08",
    title: "경북소프트웨어고등학교 교내 캡스톤 참여",
    description: "아이디어 구체화, 화면 구현, 팀 프로젝트 협업 프로세스 경험",
    highlight: "대회/참여",
  },
  {
    years: ["2024", "2025"],
    date: "2024.03 - 2025.07",
    title: "교내 웹 전공 동아리 WINE 부원",
    description: "웹 프론트엔드 학습과 프로젝트 활동을 통해 React 기반 개발 경험 축적",
    highlight: "동아리",
  },
  {
    years: ["2024"],
    date: "2024.08",
    title: "해커그라운드 해커톤 2024 in 의성 참여",
    description: "외부 해커톤에서 팀 협업과 빠른 문제 정의, 프로토타입 제작 경험",
    highlight: "대회/참여",
  },
];

// 연락처 섹션과 소셜 링크에 사용하는 연락 수단 데이터
export const contactLinks: ContactLink[] = [
  { label: "amc214677@gmail.com", href: "mailto:amc214677@gmail.com" },
];
