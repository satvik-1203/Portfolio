import React from "react";
import About_pageOne from "./About_pageOne";
import About_pageTwo from "./About_pageTwo";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div className="">
      <About_pageOne />
      <About_pageTwo />
    </div>
  );
};

export default About;
