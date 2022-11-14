import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import { useRouter } from "next/router";
import Settings from "./Settings";

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
      <Settings />
    </div>
  );
};

export default Navbar;
