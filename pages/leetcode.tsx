import React from "react";
import Head from "next/head";
import Leetcode from "#/components/pages/leetcode";
import { GetServerSideProps } from "next";
import { getPostsForLeetCode } from "#/misc/github_cms";
import ICard from "#/interface/ICard";
import hoursToSeconds from "#/misc/hoursToSeconds";

interface ServerData {
  questions: ICard[];
}

const blog = ({ questions }: ServerData) => {
  return (
    <>
      <Head>
        <title>Leetcode</title>
      </Head>
      <div>
        <Leetcode questions={questions} />
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

  const questions = await getPostsForLeetCode();

  return {
    props: {
      questions,
    },
  };
};

export default blog;
