import React from "react";

interface Props {}

const Intro: React.FC<Props> = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center ">
      <div>
        <h1>
          Hey there, I&apos;m Satvik and this is my space on the internet.
        </h1>
        <div className="w-[80%] text-gray-300">
          <p>I love simplifying problems and teaching people.</p>
          <p>
            Trying to write bi-weekly blogs and daily leetcoding explanation,
            honestly should join my discord if you want to be a part of the
            community and would like to leetcode daily. Scroll down to view more
            about my socials and projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
