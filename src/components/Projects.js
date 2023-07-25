import React from 'react';
import projects from '../utils/projects';
import styled from 'styled-components';
import { BiLinkAlt } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
  return (
    <Wrapper className="relative p-8 md:px-24" id="projects">
      <div className="flex items-center space-x-6 mb-8">
        <h3 className="text-3xl">My Projects</h3>
        <hr className="w-1/4 border-[#ED765D]" />
      </div>
      <div className="md:grid gap-6 grid-cols-2 grid-rows-1 mb-6 lg:grid-cols-3">
        {projects.map(
          ({ image, id, desc, title, tags, repoLink, liveLink }) => {
            return (
              <article
                key={id}
                className="relative mb-12 bg-[#F5F8FA] shadow-md "
              >
                <div className="image-container p-3 max-h-52 border ">
                  <img src={image} alt="" className="h-full w-full" />
                </div>
                <div className="md:hidden text-center">
                  <button className="mr-6 text-sm bg-[#eee] px-3 py-2 rounded-md">
                    <a
                      href={repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-lg"
                    >
                      <span>Source code</span>
                      <span>
                        <AiFillGithub />
                      </span>
                    </a>
                  </button>
                  <button className="text-sm bg-[#eee] px-3 py-2 rounded-md">
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-lg"
                    >
                      <span>Live link</span>
                      <span>
                        <BiLinkAlt />
                      </span>
                    </a>
                  </button>
                </div>
                <div className="card-text p-3">
                  <p className="font-medium">{title}</p>
                  <p className="text-sm">{desc}</p>
                  <ul className="flex mt-3">
                    {tags.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="border rounded bg-[#414245] text-[white] py-1 px-3  mr-3"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="opacity-0 md:hover:opacity-100 transition ease-in-out delay-150 absolute text-center text-[white] top-0 h-full transition:opacity w-full bg-[rgba(0,0,0,.3)] flex items-center justify-center rounded">
                  <div>
                    <button className="mr-6 text-sm bg-[#414245] px-3 py-2 rounded-md">
                      <a
                        href={repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 text-lg"
                      >
                        <span>Source code</span>
                        <span>
                          <AiFillGithub />
                        </span>
                      </a>
                    </button>
                    <button className="text-sm bg-[#414245] px-3 py-2 rounded-md">
                      <a
                        href={liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 text-lg"
                      >
                        <span>Live link</span>
                        <span>
                          <BiLinkAlt />
                        </span>
                      </a>
                    </button>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div``;
