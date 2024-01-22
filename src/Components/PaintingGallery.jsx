import React, { useState } from "react";
import "../CSS/gallery.css";
import { IoMdClose } from "react-icons/io";
import { paintings } from "../data/paintings";

const PaintingGallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (item) => {
    if (window.innerWidth > 768) {
      setTempImgSrc(item);
      setModal(true);
    }
  };

  const sortedPaintings = paintings.slice().sort((a, b) => a.id - b.id);

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        {tempImgSrc && (
          <>
            {" "}
            <div className="flex justify-center items-center w-3/4 h-3/4">
              <p className="m-2 text-lg">{tempImgSrc.name}</p>

              <img src={tempImgSrc.image} />
            </div>
            <IoMdClose onClick={() => setModal(false)} />
          </>
        )}
      </div>

      <div className="galleryPainting w-3/4  mx-auto pt-6">
        {sortedPaintings.map((item) => (
          <div className="pics" key={item.id} onClick={() => getImg(item)}>
            <img src={item.image} alt={item.name} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PaintingGallery;
