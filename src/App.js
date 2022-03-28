import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';

import './App.css';
import ThemeToggle from './components/ThemeToggle';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(false);
  let background = dark ? 'dark' : 'light';

  return (
    <div className={`App ${background}`}>
      <ThemeToggle theme={dark} setDark={setDark} />
      <Container>
        <About theme={dark} setDark={setDark} />
        <Projects theme={dark} />
        <Education theme={dark} />
        <Skills theme={dark} />
        <Footer theme={dark} />
      </Container>
    </div>
  );
}

export default App;
