import React from "react";
import { useParams } from "react-router-dom";
import { TemplateParamTypes } from "../ParamsTypes";
// components
import HeaderMenuRightLogoLeft from "../../ui/headers/HeaderMenuRightLogoLeft";

import HeroImgBackground from "../../ui/heros/HeroImgBackground";

const TemplatePage: React.FC = () => {
  const { id } = useParams<TemplateParamTypes>();
  console.log(id);

  return (
    <div>
      <HeaderMenuRightLogoLeft
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          background: "transparent",
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
        }}
      />
      <HeroImgBackground />
    </div>
  );
};

export default TemplatePage;
