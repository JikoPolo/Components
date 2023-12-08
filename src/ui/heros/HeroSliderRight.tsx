// import heroImg from "../../assets/undraw_automobile_repair_ywci.svg";
import Waves from "../graphics/Waves";
import MultipleItems from "../elements/Slider";

const HeroSliderRight = () => {
  return (
    <>
      {/* min height 500px */}
      <div className="relative flex flex-col justify-center bg-base-200 min-h-[500px] ">
        <div className="grid grid-cols-1 my-10 px-4 sm:px-16 lg:grid-cols-2 lg:mb-0 lg:mt-0 lg:py-8 lg:m-auto lg:w-full lg:max-w-7xl">
          <div className="flex flex-col items-center justify-center w-full md:items-start ">
            <h1 className="text-5xl text-center font-semibold md:text-left">
              Vos travaux en moins de 2'!
            </h1>
            <p className="text-center py-6 md:text-left">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>

          {/* <img src={heroImg} className="w-2/5 hidden md:block" /> */}
        </div>

        {/* slider */}

        <div className="w-full top-0 right-0 left-0 bottom-0 2xl:left-auto 2xl:absolute ">
          {/* no idea why flex and flex-col work here */}
          <div className="right-0 top-0 bottom-0 px-12 flex flex-col justify-center lg:w-1/2 2xl:right-0 lg:max-w-7xl lg:absolute">
            <MultipleItems />
          </div>
        </div>
      </div>
      <Waves />
    </>
  );
};

export default HeroSliderRight;
