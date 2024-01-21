import React from "react";
import LandingPage from "../../Pages/LandingPage";

const Maindev = () => {
  return (
    <div name="home" className="flex h-screen items-center justify-center">
      <div className=" flex flex-row h-5/6 w-3/4">
        <div className="flex-1 h-full flex justify-center items-center">
          <img
            src="/images/eve.JPG"
            alt=""
            className="rounded-full object-cover shadow-md imageEve"
          />
        </div>

        <div className=" flex-1 h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center m-3">
            <p className="pb-4 text-2xl">Hello, I'm</p>
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-slate-700">
              Ève Aimée Seni
            </h1>

            <div className=" flex justify-between items-center flex-col m-4">
              <h2 className="lg:text-2xl sm:text-3xl mb-3 text-slate-500 font-bold ">
                I'm an inspired fullstack developer
              </h2>
              <p>
                With a passion for art, culture and learning. Here you will find{" "}
                <em className="text-pink-500"> my projects and my skills. </em>
                If you want to discover my paintings head to the art section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maindev;
