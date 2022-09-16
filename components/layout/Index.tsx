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
      <div className={`  py-5  max-w-[1100px] px-5 mx-auto main_child`}>
        {children}
      </div>
    </div>
  );
};

export default Index;
