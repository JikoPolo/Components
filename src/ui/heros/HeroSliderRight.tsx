// import heroImg from "../../assets/undraw_automobile_repair_ywci.svg";
import Waves from "../graphics/Waves";
import CardCarousel from "../elements/carousels/CardCarousel";

const HeroSliderRight = () => {
  const settings = {
    spaceBetween: 20,
    slidesPerView: "2",
    centeredSlides: true,
    loop: true,
    navigation: false,
  };

  return (
    <>
      {/* min height 500px */}
      <div className="relative w-full flex flex-col justify-center bg-base-200 min-h-[500px] lg:flex-row ">
        {/* lg:max-w-[40rem] is the half of max-w-7xl */}
        <div className="flex my-10 px-4 sm:px-16 lg:w-1/2 lg:m-auto lg:mr-0 lg:max-w-[40rem] 2xl:grid 2xl:m-auto 2xl:grid-cols-2 2xl:w-full 2xl:max-w-7xl">
          <div className="flex flex-col items-center justify-center w-full lg:items-start ">
            <h1 className="text-5xl text-center font-semibold lg:text-left">
              Vos travaux en moins de 2'!
            </h1>
            <p className="text-center py-6 lg:text-left">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>

        {/* slider */}
        {/* w-1/2 when relative for half size with title */}
        <div className="w-full lg:w-1/2 2xl:w-full 2xl:top-0 2xl:right-0 2xl:bottom-0 2xl:left-auto 2xl:absolute ">
          <div className="right-0 top-0 bottom-0 px-12 flex justify-center lg:w-1/2 2xl:right-0 lg:max-w-7xl lg:absolute">
            <CardCarousel settings={settings} />
          </div>
        </div>
      </div>
      <Waves />
    </>
  );
};

export default HeroSliderRight;
