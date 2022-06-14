import Card from "#/components/common/Card";
import React from "react";
import { motion } from "framer-motion";
import { useCardAnimation } from "#/hooks/useCardAnimation";
import About from "./About";

interface Props {}

const cardAnimation = {
  initial: { scale: 0.3, transition: { duration: 0.9, ease: "easeOut" } },
  animate: { scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

const cardMomentAnimation = {
  initial: { x: "-100%", transition: { duration: 0.9, ease: "easeOut" } },
  animate: { x: "0", transition: { duration: 0.9, ease: "easeOut" } },
};

const PageTwo: React.FC<Props> = () => {
  const [elementOne, controlOne] = useCardAnimation();
  const [elementTwo, controlTwo] = useCardAnimation();

  return (
    <section
      id="sectionTwo"
      className=" max-w-[1200px] mx-auto min-h-screen py-10 flex flex-col items-center space-y-7"
    >
      <div className="w-full overflow-hidden">
        <motion.div
          ref={elementOne as any}
          variants={cardAnimation}
          animate={controlOne as any}
          className=" flex flex-col justify-center items-center space-y-7 md:flex-row md:space-y-0 md:space-x-3"
        >
          <Card
            content="About Me"
            className="bg-teal-900 md:w-1/2"
            link="/about"
            pageContent={<About />}
          />
          <Card
            content="Ds-visualizer "
            className="bg-slate-700 md:max-w-none"
            link="/dsvisualizer"
          />
        </motion.div>
      </div>
      <div className="w-full overflow-hidden" ref={elementTwo as any}>
        <motion.div
          variants={cardMomentAnimation}
          animate={controlTwo as any}
          className=" flex flex-col justify-center items-center space-y-7 md:flex-row md:space-y-0 md:space-x-3"
        >
          <Card
            content="Resume"
            className="bg-slate-700 md:max-w-none"
            link="/resume.pdf"
            external={true}
          />
          <Card
            content="Software Intern"
            className="bg-teal-900 md:max-w-none "
            link="/wayfinder"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PageTwo;
