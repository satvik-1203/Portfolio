import { motion } from "framer-motion";
import React from "react";
import ProjectMain from "../components/Projects/ProjectMain";
import { Progress } from "../misc/icons";
import { pageAnimation } from "../misc/pageAnimation";

const Projects = () => {
  return (
    <motion.main
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative"
    >
      <ProjectMain />
      <div className="fixed left-4 bottom-4">
        <Progress />
      </div>
    </motion.main>
  );
};

export default Projects;
