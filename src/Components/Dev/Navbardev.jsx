import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Navbardev = () => {
  const [navDev, setNavDev] = useState(false);
  const handleClick = () => setNavDev(!navDev);

  return (
    <section className="relative">
      <div className="dev-nav hidden md:flex flex-1 w-3/4 p-1 mx-auto mt-4 flex-col ">
        <div className="name-div py-4">
          <h1 className="text-center text-slate-700 text-3xl font-bold">
            Ève Aimée Seni
          </h1>
        </div>

        <nav className="w-full">
          <ul className="dev-nav hidden md:flex items-center w-3/4 mx-auto justify-around py-4 text-slate-700">
            <li className="nav-li hover:font-bold">
              <ScrollLink to="home" spy={true} smooth={true} offset={50}>
                Home
              </ScrollLink>
            </li>
            <li className="nav-li ">
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </ScrollLink>
            </li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="nav-li ">Contact</li>
            </ScrollLink>
            <li className="nav-li ">
              <Link to="/art">Art Portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 absolute top-4 right-4 text-slate-700"
      >
        {!navDev ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>
      {/* mobile */}
      <ul
        className={
          !navDev
            ? "hidden"
            : "absolute top-0 right-0 h-screen w-full flex flex-col justify-center items-center bg-beige text-slate-700"
        }
      >
        <li className="py-6 text-4xl">Home</li>

        <ScrollLink
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li className="py-6 text-4xl">Projects</li>
        </ScrollLink>
        <li className="py-6 text-4xl">Contact</li>
        <Link to="/art">
          <li className="py-6 text-4xl">Art</li>
        </Link>
      </ul>
    </section>
  );
};

export default Navbardev;
