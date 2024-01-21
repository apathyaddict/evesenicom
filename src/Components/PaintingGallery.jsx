import React, { useState } from "react";
import "../CSS/gallery.css";
import { IoMdClose } from "react-icons/io";

const PaintingGallery = () => {
  const data = [
    "/images/gridphotos/1.jpg",
    "images/gridphotos/2.jpg",
    "images/gridphotos/3.jpg",
    "images/gridphotos/4.jpg",
    "images/gridphotos/5.jpg",
  ];

  const [modal, setmodal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (ImgSrc) => {
    setTempImgSrc(ImgSrc);
    setmodal(true);
  };

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImgSrc} />
        <IoMdClose onClick={() => setmodal(false)} />
      </div>

      <div className="galleryPainting">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item)}>
              <img
                src={item}
                alt={`Painting ${index + 1}`}
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PaintingGallery;
