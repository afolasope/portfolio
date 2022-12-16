import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper className="md:p-24">
      <h3 className="font-semibold text-center mb-6">Reach Out!</h3>
      <p className="mb-6 text-center">
        Are You Interested In A Web Developer That Loves Fun Builds And
        Projects? Hit Me Up. <br /> I'm Open To Freelance, Part Time And Junior
        Developer Roles. <br /> Get In Touch With Me
      </p>
      <button className="px-4 py-2 m-auto block bg-[#ED765D] rounded-lg text-[#fff] mt-12 ">
        Send An Email
      </button>
      <div className="social-icons text-center mt-12">
        <button>
          <a href="#">
            <AiFillGithub />
          </a>
        </button>
        <button>
          <a href="#">
            <AiFillLinkedin />
          </a>
        </button>
        <button>
          <a href="mailto:folasopeadebanjo@gmail.com">
            <AiFillMail />
          </a>
        </button>
        <button>
          <a href="#">
            <AiFillTwitterSquare />
          </a>
        </button>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  .social-icons {
    button {
      font-size: 2rem;
      margin-right: 3rem;
    }
  }
`;
