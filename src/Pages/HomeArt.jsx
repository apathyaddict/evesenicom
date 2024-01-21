import CarousselSmall from "../Components/CarousselSmall";
import ContactDivArt from "../Components/ContactDivArt";

const HomeArt = ({ contactPage }) => {
  return (
    <>
      <div className="flex flex-col align-start h-full bg-beige">
        <div
          className="flex-1 h-full mainImage"
          style={{
            backgroundImage: 'url("/public/images/mainBG.JPG")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white portofolio"
            style={{ top: "65%", left: "50%" }}
          >
            <h3 className="drop-shadow">PORTFOLIO </h3>
          </div>
        </div>
        {/* <div className="flex-1 w-full p-3  bg-beige flex items-center justify-center"> */}
        <div>
          <CarousselSmall />
        </div>

        <div
          className="flex-1 h-1/2 imageBanner overflow-auto"
          style={{
            backgroundImage: 'url("/public/images/mainbanner.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex-1 w-full lg:p-20 md:p-3 sm:p-3 bg-darkbeige flex">
          <div className="flex-auto items-center justify-center text-center text-beige m-4 div-half">
            <h2 className="text-2xl font-bold ">Raison d'être</h2>
            <p className="pt-4">
              ​ Years ago, I stood in front of Caillobotte's Les raboteurs de
              parquets in the Musée d'Orsay and it changed me.
            </p>
            <p className="mt-4">
              Everything I began creating since that day has been in hope of
              recreating that moment of transcendence for someone else.{" "}
            </p>
            <p className="mt-4">
              ​Or simply, I make art inspired by places, history, and
              literature.{" "}
            </p>
          </div>
        </div>

        <ContactDivArt {...{ contactPage }} />
        <footer className="flex-1 text-slate-700 flex flex-col justify-center items-center bg-beige p-6 md:p-2">
          <p className="m-3 text-sm md:m-6 md:text-base lg:text-lg">
            © 2024 - Designed, coded, and created by Eve Seni
          </p>
        </footer>
      </div>
    </>
  );
};

export default HomeArt;
