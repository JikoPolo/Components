import React from "react";
import { useParams } from "react-router-dom";
import { TemplateParamTypes } from "../ParamsTypes";
// components
import HeaderMenuRightLogoLeft from "../../ui/headers/HeaderMenuRightLogoLeft";

import HeroSliderRight from "../../ui/heros/HeroSliderRight";

const TemplatePage: React.FC = () => {
  const { id } = useParams<TemplateParamTypes>();
  console.log(id);

  return (
    <div>
      <HeaderMenuRightLogoLeft />
      {/* <HeroSliderRight /> */}
    </div>
  );
};

export default TemplatePage;
