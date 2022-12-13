import { useState } from 'react';
import styled from 'styled-components';
import AboutMe from './components/AboutMe';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';

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
      <div className="about-container flex items-center h-screen">
        <AboutMe />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .about-container {
    height: calc(100vh - 88px);
  }
`;
export default App;
