import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import Card from 'components/Card/Card';

function App() {
  return (
    <div className="App">
      <div className="beegpic"/>
      <Header/>
      <div className="cardSec">
        <Card title="Skills"><ul>
          <li>+2 Speed</li>
          <li>Adept programming</li>
          <li>Mom slayer</li>
        </ul></Card>

        <Card title="Proficiencies"><ul>
          <li>Java</li>
          <li>Python</li>
          <li>JavScript</li>
          <li>HTML</li>
          <li>CSS/SCSS</li>
          <li>C</li>
        </ul></Card>
      </div>
    </div>
  );
}

export default App;
