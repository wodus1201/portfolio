import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Noddy",
    soloOrTeam: "team",
    duration: "2025.05 ~ 2025.06",
    description:
      "에어팟 모션 데이터를 활용해 머리 움직임만으로 시스템 커서를 제어하고, 웹 대시보드에서 단축키 설정 · 시각화를 지원하는 크로스플랫폼 협업 프로젝트",
    image: "/Noddy-demo-video.gif",
    staticImage: "/Noddy-static.jpeg",
    technologies: [
      { frontend: ["JavaScript", "React", "Vite", "React Router", "Zustand", "Tailwind CSS", "Three.js", "i18next"] },
      { backend: ["Node.js", "Express", "MongoDB"] },
      { deploy: ["Amazon EC2", "Amazon S3", "Amazon Route 53", "Amazon Cloudfront"] },
    ],
    githubUrl: "https://github.com/Noddyhub/Noddy-FE",
    liveUrl: "https://www.noddy.co.kr/main",
    downloadUrl: "https://www.noddy.co.kr/",
    content:
      "Noddy는 에어팟의 모션 데이터를 활용해 사용자의 머리 움직임만으로 시스템 커서를 제어하는 실험적 인터랙션 프로젝트입니다.\n에어팟 내부의 자이로스코프와 가속도계 센서를 실시간으로 수집하여, 머리 회전 각도(Yaw, Pitch, Roll) 를 분석하고 이를 화면 커서 이동에 매핑하는 방식을 채택했습니다.\n기존의 마우스나 트랙패드 없이 손이 자유로운 상태에서 디지털 환경을 제어할 수 있는 새로운 HCI(Human-Computer Interaction) 가능성을 탐구하였으며, 특히 장애인 접근성(Assistive Technology) 측면에서 활용 가능성을 고려해 개발되었습니다.",
    features: {
      "웹 대시보드 (React)": [
        {
          "조작 안내 및 옵션 페이지 설계 (기여도: 100%)": [
            "초기 학습 곡선을 낮추고 진입 장벽 완화를 위해 React 기반 조작 안내 페이지와 옵션 페이지 구현",
            "Zustand 기반 전역 상태 설계로 모션 · 단축키 · 디바이스 정보를 통합 관리",
            "useState/useRef로 드롭다운 및 외부 클릭 감지, 동적 키보드 UI 구현",
          ],
          "머리 움직임 기반 3D 가상 헤드 시각화 (기여도: 100%)": [
            "Three.js로 머리 움직임 실시간 연동 3D 시각화 구현",
            "Scene/Camera와 모션 데이터 바인딩",
            "시각적 피드백 제공",
          ],
          "모션 데이터 수집 및 실시간 연동 (기여도: 100%)": [],
        },
      ],
      "앱 (Swift)": [
        {
          "실시간 모션 데이터 수집 및 처리 (기여도: 100%)": [
            "CoreMotion과 Bluetooth LE를 활용하여 AirPods 센서 데이터 수집",
            "Quaternion 및 Euler, 각 수학적 변환을 통해 머리 회전 정보를 커서 좌표로 변환",
          ],
          "UI 최소화, 메뉴바 위젯 형태 제공 (기여도: 100%)": [
            "macOS 메뉴바 앱으로 구현, 별도 화면 공간 차지 없이 백그라운드 실행",
            "이벤트 처리 및 단축키 입력을 메뉴바에서 직접 수신하여 빠른 반응 확보",
          ],
          "자연스러운 커서 이동 구현 (기여도: 70%)": [
            "방향 기반 좌표 매핑과 속도 보정 알고리즘 적용",
            "부드러운 이동을 위해 위치 보간(Linear/Bezier)과 델타 필터링 적용",
          ],
        },
      ],
    },
  },
  {
    id: "project-2",
    title: "donuTool",
    soloOrTeam: "solo",
    duration: "2025.06 ~ 2025.07",
    description:
      "상단에서 공간을 상시 차지하는 메뉴 막대를 대체하는 실시간 커서 추적 툴바로 다양한 기능을 빠르게 실행할 수 있게 해주는 브라우저 확장프로그램 프로젝트",
    image: "/donuTool-preview.gif",
    staticImage: "/donuTool-static.jpeg",
    technologies: [
      {
        frontend: [
          "TypeScript",
          "React",
          "Chrome Extension",
          "Vite",
          "React Router",
          "Zustand",
          "Tailwind CSS",
          "i18next",
          "Chart.js",
          "DND Kit",
        ],
      },
      { backend: ["Node.js", "MongoDB"] },
      { deploy: ["Amazon EC2", "Amazon S3", "Amazon Route 53", "Amazon Cloudfront"] },
    ],
    githubUrl: "https://github.com/donuTool/donuTool-extension",
    liveUrl: "https://www.donutool.site/",
    downloadUrl: "https://chromewebstore.google.com/detail/donutool/heabnlejdfhggjiapbfmbhnfmhlknlaa?hl=ko",
    content:
      "브라우저 화면 상단의 고정 메뉴 영역을 대체하여, 사용자의 커서 위치를 기반으로 실시간으로 나타나는 동적 툴바 인터페이스를 구현하는 프로젝트입니다. 기존 상시 노출형 메뉴바의 공간 낭비 문제를 해결하고, 사용자의 시선 · 손 이동을 최소화하여 더 빠르고 직관적인 기능 실행 경험을 제공합니다.",
    features: {
      "웹 대시보드 (React)": [
        "React 기반 대시보드 설계 · 구현으로 설정 정보 · 활동 현황 · 통계 데이터를 시각화하여 활용성 향상",
        "Google OAuth 로그인과 사용자별 설정 데이터 연동으로 확장프로그램 · 웹 환경 통합 관리 지원",
      ],
      "Chrome 확장 프로그램 (React)": [
        {
          "플로팅 툴바의 비간섭성 확보": [
            "커서를 따라다니는 UI 특성상, 웹페이지 클릭, 드래그, 입력 이벤트를 방해할 위험 존재 및 사용자 경험 저하",
            "elementFromPoint + getComputedStyle 조합으로 커서 하위요소의 인터랙션 가능 여부를 실시간 감지",
            "툴바 hover 시에만 pointer-events: auto 활성화, 기본은 none 처리",
            "오버레이는 불투명도 조정으로 시각 피드백 강화",
            "웹페이지 본래 조작 방해율을 0에 가깝게 줄였고, 툴바 사용 시에도 직관적인 피드백 제공",
          ],
        },
        {
          "커서 추적 및 스크롤 보정": [
            "스크롤 이벤트 발생 시, 툴바가 커서와 불일치하며 지연, 튐 현상 발생",
            "단순 mousemove 좌표만 반영하면 스크롤 delta가 반영되지 않아 툴바가 따라오지 못하는 문제가 발생",
            "mousemove와 scroll 이벤트를 동시 감지",
            "스크롤 시 deltaY와 deltaX를 기반으로 툴바 좌표를 보정",
            "스크롤 중에도 커서와 툴바가 일체감을 유지, UX 안정성 향상",
          ],
        },
        {
          "버튼 커스터마이징 및 실시간 반영": [
            "사용자별 필요 기능이 다르므로 툴바를 고정형으로 제공하면 확장성 부족",
            "드래그 앤 드롭 기반의 동적 편집과 즉각 반영 구조 필요",
            "zustand 활용으로 전역 상태 효율적 관리",
            "dnd-kit 기반 드래그 앤 드롭으로 직관적 편집 제공",
            "chrome.storage에 persist 저장, 상태 변경 메시징으로 모든 탭에 즉시 반영",
            "사용자별 맞춤형 툴바 제공 → UX 만족도 및 재사용성 대폭 향상",
          ],
        },
        {
          "경량 주입 전략(MV3)": [
            "모든 사이트에 무조건 content script를 주입하면 성능 저하와 호환성 이슈 발생",
            "활성화 상태, 도메인 화이트리스트, document.readyState 기준으로 조건부 주입",
            "MV3 service worker 구조 활용, 불필요 리소스 낭비 최소화",
            "메모리 사용량 10% 절감, 사이트 충돌 감소",
          ],
        },
      ],
    },
  },
];
