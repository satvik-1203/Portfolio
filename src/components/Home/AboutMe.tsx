import React from "react";
import { motion } from "framer-motion";
import { usePageFade, fade } from "../../hooks/usePageFade";

const AboutMe = () => {
  const [element, controls] = usePageFade();
  return (
    <motion.section
      ref={element as any}
      variants={fade}
      animate={controls as any}
      className=" min-h-screen text-3xl pt-16 "
    >
      <div className="content flex flex-col justify-center items-center">
        <h1 className="text-white  mb-2 "> About Me</h1>
        <div className=" w-9/12 h-1 bg-purple-700 "></div>
      </div>
      <main></main>
    </motion.section>
  );
};

export default AboutMe;
