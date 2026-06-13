/* 260612 프로젝트 시작 및 파일 생성 */ 
/*  */ 

/* 1단계 프로젝트 데이터 생성 */ 
/*  */ 
/*  */ 

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>성재 Portfolio</h1>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;