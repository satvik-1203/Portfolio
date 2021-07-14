import React from "react";
import { motion, useViewportScroll } from "framer-motion";
import { HomeCurve, Progress } from "../misc/icons";
import Skills from "../components/Home/Skills";
import HomeMain from "../components/Home/HomeMain";
import AboutMe from "../components/Home/AboutMe";

const Home = () => {
  return (
    <motion.div
      className="homeContainer background -z-10"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="relative">
        <HomeMain />
        <motion.div className="absolute top-20 rotate-180 ">
          <HomeCurve />
        </motion.div>
        <motion.div className="fixed left-4 bottom-4">
          <Progress />
        </motion.div>
      </div>

      <div className="absolute" id="about" />
      <AboutMe />

      <Skills />
      <div className="h-16"></div>
    </motion.div>
  );
};

export default Home;

{
  /* <div className="about text-xs mt-4 text-gray-300">
          GitHub:{" "}
          <a
            target="_blank"
            className="text-blue-500 underline"
            href="https://github.com/satvik-1203"
          >
            https://github.com/satvik-1203
          </a>
        </div> */
}
