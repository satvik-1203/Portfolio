import React from "react";
import Card from "./Card";

interface Props {}

const showCases = [
  { title: "Resume", link: "/resume.pdf", newPage: true },
  { title: "Projects", link: "#projects", newPage: false },
  { title: "Contacts", link: "#Contacts", newPage: false },
];

const PageTwo: React.FC<Props> = () => {
  return (
    <div className="min-h-screen ">
      <div className="min-h-screen">
        <h2 className="">My story</h2>
        <div className="mt-8 leading-6 tracking-wide text-lg text-gray-300 flex flex-col space-y-4">
          <p>
            Joining college with no prior knowledge of coding was intimidating.
            Everyone around me knew how to code, while I found things
            ungraspable. Simple concepts like loops, methods, and parameters
            made no sense to me. At the beginning of the second semester, ideas
            started flowing through my brain that motivated me to begin coding
            seriously. In the coming weeks, I started learning data structures,
            web dev, and leetcode. Time passed, adrenaline snowballed, and
            miraculously, I ended up coding for 13 hours a day, breathing,
            eating, and sleeping. My sleep dreams were getting ideas for the
            projects and the leetcode solution I did before bed.
          </p>
          <p>
            Months passed, and during the summer, I took up a MERN stack
            Bootcamp. Things started stressing out at that point, working on
            group projects, learning the core programming concepts, analyzing
            customer feedback, etc. The work was not for nothing, the next
            semester, and I hit a milestone. I made lecture notes for my
            professor to use in his data structure class with a data structure
            visualizer and simplified code and explanation. Also, my first Open
            Source Project, 70+ PRs, 100+ commits, 10+ git likes, and 5 forks{" "}
            <a
              href="https://dsvisualizer.isatvik.com"
              className="text-blue-600 underline "
              target={"_blank"}
              rel="noreferrer"
            >
              Ds-visualizer
            </a>
            .
          </p>
        </div>
        <section>
          <div className="leetcode_grid mt-8 px-8">
            {showCases.map((data, index) => (
              <Card data={data} key={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageTwo;
