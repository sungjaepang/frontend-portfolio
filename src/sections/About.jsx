/* 260612 프로젝트 시작 및 파일 생성 */ 
/*  */ 

/* 1단계 프로젝트 데이터 생성 */ 
/* 2단계 Hero / About / Skills 개선 */
/* 6단계 Framer Motion 적용 */ 
/*  */ 
/*  */ 

import FadeInSection from "../components/FadeInSection";

function About() {
  return (
    
    <FadeInSection> {/* 6단계 */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>

          <p>
            웹 퍼블리셔 실무 경험을 바탕으로 React 프론트엔드 개발자로
            성장하고 있습니다.
          </p>

          <p>
            현재는 React 기반 프로젝트를 직접 구축하며 프론트엔드 개발 역량을
            확장하고 있습니다.
          </p>

          <p>
            사용자 경험을 고려한 UI 구현과 유지보수 가능한 코드를
            지향합니다.
          </p>

        </div>
      </section>
    </FadeInSection>
  );
}

export default About;