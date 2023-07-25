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
          <a href="#projects ">Projects</a>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1;
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
      width: 40%;
    }
    li {
      a {
        position: relative;
        z-index: 1;
        cursor: pointer;
        &:active {
          color: #ee765d;
        }
        &:hover {
          color: #ee765d;
        }
        &::after {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          width: 100%;
          height: 1px;
          content: '.';
          color: transparent;
          /* background: #f1c40f; */
          visibility: none;
          opacity: 0;
          z-index: -1;
        }
        &:hover::after {
          opacity: 1;
          visibility: visible;
          height: 100%;
        }
      }
    }
  }
  @media (min-width: 600px) {
    .open-nav {
      display: none;
    }
  }
  /* 
  @keyframes fill {
    0% {
      width: 0%;
      height: 1px;
    }
    50% {
      width: 100%;
      height: 1px;
    }
    100% {
      width: 100%;
      height: 100%;
      background: #333;
    }
  }

  @keyframes circle {
    0% {
      width: 1px;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 1px;
      z-index: -1;
      background: #eee;
      border-radius: 100%;
    }
    100% {
      background: #aaa;
      height: 5000%;
      width: 5000%;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 0;
    }
  } */
`;
