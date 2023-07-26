import React from "react";
import type { GetStaticProps, NextPage } from "next";
import path from "path";
import { readFile } from "fs/promises";
import bundleMDX from "#/misc/bundleMDX";
import Post from "#/components/common/Post";

const page: NextPage = ({ frontMatter, html }: any) => {
  return (
    <div>
      <Post code={html}></Post>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (process.env.NODE_ENV == "production")
    return {
      notFound: true,
    };

  const filePath = path.join(process.cwd(), "data", "test.md");
  const fileData = await readFile(filePath, { encoding: "utf-8" });
  const { frontmatter, html } = await bundleMDX(fileData);

  return {
    props: {
      frontmatter,
      html,
    },
  };
};

export default page;
