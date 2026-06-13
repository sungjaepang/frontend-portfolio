/* 260612 프로젝트 시작 및 파일 생성 */ 
/*  */ 

/* 1단계 - 생성 */ 
/*  */ 
/*  */ 

import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// import { useState } from 'react'

// import './App.css'
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;