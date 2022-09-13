import IProjectCard from "#/interface/IProjectCard";
import React from "react";

interface Props {
  data: IProjectCard;
}

const ProjectCard: React.FC<Props> = ({ data }) => {
  const { description, links, title } = data;
  return <div className="bg-gray-800 w-full h-[300px] rounded "></div>;
};

export default ProjectCard;
