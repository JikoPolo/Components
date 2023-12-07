import React from "react";
import { useParams } from "react-router-dom";
import { TemplateParamTypes } from "../ParamsTypes";
// components
import DoubleHeader from "../../ui/headers/DoubleHeader";
import Hero from "./Hero";

const TemplatePage: React.FC = () => {
  const { id } = useParams<TemplateParamTypes>();
  console.log(id);

  return (
    <div>
      <DoubleHeader />
      <Hero />
    </div>
  );
};

export default TemplatePage;
