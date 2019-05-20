import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <LandingPage/>
     <Projects/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
