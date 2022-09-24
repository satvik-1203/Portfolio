import React from "react";
import indexData from "#/data/index.json";
import Image from "next/image";
import { motion } from "framer-motion";
import IUpdate from "#/interface/IUpdates";
import Card from "#/components/common/Card";

interface Props {
  updates: [IUpdate, IUpdate];
}

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

const PageOne: React.FC<Props> = ({ updates }) => {
  return (
    <section className="min-h-[80vh] page_first relative flex flex-col">
      <div>
        <h2>Updates</h2>
      </div>

      <div className="mt-8">
        <h3 className="my-4">Leetcodes</h3>
        <div className="leetcode_grid">
          {updates[0].recent.map((card, index) => (
            <Card data={card} key={index} />
          ))}
        </div>
        <h3 className="my-4">Blogs</h3>
        <div className="leetcode_grid">
          {updates[1].recent.map((card, index) => (
            <Card data={card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageOne;
