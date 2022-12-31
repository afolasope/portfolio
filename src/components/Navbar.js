import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <Wrapper>
      <h1>Afolasope</h1>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div
        className="open-nav"
        onClick={() => {
          setNavbarOpen(true);
          console.log(navbarOpen);
        }}
      >
        <GiHamburgerMenu />
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  ul {
    display: none;
    @media (min-width: 600px) {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      width: 50%;
    }
    @media (min-width: 800px) {
      width: 50%;
    }
  }
  @media (min-width: 600px) {
    .open-nav {
      display: none;
    }
  }
`;
