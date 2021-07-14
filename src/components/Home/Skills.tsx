import React from "react";
import { motion } from "framer-motion";
import { usePageFade, fade } from "../../hooks/usePageFade";

const Skills = () => {
  const [element, controls] = usePageFade();
  return (
    <motion.section
      ref={element as any}
      variants={fade}
      animate={controls as any}
      className=" min-h-screen text-3xl pt-16 pb-10"
    >
      <div className="content flex flex-col justify-center items-center">
        <h1 className="text-white  mb-2 text-4xl ">Skills</h1>
        <div className=" w-9/12 h-1 bg-purple-700 "></div>
      </div>
      <main className="pt-10 px-10">
        <section>
          <h2 className="text-white text-2xl">Strengths</h2>
          <div className="text-xs text-primary mt-1">
            <ul className="list-inside list-disc">
              <li>Fast Learner</li>
              <li>Leadership</li>
              <li>Helper</li>
            </ul>
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-white text-2xl">Languages</h2>
          <div className="text-xs text-primary mt-1">
            <ul className="list-inside list-disc">
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Java</li>
            </ul>
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-white text-2xl">Frameworks / Libraries</h2>
          <div className="text-xs text-primary mt-1">
            <ul className="list-inside list-disc">
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>Tailwind-CSS</li>
            </ul>
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-white text-2xl">Databases</h2>
          <div className="text-xs text-primary mt-1">
            <ul className="list-inside list-disc">
              <li>MongoDB</li>
            </ul>
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-white text-2xl">Tools</h2>
          <div className="text-xs text-primary mt-1">
            <ul className="list-inside list-disc">
              <li>Vim</li>
              <li>VS code</li>
              <li>Intellij</li>
              <li>Git &#38; GitHub</li>
              <li>Figma</li>
            </ul>
          </div>
        </section>
      </main>
    </motion.section>
  );
};

export default Skills;
