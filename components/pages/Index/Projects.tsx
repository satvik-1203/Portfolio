import React from "react";
import ProjectCard from "./ProjectCard";

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <div className="min-h-screen">
      <h2>Projects</h2>

      <div className="mt-16 flex flex-col space-y-4">
        <ProjectCard
          data={{ description: [], links: [], title: "Ds-visualizer" }}
        />
        <ProjectCard
          data={{ description: [], links: [], title: "Ds-visualizer" }}
        />
        <ProjectCard
          data={{ description: [], links: [], title: "Ds-visualizer" }}
        />
      </div>
    </div>
  );
};

export default Projects;
