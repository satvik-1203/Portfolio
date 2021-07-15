import React from "react";
import projectsJson from "./Projects.json";

export interface IProjectsJson {
  id: number;
  name: string;
  language: string;
  description: string[];
  link: string;
}

const ProjectMain = () => {
  return (
    <div className="min-h-screen pt-[6.5rem] px-10  bg-blackBg">
      <div className="headingContainer flex justify-center flex-col items-center">
        <h1 className="text-4xl mb-2 text-white">My Projects</h1>
        <div className=" h-1 bg-purple-700 rounded-full w-full"></div>
      </div>
    </div>
  );
};

export default ProjectMain;
