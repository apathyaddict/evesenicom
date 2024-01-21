import React from "react";

import TextTyped from "../Components/TextAnimation/TextTyped";

const LandingPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" flex flex-row h-3/4 w-3/4">
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
            <h1 className="text-6xl text-slate-700">Ève Aimée Seni</h1>

            <TextTyped />
            <div className=" flex justify-between items-center m-4">
              <button className="bg-slate-700 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-slate-900 m-4">
                Fullstack developer
              </button>
              <button className="bg-white text-slate-700 font-bold rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-slate-900 m-4">
                Artist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
