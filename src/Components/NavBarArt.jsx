import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBarArt = ({ scrollToSection, contactPage }) => {
  const [navDev, setNavDev] = useState(false);
  const handleClick = () => setNavDev(!navDev);

  return (
    <>
      <section>
        <div className="flex-1 w-3/4 p-1 mx-auto mt-4 ">
          <div
            className={`name-div py-4 ${navDev ? "border-b-0" : "border-b-2"}`}
          >
            <h1 className="text-center text-slate-700 text-3xl font-bold">
              Ève Aimée Seni
            </h1>
          </div>
        </div>
        {/* Hamburger */}
        <div
          onClick={handleClick}
          className="md:hidden z-10 absolute top-4 right-4 text-slate-700"
        >
          {!navDev ? <FaBars size={24} /> : <FaTimes size={24} />}
        </div>

        {navDev && (
          <ul className="md:hidden absolute top-0 right-0 h-screen w-full flex flex-col justify-center items-center bg-beige text-slate-700 ">
            <Link to="/" className="hover:font-bold py-6 text-4xl">
              Home
            </Link>
            <Link to="/art" className="hover:font-bold py-6 text-4xl">
              Art Portfolio
            </Link>
            <Link to="/prints" className="hover:font-bold py-6 text-4xl">
              Prints and Watercolours
            </Link>
            <Link to="/paintings" className="hover:font-bold py-6 text-4xl">
              Paintings
            </Link>
            <Link
              onClick={() => scrollToSection(contactPage)}
              className="hover:font-bold py-6 text-4xl"
            >
              Contact
            </Link>
            <Link to="/dev" className="hover:font-bold py-6 text-4xl">
              Coding
            </Link>
          </ul>
        )}

        <nav className="hidden md:flex w-3/4 mx-auto justify-around py-4 text-slate-700 menuart">
          <Link to="/" className="hover:font-bold">
            Home
          </Link>
          <Link to="/art" className="hover:font-bold">
            Art Portfolio
          </Link>
          <Link to="/prints" className="hover:font-bold">
            Prints and Watercolours
          </Link>
          <Link to="/paintings" className="hover:font-bold">
            Paintings
          </Link>
          <Link
            onClick={() => scrollToSection(contactPage)}
            className="hover:font-bold"
          >
            Contact
          </Link>
          <Link to="/dev" className="hover:font-bold">
            Coding
          </Link>
        </nav>
      </section>
    </>
  );
};

export default NavBarArt;
