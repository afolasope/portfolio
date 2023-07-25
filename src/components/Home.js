import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper className="px-6 md:px-24" id="home">
      <p className="text-[#6272A4] text-xl mb-6 md:mb-12">Hello, my name is</p>
      <h1 className="text-5xl mb-4 md:text-6xl">Afolasope Adebanjo.</h1>
      <p className="text-3xl mb-2 font-semibold md:text-6xl md:mb-12">
        I am a Fullstack Developer.
      </p>
      <div className="md:max-w-2xl">
        <p className="md:text-2xl">
          I create captivating web experiences and build innovative solutions.
        </p>
        <button className="px-5 py-3 bg-[#ED765D] mt-12 rounded-md text-[#fff]">
          <a href="mailto:folasopeadebanjo@gmail.com">Contact Me</a>
        </button>
      </div>
      <div className="logo-container flex mt-12 md:mt-24">
        <div>
          <a
            href="https://github.com/afolasope"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.bermeo.dev/social/github.svg" alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/afolasope-adebanjo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.bermeo.dev/social/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 6rem;
  .logo-container {
    gap: 1rem;
    div {
      height: 2rem;
      img {
        height: 100%;
      }
    }
  }
`;
