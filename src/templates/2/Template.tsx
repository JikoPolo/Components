import React, { useState, useEffect } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";

import { useParams } from "react-router-dom";
import { TemplateParamTypes } from "../ParamsTypes";
// components
import HeaderMenuRightLogoLeft from "../../ui/headers/HeaderMenuRightLogoLeft";
import HeroImgBackground from "../../ui/heros/HeroImgBackground";
import HowDoesItWork from "../../ui/marketing/HowDoesItWork";
import Testimonial from "../../ui/marketing/testimonials/Testimonial";
import WavesReverse from "../../ui/graphics/WavesReverse";
import FooterWithColumns from "../../ui/footers/FooterWithColumns";

const TemplatePage: React.FC = () => {
  const { id } = useParams<TemplateParamTypes>();
  console.log(id);

  const [{ y }] = useWindowScroll();
  const [headerBackground, setHeaderBackground] = useState(false);

  // not optimized but works
  useEffect(() => {
    if (y && y > 50) {
      // You can adjust the threshold as needed
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  }, [y]);

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
      <HeroImgBackground />
      <HowDoesItWork />
      <Testimonial />
      <WavesReverse />
      <FooterWithColumns />
    </div>
  );
};

export default TemplatePage;
