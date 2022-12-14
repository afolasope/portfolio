import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
  return (
    <Wrapper className="px-6 md:px-24">
      <p className="text-[#6272A4] text-xl mb-6">
        <strike>// Hello World!</strike>
      </p>
      <h1 className="text-5xl mb-4 md:text-6xl">Hi, I'm Afolasope.</h1>
      <p className="text-3xl mb-2 font-semibold md:text-5xl">
        A Frontend Developer
      </p>
      <div className="md:max-w-2xl">
        <p>
          {/* High level experience in web design and development knowledge. */}
          {/* Producing quality work */}
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut culpa
          autem, numquam voluptas eos esse laboriosam sequi blanditiis,
          recusandae quae dignissimos quo inventore architecto iure animi minima
          nostrum labore optio!
        </p>
      </div>
      <div className="logo-container flex mt-12 md:mt-24">
        <div>
          <a href="https://github.com/afolasope">
            <img src="https://www.bermeo.dev/social/github.svg" alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/afolasope-adebanjo/">
            <img src="https://www.bermeo.dev/social/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutMe;

const Wrapper = styled.div`
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
