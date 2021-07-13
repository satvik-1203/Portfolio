import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import NavDropBox from "../components/Navbar/NavDropBox";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Navbar: React.FC<Props> = ({ openState }) => {
  const [open, setOpen] = openState;
  const handleOpen = () => setOpen((prev) => !prev);
  return (
    <div>
      <NavBar openState={[open, setOpen]} />
      <AnimatePresence>
        {open && (
          <motion.div className="fixed h-screen z-20 left-0 right-0" key={1}>
            <NavDropBox handleOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
