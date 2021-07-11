import React from "react";
import { navOption } from "../../misc/nav";
import NavOption from "./NavOption";
import { AnimatePresence, motion } from "framer-motion";

const dropBoxAnimation = {
  initial: {
    x: "-200%",
  },
  animate: {
    x: "0",
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    x: "-200%",
    transition: {
      duration: 1,
    },
  },
};

const NavDropBox = () => {
  return (
    <motion.div
      className="h-screen px-10 py-3 pt-20  text-white overflow-hidden"
      style={{ backgroundColor: "#181818" }}
    >
      <div>
        <motion.div
          variants={dropBoxAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {navOption.map((option) => (
            <NavOption key={option.id} navOption={option} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavDropBox;
