import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {}

const Index: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <div
      className={`min-h-screen relative py-5  max-w-[1100px] px-5 mx-auto main_child`}
    >
      <Navbar />
      <div className="">{children}</div>
      <div className="h-20"></div>
      <Footer />
    </div>
  );
};

export default Index;
