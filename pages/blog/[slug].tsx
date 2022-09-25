import Post from "#/components/common/Post";
import bundleMDX from "#/misc/bundleMDX";
import { getBlog } from "#/misc/github_cms";
import { GetServerSideProps } from "next";
import React from "react";
import Head from "next/head";

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

  let content;
  try {
    content = await getBlog(filename);
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

export default slug;
