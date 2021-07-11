import React, { useState } from "react";
import styled from "styled-components";
import { Rectangle } from "../misc/nav";
import { motion } from "framer-motion";

const boxAnimation = {
  initial: {},
  animate: {
    rotate: "360deg",
    transition: {
      duration: 1,
    },
  },
};

const rectangleOuters = {
  initial: {},
  animate: {
    rotate: "45deg",
    y: "-160%",
  },
};

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="navBar flex justify-between">
      <div className="text-white  not-italic font-normal text-xl">Home</div>
      <motion.div
        className="hamburger flex flexCol space-y-1"
        onClick={() => setOpen((prev) => !prev)}
        variants={open ? boxAnimation : undefined}
        initial="initial"
        animate="animate"
      >
        <motion.div
          animate={open ? { y: "160%", rotate: "-45deg" } : undefined}
          className="transition-all ease-out"
        >
          <Rectangle />
        </motion.div>
        <motion.div
          animate={open ? { opacity: 0 } : undefined}
          className="transition-all ease-out"
        >
          <Rectangle />
        </motion.div>
        <motion.div
          variants={open ? rectangleOuters : undefined}
          className={"transition-all ease-out transform"}
          initial="initial"
          animate="animate"
        >
          <Rectangle />
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default NavBar;
