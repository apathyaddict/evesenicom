import React from "react";
import "../CSS/devcss.css";
import Navbardev from "../Components/Dev/Navbardev";
import Maindev from "../Components/Dev/Maindev";
import Projects from "../Components/Dev/Projects";

const HomeDev = ({ handleButtonClick }) => {
  return (
    <div>
      <Navbardev {...{ handleButtonClick }} />
      <Maindev />
      <Projects />
    </div>
  );
};

export default HomeDev;
