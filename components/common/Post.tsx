import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import NextImage from "./NextImage";

interface Props {
  code: string;
}

const Post: React.FC<Props> = ({ code }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className="solution">
      <Component
        components={
          {
            img: NextImage,
          } as any
        }
      />
    </div>
  );
};

export default Post;
