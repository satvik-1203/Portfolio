import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  project: {
    id: number;
    name: string;
    language: string;
    description: string[];
    github?: string;
    domain?: string;
  };
}

const ProjectDescription: React.FC<Props> = ({ project }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const { name, description, domain, github, language, id } = project;

  return (
    <motion.section
      layout
      className="mt-6 sm:mt-10 cursor-pointer select-none rounded-lg shadow-3xl  p-4 lg:w-3/4 border-gray-700 border-2"
    >
      <motion.div layout onClick={() => setOpen((prev) => !prev)}>
        <h2 className="text-white text-2xl sm:text-4xl">{name}</h2>
        <h3 className="text-xs sm:text-base text-gray-300">{language}</h3>
      </motion.div>
      <motion.div className="text-xs text-primary mt-1 sm:mt-3 sm:text-base">
        <AnimatePresence>
          {open && (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.ul className="list-outside  list-disc my-2">
                {description.map((option, index) => (
                  <li key={index} className="mb-1 ml-4 select-text cursor-text">
                    {option}
                  </li>
                ))}
              </motion.ul>
              {github && (
                <a href={github} target="_blank">
                  <button className="border-2 rounded-md duration-500 text-white px-2 py-1 mt-3 border-purple-700 hover:bg-purple-600 transition-all hover:scale-90 transform">
                    Click here for Github Link
                  </button>
                </a>
              )}
              {domain && (
                <a href={domain} target="_blank">
                  <button className="border-2 lg:ml-4 rounded-md duration-500 text-white px-2 py-1 mt-3 border-purple-700 hover:bg-purple-600 transition-all hover:scale-90 transform">
                    Click here for Domain Link
                  </button>
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layout
          onClick={() => setOpen((prev) => !prev)}
          className="text-white text-xs text-right"
        >
          {open ? "Show less" : "Click for more "}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectDescription;
