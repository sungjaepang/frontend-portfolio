/* 260612 프로젝트 시작 및 파일 생성 */ 
/*  */ 

/* 1단계 - 생성 */ 
/* 4단계 Projects 카드 고도화 */
/* 5단계 프로젝트 썸네일 이미지 추가 */ 
/* 6단계 Framer Motion 적용 */ 
/* 7단계 프로젝트 Meta 정보 추가 */ 
/* 8단계 What I Learned 추가 */ 
/*  */ 
/*  */ 

import { projects } from "../data/projects";
/* 6단계 */ 
import FadeInSection from "../components/FadeInSection";

function Projects() {
  return (

    <FadeInSection> {/* 6단계 */}
      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>

                {/* 5단계 */}
                <div className="project-thumb">
                  {/* <span>{project.imageText}</span> */}
                  <img src={project.image} alt={project.title} />
                </div>
                
                <h3>{project.title}</h3>

                {/* 7단계 */}
                <div className="project-meta">
                  <span>{project.role}</span>
                  <span>{project.period}</span>
                  <span>{project.contribution}</span>
                </div>
                
                <p>{project.description}</p>

                {/* 4단계 - 카드 안에 feature 목록 추가 */}
                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* 8단계 */}
                <div className="project-learned">
                  <strong>What I Learned</strong>

                  <ul>
                    {project.learned.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-skills">
                  {project.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

export default Projects;