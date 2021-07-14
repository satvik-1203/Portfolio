import React from "react";
import ProjectMain from "../components/Projects/ProjectMain";
import { Progress } from "../misc/icons";

const Projects = () => {
  return (
    <main className="relative">
      <ProjectMain />
      <div className="fixed left-4 bottom-4">
        <Progress />
      </div>
    </main>
  );
};

export default Projects;
