/* 260612 프로젝트 시작 및 파일 생성 */ 
/*  */ 

/* 1단계 프로젝트 데이터 생성 */ 
/* 3단계 Skills 섹션 카테고리형으로 변경 */ 
/* 6단계 Framer Motion 적용 */ 
/*  */ 
/*  */ 

import FadeInSection from "../components/FadeInSection";

/* 3단계 */ 
const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "React Router"],
  },
  {
    title: "State & Data",
    skills: ["Zustand", "LocalStorage", "CRUD", "Search", "Filter"],
  },
  {
    title: "Publishing",
    skills: ["Responsive Web", "Semantic Markup", "UI Layout", "Maintenance"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vite", "VS Code", "GitHub Pages"],
  },
];

function Skills() {
  return (

    <FadeInSection> {/* 6단계 */}
      <section id="skills" className="section">
        <div className="container">
          <h2>Skills</h2>

          {/* 3단계 */}
          <div className="skill-group-grid">
            {skillGroups.map((group) => (
              <article className="skill-group-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          {/* 1단계 */}
          {/* <div className="skill-grid">
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>React</div>
            <div>React Router</div>
            <div>Zustand</div>
            <div>Git</div>
            <div>GitHub</div>
          </div> */}
        </div>
      </section>
    </FadeInSection>
  );
}

export default Skills;