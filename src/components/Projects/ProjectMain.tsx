import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import ProjectDescription from "./ProjectDescription";
import projectsJson from "./Projects.json";

export interface IProjectsJson {
  id: number;
  name: string;
  language: string;
  description: string[];
  github?: string;
  domain?: string;
}

const ProjectMain = () => {
  return (
    <div className=" bg-blackBg flex justify-center flex-col items-center">
      <div className=" min-h-screen  py-[6.5rem] px-10 sm:w-2/3 ">
        <div className="content flex flex-col justify-center  items-center">
          <h1 className="text-white  mb-2 text-4xl sm:text-6xl font-bold ">
            Projects
          </h1>
          <div className=" w-9/12 h-1 bg-purple-700 "></div>
        </div>
        <AnimateSharedLayout>
          <motion.div
            layout
            className="lg:flex lg:justify-center lg:flex-col lg:items-center"
          >
            {projectsJson.map((project, index) => (
              <ProjectDescription key={index} project={project} />
            ))}
          </motion.div>
        </AnimateSharedLayout>
      </div>
    </div>
  );
};

export default ProjectMain;
