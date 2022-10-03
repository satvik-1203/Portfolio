import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  href: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const NavLink: React.FC<Props> = ({ href, name, active, setActive }) => {
  return (
    <Link href={href}>
      <a
        className={`hover:text-white nav_link ${
          active ? "active text-white" : ""
        }`}
        onClick={() => setActive(name)}
      >
        {name}
        <div className="h-[2px] rounded transition-all bg-purple-700 w-0 duration-300"></div>
      </a>
    </Link>
  );
};

export default NavLink;
