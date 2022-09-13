import { NextComponentType, NextPageContext } from "next";
import { useRouter } from "next/router";
import React from "react";
import NavBar from "./NavBar";

interface Props {}

const Index: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <div className="">
      <NavBar></NavBar>
      <div
        className={`   mt-32 py-5 ${
          pathname != "/" ? "max-w-[1100px] px-5 mx-auto  " : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Index;
