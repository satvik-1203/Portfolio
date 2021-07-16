import React from "react";
import { motion } from "framer-motion";
import { usePageFade, fade } from "../../hooks/usePageFade";

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 1.9 } },
};

const HomeMain = () => {
  const [element, controls] = usePageFade();

  return (
    <motion.section
      ref={element as any}
      variants={fade}
      animate={controls as any}
      className=" relative h-screen z-10 px-10 text-white flex flex-col justify-center sm:justify-start sm:pt-[14rem] "
    >
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: "-80%" }}
          animate={{
            x: 0,
            opacity: [0, 0.2, 0.7, 1],
            transition: { duration: 1.8 },
          }}
          className="hero  font-bold text-4xl md:text-6xl z-10 tracking-wide pt-1 leading-7 md:leading-7 md:mt-3 "
        >
          This is Satvik, <br />
          <span className="text-base text-white">
            A full stack MERN developer :&#x00029;
          </span>
        </motion.div>
      </div>
      <motion.div
        variants={animation}
        initial="initial"
        animate="animate"
        className="text-xs mt-3 text-gray-300  "
      >
        I have a class, so please don't show me C.
      </motion.div>
      <a href="#about">
        <motion.button
          variants={animation}
          initial="initial"
          animate="animate"
          className="mt-4 max-w-[10rem] transform w-2/5 sm:w-1/5 px-3 py-1 z-10 border-2 border-purple-700 transition-all duration-700 rounded-lg  sm:border-white"
        >
          About Me
        </motion.button>
      </a>
    </motion.section>
  );
};

export default HomeMain;
