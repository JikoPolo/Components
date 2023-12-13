import React from "react";
import Waves from "../graphics/Waves";

interface HeroCenteredProps {
  children?: React.ReactNode;
}

const HeroCentered: React.FC<HeroCenteredProps> = ({ children }) => {
  return (
    <>
      {/* PADDING-TOP only for header fixed ! */}
      <div className="flex justify-center bg-base-200 pt-32">
        <div className="flex justify-between mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-6xl leading-snug text-center font-bold">
              Save up to <span className="text-accent"> 40-90% off</span> <br />{" "}
              flights from your city
            </h1>
            <p className="text-center text-xl py-6 md:text-left">
              Join Going for <span className="text-accent">free</span> and start
              saving hundreds on airfare.
            </p>
            <button className="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>
      {children}
      <Waves />
    </>
  );
};

export default HeroCentered;
