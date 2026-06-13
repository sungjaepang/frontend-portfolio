/* 260612 프로젝트 시작 및 파일 생성 */ 
/*  */ 

/* 1단계 프로젝트 데이터 생성 */ 
/* 2단계 Hero / About / Skills 개선 */
/*  */ 
/*  */ 


function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-label">Hello, I'm Sungjae</p>

        <h2>
          Web Publisher
          <br />
          Frontend Developer
        </h2>

        <p>
          퍼블리셔 경험을 기반으로 React 프론트엔드 개발 역량을
          확장하고 있습니다.
        </p>

        <div className="hero-actions">
          <a href="#projects">View Projects</a>

          <a
            href="https://github.com/sungjaepang"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;