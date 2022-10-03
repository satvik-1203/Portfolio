import type { GetServerSideProps, NextPage } from "next";
import Index from "#/components/pages/Index/Index";
import Head from "next/head";
import { getBlogs, getPostsForLeetCode } from "#/misc/github_cms";
import hoursToSeconds from "#/misc/hoursToSeconds";

const Home = ({ updates }: { updates: any }) => {
  return (
    <>
      <Head>
        <title>Satvik</title>
      </Head>
      <Index updates={updates} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    "Cache-Control",
    // 28 represents the hours
    `max-age=${hoursToSeconds(8)}, must-revalidate, public`
  );

  const posts = await getPostsForLeetCode();
  const blogs = await getBlogs();

  return {
    props: {
      updates: [
        {
          type: "leetcode",
          recent: posts.slice(0, 3),
        },
        {
          type: "blog",
          recent: blogs.slice(0, 3),
        },
      ],
    },
  };
};

export default Home;
