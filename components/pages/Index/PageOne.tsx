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
    <section className="min-h-[80vh] page_first relative flex flex-col">
      <div>
        <h2>Updates</h2>
      </div>
    </section>
  );
};

export default PageOne;
