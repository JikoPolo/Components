import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import Burger from "../elements/icons/Burger";
import Close from "../elements/icons/Close";
import Icon from "../elements/icons/Icon";

const DoubleHeader: React.FC = () => {
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
    <header className="relative bg-base-200 w-full">
      {/* top nav */}
      <div className="bg-base-300">
        <nav className=" px-4 py-4 sm:px-16 lg:max-w-7xl lg:m-auto">
          <ul className="menu menu-horizontal w-full justify-end items-center gap-8 ">
            <li className="hover:underline">
              <Link to="/">homepage</Link>
            </li>
            <li className="hover:underline">
              <Link to="/product">product</Link>
            </li>
            <li className="hover:underline">
              <Link to="/product">
                <Icon />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Divider if NEEDED // m-0 + h-px pour reset le style */}
      <div className="divider m-0 h-px "></div>

      {/* bottom nav */}
      <nav
        // px-4 sm:px-16 les valeurs coincident avec celles du top nav et les valurs absolute du burger
        className={`w-full flex justify-between bg-transparent px-4 py-4 sm:px-16 lg:max-w-7xl lg:m-auto ${
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
          <li className="btn btn-primary">
            <Link to="/login">login</Link>
          </li>
        </ul>
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
        <div className="absolute right-4 flex items-center sm:right-16 md:hidden">
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

export default DoubleHeader;
