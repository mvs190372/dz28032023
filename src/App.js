import './App.css';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import About from './about/About';
import Info from './info/Info';
import Error from './error/Error';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="commonMenu">
        <nav className="menu1">
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
           </ul> 
        </nav>      
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/Info" element={<Info />}/>
          <Route path="/About" element={<About />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </main> 
      <footer className="commonInfo">
         <p>Важная информация</p>
      </footer>    
    </div>
  );
}

export default App;
