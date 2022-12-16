import { useState } from 'react';
import styled from 'styled-components';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Wrapper>
      <header>
        <div className="mobile-nav">
          <MobileNav navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </div>
        <div className="web-nav">
          <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </div>
      </header>
      <div className="about-container flex items-center py-16">
        <Home />
      </div>
      <About />
      <Projects />
      <Contact />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .about-container {
    min-height: calc(100vh - 88px);
    
  }
`;
export default App;
