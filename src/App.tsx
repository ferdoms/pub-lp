import React from 'react';
import logo from './logo.svg';
import './App.css';
import Anime from 'react-anime';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Anime translateX={{ value: 250, delay: 250, duration: 800}}
          rotate={{ value: 360, delay: 0, duration: 1800, easing: 'easeInOutSine' }}
          delay={250}
          >
          <img src={logo} height={150}/>
        </Anime>
        
         
      </header>
    </div>
  );
}

export default App;
