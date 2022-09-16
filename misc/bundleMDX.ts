import rehypeCodeTitles from "rehype-code-titles";
import rehypeImagePlaceholder from "rehype-image-placeholder";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import remarkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkSmartypants from "@silvenon/remark-smartypants";
import remarkTableofContents from "remark-toc";
import remarkUnwrapImages from "remark-unwrap-images";
import type { ProcessorOptions } from "@mdx-js/esbuild/lib";
import { bundleMDX as bundler } from "mdx-bundler";

const bundleMDX = async (content: string) => {
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

  const { code, frontmatter } = await bundler({
    source: content,
    ...options,
  });

  return { html: code, frontmatter };
};

export default bundleMDX;
