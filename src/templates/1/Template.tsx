import React from "react";
import { useParams } from "react-router-dom";
import { TemplateParamTypes } from "../ParamsTypes";
// components
import DoubleHeader from "../../ui/headers/DoubleHeader";
import HeroImgRightWave from "../../ui/heros/HeroImgRightWave";
import HowDoesItWork from "../../ui/marketing/HowDoesItWork";
import Testimonial from "../../ui/marketing/Testimonial";
import WavesReverse from "../../ui/graphics/WavesReverse";
import FooterWithColumns from "../../ui/footers/FooterWithColumns";

const TemplatePage: React.FC = () => {
  const { id } = useParams<TemplateParamTypes>();
  console.log(id);

  return (
    <div>
      <DoubleHeader />
      <HeroImgRightWave />
      <HowDoesItWork />
      <Testimonial />
      <WavesReverse />
      <FooterWithColumns />
    </div>
  );
};

export default TemplatePage;
