import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Navbardev = ({ handleButtonClick }) => {
  const [navDev, setNavDev] = useState(false);
  const handleClick = () => setNavDev(!navDev);
  return (
    <section className="fixed w-full h-[80px] flex justify-between items-center px-4 text-slate-700  ">
      <div>
        <ul className="dev-nav hidden md:flex items-center">
          <li>
            <ScrollLink
              activeClass="active"
              to="home"
              // spy={true}
              smooth={true}
              offset={50}
              // duration={500}
              // onSetActive={handleSetActive}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              // onSetActive={handleSetActive}
            >
              Projects
            </ScrollLink>
          </li>
          <li>Skills</li>
          <li>Work</li>
          <Link to="/art" onClick={() => handleButtonClick(true)}>
            <li>Art</li>
          </Link>
        </ul>
      </div>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 text-slate-700">
        {!navDev ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile */}
      <ul
        className={
          !navDev
            ? "hidden"
            : " absolute top-0 right-0 h-screen w-full flex flex-col justify-center items-center bg-beige text-slate-700"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Contact</li>
        <Link to="/art">
          <li className="py-6 text-4xl">Art</li>
        </Link>
      </ul>
    </section>
  );
};

export default Navbardev;
