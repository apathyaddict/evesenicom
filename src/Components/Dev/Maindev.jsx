import React from "react";
import LandingPage from "../../Pages/LandingPage";

const Maindev = () => {
  return (
    <div
      name="home"
      className="flex h-screen lg:flex-row md:flex-col sm:flex-col items-center justify-center mb-2 lg:mb-0 
      "
    >
      <div
        className=" flex lg:flex-row md:flex-col sm:flex-col flex-col h-5/6 w-5/6 b\
     
      "
      >
        <div className="flex-1 h-full flex justify-center items-center">
          <img
            src="/images/eve.JPG"
            alt=""
            className="rounded-full object-cover shadow-md imageEve mb-5"
          />
        </div>

        <div className=" flex-1 h-full flex  justify-center items-center lg:p-4 ">
          <div className="flex flex-col justify-center items-center m-3 ">
            <p className="lg:pb-4 pb-2 mt-2 lg:text-xl md:text-lg sm:text-sm text-sm">
              Hello, I'm
            </p>
            <h1 className="lg:text-6xl md:text-5xl sm:text-5xl text-4xl text-slate-700">
              Ève Aimée Seni
            </h1>

            <div className=" flex justify-between items-center flex-col m-4  md:w-3/4 lg:w-full">
              <h2 className="lg:text-2xl md:text-2xl sm:text-md text-lg mb-3 text-slate-400 font-bold md:items-center sm:items-center ">
                I'm a fullstack developer
              </h2>
              <div className="lg:text-lg md:text-sm sm:text-sm text-sm">
                <p>
                  With a passion for art, culture and learning. Here you will
                  find{" "}
                  <em className="text-orange-500">
                    {" "}
                    my projects, my skills, and everything coding related.{" "}
                  </em>
                </p>
                <p>
                  If you want to discover my paintings head to the art section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maindev;
