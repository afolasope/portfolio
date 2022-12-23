import React, { useState } from 'react';
import projects from '../utils/projects';
import { BsArrowRightCircle } from 'react-icons/bs';
import { BsArrowLeftCircle } from 'react-icons/bs';
import styled from 'styled-components';
import { useEffect } from 'react';

const Projects = () => {
  const [currView, setcurrView] = useState(0);

  const goToPrev = () => {
    if (currView === 0) {
      setcurrView(projects.length - 1);
      return;
    }
    setcurrView(currView - 1);
  };
  const goToNext = () => {
    if (currView === projects.length - 1) {
      setcurrView(0);
      return;
    }
    setcurrView(currView + 1);
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     if (currView === 0) {
  //       setcurrView(projects.length - 1);
  //       return;
  //     }
  //     if (currView === projects.length - 1) {
  //       setcurrView(0);
  //       return;
  //     }
  //     setcurrView(currView + 1);
  //   }, 3000);
  // }, [currView]);

  return (
    <Wrapper className="relative p-8 md:px-24">
      <h3 className="text-center mb-6 font-semibold text">Recent Projects</h3>
      <div className='flex space-x-24'>
        <article className="text-center border mb-12 bg-[#F5F8FA]">
          <div className="image-container p-3">
            <img src={projects[currView].image} alt="" />
          </div>
          <div className="card-text p-3">
            <p className="font-bold">{projects[currView].title}</p>
            <p className="border">{projects[currView].desc}</p>
            <ul className="flex mt-3">
              {projects[currView].tags.map((item, index) => {
                return (
                  <li key={index} className="border p-2 ">
                    {item}
                  </li>
                );
              })}
            </ul>
            <div>
              <button>Source code</button>
              <button>Live link</button>
            </div>
          </div>
        </article>
        <article className="text-center border mb-12 bg-[#F5F8FA] ">
          <div className="image-container p-3">
            <img src={projects[currView].image} alt="" />
          </div>
          <div className="card-text p-3">
            <p className="font-bold">{projects[currView].title}</p>
            <p className="border">{projects[currView].desc}</p>
            <ul className="flex mt-3">
              {projects[currView].tags.map((item, index) => {
                return (
                  <li key={index} className="border p-2 ">
                    {item}
                  </li>
                );
              })}
            </ul>
            <div>
              <button>Source code</button>
              <button>Live link</button>
            </div>
          </div>
        </article>
      </div>

      <div>
        <span
          className="absolute top-[50%] left-0 text-3xl -translate-y-1/2 md:text-5xl md:p-6"
          onClick={goToPrev}
        >
          <BsArrowLeftCircle />
        </span>
        <span
          className="absolute top-[50%] right-0 text-3xl -translate-y-1/2 md:text-5xl md:p-6"
          onClick={goToNext}
        >
          <BsArrowRightCircle />
        </span>
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  article {
    border: 3px solid teal;
  }
  @media (min-width: 768px) {
    padding: 7rem;
    .card-text {
      /* width: 50%; */
    }
    /* .image-container {
      width: 50%;
      border: 1px solid teal;
      img {
        height: 100%;
        width: 100%;
      }
    } */
  }
`;
