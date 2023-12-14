import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import Icon from "../elements/icons/Icon";

interface FooterWithCatchphraseProps {
  catchphrase: string;
  btnContent: string;
  center: boolean;
}

const FooterWithCatchphrase: React.FC<FooterWithCatchphraseProps> = ({
  catchphrase,
  btnContent,
  center = false,
}) => {
  return (
    <footer className="bg-base-200 ">
      {/* here goes the catchphrase */}
      <div className="flex flex-col justify-center items-center p-8 mb-4">
        <h1 className="text-4xl w-4/5 text-center mb-8 lg:w-1/2">
          {catchphrase}
        </h1>
        <div className="btn btn-primary">{btnContent}</div>
      </div>
      {/* nav get the width instead of the footer element to have the divider with the page's full width withotu absolute. But absolute is another solution */}
      <nav className="w-full flex justify-between m-auto p-6 flex-col gap-6 lg:gap-0 lg:w-9/12 lg:flex-row">
        {/* logo here */}
        <div
          className={`flex ${
            center ? "justify-center" : "justify-start"
          }  items-center lg:w-1/3`}
        >
          <a href="#" title="logo" className="flex">
            <img src={reactLogo} alt="logo" />
            <span className="text-xl font-bold mx-3">react</span>
          </a>
        </div>
        <ul
          className={`flex ${
            center ? "justify-center" : "justify-start"
          } w-full items-center gap-8 lg:justify-center lg:w-1/3`}
        >
          {/* menu goes here */}
          <li className="hover:underline">
            <Link to="/">homepage</Link>
          </li>
          <li className="hover:underline">
            <Link to="/pricing">pricing</Link>
          </li>
          <li className="hover:underline">
            <Link to="/product">product</Link>
          </li>
          <li className="hover:underline">
            <Link to="/product">product</Link>
          </li>
        </ul>
        {/* here for socials */}
        <ul
          className={`flex ${
            center ? "justify-center" : "justify-start"
          } w-full items-center gap-8 lg:justify-center lg:w-1/3`}
        >
          <li className="hover:underline">
            <Icon />
          </li>
          <li className="hover:underline">
            <Icon />
          </li>
          <li className="hover:underline">
            <Icon />
          </li>
          <li className="hover:underline">
            <Icon />
          </li>
        </ul>
      </nav>
      {/* Divider if NEEDED // m-0 + h-px pour reset le style */}
      <div className="divider m-0 h-px "></div>{" "}
      <div className="flex justify-between w-full m-auto p-6 flex-col-reverse gap-6 lg:flex-row lg:w-9/12 lg:gap-0">
        <p
          className={`text-sm ${
            center ? "text-center" : "text-left"
          }  text-gray-200 lg:text-center`}
        >
          © Copyright 2023, All Rights Reserved by JikoPolo
        </p>
        <div
          className={`flex ${
            center ? "justify-center" : "justify-start"
          }  gap-4`}
        >
          <Link to="/terms">terms & conditions</Link>
          <Link to="/privacy">privacy & policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithCatchphrase;
