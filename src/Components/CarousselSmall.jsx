import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  "images/frames/A.jpg",
  "images/frames/B.jpg",
  "images/frames/C.jpg",

  "images/frames/E.jpg",
  "images/frames/F.jpg",
  "images/frames/I.jpg",
  "images/frames/H.jpg",
  ,
];

const CarousselSmall = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="m-auto">
        <div className="my-5 mx-20">
          <Slider {...settings}>
            {carouselItems.map((img, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={img}
                  alt=""
                  className="object-cover h-[250px] w-[250px] p-4
                  transition-transform transform hover:scale-110"
                />
                {/* <p className=" m-1 align-middle text-center">
                  {img.description}
                </p> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarousselSmall;
