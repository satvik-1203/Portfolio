import IProjectCard from "#/interface/IProjectCard";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface Props {
  data: IProjectCard;
}

const ProjectCard: React.FC<Props> = ({ data }) => {
  const [show, setShow] = useState(false);
  const { description, links, title } = data;
  return (
    <motion.div
      className={`${
        show ? "row-span-3" : ""
      } rounded px-4 outline-2 outline-purple-700 hover:outline bg-gray-900`}
      layout
    >
      <motion.div
        onClick={() => setShow(!show)}
        className={` ${show ? "h-[250px]" : ""}   cursor-pointer 
        `}
        layout
      >
        <motion.div
          layout
          className="h-[100px] flex items-center text-xl text-gray-100 "
        >
          {title}
        </motion.div>
        {show && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.3,
              },
            }}
          >
            <ul>
              {description.map((point, index) => (
                <li className="mt-2 text-gray-300" key={index}>
                  {point.endsWith(".") ? point : point + "."}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
      {show && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          }}
          className="h-[50px] flex items-center space-x-4 text-gray-300 justify-end "
        >
          {links.map((link, index) => (
            <motion.a
              target={"_blank"}
              rel="noreferrer"
              className=" px-4 py-2 outline-2 outline outline-purple-700 rounded transition-all duration-300 hover:bg-purple-700"
              key={index}
              href={link.link}
              // whileHover={{
              //   scale: 1.1,
              //   transition: {
              //     duration: 0.2,
              //   },
              // }}
            >
              {link.title}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
