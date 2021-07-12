import React from "react";
import { navOption } from "../../misc/nav";
import NavOption from "./NavOption";
import { motion } from "framer-motion";

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

interface Props {
  handleOpen: () => void;
}

const NavDropBox: React.FC<Props> = ({ handleOpen }) => {
  return (
    <motion.div
      className=" px-10 py-3 pt-20  text-white overflow-hidden h-screen"
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
            <div key={option.id} onClick={handleOpen}>
              <NavOption navOption={option} />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavDropBox;
