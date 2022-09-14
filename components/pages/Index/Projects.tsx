import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "#/data/projects.json";

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <div className="min-h-screen">
      <h2>Projects</h2>

      <div className="mt-16 projects_container">
        <AnimateSharedLayout>
          {projects.map((data, index) => (
            <ProjectCard data={data} key={index} />
          ))}
        </AnimateSharedLayout>
        {/* <div className="bg-gray-800 h-[300px] rounded">test 3</div> */}
      </div>
    </div>
  );
};

export default Projects;
