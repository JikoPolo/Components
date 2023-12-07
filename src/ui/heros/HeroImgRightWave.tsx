import heroImg from "../../assets/undraw_automobile_repair_ywci.svg";
import Waves from "../graphics/Waves";

const HeroImgRightWave = () => {
  return (
    <>
      {/* basic hero */}
      <div className="flex justify-center bg-base-200 ">
        <div className="flex justify-between mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
          <div className="flex flex-col justify-center items-start w-full md:w-3/6">
            <h4 className="uppercase">subtitle</h4>
            <h1 className="text-5xl font-bold">
              Vos travaux <br /> en moins de 2'!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <img src={heroImg} className="w-2/5 hidden md:block" />
        </div>
      </div>
      <Waves />
    </>
  );
};

export default HeroImgRightWave;
