import React from "react";
import { motion } from "framer-motion";
import { usePageFade, fade } from "../../hooks/usePageFade";

// @ts-ignore: Unreachable code error
import { ReactComponent as Illustrate } from "../../images/slice1.svg";

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 1.9 } },
};

const HomeMain = () => {
  const [element, controls] = usePageFade();

  return (
    <motion.div className="flex flex-col md:flex-row justify-between px-10">
      <motion.section className=" relative h-screen z-10 px-10 text-white flex flex-col justify-start pt-[14rem] ">
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: "-80%" }}
            animate={{
              x: 0,
              opacity: [0, 0.2, 0.7, 1],
              transition: { duration: 1.8 },
            }}
            className="hero  font-bold text-3xl md:text-4xl z-10 tracking-wide pt-1  md:mt-3 "
          >
            I'm Satvik, a sophomore from GSU <br />
            <span className="text-base text-gray-400">
              Im optimist to do PHD in ML and getting a job at Silicon valley
            </span>
          </motion.div>
        </div>
        <motion.div
          variants={animation}
          initial="initial"
          animate="animate"
          className="text-xs mt-3 text-gray-500  "
        >
          Im a MERN stack developer and trying to become a React developer.
        </motion.div>

        <motion.button
          variants={animation}
          initial="initial"
          animate="animate"
          className="mt-4 max-w-[10rem] transform w-2/5 md:w-3/5 px-3 py-1 z-10 border-2 border-purple-700 transition-all duration-700 rounded-lg "
        >
          <a href="#about " className="block w-full">
            About Me
          </a>
        </motion.button>
      </motion.section>
      <div className="mr-20 hidden md:block">
        <Illustrate />
      </div>
    </motion.div>
  );
};

export default HomeMain;
