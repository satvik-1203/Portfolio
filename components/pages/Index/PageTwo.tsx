import React from "react";

interface Props {}

const PageTwo: React.FC<Props> = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen">
        <h2 className="">My story</h2>
        <div className="mt-8 leading-6 tracking-wide text-lg text-gray-300 flex flex-col space-y-4">
          <p>
            Joining college with no prior knowledge of coding was really
            intimidating, everyone around me knew how to code while I found
            things un graspable. Simple concepts like loops, methods, parameters
            made no sense to me. Start of second semester, ideas started flowing
            through my brain that kinda motivated me to start coding seriously,
            by the coming weeks, started learning data structures, web dev,
            leetcode. Time passed, adrenaline snowballed and miraculously, coded
            for 13 hours a day, breathing, eating and sleeping code. My dreams
            were just me getting ideas for the projects and leetcode I was
            coding before bed.
          </p>
          <p>
            Months passed, during summer I took up a MERN stack bootcamp, things
            really started stressing out at that point, working on group
            project, learning the core concepts of programming, analyzing
            customer feedbacks, and etc. The work was not for nothing, the next
            semester, I hit a milestone. Made lecture notes for my professor to
            use it in his data structure class with data structure visualizer
            and simplified code and explanation. Also my first Open Source
            Project{" "}
            <a
              href="https://dsvisualizer.isatvik.com"
              className="text-blue-600 underline "
              target={"_blank"}
            >
              Ds-visualizer
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
