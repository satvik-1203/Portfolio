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
    <section className="min-h-screen page_first relative flex flex-col">
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="w-[80%] overflow-hidden"
      >
        <h1 className="text-2xl md:text-4xl">
          Namaste, thanks for joining my playground 👋.
        </h1>
        <motion.p variants={item} className="text-gray-300 text-lg">
          This is my own dedicated space on the internet to share my thoughts,
          daily leetcode and all unnecessary things I feel.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
        className="flex justify-center items-center min-h-[50vh]"
      >
        <Image
          src={"/photo.svg"}
          height={"400"}
          width={"400"}
          alt="Image tag"
        />
      </motion.div>
      <a
        href="#about"
        className="text-white right-0 border-2 border-purple-700 px-4 py-2 hover:bg-purple-700 transition-all duration-300 rounded absolute bottom-10 md:bottom-32"
      >
        View More
      </a>
    </section>
  );
};

export default PageOne;
