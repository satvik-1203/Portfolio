// React and Next
import React from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";

// Content related

import { getPostForLeetCode } from "#/misc/github_cms";
import bundleMDX from "#/misc/bundleMDX";
import Post from "#/components/common/Post";

// Redis and cache

import { getCache, setCache } from "#/misc/redis";
import hoursToSeconds from "#/misc/hoursToSeconds";
import Metadata from "#/misc/MetaData";
import { useRouter } from "next/router";

interface ServerData {
  html: string;
  frontmatter: {
    [key: string]: any;
  };
}

const Question = ({ html, frontmatter }: ServerData) => {
  const router = useRouter();
  return (
    <>
      <Metadata
        title={frontmatter.name}
        path={router.asPath}
        image={`https://isatvik.com/api/metaTag?type=leetcode&name=${frontmatter.name}&difficulty=${frontmatter.difficulty}&topics=${frontmatter.topics}`.replaceAll(
          " ",
          "%20"
        )}
        keywords={frontmatter.topics.split(", ")}
      />
      <div className="page_first">
        <Post code={html} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const filename = ctx.params!.question as string;

  let content = await getPostForLeetCode(filename);

  if (!content) {
    return {
      notFound: true,
    };
  }

  const { frontmatter, html } = await bundleMDX(content);

  ctx.res.setHeader(
    "Cache-Control",
    `max-age=${hoursToSeconds(8)}, must-revalidate, public`
  );

  return {
    props: {
      html,
      frontmatter,
    },
  };
};

export default Question;
