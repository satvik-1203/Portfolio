import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  href: string;
  active: boolean;
}

const NavLink: React.FC<Props> = ({ href, name, active }) => {
  return (
    <Link href={href}>
      <a
        className={`hover:text-white hover:bg-gray-600 h-full px-2 py-2 hover:bg-opacity-40 rounded transition-all  ${
          active ? " text-white bg-gray-500 bg-opacity-40" : ""
        }`}
      >
        {name}
      </a>
    </Link>
  );
};

export default NavLink;
