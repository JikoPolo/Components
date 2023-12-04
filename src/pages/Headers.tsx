import HeaderMenuRightLogoLeft from "../ui/headers/HeaderMenuRightLogoLeft";
import HeaderCentered from "../ui/headers/HeaderCentered";
import DoubleHeader from "../ui/headers/DoubleHeader";
import HeaderMenuLeftActionsRight from "../ui/headers/HeaderMenuLeftActionsRight";
import HeaderShadowed from "../ui/headers/HeaderShadowed";

const Headers = () => {
  return (
    <>
      <h1 className="text-4xl">Headers</h1>
      <ul className="flex gap-8 w-full flex-wrap ">
        <li className="w-full">
          <HeaderMenuRightLogoLeft />
        </li>
        <li className="w-full">
          <HeaderCentered />
        </li>
        <li className="w-full">
          <DoubleHeader />
        </li>
        <li className="w-full">
          <HeaderMenuLeftActionsRight />
        </li>
        <li className="w-full">
          <HeaderShadowed />
        </li>
      </ul>
    </>
  );
};

export default Headers;
