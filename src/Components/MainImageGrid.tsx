import { watercolours } from "../data/watercolours";
import React from "react";

const MainImageGrid = () => {
  return (
    <div
      className="flex flex-wrap justify-between  align-center text-center 
    w-full"
    >
      {watercolours.map((item, index) => (
        <div
          key={index}
          style={{ height: "22rem", width: "22rem", marginBottom: "0.5rem" }}
          className=" align-left "
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover overlay"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </div>
      ))}
    </div>
  );
};

export default MainImageGrid;
