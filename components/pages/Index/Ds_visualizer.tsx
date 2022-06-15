import React from "react";
import data from "#/data/index.json";
import Image from "next/image";

interface Props {}

const Ds_visualizer: React.FC<Props> = () => {
  return (
    <>
      <section className="flex space-x-3  py-10 min-h-screen flex-col md:flex-row items-center justify-center md:justify-between">
        <div>
          {data.dsVisualizer.map((content, index) => (
            <p
              className="text-gray-100 md:text-xl md:my-4  md:tracking-wider my-3 leading-6 tracking-wide"
              key={index}
            >
              {content}
            </p>
          ))}
        </div>
        <div></div>
        <div className="fixed  top-11 left-0 right-0 px-10 md:px-16">
          <div className="max-w-[1200px]  px-10  mx-auto flex space-x-10 py-5 -z-10">
            {Object.keys(data.dsVisualizerLinks).map((key) => (
              <div key={key} className=" ">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-all"
                  /* @ts-ignore */
                  href={data.dsVisualizerLinks[key]}
                >
                  {key}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="">
        <div className="h-[80vh]">
          <iframe
            src="https://dsvisualizer.isatvik.com/"
            frameBorder="0"
            width="100%"
            height="80%"
            className="rounded border-2 border-gray-400 "
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Ds_visualizer;
