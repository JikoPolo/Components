import React from "react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  style?: React.CSSProperties;
}

const variants = {
  animate: {
    y: ["0%", "60%", "0%"],
    transition: {
      duration: 2, // Duration of one cycle of the float
      ease: "easeInOut",
      repeat: Infinity, // Loop the animation infinitely
    },
  },
};

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ ...rest }) => {
  {
    /* element to indicate the scroll down the transform properties are there to center prefectly */
  }
  return (
    <motion.div
      className="absolute z-50 w-8 h-8 bg-slate-50 transform -translate-x-1/2 -translate-y-1/2"
      variants={variants}
      animate="animate"
      {...rest}
    ></motion.div>
  );
};

export default ScrollIndicator;
