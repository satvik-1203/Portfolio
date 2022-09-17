import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Hamburger } from "#/misc/icons";
import { useRouter } from "next/router";

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
  <Link href={link}>
    <a className="w-full">
      <li
        className={`${className}  cursor-pointer transition-all hover:border-2 border-2  border-transparent hover:text-white hover:border-purple-700 px-3 py-1.5 w-full rounded`}
      >
        {children}
      </li>
    </a>
  </Link>
);

const NavBar: React.FC<Props> = () => {
  const [hover, setHover] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => setHover(false), [pathname]);

  return (
    <nav className="flex justify-end absolute top-10 left-0 right-8 z-10">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className=" flex items-end flex-col"
      >
        <div className="w-8 h-8">
          <Hamburger />
        </div>
        {hover && (
          <div className=" px-4 py bg-gray-900 mt-4 rounded shadow">
            <ul className="  justify-start flex-col gap-4  py-4 text-gray-300 items-start grid grid-cols-2">
              <Li link="/">Home</Li>
              <Li link="/leetcode">Leetcode</Li>
              <Li link="/blog">Blog</Li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
