import React from "react";
import indexData from "#/data/index.json";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {}

const container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  initial: {
    x: "-120%",
  },
  animate: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const PageOne: React.FC<Props> = () => {
  return (
    <section className="min-w-full min-h-screen flex flex-col  justify-center">
      <div className="hero min-h-[60vh] flex flex-col items-center justify-between">
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="w-fit overflow-hidden"
        >
          <motion.h1
            variants={item}
            className="text-gray-50  mb-5 w-[85%] mx-auto text-3xl md:text-5xl text-center"
          >
            {indexData.mainHeading}
          </motion.h1>
          <motion.h2
            variants={item}
            className="text-gray-300 max-w-[700px] mx-auto md:text-xl text-center"
          >
            {indexData.sideHeading}
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 3 } }}
        >
          <Image
            src={"/photo.svg"}
            height={"400"}
            width={"400"}
            alt="Image tag"
          />
        </motion.div>
      </div>

      <a href="#sectionTwo">
        <div className="text-gray-200 arrow flex justify-center relative top-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer md:scale-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </a>
    </section>
  );
};

export default PageOne;
