import React from "react";
import { FaStoreAlt, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactDivArt = ({ contactPage }) => {
  return (
    <div
      ref={contactPage}
      className="flex flex-row items-center h-full bg-beige"
    >
      <img className="imageBargue h-1/2" src="/public/images/testbargue.jpg" />

      <div className="flex-1 text-slate-700 flex flex-col justify-center items-center">
        <h3 className="md:text-5xl  sm:m-2 sm:p-2 text-4xl p-2">CONTACT</h3>

        <div>
          <p className="p-3">
            <FaStoreAlt className="inline mr-4" />
            <a
              href="https://society6.com/femalesaint"
              target="_blank"
              rel="noopener noreferrer"
            >
              society6
            </a>
          </p>
          <p className="p-3">
            <FaInstagram className="inline mr-2" />
            <a
              href="https://www.instagram.com/female.saint/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </p>
          <p className="p-3">
            <FaEnvelope className="inline mr-2" />
            <a href="eveseniart@gmail.com">email</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDivArt;
