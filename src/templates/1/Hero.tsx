import heroImg from "../../assets/undraw_automobile_repair_ywci.svg";

const Hero = () => {
  return (
    <>
      {/* basic hero */}
      <div className="flex justify-center bg-base-200 ">
        <div className="flex justify-between mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
          <div className="flex flex-col justify-center items-start w-full md:w-3/6">
            <h4 className="uppercase">subtitle</h4>
            <h1 className="text-5xl font-bold">Vos travaux en moins de 2'!</h1>
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
      {/* wave with base color, check getwaves.io */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#191e24"
          fill-opacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,106.7C672,85,768,75,864,74.7C960,75,1056,85,1152,112C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Hero;
