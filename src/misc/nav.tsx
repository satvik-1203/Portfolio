import React from "react";

export const Rectangle = () => (
  <nav>
    <svg
      width="40"
      height="6"
      viewBox="0 0 40 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.664795H40V5.66479H0V0.664795Z" fill="white" />
    </svg>
  </nav>
);

export interface INavOption {
  id: number;
  name: string;
  path: string;
}

export const navOption: INavOption[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Contact",
    path: "/contact",
  },
];
