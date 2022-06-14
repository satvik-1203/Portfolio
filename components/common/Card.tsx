import React, { useContext } from "react";
import { IndexPageContext } from "../pages/Index/Index";

interface Props {
  content: string;
  className: string;
  link: string;
  external?: boolean;
  pageContent?: React.ReactNode;
}

const Card: React.FC<Props> = ({
  content,
  className,
  link,
  external,
  pageContent,
}) => {
  const { setContent } = useContext(IndexPageContext);

  return (
    <>
      <div
        className={`h-[347px] flex flex-col items-end justify-between max-w-[386px] px-5 py-3 rounded-xl w-full lg:px-10 lg:py-8 ${className} 
      `}
      >
        {external ? (
          <a href={link} target="_blank" rel="noreferrer">
            <div className="p-2 w-fit cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 scale-125 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </a>
        ) : (
          <div
            onClick={() => setContent({ state: true, content: pageContent })}
            className="p-2 w-fit cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 scale-125 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
        <p className="text-3xl text-gray-100 opacity-70">{content}</p>
      </div>
    </>
  );
};

export default Card;
