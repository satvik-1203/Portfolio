import React from "react";
import { motion } from "framer-motion";
import { usePageFade, fade } from "../../hooks/usePageFade";

// @ts-ignore: Unreachable code error
import { ReactComponent as Illustrate } from "../../images/slice2.svg";

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 1.9 } },
};

const HomeMain = () => {
  const [element, controls] = usePageFade();

  return (
    <motion.div
      ref={element as any}
      variants={fade}
      animate={controls as any}
      className="flex flex-col min-h-screen pt-[10rem] space-y-9 justify-center items-center px-10 mb-10"
    >
      <motion.section className=" relative  z-10  text-white flex flex-col items-center justify-start  ">
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: "-80%" }}
            animate={{
              x: 0,
              opacity: [0, 0.2, 0.7, 1],
              transition: { duration: 1.8 },
            }}
            className="hero  text-center font-semibold text-2xl lg:text-5xl md:text-3xl z-10 tracking-wide pt-1  md:mt-3 "
          >
            I'm Satvik, a sophomore from GSU
          </motion.div>
          <motion.div
            animate={{
              x: 0,
              opacity: [0, 0.2, 0.7, 1],
              transition: { duration: 1.8 },
            }}
            className="md:text-base lg:my-3 lg:text-lg text-sm text-center text-gray-300"
          >
            Everything about WEB and MATH amuses me.
          </motion.div>
        </div>
        <motion.div
          variants={animation}
          initial="initial"
          animate="animate"
          className="text-xs mt-3 lg:text-base text-gray-500  "
        >
          Im a MERN stack developer.
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
      <div className="">
        <Illustrate />
      </div>
    </motion.div>
  );
};

export default HomeMain;
