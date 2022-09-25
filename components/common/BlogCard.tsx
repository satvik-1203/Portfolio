import IBlog from "#/interface/IBlogs";
import Link from "next/link";
import React from "react";

interface Props {
  blog: IBlog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.url}`}>
      <div
        className={` bg-gray-900 w-full h-[120px] cursor-pointer rounded-sm transition-transform duration-[400ms] transform origin-top-left hover:-translate-y-4 hover:-translate-x-2 shadow hover:outline outline-2 hover:outline-purple-700 `}
      >
        <div className="h-full w-full flex flex-col justify-end items-end py-4 px-5">
          <h4 className=" text-lg text-gray-100 text-right">{blog.name}</h4>
          <p className="text-sm mt-1 text-gray-300 text-right">
            {blog.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
