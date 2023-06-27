import React from "react";
import { Helmet } from "react-helmet-async";
import Mahmudul from "../../assets/mahmudul.png";
import pdf from '../../../public/Frontebd Wev developer resume of Mahmudul Islam.pdf'

const Information = () => {
  return (
    <div className="bg-gray-400 w-full">
      <Helmet>
        <title>Information - Skill Studio</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            className="rounded-full w-80 h-80 shadow-md shadow-black"
            src={Mahmudul}
            alt=""
          />
          <div className="">
            <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-sans font-semibold mb-6 text-fuchsia-500 animate-pulse bg-gradient-to-r bg-clip-text  from-fuchsia-400 to-red-600">
              Hey! I'm <span className="text-transparent">Mahmudul Islam</span>
            </h1>
            <p className=" text-3xl font-semibold text-white ">I'm</p>
            <br />
            <p className="text-5xl font-semibold text-white animate-bounce to-red-600 -mt-4">
              A Frontend web developer
            </p>
            <p className="text-white text-base">
              A passionate web developer with experience in building responsive
              and user-friendly <br /> web applications. I enjoy creating intuitive and
              visually appealing interfaces.
            </p>
            <button className="py-3 px-4 bg-red-400 rounded-lg mt-8 text-white font-bold hover:bg-rose-600 duration-700"><a href={pdf} download> Download Resume </a></button>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Information;
