import BlogCard from "#/components/common/BlogCard";
import IBlog from "#/interface/IBlogs";
import React from "react";

interface Props {
  blogs: IBlog[];
}

const Index: React.FC<Props> = ({ blogs }) => {
  return (
    <section className="page_first">
      <h1>Blogs</h1>
      <div className="leetcode_grid mt-8">
        {blogs.map((blog, index) => (
          <BlogCard blog={blog} key={index}></BlogCard>
        ))}
      </div>
    </section>
  );
};

export default Index;
