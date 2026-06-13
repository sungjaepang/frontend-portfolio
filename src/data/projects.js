/* 260612 프로젝트 시작 및 파일 생성 */ 
/*  */ 

/* 1단계 프로젝트 데이터 생성 */ 
/* 4단계 Projects 카드 고도화 */ 
/* 5단계 프로젝트 썸네일 이미지 추가 */ 
/* 7단계 프로젝트 Meta 정보 추가 */ 
/* 8단계 What I Learned 추가 */ 
/*  */ 
/*  */ 

/* 5단계 */ 
import reactShopImage from "../assets/react-shop.png";
import adminDashboardImage from "../assets/admin-dashboard.png";
import publisherPortfolioImage from "../assets/publisher-portfolio.png";


export const projects = [
  {
    id: 1,
    title: "React Shop",
/* 5단계 */ 
    // imageText: "React Shop",
    image: reactShopImage,
/* 7단계 */ 
    role: "개인 프로젝트",
    period: "2026.05",
    contribution: "100%",
    description:
      "React Router, Zustand, LocalStorage 기반 쇼핑몰 프로젝트",
/* 4단계 */ 
    features: ["상품 목록", "장바구니", "찜 목록", "최근 본 상품"],
    github: "https://github.com/sungjaepang/react-shop",
    live: "https://sungjaepang.github.io/react-shop",
    skills: ["React", "Router", "Zustand"],
/* 8단계 */ 
    learned: [
      "React Router를 활용한 페이지 구성",
      "Zustand를 활용한 전역 상태 관리",
      "LocalStorage 기반 데이터 유지",
    ],
  },

  {
    id: 2,
    title: "Admin Dashboard",
/* 5단계 */ 
    // imageText: "Admin Dashboard",
    image: adminDashboardImage,
/* 7단계 */ 
    role: "개인 프로젝트",
    period: "2026.05",
    contribution: "100%",
    description:
      "CRUD, Search, Filter, Pagination, Charts, Dark Mode 구현",
/* 4단계 */ 
    features: ["Users CRUD", "Charts", "Dark Mode", "Dashboard"],
    github: "https://github.com/sungjaepang/admin-dashboard",
    live: "https://sungjaepang.github.io/admin-dashboard/#/",
    skills: ["React", "Recharts", "Zustand"],
/* 8단계 */ 
    learned: [
      "CRUD 흐름 구현",
      "검색, 필터, 페이지네이션 처리",
      "Recharts를 활용한 데이터 시각화",
    ]
  },

  {
    id: 3,
    title: "Publisher Portfolio",
    // 
/* 5단계 */ 
    // imageText: "Publisher Portfolio",
    image: publisherPortfolioImage,
/* 7단계 */ 
    role: "개인 프로젝트",
    period: "2026.05",
    contribution: "100%",
    description:
      "반응형 웹 퍼블리싱 프로젝트 모음",
/* 4단계 */ 
    features: ["Responsive", "HTML/CSS", "JavaScript", "Event Page"],
    github: "",
    live: "",
    skills: ["HTML", "CSS", "JavaScript"],
/* 8단계 */ 
    learned: [
      "반응형 웹 레이아웃 구성",
      "HTML/CSS 기반 UI 구현",
      "퍼블리싱 유지보수 구조 경험",
    ]
  },
];