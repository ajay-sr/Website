import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import Card from 'components/Card/Card';
import Hidder from 'components/Hidder/Hidder';
import Banner from 'components/Banner/Banner';
import Contact from 'components/Contact/Contact';
import leonardo from 'images/leonardo.jpg';
import drdc from 'images/canada.png';
import uoft from 'images/uoft.png';

function App() {
  return (
    <div className="App">
      <Banner id="top"/>
      <Header/>
      <div className="mainDisplay">
        <section className="section experience" id="experience">
          <h2 className="heading">Experience</h2>
          <Card title="Leonardo Worldwide" icon={leonardo}>
            <h4 className="position">Software Developer</h4>
            <div className="addInfo position">Apr 2018 - Dec 2018 (9 Months)</div>
            <div className="addInfo position">Toronto, ON</div>
            <hr/>
            <ul>
              <li>Developed front-end components and dynamic pages using React to reduce redundancy and repetition in code</li>
              <li>Built RESTful APIs using Node.js to increase flexibility and readability of code for senior developers</li>
              <li>Refactored legacy code resulting in a 40% decrease in load times of generated pages in cloud environment</li>
              <li>Improved and updated automated testing within deployment pipeline, increasing stability and code coverage of repositories</li>
            </ul>
          </Card>
          <Card title="Defense Research and Development Canada" icon={drdc}>
            <h4 className="position">Software Engineering Intern</h4>
            <div className="addInfo position">Aug 2018 - Dec 2018 (5 Months)</div>
            <div className="addInfo position">North York, ON</div>
            <hr/>
            <ul>
              <li>Worked in Agile team with military simulation software, Python, XPlane, XML, and additional classified software to create realistic, and expansive simulations for the Canadian Armed Forces</li>
              <li>Created documentation using Microsoft Word, Excel, PowerPoint to organize and present ideas to military officials and supervisors, as well as allowing for smooth transition for future employees</li>
              <li>Worked with military officials and deployed troops to organize test runs of the simulations</li>
            </ul>
          </Card>
          <Card title="Coursework" icon={uoft}>
            <h4 className="position">Software Developer</h4>
            <ul>
              <li>Worked in a team to develop an application that allows the user to remix and share music</li>
              <li>Created with Angular and using Git for version control</li>
              <li>Can be accessed <a href="https://sample-maker.herokuapp.com/">here</a></li>
            </ul>
          </Card>
          <Card title="Coursework" icon={uoft}>
            <h4 className="position">Data Engineer</h4>
            <ul>
              <li>Designed and developed a SQL database to store mock information of AirBnB listings and rentals</li>
              <li>Used Java and SQL to create user interface and support searching operations</li>
              <li>Created and followed a scrum workflow to finish tasks in an organized and timely way</li>
            </ul>
          </Card>
        </section>
        <section className="section skills" id="skills">
          <h2 className="heading">Skills</h2>
        </section>
        <section className="section contact" id="contact">
          <h2 className="heading">Contact</h2>
        </section>
      </div>

      <div className="mainSec">

        <div className="quickSumm">
          <h3 className="abMe">About Me</h3>
          <div className="pfp">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQF5KPp1X_azQA/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=aAnaUDepTAvO0TethxWPDSxIQEbHPqbYUbMna_MLXrk" alt="Profile"/>
          </div>
          <div className="bio">
            <span>Computer Science student with a specialist in Software Engineering.</span>
            <span>Excellent programmer, enthusiastic learner, and great friend.</span>
          </div>
          <h3 className="heading-old">Education</h3>
          <Card title="University of Toronto">
            <span><b>GPA:</b> 3.31   <b>Final Annual GPA:</b> 3.77</span>
            <ul>
              <li>Major in Computer Science, specializing in Software Engineering</li>
              <li>Course work includes data structures, algorithm design and analysis, AI algorithms, software architecture</li>
              <li>Projects Topics: android development, database management, and open source contribution (Mozilla)</li>
            </ul>
          </Card>
          <h3 className="heading-old">Links</h3>
          <div className="linksSec"><ul className="cardList">
            <li className="listItem"><a href="https://www.linkedin.com/in/ajiteshwar-rai/">LinkedIn</a></li>
            <li className="listItem"><a href="https://github.com/ajay-sr">GitHub</a></li>
            <li className="listItem"><a href="https://www.instagram.com/better_ajay/">Instagram (feel free to follow :])</a></li>
          </ul></div>
        </div>

        <div className="additionalInfo">
          <div className="infoItem abilities">
            <h3 className="heading-old">Abilities</h3>
            <div className="cardSec">
                <Card title="Skills"><ul className="cardList">
                  <li className="listItem"><Hidder display="Speed +2">Increase speed by 2</Hidder></li>
                  <li className="listItem"><Hidder display="Adept Programming">Grants a firm understanding of software development principles, algorithm design, and the SDLC</Hidder></li>
                  <li className="listItem"><Hidder display="Agile">Excels in Agile work environment with experience in Scrum and Kanban frameworks</Hidder></li>
                  <li className="listItem"><Hidder display="Full-Stack">Unit has a solid grasp of full-stack development</Hidder></li>
                  <li className="listItem"><Hidder display="React Framework">Unit works incredibly well with React</Hidder></li>
                  <li className="listItem"><Hidder display="Version Control">Grants advanced knowledge of Git Version Control</Hidder></li>
                  <li className="listItem"><Hidder display="Windows AND Linux">Unit suffers no penalty when in Windows or Linux work environments</Hidder></li>
                </ul></Card>

                <Card title="Proficiencies"><ul className="cardList">
                  <li className="listItem">Java</li>
                  <li className="listItem">Python</li>
                  <li className="listItem">JavaScript</li>
                  <li className="listItem">HTML</li>
                  <li className="listItem">CSS/SCSS</li>
                  <li className="listItem">C</li>
                </ul></Card>
              </div>
          </div>
          <div className="infoItem workExp">
            <h3 className="heading-old">Work Experience</h3>
            <Card title="Full-stack Developer @ Leonardo"> <ul>
              <li>Developed front-end components and dynamic pages using React to reduce redundancy and repetition in code</li>
              <li>Built RESTful APIs using Node.js to increase flexibility and readability of code for senior developers</li>
              <li>Refactored legacy code resulting in a 40% decrease in load times of generated pages in cloud environment</li>
              <li>Improved and updated automated testing within deployment pipeline, increasing stability and code coverage of repositories</li>
            </ul></Card>
            <Card title="Software Development Intern @ Defense Research and Development Canada"> <ul>
              <li>Worked in Agile team with military simulation software, Python, XPlane, XML, and additional classified software to create realistic, and expansive simulations for the Canadian Armed Forces</li>
              <li>Created documentation using Microsoft Word, Excel, PowerPoint to organize and present ideas to military officials and supervisors, as well as allowing for smooth transition for future employees</li>
              <li>Worked with military officials and deployed troops to organize test runs of the simulations</li>
            </ul></Card>
          </div>
          <div className="infoItem extraExp">
            <h3 className="heading-old">Extracurriculars</h3>
            <Card title="Team Mentor w/ First Robotics"><ul>
              <li>Used expertise in computer science to teach and support high school students in the programming of a robot</li>
              <li>Worked with university students and professor to develop a robust and approachable lesson plan</li>
              <li>Presented complex concepts in a simplified manner to ensure material retention</li>
            </ul></Card>
            <Card title="Sample Maker">
              <ul>
                <li>Worked in a team to develop an application that allows the user to remix and share music</li>
                <li>Created with Angular and using Git for version control</li>
                <li>Can be accessed <a href="https://sample-maker.herokuapp.com/">here</a></li>
              </ul>
            </Card>
            <Card title="Mock AirBnB"><ul>
              <li>Designed and developed a SQL database to store mock information of AirBnB listings and rentals</li>
              <li>Used Java and SQL to create user interface and support searching operations</li>
              <li>Created and followed a scrum workflow to finish tasks in an organized and timely way</li>
            </ul></Card>
          </div>
          </div>
      </div>
      <Contact className="contact"></Contact>
    </div>
  );
}

export default App;
