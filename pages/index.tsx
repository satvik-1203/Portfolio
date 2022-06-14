import type { NextPage } from "next";
import Index from "#/components/pages/Index/Index";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Index />
    </>
  );
};

export default Home;
