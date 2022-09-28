import ICard from "#/interface/ICard";
import Link from "next/link";
import React from "react";

interface Props {
  data: ICard;
}

const Card: React.FC<Props> = ({ data }) => {
  const getDifficultyColor = (type: string) => {
    if (type == "easy") return "bg-green-600";
    if (type == "medium") return "bg-yellow-600";
    if (type == "hard") return "bg-red-600";
  };
  return (
    <Link href={"/leetcode/" + data.link || ""}>
      <a>
        <div
          className={` bg-gray-900 w-full flex h-[120px] cursor-pointer rounded-sm transition-transform duration-[400ms] transform origin-top-left hover:-translate-y-4 hover:-translate-x-2 shadow hover:outline outline-2 hover:outline-purple-700 `}
        >
          <div className="flex h-full items-center px-3">
            <div
              className={`w-[30px] h-[30px] ${getDifficultyColor(
                data.difficulty
              )} rounded-full outline border-white`}
            ></div>
          </div>
          <div className="h-full w-full flex flex-col justify-end items-end py-4 px-5">
            <h4 className=" text-lg text-gray-100 text-right">{data.name}</h4>
            <p className="text-sm mt-1 text-gray-300 text-right">
              {data.topics}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
