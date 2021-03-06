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
      className=" min-h-screen text-3xl pt-16 sm:w-2/3"
    >
      <div className="content flex flex-col justify-center items-center">
        <h1 className="text-white  mb-2 text-4xl sm:text-6xl font-bold">
          {" "}
          About Me
        </h1>
        <div className=" w-9/12 h-1 bg-purple-700 "></div>
      </div>
      <main className="pt-10 px-10">
        <section className="mt-6 sm:mt-10">
          <h2 className="text-white text-2xl sm:text-4xl">whoami</h2>
          <p className="text-xs text-primary mt-1 sm:text-base sm:mt-3">
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
        <section className="mt-6 sm:mt-10">
          <h2 className="text-white text-2xl sm:text-4xl">My experience?</h2>
          <p className="aboutP">
            I’ve started coding in February of 2021 due to the boredom in
            Covid-19 I suppose? HAHA. In my journey I started with Java, for
            about a month or two, I went over the basics of java, object
            oriented programing, and data structures. While I was learning these
            I have also solved algorithm problems on Algoexpert and HackerRank
            to improve my algorithmic thinking. In the mid of march I took an
            interest in javascript and web development and this is where I’m
            now.
          </p>
          <p className="aboutP">
            From march till september I have learnt JavaScript core basics such
            as event loop, async await, JS in DOM, CLI programing and ES6. Then
            core concepts of React JS. this includes understanding of virtual
            DOM, state, props, children, re-render, hot reload, react tree, how
            the tree is presented in the JSON object, how react tracks state
            changes, how it sends data between virtual DOM and window DOM. Then
            I hopped on to integrating Redux in my application. At this point I
            thought I needed to make my own APIs so started NodeJS,expressJS and
            mongoDB as my database. As time went on I started getting headaches
            with the way JavaScript behaves so I started using TypeScript in my
            applications. At first it felt tough but I realized it would be
            worth since JavaScript gives me goosebumps in huge projects haha.
            Then soon after a month TS became my go-to language :).
          </p>
        </section>
      </main>
    </motion.section>
  );
};

export default AboutMe;
