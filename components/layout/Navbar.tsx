import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Hamburger } from "#/misc/icons";
import NavLink from "./NavLink";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const links: Record<string, string> = {
  Leetcode: "/leetcode",
  Blog: "/blog",
};

const Navbar: React.FC<Props> = () => {
  const [active, setActive] = useState("");
  const router = useRouter();

  useEffect(() => {
    const pathname = router.pathname;
    let pageName = pathname.split("/")[1];
    if (pageName) {
      pageName = pageName[0].toUpperCase() + pageName.slice(1);
      setActive(pageName);
    }
  }, [router.pathname]);

  return (
    <div className="px-4 py-2 flex justify-between items-center">
      <div className="flex space-x-4  items-center">
        <Link href={"/"}>
          <a onClick={() => setActive("")}>
            <Image src={"/favicon.ico"} height={40} width={40} />
          </a>
        </Link>
        <ul className="text-white flex space-x-4 text-lg h-full">
          {Object.keys(links).map((key) => (
            <li key={key} className="h-full">
              <NavLink name={key} href={links[key]} active={active == key} />
            </li>
          ))}
        </ul>
      </div>
      <div className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>
  );
};

const MobileBar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={`${show ? "navbar_show" : "navbar_hidden"} z-10 px-4 py-4`}>
      <div className="flex justify-end items-center">
        <div className="w-8 h-8 z-10 " onClick={() => setShow(!show)}>
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
