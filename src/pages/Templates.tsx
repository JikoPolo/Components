import { NavLink } from "react-router-dom";

const Templates = () => {
  // TODO: fetch template IDs from a folder or anything else
  const templateIDs = ["1"];

  return (
    <>
      <h1 className="text-4xl">Templates</h1>
      {templateIDs.map((id) => (
        <NavLink key={id} to={`/templates/${id}`}>
          View Template {id}
        </NavLink>
      ))}
    </>
  );
};

export default Templates;
