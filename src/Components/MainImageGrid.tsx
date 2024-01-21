const MainImageGrid = () => {
  const imageUrls = [
    "../../public/images/gridphotos/1.jpg",
    "../../public/images/gridphotos/2.jpg",
    "../../public/images/gridphotos/3.jpg",
    "../../public/images/gridphotos/4.jpg",
    "../../public/images/gridphotos/5.jpg",
  ];

  return (
    <div
      className="flex flex-wrap justify-center  align-center text-center mx-0
    w-100  my-5"
    >
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="w-96 h-96 m-2 align-left ">
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover overlay"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </div>
      ))}
    </div>
  );
};

export default MainImageGrid;
