import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import Card from 'components/Card/Card';
import Hidder from 'components/Hidder/Hidder';
import Banner from 'components/Banner/Banner';
import leonardo from 'images/leonardo.jpg';
import drdc from 'images/canada.png';
import uoft from 'images/uoft.png';
import github from 'images/github.svg';
import linkedin from 'images/linkedin.svg';

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
          <div className="skillTable">
            <div className="skillRow">
              <Hidder className="oneCol" display="Python" themeColor="pink">Proficient</Hidder>
              <Hidder className="twoCol" display="Artificial Intelligence" themeColor="hotpink">CSCD84 @ UofT</Hidder>
            </div>
            <div className="skillRow">
              <Hidder className="oneCol" display="Java" themeColor="#6B5B95">Proficient</Hidder>
              <Hidder className="oneCol" display="SQL" themeColor="#F7CAC9">Experienced</Hidder>
              <Hidder className="oneCol" display="Node.js" themeColor="#92A8D1">Experienced</Hidder>
            </div>
            <div className="skillRow">
              <Hidder className="oneCol" display="JavaScript" themeColor="pink">Proficient</Hidder>
              <Hidder className="oneCol" display="HTML5/CSS3" themeColor="#98B4D4">Proficient</Hidder>
              <Hidder className="oneCol" display="React.js" themeColor="pink">Proficient</Hidder>
            </div>
            <div className="skillRow">
              <Hidder className="twoCol" display="Version Control (Git/SVN)" themeColor="#C3447A">Proficient</Hidder>
              <Hidder className="oneCol" display="C" themeColor="hotpink">Experienced</Hidder>
            </div>
          </div>
        </section>
        <section className="section contact" id="contact">
          <h2 className="heading">Contact</h2>
          <div className="contactCard">
            <div className="contactpfp">
              prolly put a picture here
            </div>
            <div className="contactInfo">
              <h4>Ajay Rai</h4>
              <p>"I'm ready" - Spongebob</p>
              <div className="links">
                <a className="contactLink" href="https://www.linkedin.com/in/ajiteshwar-rai/"><img src={linkedin} alt="linkedin"/></a>
                <a className="contactLink" href="https://github.com/ajay-sr"><img src={github} alt="github"/></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
