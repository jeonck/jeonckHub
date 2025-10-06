# 🚀 Jeonck's Project Hub

모든 프로젝트 링크를 한곳에 모아놓은 허브 사이트입니다.

[![Deploy to GitHub Pages](https://github.com/jeonck/jeonckHub/actions/workflows/deploy.yml/badge.svg)](https://github.com/jeonck/jeonckHub/actions/workflows/deploy.yml)

## 🌐 Live Demo

**https://jeonck.github.io/jeonckHub/**

## ✨ 주요 기능

- 🔍 **실시간 검색**: 프로젝트 제목으로 빠르게 검색
- 🏷️ **카테고리 필터**: Development Tools, DevOps, Backend, Frontend, AI/ML, Security 등으로 분류
- 🎨 **반응형 디자인**: 모든 디바이스에서 최적화된 UI
- ⚡ **빠른 성능**: Vite 기반의 초고속 빌드

## 📂 프로젝트 목록

### Development Tools
- [Code Snippet Management](https://jeonck.github.io/code-snippet-mgmt/)
- [Install Assistant](https://jeonck.github.io/install-assistant/)
- [Mermaid Diagram Viewer](https://jeonck.github.io/mermaid-diagram-viewer/)

### DevOps
- [Helm Values Hub](https://jeonck.github.io/helm-values-hub/)
- [Helm Values Explorer](https://jeonck.github.io/helm-values-explorer/)
- [K8s Manifest Showcase](https://jeonck.github.io/k8s-manifest-showcase/)

### Backend
- [Spring Boot Hub](https://jeonck.github.io/spring-boot-hub/)

### Frontend
- [React Hub](https://jeonck.github.io/react-hub/)

### AI/ML
- [LLM Hub](https://jeonck.github.io/llm-hub/)
- [Model Context Protocol](https://jeonck.github.io/modelContextProtocol-concept-and-component-and-example/)

### Data Science
- [Streamlit Hub](https://jeonck.github.io/streamlit-hub/)

### Security
- [Misconceptions About Security](https://jeonck.github.io/misconceptions-about-security/)
- [CISSP 8 Domains](https://jeonck.github.io/CISSP-8-domains/)

### Finance
- [Auto Compound Interest](https://jeonck.github.io/auto-compound-interest/)

### Career
- [DevOps Lead Interview](https://jeonck.github.io/devops-lead-interview/)

## 🛠️ 기술 스택

- **Frontend**: React 18
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS 3
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🚀 로컬 개발

### 필수 요구사항
- Node.js 18+
- npm 8+

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/jeonck/jeonckHub.git
cd jeonckHub

# 의존성 설치
cd react-app
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📦 프로젝트 구조

```
jeonckHub/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 자동 배포
├── react-app/
│   ├── src/
│   │   ├── App.jsx             # 메인 컴포넌트
│   │   ├── main.jsx            # React 진입점
│   │   └── index.css           # Tailwind 스타일
│   ├── public/
│   │   └── vite.svg            # Favicon
│   ├── index.html              # HTML 템플릿
│   ├── package.json            # 의존성 정의
│   ├── vite.config.js          # Vite 설정
│   ├── tailwind.config.js      # Tailwind 설정
│   └── postcss.config.js       # PostCSS 설정
└── README.md
```

## 🔄 배포

GitHub Actions를 통해 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다.

### 수동 배포
```bash
# 빌드
npm run build

# GitHub에 푸시
git add .
git commit -m "Update project"
git push origin main
```

## 📝 새 프로젝트 추가하기

`react-app/src/App.jsx` 파일의 `projects` 배열에 새 항목을 추가하세요:

```javascript
const projects = [
  {
    title: '프로젝트 이름',
    url: 'https://jeonck.github.io/프로젝트/',
    category: '카테고리'  // Development Tools, DevOps, Backend, Frontend, AI/ML, Security, Finance, Career, Data Science
  },
  // ... 기존 프로젝트들
]
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 👤 Author

**Jeonck**
- GitHub: [@jeonck](https://github.com/jeonck)

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)
