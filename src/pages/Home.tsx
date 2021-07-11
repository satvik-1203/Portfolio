import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import NavDropBox from "../components/Navbar/NavDropBox";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <NavBar openState={[open, setOpen]} />
      <AnimatePresence>
        {open && (
          <motion.div
            key={1}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <NavDropBox />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
