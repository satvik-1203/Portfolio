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
      className="relative h-screen z-10 px-14 text-white flex flex-col justify-center "
    >
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: "-150%" }}
          animate={{
            x: 0,
            opacity: [0, 0.2, 0.7, 1],
            transition: { duration: 1.8 },
          }}
          className="hero pt-12 font-bold text-4xl z-10 tracking-wide  leading-8 "
        >
          Hello, <br />
          <span className="text-2xl text-purple-700">
            This is satvik :&#x00029;
          </span>
        </motion.div>
      </div>
      <motion.div
        variants={animation}
        initial="initial"
        animate="animate"
        className="text-xs mt-3 text-gray-400  "
      >
        I have a class, so please don't show me C.
      </motion.div>
      <motion.button
        variants={animation}
        initial="initial"
        animate="animate"
        className="mt-4 transform w-2/5  px-3 py-1 z-10 border-2 border-purple-700 transition-all duration-700 rounded-lg"
      >
        <a href="#about">About Me</a>
      </motion.button>
    </motion.section>
  );
};

export default HomeMain;
