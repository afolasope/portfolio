import React from 'react';
import projects from '../utils/projects';
import styled from 'styled-components';

const Projects = () => {
  return (
    <Wrapper className="relative p-8 md:px-24">
      <div className="flex items-center space-x-6 mb-8">
        <h3 className="text-3xl">My Projects</h3>
        <hr className="w-1/4 border-[#ED765D]" />
      </div>
      <div className="md:grid gap-6 grid-cols-2 grid-rows-1 mb-6 lg:grid-cols-3">
        {projects.map(({ image, id, desc, title, tags }) => {
          return (
            <article
              key={id}
              className="text-center mb-12 bg-[#F5F8FA] shadow-md "
            >
              <div className="image-container p-3">
                <img src={image} alt="" />
              </div>
              <div className="card-text p-3">
                <p className="font-bold">{title}</p>
                <p className="border">{desc}</p>
                <ul className="flex mt-3">
                  {tags.map((item, index) => {
                    return (
                      <li key={index} className="border p-2 mr-6">
                        {item}
                      </li>
                    );
                  })}
                </ul>
                <div className="text-center">
                  <button className="mr-6">Source code</button>
                  <button>Live link</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div``;
