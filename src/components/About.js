import React from 'react';
import {
  githubSvg,
  htmlSvg,
  reactSvg,
  sassSvg,
  styledComSvg,
  tailwindSvg,
  typescriptSvg,
} from '../assets/svg';

const About = () => {
  return (
    <div className="flex p-8 md:px-24" id="about">
      <div className="lg:w-1/2">
        <div className="flex items-center space-x-6 mb-8">
          <h3 className="text-3xl"> About Me</h3>
          <hr className="w-1/4 border-[#ED765D]" />
        </div>
        <div className="md:flex md:justify-between">
          <div className="lg:w-5/6 ">
            <p className="mb-3">
              As a passionate full-stack developer with a focus on the MERN
              Stack, I thrive on creating solutions to real-world problems
              through the world of computers. I have a strong curiosity for
              technology and enjoy the challenge of finding innovative
              solutions.
            </p>
            <p className="mb-3">
              When tackling complex problems, I actively engage with senior
              developers and leverage the vast resources available on the
              internet to find the best solutions. This proactive approach
              ensures that I stay up-to-date with the latest trends and
              technologies in the ever-evolving world of web development.
            </p>

            <p>
              Looking ahead, my mission is to provide as many solutions as
              possible to a diverse range of problems, making a positive impact
              in the tech industry.
            </p>
            <div className="mt-12">
              <p className="mb-6">
                Here are a few technologies I work with;
              </p>
              <ul className="flex gap-4 flex-wrap">

                <li>
                  <span> ● </span> Javascript
                </li>
                <li>
                  <span> ● </span> Typescript
                </li>
                <li>
                  <span> ● </span> React
                </li>
                <li>
                  <span> ● </span> NextJS
                </li>
                <li>
                  <span> ● </span> Tailwind
                </li>
                <li>
                  <span> ● </span> ExpressJS
                </li>
                <li>
                  <span> ● </span> MongoDG
                </li>
                <li>
                  <span> ● </span> Github
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 lg:justify-end w-full">
        <div className="flex border relative justify-center items-center  h-[28rem] w-[28rem] rounded-full">
          <div className="flex justify-center items-center h-[20rem] w-[20rem] border rounded-full">
            <div className="h-[12rem] w-[12rem] border rounded-full">
              <div className="flex absolute top-0 item-center h-12 w-12 lg:block">
                <img src={htmlSvg} alt="" />
              </div>
              <div className="flex absolute left-0 item-center h-12 w-12">
                <img src={reactSvg} alt="" />
              </div>
              <div className="flex absolute -right-5 item-center h-12 w-12">
                <img src={sassSvg} alt="" />
              </div>
              <div className="flex absolute bottom-3 right-20 item-center h-12 w-12">
                <img src={tailwindSvg} alt="" />
              </div>
              <div className="flex absolute right-12 bottom-44  item-center h-12 w-12">
                <img src={typescriptSvg} alt="" />
              </div>
              <div className="flex absolute bottom-14 item-center h-12 w-12">
                <img src={styledComSvg} alt="" />
              </div>
              <div className="flex absolute item-center h-12 w-12">
                <img src={githubSvg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
