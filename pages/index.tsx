import type { GetServerSideProps, NextPage } from "next";
import Index from "#/components/pages/Index/Index";
import Head from "next/head";
import updates from "#/data/updates.json";
import { getPostsForLeetCode } from "#/misc/github_cms";

const Home = ({ updates }: { updates: any }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Index updates={updates} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    "Cache-Control",
    // 28 represents the hours
    `max-age=${28 * 3600}, must-revalidate, public`
  );

  const posts = await getPostsForLeetCode();

  return {
    props: {
      updates: [
        {
          type: "leetcode",
          recent: posts.slice(0, 3),
        },
        {
          type: "blog",
          recent: [],
        },
      ],
    },
  };
};

export default Home;
