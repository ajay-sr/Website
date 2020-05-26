import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import Card from 'components/Card/Card';
import Hidder from 'components/Hidder/Hidder';
import Banner from 'components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Header/>
      <div className="mainSec">
        <div className="quickSumm">
          <div className="pfp"/>
          <div className="cardSec">
            <Card title="Skills"><ul className="cardList">
              <li className="listItem"><Hidder display="+2 Speed">Increase speed by 2</Hidder></li>
              <li className="listItem"><Hidder display="Adept Programming">Firm understanding of software development principles and algorithm design</Hidder></li>
              <li className="listItem"><Hidder display="Agile">Excels in Agile work environment with experience in Scrum and Kanban frameworks</Hidder></li>
            </ul></Card>

            <Card title="Proficiencies"><ul className="cardList">
              <li className="listItem">Java</li>
              <li className="listItem">Python</li>
              <li className="listItem">JavScript</li>
              <li className="listItem">HTML</li>
              <li className="listItem">CSS/SCSS</li>
              <li className="listItem">C</li>
            </ul></Card>
          </div>
        </div>
        <div className="additionalInfo"></div>
      </div>
      <div className="contact"></div>
    </div>
  );
}

export default App;
