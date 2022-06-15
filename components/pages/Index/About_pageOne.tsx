import React from "react";
import Image from "next/image";
import data from "#/data/index.json";

interface Props {}

const About_pageOne: React.FC<Props> = () => {
  return (
    <section className="flex py-10 min-h-screen flex-col md:flex-row items-center justify-center md:justify-between">
      <div>
        {data.aboutme.map((point, index) => (
          <p
            className="text-gray-100 md:text-xl md:my-4  md:tracking-wider my-3 leading-6 tracking-wide"
            key={index}
          >
            {point}
          </p>
        ))}
      </div>
      <aside className="">
        <Image
          className="rounded-lg "
          src={"/photo.svg"}
          height={"700"}
          width={"350"}
          alt="me"
        />
      </aside>
    </section>
  );
};

export default About_pageOne;
