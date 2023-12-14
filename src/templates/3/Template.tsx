import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

// components
import HeaderMenuRightLogoLeft from "../../ui/headers/HeaderMenuRightLogoLeft";
import HeroCentered from "../../ui/heros/HeroCentered";
import Brands from "../../ui/marketing/brands/Brands";
import BasicSection from "../../ui/marketing/BasicSection";
import CardCarousel from "../../ui/elements/carousels/CardCarousel";
import BasicForm from "../../ui/elements/forms/BasicForm";
import FooterWithCatchphrase from "../../ui/footers/FooterWithCatchphrase";

const TemplatePage: React.FC = () => {
  const [headerBackground, setHeaderBackground] = useState(false);

  // not fully optimized but it's a good start
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderBackground(true);
      } else {
        setHeaderBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    spaceBetween: 20,
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    navigation: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  return (
    <div>
      <HeaderMenuRightLogoLeft
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          background: headerBackground ? "#191e24" : "transparent",
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          transition: "background-color 0.3s",
        }}
      />
      <HeroCentered>
        {" "}
        <Brands bg="bg-base-200" />{" "}
      </HeroCentered>

      <BasicSection title="How Does it Work ?">
        <ul className="flex flex-col w-96 gap-8 justify-center items-center sm:w-full sm:flex-row">
          <li className="flex flex-col justify-center items-center text-center gap-2">
            <Player
              src={
                "https://lottie.host/519ca8cd-8936-4263-96e1-262cd62c0b8d/IybPedjGih.json"
              }
              className="player"
              loop
              autoplay
              style={{
                height: "auto",
                maxHeight: "172.37px",
                maxWidth: "130.1px",
                width: "100%",
              }}
            />
            <h3 className="font-bold">Create a free account</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </li>
          <li className="flex flex-col justify-center items-center text-center gap-2">
            <Player
              src={
                "https://lottie.host/3919f574-2e0a-49ce-ab74-3c05b1ec082e/UWITjstkQj.json"
              }
              className="player"
              loop
              autoplay
              style={{
                height: "auto",
                maxHeight: "172.37px",
                maxWidth: "130.1px",
                width: "100%",
              }}
            />
            <h3 className="font-bold">Build your website</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </li>
          <li className="flex flex-col justify-center items-center text-center gap-2">
            <Player
              src={
                "https://lottie.host/54ef581c-c294-4a80-89b9-eea91900a526/8rOsDHcDUP.json"
              }
              className="player"
              loop
              autoplay
              style={{
                height: "auto",
                maxHeight: "172.37px",
                maxWidth: "130.1px",
                width: "100%",
              }}
            />
            <h3 className="font-bold">Release & Launch</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </li>
        </ul>
      </BasicSection>

      <section className="flex flex-col justify-center m-auto my-10 p-4 bg-base-200 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        <div className="text-center m-auto mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-accent">Real deals</span> members booked
          </h1>
        </div>
        <CardCarousel settings={settings} />
      </section>

      <BasicForm />

      <FooterWithCatchphrase />
    </div>
  );
};

export default TemplatePage;
