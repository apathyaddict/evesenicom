import HomeArt from "./Pages/HomeArt";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { useRef, useState } from "react";
import NavBarArt from "./Components/NavBarArt";
import MainImageGrid from "./Components/MainImageGrid";
import PaintingGallery from "./Components/PaintingGallery";
import WatercolourGallery from "./Components/WatercoloursDiv";
import LandingPage from "./Pages/LandingPage";

function App() {
  const contactPage = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [showNavbar, setShowNavbar] = useState(false);
  const handleButtonClick = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <BrowserRouter>
        {showNavbar && (
          <NavBarArt {...{ scrollToSection, contactPage, showNavbar }} />
        )}
        <Routes>
          <Route
            path="/"
            element={<LandingPage handleButtonClick={handleButtonClick} />}
          />

          <Route path="/art" element={<HomeArt {...{ contactPage }} />} />
          {/* <Route path="/prints" element={<MainImageGrid />} /> */}
          <Route path="/prints" element={<WatercolourGallery />} />
          <Route path="/paintings" element={<PaintingGallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
