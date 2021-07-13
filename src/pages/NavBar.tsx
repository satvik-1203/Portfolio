import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import NavDropBox from "../components/Navbar/NavDropBox";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen((prev) => !prev);
  return (
    <div>
      <NavBar openState={[open, setOpen]} />
      <AnimatePresence>
        {open && (
          <motion.div key={1}>
            <NavDropBox handleOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
