import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarArt from "./Components/NavBarArt";
import MainImageGrid from "./Components/MainImageGrid";
import PaintingGallery from "./Components/PaintingGallery";
import WatercolourGallery from "./Components/WatercoloursDiv";
import LandingPage from "./Pages/LandingPage";
import HomeDev from "./Pages/HomeDev";
import Navbardev from "./Components/Dev/Navbardev";
import HomeArt from "./Pages/HomeArt";

function App() {
  const contactPage = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
            </>
          }
        />

        <Route
          path="/art/*"
          element={
            <>
              <NavBarArt {...{ scrollToSection, contactPage }} />
              <Routes>
                <Route path="/" element={<HomeArt {...{ contactPage }} />} />
                {/* <Route path="/prints" element={<WatercolourGallery />} /> */}
                <Route path="/prints" element={<MainImageGrid />} />
                <Route path="/paintings" element={<PaintingGallery />} />
              </Routes>
            </>
          }
        />

        <Route
          path="/dev/*"
          element={
            <>
              <Navbardev />
              <Routes>
                <Route path="/" element={<HomeDev />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
