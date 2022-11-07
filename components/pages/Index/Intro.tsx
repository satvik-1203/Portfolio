import React from "react";
import Image from "next/image";

interface Props {}

const Intro: React.FC<Props> = () => {
  return (
    <div className=" flex justify-center items-center space-x-4">
      <div>
        <h1>Hey there, I&apos;m Satvik.</h1>
        <div className="w-[80%] text-gray-300">
          <p>I love simplifying problems and sharing my knowledge.</p>
          <p>
            Trying to write bi-weekly blogs and daily leetcoding explanation,
            honestly should join my discord if you want to be a part of the
            community and would like to join my daily leetcode sessions. Scroll
            down to view more about my socials and projects.
          </p>
        </div>
      </div>
      <Image src={"/images/jett1.png"} width="560" height="1473" />
    </div>
  );
};

export default Intro;
