import React from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { getPostForLeetCode } from "#/misc/github_cms";
import bundleMDX from "#/misc/bundleMDX";
import Post from "#/components/common/Post";

interface ServerData {
  html: string;
  frontmatter: {
    [key: string]: any;
  };
}

const question = ({ html, frontmatter }: ServerData) => {
  return (
    <>
      <Head>
        <title>{frontmatter.name}</title>
      </Head>
      <div className="page_first">
        <Post code={html} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const filename = ctx.params!.question as string;

  let content;
  try {
    content = await getPostForLeetCode(filename);
  } catch {
    return {
      notFound: true,
    };
  }

  const { frontmatter, html } = await bundleMDX(content);

  ctx.res.setHeader("Cache-Control", "max-age=604800, must-revalidate, public");
  return {
    props: {
      html,
      frontmatter,
    },
  };
};

export default question;
