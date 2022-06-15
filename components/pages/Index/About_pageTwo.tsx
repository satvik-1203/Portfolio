import React from "react";
import data from "#/data/index.json";

interface Props {}

const About_pageTwo: React.FC<Props> = () => {
  const socials = data.socials;
  return (
    <section className="flex py-10 min-h-screen space-x-8 flex-col md:flex-row items-center justify-center md:justify-between">
      <div>
        {Object.keys(socials).map((key) => (
          <p
            className="text-white md:text-xl md:my-4 md:leading-7 md:tracking-wider my-3 leading-6 tracking-wide"
            key={key}
          >
            <span className="">{key}</span>:
            <a
              target="_blank"
              rel="noreferrer"
              /* @ts-ignore */
              href={socials[key].split(", ")[1]}
            >
              <span className=" text-gray-300 hover:text-gray-100 transition-all cursor-pointer hover:border-b border-b-slate-300">
                {" "}
                {/* @ts-ignore */}
                {socials[key].split(", ")[0]}
              </span>
            </a>
          </p>
        ))}
      </div>
    </section>
  );
};

export default About_pageTwo;
