export default function Resume() {
    return (
      <section id="resumeContainer">
        <div class="card" id="resumeCard">
          <header class="card-header" id="resumeHeader">
            <p class="card-header-title">Resume</p>
          </header>
          <button id="downloadButton">Download Resume</button>
          <div class="card-content" id="resumeContent">
              <div id="resumeTitleContainer">
              <p id="resumeTitle" >Los Angeles,CA || 562-618-2380 || romerofrank63@gmail.com</p>
              </div>
              <div id="resumeName">
              <p class="resumeFontColor">Frank Romero</p>
              </div>
              <div  id="resumeSection">
                <p class="column is-one-third" id="resumeSectionTitle">Career Objective</p>
                <p class="resumeFontColor" id="careerObjective">Seeking a role as a software engineer where I can use my skills from the fashion industry as well as the new technical skills in coding. I intend to contribute my skill sets and learn from the position to strengthen my development skills. Interested in collaborating with a great company and great minds to continue my growth while providing the company with a sharp, design oriented, customer focused individual.</p>
              </div>
              <div id="resumeSection">
                <p class="column is-one-third" id="resumeSectionTitle">Skills</p>
                <div class="columns is-multiline" >
                <li class="skillsList">Web Applications</li>
                <li class="skillsList">API management</li>
                <li class="skillsList">Testing and debugging</li>
                <li class="skillsList">Data extraction</li>
                <li class="skillsList">Usage scenarios</li>
                <li class="skillsList">Full stack development</li>
                </div>
              </div>
              <div id="resumeSection">
                <p class="column is-one-third" id="resumeSectionTitle">Professional Skills</p>
                <div >
                <p class="skillsTitles">Programming Languages</p>
                <li class="professionalSkillsList">Proficient in HTML, CSS, Javascript with experience working on projects associated</li>
                <li class="professionalSkillsList">Proficient in HTML, CSS, Javascript with experience working on projects associated</li>
                <li class="professionalSkillsList">Proficient in HTML, CSS, Javascript with experience working on projects associated</li>
                <p class="skillsTitles">Web Development</p>
                <li class="professionalSkillsList">Developed app that use MERN model to deploy full stack app</li>
                <li class="professionalSkillsList">Developed app that use MERN model to deploy full stack app</li>
                <li class="professionalSkillsList">Developed app that use MERN model to deploy full stack app</li>
                <p class="skillsTitles">Database Management</p>
                <li class="professionalSkillsList">Database management with Node, MongoDB, Sql</li>
                <li class="professionalSkillsList">Database management with Node, MongoDB, Sql</li>
                <li class="professionalSkillsList">Database management with Node, MongoDB, Sql</li>
                </div>
              </div>
              <div id="resumeSection">
                <p class="column is-one-third" id="resumeSectionTitle">Work Experience</p>
                <div >
                <p class="expereinceJob">Junior Software Engineer</p>
                <p class="experienceInfo"> 11/20/2023-current</p>
                <p class="experienceLocation"><b>UCLA Coding Space</b>, Los Angeles, CA</p>
                <p class="expereinceJob">Software Development Intern</p>
                <p class="experienceInfo"> 11/20/2022-05/12/2023</p>
                <p class="experienceLocation"><b>UCLA Intern Camp</b>, Los Angeles, CA</p>
                </div>
              </div>
              <div id="resumeSectionEnd">
                <p class="column is-one-third" id="resumeSectionTitle">Education</p>
                <div >
                <p class="education"><b>Full Stack Coding Bootcamp Certificate</b>, UCLA 2023</p>
                <p class="education"><b>Bachelor of Science in Fashion Merchandising</b>, CSULB 2017</p>
                </div>
              </div>
            </div>
            <br></br>
        </div>
      </section>
    );
  }