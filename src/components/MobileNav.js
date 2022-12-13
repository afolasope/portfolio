import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

const MobileNav = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <Wrapper>
      <div className={navbarOpen ? 'nav nav-open' : 'nav'}>
        <p className="close-btn" onClick={() => setNavbarOpen(false)}>
          <IoMdClose />
        </p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
  .nav {
    padding: 1rem;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: #fff;
    width: 0%;
    transform: translateX(100%);
    box-shadow: -5px 0 1px -5px #bbb;
    transition: width 0.3s ease-out;

    ul {
      li {
        margin-bottom: 1.5rem;
      }
    }
  }
  .nav-open {
    width: 50%;
    transform: translateX(0%);
  }

  .close-btn {
    padding:  1rem;
    display: flex;
    justify-content: flex-end;
  }
`;

export default MobileNav;
