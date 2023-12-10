import React from "react";
import { useParams } from "react-router-dom";
import { TemplateParamTypes } from "../ParamsTypes";
// components
import DoubleHeader from "../../ui/headers/DoubleHeader";
// import HeroImgRightWave from "../../ui/heros/HeroImgRightWave";
import Accordion from "../../ui/elements/accordions/Accordion";

import HeroSliderRight from "../../ui/heros/HeroSliderRight";

import HowDoesItWork from "../../ui/marketing/HowDoesItWork";
import Testimonial from "../../ui/marketing/testimonials/Testimonial";
import WavesReverse from "../../ui/graphics/WavesReverse";
import FooterWithColumns from "../../ui/footers/FooterWithColumns";

const TemplatePage: React.FC = () => {
  const { id } = useParams<TemplateParamTypes>();
  console.log(id);

  return (
    <div>
      <DoubleHeader />
      <HeroSliderRight />
      <HowDoesItWork />
      <Accordion />
      <Testimonial />
      <WavesReverse />
      <FooterWithColumns />
    </div>
  );
};

export default TemplatePage;
