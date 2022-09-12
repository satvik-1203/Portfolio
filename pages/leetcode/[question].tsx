import React from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { readFile, readdir } from "fs/promises";
import Post from "#/components/common/Post";

import { BundleMDXOptions } from "mdx-bundler/dist/types";
import { bundleMDX } from "mdx-bundler";
import type { ProcessorOptions } from "@mdx-js/esbuild/lib";

// mdx plugins
import rehypeCodeTitles from "rehype-code-titles";
import rehypeImagePlaceholder from "rehype-image-placeholder";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import remarkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkSmartypants from "@silvenon/remark-smartypants";
import remarkTableofContents from "remark-toc";
import remarkUnwrapImages from "remark-unwrap-images";

interface pageProps {
  code: string;
  frontmatter: {
    [key: string]: any;
  };
}

const question = ({ code, frontmatter }: pageProps) => {
  return (
    <>
      <Head>
        <title>{frontmatter.name}</title>
      </Head>
      <div>
        <Post code={code} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const filename = ctx.params!.question + ".md";
  const files = await readdir("leetcode", "utf-8");
  if (!files.includes(filename))
    return {
      notFound: true,
    };

  const options = {
    mdxOptions(options: ProcessorOptions) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // github flavored markdown
        remarkGfm,
        // add id to headings
        remarkHeadings,
        // add links to headings
        remarkSlug,
        // smart typographic punctuation like real quotes
        remarkSmartypants,
        // generates table of contents from headings
        // `tight` removes <p> from <li> when nested
        [remarkTableofContents, { tight: true }],
        // remove paragraph around images
        remarkUnwrapImages,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        // title for code blocks (has to come before `rehypePrism`)
        rehypeCodeTitles,
        // syntax highlight
        rehypePrism,
        // image dimensions and placeholder
        [rehypeImagePlaceholder, { dir: "public" }],
      ];
      return options;
    },
  };

  // const mdxSource = await serialize(content, {
  //   mdxOptions: {
  //     rehypePlugins: [],
  //     remarkPlugins: [slug, headings, codeTitle, unwrapImages],
  //   },
  // });
  const filePath = process.cwd() + "/leetcode/" + filename;

  const { code, frontmatter } = await bundleMDX({
    file: filePath,
    ...options,
  });

  ctx.res.setHeader("Cache-Control", "max-age=604800, must-revalidate, public");
  return {
    props: {
      code,
      frontmatter,
    },
  };
};

export default question;
