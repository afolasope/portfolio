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
    <div className=" p-8 md:px-24" id='about'>
      <div className="flex items-center space-x-6 mb-8">
        <h3 className="text-3xl"> About Me</h3>
        <hr className="w-1/4 border-[#ED765D]" />
      </div>
      <div className="md:flex md:justify-between">
        <div className="lg:w-1/2 ">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            doloribus tenetur fugiat corporis vitae asperiores iure, similique
            eos est nemo reprehenderit voluptas dolore ab enim suscipit ex
            explicabo illo vero.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            et sunt vero voluptas nihil temporibus numquam accusantium,
            voluptates minima in. Quisquam cupiditate ex quaerat magnam
            reiciendis rem in dolores corporis!
          </p>
          <div className="mt-12">
            <p className="mb-6">
              Here are a few technologies I have recently worked with
            </p>
            {/* <div className="flex flex-wrap items-center gap-6">
           
            </div> */}
          </div>
        </div>
        <div className="hidden lg:block ">
          <div className="flex relative justify-center items-center h-[28rem] w-[28rem] border rounded-full">
            <div className="flex justify-center items-center h-[20rem] w-[20rem] border rounded-full">
              <div className="h-[12rem] w-[12rem] border rounded-full">
                <div className="flex absolute top-0 item-center h-12 w-12 hidden lg:block">
                  <img src={htmlSvg} alt="" />
                </div>
                <div className="flex absolute left-0 item-center h-12 w-12">
                  <img src={reactSvg} alt="" />
                </div>
                <div className="flex absolute right-0 item-center h-12 w-12">
                  <img src={sassSvg} alt="" />
                </div>
                <div className="flex absolute bottom-0 item-center h-12 w-12">
                  <img src={tailwindSvg} alt="" />
                </div>
                <div className="flex absolute left-1/2 item-center h-12 w-12">
                  <img src={typescriptSvg} alt="" />
                </div>
                <div className="flex absolute top-3/4 item-center h-12 w-12">
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
    </div>
  );
};

export default About;
