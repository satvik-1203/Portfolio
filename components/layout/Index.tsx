import { NextComponentType, NextPageContext } from "next";
import React from "react";
import NavBar from "./NavBar";

interface Props {}

const Index: React.FC<Props> = ({ children }) => {
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="max-w-[1100px] mx-auto py-5 px-5 mt-32">{children}</div>
    </div>
  );
};

export default Index;
