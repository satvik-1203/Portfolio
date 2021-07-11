import * as React from "react";
import { Rectangle } from "../../misc/nav";
import { motion } from "framer-motion";

interface Props {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
const boxAnimation = {
  initial: {},
  animate: {
    rotate: "360deg",
    transition: {
      duration: 0.8,
    },
  },
};

const rectangleOuters = {
  initial: {},
  animate: {
    rotate: "45deg",
    y: "-165%",
  },
};

const NavBar: React.FC<Props> = ({ openState }) => {
  const [open, setOpen] = openState;

  return (
    <nav className="navBar flex justify-between items-center px-10 bg-black fixed top-0 left-0 right-0 h-20">
      <div className="text-white  not-italic font-normal text-3xl">Satvik</div>
      <motion.div
        className="hamburger flex flexCol space-y-1"
        onClick={() => setOpen((prev) => !prev)}
        variants={open ? boxAnimation : undefined}
        initial="initial"
        animate="animate"
      >
        <motion.div
          animate={open ? { y: "165%", rotate: "-45deg" } : undefined}
          className="transition-all ease-out"
        >
          <Rectangle />
        </motion.div>
        <motion.div
          animate={open ? { opacity: 0 } : undefined}
          transition={open ? { delay: 0.2 } : undefined}
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
