import Link from "next/link";
import React from "react";

interface Props {}

const Li = ({
  children,
  className,
  link,
}: {
  children: React.ReactNode;
  className?: string;
  link: string;
}) => (
  <li className={`${className} hover:text-white cursor-pointer transition-all`}>
    <Link href={link}>
      <a>{children}</a>
    </Link>
  </li>
);

const NavBar: React.FC<Props> = () => {
  return (
    <nav className="z-10 backdrop-blur-md fixed top-0 left-0 right-0 flex justify-center items-center">
      <ul className=" flex justify-center text-gray-300 space-x-7 text-xl py-4 items-center">
        <Li link="/contact">Contact</Li>
        <Li link="/" className="text-3xl ">
          Satvik
        </Li>
        <Li link="/leetcode">Leetcode</Li>
      </ul>
    </nav>
  );
};

export default NavBar;
