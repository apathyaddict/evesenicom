import React, { useState } from "react";
import "../CSS/gallery.css";
import { IoMdClose } from "react-icons/io";
import { paintings } from "../data/paintings";

const PaintingGallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  const sortedPaintings = paintings.slice().sort((a, b) => a.id - b.id);

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImgSrc} alt="modal" />
        <IoMdClose onClick={() => setModal(false)} />
      </div>

      <div className="galleryPainting w-3/4  mx-auto pt-6">
        {sortedPaintings.map((item) => (
          <div
            className="pics"
            key={item.id}
            onClick={() => getImg(item.image)}
          >
            <img src={item.image} alt={item.name} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PaintingGallery;
