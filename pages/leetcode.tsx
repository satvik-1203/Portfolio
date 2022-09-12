import React from "react";
import Head from "next/head";
import Leetcode from "#/components/pages/leetcode";

const blog = () => {
  return (
    <>
      <Head>
        <title>Leetcode</title>
      </Head>
      <div>
        <Leetcode />
      </div>
    </>
  );
};

export default blog;
