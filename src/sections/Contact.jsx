/* 260612 프로젝트 시작 및 파일 생성 */ 
/*  */ 

/* 1단계 - 생성 */ 
/*  */ 
/*  */ 


function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2>Contact</h2>

        <p>함께 성장할 수 있는 프론트엔드 포지션을 찾고 있습니다.</p>

        <div className="contact-links">
          <a href="https://github.com/sungjaepang" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="mailto:preadbear@gmail.com">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;