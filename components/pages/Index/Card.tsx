import IIndexCard from "#/interface/IIndexCard";
import Link from "next/link";
import React from "react";

interface Props {
  data: IIndexCard;
}
const Card: React.FC<Props> = ({ data }) => {
  const { newPage } = data;
  return (
    <Link href={data.link}>
      <a target={newPage ? "_blank" : ""} rel={newPage ? "noreferrer" : ""}>
        <div
          className={` bg-gray-900 w-full flex h-[120px] cursor-pointer rounded-sm transition-transform duration-[400ms] transform origin-top-left hover:-translate-y-4 hover:-translate-x-2 shadow hover:outline hover:outline-white `}
        >
          <div className="flex h-full items-center px-3"></div>
          <div className="h-full w-full flex flex-col justify-end items-end py-4 px-5">
            <h4 className=" text-lg text-gray-100 text-right">{data.title}</h4>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
