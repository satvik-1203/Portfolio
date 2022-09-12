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
            className="text-white  mb-5 w-[85%] mx-auto text-3xl md:text-5xl text-center"
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
    </section>
  );
};

export default PageOne;
