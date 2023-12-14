import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import reactLogo from "../../assets/react.svg";
import Burger from "../elements/icons/Burger";
import Close from "../elements/icons/Close";

interface HeaderMenuRightLogoLeftProps {
  style?: React.CSSProperties;
}

const HeaderMenuRightLogoLeft: React.FC<HeaderMenuRightLogoLeftProps> = ({
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuState = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Burger Animation
  const variants = {
    open: { rotate: 90, opacity: 1 },
    closed: { rotate: 0, opacity: 1 },
  };

  return (
    <header
      className="relative px-16 bg-base-200 w-full py-4 flex justify-center"
      {...rest}
    >
      <nav
        className={`w-full flex justify-between bg-transparent max-w-7xl lg:p-4 ${
          isOpen ? "flex-col" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" title="logo" className="flex">
            <img src={reactLogo} alt="logo" />
            <span className="text-xl font-bold mx-3">react</span>
          </a>
        </div>

        {/* Menu */}
        <ul className="justify-start items-center gap-8 hidden md:flex">
          <li className="hover:underline">
            <Link to="/">homepage</Link>
          </li>
          <li className="hover:underline">
            <Link to="/pricing">pricing</Link>
          </li>
          <li className="hover:underline">
            <Link to="/product">product</Link>
          </li>
          {/* make this button color easily editable */}
          <li className="btn btn-accent">
            <Link to="/login">login</Link>
          </li>
        </ul>

        {/* When responsive and burger is open */}
        {isOpen && (
          <ul className="justify-start items-center gap-8 mx-4 my-2">
            <li className="p-4 text-xl">
              <Link to="/">homepage</Link>
            </li>
            <li className="p-4 text-xl">
              <Link to="/pricing">pricing</Link>
            </li>
            <li className="p-4 text-xl">
              <Link to="/product">product</Link>
            </li>
            <li className="p-4 text-xl link link-primary">
              <Link to="/login">login</Link>
            </li>
          </ul>
        )}
        {/* Burger button */}
        <div className="absolute right-16 flex items-center md:hidden">
          <motion.button
            layout
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="btn btn-ghost btn-sm rounded-btn"
            onClick={handleMenuState}
          >
            {isOpen ? <Close /> : <Burger />}
          </motion.button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMenuRightLogoLeft;
