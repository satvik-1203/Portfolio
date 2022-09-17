import { useRouter } from "next/router";
import React from "react";
import NavBar from "./NavBar";

interface Props {}

const Index: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <div className={` relative py-5  max-w-[1100px] px-5 mx-auto main_child`}>
      <NavBar></NavBar>
      {children}
    </div>
  );
};

export default Index;
