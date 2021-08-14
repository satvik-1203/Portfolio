import React from "react";
import { motion } from "framer-motion";
import { usePageFade, fade } from "../../hooks/usePageFade";
import skills from "./Skills.json";
import SkillOption from "./SkillOption";

const Skills = () => {
  const [element, controls] = usePageFade();
  return (
    <motion.section
      ref={element as any}
      variants={fade}
      animate={controls as any}
      className=" min-h-screen  pt-16 pb-10 sm:w-2/3"
    >
      <div className="content flex flex-col justify-center items-center">
        <h1 className="text-white  mb-2 text-4xl sm:text-6xl font-bold ">
          Skills
        </h1>
        <div className=" w-9/12 h-1 bg-purple-700 "></div>
      </div>
      <main className="pt-10 px-10">
        {skills.map((skill) => (
          <SkillOption key={skill.id} skillOption={skill} /> // unique key props problem? idk why, need to check this again some time later
        ))}
      </main>
    </motion.section>
  );
};

export default Skills;
