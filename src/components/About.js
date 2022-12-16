import React from 'react';
import image from '../assets/images/test-image.png';

const About = () => {
  return (
    <div className=" p-8 md:px-24">
      <div className="flex items-center space-x-6">
        <h3 className="mb-8">About Me</h3>
        <hr className="w-1/4" />
      </div>
      <div className="flex justify-between">
        <div className="w-1/2 border">
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
            <p>Here are a few technologies I have recently worked with</p>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="border ">
          <div className="flex justify-center items-center h-[32rem] w-[32rem] border rounded-full">
            <div className="flex justify-center items-center h-[24rem] w-[24rem] border rounded-full">
              <div className="h-[15rem] w-[15rem] border rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
