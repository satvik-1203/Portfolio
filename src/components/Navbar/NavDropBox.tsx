import React from "react";
import { navOption } from "../../misc/nav";

const NavDropBox = () => {
  return (
    <div
      className="h-screen px-10 py-3 pt-20  text-white"
      style={{ backgroundColor: "#181818" }}
    >
      {navOption.map((option) => (
        <div key={option.id}>{option.name} </div>
      ))}
    </div>
  );
};

export default NavDropBox;
