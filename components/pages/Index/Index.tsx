import React, { createContext, useState } from "react";
import PageOne from "./PageOne";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { usePageFade, fade } from "#/hooks/usePageFade";
import PageTwo from "./PageTwo";
import Projects from "./Projects";
import IUpdate from "#/interface/IUpdates";

interface Props {
  updates: [IUpdate, IUpdate];
}

export const IndexPageContext = createContext({} as any);

const Index: React.FC<Props> = ({ updates }) => {
  const [elementOne, controlsOne] = usePageFade();
  const [content, setContent] = useState({ state: false, content: <></> });

  return (
    <IndexPageContext.Provider value={{ content, setContent }}>
      <section className="relative  px-3">
        <motion.div
          ref={elementOne as any}
          variants={fade}
          animate={controlsOne as any}
          className=""
        >
          <PageOne updates={updates} />
        </motion.div>
        <div className="top_space" id="about">
          <PageTwo />
        </div>
        <div className="top_space" id="projects">
          <Projects />
        </div>
      </section>
    </IndexPageContext.Provider>
    // <div className="text-white min-h-screen">
    //   <div className="flex mt-16 ">
    //     <h1 className="text-4xl ">Namaste,</h1>
    //     <p className="mt-12 -ml-6 text-lg leading-5 tracking-wide text-gray-300">
    //       This is a place dedicated to myself in the world of internet, to share
    //       my thoughts, codes and daily leetcoding.
    //     </p>
    //   </div>
    // </div>
  );
};

export default Index;
