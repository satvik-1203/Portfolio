import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import NavDropBox from "../components/Navbar/NavDropBox";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="pt-5">
      <NavBar openState={[open, setOpen]} />
      {open && <NavDropBox />}
    </div>
  );
};

export default Home;
