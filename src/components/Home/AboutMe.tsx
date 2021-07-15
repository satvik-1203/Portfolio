import React from "react";
import { motion } from "framer-motion";
import { usePageFade, fade } from "../../hooks/usePageFade";

const AboutMe = () => {
  const [element, controls] = usePageFade();
  return (
    <motion.section
      ref={element as any}
      variants={fade}
      animate={controls as any}
      className=" min-h-screen text-3xl pt-16 "
    >
      <div className="content flex flex-col justify-center items-center">
        <h1 className="text-white  mb-2 text-4xl"> About Me</h1>
        <div className=" w-9/12 h-1 bg-purple-700 "></div>
      </div>
      <main className="pt-10 px-10">
        <section className="mt-6">
          <h2 className="text-white text-2xl">whoami</h2>
          <p className="text-xs text-primary mt-1">
            I’m currently a sophomore in{" "}
            <span className="font-cMono font-bold text-gray-100">
              Georgia State University (GSU)
            </span>{" "}
            majoring in computer science, I have also taken up a Bootcamp with{" "}
            <span className="font-cMono font-bold text-gray-100">
              The Hacking School (THS)
            </span>{" "}
            in march of 2021 which was on MERN stack.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-white text-2xl">My experience?</h2>
          <p className="text-xs text-primary mt-1">
            I’ve started coding in February of 2021 due to the boredom in
            Covid-19 I suppose? HAHA. In my journey I started with Java, for
            about a month or two, I went over the basics of java, object
            oriented programing, and data structures. While I was learning these
            I have also solved algorithm problems on Algoexpert and HackerRank
            to improve my algorithmic thinking. In the mid of march I took an
            interest in javascript and web development and this is where I’m
            now.
          </p>
        </section>
      </main>
    </motion.section>
  );
};

export default AboutMe;
