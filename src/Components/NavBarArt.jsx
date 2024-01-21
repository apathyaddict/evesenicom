import React from "react";
import { Link } from "react-router-dom";

const NavBarArt = ({ scrollToSection, contactPage }) => {
  return (
    <>
      <div className="flex-1  w-3/4 p-1 mx-auto mt-4 ">
        <div className="name-div py-4">
          <h1 className="text-center text-slate-700 text-3xl font-bold">
            Ève Aimée Seni
          </h1>
        </div>
      </div>
      <nav className="flex w-3/4 mx-auto  justify-around py-4 text-slate-700 ">
        <Link to="/" className=" hover:font-bold">
          Home
        </Link>
        <Link to="/art" className=" hover:font-bold">
          Art Portfolio
        </Link>
        <Link to="/prints" className=" hover:font-bold">
          Prints and Watercolours
        </Link>
        <Link to="/paintings" className=" hover:font-bold">
          Paintings
        </Link>
        <Link
          onClick={() => scrollToSection(contactPage)}
          className="hover:font-bold"
        >
          Contact
        </Link>
      </nav>
    </>
  );
};

export default NavBarArt;
