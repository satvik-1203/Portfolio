import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { HomeCurve } from "../misc/icons";
import HomeMain from "../components/Home/HomeMain";
import AboutMe from "../components/Home/AboutMe";

const Home = () => {
  const { scrollY } = useViewportScroll();

  return (
    <motion.div
      className="background -z-10"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="relative">
        <HomeMain />
        <motion.div className="absolute top-20 rotate-180 ">
          <HomeCurve />
        </motion.div>
      </div>
      <AboutMe />
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
