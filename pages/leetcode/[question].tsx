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
      <Head>
        <title>{frontmatter.name}</title>
        <Metadata
          title={frontmatter.name}
          path={router.pathname}
          image={`http://isatvik.com/api/metaTag?type=leetcode&name=${frontmatter.name}&difficulty=${frontmatter.difficulty}&topics=${frontmatter.topics}`}
          keywords={frontmatter.topics.split(", ")}
        />
      </Head>
      <div className="page_first">
        <Post code={html} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const filename = ctx.params!.question as string;

  const key = `leetcode-${filename}`;

  let content = (await getCache(key)) as string;

  if (!content) {
    try {
      content = await getPostForLeetCode(filename);
    } catch {
      return {
        notFound: true,
      };
    }

    setCache(key, content);
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
