import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import { motion, useMotionValue, useViewportScroll } from "framer-motion";

const index = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={` overflow-hidden ${open && "overflow-hidden h-screen"}`}
    >
      <NavBar openState={[open, setOpen]} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact">Contact</Route>
        </Switch>
      </main>
    </motion.div>
  );
};

export default index;
