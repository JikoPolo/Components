import React from "react";
import ScrollIndicator from "../elements/ScrollIndicator";

interface HeroImgBackgroundProps {
  sub: string;
  title: string;
  btnContent?: string;
  style?: React.CSSProperties;
}

const HeroImgBackground: React.FC<HeroImgBackgroundProps> = ({
  sub,
  title,
  btnContent = "Get Started",
  ...rest
}) => {
  return (
    <>
      <div
        className="relative flex justify-center bg-base-200 bg-hero-img bg-center bg-no-repeat min-h-screen bg-cover bg-hero-gradient"
        {...rest}
      >
        <div className="flex justify-between mt-10 px-4 sm:px-16 lg:mt-0 lg:w-full lg:max-w-7xl xl:p-0">
          <div className="flex flex-col items-center justify-center w-full md:items-start md:w-3/6 lg:p-4">
            <h4 className="uppercase"> {sub} </h4>
            <h1 className="text-5xl text-center font-bold md:text-left">
              {title}
            </h1>
            <p className="text-center py-6 md:text-left">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">{btnContent}</button>
          </div>
        </div>
        <ScrollIndicator style={{ top: "80%" }} />
      </div>
    </>
  );
};

export default HeroImgBackground;
