import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import Burger from "../icons/Burger";
import Close from "../icons/Close";

const HeaderMenuLeftActionsRight: React.FC = () => {
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
      {/* nav */}
      <nav
        // px-4 sm:px-16 les valeurs coincident avec celles du top nav et les valurs absolute du burger
        className={`w-full flex justify-start bg-transparent px-4 sm:px-16 py-4 ${
          isOpen ? "flex-col" : ""
        }`}
      >
        <div className="flex items-center mx-4">
          <a href="#" title="logo" className="flex">
            <img src={reactLogo} alt="logo" />
            <span className="text-xl font-bold mx-3">react</span>
          </a>
        </div>
        {/* Add custom width to place element, padding is working to give more space */}
        <ul className="justify-start items-center gap-8 hidden w-2/3 md:flex">
          <li className="hover:underline">
            <Link to="/">homepage</Link>
          </li>
          <li className="hover:underline">
            <Link to="/pricing">pricing</Link>
          </li>
          <li className="hover:underline">
            <Link to="/product">product</Link>
          </li>
        </ul>

        {/* Add custom width to place element */}
        <ul className="justify-end items-center gap-8 hidden w-1/3 md:flex">
          <li className="hover:underline">
            <Link to="/product">register</Link>
          </li>
          <li className="btn btn-primary">
            <Link to="/login">login</Link>
          </li>
        </ul>

        {/* Mobile menu, depending on needs, classic or header or copy the same code above */}
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
              <Link to="/login">register</Link>
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

export default HeaderMenuLeftActionsRight;
