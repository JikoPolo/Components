import React from "react";
import { useParams } from "react-router-dom";
import { TemplateParamTypes } from "../ParamsTypes";

const TemplatePage: React.FC = () => {
  const { id } = useParams<TemplateParamTypes>();

  return (
    <div>
      <h1>Template {id} oui</h1>
      {/* Render the template content based on the id */}
    </div>
  );
};

export default TemplatePage;
