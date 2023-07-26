// Next and React

import { GetServerSideProps } from "next";
import React from "react";
import Head from "next/head";

// Content related

import Post from "#/components/common/Post";
import bundleMDX from "#/misc/bundleMDX";
import { getBlog } from "#/misc/github_cms";

// Redis and cache

import hoursToSeconds from "#/misc/hoursToSeconds";
import { getCache, setCache } from "#/misc/redis";

interface Props {
  frontmatter: Record<string, string>;
  html: string;
}

const slug = ({ frontmatter, html }: Props) => {
  return (
    <>
      <Head>
        <title>{frontmatter.name}</title>
      </Head>
      <div className="">
        <div className="page_first">
          <Post code={html} />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const filename = ctx.params!.slug as string;

  let content = await getBlog(filename);

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

export default slug;
