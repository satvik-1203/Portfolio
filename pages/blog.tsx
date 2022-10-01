import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getBlogs } from "#/misc/github_cms";
import IBlog from "#/interface/IBlogs";
import Blog from "#/components/pages/blog";
import hoursToSeconds from "#/misc/hoursToSeconds";

const about = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div>
        <Blog blogs={blogs} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    "Cache-Control",
    // 28 represents the hours
    `max-age=${hoursToSeconds(8)}, must-revalidate, public`
  );

  const blogs = await getBlogs();

  return {
    props: {
      blogs,
    },
  };
};

export default about;
