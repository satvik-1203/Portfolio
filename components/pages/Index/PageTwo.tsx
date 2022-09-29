import React from "react";
import Card from "./Card";

interface Props {}

const showCases = [
  { title: "Resume", link: "/resume.pdf", newPage: true },
  { title: "Projects", link: "#projects", newPage: false },
  { title: "Contacts", link: "#contacts", newPage: false },
];

const PageTwo: React.FC<Props> = () => {
  return (
    <section className="min-h-[80vh]">
      <h2 className="">My story</h2>
      <div className="mt-8 leading-6 tracking-wide text-lg text-gray-300 flex flex-col space-y-4">
        <p>
          Joining college with no prior knowledge of coding was intimidating.
          Everyone around me knew how to code, while I found things ungraspable.
          Simple concepts like loops, methods, and parameters made no sense to
          me. At the beginning of the second semester, ideas started flowing
          through my brain that motivated me to begin coding seriously. In the
          coming weeks, I started learning data structures, web dev, and
          leetcode. Soon after, all I could remember was coding day and night.
        </p>
        <p>
          Months passed, and during the summer, I took up a MERN stack Bootcamp.
          Things started stressing out at that point, working on group projects,
          learning the core programming concepts, analyzing customer feedback,
          etc. The next semester I hit milestone. Made my biggest project{" "}
          <a
            className="text-blue-600 underline "
            target={"_blank"}
            rel="noreferrer"
          >
            Ds-visualizer
          </a>{" "}
          worked on it from August to December of 2022. Open sourced the code,
          sponsored by vercel and 100+ PRs.
        </p>
      </div>
      <section>
        <div className="leetcode_grid mt-8">
          {showCases.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default PageTwo;
