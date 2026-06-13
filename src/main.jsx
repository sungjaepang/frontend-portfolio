/* 260612 프로젝트 시작 및 파일 생성 */ 
/*  */ 

/* 1단계 - 생성 */ 
/*  */ 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
