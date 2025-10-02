# 포트폴리오 웹사이트

Next.js, Tailwind CSS, Zustand를 사용한 현대적인 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Next.js 15.5.4** - React 프레임워크
- **React 19.1.0** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Tailwind CSS 4** - 유틸리티 우선 CSS 프레임워크
- **Zustand 5.0.8** - 상태 관리

## ✨ 주요 기능

- **싱글페이지 애플리케이션** - 스크롤을 통한 섹션 네비게이션
- **반응형 디자인** - 모바일, 태블릿, 데스크톱 최적화
- **프로젝트 상세 페이지** - 각 프로젝트별 상세 정보 페이지
- **부드러운 스크롤** - 섹션 간 부드러운 전환
- **현대적인 UI/UX** - 깔끔하고 직관적인 인터페이스

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── project/[id]/     # 프로젝트 상세 페이지
│   ├── layout.tsx        # 루트 레이아웃
│   └── page.tsx          # 메인 페이지
├── components/
│   ├── Hero.tsx          # 히어로 섹션
│   ├── About.tsx         # 소개 섹션
│   ├── Projects.tsx      # 프로젝트 섹션
│   ├── Contact.tsx       # 연락처 섹션
│   └── Navigation.tsx    # 네비게이션
└── store/
    └── portfolioStore.ts # Zustand 상태 관리
```

## 🛠️ 설치 및 실행

1. 의존성 설치:

```bash
npm install
```

2. 개발 서버 실행:

```bash
npm run dev
```

3. 브라우저에서 `http://localhost:3000` 접속

## 📝 사용법

1. **메인 페이지**: 스크롤을 통해 각 섹션을 탐색할 수 있습니다.
2. **프로젝트 섹션**: 프로젝트 카드를 클릭하면 상세 페이지로 이동합니다.
3. **네비게이션**: 상단 네비게이션을 통해 원하는 섹션으로 바로 이동할 수 있습니다.

## 🎨 커스터마이징

- `src/store/portfolioStore.ts`에서 프로젝트 데이터를 수정할 수 있습니다.
- `src/components/` 폴더의 각 컴포넌트를 수정하여 디자인을 변경할 수 있습니다.
- `tailwind.config.js`에서 색상, 폰트 등을 커스터마이징할 수 있습니다.

## 📄 라이선스

MIT License
